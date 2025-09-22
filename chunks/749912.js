s.d(t, { Z: () => d }), s(467055), s(388685);
var n = s(951288);
s(647438);
var r = s(754700),
    a = s(481060),
    i = s(70956),
    l = s(196817);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = s[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
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
    d = function (e) {
        let { onSelect: t, taskDuration: s = 10, taskConfigV2: d } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(a.xJW, {
                    children: [
                        (0, n.jsx)(a.vwX, { children: "Task Type(s)" }),
                        (0, n.jsx)(a.R94, {
                            children: (0, n.jsx)(a.PhF, {
                                className: l.taskPresetSelect,
                                placeholder: "Select Task Preset",
                                options: u,
                                renderOptionValue: (e) =>
                                    e.map((e) => (0, n.jsx)("div", { children: e.label }, e.value)),
                                renderOptionLabel: (e) => (0, n.jsx)("div", { children: e.label }),
                                isSelected: (e) =>
                                    e ===
                                    (function (e) {
                                        let t = r.X.PLAY_ON_PLAYSTATION in e || r.X.PLAY_ON_XBOX in e,
                                            s = r.X.PLAY_ON_DESKTOP in e || r.X.PLAY_ON_DESKTOP_V2 in e,
                                            n = r.X.STREAM_ON_DESKTOP in e,
                                            a = r.X.WATCH_VIDEO in e,
                                            i = r.X.PLAY_ACTIVITY in e;
                                        return t && s ? 4 : t ? 3 : s ? 0 : n ? 1 : a ? 2 : i ? 5 : void 0;
                                    })(d.tasks),
                                select: (e) => {
                                    t(
                                        c(o({}, d), {
                                            tasks: (function (e, t) {
                                                let s = {};
                                                switch (e) {
                                                    case 1:
                                                        s[r.X.STREAM_ON_DESKTOP] = {
                                                            type: r.X.STREAM_ON_DESKTOP,
                                                            target: t,
                                                        };
                                                        break;
                                                    case 0:
                                                        s[r.X.PLAY_ON_DESKTOP] = {
                                                            type: r.X.PLAY_ON_DESKTOP,
                                                            target: t,
                                                        };
                                                        break;
                                                    case 3:
                                                        (s[r.X.PLAY_ON_PLAYSTATION] = {
                                                            type: r.X.PLAY_ON_PLAYSTATION,
                                                            target: t,
                                                            externalIds: [],
                                                        }),
                                                            (s[r.X.PLAY_ON_XBOX] = {
                                                                type: r.X.PLAY_ON_XBOX,
                                                                target: t,
                                                                externalIds: [],
                                                            });
                                                        break;
                                                    case 4:
                                                        (s[r.X.PLAY_ON_DESKTOP] = {
                                                            type: r.X.PLAY_ON_DESKTOP,
                                                            target: t,
                                                        }),
                                                            (s[r.X.PLAY_ON_PLAYSTATION] = {
                                                                type: r.X.PLAY_ON_PLAYSTATION,
                                                                target: t,
                                                                externalIds: [],
                                                            }),
                                                            (s[r.X.PLAY_ON_XBOX] = {
                                                                type: r.X.PLAY_ON_XBOX,
                                                                target: t,
                                                                externalIds: [],
                                                            });
                                                        break;
                                                    case 2:
                                                        s[r.X.WATCH_VIDEO] = {
                                                            type: r.X.WATCH_VIDEO,
                                                            target: t,
                                                            assets: { video: { url: "" } },
                                                            messages: { videoTitle: "" },
                                                        };
                                                        break;
                                                    case 5:
                                                        s[r.X.PLAY_ACTIVITY] = {
                                                            type: r.X.PLAY_ACTIVITY,
                                                            target: t,
                                                        };
                                                }
                                                return s;
                                            })(e, s),
                                        }),
                                    );
                                },
                                serialize: String,
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)(a.xJW, {
                    children: [
                        (0, n.jsx)(a.vwX, { children: "Task Duration" }),
                        (0, n.jsx)(a.R94, {
                            children: (0, n.jsx)(a.oil, {
                                value: String(s / i.Z.Seconds.MINUTE),
                                onChange: function (e) {
                                    let s = Number(e);
                                    if (isNaN(s)) return;
                                    s *= i.Z.Seconds.MINUTE;
                                    let n = Object.fromEntries(
                                        Object.entries(d.tasks).map((e) => {
                                            let [t, n] = e;
                                            return [t, c(o({}, n), { target: s })];
                                        }),
                                    );
                                    t(c(o({}, d), { tasks: n }));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
