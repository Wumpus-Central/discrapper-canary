l.d(t, { Z: () => _ }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(692547),
    o = l(215569),
    s = l(180035),
    r = l(481060),
    c = l(749210),
    C = l(852860),
    d = l(367907),
    u = l(314897),
    m = l(626135),
    h = l(910693),
    x = l(241559),
    g = l(256003),
    H = l(981631),
    b = l(388032),
    p = l(553575);
function _(e) {
    let { guildId: t } = e,
        _ = (0, x.xC)(t),
        { selectedUserIds: j, clearSelection: f } = (0, g.Z)(t),
        v = j.size > 0,
        N = async (e, t, l, n) => {
            try {
                let a = await c.Z.banMultipleUsers(e, t, l, n);
                (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.AsCe5O), r.ToastType.SUCCESS)),
                    m.default.track(H.rMx.BULK_MODERATION_ACTION_COMPLETED, {
                        ...(0, d.hH)(e),
                        action_type: h.jQ.BAN,
                        target_user_ids: [...j],
                        mod_user_id: u.default.getId(),
                        successful_user_ids: a.body.banned_users,
                        location
                    });
            } catch (e) {
                (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.mICAWV), r.ToastType.FAILURE));
            }
            f();
        },
        Z = a.useCallback(() => {
            f();
        }, [f]),
        L = (0, n.jsxs)('span', {
            className: p.messageContainer,
            children: [
                (0, n.jsx)(r.tBG, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: (0, s.d)(i.Z.unsafe_rawColors.PRIMARY_500).hex()
                }),
                (0, n.jsx)(r.Text, {
                    variant: 'heading-md/bold',
                    color: 'text-normal',
                    children: b.intl.format(b.t.TstoSU, { count: j.size })
                }),
                (0, n.jsx)(r.zxk, {
                    color: r.zxk.Colors.LINK,
                    look: r.zxk.Looks.LINK,
                    onClick: Z,
                    className: p.clearButton,
                    children: b.intl.string(b.t.yW6ZdH)
                })
            ]
        }),
        R = (0, n.jsxs)('span', {
            className: p.buttonContainer,
            children: [
                (0, n.jsx)(r.pgN, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                }),
                (0, n.jsx)(r.Text, {
                    variant: 'text-sm/semibold',
                    children: b.intl.string(b.t['2a50fH'])
                })
            ]
        });
    return _
        ? (0, n.jsx)(o.W, {
              component: 'div',
              className: p.saveNoticeContainer,
              children:
                  v &&
                  (0, n.jsx)(r.oXn, {
                      children: (0, n.jsx)(C.Z, {
                          onSave: () => {
                              m.default.track(H.rMx.BULK_MODERATION_ACTION_STARTED, {
                                  ...(0, d.hH)(t),
                                  action_type: h.jQ.BAN,
                                  target_user_ids: [...j],
                                  mod_user_id: u.default.getId(),
                                  location
                              }),
                                  (0, r.ZDy)(async () => {
                                      let { default: e } = await l.e('43350').then(l.bind(l, 98746));
                                      return (l) =>
                                          (0, n.jsx)(e, {
                                              ...l,
                                              guildId: t,
                                              canBulkBan: _,
                                              userIds: j,
                                              onBanMultiple: N
                                          });
                                  });
                          },
                          onSaveText: R,
                          onSaveButtonColor: r.Ttl.RED,
                          message: L
                      })
                  })
          })
        : null;
}
