(n.d(t, { A: () => b }), n(321073));
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
    m = n(421768),
    A = n(209932),
    f = n(360906),
    x = n(531685),
    g = n(85448),
    C = n(806931),
    j = n(105292),
    y = n(836905),
    I = n(938442),
    N = n(138267);
let v = {
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
        (e.setValue(1), t.setValue(1));
    }
    componentWillEnter(e) {
        let { scaleAnimation: t, widthAnimation: n } = this;
        (t.setValue(0),
            n.setValue(0),
            r.A.parallel([
                r.A.timing(t, { toValue: 1, duration: v.DURATION_IN, easing: v.EASING_IN }),
                r.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e));
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        (i.setValue(1), n.setValue(0));
        let a = [];
        for (let e = 0; e < 23; e++) a.push(r.A.timing(n, { toValue: -26 * e, duration: 17 }));
        r.A.sequence([
            r.A.timing(t, { toValue: 0, duration: v.DURATION_OUT, easing: v.EASING_OUT }),
            r.A.sequence(a),
            r.A.timing(l, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [v.SCALE_MIN, v.SCALE_MAX] }) }],
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
            a = s()(y._y, { [N.cp]: l, [N.QB]: !l });
        return (0, i.jsxs)(r.A.div, {
            role: "listitem",
            className: s()(y.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: s()(y.XY, I.xM, I.wq, I.Hu),
                    children: (0, i.jsx)(r.A.div, { className: a, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(r.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function b(e) {
    var t;
    let { participants: n, onContextMenu: l, className: a, onClick: r, width: d, guildId: I } = e,
        N = (0, p.Ay)(),
        v = ((t = n.length), ((0, u.FT)(u._3.SIZE_80) + 16) * t > d ? u._3.SIZE_40 : u._3.SIZE_80),
        b = (0, o.bG)([x.A], () => x.A.isFocused()),
        S = (0, o.bG)([f.Ay], () => new Map(n.filter(C.Xw).map((e) => [e.user.id, f.Ay.isLocalMute(e.user.id)])), [n]),
        _ = (0, o.bG)(
            [A.A],
            () => new Map(n.filter(C.Xw).map((e) => [e.user.id, A.A.isLocalSoundboardMuted(e.user.id)])),
            [n],
        ),
        T = (0, m.g)(_.size > 0 ? "VoiceCallParticipants" : "Invalid - VoiceCallParticipants"),
        R = n.map((e) => {
            if (e.type !== C.lp.USER) return null;
            let { user: t, voiceState: n, speaking: a, ringing: s, playingSoundboard: o } = e,
                c = null;
            !0 === S.get(t.id)
                ? (c = j.intl.string(j.t.Q8Uzof))
                : n?.isVoiceDeafened() === !0
                  ? (c = j.intl.string(j.t.NjmiOL))
                  : n?.isVoiceMuted() === !0
                    ? (c = j.intl.string(j.t.tjtv3P))
                    : T && !0 === _.get(t.id) && (c = j.intl.string(j.t["9bJYWN"]));
            let d =
                null != c ? j.intl.formatToPlainString(j.t["1+MVBP"], { userName: t.username, status: c }) : t.username;
            return (0, i.jsx)(
                E,
                {
                    className: y.Wp,
                    width: (0, u.FT)(v),
                    theme: N,
                    children: (0, i.jsx)(h.s, {
                        "aria-label": d,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => l?.(e, t),
                        children: (0, i.jsx)(
                            g.Ay,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(I, (0, u.FT)(v), a && b),
                                size: v,
                                muted: n?.isVoiceMuted() ?? !1,
                                deafen: n?.isVoiceDeafened() ?? !1,
                                voiceStatus: (0, u.n$)(a, o),
                                ringing: s,
                            },
                            e.id,
                        ),
                    }),
                },
                t.id,
            );
        });
    return (0, i.jsx)(c.F, { component: "div", role: "list", className: s()(y.zr, a), children: R });
}
