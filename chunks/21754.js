e.d(n, { default: () => x });
var l = e(627968),
    i = e(64700),
    a = e(189213),
    s = e(17928),
    r = e(691540),
    o = e(857250),
    u = e(97483),
    d = e(834730),
    c = e(262577),
    h = e(964486),
    p = e(688810),
    m = e(576470),
    f = e(287809),
    v = e(954571),
    y = e(870136),
    C = e(200700),
    g = e(652215),
    b = e(985018),
    k = e(55275);
function x(t) {
    let { guildId: n, userId: e, anaylticsLocations: x, transitionState: A, onClose: w } = t,
        { analyticsLocations: D } = (0, p.Ay)(),
        _ = x?.[0] ?? D?.[0] ?? null,
        S = (0, s.bG)([f.default], () => f.default.getUser(e), [e]),
        [E, U] = (0, y.Ay)(e, n),
        [N, O] = i.useState(!1),
        j = i.useCallback(async () => {
            if (null != S) {
                O(!0);
                try {
                    await c.A.setCommunicationDisabledDuration(n, e, null, null, _),
                        (0, r.P0)((0, o.o)(b.intl.string(b.t["/Mmbfv"]), u.Ck.SUCCESS)),
                        w();
                } catch (t) {
                    (0, r.P0)((0, o.o)(b.intl.string(b.t.epyCuh), u.Ck.FAILURE));
                } finally {
                    O(!1);
                }
            }
        }, [n, S, e, w, _]),
        I = i.useCallback(() => {
            U || w();
        }, [U, w]);
    return ((0, h.Ay)(() => {
        null != S && v.default.track(g.HAw.OPEN_MODAL, { type: C.Rv, guild_id: n, other_user_id: S.id });
    }),
    i.useEffect(() => {
        (null == S || null == n) && w();
    }),
    null == S || null == n)
        ? null
        : (0, l.jsx)(a.Modal, {
              transitionState: A,
              onClose: w,
              title: b.intl.string(b.t["+ZD3ou"]),
              subtitle: b.intl.format(b.t["t+abNU"], {
                  username: S.username,
                  countdown: (t) =>
                      null == E
                          ? null
                          : (0, l.jsx)(m.A, {
                                className: k.q,
                                deadline: new Date(E),
                                onInterval: I,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            }),
              }),
              actions: [
                  { text: b.intl.string(b.t["ETE/oC"]), onClick: w, variant: "secondary" },
                  { text: b.intl.string(b.t.qXtNtS), onClick: j, loading: N, variant: "critical-primary" },
              ],
              children: (0, l.jsx)(d.E, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: b.intl.format(b.t.KtENkK, { link: C.MO }),
              }),
          });
}
