"use strict";
n.d(t, { b: () => N, k: () => S }), n(667532), n(775443);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(892491),
    c = n(462824),
    d = n(868285),
    _ = n(750506),
    h = n(80556),
    f = n(267102),
    p = n(625494),
    E = n(192308),
    m = n(231723),
    g = n(652215),
    A = n(195876);
let I = [_.Ay, h.Ay];
class T extends r.PureComponent {
    state = { transitionState: null };
    componentWillAppear = (e) => {
        this.componentWillEnter(e);
    };
    componentWillEnter = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: m.ip.ENTERING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: m.ip.ENTERED }), e?.();
                },
                t ? 0 : m.xt,
            );
    };
    componentWillLeave = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: m.ip.EXITING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: m.ip.EXITED }), e();
                },
                t ? 0 : m.xt,
            );
    };
    componentDidUpdate = (e) => {
        if (e.isVisible !== this.props.isVisible) {
            let { transitionState: e } = this.state;
            e === m.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                this.props.isVisible ||
                    (e !== m.ip.ENTERING && e !== m.ip.ENTERED) ||
                    this.setState({ transitionState: m.ip.HIDDEN });
        }
    };
    close = () =>
        new Promise((e) => {
            this.props.closeModal(this.props.modalKey), setTimeout(() => e(), m.xt);
        });
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: r, dismissable: s } = this.props,
            o = e({
                transitionState: r ? m.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: s,
            });
        return (0, i.jsx)(t, { children: (0, i.jsx)("div", { className: a()(A.qd, !n && A.AD), children: o }) });
    }
}
function S() {
    return (0, E.modalContextFromAppContext)((0, f.Us)());
}
let y = [];
function N() {
    let e = S(),
        t = (0, E.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : y)),
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
            p._.subscribe(g.jej.MODAL_CLOSE, e),
            () => {
                p._.unsubscribe(g.jej.MODAL_CLOSE, e);
            }
        );
    }, [a]);
    let o = r.useCallback(() => {
            let e = s.current;
            e?.dismissable !== !1 && p._.dispatch(g.jej.MODAL_CLOSE);
        }, []),
        h = r.useCallback(
            (t) => {
                (0, E.closeModal)(t, e);
            },
            [e],
        ),
        f = I.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === _.Ay)));
    return (0, i.jsxs)(d.F, {
        component: r.Fragment,
        children: [
            I.map((e, n) => {
                let r = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === _.Ay)),
                    s = r?.backdropStyle ?? u.F.DARK;
                return (0, i.jsx)(
                    e,
                    {
                        children: (0, i.jsx)(c.p, {
                            variant:
                                s === u.F.LIGHTBOX || s === u.F.IMMERSIVE
                                    ? "lightbox"
                                    : s === u.F.BLUR
                                      ? "experimental_blur"
                                      : "default",
                            animationVariant: r?.instant ? "instant" : "default",
                            isVisible: f[n],
                            onClick: o,
                        }),
                    },
                    `layer-${n}`,
                );
            }),
            n.map((e, t) => {
                let { key: r, Layer: s, render: a, instant: o, isVisible: l, dismissable: u } = e;
                return (0, i.jsx)(
                    T,
                    {
                        modalKey: r,
                        LayerComponent: s ?? _.Ay,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: a,
                        closeModal: h,
                        instant: o,
                        dismissable: u,
                    },
                    r,
                );
            }),
        ],
    });
}
