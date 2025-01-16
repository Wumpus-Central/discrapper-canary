n.d(t, {
    Z: function () {
        return H;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    i = n(692547),
    a = n(215569),
    r = n(180035),
    s = n(481060),
    c = n(749210),
    C = n(852860),
    d = n(367907),
    u = n(314897),
    m = n(626135),
    h = n(910693),
    x = n(241559),
    b = n(256003),
    f = n(981631),
    g = n(388032),
    p = n(553575);
function H(e) {
    let { guildId: t } = e,
        H = (0, x.xC)(t),
        { selectedUserIds: j, clearSelection: v } = (0, b.Z)(t),
        N = j.size > 0,
        L = async (e, t, n, l) => {
            try {
                let o = await c.Z.banMultipleUsers(e, t, n, l);
                (0, s.showToast)((0, s.createToast)(g.intl.string(g.t.AsCe5O), s.ToastType.SUCCESS)),
                    m.default.track(f.rMx.BULK_MODERATION_ACTION_COMPLETED, {
                        ...(0, d.hH)(e),
                        action_type: h.jQ.BAN,
                        target_user_ids: [...j],
                        mod_user_id: u.default.getId(),
                        successful_user_ids: o.body.banned_users,
                        location
                    });
            } catch (e) {
                (0, s.showToast)((0, s.createToast)(g.intl.string(g.t.mICAWV), s.ToastType.FAILURE));
            }
            v();
        },
        I = o.useCallback(() => {
            v();
        }, [v]),
        _ = (0, l.jsxs)('span', {
            className: p.messageContainer,
            children: [
                (0, l.jsx)(s.UserIcon, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: (0, r.d)(i.Z.unsafe_rawColors.PRIMARY_500).hex()
                }),
                (0, l.jsx)(s.Text, {
                    variant: 'heading-md/bold',
                    color: 'text-normal',
                    children: g.intl.format(g.t.TstoSU, { count: j.size })
                }),
                (0, l.jsx)(s.Button, {
                    color: s.Button.Colors.LINK,
                    look: s.Button.Looks.LINK,
                    onClick: I,
                    className: p.clearButton,
                    children: g.intl.string(g.t.yW6ZdH)
                })
            ]
        }),
        M = (0, l.jsxs)('span', {
            className: p.buttonContainer,
            children: [
                (0, l.jsx)(s.HammerIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                }),
                (0, l.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    children: g.intl.string(g.t['2a50fH'])
                })
            ]
        });
    return H
        ? (0, l.jsx)(a.W, {
              component: 'div',
              className: p.saveNoticeContainer,
              children:
                  N &&
                  (0, l.jsx)(s.SlideIn, {
                      children: (0, l.jsx)(C.Z, {
                          onSave: () => {
                              m.default.track(f.rMx.BULK_MODERATION_ACTION_STARTED, {
                                  ...(0, d.hH)(t),
                                  action_type: h.jQ.BAN,
                                  target_user_ids: [...j],
                                  mod_user_id: u.default.getId(),
                                  location
                              }),
                                  (0, s.openModalLazy)(async () => {
                                      let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              ...n,
                                              guildId: t,
                                              canBulkBan: H,
                                              userIds: j,
                                              onBanMultiple: L
                                          });
                                  });
                          },
                          onSaveText: M,
                          onSaveButtonColor: s.ButtonColors.RED,
                          message: _
                      })
                  })
          })
        : null;
}
