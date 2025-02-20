t.d(n, { Z: () => p }), t(13667), t(390547);
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    s = t(392711),
    a = t.n(s),
    o = t(442837),
    c = t(481060),
    u = t(565138),
    d = t(984933),
    m = t(430824),
    g = t(496675),
    h = t(771845),
    x = t(259580),
    v = t(102172),
    f = t(148381),
    j = t(388032),
    Z = t(382840),
    N = t(902187);
function S(e) {
    let { guildId: n, onClick: t } = e,
        i = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        r = (0, o.e7)([d.ZP, m.Z, g.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
                let { channel: n } = e;
                return (0, v.JL)(n, m.Z, g.Z);
            })
        );
    return null != i && r
        ? (0, l.jsxs)(c.P3F, {
              onClick: () => t(n),
              className: N.guildRow,
              children: [
                  (0, l.jsx)(u.Z, {
                      guild: i,
                      size: u.Z.Sizes.SMALL,
                      className: N.guildIcon
                  }),
                  (0, l.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      className: N.guildName,
                      children: i.toString()
                  }),
                  (0, l.jsx)(x.Z, {
                      direction: x.Z.Directions.RIGHT,
                      className: N.guildArrow
                  })
              ]
          })
        : null;
}
function p(e) {
    let { onSelectGuild: n } = e,
        t = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
    return (0, l.jsx)(f.Z, {
        title: j.NW.string(j.t.JsqeEh),
        scrollerClassName: r()(N.guildScroller, Z.marginBottom),
        children: a().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) =>
                (0, l.jsx)(
                    S,
                    {
                        guildId: e,
                        onClick: n
                    },
                    e
                )
            );
        })
    });
}
