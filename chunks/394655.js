n.d(t, { Z: () => h });
var i = n(200651),
    s = n(905405),
    l = n(63063),
    r = n(695346),
    a = n(838436),
    o = n(51331),
    c = n(726985),
    d = n(981631),
    u = n(388032);
function h() {
    let e = (0, s.p)();
    return (0, i.jsx)(a.U, {
        setting: c.s6.PRIVACY_KEYWORD_FILTER_V2,
        children: (0, i.jsx)(o.Z, {
            value: e,
            onChange: (e) =>
                r.gw.updateSetting({
                    profanity: e,
                    slurs: e,
                    sexualContent: e
                }),
            title: u.intl.string(u.t.CB5reH),
            note: u.intl.format(u.t.kAyJIS, { learnMoreLink: l.Z.getArticleURL(d.BhN.KEYWORD_FILTERS) })
        })
    });
}
