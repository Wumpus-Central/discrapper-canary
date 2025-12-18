n.d(t, { Z: () => P }), n(388685), n(781311);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(570140),
    c = n(904245),
    u = n(541716),
    d = n(752305),
    p = n(893718),
    f = n(386725),
    h = n(821795),
    m = n(892567),
    g = n(957730),
    b = n(25015),
    y = n(518950),
    C = n(618158),
    v = n(375954),
    x = n(585483),
    O = n(51144),
    E = n(981631),
    j = n(388032),
    S = n(743852);
let _ = (e) => {
        let { channel: t, message: n, out: r = !1, noAnimate: l = !1 } = e,
            s = (0, b.Z)(n, {
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
            u = O.ZP.getName(c),
            d = (0, f.Z)({
                userId: c.id,
                guildId: t.guild_id,
            }),
            { avatarSrc: p, avatarDecorationSrc: g } = (0, y.Z)({
                userId: c.id,
                guildId: t.guild_id,
                size: 48,
            });
        return (0, i.jsxs)("div", {
            className: a()(S.message, {
                [S.out]: r,
                [S.noAnimate]: l,
            }),
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(o.qEK, {
                        src: p,
                        avatarDecoration: g,
                        size: o.EFr.SIZE_24,
                        "aria-label": "User Avatar",
                        isTyping: !1,
                    }),
                }),
                (0, i.jsx)(m.Z, {
                    userName: u,
                    displayNameStyles: d,
                    effectDisplayType: h.F.STATIC,
                    loop: !0,
                }),
                (0, i.jsxs)("div", {
                    className: S.column,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: S.content,
                            children: s.content,
                        }),
                        n.attachments.length > 0 &&
                            (0, i.jsx)("div", {
                                className: a()(S.row, S.gap),
                                children: n.attachments
                                    .filter((e) => {
                                        var t;
                                        return (
                                            !e.spoiler &&
                                            (null == (t = e.content_type) ? void 0 : t.startsWith("image"))
                                        );
                                    })
                                    .map((e) =>
                                        (0, i.jsx)(
                                            "img",
                                            {
                                                src: e.url,
                                                width: 128,
                                                className: S.attachment,
                                                alt: j.intl.string(j.t.X4IxWL),
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
    P = (e) => {
        let { channel: t, idle: n, showChat: l } = e,
            f = r.useRef(new Set()),
            [h, m] = r.useState([]),
            [b, y] = r.useState(0),
            O = r.useRef(null),
            j = r.useRef(!1),
            [P, I] = r.useState(!0),
            [Z, T] = r.useState(""),
            [N, A] = r.useState((0, d.JM)(Z));
        r.useEffect(() => {
            let e = f.current;
            return () => {
                e.size > 0 && [...e].forEach((e) => clearTimeout(e));
            };
        }, []),
            r.useEffect(() => {
                let e = () => I(!0),
                    t = () => I(!1);
                return (
                    x.S.subscribe(E.CkL.TEXTAREA_FOCUS, e),
                    x.S.subscribe(E.CkL.TEXTAREA_BLUR, t),
                    () => {
                        x.S.unsubscribe(E.CkL.TEXTAREA_FOCUS, e), x.S.unsubscribe(E.CkL.TEXTAREA_BLUR, t);
                    }
                );
            }, []),
            r.useEffect(() => {
                let e = O.current;
                null != e &&
                    e.scrollTo({
                        top: e.scrollHeight,
                        behavior: "smooth",
                    });
            }, [O]),
            r.useEffect(() => {
                let e = Date.now();
                m(
                    v.Z.getMessages(t.id)
                        ._array.filter((t) => t.timestamp.getTime() > e - 1200000)
                        .slice(-50),
                );
            }, [t]);
        let w = r.useCallback((e) => {
                m((t) => {
                    if (!t.some((t) => t.id === e.id)) {
                        let n = [...t, e];
                        return n.length > 50 && n.shift(), n;
                    }
                    return t;
                });
            }, []),
            M = r.useMemo(() => {
                let e = h[h.length - 1];
                if (null == e) return !0;
                if (b + 100 > Date.now()) return !1;
                let t = Date.now() > e.timestamp.getTime() + 5000;
                if (!t) {
                    let e = setTimeout(() => {
                        y(Date.now()), f.current.delete(e);
                    }, 5500);
                    f.current.add(e);
                }
                return t;
            }, [h, b]);
        return (
            r.useEffect(() => {
                let e = (e) => {
                    let { channelId: n, message: i } = e,
                        r = v.Z.getMessage(i.channel_id, i.id);
                    if (n === t.id && (null == r ? void 0 : r.state) === "SENT") {
                        w(r);
                        let e = setTimeout(() => {
                            f.current.delete(e);
                            let t = O.current;
                            null != t &&
                                t.scrollTo({
                                    top: t.scrollHeight,
                                    behavior: "smooth",
                                });
                        }, 10);
                        f.current.add(e);
                    }
                };
                return s.Z.subscribe("MESSAGE_CREATE", e), () => s.Z.unsubscribe("MESSAGE_CREATE", e);
            }, []),
            (0, i.jsxs)("div", {
                className: a()(S.chatFlow, { [S.hidden]: !l }),
                onMouseEnter: () => (j.current = !0),
                onMouseLeave: () => (j.current = !1),
                onWheel: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                onScroll: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(C.Z, {
                        children: (0, i.jsx)("div", {
                            className: a()(S.chat, { [S.idle]: n }),
                            children: (0, i.jsx)(o.Ttm, {
                                className: a()(S.history, { [S.idle]: M && n }),
                                ref: O,
                                children: h.map((e) =>
                                    (0, i.jsx)(
                                        _,
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
                    (0, i.jsx)(p.ZP, {
                        className: a()(S.outerInput, { [S.idle]: n && 0 === Z.length }),
                        innerClassName: S.input,
                        type: u.Ie.HAVEN,
                        channel: t,
                        textValue: Z,
                        richValue: N,
                        placeholder: "Send message",
                        onFocus: () => I(!0),
                        onBlur: () => I(!1),
                        focused: P,
                        disabled: !l,
                        showValueWhenDisabled: !0,
                        onChange: (e, t, n) => {
                            t !== Z && (T(t), A(n));
                        },
                        onSubmit: async (e) => {
                            let { value: n } = e,
                                i = n.trim();
                            if (0 === i.length)
                                return {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                };
                            let r = g.ZP.parse(t, i);
                            try {
                                return (
                                    await c.Z.sendMessage(t.id, r, !0, { location: "Haven" }),
                                    T(""),
                                    A((0, d.JM)("")),
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
