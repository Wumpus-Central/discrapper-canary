n.d(t, { Z: () => N }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(748780),
    l = n(442837),
    c = n(215569),
    u = n(780384),
    d = n(481060),
    f = n(410030),
    _ = n(451478),
    p = n(584511),
    h = n(354459),
    m = n(416038),
    g = n(794287),
    E = n(584783);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = 8,
    O = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26,
    },
    v = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: s.Z.Easing.inOut(s.Z.Easing.back()),
        EASING_OUT: s.Z.Easing.quad,
    },
    I = 200,
    T = 125;
class S extends i.PureComponent {
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
            s.Z.parallel([
                s.Z.timing(t, {
                    toValue: 1,
                    duration: v.DURATION_IN,
                    easing: v.EASING_IN,
                }),
                s.Z.timing(n, {
                    toValue: 1,
                    duration: I,
                }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: r, widthAnimation: i } = this;
        r.setValue(1), n.setValue(0);
        let o = [];
        for (let e = 0; e < O.STEPS; e++)
            o.push(
                s.Z.timing(n, {
                    toValue: -O.FRAME_SIZE * e,
                    duration: O.FRAME_DURATION,
                }),
            );
        s.Z.sequence([
            s.Z.timing(t, {
                toValue: 0,
                duration: v.DURATION_OUT,
                easing: v.EASING_OUT,
            }),
            s.Z.sequence(o),
            s.Z.timing(i, {
                toValue: 0,
                duration: T,
            }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return s.Z.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [v.SCALE_MIN, v.SCALE_MAX],
                    }),
                },
            ],
            opacity: e,
        });
    }
    getSpriteStyle() {
        let { spriteAnimation: e, spriteOpacity: t } = this;
        return {
            backgroundPosition: e,
            opacity: t,
        };
    }
    getWidthStyle() {
        return {
            width: this.widthAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0px", "".concat(this.props.width, "px")],
            }),
        };
    }
    render() {
        let { theme: e, children: t, className: n } = this.props,
            i = (0, u.wj)(e),
            o = a()(m.sprite, {
                [E.crossWhite]: i,
                [E.crossGrey]: !i,
            });
        return (0, r.jsxs)(s.Z.div, {
            className: a()(m.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, r.jsx)("div", {
                    className: a()(m.spriteWrapper, g.horizontal, g.justifyCenter, g.alignCenter),
                    children: (0, r.jsx)(s.Z.div, {
                        className: o,
                        style: this.getSpriteStyle(),
                    }),
                }),
                (0, r.jsx)(s.Z.div, {
                    style: this.getScaleStyle(),
                    children: t,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "scaleAnimation", new s.Z.Value(0)),
            b(this, "spriteAnimation", new s.Z.Value(0)),
            b(this, "spriteOpacity", new s.Z.Value(0)),
            b(this, "widthAnimation", new s.Z.Value(0));
    }
}
function A(e, t) {
    return ((0, d.pxk)(d.EFr.SIZE_80) + 2 * y) * t > e ? d.EFr.SIZE_40 : d.EFr.SIZE_80;
}
function N(e) {
    let { participants: t, onContextMenu: n, className: i, onClick: o, width: s, guildId: u } = e,
        g = (0, f.ZP)(),
        E = A(s, t.length),
        b = (0, l.e7)([_.Z], () => _.Z.isFocused()),
        y = t.map((e) => {
            var t, i;
            if (e.type !== h.fO.USER) return null;
            let { user: a, voiceState: s, speaking: l, ringing: c } = e;
            return (0, r.jsx)(
                S,
                {
                    className: m.participant,
                    width: (0, d.pxk)(E),
                    theme: g,
                    children: (0, r.jsx)(
                        p.Z,
                        {
                            userId: a.id,
                            src: a.getAvatarURL(u, (0, d.pxk)(E), l && b),
                            size: E,
                            muted: null != (t = null == s ? void 0 : s.isVoiceMuted()) && t,
                            deafen: null != (i = null == s ? void 0 : s.isVoiceDeafened()) && i,
                            speaking: l,
                            ringing: c,
                            onClick: (t) => (null == o ? void 0 : o(e, t)),
                            onContextMenu: (t) => (null == n ? void 0 : n(e, t)),
                        },
                        e.id,
                    ),
                },
                a.id,
            );
        });
    return (0, r.jsx)(c.W, {
        component: "div",
        className: a()(m.root, i),
        children: y,
    });
}
