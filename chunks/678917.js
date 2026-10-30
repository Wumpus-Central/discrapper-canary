r.d(t, { o: () => m });
var n = r(427930),
    l = r(734057),
    a = r(71393);
r(938796);
var i = r(665260),
    u = r(409481),
    o = r(935208),
    s = r(202541),
    d = r(652215);
let c = Date.UTC(2026, 7, 10),
    f = [
        [d.GuildFeatures.MAX_FILE_SIZE_250_MB, s.q9],
        [d.GuildFeatures.MAX_FILE_SIZE_100_MB, s.w6],
        [d.GuildFeatures.MAX_FILE_SIZE_50_MB, s.eZ],
    ];
function m(e, t) {
    if (null == t || (0, n.A)(t) || !t.attachments.some((t) => t.id === e.id)) return null;
    let r = l.A.getChannel(t.channel_id);
    if (null == r) return null;
    let m = r.getGuildId(),
        p = null != m ? a.A.getGuild(m) : null;
    return null != m && null == p
        ? null
        : (function (e, t) {
              var r;
              let { sentByApplication: n, guildMaxFileSize: l } = t;
              if (n) return null;
              let { size: a, content_type: f } = e;
              if (null == f || !f.startsWith("video/")) return null;
              let m = (0, i.Lt)(e.flags ?? 0, d.sbO.IS_CLIP);
              return a <=
                  Math.max(
                      ((r = e.id), o.default.extractTimestamp(r) >= c ? u.t : Math.max(u.t, 0x1900000)),
                      l,
                      0x6400000 * !!m,
                  )
                  ? null
                  : a <= s.DC
                    ? s.PremiumTypes.TIER_0
                    : a <= s.gb
                      ? s.PremiumTypes.TIER_2
                      : null;
          })(e, {
              sentByApplication: t.author.bot || null != t.webhookId,
              guildMaxFileSize:
                  null != p
                      ? f.reduce((e, t) => {
                            let [r, n] = t;
                            return p.features.has(r) && n > e ? n : e;
                        }, 0)
                      : 0,
          });
}
