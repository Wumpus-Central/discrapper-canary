"use strict";
n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(73153),
    a = n(58149),
    s = n(861382),
    o = n(392054),
    l = n(580424),
    u = n(361670),
    c = n(631576),
    d = n(679382),
    _ = n(842086),
    f = n(148355),
    p = n(248465),
    h = n(634788),
    m = n(374803),
    g = n(652215),
    E = n(985018);
let A = 8,
    I = { results: { command: null, stickers: [] } };
function T(e, t) {
    return (0, r.jsx)(f.A, { sticker: e, isInteracting: t, size: 40 });
}
let y = {
    stores: [d.A],
    matches: (e, t, n, r, i) =>
        i.commands !== m.Ze.DISABLED &&
        i.commands !== m.Ze.OLD_BUILT_INS &&
        s.A.getActiveCommand(e.id)?.integrationType === g.p_j.STICKER &&
        s.A.getOptionStates(e.id).query.hasValue,
    queryResults(e, t, n, r) {
        let i = s.A.getActiveCommand(e.id)?.untranslatedName;
        if (null == i) return I;
        let a = [];
        (0, c.YB)();
        let o = p.Ay.queryStickers([n], !0, [e, (e, t) => t === u.Ux.SENDABLE]),
            l = Math.max(A);
        return { results: { command: i, stickers: (a = o.slice(0, l)) }, metadata: { numStickerResults: a.length } };
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: i,
            onHover: a,
            onClick: s,
        } = e;
        return (0, r.jsx)(r.Fragment, {
            children: (0, h.GM)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: s,
                titleWithQuery: E.t.uferGG,
                titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
                Component: l.Ay.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: T,
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
                results: { command: n, stickers: r },
                index: l,
                options: u,
                channel: c,
                guild: d,
                queryText: f,
            } = e;
        if (null == n || l >= r.length) return { type: null };
        let p = s.A.getActiveCommand(c.id);
        p?.inputType === o.y$.BUILT_IN_INTEGRATION &&
            (i.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: { channel: c, guild: d },
                command: p,
                commandOrigin: o.iw.CHAT,
            }),
            a.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
                command_id: p.id,
                application_id: p.applicationId,
                command_type: p.type,
                source: s.A.getSource(c.id),
            }));
        let h = r[l];
        return (
            u.sendSticker(h.sticker, _.D6.BUILT_IN_INTEGRATION),
            h.sticker.type === _.NL.GUILD && (t = h.sticker.guild_id),
            a.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
                load_id: h.sticker.id,
                search_type: g.I4_.STICKER,
                source_object: `/${n}`,
                total_results: r.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: h.sticker.id,
                query: f,
            }),
            { type: m.kc.STICKER, metadata: { numStickerResults: r.length, stickerId: h.sticker.id } }
        );
    },
};
