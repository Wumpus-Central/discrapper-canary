n.d(t, { A: () => P }), n(938796);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(665260),
    o = n(97808),
    c = n(778712),
    d = n(834730),
    u = n(364522),
    h = n(228366),
    p = n(148494),
    m = n(355622),
    A = n(408018),
    f = n(138617),
    x = n(609425),
    g = n(922301),
    C = n(660184),
    y = n(451909),
    j = n(375199),
    v = n(854627),
    E = n(447404),
    N = n(232835),
    I = n(625494),
    T = n(427262),
    b = n(652215),
    _ = n(375708),
    R = n(706628);
function S(e) {
    let { channel: t, message: n, out: l = !1, noAnimate: a = !1 } = e,
        u = (0, j.A)(n, {
            hideSimpleEmbedContent: !0,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowDevLinks: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
        }),
        h = n.author,
        p = T.Ay.getName(h),
        m = (0, x.A)({ userId: h.id, guildId: t.guild_id }),
        { avatarSrc: A, avatarDecorationSrc: f } = (0, v.A)({ userId: h.id, guildId: t.guild_id, size: 48 });
    return (0, i.jsxs)("div", {
        className: s()(R.iU, { [R.FD]: l, [R.Tf]: a }),
        children: [
            (0, i.jsx)("div", {
                children: (0, i.jsx)(o.eu, {
                    src: A,
                    avatarDecoration: f,
                    size: c._3.SIZE_24,
                    "aria-label": "User Avatar",
                    isTyping: !1,
                }),
            }),
            (0, i.jsx)(C.A, { userName: p, displayNameStyles: m, effectDisplayType: g.G.STATIC, loop: !0 }),
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
                                        !(0, r.Lt)(e.flags ?? 0, b.sbO.IS_SPOILER) &&
                                        e.content_type?.startsWith("image"),
                                )
                                .map((e) =>
                                    (0, i.jsx)(
                                        "img",
                                        { src: e.url, width: 128, className: R.oh, alt: _.intl.string(_.t.X4IxWL) },
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
        [d, x] = l.useState(0),
        g = l.useRef(null),
        C = l.useRef(!1),
        [j, v] = l.useState(!0),
        [T, _] = l.useState(""),
        [P, L] = l.useState((0, A.x7)(T));
    l.useEffect(() => {
        let e = r.current;
        return () => {
            e.size > 0 && [...e].forEach((e) => clearTimeout(e));
        };
    }, []),
        l.useEffect(() => {
            function e() {
                return v(!0);
            }
            function t() {
                return v(!1);
            }
            return (
                I._.subscribe(b.jej.TEXTAREA_FOCUS, e),
                I._.subscribe(b.jej.TEXTAREA_BLUR, t),
                () => {
                    I._.unsubscribe(b.jej.TEXTAREA_FOCUS, e), I._.unsubscribe(b.jej.TEXTAREA_BLUR, t);
                }
            );
        }, []),
        l.useEffect(() => {
            let e = g.current;
            null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
        }, [g]),
        l.useEffect(() => {
            let e = Date.now();
            c(
                N.A.getMessages(t.id)
                    ._array.filter((t) => t.timestamp.getTime() > e - 12e5)
                    .slice(-50),
            );
        }, [t]);
    let O = l.useCallback((e) => {
            c((t) => {
                if (!t.some((t) => t.id === e.id)) {
                    let n = [...t, e];
                    return n.length > 50 && n.shift(), n;
                }
                return t;
            });
        }, []),
        w = l.useMemo(() => {
            let e = o[o.length - 1];
            if (null == e) return !0;
            if (d + 100 > Date.now()) return !1;
            let t = Date.now() > e.timestamp.getTime() + 5e3;
            if (!t) {
                let e = setTimeout(() => {
                    x(Date.now()), r.current.delete(e);
                }, 5500);
                r.current.add(e);
            }
            return t;
        }, [o, d]);
    return (
        l.useEffect(() => {
            function e(e) {
                let { channelId: n, message: i } = e,
                    l = N.A.getMessage(i.channel_id, i.id);
                if (n === t.id && l?.state === "SENT") {
                    O(l);
                    let e = setTimeout(() => {
                        r.current.delete(e);
                        let t = g.current;
                        null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                    }, 10);
                    r.current.add(e);
                }
            }
            return h.h.subscribe("MESSAGE_CREATE", e), () => h.h.unsubscribe("MESSAGE_CREATE", e);
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
                (0, i.jsx)(E.A, {
                    children: (0, i.jsx)("div", {
                        className: s()(R.TE, { [R.N7]: n }),
                        children: (0, i.jsx)(u.Ip, {
                            className: s()(R.b6, { [R.N7]: w && n }),
                            ref: g,
                            children: o.map((e) => (0, i.jsx)(S, { channel: t, message: e, noAnimate: !0 }, e.id)),
                        }),
                    }),
                }),
                (0, i.jsx)(f.Ay, {
                    className: s()(R.CQ, { [R.N7]: n && 0 === T.length }),
                    innerClassName: R.hF,
                    type: m.oU.HAVEN,
                    channel: t,
                    textValue: T,
                    richValue: P,
                    placeholder: "Send message",
                    onFocus: () => v(!0),
                    onBlur: () => v(!1),
                    focused: j,
                    disabled: !a,
                    showValueWhenDisabled: !0,
                    onChange: (e, t, n) => {
                        t !== T && (_(t), L(n));
                    },
                    onSubmit: async (e) => {
                        let { value: n } = e,
                            i = n.trim();
                        if (0 === i.length) return { shouldClear: !1, shouldRefocus: !1 };
                        let l = y.Ay.parse(t, i);
                        try {
                            return (
                                await p.A.sendMessage(t.id, l, !0, { location: "Haven" }),
                                _(""),
                                L((0, A.x7)("")),
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
