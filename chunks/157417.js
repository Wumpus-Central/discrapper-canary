n.d(t, { findMatchingAutocompleteType: () => tI, getOptions: () => tA, findCommandOptionAutocompleteType: () => tN });
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    s = n(168186),
    o = n(408018),
    u = n(189551),
    a = n(597184),
    m = n(627968),
    c = n(64700),
    d = n(123292),
    p = n(192308),
    y = n(721768),
    h = n(917012),
    g = n(264322),
    A = n(842209),
    M = n(210978),
    I = n(861382),
    N = n(392054),
    E = n(664929),
    S = n(659280),
    C = n(576705),
    f = n(257120),
    T = n(148355),
    D = n(375708);
function O(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: l,
            getQuery: i,
            headerClassName: r,
            headerTrailingContent: s,
        } = e,
        o = l.length > 0 ? D.intl.formatToPlainString(t, { prefix: i(l) }) : n;
    return (0, m.jsx)(S.Ay.Title, { className: r, title: o, children: s }, `autocomplete-title-${o}`);
}
function _(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: l,
        onHover: i,
        onClick: r,
        titleWithQuery: s,
        titleWithoutQuery: o,
        Component: u,
        getProps: a,
        getQuery: d,
        key: p,
        indexOffset: y = 0,
        headerClassName: h,
        headerTrailingContent: g,
        footer: A,
    } = e;
    if (null == A && (null == l || 0 === l.length)) return null;
    let M = l?.map((e, t) => {
        let l = t + y,
            s = a(e, l);
        return (0, c.createElement)(u, { onClick: r, onHover: i, selected: n === l, index: l, ...s, key: s.key });
    });
    return (0, m.jsxs)(
        c.Fragment,
        {
            children: [
                null != s && null != o
                    ? O({
                          titleWithQuery: s,
                          titleWithoutQuery: o,
                          query: t,
                          getQuery: d,
                          headerClassName: h,
                          headerTrailingContent: g,
                      })
                    : null,
                M,
                A,
            ],
        },
        p,
    );
}
var L = n(827669),
    R = n(73510),
    k = n(905636);
let x = { results: { entries: [] } };
function Y() {
    (0, p.openModalLazy)(async () => {
        let { default: e } = await n.e("52855").then(n.bind(n, 563478));
        return (t) => (0, m.jsx)(e, { ...t });
    });
}
let q = {
    sentinel: "/",
    stores: [I.A, g.Ay, C.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED && null == I.A.getActiveCommand(e.id) && (l || i.commands !== a.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, l, i) {
        if (0 === n.length && l.commands !== a.Ze.OLD_BUILT_INS) return x;
        if (l.commands === a.Ze.OLD_BUILT_INS) {
            let l = (0, h.Ez)([r.kc.CHAT], !1, !1),
                i = RegExp(`^${f.A.escape(n)}`, "i"),
                o = (0, s.PV)(l, i, { channel: e, guild: t }, 20),
                u = h.gZ[R.Ik.BUILT_IN];
            return 0 === o.length ? x : { results: { entries: o.map((e) => ({ command: e, section: u })) } };
        }
        let o = (0, E.Yn)(e, n),
            { commands: u, sections: m } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: o.text },
                { limit: 20, placeholderCount: 3, scoreMethod: M.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == u) return x;
        let c = u;
        if (o.hasSpaceTerminator) {
            let e = o.text.trim(),
                t = e + " ";
            c = c.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === c.length
            ? x
            : {
                  results: {
                      entries: c
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: m?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
                results: { entries: t },
                selectedIndex: n,
                channel: l,
                query: i,
                options: r,
                onHover: s,
                onClick: o,
            } = e,
            u = (0, E.Yn)(l, i),
            c = r.commands === a.Ze.OLD_BUILT_INS;
        return _({
            query: u.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: o,
            titleWithQuery: D.t.HFRoZR,
            titleWithoutQuery: D.intl.string(D.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: c ? S.Ay.Command : S.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: l, guildId: l.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: c ? k.Y : null,
            headerTrailingContent: c && (0, m.jsx)(d.Q, { size: "xs", onClick: Y, text: D.intl.string(D.t["8a0P0y"]) }),
        });
    },
    onSelect(e) {
        let {
                results: { entries: t },
                index: n,
                queryText: l,
                options: i,
                channel: r,
                location: s,
                tabOrEnter: o,
            } = e,
            { command: u, section: m } = t[n];
        if (u.inputType === N.y$.PLACEHOLDER) return null;
        if (i.commands === a.Ze.OLD_BUILT_INS) {
            var c;
            i.insertText(((c = u), `/${c.displayName}`));
        } else {
            let e = s;
            null == e && (e = o ? N.Oh.QUERY : N.Oh.DISCOVERY),
                y.Gf({ channelId: r.id, command: u, section: m ?? null, location: e, queryLength: l?.length });
        }
        return { type: a.kc.COMMAND };
    },
};
var B = n(735438),
    v = n.n(B),
    G = n(537652),
    U = n(166862),
    j = n(545152),
    H = n(768038),
    W = n(2717),
    b = n(911385);
let P = { results: { choices: [] } },
    Q = { results: { choices: [], isLoading: !0 } },
    V = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    $ = { results: { choices: [], isError: !0 } },
    w = v().debounce(j.A, R.$r, { leading: !0, trailing: !0 }),
    F = {
        stores: [I.A, U.A],
        showEmpty: !0,
        matches(e, t, n, l, i) {
            let s = I.A.getActiveOption(e.id);
            return (
                i.commands !== a.Ze.DISABLED &&
                null != s &&
                (s.type === r.n4.BOOLEAN || !!s?.autocomplete || (s?.choices != null && s.choices.length > 0))
            );
        },
        queryResults(e, t, n, l, i) {
            let s = I.A.getActiveOption(e.id);
            if (null == s) return P;
            if (s.autocomplete) {
                if (
                    (i &&
                        w({
                            command: I.A.getActiveCommand(e.id),
                            optionValues: l.getCommandOptionValues(),
                            context: { channel: e, guild: t, autocomplete: { name: s.name, query: n } },
                        }),
                    U.A.getLastErrored(e.id))
                )
                    return $;
                let r = U.A.getAutocompleteChoices(e.id, s.name, n);
                return null == r ? Q : { results: { choices: r } };
            }
            return {
                results: H.Ay.queryChoiceResults({
                    query: n,
                    choices: s.type === r.n4.BOOLEAN ? R.Ss : (s.choices ?? []),
                }),
            };
        },
        renderResults(e) {
            let {
                results: { choices: t, isLoading: n, isError: l },
                selectedIndex: i,
                query: r,
                onHover: s,
                onClick: o,
            } = e;
            return l
                ? (0, m.jsx)(G.A, { message: D.intl.string(D.t.rTAbPn), noResultsImageURL: b, className: W.k })
                : 0 !== t.length || n
                  ? _({
                        query: r,
                        selectedIndex: i,
                        autocompletes: n ? V : t,
                        onHover: s,
                        onClick: o,
                        titleWithQuery: D.t.pg0anB,
                        titleWithoutQuery: D.intl.string(D.t["+1H47t"]),
                        Component: n ? S.Ay.Loading : S.Ay.Generic,
                        getProps: (e, t) => ({ key: t.toString(), text: e.displayName }),
                        getQuery: (e) => e,
                        key: "choice",
                    })
                  : (0, m.jsx)(G.A, { message: D.intl.string(D.t["41014u"]), noResultsImageURL: b, className: W.k });
        },
        onSelect(e) {
            let {
                    results: { choices: t },
                    index: n,
                    options: l,
                } = e,
                i = t[n];
            return l.insertText(i.displayName), { type: a.kc.CHOICE };
        },
    };
n(321073);
let Z = { results: { commandOptions: [] } },
    K = {
        stores: [I.A],
        focusMode: a.e.AUTO_WHEN_FILTERED,
        matches: (e, t, n, l, i) => !(l || null == I.A.getActiveCommand(e.id) || null != I.A.getActiveOption(e.id)),
        queryResults(e, t, n, l, i) {
            let r = I.A.getActiveCommand(e.id);
            if (r?.options == null) return Z;
            let s = I.A.getOptionStates(e.id),
                o = r.options.filter((e) => e.displayName.startsWith(n) && !s[e.name]?.hasValue);
            return 0 === o.length ? Z : { results: { commandOptions: o } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: t },
                    selectedIndex: n,
                    query: l,
                    onHover: i,
                    onClick: r,
                } = e,
                s = [],
                o = [];
            t.forEach((e) => {
                (e.required ? s : o).push(e);
            });
            let u =
                    s.length > 0
                        ? _({
                              query: l,
                              selectedIndex: n,
                              autocompletes: s,
                              onHover: i,
                              onClick: r,
                              titleWithQuery: D.t["iO/jnA"],
                              titleWithoutQuery: D.intl.string(D.t["7II2G3"]),
                              Component: S.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "required-options",
                          })
                        : null,
                a =
                    o.length > 0
                        ? _({
                              query: l,
                              selectedIndex: n,
                              autocompletes: o,
                              onHover: i,
                              onClick: r,
                              titleWithQuery: D.t.pg0anB,
                              titleWithoutQuery:
                                  s.length > 0 ? D.intl.string(D.t.TpDXm4) : D.intl.string(D.t["+1H47t"]),
                              Component: S.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "optional-options",
                              indexOffset: s.length,
                          })
                        : null;
            return (0, m.jsxs)(m.Fragment, { children: [u, a] });
        },
        onSelect(e) {
            var t;
            let {
                    results: { commandOptions: n },
                    index: l,
                    options: i,
                } = e,
                r = n[l];
            return i.insertText(((t = r), `${t.displayName}:`)), { type: a.kc.COMMAND_OPTION };
        },
    };
var J = n(952818),
    z = n(243264),
    X = n(929396),
    ee = n(111956),
    et = n.n(ee),
    en = n(22574),
    el = n(471677);
let ei = et()(
    (e) => {
        el.YK.fetchMany([e]);
    },
    el.fo,
    { leading: !0, maxWait: el.Mg },
);
function er(e, t) {
    let { enabled: n } = en.A.getConfig({ location: t });
    if (!n) return null;
    let l = (0, X.C7)(e);
    return null == l || (ei(l), z.A.didFetchFail(l)) ? null : (z.A.getClosestResults(l) ?? []);
}
var es = n(760751);
let eo = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [es.A, J.Ay, z.A],
    matches: (e, t, n, l, i) => !0,
    queryResults: (e, t, n) => ({
        results: { games: er(n, "GameMentionAutocompletes") ?? H.Ay.queryGames(n).map(X.Sj) },
    }),
    renderResults(e) {
        let {
            results: { games: t },
            selectedIndex: n,
            query: l,
            onHover: i,
            onClick: r,
        } = e;
        if (0 === t.length) return null;
        let s = t.map((e, t) =>
                (0, m.jsx)(S.Ay.Game, { onClick: r, onHover: i, selected: n === t, index: t, game: e }, e.id),
            ),
            o = D.t["/U2VW+"],
            u = D.intl.string(D.t.URyqtP);
        return (0, m.jsxs)(
            c.Fragment,
            { children: [O({ titleWithQuery: o, titleWithoutQuery: u, query: l, getQuery: eu }), s] },
            "mentions",
        );
    },
    onSelect(e) {
        let {
                results: { games: t },
                index: n,
                options: l,
            } = e,
            i = t[n];
        return (
            l.addMentionGame({ id: i.id, name: i.name, icon_hash: i.icon_hash }),
            l.replaceInlineInput("gameMentionInput", eu(i.name), (0, L.K)(i.id)),
            { type: a.kc.GAME_MENTION, metadata: { gameId: i.id } }
        );
    },
};
function eu(e) {
    return `@${e}`;
}
n(667532);
var ea = n(478437),
    em = n(115718),
    ec = n(47167),
    ed = n(734057),
    ep = n(808728),
    ey = n(994500),
    eh = n(287809),
    eg = n(746080),
    eA = n(926972),
    eM = n(937862),
    eI = n(361670),
    eN = n(631576),
    eE = n(750385),
    eS = n(194004),
    eC = n(71393),
    ef = n(174459),
    eT = n(652215),
    eD = n(111995);
function eO(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let e_ = {
    sentinel: ":",
    stores: [eE.A],
    matches: (e, t, n, l, i) => n.length > 1,
    queryResults(e, t, n, l, i) {
        let r = l.allowSoundmoji && (0, eA.AA)({ location: "queryResults" }),
            s = l.allowStickers || r ? 0 : 40,
            o = eT.rs7 + s,
            {
                emojis: { unlocked: u },
            } = H.Ay.queryEmojiResults({ query: n, channel: e, intention: l.emojiIntention, maxCount: o });
        "-" === n[0] && (u = u.filter((e) => e.names?.includes(n)));
        let a = [];
        if (l.allowStickers) {
            (0, eN.YB)();
            let t = H.Ay.queryStickers([n], !0, [e, (e, t) => t === eI.Ux.SENDABLE]),
                l = Math.max(4, 8 - u.length);
            (a = t.slice(0, l)), "-" === n[0] && (a = t.filter((e) => e.sticker.name === n));
        }
        let m = [];
        r &&
            ((m = H.Ay.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, 4)),
            "-" === n[0] && (m = m.filter((e) => e.sound.name === n)));
        let c = u.slice(0, Math.max(6, o - a.length - m.length));
        return {
            results: { emojis: c, stickers: a, soundmoji: m },
            metadata: { numEmojiResults: c.length, numStickerResults: a.length, numSoundmojiResults: m.length },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: l },
                selectedIndex: i,
                query: r,
                onHover: s,
                onClick: o,
            } = e,
            u = t.length > 0,
            a = n.length > 0;
        return (0, m.jsxs)(m.Fragment, {
            children: [
                _({
                    query: r,
                    selectedIndex: i,
                    autocompletes: t,
                    onHover: s,
                    onClick: o,
                    titleWithQuery: D.t.ksAVYt,
                    titleWithoutQuery: D.intl.string(D.t.sMOuuS),
                    Component: S.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? eC.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                u && a && (0, m.jsx)(S.Ay.Divider, { className: eD.y }),
                _({
                    query: r,
                    selectedIndex: i,
                    autocompletes: n,
                    onHover: s,
                    onClick: o,
                    titleWithQuery: D.t.uferGG,
                    titleWithoutQuery: D.intl.string(D.t["fT+Yjp"]),
                    Component: S.Ay.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: eO,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: u ? eD._ : void 0,
                }),
                (u || a) && l.length > 0 && (0, m.jsx)(S.Ay.Divider, { className: eD.y }),
                _({
                    query: r,
                    selectedIndex: i,
                    autocompletes: l,
                    onHover: s,
                    onClick: o,
                    titleWithQuery: D.t["0cKBGM"],
                    titleWithoutQuery: D.intl.string(D.t.EHlAMc),
                    Component: S.Ay.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return { sound: t, key: t.soundId };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: u || a ? eD._ : void 0,
                }),
            ],
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, soundmoji: n, stickers: l },
            index: i,
            options: r,
            channel: s,
        } = e;
        if (i < t.length) {
            var o, u;
            let e,
                n = t[i];
            return (
                r.insertText(
                    ((o = n), `:${o.name}:`),
                    ((e = (u = n).animated ? "a" : ""),
                    u.managed || null == u.id ? `:${u.name}:` : `<${e}:${u.originalName ?? u.name}:${u.id}>`),
                ),
                {
                    type: a.kc.EMOJI,
                    metadata: {
                        emojiId: n.id,
                        numEmojiResults: t.length,
                        numStickerResults: l.length,
                        expressionName: n.name,
                        isCustom: null != n.id,
                        isAnimated: n.animated,
                    },
                }
            );
        }
        if ((i -= t.length) < l.length) {
            let e = l[i];
            return (
                r.insertText(""),
                r.sendSticker(e.sticker, eS.D6.AUTOCOMPLETE),
                {
                    type: a.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: l.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((i -= l.length) < n.length) {
            let e = n[i];
            return (
                r.insertText((0, eM.A)(e.sound.guildId, e.sound.soundId)),
                ef.default.track(eT.HAw.SOUNDMOJI_SELECT, {
                    channel_id: s.id,
                    guild_id: s.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                { type: a.kc.SOUNDMOJI, metadata: { numEmojiResults: t.length, numStickerResults: l.length } }
            );
        }
        return { type: null };
    },
};
var eL = n(289873),
    eR = n(228366),
    ek = n(636537),
    ex = n(17928);
let eY = {},
    eq = { integration: "", query: "" };
class eB extends ex.Ay.Store {
    static displayName = "IntegrationQueryStore";
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = eY[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return eq;
    }
}
let ev = new eB(eR.h, {
        INTEGRATION_QUERY: function (e) {
            let { integration: t, query: n } = e;
            (eY[t] = eY[t] ?? {}), (eY[t][n] = { loading: !0, results: [] });
        },
        INTEGRATION_QUERY_SUCCESS: function (e) {
            let { integration: t, query: n, results: l } = e;
            (eY[t][n] = { loading: !1, results: l.map((e) => ({ type: eT.Z86[t].type, meta: e })) }),
                (eq = { query: n, integration: t });
        },
        INTEGRATION_QUERY_FAILURE: function (e) {
            let { integration: t, query: n } = e;
            delete eY[t][n];
        },
    }),
    eG = {
        search(e, t) {
            null == ev.getResults(e, t) &&
                (eR.h.dispatch({ type: "INTEGRATION_QUERY", integration: e, query: t }),
                ek.Bo.get({
                    url: eT.Rsh.INTEGRATION_SEARCH("tenor"),
                    query: { q: t },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (n) => {
                        eR.h.dispatch({ type: "INTEGRATION_QUERY_SUCCESS", integration: e, query: t, results: n.body });
                    },
                    () => eR.h.dispatch({ type: "INTEGRATION_QUERY_FAILURE", integration: e, query: t }),
                ));
        },
    };
var eU = n(95561),
    ej = n(235986),
    eH = n(331691);
let eW = { results: { command: null, integrations: [], isLoading: !1 } };
function eb(e, t, n) {
    let l;
    return (
        n.commands === a.Ze.OLD_BUILT_INS
            ? ((l = t.split(" ")[0].substring(1)), (t = t.substring((l.length ?? 0) + 1)))
            : (l = I.A.getActiveCommand(e.id)?.untranslatedName),
        { command: l, query: t.trim() }
    );
}
let eP = {
    stores: [I.A, ev],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        (i.commands === a.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif") || n.startsWith("/tenor")
            : I.A.getActiveCommand(e.id)?.integrationType === eT.p_j.GIF && I.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, l, i) {
        let { command: r, query: s } = eb(e, n, l);
        if (null == r) return eW;
        let o = v().findKey(eT.Z86, (e) => e.command === r);
        i && null != o && s.length > 0 && eG.search(o, s);
        let u = ev.getResults(o, s);
        return null == u ? eW : { results: { command: r, integrations: u.results, isLoading: u.loading } };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: l,
                channel: i,
                query: r,
                options: s,
                onHover: o,
                onClick: u,
            } = e,
            { command: d, query: p } = eb(i, r, s);
        if (null == d || 0 === p.length) return null;
        if (n) return (0, m.jsx)(eL.y, { className: eH.u1, type: eL.y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === eT.p_j.GIF)
                        return (
                            (e = !0),
                            (0, m.jsx)(
                                S.Ay.GIFIntegration,
                                {
                                    className: eH.ho,
                                    onClick: u,
                                    onHover: o,
                                    selected: l === n,
                                    index: n,
                                    width: t.meta.width ?? 0,
                                    height: t.meta.height ?? 0,
                                    src: t.meta.src ?? "",
                                    url: t.meta.url,
                                },
                                `${t.meta.url}${t.meta.src}`,
                            )
                        );
                }),
                r = s.commands === a.Ze.OLD_BUILT_INS ? d : (I.A.getActiveCommand(i.id)?.integrationTitle ?? d),
                y =
                    p.length > 0 && null != r
                        ? D.intl.format(D.t["3njXz/"], { query: p, command: r })
                        : null != r
                          ? r
                          : d;
            return (0, m.jsxs)(
                c.Fragment,
                {
                    children: [
                        (0, m.jsx)(S.Ay.Title, { title: y }),
                        e ? (0, m.jsx)(ej.A, { className: eH.os, children: n }) : n,
                    ],
                },
                "gifs",
            );
        }
    },
    onSelect(e) {
        let {
            results: { command: t, integrations: n },
            index: l,
            type: i,
            options: r,
            channel: s,
            guild: o,
        } = e;
        if (null == t) return { type: null };
        let u = n[l];
        if (
            (i === a.lg.INSERT ? r.replaceText(u.meta.url) : r.sendMessage(u.meta.url),
            eU.Ay.trackWithMetadata(eT.HAw.SEARCH_RESULT_SELECTED, {
                search_type: eT.I4_.GIF,
                index_num: l,
                source_object: `/${t}`,
            }),
            r.commands !== a.Ze.OLD_BUILT_INS)
        ) {
            let e = I.A.getActiveCommand(s.id);
            e?.inputType === N.y$.BUILT_IN_INTEGRATION &&
                (eR.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: o },
                    command: e,
                    commandOrigin: N.iw.CHAT,
                }),
                eU.Ay.trackWithMetadata(eT.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: I.A.getSource(s.id),
                }));
        }
        return { type: a.kc.GIF };
    },
};
var eQ = n(885386),
    eV = n(562153);
let e$ = /^<@!?(\d+)>/u;
function ew(e) {
    let t = e$.exec(e);
    if (null != t) {
        let n = t[1],
            l = eh.default.getUser(n);
        return null != l && l.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: l } : null;
    }
    return null;
}
let eF = {
    ...q,
    sentinel: void 0,
    focusMode: a.e.MANUAL,
    matches(e, t, n, l, i) {
        if (i.commands === a.Ze.DISABLED || i.commands === a.Ze.OLD_BUILT_INS || n.length < 2 || !eQ._3.getSetting())
            return !1;
        let r = ew(n);
        return null != r && r.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, l, i) {
        if (!eQ._3.getSetting()) return x;
        let s = ew(n);
        if (null == s) return x;
        let o = (0, E.Yn)(e, s.cleanedQuery),
            { commands: u, sections: a } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: o.text },
                { limit: 20, placeholderCount: 3, scoreMethod: M.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == u) return x;
        let m = u.filter((e) => e.section.botId === s.user.id);
        if (o.hasSpaceTerminator) {
            let e = o.text.trim(),
                t = e + " ";
            m = m.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === m.length
            ? x
            : {
                  results: {
                      entries: m
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: a?.find((t) => t.id === e.applicationId) })),
                  },
              };
    },
    renderResults(e) {
        let {
            results: { entries: t },
            selectedIndex: n,
            guild: l,
            channel: i,
            query: r,
            options: s,
            onHover: o,
            onClick: u,
        } = e;
        return _({
            query: r,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: u,
            titleWithQuery: D.t.HFRoZR,
            titleWithoutQuery: D.intl.string(D.t["0hKkS+"]),
            Component: s.commands === a.Ze.OLD_BUILT_INS ? S.Ay.Command : S.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: i, guildId: i.guild_id, showImage: !0, section: n };
            },
            getQuery: (e) => {
                let t = ew(e);
                if ("mention" !== t.type) return e;
                let n = eV.Ay.getName(l?.id, i.id, t.user);
                return e.replace(e$, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: l, options: i, channel: r, guild: s } = e,
            o = q.onSelect({
                results: t,
                index: n,
                type: l,
                options: i,
                channel: r,
                guild: s,
                location: N.Oh.SUGGESTION,
            });
        return null == o ? null : { ...o, type: a.kc.COMMAND_SUGGESTION };
    },
};
var eZ = n(352505),
    eK = n(812993),
    eJ = n(661531);
function ez(e) {
    let { onClick: t, onHover: n, selected: l, index: i, text: r, description: s } = e,
        { showNewTag: o } = eZ.r.useConfig({ location: "GameMentionGlobalRow" }),
        u = o ? (0, m.jsx)(eK.Lp, { text: D.intl.string(D.t.y2b7CA), color: eJ.A.colors.BACKGROUND_BRAND.css }) : null;
    return (0, m.jsx)(S.Ay.Generic, {
        onClick: t,
        onHover: n,
        selected: l,
        index: i,
        text: r,
        description: s,
        badge: u,
        "aria-label": r,
    });
}
var eX = n(696451),
    e0 = n(427262);
let e1 = {
    sentinel: "@",
    stores: [eX.Ay, es.A, J.Ay, z.A],
    matches: (e, t, n, l, i) =>
        i.mentions.user !== a.Vf.DENY || i.mentions.role !== a.eP.DENY || i.mentions.global !== a.VN.DENY,
    queryResults(e, t, n, l, i) {
        let r = l.mentions.global === a.VN.ALLOW_EVERYONE || l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            s = l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            o = l.mentions.user !== a.Vf.DENY,
            u = l.mentions.role !== a.eP.DENY,
            m = l.mentions.user === a.Vf.ALLOW_GUILD,
            c = l.mentions.role === a.eP.ALLOW_ALL,
            {
                users: d,
                globals: p,
                roles: y,
            } = H.Ay.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: r,
                canMentionHere: s,
                canMentionUsers: o,
                canMentionRoles: u,
                canMentionOtherGlobals: l.mentions.otherGlobals,
                includeAllGuildUsers: m,
                includeNonMentionableRoles: c,
                request: i,
            }),
            h = [],
            g = eZ.r.getConfig({ location: "mention autocomplete" });
        return (
            g.enabled &&
                g.combineMentionAutocomplete &&
                l.mentions.otherGlobals &&
                n.length > 0 &&
                (h = (er(n, "MentionAutocompletes") ?? H.Ay.queryGames(n).map(X.Sj)).slice(0, 3)),
            { results: { users: d, globals: p, roles: y, games: h } }
        );
    },
    renderResults(e) {
        let {
                results: { users: t, globals: n, roles: l, games: i },
                selectedIndex: r,
                channel: s,
                query: o,
                options: u,
                onHover: d,
                onClick: p,
            } = e,
            y = t.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.User,
                    {
                        guildId: s.guild_id,
                        onClick: p,
                        onHover: d,
                        selected: r === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: u.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            h = n.map((e, n) => {
                let l = {
                    onClick: p,
                    onHover: d,
                    selected: r === n + t.length,
                    index: t.length + n,
                    text: e.text,
                    description: u.hideMentionDescription ? null : e.description,
                };
                return "gameMentionInput" === e.inlineAutocompleteType
                    ? (0, c.createElement)(ez, { ...l, key: e.text })
                    : (0, c.createElement)(S.Ay.Generic, { ...l, key: e.text, "aria-label": e.text });
            }),
            g = l.map((e, l) =>
                (0, m.jsx)(
                    S.Ay.Role,
                    {
                        onClick: p,
                        onHover: d,
                        selected: r === l + t.length + n.length,
                        index: t.length + n.length + l,
                        role: e,
                        hideDescription: u.hideMentionDescription,
                        guildId: s.guild_id,
                    },
                    e.id,
                ),
            ),
            A = t.length + n.length + l.length,
            M = i.map((e, t) =>
                (0, m.jsx)(S.Ay.Game, { onClick: p, onHover: d, selected: r === A + t, index: A + t, game: e }, e.id),
            ),
            I = u.mentions.user === a.Vf.DENY,
            N = t.length > 0 || n.length > 0 || l.length > 0,
            E = (e) => `@${e}`,
            C = I
                ? { titleWithQuery: D.t.MLiD1e, titleWithoutQuery: D.intl.string(D.t["LPJmL/"]) }
                : { titleWithQuery: D.t.rPNimn, titleWithoutQuery: D.intl.string(D.t["9Oq93m"]) },
            f = { titleWithQuery: D.t["/U2VW+"], titleWithoutQuery: D.intl.string(D.t.URyqtP) };
        return (0, m.jsxs)(
            c.Fragment,
            {
                children: [
                    N
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  O({ ...C, query: o, getQuery: E }),
                                  y,
                                  n.length > 0 && t.length > 0 ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                                  h,
                                  l.length > 0 && (t.length > 0 || n.length > 0) ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                                  g,
                              ],
                          })
                        : null,
                    i.length > 0
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  N ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                                  O({ ...f, query: o, getQuery: E }),
                                  M,
                              ],
                          })
                        : null,
                ],
            },
            "mentions",
        );
    },
    onSelect(e) {
        var t, n, l, i, r, s;
        let {
                results: { users: o, globals: u, roles: m, games: c },
                index: d,
                options: p,
                channel: y,
            } = e,
            h = o[d],
            g = u[d - o.length],
            A = m[d - o.length - u.length],
            M = c[d - o.length - u.length - m.length],
            I = a.kc.MENTION;
        if (null != h) {
            p.insertText(
                ((t = h.user),
                (n = y),
                (l = p.hidePersonalInformation),
                H.Ay.hasSameRoleAsUsername(n, t)
                    ? `@${t.tag}`
                    : `@${e0.Ay.getUserTag(t, { identifiable: l ? "never" : "always" })}`),
                ((i = h.user), `<@${i.id}>`),
            );
        } else if (null != g)
            if (null != g.inlineAutocompleteType)
                switch ((p.insertAutocompleteInput(g.inlineAutocompleteType), g.inlineAutocompleteType)) {
                    case "gameMentionInput":
                        I = a.kc.GAME_MENTION;
                        break;
                    case "timestampMentionInput":
                        I = a.kc.TIMESTAMP;
                }
            else p.insertText(g.text);
        else if (null != A) {
            p.insertText(((r = A), `@${r.name}`), ((s = A), `<@&${s.id}>`));
        } else if (null != M)
            return (
                p.addMentionGame({ id: M.id, name: M.name, icon_hash: M.icon_hash }),
                p.insertText(`@${M.name}`, (0, L.K)(M.id)),
                { type: a.kc.GAME_MENTION, metadata: { gameId: M.id } }
            );
        return { type: I };
    },
};
var e7 = n(307731);
let e2 = { results: { command: null, stickers: [] } };
function e6(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let e4 = {
    stores: [eE.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        i.commands !== a.Ze.OLD_BUILT_INS &&
        I.A.getActiveCommand(e.id)?.integrationType === eT.p_j.STICKER &&
        I.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, l) {
        let i = I.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == i) return e2;
        let r = [];
        return (
            (0, eN.YB)(),
            {
                results: {
                    command: i,
                    stickers: (r = H.Ay.queryStickers([n], !0, [e, (e, t) => t === eI.Ux.SENDABLE]).slice(0, 8)),
                },
                metadata: { numStickerResults: r.length },
            }
        );
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: l,
            onHover: i,
            onClick: r,
        } = e;
        return (0, m.jsx)(m.Fragment, {
            children: _({
                query: l,
                selectedIndex: n,
                autocompletes: t,
                onHover: i,
                onClick: r,
                titleWithQuery: D.t.uferGG,
                titleWithoutQuery: D.intl.string(D.t["fT+Yjp"]),
                Component: S.Ay.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: e6,
                        queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                        sticker: n,
                        key: n.id,
                    };
                },
                getQuery: (e) => e,
                key: "stickers",
            }),
        });
    },
    onSelect(e) {
        let t,
            {
                results: { command: n, stickers: l },
                index: i,
                options: r,
                channel: s,
                guild: o,
                queryText: u,
            } = e;
        if (null == n || i >= l.length) return { type: null };
        let m = I.A.getActiveCommand(s.id);
        m?.inputType === N.y$.BUILT_IN_INTEGRATION &&
            (eR.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: s, guild: o },
                command: m,
                commandOrigin: N.iw.CHAT,
            }),
            eU.Ay.trackWithMetadata(eT.HAw.APPLICATION_COMMAND_USED, {
                command_id: m.id,
                application_id: m.applicationId,
                command_type: m.type,
                source: I.A.getSource(s.id),
            }));
        let c = l[i];
        return (
            r.sendSticker(c.sticker, eS.D6.BUILT_IN_INTEGRATION),
            c.sticker.type === eS.NL.GUILD && (t = c.sticker.guild_id),
            eU.Ay.trackWithMetadata(eT.HAw.SEARCH_RESULT_SELECTED, {
                load_id: c.sticker.id,
                search_type: eT.I4_.STICKER,
                source_object: `/${n}`,
                total_results: l.length,
                index_num: i,
                expression_guild_id: t,
                sticker_id: c.sticker.id,
                query: u,
            }),
            { type: a.kc.STICKER, metadata: { numStickerResults: l.length, stickerId: c.sticker.id } }
        );
    },
};
var e8 = n(59892),
    e5 = n(186693),
    e3 = n(262234),
    e9 = n(717470),
    te = n(977936),
    tt = n(849455),
    tn = n(288116),
    tl = n(406002),
    ti = n(381349),
    tr = n(860323),
    ts = n(670441),
    to = n(994372),
    tu = n(576497),
    ta = n(989349),
    tm = n.n(ta),
    tc = n(379418),
    td = n(773669);
let tp = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    ty = [
        tm().ISO_8601,
        ...[
            "YYYYMMDD",
            "YYYY-MM-DD",
            "LL",
            "L",
            "MMMM Do YYYY",
            "MMMM Do YY",
            "MMMM Do, YYYY",
            "MMMM Do, YY",
            "MMMM D YYYY",
            "MMMM D YY",
            "MMMM D, YYYY",
            "MMMM D, YY",
            "MMMM Do YYYY",
            "MMMM Do YY",
            "MMMM Do, YYYY",
            "MMMM Do, YY",
            "MMM D YYYY",
            "MMM D YY",
            "MMM D, YYYY",
            "MMM D, YY",
            "MMM Do YYYY",
            "MMM Do YY",
            "MMM Do, YYYY",
            "MMM Do, YY",
            "MMMM D",
            "MMMM Do",
            "MMM D",
            "MMM Do",
            "D MMMM",
            "Do MMMM",
            "D MMM",
            "Do MMM",
            "dddd",
            "ddd",
        ].flatMap((e) => [...tp.map((t) => `${e} ${t}`), ...tp]),
    ],
    th = [
        a.DB.CHOICES,
        a.DB.GAME,
        a.DB.GIFS,
        a.DB.STICKERS,
        a.DB.COMMAND_OPTIONS,
        a.DB.EMOJIS_AND_STICKERS,
        a.DB.REACTIONS,
        a.DB.CHANNELS,
        a.DB.MENTIONS,
        a.DB.COMMANDS,
        a.DB.LEGACY_COMMANDS,
        a.DB.TIMESTAMPS,
    ],
    tg = {
        [a.DB.CHANNELS]: {
            sentinel: "#",
            matches: (e, t, n, l, i) => i.mentions.channel !== a.xS.DENY && !e.isPrivate(),
            queryResults(e, t, n, l, i) {
                let r,
                    s,
                    o = ep.I6;
                return (
                    n.charAt(0) === em.AT.VOICE_CHANNEL && ((o = ep.vM), (n = n.substring(1))),
                    l.forNonStringCommandOption
                        ? (r = H.Ay.queryApplicationCommandChannelResults({
                              query: n,
                              channel: e,
                              channelTypes: l.allowedChannelTypes,
                          }))
                        : ((r = H.Ay.queryChannelResults({ query: n, channel: e, type: o })),
                          null != t &&
                              ((s = H.Ay.queryStaticRouteChannels({ query: n, guild: t })), r.channels.unshift(...s))),
                    { results: r, staticRouteChannels: s }
                );
            },
            renderResults(e) {
                let t,
                    n,
                    {
                        results: { channels: l },
                        selectedIndex: i,
                        query: r,
                        options: s,
                        onHover: o,
                        onClick: u,
                    } = e,
                    a = r.charAt(0) === em.AT.VOICE_CHANNEL;
                return (
                    a
                        ? ((t = D.t["rMUL3+"]), (n = D.intl.string(D.t.CYnO4s)), (r = r.substring(1)))
                        : s.forNonStringCommandOption
                          ? ((t = D.t.upNFT5), (n = D.intl.string(D.t.OGiMXJ)))
                          : ((t = D.t.UhnmJD), (n = D.intl.string(D.t.nIfr0Y))),
                    _({
                        query: r,
                        selectedIndex: i,
                        autocompletes: l,
                        onHover: o,
                        onClick: u,
                        titleWithQuery: t,
                        titleWithoutQuery: n,
                        Component: S.Ay.Channel,
                        getProps: (e) => ({ channel: e, key: e.id, category: ed.A.getChannel(e.parent_id) }),
                        getQuery: (e) => (a ? `#${em.AT.VOICE_CHANNEL}${e}` : `#${e}`),
                        key: "channels",
                    })
                );
            },
            onSelect(e) {
                var t;
                let {
                        results: { channels: n },
                        index: l,
                        options: i,
                    } = e,
                    r = n[l];
                return (
                    i.insertText(
                        (function (e) {
                            switch (e.type) {
                                case ea.r.PUBLIC_THREAD:
                                case ea.r.PRIVATE_THREAD:
                                case ea.r.ANNOUNCEMENT_THREAD:
                                case ea.r.GUILD_VOICE:
                                case ea.r.GUILD_STAGE_VOICE:
                                case ea.r.GUILD_CATEGORY:
                                    return `#"${(0, ec.Eq)((0, ec.m1)(e, eh.default, ey.A))}"`;
                                default:
                                    let t = ep.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                    return `#${null != t ? t.name : ((0, ec.m1))(e, eh.default, ey.A)}`;
                            }
                        })(r),
                        ((t = r), eg.aQ.has(t.id) ? `<id:${t.id}>` : `<#${t.id}>`),
                    ),
                    { type: a.kc.CHANNEL }
                );
            },
        },
        [a.DB.COMMANDS]: q,
        [a.DB.COMMAND_OPTIONS]: K,
        [a.DB.CHOICES]: F,
        [a.DB.EMOJIS_AND_STICKERS]: e_,
        [a.DB.STICKERS]: e4,
        [a.DB.GIFS]: eP,
        [a.DB.LEGACY_COMMANDS]: eF,
        [a.DB.MENTIONS]: e1,
        [a.DB.REACTIONS]: {
            sentinel: "+:",
            matches: (e, t, n, l, i) =>
                l &&
                (i.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
                (C.A.can(eT.xBc.ADD_REACTIONS, e) || e.isPrivate()),
            queryResults(e, t, n, l, i) {
                let { emojis: r } = H.Ay.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: e7.EmojiIntention.REACTION,
                    maxCount: 50,
                });
                return { results: { emojis: r.unlocked } };
            },
            renderResults(e) {
                let {
                    results: { emojis: t },
                    selectedIndex: n,
                    query: l,
                    onHover: i,
                    onClick: r,
                } = e;
                return _({
                    query: l,
                    selectedIndex: n,
                    autocompletes: t,
                    onHover: i,
                    onClick: r,
                    titleWithQuery: D.t.o1Nmpc,
                    titleWithoutQuery: D.intl.string(D.t.sMOuuS),
                    Component: S.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? eC.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `+:${e}`,
                    key: "reactions",
                });
            },
            onSelect(e) {
                var t;
                let {
                        results: { emojis: n },
                        index: l,
                        options: i,
                    } = e,
                    r = n[l];
                return i.sendMessage(((t = r), `+:${t.name}:`)), { type: a.kc.REACTION };
            },
        },
        [a.DB.GAME]: eo,
        [a.DB.TIMESTAMPS]: {
            autocompleteInputElementType: "timestampMentionInput",
            matches: (e, t, n, l, i) => n.length > 1,
            queryResults(e, t, n) {
                let l = tm()(),
                    i = (function () {
                        let e = td.default.locale;
                        if ("en-US" === e) return e8;
                        if ("en-GB" === e) return e8.GB;
                        if ("de" === e) return e5;
                        if ("fr" === e) return e3;
                        if ("ja" === e) return e9;
                        else if ("nl" === e) return te;
                        else if ("ru" === e) return tt;
                        else if ("it" === e) return tn;
                        else if ("uk" === e) return tl;
                        else if ("zh-CN" === e) return ti;
                        else if ("zh-TW" === e) return tr;
                        else if (e.startsWith("sv-")) return ts;
                        else if (e.startsWith("pt-")) return to;
                        else if (e.startsWith("es-")) return tu;
                        else return null;
                    })(),
                    [r] = i?.parse(n, l.toDate()) ?? [void 0],
                    s = r?.start != null && r?.end == null && r.text === n,
                    o = s ? tm()(r.start.date()) : tm()(n, ty, !0),
                    u = [],
                    { format: a } = o.creationData();
                if (
                    ("string" != typeof a && (a = void 0),
                    "" !== n || o.isValid() || ((o = l), (a = "YYYYMMDDHHmmss")),
                    o.isValid() && (s || null != a))
                ) {
                    let e;
                    if (s && !r.start.isCertain("hour")) {
                        let e = 9e5 * Math.round(o.valueOf() / 9e5);
                        o = tm()(e);
                    }
                    let t = s ? r.start.isCertain("weekday") : a?.includes("d"),
                        n = s
                            ? r.start.isCertain("day") || r.start.isCertain("month") || r.start.isCertain("year")
                            : a?.includes("D"),
                        i = s ? r.start.isCertain("year") : a?.includes("Y"),
                        m = s ? r.start.isCertain("second") : a?.includes("s"),
                        c = o.unix().toString(),
                        d = m ? "S" : "s";
                    n || t
                        ? t && !n
                            ? (e = {
                                  periodType: "week",
                                  previousName: D.t["4uTwgO"],
                                  currentName: D.t["6YiNaP"],
                                  nextName: D.t.HE4jqH,
                              })
                            : i ||
                              (e = {
                                  periodType: "year",
                                  previousName: D.t.R7VMEE,
                                  currentName: D.t["U8lK/J"],
                                  nextName: D.t.OppVVE,
                              })
                        : (u.push({
                              mention: { timestamp: c, format: m ? "T" : "t" },
                              description: D.intl.string(D.t.yHv4oJ),
                          }),
                          u.push({}),
                          (e = {
                              periodType: "day",
                              previousName: D.t.ZdDLO0,
                              currentName: D.t.mbs4NX,
                              nextName: D.t["EqnX/z"],
                          }));
                    let {
                        adjustedTimestamp: p,
                        adjustedDescription: y,
                        unadjustedDescription: h,
                    } = (function (e, t, n) {
                        let l, i, r;
                        if (null == n) return {};
                        let s = e.clone();
                        s.subtract(1, n.periodType);
                        let o = t.clone();
                        return (
                            o.add(1, n.periodType),
                            t.isSame(e, n.periodType)
                                ? ((r = D.intl.string(n.currentName)),
                                  t.isSameOrBefore(e) && (i = D.intl.string(n.nextName)))
                                : t.isSame(s, n.periodType) &&
                                  ((r = D.intl.string(n.previousName)), (i = D.intl.string(n.currentName))),
                            null != i && (l = o.unix().toString()),
                            { adjustedTimestamp: l, adjustedDescription: i, unadjustedDescription: r }
                        );
                    })(l, o, e);
                    null != p &&
                        (u.push({ mention: { timestamp: p, format: d }, description: y }),
                        u.push({ mention: { timestamp: p, format: "f" } }),
                        u.push({ mention: { timestamp: p, format: "F" } }),
                        u.push({ mention: { timestamp: p, format: "R" } }),
                        u.push({})),
                        u.push({ mention: { timestamp: c, format: d }, description: h }),
                        u.push({ mention: { timestamp: c, format: "f" } }),
                        u.push({ mention: { timestamp: c, format: "F" } }),
                        u.push({ mention: { timestamp: c, format: "R" } });
                }
                return { results: { mentions: u } };
            },
            renderResults(e) {
                let {
                        results: { mentions: t },
                        selectedIndex: n,
                        query: l,
                        onHover: i,
                        onClick: r,
                    } = e,
                    s = t.map((e, t) => {
                        let { mention: l, description: s } = e;
                        if (void 0 === l) return (0, m.jsx)(S.Ay.Divider, {}, `divider-${t}`);
                        let o = (0, tc.WA)(l);
                        return null == o
                            ? null
                            : (0, m.jsx)(
                                  S.Ay.Timestamp,
                                  { onClick: r, onHover: i, selected: n === t, index: t, timestamp: o, description: s },
                                  `timestamp-${t}`,
                              );
                    }),
                    o = D.t.I4nJDb,
                    u = D.intl.string(D.t.pUP8UM);
                return (0, m.jsxs)(
                    c.Fragment,
                    {
                        children: [
                            O({ titleWithQuery: o, titleWithoutQuery: u, query: l, getQuery: (e) => `${e}` }),
                            s,
                        ],
                    },
                    "timestamp_formats",
                );
            },
            onSelect(e) {
                let {
                        results: { mentions: t },
                        index: n,
                        options: l,
                    } = e,
                    { mention: i } = t[n] ?? {};
                if (null == i) return null;
                let r = (0, tc.tf)(i.timestamp, i.format),
                    s = (0, tc.WA)(i)?.formatted;
                return null == s
                    ? null
                    : (l.replaceInlineInput("timestampMentionInput", s, r), { type: a.kc.TIMESTAMP });
            },
        },
    };
function tA(e) {
    let {
            activeCommandOption: t,
            canMentionUsers: n = !0,
            canMentionRoles: l = !0,
            canMentionChannels: i = !0,
            canMentionEveryone: u,
            canMentionOtherGlobals: m = !0,
            useNewSlashCommands: c,
            canOnlyUseTextCommands: d,
            canSendStickers: p,
            canSendSoundmoji: y,
            hideMentionDescription: h,
            hidePersonalInformation: g,
            type: A,
            emojiIntention: M,
            editorRef: I,
            onSendMessage: N,
            onSendSticker: E,
            setValue: S,
        } = e,
        C = {
            mentions: { channel: a.xS.DENY, global: a.VN.DENY, role: a.eP.DENY, user: a.Vf.DENY, otherGlobals: !1 },
            commands: a.Ze.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === y,
            forNonStringCommandOption: null != t && t.type !== r.n4.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === g,
            chatInputType: A,
            emojiIntention: M,
            sendMessage: N,
            sendSticker: E,
            insertText: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                I.current?.insertAutocomplete(e, t ?? e, n);
            },
            replaceText: (e, t) => {
                S(e, t ?? (0, o.x7)(e));
            },
            insertAutocompleteInput: (e) => {
                I.current?.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                I.current?.replaceInlineAutocompleteInput(e, t, n ?? t);
            },
            addMentionGame: (e) => {
                let t = I.current?.getSlateEditor?.();
                null == t || t.mentionGames.has(e.id) || t.mentionGames.set(e.id, e);
            },
            getCommandOptionValues: () => I.current?.getCommandOptionValues(),
        };
    if (null != t) {
        let e = (0, s.XM)(t);
        e.canMentionChannels && (C.mentions.channel = a.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (C.mentions.global = e.canMentionHere ? a.VN.ALLOW_EVERYONE_OR_HERE : a.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (C.mentions.role = e.canMentionNonMentionableRoles ? a.eP.ALLOW_ALL : a.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (C.mentions.user = e.canMentionAnyGuildUser ? a.Vf.ALLOW_GUILD : a.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (C.mentions.otherGlobals = !0),
            (C.hideMentionDescription = !0);
    } else
        i && (C.mentions.channel = a.xS.ALLOW_SELECTABLE),
            l && (C.mentions.role = a.eP.ALLOW_MENTIONABLE),
            n && (C.mentions.user = a.Vf.ALLOW_CHANNEL),
            u && (C.mentions.global = a.VN.ALLOW_EVERYONE_OR_HERE),
            m && (C.mentions.otherGlobals = !0);
    return (
        A.commands?.enabled &&
            (c ? (C.commands = d ? a.Ze.NEW_TEXT_ONLY : a.Ze.NEW) : (C.commands = a.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (C.allowedChannelTypes = t.channelTypes),
        C
    );
}
function tM(e) {
    let { type: t, channel: n, guild: l, query: i, isAtStart: r, options: s } = e,
        o = tg[t];
    if (null != o.sentinel) {
        if (!i.startsWith(o.sentinel)) return !1;
        i = i.substring(o.sentinel.length);
    }
    return null == o.matches || !!o.matches(n, l, i, r, s);
}
function tI(e) {
    let {
            channel: t,
            guild: n,
            options: l,
            currentWord: r,
            currentWordIsAtStart: s,
            textValue: o,
            optionText: m,
            parentAutocompleteInputType: c,
            parentAutocompleteInputValue: d,
        } = e,
        p = null;
    for (let e of th) {
        let y = tg[e];
        if (null != c) {
            if (y.autocompleteInputElementType === c) {
                i()(null != d, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (p = { type: e, typeInfo: y, query: d });
                break;
            }
            continue;
        }
        if (null == y.autocompleteInputElementType) {
            if (e === a.DB.GIFS || e === a.DB.CHOICES) {
                if (l.commands === a.Ze.OLD_BUILT_INS) {
                    if (tM({ type: e, channel: t, guild: n, query: o, isAtStart: !1, options: l })) {
                        p = { type: e, typeInfo: y, query: o };
                        break;
                    }
                } else if (tM({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.STICKERS) {
                if (tM({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.COMMANDS && l.commands !== a.Ze.OLD_BUILT_INS) {
                if (tM({ type: e, channel: t, guild: n, query: o, isAtStart: !0, options: l })) {
                    p = { type: e, typeInfo: y, query: o.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === a.DB.LEGACY_COMMANDS) {
                if (tM({ type: e, channel: t, guild: n, query: o, isAtStart: s, options: l })) {
                    p = { type: e, typeInfo: y, query: o };
                    break;
                }
            } else if (e === a.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != r && r.length > 0 && (0, u.K)(e7.EmojiInteractionPoint.AutocompleteTyped),
                    null != r && tM({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l }))
                ) {
                    p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != r && tM({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l })) {
                p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == p ? null : ((p.query = p.query.toLocaleLowerCase()), p);
}
function tN(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = a.DB.CHOICES;
    else
        switch (e.type) {
            case r.n4.BOOLEAN:
                n = a.DB.CHOICES;
                break;
            case r.n4.CHANNEL:
                n = a.DB.CHANNELS;
                break;
            case r.n4.ROLE:
            case r.n4.USER:
            case r.n4.MENTIONABLE:
                n = a.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let l = tg[n];
    return { type: n, typeInfo: l, query: t };
}
