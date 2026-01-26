n.d(t, {
    MessageReminderEditMenu: () => u,
    S: () => d,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(442433),
    o = n(164684),
    c = n(181504),
    s = n(985018);

function d(e) {
    let { createReminder: t } = e,
        a = i.useCallback(() => {
            (0, l.mMO)(async () => {
                let { default: e } = await n.e("49208").then(n.bind(n, 148216));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                        (l = l =
                            {
                                createReminder: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            });
        }, [t]);
    return i.useMemo(() => {
        let e = c.b.map((e) => {
            let { getDueAt: n, getLabel: i } = e;
            return (0, r.jsx)(
                l.Drp,
                {
                    id: "create-reminder-".concat(i()),
                    label: i(),
                    action: () => t(n()),
                },
                "create-reminder-".concat(i()),
            );
        });
        return (
            e.push(
                (0, r.jsx)(
                    l.Drp,
                    {
                        id: "create-reminder-custom",
                        label: s.intl.string(s.t.OLA8Zi),
                        action: a,
                    },
                    "custom",
                ),
            ),
            e
        );
    }, [t, a]);
}

function u(e) {
    let { message: t, label: n } = e,
        i = d({
            createReminder: (e) =>
                (0, o.Y)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e,
                }),
        });
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: a.Z_,
        "aria-label": s.intl.string(s.t.mJ3P0N),
        onSelect: () => null,
        children: (0, r.jsx)(l.rXV, {
            label: n,
            children: i,
        }),
    });
}
