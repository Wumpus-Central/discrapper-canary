(n.d(t, { b: () => D, k: () => L }), n(667532), n(775443));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(892491),
    c = n(462824),
    u = n(628274),
    _ = n(750506),
    E = n(80556),
    A = n(267102),
    f = n(188567),
    h = n(192308);
(n(134528), n(947204));
var I = n(196765);
let p = r.createContext(null);
function m(e) {
    let { modalKey: t, contextKey: n, transitionState: a, children: s } = e,
        l = r.useMemo(() => ({ modalKey: t, contextKey: n, transitionState: a }), [t, n, a]);
    return (0, i.jsx)(p.Provider, { value: l, children: s });
}
let g = (0, I.v)(() => ({}));
function T(e, t, n) {
    g.setState((i) => {
        let r = { ...i[e] };
        for (let e of t) {
            let t = (r[e] ?? 0) + n;
            t > 0 ? (r[e] = t) : delete r[e];
        }
        return { ...i, [e]: r };
    });
}
var S = n(231723),
    N = n(652215),
    C = n(409325);
let O = [_.Ay, E.Ay];
class R extends r.PureComponent {
    state = { transitionState: null };
    releaseCover = null;
    componentWillAppear = (e) => {
        this.componentWillEnter(e);
    };
    componentWillEnter = (e) => {
        let { instant: t, modalKey: n, contextKey: i } = this.props,
            r = (h.re.getState()[i] ?? []).map((e) => {
                let { key: t } = e;
                return t;
            });
        (this.releaseCover?.(),
            (this.releaseCover = (function (e, t) {
                if (0 === t.length) return () => {};
                T(e, t, 1);
                let n = !1;
                return () => {
                    n || ((n = !0), T(e, t, -1));
                };
            })(i, r.slice(0, Math.max(r.indexOf(n), 0)))),
            this.setState({ transitionState: S.ip.ENTERING }),
            setTimeout(() => {
                (this.setState({ transitionState: S.ip.ENTERED }), e?.());
            }, 300 * !t));
    };
    componentWillLeave = (e) => {
        let { instant: t } = this.props;
        (this.setState({ transitionState: S.ip.EXITING }),
            setTimeout(() => {
                (this.releaseCover?.(), this.setState({ transitionState: S.ip.EXITED }), e());
            }, 300 * !t));
    };
    componentDidUpdate = (e) => {
        if (e.isVisible !== this.props.isVisible) {
            let { transitionState: e } = this.state;
            (e === S.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                this.props.isVisible ||
                    (e !== S.ip.ENTERING && e !== S.ip.ENTERED) ||
                    this.setState({ transitionState: S.ip.HIDDEN }));
        }
    };
    componentWillUnmount() {
        this.releaseCover?.();
    }
    close = () =>
        new Promise((e) => {
            (this.props.closeModal(this.props.modalKey), setTimeout(() => e(), 300));
        });
    render() {
        let {
                render: e,
                LayerComponent: t,
                isTopModal: n,
                instant: r,
                dismissable: a,
                modalKey: l,
                contextKey: o,
            } = this.props,
            d = r ? S.ip.ENTERED : this.state.transitionState,
            c = e({ transitionState: d, onClose: this.close, dismissable: a });
        return (0, i.jsx)(t, {
            children: (0, i.jsx)("div", {
                className: s()(C.qd, !n && C.AD),
                children: (0, i.jsx)(m, { modalKey: l, contextKey: o, transitionState: d, children: c }),
            }),
        });
    }
}
function L() {
    return (0, h.TI)((0, A.Us)());
}
let y = [];
function D() {
    let e = L(),
        t = (0, h.re)((t) => (void 0 !== t[e] ? t[e] : y)),
        n = r.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = !1;
                    for (let i = e.length - 1; i >= 0; i--) {
                        let r = e[i],
                            a = e[i + 1]?.stackingBehavior,
                            s = n || "replace" === a;
                        (t.unshift({ ...r, isVisible: !s }), "replaceAll" === r.stackingBehavior && (n = !0));
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
                f._.subscribe(N.jej.MODAL_CLOSE, e),
                () => {
                    f._.unsubscribe(N.jej.MODAL_CLOSE, e);
                }
            );
        function e() {
            let e = a.current;
            null != e && null != e.onCloseRequest && !1 !== e.dismissable && e.onCloseRequest();
        }
    }, [s]);
    let l = r.useCallback(() => {
            let e = a.current;
            e?.dismissable !== !1 && f._.dispatch(N.jej.MODAL_CLOSE);
        }, []),
        E = r.useCallback(
            (t) => {
                (0, h.Oo)(t, e);
            },
            [e],
        ),
        A = O.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === _.Ay)));
    return (0, i.jsxs)(u.F, {
        component: r.Fragment,
        children: [
            O.map((e, n) => {
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
            n.map((t, r) => {
                let { key: a, Layer: s, render: l, instant: o, isVisible: d, dismissable: c } = t;
                return (0, i.jsx)(
                    R,
                    {
                        modalKey: a,
                        contextKey: e,
                        LayerComponent: s ?? _.Ay,
                        isVisible: d,
                        isTopModal: r === n.length - 1,
                        render: l,
                        closeModal: E,
                        instant: o,
                        dismissable: c,
                    },
                    a,
                );
            }),
        ],
    });
}
