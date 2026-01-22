n.d(t, {
    Ay: () => y,
    J$: () => g,
    Wd: () => b,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(340287),
    l = n(621466),
    c = n(51906),
    u = n(508382),
    d = n(992910);

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

function p(e) {
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
let _ = d.n7;
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
            f(this, "state", {
                layerContainerElement: null,
            }),
            f(this, "setLayerContainerElement", (e) => {
                this.setState({
                    layerContainerElement: e,
                });
            }),
            f(
                this,
                "getContextValue",
                (0, c.L_)((e) => [e, this.setLayerContainerElement]),
            );
    }
}
let m = (e) => {
    let { layerContext: t, className: n } = e,
        [, a] = i.useContext(t),
        o = i.useCallback(
            (e) => {
                a(e);
            },
            [a],
        );
    return (0, r.jsx)("div", {
        className: s()(_, n),
        ref: o,
    });
};

function g(e) {
    let t = (0, l.p3)(e, d.n7);
    if ((null == t && (t = (0, l.wB)(e, u.IP)), null == t)) throw Error("Unexpected missing parent container");
    return t;
}

function E(e, t) {
    let [n] = e;
    return null == n ? null : o.createPortal(i.Children.only(t), n);
}
let b = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, r.jsx)(t.Consumer, {
        children: (e) => E(e, n),
    });
};

function y(e) {
    let t = i.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) =>
                (0, r.jsx)(
                    h,
                    p(
                        {
                            layerContext: t,
                        },
                        e,
                    ),
                ),
            LayerContainer: (e) =>
                (0, r.jsx)(
                    m,
                    p(
                        {
                            layerContext: t,
                        },
                        e,
                    ),
                ),
            Layer: (e) =>
                (0, r.jsx)(
                    b,
                    p(
                        {
                            layerContext: t,
                        },
                        e,
                    ),
                ),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = "".concat(e, "LayerProvider")),
        (n.LayerContainer.displayName = "".concat(e, "LayerContainer")),
        (n.Layer.displayName = "".concat(e, "Layer")),
        n
    );
}
