"use strict";
n.d(t, { b: () => C, k: () => y }), n(667532), n(775443);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(158954),
    c = n(73939),
    d = n(626494),
    _ = n(750506),
    f = n(80556),
    p = n(267102),
    h = n(203982),
    m = n(192308),
    g = n(231723),
    E = n(652215),
    A = n(727423);
let I = [_.Ay, f.Ay];
class T extends i.PureComponent {
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
        let { render: e, LayerComponent: t, isTopModal: n, instant: i, dismissable: a } = this.props,
            o = e({
                transitionState: i ? g.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: a,
            });
        return (0, r.jsx)(t, { children: (0, r.jsx)("div", { className: s()(A.qd, !n && A.AD), children: o }) });
    }
}
function y() {
    return (0, m.modalContextFromAppContext)((0, p.Us)());
}
function S(e) {
    let t = [],
        n = !1;
    for (let r = e.length - 1; r >= 0; r--) {
        let i = e[r],
            a = e[r + 1]?.stackingBehavior,
            s = n || "replace" === a;
        t.unshift({ ...i, isVisible: !s }), "replaceAll" === i.stackingBehavior && (n = !0);
    }
    return t;
}
let v = [];
function C() {
    let e = y(),
        t = (0, m.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : v)),
        n = i.useMemo(() => S(t), [t]),
        a = i.useRef(void 0);
    i.useLayoutEffect(() => {
        a.current = t[t.length - 1];
    }, [t]);
    let s = t.length > 0;
    i.useLayoutEffect(() => {
        if (!s) return;
        let e = () => {
            let e = a.current;
            null != e && null != e.onCloseRequest && !1 !== e.dismissable && e.onCloseRequest();
        };
        return (
            h._.subscribe(E.jej.MODAL_CLOSE, e),
            () => {
                h._.unsubscribe(E.jej.MODAL_CLOSE, e);
            }
        );
    }, [s]);
    let o = i.useCallback(() => {
            let e = a.current;
            e?.dismissable !== !1 && h._.dispatch(E.jej.MODAL_CLOSE);
        }, []),
        f = i.useCallback(
            (t) => {
                (0, m.closeModal)(t, e);
            },
            [e],
        ),
        p = I.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === _.Ay)));
    return (0, r.jsxs)(c.F, {
        component: i.Fragment,
        children: [
            I.map((e, n) => {
                let i = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === _.Ay)),
                    a = i?.backdropStyle ?? u.F2Z.DARK;
                return (0, u.sC$)(a)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(u.pkL, {
                                  variant: a === u.F2Z.LIGHTBOX || a === u.F2Z.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: i?.instant ? "instant" : "default",
                                  isVisible: p[n],
                                  onClick: o,
                              }),
                          },
                          `layer-${n}`,
                      )
                    : (0, r.jsx)(
                          d.A,
                          {
                              isVisible: p[n],
                              backdropStyle: a,
                              onClose: o,
                              LayerComponent: e,
                              backdropInstant: i?.instant,
                          },
                          `layer-${n}`,
                      );
            }),
            n.map((e, t) => {
                let { key: i, Layer: a, render: s, instant: o, isVisible: l, dismissable: u } = e;
                return (0, r.jsx)(
                    T,
                    {
                        modalKey: i,
                        LayerComponent: a ?? _.Ay,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: s,
                        closeModal: f,
                        instant: o,
                        dismissable: u,
                    },
                    i,
                );
            }),
        ],
    });
}
