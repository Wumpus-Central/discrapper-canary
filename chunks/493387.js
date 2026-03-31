n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(311907),
    c = n(73939),
    d = n(582754),
    u = n(397927),
    h = n(736653),
    A = n(531685),
    _ = n(85448),
    m = n(806931),
    g = n(944802),
    p = n(435115),
    f = n(593716);
let x = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: r.A.Easing.inOut(r.A.Easing.back()),
    EASING_OUT: r.A.Easing.quad,
};
class E extends l.PureComponent {
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
                r.A.timing(t, { toValue: 1, duration: x.DURATION_IN, easing: x.EASING_IN }),
                r.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let s = [];
        for (let e = 0; e < 23; e++) s.push(r.A.timing(n, { toValue: -26 * e, duration: 17 }));
        r.A.sequence([
            r.A.timing(t, { toValue: 0, duration: x.DURATION_OUT, easing: x.EASING_OUT }),
            r.A.sequence(s),
            r.A.timing(l, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [x.SCALE_MIN, x.SCALE_MAX] }) }],
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
            l = (0, d.Mw)(e),
            s = a()(g._y, { [f.cp]: l, [f.QB]: !l });
        return (0, i.jsxs)(r.A.div, {
            role: "listitem",
            className: a()(g.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: a()(g.XY, p.xM, p.wq, p.Hu),
                    children: (0, i.jsx)(r.A.div, { className: s, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(r.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function I(e) {
    var t;
    let { participants: n, onContextMenu: l, className: s, onClick: r, width: d, guildId: p } = e,
        f = (0, h.Ay)(),
        x = ((t = n.length), ((0, u.FT9)(u._3J.SIZE_80) + 16) * t > d ? u._3J.SIZE_40 : u._3J.SIZE_80),
        I = (0, o.bG)([A.A], () => A.A.isFocused()),
        C = n.map((e) => {
            if (e.type !== m.lp.USER) return null;
            let { user: t, voiceState: n, speaking: s, ringing: a } = e;
            return (0, i.jsx)(
                E,
                {
                    className: g.Wp,
                    width: (0, u.FT9)(x),
                    theme: f,
                    children: (0, i.jsx)(u.sqX, {
                        "aria-label": t.username,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => l?.(e, t),
                        children: (0, i.jsx)(
                            _.A,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(p, (0, u.FT9)(x), s && I),
                                size: x,
                                muted: n?.isVoiceMuted() ?? !1,
                                deafen: n?.isVoiceDeafened() ?? !1,
                                speaking: s,
                                ringing: a,
                            },
                            e.id,
                        ),
                    }),
                },
                t.id,
            );
        });
    return (0, i.jsx)(c.F, { component: "div", role: "list", className: a()(g.zr, s), children: C });
}
