"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(615300),
    o = n(311907),
    c = n(73939),
    d = n(582754),
    u = n(397927),
    h = n(736653),
    A = n(531685),
    p = n(85448),
    g = n(806931),
    m = n(254187),
    _ = n(20976),
    f = n(162253);
let x = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: a.A.Easing.inOut(a.A.Easing.back()),
    EASING_OUT: a.A.Easing.quad,
};
class C extends s.PureComponent {
    scaleAnimation = new a.A.Value(0);
    spriteAnimation = new a.A.Value(0);
    spriteOpacity = new a.A.Value(0);
    widthAnimation = new a.A.Value(0);
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
            a.A.parallel([
                a.A.timing(t, { toValue: 1, duration: x.DURATION_IN, easing: x.EASING_IN }),
                a.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: s } = this;
        i.setValue(1), n.setValue(0);
        let l = [];
        for (let e = 0; e < 23; e++) l.push(a.A.timing(n, { toValue: -26 * e, duration: 17 }));
        a.A.sequence([
            a.A.timing(t, { toValue: 0, duration: x.DURATION_OUT, easing: x.EASING_OUT }),
            a.A.sequence(l),
            a.A.timing(s, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return a.A.accelerate({
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
            s = (0, d.Mw)(e),
            l = r()(m._y, { [f.cp]: s, [f.QB]: !s });
        return (0, i.jsxs)(a.A.div, {
            role: "listitem",
            className: r()(m.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: r()(m.XY, _.xM, _.wq, _.Hu),
                    children: (0, i.jsx)(a.A.div, { className: l, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(a.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function E(e) {
    var t;
    let { participants: n, onContextMenu: s, className: l, onClick: a, width: d, guildId: _ } = e,
        f = (0, h.Ay)(),
        x = ((t = n.length), ((0, u.FT9)(u._3J.SIZE_80) + 16) * t > d ? u._3J.SIZE_40 : u._3J.SIZE_80),
        E = (0, o.bG)([A.A], () => A.A.isFocused()),
        I = n.map((e) => {
            if (e.type !== g.lp.USER) return null;
            let { user: t, voiceState: n, speaking: l, ringing: r } = e;
            return (0, i.jsx)(
                C,
                {
                    className: m.Wp,
                    width: (0, u.FT9)(x),
                    theme: f,
                    children: (0, i.jsx)(u.sqX, {
                        "aria-label": t.username,
                        onClick: (t) => a?.(e, t),
                        onContextMenu: (t) => s?.(e, t),
                        children: (0, i.jsx)(
                            p.A,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(_, (0, u.FT9)(x), l && E),
                                size: x,
                                muted: n?.isVoiceMuted() ?? !1,
                                deafen: n?.isVoiceDeafened() ?? !1,
                                speaking: l,
                                ringing: r,
                            },
                            e.id,
                        ),
                    }),
                },
                t.id,
            );
        });
    return (0, i.jsx)(c.F, { component: "div", role: "list", className: r()(m.zr, l), children: I });
}
