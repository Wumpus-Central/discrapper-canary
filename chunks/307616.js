n.d(t, {
    n: () => S,
    v: () => O
}),
    n(47120),
    n(411104),
    n(852437);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(215569),
    u = n(481060),
    d = n(40851),
    f = n(314910),
    _ = n(429142),
    p = n(585483),
    h = n(952265),
    m = n(602091),
    g = n(981631),
    E = n(776022);
function b(e, t, n) {
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
class v extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i } = this.props,
            o = i ? m.Dv.ENTERED : this.state.transitionState;
        return (0, r.jsx)(t, {
            children: (0, r.jsx)('div', {
                className: a()(E.layer, !n && E.hidden),
                children: e({
                    transitionState: o,
                    onClose: this.close
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', { transitionState: null }),
            b(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            b(this, 'componentWillEnter', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: m.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: m.Dv.ENTERED }), null == e || e();
                        },
                        t ? 0 : m.CT
                    );
            }),
            b(this, 'componentWillLeave', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: m.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: m.Dv.EXITED }), e();
                        },
                        t ? 0 : m.CT
                    );
            }),
            b(this, 'componentDidUpdate', (e) => {
                if (e.isTopModal !== this.props.isTopModal) {
                    let { transitionState: e } = this.state;
                    e === m.Dv.HIDDEN && this.props.isTopModal && this.componentWillEnter(), this.props.isTopModal || (e !== m.Dv.ENTERING && e !== m.Dv.ENTERED) || this.setState({ transitionState: m.Dv.HIDDEN });
                }
            }),
            b(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), m.CT);
                    })
            );
    }
}
function O() {
    return (0, h.Vn)((0, d.bp)());
}
let I = [];
function S() {
    let e = O(),
        t = (0, h.s9)((t) => (void 0 !== t[e] ? t[e] : I)),
        n = i.useRef();
    i.useLayoutEffect(() => {
        n.current = t[t.length - 1];
    }, [t]);
    let o = t.length > 0;
    i.useLayoutEffect(() => {
        if (!o) return;
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
    }, [o]);
    let a = i.useCallback(() => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        s = i.useCallback(
            (t) => {
                (0, h.Mr)(t, e);
            },
            [e]
        ),
        d = y.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === f.ZP)));
    return (0, r.jsxs)(c.W, {
        component: i.Fragment,
        children: [
            y.map((e, n) => {
                var i;
                let o = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === f.ZP));
                return (0, r.jsx)(
                    u.YMn,
                    {
                        isVisible: d[n],
                        backdropStyle: null != (i = null == o ? void 0 : o.backdropStyle) ? i : u.fCB.DARK,
                        onClose: a,
                        LayerComponent: e,
                        backdropInstant: null == o ? void 0 : o.instant
                    },
                    'layer-'.concat(n)
                );
            }),
            t.map((e, n) => {
                let { key: i, Layer: o, render: a, instant: l } = e;
                return (0, r.jsx)(
                    v,
                    {
                        modalKey: i,
                        LayerComponent: null != o ? o : f.ZP,
                        isTopModal: n === t.length - 1,
                        render: a,
                        closeModal: s,
                        instant: l
                    },
                    i
                );
            })
        ]
    });
}
