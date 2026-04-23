"use strict";
n.d(t, { b: () => v, k: () => y }), n(667532), n(775443);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(892491),
    c = n(462824),
    d = n(73939),
    _ = n(626494),
    f = n(750506),
    p = n(80556),
    h = n(267102),
    E = n(203982),
    m = n(192308),
    g = n(231723),
    A = n(652215),
    I = n(195876);
let T = [f.Ay, p.Ay];
class S extends i.PureComponent {
    state = { transitionState: null };
    componentWillAppear = (e) => {
        this.componentWillEnter(e);
    };
    componentWillEnter = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: g.ip.ENTERING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: g.ip.ENTERED }), e?.();
                },
                t ? 0 : g.xt,
            );
    };
    componentWillLeave = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: g.ip.EXITING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: g.ip.EXITED }), e();
                },
                t ? 0 : g.xt,
            );
    };
    componentDidUpdate = (e) => {
        if (e.isVisible !== this.props.isVisible) {
            let { transitionState: e } = this.state;
            e === g.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                this.props.isVisible ||
                    (e !== g.ip.ENTERING && e !== g.ip.ENTERED) ||
                    this.setState({ transitionState: g.ip.HIDDEN });
        }
    };
    close = () =>
        new Promise((e) => {
            this.props.closeModal(this.props.modalKey), setTimeout(() => e(), g.xt);
        });
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i, dismissable: s } = this.props,
            o = e({
                transitionState: i ? g.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: s,
            });
        return (0, r.jsx)(t, { children: (0, r.jsx)("div", { className: a()(I.qd, !n && I.AD), children: o }) });
    }
}
function y() {
    return (0, m.modalContextFromAppContext)((0, h.Us)());
}
let N = [];
function v() {
    let e = y(),
        t = (0, m.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : N)),
        n = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = !1;
                    for (let r = e.length - 1; r >= 0; r--) {
                        let i = e[r],
                            s = e[r + 1]?.stackingBehavior,
                            a = n || "replace" === s;
                        t.unshift({ ...i, isVisible: !a }), "replaceAll" === i.stackingBehavior && (n = !0);
                    }
                    return t;
                })(t),
            [t],
        ),
        s = i.useRef(void 0);
    i.useLayoutEffect(() => {
        s.current = t[t.length - 1];
    }, [t]);
    let a = t.length > 0;
    i.useLayoutEffect(() => {
        if (!a) return;
        let e = () => {
            let e = s.current;
            null != e && null != e.onCloseRequest && !1 !== e.dismissable && e.onCloseRequest();
        };
        return (
            E._.subscribe(A.jej.MODAL_CLOSE, e),
            () => {
                E._.unsubscribe(A.jej.MODAL_CLOSE, e);
            }
        );
    }, [a]);
    let o = i.useCallback(() => {
            let e = s.current;
            e?.dismissable !== !1 && E._.dispatch(A.jej.MODAL_CLOSE);
        }, []),
        p = i.useCallback(
            (t) => {
                (0, m.closeModal)(t, e);
            },
            [e],
        ),
        h = T.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === f.Ay)));
    return (0, r.jsxs)(d.F, {
        component: i.Fragment,
        children: [
            T.map((e, n) => {
                let i = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === f.Ay)),
                    s = i?.backdropStyle ?? u.F.DARK;
                return (0, c.s)(s)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(c.p, {
                                  variant: s === u.F.LIGHTBOX || s === u.F.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: i?.instant ? "instant" : "default",
                                  isVisible: h[n],
                                  onClick: o,
                              }),
                          },
                          `layer-${n}`,
                      )
                    : (0, r.jsx)(
                          _.A,
                          {
                              isVisible: h[n],
                              backdropStyle: s,
                              onClose: o,
                              LayerComponent: e,
                              backdropInstant: i?.instant,
                          },
                          `layer-${n}`,
                      );
            }),
            n.map((e, t) => {
                let { key: i, Layer: s, render: a, instant: o, isVisible: l, dismissable: u } = e;
                return (0, r.jsx)(
                    S,
                    {
                        modalKey: i,
                        LayerComponent: s ?? f.Ay,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: a,
                        closeModal: p,
                        instant: o,
                        dismissable: u,
                    },
                    i,
                );
            }),
        ],
    });
}
