n.d(t, { Z: () => _ }), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(834427),
    a = n(579806),
    s = n(403182),
    l = n(358085),
    c = n(861990);
function u(e, t, n) {
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
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    let t = ['openFile'];
    e.multiple && t.push('multiSelections');
    let n = e.filters;
    a.Z.fileManager
        .openFiles(
            {
                properties: t,
                filters: n
            },
            c.zz
        )
        .then((t) => {
            let n = t.map((e) => s.qF(e));
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
class p extends i.Component {
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, r.jsx)(
            o.S,
            d(
                {
                    ref: this.setRef,
                    handleNativeClick: f,
                    embedded: (0, l.isDesktop)()
                },
                this.props
            )
        );
    }
    constructor(e) {
        super(e), u(this, '_ref', i.createRef()), (this.setRef = this.setRef.bind(this));
    }
}
let _ = p;
