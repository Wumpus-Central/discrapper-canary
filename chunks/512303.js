n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(232567),
    c = n(700582),
    u = n(592180),
    d = n(565138),
    f = n(598077),
    g = n(430824),
    m = n(594174),
    b = n(388032),
    p = n(487250);
function h(e) {
    var t, n, h, v;
    let y = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        O = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        N = null === (h = e.interactionMetadata) || void 0 === h ? void 0 : h.user.id,
        E = (0, a.e7)([m.default], () => m.default.getUser(y)),
        j = (0, a.e7)([g.Z], () => g.Z.getGuild(O)),
        P = (0, a.e7)([m.default], () => m.default.getUser(N));
    if (
        (i.useEffect(() => {
            null == E && null != y && (0, s.PR)(y);
        }, [E, y]),
        !(0, u.a)(e))
    )
        return null;
    null == P && (P = new f.Z(null === (v = e.interactionMetadata) || void 0 === v ? void 0 : v.user));
    let S = null;
    return (
        null != j
            ? (S = (0, r.jsx)(o.sNh, {
                  className: p.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(d.Z, {
                          guild: j,
                          size: d.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: j.name,
                  subtext: b.NW.formatToPlainString(b.t.ShLXXF, { application: e.author.username })
              }))
            : null != E &&
              (S = (0, r.jsx)(o.sNh, {
                  className: p.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: E,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: E.username,
                  subtext: b.NW.formatToPlainString(b.t.ShLXXF, { application: e.author.username })
              })),
        (0, r.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: b.NW.string(b.t.Rjezb2),
            children: [
                S,
                null != P
                    ? (0, r.jsx)(o.sNh, {
                          className: p.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: P,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: P.username,
                          subtext: b.NW.string(b.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
