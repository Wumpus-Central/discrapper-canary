n.d(t, {
    MessageReminderEditMenu: () => u,
    S: () => d,
}),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    o = n(442433),
    a = n(164684),
    c = n(181504),
    s = n(985018);
function d(e) {
    let { createReminder: t } = e,
        o = l.useCallback(() => {
            (0, i.mMO)(async () => {
                let { default: e } = await n.e("49208").then(n.bind(n, 148216));
                return (n) => {
                    var l, i;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
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
                        })({}, n)),
                        (i = i = { createReminder: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        l),
                    );
                };
            });
        }, [t]);
    return l.useMemo(() => {
        let e = c.b.map((e) => {
            let { getDueAt: n, getLabel: l } = e;
            return (0, r.jsx)(
                i.Drp,
                {
                    id: "create-reminder-".concat(l()),
                    label: l(),
                    action: () => t(n()),
                },
                "create-reminder-".concat(l()),
            );
        });
        return (
            e.push(
                (0, r.jsx)(
                    i.Drp,
                    {
                        id: "create-reminder-custom",
                        label: s.intl.string(s.t.OLA8Zi),
                        action: o,
                    },
                    "custom",
                ),
            ),
            e
        );
    }, [t, o]);
}
function u(e) {
    let { message: t, label: n } = e,
        l = d({
            createReminder: (e) =>
                (0, a.Y)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e,
                }),
        });
    return (0, r.jsx)(i.W1t, {
        navId: "message-reminder-create",
        onClose: o.Z_,
        "aria-label": s.intl.string(s.t.mJ3P0N),
        onSelect: () => null,
        children: (0, r.jsx)(i.rXV, {
            label: n,
            children: l,
        }),
    });
}
