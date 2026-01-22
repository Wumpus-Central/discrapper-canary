n.d(t, { A: () => m });
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(885617),
    a = n(314737),
    c = n(405810),
    o = n(11351),
    d = n(557300),
    u = n(534875),
    f = n(985018);
function g(e) {
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
function m(e) {
    let { guild: t } = e,
        m = (0, i.bG)([s.A], () => s.A.isUploadingEmoji()),
        p = (0, u.A)(t.id),
        x = (0, d.A)(t) - p.length,
        h = (0, o.gN)();
    return (0, r.jsxs)(l.D0$, {
        label: f.intl.string(f.t["LDT0Q/"]),
        disabled: h,
        description: f.intl.format(f.t.H9Jxp6, { maxSlots: (0, d.A)(t) }),
        children: [
            (0, r.jsx)(l.hKd, { size: 16 }),
            (0, r.jsx)(c.A, {
                onChange: (e, i) => {
                    null != e &&
                        null != i &&
                        (0, l.mMO)(async () => {
                            let { CreateEmojiWithRolesModal: l } = await n.e("15224").then(n.bind(n, 429131));
                            return (n) =>
                                (0, r.jsx)(
                                    l,
                                    b(g({}, n), {
                                        data: e,
                                        file: i,
                                        guildId: t.id,
                                    }),
                                );
                        });
                },
                disabled: h || m || 0 === x,
                size: "md",
                variant: "primary",
                text: f.intl.string(f.t.AuPtov),
                loading: m,
            }),
            (0, r.jsx)(l.hKd, { size: 24 }),
            (0, r.jsx)(a.Bt, {
                title: f.intl.string(f.t.lu1ZQ2),
                maxSlots: (0, d.A)(t),
                emojiCount: p.length,
                children: (0, r.jsx)(a.zI, {
                    guild: t,
                    emojis: p,
                    onEdit: (e, t) => {
                        (0, l.mMO)(async () => {
                            let { UpdateEmojiRolesModal: i } = await n.e("15224").then(n.bind(n, 429131));
                            return (n) =>
                                (0, r.jsx)(
                                    i,
                                    b(g({}, n), {
                                        emoji: e,
                                        guildId: t,
                                    }),
                                );
                        });
                    },
                    editingDisabled: h,
                }),
            }),
        ],
    });
}
