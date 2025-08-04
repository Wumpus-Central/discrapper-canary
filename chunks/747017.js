(n.d(t, { Z: () => v }), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(106301),
    f = n(314897),
    _ = n(699516),
    p = n(303524),
    h = n(329520),
    m = n(233023),
    g = n(868781),
    E = n(122943),
    b = n(556638),
    y = n(981631),
    O = n(843280);
function v(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: v, textClassName: I, iconClassName: T, textSize: S = 'xs', animateEmoji: A = !0, hasQuest: N = !1, hideEmoji: C = !1, hideTooltip: R = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let P = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        w = (0, l.e7)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id)),
        D = (0, l.e7)([d.Z], () => (w ? d.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === y.IIU.HANG_STATUS) : null)),
        L = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === y.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]);
    if ((0, l.e7)([_.Z], () => _.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let x = (null == t ? void 0 : t.bot) === !0,
        k = (null == L ? void 0 : L.state) != null && 'xs' === S,
        M = () => {
            if (null != P)
                return (0, r.jsx)(h.Z, {
                    stream: P,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(S, '/medium'),
                    textClassName: I,
                    iconClassName: T,
                    hideText: k,
                    hideIcon: x,
                    hideTooltip: R
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== y.IIU.CUSTOM_STATUS && t !== y.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, r.jsx)(g.Z, {
                      activity: e,
                      textVariant: 'text-'.concat(S, '/medium'),
                      textClassName: I,
                      iconClassName: T,
                      hideText: k,
                      hideIcon: x,
                      hideTooltip: R
                  })
                : null != v
                  ? (0, r.jsx)(E.Z, {
                        channel: v,
                        textVariant: 'text-'.concat(S, '/medium'),
                        textClassName: I,
                        iconClassName: T,
                        hideText: k,
                        hideTooltip: R
                    })
                  : null;
        },
        j = o()(O.container, {
            [O.textXs]: 'xs' === S,
            [O.textSm]: 'sm' === S
        }),
        U = () =>
            null == L
                ? null
                : (0, r.jsx)(m.Z, {
                      customStatusActivity: L,
                      textSize: S,
                      animateEmoji: A,
                      hideEmoji: C,
                      hideTooltip: R,
                      textClassName: I,
                      iconClassName: T,
                      tooltipClassName: j,
                      voiceChannel: v,
                      hangStatus: D
                  });
    return (0, r.jsxs)('div', {
        className: j,
        children: [
            M(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(S, '/normal'),
                className: o()(O.truncated, O.dot, I),
                children: b.l
            }),
            U(),
            N && (0, r.jsx)(p.Z, {})
        ]
    });
}
