n.d(t, {
    D7: () => S,
    Md: () => j,
    _S: () => C,
    a1: () => A,
    g_: () => O,
    h2: () => E,
    it: () => _,
    pD: () => y,
}),
    n(321073),
    n(896048),
    n(65821);
var a = n(450827),
    l = n(47167),
    i = n(626584),
    r = n(174768),
    s = n(734057),
    o = n(205761),
    c = n(256587),
    d = n(696451),
    u = n(71393),
    m = n(994500),
    p = n(287809),
    h = n(860689),
    f = n(661191),
    x = n(427262),
    b = n(926140);
let g = new i.A("SearchDebugUtils");
function v() {
    g.info("--------------------------");
}
function j() {
    let e = s.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        g.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, l.m1)(e, p.default, m.A),
                n = (0, l.ks)(e, p.default, m.A);
            g.info("id: ".concat(e.id)),
                g.info("name: ".concat(t)),
                g.info("default name: ".concat(n)),
                g.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = p.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = x.Ay.getGlobalName(t),
                        l = m.A.getNickname(t.id),
                        i = d.Ay.getNicknames(t.id);
                    g.info("username: ".concat(n)),
                        g.info("global name: ".concat(a)),
                        g.info("nickname: ".concat(l)),
                        g.info("guild nicknames: ".concat(i)),
                        v();
                });
        }),
        g.info("END Logging Group DM Channels\n"),
        g.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, l.m1)(e, p.default, m.A);
            g.info("id: ".concat(e.id)), g.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = p.default.getUser(n);
            if (null == a) return;
            let i = a.username,
                r = x.Ay.getGlobalName(a),
                s = m.A.getNickname(a.id);
            g.info("username: ".concat(i)), g.info("global name: ".concat(r)), g.info("nickname: ".concat(s)), v();
        }),
        g.info("END Logging DM Channels\n");
}
function y() {
    let e = s.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        g.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, l.m1)(e, p.default, m.A),
                n = (0, l.ks)(e, p.default, m.A);
            g.info("id: ".concat(e.id)),
                g.info("name: ".concat(t)),
                g.info("default name: ".concat(n)),
                g.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = p.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = x.Ay.getGlobalName(t),
                        l = m.A.getNickname(t.id),
                        i = d.Ay.getNicknames(t.id);
                    g.info("username: ".concat(n)),
                        g.info("global name: ".concat(a)),
                        g.info("nickname: ".concat(l)),
                        g.info("guild nicknames: ".concat(i)),
                        v();
                });
        }),
        g.info("END Logging Group DM Channels\n"),
        g.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, l.m1)(e, p.default, m.A);
            g.info("id: ".concat(e.id)), g.info("name: ".concat(t));
            let n = e.getRecipientId(),
                a = p.default.getUser(n);
            if (null == a) return;
            let i = a.username,
                r = x.Ay.getGlobalName(a),
                s = m.A.getNickname(a.id);
            g.info("username: ".concat(i)), g.info("global name: ".concat(r)), g.info("nickname: ".concat(s)), v();
        }),
        g.info("END Logging DM Channels\n");
}
function _() {
    let e = m.A.getFriendIDs();
    g.info("START Discord Friends"),
        e.forEach((e) => {
            let t = p.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = x.Ay.getGlobalName(t),
                l = m.A.getNickname(t.id),
                i = d.Ay.getNicknames(t.id);
            g.info("username: ".concat(n)),
                g.info("global name: ".concat(a)),
                g.info("nickname: ".concat(l)),
                g.info("guild nicknames: ".concat(i)),
                v();
        }),
        g.info("END Discord Friends\n");
}
function A() {
    let e = o.A.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        i = [];
    e.forEach((e) => {
        (0, h.fh)(e) ? t.push(e) : e.isDM() ? a.push(e) : e.isMultiUserDM() ? i.push(e) : n.push(e);
    }),
        g.info("START Frecency"),
        g.info("Guilds"),
        t.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t));
        }),
        v(),
        g.info("DM Channels"),
        a.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        v(),
        g.info("Group DM Channels"),
        i.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)),
                g.info("default name: ".concat((0, l.ks)(e, p.default, m.A))),
                g.info("name: ".concat((0, l.m1)(e, p.default, m.A)));
        }),
        v(),
        g.info("Guild Channels"),
        n.forEach((e) => {
            let t = o.A.getScoreWithoutFetchingLatest(e.id);
            g.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        v(),
        g.info("END Frecency\n");
}
function C() {
    let e = r.A.getProps();
    g.info("START Quick Switcher State"),
        g.info("Query: ".concat(e.query)),
        e.results.forEach((e) => {
            switch ((g.info("Result Type: ".concat(e.type)), e.type)) {
                case b.rD.GUILD:
                    g.info("guild id: ".concat(e.record.id));
                    break;
                case b.rD.TEXT_CHANNEL:
                case b.rD.VOICE_CHANNEL:
                    g.info("channel type: ".concat(e.record.type)),
                        g.info("channel id: ".concat(e.record.id)),
                        g.info("name: ".concat(e.record.name));
                    break;
                case b.rD.DM:
                    g.info("channel type: ".concat(e.record.type)),
                        g.info("channel id: ".concat(e.record.id)),
                        e.record.isDM() &&
                            (g.info("recipient id: ".concat(e.record.getRecipientId())),
                            e.record.recipients.forEach((e) => {
                                let t = p.default.getUser(e);
                                null != t &&
                                    (g.info("recipient username: ".concat(t.username)),
                                    g.info("recipient global name: ".concat(x.Ay.getGlobalName(t))),
                                    g.info("recipient nickname: ".concat(m.A.getNickname(t.id))));
                            }));
                    break;
                case b.rD.GROUP_DM:
                    g.info("channel type: ".concat(e.record.type)),
                        g.info("channel id: ".concat(e.record.id)),
                        g.info("name: ".concat((0, l.m1)(e.record, p.default, m.A))),
                        e.record.isGroupDM() &&
                            (g.info("default name: ".concat((0, l.ks)(e.record, p.default, m.A))),
                            g.info("recipient id: ".concat(e.record.recipients)),
                            e.record.recipients.forEach((e) => {
                                let t = p.default.getUser(e);
                                null != t &&
                                    (g.info("recipient username: ".concat(t.username)),
                                    g.info("recipient global name: ".concat(x.Ay.getGlobalName(t))),
                                    g.info("recipient nickname: ".concat(m.A.getNickname(t.id))));
                            }));
                    break;
                case b.rD.USER:
                    g.info("user id: ".concat(e.record.id)),
                        g.info("username: ".concat(e.record.username)),
                        g.info("global name: ".concat(x.Ay.getGlobalName(e.record))),
                        g.info("nickname: ".concat(m.A.getNickname(e.record.id))),
                        g.info("guild nicknames: ".concat(d.Ay.getNicknames(e.record.id)));
            }
            g.info("frecency score: ".concat(o.A.getScoreWithoutFetchingLatest(e.record.id))), v();
        }),
        g.info("END Quick Switcher State\n");
}
async function S() {
    g.info("START User Search Worker State");
    let e = await a.A.requestDebugState();
    null == e
        ? g.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
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
          g.info("END User Search Worker State\n"));
}
async function O() {
    let e = await a.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        n = p.default.getUsers(),
        l = new Set(Object.keys(t)),
        i = f.default.keys(n),
        r = [];
    return (
        i.forEach((e) => {
            l.has(e) || r.push(e);
        }),
        r
    );
}
async function E(e) {
    let t = await a.A.requestDebugState(),
        n = null != t ? JSON.parse(t.users)[e] : null,
        l = u.A.getGuildIds(),
        i = [];
    l.forEach((t) => {
        let n = d.Ay.getMember(t, e);
        null != n && i.push(n);
    });
    let r = c.A.getDebugState(e);
    return {
        user: p.default.getUser(e),
        searchWorkerUser: n,
        guildMembers: i,
        guildMemberRequests: r,
    };
}
