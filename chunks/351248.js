n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(748780),
    o = n(442837),
    c = n(215569),
    d = n(780384),
    u = n(481060),
    h = n(410030),
    p = n(451478),
    m = n(584511),
    f = n(354459),
    g = n(397109),
    C = n(652849),
    x = n(73004);
function v(e, t, n) {
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
let _ = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26
    },
    I = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: s.Z.Easing.inOut(s.Z.Easing.back()),
        EASING_OUT: s.Z.Easing.quad
    },
    E = 200,
    b = 125;
class Z extends l.PureComponent {
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
                    duration: I.DURATION_IN,
                    easing: I.EASING_IN
                }),
                s.Z.timing(n, {
                    toValue: 1,
                    duration: E
                })
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let r = [];
        for (let e = 0; e < _.STEPS; e++)
            r.push(
                s.Z.timing(n, {
                    toValue: -_.FRAME_SIZE * e,
                    duration: _.FRAME_DURATION
                })
            );
        s.Z.sequence([
            s.Z.timing(t, {
                toValue: 0,
                duration: I.DURATION_OUT,
                easing: I.EASING_OUT
            }),
            s.Z.sequence(r),
            s.Z.timing(l, {
                toValue: 0,
                duration: b
            })
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return s.Z.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [I.SCALE_MIN, I.SCALE_MAX]
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
            l = (0, d.wj)(e),
            r = a()(g.sprite, {
                [x.crossWhite]: l,
                [x.crossGrey]: !l
            });
        return (0, i.jsxs)(s.Z.div, {
            className: a()(g.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)('div', {
                    className: a()(g.spriteWrapper, C.horizontal, C.justifyCenter, C.alignCenter),
                    children: (0, i.jsx)(s.Z.div, {
                        className: r,
                        style: this.getSpriteStyle()
                    })
                }),
                (0, i.jsx)(s.Z.div, {
                    style: this.getScaleStyle(),
                    children: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), v(this, 'scaleAnimation', new s.Z.Value(0)), v(this, 'spriteAnimation', new s.Z.Value(0)), v(this, 'spriteOpacity', new s.Z.Value(0)), v(this, 'widthAnimation', new s.Z.Value(0));
    }
}
function N(e) {
    var t, n;
    let { participants: l, onContextMenu: r, className: s, onClick: d, width: C, guildId: x } = e,
        v = (0, h.ZP)();
    let _ = ((t = C), (n = l.length), ((0, u.getAvatarSize)(u.AvatarSizes.SIZE_80) + 16) * n > t ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80),
        I = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        E = l.map((e) => {
            var t, n;
            if (e.type !== f.fO.USER) return null;
            let { user: l, voiceState: a, speaking: s, ringing: o } = e;
            return (0, i.jsx)(
                Z,
                {
                    className: g.participant,
                    width: (0, u.getAvatarSize)(_),
                    theme: v,
                    children: (0, i.jsx)(
                        m.Z,
                        {
                            src: l.getAvatarURL(x, (0, u.getAvatarSize)(_), s && I),
                            size: _,
                            muted: null !== (t = null == a ? void 0 : a.isVoiceMuted()) && void 0 !== t && t,
                            deafen: null !== (n = null == a ? void 0 : a.isVoiceDeafened()) && void 0 !== n && n,
                            speaking: s,
                            ringing: o,
                            onClick: (t) => (null == d ? void 0 : d(e, t)),
                            onContextMenu: (t) => (null == r ? void 0 : r(e, t))
                        },
                        e.id
                    )
                },
                l.id
            );
        });
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: a()(g.root, s),
        children: E
    });
}
