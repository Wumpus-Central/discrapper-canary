var e = n(477900),
    l = n(582128),
    r = n(139033),
    a = n(477782),
    d = n(858899),
    u = n(165862),
    s = n(442433),
    c = n(820284),
    o = n(627784),
    g = n(50268),
    h = n(627794),
    x = n(928348),
    f = n(179832),
    p = n(364806),
    b = n(979816),
    j = n(264349),
    m = n(652215),
    w = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { rule: i, analyticsContext: n, onSelect: C } = t,
                y = (0, h.wC)(i),
                I = (function (t) {
                    let { editingRule: i, setEditingRule: n } = (0, p.U)();
                    return (0, e.jsx)(a.Dr, {
                        id: "edit-automod-rule",
                        label: w.intl.string(w.t.uQq6Px),
                        action: function () {
                            n(t);
                        },
                        disabled: null != i,
                    });
                })(i),
                M = (function (t) {
                    let { setEditingRule: i } = (0, p.U)(),
                        [n, u] = l.useState(!1),
                        { removeRule: s } = (0, x.wP)(t.guildId),
                        c = (0, b._x)(t.guildId, t.triggerType);
                    return (0, e.jsx)(a.Dr, {
                        id: "delete-automod-rule",
                        label: w.intl.string(w.t["92m/01"]),
                        action: c
                            ? function () {
                                  (0, r.A)({ title: w.intl.string(w.t.MmpqMC), subtitle: w.intl.string(w.t.XMdBLw) });
                              }
                            : async function () {
                                  if (!n && (await (0, j.ih)(t.name))) {
                                      u(!0);
                                      try {
                                          (await (0, f.nV)(t.id, t.guildId), i(null), s(t.id, t.guildId));
                                      } catch (i) {
                                          let t = new o.LG(i);
                                          (0, d.P0)({
                                              text: t.getAnyErrorMessage() ?? w.intl.string(w.t.fEptJP),
                                              variant: "critical",
                                          });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                    });
                })(i),
                _ = (0, g.A)({ id: i.id, label: w.intl.string(w.t.F64hjn) });
            return (0, e.jsx)(c.A, {
                context: n,
                object: m.ZSU.CONTEXT_MENU,
                children: (0, e.jsxs)(u.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "automod-rule-context",
                    onClose: s.Z_,
                    "aria-label": w.intl.string(w.t.uT36So),
                    onSelect: C,
                    children: [(0, e.jsxs)(a.rX, { children: [I, y && M] }), y && (0, e.jsx)(a.rX, { children: _ })],
                }),
            });
        },
    },
);
