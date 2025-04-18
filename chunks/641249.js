n.d(t, { Z: () => b }), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    l = n(430824),
    a = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(971792),
    u = n(861345),
    m = n(331146),
    g = n(798680),
    p = n(388032),
    h = n(925859);
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
        N = (0, d.Z)(t, e),
        { setCurrentTab: _ } = (0, g.dw)(),
        v = () => _(g.ue.EMOJIS),
        O = (0, i.e7)([l.Z], () => l.Z.getGuild(t)),
        C = null == O ? void 0 : O.getMaxRoleSubscriptionEmojiSlots();
    function y(e) {
        null == b ? j(new Set(e)) : j(new Set([...b, ...e]));
    }
    function I(e) {
        let t = new Set(b);
        t.delete(e), j(t);
    }
    let E = (0, a.mY)();
    return (0, r.jsxs)(s.hjN, {
        title: p.NW.string(p.t.D0qeOz),
        disabled: E,
        children: [
            (0, r.jsxs)(s.R94, {
                type: s.R94.Types.DESCRIPTION,
                className: h.formDescription,
                disabled: E,
                children: [p.NW.format(p.t.zuwel5, { premiumEmojiMaximum: C }), (0, r.jsx)('br', {}), p.NW.format(p.t.sEkgBg, { handleTransitionToManageEmoji: v })]
            }),
            (0, r.jsx)(m.E, {
                tierEmojiIds: b,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == N ? void 0 : N.id)).length > 0
                        ? I(e.id)
                        : (0, s.ZDy)(async () => {
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
            null != b && b.size > 0 ? (0, r.jsx)(s.LZC, { size: 8 }) : null,
            (0, r.jsx)(u.s, {
                onClick: function () {
                    (0, s.ZDy)(async () => {
                        let { EmojiAddModal: e } = await n.e('21112').then(n.bind(n, 301160));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                x(f({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: b,
                                    onSubmit: y,
                                    transitionToManageEmoji: () => {
                                        v(), n.onClose();
                                    }
                                })
                            );
                    });
                },
                disabled: E,
                children: p.NW.string(p.t.ouOOV1)
            })
        ]
    });
}
