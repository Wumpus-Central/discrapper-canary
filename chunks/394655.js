n.d(t, { Z: () => f });
var r = n(54381),
    i = n(905405),
    a = n(63063),
    o = n(695346),
    s = n(838436),
    l = n(51331),
    c = n(726985),
    u = n(981631),
    d = n(388032);
function f() {
    let e = (0, i.p)();
    return (0, r.jsx)(s.U, {
        setting: c.s6.PRIVACY_KEYWORD_FILTER_V2,
        children: (0, r.jsx)(l.ZP, {
            value: e,
            onChange: (e) =>
                o.gw.updateSetting({
                    profanity: e,
                    slurs: e,
                    sexualContent: e,
                }),
            title: d.intl.string(d.t.CB5reE),
            note: d.intl.format(d.t.kAyJIR, { learnMoreLink: a.Z.getArticleURL(u.BhN.KEYWORD_FILTERS) }),
        }),
    });
}
