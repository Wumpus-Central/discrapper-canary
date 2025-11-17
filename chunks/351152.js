n.d(t, { Z: () => S }), n(361932), n(187205);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n.n(s),
    a = n(442837),
    c = n(481060),
    d = n(565138),
    u = n(984933),
    f = n(430824),
    p = n(496675),
    h = n(771845),
    m = n(259580),
    _ = n(102172),
    g = n(148381),
    x = n(388032),
    v = n(542257),
    j = n(949678);
function b(e) {
    let { guildId: t, onClick: n } = e,
        i = (0, a.e7)([f.Z], () => f.Z.getGuild(t)),
        l = (0, a.e7)([u.ZP, f.Z, p.Z], () =>
            u.ZP.getChannels(t)[u.Zb].some((e) => {
                let { channel: t } = e;
                return (0, _.JL)(t, f.Z, p.Z);
            }),
        );
    return null != i && l
        ? (0, r.jsxs)(c.P3F, {
              onClick: () => n(t),
              className: j.guildRow,
              children: [
                  (0, r.jsx)(d.Z, {
                      guild: i,
                      size: d.Z.Sizes.SMALL,
                      className: j.guildIcon,
                  }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-md/normal",
                      className: j.guildName,
                      children: i.name,
                  }),
                  (0, r.jsx)(m.Z, {
                      direction: m.Z.Directions.RIGHT,
                      className: j.guildArrow,
                  }),
              ],
          })
        : null;
}
function S(e) {
    let { onSelectGuild: t } = e,
        n = (0, a.e7)([h.ZP], () => h.ZP.getGuildFolders());
    return (0, r.jsx)(g.Z, {
        title: x.intl.string(x.t.JsqeEk),
        scrollerClassName: l()(j.guildScroller, v.marginBottom),
        children: o().flatMap(n, (e) => {
            let { guildIds: n } = e;
            return n.map((e) =>
                (0, r.jsx)(
                    b,
                    {
                        guildId: e,
                        onClick: t,
                    },
                    e,
                ),
            );
        }),
    });
}
