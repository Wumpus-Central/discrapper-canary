n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(73153),
    d = n(843472),
    c = n(355622),
    u = n(408018),
    h = n(133343),
    A = n(609425),
    m = n(922301),
    p = n(750112),
    g = n(451909),
    _ = n(538355),
    f = n(854627),
    x = n(447404),
    C = n(320501),
    E = n(203982),
    I = n(427262),
    b = n(652215),
    N = n(985018),
    S = n(65309);
let T = (e) => {
        let { channel: t, message: n, out: l = !1, noAnimate: s = !1 } = e,
            o = (0, _.A)(n, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                noStyleAndInteraction: !1,
                isInteracting: !1,
                allowDevLinks: !1,
                allowLinks: !1,
                allowGameMentions: !1,
                previewLinkTarget: !1,
            }),
            d = n.author,
            c = I.Ay.getName(d),
            u = (0, A.A)({ userId: d.id, guildId: t.guild_id }),
            { avatarSrc: h, avatarDecorationSrc: g } = (0, f.A)({ userId: d.id, guildId: t.guild_id, size: 48 });
        return (0, i.jsxs)("div", {
            className: a()(S.iU, { [S.FD]: l, [S.Tf]: s }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.euF, {
                        src: h,
                        avatarDecoration: g,
                        size: r._3J.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(p.A, { userName: c, displayNameStyles: u, effectDisplayType: m.G.STATIC, loop: !0 }),
                (0, i.jsxs)("div", {
                    className: S.fi,
                    children: [
                        (0, i.jsx)(r.Text, { variant: "text-md/normal", className: S.Qs, children: o.content }),
                        n.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: a()(S.nM, S.rQ),
                                children: n.attachments
                                    .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            { src: e.url, width: 128, className: S.oh, alt: N.intl.string(N.t.X4IxWL) },
                                            e.id,
                                        ),
                                    ),
                            }),
                    ],
                }),
            ],
        });
    },
    v = (e) => {
        let { channel: t, idle: n, showChat: s } = e,
            A = l.useRef(new Set()),
            [m, p] = l.useState([]),
            [_, f] = l.useState(0),
            I = l.useRef(null),
            N = l.useRef(!1),
            [v, y] = l.useState(!0),
            [j, R] = l.useState(""),
            [O, L] = l.useState((0, u.x7)(j));
        l.useEffect(() => {
            let e = A.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            l.useEffect(() => {
                let e = () => y(!0),
                    t = () => y(!1);
                return (
                    E._.subscribe(b.jej.TEXTAREA_FOCUS, e),
                    E._.subscribe(b.jej.TEXTAREA_BLUR, t),
                    () => {
                        E._.unsubscribe(b.jej.TEXTAREA_FOCUS, e), E._.unsubscribe(b.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            l.useEffect(() => {
                let e = I.current;
                null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
            }, [I]),
            l.useEffect(() => {
                let e = Date.now();
                p(
                    C.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                        .slice(-50),
                );
            }, [t]);
        let M = l.useCallback((e) => {
                p((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            D = l.useMemo(() => {
                let e = m[m.length - 1];
                if (null == e) return !0;
                if (_ + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5e3;
                if (!t) {
                    let e = setTimeout(() => {
                        f(Date.now()), A.current.delete(e);
                    }, 5500);
                    A.current.add(e);
                }
                return t;
            }, [m, _]);
        return (
            l.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: i } = e,
                        l = C.A.getMessage(i.channel_id, i.id);
                    if (n === t.id && l?.state === "SENT") {
                        M(l);
                        let e = setTimeout(() => {
                            A.current.delete(e);
                            let t = I.current;
                            null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                        }, 10);
                        A.current.add(e);
                    }
                };
                return o.h.subscribe("MESSAGE_CREATE", e), () => o.h.unsubscribe("MESSAGE_CREATE", e);
            }, []),
            (0, i.jsxs)("div", {
                className: a()(S.X2, { [S.R]: !s }),
                onMouseEnter: () => (N.current = !0),
                onMouseLeave: () => (N.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(x.A, {
                        children: (0, i.jsx)("div", {
                            className: a()(S.TE, { [S.N7]: n }),
                            children: (0, i.jsx)(r.HOs, {
                                className: a()(S.b6, { [S.N7]: D && n }),
                                ref: I,
                                children: m.map((e) => (0, i.jsx)(T, { channel: t, message: e, noAnimate: !0 }, e.id)),
                            }),
                        }),
                    }),
                    (0, i.jsx)(h.Ay, {
                        className: a()(S.CQ, { [S.N7]: n && 0 === j.length }),
                        innerClassName: S.hF,
                        type: c.oU.HAVEN,
                        channel: t,
                        textValue: j,
                        richValue: O,
                        placeholder: "Send message",
                        onFocus: () => y(!0),
                        onBlur: () => y(!1),
                        focused: v,
                        disabled: !s,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== j && (R(t), L(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                i = n.trim();
                            if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                            let l = g.Ay.parse(t, i);
                            try {
                                return (
                                    await d.A.sendMessage(t.id, l, !0, { location: "Haven" }),
                                    R(""),
                                    L((0, u.x7)("")),
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
