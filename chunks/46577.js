r.d(t, { default: () => m }), r(47120);
var n = r(200651),
    o = r(192379),
    i = r(442837),
    l = r(481060),
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
function m(e) {
    let { rule: t, analyticsContext: r, onSelect: m } = e,
        N = (0, b.Vb)(t),
        w = (function (e) {
            let { editingRule: t, setEditingRule: r } = (0, g.V)();
            return (0, n.jsx)(l.sNh, {
                id: 'edit-automod-rule',
                label: h.NW.string(h.t.uQq6Pz),
                action: () => {
                    r(e);
                },
                disabled: null != t
            });
        })(t),
        x = (function (e) {
            let { setEditingRule: t } = (0, g.V)(),
                [r, c] = o.useState(!1),
                { removeRule: a } = (0, p.pH)(e.guildId),
                u = (0, i.e7)([d.Z], () => d.Z.getGuild(e.guildId)),
                b = async () => {
                    if (!r && (await (0, y.gK)(e.name))) {
                        c(!0);
                        try {
                            await (0, f.mm)(e.id, e.guildId), t(null), a(e.id, e.guildId);
                        } catch (t) {
                            var n;
                            let e = new s.Hx(t);
                            (0, l.showToast)((0, l.createToast)(null != (n = e.getAnyErrorMessage()) ? n : h.NW.string(h.t.fEptJC), l.ToastType.FAILURE));
                        } finally {
                            c(!1);
                        }
                    }
                },
                m = e.triggerType === j.fX.MENTION_SPAM && (null == u ? void 0 : u.features) != null && u.features.has(O.oNc.COMMUNITY);
            return (0, n.jsx)(l.sNh, {
                id: 'delete-automod-rule',
                label: h.NW.string(h.t['92m/09']),
                action: m
                    ? () => {
                          (0, l.h7j)((e) => {
                              var t, r;
                              return (0, n.jsx)(
                                  l.ConfirmModal,
                                  ((t = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = null != arguments[t] ? arguments[t] : {},
                                              n = Object.keys(r);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (n = n.concat(
                                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                  })
                                              )),
                                              n.forEach(function (t) {
                                                  var n;
                                                  (n = r[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: n,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = n);
                                              });
                                      }
                                      return e;
                                  })(
                                      {
                                          header: h.NW.string(h.t.MmpqMD),
                                          confirmText: h.NW.string(h.t.BddRzc),
                                          confirmButtonColor: l.zxk.Colors.BRAND
                                      },
                                      e
                                  )),
                                  (r = r =
                                      {
                                          children: (0, n.jsx)(l.Text, {
                                              variant: 'text-md/normal',
                                              children: h.NW.string(h.t.XMdBLy)
                                          })
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                      : (function (e, t) {
                                            var r = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var n = Object.getOwnPropertySymbols(e);
                                                r.push.apply(r, n);
                                            }
                                            return r;
                                        })(Object(r)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                        }),
                                  t)
                              );
                          });
                      }
                    : b
            });
        })(t),
        v = (0, u.Z)({
            id: t.id,
            label: h.NW.string(h.t.F64hjo)
        });
    return (0, n.jsx)(a.Z, {
        context: r,
        object: O.qAy.CONTEXT_MENU,
        children: (0, n.jsxs)(l.v2r, {
            navId: 'automod-rule-context',
            onClose: c.Zy,
            'aria-label': h.NW.string(h.t.uT36Sk),
            onSelect: m,
            children: [
                (0, n.jsxs)(l.kSQ, {
                    children: [w, N && x]
                }),
                N && (0, n.jsx)(l.kSQ, { children: v })
            ]
        })
    });
}
