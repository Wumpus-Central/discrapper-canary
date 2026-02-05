n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(713654),
    r = n(435470),
    o = n(969043),
    c = n(576967),
    d = n(314307),
    u = n(985018),
    h = n(867384);
function m(e) {
    let { channel: t } = e,
        n = (0, r.kt)(t),
        { firstMessage: m } = (0, l.cf)([o.A], () => o.A.getMessage(t.id)),
        A = new Set((0, r.zt)(t, n)),
        p = (0, s.gU)(t) ?? a.oyn;
    return (0, i.jsxs)(d.Ay, {
        channelId: t.id,
        className: h.kL,
        children: [
            (0, i.jsx)("div", { className: h.P0, children: (0, i.jsx)(p, { className: h.Kk, strokeWidth: 1.75 }) }),
            (0, i.jsx)(d.cr, { className: h.wx, children: t.name }),
            null == m &&
                (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: u.intl.string(u.t.mE3KJN),
                }),
            (0, i.jsx)(c.A, { appliedTags: A, wrap: t.isModeratorReportChannel() }),
        ],
    });
}
