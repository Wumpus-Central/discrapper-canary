n.d(t, { A: () => x });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(52133),
    o = n(939249),
    d = n(821609),
    c = n(183623),
    u = n(402216),
    m = n(450149),
    _ = n(279250),
    h = n(877315),
    p = n(607407),
    g = n(616356),
    A = n(734057),
    f = n(692236);
function x(e) {
    let { stream: t, currentUserId: n, className: l, onClick: x } = e,
        { activeStream: C, channel: E } = (0, s.bG)(
            [g.A, A.A],
            () => ({ activeStream: g.A.getActiveStreamForApplicationStream(t), channel: A.A.getChannel(t.channelId) }),
            [t],
            r.A,
        ),
        { previewUrl: I, isLoading: v } = (0, m.A)(t.guildId, t.channelId, t.ownerId),
        [b, T] = (0, _.zP)(E);
    return (0, i.jsxs)(o.D, {
        onClick: b ? x : void 0,
        className: a()(f.Um, { [f.qf]: null == I && !v, [f.vk]: b }, l),
        children: [
            (0, i.jsx)("div", {
                className: f.rB,
                children: (0, i.jsx)(p.A, { className: f.y6, stream: t, noText: !0 }),
            }),
            (0, i.jsx)(u.Ay, { className: f.Ok, size: u.ed.SMALL }),
            b
                ? (0, i.jsxs)("div", {
                      className: f.H_,
                      children: [
                          (0, i.jsx)("div", { className: f.bF }),
                          (0, i.jsx)(d.$, {
                              variant: "overlay-secondary",
                              size: "sm",
                              icon: c.F,
                              text: (0, h.A)(t, C, n, T),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
