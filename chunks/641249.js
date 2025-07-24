(n.d(t, { Z: () => j }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    s = n(430824),
    a = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(443106),
    u = n(971792),
    m = n(861345),
    g = n(331146),
    p = n(798680),
    f = n(388032),
    h = n(301849);
function x(e) {
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
function j() {
    let { editStateId: e, guildId: t } = (0, o.N)(),
        [j, v] = c.XZ(e, t),
        _ = (0, u.Z)(t, e),
        { setCurrentTab: O } = (0, p.dw)(),
        y = () => O(p.ue.EMOJIS),
        C = (0, i.e7)([s.Z], () => s.Z.getGuild(t)),
        N = null != C ? (0, d.Z)(C) : void 0;
    function I(e) {
        null == j ? v(new Set(e)) : v(new Set([...j, ...e]));
    }
    function E(e) {
        let t = new Set(j);
        (t.delete(e), v(t));
    }
    let S = (0, a.mY)();
    return (0, r.jsxs)(l.hjN, {
        title: f.intl.string(f.t.D0qeOz),
        disabled: S,
        children: [
            (0, r.jsxs)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: h.formDescription,
                disabled: S,
                children: [f.intl.format(f.t.zuwel5, { premiumEmojiMaximum: N }), (0, r.jsx)('br', {}), f.intl.format(f.t.sEkgBg, { handleTransitionToManageEmoji: y })]
            }),
            (0, r.jsx)(g.E, {
                tierEmojiIds: j,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == _ ? void 0 : _.id)).length > 0
                        ? E(e.id)
                        : (0, l.ZDy)(async () => {
                              let { default: t } = await n.e('59128').then(n.bind(n, 28564));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      b(x({}, n), {
                                          onConfirmDelete: () => {
                                              (E(e.id), n.onClose());
                                          }
                                      })
                                  );
                          });
                }
            }),
            null != j && j.size > 0 ? (0, r.jsx)(l.LZC, { size: 8 }) : null,
            (0, r.jsx)(m.s, {
                onClick: function () {
                    (0, l.ZDy)(async () => {
                        let { EmojiAddModal: e } = await n.e('21112').then(n.bind(n, 301160));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                b(x({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: j,
                                    onSubmit: I,
                                    transitionToManageEmoji: () => {
                                        (y(), n.onClose());
                                    }
                                })
                            );
                    });
                },
                disabled: S,
                children: f.intl.string(f.t.ouOOV1)
            })
        ]
    });
}
