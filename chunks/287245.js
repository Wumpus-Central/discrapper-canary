"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(73153),
    c = n(843472),
    d = n(355622),
    u = n(408018),
    h = n(133343),
    A = n(609425),
    p = n(922301),
    g = n(750112),
    m = n(451909),
    _ = n(538355),
    f = n(854627),
    x = n(447404),
    C = n(320501),
    E = n(203982),
    I = n(427262),
    N = n(652215),
    b = n(985018),
    S = n(65309);
let T = (e) => {
        let { channel: t, message: n, out: s = !1, noAnimate: l = !1 } = e,
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
            c = n.author,
            d = I.Ay.getName(c),
            u = (0, A.A)({ userId: c.id, guildId: t.guild_id }),
            { avatarSrc: h, avatarDecorationSrc: m } = (0, f.A)({ userId: c.id, guildId: t.guild_id, size: 48 });
        return (0, i.jsxs)("div", {
            className: r()(S.iU, { [S.FD]: s, [S.Tf]: l }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(a.euF, {
                        src: h,
                        avatarDecoration: m,
                        size: a._3J.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(g.A, { userName: d, displayNameStyles: u, effectDisplayType: p.G.STATIC, loop: !0 }),
                (0, i.jsxs)("div", {
                    className: S.fi,
                    children: [
                        (0, i.jsx)(a.Text, { variant: "text-md/normal", className: S.Qs, children: o.content }),
                        n.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: r()(S.nM, S.rQ),
                                children: n.attachments
                                    .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            { src: e.url, width: 128, className: S.oh, alt: b.intl.string(b.t.X4IxWL) },
                                            e.id,
                                        ),
                                    ),
                            }),
                    ],
                }),
            ],
        });
    },
    y = (e) => {
        let { channel: t, idle: n, showChat: l } = e,
            A = s.useRef(new Set()),
            [p, g] = s.useState([]),
            [_, f] = s.useState(0),
            I = s.useRef(null),
            b = s.useRef(!1),
            [y, v] = s.useState(!0),
            [j, R] = s.useState(""),
            [O, L] = s.useState((0, u.x7)(j));
        s.useEffect(() => {
            let e = A.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            s.useEffect(() => {
                let e = () => v(!0),
                    t = () => v(!1);
                return (
                    E._.subscribe(N.jej.TEXTAREA_FOCUS, e),
                    E._.subscribe(N.jej.TEXTAREA_BLUR, t),
                    () => {
                        E._.unsubscribe(N.jej.TEXTAREA_FOCUS, e), E._.unsubscribe(N.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            s.useEffect(() => {
                let e = I.current;
                null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
            }, [I]),
            s.useEffect(() => {
                let e = Date.now();
                g(
                    C.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                        .slice(-50),
                );
            }, [t]);
        let M = s.useCallback((e) => {
                g((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            D = s.useMemo(() => {
                let e = p[p.length - 1];
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
            }, [p, _]);
        return (
            s.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: i } = e,
                        s = C.A.getMessage(i.channel_id, i.id);
                    if (n === t.id && s?.state === "SENT") {
                        M(s);
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
                className: r()(S.X2, { [S.R]: !l }),
                onMouseEnter: () => (b.current = !0),
                onMouseLeave: () => (b.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(x.A, {
                        children: (0, i.jsx)("div", {
                            className: r()(S.TE, { [S.N7]: n }),
                            children: (0, i.jsx)(a.HOs, {
                                className: r()(S.b6, { [S.N7]: D && n }),
                                ref: I,
                                children: p.map((e) => (0, i.jsx)(T, { channel: t, message: e, noAnimate: !0 }, e.id)),
                            }),
                        }),
                    }),
                    (0, i.jsx)(h.Ay, {
                        className: r()(S.CQ, { [S.N7]: n && 0 === j.length }),
                        innerClassName: S.hF,
                        type: d.oU.HAVEN,
                        channel: t,
                        textValue: j,
                        richValue: O,
                        placeholder: "Send message",
                        onFocus: () => v(!0),
                        onBlur: () => v(!1),
                        focused: y,
                        disabled: !l,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== j && (R(t), L(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                i = n.trim();
                            if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                            let s = m.Ay.parse(t, i);
                            try {
                                return (
                                    await c.A.sendMessage(t.id, s, !0, { location: "Haven" }),
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
