n.d(t, { A: () => A });
var i = n(627968),
    a = n(503698),
    r = n.n(a),
    l = n(311907),
    s = n(52133),
    o = n(397927),
    d = n(402216),
    c = n(450149),
    u = n(279250),
    _ = n(877315),
    m = n(607407),
    h = n(616356),
    p = n(734057),
    g = n(682524);
function A(e) {
    let { stream: t, currentUserId: n, className: a, onClick: A } = e,
        { activeStream: x, channel: f } = (0, l.bG)(
            [h.A, p.A],
            () => ({ activeStream: h.A.getActiveStreamForApplicationStream(t), channel: p.A.getChannel(t.channelId) }),
            [t],
            s.A,
        ),
        { previewUrl: C, isLoading: I } = (0, c.A)(t.guildId, t.channelId, t.ownerId),
        [E, b] = (0, u.zP)(f);
    return (0, i.jsxs)(o.DUT, {
        onClick: E ? A : void 0,
        className: r()(g.Um, { [g.qf]: null == C && !I, [g.vk]: E }, a),
        children: [
            (0, i.jsx)("div", {
                className: g.rB,
                children: (0, i.jsx)(m.A, { className: g.y6, stream: t, noText: !0 }),
            }),
            (0, i.jsx)(d.Ay, { className: g.Ok, size: d.ed.SMALL }),
            E
                ? (0, i.jsxs)("div", {
                      className: g.H_,
                      children: [
                          (0, i.jsx)("div", { className: g.bF }),
                          (0, i.jsx)(o.Button, {
                              variant: "overlay-secondary",
                              size: "sm",
                              icon: o.Fzq,
                              text: (0, _.A)(t, x, n, b),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
