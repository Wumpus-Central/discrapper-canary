n.d(t, {
    Xv: () => b,
    mh: () => E,
    wL: () => m,
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
    u = n(793906);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = u.layerContainer;
class p extends i.Component {
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
            d(this, "state", { layerContainerElement: null }),
            d(this, "setLayerContainerElement", (e) => {
                this.setState({ layerContainerElement: e });
            }),
            d(
                this,
                "getContextValue",
                (0, c.oH)((e) => [e, this.setLayerContainerElement]),
            );
    }
}
let h = (e) => {
    let { layerContext: t, className: n } = e,
        [, a] = i.useContext(t),
        s = i.useCallback(
            (e) => {
                a(e);
            },
            [a],
        );
    return (0, r.jsx)("div", {
        className: o()(_, n),
        ref: s,
    });
};
function m(e) {
    let t = (0, l.sK)(e, u.layerContainer);
    if (null == t) throw Error("Unexpected missing parent container");
    return t;
}
function g(e, t) {
    let [n] = e;
    return null == n ? null : s.createPortal(i.Children.only(t), n);
}
let E = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, r.jsx)(t.Consumer, { children: (e) => g(e, n) });
};
function b(e) {
    let t = i.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) => (0, r.jsx)(p, f({ layerContext: t }, e)),
            LayerContainer: (e) => (0, r.jsx)(h, f({ layerContext: t }, e)),
            Layer: (e) => (0, r.jsx)(E, f({ layerContext: t }, e)),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = "".concat(e, "LayerProvider")),
        (n.LayerContainer.displayName = "".concat(e, "LayerContainer")),
        (n.Layer.displayName = "".concat(e, "Layer")),
        n
    );
}
