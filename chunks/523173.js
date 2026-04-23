n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var r = n(73153),
    i = n(58149),
    s = n(861382),
    o = n(392054),
    u = n(580424),
    a = n(361670),
    m = n(631576),
    c = n(679382),
    d = n(842086),
    p = n(148355),
    y = n(248465),
    A = n(634788),
    h = n(374803),
    g = n(652215),
    M = n(985018);
let I = { results: { command: null, stickers: [] } };
function N(e, t) {
    return (0, l.jsx)(p.A, { sticker: e, isInteracting: t, size: 40 });
}
let E = {
    stores: [c.A],
    matches: (e, t, n, l, r) =>
        r.commands !== h.Ze.DISABLED &&
        r.commands !== h.Ze.OLD_BUILT_INS &&
        s.A.getActiveCommand(e.id)?.integrationType === g.p_j.STICKER &&
        s.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, l) {
        let r = s.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == r) return I;
        let i = [];
        return (
            (0, m.YB)(),
            {
                results: {
                    command: r,
                    stickers: (i = y.Ay.queryStickers([n], !0, [e, (e, t) => t === a.Ux.SENDABLE]).slice(0, 8)),
                },
                metadata: { numStickerResults: i.length },
            }
        );
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: r,
            onHover: i,
            onClick: s,
        } = e;
        return (0, l.jsx)(l.Fragment, {
            children: (0, A.GM)({
                query: r,
                selectedIndex: n,
                autocompletes: t,
                onHover: i,
                onClick: s,
                titleWithQuery: M.t.uferGG,
                titleWithoutQuery: M.intl.string(M.t["fT+Yjp"]),
                Component: u.Ay.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: N,
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
                index: u,
                options: a,
                channel: m,
                guild: c,
                queryText: p,
            } = e;
        if (null == n || u >= l.length) return { type: null };
        let y = s.A.getActiveCommand(m.id);
        y?.inputType === o.y$.BUILT_IN_INTEGRATION &&
            (r.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: m, guild: c },
                command: y,
                commandOrigin: o.iw.CHAT,
            }),
            i.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
                command_id: y.id,
                application_id: y.applicationId,
                command_type: y.type,
                source: s.A.getSource(m.id),
            }));
        let A = l[u];
        return (
            a.sendSticker(A.sticker, d.D6.BUILT_IN_INTEGRATION),
            A.sticker.type === d.NL.GUILD && (t = A.sticker.guild_id),
            i.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
                load_id: A.sticker.id,
                search_type: g.I4_.STICKER,
                source_object: `/${n}`,
                total_results: l.length,
                index_num: u,
                expression_guild_id: t,
                sticker_id: A.sticker.id,
                query: p,
            }),
            { type: h.kc.STICKER, metadata: { numStickerResults: l.length, stickerId: A.sticker.id } }
        );
    },
};
