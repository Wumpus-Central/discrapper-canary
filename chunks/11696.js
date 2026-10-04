function n(e) {
    let { thinking: t, finishedAt: i, now: n } = e;
    return t ? "building" : null != i && n - i < 6e4 ? "done" : "idle";
}
i.d(t, { Ng: () => u, Uk: () => n, wu: () => l });
let r = 221552 == i.j ? { building: 0, done: 1, idle: 2 } : null;
function u(e) {
    return [...e].sort((e, t) => {
        let i = r[e.activity] - r[t.activity];
        if (0 !== i) return i;
        if (e.sortTime !== t.sortTime) return t.sortTime - e.sortTime;
        let n = e.name.localeCompare(t.name);
        return 0 !== n ? n : e.projectId.localeCompare(t.projectId);
    });
}
function l(e) {
    return e.guild_id ?? e.preview_guild_id ?? null;
}
