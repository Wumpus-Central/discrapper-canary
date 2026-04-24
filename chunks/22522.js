a.d(t, { A: () => ao });
var i = a(627968),
    n = a(64700),
    s = a(17928),
    l = a(456412),
    r = a(878549),
    o = a(313961);
a(321073);
var c = a(503698),
    d = a.n(c),
    _ = a(615300),
    u = a(73939),
    m = a(462887),
    p = a(778712),
    h = a(890856),
    f = a(736653),
    g = a(531685),
    x = a(85448),
    v = a(806931),
    A = a(464466),
    y = a(653307),
    b = a(571876);
let I = {
    SCALE_MIN: 0.7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: _.A.Easing.inOut(_.A.Easing.back()),
    EASING_OUT: _.A.Easing.quad,
};
class C extends n.PureComponent {
    scaleAnimation = new _.A.Value(0);
    spriteAnimation = new _.A.Value(0);
    spriteOpacity = new _.A.Value(0);
    widthAnimation = new _.A.Value(0);
    componentDidMount() {
        this.componentDidAppear();
    }
    componentDidAppear() {
        let { scaleAnimation: e, widthAnimation: t } = this;
        e.setValue(1), t.setValue(1);
    }
    componentWillEnter(e) {
        let { scaleAnimation: t, widthAnimation: a } = this;
        t.setValue(0),
            a.setValue(0),
            _.A.parallel([
                _.A.timing(t, { toValue: 1, duration: I.DURATION_IN, easing: I.EASING_IN }),
                _.A.timing(a, { toValue: 1, duration: 200 }),
            ]).start(e);
    }
    componentWillLeave(e) {
        let { scaleAnimation: t, spriteAnimation: a, spriteOpacity: i, widthAnimation: n } = this;
        i.setValue(1), a.setValue(0);
        let s = [];
        for (let e = 0; e < 23; e++) s.push(_.A.timing(a, { toValue: -26 * e, duration: 17 }));
        _.A.sequence([
            _.A.timing(t, { toValue: 0, duration: I.DURATION_OUT, easing: I.EASING_OUT }),
            _.A.sequence(s),
            _.A.timing(n, { toValue: 0, duration: 125 }),
        ]).start(e);
    }
    getScaleStyle() {
        let { scaleAnimation: e } = this;
        return _.A.accelerate({
            transform: [{ scale: e.interpolate({ inputRange: [0, 1], outputRange: [I.SCALE_MIN, I.SCALE_MAX] }) }],
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
        let { theme: e, children: t, className: a } = this.props,
            n = (0, m.M)(e),
            s = d()(A._y, { [b.cp]: n, [b.QB]: !n });
        return (0, i.jsxs)(_.A.div, {
            role: "listitem",
            className: d()(A.kY, a),
            style: this.getWidthStyle(),
            children: [
                (0, i.jsx)("div", {
                    className: d()(A.XY, y.xM, y.wq, y.Hu),
                    children: (0, i.jsx)(_.A.div, { className: s, style: this.getSpriteStyle() }),
                }),
                (0, i.jsx)(_.A.div, { style: this.getScaleStyle(), children: t }),
            ],
        });
    }
}
function j(e) {
    var t;
    let { participants: a, onContextMenu: n, className: l, onClick: r, width: o, guildId: c } = e,
        _ = (0, f.Ay)(),
        m = ((t = a.length), ((0, p.FT)(p._3.SIZE_80) + 16) * t > o ? p._3.SIZE_40 : p._3.SIZE_80),
        y = (0, s.bG)([g.A], () => g.A.isFocused()),
        b = a.map((e) => {
            if (e.type !== v.lp.USER) return null;
            let { user: t, voiceState: a, speaking: s, ringing: l } = e;
            return (0, i.jsx)(
                C,
                {
                    className: A.Wp,
                    width: (0, p.FT)(m),
                    theme: _,
                    children: (0, i.jsx)(h.s, {
                        "aria-label": t.username,
                        onClick: (t) => r?.(e, t),
                        onContextMenu: (t) => n?.(e, t),
                        children: (0, i.jsx)(
                            x.A,
                            {
                                userId: t.id,
                                src: t.getAvatarURL(c, (0, p.FT)(m), s && y),
                                size: m,
                                muted: a?.isVoiceMuted() ?? !1,
                                deafen: a?.isVoiceDeafened() ?? !1,
                                speaking: s,
                                ringing: l,
                            },
                            e.id,
                        ),
                    }),
                },
                t.id,
            );
        });
    return (0, i.jsx)(u.F, { component: "div", role: "list", className: d()(A.zr, l), children: b });
}
var N = a(235986),
    E = a(187322),
    S = a(408278),
    T = a(432017),
    w = a(353182),
    R = a(534890),
    k = a(92259),
    P = a(218429),
    V = a(834730),
    L = a(517461),
    M = a(770178),
    D = a(418126),
    B = a(266626),
    U = a(998740),
    O = a(732777),
    G = a(222446),
    F = a(97808),
    H = a(364522),
    W = a(228366),
    z = a(720149),
    K = a(355622),
    X = a(408018),
    Y = a(201349),
    Z = a(609425),
    q = a(922301),
    Q = a(368919),
    $ = a(451909),
    J = a(375199),
    ee = a(854627),
    et = a(447404),
    ea = a(232835),
    ei = a(625494),
    en = a(427262),
    es = a(652215),
    el = a(985018),
    er = a(200252);
let eo = (e) => {
        let { channel: t, message: a, out: n = !1, noAnimate: s = !1 } = e,
            l = (0, J.A)(a, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                noStyleAndInteraction: !1,
                allowDevLinks: !1,
                allowLinks: !1,
                previewLinkTarget: !1,
            }),
            r = a.author,
            o = en.Ay.getName(r),
            c = (0, Z.A)({ userId: r.id, guildId: t.guild_id }),
            { avatarSrc: _, avatarDecorationSrc: u } = (0, ee.A)({ userId: r.id, guildId: t.guild_id, size: 48 });
        return (0, i.jsxs)("div", {
            className: d()(er.iU, { [er.FD]: n, [er.Tf]: s }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(F.eu, {
                        src: _,
                        avatarDecoration: u,
                        size: p._3.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(Q.A, { userName: o, displayNameStyles: c, effectDisplayType: q.G.STATIC, loop: !0 }),
                (0, i.jsxs)("div", {
                    className: er.fi,
                    children: [
                        (0, i.jsx)(V.E, { variant: "text-md/normal", className: er.Qs, children: l.content }),
                        a.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: d()(er.nM, er.rQ),
                                children: a.attachments
                                    .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            {
                                                src: e.url,
                                                width: 128,
                                                className: er.oh,
                                                alt: el.intl.string(el.t.X4IxWL),
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
    ec = (e) => {
        let { channel: t, idle: a, showChat: s } = e,
            l = n.useRef(new Set()),
            [r, o] = n.useState([]),
            [c, _] = n.useState(0),
            u = n.useRef(null),
            m = n.useRef(!1),
            [p, h] = n.useState(!0),
            [f, g] = n.useState(""),
            [x, v] = n.useState((0, X.x7)(f));
        n.useEffect(() => {
            let e = l.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            n.useEffect(() => {
                let e = () => h(!0),
                    t = () => h(!1);
                return (
                    ei._.subscribe(es.jej.TEXTAREA_FOCUS, e),
                    ei._.subscribe(es.jej.TEXTAREA_BLUR, t),
                    () => {
                        ei._.unsubscribe(es.jej.TEXTAREA_FOCUS, e), ei._.unsubscribe(es.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            n.useEffect(() => {
                let e = u.current;
                null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
            }, [u]),
            n.useEffect(() => {
                let e = Date.now();
                o(
                    ea.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                        .slice(-50),
                );
            }, [t]);
        let A = n.useCallback((e) => {
                o((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let a = [...t, e];
                        return a.length > 50 && a.shift(), a;
                    }
                    return t;
                });
            }, []),
            y = n.useMemo(() => {
                let e = r[r.length - 1];
                if (null == e) return !0;
                if (c + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5e3;
                if (!t) {
                    let e = setTimeout(() => {
                        _(Date.now()), l.current.delete(e);
                    }, 5500);
                    l.current.add(e);
                }
                return t;
            }, [r, c]);
        return (
            n.useEffect(() => {
                let e = (e) => {
                    let { channelId: a, message: i } = e,
                        n = ea.A.getMessage(i.channel_id, i.id);
                    if (a === t.id && n?.state === "SENT") {
                        A(n);
                        let e = setTimeout(() => {
                            l.current.delete(e);
                            let t = u.current;
                            null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                        }, 10);
                        l.current.add(e);
                    }
                };
                return W.h.subscribe("MESSAGE_CREATE", e), () => W.h.unsubscribe("MESSAGE_CREATE", e);
            }, []),
            (0, i.jsxs)("div", {
                className: d()(er.X2, { [er.R]: !s }),
                onMouseEnter: () => (m.current = !0),
                onMouseLeave: () => (m.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(et.A, {
                        children: (0, i.jsx)("div", {
                            className: d()(er.TE, { [er.N7]: a }),
                            children: (0, i.jsx)(H.Ip, {
                                className: d()(er.b6, { [er.N7]: y && a }),
                                ref: u,
                                children: r.map((e) => (0, i.jsx)(eo, { channel: t, message: e, noAnimate: !0 }, e.id)),
                            }),
                        }),
                    }),
                    (0, i.jsx)(Y.Ay, {
                        className: d()(er.CQ, { [er.N7]: a && 0 === f.length }),
                        innerClassName: er.hF,
                        type: K.oU.HAVEN,
                        channel: t,
                        textValue: f,
                        richValue: x,
                        placeholder: "Send message",
                        onFocus: () => h(!0),
                        onBlur: () => h(!1),
                        focused: p,
                        disabled: !s,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, a) => {
                            t !== f && (g(t), v(a));
                        },
                        onSubmit: async (e) => {
                            let { value: a } = e,
                                i = a.trim();
                            if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                            let n = $.Ay.parse(t, i);
                            try {
                                return (
                                    await z.A.sendMessage(t.id, n, !0, { location: "Haven" }),
                                    g(""),
                                    v((0, X.x7)("")),
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
var ed = a(118019),
    e_ = a(763827),
    eu = a(38405),
    em = a(38050),
    ep = a(572808);
let eh = (e, t) => {
        let a = (0, s.bG)([U.A], () => U.A.getSongs(e));
        return a?.[t];
    },
    ef = () => {
        let e = (0, s.bG)([e_.A], () => e_.A.getChannelId()),
            t = (0, s.bG)([U.A], () => null != e && U.A.isUserConnected(e)),
            a = (0, em.n)((e) => e.genre),
            l = (0, em.n)((e) => e.songIndex),
            r = (0, em.n)((e) => e.playRadio),
            o = (0, em.n)((e) => e.globalMute),
            c = (0, em.n)((e) => e.playNextSong),
            d = (0, em.n)((e) => e.volumes),
            _ = n.useRef(null),
            u = n.useRef(null),
            m = n.useRef(null),
            p = eh(a, l),
            h = (0, s.bG)([U.A], () => U.A.assets);
        return (n.useEffect(() => {
            let e = _.current;
            null != e &&
                p?.src != null &&
                (e.pause(),
                (e.src = p.src),
                !o &&
                    r &&
                    t &&
                    e.play()?.catch((e) => {
                        eu.A.captureException(e);
                    }));
        }, [p?.src, o, r, t]),
        n.useEffect(() => {
            let e = u.current,
                a = m.current;
            null != e &&
                (o || !t
                    ? e.pause()
                    : e.play()?.catch((e) => {
                          eu.A.captureException(e);
                      })),
                null != a &&
                    (o || !t
                        ? a.pause()
                        : a.play()?.catch((e) => {
                              eu.A.captureException(e);
                          }));
        }, [o, t]),
        t)
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ed.A, {
                          ref: _,
                          onEnded: c,
                          volume: o ? 0 : d.radio,
                          children: (0, i.jsx)("source", { src: p?.src }),
                      }),
                      (0, i.jsx)(ed.A, {
                          ref: u,
                          volume: o ? 0 : d.environment,
                          children: (0, i.jsx)("source", { src: h?.sounds?.[ep.qi.ENVIRONMENT] }),
                      }),
                      (0, i.jsx)(ed.A, {
                          ref: m,
                          volume: o ? 0 : d.campfire,
                          children: (0, i.jsx)("source", { src: h?.sounds?.[ep.qi.CAMPFIRE] }),
                      }),
                  ],
              })
            : null;
    };
var eg = a(106236),
    ex = a(534514),
    ev = a(331322),
    eA = a(668953),
    ey = a(113494),
    eb = a(782134),
    eI = a(881636),
    eC = a(939249),
    ej = a(358618),
    eN = a(983851),
    eE = a(82495),
    eS = a(692744),
    eT = a(368662),
    ew = a(459875);
let eR = (e) => {
        let { soundKey: t, globalMute: a } = e,
            n = (0, em.n)((e) => e.volumes[t]),
            s = (0, em.n)((e) => e.setVolume),
            l = (0, eS.el)(t);
        return (0, i.jsxs)("div", {
            className: ew.om,
            children: [
                (0, i.jsx)(V.E, { variant: "text-md/semibold", children: l }),
                (0, i.jsx)(eg.A, {
                    initialValue: (n ?? 0.2) * 100,
                    disabled: a,
                    maxValue: 100,
                    asValueChanges: (e) => {
                        s(t, e / 100);
                    },
                    onValueChange: (e) => {
                        s(t, e / 100);
                    },
                }),
            ],
        });
    },
    ek = (e) => {
        let { open: t, close: a, style: n, triggerRef: l } = e,
            r = (0, eE.A)(
                null,
                () => {
                    t && a();
                },
                l,
            ),
            o = (0, em.n)((e) => e.globalMute),
            c = (0, em.n)((e) => e.setGlobalMute),
            _ = (0, em.n)((e) => e.genre),
            u = (0, em.n)((e) => e.setGenre),
            m = (0, em.n)((e) => e.songIndex),
            p = (0, em.n)((e) => e.playRadio),
            h = (0, em.n)((e) => e.setPlayRadio),
            f = (0, em.n)((e) => e.playPrevSong),
            g = (0, em.n)((e) => e.playNextSong),
            x = (0, s.bG)([U.A], () => U.A.assets),
            v = eh(_, m),
            A = !o && p;
        return (0, i.jsxs)("div", {
            ref: r,
            className: d()(ew.ZR, { [ew.R]: !t }),
            style: n,
            children: [
                (0, i.jsx)("div", {
                    className: ew.wx,
                    children: (0, i.jsx)(ex.D, {
                        variant: "heading-md/medium",
                        color: "text-subtle",
                        children: el.intl.string(eT.default.vaWEe0),
                    }),
                }),
                (0, i.jsxs)(ev.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 0,
                    className: ew.om,
                    children: [
                        null != v &&
                            (0, i.jsxs)(ev.B, {
                                children: [
                                    (0, i.jsx)(V.E, { variant: "text-sm/semibold", children: v.song }),
                                    (0, i.jsx)(V.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: el.intl.format(eT.default.i22p4p, { artist: v.artist }),
                                    }),
                                ],
                            }),
                        (0, i.jsxs)(ev.B, {
                            direction: "horizontal",
                            children: [
                                (0, i.jsx)(S.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": el.intl.string(eT.default.FL0ePz),
                                    icon: eA.f,
                                    onClick: f,
                                }),
                                (0, i.jsx)(S.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": el.intl.string(eT.default.zsW8PM),
                                    icon: p ? ey.E : eb.u,
                                    onClick: (e) => {
                                        e.preventDefault(), e.stopPropagation(), h(!p);
                                    },
                                }),
                                (0, i.jsx)(S.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": el.intl.string(eT.default["+nt9+r"]),
                                    icon: eI.u,
                                    onClick: g,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(ev.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    gap: 12,
                    children: Object.values(ep.TU).map((e) =>
                        (0, i.jsx)(
                            eC.D,
                            {
                                className: ew.vk,
                                onClick: () => {
                                    _ !== e ? (u(e), h(!0)) : h(!p);
                                },
                                children: (0, i.jsxs)(ev.B, {
                                    align: "center",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: d()(ew.D$, { [ew.wH]: e === _ }),
                                            style: {
                                                backgroundImage: `url('${x?.genres?.[e]?.thumbnail}')`,
                                                backgroundSize: "cover",
                                            },
                                            children: (0, i.jsxs)("div", {
                                                className: d()(ew.BW, { [ew.wH]: e === _, [ew.he]: A, [ew.Ft]: !A }),
                                                children: [
                                                    (0, i.jsx)("div", { className: ew.Om }),
                                                    (0, i.jsx)("div", { className: ew.Om }),
                                                    (0, i.jsx)("div", { className: ew.Om }),
                                                ],
                                            }),
                                        }),
                                        (0, i.jsx)(ex.D, {
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
                (0, i.jsxs)(ev.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [
                        (0, i.jsx)(V.E, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: el.intl.string(eT.default.IWSNp9),
                        }),
                        (0, i.jsx)("div", {
                            className: d()({ [ew.SU]: o }),
                            children: (0, i.jsx)(S.K, {
                                variant: "icon-only",
                                "aria-label": el.intl.string(eT.default.Tf8XqQ),
                                icon: o ? ej._ : eN.H,
                                onClick: (e) => {
                                    e.preventDefault(), e.stopPropagation(), c(!o);
                                },
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(ev.B, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(eR, { soundKey: ep.wS.RADIO, globalMute: o }),
                        (0, i.jsx)(eR, { soundKey: ep.wS.ENVIRONMENT, globalMute: o }),
                        (0, i.jsx)(eR, { soundKey: ep.wS.CAMPFIRE, globalMute: o }),
                    ],
                }),
            ],
        });
    };
var eP = a(717558),
    eV = a(287809),
    eL = a(562153),
    eM = a(731854),
    eD = a(82410);
let eB = n.memo(function (e) {
    let { channel: t, participant: a } = e,
        l = (0, s.bG)([eV.default], () => eV.default.getUser(a.user.id), [a.user.id]),
        r = n.useMemo(() => eL.Ay.getNickname(t.guild_id, t.id, l) ?? l?.globalName ?? a.userNick, [t, l, a.userNick]),
        o = (0, eP.A)({ userId: a.user.id, context: eM.x.DEFAULT });
    if (null == l) return null;
    let c = p._3.SIZE_32,
        _ = p.vC[c].size,
        u = l.getAvatarURL(t.guild_id, _);
    return (0, i.jsxs)("div", {
        className: d()(eD.vB, { [eD.zY]: o }),
        children: [
            (0, i.jsx)(F.eu, { className: eD.my, size: c, src: u, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                className: eD.Xh,
                children: (0, i.jsx)(V.E, { variant: "text-xs/medium", color: "text-default", children: r }),
            }),
        ],
    });
});
function eU(e) {
    let { channel: t, participants: a } = e,
        s = (0, O.A)(t.id),
        l = n.useMemo(() => {
            if (null == s) return [];
            let e = new Set(s.participants.map((e) => e.userId));
            return a.filter((t) => !(!(0, v.Xw)(t) || e.has(t.user.id)));
        }, [a, s]);
    return 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: eD.kL,
              children: l.map((e) => ((0, v.Xw)(e) ? (0, i.jsx)(eB, { channel: t, participant: e }, e.user.id) : null)),
          });
}
var eO = a(683807);
let eG = (e) => {
        let { channel: t, idle: a, className: s, participants: l } = e,
            r = (0, O.A)(t.id),
            [o, c] = n.useState(!1),
            _ = n.useCallback(
                (e) => {
                    D.Ay.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [u, m] = (0, L.V)("haven-show-chat", !1);
        n.useEffect(() => {
            setTimeout(() => {
                c(!0);
            }, 2500);
        }, []);
        let [p, h] = n.useState(0.65),
            [f, g] = n.useState(0.65),
            [x, v] = n.useState(0.65),
            [A, y] = n.useState({ x: 0, y: 0 }),
            [b, I] = n.useState(!1),
            [C, j] = n.useState(0),
            [N, B] = n.useState({ x: 0, y: 0 }),
            [U, F] = n.useState({ x: 0, y: 0 }),
            [H, W] = n.useState(!1),
            z = n.useRef(null),
            [K, X] = n.useState(null),
            Y = (0, M.w)((e) => {
                let { contentRect: t, target: a } = e,
                    i = a.getBoundingClientRect(),
                    n = t.width,
                    s = t.height,
                    l = (n / G.i.width) * 1.5,
                    r = (s / G.i.height) * 1.5,
                    o = (n / G.i.width) * 1.1,
                    c = (s / G.i.height) * 1.1;
                B({ x: n / 2 + i.x, y: s / 2 + i.y });
                let d = Math.max(l, r);
                if ((h(Math.max(o, c)), v(d), null != z.current)) {
                    let e = z.current.getBoundingClientRect();
                    X({ x: e.left - i.left, y: e.top - i.top });
                }
            }),
            Z = n.useCallback(
                (e) => {
                    let t = Math.max(e, p),
                        a = Y.current?.getBoundingClientRect();
                    if (null == a) return;
                    let i = { x: 1156, y: 1110 },
                        n = !0,
                        s = 0,
                        l = a.height / t;
                    for (; n && s < 10; ) (n = i.y + l / 2 > 1536) && (i.y -= 32), s++;
                    let r = i.x * t,
                        o = i.y * t,
                        c = a.width / 2 - r,
                        d = a.height / 2 - o;
                    g(t), y({ x: c, y: d });
                },
                [Y, p],
            );
        n.useEffect(() => {
            Z(x);
        }, [x, Z]);
        let q = n.useCallback(
            (e) => {
                let t = Y.current?.getBoundingClientRect();
                if (null == t) return;
                let a = t.height / f,
                    i = t.width / f,
                    n = { x: e.x / f, y: e.y / f },
                    s = e.y / f > 0,
                    l = e.x / f > 0,
                    r = n.y - a < -1536,
                    o = n.x - i < -2180;
                r || s || l || o || y(e);
            },
            [Y, f],
        );
        return (0, i.jsx)(E.vN, {
            children: (0, i.jsxs)("div", {
                ref: Y,
                className: d()(eO.km, s),
                onClick: () => {
                    j(0);
                },
                onMouseDown: () => I(Date.now()),
                onMouseUp: (e) => {
                    if (null != Y.current) {
                        if (C < 2) {
                            let a = Date.now(),
                                i = Y.current.getBoundingClientRect(),
                                n = { x: (e.pageX - i.x - A.x) / f, y: (e.pageY - i.y - A.y) / f };
                            !1 !== b && a - b > 250 && D.Ay.update(t.id, { position: n });
                        }
                        I(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== b &&
                        (j(C + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        q({ x: A.x + e.movementX, y: A.y + e.movementY })),
                        F({ x: e.pageX, y: e.pageY });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: eO.VT,
                        style: { transform: `translate(${A.x}px, ${A.y}px) scale(${f}) ` },
                        children: (0, i.jsx)(G.A, {
                            roomSeats: r.seats,
                            roomParticipants: r.participants,
                            participants: l,
                            channel: t,
                            idle: a,
                            skipNewUserEducation: !o,
                            onSeatClick: _,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: d()(eO.nM, eO.vf),
                        children: [
                            (0, i.jsxs)("div", {
                                className: d()(eO.nM, { [eO.R]: a }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: z,
                                        children: (0, i.jsx)(S.K, {
                                            variant: "icon-only",
                                            "aria-label": el.intl.string(eT.default.W7TAH4),
                                            icon: T.T,
                                            disabled: a,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), W(!H);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(S.K, {
                                        variant: "icon-only",
                                        "aria-label": el.intl.string(eT.default.O7EDNk),
                                        icon: u ? w._ : R.o,
                                        disabled: a,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), m(!u);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(ec, { channel: t, idle: a, showChat: u ?? !1 }),
                            (0, i.jsxs)("div", {
                                className: d()(eO.nM, { [eO.R]: a }),
                                children: [
                                    (0, i.jsx)(S.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: k.V,
                                        disabled: a,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), Z(f - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(S.K, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: P.r,
                                        disabled: a,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), Z(f + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(eU, { channel: t, participants: l }),
                    (0, i.jsx)(ek, {
                        open: H,
                        close: () => W(!1),
                        triggerRef: z,
                        style: null != K ? { left: K.x, top: K.y } : void 0,
                    }),
                    (0, i.jsx)(ef, {}),
                    (0, i.jsx)("div", {
                        className: d()(eO.Lw, { [eO.FD]: o }),
                        children: (0, i.jsx)("div", {
                            className: eO.dH,
                            children: (0, i.jsx)(V.E, { variant: "display-lg", children: "Welcome to Haven" }),
                        }),
                    }),
                ],
            }),
        });
    },
    eF = (e) => {
        let t = B.s.useConfig({ location: "Haven" }).enabled,
            a = (0, s.bG)([U.A], () => U.A.isUserConnected(e.channel.id));
        return (n.useEffect(() => {
            !t || a || D.Ay.connect(e.channel.id);
        }, [e.channel.id, a, t]),
        t)
            ? (0, i.jsx)(eG, { ...e })
            : null;
    };
var eH = a(821609),
    eW = a(956793),
    ez = a(164617),
    eK = a(47167),
    eX = a(202384),
    eY = a(51758),
    eZ = a(141035),
    eq = a(175203),
    eQ = a(426660),
    e$ = a(376460);
let eJ = function (e) {
    let { participants: t, channel: a, hasConnectPermission: s } = e,
        l = t.filter(v.Xw),
        r = (0, eY.H)(a.guild_id),
        o = n.useCallback(() => {
            r ? (0, eX.Ze)(a.guild_id, () => eW.default.selectVoiceChannel(a.id)) : eW.default.selectVoiceChannel(a.id);
        }, [a.id, a.guild_id, r]),
        c = 4 === l.length ? 2 : 3,
        d = (0, eK.Ay)(a);
    return (0, i.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, i.jsx)(eQ.A, {}),
            (0, i.jsx)("div", {
                className: e$.os,
                style: { maxWidth: 168 * c },
                children: l
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            eq.Ay,
                            {
                                participant: e,
                                channel: a,
                                className: e$.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: ez.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(ex.D, { className: e$.HA, variant: "heading-xxl/semibold", children: d }),
            (0, i.jsx)("div", {
                className: e$.Nu,
                children: (0, i.jsx)(V.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === l.length
                            ? el.intl.string(el.t.zSqdrS)
                            : 1 === l.length
                              ? el.intl.formatToPlainString(el.t.BUyJIG, { a: (0, eZ.A)(a, l[0]) })
                              : 2 === l.length
                                ? el.intl.formatToPlainString(el.t["dcyZf/"], {
                                      a: (0, eZ.A)(a, l[0]),
                                      b: (0, eZ.A)(a, l[1]),
                                  })
                                : l.length > 2
                                  ? el.intl.formatToPlainString(el.t["44/Obu"], {
                                        a: (0, eZ.A)(a, l[0]),
                                        b: (0, eZ.A)(a, l[1]),
                                        n: l.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: e$.PD,
                children: (0, i.jsx)(eH.$, {
                    variant: "overlay-primary",
                    text: s ? el.intl.string(el.t["96ANUN"]) : el.intl.string(el.t.TVBCKZ),
                    onClick: o,
                    disabled: !s,
                }),
            }),
        ],
    });
};
var e0 = a(604121),
    e2 = a(775602),
    e1 = a(108713),
    e4 = a(944785);
function e9(e) {
    let { height: t } = e,
        n = (0, s.bG)([e2.A], () => e2.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: e4.zr,
        children: [
            (0, i.jsx)(e0.a, {
                importData: () =>
                    a
                        .e("35066")
                        .then(a.t.bind(a, 844512, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !n,
                className: d()(e4.Qw, { [e4.R]: t <= 280 }),
            }),
            (0, i.jsx)(ex.D, {
                className: e4.wx,
                variant: "heading-md/bold",
                children: el.intl.string(el.t["C+tj1c"]),
            }),
            (0, i.jsx)(V.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: el.intl.format(el.t["nNHd/y"], { onCancel: e1.ZG }),
            }),
        ],
    });
}
var e5 = a(110259),
    e8 = a(121894),
    e6 = a(554146),
    e3 = a(933958),
    e7 = a(782091),
    te = a(139286),
    tt = a(826673),
    ta = a(855687),
    ti = a(267102),
    tn = a(962125),
    ts = a(455072);
let tl = 16 / 9;
function tr(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function to(e, t, a) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            n = Math.floor(i / 2);
        a((t += n)) ? ((e = t + 1), (i -= n + 1)) : (i = n);
    }
    return e;
}
function tc(e) {
    let { className: t, children: a, keyExtractor: s, paddingTop: l = 0, paddingBottom: r = 0 } = e,
        [o, c] = n.useState({ width: 0, height: 0 }),
        { width: _, height: u } = o,
        m = a?.length ?? 0,
        p = _ - 16,
        h = u - (l + r),
        {
            tileStyle: f,
            tileWidth: g,
            rows: x,
            columns: v,
        } = n.useMemo(
            () =>
                (function (e, t, a) {
                    var i, n, s;
                    let l,
                        r,
                        o,
                        c,
                        {
                            rows: d,
                            columns: _,
                            tileWidth: u,
                        } = ((i = e),
                        (n = t),
                        (s = a),
                        (r = Math.floor(n / 25)),
                        (l =
                            i > 25
                                ? to(r, n, (e) => {
                                      let t;
                                      return tr(e, n) * (Math.ceil((s - (t = e / tl)) / (8 + t)) + 1) > 25;
                                  })
                                : to(r, n, (e) => {
                                      let t;
                                      return tr(e, n) * (Math.floor((s - (t = e / tl)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (c = Math.ceil(i / (o = tr(l, n)))),
                        { tileWidth: l, columns: Math.max(1, o), rows: c });
                    return { tileStyle: { width: u }, tileWidth: u, rows: d, columns: _ };
                })(m, p, h),
            [m, p, h],
        ),
        A = v + 1,
        y = A * g + (A - 1) * 8 <= _,
        b = Math.floor(g / tl) + 8,
        I = Math.max(0, h - b * x) / 2;
    return (0, i.jsx)(tn.A, {
        fade: !0,
        className: t,
        listPadding: [l + I, 0, r + I - 8, 8],
        renderRow: function (e) {
            let t = e * v;
            return (0, i.jsx)(
                "div",
                {
                    className: ts.nM,
                    children: a?.slice(t, t + v)?.map((e, a) => {
                        let n = t + a;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: f,
                                className: d()(ts.Vs, {
                                    [ts.E3]: y,
                                    [ts.k4]: n >= (x - 1) * v,
                                    [ts.Kk]: (n + 1) % v == 0 || n === m - 1,
                                }),
                                children: (0, i.jsx)("div", { className: ts.eP, children: e(g) }),
                            },
                            s?.(n) ?? n,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: x,
        rowCountBySection: [x],
        rowHeight: b,
        onResize: c,
    });
}
var td = a(530804),
    t_ = a(71393),
    tu = a(576705),
    tm = a(661531),
    tp = a(990078),
    th = a(323384),
    tf = a(43990),
    tg = a(285796),
    tx = a(192308),
    tv = a(231723),
    tA = a(825484),
    ty = a(283973),
    tb = a(789645),
    tI = a(964486),
    tC = a(648027),
    tj = a(855446),
    tN = a(793574),
    tE = a(688810),
    tS = a(975412),
    tT = a(392054),
    tw = a(953727);
function tR(e) {
    let { width: t = 24, height: a = 24, color: n = "currentColor", className: s, foreground: l, ...r } = e;
    return (0, i.jsx)("svg", {
        ...(0, tw.A)(r),
        className: s,
        width: t,
        height: a,
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.625 3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V5.375C21.0057 4.08803 19.9197 3 18.625 3ZM19 19V5H4.99999V19H19Z",
            className: l,
            fill: n,
        }),
    });
}
var tk = a(954571),
    tP = a(272812),
    tV = a(17795);
function tL(e) {
    let {
        channel: t,
        guild: a,
        width: n,
        inPopout: s,
        handleClose: l,
        userParticipantCount: r,
        activitiesEnabled: o = !0,
    } = e;
    return n < 250
        ? (0, i.jsx)(tM, { channel: t, guild: a, width: n, inPopout: s, handleClose: l, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(tB, { channel: t, guild: a, width: n, inPopout: s, handleClose: l, userParticipantCount: r })
          : (0, i.jsx)(tD, { channel: t, guild: a, width: n, inPopout: s, activitiesEnabled: o });
}
function tM(e) {
    let { channel: t, inPopout: a, handleClose: n } = e,
        { analyticsLocations: s, newestAnalyticsLocation: l } = (0, tE.Ay)(tN.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(tE.f5, {
        value: s,
        children: (0, i.jsxs)(tP.A, {
            className: tV.zr,
            children: [
                (0, i.jsx)(tp.m, {
                    asContainer: !0,
                    text: el.intl.string(el.t.qJvTKQ),
                    children: (0, i.jsx)(eC.D, {
                        onClick: () => {
                            (0, tS.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: a,
                                analyticsLocation: l,
                            });
                        },
                        className: tV.F1,
                        children: (0, i.jsx)("div", {
                            className: tV.zc,
                            children: (0, i.jsx)(th.k, {
                                size: "custom",
                                color: "currentColor",
                                width: 40,
                                height: 40,
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(tf.N, {
                    theme: es.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(eC.D, {
                            onClick: n,
                            className: d()(e, tV.lg),
                            children: (0, i.jsx)(tg.a, {
                                size: "md",
                                color: "currentColor",
                                className: tV.yP,
                                secondaryColor: tm.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function tD(e) {
    let { channel: t, guild: s, inPopout: l, activitiesEnabled: r = !0 } = e;
    n.useEffect(() => {
        tk.default.track(es.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: o, newestAnalyticsLocation: c } = (0, tE.Ay)(tN.A.VC_TILE_ACTIVITY_INVITE);
    function _() {
        (0, tx.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("28136"), a.e("22547"), a.e("42738")]).then(
                    a.bind(a, 1310),
                );
                return (a) => (0, i.jsx)(e, { ...a, guild: s, channel: t, source: es.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: l ? tv.KX : tv.SY },
        );
    }
    function u() {
        (0, tS.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: l,
            analyticsLocation: c,
        });
    }
    return (0, i.jsx)(tE.f5, {
        value: o,
        children: (0, i.jsx)(tf.N, {
            disableAdaptiveTheme: !0,
            theme: es.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(tP.A, {
                    className: d()(tV.zr, tV.co, e),
                    children: [
                        (0, i.jsx)("img", { src: "/assets/664390de11a80444.svg", className: tV.Qw, alt: "" }),
                        (0, i.jsxs)(tA.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(eH.$, {
                                    variant: "secondary",
                                    icon: ty.R,
                                    text: el.intl.string(el.t["EE+P0H"]),
                                    onClick: _,
                                }),
                                r &&
                                    (0, i.jsx)(eH.$, {
                                        variant: "secondary",
                                        icon: th.k,
                                        text: el.intl.string(el.t.qnFavR),
                                        onClick: u,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function tB(e) {
    let { channel: t, guild: a, handleClose: s, width: l, userParticipantCount: r } = e;
    (0, tI.Ay)(() => {
        tk.default.track(es.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: r,
        });
    });
    let o = (0, tC.A)({ guildId: a.id }).slice(0, 3),
        { analyticsLocations: c } = (0, tE.Ay)(tN.A.VC_TILE_ACTIVITY_SUGGESTION),
        _ = n.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(tE.f5, {
        value: c,
        children: (0, i.jsxs)(tP.A, {
            className: tV.zr,
            children: [
                l > 300
                    ? (0, i.jsx)(V.E, {
                          className: tV.R_,
                          variant: l > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: el.intl.string(el.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: d()(tV.Di, { [tV.qy]: l <= 300 }),
                    children: o.map((e) =>
                        (0, i.jsx)(
                            tj.C,
                            {
                                context: _,
                                activityItem: e,
                                aspectRatio: tj.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: tV.KU,
                                commandOrigin: tT.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(eC.D, {
                    className: tV.HI,
                    onClick: function () {
                        tk.default.track(es.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: r,
                        }),
                            (0, tt.Dr)(e6.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(tR, {}),
                        (0, i.jsx)(V.E, { variant: "text-sm/medium", children: el.intl.string(el.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(eC.D, {
                    className: tV.cG,
                    onClick: function () {
                        tk.default.track(es.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: r,
                        }),
                            s();
                    },
                    children: (0, i.jsx)(tb.P, { size: "md", color: "currentColor", className: tV.b }),
                }),
            ],
        }),
    });
}
let tU = (0, a(353640).v)(() => ({ dismissedActivityEntryPointTileChannel: null }));
var tO = a(526610);
function tG(e) {
    let {
            participants: t,
            onClick: a,
            onDoubleClick: l,
            onContextMenu: r,
            channel: c,
            className: d,
            inCall: _,
            totalNumberOfParticipants: u,
            popoutType: m,
        } = e,
        p = (0, ti.Us)() === es.BRT.POPOUT,
        h = (0, s.bG)([t_.A], () => t_.A.getGuild(c.guild_id), [c.guild_id]),
        { dismissedActivityEntryPointTileChannel: f } = tU(),
        g = (0, s.bG)([o.A], () => o.A.getUserParticipantCount(c.id), [c]),
        x = (0, td.vp)(c.id, t),
        v = n.useCallback(() => {
            (0, e8.r)(() => {
                tU.setState({ dismissedActivityEntryPointTileChannel: c.id });
            });
        }, [c.id]);
    n.useEffect(() => {
        null != f &&
            c.id !== f &&
            (0, e8.r)(() => {
                tU.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [c.id, f]);
    let A = (0, s.bG)([tu.A], () => c.isPrivate() || (0, ta.K)(tu.A, h, c), [h, c]),
        y = h?.afkChannelId === c.id,
        b = c.userLimit <= 0 || c.userLimit > 1,
        I = (0, s.bG)([e3.Ay], () => e3.Ay.getEmbeddedActivitiesForChannel(c.id).length <= 0),
        C = (0, tt.JZ)(e6.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        j = (0, e7.et)(c.id) !== e7.xy.CAN_LAUNCH,
        N = null != f && f === c.id,
        E = x.map(
            (e) => (t) =>
                (0, i.jsx)(
                    eq.Ay,
                    {
                        participant: e,
                        channel: c,
                        className: tO.V,
                        onClick: a,
                        onDoubleClick: l,
                        onContextMenu: r,
                        inCall: _,
                        width: t,
                        popoutType: m,
                    },
                    e.id,
                ),
        );
    (0, te.A)(
        {
            type: e5.ImpressionTypes.VIEW,
            name: e5.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: u, can_invite: A, is_afk_channel: y, channel_user_limit: c.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let S = I && !j;
    null != h &&
        !y &&
        (g >= 2 && S && !C && !N
            ? E.push((e) =>
                  (0, i.jsx)(tL, {
                      channel: c,
                      guild: h,
                      width: e,
                      inPopout: p,
                      handleClose: v,
                      userParticipantCount: g,
                  }),
              )
            : b &&
              1 === g &&
              A &&
              E.push((e) =>
                  (0, i.jsx)(tL, {
                      channel: c,
                      guild: h,
                      width: e,
                      inPopout: p,
                      handleClose: v,
                      userParticipantCount: g,
                      activitiesEnabled: S,
                  }),
              ));
    let T = n.useCallback((e) => x[e]?.id ?? "empty-tile", [x]);
    return (0, i.jsx)(tc, { className: d, keyExtractor: T, paddingTop: 64, paddingBottom: 64, children: E });
}
var tF = a(419354),
    tH = a(717421),
    tW = a(866323),
    tz = a(475743),
    tK = a(216418),
    tX = a(80051),
    tY = a(495544),
    tZ = a(969341),
    tq = a(724442),
    tQ = a(506774),
    t$ = a(31728),
    tJ = a(205297),
    t0 = a(334463),
    t2 = a(566555),
    t1 = a(604949);
let t4 = "CameraPreviewPosition";
function t9(e) {
    let { width: t, onContextMenuParticipant: a, height: l, channel: r, participants: o, onSelectParticipant: c } = e,
        [_, u] = (function () {
            let [e, t] = n.useState(() => tQ.w.get(t4, es.CUs.BOTTOM_RIGHT));
            return [
                e,
                n.useCallback((e) => {
                    tQ.w.set(t4, e), t(e);
                }, []),
            ];
        })(),
        m = n.useRef(null),
        p = null == r.getGuildId() ? 70 : 50,
        h = (0, s.bG)([t0.A], () => t0.A.pipWidth(v.R8.CAMERA_PREVIEW)),
        f = o.length,
        g = h * f + 8 * (f - 1),
        x = n.useMemo(
            () => ({
                minWidth: v.mn[v.R8.CAMERA_PREVIEW] * f + 8 * (f - 1),
                maxWidth: v.cF[v.R8.CAMERA_PREVIEW] * f + 8 * (f - 1),
            }),
            [f],
        );
    n.useLayoutEffect(() => {
        m.current?.ensureIsInPosition();
    }, [o.length]);
    let A = n.useCallback(
            (e) => {
                let t = 0 === f ? e : (e - 8 * (f - 1)) / f;
                t$.EB(t, v.R8.CAMERA_PREVIEW);
            },
            [f],
        ),
        y = n.useCallback(
            (e, t) => {
                u(t);
            },
            [u],
        );
    return (0, i.jsx)("div", {
        className: t2.kL,
        children: (0, i.jsx)(tJ.S, {
            position: _,
            id: 0,
            width: g,
            ref: m,
            onMove: y,
            onResize: A,
            maxX: t,
            maxY: l,
            edgeOffsetTop: p,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: x,
            children: (0, i.jsx)("div", {
                className: t2.iA,
                children: o.map((e) =>
                    (0, i.jsx)(
                        eq.Ay,
                        {
                            participant: e,
                            channel: r,
                            onContextMenu: a,
                            className: d()(t2.Vs, t1.a8),
                            fit: eq.Yl.COVER,
                            inCall: !0,
                            popoutType: ez.N.NO_POPOUT,
                            width: 160,
                            onClick: c,
                        },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
var t5 = a(403362),
    t8 = a(51082),
    t6 = a(163432),
    t3 = a(349488),
    t7 = a(196934);
let ae = 16 / 9,
    at = 8 + t6.Vp;
function aa(e) {
    let t,
        a,
        s,
        l,
        r,
        {
            onSelectParticipant: o,
            onContextMenuParticipant: c,
            onFullscreenParticipant: _,
            participants: u,
            filteredParticipants: m,
            popoutType: p,
            inCall: h,
            channel: f,
            selectedParticipant: g,
            showParticipants: x = !0,
            className: A,
            width: y,
            height: b,
            layout: I,
            idle: C,
        } = e,
        j = tZ.Ay.getVideoComponent(),
        N = tY.default.getId(),
        [E, S] = n.useState(null),
        T = (0, tz.A)(E),
        [w, R] = n.useState(!0),
        [k, P] = n.useState(!1),
        V = g.type === v.lp.ACTIVITY,
        L = (0, tK.A)(V ? g.applicationId : void 0),
        M = !V && null != g.streamId,
        D = b <= 2 * at + 144,
        B = x && !D,
        U = (0, tz.A)(B),
        O = I === es.DUB.MINIMUM || I === es.DUB.NORMAL,
        G = !D && (!O || V),
        F =
            ((t = (0, n.useRef)(!1)),
            (a = (0, n.useRef)(G)),
            (0, n.useEffect)(() => {
                (t.current = G !== a.current), (a.current = G);
            }, [G]),
            (0, n.useEffect)(() => {
                let e = setTimeout(() => (t.current = !1), 100);
                return () => clearTimeout(e);
            }, [G, 100]),
            (s = G !== (0, tq.A)(a)),
            (l = (0, tq.A)(t)),
            s || l),
        H = ((0, tz.A)(g.id) ?? g.id) !== g.id,
        W = 0;
    (V || B) && (W += 72), V && !B && (G ? (W += 48) : (W += 8)), B && (W += 0.5 * at + 8);
    let z = n.useMemo(
            () => (V && L ? y / (b - 2 * W) : M && null != E && E.width > 0 && E.height > 0 ? E.width / E.height : ae),
            [M, E, V, y, b, W, L],
        ),
        K = b - 2 * W,
        X = V && L ? y : K * z,
        Y = Math.floor(Math.min(y, X) / z),
        Z = b > y / z + 72 + at + 8;
    r = B || V ? (B ? -16 : -8) : 40 + Math.max(0, 72 - (b - Y) / 2);
    let q = Math.max(0, 72 - (b - Y) / 2);
    n.useEffect(() => {
        let e = setTimeout(() => {
            R(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let Q = w || null == T,
        $ = Q ? "animate-never" : "animate-always",
        J = (0, tH.z)(
            {
                value: +!!B,
                delay: Z || !B ? 0 : 100,
                config: { ...tF.config.stiff, clamp: !0 },
                onStart: () => P(!0),
                onChange: () => ei._.dispatch(es.jej.REMEASURE_TARGET),
                onRest: () => {
                    P(!1), ei._.dispatch(es.jej.REMEASURE_TARGET);
                },
            },
            $,
        ),
        ee = (0, tH.z)({ value: +!!B, config: { ...tF.config.stiff, clamp: !0 } }, $),
        et = (0, tH.z)(
            { value: X, config: { ...tF.config.stiff, clamp: !0 } },
            (U === B && ee.value.idle && !F) || H || Q ? "animate-never" : "animate-always",
        ),
        ea = (0, tH.z)({ value: r, config: { ...tF.config.stiff, clamp: !0 } }, $),
        en = (0, tW.p)(
            g,
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
        el = n.useCallback((e) => {
            S(e), R(!1);
        }, []),
        er = B
            ? []
            : null == g || g.type === v.lp.ACTIVITY
              ? []
              : [
                    g.type === v.lp.STREAM
                        ? u.find((e) => e.type === v.lp.USER && e.id === g?.user.id && e.id !== N && (0, t8.Ay)(e))
                        : null,
                    g.type === v.lp.USER
                        ? u.find((e) => e.type === v.lp.STREAM && e.user.id === g?.user.id && null != e.streamId)
                        : null,
                    g.id !== N ? u.find((e) => e.type === v.lp.USER && e.id === N && (0, t8.Ay)(e)) : null,
                ].filter(t5.Vq),
        { visibleParticipants: eo, participantTileWidth: ec } = (0, t6.i4)(y, m);
    return (0, i.jsxs)("div", {
        className: d()(t7.zr, t3.tR, A),
        children: [
            (0, i.jsxs)("div", {
                className: t7.QX,
                style: { opacity: M && w ? 0 : 1 },
                children: [
                    (0, i.jsxs)(tF.animated.div, {
                        className: t7.pc,
                        style: { top: ee.value.to((e) => (-e * at) / 2) },
                        children: [
                            (0, i.jsx)(tF.animated.div, {
                                style: { width: et.value },
                                className: t7.tN,
                                children: (0, i.jsx)("div", {
                                    className: t3.xS,
                                    style: { aspectRatio: z },
                                    children: en((e, t, a) => {
                                        let { key: n } = a;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  tF.animated.div,
                                                  {
                                                      className: t3.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(eq.Ay, {
                                                          focused: !0,
                                                          noBorder: X >= y || K >= b,
                                                          channel: f,
                                                          className: t3.JS,
                                                          videoComponent: j,
                                                          width: y,
                                                          participant: t,
                                                          onClick: o,
                                                          onDoubleClick: _,
                                                          onContextMenu: c,
                                                          onVideoResize: el,
                                                          inCall: h,
                                                          popoutType: p,
                                                          controlsBottom: q,
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            G
                                ? (0, i.jsx)(tF.animated.div, {
                                      className: d()(t7.$l, { [t7.N7]: C }),
                                      style: { bottom: ea.value },
                                      children: (0, i.jsx)(tX.A, {
                                          channelId: f.id,
                                          isParticipantsOpen: x,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(tF.animated.div, {
                        className: t7.Vx,
                        style: {
                            translateY: J.value.to((e) => (e * at) / 2),
                            opacity: J.value,
                            visibility: J.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(t6.Ay, {
                            channel: f,
                            onClick: o,
                            onContextMenu: c,
                            onDoubleClick: _,
                            participants: eo,
                            participantTileWidth: ec,
                            selectedParticipantId: g.id,
                            inCall: h,
                            popoutType: p,
                            paused: k || !x,
                        }),
                    }),
                ],
            }),
            er.length > 0
                ? (0, i.jsx)(t9, {
                      onContextMenuParticipant: c,
                      width: y,
                      height: b,
                      channel: f,
                      participants: er,
                      onSelectParticipant: o,
                  })
                : null,
        ],
    });
}
var ai = a(367513),
    an = a(19575),
    as = a(398706);
let al = an.Ay.getEnableHardwareAcceleration()
    ? function () {
          return (0, i.jsx)("div", {
              children: (0, i.jsxs)("div", {
                  className: as.pm,
                  children: [
                      (0, i.jsx)("div", { className: as.M }),
                      (0, i.jsx)("div", { className: as.CB }),
                      (0, i.jsx)("div", { className: as.d4 }),
                      (0, i.jsx)("div", { className: as.Vh }),
                      (0, i.jsx)("div", { className: as.KF }),
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
function ar(e) {
    let { channelId: t, allPoppedOut: a = !1 } = e;
    return (0, i.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, i.jsx)(al, {}),
            (0, i.jsxs)("div", {
                className: e$.Qs,
                children: [
                    (0, i.jsx)(ex.D, {
                        variant: "heading-lg/normal",
                        children: a ? el.intl.string(el.t.KIConm) : el.intl.format(el.t.ilLVLr, {}),
                    }),
                    !a &&
                        (0, i.jsx)(eH.$, {
                            variant: "secondary",
                            size: "md",
                            onClick: (e) => {
                                e.stopPropagation(), ai.A.toggleVoiceParticipantsHidden(t, !1);
                            },
                            text: el.intl.string(el.t.kLQySL),
                        }),
                ],
            }),
        ],
    });
}
let ao = (0, l.A)((e) => {
    let {
        participants: t,
        filteredParticipants: a,
        selectedParticipant: l,
        participantsVersion: c,
        layout: d,
        onSelectParticipant: _,
        onContextMenuParticipant: u,
        onFullscreenParticipant: m,
        channel: p,
        hasConnectPermission: h,
        className: f,
        inCall: g,
        showParticipants: x = !0,
        width: A,
        height: y,
        idle: b,
        mode: I,
        popoutType: C,
        awaitingRemoteSessionInfo: E,
        callContainerDimensions: S,
    } = e;
    n.useEffect(() => {
        ei._.dispatch(es.jej.REMEASURE_TARGET);
    }, [A, y, S.width, S.height]);
    let T = n.useMemo(
            () => a.filter((e) => e.type !== v.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [a, c],
        ),
        w = (0, s.bG)([o.A], () => o.A.getVoiceParticipantsHidden(p.id), [p.id]);
    if (E?.channelId === p.id) return (0, i.jsx)(e9, { height: y });
    if (p?.isGuildVocalOrThread() && !g)
        return (0, i.jsx)(eJ, { channel: p, participants: t, hasConnectPermission: h });
    if (((a = g ? a : t), d === es.DUB.HAVEN)) return (0, i.jsx)(eF, { participants: a, channel: p, idle: b });
    if (I === es._Of.VOICE)
        return (0, i.jsx)(j, { guildId: p.guild_id, width: A, className: t3.Er, participants: t, onContextMenu: u });
    if (null == l) {
        if (0 === a.length) {
            let e = t.length > 0 && !w;
            return (0, i.jsx)(ar, { channelId: p.id, allPoppedOut: e });
        }
        return (0, i.jsx)(N.A, {
            className: t3.HA,
            justify: N.A.Justify.CENTER,
            align: N.A.Align.CENTER,
            children: (0, i.jsx)(tG, {
                channel: p,
                className: t3.g9,
                participants: T,
                totalNumberOfParticipants: t.length,
                onClick: _,
                onDoubleClick: m,
                onContextMenu: u,
                inCall: g,
                popoutType: C,
            }),
        });
    }
    return (0, i.jsx)(aa, {
        onFullscreenParticipant: m,
        onContextMenuParticipant: u,
        onSelectParticipant: _,
        selectedParticipant: l,
        filteredParticipants: T,
        participants: t,
        popoutType: C,
        className: f,
        idle: b,
        height: y,
        width: A,
        layout: d,
        inCall: g,
        channel: p,
        showParticipants: x,
    });
});
