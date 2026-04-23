"use strict";
n.d(t, { b: () => b, k: () => D }), n(667532), n(775443);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    d = n(892491),
    _ = n(462824),
    u = n(73939),
    c = n(419354),
    E = n(602853),
    h = n(661531),
    m = n(866323),
    f = n(475743),
    g = n(316933);
let p = r.forwardRef(function (e, t) {
    let n,
        r,
        s,
        o,
        {
            backdropStyle: l = d.F.SUBTLE,
            backdropInstant: _ = !1,
            zIndexBoost: u = 0,
            LayerComponent: p,
            isVisible: A,
            onClose: I,
        } = e,
        T = ((n = (0, E.r)(h.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0.25 })),
        (r = (0, E.r)(h.A.colors.BACKGROUND_SCRIM).spring()),
        (s = (0, E.r)(h.A.colors.BACKGROUND_SCRIM_LIGHTBOX).spring()),
        (o = (0, E.r)(h.A.colors.OVERLAY_BACKDROP_LIGHTBOX).spring()),
        { [d.F.SUBTLE]: n, [d.F.DARK]: r, [d.F.BLUR]: r, [d.F.IMMERSIVE]: s, [d.F.LIGHTBOX]: o, [d.F.TOP_RADIAL]: r })[
            l
        ],
        S = (0, E.r)(h.A.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE).spring({ opacity: 0 }),
        N = 8 * (l === d.F.BLUR),
        C = { background: S, backdropFilter: "blur(0px)" },
        R = { background: T, backdropFilter: `blur(${N}px)` },
        O = (0, f.A)(_),
        y = (0, m.p)(
            A,
            {
                keys: (e) => (e ? "backdrop" : "empty"),
                config: { duration: _ || O ? 0 : 200 },
                from: C,
                enter: R,
                leave: C,
            },
            "animate-always",
        );
    if (null == p) {
        let e = { zIndex: 1e3 + u };
        return y((t, n) =>
            n ? (0, i.jsx)(c.animated.div, { className: g.t, style: { ...t, ...e }, onClick: I }) : null,
        );
    }
    return (0, i.jsx)(p, {
        children: y((e, t) =>
            t
                ? (0, i.jsx)(c.animated.div, {
                      className: a()(g.t, g.o),
                      style:
                          l === d.F.TOP_RADIAL
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
    C = n(231723),
    R = n(652215),
    O = n(195876);
let y = [A.Ay, I.Ay];
class v extends r.PureComponent {
    state = { transitionState: null };
    componentWillAppear = (e) => {
        this.componentWillEnter(e);
    };
    componentWillEnter = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: C.ip.ENTERING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: C.ip.ENTERED }), e?.();
                },
                t ? 0 : C.xt,
            );
    };
    componentWillLeave = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: C.ip.EXITING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: C.ip.EXITED }), e();
                },
                t ? 0 : C.xt,
            );
    };
    componentDidUpdate = (e) => {
        if (e.isVisible !== this.props.isVisible) {
            let { transitionState: e } = this.state;
            e === C.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                this.props.isVisible ||
                    (e !== C.ip.ENTERING && e !== C.ip.ENTERED) ||
                    this.setState({ transitionState: C.ip.HIDDEN });
        }
    };
    close = () =>
        new Promise((e) => {
            this.props.closeModal(this.props.modalKey), setTimeout(() => e(), C.xt);
        });
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: r, dismissable: s } = this.props,
            o = e({
                transitionState: r ? C.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: s,
            });
        return (0, i.jsx)(t, { children: (0, i.jsx)("div", { className: a()(O.qd, !n && O.AD), children: o }) });
    }
}
function D() {
    return (0, N.modalContextFromAppContext)((0, T.Us)());
}
let L = [];
function b() {
    let e = D(),
        t = (0, N.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : L)),
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
            S._.subscribe(R.jej.MODAL_CLOSE, e),
            () => {
                S._.unsubscribe(R.jej.MODAL_CLOSE, e);
            }
        );
    }, [a]);
    let o = r.useCallback(() => {
            let e = s.current;
            e?.dismissable !== !1 && S._.dispatch(R.jej.MODAL_CLOSE);
        }, []),
        c = r.useCallback(
            (t) => {
                (0, N.closeModal)(t, e);
            },
            [e],
        ),
        E = y.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === A.Ay)));
    return (0, i.jsxs)(u.F, {
        component: r.Fragment,
        children: [
            y.map((e, n) => {
                let r = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === A.Ay)),
                    s = r?.backdropStyle ?? d.F.DARK;
                return (0, _.s)(s)
                    ? (0, i.jsx)(
                          e,
                          {
                              children: (0, i.jsx)(_.p, {
                                  variant: s === d.F.LIGHTBOX || s === d.F.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: r?.instant ? "instant" : "default",
                                  isVisible: E[n],
                                  onClick: o,
                              }),
                          },
                          `layer-${n}`,
                      )
                    : (0, i.jsx)(
                          p,
                          {
                              isVisible: E[n],
                              backdropStyle: s,
                              onClose: o,
                              LayerComponent: e,
                              backdropInstant: r?.instant,
                          },
                          `layer-${n}`,
                      );
            }),
            n.map((e, t) => {
                let { key: r, Layer: s, render: a, instant: o, isVisible: l, dismissable: d } = e;
                return (0, i.jsx)(
                    v,
                    {
                        modalKey: r,
                        LayerComponent: s ?? A.Ay,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: a,
                        closeModal: c,
                        instant: o,
                        dismissable: d,
                    },
                    r,
                );
            }),
        ],
    });
}
