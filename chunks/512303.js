t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(373793),
    a = t(442837),
    o = t(481060),
    s = t(232567),
    u = t(700582),
    d = t(592180),
    c = t(565138),
    g = t(598077),
    f = t(430824),
    m = t(594174),
    h = t(388032),
    E = t(500054);
function v(e) {
    var n, t, v, I;
    let p = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[r.Y.USER_INSTALL],
        M = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[r.Y.GUILD_INSTALL],
        Z = null === (v = e.interactionMetadata) || void 0 === v ? void 0 : v.user.id,
        x = (0, a.e7)([m.default], () => m.default.getUser(p)),
        S = (0, a.e7)([f.Z], () => f.Z.getGuild(M)),
        j = (0, a.e7)([m.default], () => m.default.getUser(Z));
    if (
        (l.useEffect(() => {
            null == x && null != p && (0, s.PR)(p);
        }, [x, p]),
        !(0, d.a)(e))
    )
        return null;
    null == j && (j = new g.Z(null === (I = e.interactionMetadata) || void 0 === I ? void 0 : I.user));
    let _ = null;
    return (
        null != S
            ? (_ = (0, i.jsx)(o.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(c.Z, {
                          guild: S,
                          size: c.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: S.name,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              }))
            : null != x &&
              (_ = (0, i.jsx)(o.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(u.Z, {
                          user: x,
                          size: o.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: x.username,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(o.MenuItem, {
            id: 'view-interaction-info',
            label: h.intl.string(h.t.Rjezb2),
            children: [
                _,
                null != j
                    ? (0, i.jsx)(o.MenuItem, {
                          className: E.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, i.jsx)(u.Z, {
                                  user: j,
                                  size: o.AvatarSizes.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: j.username,
                          subtext: h.intl.string(h.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
