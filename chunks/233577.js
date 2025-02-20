n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(570140),
    o = n(367907),
    a = n(998698),
    s = n(895924),
    l = n(588468),
    c = n(285651),
    u = n(268350),
    d = n(926491),
    f = n(373228),
    p = n(419922),
    _ = n(483360),
    h = n(877565),
    m = n(590921),
    g = n(981631),
    E = n(388032);
let v = 8,
    b = {
        results: {
            command: null,
            stickers: []
        }
    };
function y(e, t) {
    return (0, r.jsx)(p.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let O = {
    stores: [d.Z],
    matches(e, t, n, r, i) {
        var o;
        return i.commands !== m.L8.DISABLED && i.commands !== m.L8.OLD_BUILT_INS && (null === (o = a.Z.getActiveCommand(e.id)) || void 0 === o ? void 0 : o.integrationType) === g.q9n.STICKER && a.Z.getOptionStates(e.id).query.hasValue;
    },
    queryResults(e, t, n, r) {
        var i;
        let o = null === (i = a.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.untranslatedName;
        if (null == o) return b;
        let s = [];
        (0, u.$p)();
        let l = _.ZP.queryStickers([n], !0, [e, (e, t) => t === c.eb.SENDABLE]),
            d = Math.max(v);
        return {
            results: {
                command: o,
                stickers: (s = l.slice(0, d))
            },
            metadata: { numStickerResults: s.length }
        };
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: i,
            onHover: o,
            onClick: a
        } = e;
        return (0, r.jsx)(r.Fragment, {
            children: (0, h.HI)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: o,
                onClick: a,
                titleWithQuery: E.t.uferGB,
                titleWithoutQuery: E.NW.string(E.t['fT+Yjo']),
                Component: l.ZP.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: y,
                        queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                        sticker: n,
                        key: n.id
                    };
                },
                getQuery: (e) => e,
                key: 'stickers'
            })
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
                queryText: p
            } = e;
        if (null == n || l >= r.length) return { type: null };
        let _ = a.Z.getActiveCommand(u.id);
        (null == _ ? void 0 : _.inputType) === s.iw.BUILT_IN_INTEGRATION &&
            (i.Z.dispatch({
                type: 'APPLICATION_COMMAND_USED',
                context: {
                    channel: u,
                    guild: d
                },
                command: _,
                commandOrigin: s.bB.CHAT
            }),
            o.ZP.trackWithMetadata(g.rMx.APPLICATION_COMMAND_USED, {
                command_id: _.id,
                application_id: _.applicationId,
                command_type: _.type,
                source: a.Z.getSource(u.id)
            }));
        let h = r[l];
        return (
            c.sendSticker(h.sticker, f.V0.BUILT_IN_INTEGRATION),
            h.sticker.type === f.n0.GUILD && (t = h.sticker.guild_id),
            o.ZP.trackWithMetadata(g.rMx.SEARCH_RESULT_SELECTED, {
                load_id: h.sticker.id,
                search_type: g.aib.STICKER,
                source_object: '/'.concat(n),
                total_results: r.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: h.sticker.id,
                query: p
            }),
            {
                type: m.z2.STICKER,
                metadata: {
                    numStickerResults: r.length,
                    stickerId: h.sticker.id
                }
            }
        );
    }
};
