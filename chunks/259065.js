n.d(t, { L: () => d });
var r = n(627968);
n(64700);
var l = n(397927),
    s = n(954571),
    a = n(652215);
let i = "display-name-styles-modal",
    d = (e) => {
        let { analyticsLocations: t, guildId: d } = e;
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("91652"),
                    n.e("37457"),
                    n.e("8555"),
                    n.e("65963"),
                    n.e("90365"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("18976"),
                    n.e("37372"),
                    n.e("67477"),
                    n.e("41595"),
                    n.e("75867"),
                ]).then(n.bind(n, 619481));
                return (n) => (0, r.jsx)(e, { ...n, guildId: d, analyticsLocations: t });
            },
            {
                modalKey: i,
                onCloseRequest: () => {
                    s.default.track(a.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, l.OoC)(i);
                },
            },
        );
    };
