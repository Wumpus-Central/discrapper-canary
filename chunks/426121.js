n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(990078),
    l = n(834730),
    o = n(51183),
    E = n(17928),
    d = n(287809),
    c = n(430363),
    u = n(4149),
    I = n(823854);
n(851883);
var A = n(124704);
function T(e) {
    let t,
        {
            customStatusActivity: n,
            iconClassName: a,
            textClassName: T,
            userId: S,
            textSize: N = "xs",
            animateEmoji: O = !0,
            hideEmoji: R = !1,
            hideTooltip: f = !1,
        } = e,
        C = n?.emoji,
        p = (function (e) {
            let { customStatusActivity: t, statusOwnerId: n, location: i } = e,
                a = r.useMemo(() => (null == t ? null : (0, u.a)(t)), [t]),
                s = null == a || null == n ? null : n === a.senderId ? a.targetId : a.senderId,
                _ = (0, E.bG)([d.default], () => (null != s ? d.default.getUser(s) : null), [s]),
                l = (0, E.bG)([I.A], () => (null == n ? null : I.A.getProgressForUserId(n)), [n]);
            return (0, c.Uk)(i)
                ? { presence: a, progress: l, statusTextOverride: (_?.globalName ?? _?.username, null) }
                : { presence: null, progress: null, statusTextOverride: null };
        })({ customStatusActivity: n, statusOwnerId: S, location: "CustomStatusVoiceDare" }),
        m = p.statusTextOverride ?? n?.state,
        L = null != m && "" !== m,
        D = null;
    null == C || R || (D = (0, i.jsx)(o.A, { emoji: C, animate: O, className: a, hideTooltip: f || L }));
    let h = L ? (null != D ? ` ${m}` : m) : null;
    return null == n
        ? null
        : (0, i.jsx)(l.E, {
              variant: `text-${N}/medium`,
              color: "none",
              className: s()(A.ps, T),
              children:
                  ((t = null != C && !R && !L),
                  f || t
                      ? (0, i.jsxs)(i.Fragment, { children: [D, h] })
                      : null != p.presence
                        ? (0, i.jsx)(_.m, { delay: 150, children: (0, i.jsxs)("span", { children: [D, h] }) })
                        : (0, i.jsxs)("span", { children: [D, h] })),
          });
}
