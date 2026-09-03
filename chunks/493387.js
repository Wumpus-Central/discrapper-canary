n.d(t, { A: () => v }), n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(17928),
    c = n(868285),
    d = n(462887),
    u = n(778712),
    h = n(890856),
    p = n(736653),
    m = n(916546),
    A = n(531685),
    f = n(85448),
    x = n(806931),
    g = n(375708),
    C = n(836905),
    y = n(938442),
    j = n(138267);
let I = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: r.A.Easing.inOut(r.A.Easing.back()),
    EASING_OUT: r.A.Easing.quad,
};
class N extends l.PureComponent {
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
                r.A.timing(t, { toValue: 1, duration: I.DURATION_IN, easing: I.EASING_IN }),
                r.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let a = [];
        for (let e = 0; e < 23; e++) a.push(r.A.timing(n, { toValue: -26 * e, duration: 17 }));
        r.A.sequence([
            r.A.timing(t, { toValue: 0, duration: I.DURATION_OUT, easing: I.EASING_OUT }),
            r.A.sequence(a),
            r.A.timing(l, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [I.SCALE_MIN, I.SCALE_MAX] }) }],
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
            a = s()(C._y, { [j.cp]: l, [j.QB]: !l });
        return (0, i.jsxs)(r.A.div, {
            role: "listitem",
            className: s()(C.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: s()(C.XY, y.xM, y.wq, y.Hu),
                    children: (0, i.jsx)(r.A.div, { className: a, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(r.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function v(e) {
    var t;
    let { participants: n, onContextMenu: l, className: a, onClick: r, width: d, guildId: y } = e,
        j = (0, p.Ay)(),
        I = ((t = n.length), ((0, u.FT)(u._3.SIZE_80) + 16) * t > d ? u._3.SIZE_40 : u._3.SIZE_80),
        v = (0, o.bG)([A.A], () => A.A.isFocused()),
        E = (0, o.bG)([m.Ay], () => new Map(n.filter(x.Xw).map((e) => [e.user.id, m.Ay.isLocalMute(e.user.id)])), [n]),
        b = n.map((e) => {
            if (e.type !== x.lp.USER) return null;
            let { user: t, voiceState: n, speaking: a, ringing: s } = e,
                o = null;
            !0 === E.get(t.id)
                ? (o = g.intl.string(g.t.Q8Uzof))
                : n?.isVoiceDeafened() === !0
                  ? (o = g.intl.string(g.t.NjmiOL))
                  : n?.isVoiceMuted() === !0 && (o = g.intl.string(g.t.tjtv3P));
            let c =
                null != o ? g.intl.formatToPlainString(g.t["1+MVBP"], { userName: t.username, status: o }) : t.username;
            return (0, i.jsx)(
                N,
                {
                    className: C.Wp,
                    width: (0, u.FT)(I),
                    theme: j,
                    children: (0, i.jsx)(h.s, {
                        "aria-label": c,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => l?.(e, t),
                        children: (0, i.jsx)(
                            f.Ay,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(y, (0, u.FT)(I), a && v),
                                size: I,
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
    return (0, i.jsx)(c.F, { component: "div", role: "list", className: s()(C.zr, a), children: b });
}
