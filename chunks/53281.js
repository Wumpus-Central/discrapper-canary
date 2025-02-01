n.d(t, { Z: () => _ }), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(834427),
    s = n(579806),
    o = n(403182),
    l = n(358085),
    u = n(861990);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    let t = ['openFile'];
    e.multiple && t.push('multiSelections');
    let n = e.filters;
    s.Z.fileManager
        .openFiles(
            {
                properties: t,
                filters: n
            },
            u.zz
        )
        .then((t) => {
            let n = t.map((e) => o.qF(e));
            null != n &&
                e.onChange({
                    stopPropagation: () => null,
                    preventDefault: () => null,
                    currentTarget: { files: n }
                });
        })
        .catch((t) => {
            e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: null,
                    err: t
                }
            });
        });
}
class f extends r.Component {
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, i.jsx)(a.S, {
            ref: this.setRef,
            handleNativeClick: d,
            embedded: (0, l.isDesktop)(),
            ...this.props
        });
    }
    constructor(e) {
        super(e), c(this, '_ref', r.createRef()), (this.setRef = this.setRef.bind(this));
    }
}
let _ = f;
