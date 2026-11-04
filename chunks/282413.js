var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = (n(451988), n(628274), n(235986), n(652215)),
    d = n(686111);
(o.DUB.NORMAL, d.qb, o.DUB.MINIMUM, d.Bp, o.DUB.NO_CHAT, d.Oo, o.DUB.FULL_SCREEN, d.iy);
class c extends r.PureComponent {
    constructor(e) {
        (super(e), (this.state = { animation: new l.A.Value(0) }));
    }
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        (t.setValue(0), l.A.spring(t, { toValue: 1, overshootClamping: !0 }).start(e));
    }
    componentWillLeave(e) {
        l.A.spring(this.state.animation, { toValue: 0, overshootClamping: !0 }).start(e);
    }
    render() {
        return (0, i.jsx)(l.A.div, {
            className: s()(d.$c, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children,
        });
    }
}
(r.PureComponent, o.DUB.MINIMUM, n.d(t, {}, { o: c }));
