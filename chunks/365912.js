"use strict";
n.d(t, { Ay: () => f, J$: () => h, Wd: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(340287),
    o = n(621466),
    d = n(51906),
    c = n(508382),
    u = n(56553);
let _ = u.n7;
class E extends r.Component {
    state = { layerContainerElement: null };
    setLayerContainerElement = (e) => {
        this.setState({ layerContainerElement: e });
    };
    getContextValue = (0, d.L_)((e) => [e, this.setLayerContainerElement]);
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: t } = this.props,
            { layerContainerElement: n } = this.state;
        return (0, i.jsx)(e.Provider, { value: this.getContextValue(n), children: t });
    }
}
let A = (e) => {
    let { layerContext: t, className: n } = e,
        [, a] = r.useContext(t),
        l = r.useCallback(
            (e) => {
                a(e);
            },
            [a],
        );
    return (0, i.jsx)("div", { className: s()(_, n), ref: l });
};
function h(e) {
    let t = (0, o.p3)(e, u.n7);
    if ((null == t && (t = (0, o.wB)(e, c.IP)), null == t)) throw Error("Unexpected missing parent container");
    return t;
}
let I = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, i.jsx)(t.Consumer, {
        children: (e) =>
            (function (e, t) {
                let [n] = e;
                return null == n ? null : l.createPortal(r.Children.only(t), n);
            })(e, n),
    });
};
function f(e) {
    let t = r.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) => (0, i.jsx)(E, { layerContext: t, ...e }),
            LayerContainer: (e) => (0, i.jsx)(A, { layerContext: t, ...e }),
            Layer: (e) => (0, i.jsx)(I, { layerContext: t, ...e }),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = `${e}LayerProvider`),
        (n.LayerContainer.displayName = `${e}LayerContainer`),
        (n.Layer.displayName = `${e}Layer`),
        n
    );
}
