n.d(t, {
    FB: () => y,
    Jt: () => E,
    OC: () => S,
    Sr: () => _,
    V_: () => O,
    lG: () => C,
    mo: () => j,
    tb: () => T,
}),
    n(539854),
    n(388685),
    n(415506);
var a = n(279779),
    r = n(933557),
    l = n(710845),
    i = n(823385),
    s = n(592125),
    o = n(580005),
    c = n(720202),
    d = n(271383),
    u = n(430824),
    m = n(699516),
    p = n(594174),
    h = n(411198),
    f = n(709054),
    x = n(51144),
    b = n(727785);
let g = new l.Z("SearchDebugUtils");
function v() {
    g.info("--------------------------");
}
function j() {
    let e = s.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        g.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, r.F6)(e, p.default, m.Z),
                n = (0, r.on)(e, p.default, m.Z);
            g.info("id: ".concat(e.id)),
                g.info("name: ".concat(t)),
                g.info("default name: ".concat(n)),
                g.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = p.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = x.ZP.getGlobalName(t),
                        r = m.Z.getNickname(t.id),
                        l = d.ZP.getNicknames(t.id);
                    g.info("username: ".concat(n)),
                        g.info("global name: ".concat(a)),
                        g.info("nickname: ".concat(r)),
                        g.info("guild nicknames: ".concat(l)),
                        v();
                });
        }),
        g.info("END Logging Group DM Channels\n"),
        g.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, r.F6)(e, p.default, m.Z);
            g.info("id: ".concat(e.id)), g.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = p.default.getUser(n);
            if (null == a) return;
            let l = a.username,
                i = x.ZP.getGlobalName(a),
                s = m.Z.getNickname(a.id);
            g.info("username: ".concat(l)), g.info("global name: ".concat(i)), g.info("nickname: ".concat(s)), v();
        }),
        g.info("END Logging DM Channels\n");
}
function y() {
    let e = s.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        g.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, r.F6)(e, p.default, m.Z),
                n = (0, r.on)(e, p.default, m.Z);
            g.info("id: ".concat(e.id)),
                g.info("name: ".concat(t)),
                g.info("default name: ".concat(n)),
                g.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = p.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = x.ZP.getGlobalName(t),
                        r = m.Z.getNickname(t.id),
                        l = d.ZP.getNicknames(t.id);
                    g.info("username: ".concat(n)),
                        g.info("global name: ".concat(a)),
                        g.info("nickname: ".concat(r)),
                        g.info("guild nicknames: ".concat(l)),
                        v();
                });
        }),
        g.info("END Logging Group DM Channels\n"),
        g.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, r.F6)(e, p.default, m.Z);
            g.info("id: ".concat(e.id)), g.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = p.default.getUser(n);
            if (null == a) return;
            let l = a.username,
                i = x.ZP.getGlobalName(a),
                s = m.Z.getNickname(a.id);
            g.info("username: ".concat(l)), g.info("global name: ".concat(i)), g.info("nickname: ".concat(s)), v();
        }),
        g.info("END Logging DM Channels\n");
}
function C() {
    let e = m.Z.getFriendIDs();
    g.info("START Discord Friends"),
        e.forEach((e) => {
            let t = p.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = x.ZP.getGlobalName(t),
                r = m.Z.getNickname(t.id),
                l = d.ZP.getNicknames(t.id);
            g.info("username: ".concat(n)),
                g.info("global name: ".concat(a)),
                g.info("nickname: ".concat(r)),
                g.info("guild nicknames: ".concat(l)),
                v();
        }),
        g.info("END Discord Friends\n");
}
function _() {
    let e = o.Z.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        l = [];
    e.forEach((e) => {
        (0, h.lM)(e) ? t.push(e) : e.isDM() ? a.push(e) : e.isMultiUserDM() ? l.push(e) : n.push(e);
    }),
        g.info("START Frecency"),
        g.info("Guilds"),
        t.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t));
        }),
        v(),
        g.info("DM Channels"),
        a.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        v(),
        g.info("Group DM Channels"),
        l.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)),
                g.info("default name: ".concat((0, r.on)(e, p.default, m.Z))),
                g.info("name: ".concat((0, r.F6)(e, p.default, m.Z)));
        }),
        v(),
        g.info("Guild Channels"),
        n.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        v(),
        g.info("END Frecency\n");
}
function S() {
    let e = i.Z.getProps();
    g.info("START Quick Switcher State"),
        g.info("Query: ".concat(e.query)),
        e.results.forEach((e) => {
            switch ((g.info("Result Type: ".concat(e.type)), e.type)) {
                case b.h8.GUILD:
                    g.info("guild id: ".concat(e.record.id));
                    break;
                case b.h8.TEXT_CHANNEL:
                case b.h8.VOICE_CHANNEL:
                    g.info("channel type: ".concat(e.record.type)),
                        g.info("channel id: ".concat(e.record.id)),
                        g.info("name: ".concat(e.record.name));
                    break;
                case b.h8.DM:
                    g.info("channel type: ".concat(e.record.type)),
                        g.info("channel id: ".concat(e.record.id)),
                        e.record.isDM() &&
                            (g.info("recipient id: ".concat(e.record.getRecipientId())),
                            e.record.recipients.forEach((e) => {
                                let t = p.default.getUser(e);
                                null != t &&
                                    (g.info("recipient username: ".concat(t.username)),
                                    g.info("recipient global name: ".concat(x.ZP.getGlobalName(t))),
                                    g.info("recipient nickname: ".concat(m.Z.getNickname(t.id))));
                            }));
                    break;
                case b.h8.GROUP_DM:
                    g.info("channel type: ".concat(e.record.type)),
                        g.info("channel id: ".concat(e.record.id)),
                        g.info("name: ".concat((0, r.F6)(e.record, p.default, m.Z))),
                        e.record.isGroupDM() &&
                            (g.info("default name: ".concat((0, r.on)(e.record, p.default, m.Z))),
                            g.info("recipient id: ".concat(e.record.recipients)),
                            e.record.recipients.forEach((e) => {
                                let t = p.default.getUser(e);
                                null != t &&
                                    (g.info("recipient username: ".concat(t.username)),
                                    g.info("recipient global name: ".concat(x.ZP.getGlobalName(t))),
                                    g.info("recipient nickname: ".concat(m.Z.getNickname(t.id))));
                            }));
                    break;
                case b.h8.USER:
                    g.info("user id: ".concat(e.record.id)),
                        g.info("username: ".concat(e.record.username)),
                        g.info("global name: ".concat(x.ZP.getGlobalName(e.record))),
                        g.info("nickname: ".concat(m.Z.getNickname(e.record.id))),
                        g.info("guild nicknames: ".concat(d.ZP.getNicknames(e.record.id)));
            }
            g.info("frecency score: ".concat(o.Z.getScoreWithoutFetchingLatest(e.record.id))), v();
        }),
        g.info("END Quick Switcher State\n");
}
async function E() {
    g.info("START User Search Worker State");
    let e = await a.Z.requestDebugState();
    if (null == e) return void g.info("Unable to get debug state from User Search Worker");
    Object.entries(JSON.parse(e.users)).forEach((e) => {
        let [t, n] = e;
        g.info("id: ".concat(t)),
            g.info("username: ".concat(n.username)),
            g.info("global name: ".concat(n.globalName)),
            g.info("nickname: ".concat(n.friendNickname)),
            Object.entries(n.nicknames).forEach((e) => {
                let [t, n] = e;
                g.info("guild id: ".concat(t)), g.info("guild nickname: ".concat(n));
            }),
            v();
    }),
        g.info("END User Search Worker State\n");
}
async function T() {
    let e = await a.Z.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        n = p.default.getUsers(),
        r = new Set(Object.keys(t)),
        l = f.default.keys(n),
        i = [];
    return (
        l.forEach((e) => {
            r.has(e) || i.push(e);
        }),
        i
    );
}
async function O(e) {
    let t = await a.Z.requestDebugState(),
        n = null != t ? JSON.parse(t.users)[e] : null,
        r = u.Z.getGuildIds(),
        l = [];
    r.forEach((t) => {
        let n = d.ZP.getMember(t, e);
        null != n && l.push(n);
    });
    let i = c.Z.getDebugState(e);
    return {
        user: p.default.getUser(e),
        searchWorkerUser: n,
        guildMembers: l,
        guildMemberRequests: i,
    };
}
