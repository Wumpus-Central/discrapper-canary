var i = n(477900),
    s = n(192308),
    l = n(129230),
    r = n(80569),
    a = n(143945),
    o = n(652215);
n.d(
    t,
    {},
    {
        f: async function (e) {
            let { analyticsLocation: t = null, ...c } = e;
            (l.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
                await (0, s.mM)(
                    async () => {
                        let { EmojiStudioModal: e } = await Promise.all([
                            n.e(476662),
                            n.e(985768),
                            n.e(19631),
                            n.e(508702),
                            n.e(912875),
                            n.e(791154),
                            n.e(324761),
                            n.e(50342),
                            n.e(507406),
                            n.e(455524),
                            n.e(324633),
                            n.e(884063),
                            n.e(534936),
                            n.e(452550),
                        ]).then(n.bind(n, 894399));
                        return (t) => (0, i.jsx)(e, { ...t, ...c });
                    },
                    {
                        modalKey: r.y,
                        onCloseRequest: () => {
                            (0, a.p)();
                        },
                    },
                ));
        },
    },
);
