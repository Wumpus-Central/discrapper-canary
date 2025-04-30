n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(471613),
    a = n(29605),
    o = n(345861),
    c = n(723047),
    u = n(796814),
    d = n(388032);
function m(e) {
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
function g(e, t) {
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
function p(e) {
    let { guild: t } = e,
        p = (0, i.e7)([s.Z], () => s.Z.isUploadingEmoji()),
        h = (0, u.Z)(t.id),
        f = t.getMaxRoleSubscriptionEmojiSlots() - h.length,
        x = (0, c.mY)();
    return (0, r.jsxs)(l.hjN, {
        title: d.intl.string(d.t.LDT0Q0),
        disabled: x,
        children: [
            (0, r.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                disabled: x,
                children: d.intl.format(d.t.H9Jxp6, { maxSlots: t.getMaxRoleSubscriptionEmojiSlots() })
            }),
            (0, r.jsx)(l.LZC, { size: 16 }),
            (0, r.jsx)(o.Z, {
                onChange: (e, i) => {
                    null != e &&
                        null != i &&
                        (0, l.ZDy)(async () => {
                            let { CreateEmojiWithRolesModal: l } = await n.e('9007').then(n.bind(n, 604623));
                            return (n) =>
                                (0, r.jsx)(
                                    l,
                                    g(m({}, n), {
                                        data: e,
                                        file: i,
                                        guildId: t.id
                                    })
                                );
                        });
                },
                buttonCTA: d.intl.string(d.t.AuPtoq),
                submitting: p,
                disabled: x || p || 0 === f
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(a.L3, {
                title: d.intl.string(d.t.lu1ZQ0),
                maxSlots: t.getMaxRoleSubscriptionEmojiSlots(),
                emojiCount: h.length
            }),
            (0, r.jsx)(a.FT, {
                guild: t,
                emojis: h,
                onEdit: (e, t) => {
                    (0, l.ZDy)(async () => {
                        let { UpdateEmojiRolesModal: i } = await n.e('9007').then(n.bind(n, 604623));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                g(m({}, n), {
                                    emoji: e,
                                    guildId: t
                                })
                            );
                    });
                },
                editingDisabled: x
            })
        ]
    });
}
