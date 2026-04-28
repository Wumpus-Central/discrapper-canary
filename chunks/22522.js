n.d(t, { A: () => nc });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(456412),
    r = n(878549),
    c = n(313961);
n(321073);
var o = n(503698),
    d = n.n(o),
    u = n(615300),
    h = n(73939),
    p = n(462887),
    m = n(778712),
    x = n(890856),
    g = n(736653),
    A = n(531685),
    f = n(85448),
    j = n(806931),
    v = n(464466),
    y = n(653307),
    N = n(571876);
let E = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: u.A.Easing.inOut(u.A.Easing.back()),
    EASING_OUT: u.A.Easing.quad,
};
class C extends l.PureComponent {
    scaleAnimation = new u.A.Value(0);
    spriteAnimation = new u.A.Value(0);
    spriteOpacity = new u.A.Value(0);
    widthAnimation = new u.A.Value(0);
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
            u.A.parallel([
                u.A.timing(t, { toValue: 1, duration: E.DURATION_IN, easing: E.EASING_IN }),
                u.A.timing(n, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: n, spriteOpacity: i, widthAnimation: l } = this;
        i.setValue(1), n.setValue(0);
        let a = [];
        for (let e = 0; e < 23; e++) a.push(u.A.timing(n, { toValue: -26 * e, duration: 17 }));
        u.A.sequence([
            u.A.timing(t, { toValue: 0, duration: E.DURATION_OUT, easing: E.EASING_OUT }),
            u.A.sequence(a),
            u.A.timing(l, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return u.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [E.SCALE_MIN, E.SCALE_MAX] }) }],
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
            l = (0, p.M)(e),
            a = d()(v._y, { [N.cp]: l, [N.QB]: !l });
        return (0, i.jsxs)(u.A.div, {
            role: "listitem",
            className: d()(v.kY, n),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: d()(v.XY, y.xM, y.wq, y.Hu),
                    children: (0, i.jsx)(u.A.div, { className: a, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(u.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function I(e) {
    var t;
    let { participants: n, onContextMenu: l, className: s, onClick: r, width: c, guildId: o } = e,
        u = (0, g.Ay)(),
        p = ((t = n.length), ((0, m.FT)(m._3.SIZE_80) + 16) * t > c ? m._3.SIZE_40 : m._3.SIZE_80),
        y = (0, a.bG)([A.A], () => A.A.isFocused()),
        N = n.map((e) => {
            if (e.type !== j.lp.USER) return null;
            let { user: t, voiceState: n, speaking: a, ringing: s } = e;
            return (0, i.jsx)(
                C,
                {
                    className: v.Wp,
                    width: (0, m.FT)(p),
                    theme: u,
                    children: (0, i.jsx)(x.s, {
                        "aria-label": t.username,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => l?.(e, t),
                        children: (0, i.jsx)(
                            f.A,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(o, (0, m.FT)(p), a && y),
                                size: p,
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
    return (0, i.jsx)(h.F, { component: "div", role: "list", className: d()(v.zr, s), children: N });
}
var T = n(235986),
    _ = n(187322),
    S = n(408278),
    b = n(432017),
    R = n(353182),
    w = n(534890),
    P = n(92259),
    M = n(218429),
    k = n(834730),
    V = n(517461),
    D = n(770178),
    O = n(418126),
    L = n(266626),
    U = n(998740),
    G = n(732777),
    B = n(222446),
    F = n(97808),
    z = n(364522),
    H = n(228366),
    Y = n(720149),
    W = n(355622),
    K = n(408018),
    Z = n(201349),
    X = n(609425),
    q = n(922301),
    Q = n(368919),
    $ = n(451909),
    J = n(375199),
    ee = n(854627),
    et = n(447404),
    en = n(232835),
    ei = n(625494),
    el = n(427262),
    ea = n(652215),
    es = n(985018),
    er = n(200252);
let ec = (e) => {
        let { channel: t, message: n, out: l = !1, noAnimate: a = !1 } = e,
            s = (0, J.A)(n, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                noStyleAndInteraction: !1,
                allowDevLinks: !1,
                allowLinks: !1,
                previewLinkTarget: !1,
            }),
            r = n.author,
            c = el.Ay.getName(r),
            o = (0, X.A)({ userId: r.id, guildId: t.guild_id }),
            { avatarSrc: u, avatarDecorationSrc: h } = (0, ee.A)({ userId: r.id, guildId: t.guild_id, size: 48 });
        return (0, i.jsxs)("div", {
            className: d()(er.iU, { [er.FD]: l, [er.Tf]: a }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(F.eu, {
                        src: u,
                        avatarDecoration: h,
                        size: m._3.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(Q.A, { userName: c, displayNameStyles: o, effectDisplayType: q.G.STATIC, loop: !0 }),
                (0, i.jsxs)("div", {
                    className: er.fi,
                    children: [
                        (0, i.jsx)(k.E, { variant: "text-md/normal", className: er.Qs, children: s.content }),
                        n.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: d()(er.nM, er.rQ),
                                children: n.attachments
                                    .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            {
                                                src: e.url,
                                                width: 128,
                                                className: er.oh,
                                                alt: es.intl.string(es.t.X4IxWL),
                                            },
                                            e.id,
                                        ),
                                    ),
                            }),
                    ],
                }),
            ],
        });
    },
    eo = (e) => {
        let { channel: t, idle: n, showChat: a } = e,
            s = l.useRef(new Set()),
            [r, c] = l.useState([]),
            [o, u] = l.useState(0),
            h = l.useRef(null),
            p = l.useRef(!1),
            [m, x] = l.useState(!0),
            [g, A] = l.useState(""),
            [f, j] = l.useState((0, K.x7)(g));
        l.useEffect(() => {
            let e = s.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            l.useEffect(() => {
                let e = () => x(!0),
                    t = () => x(!1);
                return (
                    ei._.subscribe(ea.jej.TEXTAREA_FOCUS, e),
                    ei._.subscribe(ea.jej.TEXTAREA_BLUR, t),
                    () => {
                        ei._.unsubscribe(ea.jej.TEXTAREA_FOCUS, e), ei._.unsubscribe(ea.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            l.useEffect(() => {
                let e = h.current;
                null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
            }, [h]),
            l.useEffect(() => {
                let e = Date.now();
                c(
                    en.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                        .slice(-50),
                );
            }, [t]);
        let v = l.useCallback((e) => {
                c((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            y = l.useMemo(() => {
                let e = r[r.length - 1];
                if (null == e) return !0;
                if (o + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5e3;
                if (!t) {
                    let e = setTimeout(() => {
                        u(Date.now()), s.current.delete(e);
                    }, 5500);
                    s.current.add(e);
                }
                return t;
            }, [r, o]);
        return (
            l.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: i } = e,
                        l = en.A.getMessage(i.channel_id, i.id);
                    if (n === t.id && l?.state === "SENT") {
                        v(l);
                        let e = setTimeout(() => {
                            s.current.delete(e);
                            let t = h.current;
                            null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                        }, 10);
                        s.current.add(e);
                    }
                };
                return H.h.subscribe("MESSAGE_CREATE", e), () => H.h.unsubscribe("MESSAGE_CREATE", e);
            }, []),
            (0, i.jsxs)("div", {
                className: d()(er.X2, { [er.R]: !a }),
                onMouseEnter: () => (p.current = !0),
                onMouseLeave: () => (p.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(et.A, {
                        children: (0, i.jsx)("div", {
                            className: d()(er.TE, { [er.N7]: n }),
                            children: (0, i.jsx)(z.Ip, {
                                className: d()(er.b6, { [er.N7]: y && n }),
                                ref: h,
                                children: r.map((e) => (0, i.jsx)(ec, { channel: t, message: e, noAnimate: !0 }, e.id)),
                            }),
                        }),
                    }),
                    (0, i.jsx)(Z.Ay, {
                        className: d()(er.CQ, { [er.N7]: n && 0 === g.length }),
                        innerClassName: er.hF,
                        type: W.oU.HAVEN,
                        channel: t,
                        textValue: g,
                        richValue: f,
                        placeholder: "Send message",
                        onFocus: () => x(!0),
                        onBlur: () => x(!1),
                        focused: m,
                        disabled: !a,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== g && (A(t), j(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                i = n.trim();
                            if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                            let l = $.Ay.parse(t, i);
                            try {
                                return (
                                    await Y.A.sendMessage(t.id, l, !0, { location: "Haven" }),
                                    A(""),
                                    j((0, K.x7)("")),
                                    { shouldClear: !0, shouldRefocus: !1 }
                                );
                            } catch {
                                return { shouldClear: !1, shouldRefocus: !1 };
                            }
                        },
                    }),
                ],
            })
        );
    };
var ed = n(118019),
    eu = n(763827),
    eh = n(38405),
    ep = n(38050),
    em = n(572808);
let ex = (e, t) => {
        let n = (0, a.bG)([U.A], () => U.A.getSongs(e));
        return n?.[t];
    },
    eg = () => {
        let e = (0, a.bG)([eu.A], () => eu.A.getChannelId()),
            t = (0, a.bG)([U.A], () => null != e && U.A.isUserConnected(e)),
            n = (0, ep.n)((e) => e.genre),
            s = (0, ep.n)((e) => e.songIndex),
            r = (0, ep.n)((e) => e.playRadio),
            c = (0, ep.n)((e) => e.globalMute),
            o = (0, ep.n)((e) => e.playNextSong),
            d = (0, ep.n)((e) => e.volumes),
            u = l.useRef(null),
            h = l.useRef(null),
            p = l.useRef(null),
            m = ex(n, s),
            x = (0, a.bG)([U.A], () => U.A.assets);
        return (l.useEffect(() => {
            let e = u.current;
            null != e &&
                m?.src != null &&
                (e.pause(),
                (e.src = m.src),
                !c &&
                    r &&
                    t &&
                    e.play()?.catch((e) => {
                        eh.A.captureException(e);
                    }));
        }, [m?.src, c, r, t]),
        l.useEffect(() => {
            let e = h.current,
                n = p.current;
            null != e &&
                (c || !t
                    ? e.pause()
                    : e.play()?.catch((e) => {
                          eh.A.captureException(e);
                      })),
                null != n &&
                    (c || !t
                        ? n.pause()
                        : n.play()?.catch((e) => {
                              eh.A.captureException(e);
                          }));
        }, [c, t]),
        t)
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ed.A, {
                          ref: u,
                          onEnded: o,
                          volume: c ? 0 : d.radio,
                          children: (0, i.jsx)("source", { src: m?.src }),
                      }),
                      (0, i.jsx)(ed.A, {
                          ref: h,
                          volume: c ? 0 : d.environment,
                          children: (0, i.jsx)("source", { src: x?.sounds?.[em.qi.ENVIRONMENT] }),
                      }),
                      (0, i.jsx)(ed.A, {
                          ref: p,
                          volume: c ? 0 : d.campfire,
                          children: (0, i.jsx)("source", { src: x?.sounds?.[em.qi.CAMPFIRE] }),
                      }),
                  ],
              })
            : null;
    };
var eA = n(106236),
    ef = n(534514),
    ej = n(331322),
    ev = n(668953),
    ey = n(113494),
    eN = n(782134),
    eE = n(881636),
    eC = n(939249),
    eI = n(358618),
    eT = n(983851),
    e_ = n(82495),
    eS = n(692744),
    eb = n(368662),
    eR = n(459875);
let ew = (e) => {
        let { soundKey: t, globalMute: n } = e,
            l = (0, ep.n)((e) => e.volumes[t]),
            a = (0, ep.n)((e) => e.setVolume),
            s = (0, eS.el)(t);
        return (0, i.jsxs)("div", {
            className: eR.om,
            children: [
                (0, i.jsx)(k.E, { variant: "text-md/semibold", children: s }),
                (0, i.jsx)(eA.A, {
                    initialValue: (l ?? 0.2) * 100,
                    disabled: n,
                    maxValue: 100,
                    asValueChanges: (e) => {
                        a(t, e / 100);
                    },
                    onValueChange: (e) => {
                        a(t, e / 100);
                    },
                }),
            ],
        });
    },
    eP = (e) => {
        let { open: t, close: n, style: l, triggerRef: s } = e,
            r = (0, e_.A)(
                null,
                () => {
                    t && n();
                },
                s,
            ),
            c = (0, ep.n)((e) => e.globalMute),
            o = (0, ep.n)((e) => e.setGlobalMute),
            u = (0, ep.n)((e) => e.genre),
            h = (0, ep.n)((e) => e.setGenre),
            p = (0, ep.n)((e) => e.songIndex),
            m = (0, ep.n)((e) => e.playRadio),
            x = (0, ep.n)((e) => e.setPlayRadio),
            g = (0, ep.n)((e) => e.playPrevSong),
            A = (0, ep.n)((e) => e.playNextSong),
            f = (0, a.bG)([U.A], () => U.A.assets),
            j = ex(u, p),
            v = !c && m;
        return (0, i.jsxs)("div", {
            ref: r,
            className: d()(eR.ZR, { [eR.R]: !t }),
            style: l,
            children: [
                (0, i.jsx)("div", {
                    className: eR.wx,
                    children: (0, i.jsx)(ef.D, {
                        variant: "heading-md/medium",
                        color: "text-subtle",
                        children: es.intl.string(eb.default.vaWEe0),
                    }),
                }),
                (0, i.jsxs)(ej.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 0,
                    className: eR.om,
                    children: [
                        null != j &&
                            (0, i.jsxs)(ej.B, {
                                children: [
                                    (0, i.jsx)(k.E, { variant: "text-sm/semibold", children: j.song }),
                                    (0, i.jsx)(k.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: es.intl.format(eb.default.i22p4p, { artist: j.artist }),
                                    }),
                                ],
                            }),
                        (0, i.jsxs)(ej.B, {
                            direction: "horizontal",
                            children: [
                                (0, i.jsx)(S.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": es.intl.string(eb.default.FL0ePz),
                                    icon: ev.f,
                                    onClick: g,
                                }),
                                (0, i.jsx)(S.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": es.intl.string(eb.default.zsW8PM),
                                    icon: m ? ey.E : eN.u,
                                    onClick: (e) => {
                                        e.preventDefault(), e.stopPropagation(), x(!m);
                                    },
                                }),
                                (0, i.jsx)(S.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": es.intl.string(eb.default["+nt9+r"]),
                                    icon: eE.u,
                                    onClick: A,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(ej.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    gap: 12,
                    children: Object.values(em.TU).map((e) =>
                        (0, i.jsx)(
                            eC.D,
                            {
                                className: eR.vk,
                                onClick: () => {
                                    u !== e ? (h(e), x(!0)) : x(!m);
                                },
                                children: (0, i.jsxs)(ej.B, {
                                    align: "center",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: d()(eR.D$, { [eR.wH]: e === u }),
                                            style: {
                                                backgroundImage: `url('${f?.genres?.[e]?.thumbnail}')`,
                                                backgroundSize: "cover",
                                            },
                                            children: (0, i.jsxs)("div", {
                                                className: d()(eR.BW, { [eR.wH]: e === u, [eR.he]: v, [eR.Ft]: !v }),
                                                children: [
                                                    (0, i.jsx)("div", { className: eR.Om }),
                                                    (0, i.jsx)("div", { className: eR.Om }),
                                                    (0, i.jsx)("div", { className: eR.Om }),
                                                ],
                                            }),
                                        }),
                                        (0, i.jsx)(ef.D, {
                                            variant: "heading-sm/normal",
                                            color: "text-subtle",
                                            children: e,
                                        }),
                                    ],
                                }),
                            },
                            e,
                        ),
                    ),
                }),
                (0, i.jsxs)(ej.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [
                        (0, i.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: es.intl.string(eb.default.IWSNp9),
                        }),
                        (0, i.jsx)("div", {
                            className: d()({ [eR.SU]: c }),
                            children: (0, i.jsx)(S.K, {
                                variant: "icon-only",
                                "aria-label": es.intl.string(eb.default.Tf8XqQ),
                                icon: c ? eI._ : eT.H,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), o(!c);
                                },
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(ej.B, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(ew, { soundKey: em.wS.RADIO, globalMute: c }),
                        (0, i.jsx)(ew, { soundKey: em.wS.ENVIRONMENT, globalMute: c }),
                        (0, i.jsx)(ew, { soundKey: em.wS.CAMPFIRE, globalMute: c }),
                    ],
                }),
            ],
        });
    };
var eM = n(717558),
    ek = n(287809),
    eV = n(562153),
    eD = n(731854),
    eO = n(82410);
let eL = l.memo(function (e) {
    let { channel: t, participant: n } = e,
        s = (0, a.bG)([ek.default], () => ek.default.getUser(n.user.id), [n.user.id]),
        r = l.useMemo(() => eV.Ay.getNickname(t.guild_id, t.id, s) ?? s?.globalName ?? n.userNick, [t, s, n.userNick]),
        c = (0, eM.A)({ userId: n.user.id, context: eD.x.DEFAULT });
    if (null == s) return null;
    let o = m._3.SIZE_32,
        u = m.vC[o].size,
        h = s.getAvatarURL(t.guild_id, u);
    return (0, i.jsxs)("div", {
        className: d()(eO.vB, { [eO.zY]: c }),
        children: [
            (0, i.jsx)(F.eu, { className: eO.my, size: o, src: h, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: eO.Xh,
                children: (0, i.jsx)(k.E, { variant: "text-xs/medium", color: "text-default", children: r }),
            }),
        ],
    });
});
function eU(e) {
    let { channel: t, participants: n } = e,
        a = (0, G.A)(t.id),
        s = l.useMemo(() => {
            if (null == a) return [];
            let e = new Set(a.participants.map((e) => e.userId));
            return n.filter((t) => !(!(0, j.Xw)(t) || e.has(t.user.id)));
        }, [n, a]);
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: eO.kL,
              children: s.map((e) => ((0, j.Xw)(e) ? (0, i.jsx)(eL, { channel: t, participant: e }, e.user.id) : null)),
          });
}
var eG = n(683807);
let eB = (e) => {
        let { channel: t, idle: n, className: a, participants: s } = e,
            r = (0, G.A)(t.id),
            [c, o] = l.useState(!1),
            u = l.useCallback(
                (e) => {
                    O.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [h, p] = (0, V.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                o(!0);
            }, 2500);
        }, []);
        let [m, x] = l.useState(0.65),
            [g, A] = l.useState(0.65),
            [f, j] = l.useState(0.65),
            [v, y] = l.useState({ x: 0, y: 0 }),
            [N, E] = l.useState(!1),
            [C, I] = l.useState(0),
            [T, L] = l.useState({ x: 0, y: 0 }),
            [U, F] = l.useState({ x: 0, y: 0 }),
            [z, H] = l.useState(!1),
            Y = l.useRef(null),
            [W, K] = l.useState(null),
            Z = (0, D.w)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    l = t.width,
                    a = t.height,
                    s = (l / B.i.width) * 1.5,
                    r = (a / B.i.height) * 1.5,
                    c = (l / B.i.width) * 1.1,
                    o = (a / B.i.height) * 1.1;
                L({ x: l / 2 + i.x, y: a / 2 + i.y });
                let d = Math.max(s, r);
                if ((x(Math.max(c, o)), j(d), null != Y.current)) {
                    let e = Y.current.getBoundingClientRect();
                    K({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            X = l.useCallback(
                (e) => {
                    let t = Math.max(e, m),
                        n = Z.current?.getBoundingClientRect();
                    if (null == n) return;
                    let i = { x: 1156, y: 1110 },
                        l = !0,
                        a = 0,
                        s = n.height / t;
                    for (; l && a < 10; ) (l = i.y + s / 2 > 1536) && (i.y -= 32), a++;
                    let r = i.x * t,
                        c = i.y * t,
                        o = n.width / 2 - r,
                        d = n.height / 2 - c;
                    A(t), y({ x: o, y: d });
                },
                [Z, m],
            );
        l.useEffect(() => {
            X(f);
        }, [f, X]);
        let q = l.useCallback(
            (e) => {
                let t = Z.current?.getBoundingClientRect();
                if (null == t) return;
                let n = t.height / g,
                    i = t.width / g,
                    l = { x: e.x / g, y: e.y / g },
                    a = e.y / g > 0,
                    s = e.x / g > 0,
                    r = l.y - n < -1536,
                    c = l.x - i < -2180;
                r || a || s || c || y(e);
            },
            [Z, g],
        );
        return (0, i.jsx)(_.vN, {
            children: (0, i.jsxs)("div", {
                ref: Z,
                className: d()(eG.km, a),
                onClick: () => {
                    I(0);
                },
                onMouseDown: () => E(Date.now()),
                onMouseUp: (e) => {
                    if (null != Z.current) {
                        if (C < 2) {
                            let n = Date.now(),
                                i = Z.current.getBoundingClientRect(),
                                l = { x: (e.pageX - i.x - v.x) / g, y: (e.pageY - i.y - v.y) / g };
                            !1 !== N && n - N > 250 && O.Ay.update(t.id, { position: l });
                        }
                        E(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== N &&
                        (I(C + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        q({ x: v.x + e.movementX, y: v.y + e.movementY })),
                        F({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: eG.VT,
                        style: { transform: `translate(${v.x}px, ${v.y}px) scale(${g}) ` },
                        children: (0, i.jsx)(B.A, {
                            roomSeats: r.seats,
                            roomParticipants: r.participants,
                            participants: s,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !c,
                            onSeatClick: u,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: d()(eG.nM, eG.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: d()(eG.nM, { [eG.R]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: Y,
                                        children: (0, i.jsx)(S.K, {
                                            variant: "icon-only",
                                            "aria-label": es.intl.string(eb.default.W7TAH4),
                                            icon: b.T,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), H(!z);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(S.K, {
                                        variant: "icon-only",
                                        "aria-label": es.intl.string(eb.default.O7EDNk),
                                        icon: h ? R._ : w.o,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), p(!h);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eo, { channel: t, idle: n, showChat: h ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: d()(eG.nM, { [eG.R]: n }),
                                children: [
                                    (0, i.jsx)(S.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: P.V,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), X(g - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(S.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: M.r,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), X(g + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(eU, { channel: t, participants: s }),
                    (0, i.jsx)(eP, {
                        open: z,
                        close: () => H(!1),
                        triggerRef: Y,
                        style: null != W ? { left: W.x, top: W.y } : void 0,
                    }),
                    (0, i.jsx)(eg, {}),
                    (0, i.jsx)("div", {
                        className: d()(eG.Lw, { [eG.FD]: c }),
                        children: (0, i.jsx)("div", {
                            className: eG.dH,
                            children: (0, i.jsx)(k.E, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    eF = (e) => {
        let t = L.s.useConfig({ location: "Haven" }).enabled,
            n = (0, a.bG)([U.A], () => U.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || O.Ay.connect(e.channel.id);
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(eB, { ...e })
            : null;
    };
var ez = n(821609),
    eH = n(956793),
    eY = n(164617),
    eW = n(47167),
    eK = n(202384),
    eZ = n(51758),
    eX = n(141035),
    eq = n(175203),
    eQ = n(426660),
    e$ = n(376460);
let eJ = function (e) {
    let { participants: t, channel: n, hasConnectPermission: a } = e,
        s = t.filter(j.Xw),
        r = (0, eZ.H)(n.guild_id),
        c = l.useCallback(() => {
            r ? (0, eK.Ze)(n.guild_id, () => eH.default.selectVoiceChannel(n.id)) : eH.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, r]),
        o = 4 === s.length ? 2 : 3,
        d = (0, eW.Ay)(n);
    return (0, i.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, i.jsx)(eQ.A, {}),
            (0, i.jsx)("div", {
                className: e$.os,
                style: { maxWidth: 168 * o },
                children: s
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            eq.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: e$.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: eY.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(ef.D, { className: e$.HA, variant: "heading-xxl/semibold", children: d }),
            (0, i.jsx)("div", {
                className: e$.Nu,
                children: (0, i.jsx)(k.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === s.length
                            ? es.intl.string(es.t.zSqdrS)
                            : 1 === s.length
                              ? es.intl.formatToPlainString(es.t.BUyJIG, { a: (0, eX.A)(n, s[0]) })
                              : 2 === s.length
                                ? es.intl.formatToPlainString(es.t["dcyZf/"], {
                                      a: (0, eX.A)(n, s[0]),
                                      b: (0, eX.A)(n, s[1]),
                                  })
                                : s.length > 2
                                  ? es.intl.formatToPlainString(es.t["44/Obu"], {
                                        a: (0, eX.A)(n, s[0]),
                                        b: (0, eX.A)(n, s[1]),
                                        n: s.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: e$.PD,
                children: (0, i.jsx)(ez.$, {
                    variant: "overlay-primary",
                    text: a ? es.intl.string(es.t["96ANUN"]) : es.intl.string(es.t.TVBCKZ),
                    onClick: c,
                    disabled: !a,
                }),
            }),
        ],
    });
};
var e0 = n(604121),
    e1 = n(775602),
    e2 = n(108713),
    e5 = n(944785);
function e3(e) {
    let { height: t } = e,
        l = (0, a.bG)([e1.A], () => e1.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: e5.zr,
        children: [
            (0, i.jsx)(e0.a, {
                importData: () =>
                    n
                        .e("35066")
                        .then(n.t.bind(n, 844512, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !l,
                className: d()(e5.Qw, { [e5.R]: t <= 280 }),
            }),
            (0, i.jsx)(ef.D, {
                className: e5.wx,
                variant: "heading-md/bold",
                children: es.intl.string(es.t["C+tj1c"]),
            }),
            (0, i.jsx)(k.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: es.intl.format(es.t["nNHd/y"], { onCancel: e2.ZG }),
            }),
        ],
    });
}
var e6 = n(110259),
    e8 = n(121894),
    e4 = n(554146),
    e7 = n(933958),
    e9 = n(782091),
    te = n(139286),
    tt = n(826673),
    tn = n(855687),
    ti = n(267102),
    tl = n(962125),
    ta = n(455072);
let ts = 16 / 9;
function tr(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function tc(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            l = Math.floor(i / 2);
        n((t += l)) ? ((e = t + 1), (i -= l + 1)) : (i = l);
    }
    return e;
}
function to(e) {
    let { className: t, children: n, keyExtractor: a, paddingTop: s = 0, paddingBottom: r = 0 } = e,
        [c, o] = l.useState({ width: 0, height: 0 }),
        { width: u, height: h } = c,
        p = n?.length ?? 0,
        m = u - 16,
        x = h - (s + r),
        {
            tileStyle: g,
            tileWidth: A,
            rows: f,
            columns: j,
        } = l.useMemo(
            () =>
                (function (e, t, n) {
                    var i, l, a;
                    let s,
                        r,
                        c,
                        o,
                        {
                            rows: d,
                            columns: u,
                            tileWidth: h,
                        } = ((i = e),
                        (l = t),
                        (a = n),
                        (r = Math.floor(l / 25)),
                        (s =
                            i > 25
                                ? tc(r, l, (e) => {
                                      let t;
                                      return tr(e, l) * (Math.ceil((a - (t = e / ts)) / (8 + t)) + 1) > 25;
                                  })
                                : tc(r, l, (e) => {
                                      let t;
                                      return tr(e, l) * (Math.floor((a - (t = e / ts)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (o = Math.ceil(i / (c = tr(s, l)))),
                        { tileWidth: s, columns: Math.max(1, c), rows: o });
                    return { tileStyle: { width: h }, tileWidth: h, rows: d, columns: u };
                })(p, m, x),
            [p, m, x],
        ),
        v = j + 1,
        y = v * A + (v - 1) * 8 <= u,
        N = Math.floor(A / ts) + 8,
        E = Math.max(0, x - N * f) / 2;
    return (0, i.jsx)(tl.A, {
        fade: !0,
        className: t,
        listPadding: [s + E, 0, r + E - 8, 8],
        renderRow: function (e) {
            let t = e * j;
            return (0, i.jsx)(
                "div",
                {
                    className: ta.nM,
                    children: n?.slice(t, t + j)?.map((e, n) => {
                        let l = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: g,
                                className: d()(ta.Vs, {
                                    [ta.E3]: y,
                                    [ta.k4]: l >= (f - 1) * j,
                                    [ta.Kk]: (l + 1) % j == 0 || l === p - 1,
                                }),
                                children: (0, i.jsx)("div", { className: ta.eP, children: e(A) }),
                            },
                            a?.(l) ?? l,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: f,
        rowCountBySection: [f],
        rowHeight: N,
        onResize: o,
    });
}
var td = n(530804),
    tu = n(71393),
    th = n(576705),
    tp = n(661531),
    tm = n(990078),
    tx = n(323384),
    tg = n(43990),
    tA = n(285796),
    tf = n(192308),
    tj = n(231723),
    tv = n(825484),
    ty = n(283973),
    tN = n(789645),
    tE = n(964486),
    tC = n(648027),
    tI = n(855446),
    tT = n(793574),
    t_ = n(688810),
    tS = n(975412),
    tb = n(392054),
    tR = n(953727);
function tw(e) {
    let { width: t = 24, height: n = 24, color: l = "currentColor", className: a, foreground: s, ...r } = e;
    return (0, i.jsx)("svg", {
        ...(0, tR.A)(r),
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.625 3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V5.375C21.0057 4.08803 19.9197 3 18.625 3ZM19 19V5H4.99999V19H19Z",
            className: s,
            fill: l,
        }),
    });
}
var tP = n(954571),
    tM = n(272812),
    tk = n(17795);
function tV(e) {
    let {
        channel: t,
        guild: n,
        width: l,
        inPopout: a,
        handleClose: s,
        userParticipantCount: r,
        activitiesEnabled: c = !0,
    } = e;
    return l < 250
        ? (0, i.jsx)(tD, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(tL, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
          : (0, i.jsx)(tO, { channel: t, guild: n, width: l, inPopout: a, activitiesEnabled: c });
}
function tD(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: s } = (0, t_.Ay)(tT.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(t_.f5, {
        value: a,
        children: (0, i.jsxs)(tM.A, {
            className: tk.zr,
            children: [
                (0, i.jsx)(tm.m, {
                    asContainer: !0,
                    text: es.intl.string(es.t.qJvTKQ),
                    children: (0, i.jsx)(eC.D, {
                        onClick: () => {
                            (0, tS.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: s,
                            });
                        },
                        className: tk.F1,
                        children: (0, i.jsx)("div", {
                            className: tk.zc,
                            children: (0, i.jsx)(tx.k, {
                                size: "custom",
                                color: "currentColor",
                                width: 40,
                                height: 40,
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(tg.N, {
                    theme: ea.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(eC.D, {
                            onClick: l,
                            className: d()(e, tk.lg),
                            children: (0, i.jsx)(tA.a, {
                                size: "md",
                                color: "currentColor",
                                className: tk.yP,
                                secondaryColor: tp.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function tO(e) {
    let { channel: t, guild: a, inPopout: s, activitiesEnabled: r = !0 } = e;
    l.useEffect(() => {
        tP.default.track(ea.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: c, newestAnalyticsLocation: o } = (0, t_.Ay)(tT.A.VC_TILE_ACTIVITY_INVITE);
    function u() {
        (0, tf.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("36685"),
                    n.e("59957"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
                return (n) => (0, i.jsx)(e, { ...n, guild: a, channel: t, source: ea.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: s ? tj.KX : tj.SY },
        );
    }
    function h() {
        (0, tS.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: s,
            analyticsLocation: o,
        });
    }
    return (0, i.jsx)(t_.f5, {
        value: c,
        children: (0, i.jsx)(tg.N, {
            disableAdaptiveTheme: !0,
            theme: ea.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(tM.A, {
                    className: d()(tk.zr, tk.co, e),
                    children: [
                        (0, i.jsx)("img", { src: "/assets/664390de11a80444.svg", className: tk.Qw, alt: "" }),
                        (0, i.jsxs)(tv.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(ez.$, {
                                    variant: "secondary",
                                    icon: ty.R,
                                    text: es.intl.string(es.t["EE+P0H"]),
                                    onClick: u,
                                }),
                                r &&
                                    (0, i.jsx)(ez.$, {
                                        variant: "secondary",
                                        icon: tx.k,
                                        text: es.intl.string(es.t.qnFavR),
                                        onClick: h,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function tL(e) {
    let { channel: t, guild: n, handleClose: a, width: s, userParticipantCount: r } = e;
    (0, tE.Ay)(() => {
        tP.default.track(ea.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: r,
        });
    });
    let c = (0, tC.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: o } = (0, t_.Ay)(tT.A.VC_TILE_ACTIVITY_SUGGESTION),
        u = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(t_.f5, {
        value: o,
        children: (0, i.jsxs)(tM.A, {
            className: tk.zr,
            children: [
                s > 300
                    ? (0, i.jsx)(k.E, {
                          className: tk.R_,
                          variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: es.intl.string(es.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: d()(tk.Di, { [tk.qy]: s <= 300 }),
                    children: c.map((e) =>
                        (0, i.jsx)(
                            tI.C,
                            {
                                context: u,
                                activityItem: e,
                                aspectRatio: tI.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: tk.KU,
                                commandOrigin: tb.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(eC.D, {
                    className: tk.HI,
                    onClick: function () {
                        tP.default.track(ea.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: r,
                        }),
                            (0, tt.Dr)(e4.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(tw, {}),
                        (0, i.jsx)(k.E, { variant: "text-sm/medium", children: es.intl.string(es.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(eC.D, {
                    className: tk.cG,
                    onClick: function () {
                        tP.default.track(ea.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: r,
                        }),
                            a();
                    },
                    children: (0, i.jsx)(tN.P, { size: "md", color: "currentColor", className: tk.b }),
                }),
            ],
        }),
    });
}
let tU = (0, n(353640).v)(() => ({ dismissedActivityEntryPointTileChannel: null }));
var tG = n(526610);
function tB(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: s,
            onContextMenu: r,
            channel: o,
            className: d,
            inCall: u,
            totalNumberOfParticipants: h,
            popoutType: p,
        } = e,
        m = (0, ti.Us)() === ea.BRT.POPOUT,
        x = (0, a.bG)([tu.A], () => tu.A.getGuild(o.guild_id), [o.guild_id]),
        { dismissedActivityEntryPointTileChannel: g } = tU(),
        A = (0, a.bG)([c.A], () => c.A.getUserParticipantCount(o.id), [o]),
        f = (0, td.vp)(o.id, t),
        j = l.useCallback(() => {
            (0, e8.r)(() => {
                tU.setState({ dismissedActivityEntryPointTileChannel: o.id });
            });
        }, [o.id]);
    l.useEffect(() => {
        null != g &&
            o.id !== g &&
            (0, e8.r)(() => {
                tU.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [o.id, g]);
    let v = (0, a.bG)([th.A], () => o.isPrivate() || (0, tn.K)(th.A, x, o), [x, o]),
        y = x?.afkChannelId === o.id,
        N = o.userLimit <= 0 || o.userLimit > 1,
        E = (0, a.bG)([e7.Ay], () => e7.Ay.getEmbeddedActivitiesForChannel(o.id).length <= 0),
        C = (0, tt.JZ)(e4.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        I = (0, e9.et)(o.id) !== e9.xy.CAN_LAUNCH,
        T = null != g && g === o.id,
        _ = f.map(
            (e) => (t) =>
                (0, i.jsx)(
                    eq.Ay,
                    {
                        participant: e,
                        channel: o,
                        className: tG.V,
                        onClick: n,
                        onDoubleClick: s,
                        onContextMenu: r,
                        inCall: u,
                        width: t,
                        popoutType: p,
                    },
                    e.id,
                ),
        );
    (0, te.A)(
        {
            type: e6.ImpressionTypes.VIEW,
            name: e6.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: h, can_invite: v, is_afk_channel: y, channel_user_limit: o.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let S = E && !I;
    null != x &&
        !y &&
        (A >= 2 && S && !C && !T
            ? _.push((e) =>
                  (0, i.jsx)(tV, {
                      channel: o,
                      guild: x,
                      width: e,
                      inPopout: m,
                      handleClose: j,
                      userParticipantCount: A,
                  }),
              )
            : N &&
              1 === A &&
              v &&
              _.push((e) =>
                  (0, i.jsx)(tV, {
                      channel: o,
                      guild: x,
                      width: e,
                      inPopout: m,
                      handleClose: j,
                      userParticipantCount: A,
                      activitiesEnabled: S,
                  }),
              ));
    let b = l.useCallback((e) => f[e]?.id ?? "empty-tile", [f]);
    return (0, i.jsx)(to, { className: d, keyExtractor: b, paddingTop: 64, paddingBottom: 64, children: _ });
}
var tF = n(123924),
    tz = n(717421),
    tH = n(866323),
    tY = n(475743),
    tW = n(216418),
    tK = n(80051),
    tZ = n(495544),
    tX = n(969341),
    tq = n(724442),
    tQ = n(506774),
    t$ = n(31728),
    tJ = n(205297),
    t0 = n(334463),
    t1 = n(566555),
    t2 = n(604949);
let t5 = "CameraPreviewPosition";
function t3(e) {
    let { width: t, onContextMenuParticipant: n, height: s, channel: r, participants: c, onSelectParticipant: o } = e,
        [u, h] = (function () {
            let [e, t] = l.useState(() => tQ.w.get(t5, ea.CUs.BOTTOM_RIGHT));
            return [
                e,
                l.useCallback((e) => {
                    tQ.w.set(t5, e), t(e);
                }, []),
            ];
        })(),
        p = l.useRef(null),
        m = null == r.getGuildId() ? 70 : 50,
        x = (0, a.bG)([t0.A], () => t0.A.pipWidth(j.R8.CAMERA_PREVIEW)),
        g = c.length,
        A = x * g + 8 * (g - 1),
        f = l.useMemo(
            () => ({
                minWidth: j.mn[j.R8.CAMERA_PREVIEW] * g + 8 * (g - 1),
                maxWidth: j.cF[j.R8.CAMERA_PREVIEW] * g + 8 * (g - 1),
            }),
            [g],
        );
    l.useLayoutEffect(() => {
        p.current?.ensureIsInPosition();
    }, [c.length]);
    let v = l.useCallback(
            (e) => {
                let t = 0 === g ? e : (e - 8 * (g - 1)) / g;
                t$.EB(t, j.R8.CAMERA_PREVIEW);
            },
            [g],
        ),
        y = l.useCallback(
            (e, t) => {
                h(t);
            },
            [h],
        );
    return (0, i.jsx)("div", {
        className: t1.kL,
        children: (0, i.jsx)(tJ.S, {
            position: u,
            id: 0,
            width: A,
            ref: p,
            onMove: y,
            onResize: v,
            maxX: t,
            maxY: s,
            edgeOffsetTop: m,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: f,
            children: (0, i.jsx)("div", {
                className: t1.iA,
                children: c.map((e) =>
                    (0, i.jsx)(
                        eq.Ay,
                        {
                            participant: e,
                            channel: r,
                            onContextMenu: n,
                            className: d()(t1.Vs, t2.a8),
                            fit: eq.Yl.COVER,
                            inCall: !0,
                            popoutType: eY.N.NO_POPOUT,
                            width: 160,
                            onClick: o,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
var t6 = n(403362),
    t8 = n(51082),
    t4 = n(163432),
    t7 = n(349488),
    t9 = n(196934);
let ne = 16 / 9,
    nt = 8 + t4.Vp;
function nn(e) {
    let t,
        n,
        a,
        s,
        r,
        {
            onSelectParticipant: c,
            onContextMenuParticipant: o,
            onFullscreenParticipant: u,
            participants: h,
            filteredParticipants: p,
            popoutType: m,
            inCall: x,
            channel: g,
            selectedParticipant: A,
            showParticipants: f = !0,
            className: v,
            width: y,
            height: N,
            layout: E,
            idle: C,
        } = e,
        I = tX.Ay.getVideoComponent(),
        T = tZ.default.getId(),
        [_, S] = l.useState(null),
        b = (0, tY.A)(_),
        [R, w] = l.useState(!0),
        [P, M] = l.useState(!1),
        k = A.type === j.lp.ACTIVITY,
        V = (0, tW.A)(k ? A.applicationId : void 0),
        D = !k && null != A.streamId,
        O = N <= 2 * nt + 144,
        L = f && !O,
        U = (0, tY.A)(L),
        G = E === ea.DUB.MINIMUM || E === ea.DUB.NORMAL,
        B = !O && (!G || k),
        F =
            ((t = (0, l.useRef)(!1)),
            (n = (0, l.useRef)(B)),
            (0, l.useEffect)(() => {
                (t.current = B !== n.current), (n.current = B);
            }, [B]),
            (0, l.useEffect)(() => {
                let e = setTimeout(() => (t.current = !1), 100);
                return () => clearTimeout(e);
            }, [B, 100]),
            (a = B !== (0, tq.A)(n)),
            (s = (0, tq.A)(t)),
            a || s),
        z = ((0, tY.A)(A.id) ?? A.id) !== A.id,
        H = 0;
    (k || L) && (H += 72), k && !L && (B ? (H += 48) : (H += 8)), L && (H += 0.5 * nt + 8);
    let Y = l.useMemo(
            () => (k && V ? y / (N - 2 * H) : D && null != _ && _.width > 0 && _.height > 0 ? _.width / _.height : ne),
            [D, _, k, y, N, H, V],
        ),
        W = N - 2 * H,
        K = k && V ? y : W * Y,
        Z = Math.floor(Math.min(y, K) / Y),
        X = N > y / Y + 72 + nt + 8;
    r = L || k ? (L ? -16 : -8) : 40 + Math.max(0, 72 - (N - Z) / 2);
    let q = Math.max(0, 72 - (N - Z) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            w(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let Q = R || null == b,
        $ = Q ? "animate-never" : "animate-always",
        J = (0, tz.z)(
            {
                value: +!!L,
                delay: X || !L ? 0 : 100,
                config: { ...tF.config.stiff, clamp: !0 },
                onStart: () => M(!0),
                onChange: () => ei._.dispatch(ea.jej.REMEASURE_TARGET),
                onRest: () => {
                    M(!1), ei._.dispatch(ea.jej.REMEASURE_TARGET);
                },
            },
            $,
        ),
        ee = (0, tz.z)({ value: +!!L, config: { ...tF.config.stiff, clamp: !0 } }, $),
        et = (0, tz.z)(
            { value: K, config: { ...tF.config.stiff, clamp: !0 } },
            (U === L && ee.value.idle && !F) || z || Q ? "animate-never" : "animate-always",
        ),
        en = (0, tz.z)({ value: r, config: { ...tF.config.stiff, clamp: !0 } }, $),
        el = (0, tH.p)(
            A,
            {
                keys: (e) => e?.id,
                config: { ...tF.config.stiff, clamp: !0 },
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            $,
        ),
        es = l.useCallback((e) => {
            S(e), w(!1);
        }, []),
        er = L
            ? []
            : null == A || A.type === j.lp.ACTIVITY
              ? []
              : [
                    A.type === j.lp.STREAM
                        ? h.find((e) => e.type === j.lp.USER && e.id === A?.user.id && e.id !== T && (0, t8.Ay)(e))
                        : null,
                    A.type === j.lp.USER
                        ? h.find((e) => e.type === j.lp.STREAM && e.user.id === A?.user.id && null != e.streamId)
                        : null,
                    A.id !== T ? h.find((e) => e.type === j.lp.USER && e.id === T && (0, t8.Ay)(e)) : null,
                ].filter(t6.Vq),
        { visibleParticipants: ec, participantTileWidth: eo } = (0, t4.i4)(y, p);
    return (0, i.jsxs)("div", {
        className: d()(t9.zr, t7.tR, v),
        children: [
            (0, i.jsxs)("div", {
                className: t9.QX,
                style: { opacity: D && R ? 0 : 1 },
                children: [
                    (0, i.jsxs)(tF.animated.div, {
                        className: t9.pc,
                        style: { top: ee.value.to((e) => (-e * nt) / 2) },
                        children: [
                            (0, i.jsx)(tF.animated.div, {
                                style: { width: et.value },
                                className: t9.tN,
                                children: (0, i.jsx)("div", {
                                    className: t7.xS,
                                    style: { aspectRatio: Y },
                                    children: el((e, t, n) => {
                                        let { key: l } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  tF.animated.div,
                                                  {
                                                      className: t7.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(eq.Ay, {
                                                          focused: !0,
                                                          noBorder: K >= y || W >= N,
                                                          channel: g,
                                                          className: t7.JS,
                                                          videoComponent: I,
                                                          width: y,
                                                          participant: t,
                                                          onClick: c,
                                                          onDoubleClick: u,
                                                          onContextMenu: o,
                                                          onVideoResize: es,
                                                          inCall: x,
                                                          popoutType: m,
                                                          controlsBottom: q,
                                                      }),
                                                  },
                                                  l,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            B
                                ? (0, i.jsx)(tF.animated.div, {
                                      className: d()(t9.$l, { [t9.N7]: C }),
                                      style: { bottom: en.value },
                                      children: (0, i.jsx)(tK.A, {
                                          channelId: g.id,
                                          isParticipantsOpen: f,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(tF.animated.div, {
                        className: t9.Vx,
                        style: {
                            translateY: J.value.to((e) => (e * nt) / 2),
                            opacity: J.value,
                            visibility: J.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(t4.Ay, {
                            channel: g,
                            onClick: c,
                            onContextMenu: o,
                            onDoubleClick: u,
                            participants: ec,
                            participantTileWidth: eo,
                            selectedParticipantId: A.id,
                            inCall: x,
                            popoutType: m,
                            paused: P || !f,
                        }),
                    }),
                ],
            }),
            er.length > 0
                ? (0, i.jsx)(t3, {
                      onContextMenuParticipant: o,
                      width: y,
                      height: N,
                      channel: g,
                      participants: er,
                      onSelectParticipant: c,
                  })
                : null,
        ],
    });
}
var ni = n(367513),
    nl = n(19575),
    na = n(398706);
let ns = nl.Ay.getEnableHardwareAcceleration()
    ? function () {
          return (0, i.jsx)("div", {
              children: (0, i.jsxs)("div", {
                  className: na.pm,
                  children: [
                      (0, i.jsx)("div", { className: na.M }),
                      (0, i.jsx)("div", { className: na.CB }),
                      (0, i.jsx)("div", { className: na.d4 }),
                      (0, i.jsx)("div", { className: na.Vh }),
                      (0, i.jsx)("div", { className: na.KF }),
                  ],
              }),
          });
      }
    : function () {
          return (0, i.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1000",
              height: "1000",
              fill: "none",
              viewBox: "0 0 1000 1000",
              preserveAspectRatio: "none",
              style: { position: "absolute", top: 0, width: "100%" },
              children: [
                  (0, i.jsxs)("g", {
                      clipPath: "url(#a)",
                      children: [
                          (0, i.jsx)("path", { fill: "#000", d: "M1000 0H0v1000h1000V0Z" }),
                          (0, i.jsxs)("g", {
                              fill: "#1D0066",
                              filter: "url(#b)",
                              children: [
                                  (0, i.jsx)("path", {
                                      d: "M52.5 683C374.206 683 635 413.028 635 80S374.206-523 52.5-523-530-253.028-530 80s260.794 603 582.5 603Z",
                                  }),
                                  (0, i.jsx)("path", {
                                      d: "M938.5 534c300.72 0 544.5-210.202 544.5-469.5S1239.22-405 938.5-405C637.781-405 394-194.798 394 64.5S637.781 534 938.5 534Z",
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("g", {
                              fill: "#5865F2",
                              filter: "url(#c)",
                              opacity: ".8",
                              children: [
                                  (0, i.jsx)("path", {
                                      d: "M93 110.8c122.607 0 222-71.366 222-159.4S215.607-208 93-208s-222 71.366-222 159.4 99.393 159.4 222 159.4ZM1004 110.8c122.61 0 222-71.366 222-159.4S1126.61-208 1004-208c-122.607 0-222 71.366-222 159.4s99.393 159.4 222 159.4Z",
                                  }),
                                  (0, i.jsx)("path", {
                                      d: "M500 82c193.3 0 350-67.157 350-150S693.3-218 500-218 150-150.843 150-68 306.7 82 500 82Z",
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsxs)("defs", {
                      children: [
                          (0, i.jsxs)("filter", {
                              id: "b",
                              width: "2733",
                              height: "1926",
                              x: "-890",
                              y: "-883",
                              colorInterpolationFilters: "sRGB",
                              filterUnits: "userSpaceOnUse",
                              children: [
                                  (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                  (0, i.jsx)("feBlend", {
                                      in: "SourceGraphic",
                                      in2: "BackgroundImageFix",
                                      result: "shape",
                                  }),
                                  (0, i.jsx)("feGaussianBlur", {
                                      result: "effect1_foregroundBlur_1212_34971",
                                      stdDeviation: "180",
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("filter", {
                              id: "c",
                              width: "1955",
                              height: "928.8",
                              x: "-429",
                              y: "-518",
                              colorInterpolationFilters: "sRGB",
                              filterUnits: "userSpaceOnUse",
                              children: [
                                  (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                  (0, i.jsx)("feBlend", {
                                      in: "SourceGraphic",
                                      in2: "BackgroundImageFix",
                                      result: "shape",
                                  }),
                                  (0, i.jsx)("feGaussianBlur", {
                                      result: "effect1_foregroundBlur_1212_34971",
                                      stdDeviation: "150",
                                  }),
                              ],
                          }),
                          (0, i.jsx)("clipPath", {
                              id: "a",
                              children: (0, i.jsx)("path", { fill: "#fff", d: "M0 0h1000v1000H0z" }),
                          }),
                      ],
                  }),
              ],
          });
      };
function nr(e) {
    let { channelId: t, allPoppedOut: n = !1 } = e;
    return (0, i.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, i.jsx)(ns, {}),
            (0, i.jsxs)("div", {
                className: e$.Qs,
                children: [
                    (0, i.jsx)(ef.D, {
                        variant: "heading-lg/normal",
                        children: n ? es.intl.string(es.t.KIConm) : es.intl.format(es.t.ilLVLr, {}),
                    }),
                    !n &&
                        (0, i.jsx)(ez.$, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), ni.A.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: es.intl.string(es.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
let nc = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: o,
        layout: d,
        onSelectParticipant: u,
        onContextMenuParticipant: h,
        onFullscreenParticipant: p,
        channel: m,
        hasConnectPermission: x,
        className: g,
        inCall: A,
        showParticipants: f = !0,
        width: v,
        height: y,
        idle: N,
        mode: E,
        popoutType: C,
        awaitingRemoteSessionInfo: _,
        callContainerDimensions: S,
    } = e;
    l.useEffect(() => {
        ei._.dispatch(ea.jej.REMEASURE_TARGET);
    }, [v, y, S.width, S.height]);
    let b = l.useMemo(
            () => n.filter((e) => e.type !== j.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, o],
        ),
        R = (0, a.bG)([c.A], () => c.A.getVoiceParticipantsHidden(m.id), [m.id]);
    if (_?.channelId === m.id) return (0, i.jsx)(e3, { height: y });
    if (m?.isGuildVocalOrThread() && !A)
        return (0, i.jsx)(eJ, { channel: m, participants: t, hasConnectPermission: x });
    if (((n = A ? n : t), d === ea.DUB.HAVEN)) return (0, i.jsx)(eF, { participants: n, channel: m, idle: N });
    if (E === ea._Of.VOICE)
        return (0, i.jsx)(I, { guildId: m.guild_id, width: v, className: t7.Er, participants: t, onContextMenu: h });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !R;
            return (0, i.jsx)(nr, { channelId: m.id, allPoppedOut: e });
        }
        return (0, i.jsx)(T.A, {
            className: t7.HA,
            justify: T.A.Justify.CENTER,
            align: T.A.Align.CENTER,
            children: (0, i.jsx)(tB, {
                channel: m,
                className: t7.g9,
                participants: b,
                totalNumberOfParticipants: t.length,
                onClick: u,
                onDoubleClick: p,
                onContextMenu: h,
                inCall: A,
                popoutType: C,
            }),
        });
    }
    return (0, i.jsx)(nn, {
        onFullscreenParticipant: p,
        onContextMenuParticipant: h,
        onSelectParticipant: u,
        selectedParticipant: s,
        filteredParticipants: b,
        participants: t,
        popoutType: C,
        className: g,
        idle: N,
        height: y,
        width: v,
        layout: d,
        inCall: A,
        channel: m,
        showParticipants: f,
    });
});
