r.d(n, {
    n: function () {
        return R;
    },
    v: function () {
        return C;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(852437);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(392711),
    f = r.n(d),
    p = r(215569),
    h = r(481060),
    _ = r(40851),
    m = r(314910),
    g = r(429142),
    E = r(585483),
    v = r(952265),
    y = r(602091),
    b = r(981631),
    I = r(211219);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let S = [m.ZP, g.ZP];
class A extends l.PureComponent {
    render() {
        let { render: e, LayerComponent: n, isTopModal: r, instant: i } = this.props,
            a = i ? y.Dv.ENTERED : this.state.transitionState;
        return (0, s.jsx)(n, {
            children: (0, s.jsx)('div', {
                className: c()(I.layer, !r && I.hidden),
                children: e({
                    transitionState: a,
                    onClose: this.close
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', { transitionState: null }),
            T(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            T(this, 'componentWillEnter', (e) => {
                let { instant: n } = this.props;
                this.setState({ transitionState: y.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: y.Dv.ENTERED }), null == e || e();
                        },
                        n ? 0 : y.CT
                    );
            }),
            T(this, 'componentWillLeave', (e) => {
                let { instant: n } = this.props;
                this.setState({ transitionState: y.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: y.Dv.EXITED }), e();
                        },
                        n ? 0 : y.CT
                    );
            }),
            T(this, 'componentDidUpdate', (e) => {
                if (e.isTopModal !== this.props.isTopModal) {
                    let { transitionState: e } = this.state;
                    e === y.Dv.HIDDEN && this.props.isTopModal && this.componentWillEnter(), !this.props.isTopModal && (e === y.Dv.ENTERING || e === y.Dv.ENTERED) && this.setState({ transitionState: y.Dv.HIDDEN });
                }
            }),
            T(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), y.CT);
                    })
            );
    }
}
function C() {
    return (0, v.Vn)((0, _.bp)());
}
let N = [];
function R() {
    let e = C(),
        n = (0, v.s9)((n) => (void 0 !== n[e] ? n[e] : N)),
        r = l.useRef();
    l.useLayoutEffect(() => {
        r.current = n[n.length - 1];
    }, [n]);
    let i = n.length > 0;
    l.useLayoutEffect(() => {
        if (!i) return;
        let e = () => {
            let e = r.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        };
        return (
            E.S.subscribe(b.CkL.MODAL_CLOSE, e),
            () => {
                E.S.unsubscribe(b.CkL.MODAL_CLOSE, e);
            }
        );
    }, [i]);
    let a = l.useCallback(() => {
            let e = r.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        o = l.useCallback(
            (n) => {
                (0, v.Mr)(n, e);
            },
            [e]
        ),
        u = S.map((e) => n.some((n) => n.Layer === e || (null == n.Layer && e === m.ZP)));
    return (0, s.jsxs)(p.W, {
        component: l.Fragment,
        children: [
            S.map((e, r) => {
                var i;
                let o = f().findLast(n, (n) => n.Layer === e || (null == n.Layer && e === m.ZP));
                return (0, s.jsx)(
                    h.Backdrop,
                    {
                        isVisible: u[r],
                        backdropStyle: null !== (i = null == o ? void 0 : o.backdropStyle) && void 0 !== i ? i : h.BackdropStyles.DARK,
                        onClose: a,
                        LayerComponent: e,
                        backdropInstant: null == o ? void 0 : o.instant
                    },
                    'layer-'.concat(r)
                );
            }),
            n.map((e, r) => {
                let { key: i, Layer: a, render: l, instant: u } = e;
                return (0, s.jsx)(
                    A,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : m.ZP,
                        isTopModal: r === n.length - 1,
                        render: l,
                        closeModal: o,
                        instant: u
                    },
                    i
                );
            })
        ]
    });
}
