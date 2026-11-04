let i = { building: 0, done: 1, idle: 2 };
n.d(
    t,
    {},
    {
        Ng: function (e) {
            return [...e].sort((e, t) => {
                let n = i[e.activity] - i[t.activity];
                if (0 !== n) return n;
                if (e.sortTime !== t.sortTime) return t.sortTime - e.sortTime;
                let r = e.name.localeCompare(t.name);
                return 0 !== r ? r : e.projectId.localeCompare(t.projectId);
            });
        },
        Uk: function (e) {
            let { thinking: t, finishedAt: n, now: i } = e;
            return t ? "building" : null != n && i - n < 6e4 ? "done" : "idle";
        },
        wu: function (e) {
            return e.guild_id ?? e.preview_guild_id ?? null;
        },
    },
);
