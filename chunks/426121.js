n.d(t, { A: () => T });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(990078),
    o = n(834730),
    d = n(51183),
    c = n(17928),
    _ = n(287809),
    E = n(430363),
    u = n(4149),
    A = n(823854);
n(851883);
var I = n(124704);
function T(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: r,
            textClassName: T,
            userId: h,
            textSize: S = "xs",
            animateEmoji: N = !0,
            hideEmoji: f = !1,
            hideTooltip: p = !1,
        } = e,
        m = n?.emoji,
        O = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: i } = e,
                r = a.useMemo(() => (null == t ? null : (0, u.a)(t)), [t]),
                s = null == r || null == n ? null : n === r.senderId ? r.targetId : r.senderId,
                l = (0, c.bG)([_.default], () => (null != s ? _.default.getUser(s) : null), [s]),
                o = (0, c.bG)([A.A], () => (null == n ? null : A.A.getProgressForUserId(n)), [n]);
            return (0, E.Uk)(i)
                ? { presence: r, progress: o, statusTextOverride: (l?.globalName ?? l?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: h, location: "CustomStatusVoiceDare" }),
        C = O.statusTextOverride ?? n?.state,
        R = null != C && "" !== C,
        g = null;
    null == m || f || (g = (0, i.jsx)(d.A, { emoji: m, animate: N, className: r, hideTooltip: p || R }));
    let L = R ? (null != g ? ` ${C}` : C) : null;
    return null == n
        ? null
        : (0, i.jsx)(o.E, {
              variant: `text-${S}/medium`,
              color: "none",
              className: s()(I.ps, T),
              children:
                  ((t = null != m && !f && !R),
                  p || t
                      ? (0, i.jsxs)(i.Fragment, { children: [g, L] })
                      : null != O.presence
                        ? (0, i.jsx)(l.m, { delay: 150, children: (0, i.jsxs)("span", { children: [g, L] }) })
                        : (0, i.jsxs)("span", { children: [g, L] })),
          });
}
