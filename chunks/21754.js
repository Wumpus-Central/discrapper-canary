l.d(n, { default: () => C });
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
    y = l(287809),
    h = l(174459),
    k = l(870136),
    m = l(200700),
    p = l(652215),
    b = l(105292),
    v = l(353806);
function C(t) {
    let { guildId: n, userId: l, anaylticsLocations: C, transitionState: g, onClose: x } = t,
        { analyticsLocations: A } = (0, d.Ay)(),
        w = C?.[0] ?? A?.[0] ?? null,
        E = (0, e.bG)([y.default], () => y.default.getUser(l), [l]),
        [_, D] = (0, k.Ay)(l, n),
        [N, O] = i.useState(!1),
        S = i.useCallback(async () => {
            if (null != E) {
                O(!0);
                try {
                    (await c.A.setCommunicationDisabledDuration(n, l, null, null, w),
                        (0, r.P0)({ text: b.intl.string(b.t["/Mmbfv"]), variant: "success" }),
                        x());
                } catch (t) {
                    (0, r.P0)({ text: b.intl.string(b.t.epyCuh), variant: "critical" });
                } finally {
                    O(!1);
                }
            }
        }, [n, E, l, x, w]),
        j = i.useCallback(() => {
            D || x();
        }, [D, x]);
    return ((0, o.Ay)(() => {
        null != E && h.default.track(p.HAw.OPEN_MODAL, { type: m.Rv, guild_id: n, other_user_id: E.id });
    }),
    i.useEffect(() => {
        (null == E || null == n) && x();
    }),
    null == E || null == n)
        ? null
        : (0, a.jsx)(s.a, {
              transitionState: g,
              onClose: x,
              title: b.intl.string(b.t["+ZD3ou"]),
              subtitle: b.intl.format(b.t["t+abNU"], {
                  username: E.username,
                  countdown: function (t) {
                      return null == _
                          ? null
                          : (0, a.jsx)(f.A, {
                                className: v.q,
                                deadline: new Date(_),
                                onInterval: j,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            });
                  },
              }),
              actions: [
                  { text: b.intl.string(b.t["ETE/oC"]), onClick: x, variant: "secondary" },
                  { text: b.intl.string(b.t.qXtNtS), onClick: S, loading: N, variant: "critical-primary" },
              ],
              children: (0, a.jsx)(u.E, {
                  variant: "body-md/normal",
                  color: "interactive-text-default",
                  children: b.intl.format(b.t.KtENkK, { link: m.MO }),
              }),
          });
}
