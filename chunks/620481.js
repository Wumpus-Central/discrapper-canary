n.d(t, {
    FB: () => _,
    Jt: () => E,
    OC: () => S,
    Sr: () => C,
    V_: () => O,
    lG: () => y,
    mo: () => j,
    tb: () => T,
}),
    n(539854),
    n(388685),
    n(415506);
var a = n(279779),
    i = n(933557),
    r = n(710845),
    l = n(823385),
    s = n(592125),
    o = n(580005),
    c = n(720202),
    d = n(271383),
    u = n(430824),
    m = n(699516),
    p = n(594174),
    h = n(411198),
    x = n(709054),
    g = n(51144),
    f = n(727785);
let b = new r.Z("SearchDebugUtils");
function v() {
    b.info("--------------------------");
}
function j() {
    let e = s.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        b.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, i.F6)(e, p.default, m.Z),
                n = (0, i.on)(e, p.default, m.Z);
            b.info("id: ".concat(e.id)),
                b.info("name: ".concat(t)),
                b.info("default name: ".concat(n)),
                b.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = p.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = g.ZP.getGlobalName(t),
                        i = m.Z.getNickname(t.id),
                        r = d.ZP.getNicknames(t.id);
                    b.info("username: ".concat(n)),
                        b.info("global name: ".concat(a)),
                        b.info("nickname: ".concat(i)),
                        b.info("guild nicknames: ".concat(r)),
                        v();
                });
        }),
        b.info("END Logging Group DM Channels\n"),
        b.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, i.F6)(e, p.default, m.Z);
            b.info("id: ".concat(e.id)), b.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = p.default.getUser(n);
            if (null == a) return;
            let r = a.username,
                l = g.ZP.getGlobalName(a),
                s = m.Z.getNickname(a.id);
            b.info("username: ".concat(r)), b.info("global name: ".concat(l)), b.info("nickname: ".concat(s)), v();
        }),
        b.info("END Logging DM Channels\n");
}
function _() {
    let e = s.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        b.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, i.F6)(e, p.default, m.Z),
                n = (0, i.on)(e, p.default, m.Z);
            b.info("id: ".concat(e.id)),
                b.info("name: ".concat(t)),
                b.info("default name: ".concat(n)),
                b.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = p.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = g.ZP.getGlobalName(t),
                        i = m.Z.getNickname(t.id),
                        r = d.ZP.getNicknames(t.id);
                    b.info("username: ".concat(n)),
                        b.info("global name: ".concat(a)),
                        b.info("nickname: ".concat(i)),
                        b.info("guild nicknames: ".concat(r)),
                        v();
                });
        }),
        b.info("END Logging Group DM Channels\n"),
        b.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, i.F6)(e, p.default, m.Z);
            b.info("id: ".concat(e.id)), b.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = p.default.getUser(n);
            if (null == a) return;
            let r = a.username,
                l = g.ZP.getGlobalName(a),
                s = m.Z.getNickname(a.id);
            b.info("username: ".concat(r)), b.info("global name: ".concat(l)), b.info("nickname: ".concat(s)), v();
        }),
        b.info("END Logging DM Channels\n");
}
function y() {
    let e = m.Z.getFriendIDs();
    b.info("START Discord Friends"),
        e.forEach((e) => {
            let t = p.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = g.ZP.getGlobalName(t),
                i = m.Z.getNickname(t.id),
                r = d.ZP.getNicknames(t.id);
            b.info("username: ".concat(n)),
                b.info("global name: ".concat(a)),
                b.info("nickname: ".concat(i)),
                b.info("guild nicknames: ".concat(r)),
                v();
        }),
        b.info("END Discord Friends\n");
}
function C() {
    let e = o.Z.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        r = [];
    e.forEach((e) => {
        (0, h.lM)(e) ? t.push(e) : e.isDM() ? a.push(e) : e.isMultiUserDM() ? r.push(e) : n.push(e);
    }),
        b.info("START Frecency"),
        b.info("Guilds"),
        t.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            b.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t));
        }),
        v(),
        b.info("DM Channels"),
        a.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        v(),
        b.info("Group DM Channels"),
        r.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)),
                b.info("default name: ".concat((0, i.on)(e, p.default, m.Z))),
                b.info("name: ".concat((0, i.F6)(e, p.default, m.Z)));
        }),
        v(),
        b.info("Guild Channels"),
        n.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            b.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        v(),
        b.info("END Frecency\n");
}
function S() {
    let e = l.Z.getProps();
    b.info("START Quick Switcher State"),
        b.info("Query: ".concat(e.query)),
        e.results.forEach((e) => {
            switch ((b.info("Result Type: ".concat(e.type)), e.type)) {
                case f.h8.GUILD:
                    b.info("guild id: ".concat(e.record.id));
                    break;
                case f.h8.TEXT_CHANNEL:
                case f.h8.VOICE_CHANNEL:
                    b.info("channel type: ".concat(e.record.type)),
                        b.info("channel id: ".concat(e.record.id)),
                        b.info("name: ".concat(e.record.name));
                    break;
                case f.h8.DM:
                    b.info("channel type: ".concat(e.record.type)),
                        b.info("channel id: ".concat(e.record.id)),
                        e.record.isDM() &&
                            (b.info("recipient id: ".concat(e.record.getRecipientId())),
                            e.record.recipients.forEach((e) => {
                                let t = p.default.getUser(e);
                                null != t &&
                                    (b.info("recipient username: ".concat(t.username)),
                                    b.info("recipient global name: ".concat(g.ZP.getGlobalName(t))),
                                    b.info("recipient nickname: ".concat(m.Z.getNickname(t.id))));
                            }));
                    break;
                case f.h8.GROUP_DM:
                    b.info("channel type: ".concat(e.record.type)),
                        b.info("channel id: ".concat(e.record.id)),
                        b.info("name: ".concat((0, i.F6)(e.record, p.default, m.Z))),
                        e.record.isGroupDM() &&
                            (b.info("default name: ".concat((0, i.on)(e.record, p.default, m.Z))),
                            b.info("recipient id: ".concat(e.record.recipients)),
                            e.record.recipients.forEach((e) => {
                                let t = p.default.getUser(e);
                                null != t &&
                                    (b.info("recipient username: ".concat(t.username)),
                                    b.info("recipient global name: ".concat(g.ZP.getGlobalName(t))),
                                    b.info("recipient nickname: ".concat(m.Z.getNickname(t.id))));
                            }));
                    break;
                case f.h8.USER:
                    b.info("user id: ".concat(e.record.id)),
                        b.info("username: ".concat(e.record.username)),
                        b.info("global name: ".concat(g.ZP.getGlobalName(e.record))),
                        b.info("nickname: ".concat(m.Z.getNickname(e.record.id))),
                        b.info("guild nicknames: ".concat(d.ZP.getNicknames(e.record.id)));
            }
            b.info("frecency score: ".concat(o.Z.getScoreWithoutFetchingLatest(e.record.id))), v();
        }),
        b.info("END Quick Switcher State\n");
}
async function E() {
    b.info("START User Search Worker State");
    let e = await a.Z.requestDebugState();
    if (null == e) return void b.info("Unable to get debug state from User Search Worker");
    Object.entries(JSON.parse(e.users)).forEach((e) => {
        let [t, n] = e;
        b.info("id: ".concat(t)),
            b.info("username: ".concat(n.username)),
            b.info("global name: ".concat(n.globalName)),
            b.info("nickname: ".concat(n.friendNickname)),
            Object.entries(n.nicknames).forEach((e) => {
                let [t, n] = e;
                b.info("guild id: ".concat(t)), b.info("guild nickname: ".concat(n));
            }),
            v();
    }),
        b.info("END User Search Worker State\n");
}
async function T() {
    let e = await a.Z.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        n = p.default.getUsers(),
        i = new Set(Object.keys(t)),
        r = x.default.keys(n),
        l = [];
    return (
        r.forEach((e) => {
            i.has(e) || l.push(e);
        }),
        l
    );
}
async function O(e) {
    let t = await a.Z.requestDebugState(),
        n = null != t ? JSON.parse(t.users)[e] : null,
        i = u.Z.getGuildIds(),
        r = [];
    i.forEach((t) => {
        let n = d.ZP.getMember(t, e);
        null != n && r.push(n);
    });
    let l = c.Z.getDebugState(e);
    return {
        user: p.default.getUser(e),
        searchWorkerUser: n,
        guildMembers: r,
        guildMemberRequests: l,
    };
}
