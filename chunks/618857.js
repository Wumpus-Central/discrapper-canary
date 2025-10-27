n.d(t, {
    $f: () => m,
    C$: () => p,
    Dt: () => f,
    Hw: () => d,
    wW: () => h,
}),
    n(539854);
var i = n(951288),
    r = n(913527),
    l = n.n(r),
    a = n(481060),
    o = n(710845),
    s = n(45251),
    c = n(538084),
    u = n(388032);
function d(e) {
    let t = u.intl.formatToPlainString(u.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS));
}
function p() {
    (0, a.showToast)((0, a.createToast)(u.intl.string(u.t["JF/LWn"]), a.ToastType.SUCCESS));
}
function h(e) {
    (0, a.showToast)((0, a.createToast)(u.intl.formatToPlainString(u.t.sUvyW3, { error: e }), a.ToastType.FAILURE));
}
function f(e) {
    let { channel: t } = e,
        n = l()().add(1, "day").startOf("day").set("hours", 9),
        r = l()().add(1, "day").startOf("day").set("hours", 13),
        o = l()().startOf("isoWeek").add(1, "week").set("hours", 9),
        c = [
            {
                display: u.intl.string(u.t.tjIn9i),
                value: n,
            },
            {
                display: u.intl.string(u.t.EMRZyS),
                value: r,
            },
            {
                display: u.intl.string(u.t["+P5MmK"]),
                value: o,
            },
        ].map((e) =>
            (0, i.jsx)(
                a.sNh,
                {
                    id: e.display,
                    label: e.display,
                    action: () =>
                        (0, s._e)({
                            channelId: t.id,
                            scheduledTimestamp: e.value.toISOString(),
                        }),
                },
                e.display,
            ),
        );
    return (
        c.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.Clw, {}),
                    (0, i.jsx)(
                        a.sNh,
                        {
                            id: "custom-time",
                            label: u.intl.string(u.t.stHooC),
                            action: () => m({ channel: t }),
                        },
                        "custom-time",
                    ),
                ],
            }),
        ),
        c
    );
}
function m(e) {
    let { channel: t, prefilledTime: r } = e;
    (0, a.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 538084));
            return (n) => {
                var a, o;
                return (0, i.jsx)(
                    e,
                    ((a = (function (e) {
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
                    })({}, n)),
                    (o = o =
                        {
                            channel: t,
                            prefilledTime: null != r ? r : l()().startOf("hour").add(1, "hour").toISOString(),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    a),
                );
            };
        },
        { modalKey: c.k },
    );
}
new o.Z("Scheduled Messages");
