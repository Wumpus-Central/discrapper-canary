n.d(t, {
    n: () => S,
    v: () => T
}),
    n(47120),
    n(411104),
    n(852437);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(215569),
    c = n(481060),
    d = n(40851),
    f = n(314910),
    _ = n(429142),
    p = n(585483),
    h = n(952265),
    m = n(602091),
    g = n(981631),
    E = n(211219);
function v(e, t, n) {
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
let y = [f.ZP, _.ZP];
class I extends r.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: r } = this.props,
            a = r ? m.Dv.ENTERED : this.state.transitionState;
        return (0, i.jsx)(t, {
            children: (0, i.jsx)('div', {
                className: s()(E.layer, !n && E.hidden),
                children: e({
                    transitionState: a,
                    onClose: this.close
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { transitionState: null }),
            v(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            v(this, 'componentWillEnter', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: m.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: m.Dv.ENTERED }), null == e || e();
                        },
                        t ? 0 : m.CT
                    );
            }),
            v(this, 'componentWillLeave', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: m.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: m.Dv.EXITED }), e();
                        },
                        t ? 0 : m.CT
                    );
            }),
            v(this, 'componentDidUpdate', (e) => {
                if (e.isTopModal !== this.props.isTopModal) {
                    let { transitionState: e } = this.state;
                    e === m.Dv.HIDDEN && this.props.isTopModal && this.componentWillEnter(), this.props.isTopModal || (e !== m.Dv.ENTERING && e !== m.Dv.ENTERED) || this.setState({ transitionState: m.Dv.HIDDEN });
                }
            }),
            v(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), m.CT);
                    })
            );
    }
}
function T() {
    return (0, h.Vn)((0, d.bp)());
}
let b = [];
function S() {
    let e = T(),
        t = (0, h.s9)((t) => (void 0 !== t[e] ? t[e] : b)),
        n = r.useRef();
    r.useLayoutEffect(() => {
        n.current = t[t.length - 1];
    }, [t]);
    let a = t.length > 0;
    r.useLayoutEffect(() => {
        if (!a) return;
        let e = () => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        };
        return (
            p.S.subscribe(g.CkL.MODAL_CLOSE, e),
            () => {
                p.S.unsubscribe(g.CkL.MODAL_CLOSE, e);
            }
        );
    }, [a]);
    let s = r.useCallback(() => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        o = r.useCallback(
            (t) => {
                (0, h.Mr)(t, e);
            },
            [e]
        ),
        d = y.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === f.ZP)));
    return (0, i.jsxs)(u.W, {
        component: r.Fragment,
        children: [
            y.map((e, n) => {
                var r;
                let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === f.ZP));
                return (0, i.jsx)(
                    c.YMn,
                    {
                        isVisible: d[n],
                        backdropStyle: null !== (r = null == a ? void 0 : a.backdropStyle) && void 0 !== r ? r : c.fCB.DARK,
                        onClose: s,
                        LayerComponent: e,
                        backdropInstant: null == a ? void 0 : a.instant
                    },
                    'layer-'.concat(n)
                );
            }),
            t.map((e, n) => {
                let { key: r, Layer: a, render: s, instant: l } = e;
                return (0, i.jsx)(
                    I,
                    {
                        modalKey: r,
                        LayerComponent: null != a ? a : f.ZP,
                        isTopModal: n === t.length - 1,
                        render: s,
                        closeModal: o,
                        instant: l
                    },
                    r
                );
            })
        ]
    });
}
