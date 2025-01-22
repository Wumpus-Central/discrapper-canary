var i = r(653041);
var a = r(200651),
    o = r(192379),
    s = r(834427),
    l = r(579806),
    u = r(403182),
    c = r(358085),
    d = r(861990);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function p(e) {
    let n = ['openFile'];
    e.multiple && n.push('multiSelections');
    let r = e.filters;
    l.Z.fileManager
        .openFiles(
            {
                properties: n,
                filters: r
            },
            d.zz
        )
        .then((n) => {
            let r = n.map((e) => u.qF(e));
            null != r &&
                e.onChange({
                    stopPropagation: () => null,
                    preventDefault: () => null,
                    currentTarget: { files: r }
                });
        })
        .catch((n) => {
            e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: null,
                    err: n
                }
            });
        });
}
class h extends o.Component {
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, a.jsx)(s.S, {
            ref: this.setRef,
            handleNativeClick: p,
            embedded: (0, c.isDesktop)(),
            ...this.props
        });
    }
    constructor(e) {
        super(e), f(this, '_ref', o.createRef()), (this.setRef = this.setRef.bind(this));
    }
}
n.Z = h;
