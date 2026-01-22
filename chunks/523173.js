n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(73153),
    a = n(58149),
    s = n(861382),
    o = n(392054),
    l = n(580424),
    c = n(361670),
    u = n(631576),
    d = n(679382),
    f = n(842086),
    p = n(148355),
    _ = n(248465),
    h = n(634788),
    m = n(374803),
    g = n(652215),
    E = n(985018);
let b = 8,
    y = {
        results: {
            command: null,
            stickers: [],
        },
    };
function O(e, t) {
    return (0, r.jsx)(p.A, {
        sticker: e,
        isInteracting: t,
        size: 40,
    });
}
let A = {
    stores: [d.A],
    matches(e, t, n, r, i) {
        var a;
        return (
            i.commands !== m.Ze.DISABLED &&
            i.commands !== m.Ze.OLD_BUILT_INS &&
            (null == (a = s.A.getActiveCommand(e.id)) ? void 0 : a.integrationType) === g.p_j.STICKER &&
            s.A.getOptionStates(e.id).query.hasValue
        );
    },
    queryResults(e, t, n, r) {
        var i;
        let a = null == (i = s.A.getActiveCommand(e.id)) ? void 0 : i.untranslatedName;
        if (null == a) return y;
        let o = [];
        (0, u.YB)();
        let l = _.Ay.queryStickers([n], !0, [e, (e, t) => t === c.Ux.SENDABLE]),
            d = Math.max(b);
        return {
            results: {
                command: a,
                stickers: (o = l.slice(0, d)),
            },
            metadata: { numStickerResults: o.length },
        };
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
                        renderSticker: O,
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
                options: c,
                channel: u,
                guild: d,
                queryText: p,
            } = e;
        if (null == n || l >= r.length) return { type: null };
        let _ = s.A.getActiveCommand(u.id);
        (null == _ ? void 0 : _.inputType) === o.y$.BUILT_IN_INTEGRATION &&
            (i.h.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: {
                    channel: u,
                    guild: d,
                },
                command: _,
                commandOrigin: o.iw.CHAT,
            }),
            a.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
                command_id: _.id,
                application_id: _.applicationId,
                command_type: _.type,
                source: s.A.getSource(u.id),
            }));
        let h = r[l];
        return (
            c.sendSticker(h.sticker, f.D6.BUILT_IN_INTEGRATION),
            h.sticker.type === f.NL.GUILD && (t = h.sticker.guild_id),
            a.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
                load_id: h.sticker.id,
                search_type: g.I4_.STICKER,
                source_object: "/".concat(n),
                total_results: r.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: h.sticker.id,
                query: p,
            }),
            {
                type: m.kc.STICKER,
                metadata: {
                    numStickerResults: r.length,
                    stickerId: h.sticker.id,
                },
            }
        );
    },
};
