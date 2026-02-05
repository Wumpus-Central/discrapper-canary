"use strict";
n.d(t, {
    A4: () => ep,
    Ay: () => ed,
    ON: () => ef,
    RF: () => eP,
    SD: () => e_,
    Sx: () => eM,
    XC: () => eE,
    ZA: () => eI,
    Zn: () => Q,
}),
    n(321073),
    n(938796);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(683588),
    o = n(311907),
    l = n(73153),
    u = n(686956),
    c = n(155718),
    d = n(630248),
    _ = n(626584),
    f = n(200662),
    p = n(773669),
    h = n(594061),
    m = n(961350),
    g = n(734057),
    E = n(696451),
    A = n(71393),
    I = n(287809),
    T = n(954571),
    y = n(827785),
    S = n(56494),
    v = n(26909),
    C = n(577700),
    b = n(210978),
    N = n(392054),
    R = n(168186),
    O = n(240591),
    D = n(46477),
    L = n(73510),
    w = n(652215);
let x = new _.A("ApplicationCommandIndexStore"),
    P = Symbol("currentUser"),
    M = Symbol("stale"),
    k = Symbol("current"),
    U = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    G = Object.freeze({
        serverVersion: k,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: k },
    }),
    V = Object.freeze({ serverVersion: M, fetchState: { fetching: !1 } }),
    F = 5e3,
    B = { sensitivity: "accent", numeric: !0 },
    j = !1,
    H = [];
function Y(e) {
    switch (e.type) {
        case "guild":
            return e.guildId;
        case "channel":
            return e.channelId;
        case "user":
            return P;
        case "application":
            return e.applicationId;
    }
}
function W(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = Y(e),
        a = ec.indices[i];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = { ...a, ...t }))
            : r && (n = { serverVersion: M, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((ec.indices[i] = n),
            "application" === e.type &&
                (ec.applicationIndices.set(i, n), (ec.applicationIndicesVersion = ec.applicationIndicesVersion + 1))),
        a
    );
}
function K(e) {
    let t = Y(e),
        n = ec.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete ec.indices[t];
}
function z() {
    for (let e of Object.values(ec.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ec.indices = {};
}
function $() {
    for (let e of H) J(e);
    H = [];
}
function q() {
    for (let e of Object.values(ec.indices)) e.serverVersion = M;
    $(), (j = !0);
}
function Z(e) {
    let { target: t } = e,
        n = Y(t);
    ev(ec.indices[n] ?? V) && X(t);
}
async function Q(e) {
    let t = Y(e),
        n = ec.indices[t] ?? V;
    if (!ev(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, ec.indices[t] ?? V;
        }
        return n;
    }
    return await X(e), ec.indices[t] ?? V;
}
async function X(e) {
    let t = new AbortController(),
        n = new s.K();
    W(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, C.E)(e, t).then(n.resolve).catch(n.reject);
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: r } = e,
        i = I.default.getCurrentUser()?.id;
    if (null == i) return j || H.push(e), !1;
    let a = {},
        s = {},
        o = new Set();
    for (let e of r.applications) {
        if (null == e.bot && null != e.bot_id) {
            s[e.bot_id] = e.id;
            let t = I.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : o.add(e.bot_id);
        } else null != e.bot && (s[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, R.bq)(eb(e), !1),
                permissions: null != e.permissions ? (0, f.UZ)(eD(e.permissions, i)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        a[e.id] = t;
    }
    for (let e of ("guild" === n.type && o.size > 0 && u.A.requestMembersById(n.guildId, [...o]),
    (0, R.Lz)(
        r.application_commands.map((e) => eN(e, i)),
        !0,
    ))) {
        let t = a[e.applicationId];
        if (null == t) {
            x.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let l = r.version ?? k;
    W(
        n,
        { serverVersion: l, result: { sections: a, sectionIdsByBotId: s, version: l }, fetchState: { fetching: !1 } },
        t,
    );
}
function ee(e) {
    let { target: t } = e;
    W(t, { fetchState: { fetching: !1, retryAfter: Date.now() + F } });
}
function et(e) {
    let { guildId: t, version: n } = e,
        r = W({ type: "guild", guildId: t }, { serverVersion: n ?? M }),
        i = r?.result?.sectionIdsByBotId;
    if (null != i)
        for (let e in i) {
            let t = g.A.getDMFromUserId(e);
            null != t && W({ type: "channel", channelId: t }, { serverVersion: M });
        }
}
function en(e, t) {
    let n = Y({ type: "guild", guildId: e }),
        r = ec.indices[n]?.result;
    if (null == r) return !1;
    let i = !1;
    return (
        t.forEach((e) => {
            let { user: t, nick: n } = e;
            if (!t.bot) return;
            let s = r.sectionIdsByBotId[t.id];
            if (null == s) return;
            let o = r.sections[s];
            a()(null != o, "Bot has no matching index section"),
                a()(null != o.descriptor.application, "Bot's index section has no application info");
            let l = (0, R.bq)({ ...o.descriptor.application, bot: t }, !1, n);
            (o.descriptor = { ...o.descriptor, ...l }), (i = !0);
        }),
        i
    );
}
function er(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    ec.hasContextStateApplication({ applicationId: t, channelId: n, guildId: r }) &&
        W(null != r ? { type: "guild", guildId: r } : { type: "channel", channelId: n }, { serverVersion: M }),
        ec.hasUserStateApplication(t) && W({ type: "user" }, { serverVersion: M }),
        ec.hasApplicationState(t) && W({ type: "application", applicationId: t }, { serverVersion: M });
}
function ei(e) {
    let { channel: t } = e;
    K({ type: "channel", channelId: t.id });
}
function ea(e) {
    let { guild: t } = e;
    K({ type: "guild", guildId: t.id });
}
function es() {
    W({ type: "user" }, { serverVersion: M });
}
function eo(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = en(e.guildId, e.members) || n;
    return n;
}
function el() {
    let e = p.default.locale;
    return (
        e !== ec.oldLocale &&
        (z(), (ec.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })), (ec.oldLocale = e), !0)
    );
}
class eu extends o.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = p.default.locale;
    collator = new Intl.Collator(p.default.locale, B);
    initialize() {
        this.waitFor(p.default),
            this.waitFor(v.Ay, d.A, m.default, g.A, E.Ay, A.A, I.default),
            this.syncWith([p.default], () => {
                el();
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && eS(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? V) : G;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: r } = e,
            i = this.indices[r ?? n];
        return null != (i?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? G : (this.indices[e] ?? V);
    }
    getUserState() {
        return this.indices[P] ?? V;
    }
    hasUserStateApplication(e) {
        let t = this.indices[P];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? G : (this.indices[e] ?? V);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == I.default.getCurrentUser()) return U;
        let r = "channel" === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, O.Bh)(r, t.commandTypes),
            u = null == r || l?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (c &&
                u &&
                null != r &&
                eS(r) &&
                (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(ec.indices).length,
                }),
                ev(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, C.$)({ type: "guild", guildId: r.guild_id })
                        : (0, C.$)({ type: "channel", channelId: r.id }),
                    (d = !0))),
            ev(a) && ((0, C.$)({ type: "user" }), (d = !0)),
            ev(s) &&
                null != n.applicationId &&
                ((0, C.$)({ type: "application", applicationId: n.applicationId }), (d = !0)));
        let _ = eT({
            permissionContext: l,
            text: t.text,
            allowApplicationCommands: c,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: i,
            userState: a,
            applicationStates: n.allowApplicationState ? o : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand,
        });
        return (_.loading = _.loading || d), _;
    }
    queryInstallOnDemandApp(e, t) {
        let n = g.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [c.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: b.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let ec = new eu(l.h, {
        LOGOUT: z,
        CONNECTION_OPEN: q,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: Z,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: J,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ee,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: er,
        CHANNEL_DELETE: ei,
        GUILD_DELETE: ea,
        USER_APPLICATION_UPDATE: es,
        USER_APPLICATION_REMOVE: es,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: et,
        GUILD_MEMBERS_CHUNK_BATCH: eo,
    }),
    ed = ec;
function e_(e, t, n) {
    let [i, a] = r.useState(!0),
        s = (0, o.cf)([ec], () => ("channel" === e.type ? ec.getContextState(e) : ec.getUserState()));
    return (
        r.useEffect(() => {
            if (i) {
                if ("contextless" === e.type) {
                    n && ev(s) && (0, C.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    eS(e.channel) &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(ec.indices).length,
                    }),
                    ev(s) &&
                        (null != e.channel.guild_id
                            ? (0, C.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, C.$)({ type: "channel", channelId: e.channel.id }))),
                    a(!1);
            }
        }, [s, n, e, t, i]),
        s
    );
}
function ef(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, o.cf)([ec], () => ec.indices[e] ?? V);
    return (
        r.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (T.default.track(w.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ec.indices).length,
                    }),
                    ev(a) && (0, C.$)({ type: "guild", guildId: e })),
                i(!1));
        }, [a, t, e, n]),
        a
    );
}
function ep(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, o.cf)([ec], () => ec.getUserState());
    return (
        r.useEffect(() => {
            n && (t && ev(a) && e && (0, C.$)({ type: "user" }), i(!1));
        }, [a, t, e, n]),
        a
    );
}
function eh(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, o.bG)([ec], () => ec.getApplicationState(e));
    r.useEffect(() => {
        n && (t && ev(a) && null != e && (0, C.$)({ type: "application", applicationId: e }), i(!1));
    }, [t, e, a, n]);
}
function em() {
    return (0, o.bG)([ec], () => ec.getApplicationStates());
}
function eg() {
    return (0, o.bG)([ec], () => ec.applicationIndicesVersion);
}
function eE(e, t, n, i) {
    let { descriptors: a, commands: s, sectionedCommands: o, loading: l } = eI(e, n, i),
        u = r.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        c = (0, S.F)(u);
    return r.useMemo(() => {
        if (!i.includeFrecency || 0 === c.length)
            return { descriptors: a, commands: s, sectionedCommands: o, loading: l };
        let e = s
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = v.Ay.getScoreWithoutLoadingLatest(u, e);
                return v.Ay.getScoreWithoutLoadingLatest(u, t) - n;
            })
            .splice(0, L.Ob);
        return 0 === e.length
            ? { descriptors: a, commands: s, sectionedCommands: o, loading: l }
            : {
                  descriptors: [y.gZ[L.Ik.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [{ section: y.gZ[L.Ik.FRECENCY], data: e }, ...o],
                  loading: l,
              };
    }, [l, i.includeFrecency, c, s, a, o, u]);
}
let eA = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function eI(e, t, n) {
    let i = "channel" === e.type ? e.channel : void 0,
        a = (0, O.MW)(i, t.commandTypes),
        s = !1 !== t.applicationCommands,
        o = e_(e, s, n.allowFetch),
        l = ep(s, n.allowFetch),
        u = em(),
        c = eg();
    return (
        eh(n.applicationId, n.allowFetch),
        r.useMemo(
            () =>
                eT({
                    permissionContext: a,
                    text: t.text,
                    allowApplicationCommands: s,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: o,
                    userState: l,
                    launcherContext: e,
                    applicationStates: n.allowApplicationState ? u : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand,
                }),
            [
                a,
                t.text,
                t.builtIns,
                s,
                n.scoreMethod,
                n.allowEmptySections,
                n.sortOptions,
                n.allowApplicationState,
                n.applicationId,
                n.installOnDemand,
                o,
                l,
                e,
                u,
                c,
            ],
        )
    );
}
function eT(e) {
    let {
            permissionContext: t,
            contextState: n,
            userState: r,
            applicationStates: i,
            text: s,
            builtIns: o = b.n.ALLOW,
            allowApplicationCommands: l = !0,
            singleApplicationId: u,
            allowEmptySections: c = !1,
            scoreMethod: _ = b.M.NONE,
            sortOptions: f = eA,
            installOnDemand: p = !1,
        } = e,
        { commandTypes: m } = t,
        g = s?.toLowerCase(),
        E = g?.split(" "),
        I = o === b.n.ONLY_TEXT,
        T = o !== b.n.DENY ? (0, y.Ez)(m, !0, I) : [],
        S = [],
        C = {
            permissionContext: t,
            query: g,
            splitQuery: E,
            allowEmptySections: c,
            scoreMethod: _,
            installOnDemand: p,
        },
        N = n.result?.sections ?? {},
        R = r.result?.sections ?? {},
        O = new Set();
    if (l) {
        if (t.hasBaseAccessPermissions)
            for (let e in N) {
                let t = N[e];
                (null == u || t.descriptor.id === u) && O.add(e);
            }
        for (let e in R) {
            let t = R[e];
            (null == u || t.descriptor.id === u) && O.add(e);
        }
    }
    let D = new Map();
    for (let [e, t] of i)
        if (null == u || e === u) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) O.add(t), D.set(t, e[t]);
        }
    for (let e of Array.from(O)) {
        let t,
            n,
            r = N[e],
            i = R[e],
            s = D.get(e),
            o = null != r,
            l = null != i;
        if (null != r && null != i) {
            for (let e in ((t = i.descriptor), (n = []), i.commands)) {
                let t = i.commands[e];
                n.push(t);
            }
            for (let e in r.commands)
                if (!(e in i.commands)) {
                    let t = r.commands[e];
                    n.push(t);
                }
        } else
            null != r
                ? ((t = r.descriptor), (n = Object.values(r.commands)))
                : null != i
                  ? ((t = i.descriptor), (n = Object.values(i.commands)))
                  : null != s && ((t = s.descriptor), (n = Object.values(s.commands)));
        a()(null != t, "Failed to select application descriptor"),
            a()(null != n, "Failed to select list of application commands");
        let u = ey(t, n, o, l, C);
        null != u && S.push(u);
    }
    if (
        (f.applications.useFrecency && h.bW.loadIfNecessary(),
        S.sort((e, t) => {
            if (f.applications.useScore && _ === b.M.APPLICATION_ONLY) {
                let n = e.data[0]?.score ?? Number.MAX_VALUE,
                    r = t.data[0]?.score ?? Number.MAX_VALUE;
                if (n !== r) return n - r;
            }
            if (f.applications.useFrecency) {
                let n = d.A.getScoreWithoutLoadingLatest(e.section.id),
                    r = d.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return ex(e.section.name, t.section.name);
        }),
        T.length > 0 || !0 === c)
    ) {
        let e = ey(y.gZ[L.Ik.BUILT_IN], T, !0, !0, C);
        null != e && S.push(e);
    }
    let w = S.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (_ === b.M.COMMAND_ONLY || _ === b.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = A.A.getGuild(t?.context?.guild_id);
        f.commands.useFrecency && h.bW.loadIfNecessary();
        let r = null != e ? { channel: e, guild: n } : void 0;
        w.sort((e, t) => {
            if (f.commands.useScore) {
                let n = e.score ?? 0,
                    r = t.score ?? 0;
                if (n !== r) return n - r;
            }
            if (f.commands.useFrecency) {
                let n = v.Ay.getScoreWithoutLoadingLatest(r, e),
                    i = v.Ay.getScoreWithoutLoadingLatest(r, t);
                if (n !== i) return i - n;
            }
            return ex(e.displayName, t.displayName);
        });
    }
    return {
        commands: w,
        descriptors: S.map((e) => e.section),
        sectionedCommands: S,
        loading:
            n?.fetchState.fetching === !0 ||
            r?.fetchState.fetching === !0 ||
            (null != u && i.get(u)?.fetchState.fetching === !0),
    };
}
function ey(e, t, n, r, i) {
    let a,
        {
            query: s,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: u,
            permissionContext: c,
            installOnDemand: d,
        } = i,
        { context: _, userId: f, roleIds: p, isImpersonating: h } = c,
        m = _?.guild_id != null ? D.we(e.permissions, _.guild_id, f, p, h) : null,
        g = _?.guild_id != null ? D._W(e.permissions, _, _.guild_id) : null,
        E = [];
    for (let i of t)
        D.zl(i, c, {
            applicationAllowedForUser: m,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d,
        }) === D.CA.ALLOWED && E.push(i);
    return 0 !== (a = u !== b.M.NONE && null != s && null != o ? eL(s, o, E, e, u) : E).length || l
        ? ((u === b.M.NONE || u === b.M.APPLICATION_ONLY) && a.sort((e, t) => ex(e.displayName, t.displayName)),
          { section: e, data: a })
        : null;
}
function eS(e) {
    return e?.guild_id != null || (e.type === w.rbe.DM && I.default.getUser(e.getRecipientId())?.bot === !0);
}
function ev(e) {
    return (
        !!eC(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function eC(e) {
    return e.result?.version !== e.serverVersion;
}
function eb(e) {
    return { description: e.description, icon: e.icon, id: e.id, name: e.name, bot: e.bot, flags: e.flags };
}
function eN(e, t) {
    let n = {
        ...e,
        description: e.description_default ?? e.description ?? "",
        dm_permission: e.dm_permission,
        name: e.name_default ?? e.name,
        options: e.options?.map(eR) ?? [],
        permissions: null != e.permissions ? eD(e.permissions, t) : void 0,
    };
    return (
        e.description !== e.description_default && (n.description_localized = e.description),
        e.name !== e.name_default && (n.name_localized = e.name),
        n
    );
}
function eR(e) {
    let t = {
        ...e,
        choices: e.choices?.map(eO),
        description: e.description_default ?? e.description,
        name: e.name_default ?? e.name,
        options: e.options?.map(eR),
    };
    return (
        e.description !== e.description_default && (t.description_localized = e.description),
        e.name !== e.name_default && (t.name_localized = e.name),
        t
    );
}
function eO(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return e.name !== e.name_default && (t.name_localized = e.name), t;
}
function eD(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: N.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, r] of Object.entries(e.channels)) n.push({ type: N.RA.CHANNEL, id: t, permission: r });
    if (null != e.roles) for (let [t, r] of Object.entries(e.roles)) n.push({ type: N.RA.ROLE, id: t, permission: r });
    return n;
}
function eL(e, t, n, r, i) {
    let a,
        s = [];
    if (i === b.M.APPLICATION_ONLY || i === b.M.COMMAND_OR_APPLICATION) {
        let t = r.name.toLocaleLowerCase();
        if (t.startsWith(e)) a = 5;
        else if (t.includes(e)) a = 6;
        else {
            let t = r.application?.description?.toLocaleLowerCase();
            t?.includes(e) && (a = 8);
        }
    }
    let o = t[0],
        l = t.slice(1).join(" ");
    for (let t of n) {
        let n;
        (i === b.M.COMMAND_ONLY || i === b.M.COMMAND_OR_APPLICATION) && (n = ew(t, e, o, l)),
            (void 0 === n || (void 0 !== a && a < n)) && (n = a),
            void 0 !== n && s.push({ ...t, score: n });
    }
    return s;
}
function ew(e, t, n, r) {
    let i = e.untranslatedName.toLocaleLowerCase(),
        a = e.displayName.toLocaleLowerCase();
    if (i.startsWith(t) || a.startsWith(t)) return 0;
    if (
        (i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r)) ||
        (a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(r))
    )
        return 1;
    if (i.includes(t) || a?.includes(t)) return 2;
    let s = !1;
    for (let { name: n, serverLocalizedName: r } of e.options ?? []) {
        if (
            n.startsWith(t) ||
            `${i} ${n}`.startsWith(t) ||
            (null != a && `${a} ${n}`.startsWith(t)) ||
            (null != r && (r.startsWith(t) || `${i} ${r}`.startsWith(t) || (null != a && `${a} ${r}`.startsWith(t))))
        )
            return 3;
        (n.includes(t) || r?.includes(t)) && (s = !0);
    }
    if (s) return 4;
    let o = e.untranslatedDescription.toLocaleLowerCase(),
        l = e.displayDescription.toLocaleLowerCase();
    if (o.includes(t) || l.includes(t)) return 7;
}
function ex(e, t) {
    return ec.collator.compare(e, t);
}
function eP(e, t) {
    return ex(e, t);
}
function eM(e, t) {
    let n, r;
    if (t === L.Ik.BUILT_IN)
        return {
            descriptor: y.gZ[L.Ik.BUILT_IN],
            sectionCommands: (0, y.Ez)([c.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let i = ec.getContextState(e),
        a = ec.getUserState(),
        s = i.result?.sections ?? {},
        o = a.result?.sections ?? {},
        l = s[t],
        u = o[t],
        d = ec.getApplicationState(t).result?.sections?.[t];
    if (null != l && null != u) {
        for (let e in ((n = u.descriptor), (r = []), u.commands)) {
            let t = u.commands[e];
            r.push(t);
        }
        for (let e in l.commands)
            if (!(e in u.commands)) {
                let t = l.commands[e];
                r.push(t);
            }
    } else
        null != l
            ? ((n = l.descriptor), (r = Object.values(l.commands)))
            : null != u
              ? ((n = u.descriptor), (r = Object.values(u.commands)))
              : null != d && ((n = d.descriptor), (r = Object.values(d.commands)));
    return { descriptor: n, sectionCommands: r, isGuildInstalled: null != l, isUserInstalled: null != u };
}
