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
    o = n(373228),
    a = n(981631),
    s = n(957825),
    l = n(474936);
let c = (e) => {
        let { containerWidth: t, favoriteStickers: n, frequentlyUsedStickers: i, guildStickers: l, stickersTotal: c } = e;
        r.ZP.trackWithMetadata(a.rMx.EXPRESSION_PICKER_OPENED, {
            width: t,
            tab: s.X1.STICKER,
            badged: !1,
            num_expressions_favorites: n.length,
            num_animated_expressions_favorites: n.filter((e) => (0, o.aQ)(e.format_type)).length,
            num_custom_expressions_favorites: n.filter((e) => (0, o.z)(e.type)).length,
            num_standard_expressions_favorites: n.filter((e) => !(0, o.z)(e.type)).length,
            num_expressions_frecent: i.length,
            num_custom_expressions_frecent: i.filter((e) => (0, o.z)(e.type)).length,
            num_animated_expressions_frecent: i.filter((e) => (0, o.aQ)(e.format_type)).length,
            num_standard_expressions_frecent: i.filter((e) => !(0, o.z)(e.type)).length,
            num_current_guild_expressions: l.length,
            num_custom_expressions_total: c
        });
    },
    u = (e) => {
        let t,
            { sticker: n, location: i } = e;
        n.type === o.n0.GUILD && (t = n.guild_id),
            r.ZP.trackWithMetadata(a.rMx.EXPRESSION_FAVORITED, {
                location: i,
                expression_type: s.X1.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, o.aQ)(n.format_type),
                is_custom: (0, o.z)(n.type)
            });
    },
    d = () => {
        i.default.track(a.rMx.SEARCH_STARTED, { search_type: a.aib.STICKER });
    },
    f = (e, t, n) => {
        r.ZP.trackWithMetadata(a.rMx.SEARCH_RESULT_VIEWED, {
            search_type: a.aib.STICKER,
            total_results: t,
            query: e,
            is_suggestion: n
        });
    },
    _ = (e, t, n) => {
        let i,
            { sticker: s } = e;
        s.type === o.n0.GUILD && (i = s.guild_id),
            r.ZP.trackWithMetadata(a.rMx.SEARCH_RESULT_SELECTED, {
                load_id: s.id,
                search_type: a.aib.STICKER,
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
        n.type === o.n0.GUILD && (t = n.guild_id),
            r.ZP.trackWithMetadata(a.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: l.cd.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: i,
                expression_guild_id: t,
                is_animated: (0, o.aQ)(n.format_type),
                is_custom: (0, o.z)(n.type)
            });
    },
    h = (e) => {
        null != e &&
            '' !== e &&
            r.ZP.trackWithMetadata(a.rMx.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: a.aib.STICKER,
                source_object: 'Sticker Picker'
            });
    };
