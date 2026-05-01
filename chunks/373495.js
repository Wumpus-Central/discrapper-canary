"use strict";
n.d(t, { b: () => L, k: () => b }), n(667532), n(775443);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(892491),
    c = n(462824),
    d = n(868285),
    _ = n(785651),
    f = n(602853),
    h = n(661531),
    p = n(866323),
    E = n(475743),
    m = n(316933);
let g = r.forwardRef(function (e, t) {
    let n,
        r,
        s,
        o,
        {
            backdropStyle: l = u.F.SUBTLE,
            backdropInstant: c = !1,
            zIndexBoost: d = 0,
            LayerComponent: g,
            isVisible: A,
            onClose: I,
        } = e,
        T = ((n = (0, f.r)(h.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0.25 })),
        (r = (0, f.r)(h.A.colors.BACKGROUND_SCRIM).spring()),
        (s = (0, f.r)(h.A.colors.BACKGROUND_SCRIM_LIGHTBOX).spring()),
        (o = (0, f.r)(h.A.colors.OVERLAY_BACKDROP_LIGHTBOX).spring()),
        { [u.F.SUBTLE]: n, [u.F.DARK]: r, [u.F.BLUR]: r, [u.F.IMMERSIVE]: s, [u.F.LIGHTBOX]: o, [u.F.TOP_RADIAL]: r })[
            l
        ],
        S = (0, f.r)(h.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        N = 8 * (l === u.F.BLUR),
        y = { background: S, backdropFilter: "blur(0px)" },
        C = { background: T, backdropFilter: `blur(${N}px)` },
        v = (0, E.A)(c),
        O = (0, p.p)(
            A,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: c || v ? 0 : 200 },
                from: y,
                enter: C,
                leave: y,
            },
            "animate-always",
        );
    if (null == g) {
        let e = { zIndex: 1e3 + d };
        return O((t, n) =>
            n ? (0, i.jsx)(_.animated.div, { className: m.t, style: { ...t, ...e }, onClick: I }) : null,
        );
    }
    return (0, i.jsx)(g, {
        children: O((e, t) =>
            t
                ? (0, i.jsx)(_.animated.div, {
                      className: a()(m.t, m.o),
                      style:
                          l === u.F.TOP_RADIAL
                              ? {
                                    background:
                                        "radial-gradient(96.68% 96.68% at 50.04% 3.32%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.00) 100%)",
                                }
                              : e,
                      onClick: I,
                  })
                : null,
        ),
    });
});
var A = n(750506),
    I = n(80556),
    T = n(267102),
    S = n(625494),
    N = n(192308),
    y = n(231723),
    C = n(652215),
    v = n(195876);
let O = [A.Ay, I.Ay];
class R extends r.PureComponent {
    state = { transitionState: null };
    componentWillAppear = (e) => {
        this.componentWillEnter(e);
    };
    componentWillEnter = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: y.ip.ENTERING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: y.ip.ENTERED }), e?.();
                },
                t ? 0 : y.xt,
            );
    };
    componentWillLeave = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: y.ip.EXITING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: y.ip.EXITED }), e();
                },
                t ? 0 : y.xt,
            );
    };
    componentDidUpdate = (e) => {
        if (e.isVisible !== this.props.isVisible) {
            let { transitionState: e } = this.state;
            e === y.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                this.props.isVisible ||
                    (e !== y.ip.ENTERING && e !== y.ip.ENTERED) ||
                    this.setState({ transitionState: y.ip.HIDDEN });
        }
    };
    close = () =>
        new Promise((e) => {
            this.props.closeModal(this.props.modalKey), setTimeout(() => e(), y.xt);
        });
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: r, dismissable: s } = this.props,
            o = e({
                transitionState: r ? y.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: s,
            });
        return (0, i.jsx)(t, { children: (0, i.jsx)("div", { className: a()(v.qd, !n && v.AD), children: o }) });
    }
}
function b() {
    return (0, N.modalContextFromAppContext)((0, T.Us)());
}
let D = [];
function L() {
    let e = b(),
        t = (0, N.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : D)),
        n = r.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = !1;
                    for (let i = e.length - 1; i >= 0; i--) {
                        let r = e[i],
                            s = e[i + 1]?.stackingBehavior,
                            a = n || "replace" === s;
                        t.unshift({ ...r, isVisible: !a }), "replaceAll" === r.stackingBehavior && (n = !0);
                    }
                    return t;
                })(t),
            [t],
        ),
        s = r.useRef(void 0);
    r.useLayoutEffect(() => {
        s.current = t[t.length - 1];
    }, [t]);
    let a = t.length > 0;
    r.useLayoutEffect(() => {
        if (!a) return;
        let e = () => {
            let e = s.current;
            null != e && null != e.onCloseRequest && !1 !== e.dismissable && e.onCloseRequest();
        };
        return (
            S._.subscribe(C.jej.MODAL_CLOSE, e),
            () => {
                S._.unsubscribe(C.jej.MODAL_CLOSE, e);
            }
        );
    }, [a]);
    let o = r.useCallback(() => {
            let e = s.current;
            e?.dismissable !== !1 && S._.dispatch(C.jej.MODAL_CLOSE);
        }, []),
        _ = r.useCallback(
            (t) => {
                (0, N.closeModal)(t, e);
            },
            [e],
        ),
        f = O.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === A.Ay)));
    return (0, i.jsxs)(d.F, {
        component: r.Fragment,
        children: [
            O.map((e, n) => {
                let r = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === A.Ay)),
                    s = r?.backdropStyle ?? u.F.DARK;
                return (0, c.s)(s)
                    ? (0, i.jsx)(
                          e,
                          {
                              children: (0, i.jsx)(c.p, {
                                  variant: s === u.F.LIGHTBOX || s === u.F.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: r?.instant ? "instant" : "default",
                                  isVisible: f[n],
                                  onClick: o,
                              }),
                          },
                          `layer-${n}`,
                      )
                    : (0, i.jsx)(
                          g,
                          {
                              isVisible: f[n],
                              backdropStyle: s,
                              onClose: o,
                              LayerComponent: e,
                              backdropInstant: r?.instant,
                          },
                          `layer-${n}`,
                      );
            }),
            n.map((e, t) => {
                let { key: r, Layer: s, render: a, instant: o, isVisible: l, dismissable: u } = e;
                return (0, i.jsx)(
                    R,
                    {
                        modalKey: r,
                        LayerComponent: s ?? A.Ay,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: a,
                        closeModal: _,
                        instant: o,
                        dismissable: u,
                    },
                    r,
                );
            }),
        ],
    });
}
