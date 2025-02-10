l.d(n, { Z: () => N }), l(390547);
var t = l(200651);
l(192379);
var i = l(120356),
    s = l.n(i),
    a = l(392711),
    r = l.n(a),
    o = l(442837),
    u = l(481060),
    c = l(565138),
    d = l(984933),
    m = l(430824),
    x = l(496675),
    h = l(771845),
    g = l(259580),
    Z = l(102172),
    v = l(148381),
    S = l(388032),
    j = l(760416),
    C = l(548534);
function f(e) {
    let { guildId: n, onClick: l } = e,
        i = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        s = (0, o.e7)([d.ZP, m.Z, x.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
                let { channel: n } = e;
                return (0, Z.JL)(n, m.Z, x.Z);
            })
        );
    return null != i && s
        ? (0, t.jsxs)(u.P3F, {
              onClick: () => l(n),
              className: C.guildRow,
              children: [
                  (0, t.jsx)(c.Z, {
                      guild: i,
                      size: c.Z.Sizes.SMALL,
                      className: C.guildIcon
                  }),
                  (0, t.jsx)(u.Text, {
                      variant: 'text-md/normal',
                      className: C.guildName,
                      children: i.toString()
                  }),
                  (0, t.jsx)(g.Z, {
                      direction: g.Z.Directions.RIGHT,
                      className: C.guildArrow
                  })
              ]
          })
        : null;
}
function N(e) {
    let { onSelectGuild: n } = e,
        l = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
    return (0, t.jsx)(v.Z, {
        title: S.intl.string(S.t.JsqeEh),
        scrollerClassName: s()(C.guildScroller, j.marginBottom),
        children: r().flatMap(l, (e) => {
            let { guildIds: l } = e;
            return l.map((e) =>
                (0, t.jsx)(
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
