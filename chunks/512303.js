t.d(n, {
    Z: function () {
        return I;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(373793),
    a = t(442837),
    o = t(481060),
    s = t(232567),
    u = t(700582),
    c = t(592180),
    d = t(565138),
    m = t(598077),
    g = t(430824),
    f = t(594174),
    h = t(388032),
    E = t(619858);
function I(e) {
    var n, t, I, v;
    let p = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[r.Y.USER_INSTALL],
        M = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[r.Y.GUILD_INSTALL],
        x = null === (I = e.interactionMetadata) || void 0 === I ? void 0 : I.user.id,
        S = (0, a.e7)([f.default], () => f.default.getUser(p)),
        Z = (0, a.e7)([g.Z], () => g.Z.getGuild(M)),
        j = (0, a.e7)([f.default], () => f.default.getUser(x));
    if (
        (l.useEffect(() => {
            null == S && null != p && (0, s.PR)(p);
        }, [S, p]),
        !(0, c.a)(e))
    )
        return null;
    null == j && (j = new m.Z(null === (v = e.interactionMetadata) || void 0 === v ? void 0 : v.user));
    let T = null;
    return (
        null != Z
            ? (T = (0, i.jsx)(o.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(d.Z, {
                          guild: Z,
                          size: d.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: Z.name,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              }))
            : null != S &&
              (T = (0, i.jsx)(o.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(u.Z, {
                          user: S,
                          size: o.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: S.username,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(o.MenuItem, {
            id: 'view-interaction-info',
            label: h.intl.string(h.t.Rjezb2),
            children: [
                T,
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
