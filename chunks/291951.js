n.d(t, { A: () => I });
var i = n(228366),
    r = n(439372),
    a = n(498642),
    s = n(935208),
    l = n(151781);
let o = {},
    d = {},
    c = null;
async function u(e, t) {
    null == o[e] && (o[e] = new Set()), o[e].add(t), null == d[e] && (d[e] = Date.now()), E(e) && (await _(e));
}
function _(e) {
    if (null == o[e]) return;
    let t = Array.from(o[e]);
    (o[e] = new Set()),
        (d[e] = Date.now()),
        requestAnimationFrame(async () => {
            await i.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH", guildId: e, userIds: t });
        });
}
function E(e) {
    let t = o[e];
    if (null == t) return !1;
    let n = t.size >= ((a.A.getMemberCount(e) ?? 0) >= 75e3 ? 10 : 2),
        i = d[e];
    if (n) return !0;
    if (null == i) return !1;
    let r = Date.now() - i;
    return null != i && r >= ((a.A.getMemberCount(e) ?? 0) >= 75e3 ? 5e3 : 2e3);
}
function A(e) {
    (o[e] = new Set()), (d[e] = null);
}
class h extends r.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
        GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
    };
    handleInitialize() {
        null == c &&
            null == c &&
            (c = setInterval(() => {
                s.default.forEachKey(o, (e) => {
                    E(e) && _(e);
                });
            }, 1e4));
    }
    handleGuildMemberUpdate(e, t) {
        if (l.A.isInitialized(e)) return u(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (l.A.isInitialized(e)) return u(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        l.A.isInitialized(t) && A(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        l.A.isInitialized(t) && A(t);
    }
}
let I = new h();
