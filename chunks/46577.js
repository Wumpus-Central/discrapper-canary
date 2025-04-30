r.d(e, { default: () => m }), r(388685);
var n = r(200651),
    i = r(192379),
    l = r(442837),
    o = r(481060),
    c = r(239091),
    a = r(410575),
    s = r(881052),
    u = r(299206),
    d = r(430824),
    b = r(236413),
    p = r(727072),
    f = r(36459),
    g = r(65912),
    y = r(572456),
    j = r(273504),
    O = r(981631),
    h = r(388032);
function m(t) {
    let { rule: e, analyticsContext: r, onSelect: m } = t,
        w = (0, b.Vb)(e),
        x = (function (t) {
            let { editingRule: e, setEditingRule: r } = (0, g.V)();
            return (0, n.jsx)(o.sNh, {
                id: 'edit-automod-rule',
                label: h.intl.string(h.t.uQq6Pz),
                action: () => {
                    r(t);
                },
                disabled: null != e
            });
        })(e),
        v = (function (t) {
            let { setEditingRule: e } = (0, g.V)(),
                [r, c] = i.useState(!1),
                { removeRule: a } = (0, p.pH)(t.guildId),
                u = (0, l.e7)([d.Z], () => d.Z.getGuild(t.guildId)),
                b = async () => {
                    if (!r && (await (0, y.gK)(t.name))) {
                        c(!0);
                        try {
                            await (0, f.mm)(t.id, t.guildId), e(null), a(t.id, t.guildId);
                        } catch (e) {
                            var n;
                            let t = new s.Hx(e);
                            (0, o.showToast)((0, o.createToast)(null != (n = t.getAnyErrorMessage()) ? n : h.intl.string(h.t.fEptJC), o.ToastType.FAILURE));
                        } finally {
                            c(!1);
                        }
                    }
                },
                m = t.triggerType === j.fX.MENTION_SPAM && (null == u ? void 0 : u.features) != null && u.features.has(O.oNc.COMMUNITY);
            return (0, n.jsx)(o.sNh, {
                id: 'delete-automod-rule',
                label: h.intl.string(h.t['92m/09']),
                action: m
                    ? () => {
                          (0, o.h7j)((t) => {
                              var e, r;
                              return (0, n.jsx)(
                                  o.ConfirmModal,
                                  ((e = (function (t) {
                                      for (var e = 1; e < arguments.length; e++) {
                                          var r = null != arguments[e] ? arguments[e] : {},
                                              n = Object.keys(r);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (n = n.concat(
                                                  Object.getOwnPropertySymbols(r).filter(function (t) {
                                                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                                  })
                                              )),
                                              n.forEach(function (e) {
                                                  var n;
                                                  (n = r[e]),
                                                      e in t
                                                          ? Object.defineProperty(t, e, {
                                                                value: n,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (t[e] = n);
                                              });
                                      }
                                      return t;
                                  })(
                                      {
                                          header: h.intl.string(h.t.MmpqMD),
                                          confirmText: h.intl.string(h.t.BddRzc),
                                          confirmButtonColor: o.zxk.Colors.BRAND
                                      },
                                      t
                                  )),
                                  (r = r =
                                      {
                                          children: (0, n.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: h.intl.string(h.t.XMdBLy)
                                          })
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                      : (function (t, e) {
                                            var r = Object.keys(t);
                                            if (Object.getOwnPropertySymbols) {
                                                var n = Object.getOwnPropertySymbols(t);
                                                r.push.apply(r, n);
                                            }
                                            return r;
                                        })(Object(r)).forEach(function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                        }),
                                  e)
                              );
                          });
                      }
                    : b
            });
        })(e),
        P = (0, u.Z)({
            id: e.id,
            label: h.intl.string(h.t.F64hjo)
        });
    return (0, n.jsx)(a.Z, {
        context: r,
        object: O.qAy.CONTEXT_MENU,
        children: (0, n.jsxs)(o.v2r, {
            navId: 'automod-rule-context',
            onClose: c.Zy,
            'aria-label': h.intl.string(h.t.uT36Sk),
            onSelect: m,
            children: [
                (0, n.jsxs)(o.kSQ, {
                    children: [x, w && v]
                }),
                w && (0, n.jsx)(o.kSQ, { children: P })
            ]
        })
    });
}
