(n.d(t, {
    n: () => P,
    v: () => N
}),
    n(388685),
    n(290780),
    n(415506),
    n(482853));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(215569),
    u = n(770278),
    d = n(481060),
    f = n(40851),
    _ = n(724723),
    p = n(314910),
    h = n(429142),
    m = n(585483),
    g = n(952265),
    E = n(602091),
    b = n(981631),
    y = n(776022);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = [p.ZP, h.ZP];
class A extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i } = this.props,
            a = i ? E.Dv.ENTERED : this.state.transitionState;
        return (0, r.jsx)(t, {
            children: (0, r.jsx)('div', {
                className: o()(y.layer, !n && y.inactive),
                children: e({
                    transitionState: a,
                    onClose: this.close
                })
            })
        });
    }
    constructor(...e) {
        (super(...e),
            O(this, 'state', { transitionState: null }),
            O(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            O(this, 'componentWillEnter', (e) => {
                let { instant: t } = this.props;
                (this.setState({ transitionState: E.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            (this.setState({ transitionState: E.Dv.ENTERED }), null == e || e());
                        },
                        t ? 0 : E.CT
                    ));
            }),
            O(this, 'componentWillLeave', (e) => {
                let { instant: t } = this.props;
                (this.setState({ transitionState: E.Dv.EXITING }),
                    setTimeout(
                        () => {
                            (this.setState({ transitionState: E.Dv.EXITED }), e());
                        },
                        t ? 0 : E.CT
                    ));
            }),
            O(this, 'componentDidUpdate', (e) => {
                if (e.isVisible !== this.props.isVisible) {
                    let { transitionState: e } = this.state;
                    (e === E.Dv.HIDDEN && this.props.isVisible && this.componentWillEnter(), this.props.isVisible || (e !== E.Dv.ENTERING && e !== E.Dv.ENTERED) || this.setState({ transitionState: E.Dv.HIDDEN }));
                }
            }),
            O(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        (this.props.closeModal(this.props.modalKey), setTimeout(() => e(), E.CT));
                    })
            ));
    }
}
function N() {
    return (0, g.Vn)((0, f.bp)());
}
function C(e) {
    let t = [],
        n = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        var r;
        let a = e[i],
            o = null == (r = e[i + 1]) ? void 0 : r.stackingBehavior,
            s = n || 'replace' === o;
        (t.unshift(T(v({}, a), { isVisible: !s })), 'replaceAll' === a.stackingBehavior && (n = !0));
    }
    return t;
}
let R = [];
function P() {
    let e = N(),
        t = (0, g.s9)((t) => (void 0 !== t[e] ? t[e] : R)),
        n = i.useMemo(() => C(t), [t]),
        a = (0, _.q)('Modals'),
        o = i.useRef(void 0);
    i.useLayoutEffect(() => {
        o.current = t[t.length - 1];
    }, [t]);
    let s = t.length > 0;
    i.useLayoutEffect(() => {
        if (!s) return;
        let e = () => {
            let e = o.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        };
        return (
            m.S.subscribe(b.CkL.MODAL_CLOSE, e),
            () => {
                m.S.unsubscribe(b.CkL.MODAL_CLOSE, e);
            }
        );
    }, [s]);
    let f = i.useCallback(() => {
            let e = o.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        h = i.useCallback(
            (t) => {
                (0, g.Mr)(t, e);
            },
            [e]
        ),
        E = S.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === p.ZP)));
    return (0, r.jsxs)(c.W, {
        component: i.Fragment,
        children: [
            S.map((e, n) => {
                var i;
                let o = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === p.ZP)),
                    s = null != (i = null == o ? void 0 : o.backdropStyle) ? i : d.fCB.DARK;
                return a && (0, d.OLG)(s)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(d.ZMr, {
                                  variant: s === d.fCB.LIGHTBOX || s === d.fCB.IMMERSIVE ? 'lightbox' : 'default',
                                  animationVariant: (null == o ? void 0 : o.instant) ? 'instant' : 'default',
                                  isVisible: E[n],
                                  onClick: f
                              })
                          },
                          'layer-'.concat(n)
                      )
                    : (0, r.jsx)(
                          u.Z,
                          {
                              isVisible: E[n],
                              backdropStyle: s,
                              onClose: f,
                              LayerComponent: e,
                              backdropInstant: null == o ? void 0 : o.instant
                          },
                          'layer-'.concat(n)
                      );
            }),
            n.map((e, t) => {
                let { key: i, Layer: a, render: o, instant: s, isVisible: l } = e;
                return (0, r.jsx)(
                    A,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : p.ZP,
                        isVisible: l,
                        isTopModal: t === n.length - 1,
                        render: o,
                        closeModal: h,
                        instant: s
                    },
                    i
                );
            })
        ]
    });
}
