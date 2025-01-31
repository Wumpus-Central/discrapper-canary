n.d(t, {
    Iw: () => h,
    On: () => p,
    Yk: () => _,
    cQ: () => c,
    ev: () => u,
    m1: () => f,
    n8: () => d
});
var i = n(367907),
    r = n(626135),
    a = n(373228),
    s = n(981631),
    o = n(957825),
    l = n(474936);
let u = (e) => {
        let { containerWidth: t, favoriteStickers: n, frequentlyUsedStickers: r, guildStickers: l, stickersTotal: u } = e;
        i.ZP.trackWithMetadata(s.rMx.EXPRESSION_PICKER_OPENED, {
            width: t,
            tab: o.X1.STICKER,
            badged: !1,
            num_expressions_favorites: n.length,
            num_animated_expressions_favorites: n.filter((e) => (0, a.aQ)(e.format_type)).length,
            num_custom_expressions_favorites: n.filter((e) => (0, a.z)(e.type)).length,
            num_standard_expressions_favorites: n.filter((e) => !(0, a.z)(e.type)).length,
            num_expressions_frecent: r.length,
            num_custom_expressions_frecent: r.filter((e) => (0, a.z)(e.type)).length,
            num_animated_expressions_frecent: r.filter((e) => (0, a.aQ)(e.format_type)).length,
            num_standard_expressions_frecent: r.filter((e) => !(0, a.z)(e.type)).length,
            num_current_guild_expressions: l.length,
            num_custom_expressions_total: u
        });
    },
    c = (e) => {
        let t,
            { sticker: n, location: r } = e;
        n.type === a.n0.GUILD && (t = n.guild_id),
            i.ZP.trackWithMetadata(s.rMx.EXPRESSION_FAVORITED, {
                location: r,
                expression_type: o.X1.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, a.aQ)(n.format_type),
                is_custom: (0, a.z)(n.type)
            });
    },
    d = () => {
        r.default.track(s.rMx.SEARCH_STARTED, { search_type: s.aib.STICKER });
    },
    f = (e, t, n) => {
        i.ZP.trackWithMetadata(s.rMx.SEARCH_RESULT_VIEWED, {
            search_type: s.aib.STICKER,
            total_results: t,
            query: e,
            is_suggestion: n
        });
    },
    _ = (e, t, n) => {
        let r;
        let { sticker: o } = e;
        o.type === a.n0.GUILD && (r = o.guild_id),
            i.ZP.trackWithMetadata(s.rMx.SEARCH_RESULT_SELECTED, {
                load_id: o.id,
                search_type: s.aib.STICKER,
                source_object: 'Sticker Picker',
                total_results: n,
                expression_guild_id: r,
                sticker_id: o.id,
                query: t
            });
    },
    p = (e) => {
        let t;
        let { sticker: n, category: r } = e;
        n.type === a.n0.GUILD && (t = n.guild_id),
            i.ZP.trackWithMetadata(s.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: l.cd.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: r,
                expression_guild_id: t,
                is_animated: (0, a.aQ)(n.format_type),
                is_custom: (0, a.z)(n.type)
            });
    },
    h = (e) => {
        null != e &&
            '' !== e &&
            i.ZP.trackWithMetadata(s.rMx.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: s.aib.STICKER,
                source_object: 'Sticker Picker'
            });
    };
