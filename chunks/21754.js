l.d(n, { default: () => b });
var a = l(477900),
    i = l(582128),
    e = l(17928),
    s = l(189213),
    r = l(858899),
    u = l(834730),
    c = l(262577),
    o = l(964486),
    d = l(688810),
    f = l(576470),
    h = l(287809),
    k = l(174459),
    m = l(870136),
    p = l(200700),
    y = l(652215),
    v = l(660183),
    C = l(353806);
function b(t) {
    let { guildId: n, userId: l, anaylticsLocations: b, transitionState: x, onClose: g } = t,
        { analyticsLocations: A } = (0, d.Ay)(),
        w = b?.[0] ?? A?.[0] ?? null,
        E = (0, e.bG)([h.default], () => h.default.getUser(l), [l]),
        [_, D] = (0, m.Ay)(l, n),
        [N, O] = i.useState(!1),
        S = i.useCallback(async () => {
            if (null != E) {
                O(!0);
                try {
                    (await c.A.setCommunicationDisabledDuration(n, l, null, null, w),
                        (0, r.P0)({ text: v.intl.string(v.t["/Mmbfv"]), variant: "success" }),
                        g());
                } catch (t) {
                    (0, r.P0)({ text: v.intl.string(v.t.epyCuh), variant: "critical" });
                } finally {
                    O(!1);
                }
            }
        }, [n, E, l, g, w]),
        j = i.useCallback(() => {
            D || g();
        }, [D, g]);
    return ((0, o.Ay)(() => {
        null != E && k.default.track(y.HAw.OPEN_MODAL, { type: p.Rv, guild_id: n, other_user_id: E.id });
    }),
    i.useEffect(() => {
        (null == E || null == n) && g();
    }),
    null == E || null == n)
        ? null
        : (0, a.jsx)(s.a, {
              transitionState: x,
              onClose: g,
              title: v.intl.string(v.t["+ZD3ou"]),
              subtitle: v.intl.format(v.t["t+abNU"], {
                  username: E.username,
                  countdown: function (t) {
                      return null == _
                          ? null
                          : (0, a.jsx)(f.A, {
                                className: C.q,
                                deadline: new Date(_),
                                onInterval: j,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            });
                  },
              }),
              actions: [
                  { text: v.intl.string(v.t["ETE/oC"]), onClick: g, variant: "secondary" },
                  { text: v.intl.string(v.t.qXtNtS), onClick: S, loading: N, variant: "critical-primary" },
              ],
              children: (0, a.jsx)(u.E, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: v.intl.format(v.t.KtENkK, { link: p.MO }),
              }),
          });
}
