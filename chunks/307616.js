r.d(n, {
    n: function () {
        return R;
    },
    v: function () {
        return N;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(852437);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(392711),
    f = r.n(d),
    _ = r(215569),
    h = r(481060),
    p = r(40851),
    m = r(314910),
    g = r(429142),
    E = r(585483),
    v = r(952265),
    I = r(602091),
    T = r(981631),
    b = r(211219);
function y(e, n, r) {
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
            a = i ? I.Dv.ENTERED : this.state.transitionState;
        return (0, o.jsx)(n, {
            children: (0, o.jsx)('div', {
                className: c()(b.layer, !r && b.hidden),
                children: e({
                    transitionState: a,
                    onClose: this.close
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', { transitionState: null }),
            y(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            y(this, 'componentWillEnter', (e) => {
                let { instant: n } = this.props;
                this.setState({ transitionState: I.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: I.Dv.ENTERED }), null == e || e();
                        },
                        n ? 0 : I.CT
                    );
            }),
            y(this, 'componentWillLeave', (e) => {
                let { instant: n } = this.props;
                this.setState({ transitionState: I.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: I.Dv.EXITED }), e();
                        },
                        n ? 0 : I.CT
                    );
            }),
            y(this, 'componentDidUpdate', (e) => {
                if (e.isTopModal !== this.props.isTopModal) {
                    let { transitionState: e } = this.state;
                    e === I.Dv.HIDDEN && this.props.isTopModal && this.componentWillEnter(), !this.props.isTopModal && (e === I.Dv.ENTERING || e === I.Dv.ENTERED) && this.setState({ transitionState: I.Dv.HIDDEN });
                }
            }),
            y(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), I.CT);
                    })
            );
    }
}
function N() {
    return (0, v.Vn)((0, p.bp)());
}
let C = [];
function R() {
    let e = N(),
        n = (0, v.s9)((n) => (void 0 !== n[e] ? n[e] : C)),
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
            E.S.subscribe(T.CkL.MODAL_CLOSE, e),
            () => {
                E.S.unsubscribe(T.CkL.MODAL_CLOSE, e);
            }
        );
    }, [i]);
    let a = l.useCallback(() => {
            let e = r.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        s = l.useCallback(
            (n) => {
                (0, v.Mr)(n, e);
            },
            [e]
        ),
        u = S.map((e) => n.some((n) => n.Layer === e || (null == n.Layer && e === m.ZP)));
    return (0, o.jsxs)(_.W, {
        component: l.Fragment,
        children: [
            S.map((e, r) => {
                var i;
                let s = f().findLast(n, (n) => n.Layer === e || (null == n.Layer && e === m.ZP));
                return (0, o.jsx)(
                    h.Backdrop,
                    {
                        isVisible: u[r],
                        backdropStyle: null !== (i = null == s ? void 0 : s.backdropStyle) && void 0 !== i ? i : h.BackdropStyles.DARK,
                        onClose: a,
                        LayerComponent: e,
                        backdropInstant: null == s ? void 0 : s.instant
                    },
                    'layer-'.concat(r)
                );
            }),
            n.map((e, r) => {
                let { key: i, Layer: a, render: l, instant: u } = e;
                return (0, o.jsx)(
                    A,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : m.ZP,
                        isTopModal: r === n.length - 1,
                        render: l,
                        closeModal: s,
                        instant: u
                    },
                    i
                );
            })
        ]
    });
}
