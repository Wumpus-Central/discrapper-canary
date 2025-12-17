n.d(t, { Z: () => O }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(442837),
    c = n(215569),
    u = n(780384),
    d = n(481060),
    p = n(410030),
    f = n(451478),
    h = n(584511),
    m = n(354459),
    g = n(159310),
    b = n(727829),
    C = n(982681);
function y(e, t, n) {
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
let v = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: o.Z.Easing.inOut(o.Z.Easing.back()),
    EASING_OUT: o.Z.Easing.quad,
};
class x extends r.PureComponent {
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
            o.Z.parallel([
                o.Z.timing(t, {
                    toValue: 1,
                    duration: v.DURATION_IN,
                    easing: v.EASING_IN,
                }),
                o.Z.timing(n, {
                    toValue: 1,
                    duration: 200,
                }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: r } = this;
        i.setValue(1), n.setValue(0);
        let l = [];
        for (let e = 0; e < 23; e++)
            l.push(
                o.Z.timing(n, {
                    toValue: -26 * e,
                    duration: 17,
                }),
            );
        o.Z.sequence([
            o.Z.timing(t, {
                toValue: 0,
                duration: v.DURATION_OUT,
                easing: v.EASING_OUT,
            }),
            o.Z.sequence(l),
            o.Z.timing(r, {
                toValue: 0,
                duration: 125,
            }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return o.Z.accelerate({
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
            r = (0, u.wj)(e),
            l = a()(g.sprite, {
                [C.crossWhite]: r,
                [C.crossGrey]: !r,
            });
        return (0, i.jsxs)(o.Z.div, {
            role: "listitem",
            className: a()(g.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: a()(g.spriteWrapper, b.horizontal, b.justifyCenter, b.alignCenter),
                    children: (0, i.jsx)(o.Z.div, {
                        className: l,
                        style: this.getSpriteStyle(),
                    }),
                }),
                (0, i.jsx)(o.Z.div, {
                    style: this.getScaleStyle(),
                    children: t,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "scaleAnimation", new o.Z.Value(0)),
            y(this, "spriteAnimation", new o.Z.Value(0)),
            y(this, "spriteOpacity", new o.Z.Value(0)),
            y(this, "widthAnimation", new o.Z.Value(0));
    }
}
function O(e) {
    var t;
    let { participants: n, onContextMenu: r, className: l, onClick: o, width: u, guildId: b } = e,
        C = (0, p.ZP)(),
        y = ((t = n.length), ((0, d.dcp)(d.EFr.SIZE_80) + 16) * t > u ? d.EFr.SIZE_40 : d.EFr.SIZE_80),
        v = (0, s.e7)([f.Z], () => f.Z.isFocused()),
        O = n.map((e) => {
            var t, n;
            if (e.type !== m.fO.USER) return null;
            let { user: l, voiceState: a, speaking: s, voiceDb: c = -1 / 0, latched: u, ringing: p } = e;
            return (0, i.jsx)(
                x,
                {
                    className: g.participant,
                    width: (0, d.dcp)(y),
                    theme: C,
                    children: (0, i.jsx)(d.kL8, {
                        "aria-label": l.username,
                        onClick: (t) => (null == o ? void 0 : o(e, t)),
                        onContextMenu: (t) => (null == r ? void 0 : r(e, t)),
                        children: (0, i.jsx)(
                            h.Z,
                            {
                                userId: l.id,
                                src: l.getAvatarURL(b, (0, d.dcp)(y), s && v),
                                size: y,
                                muted: null != (t = null == a ? void 0 : a.isVoiceMuted()) && t,
                                deafen: null != (n = null == a ? void 0 : a.isVoiceDeafened()) && n,
                                speaking: s,
                                voiceDb: c,
                                latched: u,
                                ringing: p,
                            },
                            e.id,
                        ),
                    }),
                },
                l.id,
            );
        });
    return (0, i.jsx)(c.W, {
        component: "div",
        role: "list",
        className: a()(g.root, l),
        children: O,
    });
}
