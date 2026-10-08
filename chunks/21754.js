l.d(n, { default: () => x });
var a = l(477900),
    i = l(582128),
    e = l(17928),
    u = l(189213),
    s = l(376357),
    r = l(834730),
    o = l(262577),
    c = l(964486),
    d = l(688810),
    f = l(576470),
    C = l(287809),
    k = l(174459),
    h = l(870136),
    m = l(200700),
    p = l(652215),
    y = l(660183),
    b = l(353806);
function x(t) {
    let { guildId: n, userId: l, anaylticsLocations: x, transitionState: A, onClose: g } = t,
        { analyticsLocations: v } = (0, d.Ay)(),
        E = x?.[0] ?? v?.[0] ?? null,
        w = (0, e.bG)([C.default], () => C.default.getUser(l), [l]),
        [S, _] = (0, h.Ay)(l, n),
        [D, N] = i.useState(!1),
        U = i.useCallback(async () => {
            if (null != w) {
                N(!0);
                try {
                    (await o.A.setCommunicationDisabledDuration(n, l, null, null, E),
                        (0, s.P0)((0, s.ox)(y.intl.string(y.t["/Mmbfv"]), s.Ck.SUCCESS)),
                        g());
                } catch (t) {
                    (0, s.P0)((0, s.ox)(y.intl.string(y.t.epyCuh), s.Ck.FAILURE));
                } finally {
                    N(!1);
                }
            }
        }, [n, w, l, g, E]),
        O = i.useCallback(() => {
            _ || g();
        }, [_, g]);
    return ((0, c.Ay)(() => {
        null != w && k.default.track(p.HAw.OPEN_MODAL, { type: m.Rv, guild_id: n, other_user_id: w.id });
    }),
    i.useEffect(() => {
        (null == w || null == n) && g();
    }),
    null == w || null == n)
        ? null
        : (0, a.jsx)(u.a, {
              transitionState: A,
              onClose: g,
              title: y.intl.string(y.t["+ZD3ou"]),
              subtitle: y.intl.format(y.t["t+abNU"], {
                  username: w.username,
                  countdown: function (t) {
                      return null == S
                          ? null
                          : (0, a.jsx)(f.A, {
                                className: b.q,
                                deadline: new Date(S),
                                onInterval: O,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            });
                  },
              }),
              actions: [
                  { text: y.intl.string(y.t["ETE/oC"]), onClick: g, variant: "secondary" },
                  { text: y.intl.string(y.t.qXtNtS), onClick: U, loading: D, variant: "critical-primary" },
              ],
              children: (0, a.jsx)(r.E, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: y.intl.format(y.t.KtENkK, { link: m.MO }),
              }),
          });
}
