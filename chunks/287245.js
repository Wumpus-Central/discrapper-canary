n.d(t, { A: () => b }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(665260),
    o = n(97808),
    c = n(778712),
    d = n(834730),
    u = n(364522),
    p = n(228366),
    h = n(493336),
    m = n(355622),
    A = n(408018),
    x = n(138617),
    g = n(609425),
    f = n(922301),
    C = n(660184),
    y = n(451909),
    E = n(375199),
    N = n(854627),
    v = n(447404),
    j = n(232835),
    I = n(625494),
    T = n(427262),
    _ = n(652215),
    S = n(375708),
    R = n(200252);
function P(e) {
    let { channel: t, message: n, out: l = !1, noAnimate: a = !1 } = e,
        u = (0, E.A)(n, {
            hideSimpleEmbedContent: !0,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowDevLinks: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        }),
        p = n.author,
        h = T.Ay.getName(p),
        m = (0, g.A)({ userId: p.id, guildId: t.guild_id }),
        { avatarSrc: A, avatarDecorationSrc: x } = (0, N.A)({ userId: p.id, guildId: t.guild_id, size: 48 });
    return (0, i.jsxs)("div", {
        className: s()(R.iU, { [R.FD]: l, [R.Tf]: a }),
        children: [
            (0, i.jsx)("div", {
                children: (0, i.jsx)(o.eu, {
                    src: A,
                    avatarDecoration: x,
                    size: c._3.SIZE_24,
                    "aria-label": "User Avatar",
                    isTyping: !1,
                }),
            }),
            (0, i.jsx)(C.A, { userName: h, displayNameStyles: m, effectDisplayType: f.G.STATIC, loop: !0 }),
            (0, i.jsxs)("div", {
                className: R.fi,
                children: [
                    (0, i.jsx)(d.E, { variant: "text-md/normal", className: R.Qs, children: u.content }),
                    n.attachments.length > 0 &&
                        (0, i.jsx)("div", {
                            className: s()(R.nM, R.rQ),
                            children: n.attachments
                                .filter(
                                    (e) =>
                                        !(0, r.Lt)(e.flags ?? 0, _.sbO.IS_SPOILER) &&
                                        e.content_type?.startsWith("image"),
                                )
                                .map((e) =>
                                    (0, i.jsx)(
                                        "img",
                                        { src: e.url, width: 128, className: R.oh, alt: S.intl.string(S.t.X4IxWL) },
                                        e.id,
                                    ),
                                ),
                        }),
                ],
            }),
        ],
    });
}
let b = (e) => {
    let { channel: t, idle: n, showChat: a } = e,
        r = l.useRef(new Set()),
        [o, c] = l.useState([]),
        [d, g] = l.useState(0),
        f = l.useRef(null),
        C = l.useRef(!1),
        [E, N] = l.useState(!0),
        [T, S] = l.useState(""),
        [b, O] = l.useState((0, A.x7)(T));
    l.useEffect(() => {
        let e = r.current;
        return () => {
            e.size > 0 && [...e].forEach((e) => clearTimeout(e));
        };
    }, []),
        l.useEffect(() => {
            function e() {
                return N(!0);
            }
            function t() {
                return N(!1);
            }
            return (
                I._.subscribe(_.jej.TEXTAREA_FOCUS, e),
                I._.subscribe(_.jej.TEXTAREA_BLUR, t),
                () => {
                    I._.unsubscribe(_.jej.TEXTAREA_FOCUS, e), I._.unsubscribe(_.jej.TEXTAREA_BLUR, t);
                }
            );
        }, []),
        l.useEffect(() => {
            let e = f.current;
            null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
        }, [f]),
        l.useEffect(() => {
            let e = Date.now();
            c(
                j.A.getMessages(t.id)
                    ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                    .slice(-50),
            );
        }, [t]);
    let L = l.useCallback((e) => {
            c((t) => {
                if (!t.some((t) => t.id === e.id)) {
                    let n = [...t, e];
                    return n.length > 50 && n.shift(), n;
                }
                return t;
            });
        }, []),
        D = l.useMemo(() => {
            let e = o[o.length - 1];
            if (null == e) return !0;
            if (d + 100 > Date.now()) return !1;
            let t = Date.now() > e.timestamp.getTime() + 5e3;
            if (!t) {
                let e = setTimeout(() => {
                    g(Date.now()), r.current.delete(e);
                }, 5500);
                r.current.add(e);
            }
            return t;
        }, [o, d]);
    return (
        l.useEffect(() => {
            function e(e) {
                let { channelId: n, message: i } = e,
                    l = j.A.getMessage(i.channel_id, i.id);
                if (n === t.id && l?.state === "SENT") {
                    L(l);
                    let e = setTimeout(() => {
                        r.current.delete(e);
                        let t = f.current;
                        null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                    }, 10);
                    r.current.add(e);
                }
            }
            return p.h.subscribe("MESSAGE_CREATE", e), () => p.h.unsubscribe("MESSAGE_CREATE", e);
        }, []),
        (0, i.jsxs)("div", {
            className: s()(R.X2, { [R.R]: !a }),
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
                        className: s()(R.TE, { [R.N7]: n }),
                        children: (0, i.jsx)(u.Ip, {
                            className: s()(R.b6, { [R.N7]: D && n }),
                            ref: f,
                            children: o.map((e) => (0, i.jsx)(P, { channel: t, message: e, noAnimate: !0 }, e.id)),
                        }),
                    }),
                }),
                (0, i.jsx)(x.Ay, {
                    className: s()(R.CQ, { [R.N7]: n && 0 === T.length }),
                    innerClassName: R.hF,
                    type: m.oU.HAVEN,
                    channel: t,
                    textValue: T,
                    richValue: b,
                    placeholder: "Send message",
                    onFocus: () => N(!0),
                    onBlur: () => N(!1),
                    focused: E,
                    disabled: !a,
                    showValueWhenDisabled: !0,
                    onChange: (e, t, n) => {
                        t !== T && (S(t), O(n));
                    },
                    onSubmit: async (e) => {
                        let { value: n } = e,
                            i = n.trim();
                        if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                        let l = y.Ay.parse(t, i);
                        try {
                            return (
                                await h.A.sendMessage(t.id, l, !0, { location: "Haven" }),
                                S(""),
                                O((0, A.x7)("")),
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
