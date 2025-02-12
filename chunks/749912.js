a.d(s, { Z: () => d }), a(47120);
var i = a(200651);
a(192379);
var t = a(754700),
    n = a(481060),
    l = a(70956),
    r = a(814763);
let o = [
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
    d = function (e) {
        let { onSelect: s, taskDuration: a = 10, taskConfig: d } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(n.xJW, {
                    children: [
                        (0, i.jsx)(n.vwX, {
                            tag: n.RB0.H5,
                            children: 'Task Type(s)'
                        }),
                        (0, i.jsx)(n.R94, {
                            children: (0, i.jsx)(n.PhF, {
                                className: r.taskPresetSelect,
                                placeholder: 'Select Task Preset',
                                options: o,
                                renderOptionValue: (e) => e.map((e) => (0, i.jsx)('div', { children: e.label }, e.value)),
                                renderOptionLabel: (e) => (0, i.jsx)('div', { children: e.label }),
                                isSelected: (e) =>
                                    e ===
                                    (function (e) {
                                        let s = t.X.PLAY_ON_PLAYSTATION in e || t.X.PLAY_ON_XBOX in e,
                                            a = t.X.PLAY_ON_DESKTOP in e || t.X.PLAY_ON_DESKTOP_V2 in e,
                                            i = t.X.STREAM_ON_DESKTOP in e,
                                            n = t.X.WATCH_VIDEO in e,
                                            l = t.X.PLAY_ACTIVITY in e;
                                        return s && a ? 4 : s ? 3 : a ? 0 : i ? 1 : n ? 2 : l ? 5 : void 0;
                                    })(d.tasks),
                                select: (e) => {
                                    s({
                                        ...d,
                                        tasks: (function (e, s) {
                                            let a = [];
                                            switch (e) {
                                                case 1:
                                                    a = [t.X.STREAM_ON_DESKTOP];
                                                    break;
                                                case 0:
                                                    a = [t.X.PLAY_ON_DESKTOP];
                                                    break;
                                                case 3:
                                                    a = [t.X.PLAY_ON_PLAYSTATION, t.X.PLAY_ON_XBOX];
                                                    break;
                                                case 4:
                                                    a = [t.X.PLAY_ON_DESKTOP, t.X.PLAY_ON_PLAYSTATION, t.X.PLAY_ON_XBOX];
                                                    break;
                                                case 2:
                                                    a = [t.X.WATCH_VIDEO];
                                                    break;
                                                case 5:
                                                    a = [t.X.PLAY_ACTIVITY];
                                            }
                                            let i = {};
                                            for (let e of a)
                                                i[e] = {
                                                    eventName: e,
                                                    target: s,
                                                    externalIds: []
                                                };
                                            return i;
                                        })(e, a)
                                    });
                                },
                                serialize: String
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(n.xJW, {
                    children: [
                        (0, i.jsx)(n.vwX, {
                            tag: n.RB0.H5,
                            children: 'Task Duration'
                        }),
                        (0, i.jsx)(n.R94, {
                            children: (0, i.jsx)(n.oil, {
                                value: String(a / l.Z.Seconds.MINUTE),
                                onChange: function (e) {
                                    let a = Number(e);
                                    if (isNaN(a)) return;
                                    a *= l.Z.Seconds.MINUTE;
                                    let i = { ...d.tasks };
                                    for (let [e, s] of Object.entries(i))
                                        i[e] = {
                                            ...s,
                                            target: a
                                        };
                                    s({
                                        ...d,
                                        tasks: i
                                    });
                                }
                            })
                        })
                    ]
                })
            ]
        });
    };
