"use strict";
n.d(t, { Ay: () => m, J$: () => h, Wd: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(340287),
    l = n(621466),
    u = n(51906),
    d = n(508382),
    c = n(342505);
let _ = c.n7;
class f extends i.Component {
    state = { layerContainerElement: null };
    setLayerContainerElement = (e) => {
        this.setState({ layerContainerElement: e });
    };
    getContextValue = (0, u.L_)((e) => [e, this.setLayerContainerElement]);
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: t } = this.props,
            { layerContainerElement: n } = this.state;
        return (0, r.jsx)(e.Provider, { value: this.getContextValue(n), children: t });
    }
}
let E = (e) => {
    let { layerContext: t, className: n } = e,
        [, s] = i.useContext(t),
        o = i.useCallback(
            (e) => {
                s(e);
            },
            [s],
        );
    return (0, r.jsx)("div", { className: a()(_, n), ref: o });
};
function h(e) {
    let t = (0, l.p3)(e, c.n7);
    if ((null == t && (t = (0, l.wB)(e, d.IP)), null == t)) throw Error("Unexpected missing parent container");
    return t;
}
let p = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, r.jsx)(t.Consumer, {
        children: (e) =>
            (function (e, t) {
                let [n] = e;
                return null == n ? null : o.createPortal(i.Children.only(t), n);
            })(e, n),
    });
};
function m(e) {
    let t = i.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) => (0, r.jsx)(f, { layerContext: t, ...e }),
            LayerContainer: (e) => (0, r.jsx)(E, { layerContext: t, ...e }),
            Layer: (e) => (0, r.jsx)(p, { layerContext: t, ...e }),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = `${e}LayerProvider`),
        (n.LayerContainer.displayName = `${e}LayerContainer`),
        (n.Layer.displayName = `${e}Layer`),
        n
    );
}
