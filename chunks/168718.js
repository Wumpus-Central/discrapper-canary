n.d(t, {
    Xv: () => y,
    mh: () => b,
    wL: () => g,
}),
    n(388685),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(603113),
    l = n(374470),
    c = n(451134),
    u = n(762328),
    d = n(793906);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = d.layerContainer;
class h extends i.Component {
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: t } = this.props,
            { layerContainerElement: n } = this.state;
        return (0, r.jsx)(e.Provider, {
            value: this.getContextValue(n),
            children: t,
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "state", { layerContainerElement: null }),
            f(this, "setLayerContainerElement", (e) => {
                this.setState({ layerContainerElement: e });
            }),
            f(
                this,
                "getContextValue",
                (0, c.oH)((e) => [e, this.setLayerContainerElement]),
            );
    }
}
let m = (e) => {
    let { layerContext: t, className: n } = e,
        [, a] = i.useContext(t),
        s = i.useCallback(
            (e) => {
                a(e);
            },
            [a],
        );
    return (0, r.jsx)("div", {
        className: o()(p, n),
        ref: s,
    });
};
function g(e) {
    let t = (0, l.sK)(e, d.layerContainer);
    if ((null == t && (t = (0, l.MD)(e, u.TA)), null == t)) throw Error("Unexpected missing parent container");
    return t;
}
function E(e, t) {
    let [n] = e;
    return null == n ? null : s.createPortal(i.Children.only(t), n);
}
let b = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, r.jsx)(t.Consumer, { children: (e) => E(e, n) });
};
function y(e) {
    let t = i.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) => (0, r.jsx)(h, _({ layerContext: t }, e)),
            LayerContainer: (e) => (0, r.jsx)(m, _({ layerContext: t }, e)),
            Layer: (e) => (0, r.jsx)(b, _({ layerContext: t }, e)),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = "".concat(e, "LayerProvider")),
        (n.LayerContainer.displayName = "".concat(e, "LayerContainer")),
        (n.Layer.displayName = "".concat(e, "Layer")),
        n
    );
}
