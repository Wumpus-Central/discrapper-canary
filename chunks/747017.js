n.d(t, { Z: () => y }), n(781311);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(699516),
    f = n(303524),
    _ = n(329520),
    p = n(233023),
    h = n(868781),
    m = n(122943),
    g = n(556638),
    E = n(981631),
    b = n(843280);
function y(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: y, textClassName: O, iconClassName: v, textSize: I = 'xs', animateEmoji: T = !0, hasQuest: S = !1, hideEmoji: A = !1, hideTooltip: N = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let C = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        R = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === E.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]);
    if ((0, l.e7)([d.Z], () => d.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let P = (null == t ? void 0 : t.bot) === !0,
        w = (null == R ? void 0 : R.state) != null && 'xs' === I,
        D = () => {
            if (null != C)
                return (0, r.jsx)(_.Z, {
                    stream: C,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(I, '/medium'),
                    textClassName: O,
                    iconClassName: v,
                    hideText: w,
                    hideIcon: P,
                    hideTooltip: N
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== E.IIU.CUSTOM_STATUS && t !== E.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, r.jsx)(h.Z, {
                      activity: e,
                      textVariant: 'text-'.concat(I, '/medium'),
                      textClassName: O,
                      iconClassName: v,
                      hideText: w,
                      hideIcon: P,
                      hideTooltip: N
                  })
                : null != y
                  ? (0, r.jsx)(m.Z, {
                        channel: y,
                        textVariant: 'text-'.concat(I, '/medium'),
                        textClassName: O,
                        iconClassName: v,
                        hideText: w,
                        hideTooltip: N
                    })
                  : null;
        },
        L = o()(b.container, {
            [b.textXs]: 'xs' === I,
            [b.textSm]: 'sm' === I
        }),
        x = () =>
            null == R
                ? null
                : (0, r.jsx)(p.Z, {
                      customStatusActivity: R,
                      textSize: I,
                      animateEmoji: T,
                      hideEmoji: A,
                      hideTooltip: N,
                      textClassName: O,
                      iconClassName: v,
                      tooltipClassName: L
                  });
    return (0, r.jsxs)('div', {
        className: L,
        children: [
            D(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(I, '/normal'),
                className: o()(b.truncated, b.dot, O),
                children: g.l
            }),
            x(),
            S && (0, r.jsx)(f.Z, {})
        ]
    });
}
