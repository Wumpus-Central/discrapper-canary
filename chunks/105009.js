l.d(t, { n: () => h });
var n = l(477900),
    a = l(192308),
    i = l(793574),
    s = l(931991),
    r = l(734057),
    o = l(71393),
    c = l(576705),
    u = l(287809),
    d = l(406064),
    m = l(696016);
async function h(e, t) {
    let { analyticsLocations: h, channelId: f } = t;
    (0, d.H1)([e.id]);
    let x = r.A.getChannel(f);
    try {
        let t = await (0, d.VO)(e, { analyticsLocations: [...h, i.A.CLIPS_EXPORT_TO_SOUNDBOARD] });
        (0, a.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                        l.e("207998"),
                        l.e("341659"),
                        l.e("376991"),
                        l.e("67491"),
                        l.e("308555"),
                        l.e("66580"),
                        l.e("808979"),
                        l.e("420643"),
                        l.e("669006"),
                        l.e("98913"),
                        l.e("612811"),
                    ]).then(l.bind(l, 191110)),
                    i = x?.guild_id != null ? o.A.getGuild(x.guild_id) : null,
                    r = null != i && (0, s.ie)(i, c.A, u.default).canCreateExpressions,
                    d = null == e.name || "" === e.name ? (0, m.cM)(e.createdAt) : e.name,
                    h = d.slice(0, 32);
                return (e) =>
                    (0, n.jsx)(a, {
                        ...e,
                        showGuildPicker: !0,
                        guildId: r ? x?.guild_id : void 0,
                        sourceFile: { file: new File([t], `${d}.mp4`, { type: "video/mp4" }), name: h },
                    });
            },
            { stackingBehavior: "stack" },
        );
    } finally {
        (0, d.H1)(null);
    }
}
l(980504);
