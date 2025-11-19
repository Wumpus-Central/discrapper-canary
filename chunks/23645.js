n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(817080),
    a = n(579806),
    o = n(358085);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends r.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return "function" == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        a.Z.fileManager.saveWithDialog(e, t);
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
        super(...e),
            s(this, "handleFileDownload", (e) => {
                e.preventDefault();
                let t = this.getFileContents(),
                    { fileName: n, onDownload: r } = this.props;
                o.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r();
            });
    }
}
