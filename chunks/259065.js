s.d(t, { L: () => d });
var n = s(627968);
s(64700);
var a = s(192308),
    r = s(954571),
    l = s(652215);
let i = "display-name-styles-modal",
    d = (e) => {
        let { analyticsLocations: t, guildId: d } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    s.e("25412"),
                    s.e("374"),
                    s.e("8555"),
                    s.e("40396"),
                    s.e("28936"),
                    s.e("64243"),
                    s.e("97386"),
                    s.e("48330"),
                    s.e("92414"),
                    s.e("94857"),
                    s.e("16419"),
                    s.e("82561"),
                    s.e("45253"),
                    s.e("47742"),
                    s.e("37372"),
                    s.e("95752"),
                    s.e("9648"),
                    s.e("26730"),
                    s.e("3335"),
                ]).then(s.bind(s, 619481));
                return (s) => (0, n.jsx)(e, { ...s, guildId: d, analyticsLocations: t });
            },
            {
                modalKey: i,
                onCloseRequest: () => {
                    r.default.track(l.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, a.closeModal)(i);
                },
            },
        );
    };
