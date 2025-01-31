n.d(t, { Z: () => c }), n(47120);
var s = n(200651);
n(192379);
var r = n(754700),
    a = n(481060),
    o = n(70956),
    i = n(416457);
let l = [
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
    c = function (e) {
        let { onSelect: t, taskDuration: n = 10, taskConfig: c } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(a.xJW, {
                    children: [
                        (0, s.jsx)(a.vwX, {
                            tag: a.RB0.H5,
                            children: 'Task Type(s)'
                        }),
                        (0, s.jsx)(a.R94, {
                            children: (0, s.jsx)(a.PhF, {
                                className: i.taskPresetSelect,
                                placeholder: 'Select Task Preset',
                                options: l,
                                renderOptionValue: (e) => e.map((e) => (0, s.jsx)('div', { children: e.label }, e.value)),
                                renderOptionLabel: (e) => (0, s.jsx)('div', { children: e.label }),
                                isSelected: (e) =>
                                    e ===
                                    (function (e) {
                                        let t = r.X.PLAY_ON_PLAYSTATION in e || r.X.PLAY_ON_XBOX in e,
                                            n = r.X.PLAY_ON_DESKTOP in e || r.X.PLAY_ON_DESKTOP_V2 in e,
                                            s = r.X.STREAM_ON_DESKTOP in e,
                                            a = r.X.WATCH_VIDEO in e,
                                            o = r.X.PLAY_ACTIVITY in e;
                                        return t && n ? 4 : t ? 3 : n ? 0 : s ? 1 : a ? 2 : o ? 5 : void 0;
                                    })(c.tasks),
                                select: (e) => {
                                    t({
                                        ...c,
                                        tasks: (function (e, t) {
                                            let n = [];
                                            switch (e) {
                                                case 1:
                                                    n = [r.X.STREAM_ON_DESKTOP];
                                                    break;
                                                case 0:
                                                    n = [r.X.PLAY_ON_DESKTOP];
                                                    break;
                                                case 3:
                                                    n = [r.X.PLAY_ON_PLAYSTATION, r.X.PLAY_ON_XBOX];
                                                    break;
                                                case 4:
                                                    n = [r.X.PLAY_ON_DESKTOP, r.X.PLAY_ON_PLAYSTATION, r.X.PLAY_ON_XBOX];
                                                    break;
                                                case 2:
                                                    n = [r.X.WATCH_VIDEO];
                                                    break;
                                                case 5:
                                                    n = [r.X.PLAY_ACTIVITY];
                                            }
                                            let s = {};
                                            for (let e of n)
                                                s[e] = {
                                                    eventName: e,
                                                    target: t,
                                                    externalIds: []
                                                };
                                            return s;
                                        })(e, n)
                                    });
                                },
                                serialize: String
                            })
                        })
                    ]
                }),
                (0, s.jsxs)(a.xJW, {
                    children: [
                        (0, s.jsx)(a.vwX, {
                            tag: a.RB0.H5,
                            children: 'Task Duration'
                        }),
                        (0, s.jsx)(a.R94, {
                            children: (0, s.jsx)(a.oil, {
                                value: String(n / o.Z.Seconds.MINUTE),
                                onChange: function (e) {
                                    let n = Number(e);
                                    if (isNaN(n)) return;
                                    n *= o.Z.Seconds.MINUTE;
                                    let s = { ...c.tasks };
                                    for (let [e, t] of Object.entries(s))
                                        s[e] = {
                                            ...t,
                                            target: n
                                        };
                                    t({
                                        ...c,
                                        tasks: s
                                    });
                                }
                            })
                        })
                    ]
                })
            ]
        });
    };
