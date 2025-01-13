t.d(n, {
    Z: function () {
        return k;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    o = t.n(a),
    l = t(442837),
    c = t(481060),
    d = t(13245),
    u = t(753972),
    s = t(812206),
    p = t(726721),
    m = t(610394),
    v = t(390322),
    f = t(961048),
    h = t(871499),
    x = t(786915),
    Z = t(592125),
    _ = t(271383),
    I = t(594174),
    C = t(51144),
    j = t(145597),
    g = t(214629),
    A = t(317381),
    P = t(884338),
    S = t(473179),
    b = t(981631),
    N = t(388032),
    y = t(124062);
let T = P.u.SIZE_24;
function k(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, l.e7)([s.Z], () => s.Z.getApplication(n)),
        k = (0, l.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
        w = (0, l.e7)([Z.Z], () => Z.Z.getChannel(t)),
        E = (0, l.Wu)(
            [_.ZP],
            () => {
                var e;
                return null == w || null == k ? [] : Array.from(null !== (e = k.userIds) && void 0 !== e ? e : []).map((e) => _.ZP.getMember(w.guild_id, e));
            },
            [k, w]
        ),
        R = r.useMemo(() => {
            let e = new Map();
            return (
                E.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [E]),
        L = r.useCallback(
            (e, n) => {
                var t;
                if (null == e) return null;
                let r = R.get(e.id),
                    a = null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : C.ZP.getName(e);
                return (0, i.jsx)(
                    c.TooltipContainer,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, T),
                                alt: a,
                                className: y.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [R]
        ),
        O = null == k ? void 0 : k.userIds,
        B = (0, l.Wu)(
            [I.default],
            () =>
                Array.from(null != O ? O : [])
                    .map((e) => I.default.getUser(e))
                    .filter((e) => null != e),
            [O]
        ),
        M = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        U = r.useCallback(() => {
            let e = (0, j.QF)();
            d.Z.setInputLocked(!m.Z.isInputLocked(e), e);
        }, []),
        z = (0, g.PR)();
    return null == a || null == k
        ? null
        : (0, i.jsx)(c.ThemeProvider, {
              theme: b.BRd.DARK,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: o()(y.container, e),
                      children: [
                          (0, i.jsxs)('div', {
                              className: o()(y.headerSection, y.headerSectionLeft),
                              children: [
                                  (0, i.jsx)(u.Z, {
                                      application: a,
                                      size: 24,
                                      className: y.appIcon
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: a.name
                                  }),
                                  (0, i.jsx)('div', {
                                      className: y.dotSpacer,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: '.'
                                      })
                                  }),
                                  (0, i.jsx)(P.Z, {
                                      renderIcon: !1,
                                      users: B,
                                      size: T,
                                      max: 6,
                                      className: y.userAvatars,
                                      renderUser: (e) => L(e, w)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: o()(y.headerSection, y.headerSectionRight),
                              children: (0, i.jsxs)('div', {
                                  className: y.actionButtonsContainer,
                                  children: [
                                      (0, i.jsx)(x.Z, {
                                          appContext: b.IlC.POPOUT,
                                          applicationId: n,
                                          channel: w,
                                          shouldPrioritizeGroupPlusIcon: !0,
                                          embeddedActivity: k
                                      }),
                                      z
                                          ? (0, i.jsx)(h.Z, {
                                                onClick: U,
                                                iconComponent: c.WindowTopOutlineIcon,
                                                label: N.intl.string(N.t.mseZsL)
                                            })
                                          : null,
                                      M &&
                                          (0, i.jsx)(
                                              c.Popout,
                                              {
                                                  position: 'bottom',
                                                  renderPopout: (e) => {
                                                      let { closePopout: n } = e;
                                                      return (0, i.jsx)(v.Z, {
                                                          children: (0, i.jsx)(S.Z, {
                                                              application: a,
                                                              channelId: t,
                                                              onClose: n
                                                          })
                                                      });
                                                  },
                                                  children: (e, n) => {
                                                      let { isShown: t } = n;
                                                      return (0, r.createElement)(f.Z, {
                                                          ...e,
                                                          key: 'more-options',
                                                          isActive: t
                                                      });
                                                  }
                                              },
                                              'more-options-popout'
                                          )
                                  ]
                              })
                          })
                      ]
                  })
          });
}
