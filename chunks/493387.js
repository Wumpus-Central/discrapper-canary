n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(615300),
    o = n(311907),
    c = n(73939),
    d = n(462887),
    u = n(778712),
    p = n(890856),
    h = n(736653),
    _ = n(531685),
    m = n(85448),
    A = n(806931),
    x = n(464466),
    f = n(653307),
    g = n(571876);
let C = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: r.A.Easing.inOut(r.A.Easing.back()),
    EASING_OUT: r.A.Easing.quad,
};
class y extends a.PureComponent {
    scaleAnimation = new r.A.Value(0);
    spriteAnimation = new r.A.Value(0);
    spriteOpacity = new r.A.Value(0);
    widthAnimation = new r.A.Value(0);
    componentDidMount() {
        this.componentDidAppear();
    }
    componentDidAppear() {
        let { scaleAnimation: e, widthAnimation: t } = this;
        e.setValue(1), t.setValue(1);
    }
    componentWillEnter(e) {
        let { scaleAnimation: t, widthAnimation: n } = this;
        t.setValue(0),
            n.setValue(0),
            r.A.parallel([
                r.A.timing(t, { toValue: 1, duration: C.DURATION_IN, easing: C.EASING_IN }),
                r.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: a } = this;
        i.setValue(1), n.setValue(0);
        let l = [];
        for (let e = 0; e < 23; e++) l.push(r.A.timing(n, { toValue: -26 * e, duration: 17 }));
        r.A.sequence([
            r.A.timing(t, { toValue: 0, duration: C.DURATION_OUT, easing: C.EASING_OUT }),
            r.A.sequence(l),
            r.A.timing(a, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [C.SCALE_MIN, C.SCALE_MAX] }) }],
            opacity: e,
        });
    }
    getSpriteStyle() {
        let { spriteAnimation: e, spriteOpacity: t } = this;
        return { backgroundPosition: e, opacity: t };
    }
    getWidthStyle() {
        return {
            width: this.widthAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0px", `${this.props.width}px`],
            }),
        };
    }
    render() {
        let { theme: e, children: t, className: n } = this.props,
            a = (0, d.M)(e),
            l = s()(x._y, { [g.cp]: a, [g.QB]: !a });
        return (0, i.jsxs)(r.A.div, {
            role: "listitem",
            className: s()(x.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: s()(x.XY, f.xM, f.wq, f.Hu),
                    children: (0, i.jsx)(r.A.div, { className: l, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(r.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function v(e) {
    var t;
    let { participants: n, onContextMenu: a, className: l, onClick: r, width: d, guildId: f } = e,
        g = (0, h.Ay)(),
        C = ((t = n.length), ((0, u.FT)(u._3.SIZE_80) + 16) * t > d ? u._3.SIZE_40 : u._3.SIZE_80),
        v = (0, o.bG)([_.A], () => _.A.isFocused()),
        E = n.map((e) => {
            if (e.type !== A.lp.USER) return null;
            let { user: t, voiceState: n, speaking: l, ringing: s } = e;
            return (0, i.jsx)(
                y,
                {
                    className: x.Wp,
                    width: (0, u.FT)(C),
                    theme: g,
                    children: (0, i.jsx)(p.s, {
                        "aria-label": t.username,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => a?.(e, t),
                        children: (0, i.jsx)(
                            m.A,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(f, (0, u.FT)(C), l && v),
                                size: C,
                                muted: n?.isVoiceMuted() ?? !1,
                                deafen: n?.isVoiceDeafened() ?? !1,
                                speaking: l,
                                ringing: s,
                            },
                            e.id,
                        ),
                    }),
                },
                t.id,
            );
        });
    return (0, i.jsx)(c.F, { component: "div", role: "list", className: s()(x.zr, l), children: E });
}
