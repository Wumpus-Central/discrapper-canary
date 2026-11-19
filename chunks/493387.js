n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(855986),
    c = n(628274),
    d = n(462887),
    u = n(778712),
    h = n(890856),
    p = n(736653),
    m = n(209932),
    A = n(541157),
    f = n(988468),
    g = n(531685),
    x = n(85448),
    C = n(806931),
    y = n(792996),
    I = n(836905),
    j = n(938442),
    v = n(138267);
let N = {
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
                r.A.timing(t, { toValue: 1, duration: N.DURATION_IN, easing: N.EASING_IN }),
                r.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e));
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        (i.setValue(1), n.setValue(0));
        let a = [];
        for (let e = 0; e < 23; e++) a.push(r.A.timing(n, { toValue: -26 * e, duration: 17 }));
        r.A.sequence([
            r.A.timing(t, { toValue: 0, duration: N.DURATION_OUT, easing: N.EASING_OUT }),
            r.A.sequence(a),
            r.A.timing(l, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return r.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [N.SCALE_MIN, N.SCALE_MAX] }) }],
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
            a = s()(I._y, { [v.cp]: l, [v.QB]: !l });
        return (0, i.jsxs)(r.A.div, {
            role: "listitem",
            className: s()(I.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: s()(I.XY, j.xM, j.wq, j.Hu),
                    children: (0, i.jsx)(r.A.div, { className: a, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(r.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
n.d(
    t,
    {},
    {
        A: function (e) {
            var t;
            let { participants: n, onContextMenu: l, className: a, onClick: r, width: d, guildId: j } = e,
                v = (0, p.Ay)(),
                N = ((t = n.length), ((0, u.FT)(u._3.SIZE_80) + 16) * t > d ? u._3.SIZE_40 : u._3.SIZE_80),
                b = (0, o.bG)([g.A], () => g.A.isFocused()),
                S = (0, A.oN)(),
                T = (0, o.bG)(
                    [f.Ay],
                    () => new Map(n.filter(C.Xw).map((e) => [e.user.id, f.Ay.isLocalMute(e.user.id)])),
                    [n],
                ),
                _ = (0, o.bG)(
                    [m.A],
                    () => new Map(n.filter(C.Xw).map((e) => [e.user.id, m.A.isLocalSoundboardMuted(e.user.id)])),
                    [n],
                ),
                R = n.map((e) => {
                    if (e.type !== C.lp.USER) return null;
                    let { user: t, speaking: n, ringing: a, playingSoundboard: s } = e,
                        o = (0, A.Nd)(e.voiceState, S),
                        c = null;
                    !0 === T.get(t.id)
                        ? (c = y.intl.string(y.t.Q8Uzof))
                        : o?.isVoiceDeafened() === !0
                          ? (c = y.intl.string(y.t.NjmiOL))
                          : o?.isVoiceMuted() === !0
                            ? (c = y.intl.string(y.t.tjtv3P))
                            : !0 === _.get(t.id) && (c = y.intl.string(y.t["9bJYWN"]));
                    let d =
                        null != c
                            ? y.intl.formatToPlainString(y.t["1+MVBP"], { userName: t.username, status: c })
                            : t.username;
                    return (0, i.jsx)(
                        E,
                        {
                            className: I.Wp,
                            width: (0, u.FT)(N),
                            theme: v,
                            children: (0, i.jsx)(h.s, {
                                "aria-label": d,
                                onClick: (t) => r?.(e, t),
                                onContextMenu: (t) => l?.(e, t),
                                children: (0, i.jsx)(
                                    x.Ay,
                                    {
                                        userId: t.id,
                                        src: t.getAvatarURL(j, (0, u.FT)(N), n && b),
                                        size: N,
                                        muted: o?.isVoiceMuted() ?? !1,
                                        deafen: o?.isVoiceDeafened() ?? !1,
                                        voiceStatus: (0, u.n$)(n, s),
                                        ringing: a,
                                    },
                                    e.id,
                                ),
                            }),
                        },
                        t.id,
                    );
                });
            return (0, i.jsx)(c.F, { component: "div", role: "list", className: s()(I.zr, a), children: R });
        },
    },
);
