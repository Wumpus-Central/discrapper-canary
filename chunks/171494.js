l.d(n, { default: () => k }), l(388685);
var a = l(255367),
    i = l(73800),
    e = l(442837),
    o = l(82659),
    s = l(481060),
    u = l(91176),
    r = l(493773),
    c = l(906732),
    d = l(346486),
    m = l(594174),
    f = l(626135),
    p = l(71619),
    C = l(590433),
    b = l(981631),
    h = l(388032),
    w = l(209564);
function k(t) {
    var n, l;
    let { guildId: k, userId: v, anaylticsLocations: y, transitionState: T, onClose: g } = t,
        { analyticsLocations: x } = (0, c.ZP)(),
        D = null != (l = null != (n = null == y ? void 0 : y[0]) ? n : null == x ? void 0 : x[0]) ? l : null,
        S = (0, e.e7)([m.default], () => m.default.getUser(v), [v]),
        [Z, _] = (0, p.ZP)(v, k),
        [E, N] = i.useState(!1),
        U = i.useCallback(async () => {
            if (null != S) {
                N(!0);
                try {
                    await u.Z.setCommunicationDisabledDuration(k, v, null, null, D),
                        (0, s.showToast)((0, s.createToast)(h.intl.string(h.t["/Mmbfn"]), s.ToastType.SUCCESS)),
                        g();
                } catch (t) {
                    (0, s.showToast)((0, s.createToast)(h.intl.string(h.t.epyCur), s.ToastType.FAILURE));
                } finally {
                    N(!1);
                }
            }
        }, [k, S, v, g, D]),
        I = i.useCallback(() => {
            _ || g();
        }, [_, g]);
    return ((0, r.ZP)(() => {
        null != S &&
            f.default.track(b.rMx.OPEN_MODAL, {
                type: C.av,
                guild_id: k,
                other_user_id: S.id,
            });
    }),
    i.useEffect(() => {
        (null == S || null == k) && g();
    }),
    null == S || null == k)
        ? null
        : (0, a.jsx)(o.Modal, {
              transitionState: T,
              onClose: g,
              title: h.intl.string(h.t["+ZD3oq"]),
              subtitle: h.intl.format(h.t["t+abNT"], {
                  username: S.username,
                  countdown: (t) =>
                      null == Z
                          ? null
                          : (0, a.jsx)(d.Z, {
                                className: w.countdown,
                                deadline: new Date(Z),
                                onInterval: I,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            }),
              }),
              actions: [
                  {
                      text: h.intl.string(h.t["ETE/oK"]),
                      onClick: g,
                      variant: "secondary",
                  },
                  {
                      text: h.intl.string(h.t.qXtNtb),
                      onClick: U,
                      loading: E,
                      variant: "critical-primary",
                  },
              ],
              children: (0, a.jsx)(s.Text, {
                  variant: "text-md/normal",
                  color: "interactive-normal",
                  children: h.intl.format(h.t.KtENkJ, { link: C.cu }),
              }),
          });
}
