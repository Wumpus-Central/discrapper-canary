n.d(t, { A: () => c });
var a = n(627968),
    i = n(412703),
    s = n(843282),
    l = n(397927),
    r = n(927813),
    o = n(49329);
let d = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    c = function (e) {
        let { onSelect: t, taskDuration: n = 10, taskConfigV2: c } = e;
        return (0, a.jsxs)(l.BJc, {
            gap: 20,
            children: [
                (0, a.jsx)(s.Pw, {
                    label: "Task Type(s)",
                    className: o.Z,
                    placeholder: "Select Task Preset",
                    options: d,
                    renderOptionValue: (e) => e.map((e) => (0, a.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, a.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let n, a, s, l, r;
                        return (
                            e ===
                            ((t = c.tasks),
                            (n = i.n.PLAY_ON_PLAYSTATION in t || i.n.PLAY_ON_XBOX in t),
                            (a = i.n.PLAY_ON_DESKTOP in t || i.n.PLAY_ON_DESKTOP_V2 in t),
                            (s = i.n.STREAM_ON_DESKTOP in t),
                            (l = i.n.WATCH_VIDEO in t),
                            (r = i.n.PLAY_ACTIVITY in t),
                            n && a ? 4 : n ? 3 : a ? 0 : s ? 1 : l ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...c,
                            tasks: (function (e, t) {
                                let n = {};
                                switch (e) {
                                    case 1:
                                        n[i.n.STREAM_ON_DESKTOP] = { type: i.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        n[i.n.PLAY_ON_DESKTOP] = { type: i.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (n[i.n.PLAY_ON_PLAYSTATION] = {
                                            type: i.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (n[i.n.PLAY_ON_XBOX] = {
                                                type: i.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (n[i.n.PLAY_ON_DESKTOP] = { type: i.n.PLAY_ON_DESKTOP, target: t }),
                                            (n[i.n.PLAY_ON_PLAYSTATION] = {
                                                type: i.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (n[i.n.PLAY_ON_XBOX] = {
                                                type: i.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        n[i.n.WATCH_VIDEO] = {
                                            type: i.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        n[i.n.PLAY_ACTIVITY] = { type: i.n.PLAY_ACTIVITY, target: t };
                                }
                                return n;
                            })(e, n),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, a.jsx)(l.ksK, {
                    label: "Task Duration",
                    value: String(n / r.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let n = Number(e);
                        if (isNaN(n)) return;
                        n *= r.A.Seconds.MINUTE;
                        let a = Object.fromEntries(
                            Object.entries(c.tasks).map((e) => {
                                let [t, a] = e;
                                return [t, { ...a, target: n }];
                            }),
                        );
                        t({ ...c, tasks: a });
                    },
                }),
            ],
        });
    };
