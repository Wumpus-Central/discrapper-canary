n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(534890),
    s = n(834730),
    r = n(47167),
    o = n(713654),
    c = n(435470),
    d = n(969043),
    u = n(576967),
    h = n(314307),
    m = n(985018),
    A = n(873185);
function g(e) {
    let { channel: t } = e,
        n = (0, c.kt)(t),
        { firstMessage: g } = (0, l.cf)([d.A], () => d.A.getMessage(t.id)),
        p = new Set((0, c.zt)(t, n)),
        _ = (0, o.gU)(t) ?? a.o,
        f = (0, r.Ay)(t);
    return (0, i.jsxs)(h.Ay, {
        channelId: t.id,
        className: A.kL,
        children: [
            (0, i.jsx)("div", { className: A.P0, children: (0, i.jsx)(_, { className: A.Kk, strokeWidth: 1.75 }) }),
            (0, i.jsx)(h.cr, { className: A.wx, children: f }),
            null == g &&
                (0, i.jsx)(s.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: m.intl.string(m.t.mE3KJN),
                }),
            (0, i.jsx)(u.A, { appliedTags: p, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
