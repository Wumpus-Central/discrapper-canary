l.d(t, { n: () => m });
var a = l(627968),
    n = l(192308),
    i = l(931991),
    s = l(734057),
    r = l(71393),
    c = l(576705),
    o = l(287809),
    u = l(607814),
    d = l(696016);
async function m(e, t) {
    (0, u.H1)([e.id]);
    let m = s.A.getChannel(t);
    try {
        let t = await (0, u.VO)(e);
        (0, n.openModalLazy)(
            async () => {
                let { default: n } = await Promise.all([
                        l.e("50671"),
                        l.e("94307"),
                        l.e("63106"),
                        l.e("8555"),
                        l.e("66580"),
                        l.e("8979"),
                        l.e("20643"),
                        l.e("69006"),
                        l.e("98913"),
                        l.e("12811"),
                    ]).then(l.bind(l, 191110)),
                    s = m?.guild_id != null ? r.A.getGuild(m.guild_id) : null,
                    u = null != s && (0, i.ie)(s, c.A, o.default).canCreateExpressions,
                    h = null == e.name || "" === e.name ? (0, d.cM)(e.createdAt) : e.name,
                    f = h.slice(0, 32);
                return (e) =>
                    (0, a.jsx)(n, {
                        ...e,
                        showGuildPicker: !0,
                        guildId: u ? m?.guild_id : void 0,
                        sourceFile: { file: new File([t], `${h}.mp4`, { type: "video/mp4" }), name: f },
                    });
            },
            { stackingBehavior: "stack" },
        );
    } finally {
        (0, u.H1)(null);
    }
}
l(980504);
