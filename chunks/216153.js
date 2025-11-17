n.d(t, { Y: () => f });
var r = n(54381);
n(473749);
var i = n(704215),
    a = n(231757),
    o = n(63063),
    s = n(249881),
    l = n(981631),
    c = n(388032),
    u = n(195794);
let d = "Xbox two way upsell",
    f = () => {
        let e = o.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
        return (0, r.jsx)(s.t, {
            title: c.intl.string(c.t["2okkZV"]),
            body: c.intl.format(c.t.OnERSS, { help_article: e }),
            img: (0, r.jsx)("img", {
                src: u,
                width: "auto",
                height: "45",
                alt: "",
            }),
            newIndicatorDismissibleContent: i.z.XBOX_ONE_WAY_RECONNECT,
            onClick: () =>
                (0, a.Z)({
                    platformType: l.ABu.XBOX,
                    location: d,
                }),
        });
    };
