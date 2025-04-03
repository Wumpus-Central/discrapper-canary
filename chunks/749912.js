n.d(t, { Z: () => u }), n(47120);
var r = n(200651);
n(192379);
var o = n(754700),
    s = n(481060),
    a = n(70956),
    i = n(987144);
function l(e) {
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
function c(e, t) {
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
            label: 'Stream Desktop'
        },
        {
            value: 0,
            label: 'Play Desktop'
        },
        {
            value: 3,
            label: 'Play Console'
        },
        {
            value: 4,
            label: 'Play Desktop & Console'
        },
        {
            value: 2,
            label: 'Watch Video'
        },
        {
            value: 5,
            label: 'Play Activity'
        }
    ],
    u = function (e) {
        let { onSelect: t, taskDuration: n = 10, taskConfig: u } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(s.xJW, {
                    children: [
                        (0, r.jsx)(s.vwX, {
                            tag: s.RB0.H5,
                            children: 'Task Type(s)'
                        }),
                        (0, r.jsx)(s.R94, {
                            children: (0, r.jsx)(s.PhF, {
                                className: i.taskPresetSelect,
                                placeholder: 'Select Task Preset',
                                options: d,
                                renderOptionValue: (e) => e.map((e) => (0, r.jsx)('div', { children: e.label }, e.value)),
                                renderOptionLabel: (e) => (0, r.jsx)('div', { children: e.label }),
                                isSelected: (e) =>
                                    e ===
                                    (function (e) {
                                        let t = o.X.PLAY_ON_PLAYSTATION in e || o.X.PLAY_ON_XBOX in e,
                                            n = o.X.PLAY_ON_DESKTOP in e || o.X.PLAY_ON_DESKTOP_V2 in e,
                                            r = o.X.STREAM_ON_DESKTOP in e,
                                            s = o.X.WATCH_VIDEO in e,
                                            a = o.X.PLAY_ACTIVITY in e;
                                        return t && n ? 4 : t ? 3 : n ? 0 : r ? 1 : s ? 2 : a ? 5 : void 0;
                                    })(u.tasks),
                                select: (e) => {
                                    t(
                                        c(l({}, u), {
                                            tasks: (function (e, t) {
                                                let n = [];
                                                switch (e) {
                                                    case 1:
                                                        n = [o.X.STREAM_ON_DESKTOP];
                                                        break;
                                                    case 0:
                                                        n = [o.X.PLAY_ON_DESKTOP];
                                                        break;
                                                    case 3:
                                                        n = [o.X.PLAY_ON_PLAYSTATION, o.X.PLAY_ON_XBOX];
                                                        break;
                                                    case 4:
                                                        n = [o.X.PLAY_ON_DESKTOP, o.X.PLAY_ON_PLAYSTATION, o.X.PLAY_ON_XBOX];
                                                        break;
                                                    case 2:
                                                        n = [o.X.WATCH_VIDEO];
                                                        break;
                                                    case 5:
                                                        n = [o.X.PLAY_ACTIVITY];
                                                }
                                                let r = {};
                                                for (let e of n)
                                                    r[e] = {
                                                        eventName: e,
                                                        target: t,
                                                        externalIds: []
                                                    };
                                                return r;
                                            })(e, n)
                                        })
                                    );
                                },
                                serialize: String
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(s.xJW, {
                    children: [
                        (0, r.jsx)(s.vwX, {
                            tag: s.RB0.H5,
                            children: 'Task Duration'
                        }),
                        (0, r.jsx)(s.R94, {
                            children: (0, r.jsx)(s.oil, {
                                value: String(n / a.Z.Seconds.MINUTE),
                                onChange: function (e) {
                                    let n = Number(e);
                                    if (isNaN(n)) return;
                                    n *= a.Z.Seconds.MINUTE;
                                    let r = l({}, u.tasks);
                                    for (let [e, t] of Object.entries(r)) r[e] = c(l({}, t), { target: n });
                                    t(c(l({}, u), { tasks: r }));
                                }
                            })
                        })
                    ]
                })
            ]
        });
    };
