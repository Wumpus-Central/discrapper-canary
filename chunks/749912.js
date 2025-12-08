n.d(t, { Z: () => p }), n(467055), n(388685);
var r = n(54381),
    s = n(754700),
    o = n(199849),
    a = n(481060),
    i = n(70956),
    l = n(196817);
function c(e) {
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
function u(e, t) {
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
let d = [
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
    p = function (e) {
        let { onSelect: t, taskDuration: n = 10, taskConfigV2: p } = e;
        return (0, r.jsxs)(a.Kqy, {
            gap: 20,
            children: [
                (0, r.jsx)(o.B6, {
                    label: "Task Type(s)",
                    className: l.taskPresetSelect,
                    placeholder: "Select Task Preset",
                    options: d,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) =>
                        e ===
                        (function (e) {
                            let t = s.X.PLAY_ON_PLAYSTATION in e || s.X.PLAY_ON_XBOX in e,
                                n = s.X.PLAY_ON_DESKTOP in e || s.X.PLAY_ON_DESKTOP_V2 in e,
                                r = s.X.STREAM_ON_DESKTOP in e,
                                o = s.X.WATCH_VIDEO in e,
                                a = s.X.PLAY_ACTIVITY in e;
                            return t && n ? 4 : t ? 3 : n ? 0 : r ? 1 : o ? 2 : a ? 5 : void 0;
                        })(p.tasks),
                    select: (e) => {
                        t(
                            u(c({}, p), {
                                tasks: (function (e, t) {
                                    let n = {};
                                    switch (e) {
                                        case 1:
                                            n[s.X.STREAM_ON_DESKTOP] = {
                                                type: s.X.STREAM_ON_DESKTOP,
                                                target: t,
                                            };
                                            break;
                                        case 0:
                                            n[s.X.PLAY_ON_DESKTOP] = {
                                                type: s.X.PLAY_ON_DESKTOP,
                                                target: t,
                                            };
                                            break;
                                        case 3:
                                            (n[s.X.PLAY_ON_PLAYSTATION] = {
                                                type: s.X.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                                (n[s.X.PLAY_ON_XBOX] = {
                                                    type: s.X.PLAY_ON_XBOX,
                                                    target: t,
                                                    externalIds: [],
                                                });
                                            break;
                                        case 4:
                                            (n[s.X.PLAY_ON_DESKTOP] = {
                                                type: s.X.PLAY_ON_DESKTOP,
                                                target: t,
                                            }),
                                                (n[s.X.PLAY_ON_PLAYSTATION] = {
                                                    type: s.X.PLAY_ON_PLAYSTATION,
                                                    target: t,
                                                    externalIds: [],
                                                }),
                                                (n[s.X.PLAY_ON_XBOX] = {
                                                    type: s.X.PLAY_ON_XBOX,
                                                    target: t,
                                                    externalIds: [],
                                                });
                                            break;
                                        case 2:
                                            n[s.X.WATCH_VIDEO] = {
                                                type: s.X.WATCH_VIDEO,
                                                target: t,
                                                assets: { video: { url: "" } },
                                                messages: { videoTitle: "" },
                                            };
                                            break;
                                        case 5:
                                            n[s.X.PLAY_ACTIVITY] = {
                                                type: s.X.PLAY_ACTIVITY,
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
                (0, r.jsx)(a.oil, {
                    label: "Task Duration",
                    value: String(n / i.Z.Seconds.MINUTE),
                    onChange: function (e) {
                        let n = Number(e);
                        if (isNaN(n)) return;
                        n *= i.Z.Seconds.MINUTE;
                        let r = Object.fromEntries(
                            Object.entries(p.tasks).map((e) => {
                                let [t, r] = e;
                                return [t, u(c({}, r), { target: n })];
                            }),
                        );
                        t(u(c({}, p), { tasks: r }));
                    },
                }),
            ],
        });
    };
