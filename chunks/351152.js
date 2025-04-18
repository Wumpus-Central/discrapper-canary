n.d(t, { Z: () => S }), n(361932), n(187205);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(392711),
    a = n.n(s),
    o = n(442837),
    c = n(481060),
    d = n(565138),
    u = n(984933),
    f = n(430824),
    m = n(496675),
    h = n(771845),
    x = n(259580),
    p = n(102172),
    g = n(148381),
    _ = n(388032),
    j = n(319255),
    v = n(606551);
function b(e) {
    let { guildId: t, onClick: n } = e,
        i = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
        l = (0, o.e7)([u.ZP, f.Z, m.Z], () =>
            u.ZP.getChannels(t)[u.Zb].some((e) => {
                let { channel: t } = e;
                return (0, p.JL)(t, f.Z, m.Z);
            })
        );
    return null != i && l
        ? (0, r.jsxs)(c.P3F, {
              onClick: () => n(t),
              className: v.guildRow,
              children: [
                  (0, r.jsx)(d.Z, {
                      guild: i,
                      size: d.Z.Sizes.SMALL,
                      className: v.guildIcon
                  }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      className: v.guildName,
                      children: i.toString()
                  }),
                  (0, r.jsx)(x.Z, {
                      direction: x.Z.Directions.RIGHT,
                      className: v.guildArrow
                  })
              ]
          })
        : null;
}
function S(e) {
    let { onSelectGuild: t } = e,
        n = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
    return (0, r.jsx)(g.Z, {
        title: _.NW.string(_.t.JsqeEh),
        scrollerClassName: l()(v.guildScroller, j.marginBottom),
        children: a().flatMap(n, (e) => {
            let { guildIds: n } = e;
            return n.map((e) =>
                (0, r.jsx)(
                    b,
                    {
                        guildId: e,
                        onClick: t
                    },
                    e
                )
            );
        })
    });
}
