var o = i(477900);
i(582128);
var r = i(231723),
    c = i(192308),
    s = i(869146),
    e = i(709055),
    l = i(129230),
    a = i(652215);
i.d(
    t,
    {},
    {
        A: function (n, t) {
            let f = t ?? `${a.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
            (null != n.targetBoostedGuildTier && (f += ` - Tier ${n.targetBoostedGuildTier}`),
                l.default.track(a.HAw.OPEN_MODAL, { type: f, location: n.analyticsSourceLocation }));
            let { openInPopoutEnabled: u, ...d } = n,
                _ = s.A.getWindowOpen(a.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
            _ && (0, e.A)(a.MLl.CHANNEL_CALL_POPOUT);
            let E = _ ? "popout" : r.SY;
            (0, c.mM)(
                async () => {
                    let { default: n } = await Promise.all([i.e(265480), i.e(971508), i.e(845210)]).then(
                        i.bind(i, 331617),
                    );
                    return (t) => (0, o.jsx)(n, { ...d, ...t });
                },
                {
                    onCloseCallback: function () {
                        l.default.track(a.HAw.MODAL_DISMISSED, { type: f, location: n.analyticsSourceLocation });
                    },
                    contextKey: E,
                },
            );
        },
    },
);
