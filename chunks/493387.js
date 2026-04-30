n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(17928),
    c = n(868285),
    d = n(462887),
    u = n(778712),
    h = n(890856),
    p = n(736653),
    m = n(531685),
    A = n(85448),
    x = n(806931),
    g = n(464466),
    C = n(653307),
    f = n(571876);
let E = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: r.A.Easing.inOut(r.A.Easing.back()),
    EASING_OUT: r.A.Easing.quad,
};
class y extends l.PureComponent {
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
                r.A.timing(t, { toValue: 1, duration: E.DURATION_IN, easing: E.EASING_IN }),
                r.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let a = [];
        for (let e = 0; e < 23; e++) a.push(r.A.timing(n, { toValue: -26 * e, duration: 17 }));
        r.A.sequence([
            r.A.timing(t, { toValue: 0, duration: E.DURATION_OUT, easing: E.EASING_OUT }),
            r.A.sequence(a),
            r.A.timing(l, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [E.SCALE_MIN, E.SCALE_MAX] }) }],
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
            l = (0, d.M)(e),
            a = s()(g._y, { [f.cp]: l, [f.QB]: !l });
        return (0, i.jsxs)(r.A.div, {
            role: "listitem",
            className: s()(g.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: s()(g.XY, C.xM, C.wq, C.Hu),
                    children: (0, i.jsx)(r.A.div, { className: a, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(r.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function N(e) {
    var t;
    let { participants: n, onContextMenu: l, className: a, onClick: r, width: d, guildId: C } = e,
        f = (0, p.Ay)(),
        E = ((t = n.length), ((0, u.FT)(u._3.SIZE_80) + 16) * t > d ? u._3.SIZE_40 : u._3.SIZE_80),
        N = (0, o.bG)([m.A], () => m.A.isFocused()),
        j = n.map((e) => {
            if (e.type !== x.lp.USER) return null;
            let { user: t, voiceState: n, speaking: a, ringing: s } = e;
            return (0, i.jsx)(
                y,
                {
                    className: g.Wp,
                    width: (0, u.FT)(E),
                    theme: f,
                    children: (0, i.jsx)(h.s, {
                        "aria-label": t.username,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => l?.(e, t),
                        children: (0, i.jsx)(
                            A.A,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(C, (0, u.FT)(E), a && N),
                                size: E,
                                muted: n?.isVoiceMuted() ?? !1,
                                deafen: n?.isVoiceDeafened() ?? !1,
                                speaking: a,
                                ringing: s,
                            },
                            e.id,
                        ),
                    }),
                },
                t.id,
            );
        });
    return (0, i.jsx)(c.F, { component: "div", role: "list", className: s()(g.zr, a), children: j });
}
