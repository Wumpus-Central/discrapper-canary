n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(692547),
    o = n(215569),
    a = n(796027),
    s = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(367907),
    C = n(314897),
    m = n(626135),
    b = n(910693),
    p = n(241559),
    f = n(256003),
    h = n(981631),
    g = n(388032),
    j = n(211606);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
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
function y(e) {
    let { guildId: t } = e,
        y = (0, p.xC)(t),
        { selectedUserIds: O, clearSelection: H } = (0, f.Z)(t),
        _ = O.size > 0,
        w = async (e, t, n, r) => {
            try {
                let l = await u.Z.banMultipleUsers(e, t, n, r);
                (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.AsCe5I), c.ToastType.SUCCESS)),
                    m.default.track(
                        h.rMx.BULK_MODERATION_ACTION_COMPLETED,
                        v(x({}, (0, d.hH)(e)), {
                            action_type: b.jQ.BAN,
                            target_user_ids: [...O],
                            mod_user_id: C.default.getId(),
                            successful_user_ids: l.body.banned_users,
                            location,
                        }),
                    );
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.mICAWY), c.ToastType.FAILURE));
            }
            H();
        },
        S = l.useCallback(() => {
            H();
        }, [H]),
        Z = (0, r.jsxs)("span", {
            className: j.messageContainer,
            children: [
                (0, r.jsx)(c.tBG, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, c.dQu)(i.Z.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "heading-md/bold",
                    color: "text-default",
                    children: g.intl.format(g.t.TstoSZ, { count: O.size }),
                }),
                (0, r.jsx)(c.Avr, {
                    text: g.intl.string(g.t.yW6ZdE),
                    onClick: S,
                }),
            ],
        }),
        D = (0, r.jsxs)("span", {
            className: j.buttonContainer,
            children: [
                (0, r.jsx)(c.pgN, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "currentColor",
                    children: g.intl.string(g.t["2a50fF"]),
                }),
            ],
        });
    return y
        ? (0, r.jsx)(o.W, {
              component: "div",
              className: j.saveNoticeContainer,
              children:
                  _ &&
                  (0, r.jsx)(c.oXn, {
                      children: (0, r.jsx)(a.Z, {
                          onSave: () => {
                              m.default.track(
                                  h.rMx.BULK_MODERATION_ACTION_STARTED,
                                  v(x({}, (0, d.hH)(t)), {
                                      action_type: b.jQ.BAN,
                                      target_user_ids: [...O],
                                      mod_user_id: C.default.getId(),
                                      location,
                                  }),
                              ),
                                  (0, c.ZDy)(async () => {
                                      let { default: e } = await n.e("10533").then(n.bind(n, 497880));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              v(x({}, n), {
                                                  guildId: t,
                                                  canBulkBan: y,
                                                  userIds: O,
                                                  onBanMultiple: w,
                                              }),
                                          );
                                  });
                          },
                          onSaveText: D,
                          onSaveButtonColor: s.Tt.RED,
                          message: Z,
                      }),
                  }),
          })
        : null;
}
