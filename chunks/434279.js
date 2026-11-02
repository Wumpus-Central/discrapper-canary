function i(e) {
    let { thinking: t, finishedAt: n, now: i } = e;
    return t ? "building" : null != n && i - n < 6e4 ? "done" : "idle";
}
n.d(t, { Ng: () => a, Uk: () => i, wu: () => s });
let r = { building: 0, done: 1, idle: 2 };
function a(e) {
    return [...e].sort((e, t) => {
        let n = r[e.activity] - r[t.activity];
        if (0 !== n) return n;
        if (e.sortTime !== t.sortTime) return t.sortTime - e.sortTime;
        let i = e.name.localeCompare(t.name);
        return 0 !== i ? i : e.projectId.localeCompare(t.projectId);
    });
}
function s(e) {
    return e.guild_id ?? e.preview_guild_id ?? null;
}
