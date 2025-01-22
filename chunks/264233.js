n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(524437),
    c = n(481060),
    u = n(317632),
    d = n(174767),
    m = n(240126),
    h = n(791914),
    f = n(326838),
    p = n(388032),
    _ = n(366475);
function g(e) {
    let { setTab: t, badgeState: l, closePopout: g } = e,
        C = (0, o.Wu)([u.Z], () => u.Z.getInvites()),
        I = (0, o.e7)([u.Z], () => u.Z.getInviteStatuses()),
        [x, N] = r.useMemo(
            () =>
                a().partition(C, (e) => {
                    var t;
                    return (null === (t = I[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl;
                }),
            [C, I]
        );
    return (r.useEffect(() => {
        (0, d.sJ)();
    }),
    0 === C.length)
        ? (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)(h.Z, {
                      tab: s.X.GAME_INVITES,
                      setTab: t,
                      badgeState: l,
                      closePopout: g
                  }),
                  (0, i.jsx)('div', {
                      className: _.__invalid_emptyStateContainer,
                      children: (0, i.jsx)(m.Z, {
                          Icon: c.GameControllerIcon,
                          header: p.intl.string(p.t.PbSPWV),
                          tip: p.intl.string(p.t.BxNbS0)
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: _.container,
              children: [
                  (0, i.jsx)(h.Z, {
                      tab: s.X.GAME_INVITES,
                      setTab: t,
                      badgeState: l,
                      closePopout: g,
                      children: (0, i.jsx)(c.CircleIconButton, {
                          className: _.__invalid_deleteButton,
                          tooltip: p.intl.string(p.t.Zy3MR0),
                          color: c.CircleIconButtonColors.SECONDARY,
                          icon: (0, i.jsx)(c.TrashIcon, { size: 'xs' }),
                          onClick: function () {
                              (0, c.openModalLazy)(async () => {
                                  let { default: e } = await n.e('13111').then(n.bind(n, 93756));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          ...t,
                                          onDelete: async () => {
                                              await t.onClose();
                                          }
                                      });
                              });
                          }
                      })
                  }),
                  (0, i.jsx)(c.AdvancedScrollerThin, {
                      children: (0, i.jsxs)('div', {
                          className: _.invitesContainer,
                          children: [
                              x.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(E, { title: p.intl.string(p.t.yflAJS) }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: x.map((e) =>
                                                  (0, i.jsx)(
                                                      f.Z,
                                                      {
                                                          invite: e,
                                                          expired: !1
                                                      },
                                                      e.invite_id
                                                  )
                                              )
                                          })
                                      ]
                                  }),
                              N.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(E, { title: p.intl.string(p.t.f0Ia4e) }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: N.map((e) =>
                                                  (0, i.jsx)(
                                                      f.Z,
                                                      {
                                                          invite: e,
                                                          expired: !0
                                                      },
                                                      e.invite_id
                                                  )
                                              )
                                          })
                                      ]
                                  })
                          ]
                      })
                  })
              ]
          });
}
function E(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        className: _.headerContainer,
        children: [
            (0, i.jsx)(c.Text, {
                className: _.headerTitle,
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                children: t
            }),
            (0, i.jsx)('div', { className: _.headerDivider })
        ]
    });
}
