n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var r = n(570140),
    a = n(367907),
    s = n(998698),
    o = n(895924),
    l = n(588468),
    u = n(285651),
    c = n(268350),
    d = n(926491),
    f = n(373228),
    _ = n(419922),
    p = n(483360),
    h = n(877565),
    m = n(590921),
    g = n(981631),
    E = n(388032);
let v = 8,
    y = {
        results: {
            command: null,
            stickers: []
        }
    };
function I(e, t) {
    return (0, i.jsx)(_.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let T = {
    stores: [d.Z],
    matches(e, t, n, i, r) {
        var a;
        return r.commands !== m.L8.DISABLED && r.commands !== m.L8.OLD_BUILT_INS && (null === (a = s.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === g.q9n.STICKER && s.Z.getOptionStates(e.id).query.hasValue;
    },
    queryResults(e, t, n, i) {
        var r;
        let a = null === (r = s.Z.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.untranslatedName;
        if (null == a) return y;
        let o = [];
        (0, c.$p)();
        let l = p.ZP.queryStickers([n], !0, [e, (e, t) => t === u.eb.SENDABLE]),
            d = Math.max(v);
        return {
            results: {
                command: a,
                stickers: (o = l.slice(0, d))
            },
            metadata: { numStickerResults: o.length }
        };
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: r,
            onHover: a,
            onClick: s
        } = e;
        return (0, i.jsx)(i.Fragment, {
            children: (0, h.HI)({
                query: r,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: s,
                titleWithQuery: E.t.uferGB,
                titleWithoutQuery: E.intl.string(E.t['fT+Yjo']),
                Component: l.ZP.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: I,
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
                results: { command: n, stickers: i },
                index: l,
                options: u,
                channel: c,
                guild: d,
                queryText: _
            } = e;
        if (null == n || l >= i.length) return { type: null };
        let p = s.Z.getActiveCommand(c.id);
        (null == p ? void 0 : p.inputType) === o.iw.BUILT_IN_INTEGRATION &&
            (r.Z.dispatch({
                type: 'APPLICATION_COMMAND_USED',
                context: {
                    channel: c,
                    guild: d
                },
                command: p,
                commandOrigin: o.bB.CHAT
            }),
            a.ZP.trackWithMetadata(g.rMx.APPLICATION_COMMAND_USED, {
                command_id: p.id,
                application_id: p.applicationId,
                command_type: p.type,
                source: s.Z.getSource(c.id)
            }));
        let h = i[l];
        return (
            u.sendSticker(h.sticker, f.V0.BUILT_IN_INTEGRATION),
            h.sticker.type === f.n0.GUILD && (t = h.sticker.guild_id),
            a.ZP.trackWithMetadata(g.rMx.SEARCH_RESULT_SELECTED, {
                load_id: h.sticker.id,
                search_type: g.aib.STICKER,
                source_object: '/'.concat(n),
                total_results: i.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: h.sticker.id,
                query: _
            }),
            {
                type: m.z2.STICKER,
                metadata: {
                    numStickerResults: i.length,
                    stickerId: h.sticker.id
                }
            }
        );
    }
};
