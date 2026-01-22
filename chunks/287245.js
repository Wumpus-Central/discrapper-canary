n.d(t, { A: () => S }), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(73153),
    c = n(843472),
    u = n(355622),
    d = n(408018),
    f = n(133343),
    p = n(609425),
    h = n(922301),
    b = n(750112),
    g = n(451909),
    m = n(538355),
    A = n(854627),
    y = n(447404),
    O = n(320501),
    j = n(203982),
    v = n(427262),
    x = n(652215),
    E = n(985018),
    _ = n(65309);
let C = (e) => {
        let { channel: t, message: n, out: l = !1, noAnimate: i = !1 } = e,
            o = (0, m.A)(n, {
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
            u = v.Ay.getName(c),
            d = (0, p.A)({
                userId: c.id,
                guildId: t.guild_id,
            }),
            { avatarSrc: f, avatarDecorationSrc: g } = (0, A.A)({
                userId: c.id,
                guildId: t.guild_id,
                size: 48,
            });
        return (0, r.jsxs)("div", {
            className: a()(_.iU, {
                [_.FD]: l,
                [_.Tf]: i,
            }),
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.euF, {
                        src: f,
                        avatarDecoration: g,
                        size: s._3J.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, r.jsx)(b.A, {
                    userName: u,
                    displayNameStyles: d,
                    effectDisplayType: h.G.STATIC,
                    loop: !0,
                }),
                (0, r.jsxs)("div", {
                    className: _.fi,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: _.Qs,
                            children: o.content,
                        }),
                        n.attachments.length > 0 &&
                            (0, r.jsx)("div", {
                                className: a()(_.nM, _.rQ),
                                children: n.attachments
                                    .filter((e) => {
                                        var t;
                                        return (
                                            !e.spoiler &&
                                            (null == (t = e.content_type) ? void 0 : t.startsWith("image"))
                                        );
                                    })
                                    .map((e) =>
                                        (0, r.jsx)(
                                            "img",
                                            {
                                                src: e.url,
                                                width: 128,
                                                className: _.oh,
                                                alt: E.intl.string(E.t.X4IxWL),
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
    S = (e) => {
        let { channel: t, idle: n, showChat: i } = e,
            p = l.useRef(new Set()),
            [h, b] = l.useState([]),
            [m, A] = l.useState(0),
            v = l.useRef(null),
            E = l.useRef(!1),
            [S, I] = l.useState(!0),
            [N, T] = l.useState(""),
            [P, w] = l.useState((0, d.x7)(N));
        l.useEffect(() => {
            let e = p.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            l.useEffect(() => {
                let e = () => I(!0),
                    t = () => I(!1);
                return (
                    j._.subscribe(x.jej.TEXTAREA_FOCUS, e),
                    j._.subscribe(x.jej.TEXTAREA_BLUR, t),
                    () => {
                        j._.unsubscribe(x.jej.TEXTAREA_FOCUS, e), j._.unsubscribe(x.jej.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            l.useEffect(() => {
                let e = v.current;
                null != e &&
                    e.scrollTo({
                        top: e.scrollHeight,
                        behavior: "smooth",
                    });
            }, [v]),
            l.useEffect(() => {
                let e = Date.now();
                b(
                    O.A.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 1200000)
                        .slice(-50),
                );
            }, [t]);
        let R = l.useCallback((e) => {
                b((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            D = l.useMemo(() => {
                let e = h[h.length - 1];
                if (null == e) return !0;
                if (m + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5000;
                if (!t) {
                    let e = setTimeout(() => {
                        A(Date.now()), p.current.delete(e);
                    }, 5500);
                    p.current.add(e);
                }
                return t;
            }, [h, m]);
        return (
            l.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: r } = e,
                        l = O.A.getMessage(r.channel_id, r.id);
                    if (n === t.id && (null == l ? void 0 : l.state) === "SENT") {
                        R(l);
                        let e = setTimeout(() => {
                            p.current.delete(e);
                            let t = v.current;
                            null != t &&
                                t.scrollTo({
                                    top: t.scrollHeight,
                                    behavior: "smooth",
                                });
                        }, 10);
                        p.current.add(e);
                    }
                };
                return o.h.subscribe("MESSAGE_CREATE", e), () => o.h.unsubscribe("MESSAGE_CREATE", e);
            }, []),
            (0, r.jsxs)("div", {
                className: a()(_.X2, { [_.R]: !i }),
                onMouseEnter: () => (E.current = !0),
                onMouseLeave: () => (E.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, r.jsx)(y.A, {
                        children: (0, r.jsx)("div", {
                            className: a()(_.TE, { [_.N7]: n }),
                            children: (0, r.jsx)(s.HOs, {
                                className: a()(_.b6, { [_.N7]: D && n }),
                                ref: v,
                                children: h.map((e) =>
                                    (0, r.jsx)(
                                        C,
                                        {
                                            channel: t,
                                            message: e,
                                            noAnimate: !0,
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                        }),
                    }),
                    (0, r.jsx)(f.Ay, {
                        className: a()(_.CQ, { [_.N7]: n && 0 === N.length }),
                        innerClassName: _.hF,
                        type: u.oU.HAVEN,
                        channel: t,
                        textValue: N,
                        richValue: P,
                        placeholder: "Send message",
                        onFocus: () => I(!0),
                        onBlur: () => I(!1),
                        focused: S,
                        disabled: !i,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== N && (T(t), w(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                r = n.trim();
                            if (0 === r.length)
                                return {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                };
                            let l = g.Ay.parse(t, r);
                            try {
                                return (
                                    await c.A.sendMessage(t.id, l, !0, { location: "Haven" }),
                                    T(""),
                                    w((0, d.x7)("")),
                                    {
                                        shouldClear: !0,
                                        shouldRefocus: !1,
                                    }
                                );
                            } catch (e) {
                                return {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                };
                            }
                        },
                    }),
                ],
            })
        );
    };
