"use strict";
n.d(t, {
    A4: () => ep,
    Ay: () => e_,
    ON: () => eh,
    RF: () => eM,
    SD: () => ef,
    Sx: () => ek,
    XC: () => eA,
    ZA: () => eT,
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
    h = n(773669),
    p = n(594061),
    g = n(961350),
    E = n(734057),
    A = n(696451),
    I = n(71393),
    T = n(287809),
    y = n(954571),
    S = n(827785),
    v = n(56494),
    C = n(26909),
    b = n(577700),
    N = n(210978),
    R = n(392054),
    O = n(168186),
    D = n(240591),
    L = n(46477),
    w = n(73510),
    x = n(652215);
let P = new _.A("ApplicationCommandIndexStore"),
    M = Symbol("currentUser"),
    k = Symbol("stale"),
    U = Symbol("current"),
    G = Object.freeze({ descriptors: [], commands: [], sectionedCommands: [], loading: !0 }),
    F = Object.freeze({
        serverVersion: U,
        fetchState: { fetching: !1 },
        result: { sections: {}, sectionIdsByBotId: {}, version: U },
    }),
    V = Object.freeze({ serverVersion: k, fetchState: { fetching: !1 } }),
    B = 5e3,
    j = { sensitivity: "accent", numeric: !0 },
    H = !1,
    Y = [];
function W(e) {
    switch (e.type) {
        case "guild":
            return e.guildId;
        case "channel":
            return e.channelId;
        case "user":
            return M;
        case "application":
            return e.applicationId;
    }
}
function K(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = W(e),
        a = ed.indices[i];
    return (
        null != a
            ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), (n = { ...a, ...t }))
            : r && (n = { serverVersion: k, fetchState: { fetching: !1 }, ...t }),
        void 0 !== n &&
            ((ed.indices[i] = n),
            "application" === e.type &&
                (ed.applicationIndices.set(i, n), (ed.applicationIndicesVersion = ed.applicationIndicesVersion + 1))),
        a
    );
}
function $(e) {
    let t = W(e),
        n = ed.indices[t];
    n?.fetchState.fetching && n.fetchState.abort.abort(), delete ed.indices[t];
}
function z() {
    for (let e of Object.values(ed.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ed.indices = {};
}
function q() {
    for (let e of Y) ee(e);
    Y = [];
}
function X() {
    for (let e of Object.values(ed.indices)) e.serverVersion = k;
    q(), (H = !0);
}
function Z(e) {
    let { target: t } = e,
        n = W(t);
    eC(ed.indices[n] ?? V) && J(t);
}
async function Q(e) {
    let t = W(e),
        n = ed.indices[t] ?? V;
    if (!eC(n)) {
        if (n.fetchState.fetching) {
            let e = n.fetchState.promise;
            return await e, ed.indices[t] ?? V;
        }
        return n;
    }
    return await J(e), ed.indices[t] ?? V;
}
async function J(e) {
    let t = new AbortController(),
        n = new s.K();
    K(e, { fetchState: { fetching: !0, abort: t, promise: n.promise } }, !0),
        await (0, b.E)(e, t).then(n.resolve).catch(n.reject);
}
function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { target: n, index: r } = e,
        i = T.default.getCurrentUser()?.id;
    if (null == i) return H || Y.push(e), !1;
    let a = {},
        s = {},
        o = new Set();
    for (let e of r.applications) {
        if (null == e.bot && null != e.bot_id) {
            s[e.bot_id] = e.id;
            let t = T.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : o.add(e.bot_id);
        } else null != e.bot && (s[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, O.bq)(eN(e), !1),
                permissions: null != e.permissions ? (0, f.UZ)(eL(e.permissions, i)) : void 0,
                botId: e.bot_id,
            },
            commands: {},
        };
        a[e.id] = t;
    }
    for (let e of ("guild" === n.type && o.size > 0 && u.A.requestMembersById(n.guildId, [...o]),
    (0, O.Lz)(
        r.application_commands.map((e) => eR(e, i)),
        !0,
    ))) {
        let t = a[e.applicationId];
        if (null == t) {
            P.error("Command has no matching application");
            continue;
        }
        t.commands[e.id] = e;
    }
    let l = r.version ?? U;
    K(
        n,
        { serverVersion: l, result: { sections: a, sectionIdsByBotId: s, version: l }, fetchState: { fetching: !1 } },
        t,
    );
}
function et(e) {
    let { target: t } = e;
    K(t, { fetchState: { fetching: !1, retryAfter: Date.now() + B } });
}
function en(e) {
    let { guildId: t, version: n } = e,
        r = K({ type: "guild", guildId: t }, { serverVersion: n ?? k }),
        i = r?.result?.sectionIdsByBotId;
    if (null != i)
        for (let e in i) {
            let t = E.A.getDMFromUserId(e);
            null != t && K({ type: "channel", channelId: t }, { serverVersion: k });
        }
}
function er(e, t) {
    let n = W({ type: "guild", guildId: e }),
        r = ed.indices[n]?.result;
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
            let l = (0, O.bq)({ ...o.descriptor.application, bot: t }, !1, n);
            (o.descriptor = { ...o.descriptor, ...l }), (i = !0);
        }),
        i
    );
}
function ei(e) {
    let { applicationId: t, channelId: n, guildId: r } = e;
    ed.hasContextStateApplication({ applicationId: t, channelId: n, guildId: r }) &&
        K(null != r ? { type: "guild", guildId: r } : { type: "channel", channelId: n }, { serverVersion: k }),
        ed.hasUserStateApplication(t) && K({ type: "user" }, { serverVersion: k }),
        ed.hasApplicationState(t) && K({ type: "application", applicationId: t }, { serverVersion: k });
}
function ea(e) {
    let { channel: t } = e;
    $({ type: "channel", channelId: t.id });
}
function es(e) {
    let { guild: t } = e;
    $({ type: "guild", guildId: t.id });
}
function eo() {
    K({ type: "user" }, { serverVersion: k });
}
function el(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = er(e.guildId, e.members) || n;
    return n;
}
function eu() {
    let e = h.default.locale;
    return (
        e !== ed.oldLocale &&
        (z(), (ed.collator = new Intl.Collator(e, { sensitivity: "accent", numeric: !0 })), (ed.oldLocale = e), !0)
    );
}
class ec extends o.Ay.Store {
    static displayName = "ApplicationCommandIndexStore";
    indices = {};
    applicationIndices = new Map();
    applicationIndicesVersion = 0;
    oldLocale = h.default.locale;
    collator = new Intl.Collator(h.default.locale, j);
    initialize() {
        this.waitFor(h.default),
            this.waitFor(C.Ay, d.A, g.default, E.A, A.Ay, I.A, T.default),
            this.syncWith([h.default], () => {
                eu();
            });
    }
    getContextState(e) {
        return "contextless" !== e.type && ev(e.channel) ? (this.indices[e.channel.guild_id ?? e.channel.id] ?? V) : F;
    }
    hasContextStateApplication(e) {
        let { applicationId: t, channelId: n, guildId: r } = e,
            i = this.indices[r ?? n];
        return null != (i?.result?.sections ?? {})[t];
    }
    getGuildState(e) {
        return null == e ? F : (this.indices[e] ?? V);
    }
    getUserState() {
        return this.indices[M] ?? V;
    }
    hasUserStateApplication(e) {
        let t = this.indices[M];
        return null != (t?.result?.sections ?? {})[e];
    }
    getApplicationState(e) {
        return null == e ? F : (this.indices[e] ?? V);
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == T.default.getCurrentUser()) return G;
        let r = "channel" === e.type ? e.channel : void 0,
            i = this.getContextState(e),
            a = this.getUserState(),
            s = this.getApplicationState(n.applicationId),
            o = this.getApplicationStates(),
            l = (0, D.Bh)(r, t.commandTypes),
            u = null == r || l?.hasBaseAccessPermissions === !0,
            c = !1 !== t.applicationCommands,
            d = !1;
        n.allowFetch &&
            (c &&
                u &&
                null != r &&
                ev(r) &&
                (y.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == i.result,
                    size: Object.keys(ed.indices).length,
                }),
                eC(i) &&
                    null != r &&
                    (null != r.guild_id
                        ? (0, b.$)({ type: "guild", guildId: r.guild_id })
                        : (0, b.$)({ type: "channel", channelId: r.id }),
                    (d = !0))),
            eC(a) && ((0, b.$)({ type: "user" }), (d = !0)),
            eC(s) &&
                null != n.applicationId &&
                ((0, b.$)({ type: "application", applicationId: n.applicationId }), (d = !0)));
        let _ = ey({
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
        let n = E.A.getChannel(t);
        null != n &&
            this.query(
                null != n ? { channel: n, type: "channel" } : { type: "contextless" },
                { commandTypes: [c.kc.CHAT] },
                { placeholderCount: 5, scoreMethod: N.M.COMMAND_ONLY, applicationId: e, allowFetch: !0 },
            );
    }
}
let ed = new ec(l.h, {
        LOGOUT: z,
        CONNECTION_OPEN: X,
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: Z,
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ee,
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: et,
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: ei,
        CHANNEL_DELETE: ea,
        GUILD_DELETE: es,
        USER_APPLICATION_UPDATE: eo,
        USER_APPLICATION_REMOVE: eo,
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: en,
        GUILD_MEMBERS_CHUNK_BATCH: el,
    }),
    e_ = ed;
function ef(e, t, n) {
    let [i, a] = r.useState(!0),
        s = (0, o.cf)([ed], () => ("channel" === e.type ? ed.getContextState(e) : ed.getUserState()));
    return (
        r.useEffect(() => {
            if (i) {
                if ("contextless" === e.type) {
                    n && eC(s) && (0, b.$)({ type: "user" });
                    return;
                }
                n &&
                    t &&
                    ev(e.channel) &&
                    (y.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == s.result,
                        size: Object.keys(ed.indices).length,
                    }),
                    eC(s) &&
                        (null != e.channel.guild_id
                            ? (0, b.$)({ type: "guild", guildId: e.channel.guild_id })
                            : (0, b.$)({ type: "channel", channelId: e.channel.id }))),
                    a(!1);
            }
        }, [s, n, e, t, i]),
        s
    );
}
function eh(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, o.cf)([ed], () => ed.indices[e] ?? V);
    return (
        r.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (y.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ed.indices).length,
                    }),
                    eC(a) && (0, b.$)({ type: "guild", guildId: e })),
                i(!1));
        }, [a, t, e, n]),
        a
    );
}
function ep(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, o.cf)([ed], () => ed.getUserState());
    return (
        r.useEffect(() => {
            n && (t && eC(a) && e && (0, b.$)({ type: "user" }), i(!1));
        }, [a, t, e, n]),
        a
    );
}
function em(e, t) {
    let [n, i] = r.useState(!0),
        a = (0, o.bG)([ed], () => ed.getApplicationState(e));
    r.useEffect(() => {
        n && (t && eC(a) && null != e && (0, b.$)({ type: "application", applicationId: e }), i(!1));
    }, [t, e, a, n]);
}
function eg() {
    return (0, o.bG)([ed], () => ed.getApplicationStates());
}
function eE() {
    return (0, o.bG)([ed], () => ed.applicationIndicesVersion);
}
function eA(e, t, n, i) {
    let { descriptors: a, commands: s, sectionedCommands: o, loading: l } = eT(e, n, i),
        u = r.useMemo(() => ("channel" === e.type ? { channel: e.channel, guild: t } : void 0), [e, t]),
        c = (0, v.F)(u);
    return r.useMemo(() => {
        if (!i.includeFrecency || 0 === c.length)
            return { descriptors: a, commands: s, sectionedCommands: o, loading: l };
        let e = s
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = C.Ay.getScoreWithoutLoadingLatest(u, e);
                return C.Ay.getScoreWithoutLoadingLatest(u, t) - n;
            })
            .splice(0, w.Ob);
        return 0 === e.length
            ? { descriptors: a, commands: s, sectionedCommands: o, loading: l }
            : {
                  descriptors: [S.gZ[w.Ik.FRECENCY], ...a],
                  commands: e.concat(s),
                  sectionedCommands: [{ section: S.gZ[w.Ik.FRECENCY], data: e }, ...o],
                  loading: l,
              };
    }, [l, i.includeFrecency, c, s, a, o, u]);
}
let eI = Object.freeze({
    applications: { useFrecency: !1, useScore: !1 },
    commands: { useFrecency: !0, useScore: !0 },
});
function eT(e, t, n) {
    let i = "channel" === e.type ? e.channel : void 0,
        a = (0, D.MW)(i, t.commandTypes),
        s = !1 !== t.applicationCommands,
        o = ef(e, s, n.allowFetch),
        l = ep(s, n.allowFetch),
        u = eg(),
        c = eE();
    return (
        em(n.applicationId, n.allowFetch),
        r.useMemo(
            () =>
                ey({
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
function ey(e) {
    let {
            permissionContext: t,
            contextState: n,
            userState: r,
            applicationStates: i,
            text: s,
            builtIns: o = N.n.ALLOW,
            allowApplicationCommands: l = !0,
            singleApplicationId: u,
            allowEmptySections: c = !1,
            scoreMethod: _ = N.M.NONE,
            sortOptions: f = eI,
            installOnDemand: h = !1,
        } = e,
        { commandTypes: g } = t,
        E = s?.toLowerCase(),
        A = E?.split(" "),
        T = o === N.n.ONLY_TEXT,
        y = o !== N.n.DENY ? (0, S.Ez)(g, !0, T) : [],
        v = [],
        b = {
            permissionContext: t,
            query: E,
            splitQuery: A,
            allowEmptySections: c,
            scoreMethod: _,
            installOnDemand: h,
        },
        R = n.result?.sections ?? {},
        O = r.result?.sections ?? {},
        D = new Set();
    if (l) {
        if (t.hasBaseAccessPermissions)
            for (let e in R) {
                let t = R[e];
                (null == u || t.descriptor.id === u) && D.add(e);
            }
        for (let e in O) {
            let t = O[e];
            (null == u || t.descriptor.id === u) && D.add(e);
        }
    }
    let L = new Map();
    for (let [e, t] of i)
        if (null == u || e === u) {
            let e = t.result?.sections;
            if (null != e) for (let t of Object.keys(e)) D.add(t), L.set(t, e[t]);
        }
    for (let e of Array.from(D)) {
        let t,
            n,
            r = R[e],
            i = O[e],
            s = L.get(e),
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
        let u = eS(t, n, o, l, b);
        null != u && v.push(u);
    }
    if (
        (f.applications.useFrecency && p.bW.loadIfNecessary(),
        v.sort((e, t) => {
            if (f.applications.useScore && _ === N.M.APPLICATION_ONLY) {
                let n = e.data[0]?.score ?? Number.MAX_VALUE,
                    r = t.data[0]?.score ?? Number.MAX_VALUE;
                if (n !== r) return n - r;
            }
            if (f.applications.useFrecency) {
                let n = d.A.getScoreWithoutLoadingLatest(e.section.id),
                    r = d.A.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eP(e.section.name, t.section.name);
        }),
        y.length > 0 || !0 === c)
    ) {
        let e = eS(S.gZ[w.Ik.BUILT_IN], y, !0, !0, b);
        null != e && v.push(e);
    }
    let x = v.flatMap((e) => e.data.map((t) => ({ ...t, section: e.section })));
    if (_ === N.M.COMMAND_ONLY || _ === N.M.COMMAND_OR_APPLICATION) {
        let e = t.context,
            n = I.A.getGuild(t?.context?.guild_id);
        f.commands.useFrecency && p.bW.loadIfNecessary();
        let r = null != e ? { channel: e, guild: n } : void 0;
        x.sort((e, t) => {
            if (f.commands.useScore) {
                let n = e.score ?? 0,
                    r = t.score ?? 0;
                if (n !== r) return n - r;
            }
            if (f.commands.useFrecency) {
                let n = C.Ay.getScoreWithoutLoadingLatest(r, e),
                    i = C.Ay.getScoreWithoutLoadingLatest(r, t);
                if (n !== i) return i - n;
            }
            return eP(e.displayName, t.displayName);
        });
    }
    return {
        commands: x,
        descriptors: v.map((e) => e.section),
        sectionedCommands: v,
        loading:
            n?.fetchState.fetching === !0 ||
            r?.fetchState.fetching === !0 ||
            (null != u && i.get(u)?.fetchState.fetching === !0),
    };
}
function eS(e, t, n, r, i) {
    let a,
        {
            query: s,
            splitQuery: o,
            allowEmptySections: l,
            scoreMethod: u,
            permissionContext: c,
            installOnDemand: d,
        } = i,
        { context: _, userId: f, roleIds: h, isImpersonating: p } = c,
        g = _?.guild_id != null ? L.we(e.permissions, _.guild_id, f, h, p) : null,
        E = _?.guild_id != null ? L._W(e.permissions, _, _.guild_id) : null,
        A = [];
    for (let i of t)
        L.zl(i, c, {
            applicationAllowedForUser: g,
            applicationAllowedForChannel: E,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d,
        }) === L.CA.ALLOWED && A.push(i);
    return 0 !== (a = u !== N.M.NONE && null != s && null != o ? ew(s, o, A, e, u) : A).length || l
        ? ((u === N.M.NONE || u === N.M.APPLICATION_ONLY) && a.sort((e, t) => eP(e.displayName, t.displayName)),
          { section: e, data: a })
        : null;
}
function ev(e) {
    return e?.guild_id != null || (e.type === x.rbe.DM && T.default.getUser(e.getRecipientId())?.bot === !0);
}
function eC(e) {
    return (
        !!eb(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function eb(e) {
    return e.result?.version !== e.serverVersion;
}
function eN(e) {
    return { description: e.description, icon: e.icon, id: e.id, name: e.name, bot: e.bot, flags: e.flags };
}
function eR(e, t) {
    let n = {
        ...e,
        description: e.description_default ?? e.description ?? "",
        dm_permission: e.dm_permission,
        name: e.name_default ?? e.name,
        options: e.options?.map(eO) ?? [],
        permissions: null != e.permissions ? eL(e.permissions, t) : void 0,
    };
    return (
        e.description !== e.description_default && (n.description_localized = e.description),
        e.name !== e.name_default && (n.name_localized = e.name),
        n
    );
}
function eO(e) {
    let t = {
        ...e,
        choices: e.choices?.map(eD),
        description: e.description_default ?? e.description,
        name: e.name_default ?? e.name,
        options: e.options?.map(eO),
    };
    return (
        e.description !== e.description_default && (t.description_localized = e.description),
        e.name !== e.name_default && (t.name_localized = e.name),
        t
    );
}
function eD(e) {
    let t = { ...e, name: e.name_default ?? e.name };
    return e.name !== e.name_default && (t.name_localized = e.name), t;
}
function eL(e, t) {
    let n = [];
    if ((null != e.user && n.push({ type: R.RA.USER, id: t, permission: e.user }), null != e.channels))
        for (let [t, r] of Object.entries(e.channels)) n.push({ type: R.RA.CHANNEL, id: t, permission: r });
    if (null != e.roles) for (let [t, r] of Object.entries(e.roles)) n.push({ type: R.RA.ROLE, id: t, permission: r });
    return n;
}
function ew(e, t, n, r, i) {
    let a,
        s = [];
    if (i === N.M.APPLICATION_ONLY || i === N.M.COMMAND_OR_APPLICATION) {
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
        (i === N.M.COMMAND_ONLY || i === N.M.COMMAND_OR_APPLICATION) && (n = ex(t, e, o, l)),
            (void 0 === n || (void 0 !== a && a < n)) && (n = a),
            void 0 !== n && s.push({ ...t, score: n });
    }
    return s;
}
function ex(e, t, n, r) {
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
function eP(e, t) {
    return ed.collator.compare(e, t);
}
function eM(e, t) {
    return eP(e, t);
}
function ek(e, t) {
    let n, r;
    if (t === w.Ik.BUILT_IN)
        return {
            descriptor: S.gZ[w.Ik.BUILT_IN],
            sectionCommands: (0, S.Ez)([c.kc.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0,
        };
    let i = ed.getContextState(e),
        a = ed.getUserState(),
        s = i.result?.sections ?? {},
        o = a.result?.sections ?? {},
        l = s[t],
        u = o[t],
        d = ed.getApplicationState(t).result?.sections?.[t];
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
