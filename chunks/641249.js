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
    f = n(331146),
    m = n(798680),
    b = n(388032);
function p(e) {
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
function h(e, t) {
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
        v = (0, u.Z)(t, e),
        { setCurrentTab: O } = (0, m.dw)(),
        C = () => O(m.ue.EMOJIS),
        y = (0, i.e7)([a.Z], () => a.Z.getGuild(t)),
        N = null != y ? (0, d.Z)(y) : void 0;
    function E(e) {
        null == x ? j(new Set(e)) : j(new Set([...x, ...e]));
    }
    function I(e) {
        let t = new Set(x);
        t.delete(e), j(t);
    }
    let S = (0, s.mY)();
    return (0, r.jsxs)(l.gNt, {
        label: b.intl.string(b.t["D0qeO+"]),
        description: b.intl.format(b.t.zuwely, { premiumEmojiMaximum: N }),
        helperText: b.intl.format(b.t.sEkgBk, { handleTransitionToManageEmoji: C }),
        disabled: S,
        children: [
            (0, r.jsx)(f.E, {
                tierEmojiIds: x,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == v ? void 0 : v.id)).length > 0
                        ? I(e.id)
                        : (0, l.ZDy)(async () => {
                              let { default: t } = await n.e("59128").then(n.bind(n, 28564));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      h(p({}, n), {
                                          onConfirmDelete: () => {
                                              I(e.id), n.onClose();
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
                                h(p({}, n), {
                                    guildId: t,
                                    initialTierEmojiIds: x,
                                    onSubmit: E,
                                    transitionToManageEmoji: () => {
                                        C(), n.onClose();
                                    },
                                }),
                            );
                    });
                },
                disabled: S,
                children: b.intl.string(b.t.ouOOVy),
            }),
        ],
    });
}
