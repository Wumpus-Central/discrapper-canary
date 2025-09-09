n.d(t, {
    FB: () => j,
    Jt: () => N,
    OC: () => C,
    Sr: () => y,
    V_: () => E,
    lG: () => _,
    mo: () => g,
}),
    n(539854),
    n(388685);
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
    x = n(594174),
    h = n(411198),
    p = n(51144),
    f = n(727785);
let v = new l.Z("SearchDebugUtils");
function b() {
    v.info("--------------------------");
}
function g() {
    let e = s.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        v.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, r.F6)(e, x.default, m.Z),
                n = (0, r.on)(e, x.default, m.Z);
            v.info("id: ".concat(e.id)),
                v.info("name: ".concat(t)),
                v.info("default name: ".concat(n)),
                v.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = x.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = p.ZP.getGlobalName(t),
                        r = m.Z.getNickname(t.id),
                        l = d.ZP.getNicknames(t.id);
                    v.info("username: ".concat(n)),
                        v.info("global name: ".concat(a)),
                        v.info("nickname: ".concat(r)),
                        v.info("guild nicknames: ".concat(l)),
                        b();
                });
        }),
        v.info("END Logging Group DM Channels\n"),
        v.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, r.F6)(e, x.default, m.Z);
            v.info("id: ".concat(e.id)), v.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = x.default.getUser(n);
            if (null == a) return;
            let l = a.username,
                i = p.ZP.getGlobalName(a),
                s = m.Z.getNickname(a.id);
            v.info("username: ".concat(l)), v.info("global name: ".concat(i)), v.info("nickname: ".concat(s)), b();
        }),
        v.info("END Logging DM Channels\n");
}
function j() {
    let e = s.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        v.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, r.F6)(e, x.default, m.Z),
                n = (0, r.on)(e, x.default, m.Z);
            v.info("id: ".concat(e.id)),
                v.info("name: ".concat(t)),
                v.info("default name: ".concat(n)),
                v.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = x.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = p.ZP.getGlobalName(t),
                        r = m.Z.getNickname(t.id),
                        l = d.ZP.getNicknames(t.id);
                    v.info("username: ".concat(n)),
                        v.info("global name: ".concat(a)),
                        v.info("nickname: ".concat(r)),
                        v.info("guild nicknames: ".concat(l)),
                        b();
                });
        }),
        v.info("END Logging Group DM Channels\n"),
        v.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, r.F6)(e, x.default, m.Z);
            v.info("id: ".concat(e.id)), v.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = x.default.getUser(n);
            if (null == a) return;
            let l = a.username,
                i = p.ZP.getGlobalName(a),
                s = m.Z.getNickname(a.id);
            v.info("username: ".concat(l)), v.info("global name: ".concat(i)), v.info("nickname: ".concat(s)), b();
        }),
        v.info("END Logging DM Channels\n");
}
function _() {
    let e = m.Z.getFriendIDs();
    v.info("START Discord Friends"),
        e.forEach((e) => {
            let t = x.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = p.ZP.getGlobalName(t),
                r = m.Z.getNickname(t.id),
                l = d.ZP.getNicknames(t.id);
            v.info("username: ".concat(n)),
                v.info("global name: ".concat(a)),
                v.info("nickname: ".concat(r)),
                v.info("guild nicknames: ".concat(l)),
                b();
        }),
        v.info("END Discord Friends\n");
}
function y() {
    let e = o.Z.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        l = [];
    e.forEach((e) => {
        (0, h.lM)(e) ? t.push(e) : e.isDM() ? a.push(e) : e.isMultiUserDM() ? l.push(e) : n.push(e);
    }),
        v.info("START Frecency"),
        v.info("Guilds"),
        t.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            v.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t));
        }),
        b(),
        v.info("DM Channels"),
        a.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            v.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        b(),
        v.info("Group DM Channels"),
        l.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            v.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)),
                v.info("default name: ".concat((0, r.on)(e, x.default, m.Z))),
                v.info("name: ".concat((0, r.F6)(e, x.default, m.Z)));
        }),
        b(),
        v.info("Guild Channels"),
        n.forEach((e) => {
            let t = o.Z.getScoreWithoutFetchingLatest(e.id);
            v.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        b(),
        v.info("END Frecency\n");
}
function C() {
    let e = i.Z.getProps();
    v.info("START Quick Switcher State"),
        v.info("Query: ".concat(e.query)),
        e.results.forEach((e) => {
            switch ((v.info("Result Type: ".concat(e.type)), e.type)) {
                case f.h8.GUILD:
                    v.info("guild id: ".concat(e.record.id));
                    break;
                case f.h8.TEXT_CHANNEL:
                case f.h8.VOICE_CHANNEL:
                    v.info("channel type: ".concat(e.record.type)),
                        v.info("channel id: ".concat(e.record.id)),
                        v.info("name: ".concat(e.record.name));
                    break;
                case f.h8.DM:
                    v.info("channel type: ".concat(e.record.type)),
                        v.info("channel id: ".concat(e.record.id)),
                        e.record.isDM() &&
                            (v.info("recipient id: ".concat(e.record.getRecipientId())),
                            e.record.recipients.forEach((e) => {
                                let t = x.default.getUser(e);
                                null != t &&
                                    (v.info("recipient username: ".concat(t.username)),
                                    v.info("recipient global name: ".concat(p.ZP.getGlobalName(t))),
                                    v.info("recipient nickname: ".concat(m.Z.getNickname(t.id))));
                            }));
                    break;
                case f.h8.GROUP_DM:
                    v.info("channel type: ".concat(e.record.type)),
                        v.info("channel id: ".concat(e.record.id)),
                        v.info("name: ".concat((0, r.F6)(e.record, x.default, m.Z))),
                        e.record.isGroupDM() &&
                            (v.info("default name: ".concat((0, r.on)(e.record, x.default, m.Z))),
                            v.info("recipient id: ".concat(e.record.recipients)),
                            e.record.recipients.forEach((e) => {
                                let t = x.default.getUser(e);
                                null != t &&
                                    (v.info("recipient username: ".concat(t.username)),
                                    v.info("recipient global name: ".concat(p.ZP.getGlobalName(t))),
                                    v.info("recipient nickname: ".concat(m.Z.getNickname(t.id))));
                            }));
                    break;
                case f.h8.USER:
                    v.info("user id: ".concat(e.record.id)),
                        v.info("username: ".concat(e.record.username)),
                        v.info("global name: ".concat(p.ZP.getGlobalName(e.record))),
                        v.info("nickname: ".concat(m.Z.getNickname(e.record.id))),
                        v.info("guild nicknames: ".concat(d.ZP.getNicknames(e.record.id)));
            }
            v.info("frecency score: ".concat(o.Z.getScoreWithoutFetchingLatest(e.record.id))), b();
        }),
        v.info("END Quick Switcher State\n");
}
async function N() {
    v.info("START User Search Worker State");
    let e = await a.Z.requestDebugState();
    if (null == e) return void v.info("Unable to get debug state from User Search Worker");
    Object.entries(JSON.parse(e.users)).forEach((e) => {
        let [t, n] = e;
        v.info("id: ".concat(t)),
            v.info("username: ".concat(n.username)),
            v.info("global name: ".concat(n.globalName)),
            v.info("nickname: ".concat(n.friendNickname)),
            Object.entries(n.nicknames).forEach((e) => {
                let [t, n] = e;
                v.info("guild id: ".concat(t)), v.info("guild nickname: ".concat(n));
            }),
            b();
    }),
        v.info("END User Search Worker State\n");
}
async function E(e) {
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
        user: x.default.getUser(e),
        searchWorkerUser: n,
        guildMembers: l,
        guildMemberRequests: i,
    };
}
