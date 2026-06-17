"use strict";
n.d(t, { Ay: () => m, J$: () => p, Wd: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(340287),
    l = n(621466),
    u = n(51906),
    c = n(508382),
    d = n(56553);
let _ = d.n7;
class h extends r.Component {
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
        return (0, i.jsx)(e.Provider, { value: this.getContextValue(n), children: t });
    }
}
let f = (e) => {
    let { layerContext: t, className: n } = e,
        [, s] = r.useContext(t),
        o = r.useCallback(
            (e) => {
                s(e);
            },
            [s],
        );
    return (0, i.jsx)("div", { className: a()(_, n), ref: o });
};
function p(e) {
    let t = (0, l.p3)(e, d.n7);
    if ((null == t && (t = (0, l.wB)(e, c.IP)), null == t)) throw Error("Unexpected missing parent container");
    return t;
}
let E = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, i.jsx)(t.Consumer, {
        children: (e) =>
            (function (e, t) {
                let [n] = e;
                return null == n ? null : o.createPortal(r.Children.only(t), n);
            })(e, n),
    });
};
function m(e) {
    let t = r.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) => (0, i.jsx)(h, { layerContext: t, ...e }),
            LayerContainer: (e) => (0, i.jsx)(f, { layerContext: t, ...e }),
            Layer: (e) => (0, i.jsx)(E, { layerContext: t, ...e }),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = `${e}LayerProvider`),
        (n.LayerContainer.displayName = `${e}LayerContainer`),
        (n.Layer.displayName = `${e}Layer`),
        n
    );
}
