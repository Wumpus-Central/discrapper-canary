n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(47167),
    r = n(713654),
    o = n(435470),
    c = n(969043),
    d = n(576967),
    u = n(314307),
    h = n(985018),
    m = n(724898);
function A(e) {
    let { channel: t } = e,
        n = (0, o.kt)(t),
        { firstMessage: A } = (0, l.cf)([c.A], () => c.A.getMessage(t.id)),
        g = new Set((0, o.zt)(t, n)),
        p = (0, r.gU)(t) ?? s.oyn,
        f = (0, a.Ay)(t);
    return (0, i.jsxs)(u.Ay, {
        channelId: t.id,
        className: m.kL,
        children: [
            (0, i.jsx)("div", { className: m.P0, children: (0, i.jsx)(p, { className: m.Kk, strokeWidth: 1.75 }) }),
            (0, i.jsx)(u.cr, { className: m.wx, children: f }),
            null == A &&
                (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: h.intl.string(h.t.mE3KJN),
                }),
            (0, i.jsx)(d.A, { appliedTags: g, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
