n.d(t, { L: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(954571),
    a = n(652215);
let l = "display-name-styles-modal",
    o = (e) => {
        let { analyticsLocations: t, guildId: o } = e;
        (0, s.mMO)(
            async () => {
                let { default: e } = await n.e("15682").then(n.bind(n, 619481));
                return (n) => (0, i.jsx)(e, { ...n, guildId: o, analyticsLocations: t });
            },
            {
                modalKey: l,
                onCloseRequest: () => {
                    r.default.track(a.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, s.OoC)(l);
                },
            },
        );
    };
