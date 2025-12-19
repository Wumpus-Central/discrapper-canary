n.d(t, { Z: () => m }), n(467055), n(388685);
var a = n(54381),
    r = n(754700),
    i = n(199849),
    l = n(481060),
    s = n(70956),
    o = n(729093);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = [
        {
            value: 1,
            label: "Stream Desktop",
        },
        {
            value: 0,
            label: "Play Desktop",
        },
        {
            value: 3,
            label: "Play Console",
        },
        {
            value: 4,
            label: "Play Desktop & Console",
        },
        {
            value: 2,
            label: "Watch Video",
        },
        {
            value: 5,
            label: "Play Activity",
        },
    ],
    m = function (e) {
        let { onSelect: t, taskDuration: n = 10, taskConfigV2: m } = e;
        return (0, a.jsxs)(l.Kqy, {
            gap: 20,
            children: [
                (0, a.jsx)(i.B6, {
                    label: "Task Type(s)",
                    className: o.taskPresetSelect,
                    placeholder: "Select Task Preset",
                    options: u,
                    renderOptionValue: (e) => e.map((e) => (0, a.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, a.jsx)("div", { children: e.label }),
                    isSelected: (e) =>
                        e ===
                        (function (e) {
                            let t = r.X.PLAY_ON_PLAYSTATION in e || r.X.PLAY_ON_XBOX in e,
                                n = r.X.PLAY_ON_DESKTOP in e || r.X.PLAY_ON_DESKTOP_V2 in e,
                                a = r.X.STREAM_ON_DESKTOP in e,
                                i = r.X.WATCH_VIDEO in e,
                                l = r.X.PLAY_ACTIVITY in e;
                            return t && n ? 4 : t ? 3 : n ? 0 : a ? 1 : i ? 2 : l ? 5 : void 0;
                        })(m.tasks),
                    select: (e) => {
                        t(
                            d(c({}, m), {
                                tasks: (function (e, t) {
                                    let n = {};
                                    switch (e) {
                                        case 1:
                                            n[r.X.STREAM_ON_DESKTOP] = {
                                                type: r.X.STREAM_ON_DESKTOP,
                                                target: t,
                                            };
                                            break;
                                        case 0:
                                            n[r.X.PLAY_ON_DESKTOP] = {
                                                type: r.X.PLAY_ON_DESKTOP,
                                                target: t,
                                            };
                                            break;
                                        case 3:
                                            (n[r.X.PLAY_ON_PLAYSTATION] = {
                                                type: r.X.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                                (n[r.X.PLAY_ON_XBOX] = {
                                                    type: r.X.PLAY_ON_XBOX,
                                                    target: t,
                                                    externalIds: [],
                                                });
                                            break;
                                        case 4:
                                            (n[r.X.PLAY_ON_DESKTOP] = {
                                                type: r.X.PLAY_ON_DESKTOP,
                                                target: t,
                                            }),
                                                (n[r.X.PLAY_ON_PLAYSTATION] = {
                                                    type: r.X.PLAY_ON_PLAYSTATION,
                                                    target: t,
                                                    externalIds: [],
                                                }),
                                                (n[r.X.PLAY_ON_XBOX] = {
                                                    type: r.X.PLAY_ON_XBOX,
                                                    target: t,
                                                    externalIds: [],
                                                });
                                            break;
                                        case 2:
                                            n[r.X.WATCH_VIDEO] = {
                                                type: r.X.WATCH_VIDEO,
                                                target: t,
                                                assets: { video: { url: "" } },
                                                messages: { videoTitle: "" },
                                            };
                                            break;
                                        case 5:
                                            n[r.X.PLAY_ACTIVITY] = {
                                                type: r.X.PLAY_ACTIVITY,
                                                target: t,
                                            };
                                    }
                                    return n;
                                })(e, n),
                            }),
                        );
                    },
                    serialize: String,
                }),
                (0, a.jsx)(l.oil, {
                    label: "Task Duration",
                    value: String(n / s.Z.Seconds.MINUTE),
                    onChange: function (e) {
                        let n = Number(e);
                        if (isNaN(n)) return;
                        n *= s.Z.Seconds.MINUTE;
                        let a = Object.fromEntries(
                            Object.entries(m.tasks).map((e) => {
                                let [t, a] = e;
                                return [t, d(c({}, a), { target: n })];
                            }),
                        );
                        t(d(c({}, m), { tasks: a }));
                    },
                }),
            ],
        });
    };
