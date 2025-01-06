n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(674180),
    s = n(267101),
    o = n(430824),
    c = n(584825),
    d = n(198139),
    u = n(388032);
function m(e) {
    let { guildId: t, allPeriods: m } = e,
        h = (0, r.e7)([o.Z], () => o.Z.getGuild(t)),
        g = (0, c.qi)(t, { includeSoftDeleted: !0 }),
        x = (0, s.ue)(t, { publishedOnly: !1 }),
        { allowSelfRemoveMonetization: p } = (0, a.gX)(t),
        f = m.filter((e) => {
            var t;
            let n = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
            return (null == n ? void 0 : n.status) === d.x_.OPEN || (null == n ? void 0 : n.status) === d.x_.PAYOUT_DEFERRED;
        }),
        C = g.length > 0,
        v = x.length > 0,
        _ = f.length > 0;
    return null == h
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(l.FormText, {
                      type: l.FormText.Types.DESCRIPTION,
                      children: u.intl.format(u.t.fvOn6O, { guildName: h.toString() })
                  }),
                  (0, i.jsx)(l.Spacer, { size: 16 }),
                  (0, i.jsx)(l.Button, {
                      disabled: !p || C || v || _,
                      look: l.Button.Looks.FILLED,
                      color: l.Button.Colors.RED,
                      onClick: () => {
                          var e;
                          return (
                              (e = h),
                              void (0, l.openModalLazy)(async () => {
                                  let { default: t } = await n.e('35282').then(n.bind(n, 157429));
                                  return (n) =>
                                      (0, i.jsx)(t, {
                                          ...n,
                                          guild: e
                                      });
                              })
                          );
                      },
                      children: u.intl.string(u.t.FrOFSk)
                  })
              ]
          });
}
