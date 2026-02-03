n.d(t, {
    A: () => T,
    R: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(92674),
    c = n(311907),
    u = n(397927),
    d = n(73153),
    p = n(367513),
    h = n(843472),
    g = n(386467),
    f = n(465364),
    m = n(763754),
    b = n(448368),
    A = n(378058),
    y = n(148355),
    O = n(320501),
    j = n(994500),
    x = n(486020),
    _ = n(927813),
    v = n(403362),
    E = n(652215),
    C = n(838541),
    S = n(279633);
let I = 10 * _.A.Millis.SECOND;

function N(e) {
    var t;
    let { message: n } = e,
        { isBlocked: i, isIgnored: a } = (0, c.cf)(
            [j.A],
            () => ({
                isBlocked: j.A.isBlockedForMessage(n),
                isIgnored: j.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        o = (0, m.X4)(n),
        d = l.useContext(g.A),
        [O, _] = l.useState(!1),
        v = l.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (p.A.updateChatOpen(n.channel_id, !0),
                    h.A.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0,
                    }));
            },
            [n.channel_id, n.id],
        ),
        E =
            null != n.content && "" !== n.content
                ? (0, f.Ay)(n, {
                      isInteracting: O,
                  }).content
                : null,
        {
            contentPlaceholder: I,
            renderedContent: N,
            trailingIcon: T,
            leadingIcon: P,
        } = (0, b.o)(n, E, i, a, S.BK, {
            trailingIconClass: S.sl,
            leadingIconClass: S.aG,
            iconSize: C.eJ,
        }),
        w = (0, A.o6)(n),
        R =
            w.length > 0
                ? w.map((e) =>
                      (0, r.jsx)(
                          y.A,
                          {
                              className: S.yI,
                              size: 128,
                              sticker: e,
                              isInteracting: O,
                          },
                          e.id,
                      ),
                  )
                : null;
    return (0, r.jsxs)(u.DUT, {
        className: S.oR,
        onMouseEnter: () => {
            _(!0);
        },
        onMouseLeave: () => {
            _(!1);
        },
        onClick: v,
        children: [
            (0, r.jsxs)("div", {
                className: s()(S.kn, {
                    [S.mK]: n.mentioned,
                }),
                children: [
                    null != R ? null : P,
                    null != (t = null != N ? N : R)
                        ? t
                        : (0, r.jsx)("span", {
                              children: I,
                          }),
                    null != R ? null : T,
                ],
            }),
            (0, r.jsx)("img", {
                alt: "",
                src:
                    (null == o ? void 0 : o.guildMemberAvatar) != null && null != d
                        ? (0, x.s7)({
                              guildId: d,
                              userId: n.author.id,
                              avatar: o.guildMemberAvatar,
                          })
                        : n.author.getAvatarURL(d, 32),
                className: S.my,
            }),
        ],
    });
}

function T(e) {
    let { channelId: t, className: n } = e,
        [i, p] = l.useState(!1),
        { toastsHidden: h, toastMessages: g } = (function (e) {
            var t;
            let { channelId: n, isFrozen: r, count: i, lingerMs: s } = e,
                [a, o] = l.useState([]),
                [u, p] = l.useState(!1),
                h = l.useRef(null),
                g = l.useRef(void 0),
                f = l.useCallback(() => {
                    o([]), p(!0);
                }, []);
            l.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: r, optimistic: l } = e;
                    t !== n ||
                        r.type === E.lAJ.STAGE_START ||
                        r.type === E.lAJ.STAGE_END ||
                        r.type === E.lAJ.STAGE_TOPIC ||
                        r.type === E.lAJ.STAGE_SPEAKER ||
                        r.type === E.lAJ.STAGE_RAISE_HAND ||
                        l ||
                        (clearTimeout(g.current), (g.current = setTimeout(f, s)), o((e) => [...e, r.id]));
                }
                return (
                    d.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        d.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, f, i, s]),
                l.useEffect(
                    () => () => {
                        clearTimeout(g.current);
                    },
                    [],
                ),
                l.useEffect(() => {
                    a.length > 3 &&
                        o((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [a]),
                r && null == h.current ? (h.current = a) : r || null == h.current || (h.current = null);
            let m = null != (t = h.current) ? t : a;
            return {
                toastsHidden: u,
                toastMessages: (0, c.yK)([O.A], () => m.map((e) => O.A.getMessage(n, e)), [n, m]).filter(v.Vq),
            };
        })({
            channelId: t,
            isFrozen: i,
            count: 3,
            lingerMs: I,
        }),
        f = l.useRef({}),
        [m, b] = l.useState({}),
        A = l.useCallback((e, t) => {
            null == t ? delete f.current[e] : (f.current[e] = t);
        }, []),
        y = l.useRef(m);
    l.useLayoutEffect(() => {
        y.current = m;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let r of g) {
                var n;
                let l = null != (n = f.current[r.id]) ? n : 0;
                (e[r.id] = t), (t += l + 8);
            }
            (0, a.isEqual)(e, y.current) || b(e);
        }, [g]);
    let j = g.map((e) => ({
            message: e,
            height: f.current[e.id],
            y: m[e.id],
        })),
        x = (0, u.pnh)(j, {
            keys: (e) => e.message.id,
            from: () => ({
                opacity: 0,
            }),
            enter: (e) => {
                let { y: t } = e;
                return {
                    opacity: 1,
                    translateY: t,
                };
            },
            update: (e) => {
                let { y: t } = e;
                return {
                    translateY: t,
                };
            },
            leave: (e) => {
                let { height: t, y: n } = e;
                return {
                    opacity: 0,
                    translateY: h ? n : -(null != t ? t : 0) - 8,
                    pointerEvents: "none",
                };
            },
        });
    return (0, r.jsx)(u.NPJ, {
        theme: E.NJ8.DARK,
        children: (e) =>
            (0, r.jsx)("div", {
                className: s()(n, e),
                onMouseEnter: () => {
                    p(!0);
                },
                onMouseLeave: () => {
                    p(!1);
                },
                children: x((e, t) =>
                    (0, r.jsx)(o.animated.div, {
                        ref: (e) => A(t.message.id, null != e ? e.offsetHeight : null),
                        className: S.T_,
                        style: e,
                        children: (0, r.jsx)(N, {
                            message: t.message,
                        }),
                    }),
                ),
            }),
    });
}
