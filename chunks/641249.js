n.d(t, { Z: () => x }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(430824),
    l = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(971792),
    u = n(155758),
    m = n(331146),
    p = n(798680),
    g = n(388032),
    h = n(255180);
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
function b(e, t) {
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
function x() {
    let { editStateId: e, guildId: t } = (0, o.N)(),
        [x, j] = c.XZ(e, t),
        N = (0, d.Z)(t, e),
        { setCurrentTab: v } = (0, p.dw)(),
        _ = () => v(p.ue.EMOJIS),
        O = (0, i.e7)([a.Z], () => a.Z.getGuild(t)),
        y = null == O ? void 0 : O.getMaxRoleSubscriptionEmojiSlots();
    function C(e) {
        null == x ? j(new Set(e)) : j(new Set([...x, ...e]));
    }
    function I(e) {
        let t = new Set(x);
        t.delete(e), j(t);
    }
    let E = (0, l.mY)();
    return (0, r.jsxs)(s.hjN, {
        title: g.NW.string(g.t.D0qeOz),
        disabled: E,
        children: [
            (0, r.jsxs)(s.R94, {
                type: s.R94.Types.DESCRIPTION,
                className: h.formDescription,
                disabled: E,
                children: [g.NW.format(g.t.zuwel5, { premiumEmojiMaximum: y }), (0, r.jsx)('br', {}), g.NW.format(g.t.sEkgBg, { handleTransitionToManageEmoji: _ })]
            }),
            (0, r.jsx)(m.E, {
                tierEmojiIds: x,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == N ? void 0 : N.id)).length > 0
                        ? I(e.id)
                        : (0, s.ZDy)(async () => {
                              let { default: t } = await n.e('59128').then(n.bind(n, 28564));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      b(f({}, n), {
                                          onConfirmDelete: () => {
                                              I(e.id), n.onClose();
                                          }
                                      })
                                  );
                          });
                }
            }),
            null != x && x.size > 0 ? (0, r.jsx)(s.LZC, { size: 8 }) : null,
            (0, r.jsx)(u.s, {
                onClick: function () {
                    (0, s.ZDy)(async () => {
                        let { EmojiAddModal: e } = await n.e('21112').then(n.bind(n, 301160));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                b(f({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: x,
                                    onSubmit: C,
                                    transitionToManageEmoji: () => {
                                        _(), n.onClose();
                                    }
                                })
                            );
                    });
                },
                disabled: E,
                children: g.NW.string(g.t.ouOOV1)
            })
        ]
    });
}
