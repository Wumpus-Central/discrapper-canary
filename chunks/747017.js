n.d(t, { Z: () => O }), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(699516),
    f = n(584973),
    _ = n(303524),
    p = n(170187),
    h = n(329520),
    m = n(868781),
    g = n(122943),
    E = n(556638),
    b = n(981631),
    y = n(843280);
function O(e) {
    let { user: t, activities: n, applicationStream: o, voiceChannel: O, textClassName: v, iconClassName: I, textSize: S = 'xs', animate: T = !0, hasQuest: A = !1, hideEmoji: N = !1, hideTooltip: C = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let R = (null == o ? void 0 : o.discoverable) !== !1 ? o : null,
        P = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === b.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]);
    if ((0, l.e7)([d.Z], () => d.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let w = (null == t ? void 0 : t.bot) === !0,
        D = (null == P ? void 0 : P.state) != null && 'xs' === S,
        L = () => {
            if (null != R)
                return (0, r.jsx)(h.Z, {
                    stream: R,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(S, '/medium'),
                    textClassName: v,
                    iconClassName: I,
                    hideText: D,
                    hideIcon: w,
                    hideTooltip: C
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== b.IIU.CUSTOM_STATUS && t !== b.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, r.jsx)(m.Z, {
                      activity: e,
                      textVariant: 'text-'.concat(S, '/medium'),
                      textClassName: v,
                      iconClassName: I,
                      hideText: D,
                      hideIcon: w,
                      hideTooltip: C
                  })
                : null != O
                  ? (0, r.jsx)(g.Z, {
                        channel: O,
                        textVariant: 'text-'.concat(S, '/medium'),
                        textClassName: v,
                        iconClassName: I,
                        hideText: D,
                        hideTooltip: C
                    })
                  : null;
        },
        x = () => {
            if (null == P) return null;
            let e = P.emoji,
                t = P.state;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != e &&
                        !N &&
                        (0, r.jsx)(f.Z, {
                            emoji: e,
                            animate: T,
                            hideTooltip: C,
                            className: I
                        }),
                    null != t &&
                        (0, r.jsx)(p.Z, {
                            variant: 'text-'.concat(S, '/medium'),
                            className: v,
                            children: t
                        })
                ]
            });
        };
    return (0, r.jsxs)('div', {
        className: a()(y.container, {
            [y.textXs]: 'xs' === S,
            [y.textSm]: 'sm' === S
        }),
        children: [
            L(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(S, '/normal'),
                className: a()(y.text, y.dot, v),
                children: E.l
            }),
            x(),
            A && (0, r.jsx)(_.Z, {})
        ]
    });
}
