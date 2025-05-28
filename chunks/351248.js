n.d(t, { Z: () => j }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(442837),
    c = n(215569),
    u = n(780384),
    d = n(481060),
    p = n(410030),
    h = n(451478),
    f = n(584511),
    m = n(354459),
    g = n(95072),
    b = n(893354),
    _ = n(565128);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26
    },
    C = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: o.Z.Easing.inOut(o.Z.Easing.back()),
        EASING_OUT: o.Z.Easing.quad
    };
class v extends i.PureComponent {
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
                    duration: C.DURATION_IN,
                    easing: C.EASING_IN
                }),
                o.Z.timing(n, {
                    toValue: 1,
                    duration: 200
                })
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: r, widthAnimation: i } = this;
        r.setValue(1), n.setValue(0);
        let l = [];
        for (let e = 0; e < y.STEPS; e++)
            l.push(
                o.Z.timing(n, {
                    toValue: -y.FRAME_SIZE * e,
                    duration: y.FRAME_DURATION
                })
            );
        o.Z.sequence([
            o.Z.timing(t, {
                toValue: 0,
                duration: C.DURATION_OUT,
                easing: C.EASING_OUT
            }),
            o.Z.sequence(l),
            o.Z.timing(i, {
                toValue: 0,
                duration: 125
            })
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return o.Z.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [C.SCALE_MIN, C.SCALE_MAX]
                    })
                }
            ],
            opacity: e
        });
    }
    getSpriteStyle() {
        let { spriteAnimation: e, spriteOpacity: t } = this;
        return {
            backgroundPosition: e,
            opacity: t
        };
    }
    getWidthStyle() {
        return {
            width: this.widthAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0px', ''.concat(this.props.width, 'px')]
            })
        };
    }
    render() {
        let { theme: e, children: t, className: n } = this.props,
            i = (0, u.wj)(e),
            l = a()(g.sprite, {
                [_.crossWhite]: i,
                [_.crossGrey]: !i
            });
        return (0, r.jsxs)(o.Z.div, {
            className: a()(g.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, r.jsx)('div', {
                    className: a()(g.spriteWrapper, b.horizontal, b.justifyCenter, b.alignCenter),
                    children: (0, r.jsx)(o.Z.div, {
                        className: l,
                        style: this.getSpriteStyle()
                    })
                }),
                (0, r.jsx)(o.Z.div, {
                    style: this.getScaleStyle(),
                    children: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), x(this, 'scaleAnimation', new o.Z.Value(0)), x(this, 'spriteAnimation', new o.Z.Value(0)), x(this, 'spriteOpacity', new o.Z.Value(0)), x(this, 'widthAnimation', new o.Z.Value(0));
    }
}
function j(e) {
    var t;
    let { participants: n, onContextMenu: i, className: l, onClick: o, width: u, guildId: b } = e,
        _ = (0, p.ZP)(),
        x = ((t = n.length), ((0, d.pxk)(d.EFr.SIZE_80) + 16) * t > u ? d.EFr.SIZE_40 : d.EFr.SIZE_80),
        y = (0, s.e7)([h.Z], () => h.Z.isFocused()),
        C = n.map((e) => {
            var t, n;
            if (e.type !== m.fO.USER) return null;
            let { user: l, voiceState: a, speaking: s, ringing: c } = e;
            return (0, r.jsx)(
                v,
                {
                    className: g.participant,
                    width: (0, d.pxk)(x),
                    theme: _,
                    children: (0, r.jsx)(
                        f.Z,
                        {
                            userId: l.id,
                            src: l.getAvatarURL(b, (0, d.pxk)(x), s && y),
                            size: x,
                            muted: null != (t = null == a ? void 0 : a.isVoiceMuted()) && t,
                            deafen: null != (n = null == a ? void 0 : a.isVoiceDeafened()) && n,
                            speaking: s,
                            ringing: c,
                            onClick: (t) => (null == o ? void 0 : o(e, t)),
                            onContextMenu: (t) => (null == i ? void 0 : i(e, t))
                        },
                        e.id
                    )
                },
                l.id
            );
        });
    return (0, r.jsx)(c.W, {
        component: 'div',
        className: a()(g.root, l),
        children: C
    });
}
