function r(e) {
    let { thinking: i, finishedAt: t, now: r } = e;
    return i ? "building" : null != t && r - t < 6e4 ? "done" : "idle";
}
t.d(i, { HC: () => u, io: () => o, rs: () => r });
let n = { building: 0, done: 1, idle: 2 };
function o(e) {
    return [...e].sort((e, i) => {
        let t = n[e.activity] - n[i.activity];
        if (0 !== t) return t;
        if (e.sortTime !== i.sortTime) return i.sortTime - e.sortTime;
        let r = e.name.localeCompare(i.name);
        return 0 !== r ? r : e.projectId.localeCompare(i.projectId);
    });
}
function u(e) {
    return e.guild_id ?? e.preview_guild_id ?? null;
}
