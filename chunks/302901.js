n.d(t, {
    Xv: () => y,
    mh: () => v,
    wL: () => g
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(995295),
    c = n(251625),
    d = n(872801),
    f = n(905298);
function _(e, t, n) {
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
let p = f.layerContainer;
class h extends r.Component {
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: t } = this.props,
            { layerContainerElement: n } = this.state;
        return (0, i.jsx)(e.Provider, {
            value: this.getContextValue(n),
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', { layerContainerElement: null }),
            _(this, 'setLayerContainerElement', (e) => {
                this.setState({ layerContainerElement: e });
            }),
            _(
                this,
                'getContextValue',
                (0, c.oH)((e) => [e, this.setLayerContainerElement])
            );
    }
}
let m = (e) => {
    let { layerContext: t, className: n } = e,
        [, a] = r.useContext(t);
    return (0, i.jsx)('div', {
        className: s()(p, n),
        ref: a
    });
};
function g(e) {
    let t = (0, d.Z)(e, f.layerContainer);
    return l()(null != t, 'Unexpected missing parent container'), t;
}
function E(e, t) {
    let [n] = e;
    return null == n ? null : u.createPortal(r.Children.only(t), n);
}
let v = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, i.jsx)(t.Consumer, { children: (e) => E(e, n) });
};
function y(e) {
    let t = r.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) =>
                (0, i.jsx)(h, {
                    layerContext: t,
                    ...e
                }),
            LayerContainer: (e) =>
                (0, i.jsx)(m, {
                    layerContext: t,
                    ...e
                }),
            Layer: (e) =>
                (0, i.jsx)(v, {
                    layerContext: t,
                    ...e
                }),
            layerContext: t
        };
    return (n.LayerProvider.displayName = ''.concat(e, 'LayerProvider')), (n.LayerContainer.displayName = ''.concat(e, 'LayerContainer')), (n.Layer.displayName = ''.concat(e, 'Layer')), n;
}
