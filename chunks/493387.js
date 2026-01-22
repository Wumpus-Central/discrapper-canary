n.d(t, { A: () => v }), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(615300),
    o = n(311907),
    c = n(73939),
    u = n(582754),
    d = n(397927),
    f = n(736653),
    p = n(531685),
    h = n(85448),
    b = n(806931),
    g = n(254187),
    m = n(20976),
    A = n(162253);
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
let O = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: s.A.Easing.inOut(s.A.Easing.back()),
    EASING_OUT: s.A.Easing.quad,
};
class j extends l.PureComponent {
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
            s.A.parallel([
                s.A.timing(t, {
                    toValue: 1,
                    duration: O.DURATION_IN,
                    easing: O.EASING_IN,
                }),
                s.A.timing(n, {
                    toValue: 1,
                    duration: 200,
                }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: r, widthAnimation: l } = this;
        r.setValue(1), n.setValue(0);
        let i = [];
        for (let e = 0; e < 23; e++)
            i.push(
                s.A.timing(n, {
                    toValue: -26 * e,
                    duration: 17,
                }),
            );
        s.A.sequence([
            s.A.timing(t, {
                toValue: 0,
                duration: O.DURATION_OUT,
                easing: O.EASING_OUT,
            }),
            s.A.sequence(i),
            s.A.timing(l, {
                toValue: 0,
                duration: 125,
            }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return s.A.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [O.SCALE_MIN, O.SCALE_MAX],
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
            l = (0, u.Mw)(e),
            i = a()(g._y, {
                [A.cp]: l,
                [A.QB]: !l,
            });
        return (0, r.jsxs)(s.A.div, {
            role: "listitem",
            className: a()(g.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, r.jsx)("div", {
                    className: a()(g.XY, m.xM, m.wq, m.Hu),
                    children: (0, r.jsx)(s.A.div, {
                        className: i,
                        style: this.getSpriteStyle(),
                    }),
                }),
                (0, r.jsx)(s.A.div, {
                    style: this.getScaleStyle(),
                    children: t,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "scaleAnimation", new s.A.Value(0)),
            y(this, "spriteAnimation", new s.A.Value(0)),
            y(this, "spriteOpacity", new s.A.Value(0)),
            y(this, "widthAnimation", new s.A.Value(0));
    }
}
function v(e) {
    var t;
    let { participants: n, onContextMenu: l, className: i, onClick: s, width: u, guildId: m } = e,
        A = (0, f.Ay)(),
        y = ((t = n.length), ((0, d.FT9)(d._3J.SIZE_80) + 16) * t > u ? d._3J.SIZE_40 : d._3J.SIZE_80),
        O = (0, o.bG)([p.A], () => p.A.isFocused()),
        v = n.map((e) => {
            var t, n;
            if (e.type !== b.lp.USER) return null;
            let { user: i, voiceState: a, speaking: o, voiceDb: c = -1 / 0, latched: u, ringing: f } = e;
            return (0, r.jsx)(
                j,
                {
                    className: g.Wp,
                    width: (0, d.FT9)(y),
                    theme: A,
                    children: (0, r.jsx)(d.sqX, {
                        "aria-label": i.username,
                        onClick: (t) => (null == s ? void 0 : s(e, t)),
                        onContextMenu: (t) => (null == l ? void 0 : l(e, t)),
                        children: (0, r.jsx)(
                            h.A,
                            {
                                userId: i.id,
                                src: i.getAvatarURL(m, (0, d.FT9)(y), o && O),
                                size: y,
                                muted: null != (t = null == a ? void 0 : a.isVoiceMuted()) && t,
                                deafen: null != (n = null == a ? void 0 : a.isVoiceDeafened()) && n,
                                speaking: o,
                                voiceDb: c,
                                latched: u,
                                ringing: f,
                            },
                            e.id,
                        ),
                    }),
                },
                i.id,
            );
        });
    return (0, r.jsx)(c.F, {
        component: "div",
        role: "list",
        className: a()(g.zr, i),
        children: v,
    });
}
