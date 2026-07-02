t.d(n, { A: () => M, R: () => R });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(735438),
    o = t(580929),
    c = t(17928),
    u = t(939249),
    d = t(866323),
    A = t(43990),
    h = t(228366),
    m = t(367513),
    C = t(493336),
    E = t(386467),
    p = t(465364),
    g = t(763754),
    x = t(805964),
    I = t(516287),
    f = t(68935),
    T = t(148355),
    v = t(232835),
    _ = t(994500),
    j = t(486020),
    N = t(927813),
    O = t(403362),
    S = t(652215),
    b = t(838541),
    y = t(561886);
let R = 10 * N.A.Millis.SECOND;
function L(e) {
    let { message: n } = e,
        { isBlocked: t, isIgnored: s } = (0, c.cf)(
            [_.A],
            () => ({ isBlocked: _.A.isBlockedForMessage(n), isIgnored: _.A.isIgnoredForMessage(n) }),
            [n],
        ),
        r = (0, g.X4)(n),
        o = i.useContext(E.A),
        [d, A] = i.useState(!1),
        h = i.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (m.A.updateChatOpen(n.channel_id, !0),
                    C.A.jumpToMessage({ channelId: n.channel_id, messageId: n.id, flash: !0 }));
            },
            [n.channel_id, n.id],
        ),
        v = null != n.content && "" !== n.content ? (0, p.Ay)(n).content : null,
        {
            contentPlaceholder: N,
            renderedContent: O,
            trailingIcon: S,
            leadingIcon: R,
        } = (0, x.o)(n, v, t, s, y.BK, { trailingIconClass: y.sl, leadingIconClass: y.aG, iconSize: b.eJ }),
        L = (0, f.o6)(n),
        M =
            L.length > 0
                ? L.map((e) => (0, l.jsx)(T.A, { className: y.yI, size: 128, sticker: e, isInteracting: d }, e.id))
                : null;
    return (0, l.jsx)(I.x, {
        value: d,
        children: (0, l.jsxs)(u.D, {
            className: y.oR,
            onMouseEnter: () => {
                A(!0);
            },
            onMouseLeave: () => {
                A(!1);
            },
            onClick: h,
            children: [
                (0, l.jsxs)("div", {
                    className: a()(y.kn, { [y.mK]: n.mentioned }),
                    children: [
                        null != M ? null : R,
                        O ?? M ?? (0, l.jsx)("span", { children: N }),
                        null != M ? null : S,
                    ],
                }),
                (0, l.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, j.s7)({ guildId: o, userId: n.author.id, avatar: r.guildMemberAvatar })
                            : n.author.getAvatarURL(o, 32),
                    className: y.my,
                }),
            ],
        }),
    });
}
function M(e) {
    let { channelId: n, className: t } = e,
        [s, u] = i.useState(!1),
        { toastsHidden: m, toastMessages: C } = (function (e) {
            let { channelId: n, isFrozen: t, count: l, lingerMs: s } = e,
                [a, r] = i.useState([]),
                [o, u] = i.useState(!1),
                d = i.useRef(null),
                A = i.useRef(void 0),
                m = i.useCallback(() => {
                    r([]), u(!0);
                }, []);
            i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: l, optimistic: i } = e;
                    t !== n ||
                        l.type === S.lAJ.STAGE_START ||
                        l.type === S.lAJ.STAGE_END ||
                        l.type === S.lAJ.STAGE_TOPIC ||
                        l.type === S.lAJ.STAGE_SPEAKER ||
                        l.type === S.lAJ.STAGE_RAISE_HAND ||
                        i ||
                        (clearTimeout(A.current), (A.current = setTimeout(m, s)), r((e) => [...e, l.id]));
                }
                return (
                    h.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        h.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, m, l, s]),
                i.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                i.useEffect(() => {
                    a.length > 3 &&
                        r((e) => {
                            let n = e.length - 3;
                            return [...e.slice(n)];
                        });
                }, [a]),
                t && null == d.current ? (d.current = a) : t || null == d.current || (d.current = null);
            let C = d.current ?? a;
            return {
                toastsHidden: o,
                toastMessages: (0, c.yK)([v.A], () => C.map((e) => v.A.getMessage(n, e)), [n, C]).filter(O.Vq),
            };
        })({ channelId: n, isFrozen: s, count: 3, lingerMs: R }),
        E = i.useRef({}),
        [p, g] = i.useState({}),
        x = i.useCallback((e, n) => {
            null == n ? delete E.current[e] : (E.current[e] = n);
        }, []),
        I = i.useRef(p);
    i.useLayoutEffect(() => {
        I.current = p;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                n = 0;
            for (let t of C) {
                let l = E.current[t.id] ?? 0;
                (e[t.id] = n), (n += l + 8);
            }
            (0, r.isEqual)(e, I.current) || g(e);
        }, [C]);
    let f = C.map((e) => ({ message: e, height: E.current[e.id], y: p[e.id] })),
        T = (0, d.p)(f, {
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
                return { opacity: 0, translateY: m ? t : -(n ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, l.jsx)(A.N, {
        theme: S.NJ8.DARK,
        children: (e) =>
            (0, l.jsx)("div", {
                className: a()(t, e),
                onMouseEnter: () => {
                    u(!0);
                },
                onMouseLeave: () => {
                    u(!1);
                },
                children: T((e, n) =>
                    (0, l.jsx)(o.animated.div, {
                        ref: (e) => x(n.message.id, null != e ? e.offsetHeight : null),
                        className: y.T_,
                        style: e,
                        children: (0, l.jsx)(L, { message: n.message }),
                    }),
                ),
            }),
    });
}
