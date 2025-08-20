n.d(t, {
    n: () => R,
    v: () => A,
}),
    n(388685),
    n(290780),
    n(415506),
    n(482853);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(215569),
    u = n(770278),
    d = n(481060),
    f = n(40851),
    _ = n(314910),
    p = n(429142),
    h = n(585483),
    m = n(952265),
    g = n(602091),
    E = n(981631),
    b = n(233477);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = [_.ZP, p.ZP];
class S extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i } = this.props,
            a = i ? g.Dv.ENTERED : this.state.transitionState;
        return (0, r.jsx)(t, {
            children: (0, r.jsx)("div", {
                className: o()(b.layer, !n && b.inactive),
                children: e({
                    transitionState: a,
                    onClose: this.close,
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "state", { transitionState: null }),
            y(this, "componentWillAppear", (e) => {
                this.componentWillEnter(e);
            }),
            y(this, "componentWillEnter", (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: g.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: g.Dv.ENTERED }), null == e || e();
                        },
                        t ? 0 : g.CT,
                    );
            }),
            y(this, "componentWillLeave", (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: g.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: g.Dv.EXITED }), e();
                        },
                        t ? 0 : g.CT,
                    );
            }),
            y(this, "componentDidUpdate", (e) => {
                if (e.isVisible !== this.props.isVisible) {
                    let { transitionState: e } = this.state;
                    e === g.Dv.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                        this.props.isVisible ||
                            (e !== g.Dv.ENTERING && e !== g.Dv.ENTERED) ||
                            this.setState({ transitionState: g.Dv.HIDDEN });
                }
            }),
            y(
                this,
                "close",
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), g.CT);
                    }),
            );
    }
}
function A() {
    return (0, m.Vn)((0, f.bp)());
}
function C(e) {
    let t = [],
        n = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        var r;
        let a = e[i],
            o = null == (r = e[i + 1]) ? void 0 : r.stackingBehavior,
            s = n || "replace" === o;
        t.unshift(I(O({}, a), { isVisible: !s })), "replaceAll" === a.stackingBehavior && (n = !0);
    }
    return t;
}
let N = [];
function R() {
    let e = A(),
        t = (0, m.s9)((t) => (void 0 !== t[e] ? t[e] : N)),
        n = i.useMemo(() => C(t), [t]),
        a = i.useRef(void 0);
    i.useLayoutEffect(() => {
        a.current = t[t.length - 1];
    }, [t]);
    let o = t.length > 0;
    i.useLayoutEffect(() => {
        if (!o) return;
        let e = () => {
            let e = a.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        };
        return (
            h.S.subscribe(E.CkL.MODAL_CLOSE, e),
            () => {
                h.S.unsubscribe(E.CkL.MODAL_CLOSE, e);
            }
        );
    }, [o]);
    let s = i.useCallback(() => {
            h.S.dispatch(E.CkL.MODAL_CLOSE);
        }, []),
        f = i.useCallback(
            (t) => {
                (0, m.Mr)(t, e);
            },
            [e],
        ),
        p = T.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === _.ZP)));
    return (0, r.jsxs)(c.W, {
        component: i.Fragment,
        children: [
            T.map((e, n) => {
                var i;
                let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === _.ZP)),
                    o = null != (i = null == a ? void 0 : a.backdropStyle) ? i : d.fCB.DARK;
                return (0, d.OLG)(o)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(d.ZMr, {
                                  variant: o === d.fCB.LIGHTBOX || o === d.fCB.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: (null == a ? void 0 : a.instant) ? "instant" : "default",
                                  isVisible: p[n],
                                  onClick: s,
                              }),
                          },
                          "layer-".concat(n),
                      )
                    : (0, r.jsx)(
                          u.Z,
                          {
                              isVisible: p[n],
                              backdropStyle: o,
                              onClose: s,
                              LayerComponent: e,
                              backdropInstant: null == a ? void 0 : a.instant,
                          },
                          "layer-".concat(n),
                      );
            }),
            n.map((e, t) => {
                let { key: i, Layer: a, render: o, instant: s, isVisible: l } = e;
                return (0, r.jsx)(
                    S,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : _.ZP,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: o,
                        closeModal: f,
                        instant: s,
                    },
                    i,
                );
            }),
        ],
    });
}
