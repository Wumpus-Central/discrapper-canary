n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(713654),
    s = n(435470),
    o = n(969043),
    c = n(576967),
    u = n(314307),
    d = n(985018),
    f = n(867384);

function p(e) {
    var t;
    let { channel: n } = e,
        p = (0, s.kt)(n),
        { firstMessage: h } = (0, l.cf)([o.A], () => o.A.getMessage(n.id)),
        b = new Set((0, s.zt)(n, p)),
        g = null != (t = (0, a.gU)(n)) ? t : i.oyn;
    return (0, r.jsxs)(u.Ay, {
        channelId: n.id,
        className: f.kL,
        children: [
            (0, r.jsx)("div", {
                className: f.P0,
                children: (0, r.jsx)(g, {
                    className: f.Kk,
                    strokeWidth: 1.75,
                }),
            }),
            (0, r.jsx)(u.cr, {
                className: f.wx,
                children: n.name,
            }),
            null == h &&
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: d.intl.string(d.t.mE3KJN),
                }),
            (0, r.jsx)(c.A, {
                appliedTags: b,
                wrap: n.isModeratorReportChannel(),
            }),
        ],
    });
}
