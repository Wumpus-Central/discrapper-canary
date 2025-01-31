n.d(t, { Z: () => b }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(652849),
    C = n(73004);
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
let v = {
        STEPS: 23,
        FRAME_DURATION: 17,
        FRAME_SIZE: 26
    },
    E = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: s.Z.Easing.inOut(s.Z.Easing.back()),
        EASING_OUT: s.Z.Easing.quad
    };
class I extends l.PureComponent {
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
                    duration: E.DURATION_IN,
                    easing: E.EASING_IN
                }),
                s.Z.timing(n, {
                    toValue: 1,
                    duration: 200
                })
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let a = [];
        for (let e = 0; e < v.STEPS; e++)
            a.push(
                s.Z.timing(n, {
                    toValue: -v.FRAME_SIZE * e,
                    duration: v.FRAME_DURATION
                })
            );
        s.Z.sequence([
            s.Z.timing(t, {
                toValue: 0,
                duration: E.DURATION_OUT,
                easing: E.EASING_OUT
            }),
            s.Z.sequence(a),
            s.Z.timing(l, {
                toValue: 0,
                duration: 125
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
                        outputRange: [E.SCALE_MIN, E.SCALE_MAX]
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
            a = r()(g.sprite, {
                [C.crossWhite]: l,
                [C.crossGrey]: !l
            });
        return (0, i.jsxs)(s.Z.div, {
            className: r()(g.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)('div', {
                    className: r()(g.spriteWrapper, _.horizontal, _.justifyCenter, _.alignCenter),
                    children: (0, i.jsx)(s.Z.div, {
                        className: a,
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
        super(...e), x(this, 'scaleAnimation', new s.Z.Value(0)), x(this, 'spriteAnimation', new s.Z.Value(0)), x(this, 'spriteOpacity', new s.Z.Value(0)), x(this, 'widthAnimation', new s.Z.Value(0));
    }
}
function b(e) {
    var t;
    let { participants: n, onContextMenu: l, className: a, onClick: s, width: d, guildId: _ } = e,
        C = (0, h.ZP)(),
        x = ((t = n.length), ((0, u.pxk)(u.EFr.SIZE_80) + 16) * t > d ? u.EFr.SIZE_40 : u.EFr.SIZE_80),
        v = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        E = n.map((e) => {
            var t, n;
            if (e.type !== f.fO.USER) return null;
            let { user: a, voiceState: r, speaking: o, ringing: c } = e;
            return (0, i.jsx)(
                I,
                {
                    className: g.participant,
                    width: (0, u.pxk)(x),
                    theme: C,
                    children: (0, i.jsx)(
                        m.Z,
                        {
                            src: a.getAvatarURL(_, (0, u.pxk)(x), o && v),
                            size: x,
                            muted: null !== (t = null == r ? void 0 : r.isVoiceMuted()) && void 0 !== t && t,
                            deafen: null !== (n = null == r ? void 0 : r.isVoiceDeafened()) && void 0 !== n && n,
                            speaking: o,
                            ringing: c,
                            onClick: (t) => (null == s ? void 0 : s(e, t)),
                            onContextMenu: (t) => (null == l ? void 0 : l(e, t))
                        },
                        e.id
                    )
                },
                a.id
            );
        });
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: r()(g.root, a),
        children: E
    });
}
