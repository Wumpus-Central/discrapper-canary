t.d(n, { A: () => D, R: () => M });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(435558),
    o = t(221877),
    c = t(17928),
    u = t(939249),
    d = t(866323),
    A = t(43990),
    m = t(228366),
    h = t(367513),
    C = t(148494),
    f = t(386467),
    E = t(521981),
    p = t(763754),
    g = t(308334),
    x = t(516287),
    I = t(68935),
    v = t(148355),
    T = t(232835),
    _ = t(994500),
    j = t(486020),
    N = t(927813),
    b = t(403362),
    S = t(240248),
    O = t(652215),
    y = t(838541),
    R = t(538347);
let M = 10 * N.A.Millis.SECOND;
function L(e) {
    let { message: n } = e,
        { isBlocked: t, isIgnored: a } = (0, c.cf)(
            [_.A],
            () => ({ isBlocked: _.A.isBlockedForMessage(n), isIgnored: _.A.isIgnoredForMessage(n) }),
            [n],
        ),
        r = (0, p.X4)(n),
        o = i.useContext(f.A),
        [d, A] = i.useState(!1),
        m = i.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (h.A.updateChatOpen(n.channel_id, !0),
                    C.A.jumpToMessage({ channelId: n.channel_id, messageId: n.id, flash: !0 }));
            },
            [n.channel_id, n.id],
        ),
        T = (0, S.uJ)(n.content) ? null : (0, E.Ay)(n, { allowGameMentions: !0 }).content,
        {
            contentPlaceholder: N,
            renderedContent: b,
            trailingIcon: O,
            leadingIcon: M,
        } = (0, g.o)(n, T, t, a, R.BK, { trailingIconClass: R.sl, leadingIconClass: R.aG, iconSize: y.eJ }),
        L = (0, I.o6)(n),
        D =
            L.length > 0
                ? L.map((e) => (0, l.jsx)(v.A, { className: R.yI, size: 128, sticker: e, isInteracting: d }, e.id))
                : null;
    return (0, l.jsx)(x.x, {
        value: d,
        children: (0, l.jsxs)(u.D, {
            className: R.oR,
            onMouseEnter: () => {
                A(!0);
            },
            onMouseLeave: () => {
                A(!1);
            },
            onClick: m,
            children: [
                (0, l.jsxs)("div", {
                    className: s()(R.kn, { [R.mK]: n.mentioned }),
                    children: [
                        null != D ? null : M,
                        b ?? D ?? (0, l.jsx)("span", { children: N }),
                        null != D ? null : O,
                    ],
                }),
                (0, l.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, j.s7)({ guildId: o, userId: n.author.id, avatar: r.guildMemberAvatar })
                            : n.author.getAvatarURL(o, 32),
                    className: R.my,
                }),
            ],
        }),
    });
}
function D(e) {
    let { channelId: n, className: t } = e,
        [a, u] = i.useState(!1),
        { toastsHidden: h, toastMessages: C } = (function (e) {
            let { channelId: n, isFrozen: t, count: l, lingerMs: a } = e,
                [s, r] = i.useState([]),
                [o, u] = i.useState(!1),
                d = i.useRef(null),
                A = i.useRef(void 0),
                h = i.useCallback(() => {
                    r([]), u(!0);
                }, []);
            i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: l, optimistic: i } = e;
                    t !== n ||
                        l.type === O.lAJ.STAGE_START ||
                        l.type === O.lAJ.STAGE_END ||
                        l.type === O.lAJ.STAGE_TOPIC ||
                        l.type === O.lAJ.STAGE_SPEAKER ||
                        l.type === O.lAJ.STAGE_RAISE_HAND ||
                        i ||
                        (clearTimeout(A.current), (A.current = setTimeout(h, a)), r((e) => [...e, l.id]));
                }
                return (
                    m.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        m.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, h, l, a]),
                i.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                i.useEffect(() => {
                    s.length > 3 &&
                        r((e) => {
                            let n = e.length - 3;
                            return [...e.slice(n)];
                        });
                }, [s]),
                t && null == d.current ? (d.current = s) : t || null == d.current || (d.current = null);
            let C = d.current ?? s;
            return {
                toastsHidden: o,
                toastMessages: (0, c.yK)([T.A], () => C.map((e) => T.A.getMessage(n, e)), [n, C]).filter(b.Vq),
            };
        })({ channelId: n, isFrozen: a, count: 3, lingerMs: M }),
        f = i.useRef({}),
        [E, p] = i.useState({}),
        g = i.useCallback((e, n) => {
            null == n ? delete f.current[e] : (f.current[e] = n);
        }, []),
        x = i.useRef(E);
    i.useLayoutEffect(() => {
        x.current = E;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                n = 0;
            for (let t of C) {
                let l = f.current[t.id] ?? 0;
                (e[t.id] = n), (n += l + 8);
            }
            (0, r.isEqual)(e, x.current) || p(e);
        }, [C]);
    let I = C.map((e) => ({ message: e, height: f.current[e.id], y: E[e.id] })),
        v = (0, d.p)(I, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: n } = e;
                return { opacity: 1, translateY: n };
            },
            update: (e) => {
                let { y: n } = e;
                return { translateY: n };
            },
            leave: (e) => {
                let { height: n, y: t } = e;
                return { opacity: 0, translateY: h ? t : -(n ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, l.jsx)(A.N, {
        theme: O.NJ8.DARK,
        children: (e) =>
            (0, l.jsx)("div", {
                className: s()(t, e),
                onMouseEnter: () => {
                    u(!0);
                },
                onMouseLeave: () => {
                    u(!1);
                },
                children: v((e, n) =>
                    (0, l.jsx)(o.animated.div, {
                        ref: (e) => g(n.message.id, null != e ? e.offsetHeight : null),
                        className: R.T_,
                        style: e,
                        children: (0, l.jsx)(L, { message: n.message }),
                    }),
                ),
            }),
    });
}
