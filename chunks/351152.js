t.d(n, { Z: () => p }), t(390547);
var l = t(200651);
t(192379);
var i = t(120356),
    s = t.n(i),
    a = t(392711),
    r = t.n(a),
    o = t(442837),
    u = t(481060),
    c = t(565138),
    d = t(984933),
    m = t(430824),
    x = t(496675),
    g = t(771845),
    h = t(259580),
    v = t(102172),
    Z = t(148381),
    S = t(388032),
    j = t(456963),
    C = t(754246);
function f(e) {
    let { guildId: n, onClick: t } = e,
        i = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        s = (0, o.e7)([d.ZP, m.Z, x.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
                let { channel: n } = e;
                return (0, v.JL)(n, m.Z, x.Z);
            })
        );
    return null != i && s
        ? (0, l.jsxs)(u.P3F, {
              onClick: () => t(n),
              className: C.guildRow,
              children: [
                  (0, l.jsx)(c.Z, {
                      guild: i,
                      size: c.Z.Sizes.SMALL,
                      className: C.guildIcon
                  }),
                  (0, l.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      className: C.guildName,
                      children: i.toString()
                  }),
                  (0, l.jsx)(h.Z, {
                      direction: h.Z.Directions.RIGHT,
                      className: C.guildArrow
                  })
              ]
          })
        : null;
}
function p(e) {
    let { onSelectGuild: n } = e,
        t = (0, o.e7)([g.ZP], () => g.ZP.getGuildFolders());
    return (0, l.jsx)(Z.Z, {
        title: S.intl.string(S.t.JsqeEh),
        scrollerClassName: s()(C.guildScroller, j.marginBottom),
        children: r().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) =>
                (0, l.jsx)(
                    f,
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
