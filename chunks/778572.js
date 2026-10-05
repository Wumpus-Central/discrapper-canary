n.d(t, { findMatchingAutocompleteType: () => ts, getOptions: () => ti, findCommandOptionAutocompleteType: () => tu });
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    s = n(168186),
    u = n(408018),
    a = n(189551),
    o = n(597184),
    c = n(477900),
    d = n(582128),
    m = n(192308),
    p = n(123292),
    y = n(721768),
    h = n(917012),
    g = n(264322),
    A = n(842209),
    I = n(210978),
    M = n(861382),
    N = n(392054),
    E = n(664929),
    f = n(659280),
    S = n(853145),
    C = n(576705),
    T = n(257120),
    O = n(148355),
    D = n(375708);
function _(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: l,
            getQuery: i,
            headerClassName: r,
            headerTrailingContent: s,
        } = e,
        u = l.length > 0 ? D.intl.formatToPlainString(t, { prefix: i(l) }) : n;
    return (0, c.jsx)(f.Ay.Title, { className: r, title: u, children: s }, `autocomplete-title-${u}`);
}
function L(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: l,
        onHover: i,
        onClick: r,
        titleWithQuery: s,
        titleWithoutQuery: u,
        Component: a,
        getProps: o,
        getQuery: m,
        key: p,
        indexOffset: y = 0,
        headerClassName: h,
        headerTrailingContent: g,
        footer: A,
    } = e;
    if (null == A && (null == l || 0 === l.length)) return null;
    let I = l?.map((e, t) => {
        let l = t + y,
            s = o(e, l);
        return (0, d.createElement)(a, { onClick: r, onHover: i, selected: n === l, index: l, ...s, key: s.key });
    });
    return (0, c.jsxs)(
        d.Fragment,
        {
            children: [
                null != s && null != u
                    ? _({
                          titleWithQuery: s,
                          titleWithoutQuery: u,
                          query: t,
                          getQuery: m,
                          headerClassName: h,
                          headerTrailingContent: g,
                      })
                    : null,
                I,
                A,
            ],
        },
        p,
    );
}
var k = n(827669),
    R = n(73510),
    x = n(65633);
let Y = { results: { entries: [] } };
function v() {
    (0, m.openModalLazy)(async () => {
        let { default: e } = await n.e("152855").then(n.bind(n, 563478));
        return (t) => (0, c.jsx)(e, { ...t });
    });
}
let B = {
    sentinel: "/",
    stores: [M.A, g.Ay, C.A, S.A],
    matches: (e, t, n, l, i) =>
        i.commands !== o.Ze.DISABLED && null == M.A.getActiveCommand(e.id) && (l || i.commands !== o.Ze.OLD_BUILT_INS),
    queryResults(e, t, n, l, i) {
        if (0 === n.length && l.commands !== o.Ze.OLD_BUILT_INS) return Y;
        if (l.commands === o.Ze.OLD_BUILT_INS) {
            let l = (0, h.Ez)([r.kc.CHAT], !1, !1),
                i = RegExp(`^${T.A.escape(n)}`, "i"),
                u = (0, s.PV)(l, i, { channel: e, guild: t }, 20),
                a = h.gZ[R.Ik.BUILT_IN];
            return 0 === u.length ? Y : { results: { entries: u.map((e) => ({ command: e, section: a })) } };
        }
        let u = l.commands === o.Ze.NEW_TEXT_ONLY,
            a = (0, E.Yn)(e, n),
            { commands: c, sections: d } = A.eW(
                { channel: e, type: "channel" },
                {
                    commandTypes: [r.kc.CHAT],
                    text: a.text,
                    builtIns: u ? I.n.ONLY_TEXT : I.n.ALLOW,
                    applicationCommands: !u,
                },
                { limit: 20, placeholderCount: 3, scoreMethod: I.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == c) return Y;
        let m = c;
        if (a.hasSpaceTerminator) {
            let e = a.text.trim(),
                t = e + " ";
            m = m.filter((n) => n.displayName === e || n.displayName.startsWith(t));
        }
        return 0 === m.length
            ? Y
            : {
                  results: {
                      entries: m
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: d?.find((t) => t.id === e.applicationId) })),
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
                onClick: u,
            } = e,
            a = (0, E.Yn)(l, i),
            d = r.commands === o.Ze.OLD_BUILT_INS;
        return L({
            query: a.text,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: u,
            titleWithQuery: D.t.HFRoZR,
            titleWithoutQuery: D.intl.string(D.t["0hKkS+"]),
            getQuery: (e) => `/${e}`,
            Component: d ? f.Ay.Command : f.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: l, guildId: l.guild_id, showImage: !0, section: n };
            },
            key: "commands",
            headerClassName: d ? x.Y : null,
            headerTrailingContent: d && (0, c.jsx)(p.Q, { size: "xs", onClick: v, text: D.intl.string(D.t["8a0P0y"]) }),
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
                tabOrEnter: u,
            } = e,
            { command: a, section: c } = t[n];
        if (a.inputType === N.y$.PLACEHOLDER) return null;
        if (i.commands === o.Ze.OLD_BUILT_INS) {
            var d;
            i.insertText(((d = a), `/${d.displayName}`));
        } else {
            let e = s;
            (null == e && (e = u ? N.Oh.QUERY : N.Oh.DISCOVERY),
                y.Gf({ channelId: r.id, command: a, section: c ?? null, location: e, queryLength: l?.length }));
        }
        return { type: o.kc.COMMAND };
    },
};
var q = n(435558),
    H = n.n(q),
    j = n(537652),
    W = n(166862),
    b = n(545152),
    U = n(802842),
    G = n(74448);
let Q = { results: { choices: [] } },
    P = { results: { choices: [], isLoading: !0 } },
    w = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    V = { results: { choices: [], isError: !0 } },
    $ = H().debounce(b.A, R.$r, { leading: !0, trailing: !0 }),
    Z = {
        stores: [M.A, W.A],
        showEmpty: !0,
        matches(e, t, n, l, i) {
            let s = M.A.getActiveOption(e.id);
            return (
                i.commands !== o.Ze.DISABLED &&
                null != s &&
                (s.type === r.n4.BOOLEAN || !!s?.autocomplete || (s?.choices != null && s.choices.length > 0))
            );
        },
        queryResults(e, t, n, l, i) {
            let s = M.A.getActiveOption(e.id);
            if (null == s) return Q;
            if (s.autocomplete) {
                if (
                    (i &&
                        $({
                            command: M.A.getActiveCommand(e.id),
                            optionValues: l.getCommandOptionValues(),
                            context: { channel: e, guild: t, autocomplete: { name: s.name, query: n } },
                        }),
                    W.A.getLastErrored(e.id))
                )
                    return V;
                let r = W.A.getAutocompleteChoices(e.id, s.name, n);
                return null == r ? P : { results: { choices: r } };
            }
            return {
                results: U.Ay.queryChoiceResults({
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
                onClick: u,
            } = e;
            return l
                ? (0, c.jsx)(j.A, { message: D.intl.string(D.t.rTAbPn), className: G.k })
                : 0 !== t.length || n
                  ? L({
                        query: r,
                        selectedIndex: i,
                        autocompletes: n ? w : t,
                        onHover: s,
                        onClick: u,
                        titleWithQuery: D.t.pg0anB,
                        titleWithoutQuery: D.intl.string(D.t["+1H47t"]),
                        Component: n ? f.Ay.Loading : f.Ay.Generic,
                        getProps: (e, t) => ({ key: t.toString(), text: e.displayName }),
                        getQuery: (e) => e,
                        key: "choice",
                    })
                  : (0, c.jsx)(j.A, { message: D.intl.string(D.t["41014u"]), className: G.k });
        },
        onSelect(e) {
            let {
                    results: { choices: t },
                    index: n,
                    options: l,
                } = e,
                i = t[n];
            return (l.insertText(i.displayName), { type: o.kc.CHOICE });
        },
    };
n(321073);
let F = { results: { commandOptions: [] } },
    K = {
        stores: [M.A],
        focusMode: o.e.AUTO_WHEN_FILTERED,
        matches: (e, t, n, l, i) => !(l || null == M.A.getActiveCommand(e.id) || null != M.A.getActiveOption(e.id)),
        queryResults(e, t, n, l, i) {
            let r = M.A.getActiveCommand(e.id);
            if (r?.options == null) return F;
            let s = M.A.getOptionStates(e.id),
                u = r.options.filter((e) => e.displayName.startsWith(n) && !s[e.name]?.hasValue);
            return 0 === u.length ? F : { results: { commandOptions: u } };
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
                u = [];
            t.forEach((e) => {
                (e.required ? s : u).push(e);
            });
            let a =
                    s.length > 0
                        ? L({
                              query: l,
                              selectedIndex: n,
                              autocompletes: s,
                              onHover: i,
                              onClick: r,
                              titleWithQuery: D.t["iO/jnA"],
                              titleWithoutQuery: D.intl.string(D.t["7II2G3"]),
                              Component: f.Ay.Generic,
                              getProps: (e, t) => ({
                                  key: t.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription,
                              }),
                              getQuery: (e) => e,
                              key: "required-options",
                          })
                        : null,
                o =
                    u.length > 0
                        ? L({
                              query: l,
                              selectedIndex: n,
                              autocompletes: u,
                              onHover: i,
                              onClick: r,
                              titleWithQuery: D.t.pg0anB,
                              titleWithoutQuery:
                                  s.length > 0 ? D.intl.string(D.t.TpDXm4) : D.intl.string(D.t["+1H47t"]),
                              Component: f.Ay.Generic,
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
            return (0, c.jsxs)(c.Fragment, { children: [a, o] });
        },
        onSelect(e) {
            var t;
            let {
                    results: { commandOptions: n },
                    index: l,
                    options: i,
                } = e,
                r = n[l];
            return (i.insertText(((t = r), `${t.displayName}:`)), { type: o.kc.COMMAND_OPTION });
        },
    };
var z = n(243264),
    J = n(649079),
    X = n(778747),
    ee = n(439864),
    et = n(885386);
let en = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [z.A],
    matches: (e, t, n, l, i) => !0,
    queryResults: (e, t, n) =>
        et.BQ.getSetting() ? { results: { games: (0, ee.q)(n, X.K.CHAT_MENTION) ?? [] } } : { results: { games: [] } },
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
                (0, c.jsx)(f.Ay.Game, { onClick: r, onHover: i, selected: n === t, index: t, game: e }, e.id),
            ),
            u = D.t["/U2VW+"],
            a = D.intl.string(D.t.URyqtP);
        return (0, c.jsxs)(
            d.Fragment,
            { children: [_({ titleWithQuery: u, titleWithoutQuery: a, query: l, getQuery: el }), s] },
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
            (0, J.$g)(X.K.CHAT_MENTION).select(i.id),
            l.replaceInlineInput("gameMentionInput", el(i.name), (0, k.KW)(i.id)),
            { type: o.kc.GAME_MENTION, metadata: { gameId: i.id } }
        );
    },
};
function el(e) {
    return `@${e}`;
}
n(667532);
var ei = n(478437),
    er = n(115718),
    es = n(47167),
    eu = n(734057),
    ea = n(808728),
    eo = n(994500),
    ec = n(287809),
    ed = n(746080),
    em = n(926972),
    ep = n(937862),
    ey = n(361670),
    eh = n(631576),
    eg = n(750385),
    eA = n(194004),
    eI = n(71393),
    eM = n(174459),
    eN = n(652215),
    eE = n(616052);
function ef(e, t) {
    return (0, c.jsx)(O.A, { sticker: e, isInteracting: t, size: 40 });
}
let eS = {
    sentinel: ":",
    stores: [eg.A],
    matches: (e, t, n, l, i) => n.length > 1,
    queryResults(e, t, n, l, i) {
        let r = l.allowSoundmoji && (0, em.AA)({ location: "queryResults" }),
            s = l.allowStickers || r ? 0 : 40,
            u = eN.rs7 + s,
            {
                emojis: { unlocked: a },
            } = U.Ay.queryEmojiResults({ query: n, channel: e, intention: l.emojiIntention, maxCount: u });
        "-" === n[0] &&
            (a = a.filter(function (e) {
                return e.names?.includes(n);
            }));
        let o = [];
        if (l.allowStickers) {
            (0, eh.YB)();
            let t = U.Ay.queryStickers([n], !0, [e, (e, t) => t === ey.Ux.SENDABLE]),
                l = Math.max(4, 8 - a.length);
            ((o = t.slice(0, l)), "-" === n[0] && (o = t.filter((e) => e.sticker.name === n)));
        }
        let c = [];
        r &&
            ((c = U.Ay.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, 4)),
            "-" === n[0] && (c = c.filter((e) => e.sound.name === n)));
        let d = a.slice(0, Math.max(6, u - o.length - c.length));
        return {
            results: { emojis: d, stickers: o, soundmoji: c },
            metadata: { numEmojiResults: d.length, numStickerResults: o.length, numSoundmojiResults: c.length },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: l },
                selectedIndex: i,
                query: r,
                onHover: s,
                onClick: u,
            } = e,
            a = t.length > 0,
            o = n.length > 0;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                L({
                    query: r,
                    selectedIndex: i,
                    autocompletes: t,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: D.t.ksAVYt,
                    titleWithoutQuery: D.intl.string(D.t.sMOuuS),
                    Component: f.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? eI.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                a && o && (0, c.jsx)(f.Ay.Divider, { className: eE.y }),
                L({
                    query: r,
                    selectedIndex: i,
                    autocompletes: n,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: D.t.uferGG,
                    titleWithoutQuery: D.intl.string(D.t["fT+Yjp"]),
                    Component: f.Ay.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: ef,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: a ? eE._ : void 0,
                }),
                (a || o) && l.length > 0 && (0, c.jsx)(f.Ay.Divider, { className: eE.y }),
                L({
                    query: r,
                    selectedIndex: i,
                    autocompletes: l,
                    onHover: s,
                    onClick: u,
                    titleWithQuery: D.t["0cKBGM"],
                    titleWithoutQuery: D.intl.string(D.t.EHlAMc),
                    Component: f.Ay.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return { sound: t, key: t.soundId };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: a || o ? eE._ : void 0,
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
            var u, a;
            let e,
                n = t[i];
            return (
                r.insertText(
                    ((u = n), `:${u.name}:`),
                    ((e = (a = n).animated ? "a" : ""),
                    a.managed || null == a.id ? `:${a.name}:` : `<${e}:${a.originalName ?? a.name}:${a.id}>`),
                ),
                {
                    type: o.kc.EMOJI,
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
                r.sendSticker(e.sticker, eA.D6.AUTOCOMPLETE),
                {
                    type: o.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: l.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((i -= l.length) < n.length) {
            let e = n[i];
            return (
                r.insertText((0, ep.A)(e.sound.guildId, e.sound.soundId)),
                eM.default.track(eN.HAw.SOUNDMOJI_SELECT, {
                    channel_id: s.id,
                    guild_id: s.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                { type: o.kc.SOUNDMOJI, metadata: { numEmojiResults: t.length, numStickerResults: l.length } }
            );
        }
        return { type: null };
    },
};
var eC = n(289873),
    eT = n(73153),
    eO = n(636537),
    eD = n(773669),
    e_ = n(17928);
let eL = {};
class ek extends e_.Ay.Store {
    static displayName = "IntegrationQueryStore";
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = eL[e];
        return null != n && null != n[t] ? n[t] : null;
    }
}
let eR = new ek(eT.h, {
        INTEGRATION_QUERY: function (e) {
            let { integration: t, query: n } = e;
            ((eL[t] = eL[t] ?? {}), (eL[t][n] = { loading: !0, results: [] }));
        },
        INTEGRATION_QUERY_SUCCESS: function (e) {
            let { integration: t, query: n, results: l } = e;
            eL[t][n] = { loading: !1, results: l.map((e) => ({ type: eN.Z86[t].type, meta: e })) };
        },
        INTEGRATION_QUERY_FAILURE: function (e) {
            let { integration: t, query: n } = e;
            delete eL[t][n];
        },
    }),
    ex = {};
async function eY(e, t) {
    if (((ex[e] = ex[e] ?? {}), !ex[e][t])) {
        ex[e][t] = !0;
        try {
            let n = await eO.Bo.get({
                url: eN.Rsh.GIFS_SEARCH,
                query: { q: t, media_format: "webp", locale: eD.default.locale, limit: 20 },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            eT.h.dispatch({ type: "INTEGRATION_QUERY_SUCCESS", integration: e, query: t, results: n.body });
        } catch (n) {
            eT.h.dispatch({ type: "INTEGRATION_QUERY_FAILURE", integration: e, query: t });
        } finally {
            delete ex[e][t];
        }
    }
}
let ev = H().debounce(eY, 300, { trailing: !0 }),
    eB = {
        search(e, t) {
            let n = eR.getResults(e, t);
            (null == n || n.loading) &&
                (null == n && eT.h.dispatch({ type: "INTEGRATION_QUERY", integration: e, query: t }), ev(e, t));
        },
    };
var eq = n(95561),
    eH = n(59318),
    ej = n(503698),
    eW = n.n(ej),
    eb = n(408278),
    eU = n(921853),
    eG = n(320448),
    eQ = n(775602),
    eP = n(300492);
function ew(e) {
    let { children: t } = e,
        n = d.useRef(null),
        l = d.useId(),
        i = (0, e_.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        [r, s] = d.useState(!1),
        [u, a] = d.useState(!1),
        o = d.useCallback(() => {
            let e = n.current;
            if (null == e) return;
            let t = e.scrollWidth - e.clientWidth;
            (s(e.scrollLeft > 1), a(e.scrollLeft < t - 1));
        }, []);
    (d.useEffect(() => {
        let e = n.current;
        if (null == e) return;
        o();
        let t = new ResizeObserver(o);
        for (let n of (t.observe(e), e.children)) t.observe(n);
        return () => t.disconnect();
    }, [o, t]),
        d.useEffect(() => {
            let e = n.current;
            if (null != e)
                return (e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t));
            function t(t) {
                null == e ||
                    Math.abs(t.deltaY) <= Math.abs(t.deltaX) ||
                    e.scrollWidth <= e.clientWidth ||
                    (t.preventDefault(), (e.scrollLeft += t.deltaY));
            }
        }, []));
    let m = d.useCallback(
        (e) => {
            let t = n.current;
            null != t && t.scrollBy({ left: e * t.clientWidth * 0.8, behavior: i ? "auto" : "smooth" });
        },
        [i],
    );
    return (0, c.jsxs)("div", {
        className: eP.gs,
        children: [
            (0, c.jsx)("div", {
                className: eW()(eP.k9, eP.QZ, { [eP.sB]: !r }),
                children: (0, c.jsx)(eb.K, {
                    icon: eU.n,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": D.intl.string(D.t.FQx1Ru),
                    "aria-controls": l,
                    "aria-hidden": !r,
                    disabled: !r,
                    tabIndex: -1,
                    onClick: () => m(-1),
                }),
            }),
            (0, c.jsx)("div", { id: l, ref: n, className: eP.os, onScroll: o, children: t }),
            (0, c.jsx)("div", {
                className: eW()(eP.k9, eP.fd, { [eP.sB]: !u }),
                children: (0, c.jsx)(eb.K, {
                    icon: eG._,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": D.intl.string(D.t.H4hwjn),
                    "aria-controls": l,
                    "aria-hidden": !u,
                    disabled: !u,
                    tabIndex: -1,
                    onClick: () => m(1),
                }),
            }),
        ],
    });
}
let eV = { results: { command: null, integrations: [], isLoading: !1 } };
function e$(e, t, n) {
    let l;
    return (
        n.commands === o.Ze.OLD_BUILT_INS
            ? ((l = t.split(" ")[0].substring(1)), (t = t.substring((l.length ?? 0) + 1)))
            : (l = M.A.getActiveCommand(e.id)?.untranslatedName),
        { command: l, query: t.trim() }
    );
}
let eZ = {
    stores: [M.A, eR],
    matches: (e, t, n, l, i) =>
        i.commands !== o.Ze.DISABLED &&
        (i.commands === o.Ze.OLD_BUILT_INS
            ? n.startsWith("/gif")
            : M.A.getActiveCommand(e.id)?.integrationType === eN.p_j.GIF && M.A.getOptionStates(e.id).query.hasValue),
    queryResults(e, t, n, l, i) {
        let { command: r, query: s } = e$(e, n, l);
        if (null == r) return eV;
        let u = H().findKey(eN.Z86, (e) => e.command === r);
        i && null != u && s.length > 0 && eB.search(u, s);
        let a = eR.getResults(u, s);
        return null == a ? eV : { results: { command: r, integrations: a.results, isLoading: a.loading } };
    },
    renderResults(e) {
        let {
                results: { integrations: t, isLoading: n },
                selectedIndex: l,
                channel: i,
                query: r,
                options: s,
                onHover: u,
                onClick: a,
            } = e,
            { command: m, query: p } = e$(i, r, s);
        if (null == m || 0 === p.length) return null;
        if (n) return (0, c.jsx)(eC.y, { className: eP.u1, type: eC.y.Type.SPINNING_CIRCLE });
        if (null != t) {
            let e = !1,
                n = t.map((t, n) => {
                    if (t.type === eN.p_j.GIF) {
                        var i;
                        let r, s;
                        return (
                            (e = !0),
                            (0, c.jsx)(
                                f.Ay.GIFIntegration,
                                {
                                    className: eP.ho,
                                    onClick: a,
                                    onHover: u,
                                    selected: l === n,
                                    index: n,
                                    width: t.meta.width ?? 0,
                                    height: t.meta.height ?? 0,
                                    src:
                                        ((r = (i = t.meta).src ?? ""),
                                        (s = i.gif_src),
                                        (0, eH.r1)(r) && null != s && "" !== s && !(0, eH.r1)(s) ? s : r),
                                    url: t.meta.url,
                                },
                                `${t.meta.url}${t.meta.src}`,
                            )
                        );
                    }
                }),
                r = s.commands === o.Ze.OLD_BUILT_INS ? m : (M.A.getActiveCommand(i.id)?.integrationTitle ?? m),
                y =
                    p.length > 0 && null != r
                        ? D.intl.format(D.t["3njXz/"], { query: p, command: r })
                        : null != r
                          ? r
                          : m;
            return (0, c.jsxs)(
                d.Fragment,
                { children: [(0, c.jsx)(f.Ay.Title, { title: y }), e ? (0, c.jsx)(ew, { children: n }) : n] },
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
            guild: u,
        } = e;
        if (null == t) return { type: null };
        let a = n[l];
        if (
            (i === o.lg.INSERT ? r.replaceText(a.meta.url) : r.sendMessage(a.meta.url),
            eq.Ay.trackWithMetadata(eN.HAw.SEARCH_RESULT_SELECTED, {
                search_type: eN.I4_.GIF,
                index_num: l,
                source_object: `/${t}`,
            }),
            r.commands !== o.Ze.OLD_BUILT_INS)
        ) {
            let e = M.A.getActiveCommand(s.id);
            e?.inputType === N.y$.BUILT_IN_INTEGRATION &&
                (eT.h.dispatch({
                    type: "APPLICATION_COMMAND_USED",
                    context: { channel: s, guild: u },
                    command: e,
                    commandOrigin: N.iw.CHAT,
                }),
                eq.Ay.trackWithMetadata(eN.HAw.APPLICATION_COMMAND_USED, {
                    command_id: e.id,
                    application_id: e.applicationId,
                    command_type: e.type,
                    source: M.A.getSource(s.id),
                }));
        }
        return { type: o.kc.GIF };
    },
};
var eF = n(562153);
let eK = /^<@!?(\d+)>/u;
function ez(e) {
    let t = eK.exec(e);
    if (null != t) {
        let n = t[1],
            l = ec.default.getUser(n);
        return null != l && l.bot ? { type: "mention", cleanedQuery: e.substring(t[0].length).trim(), user: l } : null;
    }
    return null;
}
let eJ = {
    ...B,
    sentinel: void 0,
    focusMode: o.e.MANUAL,
    matches(e, t, n, l, i) {
        if (i.commands === o.Ze.DISABLED || i.commands === o.Ze.OLD_BUILT_INS || n.length < 2 || !et._3.getSetting())
            return !1;
        let r = ez(n);
        return null != r && r.cleanedQuery.length > 0;
    },
    queryResults(e, t, n, l, i) {
        if (!et._3.getSetting()) return Y;
        let s = ez(n);
        if (null == s) return Y;
        let u = (0, E.Yn)(e, s.cleanedQuery),
            { commands: a, sections: o } = A.eW(
                { channel: e, type: "channel" },
                { commandTypes: [r.kc.CHAT], text: u.text },
                { limit: 20, placeholderCount: 3, scoreMethod: I.M.COMMAND_OR_APPLICATION, allowFetch: i },
            );
        if (null == a) return Y;
        let c = a.filter((e) => e.section.botId === s.user.id);
        if (u.hasSpaceTerminator) {
            let e = u.text.trim(),
                t = e + " ";
            c = c.filter((n) => n.untranslatedName === e || n.untranslatedName.startsWith(t));
        }
        return 0 === c.length
            ? Y
            : {
                  results: {
                      entries: c
                          .slice(0, 20)
                          .map((e) => ({ command: e, section: o?.find((t) => t.id === e.applicationId) })),
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
            onHover: u,
            onClick: a,
        } = e;
        return L({
            query: r,
            selectedIndex: n,
            autocompletes: t,
            onHover: u,
            onClick: a,
            titleWithQuery: D.t.HFRoZR,
            titleWithoutQuery: D.intl.string(D.t["0hKkS+"]),
            Component: s.commands === o.Ze.OLD_BUILT_INS ? f.Ay.Command : f.Ay.NewCommand,
            getProps: (e) => {
                let { command: t, section: n } = e;
                return { key: t.id, command: t, channel: i, guildId: i.guild_id, showImage: !0, section: n };
            },
            getQuery: (e) => {
                let t = ez(e),
                    n = eF.Ay.getName(l?.id, i.id, t.user);
                return e.replace(eK, `@${n}`);
            },
            key: "commands",
        });
    },
    onSelect(e) {
        let { results: t, index: n, type: l, options: i, channel: r, guild: s } = e,
            u = B.onSelect({
                results: t,
                index: n,
                type: l,
                options: i,
                channel: r,
                guild: s,
                location: N.Oh.SUGGESTION,
            });
        return null == u ? null : { ...u, type: o.kc.COMMAND_SUGGESTION };
    },
};
function eX(e) {
    let { onClick: t, onHover: n, selected: l, index: i, text: r, description: s } = e;
    return (0, c.jsx)(f.Ay.Generic, {
        onClick: t,
        onHover: n,
        selected: l,
        index: i,
        text: r,
        description: s,
        "aria-label": r,
    });
}
var e0 = n(696451),
    e1 = n(427262);
let e4 = {
    sentinel: "@",
    stores: [e0.Ay],
    matches: (e, t, n, l, i) =>
        i.mentions.user !== o.Vf.DENY || i.mentions.role !== o.eP.DENY || i.mentions.global !== o.VN.DENY,
    queryResults(e, t, n, l, i) {
        let r = l.mentions.global === o.VN.ALLOW_EVERYONE || l.mentions.global === o.VN.ALLOW_EVERYONE_OR_HERE,
            s = l.mentions.global === o.VN.ALLOW_EVERYONE_OR_HERE,
            u = l.mentions.user !== o.Vf.DENY,
            a = l.mentions.role !== o.eP.DENY,
            c = l.mentions.user === o.Vf.ALLOW_GUILD,
            d = l.mentions.role === o.eP.ALLOW_ALL,
            {
                users: m,
                globals: p,
                roles: y,
            } = U.Ay.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: r,
                canMentionHere: s,
                canMentionUsers: u,
                canMentionRoles: a,
                canMentionOtherGlobals: l.mentions.otherGlobals,
                includeAllGuildUsers: c,
                includeNonMentionableRoles: d,
                request: i,
            });
        return { results: { users: m, globals: p, roles: y }, metadata: { gameMentionsAvailable: et.BQ.getSetting() } };
    },
    renderResults(e) {
        let {
                results: { users: t, globals: n, roles: l },
                selectedIndex: i,
                channel: r,
                query: s,
                options: u,
                onHover: a,
                onClick: m,
            } = e,
            p = t.map((e, t) =>
                (0, c.jsx)(
                    f.Ay.User,
                    {
                        guildId: r.guild_id,
                        onClick: m,
                        onHover: a,
                        selected: i === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: u.hidePersonalInformation,
                    },
                    e.user.id,
                ),
            ),
            y = n.map((e, n) => {
                let l = {
                    onClick: m,
                    onHover: a,
                    selected: i === n + t.length,
                    index: t.length + n,
                    text: e.text,
                    description: u.hideMentionDescription ? null : e.description,
                };
                return "gameMentionInput" === e.inlineAutocompleteType
                    ? (0, d.createElement)(eX, { ...l, key: e.text })
                    : (0, d.createElement)(f.Ay.Generic, { ...l, key: e.text, "aria-label": e.text });
            }),
            h = l.map((e, l) =>
                (0, c.jsx)(
                    f.Ay.Role,
                    {
                        onClick: m,
                        onHover: a,
                        selected: i === l + t.length + n.length,
                        index: t.length + n.length + l,
                        role: e,
                        hideDescription: u.hideMentionDescription,
                        guildId: r.guild_id,
                    },
                    e.id,
                ),
            ),
            g = u.mentions.user === o.Vf.DENY,
            A = t.length > 0 || n.length > 0 || l.length > 0,
            I = { titleWithQuery: D.t.rPNimn, titleWithoutQuery: D.intl.string(D.t["9Oq93m"]) };
        return (
            0 === t.length && n.length > 0
                ? (I = { titleWithQuery: D.t.pg0anB, titleWithoutQuery: D.intl.string(D.t["+1H47t"]) })
                : (g || (0 === t.length && l.length > 0)) &&
                  (I = { titleWithQuery: D.t.MLiD1e, titleWithoutQuery: D.intl.string(D.t["LPJmL/"]) }),
            (0, c.jsx)(
                d.Fragment,
                {
                    children: A
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  _({
                                      ...I,
                                      query: s,
                                      getQuery: function (e) {
                                          return `@${e}`;
                                      },
                                  }),
                                  p,
                                  n.length > 0 && t.length > 0 ? (0, c.jsx)(f.Ay.Divider, {}) : null,
                                  y,
                                  l.length > 0 && (t.length > 0 || n.length > 0) ? (0, c.jsx)(f.Ay.Divider, {}) : null,
                                  h,
                              ],
                          })
                        : null,
                },
                "mentions",
            )
        );
    },
    onSelect(e) {
        var t, n, l, i, r, s;
        let {
                results: { users: u, globals: a, roles: c },
                index: d,
                options: m,
                channel: p,
            } = e,
            y = u[d],
            h = a[d - u.length],
            g = c[d - u.length - a.length],
            A = o.kc.MENTION;
        if (null != y) {
            m.insertText(
                ((t = y.user),
                (n = p),
                (l = m.hidePersonalInformation),
                U.Ay.hasSameRoleAsUsername(n, t)
                    ? `@${t.tag}`
                    : `@${e1.Ay.getUserTag(t, { identifiable: l ? "never" : "always" })}`),
                ((i = y.user), `<@${i.id}>`),
            );
        } else if (null != h)
            if (null != h.inlineAutocompleteType)
                switch ((m.insertAutocompleteInput(h.inlineAutocompleteType), h.inlineAutocompleteType)) {
                    case "gameMentionInput":
                        A = o.kc.GAME_MENTION;
                        break;
                    case "timestampMentionInput":
                        A = o.kc.TIMESTAMP;
                }
            else m.insertText(h.text);
        else {
            null != g && m.insertText(((r = g), `@${r.name}`), ((s = g), `<@&${s.id}>`));
        }
        return { type: A };
    },
    getSpaceSelectIndex(e) {
        let {
                results: { users: t, globals: n },
                queryText: l,
            } = e,
            i = l.toLowerCase(),
            r = n.findIndex((e) => !0 === e.autoInsertOnSpace && e.test === i);
        return -1 === r ? null : t.length + r;
    },
};
var e7 = n(307731);
let e8 = { results: { command: null, stickers: [] } };
function e2(e, t) {
    return (0, c.jsx)(O.A, { sticker: e, isInteracting: t, size: 40 });
}
let e5 = {
    stores: [eg.A],
    matches: (e, t, n, l, i) =>
        i.commands !== o.Ze.DISABLED &&
        i.commands !== o.Ze.OLD_BUILT_INS &&
        M.A.getActiveCommand(e.id)?.integrationType === eN.p_j.STICKER &&
        M.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, l) {
        let i = M.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == i) return e8;
        let r = [];
        return (
            (0, eh.YB)(),
            {
                results: {
                    command: i,
                    stickers: (r = U.Ay.queryStickers([n], !0, [e, (e, t) => t === ey.Ux.SENDABLE]).slice(0, 8)),
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
        return (0, c.jsx)(c.Fragment, {
            children: L({
                query: l,
                selectedIndex: n,
                autocompletes: t,
                onHover: i,
                onClick: r,
                titleWithQuery: D.t.uferGG,
                titleWithoutQuery: D.intl.string(D.t["fT+Yjp"]),
                Component: f.Ay.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: e2,
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
                guild: u,
                queryText: a,
            } = e;
        if (null == n || i >= l.length) return { type: null };
        let c = M.A.getActiveCommand(s.id);
        c?.inputType === N.y$.BUILT_IN_INTEGRATION &&
            (eT.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: s, guild: u },
                command: c,
                commandOrigin: N.iw.CHAT,
            }),
            eq.Ay.trackWithMetadata(eN.HAw.APPLICATION_COMMAND_USED, {
                command_id: c.id,
                application_id: c.applicationId,
                command_type: c.type,
                source: M.A.getSource(s.id),
            }));
        let d = l[i];
        return (
            r.sendSticker(d.sticker, eA.D6.BUILT_IN_INTEGRATION),
            d.sticker.type === eA.NL.GUILD && (t = d.sticker.guild_id),
            eq.Ay.trackWithMetadata(eN.HAw.SEARCH_RESULT_SELECTED, {
                load_id: d.sticker.id,
                search_type: eN.I4_.STICKER,
                source_object: `/${n}`,
                total_results: l.length,
                index_num: i,
                expression_guild_id: t,
                sticker_id: d.sticker.id,
                query: a,
            }),
            { type: o.kc.STICKER, metadata: { numStickerResults: l.length, stickerId: d.sticker.id } }
        );
    },
};
var e6 = n(379418),
    e3 = n(536637),
    e9 = n.n(e3);
let te = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"],
    tt = [
        e9().ISO_8601,
        ...new Set([
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
            ].flatMap((e) => te.map((t) => `${e} ${t}`)),
            ...te,
        ]),
    ],
    tn = [
        o.DB.CHOICES,
        o.DB.GAME,
        o.DB.GIFS,
        o.DB.STICKERS,
        o.DB.COMMAND_OPTIONS,
        o.DB.EMOJIS_AND_STICKERS,
        o.DB.REACTIONS,
        o.DB.CHANNELS,
        o.DB.MENTIONS,
        o.DB.COMMANDS,
        o.DB.LEGACY_COMMANDS,
        o.DB.TIMESTAMPS,
    ],
    tl = {
        [o.DB.CHANNELS]: {
            sentinel: "#",
            matches: (e, t, n, l, i) => i.mentions.channel !== o.xS.DENY && !e.isPrivate(),
            queryResults(e, t, n, l, i) {
                let r,
                    s,
                    u = ea.I6;
                return (
                    n.charAt(0) === er.AT.VOICE_CHANNEL && ((u = ea.vM), (n = n.substring(1))),
                    l.forNonStringCommandOption
                        ? (r = U.Ay.queryApplicationCommandChannelResults({
                              query: n,
                              channel: e,
                              channelTypes: l.allowedChannelTypes,
                          }))
                        : ((r = U.Ay.queryChannelResults({ query: n, channel: e, type: u })),
                          null != t &&
                              ((s = U.Ay.queryStaticRouteChannels({ query: n, guild: t })), r.channels.unshift(...s))),
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
                        onHover: u,
                        onClick: a,
                    } = e,
                    o = r.charAt(0) === er.AT.VOICE_CHANNEL;
                return (
                    o
                        ? ((t = D.t["rMUL3+"]), (n = D.intl.string(D.t.CYnO4s)), (r = r.substring(1)))
                        : s.forNonStringCommandOption
                          ? ((t = D.t.upNFT5), (n = D.intl.string(D.t.OGiMXJ)))
                          : ((t = D.t.UhnmJD), (n = D.intl.string(D.t.nIfr0Y))),
                    L({
                        query: r,
                        selectedIndex: i,
                        autocompletes: l,
                        onHover: u,
                        onClick: a,
                        titleWithQuery: t,
                        titleWithoutQuery: n,
                        Component: f.Ay.Channel,
                        getProps: (e) => ({ channel: e, key: e.id, category: eu.A.getChannel(e.parent_id) }),
                        getQuery: (e) => (o ? `#${er.AT.VOICE_CHANNEL}${e}` : `#${e}`),
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
                                case ei.r.PUBLIC_THREAD:
                                case ei.r.PRIVATE_THREAD:
                                case ei.r.ANNOUNCEMENT_THREAD:
                                case ei.r.GUILD_VOICE:
                                case ei.r.GUILD_STAGE_VOICE:
                                case ei.r.GUILD_CATEGORY:
                                    return `#"${(0, es.Eq)((0, es.m1)(e, ec.default, eo.A))}"`;
                                default:
                                    let t = ea.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                    return `#${null != t ? t.name : (0, es.m1)(e, ec.default, eo.A)}`;
                            }
                        })(r),
                        ((t = r), ed.aQ.has(t.id) ? `<id:${t.id}>` : `<#${t.id}>`),
                    ),
                    { type: o.kc.CHANNEL }
                );
            },
        },
        [o.DB.COMMANDS]: B,
        [o.DB.COMMAND_OPTIONS]: K,
        [o.DB.CHOICES]: Z,
        [o.DB.EMOJIS_AND_STICKERS]: eS,
        [o.DB.STICKERS]: e5,
        [o.DB.GIFS]: eZ,
        [o.DB.LEGACY_COMMANDS]: eJ,
        [o.DB.MENTIONS]: e4,
        [o.DB.REACTIONS]: {
            sentinel: "+:",
            matches: (e, t, n, l, i) =>
                l &&
                (i.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
                (C.A.can(eN.xBc.ADD_REACTIONS, e) || e.isPrivate()),
            queryResults(e, t, n, l, i) {
                let { emojis: r } = U.Ay.queryEmojiResults({
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
                return L({
                    query: l,
                    selectedIndex: n,
                    autocompletes: t,
                    onHover: i,
                    onClick: r,
                    titleWithQuery: D.t.o1Nmpc,
                    titleWithoutQuery: D.intl.string(D.t.sMOuuS),
                    Component: f.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? eI.A.getGuild(e.guildId) : null,
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
                return (i.sendMessage(((t = r), `+:${t.name}:`)), { type: o.kc.REACTION });
            },
        },
        [o.DB.GAME]: en,
        [o.DB.TIMESTAMPS]: {
            autocompleteInputElementType: "timestampMentionInput",
            matches: (e, t, n, l, i) => n.length > 1,
            queryResults: (e, t, l) => ({
                results: {
                    mentions: (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e9()(),
                            l =
                                "" === e
                                    ? null
                                    : (function () {
                                          let e = n(858197),
                                              t = eD.default.locale;
                                          if ("en-US" === t) return e.en;
                                          if ("en-GB" === t) return e.en.GB;
                                          if ("de" === t) return e.de;
                                          if ("fr" === t) return e.fr;
                                          if ("ja" === t) return e.ja;
                                          else if ("nl" === t) return e.nl;
                                          else if ("ru" === t) return e.ru;
                                          else if ("it" === t) return e.it;
                                          else if ("uk" === t) return e.uk;
                                          else if ("zh-CN" === t) return e.zh.hans;
                                          else if ("zh-TW" === t) return e.zh.hant;
                                          else if (t.startsWith("sv-")) return e.sv;
                                          else if (t.startsWith("pt-")) return e.pt;
                                          else if (t.startsWith("es-")) return e.es;
                                          else return null;
                                      })(),
                            [i] = l?.parse(e, t.toDate()) ?? [void 0],
                            r = i?.start != null && i?.end == null && i.text === e,
                            s = r ? e9()(i.start.date()) : "" === e ? e9().invalid() : e9()(e, tt, !0),
                            u = [],
                            { format: a } = s.creationData();
                        if (
                            ("string" != typeof a && (a = void 0),
                            "" !== e || s.isValid() || ((s = t.clone()), (a = "YYYYMMDDHHmmss")),
                            s.isValid() && (r || null != a))
                        ) {
                            let e;
                            if (r && !i.start.isCertain("hour")) {
                                let e = 9e5 * Math.round(s.valueOf() / 9e5);
                                s = e9()(e);
                            }
                            let n = r ? i.start.isCertain("weekday") : a?.includes("d"),
                                l = r
                                    ? i.start.isCertain("day") ||
                                      i.start.isCertain("month") ||
                                      i.start.isCertain("year")
                                    : a?.includes("D"),
                                o = r ? i.start.isCertain("year") : a?.includes("Y"),
                                c = r ? i.start.isCertain("second") : a?.includes("s"),
                                d = s.unix().toString(),
                                m = c ? "S" : "s";
                            l || n
                                ? n && !l
                                    ? (e = {
                                          periodType: "week",
                                          previousName: D.t["4uTwgO"],
                                          currentName: D.t["6YiNaP"],
                                          nextName: D.t.HE4jqH,
                                      })
                                    : o ||
                                      (e = {
                                          periodType: "year",
                                          previousName: D.t.R7VMEE,
                                          currentName: D.t["U8lK/J"],
                                          nextName: D.t.OppVVE,
                                      })
                                : (u.push({
                                      mention: { timestamp: d, format: c ? "T" : "t" },
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
                                let u = t.clone();
                                return (
                                    u.add(1, n.periodType),
                                    t.isSame(e, n.periodType)
                                        ? ((r = D.intl.string(n.currentName)),
                                          t.isSameOrBefore(e) && (i = D.intl.string(n.nextName)))
                                        : t.isSame(s, n.periodType) &&
                                          ((r = D.intl.string(n.previousName)), (i = D.intl.string(n.currentName))),
                                    null != i && (l = u.unix().toString()),
                                    { adjustedTimestamp: l, adjustedDescription: i, unadjustedDescription: r }
                                );
                            })(t, s, e);
                            (null != p &&
                                (u.push({ mention: { timestamp: p, format: m }, description: y }),
                                u.push({ mention: { timestamp: p, format: "f" } }),
                                u.push({ mention: { timestamp: p, format: "F" } }),
                                u.push({ mention: { timestamp: p, format: "R" } }),
                                u.push({})),
                                u.push({ mention: { timestamp: d, format: m }, description: h }),
                                u.push({ mention: { timestamp: d, format: "f" } }),
                                u.push({ mention: { timestamp: d, format: "F" } }),
                                u.push({ mention: { timestamp: d, format: "R" } }));
                        }
                        return u;
                    })(l),
                },
            }),
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
                        if (void 0 === l) return (0, c.jsx)(f.Ay.Divider, {}, `divider-${t}`);
                        let u = (0, e6.WA)(l);
                        return null == u
                            ? null
                            : (0, c.jsx)(
                                  f.Ay.Timestamp,
                                  { onClick: r, onHover: i, selected: n === t, index: t, timestamp: u, description: s },
                                  `timestamp-${t}`,
                              );
                    }),
                    u = D.t.I4nJDb,
                    a = D.intl.string(D.t.pUP8UM);
                return (0, c.jsxs)(
                    d.Fragment,
                    {
                        children: [
                            _({ titleWithQuery: u, titleWithoutQuery: a, query: l, getQuery: (e) => `${e}` }),
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
                let r = (0, e6.tf)(i.timestamp, i.format),
                    s = (0, e6.WA)(i)?.formatted;
                return null == s
                    ? null
                    : (l.replaceInlineInput("timestampMentionInput", s, r), { type: o.kc.TIMESTAMP });
            },
        },
    };
function ti(e) {
    let {
            activeCommandOption: t,
            canMentionUsers: n = !0,
            canMentionRoles: l = !0,
            canMentionChannels: i = !0,
            canMentionEveryone: a,
            canMentionOtherGlobals: c = !0,
            useNewSlashCommands: d,
            canOnlyUseTextCommands: m,
            canSendStickers: p,
            canSendSoundmoji: y,
            hideMentionDescription: h,
            hidePersonalInformation: g,
            type: A,
            emojiIntention: I,
            editorRef: M,
            onSendMessage: N,
            onSendSticker: E,
            setValue: f,
        } = e,
        S = {
            mentions: { channel: o.xS.DENY, global: o.VN.DENY, role: o.eP.DENY, user: o.Vf.DENY, otherGlobals: !1 },
            commands: o.Ze.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === y,
            forNonStringCommandOption: null != t && t.type !== r.n4.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === g,
            chatInputType: A,
            emojiIntention: I,
            sendMessage: N,
            sendSticker: E,
            insertText: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                M.current?.insertAutocomplete(e, t ?? e, n);
            },
            replaceText: (e, t) => {
                f(e, t ?? (0, u.x7)(e));
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
        (e.canMentionChannels && (S.mentions.channel = o.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (S.mentions.global = e.canMentionHere ? o.VN.ALLOW_EVERYONE_OR_HERE : o.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (S.mentions.role = e.canMentionNonMentionableRoles ? o.eP.ALLOW_ALL : o.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (S.mentions.user = e.canMentionAnyGuildUser ? o.Vf.ALLOW_GUILD : o.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (S.mentions.otherGlobals = !0),
            (S.hideMentionDescription = !0));
    } else
        (i && (S.mentions.channel = o.xS.ALLOW_SELECTABLE),
            l && (S.mentions.role = o.eP.ALLOW_MENTIONABLE),
            n && (S.mentions.user = o.Vf.ALLOW_CHANNEL),
            a && (S.mentions.global = o.VN.ALLOW_EVERYONE_OR_HERE),
            c && (S.mentions.otherGlobals = !0));
    return (
        A.commands?.enabled &&
            (d ? (S.commands = m ? o.Ze.NEW_TEXT_ONLY : o.Ze.NEW) : (S.commands = o.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (S.allowedChannelTypes = t.channelTypes),
        S
    );
}
function tr(e) {
    let { type: t, channel: n, guild: l, query: i, isAtStart: r, options: s } = e,
        u = tl[t];
    if (null != u.sentinel) {
        if (!i.startsWith(u.sentinel)) return !1;
        i = i.substring(u.sentinel.length);
    }
    return null == u.matches || !!u.matches(n, l, i, r, s);
}
function ts(e) {
    let {
            channel: t,
            guild: n,
            options: l,
            currentWord: r,
            currentWordIsAtStart: s,
            textValue: u,
            optionText: c,
            parentAutocompleteInputType: d,
            parentAutocompleteInputValue: m,
        } = e,
        p = null;
    for (let e of tn) {
        let y = tl[e];
        if (null != d) {
            if (y.autocompleteInputElementType === d) {
                (i()(null != m, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (p = { type: e, typeInfo: y, query: m }));
                break;
            }
            continue;
        }
        if (null == y.autocompleteInputElementType) {
            if (e === o.DB.GIFS || e === o.DB.CHOICES) {
                if (l.commands === o.Ze.OLD_BUILT_INS) {
                    if (tr({ type: e, channel: t, guild: n, query: u, isAtStart: !1, options: l })) {
                        p = { type: e, typeInfo: y, query: u };
                        break;
                    }
                } else if (tr({ type: e, channel: t, guild: n, query: c, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: c };
            } else if (e === o.DB.STICKERS) {
                if (tr({ type: e, channel: t, guild: n, query: c, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: y, query: c };
            } else if (e === o.DB.COMMANDS && l.commands !== o.Ze.OLD_BUILT_INS) {
                if (tr({ type: e, channel: t, guild: n, query: u, isAtStart: !0, options: l })) {
                    p = { type: e, typeInfo: y, query: u.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === o.DB.LEGACY_COMMANDS) {
                if (tr({ type: e, channel: t, guild: n, query: u, isAtStart: s, options: l })) {
                    p = { type: e, typeInfo: y, query: u };
                    break;
                }
            } else if (e === o.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != r && r.length > 0 && (0, a.K)(e7.EmojiInteractionPoint.AutocompleteTyped),
                    null != r && tr({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l }))
                ) {
                    p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != r && tr({ type: e, channel: t, guild: n, query: r, isAtStart: s, options: l })) {
                p = { type: e, typeInfo: y, query: r.substring(y.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == p ? null : ((p.query = p.query.toLocaleLowerCase()), p);
}
function tu(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = o.DB.CHOICES;
    else
        switch (e.type) {
            case r.n4.BOOLEAN:
                n = o.DB.CHOICES;
                break;
            case r.n4.CHANNEL:
                n = o.DB.CHANNELS;
                break;
            case r.n4.ROLE:
            case r.n4.USER:
            case r.n4.MENTIONABLE:
                n = o.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let l = tl[n];
    return { type: n, typeInfo: l, query: t };
}
