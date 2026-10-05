function r(e) {
    let { thinking: t, finishedAt: i, now: r } = e;
    return t ? "building" : null != i && r - i < 6e4 ? "done" : "idle";
}
i.d(t, { Ng: () => u, Uk: () => r, wu: () => l });
let n = 221552 == i.j ? { building: 0, done: 1, idle: 2 } : null;
function u(e) {
    return [...e].sort((e, t) => {
        let i = n[e.activity] - n[t.activity];
        if (0 !== i) return i;
        if (e.sortTime !== t.sortTime) return t.sortTime - e.sortTime;
        let r = e.name.localeCompare(t.name);
        return 0 !== r ? r : e.projectId.localeCompare(t.projectId);
    });
}
function l(e) {
    return e.guild_id ?? e.preview_guild_id ?? null;
}
