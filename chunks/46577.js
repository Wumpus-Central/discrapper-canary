(r.d(e, { default: () => w }), r(388685));
var n = r(255367),
    i = r(73800),
    l = r(442837),
    o = r(755721),
    c = r(481060),
    a = r(239091),
    s = r(410575),
    u = r(881052),
    d = r(299206),
    b = r(430824),
    p = r(236413),
    f = r(727072),
    g = r(36459),
    y = r(65912),
    j = r(572456),
    O = r(273504),
    h = r(981631),
    m = r(388032);
function w(t) {
    let { rule: e, analyticsContext: r, onSelect: w } = t,
        x = (0, p.Vb)(e),
        v = (function (t) {
            let { editingRule: e, setEditingRule: r } = (0, y.V)();
            return (0, n.jsx)(c.sNh, {
                id: 'edit-automod-rule',
                label: m.intl.string(m.t.uQq6Pz),
                action: () => {
                    r(t);
                },
                disabled: null != e
            });
        })(e),
        P = (function (t) {
            let { setEditingRule: e } = (0, y.V)(),
                [r, a] = i.useState(!1),
                { removeRule: s } = (0, f.pH)(t.guildId),
                d = (0, l.e7)([b.Z], () => b.Z.getGuild(t.guildId)),
                p = async () => {
                    if (!r && (await (0, j.gK)(t.name))) {
                        a(!0);
                        try {
                            (await (0, g.mm)(t.id, t.guildId), e(null), s(t.id, t.guildId));
                        } catch (e) {
                            var n;
                            let t = new u.Hx(e);
                            (0, c.showToast)((0, c.createToast)(null != (n = t.getAnyErrorMessage()) ? n : m.intl.string(m.t.fEptJC), c.ToastType.FAILURE));
                        } finally {
                            a(!1);
                        }
                    }
                },
                w = t.triggerType === O.fX.MENTION_SPAM && (null == d ? void 0 : d.features) != null && d.features.has(h.oNc.COMMUNITY);
            return (0, n.jsx)(c.sNh, {
                id: 'delete-automod-rule',
                label: m.intl.string(m.t['92m/09']),
                action: w
                    ? () => {
                          (0, c.h7j)((t) => {
                              var e, r;
                              return (0, n.jsx)(
                                  c.ConfirmModal,
                                  ((e = (function (t) {
                                      for (var e = 1; e < arguments.length; e++) {
                                          var r = null != arguments[e] ? arguments[e] : {},
                                              n = Object.keys(r);
                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                              (n = n.concat(
                                                  Object.getOwnPropertySymbols(r).filter(function (t) {
                                                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                                  })
                                              )),
                                              n.forEach(function (e) {
                                                  var n;
                                                  ((n = r[e]),
                                                      e in t
                                                          ? Object.defineProperty(t, e, {
                                                                value: n,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (t[e] = n));
                                              }));
                                      }
                                      return t;
                                  })(
                                      {
                                          header: m.intl.string(m.t.MmpqMD),
                                          confirmText: m.intl.string(m.t.BddRzc),
                                          confirmButtonColor: o.zx.Colors.BRAND
                                      },
                                      t
                                  )),
                                  (r = r =
                                      {
                                          children: (0, n.jsx)(c.Text, {
                                              variant: 'text-md/normal',
                                              children: m.intl.string(m.t.XMdBLy)
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
                    : p
            });
        })(e),
        T = (0, d.Z)({
            id: e.id,
            label: m.intl.string(m.t.F64hjo)
        });
    return (0, n.jsx)(s.Z, {
        context: r,
        object: h.qAy.CONTEXT_MENU,
        children: (0, n.jsxs)(c.v2r, {
            navId: 'automod-rule-context',
            onClose: a.Zy,
            'aria-label': m.intl.string(m.t.uT36Sk),
            onSelect: w,
            children: [
                (0, n.jsxs)(c.kSQ, {
                    children: [v, x && P]
                }),
                x && (0, n.jsx)(c.kSQ, { children: T })
            ]
        })
    });
}
