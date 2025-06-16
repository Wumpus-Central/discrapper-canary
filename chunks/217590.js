n.d(t, {
    Iw: () => h,
    On: () => p,
    Yk: () => _,
    cQ: () => u,
    ev: () => c,
    m1: () => f,
    n8: () => d
});
var r = n(367907),
    i = n(626135),
    a = n(373228),
    o = n(981631),
    s = n(957825),
    l = n(474936);
let c = (e) => {
        let { containerWidth: t, favoriteStickers: n, frequentlyUsedStickers: i, guildStickers: l, stickersTotal: c } = e;
        r.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_OPENED, {
            width: t,
            tab: s.X1.STICKER,
            badged: !1,
            num_expressions_favorites: n.length,
            num_animated_expressions_favorites: n.filter((e) => (0, a.aQ)(e.format_type)).length,
            num_custom_expressions_favorites: n.filter((e) => (0, a.z)(e.type)).length,
            num_standard_expressions_favorites: n.filter((e) => !(0, a.z)(e.type)).length,
            num_expressions_frecent: i.length,
            num_custom_expressions_frecent: i.filter((e) => (0, a.z)(e.type)).length,
            num_animated_expressions_frecent: i.filter((e) => (0, a.aQ)(e.format_type)).length,
            num_standard_expressions_frecent: i.filter((e) => !(0, a.z)(e.type)).length,
            num_current_guild_expressions: l.length,
            num_custom_expressions_total: c
        });
    },
    u = (e) => {
        let t,
            { sticker: n, location: i } = e;
        n.type === a.n0.GUILD && (t = n.guild_id),
            r.ZP.trackWithMetadata(o.rMx.EXPRESSION_FAVORITED, {
                location: i,
                expression_type: s.X1.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, a.aQ)(n.format_type),
                is_custom: (0, a.z)(n.type)
            });
    },
    d = () => {
        i.default.track(o.rMx.SEARCH_STARTED, { search_type: o.aib.STICKER });
    },
    f = (e, t, n) => {
        r.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_VIEWED, {
            search_type: o.aib.STICKER,
            total_results: t,
            query: e,
            is_suggestion: n
        });
    },
    _ = (e, t, n) => {
        let i,
            { sticker: s } = e;
        s.type === a.n0.GUILD && (i = s.guild_id),
            r.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_SELECTED, {
                load_id: s.id,
                search_type: o.aib.STICKER,
                source_object: 'Sticker Picker',
                total_results: n,
                expression_guild_id: i,
                sticker_id: s.id,
                query: t
            });
    },
    p = (e) => {
        let t,
            { sticker: n, category: i } = e;
        n.type === a.n0.GUILD && (t = n.guild_id),
            r.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: l.cd.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: i,
                expression_guild_id: t,
                is_animated: (0, a.aQ)(n.format_type),
                is_custom: (0, a.z)(n.type)
            });
    },
    h = (e) => {
        null != e &&
            '' !== e &&
            r.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: o.aib.STICKER,
                source_object: 'Sticker Picker'
            });
    };
