var i = r(200651);
r(192379);
var a = r(570140),
    o = r(367907),
    s = r(998698),
    l = r(895924),
    u = r(588468),
    c = r(285651),
    d = r(268350),
    f = r(926491),
    p = r(373228),
    h = r(419922),
    _ = r(483360),
    m = r(877565),
    g = r(590921),
    E = r(981631),
    v = r(388032);
let y = 8,
    b = {
        results: {
            command: null,
            stickers: []
        }
    };
function I(e, n) {
    return (0, i.jsx)(h.ZP, {
        sticker: e,
        isInteracting: n,
        size: 40
    });
}
let T = {
    stores: [f.Z],
    matches(e, n, r, i, a) {
        var o;
        return a.commands !== g.L8.DISABLED && a.commands !== g.L8.OLD_BUILT_INS && (null === (o = s.Z.getActiveCommand(e.id)) || void 0 === o ? void 0 : o.integrationType) === E.q9n.STICKER && s.Z.getOptionStates(e.id).query.hasValue;
    },
    queryResults(e, n, r, i) {
        var a;
        let o = null === (a = s.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.untranslatedName;
        if (null == o) return b;
        let l = [];
        (0, d.$p)();
        let u = _.ZP.queryStickers([r], !0, [e, (e, n) => n === c.eb.SENDABLE]),
            f = Math.max(y);
        return {
            results: {
                command: o,
                stickers: (l = u.slice(0, f))
            },
            metadata: { numStickerResults: l.length }
        };
    },
    renderResults(e) {
        let {
            results: { stickers: n },
            selectedIndex: r,
            query: a,
            onHover: o,
            onClick: s
        } = e;
        return (0, i.jsx)(i.Fragment, {
            children: (0, m.HI)({
                query: a,
                selectedIndex: r,
                autocompletes: n,
                onHover: o,
                onClick: s,
                titleWithQuery: v.t.uferGB,
                titleWithoutQuery: v.intl.string(v.t['fT+Yjo']),
                Component: u.ZP.Sticker,
                getProps: (e) => {
                    let { comparator: n, sticker: r } = e;
                    return {
                        renderSticker: I,
                        queryMatch: n !== r.name.toLocaleLowerCase() ? n : void 0,
                        sticker: r,
                        key: r.id
                    };
                },
                getQuery: (e) => e,
                key: 'stickers'
            })
        });
    },
    onSelect(e) {
        let n,
            {
                results: { command: r, stickers: i },
                index: u,
                options: c,
                channel: d,
                guild: f,
                queryText: h
            } = e;
        if (null == r || u >= i.length) return { type: null };
        let _ = s.Z.getActiveCommand(d.id);
        (null == _ ? void 0 : _.inputType) === l.iw.BUILT_IN_INTEGRATION &&
            (a.Z.dispatch({
                type: 'APPLICATION_COMMAND_USED',
                context: {
                    channel: d,
                    guild: f
                },
                command: _,
                commandOrigin: l.bB.CHAT
            }),
            o.ZP.trackWithMetadata(E.rMx.APPLICATION_COMMAND_USED, {
                command_id: _.id,
                application_id: _.applicationId,
                command_type: _.type,
                source: s.Z.getSource(d.id)
            }));
        let m = i[u];
        return (
            c.sendSticker(m.sticker, p.V0.BUILT_IN_INTEGRATION),
            m.sticker.type === p.n0.GUILD && (n = m.sticker.guild_id),
            o.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
                load_id: m.sticker.id,
                search_type: E.aib.STICKER,
                source_object: '/'.concat(r),
                total_results: i.length,
                index_num: u,
                expression_guild_id: n,
                sticker_id: m.sticker.id,
                query: h
            }),
            {
                type: g.z2.STICKER,
                metadata: {
                    numStickerResults: i.length,
                    stickerId: m.sticker.id
                }
            }
        );
    }
};
n.Z = T;
