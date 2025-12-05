n.d(t, { Z: () => f });
var r = n(54381),
    i = n(442837),
    l = n(481060),
    a = n(471613),
    s = n(29605),
    o = n(345861),
    c = n(723047),
    d = n(443106),
    u = n(796814),
    g = n(388032);
function m(e) {
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
function p(e, t) {
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
function f(e) {
    let { guild: t } = e,
        f = (0, i.e7)([a.Z], () => a.Z.isUploadingEmoji()),
        h = (0, u.Z)(t.id),
        b = (0, d.Z)(t) - h.length,
        x = (0, c.mY)();
    return (0, r.jsxs)(l.gNt, {
        label: g.intl.string(g.t["LDT0Q/"]),
        disabled: x,
        description: g.intl.format(g.t.H9Jxp6, { maxSlots: (0, d.Z)(t) }),
        children: [
            (0, r.jsx)(l.LZC, { size: 16 }),
            (0, r.jsx)(o.Z, {
                onChange: (e, i) => {
                    null != e &&
                        null != i &&
                        (0, l.ZDy)(async () => {
                            let { CreateEmojiWithRolesModal: l } = await n.e("38602").then(n.bind(n, 604623));
                            return (n) =>
                                (0, r.jsx)(
                                    l,
                                    p(m({}, n), {
                                        data: e,
                                        file: i,
                                        guildId: t.id,
                                    }),
                                );
                        });
                },
                disabled: x || f || 0 === b,
                size: "md",
                variant: "primary",
                text: g.intl.string(g.t.AuPtov),
                loading: f,
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(s.L3, {
                title: g.intl.string(g.t.lu1ZQ2),
                maxSlots: (0, d.Z)(t),
                emojiCount: h.length,
                children: (0, r.jsx)(s.FT, {
                    guild: t,
                    emojis: h,
                    onEdit: (e, t) => {
                        (0, l.ZDy)(async () => {
                            let { UpdateEmojiRolesModal: i } = await n.e("38602").then(n.bind(n, 604623));
                            return (n) =>
                                (0, r.jsx)(
                                    i,
                                    p(m({}, n), {
                                        emoji: e,
                                        guildId: t,
                                    }),
                                );
                        });
                    },
                    editingDisabled: x,
                }),
            }),
        ],
    });
}
