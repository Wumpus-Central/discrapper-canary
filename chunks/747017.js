n.d(t, { Z: () => T }), n(781311);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(359588),
    _ = n(74340),
    f = n(19391),
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
function T(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: T, textClassName: S, iconClassName: A, textSize: N = 'xs', animateEmoji: C = !0, hasQuest: R = !1, hideEmoji: P = !1, hideTooltip: w = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let D = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
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
    let M = (null == t ? void 0 : t.bot) === !0,
        k = (null == x ? void 0 : x.state) != null && 'xs' === N,
        j = () => {
            if (null != D)
                return (0, r.jsx)(E.Z, {
                    stream: D,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(N, '/medium'),
                    textClassName: S,
                    iconClassName: A,
                    hideText: k,
                    hideIcon: M,
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
                      textClassName: S,
                      iconClassName: A,
                      hideText: k,
                      hideIcon: M,
                      hideTooltip: w
                  })
                : null != T
                  ? (0, r.jsx)(y.Z, {
                        channel: T,
                        textVariant: 'text-'.concat(N, '/medium'),
                        textClassName: S,
                        iconClassName: A,
                        hideText: k,
                        hideTooltip: w
                    })
                  : null;
        },
        U = () => {
            if (null == x) return null;
            let e = x.emoji,
                t = x.state,
                n = L ? (0, _.Z)(x) : null,
                i = null != n ? (0, f.Z)(n) : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != i &&
                        (0, r.jsx)(s.xv, {
                            variant: 'text-'.concat(N, '/medium'),
                            className: o()(S, I.customStatusLabel),
                            color: 'none',
                            children: ''.concat(i, ': ')
                        }),
                    null != e &&
                        !P &&
                        (0, r.jsx)(h.Z, {
                            emoji: e,
                            animate: C,
                            hideTooltip: w,
                            className: A
                        }),
                    null != t &&
                        (0, r.jsx)(g.Z, {
                            variant: 'text-'.concat(N, '/medium'),
                            className: S,
                            hideTooltip: w,
                            children: t
                        })
                ]
            });
        };
    return (0, r.jsxs)('div', {
        className: o()(I.container, {
            [I.textXs]: 'xs' === N,
            [I.textSm]: 'sm' === N
        }),
        children: [
            j(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(N, '/normal'),
                className: o()(I.truncated, I.dot, S),
                children: O.l
            }),
            U(),
            R && (0, r.jsx)(m.Z, {})
        ]
    });
}
