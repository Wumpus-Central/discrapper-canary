a.d(t, { D7: () => E, Md: () => f, _S: () => C, a1: () => y, g_: () => S, h2: () => N, it: () => A, pD: () => j }),
    a(321073);
var n = a(450827),
    l = a(47167),
    i = a(626584),
    s = a(174768),
    r = a(734057),
    o = a(205761),
    d = a(256587),
    c = a(696451),
    u = a(71393),
    m = a(994500),
    h = a(287809),
    p = a(860689),
    x = a(661191),
    g = a(427262),
    v = a(926140);
let b = new i.A("SearchDebugUtils");
function _() {
    b.info("--------------------------");
}
function f() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        a = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && a.push(e);
    }),
        b.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, l.m1)(e, h.default, m.A),
                a = (0, l.ks)(e, h.default, m.A);
            b.info(`id: ${e.id}`),
                b.info(`name: ${t}`),
                b.info(`default name: ${a}`),
                b.info(`recipients ids: ${e.recipients}`),
                e.recipients.forEach((e) => {
                    let t = h.default.getUser(e);
                    if (null == t) return;
                    let a = t.username,
                        n = g.Ay.getGlobalName(t),
                        l = m.A.getNickname(t.id),
                        i = c.Ay.getNicknames(t.id);
                    b.info(`username: ${a}`),
                        b.info(`global name: ${n}`),
                        b.info(`nickname: ${l}`),
                        b.info(`guild nicknames: ${i}`),
                        _();
                });
        }),
        b.info("END Logging Group DM Channels\n"),
        b.info("START Logging DM Channels"),
        a.forEach((e) => {
            let t = (0, l.m1)(e, h.default, m.A);
            b.info(`id: ${e.id}`), b.info(`name: ${t}`);
            let a = e.getRecipientId(),
                n = h.default.getUser(a);
            if (null == n) return;
            let i = n.username,
                s = g.Ay.getGlobalName(n),
                r = m.A.getNickname(n.id);
            b.info(`username: ${i}`), b.info(`global name: ${s}`), b.info(`nickname: ${r}`), _();
        }),
        b.info("END Logging DM Channels\n");
}
function j() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        a = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && a.push(e);
    }),
        b.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, l.m1)(e, h.default, m.A),
                a = (0, l.ks)(e, h.default, m.A);
            b.info(`id: ${e.id}`),
                b.info(`name: ${t}`),
                b.info(`default name: ${a}`),
                b.info(`recipients ids: ${e.recipients}`),
                e.recipients.forEach((e) => {
                    let t = h.default.getUser(e);
                    if (null == t) return;
                    let a = t.username,
                        n = g.Ay.getGlobalName(t),
                        l = m.A.getNickname(t.id),
                        i = c.Ay.getNicknames(t.id);
                    b.info(`username: ${a}`),
                        b.info(`global name: ${n}`),
                        b.info(`nickname: ${l}`),
                        b.info(`guild nicknames: ${i}`),
                        _();
                });
        }),
        b.info("END Logging Group DM Channels\n"),
        b.info("START Logging DM Channels"),
        a.forEach((e) => {
            let t = (0, l.m1)(e, h.default, m.A);
            b.info(`id: ${e.id}`), b.info(`name: ${t}`);
            let a = e.getRecipientId(),
                n = h.default.getUser(a);
            if (null == n) return;
            let i = n.username,
                s = g.Ay.getGlobalName(n),
                r = m.A.getNickname(n.id);
            b.info(`username: ${i}`), b.info(`global name: ${s}`), b.info(`nickname: ${r}`), _();
        }),
        b.info("END Logging DM Channels\n");
}
function A() {
    let e = m.A.getFriendIDs();
    b.info("START Discord Friends"),
        e.forEach((e) => {
            let t = h.default.getUser(e);
            if (null == t) return;
            let a = t.username,
                n = g.Ay.getGlobalName(t),
                l = m.A.getNickname(t.id),
                i = c.Ay.getNicknames(t.id);
            b.info(`username: ${a}`),
                b.info(`global name: ${n}`),
                b.info(`nickname: ${l}`),
                b.info(`guild nicknames: ${i}`),
                _();
        }),
        b.info("END Discord Friends\n");
}
function y() {
    let e = o.A.getFrequentlyWithoutFetchingLatest(),
        t = [],
        a = [],
        n = [],
        i = [];
    e.forEach((e) => {
        (0, p.fh)(e) ? t.push(e) : e.isDM() ? n.push(e) : e.isMultiUserDM() ? i.push(e) : a.push(e);
    }),
        b.info("START Frecency"),
        b.info("Guilds"),
        t.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            b.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
        }),
        _(),
        b.info("DM Channels"),
        n.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            b.info(`id: ${e.id} - Frecency Score: ${t}`);
        }),
        _(),
        b.info("Group DM Channels"),
        i.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            b.info(`id: ${e.id} - Frecency Score: ${t}`),
                b.info(`default name: ${(0, l.ks)(e, h.default, m.A)}`),
                b.info(`name: ${(0, l.m1)(e, h.default, m.A)}`);
        }),
        _(),
        b.info("Guild Channels"),
        a.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            b.info(`id: ${e.id} - Frecency Score: ${t}`);
        }),
        _(),
        b.info("END Frecency\n");
}
function C() {
    let e = s.A.getProps();
    b.info("START Quick Switcher State"),
        b.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((b.info(`Result Type: ${e.type}`), e.type)) {
                case v.rD.GUILD:
                    b.info(`guild id: ${e.record.id}`);
                    break;
                case v.rD.TEXT_CHANNEL:
                case v.rD.VOICE_CHANNEL:
                    b.info(`channel type: ${e.record.type}`),
                        b.info(`channel id: ${e.record.id}`),
                        b.info(`name: ${e.record.name}`);
                    break;
                case v.rD.DM:
                    b.info(`channel type: ${e.record.type}`),
                        b.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (b.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = h.default.getUser(e);
                                null != t &&
                                    (b.info(`recipient username: ${t.username}`),
                                    b.info(`recipient global name: ${g.Ay.getGlobalName(t)}`),
                                    b.info(`recipient nickname: ${m.A.getNickname(t.id)}`));
                            }));
                    break;
                case v.rD.GROUP_DM:
                    b.info(`channel type: ${e.record.type}`),
                        b.info(`channel id: ${e.record.id}`),
                        b.info(`name: ${(0, l.m1)(e.record, h.default, m.A)}`),
                        e.record.isGroupDM() &&
                            (b.info(`default name: ${(0, l.ks)(e.record, h.default, m.A)}`),
                            b.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = h.default.getUser(e);
                                null != t &&
                                    (b.info(`recipient username: ${t.username}`),
                                    b.info(`recipient global name: ${g.Ay.getGlobalName(t)}`),
                                    b.info(`recipient nickname: ${m.A.getNickname(t.id)}`));
                            }));
                    break;
                case v.rD.USER:
                    b.info(`user id: ${e.record.id}`),
                        b.info(`username: ${e.record.username}`),
                        b.info(`global name: ${g.Ay.getGlobalName(e.record)}`),
                        b.info(`nickname: ${m.A.getNickname(e.record.id)}`),
                        b.info(`guild nicknames: ${c.Ay.getNicknames(e.record.id)}`);
            }
            b.info(`frecency score: ${o.A.getScoreWithoutFetchingLatest(e.record.id)}`), _();
        }),
        b.info("END Quick Switcher State\n");
}
async function E() {
    b.info("START User Search Worker State");
    let e = await n.A.requestDebugState();
    null == e
        ? b.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              b.info(`id: ${t}`),
                  b.info(`username: ${a.username}`),
                  b.info(`global name: ${a.globalName}`),
                  b.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      b.info(`guild id: ${t}`), b.info(`guild nickname: ${a}`);
                  }),
                  _();
          }),
          b.info("END User Search Worker State\n"));
}
async function S() {
    let e = await n.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = h.default.getUsers(),
        l = new Set(Object.keys(t)),
        i = x.default.keys(a),
        s = [];
    return (
        i.forEach((e) => {
            l.has(e) || s.push(e);
        }),
        s
    );
}
async function N(e) {
    let t = await n.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        l = u.A.getGuildIds(),
        i = [];
    l.forEach((t) => {
        let a = c.Ay.getMember(t, e);
        null != a && i.push(a);
    });
    let s = d.A.getDebugState(e);
    return { user: h.default.getUser(e), searchWorkerUser: a, guildMembers: i, guildMemberRequests: s };
}
