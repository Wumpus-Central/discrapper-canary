n.d(t, { A: () => j });
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
    g = n(922301),
    m = n(750112),
    p = n(451909),
    _ = n(538355),
    x = n(854627),
    f = n(447404),
    E = n(320501),
    C = n(203982),
    I = n(427262),
    S = n(652215),
    b = n(985018),
    N = n(65309);
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
            { avatarSrc: h, avatarDecorationSrc: p } = (0, x.A)({ userId: d.id, guildId: t.guild_id, size: 48 });
        return (0, i.jsxs)("div", {
            className: a()(N.iU, { [N.FD]: l, [N.Tf]: s }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.euF, {
                        src: h,
                        avatarDecoration: p,
                        size: r._3J.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(m.A, { userName: c, displayNameStyles: u, effectDisplayType: g.G.STATIC, loop: !0 }),
                (0, i.jsxs)("div", {
                    className: N.fi,
                    children: [
                        (0, i.jsx)(r.Text, { variant: "text-md/normal", className: N.Qs, children: o.content }),
                        n.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: a()(N.nM, N.rQ),
                                children: n.attachments
                                    .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            { src: e.url, width: 128, className: N.oh, alt: b.intl.string(b.t.X4IxWL) },
                                            e.id,
                                        ),
                                    ),
                            }),
                    ],
                }),
            ],
        });
    },
    j = (e) => {
        let { channel: t, idle: n, showChat: s } = e,
            A = l.useRef(new Set()),
            [g, m] = l.useState([]),
            [_, x] = l.useState(0),
            I = l.useRef(null),
            b = l.useRef(!1),
            [j, v] = l.useState(!0),
            [y, R] = l.useState(""),
            [O, L] = l.useState((0, u.x7)(y));
        l.useEffect(() => {
            let e = A.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            l.useEffect(() => {
                let e = () => v(!0),
                    t = () => v(!1);
                return (
                    C._.subscribe(S.jej.TEXTAREA_FOCUS, e),
                    C._.subscribe(S.jej.TEXTAREA_BLUR, t),
                    () => {
                        C._.unsubscribe(S.jej.TEXTAREA_FOCUS, e), C._.unsubscribe(S.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            l.useEffect(() => {
                let e = I.current;
                null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
            }, [I]),
            l.useEffect(() => {
                let e = Date.now();
                m(
                    E.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                        .slice(-50),
                );
            }, [t]);
        let D = l.useCallback((e) => {
                m((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            M = l.useMemo(() => {
                let e = g[g.length - 1];
                if (null == e) return !0;
                if (_ + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5e3;
                if (!t) {
                    let e = setTimeout(() => {
                        x(Date.now()), A.current.delete(e);
                    }, 5500);
                    A.current.add(e);
                }
                return t;
            }, [g, _]);
        return (
            l.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: i } = e,
                        l = E.A.getMessage(i.channel_id, i.id);
                    if (n === t.id && l?.state === "SENT") {
                        D(l);
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
                className: a()(N.X2, { [N.R]: !s }),
                onMouseEnter: () => (b.current = !0),
                onMouseLeave: () => (b.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(f.A, {
                        children: (0, i.jsx)("div", {
                            className: a()(N.TE, { [N.N7]: n }),
                            children: (0, i.jsx)(r.HOs, {
                                className: a()(N.b6, { [N.N7]: M && n }),
                                ref: I,
                                children: g.map((e) => (0, i.jsx)(T, { channel: t, message: e, noAnimate: !0 }, e.id)),
                            }),
                        }),
                    }),
                    (0, i.jsx)(h.Ay, {
                        className: a()(N.CQ, { [N.N7]: n && 0 === y.length }),
                        innerClassName: N.hF,
                        type: c.oU.HAVEN,
                        channel: t,
                        textValue: y,
                        richValue: O,
                        placeholder: "Send message",
                        onFocus: () => v(!0),
                        onBlur: () => v(!1),
                        focused: j,
                        disabled: !s,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== y && (R(t), L(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                i = n.trim();
                            if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                            let l = p.Ay.parse(t, i);
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
