n.d(t, { Z: () => b }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    s = n(430824),
    a = n(723047),
    o = n(727843),
    c = n(290348),
    u = n(971792),
    d = n(861345),
    m = n(331146),
    g = n(798680),
    p = n(388032),
    h = n(301849);
function f(e) {
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
function x(e, t) {
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
function b() {
    let { editStateId: e, guildId: t } = (0, o.N)(),
        [b, j] = c.XZ(e, t),
        _ = (0, u.Z)(t, e),
        { setCurrentTab: v } = (0, g.dw)(),
        O = () => v(g.ue.EMOJIS),
        C = (0, i.e7)([s.Z], () => s.Z.getGuild(t)),
        y = null == C ? void 0 : C.getMaxRoleSubscriptionEmojiSlots();
    function N(e) {
        null == b ? j(new Set(e)) : j(new Set([...b, ...e]));
    }
    function I(e) {
        let t = new Set(b);
        t.delete(e), j(t);
    }
    let E = (0, a.mY)();
    return (0, r.jsxs)(l.hjN, {
        title: p.intl.string(p.t.D0qeOz),
        disabled: E,
        children: [
            (0, r.jsxs)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: h.formDescription,
                disabled: E,
                children: [p.intl.format(p.t.zuwel5, { premiumEmojiMaximum: y }), (0, r.jsx)('br', {}), p.intl.format(p.t.sEkgBg, { handleTransitionToManageEmoji: O })]
            }),
            (0, r.jsx)(m.E, {
                tierEmojiIds: b,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == _ ? void 0 : _.id)).length > 0
                        ? I(e.id)
                        : (0, l.ZDy)(async () => {
                              let { default: t } = await n.e('59128').then(n.bind(n, 28564));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      x(f({}, n), {
                                          onConfirmDelete: () => {
                                              I(e.id), n.onClose();
                                          }
                                      })
                                  );
                          });
                }
            }),
            null != b && b.size > 0 ? (0, r.jsx)(l.LZC, { size: 8 }) : null,
            (0, r.jsx)(d.s, {
                onClick: function () {
                    (0, l.ZDy)(async () => {
                        let { EmojiAddModal: e } = await n.e('21112').then(n.bind(n, 301160));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                x(f({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: b,
                                    onSubmit: N,
                                    transitionToManageEmoji: () => {
                                        O(), n.onClose();
                                    }
                                })
                            );
                    });
                },
                disabled: E,
                children: p.intl.string(p.t.ouOOV1)
            })
        ]
    });
}
