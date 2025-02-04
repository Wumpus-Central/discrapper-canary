n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(373793),
    s = n(442837),
    r = n(481060),
    o = n(232567),
    d = n(700582),
    c = n(592180),
    u = n(565138),
    g = n(598077),
    f = n(430824),
    m = n(594174),
    h = n(388032),
    E = n(500054);
function v(e) {
    var t, n, v, Z;
    let x = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[a.Y.USER_INSTALL],
        N = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[a.Y.GUILD_INSTALL],
        p = null === (v = e.interactionMetadata) || void 0 === v ? void 0 : v.user.id,
        S = (0, s.e7)([m.default], () => m.default.getUser(x)),
        I = (0, s.e7)([f.Z], () => f.Z.getGuild(N)),
        T = (0, s.e7)([m.default], () => m.default.getUser(p));
    if (
        (l.useEffect(() => {
            null == S && null != x && (0, o.PR)(x);
        }, [S, x]),
        !(0, c.a)(e))
    )
        return null;
    null == T && (T = new g.Z(null === (Z = e.interactionMetadata) || void 0 === Z ? void 0 : Z.user));
    let _ = null;
    return (
        null != I
            ? (_ = (0, i.jsx)(r.sNh, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(u.Z, {
                          guild: I,
                          size: u.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: I.name,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              }))
            : null != S &&
              (_ = (0, i.jsx)(r.sNh, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(d.Z, {
                          user: S,
                          size: r.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: S.username,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(r.sNh, {
            id: 'view-interaction-info',
            label: h.intl.string(h.t.Rjezb2),
            children: [
                _,
                null != T
                    ? (0, i.jsx)(r.sNh, {
                          className: E.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, i.jsx)(d.Z, {
                                  user: T,
                                  size: r.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: T.username,
                          subtext: h.intl.string(h.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
