n.d(t, {
    _: () => u,
});
var r = n(627968);
n(64700);
var i = n(554146),
    l = n(882997),
    s = n(975571),
    a = n(107005),
    o = n(652215),
    c = n(985018),
    d = n(963133);
let u = () => {
    let e = s.A.getArticleURL(o.MVz.XBOX_CONNECTION);
    return (0, r.jsx)(a.Z, {
        title: c.intl.string(c.t["2okkZV"]),
        body: c.intl.format(c.t.OnERSS, {
            help_article: e,
        }),
        img: (0, r.jsx)("img", {
            src: d,
            width: "auto",
            height: "45",
            alt: "",
        }),
        newIndicatorDismissibleContent: i.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () =>
            (0, l.A)({
                platformType: o.fg2.XBOX,
                location: "Xbox two way upsell",
            }),
    });
};
