n.d(t, {
    Hs: () => f,
    ZP: () => h,
    qy: () => _,
});
var r = n(54381),
    i = n(473749),
    a = n(317261),
    o = n(379357),
    s = n(442550),
    l = n(561308),
    c = n(297781),
    u = n(443487),
    d = n(925002);
let f = [c.E6],
    p = [a._.WEEK];
function _(e) {
    let t = p;
    return null != e && t.includes(e);
}
let m = (e) => {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: a } = (0, o.rv)({
                entry: t,
                showCoverImage: !1,
            }),
            p = (0, l.Nq)(t);
        return null != p && _(p)
            ? (0, r.jsxs)(u.Zb, {
                  selected: i,
                  children: [
                      (0, r.jsxs)(u.e$, {
                          children: [
                              (0, r.jsx)(u.F9, {
                                  entry: t,
                                  channelId: n.id,
                                  guildId: n.guild_id,
                              }),
                              (0, r.jsx)(u.ll, { children: t.extra.game_name }),
                              (0, r.jsx)(c.Gk, {
                                  location: c.Gt.CARD,
                                  children: f.map((e, n) => (0, r.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, r.jsx)(s.f, {
                          src: null == a ? void 0 : a.src,
                          size: 48,
                          className: d.thumbnail,
                          alt: null == a ? void 0 : a.alt,
                      }),
                  ],
              })
            : null;
    },
    h = i.memo(m);
