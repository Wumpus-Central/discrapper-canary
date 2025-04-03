n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(817080),
    s = n(579806),
    a = n(358085);
class l extends r.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return 'function' == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        s.Z.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], { type: this.props.contentType });
        (0, i.saveAs)(n, t);
    }
    render() {
        let { children: e } = this.props,
            t = r.Children.only(e);
        return r.cloneElement(t, { onClick: this.handleFileDownload });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleFileDownload'),
            (n = (e) => {
                e.preventDefault();
                let t = this.getFileContents(),
                    { fileName: n, onDownload: r } = this.props;
                a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r();
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
