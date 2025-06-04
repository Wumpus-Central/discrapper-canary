n.d(t, {
    n: () => A,
    v: () => S
}),
    n(388685),
    n(415506),
    n(482853);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
let v = [p.ZP, h.ZP];
class I extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i } = this.props,
            o = i ? E.Dv.ENTERED : this.state.transitionState;
        return (0, r.jsx)(t, {
            children: (0, r.jsx)('div', {
                className: a()(y.layer, !n && y.hidden),
                children: e({
                    transitionState: o,
                    onClose: this.close
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', { transitionState: null }),
            O(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            O(this, 'componentWillEnter', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: E.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: E.Dv.ENTERED }), null == e || e();
                        },
                        t ? 0 : E.CT
                    );
            }),
            O(this, 'componentWillLeave', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: E.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: E.Dv.EXITED }), e();
                        },
                        t ? 0 : E.CT
                    );
            }),
            O(this, 'componentDidUpdate', (e) => {
                if (e.isTopModal !== this.props.isTopModal) {
                    let { transitionState: e } = this.state;
                    e === E.Dv.HIDDEN && this.props.isTopModal && this.componentWillEnter(), this.props.isTopModal || (e !== E.Dv.ENTERING && e !== E.Dv.ENTERED) || this.setState({ transitionState: E.Dv.HIDDEN });
                }
            }),
            O(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), E.CT);
                    })
            );
    }
}
function S() {
    return (0, g.Vn)((0, f.bp)());
}
let T = [];
function A() {
    let e = S(),
        t = (0, g.s9)((t) => (void 0 !== t[e] ? t[e] : T)),
        n = (0, _.q)('Modals'),
        o = i.useRef(void 0);
    i.useLayoutEffect(() => {
        o.current = t[t.length - 1];
    }, [t]);
    let a = t.length > 0;
    i.useLayoutEffect(() => {
        if (!a) return;
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
    }, [a]);
    let s = i.useCallback(() => {
            let e = o.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        f = i.useCallback(
            (t) => {
                (0, g.Mr)(t, e);
            },
            [e]
        ),
        h = v.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === p.ZP)));
    return (0, r.jsxs)(c.W, {
        component: i.Fragment,
        children: [
            v.map((e, i) => {
                var o;
                let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === p.ZP)),
                    c = null != (o = null == a ? void 0 : a.backdropStyle) ? o : d.fCB.DARK;
                return n && (0, d.OLG)(c)
                    ? (0, r.jsx)(
                          e,
                          {
                              children: (0, r.jsx)(d.ZMr, {
                                  variant: c === d.fCB.LIGHTBOX || c === d.fCB.IMMERSIVE ? 'lightbox' : 'default',
                                  animationVariant: (null == a ? void 0 : a.instant) ? 'instant' : 'default',
                                  isVisible: h[i],
                                  onClick: s
                              })
                          },
                          'layer-'.concat(i)
                      )
                    : (0, r.jsx)(
                          u.Z,
                          {
                              isVisible: h[i],
                              backdropStyle: c,
                              onClose: s,
                              LayerComponent: e,
                              backdropInstant: null == a ? void 0 : a.instant
                          },
                          'layer-'.concat(i)
                      );
            }),
            t.map((e, n) => {
                let { key: i, Layer: o, render: a, instant: s } = e;
                return (0, r.jsx)(
                    I,
                    {
                        modalKey: i,
                        LayerComponent: null != o ? o : p.ZP,
                        isTopModal: n === t.length - 1,
                        render: a,
                        closeModal: f,
                        instant: s
                    },
                    i
                );
            })
        ]
    });
}
