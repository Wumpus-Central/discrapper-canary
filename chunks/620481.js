a.d(t, {
    OC: () => j,
    Sr: () => f,
    du: () => v,
    lG: () => b,
}),
    a(539854);
var n = a(933557),
    r = a(710845),
    l = a(823385),
    i = a(592125),
    s = a(580005),
    o = a(271383),
    c = a(699516),
    d = a(594174),
    u = a(411198),
    m = a(51144),
    x = a(727785);
let h = new r.Z("SearchDebugUtils");
function p() {
    h.info("--------------------------");
}
function v() {
    let e = i.Z.getMutablePrivateChannels(),
        t = [],
        a = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && a.push(e);
    }),
        h.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, n.F6)(e, d.default, c.Z),
                a = (0, n.on)(e, d.default, c.Z);
            h.info("id: ".concat(e.id)),
                h.info("name: ".concat(t)),
                h.info("default name: ".concat(a)),
                h.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = d.default.getUser(e);
                    if (null == t) return;
                    let a = t.username,
                        n = m.ZP.getGlobalName(t),
                        r = c.Z.getNickname(t.id),
                        l = o.ZP.getNicknames(t.id);
                    h.info("username: ".concat(a)),
                        h.info("global name: ".concat(n)),
                        h.info("nickname: ".concat(r)),
                        h.info("guild nicknames: ".concat(l)),
                        p();
                });
        }),
        h.info("END Logging Group DM Channels\n"),
        h.info("START Logging DM Channels"),
        a.forEach((e) => {
            let t = (0, n.F6)(e, d.default, c.Z);
            h.info("id: ".concat(e.id)), h.info("name: ".concat(t));
            let a = e.getRecipientId(),
                r = d.default.getUser(a);
            if (null == r) return;
            let l = r.username,
                i = m.ZP.getGlobalName(r),
                s = c.Z.getNickname(r.id);
            h.info("username: ".concat(l)), h.info("global name: ".concat(i)), h.info("nickname: ".concat(s)), p();
        }),
        h.info("END Logging DM Channels\n");
}
function b() {
    let e = c.Z.getFriendIDs();
    h.info("START Discord Friends"),
        e.forEach((e) => {
            let t = d.default.getUser(e);
            if (null == t) return;
            let a = t.username,
                n = m.ZP.getGlobalName(t),
                r = c.Z.getNickname(t.id),
                l = o.ZP.getNicknames(t.id);
            h.info("username: ".concat(a)),
                h.info("global name: ".concat(n)),
                h.info("nickname: ".concat(r)),
                h.info("guild nicknames: ".concat(l)),
                p();
        }),
        h.info("END Discord Friends\n");
}
function f() {
    let e = s.Z.getFrequentlyWithoutFetchingLatest(),
        t = [],
        a = [],
        r = [],
        l = [];
    e.forEach((e) => {
        (0, u.lM)(e) ? t.push(e) : e.isDM() ? r.push(e) : e.isMultiUserDM() ? l.push(e) : a.push(e);
    }),
        h.info("START Frecency"),
        h.info("Guilds"),
        t.forEach((e) => {
            let t = s.Z.getScoreWithoutFetchingLatest(e.id);
            h.info("id: ".concat(e.id, " - name: ").concat(e.name, " - Frecency Score: ").concat(t));
        }),
        p(),
        h.info("DM Channels"),
        r.forEach((e) => {
            let t = s.Z.getScoreWithoutFetchingLatest(e.id);
            h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        p(),
        h.info("Group DM Channels"),
        l.forEach((e) => {
            let t = s.Z.getScoreWithoutFetchingLatest(e.id);
            h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t)),
                h.info("default name: ".concat((0, n.on)(e, d.default, c.Z))),
                h.info("name: ".concat((0, n.F6)(e, d.default, c.Z)));
        }),
        p(),
        h.info("Guild Channels"),
        a.forEach((e) => {
            let t = s.Z.getScoreWithoutFetchingLatest(e.id);
            h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        p(),
        h.info("END Frecency\n");
}
function j() {
    let e = l.Z.getProps();
    h.info("START Quick Switcher State"),
        h.info("Query: ".concat(e.query)),
        e.results.forEach((e) => {
            switch ((h.info("Result Type: ".concat(e.type)), e.type)) {
                case x.h8.GUILD:
                    h.info("guild id: ".concat(e.record.id));
                    break;
                case x.h8.TEXT_CHANNEL:
                case x.h8.DM:
                case x.h8.GROUP_DM:
                case x.h8.VOICE_CHANNEL:
                    h.info("channel type: ".concat(e.record.type)), h.info("channel id: ".concat(e.record.id));
                    break;
                case x.h8.USER:
                    h.info("user id: ".concat(e.record.id)),
                        h.info("username: ".concat(e.record.username)),
                        h.info("global name: ".concat(m.ZP.getGlobalName(e.record))),
                        h.info("nickname: ".concat(c.Z.getNickname(e.record.id))),
                        h.info("guild nicknames: ".concat(o.ZP.getNicknames(e.record.id)));
            }
            h.info("frecency score: ".concat(s.Z.getScoreWithoutFetchingLatest(e.record.id))), p();
        }),
        h.info("END Quick Switcher State\n");
}
