e.d(n, { default: () => g }), e(388685);
var l = e(54381),
    i = e(473749),
    a = e(793030),
    s = e(442837),
    r = e(481060),
    o = e(91176),
    u = e(493773),
    c = e(906732),
    d = e(346486),
    h = e(594174),
    p = e(626135),
    f = e(71619),
    m = e(590433),
    v = e(981631),
    b = e(388032),
    y = e(266973);
function g(t) {
    var n, e;
    let { guildId: g, userId: w, anaylticsLocations: x, transitionState: C, onClose: D } = t,
        { analyticsLocations: k } = (0, c.ZP)(),
        _ = null != (e = null != (n = null == x ? void 0 : x[0]) ? n : null == k ? void 0 : k[0]) ? e : null,
        T = (0, s.e7)([h.default], () => h.default.getUser(w), [w]),
        [S, U] = (0, f.ZP)(w, g),
        [Z, E] = i.useState(!1),
        P = i.useCallback(async () => {
            if (null != T) {
                E(!0);
                try {
                    await o.Z.setCommunicationDisabledDuration(g, w, null, null, _),
                        (0, r.showToast)((0, r.createToast)(b.intl.string(b.t["/Mmbfv"]), r.ToastType.SUCCESS)),
                        D();
                } catch (t) {
                    (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.epyCuh), r.ToastType.FAILURE));
                } finally {
                    E(!1);
                }
            }
        }, [g, T, w, D, _]),
        j = i.useCallback(() => {
            U || D();
        }, [U, D]);
    return ((0, u.ZP)(() => {
        null != T &&
            p.default.track(v.rMx.OPEN_MODAL, {
                type: m.av,
                guild_id: g,
                other_user_id: T.id,
            });
    }),
    i.useEffect(() => {
        (null == T || null == g) && D();
    }),
    null == T || null == g)
        ? null
        : (0, l.jsx)(a.Modal, {
              transitionState: C,
              onClose: D,
              title: b.intl.string(b.t["+ZD3ou"]),
              subtitle: b.intl.format(b.t["t+abNU"], {
                  username: T.username,
                  countdown: (t) =>
                      null == S
                          ? null
                          : (0, l.jsx)(d.Z, {
                                className: y.countdown,
                                deadline: new Date(S),
                                onInterval: j,
                                showUnits: !0,
                                stopAtOneSec: !0,
                            }),
              }),
              actions: [
                  {
                      text: b.intl.string(b.t["ETE/oC"]),
                      onClick: D,
                      variant: "secondary",
                  },
                  {
                      text: b.intl.string(b.t.qXtNtS),
                      onClick: P,
                      loading: Z,
                      variant: "critical-primary",
                  },
              ],
              children: (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "interactive-text-default",
                  children: b.intl.format(b.t.KtENkK, { link: m.cu }),
              }),
          });
}
