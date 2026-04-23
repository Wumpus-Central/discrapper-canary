n.d(t, { findMatchingAutocompleteType: () => tn, getOptions: () => te, findCommandOptionAutocompleteType: () => tl });
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    s = n(168186),
    o = n(408018),
    u = n(189551),
    a = n(374803),
    m = n(627968),
    c = n(64700),
    d = n(123292),
    p = n(192308),
    y = n(721768),
    h = n(827785),
    A = n(264322),
    g = n(842209),
    I = n(210978),
    M = n(861382),
    N = n(392054),
    E = n(649671),
    S = n(659280),
    C = n(576705),
    _ = n(257120),
    T = n(148355),
    D = n(985018);
function f(e) {
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
function O(e) {
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
        headerTrailingContent: A,
        footer: g,
    } = e;
    if (null == g && (null == l || 0 === l.length)) return null;
    let I = l?.map((e, t) => {
        let l = t + y,
            s = a(e, l);
        return (0, c.createElement)(u, { onClick: r, onHover: i, selected: n === l, index: l, ...s, key: s.key });
    });
    return (0, m.jsxs)(
        c.Fragment,
        {
            children: [
                null != s && null != o
                    ? f({
                          titleWithQuery: s,
                          titleWithoutQuery: o,
                          query: t,
                          getQuery: d,
                          headerClassName: h,
                          headerTrailingContent: A,
                      })
                    : null,
                I,
                g,
            ],
        },
        p,
    );
}
n(827669);
var L = n(73510),
    R = n(905636);
let k = { results: { entries: [] } };
function Y() {
    (0, p.openModalLazy)(async () => {
        let { default: e } = await n.e("52855").then(n.bind(n, 563478));
        return (t) => (0, m.jsx)(e, { ...t });
    });
}
let x = {
    sentinel: "/",
    stores: [M.A, A.Ay, C.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED && null == M.A.getActiveCommand(e.id) && (l || i.commands !== a.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, l, i) {
        if (0 === n.length && l.commands !== a.Ze.OLD_BUILT_INS) return k;
        if (l.commands === a.Ze.OLD_BUILT_INS) {
            let l = (0, h.Ez)([r.kc.CHAT], !1, !1),
                i = RegExp(`^${_.A.escape(n)}`, "i"),
                o = (0, s.PV)(l, i, { channel: e, guild: t }, 20),
                u = h.gZ[L.Ik.BUILT_IN];
            return 0 === o.length ? k : { results: { entries: o.map((e) => ({ command: e, section: u })) } };
        }
        let o = (0, E.Yn)(e, n),
            { commands: u, sections: m } = g.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: o.text },
                { limit: 20, placeholderCount: 3, scoreMethod: I.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == u) return k;
        let c = u;
        if (o.hasSpaceTerminator) {
            let e = o.text.trim(),
                t = e + " ";
            c = c.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === c.length
            ? k
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
        return O({
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
            headerClassName: c ? R.Y : null,
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
var q = n(735438),
    B = n.n(q),
    v = n(537652),
    H = n(166862),
    U = n(545152),
    j = n(768038),
    W = n(2717),
    G = n(911385);
let P = { results: { choices: [] } },
    b = { results: { choices: [], isLoading: !0 } },
    Q = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    V = { results: { choices: [], isError: !0 } },
    $ = B().debounce(U.A, L.$r, { leading: !0, trailing: !0 }),
    w = {
        stores: [M.A, H.A],
        showEmpty: !0,
        matches(e, t, n, l, i) {
            let s = M.A.getActiveOption(e.id);
            return (
                i.commands !== a.Ze.DISABLED &&
                null != s &&
                (s.type === r.n4.BOOLEAN || !!s?.autocomplete || (s?.choices != null && s.choices.length > 0))
            );
        },
        queryResults(e, t, n, l, i) {
            let s = M.A.getActiveOption(e.id);
            if (null == s) return P;
            if (s.autocomplete) {
                if (
                    (i &&
                        $({
                            command: M.A.getActiveCommand(e.id),
                            optionValues: l.getCommandOptionValues(),
                            context: { channel: e, guild: t, autocomplete: { name: s.name, query: n } },
                        }),
                    H.A.getLastErrored(e.id))
                )
                    return V;
                let r = H.A.getAutocompleteChoices(e.id, s.name, n);
                return null == r ? b : { results: { choices: r } };
            }
            return {
                results: j.Ay.queryChoiceResults({
                    query: n,
                    choices: s.type === r.n4.BOOLEAN ? L.Ss : (s.choices ?? []),
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
                ? (0, m.jsx)(v.A, { message: D.intl.string(D.t.rTAbPn), noResultsImageURL: G, className: W.k })
                : 0 !== t.length || n
                  ? O({
                        query: r,
                        selectedIndex: i,
                        autocompletes: n ? Q : t,
                        onHover: s,
                        onClick: o,
                        titleWithQuery: D.t.pg0anB,
                        titleWithoutQuery: D.intl.string(D.t["+1H47t"]),
                        Component: n ? S.Ay.Loading : S.Ay.Generic,
                        getProps: (e, t) => ({ key: t.toString(), text: e.displayName }),
                        getQuery: (e) => e,
                        key: "choice",
                    })
                  : (0, m.jsx)(v.A, { message: D.intl.string(D.t["41014u"]), noResultsImageURL: G, className: W.k });
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
    F = {
        stores: [M.A],
        focusMode: a.e.AUTO_WHEN_FILTERED,
        matches: (e, t, n, l, i) => !(l || null == M.A.getActiveCommand(e.id) || null != M.A.getActiveOption(e.id)),
        queryResults(e, t, n, l, i) {
            let r = M.A.getActiveCommand(e.id);
            if (r?.options == null) return Z;
            let s = M.A.getOptionStates(e.id),
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
                        ? O({
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
                        ? O({
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
n(667532);
var K = n(478437),
    J = n(115718),
    z = n(47167),
    X = n(734057),
    ee = n(808728),
    et = n(994500),
    en = n(287809),
    el = n(746080),
    ei = n(704591),
    er = n(937862),
    es = n(361670),
    eo = n(631576),
    eu = n(750385),
    ea = n(194004),
    em = n(71393),
    ec = n(954571),
    ed = n(652215),
    ep = n(111995);
function ey(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let eh = {
    sentinel: ":",
    stores: [eu.A],
    matches: (e, t, n, l, i) => n.length > 1,
    queryResults(e, t, n, l, i) {
        let r = l.allowSoundmoji && (0, ei.AA)({ location: "queryResults" }),
            s = l.allowStickers || r ? 0 : 40,
            o = ed.rs7 + s,
            {
                emojis: { unlocked: u },
            } = j.Ay.queryEmojiResults({ query: n, channel: e, intention: l.emojiIntention, maxCount: o });
        "-" === n[0] && (u = u.filter((e) => e.names?.includes(n)));
        let a = [];
        if (l.allowStickers) {
            (0, eo.YB)();
            let t = j.Ay.queryStickers([n], !0, [e, (e, t) => t === es.Ux.SENDABLE]),
                l = Math.max(4, 8 - u.length);
            (a = t.slice(0, l)), "-" === n[0] && (a = t.filter((e) => e.sticker.name === n));
        }
        let m = [];
        r &&
            ((m = j.Ay.querySoundmoji(n, e)
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
                O({
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
                        guild: null != e.guildId ? em.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                u && a && (0, m.jsx)(S.Ay.Divider, { className: ep.y }),
                O({
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
                            renderSticker: ey,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: u ? ep._ : void 0,
                }),
                (u || a) && l.length > 0 && (0, m.jsx)(S.Ay.Divider, { className: ep.y }),
                O({
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
                    headerClassName: u || a ? ep._ : void 0,
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
                r.sendSticker(e.sticker, ea.D6.AUTOCOMPLETE),
                {
                    type: a.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: l.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((i -= l.length) < n.length) {
            let e = n[i];
            return (
                r.insertText((0, er.A)(e.sound.guildId, e.sound.soundId)),
                ec.default.track(ed.HAw.SOUNDMOJI_SELECT, {
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
var eA = n(289873),
    eg = n(228366),
    eI = n(636537),
    eM = n(17928);
let eN = {},
    eE = { integration: "", query: "" };
class eS extends eM.Ay.Store {
    static displayName = "IntegrationQueryStore";
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = eN[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return eE;
    }
}
let eC = new eS(eg.h, {
        INTEGRATION_QUERY: function (e) {
            let { integration: t, query: n } = e;
            (eN[t] = eN[t] ?? {}), (eN[t][n] = { loading: !0, results: [] });
        },
        INTEGRATION_QUERY_SUCCESS: function (e) {
            let { integration: t, query: n, results: l } = e;
            (eN[t][n] = { loading: !1, results: l.map((e) => ({ type: ed.Z86[t].type, meta: e })) }),
                (eE = { query: n, integration: t });
        },
        INTEGRATION_QUERY_FAILURE: function (e) {
            let { integration: t, query: n } = e;
            delete eN[t][n];
        },
    }),
    e_ = {
        search(e, t) {
            null == eC.getResults(e, t) &&
                (eg.h.dispatch({ type: "INTEGRATION_QUERY", integration: e, query: t }),
                eI.Bo.get({
                    url: ed.Rsh.INTEGRATION_SEARCH("tenor"),
                    query: { q: t },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (n) => {
                        eg.h.dispatch({ type: "INTEGRATION_QUERY_SUCCESS", integration: e, query: t, results: n.body });
                    },
                    () => eg.h.dispatch({ type: "INTEGRATION_QUERY_FAILURE", integration: e, query: t }),
                ));
        },
    };
var eT = n(58149),
    eD = n(235986),
    ef = n(331691);
let eO = { results: { command: null, integrations: [], isLoading: !1 } };
function eL(e, t, n) {
    let l;
    return (
        n.commands === a.Ze.OLD_BUILT_INS
            ? ((l = t.split(" ")[0].substring(1)), (t = t.substring((l.length ?? 0) + 1)))
            : (l = M.A.getActiveCommand(e.id)?.untranslatedName),
        { command: l, query: t.trim() }
    );
}
let eR = {
    stores: [M.A, eC],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        (i.commands === a.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif") || n.startsWith("/tenor")
            : M.A.getActiveCommand(e.id)?.integrationType === ed.p_j.GIF && M.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, l, i) {
        let { command: r, query: s } = eL(e, n, l);
        if (null == r) return eO;
        let o = B().findKey(ed.Z86, (e) => e.command === r);
        i && null != o && s.length > 0 && e_.search(o, s);
        let u = eC.getResults(o, s);
        return null == u ? eO : { results: { command: r, integrations: u.results, isLoading: u.loading } };
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
            { command: d, query: p } = eL(i, r, s);
        if (null == d || 0 === p.length) return null;
        if (n) return (0, m.jsx)(eA.y, { className: ef.u1, type: eA.y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === ed.p_j.GIF)
                        return (
                            (e = !0),
                            (0, m.jsx)(
                                S.Ay.GIFIntegration,
                                {
                                    className: ef.ho,
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
                r = s.commands === a.Ze.OLD_BUILT_INS ? d : (M.A.getActiveCommand(i.id)?.integrationTitle ?? d),
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
                        e ? (0, m.jsx)(eD.A, { className: ef.os, children: n }) : n,
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
            eT.Ay.trackWithMetadata(ed.HAw.SEARCH_RESULT_SELECTED, {
                search_type: ed.I4_.GIF,
                index_num: l,
                source_object: `/${t}`,
            }),
            r.commands !== a.Ze.OLD_BUILT_INS)
        ) {
            let e = M.A.getActiveCommand(s.id);
            e?.inputType === N.y$.BUILT_IN_INTEGRATION &&
                (eg.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: o },
                    command: e,
                    commandOrigin: N.iw.CHAT,
                }),
                eT.Ay.trackWithMetadata(ed.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: M.A.getSource(s.id),
                }));
        }
        return { type: a.kc.GIF };
    },
};
var ek = n(253932),
    eY = n(562153);
let ex = /^<@!?(\d+)>/u;
function eq(e) {
    let t = ex.exec(e);
    if (null != t) {
        let n = t[1],
            l = en.default.getUser(n);
        return null != l && l.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: l } : null;
    }
    return null;
}
let eB = {
    ...x,
    sentinel: void 0,
    focusMode: a.e.MANUAL,
    matches(e, t, n, l, i) {
        if (i.commands === a.Ze.DISABLED || i.commands === a.Ze.OLD_BUILT_INS || n.length < 2 || !ek._3.getSetting())
            return !1;
        let r = eq(n);
        return null != r && r.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, l, i) {
        if (!ek._3.getSetting()) return k;
        let s = eq(n);
        if (null == s) return k;
        let o = (0, E.Yn)(e, s.cleanedQuery),
            { commands: u, sections: a } = g.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: o.text },
                { limit: 20, placeholderCount: 3, scoreMethod: I.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == u) return k;
        let m = u.filter((e) => e.section.botId === s.user.id);
        if (o.hasSpaceTerminator) {
            let e = o.text.trim(),
                t = e + " ";
            m = m.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === m.length
            ? k
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
        return O({
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
                let t = eq(e);
                if ("mention" !== t.type) return e;
                let n = eY.Ay.getName(l?.id, i.id, t.user);
                return e.replace(ex, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: l, options: i, channel: r, guild: s } = e,
            o = x.onSelect({
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
var ev = n(696451),
    eH = n(427262);
let eU = {
    sentinel: "@",
    stores: [ev.Ay],
    matches: (e, t, n, l, i) =>
        i.mentions.user !== a.Vf.DENY || i.mentions.role !== a.eP.DENY || i.mentions.global !== a.VN.DENY,
    queryResults(e, t, n, l, i) {
        let r = l.mentions.global === a.VN.ALLOW_EVERYONE || l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            s = l.mentions.global === a.VN.ALLOW_EVERYONE_OR_HERE,
            o = l.mentions.user !== a.Vf.DENY,
            u = l.mentions.role !== a.eP.DENY,
            m = l.mentions.user === a.Vf.ALLOW_GUILD,
            c = l.mentions.role === a.eP.ALLOW_ALL;
        return {
            results: j.Ay.queryMentionResults({
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
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: l, globals: i, roles: r },
                selectedIndex: s,
                channel: o,
                query: u,
                options: d,
                onHover: p,
                onClick: y,
            } = e,
            h = l.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.User,
                    {
                        guildId: o.guild_id,
                        onClick: y,
                        onHover: p,
                        selected: s === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: d.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            A = i.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.Generic,
                    {
                        onClick: y,
                        onHover: p,
                        selected: s === t + l.length,
                        index: l.length + t,
                        text: e.text,
                        description: d.hideMentionDescription ? null : e.description,
                        "aria-label": e.text,
                    },
                    e.text,
                ),
            ),
            g = r.map((e, t) =>
                (0, m.jsx)(
                    S.Ay.Role,
                    {
                        onClick: y,
                        onHover: p,
                        selected: s === t + l.length + i.length,
                        index: l.length + i.length + t,
                        role: e,
                        hideDescription: d.hideMentionDescription,
                        guildId: o.guild_id,
                    },
                    e.id,
                ),
            );
        return (
            d.mentions.user === a.Vf.DENY
                ? ((t = D.t.MLiD1e), (n = D.intl.string(D.t["LPJmL/"])))
                : ((t = D.t.rPNimn), (n = D.intl.string(D.t["9Oq93m"]))),
            (0, m.jsxs)(
                c.Fragment,
                {
                    children: [
                        f({ titleWithQuery: t, titleWithoutQuery: n, query: u, getQuery: (e) => `@${e}` }),
                        h,
                        l.length > 0 && i.length > 0 ? (0, m.jsx)(S.Ay.Divider, {}) : null,
                        A,
                        (l.length > 0 && r.length > 0) || (i.length > 0 && r.length > 0)
                            ? (0, m.jsx)(S.Ay.Divider, {})
                            : null,
                        g,
                    ],
                },
                "mentions",
            )
        );
    },
    onSelect(e) {
        var t, n, l, i, r, s;
        let {
                results: { users: o, globals: u, roles: m },
                index: c,
                options: d,
                channel: p,
            } = e,
            y = o[c],
            h = u[c - o.length],
            A = m[c - o.length - u.length],
            g = a.kc.MENTION;
        return (
            null != y
                ? d.insertText(
                      ((t = y.user),
                      (n = p),
                      (l = d.hidePersonalInformation),
                      j.Ay.hasSameRoleAsUsername(n, t)
                          ? `@${t.tag}`
                          : `@${eH.Ay.getUserTag(t, { identifiable: l ? "never" : "always" })}`),
                      ((i = y.user), `<@${i.id}>`),
                  )
                : null != h
                  ? null != h.inlineAutocompleteType
                      ? (d.insertAutocompleteInput(h.inlineAutocompleteType),
                        "timestampMentionInput" === h.inlineAutocompleteType && (g = a.kc.TIMESTAMP))
                      : d.insertText(h.text)
                  : null != A && d.insertText(((r = A), `@${r.name}`), ((s = A), `<@&${s.id}>`)),
            { type: g }
        );
    },
};
var ej = n(307731);
let eW = { results: { command: null, stickers: [] } };
function eG(e, t) {
    return (0, m.jsx)(T.A, { sticker: e, isInteracting: t, size: 40 });
}
let eP = {
    stores: [eu.A],
    matches: (e, t, n, l, i) =>
        i.commands !== a.Ze.DISABLED &&
        i.commands !== a.Ze.OLD_BUILT_INS &&
        M.A.getActiveCommand(e.id)?.integrationType === ed.p_j.STICKER &&
        M.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, l) {
        let i = M.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == i) return eW;
        let r = [];
        return (
            (0, eo.YB)(),
            {
                results: {
                    command: i,
                    stickers: (r = j.Ay.queryStickers([n], !0, [e, (e, t) => t === es.Ux.SENDABLE]).slice(0, 8)),
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
            children: O({
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
                        renderSticker: eG,
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
        let m = M.A.getActiveCommand(s.id);
        m?.inputType === N.y$.BUILT_IN_INTEGRATION &&
            (eg.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: s, guild: o },
                command: m,
                commandOrigin: N.iw.CHAT,
            }),
            eT.Ay.trackWithMetadata(ed.HAw.APPLICATION_COMMAND_USED, {
                command_id: m.id,
                application_id: m.applicationId,
                command_type: m.type,
                source: M.A.getSource(s.id),
            }));
        let c = l[i];
        return (
            r.sendSticker(c.sticker, ea.D6.BUILT_IN_INTEGRATION),
            c.sticker.type === ea.NL.GUILD && (t = c.sticker.guild_id),
            eT.Ay.trackWithMetadata(ed.HAw.SEARCH_RESULT_SELECTED, {
                load_id: c.sticker.id,
                search_type: ed.I4_.STICKER,
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
var eb = n(59892),
    eQ = n(186693),
    eV = n(262234),
    e$ = n(717470),
    ew = n(977936),
    eZ = n(849455),
    eF = n(288116),
    eK = n(406002),
    eJ = n(381349),
    ez = n(860323),
    eX = n(670441),
    e0 = n(994372),
    e1 = n(576497),
    e2 = n(989349),
    e7 = n.n(e2),
    e8 = n(379418),
    e3 = n(773669);
let e4 = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    e6 = [
        e7().ISO_8601,
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
        ].flatMap((e) => [...e4.map((t) => `${e} ${t}`), ...e4]),
    ],
    e5 = [
        a.DB.CHOICES,
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
    e9 = {
        [a.DB.CHANNELS]: {
            sentinel: "#",
            matches: (e, t, n, l, i) => i.mentions.channel !== a.xS.DENY && !e.isPrivate(),
            queryResults(e, t, n, l, i) {
                let r,
                    s,
                    o = ee.I6;
                return (
                    n.charAt(0) === J.AT.VOICE_CHANNEL && ((o = ee.vM), (n = n.substring(1))),
                    l.forNonStringCommandOption
                        ? (r = j.Ay.queryApplicationCommandChannelResults({
                              query: n,
                              channel: e,
                              channelTypes: l.allowedChannelTypes,
                          }))
                        : ((r = j.Ay.queryChannelResults({ query: n, channel: e, type: o })),
                          null != t &&
                              ((s = j.Ay.queryStaticRouteChannels({ query: n, guild: t })), r.channels.unshift(...s))),
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
                    a = r.charAt(0) === J.AT.VOICE_CHANNEL;
                return (
                    a
                        ? ((t = D.t["rMUL3+"]), (n = D.intl.string(D.t.CYnO4s)), (r = r.substring(1)))
                        : s.forNonStringCommandOption
                          ? ((t = D.t.upNFT5), (n = D.intl.string(D.t.OGiMXJ)))
                          : ((t = D.t.UhnmJD), (n = D.intl.string(D.t.nIfr0Y))),
                    O({
                        query: r,
                        selectedIndex: i,
                        autocompletes: l,
                        onHover: o,
                        onClick: u,
                        titleWithQuery: t,
                        titleWithoutQuery: n,
                        Component: S.Ay.Channel,
                        getProps: (e) => ({ channel: e, key: e.id, category: X.A.getChannel(e.parent_id) }),
                        getQuery: (e) => (a ? `#${J.AT.VOICE_CHANNEL}${e}` : `#${e}`),
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
                                case K.r.PUBLIC_THREAD:
                                case K.r.PRIVATE_THREAD:
                                case K.r.ANNOUNCEMENT_THREAD:
                                case K.r.GUILD_VOICE:
                                case K.r.GUILD_STAGE_VOICE:
                                case K.r.GUILD_CATEGORY:
                                    return `#"${(0, z.Eq)((0, z.m1)(e, en.default, et.A))}"`;
                                default:
                                    let t = ee.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                    return `#${null != t ? t.name : ((0, z.m1))(e, en.default, et.A)}`;
                            }
                        })(r),
                        ((t = r), el.aQ.has(t.id) ? `<id:${t.id}>` : `<#${t.id}>`),
                    ),
                    { type: a.kc.CHANNEL }
                );
            },
        },
        [a.DB.COMMANDS]: x,
        [a.DB.COMMAND_OPTIONS]: F,
        [a.DB.CHOICES]: w,
        [a.DB.EMOJIS_AND_STICKERS]: eh,
        [a.DB.STICKERS]: eP,
        [a.DB.GIFS]: eR,
        [a.DB.LEGACY_COMMANDS]: eB,
        [a.DB.MENTIONS]: eU,
        [a.DB.REACTIONS]: {
            sentinel: "+:",
            matches: (e, t, n, l, i) =>
                l &&
                (i.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
                (C.A.can(ed.xBc.ADD_REACTIONS, e) || e.isPrivate()),
            queryResults(e, t, n, l, i) {
                let { emojis: r } = j.Ay.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: ej.EmojiIntention.REACTION,
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
                return O({
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
                        guild: null != e.guildId ? em.A.getGuild(e.guildId) : null,
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
        [a.DB.TIMESTAMPS]: {
            autocompleteInputElementType: "timestampMentionInput",
            matches: (e, t, n, l, i) => n.length > 1,
            queryResults(e, t, n) {
                let l = e7()(),
                    i = (function () {
                        let e = e3.default.locale;
                        if ("en-US" === e) return eb;
                        if ("en-GB" === e) return eb.GB;
                        if ("de" === e) return eQ;
                        if ("fr" === e) return eV;
                        if ("ja" === e) return e$;
                        else if ("nl" === e) return ew;
                        else if ("ru" === e) return eZ;
                        else if ("it" === e) return eF;
                        else if ("uk" === e) return eK;
                        else if ("zh-CN" === e) return eJ;
                        else if ("zh-TW" === e) return ez;
                        else if (e.startsWith("sv-")) return eX;
                        else if (e.startsWith("pt-")) return e0;
                        else if (e.startsWith("es-")) return e1;
                        else return null;
                    })(),
                    [r] = i?.parse(n, l.toDate()) ?? [void 0],
                    s = r?.start != null && r?.end == null && r.text === n,
                    o = s ? e7()(r.start.date()) : e7()(n, e6, !0),
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
                        o = e7()(e);
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
                        let o = (0, e8.WA)(l);
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
                            f({ titleWithQuery: o, titleWithoutQuery: u, query: l, getQuery: (e) => `${e}` }),
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
                let r = (0, e8.tf)(i.timestamp, i.format),
                    s = (0, e8.WA)(i)?.formatted;
                return null == s
                    ? null
                    : (l.replaceInlineInput("timestampMentionInput", s, r), { type: a.kc.TIMESTAMP });
            },
        },
    };
function te(e) {
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
            hidePersonalInformation: A,
            type: g,
            emojiIntention: I,
            editorRef: M,
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
            hidePersonalInformation: !0 === A,
            chatInputType: g,
            emojiIntention: I,
            sendMessage: N,
            sendSticker: E,
            insertText: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                M.current?.insertAutocomplete(e, t ?? e, n);
            },
            replaceText: (e, t) => {
                S(e, t ?? (0, o.x7)(e));
            },
            insertAutocompleteInput: (e) => {
                M.current?.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                M.current?.replaceInlineAutocompleteInput(e, t, n ?? t);
            },
            getCommandOptionValues: () => M.current?.getCommandOptionValues(),
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
        g.commands?.enabled &&
            (c ? (C.commands = d ? a.Ze.NEW_TEXT_ONLY : a.Ze.NEW) : (C.commands = a.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (C.allowedChannelTypes = t.channelTypes),
        C
    );
}
function tt(e) {
    let { type: t, channel: n, guild: l, query: i, isAtStart: r, options: s } = e,
        o = e9[t];
    if (null != o.sentinel) {
        if (!i.startsWith(o.sentinel)) return !1;
        i = i.substring(o.sentinel.length);
    }
    return null == o.matches || !!o.matches(n, l, i, r, s);
}
function tn(e) {
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
    for (let e of e5) {
        let y = e9[e];
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
                    if (tt({ type: e, channel: t, guild: n, query: o, isAtStart: !1, options: l })) {
                        p = { type: e, typeInfo: y, query: o };
                        break;
                    }
                } else if (tt({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.STICKERS) {
                if (tt({ type: e, channel: t, guild: n, query: m, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: m };
            } else if (e === a.DB.COMMANDS && l.commands !== a.Ze.OLD_BUILT_INS) {
                if (tt({ type: e, channel: t, guild: n, query: o, isAtStart: !0, options: l })) {
                    p = { type: e, typeInfo: y, query: o.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === a.DB.LEGACY_COMMANDS) {
                if (tt({ type: e, channel: t, guild: n, query: o, isAtStart: s, options: l })) {
                    p = { type: e, typeInfo: y, query: o };
                    break;
                }
            } else if (e === a.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != r && r.length > 0 && (0, u.K)(ej.EmojiInteractionPoint.AutocompleteTyped),
                    null != r && tt({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l }))
                ) {
                    p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != r && tt({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l })) {
                p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == p ? null : ((p.query = p.query.toLocaleLowerCase()), p);
}
function tl(e, t) {
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
    let l = e9[n];
    return { type: n, typeInfo: l, query: t };
}
