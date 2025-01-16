t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(390547);
var l = t(200651);
t(192379);
var i = t(120356),
    s = t.n(i),
    r = t(392711),
    a = t.n(r),
    o = t(442837),
    u = t(481060),
    c = t(565138),
    d = t(984933),
    m = t(430824),
    g = t(496675),
    h = t(771845),
    x = t(259580),
    S = t(102172),
    v = t(148381),
    Z = t(388032),
    C = t(456963),
    f = t(754246);
function j(e) {
    let { guildId: n, onClick: t } = e,
        i = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        s = (0, o.e7)([d.ZP, m.Z, g.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
                let { channel: n } = e;
                return (0, S.JL)(n, m.Z, g.Z);
            })
        );
    return null != i && s
        ? (0, l.jsxs)(u.Clickable, {
              onClick: () => t(n),
              className: f.guildRow,
              children: [
                  (0, l.jsx)(c.Z, {
                      guild: i,
                      size: c.Z.Sizes.SMALL,
                      className: f.guildIcon
                  }),
                  (0, l.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      className: f.guildName,
                      children: i.toString()
                  }),
                  (0, l.jsx)(x.Z, {
                      direction: x.Z.Directions.RIGHT,
                      className: f.guildArrow
                  })
              ]
          })
        : null;
}
function p(e) {
    let { onSelectGuild: n } = e,
        t = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
    return (0, l.jsx)(v.Z, {
        title: Z.intl.string(Z.t.JsqeEh),
        scrollerClassName: s()(f.guildScroller, C.marginBottom),
        children: a().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) =>
                (0, l.jsx)(
                    j,
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
