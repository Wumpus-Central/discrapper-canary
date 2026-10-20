function n(e) {
    let { thinking: t, finishedAt: r, now: n } = e;
    return t ? "building" : null != r && n - r < 6e4 ? "done" : "idle";
}
r.d(t, { Ng: () => u, Uk: () => n, wu: () => l });
let i = 221552 == r.j ? { building: 0, done: 1, idle: 2 } : null;
function u(e) {
    return [...e].sort((e, t) => {
        let r = i[e.activity] - i[t.activity];
        if (0 !== r) return r;
        if (e.sortTime !== t.sortTime) return t.sortTime - e.sortTime;
        let n = e.name.localeCompare(t.name);
        return 0 !== n ? n : e.projectId.localeCompare(t.projectId);
    });
}
function l(e) {
    return e.guild_id ?? e.preview_guild_id ?? null;
}
