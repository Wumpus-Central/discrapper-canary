a.d(t, { A: () => u });
var n = a(627968),
    l = a(412703),
    i = a(843282),
    s = a(331322),
    r = a(292666),
    o = a(927813),
    d = a(972886);
let c = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    u = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: u } = e;
        return (0, n.jsxs)(s.B, {
            gap: 20,
            children: [
                (0, n.jsx)(i.Pw, {
                    label: "Task Type(s)",
                    className: d.Z,
                    placeholder: "Select Task Preset",
                    options: c,
                    renderOptionValue: (e) => e.map((e) => (0, n.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, n.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, n, i, s, r;
                        return (
                            e ===
                            ((t = u.tasks),
                            (a = l.n.PLAY_ON_PLAYSTATION in t || l.n.PLAY_ON_XBOX in t),
                            (n = l.n.PLAY_ON_DESKTOP in t),
                            (i = l.n.STREAM_ON_DESKTOP in t),
                            (s = l.n.WATCH_VIDEO in t),
                            (r = l.n.PLAY_ACTIVITY in t),
                            a && n ? 4 : a ? 3 : n ? 0 : i ? 1 : s ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...u,
                            tasks: (function (e, t) {
                                let a = {};
                                switch (e) {
                                    case 1:
                                        a[l.n.STREAM_ON_DESKTOP] = { type: l.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[l.n.PLAY_ON_DESKTOP] = { type: l.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[l.n.PLAY_ON_PLAYSTATION] = {
                                            type: l.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[l.n.PLAY_ON_XBOX] = {
                                                type: l.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[l.n.PLAY_ON_DESKTOP] = { type: l.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[l.n.PLAY_ON_PLAYSTATION] = {
                                                type: l.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[l.n.PLAY_ON_XBOX] = {
                                                type: l.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[l.n.WATCH_VIDEO] = {
                                            type: l.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[l.n.PLAY_ACTIVITY] = { type: l.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, n.jsx)(r.k, {
                    label: "Task Duration",
                    value: String(a / o.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= o.A.Seconds.MINUTE;
                        let n = Object.fromEntries(
                            Object.entries(u.tasks).map((e) => {
                                let [t, n] = e;
                                return [t, { ...n, target: a }];
                            }),
                        );
                        t({ ...u, tasks: n });
                    },
                }),
            ],
        });
    };
