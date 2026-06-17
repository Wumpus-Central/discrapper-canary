n.d(l, { default: () => v });
var a = n(627968),
    i = n(64700),
    e = n(189213),
    s = n(17928),
    u = n(691540),
    r = n(857250),
    o = n(97483),
    c = n(834730),
    d = n(262577),
    C = n(964486),
    f = n(688810),
    k = n(576470),
    h = n(287809),
    m = n(174459),
    p = n(870136),
    y = n(200700),
    b = n(652215),
    A = n(375708),
    g = n(267051);
function v(t) {
    let { guildId: l, userId: n, anaylticsLocations: v, transitionState: E, onClose: w } = t,
        { analyticsLocations: x } = (0, f.Ay)(),
        S = v?.[0] ?? x?.[0] ?? null,
        _ = (0, s.bG)([h.default], () => h.default.getUser(n), [n]),
        [D, N] = (0, p.Ay)(n, l),
        [U, M] = i.useState(!1),
        O = i.useCallback(async () => {
            if (null != _) {
                M(!0);
                try {
                    await d.A.setCommunicationDisabledDuration(l, n, null, null, S),
                        (0, u.P0)((0, r.o)(A.intl.string(A.t["/Mmbfv"]), o.Ck.SUCCESS)),
                        w();
                } catch (t) {
                    (0, u.P0)((0, r.o)(A.intl.string(A.t.epyCuh), o.Ck.FAILURE));
                } finally {
                    M(!1);
                }
            }
        }, [l, _, n, w, S]),
        j = i.useCallback(() => {
            N || w();
        }, [N, w]);
    return ((0, C.Ay)(() => {
        null != _ && m.default.track(b.HAw.OPEN_MODAL, { type: y.Rv, guild_id: l, other_user_id: _.id });
    }),
    i.useEffect(() => {
        (null == _ || null == l) && w();
    }),
    null == _ || null == l)
        ? null
        : (0, a.jsx)(e.Modal, {
              transitionState: E,
              onClose: w,
              title: A.intl.string(A.t["+ZD3ou"]),
              subtitle: A.intl.format(A.t["t+abNU"], {
                  username: _.username,
                  countdown: (t) =>
                      null == D
                          ? null
                          : (0, a.jsx)(k.A, {
                                className: g.q,
                                deadline: new Date(D),
                                onInterval: j,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            }),
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
