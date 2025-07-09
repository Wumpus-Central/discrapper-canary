(e.d(n, { default: () => g }), e(388685));
var l = e(255367),
    a = e(73800),
    i = e(442837),
    s = e(481060),
    r = e(91176),
    o = e(493773),
    c = e(906732),
    u = e(346486),
    d = e(313201),
    h = e(594174),
    m = e(626135),
    p = e(71619),
    x = e(590433),
    f = e(981631),
    b = e(388032),
    v = e(209564);
function g(t) {
    var n, e;
    let { guildId: g, userId: _, anaylticsLocations: y, transitionState: C, onClose: j } = t,
        w = (0, d.Dt)(),
        { analyticsLocations: k } = (0, c.ZP)(),
        D = null != (e = null != (n = null == y ? void 0 : y[0]) ? n : null == k ? void 0 : k[0]) ? e : null,
        T = (0, i.e7)([h.default], () => h.default.getUser(_), [_]),
        [N, E] = (0, p.ZP)(_, g),
        [I, P] = a.useState(!1),
        S = a.useCallback(async () => {
            if (null != T) {
                P(!0);
                try {
                    (await r.Z.setCommunicationDisabledDuration(g, _, null, null, D), (0, s.showToast)((0, s.createToast)(b.intl.string(b.t['/Mmbfn']), s.ToastType.SUCCESS)), j());
                } catch (t) {
                    (0, s.showToast)((0, s.createToast)(b.intl.string(b.t.epyCur), s.ToastType.FAILURE));
                } finally {
                    P(!1);
                }
            }
        }, [g, T, _, j, D]),
        Z = a.useCallback(() => {
            E || j();
        }, [E, j]);
    return ((0, o.ZP)(() => {
        null != T &&
            m.default.track(f.rMx.OPEN_MODAL, {
                type: x.av,
                guild_id: g,
                other_user_id: T.id
            });
    }),
    a.useEffect(() => {
        (null == T || null == g) && j();
    }),
    null == T || null == g)
        ? null
        : (0, l.jsxs)(s.Y0X, {
              transitionState: C,
              'aria-labelledby': w,
              parentComponent: 'GuildEnableCommunicationModal',
              children: [
                  (0, l.jsxs)(s.xBx, {
                      className: v.header,
                      separator: !1,
                      children: [
                          (0, l.jsx)(s.X6q, {
                              variant: 'heading-lg/semibold',
                              children: b.intl.string(b.t['+ZD3oq'])
                          }),
                          (0, l.jsx)(s.P3F, {
                              onClick: j,
                              className: v.closeButton,
                              'aria-label': b.intl.string(b.t.cpT0Cg),
                              children: (0, l.jsx)(s.Dio, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)(s.hzk, {
                      children: [
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: b.intl.format(b.t['t+abNT'], {
                                  username: T.username,
                                  countdown: (t) =>
                                      null == N
                                          ? null
                                          : (0, l.jsx)(u.Z, {
                                                className: v.countdown,
                                                deadline: new Date(N),
                                                onInterval: Z,
                                                showUnits: !0,
                                                stopAtOneSec: !0
                                            })
                              })
                          }),
                          (0, l.jsx)(s.Text, {
                              className: v.cta,
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: b.intl.format(b.t.KtENkJ, { link: x.cu })
                          })
                      ]
                  }),
                  (0, l.jsx)(s.mzw, {
                      children: (0, l.jsxs)(s.hE2, {
                          direction: 'horizontal-reverse',
                          children: [
                              (0, l.jsx)(s.zxk, {
                                  variant: 'critical-primary',
                                  text: b.intl.string(b.t.qXtNtb),
                                  onClick: S,
                                  loading: I
                              }),
                              (0, l.jsx)(s.zxk, {
                                  variant: 'secondary',
                                  text: b.intl.string(b.t['ETE/oK']),
                                  type: 'button',
                                  onClick: j
                              })
                          ]
                      })
                  })
              ]
          });
}
