n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(692547),
    a = n(215569),
    i = n(180035),
    s = n(481060),
    c = n(749210),
    u = n(852860),
    d = n(367907),
    C = n(314897),
    m = n(626135),
    b = n(910693),
    p = n(241559),
    f = n(256003),
    h = n(981631),
    j = n(388032),
    g = n(571031);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { guildId: t } = e,
        v = (0, p.xC)(t),
        { selectedUserIds: O, clearSelection: N } = (0, f.Z)(t),
        _ = O.size > 0,
        H = async (e, t, n, r) => {
            try {
                let l = await c.Z.banMultipleUsers(e, t, n, r);
                (0, s.showToast)((0, s.createToast)(j.NW.string(j.t.AsCe5O), s.ToastType.SUCCESS)),
                    m.default.track(
                        h.rMx.BULK_MODERATION_ACTION_COMPLETED,
                        y(x({}, (0, d.hH)(e)), {
                            action_type: b.jQ.BAN,
                            target_user_ids: [...O],
                            mod_user_id: C.default.getId(),
                            successful_user_ids: l.body.banned_users,
                            location
                        })
                    );
            } catch (e) {
                (0, s.showToast)((0, s.createToast)(j.NW.string(j.t.mICAWV), s.ToastType.FAILURE));
            }
            N();
        },
        w = l.useCallback(() => {
            N();
        }, [N]),
        S = (0, r.jsxs)('span', {
            className: g.messageContainer,
            children: [
                (0, r.jsx)(s.tBG, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: (0, i.d)(o.Z.unsafe_rawColors.PRIMARY_500).hex()
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'heading-md/bold',
                    color: 'text-normal',
                    children: j.NW.format(j.t.TstoSU, { count: O.size })
                }),
                (0, r.jsx)(s.zxk, {
                    color: s.zxk.Colors.LINK,
                    look: s.zxk.Looks.LINK,
                    onClick: w,
                    className: g.clearButton,
                    children: j.NW.string(j.t.yW6ZdH)
                })
            ]
        }),
        D = (0, r.jsxs)('span', {
            className: g.buttonContainer,
            children: [
                (0, r.jsx)(s.pgN, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    children: j.NW.string(j.t['2a50fH'])
                })
            ]
        });
    return v
        ? (0, r.jsx)(a.W, {
              component: 'div',
              className: g.saveNoticeContainer,
              children:
                  _ &&
                  (0, r.jsx)(s.oXn, {
                      children: (0, r.jsx)(u.Z, {
                          onSave: () => {
                              m.default.track(
                                  h.rMx.BULK_MODERATION_ACTION_STARTED,
                                  y(x({}, (0, d.hH)(t)), {
                                      action_type: b.jQ.BAN,
                                      target_user_ids: [...O],
                                      mod_user_id: C.default.getId(),
                                      location
                                  })
                              ),
                                  (0, s.ZDy)(async () => {
                                      let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(x({}, n), {
                                                  guildId: t,
                                                  canBulkBan: v,
                                                  userIds: O,
                                                  onBanMultiple: H
                                              })
                                          );
                                  });
                          },
                          onSaveText: D,
                          onSaveButtonColor: s.Ttl.RED,
                          message: S
                      })
                  })
          })
        : null;
}
