n.d(t, { A: () => R });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(97808),
    o = n(778712),
    c = n(834730),
    d = n(573613),
    u = n(73153),
    p = n(843472),
    h = n(355622),
    _ = n(408018),
    m = n(133343),
    A = n(609425),
    x = n(922301),
    f = n(750112),
    g = n(451909),
    C = n(538355),
    y = n(854627),
    v = n(447404),
    E = n(320501),
    N = n(203982),
    I = n(427262),
    j = n(652215),
    T = n(985018),
    b = n(200252);
let S = (e) => {
        let { channel: t, message: n, out: a = !1, noAnimate: l = !1 } = e,
            d = (0, C.A)(n, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                noStyleAndInteraction: !1,
                allowDevLinks: !1,
                allowLinks: !1,
                previewLinkTarget: !1,
            }),
            u = n.author,
            p = I.Ay.getName(u),
            h = (0, A.A)({ userId: u.id, guildId: t.guild_id }),
            { avatarSrc: _, avatarDecorationSrc: m } = (0, y.A)({ userId: u.id, guildId: t.guild_id, size: 48 });
        return (0, i.jsxs)("div", {
            className: s()(b.iU, { [b.FD]: a, [b.Tf]: l }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.eu, {
                        src: _,
                        avatarDecoration: m,
                        size: o._3.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(f.A, { userName: p, displayNameStyles: h, effectDisplayType: x.G.STATIC, loop: !0 }),
                (0, i.jsxs)("div", {
                    className: b.fi,
                    children: [
                        (0, i.jsx)(c.E, { variant: "text-md/normal", className: b.Qs, children: d.content }),
                        n.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: s()(b.nM, b.rQ),
                                children: n.attachments
                                    .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            { src: e.url, width: 128, className: b.oh, alt: T.intl.string(T.t.X4IxWL) },
                                            e.id,
                                        ),
                                    ),
                            }),
                    ],
                }),
            ],
        });
    },
    R = (e) => {
        let { channel: t, idle: n, showChat: l } = e,
            r = a.useRef(new Set()),
            [o, c] = a.useState([]),
            [A, x] = a.useState(0),
            f = a.useRef(null),
            C = a.useRef(!1),
            [y, I] = a.useState(!0),
            [T, R] = a.useState(""),
            [P, O] = a.useState((0, _.x7)(T));
        a.useEffect(() => {
            let e = r.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            a.useEffect(() => {
                let e = () => I(!0),
                    t = () => I(!1);
                return (
                    N._.subscribe(j.jej.TEXTAREA_FOCUS, e),
                    N._.subscribe(j.jej.TEXTAREA_BLUR, t),
                    () => {
                        N._.unsubscribe(j.jej.TEXTAREA_FOCUS, e), N._.unsubscribe(j.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            a.useEffect(() => {
                let e = f.current;
                null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
            }, [f]),
            a.useEffect(() => {
                let e = Date.now();
                c(
                    E.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                        .slice(-50),
                );
            }, [t]);
        let w = a.useCallback((e) => {
                c((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            L = a.useMemo(() => {
                let e = o[o.length - 1];
                if (null == e) return !0;
                if (A + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5e3;
                if (!t) {
                    let e = setTimeout(() => {
                        x(Date.now()), r.current.delete(e);
                    }, 5500);
                    r.current.add(e);
                }
                return t;
            }, [o, A]);
        return (
            a.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: i } = e,
                        a = E.A.getMessage(i.channel_id, i.id);
                    if (n === t.id && a?.state === "SENT") {
                        w(a);
                        let e = setTimeout(() => {
                            r.current.delete(e);
                            let t = f.current;
                            null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                        }, 10);
                        r.current.add(e);
                    }
                };
                return u.h.subscribe("MESSAGE_CREATE", e), () => u.h.unsubscribe("MESSAGE_CREATE", e);
            }, []),
            (0, i.jsxs)("div", {
                className: s()(b.X2, { [b.R]: !l }),
                onMouseEnter: () => (C.current = !0),
                onMouseLeave: () => (C.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(v.A, {
                        children: (0, i.jsx)("div", {
                            className: s()(b.TE, { [b.N7]: n }),
                            children: (0, i.jsx)(d.Ip, {
                                className: s()(b.b6, { [b.N7]: L && n }),
                                ref: f,
                                children: o.map((e) => (0, i.jsx)(S, { channel: t, message: e, noAnimate: !0 }, e.id)),
                            }),
                        }),
                    }),
                    (0, i.jsx)(m.Ay, {
                        className: s()(b.CQ, { [b.N7]: n && 0 === T.length }),
                        innerClassName: b.hF,
                        type: h.oU.HAVEN,
                        channel: t,
                        textValue: T,
                        richValue: P,
                        placeholder: "Send message",
                        onFocus: () => I(!0),
                        onBlur: () => I(!1),
                        focused: y,
                        disabled: !l,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== T && (R(t), O(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                i = n.trim();
                            if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                            let a = g.Ay.parse(t, i);
                            try {
                                return (
                                    await p.A.sendMessage(t.id, a, !0, { location: "Haven" }),
                                    R(""),
                                    O((0, _.x7)("")),
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
