s.d(t, { A: () => j });
var l = s(627968),
    n = s(64700),
    a = s(311907),
    r = s(397927),
    i = s(442433),
    o = s(964486),
    d = s(104171),
    c = s(47167),
    u = s(734057),
    h = s(256587),
    g = s(287809),
    m = s(802958),
    x = s(190772),
    A = s(37411),
    f = s(992092);
let j = n.memo(function (e) {
    let { threadId: t, goToThread: n, showChannelName: o } = e,
        d = (0, a.bG)([u.A], () => u.A.getChannel(t)),
        h = (0, a.bG)([u.A], () => u.A.getChannel(d.parent_id)),
        g = (0, c.Ay)(d),
        m = (0, c.Ay)(h, !0);
    return (0, l.jsxs)(r.DUT, {
        className: f.kL,
        onClick: (e) => n(d, e.shiftKey),
        onContextMenu: (e) =>
            (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([s.e("95834"), s.e("94989"), s.e("9")]).then(s.bind(s, 44536));
                return (t) => (0, l.jsx)(e, { ...t, channel: d });
            }),
        children: [
            (0, l.jsxs)("div", {
                className: f.kb,
                children: [
                    (0, l.jsxs)(r.Heading, {
                        className: f.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, l.jsx)("span", { className: f.CB, children: g }),
                            o && null != h ? (0, l.jsx)("span", { className: f.Ot, children: m }) : null,
                        ],
                    }),
                    (0, x.A)(d),
                ],
            }),
            (0, l.jsx)(v, { channel: d }),
        ],
    });
});
function v(e) {
    let { channel: t } = e,
        s = (0, a.bG)([m.A], () => m.A.getMemberIdsPreview(t.id) ?? []),
        n = (0, a.bG)([m.A], () => m.A.getMemberCount(t.id) ?? 0),
        r = (0, a.yK)([g.default], () => s.map((e) => g.default.getUser(e)));
    return ((0, o.Ay)(() => {
        s.filter((e, t) => null == r[t]).forEach((e) => {
            h.A.requestMember(t.guild_id, e);
        });
    }),
    0 === s.length)
        ? null
        : (0, l.jsx)(d.Ay, {
              className: f.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: n,
              max: A.Td,
          });
}
