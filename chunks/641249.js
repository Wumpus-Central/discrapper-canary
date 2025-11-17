n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(442837),
    l = n(481060),
    a = n(430824),
    s = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(443106),
    u = n(971792),
    g = n(861345),
    m = n(331146),
    p = n(798680),
    f = n(388032);
function h(e) {
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
        _ = (0, u.Z)(t, e),
        { setCurrentTab: v } = (0, p.dw)(),
        O = () => v(p.ue.EMOJIS),
        C = (0, i.e7)([a.Z], () => a.Z.getGuild(t)),
        y = null != C ? (0, d.Z)(C) : void 0;
    function N(e) {
        null == x ? j(new Set(e)) : j(new Set([...x, ...e]));
    }
    function E(e) {
        let t = new Set(x);
        t.delete(e), j(t);
    }
    let I = (0, s.mY)();
    return (0, r.jsxs)(l.gNt, {
        label: f.intl.string(f.t["D0qeO+"]),
        description: f.intl.format(f.t.zuwely, { premiumEmojiMaximum: y }),
        helperText: f.intl.format(f.t.sEkgBk, { handleTransitionToManageEmoji: O }),
        disabled: I,
        children: [
            (0, r.jsx)(m.E, {
                tierEmojiIds: x,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == _ ? void 0 : _.id)).length > 0
                        ? E(e.id)
                        : (0, l.ZDy)(async () => {
                              let { default: t } = await n.e("59128").then(n.bind(n, 28564));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      b(h({}, n), {
                                          onConfirmDelete: () => {
                                              E(e.id), n.onClose();
                                          },
                                      }),
                                  );
                          });
                },
            }),
            null != x && x.size > 0 ? (0, r.jsx)(l.LZC, { size: 8 }) : null,
            (0, r.jsx)(g.s, {
                onClick: function () {
                    (0, l.ZDy)(async () => {
                        let { EmojiAddModal: e } = await n.e("21112").then(n.bind(n, 301160));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                b(h({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: x,
                                    onSubmit: N,
                                    transitionToManageEmoji: () => {
                                        O(), n.onClose();
                                    },
                                }),
                            );
                    });
                },
                disabled: I,
                children: f.intl.string(f.t.ouOOVy),
            }),
        ],
    });
}
