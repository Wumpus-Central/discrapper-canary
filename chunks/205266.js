n.d(t, { t: () => f });
var r = n(54381);
n(473749);
var i = n(704215),
    a = n(231757),
    o = n(63063),
    s = n(249881),
    l = n(981631),
    c = n(388032),
    u = n(359734);
let d = "PS two way upsell",
    f = () => {
        let e = o.Z.getArticleURL(l.BhN.PS_CONNECTION);
        return (0, r.jsx)(s.t, {
            title: c.intl.string(c.t.v20wwm),
            body: c.intl.format(c.t.lTZBit, { help_article: e }),
            img: (0, r.jsx)("img", {
                src: u,
                width: "82",
                height: "auto",
                alt: "",
            }),
            newIndicatorDismissibleContent: i.z.PS_ONE_WAY_RECONNECT,
            onClick: () =>
                (0, a.Z)({
                    platformType: l.ABu.PLAYSTATION,
                    location: d,
                }),
        });
    };
