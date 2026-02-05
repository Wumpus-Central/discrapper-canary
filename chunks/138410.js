n.d(t, { _: () => u });
var i = n(627968);
n(64700);
var s = n(554146),
    r = n(882997),
    a = n(975571),
    l = n(107005),
    o = n(652215),
    c = n(985018),
    d = n(963133);
let u = () => {
    let e = a.A.getArticleURL(o.MVz.XBOX_CONNECTION);
    return (0, i.jsx)(l.Z, {
        title: c.intl.string(c.t["2okkZV"]),
        body: c.intl.format(c.t.OnERSS, { help_article: e }),
        img: (0, i.jsx)("img", { src: d, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: s.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, r.A)({ platformType: o.fg2.XBOX, location: "Xbox two way upsell" }),
    });
};
