n.d(t, { Z: () => h }), n(467055), n(388685);
var r = n(951288);
n(647438);
var i = n(754700),
    a = n(481060),
    o = n(70956),
    s = n(196817);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = [
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
];
function _(e) {
    let t = i.X.PLAY_ON_PLAYSTATION in e || i.X.PLAY_ON_XBOX in e,
        n = i.X.PLAY_ON_DESKTOP in e || i.X.PLAY_ON_DESKTOP_V2 in e,
        r = i.X.STREAM_ON_DESKTOP in e,
        a = i.X.WATCH_VIDEO in e,
        o = i.X.PLAY_ACTIVITY in e;
    return t && n ? 4 : t ? 3 : n ? 0 : r ? 1 : a ? 2 : o ? 5 : void 0;
}
function p(e, t) {
    let n = {};
    switch (e) {
        case 1:
            n[i.X.STREAM_ON_DESKTOP] = {
                type: i.X.STREAM_ON_DESKTOP,
                target: t,
            };
            break;
        case 0:
            n[i.X.PLAY_ON_DESKTOP] = {
                type: i.X.PLAY_ON_DESKTOP,
                target: t,
            };
            break;
        case 3:
            (n[i.X.PLAY_ON_PLAYSTATION] = {
                type: i.X.PLAY_ON_PLAYSTATION,
                target: t,
                externalIds: [],
            }),
                (n[i.X.PLAY_ON_XBOX] = {
                    type: i.X.PLAY_ON_XBOX,
                    target: t,
                    externalIds: [],
                });
            break;
        case 4:
            (n[i.X.PLAY_ON_DESKTOP] = {
                type: i.X.PLAY_ON_DESKTOP,
                target: t,
            }),
                (n[i.X.PLAY_ON_PLAYSTATION] = {
                    type: i.X.PLAY_ON_PLAYSTATION,
                    target: t,
                    externalIds: [],
                }),
                (n[i.X.PLAY_ON_XBOX] = {
                    type: i.X.PLAY_ON_XBOX,
                    target: t,
                    externalIds: [],
                });
            break;
        case 2:
            n[i.X.WATCH_VIDEO] = {
                type: i.X.WATCH_VIDEO,
                target: t,
                assets: { video: { url: "" } },
                messages: { videoTitle: "" },
            };
            break;
        case 5:
            n[i.X.PLAY_ACTIVITY] = {
                type: i.X.PLAY_ACTIVITY,
                target: t,
            };
    }
    return n;
}
let h = function (e) {
    let { onSelect: t, taskDuration: n = 10, taskConfigV2: i } = e;
    function l(e) {
        let n = Number(e);
        if (isNaN(n)) return;
        n *= o.Z.Seconds.MINUTE;
        let r = Object.fromEntries(
            Object.entries(i.tasks).map((e) => {
                let [t, r] = e;
                return [t, d(c({}, r), { target: n })];
            }),
        );
        t(d(c({}, i), { tasks: r }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xJW, {
                children: [
                    (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H5,
                        children: "Task Type(s)",
                    }),
                    (0, r.jsx)(a.R94, {
                        children: (0, r.jsx)(a.PhF, {
                            className: s.taskPresetSelect,
                            placeholder: "Select Task Preset",
                            options: f,
                            renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                            renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                            isSelected: (e) => e === _(i.tasks),
                            select: (e) => {
                                t(d(c({}, i), { tasks: p(e, n) }));
                            },
                            serialize: String,
                        }),
                    }),
                ],
            }),
            (0, r.jsxs)(a.xJW, {
                children: [
                    (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H5,
                        children: "Task Duration",
                    }),
                    (0, r.jsx)(a.R94, {
                        children: (0, r.jsx)(a.oil, {
                            value: String(n / o.Z.Seconds.MINUTE),
                            onChange: l,
                        }),
                    }),
                ],
            }),
        ],
    });
};
