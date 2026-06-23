n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(97808),
    o = n(778712),
    c = n(834730),
    d = n(364522),
    u = n(228366),
    p = n(493336),
    h = n(355622),
    m = n(408018),
    A = n(138617),
    x = n(609425),
    g = n(922301),
    f = n(660184),
    C = n(451909),
    y = n(375199),
    E = n(854627),
    N = n(447404),
    v = n(232835),
    j = n(625494),
    I = n(427262),
    T = n(652215),
    _ = n(375708),
    S = n(200252);
function R(e) {
    let { channel: t, message: n, out: l = !1, noAnimate: a = !1 } = e,
        d = (0, y.A)(n, {
            hideSimpleEmbedContent: !0,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowDevLinks: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        }),
        u = n.author,
        p = I.Ay.getName(u),
        h = (0, x.A)({ userId: u.id, guildId: t.guild_id }),
        { avatarSrc: m, avatarDecorationSrc: A } = (0, E.A)({ userId: u.id, guildId: t.guild_id, size: 48 });
    return (0, i.jsxs)("div", {
        className: s()(S.iU, { [S.FD]: l, [S.Tf]: a }),
        children: [
            (0, i.jsx)("div", {
                children: (0, i.jsx)(r.eu, {
                    src: m,
                    avatarDecoration: A,
                    size: o._3.SIZE_24,
                    "aria-label": "User Avatar",
                    isTyping: !1,
                }),
            }),
            (0, i.jsx)(f.A, { userName: p, displayNameStyles: h, effectDisplayType: g.G.STATIC, loop: !0 }),
            (0, i.jsxs)("div", {
                className: S.fi,
                children: [
                    (0, i.jsx)(c.E, { variant: "text-md/normal", className: S.Qs, children: d.content }),
                    n.attachments.length > 0 &&
                        (0, i.jsx)("div", {
                            className: s()(S.nM, S.rQ),
                            children: n.attachments
                                .filter((e) => !e.spoiler && e.content_type?.startsWith("image"))
                                .map((e) =>
                                    (0, i.jsx)(
                                        "img",
                                        { src: e.url, width: 128, className: S.oh, alt: _.intl.string(_.t.X4IxWL) },
                                        e.id,
                                    ),
                                ),
                        }),
                ],
            }),
        ],
    });
}
let P = (e) => {
    let { channel: t, idle: n, showChat: a } = e,
        r = l.useRef(new Set()),
        [o, c] = l.useState([]),
        [x, g] = l.useState(0),
        f = l.useRef(null),
        y = l.useRef(!1),
        [E, I] = l.useState(!0),
        [_, P] = l.useState(""),
        [b, O] = l.useState((0, m.x7)(_));
    l.useEffect(() => {
        let e = r.current;
        return () => {
            e.size > 0 && [...e].forEach((e) => clearTimeout(e));
        };
    }, []),
        l.useEffect(() => {
            function e() {
                return I(!0);
            }
            function t() {
                return I(!1);
            }
            return (
                j._.subscribe(T.jej.TEXTAREA_FOCUS, e),
                j._.subscribe(T.jej.TEXTAREA_BLUR, t),
                () => {
                    j._.unsubscribe(T.jej.TEXTAREA_FOCUS, e), j._.unsubscribe(T.jej.TEXTAREA_BLUR, t);
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
                v.A.getMessages(t.id)
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
            if (x + 100 > Date.now()) return !1;
            let t = Date.now() > e.timestamp.getTime() + 5e3;
            if (!t) {
                let e = setTimeout(() => {
                    g(Date.now()), r.current.delete(e);
                }, 5500);
                r.current.add(e);
            }
            return t;
        }, [o, x]);
    return (
        l.useEffect(() => {
            function e(e) {
                let { channelId: n, message: i } = e,
                    l = v.A.getMessage(i.channel_id, i.id);
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
            return u.h.subscribe("MESSAGE_CREATE", e), () => u.h.unsubscribe("MESSAGE_CREATE", e);
        }, []),
        (0, i.jsxs)("div", {
            className: s()(S.X2, { [S.R]: !a }),
            onMouseEnter: () => (y.current = !0),
            onMouseLeave: () => (y.current = !1),
            onWheel: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            onScroll: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: [
                (0, i.jsx)(N.A, {
                    children: (0, i.jsx)("div", {
                        className: s()(S.TE, { [S.N7]: n }),
                        children: (0, i.jsx)(d.Ip, {
                            className: s()(S.b6, { [S.N7]: D && n }),
                            ref: f,
                            children: o.map((e) => (0, i.jsx)(R, { channel: t, message: e, noAnimate: !0 }, e.id)),
                        }),
                    }),
                }),
                (0, i.jsx)(A.Ay, {
                    className: s()(S.CQ, { [S.N7]: n && 0 === _.length }),
                    innerClassName: S.hF,
                    type: h.oU.HAVEN,
                    channel: t,
                    textValue: _,
                    richValue: b,
                    placeholder: "Send message",
                    onFocus: () => I(!0),
                    onBlur: () => I(!1),
                    focused: E,
                    disabled: !a,
                    showValueWhenDisabled: !0,
                    onChange: (e, t, n) => {
                        t !== _ && (P(t), O(n));
                    },
                    onSubmit: async (e) => {
                        let { value: n } = e,
                            i = n.trim();
                        if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                        let l = C.Ay.parse(t, i);
                        try {
                            return (
                                await p.A.sendMessage(t.id, l, !0, { location: "Haven" }),
                                P(""),
                                O((0, m.x7)("")),
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
