n.d(t, {
    b: () => R,
    k: () => T,
}),
    n(896048),
    n(667532),
    n(65821),
    n(775443);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(158954),
    u = n(73939),
    d = n(626494),
    f = n(750506),
    p = n(80556),
    _ = n(267102),
    h = n(203982),
    m = n(192308),
    g = n(231723),
    E = n(652215),
    b = n(727423);
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
function A(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = [f.Ay, p.Ay];
class I extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i, dismissable: a } = this.props,
            o = e({
                transitionState: i ? g.ip.ENTERED : this.state.transitionState,
                onClose: this.close,
                dismissable: a,
            });
        return (0, r.jsx)(t, {
            children: (0, r.jsx)("div", {
                className: s()(b.qd, !n && b.AD),
                children: o,
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
                this.setState({ transitionState: g.ip.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: g.ip.ENTERED }), null == e || e();
                        },
                        t ? 0 : g.xt,
                    );
            }),
            y(this, "componentWillLeave", (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: g.ip.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: g.ip.EXITED }), e();
                        },
                        t ? 0 : g.xt,
                    );
            }),
            y(this, "componentDidUpdate", (e) => {
                if (e.isVisible !== this.props.isVisible) {
                    let { transitionState: e } = this.state;
                    e === g.ip.HIDDEN && this.props.isVisible && this.componentWillEnter(),
                        this.props.isVisible ||
                            (e !== g.ip.ENTERING && e !== g.ip.ENTERED) ||
                            this.setState({ transitionState: g.ip.HIDDEN });
                }
            }),
            y(
                this,
                "close",
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), g.xt);
                    }),
            );
    }
}
function T() {
    return (0, m.modalContextFromAppContext)((0, _.Us)());
}
function C(e) {
    let t = [],
        n = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        var r;
        let a = e[i],
            s = null == (r = e[i + 1]) ? void 0 : r.stackingBehavior,
            o = n || "replace" === s;
        t.unshift(v(O({}, a), { isVisible: !o })), "replaceAll" === a.stackingBehavior && (n = !0);
    }
    return t;
}
let N = [];
function R() {
    let e = T(),
        t = (0, m.useModalsStore)((t) => (void 0 !== t[e] ? t[e] : N)),
        n = i.useMemo(() => C(t), [t]),
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
            (null == e ? void 0 : e.dismissable) !== !1 && h._.dispatch(E.jej.MODAL_CLOSE);
        }, []),
        p = i.useCallback(
            (t) => {
                (0, m.closeModal)(t, e);
            },
            [e],
        ),
        _ = S.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === f.Ay)));
    return (0, r.jsxs)(u.F, {
        component: i.Fragment,
        children: [
            S.map((e, n) => {
                var i;
                let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === f.Ay)),
                    s = null != (i = null == a ? void 0 : a.backdropStyle) ? i : c.F2Z.DARK;
                return (0, c.sC$)(s)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(c.pkL, {
                                  variant: s === c.F2Z.LIGHTBOX || s === c.F2Z.IMMERSIVE ? "lightbox" : "default",
                                  animationVariant: (null == a ? void 0 : a.instant) ? "instant" : "default",
                                  isVisible: _[n],
                                  onClick: o,
                              }),
                          },
                          "layer-".concat(n),
                      )
                    : (0, r.jsx)(
                          d.A,
                          {
                              isVisible: _[n],
                              backdropStyle: s,
                              onClose: o,
                              LayerComponent: e,
                              backdropInstant: null == a ? void 0 : a.instant,
                          },
                          "layer-".concat(n),
                      );
            }),
            n.map((e, t) => {
                let { key: i, Layer: a, render: s, instant: o, isVisible: l, dismissable: c } = e;
                return (0, r.jsx)(
                    I,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : f.Ay,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: s,
                        closeModal: p,
                        instant: o,
                        dismissable: c,
                    },
                    i,
                );
            }),
        ],
    });
}
