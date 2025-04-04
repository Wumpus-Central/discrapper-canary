n.d(t, { Z: () => O }), n(566702);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(750881),
    d = n(545957),
    f = n(699516),
    _ = n(584973),
    p = n(303524),
    h = n(170187),
    m = n(329520),
    g = n(868781),
    E = n(122943),
    b = n(556638),
    y = n(981631),
    v = n(843280);
function O(e) {
    let { user: t, activities: n, applicationStream: o, voiceChannel: O, textClassName: I, emojiClassName: S, textSize: T = 'xs', animate: N = !0, hasQuest: A = !1, hideEmoji: C = !1, hideTooltip: R = !1 } = e,
        P = 'activity-status-web',
        { blockeeExperimentEnabled: w, blockerExperimentEnabled: D } = (0, u.NR)(P);
    (0, d.Z)(null == t ? void 0 : t.id, P);
    let L = w && (null == o ? void 0 : o.discoverable) === !1 ? null : o,
        x = i.useMemo(() => {
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
        }, [n]),
        M = (0, l.e7)([f.Z], () => f.Z.isBlockedOrIgnored(null == t ? void 0 : t.id));
    if (D && M) return null;
    let k = (null == t ? void 0 : t.bot) === !0,
        j = (null == x ? void 0 : x.state) != null && 'xs' === T,
        U = () => {
            if (null != L)
                return (0, r.jsx)(m.Z, {
                    stream: L,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: 'text-'.concat(T, '/medium'),
                    textClassName: I,
                    hideText: j,
                    hideIcon: k,
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
                      textVariant: 'text-'.concat(T, '/medium'),
                      textClassName: I,
                      hideText: j,
                      hideIcon: k,
                      hideTooltip: R
                  })
                : null != O
                  ? (0, r.jsx)(E.Z, {
                        channel: O,
                        textVariant: 'text-'.concat(T, '/medium'),
                        textClassName: I,
                        hideText: j,
                        hideTooltip: R
                    })
                  : null;
        },
        G = () => {
            if (null == x) return null;
            let e = x.emoji,
                t = x.state;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != e &&
                        !C &&
                        (0, r.jsx)(_.Z, {
                            emoji: e,
                            animate: N,
                            hideTooltip: R,
                            className: S
                        }),
                    null != t &&
                        (0, r.jsx)(h.Z, {
                            variant: 'text-'.concat(T, '/medium'),
                            className: I,
                            children: t
                        })
                ]
            });
        };
    return (0, r.jsxs)('div', {
        className: a()(v.container, {
            [v.textXs]: 'xs' === T,
            [v.textSm]: 'sm' === T
        }),
        children: [
            U(),
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(T, '/normal'),
                className: a()(v.text, v.dot, I),
                children: b.l
            }),
            G(),
            A && (0, r.jsx)(p.Z, {})
        ]
    });
}
