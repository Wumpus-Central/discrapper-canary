n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(793574),
    d = n(573435),
    u = n(622543),
    h = n(576622),
    m = n(657331),
    A = n(287809),
    g = n(486020),
    p = n(403362),
    f = n(518477),
    _ = n(985018),
    E = n(604545);
function x(e) {
    let { userId: t, channelId: n, showDivider: s = !1 } = e,
        x = (0, r.bG)([u.A], () => u.A.getMutualGuilds(t), [t]),
        C = A.default.getUser(t);
    l.useEffect(() => {
        null == x && null != C && (0, h.A)(t, C.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [x, t, C]);
    let S = l.useMemo(() => {
        if (null == x) return [];
        let e = x.slice(0, 3),
            t = e.length - 1;
        return e
            .map((e, n) => {
                let { guild: l } = e,
                    s = g.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 24 });
                if (null == s) return null;
                let a = (0, i.jsx)("img", { src: s, alt: "", className: E.my }, l.id);
                return n === t
                    ? a
                    : (0, i.jsx)(
                          d.Ay,
                          {
                              className: E.cp,
                              mask: d.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              width: 24,
                              height: 24,
                              children: a,
                          },
                          l.id,
                      );
            })
            .filter(p.Vq);
    }, [x]);
    return null == x || 0 === x.length
        ? (0, i.jsx)("div", {
              className: a()(E.kL, s ? E.yF : null),
              children: (0, i.jsx)(o.Text, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: _.intl.string(_.t.zjVh8h),
              }),
          })
        : (0, i.jsxs)(o.DUT, {
              className: a()(E.kL, E.vk, { [E.yF]: s }),
              onClick: () => {
                  (0, m.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: f.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [c.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, i.jsx)("div", { className: E.H, children: S }),
                  (0, i.jsx)(o.Text, {
                      className: E.NI,
                      variant: "text-sm/normal",
                      children: _.intl.format(_.t.eE3oep, { count: x.length }),
                  }),
              ],
          });
}
