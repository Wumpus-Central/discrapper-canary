l.d(t, { n: () => m });
var a = l(627968),
    n = l(192308),
    i = l(931991),
    r = l(734057),
    s = l(71393),
    o = l(576705),
    u = l(287809),
    c = l(315240),
    d = l(696016);
async function m(e, t) {
    (0, c.H1)([e.id]);
    let m = r.A.getChannel(t);
    try {
        let t = await (0, c.VO)(e);
        (0, n.openModalLazy)(
            async () => {
                let { default: n } = await Promise.all([
                        l.e("78925"),
                        l.e("60909"),
                        l.e("25652"),
                        l.e("8555"),
                        l.e("66580"),
                        l.e("8979"),
                        l.e("20643"),
                        l.e("69006"),
                        l.e("98913"),
                        l.e("12811"),
                    ]).then(l.bind(l, 191110)),
                    r = m?.guild_id != null ? s.A.getGuild(m.guild_id) : null,
                    c = null != r && (0, i.ie)(r, o.A, u.default).canCreateExpressions,
                    f = null == e.name || "" === e.name ? (0, d.cM)(e.createdAt) : e.name,
                    h = f.slice(0, 32);
                return (e) =>
                    (0, a.jsx)(n, {
                        ...e,
                        showGuildPicker: !0,
                        guildId: c ? m?.guild_id : void 0,
                        sourceFile: { file: new File([t], `${f}.mp4`, { type: "video/mp4" }), name: h },
                    });
            },
            { stackingBehavior: "stack" },
        );
    } finally {
        (0, c.H1)(null);
    }
}
l(980504);
