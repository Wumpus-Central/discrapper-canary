n.d(t, { A: () => h });
var i = n(627968),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    s = n(397927),
    o = n(402216),
    d = n(450149),
    c = n(877315),
    u = n(607407),
    _ = n(616356),
    m = n(519934);
function h(e) {
    let { stream: t, currentUserId: n, className: r, onClick: h } = e,
        p = (0, a.bG)([_.A], () => _.A.getActiveStreamForApplicationStream(t), [t]),
        { previewUrl: g, isLoading: A } = (0, d.A)(t.guildId, t.channelId, t.ownerId);
    return (0, i.jsxs)(s.DUT, {
        onClick: h,
        className: l()(m.Um, { [m.qf]: null == g && !A }, r),
        children: [
            (0, i.jsx)("div", {
                className: m.rB,
                children: (0, i.jsx)(u.A, { className: m.y6, stream: t, noText: !0 }),
            }),
            (0, i.jsx)(o.Ay, { className: m.Ok, size: o.ed.SMALL }),
            (0, i.jsx)("div", {
                className: m.H_,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "none",
                    className: m.g$,
                    children: (0, c.A)(t, p, n, void 0),
                }),
            }),
        ],
    });
}
