n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    o = n(817080),
    i = n(579806),
    a = n(358085);
class s extends r.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return 'function' == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        i.Z.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], { type: this.props.contentType });
        (0, o.saveAs)(n, t);
    }
    render() {
        let { children: e } = this.props,
            t = r.Children.only(e);
        return r.cloneElement(t, { onClick: this.handleFileDownload });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'handleFileDownload'),
            (r = (e) => {
                e.preventDefault();
                let t = this.getFileContents(),
                    { fileName: n, onDownload: r } = this.props;
                a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r();
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
