n(47120);
var o,
    r,
    s = n(200651);
n(192379);
var a = n(754700),
    i = n(481060),
    l = n(70956),
    c = n(770410);
((r = o || (o = {}))[(r.PLAY_DESKTOP = 0)] = 'PLAY_DESKTOP'), (r[(r.STREAM_DESKTOP = 1)] = 'STREAM_DESKTOP'), (r[(r.WATCH_VIDEO = 2)] = 'WATCH_VIDEO'), (r[(r.PLAY_CONSOLE = 3)] = 'PLAY_CONSOLE'), (r[(r.PLAY_DESKTOP_CONSOLE = 4)] = 'PLAY_DESKTOP_CONSOLE'), (r[(r.PLAY_ACTIVITY = 5)] = 'PLAY_ACTIVITY');
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
];
t.Z = function (e) {
    let { onSelect: t, taskDuration: n = 10, taskConfig: o } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(i.FormItem, {
                children: [
                    (0, s.jsx)(i.FormTitle, {
                        tag: i.FormTitleTags.H5,
                        children: 'Task Type(s)'
                    }),
                    (0, s.jsx)(i.FormText, {
                        children: (0, s.jsx)(i.Select, {
                            className: c.taskPresetSelect,
                            placeholder: 'Select Task Preset',
                            options: d,
                            renderOptionValue: (e) => e.map((e) => (0, s.jsx)('div', { children: e.label }, e.value)),
                            renderOptionLabel: (e) => (0, s.jsx)('div', { children: e.label }),
                            isSelected: (e) =>
                                e ===
                                (function (e) {
                                    let t = a.X.PLAY_ON_PLAYSTATION in e || a.X.PLAY_ON_XBOX in e,
                                        n = a.X.PLAY_ON_DESKTOP in e || a.X.PLAY_ON_DESKTOP_V2 in e,
                                        o = a.X.STREAM_ON_DESKTOP in e,
                                        r = a.X.WATCH_VIDEO in e,
                                        s = a.X.PLAY_ACTIVITY in e;
                                    return t && n ? 4 : t ? 3 : n ? 0 : o ? 1 : r ? 2 : s ? 5 : void 0;
                                })(o.tasks),
                            select: (e) => {
                                t({
                                    ...o,
                                    tasks: (function (e, t) {
                                        let n = [];
                                        switch (e) {
                                            case 1:
                                                n = [a.X.STREAM_ON_DESKTOP];
                                                break;
                                            case 0:
                                                n = [a.X.PLAY_ON_DESKTOP];
                                                break;
                                            case 3:
                                                n = [a.X.PLAY_ON_PLAYSTATION, a.X.PLAY_ON_XBOX];
                                                break;
                                            case 4:
                                                n = [a.X.PLAY_ON_DESKTOP, a.X.PLAY_ON_PLAYSTATION, a.X.PLAY_ON_XBOX];
                                                break;
                                            case 2:
                                                n = [a.X.WATCH_VIDEO];
                                                break;
                                            case 5:
                                                n = [a.X.PLAY_ACTIVITY];
                                        }
                                        let o = {};
                                        for (let e of n)
                                            o[e] = {
                                                eventName: e,
                                                target: t,
                                                externalIds: []
                                            };
                                        return o;
                                    })(e, n)
                                });
                            },
                            serialize: String
                        })
                    })
                ]
            }),
            (0, s.jsxs)(i.FormItem, {
                children: [
                    (0, s.jsx)(i.FormTitle, {
                        tag: i.FormTitleTags.H5,
                        children: 'Task Duration'
                    }),
                    (0, s.jsx)(i.FormText, {
                        children: (0, s.jsx)(i.TextInput, {
                            value: String(n / l.Z.Seconds.MINUTE),
                            onChange: function (e) {
                                let n = Number(e);
                                if (isNaN(n)) return;
                                n *= l.Z.Seconds.MINUTE;
                                let r = { ...o.tasks };
                                for (let [e, t] of Object.entries(r))
                                    r[e] = {
                                        ...t,
                                        target: n
                                    };
                                t({
                                    ...o,
                                    tasks: r
                                });
                            }
                        })
                    })
                ]
            })
        ]
    });
};
