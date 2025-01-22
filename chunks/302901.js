r.d(n, {
    Og: function () {
        return m;
    },
    Xv: function () {
        return I;
    },
    li: function () {
        return g;
    },
    mh: function () {
        return b;
    },
    px: function () {
        return E;
    },
    wL: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(512722),
    c = r.n(u),
    d = r(995295),
    f = r(251625),
    p = r(872801),
    h = r(905298);
function _(e, n, r) {
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
let m = h.layerContainer;
class g extends o.Component {
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: n } = this.props,
            { layerContainerElement: r } = this.state;
        return (0, a.jsx)(e.Provider, {
            value: this.getContextValue(r),
            children: n
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
                (0, f.oH)((e) => [e, this.setLayerContainerElement])
            );
    }
}
let E = (e) => {
    let { layerContext: n, className: r } = e,
        [, i] = o.useContext(n);
    return (0, a.jsx)('div', {
        className: l()(m, r),
        ref: i
    });
};
function v(e) {
    let n = (0, p.Z)(e, h.layerContainer);
    return c()(null != n, 'Unexpected missing parent container'), n;
}
function y(e, n) {
    let [r] = e;
    return null == r ? null : d.createPortal(o.Children.only(n), r);
}
let b = (e) => {
    let { layerContext: n, children: r } = e;
    return (0, a.jsx)(n.Consumer, { children: (e) => y(e, r) });
};
function I(e) {
    let n = o.createContext([null, () => {}]),
        r = {
            LayerProvider: (e) =>
                (0, a.jsx)(g, {
                    layerContext: n,
                    ...e
                }),
            LayerContainer: (e) =>
                (0, a.jsx)(E, {
                    layerContext: n,
                    ...e
                }),
            Layer: (e) =>
                (0, a.jsx)(b, {
                    layerContext: n,
                    ...e
                }),
            layerContext: n
        };
    return (r.LayerProvider.displayName = ''.concat(e, 'LayerProvider')), (r.LayerContainer.displayName = ''.concat(e, 'LayerContainer')), (r.Layer.displayName = ''.concat(e, 'Layer')), r;
}
