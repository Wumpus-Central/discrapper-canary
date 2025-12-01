n.d(t, { Z: () => v });
var r = n(54381);
n(473749);
var i = n(570140),
    a = n(367907),
    o = n(998698),
    s = n(895924),
    l = n(588468),
    c = n(285651),
    u = n(268350),
    d = n(926491),
    f = n(373228),
    p = n(419922),
    _ = n(483360),
    m = n(877565),
    h = n(590921),
    g = n(981631),
    E = n(388032);
let b = 8,
    y = {
        results: {
            command: null,
            stickers: [],
        },
    };
function O(e, t) {
    return (0, r.jsx)(p.Z, {
        sticker: e,
        isInteracting: t,
        size: 40,
    });
}
let v = {
    stores: [d.Z],
    matches(e, t, n, r, i) {
        var a;
        return (
            i.commands !== h.L8.DISABLED &&
            i.commands !== h.L8.OLD_BUILT_INS &&
            (null == (a = o.Z.getActiveCommand(e.id)) ? void 0 : a.integrationType) === g.q9n.STICKER &&
            o.Z.getOptionStates(e.id).query.hasValue
        );
    },
    queryResults(e, t, n, r) {
        var i;
        let a = null == (i = o.Z.getActiveCommand(e.id)) ? void 0 : i.untranslatedName;
        if (null == a) return y;
        let s = [];
        (0, u.$p)();
        let l = _.ZP.queryStickers([n], !0, [e, (e, t) => t === c.eb.SENDABLE]),
            d = Math.max(b);
        return {
            results: {
                command: a,
                stickers: (s = l.slice(0, d)),
            },
            metadata: { numStickerResults: s.length },
        };
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: i,
            onHover: a,
            onClick: o,
        } = e;
        return (0, r.jsx)(r.Fragment, {
            children: (0, m.HI)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: o,
                titleWithQuery: E.t.uferGG,
                titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
                Component: l.ZP.Sticker,
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
        let _ = o.Z.getActiveCommand(u.id);
        (null == _ ? void 0 : _.inputType) === s.iw.BUILT_IN_INTEGRATION &&
            (i.Z.dispatch({
                type: "APPLICATION_COMMAND_USED",
                context: {
                    channel: u,
                    guild: d,
                },
                command: _,
                commandOrigin: s.bB.CHAT,
            }),
            a.ZP.trackWithMetadata(g.rMx.APPLICATION_COMMAND_USED, {
                command_id: _.id,
                application_id: _.applicationId,
                command_type: _.type,
                source: o.Z.getSource(u.id),
            }));
        let m = r[l];
        return (
            c.sendSticker(m.sticker, f.V0.BUILT_IN_INTEGRATION),
            m.sticker.type === f.n0.GUILD && (t = m.sticker.guild_id),
            a.ZP.trackWithMetadata(g.rMx.SEARCH_RESULT_SELECTED, {
                load_id: m.sticker.id,
                search_type: g.aib.STICKER,
                source_object: "/".concat(n),
                total_results: r.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: m.sticker.id,
                query: p,
            }),
            {
                type: h.z2.STICKER,
                metadata: {
                    numStickerResults: r.length,
                    stickerId: m.sticker.id,
                },
            }
        );
    },
};
