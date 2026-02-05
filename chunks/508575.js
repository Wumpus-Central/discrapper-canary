n.d(t, { A: () => c });
var a = n(627968),
    s = n(412703),
    i = n(843282),
    l = n(397927),
    r = n(927813),
    o = n(93587);
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
                (0, a.jsx)(i.Pw, {
                    label: "Task Type(s)",
                    className: o.Z,
                    placeholder: "Select Task Preset",
                    options: d,
                    renderOptionValue: (e) => e.map((e) => (0, a.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, a.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let n, a, i, l, r;
                        return (
                            e ===
                            ((t = c.tasks),
                            (n = s.n.PLAY_ON_PLAYSTATION in t || s.n.PLAY_ON_XBOX in t),
                            (a = s.n.PLAY_ON_DESKTOP in t || s.n.PLAY_ON_DESKTOP_V2 in t),
                            (i = s.n.STREAM_ON_DESKTOP in t),
                            (l = s.n.WATCH_VIDEO in t),
                            (r = s.n.PLAY_ACTIVITY in t),
                            n && a ? 4 : n ? 3 : a ? 0 : i ? 1 : l ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...c,
                            tasks: (function (e, t) {
                                let n = {};
                                switch (e) {
                                    case 1:
                                        n[s.n.STREAM_ON_DESKTOP] = { type: s.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        n[s.n.PLAY_ON_DESKTOP] = { type: s.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (n[s.n.PLAY_ON_PLAYSTATION] = {
                                            type: s.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (n[s.n.PLAY_ON_XBOX] = {
                                                type: s.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (n[s.n.PLAY_ON_DESKTOP] = { type: s.n.PLAY_ON_DESKTOP, target: t }),
                                            (n[s.n.PLAY_ON_PLAYSTATION] = {
                                                type: s.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (n[s.n.PLAY_ON_XBOX] = {
                                                type: s.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        n[s.n.WATCH_VIDEO] = {
                                            type: s.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        n[s.n.PLAY_ACTIVITY] = { type: s.n.PLAY_ACTIVITY, target: t };
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
