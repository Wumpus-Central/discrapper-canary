n.d(t, { Z: () => S }), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(359588),
    f = n(74340),
    _ = n(19391),
    p = n(699516),
    h = n(584973),
    m = n(303524),
    g = n(170187),
    E = n(329520),
    b = n(868781),
    y = n(122943),
    O = n(556638),
    v = n(981631),
    I = n(843280);
function S(e) {
    let { user: t, activities: n, applicationStream: o, voiceChannel: S, textClassName: T, iconClassName: A, textSize: N = 'xs', animateEmoji: C = !0, hasQuest: P = !1, hideEmoji: R = !1, hideTooltip: w = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let D = (null == o ? void 0 : o.discoverable) !== !1 ? o : null,
        L = (0, d.Z)({ location: 'ActivityStatus' }),
        x = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === v.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]);
    if ((0, l.e7)([p.Z], () => p.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let k = (null == t ? void 0 : t.bot) === !0,
        M = (null == x ? void 0 : x.state) != null && 'xs' === N,
        j = () => {
            if (null != D)
                return (0, r.jsx)(E.Z, {
                    stream: D,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(N, '/medium'),
                    textClassName: T,
                    iconClassName: A,
                    hideText: M,
                    hideIcon: k,
                    hideTooltip: w
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== v.IIU.CUSTOM_STATUS && t !== v.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, r.jsx)(b.Z, {
                      activity: e,
                      textVariant: 'text-'.concat(N, '/medium'),
                      textClassName: T,
                      iconClassName: A,
                      hideText: M,
                      hideIcon: k,
                      hideTooltip: w
                  })
                : null != S
                  ? (0, r.jsx)(y.Z, {
                        channel: S,
                        textVariant: 'text-'.concat(N, '/medium'),
                        textClassName: T,
                        iconClassName: A,
                        hideText: M,
                        hideTooltip: w
                    })
                  : null;
        },
        U = () => {
            if (null == x) return null;
            let e = x.emoji,
                t = x.state,
                n = L ? (0, f.Z)(x) : null,
                i = null != n ? (0, _.Z)(n) : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != i &&
                        (0, r.jsx)(s.xv, {
                            variant: 'text-'.concat(N, '/medium'),
                            className: a()(T, I.customStatusLabel),
                            color: 'none',
                            children: ''.concat(i, ': ')
                        }),
                    null != e &&
                        !R &&
                        (0, r.jsx)(h.Z, {
                            emoji: e,
                            animate: C,
                            hideTooltip: w,
                            className: A
                        }),
                    null != t &&
                        (0, r.jsx)(g.Z, {
                            variant: 'text-'.concat(N, '/medium'),
                            className: T,
                            hideTooltip: w,
                            children: t
                        })
                ]
            });
        };
    return (0, r.jsxs)('div', {
        className: a()(I.container, {
            [I.textXs]: 'xs' === N,
            [I.textSm]: 'sm' === N
        }),
        children: [
            j(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(N, '/normal'),
                className: a()(I.truncated, I.dot, T),
                children: O.l
            }),
            U(),
            P && (0, r.jsx)(m.Z, {})
        ]
    });
}
