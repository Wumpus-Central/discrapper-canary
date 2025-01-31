n.d(t, { d: () => h });
var i = n(259630),
    r = n(52948),
    a = n(548097),
    s = n(33251),
    o = n(222987),
    l = n(735896),
    u = n(275282),
    c = n(753778),
    d = n(280999),
    f = n(667358);
function _(e) {
    return 'string' == typeof (e ? e[Object.keys(e)[0]] : void 0);
}
function p(e) {
    e.onWarn && e.defaultRichTextElements && _(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
}
function h(e, t) {
    var n = (0, r.ax)(t),
        _ = (0, i.pi)((0, i.pi)({}, r.Z0), e),
        h = _.locale,
        m = _.defaultLocale,
        g = _.onError;
    return (
        h ? (!Intl.NumberFormat.supportedLocalesOf(h).length && g ? g(new a.gb('Missing locale data for locale: "'.concat(h, '" in Intl.NumberFormat. Using default locale: "').concat(m, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(h).length && g && g(new a.gb('Missing locale data for locale: "'.concat(h, '" in Intl.DateTimeFormat. Using default locale: "').concat(m, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')))) : (g && g(new a.OV('"locale" was not configured, using "'.concat(m, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), (_.locale = _.defaultLocale || 'en')),
        p(_),
        (0, i.pi)((0, i.pi)({}, _), {
            formatters: n,
            formatNumber: s.uf.bind(null, _, n.getNumberFormat),
            formatNumberToParts: s.T.bind(null, _, n.getNumberFormat),
            formatRelativeTime: o.S.bind(null, _, n.getRelativeTimeFormat),
            formatDate: l.p6.bind(null, _, n.getDateTimeFormat),
            formatDateToParts: l.OI.bind(null, _, n.getDateTimeFormat),
            formatTime: l.mr.bind(null, _, n.getDateTimeFormat),
            formatDateTimeRange: l.Hk.bind(null, _, n.getDateTimeFormat),
            formatTimeToParts: l.uE.bind(null, _, n.getDateTimeFormat),
            formatPlural: u.R.bind(null, _, n.getPluralRules),
            formatMessage: c.w.bind(null, _, n),
            $t: c.w.bind(null, _, n),
            formatList: d.I.bind(null, _, n.getListFormat),
            formatListToParts: d.T.bind(null, _, n.getListFormat),
            formatDisplayName: f.I.bind(null, _, n.getDisplayNames)
        })
    );
}
