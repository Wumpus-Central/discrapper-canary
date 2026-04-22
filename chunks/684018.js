n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(834730),
    c = n(939249),
    d = n(793574),
    u = n(573435),
    h = n(622543),
    m = n(576622),
    A = n(657331),
    g = n(287809),
    p = n(486020),
    _ = n(403362),
    f = n(518477),
    E = n(985018),
    C = n(864401);
function x(e) {
    let { userId: t, channelId: n, showDivider: a = !1 } = e,
        x = (0, r.bG)([h.A], () => h.A.getMutualGuilds(t), [t]),
        S = g.default.getUser(t);
    l.useEffect(() => {
        null == x && null != S && (0, m.A)(t, S.getAvatarURL(null, 80), { withMutualGuilds: !0 });
    }, [x, t, S]);
    let I = l.useMemo(() => {
        if (null == x) return [];
        let e = x.slice(0, 3),
            t = e.length - 1;
        return e
            .map((e, n) => {
                let { guild: l } = e,
                    a = p.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 24 });
                if (null == a) return null;
                let s = (0, i.jsx)("img", { src: a, alt: "", className: C.my }, l.id);
                return n === t
                    ? s
                    : (0, i.jsx)(
                          u.Ay,
                          {
                              className: C.cp,
                              mask: u.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              width: 24,
                              height: 24,
                              children: s,
                          },
                          l.id,
                      );
            })
            .filter(_.Vq);
    }, [x]);
    return null == x || 0 === x.length
        ? (0, i.jsx)("div", {
              className: s()(C.kL, a ? C.yF : null),
              children: (0, i.jsx)(o.E, {
                  color: "text-default",
                  variant: "text-sm/normal",
                  children: E.intl.string(E.t.zjVh8h),
              }),
          })
        : (0, i.jsxs)(c.D, {
              className: s()(C.kL, C.vk, { [C.yF]: a }),
              onClick: () => {
                  (0, A.openUserProfileModal)({
                      userId: t,
                      channelId: n,
                      tabSection: f.RP.MUTUAL_GUILDS,
                      sourceAnalyticsLocations: [d.A.DM_CHANNEL],
                  });
              },
              children: [
                  (0, i.jsx)("div", { className: C.H, children: I }),
                  (0, i.jsx)(o.E, {
                      className: C.NI,
                      variant: "text-sm/normal",
                      children: E.intl.format(E.t.eE3oep, { count: x.length }),
                  }),
              ],
          });
}
