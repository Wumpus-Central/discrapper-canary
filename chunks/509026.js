n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    s = n(471613),
    a = n(29605),
    o = n(345861),
    c = n(723047),
    d = n(443106),
    u = n(796814),
    m = n(388032);
function g(e) {
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
        f = (0, i.e7)([s.Z], () => s.Z.isUploadingEmoji()),
        h = (0, u.Z)(t.id),
        x = (0, d.Z)(t) - h.length,
        b = (0, c.mY)();
    return (0, r.jsxs)(l.hjN, {
        title: m.intl.string(m.t.LDT0Q0),
        disabled: b,
        children: [
            (0, r.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                disabled: b,
                children: m.intl.format(m.t.H9Jxp6, { maxSlots: (0, d.Z)(t) })
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
                                    p(g({}, n), {
                                        data: e,
                                        file: i,
                                        guildId: t.id
                                    })
                                );
                        });
                },
                buttonCTA: m.intl.string(m.t.AuPtoq),
                submitting: f,
                disabled: b || f || 0 === x
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(a.L3, {
                title: m.intl.string(m.t.lu1ZQ0),
                maxSlots: (0, d.Z)(t),
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
                                p(g({}, n), {
                                    emoji: e,
                                    guildId: t
                                })
                            );
                    });
                },
                editingDisabled: b
            })
        ]
    });
}
