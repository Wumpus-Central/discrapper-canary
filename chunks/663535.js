s.d(t, { A: () => v });
var l = s(627968),
    n = s(64700),
    a = s(311907),
    r = s(939249),
    i = s(534514),
    o = s(442433),
    d = s(964486),
    c = s(104171),
    u = s(47167),
    h = s(734057),
    g = s(256587),
    m = s(287809),
    x = s(802958),
    A = s(190772),
    f = s(37411),
    j = s(579740);
let v = n.memo(function (e) {
    let { threadId: t, goToThread: n, showChannelName: d } = e,
        c = (0, a.bG)([h.A], () => h.A.getChannel(t)),
        g = (0, a.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        m = (0, u.Ay)(c),
        x = (0, u.Ay)(g, !0);
    return (0, l.jsxs)(r.D, {
        className: j.kL,
        onClick: (e) => n(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([s.e("2271"), s.e("99011"), s.e("94989"), s.e("219")]).then(
                    s.bind(s, 44536),
                );
                return (t) => (0, l.jsx)(e, { ...t, channel: c });
            }),
        children: [
            (0, l.jsxs)("div", {
                className: j.kb,
                children: [
                    (0, l.jsxs)(i.D, {
                        className: j.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, l.jsx)("span", { className: j.CB, children: m }),
                            d && null != g ? (0, l.jsx)("span", { className: j.Ot, children: x }) : null,
                        ],
                    }),
                    (0, A.A)(c),
                ],
            }),
            (0, l.jsx)(S, { channel: c }),
        ],
    });
});
function S(e) {
    let { channel: t } = e,
        s = (0, a.bG)([x.A], () => x.A.getMemberIdsPreview(t.id) ?? []),
        n = (0, a.bG)([x.A], () => x.A.getMemberCount(t.id) ?? 0),
        r = (0, a.yK)([m.default], () => s.map((e) => m.default.getUser(e)));
    return ((0, d.Ay)(() => {
        s.filter((e, t) => null == r[t]).forEach((e) => {
            g.A.requestMember(t.guild_id, e);
        });
    }),
    0 === s.length)
        ? null
        : (0, l.jsx)(c.Ay, {
              className: j.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: n,
              max: f.Td,
          });
}
