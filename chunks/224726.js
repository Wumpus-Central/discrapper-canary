n.d(t, { Z: () => E }), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(224706),
    o = n(100527),
    c = n(906732),
    u = n(314852),
    d = n(65361),
    m = n(910200),
    g = n(496675),
    p = n(434404),
    h = n(999382),
    f = n(12078),
    x = n(934638),
    b = n(566036),
    j = n(979664),
    _ = n(343397),
    v = n(509798),
    O = n(75733),
    C = n(474024),
    y = n(981631),
    N = n(388032),
    I = n(83951);
let E = function () {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.GUILD_SETTINGS_PROFILE_PAGE),
        t = (0, l.e7)([h.Z], () => h.Z.getGuild(), []),
        n = null == t ? void 0 : t.id,
        { fetchGuildProfile: E, fetchStatus: S } = (0, d.u)(null == t ? void 0 : t.id),
        T = (0, l.e7)([h.Z], () => h.Z.getGuildProfile(), []),
        P = (0, l.e7)([g.Z], () => g.Z.can(y.Plq.MANAGE_GUILD, t)),
        w = i.useCallback(
            (e) => {
                null != n && (p.Z.updateGuild({ icon: e }), p.Z.updateGuildProfile(n, { icon: e }));
            },
            [n]
        ),
        R = i.useCallback(
            (e) => {
                null != n && p.Z.updateGuildProfile(n, { customBanner: e });
            },
            [n]
        );
    i.useEffect(() => {
        null != n && E();
    }, [n, E]);
    let Z = i.useCallback(() => {
        E(!0);
    }, [E]);
    return (i.useEffect(() => {
        a.Z.getDetectableGames();
    }, []),
    S === u.a.FETCHED && null == T)
        ? (0, r.jsx)(v.g, { forceFetchGuildProfile: Z })
        : S === u.a.NOT_FETCHED || S === u.a.FETCHING
          ? (0, r.jsx)('main', {
                className: I.spinner,
                children: (0, r.jsx)(s.$jN, {})
            })
          : null == t || null == T
            ? null
            : (0, r.jsx)(c.Gt, {
                  value: e,
                  children: (0, r.jsxs)('main', {
                      className: I.content,
                      children: [
                          (0, r.jsxs)('div', {
                              className: I.leftColumn,
                              children: [
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(s.X6q, {
                                              variant: 'heading-lg/semibold',
                                              color: 'header-primary',
                                              children: N.intl.string(N.t.txdaxc)
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              className: I.description,
                                              children: N.intl.string(N.t['5PGZWV'])
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(_.Z, {
                                      profile: T,
                                      canManageGuild: P
                                  }),
                                  (0, r.jsx)('div', { className: I.divider }),
                                  (0, r.jsx)(j.Z, {
                                      profile: T,
                                      canManageGuild: P,
                                      onIconChange: w
                                  }),
                                  (0, r.jsx)('div', { className: I.divider }),
                                  (0, r.jsx)(f.Z, {
                                      profile: T,
                                      onCustomBannerChange: R,
                                      canManageGuild: P
                                  }),
                                  (0, r.jsx)('div', { className: I.divider }),
                                  (0, r.jsx)(O.Z, {
                                      profile: T,
                                      canManageGuild: P
                                  }),
                                  (0, r.jsx)('div', { className: I.divider }),
                                  (0, r.jsx)(x.Z, {
                                      profile: T,
                                      canManageGuild: P
                                  }),
                                  (0, r.jsx)('div', { className: I.divider }),
                                  (0, r.jsx)(b.Z, {
                                      profile: T,
                                      canManageGuild: P
                                  }),
                                  (0, r.jsx)('div', { className: I.divider }),
                                  (0, r.jsx)(C.Z, {
                                      profile: T,
                                      canManageGuild: P
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: I.rightColumn,
                              children: (0, r.jsx)(s.Ttm, {
                                  className: I.profilePreviewContainer,
                                  children: (0, r.jsx)(m.ZP, {
                                      className: I.profilePreview,
                                      profile: T,
                                      disableCTA: !0,
                                      onIconChange: P ? w : void 0
                                  })
                              })
                          })
                      ]
                  })
              });
};
