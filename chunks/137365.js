n.d(t, { D7: () => T, Md: () => b, _S: () => S, a1: () => C, g_: () => y, h2: () => N, it: () => A, pD: () => j }),
    n(321073);
var a = n(450827),
    s = n(47167),
    i = n(626584),
    l = n(174768),
    r = n(734057),
    o = n(205761),
    d = n(256587),
    c = n(696451),
    u = n(71393),
    m = n(994500),
    h = n(287809),
    x = n(860689),
    p = n(661191),
    g = n(427262),
    _ = n(926140);
let f = new i.A("SearchDebugUtils");
function v() {
    f.info("--------------------------");
}
function b() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        f.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, s.m1)(e, h.default, m.A),
                n = (0, s.ks)(e, h.default, m.A);
            f.info(`id: ${e.id}`),
                f.info(`name: ${t}`),
                f.info(`default name: ${n}`),
                f.info(`recipients ids: ${e.recipients}`),
                e.recipients.forEach((e) => {
                    let t = h.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = g.Ay.getGlobalName(t),
                        s = m.A.getNickname(t.id),
                        i = c.Ay.getNicknames(t.id);
                    f.info(`username: ${n}`),
                        f.info(`global name: ${a}`),
                        f.info(`nickname: ${s}`),
                        f.info(`guild nicknames: ${i}`),
                        v();
                });
        }),
        f.info("END Logging Group DM Channels\n"),
        f.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, s.m1)(e, h.default, m.A);
            f.info(`id: ${e.id}`), f.info(`name: ${t}`);
            let n = e.getRecipientId(),
                a = h.default.getUser(n);
            if (null == a) return;
            let i = a.username,
                l = g.Ay.getGlobalName(a),
                r = m.A.getNickname(a.id);
            f.info(`username: ${i}`), f.info(`global name: ${l}`), f.info(`nickname: ${r}`), v();
        }),
        f.info("END Logging DM Channels\n");
}
function j() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        f.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, s.m1)(e, h.default, m.A),
                n = (0, s.ks)(e, h.default, m.A);
            f.info(`id: ${e.id}`),
                f.info(`name: ${t}`),
                f.info(`default name: ${n}`),
                f.info(`recipients ids: ${e.recipients}`),
                e.recipients.forEach((e) => {
                    let t = h.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = g.Ay.getGlobalName(t),
                        s = m.A.getNickname(t.id),
                        i = c.Ay.getNicknames(t.id);
                    f.info(`username: ${n}`),
                        f.info(`global name: ${a}`),
                        f.info(`nickname: ${s}`),
                        f.info(`guild nicknames: ${i}`),
                        v();
                });
        }),
        f.info("END Logging Group DM Channels\n"),
        f.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, s.m1)(e, h.default, m.A);
            f.info(`id: ${e.id}`), f.info(`name: ${t}`);
            let n = e.getRecipientId(),
                a = h.default.getUser(n);
            if (null == a) return;
            let i = a.username,
                l = g.Ay.getGlobalName(a),
                r = m.A.getNickname(a.id);
            f.info(`username: ${i}`), f.info(`global name: ${l}`), f.info(`nickname: ${r}`), v();
        }),
        f.info("END Logging DM Channels\n");
}
function A() {
    let e = m.A.getFriendIDs();
    f.info("START Discord Friends"),
        e.forEach((e) => {
            let t = h.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = g.Ay.getGlobalName(t),
                s = m.A.getNickname(t.id),
                i = c.Ay.getNicknames(t.id);
            f.info(`username: ${n}`),
                f.info(`global name: ${a}`),
                f.info(`nickname: ${s}`),
                f.info(`guild nicknames: ${i}`),
                v();
        }),
        f.info("END Discord Friends\n");
}
function C() {
    let e = o.A.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        i = [];
    e.forEach((e) => {
        (0, x.fh)(e) ? t.push(e) : e.isDM() ? a.push(e) : e.isMultiUserDM() ? i.push(e) : n.push(e);
    }),
        f.info("START Frecency"),
        f.info("Guilds"),
        t.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            f.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
        }),
        v(),
        f.info("DM Channels"),
        a.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            f.info(`id: ${e.id} - Frecency Score: ${t}`);
        }),
        v(),
        f.info("Group DM Channels"),
        i.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            f.info(`id: ${e.id} - Frecency Score: ${t}`),
                f.info(`default name: ${(0, s.ks)(e, h.default, m.A)}`),
                f.info(`name: ${(0, s.m1)(e, h.default, m.A)}`);
        }),
        v(),
        f.info("Guild Channels"),
        n.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            f.info(`id: ${e.id} - Frecency Score: ${t}`);
        }),
        v(),
        f.info("END Frecency\n");
}
function S() {
    let e = l.A.getProps();
    f.info("START Quick Switcher State"),
        f.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((f.info(`Result Type: ${e.type}`), e.type)) {
                case _.rD.GUILD:
                    f.info(`guild id: ${e.record.id}`);
                    break;
                case _.rD.TEXT_CHANNEL:
                case _.rD.VOICE_CHANNEL:
                    f.info(`channel type: ${e.record.type}`),
                        f.info(`channel id: ${e.record.id}`),
                        f.info(`name: ${e.record.name}`);
                    break;
                case _.rD.DM:
                    f.info(`channel type: ${e.record.type}`),
                        f.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (f.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = h.default.getUser(e);
                                null != t &&
                                    (f.info(`recipient username: ${t.username}`),
                                    f.info(`recipient global name: ${g.Ay.getGlobalName(t)}`),
                                    f.info(`recipient nickname: ${m.A.getNickname(t.id)}`));
                            }));
                    break;
                case _.rD.GROUP_DM:
                    f.info(`channel type: ${e.record.type}`),
                        f.info(`channel id: ${e.record.id}`),
                        f.info(`name: ${(0, s.m1)(e.record, h.default, m.A)}`),
                        e.record.isGroupDM() &&
                            (f.info(`default name: ${(0, s.ks)(e.record, h.default, m.A)}`),
                            f.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = h.default.getUser(e);
                                null != t &&
                                    (f.info(`recipient username: ${t.username}`),
                                    f.info(`recipient global name: ${g.Ay.getGlobalName(t)}`),
                                    f.info(`recipient nickname: ${m.A.getNickname(t.id)}`));
                            }));
                    break;
                case _.rD.USER:
                    f.info(`user id: ${e.record.id}`),
                        f.info(`username: ${e.record.username}`),
                        f.info(`global name: ${g.Ay.getGlobalName(e.record)}`),
                        f.info(`nickname: ${m.A.getNickname(e.record.id)}`),
                        f.info(`guild nicknames: ${c.Ay.getNicknames(e.record.id)}`);
            }
            f.info(`frecency score: ${o.A.getScoreWithoutFetchingLatest(e.record.id)}`), v();
        }),
        f.info("END Quick Switcher State\n");
}
async function T() {
    f.info("START User Search Worker State");
    let e = await a.A.requestDebugState();
    null == e
        ? f.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, n] = e;
              f.info(`id: ${t}`),
                  f.info(`username: ${n.username}`),
                  f.info(`global name: ${n.globalName}`),
                  f.info(`nickname: ${n.friendNickname}`),
                  Object.entries(n.nicknames).forEach((e) => {
                      let [t, n] = e;
                      f.info(`guild id: ${t}`), f.info(`guild nickname: ${n}`);
                  }),
                  v();
          }),
          f.info("END User Search Worker State\n"));
}
async function y() {
    let e = await a.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        n = h.default.getUsers(),
        s = new Set(Object.keys(t)),
        i = p.default.keys(n),
        l = [];
    return (
        i.forEach((e) => {
            s.has(e) || l.push(e);
        }),
        l
    );
}
async function N(e) {
    let t = await a.A.requestDebugState(),
        n = null != t ? JSON.parse(t.users)[e] : null,
        s = u.A.getGuildIds(),
        i = [];
    s.forEach((t) => {
        let n = c.Ay.getMember(t, e);
        null != n && i.push(n);
    });
    let l = d.A.getDebugState(e);
    return { user: h.default.getUser(e), searchWorkerUser: n, guildMembers: i, guildMemberRequests: l };
}
