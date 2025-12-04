n.d(t, {
    n: () => P,
    v: () => A,
}),
    n(388685),
    n(290780),
    n(415506),
    n(482853);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(793030),
    u = n(215569),
    d = n(770278),
    f = n(314910),
    p = n(429142),
    _ = n(728285),
    m = n(585483),
    h = n(952265),
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
function S(e, t) {
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
let I = [f.ZP, p.ZP];
class T extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i, dismissable: a } = this.props,
            s = e({
                transitionState: i ? g.Dv.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: a,
            });
        return (0, r.jsx)(t, {
            children: (0, r.jsx)("div", {
                className: o()(b.layer, !n && b.inactive),
                children: s,
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
    return (0, h.modalContextFromAppContext)((0, _.bp)());
}
function C(e) {
    let t = [],
        n = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        var r;
        let a = e[i],
            o = null == (r = e[i + 1]) ? void 0 : r.stackingBehavior,
            s = n || "replace" === o;
        t.unshift(S(O({}, a), { isVisible: !s })), "replaceAll" === a.stackingBehavior && (n = !0);
    }
    return t;
}
let N = [];
function P() {
    let e = A(),
        t = (0, h.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : N)),
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
            null != e && null != e.onCloseRequest && !1 !== e.dismissable && e.onCloseRequest();
        };
        return (
            m.S.subscribe(E.CkL.MODAL_CLOSE, e),
            () => {
                m.S.unsubscribe(E.CkL.MODAL_CLOSE, e);
            }
        );
    }, [o]);
    let s = i.useCallback(() => {
            let e = a.current;
            (null == e ? void 0 : e.dismissable) !== !1 && m.S.dispatch(E.CkL.MODAL_CLOSE);
        }, []),
        p = i.useCallback(
            (t) => {
                (0, h.closeModal)(t, e);
            },
            [e],
        ),
        _ = I.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === f.ZP)));
    return (0, r.jsxs)(u.W, {
        component: i.Fragment,
        children: [
            I.map((e, n) => {
                var i;
                let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === f.ZP)),
                    o = null != (i = null == a ? void 0 : a.backdropStyle) ? i : c.fCB.DARK;
                return (0, c.OLG)(o)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(c.ZMr, {
                                  variant: o === c.fCB.LIGHTBOX || o === c.fCB.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: (null == a ? void 0 : a.instant) ? "instant" : "default",
                                  isVisible: _[n],
                                  onClick: s,
                              }),
                          },
                          "layer-".concat(n),
                      )
                    : (0, r.jsx)(
                          d.Z,
                          {
                              isVisible: _[n],
                              backdropStyle: o,
                              onClose: s,
                              LayerComponent: e,
                              backdropInstant: null == a ? void 0 : a.instant,
                          },
                          "layer-".concat(n),
                      );
            }),
            n.map((e, t) => {
                let { key: i, Layer: a, render: o, instant: s, isVisible: l, dismissable: c } = e;
                return (0, r.jsx)(
                    T,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : f.ZP,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: o,
                        closeModal: p,
                        instant: s,
                        dismissable: c,
                    },
                    i,
                );
            }),
        ],
    });
}
