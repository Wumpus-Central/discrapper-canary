e.d(n, { default: () => C });
var l = e(627968),
    a = e(64700),
    i = e(158954),
    s = e(311907),
    r = e(397927),
    o = e(262577),
    u = e(964486),
    d = e(688810),
    c = e(576470),
    h = e(287809),
    p = e(954571),
    m = e(870136),
    f = e(200700),
    y = e(652215),
    v = e(985018),
    g = e(55275);
function C(t) {
    let { guildId: n, userId: e, anaylticsLocations: C, transitionState: b, onClose: w } = t,
        { analyticsLocations: x } = (0, d.Ay)(),
        A = C?.[0] ?? x?.[0] ?? null,
        k = (0, s.bG)([h.default], () => h.default.getUser(e), [e]),
        [D, _] = (0, m.Ay)(e, n),
        [T, S] = a.useState(!1),
        U = a.useCallback(async () => {
            if (null != k) {
                S(!0);
                try {
                    await o.A.setCommunicationDisabledDuration(n, e, null, null, A),
                        (0, r.showToast)((0, r.createToast)(v.intl.string(v.t["/Mmbfv"]), r.ToastType.SUCCESS)),
                        w();
                } catch (t) {
                    (0, r.showToast)((0, r.createToast)(v.intl.string(v.t.epyCuh), r.ToastType.FAILURE));
                } finally {
                    S(!1);
                }
            }
        }, [n, k, e, w, A]),
        E = a.useCallback(() => {
            _ || w();
        }, [_, w]);
    return ((0, u.Ay)(() => {
        null != k && p.default.track(y.HAw.OPEN_MODAL, { type: f.Rv, guild_id: n, other_user_id: k.id });
    }),
    a.useEffect(() => {
        (null == k || null == n) && w();
    }),
    null == k || null == n)
        ? null
        : (0, l.jsx)(i.Modal, {
              transitionState: b,
              onClose: w,
              title: v.intl.string(v.t["+ZD3ou"]),
              subtitle: v.intl.format(v.t["t+abNU"], {
                  username: k.username,
                  countdown: (t) =>
                      null == D
                          ? null
                          : (0, l.jsx)(c.A, {
                                className: g.q,
                                deadline: new Date(D),
                                onInterval: E,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            }),
              }),
              actions: [
                  { text: v.intl.string(v.t["ETE/oC"]), onClick: w, variant: "secondary" },
                  { text: v.intl.string(v.t.qXtNtS), onClick: U, loading: T, variant: "critical-primary" },
              ],
              children: (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: v.intl.format(v.t.KtENkK, { link: f.MO }),
              }),
          });
}
