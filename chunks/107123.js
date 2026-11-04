var i = n(95701),
    r = n(537975),
    a = n(652215);
n.d(
    t,
    {},
    {
        P: function (e, t) {
            if (null == e || "" === e) return null;
            let n = new Date(e);
            return !(n instanceof Date) || isNaN(n.getTime())
                ? null
                : n.toLocaleDateString(t, { year: "numeric", month: "short" });
        },
        v: function (e) {
            if (null == e.guild || (0, r.DY)(e.guild).features.has(a.GuildFeatures.HUB)) return !1;
            let t = e?.channel != null ? (0, i.OY)(e.channel) : null;
            return !t?.isGuildVoiceOrThread();
        },
    },
);
