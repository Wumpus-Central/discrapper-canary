n.d(t, { j: () => f });
var r = n(627968);
n(64700);
var i = n(554146),
    a = n(882997),
    s = n(975571),
    o = n(107005),
    l = n(652215),
    c = n(985018),
    u = n(729632);
let d = "PS two way upsell",
    f = () => {
        let e = s.A.getArticleURL(l.MVz.PS_CONNECTION);
        return (0, r.jsx)(o.Z, {
            title: c.intl.string(c.t.v20wwm),
            body: c.intl.format(c.t.lTZBit, { help_article: e }),
            img: (0, r.jsx)("img", {
                src: u,
                width: "82",
                height: "auto",
                alt: "",
            }),
            newIndicatorDismissibleContent: i.M.PS_ONE_WAY_RECONNECT,
            onClick: () =>
                (0, a.A)({
                    platformType: l.fg2.PLAYSTATION,
                    location: d,
                }),
        });
    };
