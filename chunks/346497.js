n.d(t, {
    W: () => u,
    k: () => c
});
var i = n(706454),
    r = n(367074),
    l = n(617799),
    a = n(61196),
    s = n(1844),
    o = n(388032);
async function c() {
    let e = s.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await (0, r.Qw)(),
        { enabled: i } = a.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: o } = l.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && i && n });
    return t && o && i && n;
}
function u() {
    switch (i.default.locale) {
        case 'de':
        case 'es-ES':
        case 'fr':
        case 'hr':
        case 'it':
        case 'lt':
        case 'nl':
        case 'pl':
        case 'pt-BR':
        case 'ro':
        case 'fi':
        case 'sv-SE':
        case 'tr':
        case 'cs':
        case 'el':
        case 'bg':
        case 'ru':
        case 'uk':
        case 'ja':
        case 'ko':
            return o.intl.string(o.t.OS9KPj);
        default:
            return o.intl.string(o.t.VeCPBQ);
    }
}
