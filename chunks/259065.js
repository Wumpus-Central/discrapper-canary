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
                    s.e("57036"),
                    s.e("70474"),
                    s.e("61943"),
                    s.e("7175"),
                    s.e("55202"),
                    s.e("23353"),
                    s.e("73667"),
                    s.e("11250"),
                    s.e("14138"),
                    s.e("3442"),
                    s.e("85071"),
                    s.e("88017"),
                    s.e("70994"),
                    s.e("17239"),
                    s.e("24267"),
                    s.e("51793"),
                    s.e("58164"),
                    s.e("81645"),
                    s.e("36682"),
                    s.e("63070"),
                    s.e("28367"),
                    s.e("96313"),
                    s.e("27411"),
                    s.e("49318"),
                    s.e("12721"),
                    s.e("58283"),
                    s.e("17601"),
                    s.e("8087"),
                    s.e("55057"),
                    s.e("60471"),
                    s.e("42257"),
                    s.e("48563"),
                    s.e("27355"),
                    s.e("67876"),
                    s.e("25412"),
                    s.e("374"),
                    s.e("8555"),
                    s.e("40396"),
                    s.e("28936"),
                    s.e("64243"),
                    s.e("97386"),
                    s.e("47742"),
                    s.e("48330"),
                    s.e("92414"),
                    s.e("94857"),
                    s.e("16419"),
                    s.e("82561"),
                    s.e("45253"),
                    s.e("37372"),
                    s.e("95752"),
                    s.e("9648"),
                    s.e("26730"),
                    s.e("38751"),
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
