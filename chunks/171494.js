(e.d(n, { default: () => g }), e(388685));
var l = e(255367),
    i = e(73800),
    a = e(442837),
    s = e(82659),
    r = e(481060),
    o = e(91176),
    u = e(493773),
    c = e(906732),
    d = e(346486),
    p = e(594174),
    h = e(626135),
    f = e(71619),
    m = e(590433),
    v = e(981631),
    b = e(388032),
    y = e(209564);
function g(t) {
    var n, e;
    let { guildId: g, userId: w, anaylticsLocations: x, transitionState: C, onClose: D } = t,
        { analyticsLocations: k } = (0, c.ZP)(),
        T = null != (e = null != (n = null == x ? void 0 : x[0]) ? n : null == k ? void 0 : k[0]) ? e : null,
        _ = (0, a.e7)([p.default], () => p.default.getUser(w), [w]),
        [S, Z] = (0, f.ZP)(w, g),
        [E, P] = i.useState(!1),
        U = i.useCallback(async () => {
            if (null != _) {
                P(!0);
                try {
                    (await o.Z.setCommunicationDisabledDuration(g, w, null, null, T), (0, r.showToast)((0, r.createToast)(b.intl.string(b.t['/Mmbfn']), r.ToastType.SUCCESS)), D());
                } catch (t) {
                    (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.epyCur), r.ToastType.FAILURE));
                } finally {
                    P(!1);
                }
            }
        }, [g, _, w, D, T]),
        j = i.useCallback(() => {
            Z || D();
        }, [Z, D]);
    return ((0, u.ZP)(() => {
        null != _ &&
            h.default.track(v.rMx.OPEN_MODAL, {
                type: m.av,
                guild_id: g,
                other_user_id: _.id
            });
    }),
    i.useEffect(() => {
        (null == _ || null == g) && D();
    }),
    null == _ || null == g)
        ? null
        : (0, l.jsx)(s.Modal, {
              transitionState: C,
              onClose: D,
              title: b.intl.string(b.t['+ZD3oq']),
              subtitle: b.intl.format(b.t['t+abNT'], {
                  username: _.username,
                  countdown: (t) =>
                      null == S
                          ? null
                          : (0, l.jsx)(d.Z, {
                                className: y.countdown,
                                deadline: new Date(S),
                                onInterval: j,
                                showUnits: !0,
                                stopAtOneSec: !0
                            })
              }),
              actions: [
                  {
                      text: b.intl.string(b.t['ETE/oK']),
                      onClick: D,
                      variant: 'secondary'
                  },
                  {
                      text: b.intl.string(b.t.qXtNtb),
                      onClick: U,
                      loading: E,
                      variant: 'critical-primary'
                  }
              ],
              children: (0, l.jsx)(r.Text, {
                  variant: 'text-md/normal',
                  color: 'interactive-normal',
                  children: b.intl.format(b.t.KtENkJ, { link: m.cu })
              })
          });
}
