n.d(t, { _: () => f });
var r = n(627968);
n(64700);
var i = n(554146),
    a = n(882997),
    s = n(975571),
    o = n(107005),
    l = n(652215),
    c = n(985018),
    u = n(963133);
let d = "Xbox two way upsell",
    f = () => {
        let e = s.A.getArticleURL(l.MVz.XBOX_CONNECTION);
        return (0, r.jsx)(o.Z, {
            title: c.intl.string(c.t["2okkZV"]),
            body: c.intl.format(c.t.OnERSS, { help_article: e }),
            img: (0, r.jsx)("img", {
                src: u,
                width: "auto",
                height: "45",
                alt: "",
            }),
            newIndicatorDismissibleContent: i.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () =>
                (0, a.A)({
                    platformType: l.fg2.XBOX,
                    location: d,
                }),
        });
    };
