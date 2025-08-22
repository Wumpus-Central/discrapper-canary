n.d(t, {
    FB: () => v,
    OC: () => g,
    Sr: () => j,
    lG: () => b,
    mo: () => f,
}),
    n(539854);
var a = n(933557),
    r = n(710845),
    l = n(823385),
    i = n(592125),
    s = n(580005),
    o = n(271383),
    c = n(699516),
    d = n(594174),
    u = n(411198),
    m = n(51144),
    x = n(727785);
let h = new r.Z("SearchDebugUtils");
function p() {
    h.info("--------------------------");
}
function f() {
    let e = i.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        h.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, a.F6)(e, d.default, c.Z),
                n = (0, a.on)(e, d.default, c.Z);
            h.info("id: ".concat(e.id)),
                h.info("name: ".concat(t)),
                h.info("default name: ".concat(n)),
                h.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = d.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = m.ZP.getGlobalName(t),
                        r = c.Z.getNickname(t.id),
                        l = o.ZP.getNicknames(t.id);
                    h.info("username: ".concat(n)),
                        h.info("global name: ".concat(a)),
                        h.info("nickname: ".concat(r)),
                        h.info("guild nicknames: ".concat(l)),
                        p();
                });
        }),
        h.info("END Logging Group DM Channels\n"),
        h.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, a.F6)(e, d.default, c.Z);
            h.info("id: ".concat(e.id)), h.info("name: ".concat(t));
            let n = e.getRecipientId(),
                r = d.default.getUser(n);
            if (null == r) return;
            let l = r.username,
                i = m.ZP.getGlobalName(r),
                s = c.Z.getNickname(r.id);
            h.info("username: ".concat(l)), h.info("global name: ".concat(i)), h.info("nickname: ".concat(s)), p();
        }),
        h.info("END Logging DM Channels\n");
}
function v() {
    let e = i.Z.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach((e) => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e);
    }),
        h.info("START Logging Group DM Channels"),
        t.forEach((e) => {
            let t = (0, a.F6)(e, d.default, c.Z),
                n = (0, a.on)(e, d.default, c.Z);
            h.info("id: ".concat(e.id)),
                h.info("name: ".concat(t)),
                h.info("default name: ".concat(n)),
                h.info("recipients ids: ".concat(e.recipients)),
                e.recipients.forEach((e) => {
                    let t = d.default.getUser(e);
                    if (null == t) return;
                    let n = t.username,
                        a = m.ZP.getGlobalName(t),
                        r = c.Z.getNickname(t.id),
                        l = o.ZP.getNicknames(t.id);
                    h.info("username: ".concat(n)),
                        h.info("global name: ".concat(a)),
                        h.info("nickname: ".concat(r)),
                        h.info("guild nicknames: ".concat(l)),
                        p();
                });
        }),
        h.info("END Logging Group DM Channels\n"),
        h.info("START Logging DM Channels"),
        n.forEach((e) => {
            let t = (0, a.F6)(e, d.default, c.Z);
            h.info("id: ".concat(e.id)), h.info("name: ".concat(t));
            let n = e.getRecipientId(),
                r = d.default.getUser(n);
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
            let n = t.username,
                a = m.ZP.getGlobalName(t),
                r = c.Z.getNickname(t.id),
                l = o.ZP.getNicknames(t.id);
            h.info("username: ".concat(n)),
                h.info("global name: ".concat(a)),
                h.info("nickname: ".concat(r)),
                h.info("guild nicknames: ".concat(l)),
                p();
        }),
        h.info("END Discord Friends\n");
}
function j() {
    let e = s.Z.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        r = [],
        l = [];
    e.forEach((e) => {
        (0, u.lM)(e) ? t.push(e) : e.isDM() ? r.push(e) : e.isMultiUserDM() ? l.push(e) : n.push(e);
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
                h.info("default name: ".concat((0, a.on)(e, d.default, c.Z))),
                h.info("name: ".concat((0, a.F6)(e, d.default, c.Z)));
        }),
        p(),
        h.info("Guild Channels"),
        n.forEach((e) => {
            let t = s.Z.getScoreWithoutFetchingLatest(e.id);
            h.info("id: ".concat(e.id, " - Frecency Score: ").concat(t));
        }),
        p(),
        h.info("END Frecency\n");
}
function g() {
    let e = l.Z.getProps();
    h.info("START Quick Switcher State"),
        h.info("Query: ".concat(e.query)),
        e.results.forEach((e) => {
            switch ((h.info("Result Type: ".concat(e.type)), e.type)) {
                case x.h8.GUILD:
                    h.info("guild id: ".concat(e.record.id));
                    break;
                case x.h8.TEXT_CHANNEL:
                case x.h8.VOICE_CHANNEL:
                    h.info("channel type: ".concat(e.record.type)),
                        h.info("channel id: ".concat(e.record.id)),
                        h.info("name: ".concat(e.record.name));
                    break;
                case x.h8.DM:
                    h.info("channel type: ".concat(e.record.type)),
                        h.info("channel id: ".concat(e.record.id)),
                        e.record.isDM() &&
                            (h.info("recipient id: ".concat(e.record.getRecipientId())),
                            e.record.recipients.forEach((e) => {
                                let t = d.default.getUser(e);
                                null != t &&
                                    (h.info("recipient username: ".concat(t.username)),
                                    h.info("recipient global name: ".concat(m.ZP.getGlobalName(t))),
                                    h.info("recipient nickname: ".concat(c.Z.getNickname(t.id))));
                            }));
                    break;
                case x.h8.GROUP_DM:
                    h.info("channel type: ".concat(e.record.type)),
                        h.info("channel id: ".concat(e.record.id)),
                        h.info("name: ".concat((0, a.F6)(e.record, d.default, c.Z))),
                        e.record.isGroupDM() &&
                            (h.info("default name: ".concat((0, a.on)(e.record, d.default, c.Z))),
                            h.info("recipient id: ".concat(e.record.recipients)),
                            e.record.recipients.forEach((e) => {
                                let t = d.default.getUser(e);
                                null != t &&
                                    (h.info("recipient username: ".concat(t.username)),
                                    h.info("recipient global name: ".concat(m.ZP.getGlobalName(t))),
                                    h.info("recipient nickname: ".concat(c.Z.getNickname(t.id))));
                            }));
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
