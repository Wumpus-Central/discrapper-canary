n.d(t, {
    r: () => c,
});
var i = n(627968),
    r = n(64700),
    l = n(442433),
    a = n(95701),
    s = n(652215);

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e) {
    let { channel: t, guild: c, user: d } = e;
    return r.useCallback(
        (e) => {
            if (null != t) {
                if (t.isMultiUserDM())
                    return void (0, l.L3)(e, async () => {
                        let { default: e } = await n.e("77927").then(n.bind(n, 320442));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                u(o({}, n), {
                                    channel: t,
                                    selected: !1,
                                    widgetType: s.uss.TEXT_CHAT_V3,
                                }),
                            );
                    });
                if (t.isDM() && null != d)
                    return void (0, l.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("29534"),
                            n.e("93169"),
                            n.e("25339"),
                        ]).then(n.bind(n, 92016));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                u(o({}, n), {
                                    user: d,
                                    channel: t,
                                    showModalItems: !1,
                                    widgetType: s.uss.TEXT_CHAT_V3,
                                }),
                            );
                    });
                if (t.isModeratorReportChannel())
                    return void (0, l.L3)(e, async () => {
                        let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                u(o({}, n), {
                                    channel: t,
                                    widgetType: s.uss.TEXT_CHAT_V3,
                                }),
                            );
                    });
                if ((0, a.ay)(t.type)) {
                    if (null == c) return;
                    (0, l.L3)(e, async () => {
                        let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                u(o({}, n), {
                                    channel: t,
                                    guild: c,
                                    widgetType: s.uss.TEXT_CHAT_V3,
                                }),
                            );
                    });
                    return;
                }
                null != c &&
                    (0, l.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(n.bind(n, 813407));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                u(o({}, n), {
                                    channel: t,
                                    guild: c,
                                    widgetType: s.uss.TEXT_CHAT_V3,
                                }),
                            );
                    });
            }
        },
        [t, c, d],
    );
}
