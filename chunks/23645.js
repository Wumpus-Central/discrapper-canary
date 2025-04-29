n.d(t, { Z: () => a }), n(388685);
var i = n(73800),
    r = n(817080),
    s = n(579806),
    l = n(358085);
class a extends i.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return 'function' == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        s.Z.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], { type: this.props.contentType });
        (0, r.saveAs)(n, t);
    }
    render() {
        let { children: e } = this.props,
            t = i.Children.only(e);
        return i.cloneElement(t, { onClick: this.handleFileDownload });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleFileDownload'),
            (n = (e) => {
                e.preventDefault();
                let t = this.getFileContents(),
                    { fileName: n, onDownload: i } = this.props;
                l.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == i || i();
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
