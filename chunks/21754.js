l.d(n, { default: () => v });
var a = l(477900),
    i = l(582128),
    e = l(17928),
    u = l(189213),
    s = l(691540),
    r = l(857250),
    o = l(97483),
    c = l(834730),
    d = l(262577),
    f = l(964486),
    C = l(688810),
    k = l(576470),
    h = l(287809),
    m = l(174459),
    p = l(870136),
    y = l(200700),
    b = l(652215),
    A = l(375708),
    g = l(353806);
function v(t) {
    let { guildId: n, userId: l, anaylticsLocations: v, transitionState: E, onClose: w } = t,
        { analyticsLocations: x } = (0, C.Ay)(),
        S = v?.[0] ?? x?.[0] ?? null,
        _ = (0, e.bG)([h.default], () => h.default.getUser(l), [l]),
        [D, N] = (0, p.Ay)(l, n),
        [U, O] = i.useState(!1),
        j = i.useCallback(async () => {
            if (null != _) {
                O(!0);
                try {
                    (await d.A.setCommunicationDisabledDuration(n, l, null, null, S),
                        (0, s.P0)((0, r.o)(A.intl.string(A.t["/Mmbfv"]), o.Ck.SUCCESS)),
                        w());
                } catch (t) {
                    (0, s.P0)((0, r.o)(A.intl.string(A.t.epyCuh), o.Ck.FAILURE));
                } finally {
                    O(!1);
                }
            }
        }, [n, _, l, w, S]),
        L = i.useCallback(() => {
            N || w();
        }, [N, w]);
    return ((0, f.Ay)(() => {
        null != _ && m.default.track(b.HAw.OPEN_MODAL, { type: y.Rv, guild_id: n, other_user_id: _.id });
    }),
    i.useEffect(() => {
        (null == _ || null == n) && w();
    }),
    null == _ || null == n)
        ? null
        : (0, a.jsx)(u.a, {
              transitionState: E,
              onClose: w,
              title: A.intl.string(A.t["+ZD3ou"]),
              subtitle: A.intl.format(A.t["t+abNU"], {
                  username: _.username,
                  countdown: function (t) {
                      return null == D
                          ? null
                          : (0, a.jsx)(k.A, {
                                className: g.q,
                                deadline: new Date(D),
                                onInterval: L,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            });
                  },
              }),
              actions: [
                  { text: A.intl.string(A.t["ETE/oC"]), onClick: w, variant: "secondary" },
                  { text: A.intl.string(A.t.qXtNtS), onClick: j, loading: U, variant: "critical-primary" },
              ],
              children: (0, a.jsx)(c.E, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: A.intl.format(A.t.KtENkK, { link: y.MO }),
              }),
          });
}
