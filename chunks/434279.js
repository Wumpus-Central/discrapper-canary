function r(t) {
    let { thinking: e, finishedAt: n, now: r } = t;
    return e ? "building" : null != n && r - n < 6e4 ? "done" : "idle";
}
n.d(e, { Ds: () => l, Ng: () => u, Uk: () => r, wu: () => a });
let i = 221552 == n.j ? { building: 0, done: 1, idle: 2 } : null;
function u(t) {
    return [...t].sort((t, e) => {
        let n = i[t.activity] - i[e.activity];
        if (0 !== n) return n;
        if (t.sortTime !== e.sortTime) return e.sortTime - t.sortTime;
        let r = t.name.localeCompare(e.name);
        return 0 !== r ? r : t.projectId.localeCompare(e.projectId);
    });
}
function l(t, e) {
    return null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at);
}
function a(t) {
    return t.guild_id ?? t.preview_guild_id ?? null;
}
