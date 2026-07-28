"use strict";
n.d(t, { b: () => C, k: () => S }), n(667532), n(775443);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(892491),
    c = n(462824),
    u = n(868285),
    _ = n(750506),
    E = n(80556),
    A = n(267102),
    h = n(625494),
    I = n(192308),
    f = n(231723),
    p = n(652215),
    T = n(911260);
let m = [_.Ay, E.Ay];
class g extends r.PureComponent {
    state = { transitionState: null };
    componentWillAppear = (e) => {
        this.componentWillEnter(e);
    };
    componentWillEnter = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: f.ip.ENTERING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: f.ip.ENTERED }), e?.();
                },
                t ? 0 : f.xt,
            );
    };
    componentWillLeave = (e) => {
        let { instant: t } = this.props;
        this.setState({ transitionState: f.ip.EXITING }),
            setTimeout(
                () => {
                    this.setState({ transitionState: f.ip.EXITED }), e();
                },
                t ? 0 : f.xt,
            );
    };
    componentDidUpdate = (e) => {
        if (e.isVisible !== this.props.isVisible) {
            let { transitionState: e } = this.state;
            e === f.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                this.props.isVisible ||
                    (e !== f.ip.ENTERING && e !== f.ip.ENTERED) ||
                    this.setState({ transitionState: f.ip.HIDDEN });
        }
    };
    close = () =>
        new Promise((e) => {
            this.props.closeModal(this.props.modalKey), setTimeout(() => e(), f.xt);
        });
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: r, dismissable: a } = this.props,
            l = e({
                transitionState: r ? f.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: a,
            });
        return (0, i.jsx)(t, { children: (0, i.jsx)("div", { className: s()(T.qd, !n && T.AD), children: l }) });
    }
}
function S() {
    return (0, I.modalContextFromAppContext)((0, A.Us)());
}
let N = [];
function C() {
    let e = S(),
        t = (0, I.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : N)),
        n = r.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = !1;
                    for (let i = e.length - 1; i >= 0; i--) {
                        let r = e[i],
                            a = e[i + 1]?.stackingBehavior,
                            s = n || "replace" === a;
                        t.unshift({ ...r, isVisible: !s }), "replaceAll" === r.stackingBehavior && (n = !0);
                    }
                    return t;
                })(t),
            [t],
        ),
        a = r.useRef(void 0);
    r.useLayoutEffect(() => {
        a.current = t[t.length - 1];
    }, [t]);
    let s = t.length > 0;
    r.useLayoutEffect(() => {
        if (s)
            return (
                h._.subscribe(p.jej.MODAL_CLOSE, e),
                () => {
                    h._.unsubscribe(p.jej.MODAL_CLOSE, e);
                }
            );
        function e() {
            let e = a.current;
            null != e && null != e.onCloseRequest && !1 !== e.dismissable && e.onCloseRequest();
        }
    }, [s]);
    let l = r.useCallback(() => {
            let e = a.current;
            e?.dismissable !== !1 && h._.dispatch(p.jej.MODAL_CLOSE);
        }, []),
        E = r.useCallback(
            (t) => {
                (0, I.closeModal)(t, e);
            },
            [e],
        ),
        A = m.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === _.Ay)));
    return (0, i.jsxs)(u.F, {
        component: r.Fragment,
        children: [
            m.map((e, n) => {
                let r = o().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === _.Ay)),
                    a = r?.backdropStyle ?? d.F.DARK;
                return (0, i.jsx)(
                    e,
                    {
                        children: (0, i.jsx)(c.p, {
                            variant:
                                a === d.F.LIGHTBOX || a === d.F.IMMERSIVE
                                    ? "lightbox"
                                    : a === d.F.BLUR
                                      ? "experimental_blur"
                                      : "default",
                            animationVariant: r?.instant ? "instant" : "default",
                            isVisible: A[n],
                            onClick: l,
                        }),
                    },
                    `layer-${n}`,
                );
            }),
            n.map((e, t) => {
                let { key: r, Layer: a, render: s, instant: l, isVisible: o, dismissable: d } = e;
                return (0, i.jsx)(
                    g,
                    {
                        modalKey: r,
                        LayerComponent: a ?? _.Ay,
                        isVisible: o,
                        isTopModal: t === n.length - 1,
                        render: s,
                        closeModal: E,
                        instant: l,
                        dismissable: d,
                    },
                    r,
                );
            }),
        ],
    });
}
