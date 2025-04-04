n.d(t, { Z: () => j }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(748780),
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
function C(e, t, n) {
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
    x = {
        SCALE_MIN: 0.7,
        SCALE_MAX: 1,
        DURATION_IN: 300,
        DURATION_OUT: 170,
        EASING_IN: a.Z.Easing.inOut(a.Z.Easing.back()),
        EASING_OUT: a.Z.Easing.quad
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
            a.Z.parallel([
                a.Z.timing(t, {
                    toValue: 1,
                    duration: x.DURATION_IN,
                    easing: x.EASING_IN
                }),
                a.Z.timing(n, {
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
                a.Z.timing(n, {
                    toValue: -y.FRAME_SIZE * e,
                    duration: y.FRAME_DURATION
                })
            );
        a.Z.sequence([
            a.Z.timing(t, {
                toValue: 0,
                duration: x.DURATION_OUT,
                easing: x.EASING_OUT
            }),
            a.Z.sequence(l),
            a.Z.timing(i, {
                toValue: 0,
                duration: 125
            })
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return a.Z.accelerate({
            transform: [
                {
                    scale: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: [x.SCALE_MIN, x.SCALE_MAX]
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
            l = o()(g.sprite, {
                [_.crossWhite]: i,
                [_.crossGrey]: !i
            });
        return (0, r.jsxs)(a.Z.div, {
            className: o()(g.transition, n),
            style: this.getWidthStyle(),
            children: [
                (0, r.jsx)('div', {
                    className: o()(g.spriteWrapper, b.horizontal, b.justifyCenter, b.alignCenter),
                    children: (0, r.jsx)(a.Z.div, {
                        className: l,
                        style: this.getSpriteStyle()
                    })
                }),
                (0, r.jsx)(a.Z.div, {
                    style: this.getScaleStyle(),
                    children: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), C(this, 'scaleAnimation', new a.Z.Value(0)), C(this, 'spriteAnimation', new a.Z.Value(0)), C(this, 'spriteOpacity', new a.Z.Value(0)), C(this, 'widthAnimation', new a.Z.Value(0));
    }
}
function j(e) {
    var t;
    let { participants: n, onContextMenu: i, className: l, onClick: a, width: u, guildId: b } = e,
        _ = (0, p.ZP)(),
        C = ((t = n.length), ((0, d.pxk)(d.EFr.SIZE_80) + 16) * t > u ? d.EFr.SIZE_40 : d.EFr.SIZE_80),
        y = (0, s.e7)([h.Z], () => h.Z.isFocused()),
        x = n.map((e) => {
            var t, n;
            if (e.type !== m.fO.USER) return null;
            let { user: l, voiceState: o, speaking: s, ringing: c } = e;
            return (0, r.jsx)(
                v,
                {
                    className: g.participant,
                    width: (0, d.pxk)(C),
                    theme: _,
                    children: (0, r.jsx)(
                        f.Z,
                        {
                            userId: l.id,
                            src: l.getAvatarURL(b, (0, d.pxk)(C), s && y),
                            size: C,
                            muted: null != (t = null == o ? void 0 : o.isVoiceMuted()) && t,
                            deafen: null != (n = null == o ? void 0 : o.isVoiceDeafened()) && n,
                            speaking: s,
                            ringing: c,
                            onClick: (t) => (null == a ? void 0 : a(e, t)),
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
        className: o()(g.root, l),
        children: x
    });
}
