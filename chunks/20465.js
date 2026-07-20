t.d(n, { A: () => D, R: () => L });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(435558),
    o = t(372684),
    c = t(17928),
    u = t(939249),
    d = t(866323),
    A = t(43990),
    h = t(228366),
    m = t(367513),
    C = t(493336),
    E = t(386467),
    p = t(521981),
    x = t(763754),
    g = t(805964),
    f = t(516287),
    I = t(68935),
    v = t(148355),
    T = t(232835),
    j = t(994500),
    _ = t(486020),
    N = t(927813),
    O = t(403362),
    S = t(240248),
    b = t(652215),
    y = t(838541),
    R = t(561886);
let L = 10 * N.A.Millis.SECOND;
function M(e) {
    let { message: n } = e,
        { isBlocked: t, isIgnored: s } = (0, c.cf)(
            [j.A],
            () => ({ isBlocked: j.A.isBlockedForMessage(n), isIgnored: j.A.isIgnoredForMessage(n) }),
            [n],
        ),
        r = (0, x.X4)(n),
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
        T = (0, S.uJ)(n.content) ? null : (0, p.Ay)(n, { allowGameMentions: !0 }).content,
        {
            contentPlaceholder: N,
            renderedContent: O,
            trailingIcon: b,
            leadingIcon: L,
        } = (0, g.o)(n, T, t, s, R.BK, { trailingIconClass: R.sl, leadingIconClass: R.aG, iconSize: y.eJ }),
        M = (0, I.o6)(n),
        D =
            M.length > 0
                ? M.map((e) => (0, l.jsx)(v.A, { className: R.yI, size: 128, sticker: e, isInteracting: d }, e.id))
                : null;
    return (0, l.jsx)(f.x, {
        value: d,
        children: (0, l.jsxs)(u.D, {
            className: R.oR,
            onMouseEnter: () => {
                A(!0);
            },
            onMouseLeave: () => {
                A(!1);
            },
            onClick: h,
            children: [
                (0, l.jsxs)("div", {
                    className: a()(R.kn, { [R.mK]: n.mentioned }),
                    children: [
                        null != D ? null : L,
                        O ?? D ?? (0, l.jsx)("span", { children: N }),
                        null != D ? null : b,
                    ],
                }),
                (0, l.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, _.s7)({ guildId: o, userId: n.author.id, avatar: r.guildMemberAvatar })
                            : n.author.getAvatarURL(o, 32),
                    className: R.my,
                }),
            ],
        }),
    });
}
function D(e) {
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
                        l.type === b.lAJ.STAGE_START ||
                        l.type === b.lAJ.STAGE_END ||
                        l.type === b.lAJ.STAGE_TOPIC ||
                        l.type === b.lAJ.STAGE_SPEAKER ||
                        l.type === b.lAJ.STAGE_RAISE_HAND ||
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
                toastMessages: (0, c.yK)([T.A], () => C.map((e) => T.A.getMessage(n, e)), [n, C]).filter(O.Vq),
            };
        })({ channelId: n, isFrozen: s, count: 3, lingerMs: L }),
        E = i.useRef({}),
        [p, x] = i.useState({}),
        g = i.useCallback((e, n) => {
            null == n ? delete E.current[e] : (E.current[e] = n);
        }, []),
        f = i.useRef(p);
    i.useLayoutEffect(() => {
        f.current = p;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                n = 0;
            for (let t of C) {
                let l = E.current[t.id] ?? 0;
                (e[t.id] = n), (n += l + 8);
            }
            (0, r.isEqual)(e, f.current) || x(e);
        }, [C]);
    let I = C.map((e) => ({ message: e, height: E.current[e.id], y: p[e.id] })),
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
                return { opacity: 0, translateY: m ? t : -(n ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, l.jsx)(A.N, {
        theme: b.NJ8.DARK,
        children: (e) =>
            (0, l.jsx)("div", {
                className: a()(t, e),
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
                        children: (0, l.jsx)(M, { message: n.message }),
                    }),
                ),
            }),
    });
}
