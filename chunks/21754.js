l.d(n, { default: () => v });
var a = l(627968),
    i = l(64700),
    e = l(189213),
    u = l(17928),
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
    g = l(55275);
function v(t) {
    let { guildId: n, userId: l, anaylticsLocations: v, transitionState: E, onClose: w } = t,
        { analyticsLocations: x } = (0, C.Ay)(),
        S = v?.[0] ?? x?.[0] ?? null,
        _ = (0, u.bG)([h.default], () => h.default.getUser(l), [l]),
        [D, N] = (0, p.Ay)(l, n),
        [U, M] = i.useState(!1),
        O = i.useCallback(async () => {
            if (null != _) {
                M(!0);
                try {
                    await d.A.setCommunicationDisabledDuration(n, l, null, null, S),
                        (0, s.P0)((0, r.o)(A.intl.string(A.t["/Mmbfv"]), o.Ck.SUCCESS)),
                        w();
                } catch (t) {
                    (0, s.P0)((0, r.o)(A.intl.string(A.t.epyCuh), o.Ck.FAILURE));
                } finally {
                    M(!1);
                }
            }
        }, [n, _, l, w, S]),
        j = i.useCallback(() => {
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
        : (0, a.jsx)(e.Modal, {
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
                                onInterval: j,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            });
                  },
              }),
              actions: [
                  { text: A.intl.string(A.t["ETE/oC"]), onClick: w, variant: "secondary" },
                  { text: A.intl.string(A.t.qXtNtS), onClick: O, loading: U, variant: "critical-primary" },
              ],
              children: (0, a.jsx)(c.E, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: A.intl.format(A.t.KtENkK, { link: y.MO }),
              }),
          });
}
