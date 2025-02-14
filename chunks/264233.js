n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(317632),
    u = n(174767),
    m = n(240126),
    _ = n(791914),
    h = n(326838),
    p = n(388032),
    g = n(751931);
function f(e) {
    let { setTab: t, badgeState: a, closePopout: f } = e,
        C = (0, s.Wu)([d.Z], () => d.Z.getInvites()),
        E = (0, s.e7)([d.Z], () => d.Z.getInviteStatuses()),
        [v, I] = l.useMemo(
            () =>
                r().partition(C, (e) => {
                    var t;
                    return (null === (t = E[e.invite_id]) || void 0 === t ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl;
                }),
            [C, E]
        );
    return (l.useEffect(() => {
        (0, u.sJ)();
    }),
    0 === C.length)
        ? (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(_.Z, {
                      tab: o.X.GAME_INVITES,
                      setTab: t,
                      badgeState: a,
                      closePopout: f
                  }),
                  (0, i.jsx)('div', {
                      className: g.__invalid_emptyStateContainer,
                      children: (0, i.jsx)(m.Z, {
                          Icon: c.iWm,
                          header: p.intl.string(p.t.PbSPWV),
                          tip: p.intl.string(p.t.BxNbS0)
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(_.Z, {
                      tab: o.X.GAME_INVITES,
                      setTab: t,
                      badgeState: a,
                      closePopout: f,
                      children: (0, i.jsx)(c.M0o, {
                          className: g.__invalid_deleteButton,
                          tooltip: p.intl.string(p.t.Zy3MR0),
                          color: c.YX$.SECONDARY,
                          icon: (0, i.jsx)(c.XHJ, { size: 'xs' }),
                          onClick: function () {
                              (0, c.ZDy)(async () => {
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
                  (0, i.jsx)(c.h21, {
                      children: (0, i.jsxs)('div', {
                          className: g.invitesContainer,
                          children: [
                              v.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(x, { title: p.intl.string(p.t.yflAJS) }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: v.map((e) =>
                                                  (0, i.jsx)(
                                                      h.Z,
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
                              I.length > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(x, { title: p.intl.string(p.t.f0Ia4e) }),
                                          (0, i.jsx)(i.Fragment, {
                                              children: I.map((e) =>
                                                  (0, i.jsx)(
                                                      h.Z,
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
function x(e) {
    let { title: t } = e;
    return (0, i.jsxs)('div', {
        className: g.headerContainer,
        children: [
            (0, i.jsx)(c.Text, {
                className: g.headerTitle,
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                children: t
            }),
            (0, i.jsx)('div', { className: g.headerDivider })
        ]
    });
}
