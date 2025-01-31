n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    s = n(674180),
    a = n(267101),
    o = n(430824),
    c = n(584825),
    d = n(198139),
    u = n(388032);
function m(e) {
    let { guildId: t, allPeriods: m } = e,
        h = (0, r.e7)([o.Z], () => o.Z.getGuild(t)),
        g = (0, c.qi)(t, { includeSoftDeleted: !0 }),
        x = (0, a.ue)(t, { publishedOnly: !1 }),
        { allowSelfRemoveMonetization: p } = (0, s.gX)(t),
        _ = m.filter((e) => {
            var t;
            let n = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
            return (null == n ? void 0 : n.status) === d.x_.OPEN || (null == n ? void 0 : n.status) === d.x_.PAYOUT_DEFERRED;
        }),
        C = g.length > 0,
        f = x.length > 0,
        v = _.length > 0;
    return null == h
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(l.R94, {
                      type: l.R94.Types.DESCRIPTION,
                      children: u.intl.format(u.t.fvOn6O, { guildName: h.toString() })
                  }),
                  (0, i.jsx)(l.LZC, { size: 16 }),
                  (0, i.jsx)(l.zxk, {
                      disabled: !p || C || f || v,
                      look: l.zxk.Looks.FILLED,
                      color: l.zxk.Colors.RED,
                      onClick: () => {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await n.e('35282').then(n.bind(n, 157429));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      guild: h
                                  });
                          });
                      },
                      children: u.intl.string(u.t.FrOFSk)
                  })
              ]
          });
}
