s.d(t, { A: () => f });
var l = s(627968),
    n = s(64700),
    a = s(311907),
    r = s(397927),
    i = s(442433),
    o = s(964486),
    d = s(104171),
    c = s(734057),
    u = s(256587),
    h = s(287809),
    g = s(802958),
    m = s(190772),
    x = s(37411),
    A = s(106259);
let f = n.memo(function (e) {
    let { threadId: t, goToThread: n, showChannelName: o } = e,
        d = (0, a.bG)([c.A], () => c.A.getChannel(t)),
        u = (0, a.bG)([c.A], () => c.A.getChannel(d.parent_id));
    return (0, l.jsxs)(r.DUT, {
        className: A.kL,
        onClick: (e) => n(d, e.shiftKey),
        onContextMenu: (e) =>
            (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([s.e("99011"), s.e("78441"), s.e("55266")]).then(
                    s.bind(s, 44536),
                );
                return (t) => (0, l.jsx)(e, { ...t, channel: d });
            }),
        children: [
            (0, l.jsxs)("div", {
                className: A.kb,
                children: [
                    (0, l.jsxs)(r.Heading, {
                        className: A.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, l.jsx)("span", { className: A.CB, children: d.name }),
                            o && null != u ? (0, l.jsx)("span", { className: A.Ot, children: `#${u.name}` }) : null,
                        ],
                    }),
                    (0, m.A)(d),
                ],
            }),
            (0, l.jsx)(j, { channel: d }),
        ],
    });
});
function j(e) {
    let { channel: t } = e,
        s = (0, a.bG)([g.A], () => g.A.getMemberIdsPreview(t.id) ?? []),
        n = (0, a.bG)([g.A], () => g.A.getMemberCount(t.id) ?? 0),
        r = (0, a.yK)([h.default], () => s.map((e) => h.default.getUser(e)));
    return ((0, o.Ay)(() => {
        s.filter((e, t) => null == r[t]).forEach((e) => {
            u.A.requestMember(t.guild_id, e);
        });
    }),
    0 === s.length)
        ? null
        : (0, l.jsx)(d.Ay, {
              className: A.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: n,
              max: x.Td,
          });
}
