(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(692547),
    i = n(215569),
    a = n(180035),
    s = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(852860),
    C = n(367907),
    m = n(314897),
    b = n(626135),
    p = n(910693),
    f = n(241559),
    h = n(256003),
    j = n(981631),
    g = n(388032),
    x = n(571031);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function O(e) {
    let { guildId: t } = e,
        O = (0, f.xC)(t),
        { selectedUserIds: H, clearSelection: _ } = (0, h.Z)(t),
        w = H.size > 0,
        S = async (e, t, n, r) => {
            try {
                let l = await u.Z.banMultipleUsers(e, t, n, r);
                ((0, c.showToast)((0, c.createToast)(g.intl.string(g.t.AsCe5O), c.ToastType.SUCCESS)),
                    b.default.track(
                        j.rMx.BULK_MODERATION_ACTION_COMPLETED,
                        y(v({}, (0, C.hH)(e)), {
                            action_type: p.jQ.BAN,
                            target_user_ids: [...H],
                            mod_user_id: m.default.getId(),
                            successful_user_ids: l.body.banned_users,
                            location
                        })
                    ));
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.mICAWV), c.ToastType.FAILURE));
            }
            _();
        },
        N = l.useCallback(() => {
            _();
        }, [_]),
        Z = (0, r.jsxs)('span', {
            className: x.messageContainer,
            children: [
                (0, r.jsx)(c.tBG, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: (0, a.d)(o.Z.unsafe_rawColors.PRIMARY_500).hex()
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'heading-md/bold',
                    color: 'text-default',
                    children: g.intl.format(g.t.TstoSU, { count: H.size })
                }),
                (0, r.jsx)(c.Avr, {
                    text: g.intl.string(g.t.yW6ZdH),
                    onClick: N
                })
            ]
        }),
        D = (0, r.jsxs)('span', {
            className: x.buttonContainer,
            children: [
                (0, r.jsx)(c.pgN, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'currentColor',
                    children: g.intl.string(g.t['2a50fH'])
                })
            ]
        });
    return O
        ? (0, r.jsx)(i.W, {
              component: 'div',
              className: x.saveNoticeContainer,
              children:
                  w &&
                  (0, r.jsx)(c.oXn, {
                      children: (0, r.jsx)(d.Z, {
                          onSave: () => {
                              (b.default.track(
                                  j.rMx.BULK_MODERATION_ACTION_STARTED,
                                  y(v({}, (0, C.hH)(t)), {
                                      action_type: p.jQ.BAN,
                                      target_user_ids: [...H],
                                      mod_user_id: m.default.getId(),
                                      location
                                  })
                              ),
                                  (0, c.ZDy)(async () => {
                                      let { default: e } = await n.e('4114').then(n.bind(n, 98746));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(v({}, n), {
                                                  guildId: t,
                                                  canBulkBan: O,
                                                  userIds: H,
                                                  onBanMultiple: S
                                              })
                                          );
                                  }));
                          },
                          onSaveText: D,
                          onSaveButtonColor: s.Tt.RED,
                          message: Z
                      })
                  })
          })
        : null;
}
