e.d(n, { default: () => k }), e(47120);
var l = e(200651),
    s = e(192379),
    a = e(442837),
    i = e(481060),
    o = e(91176),
    r = e(493773),
    c = e(906732),
    u = e(346486),
    d = e(313201),
    h = e(594174),
    m = e(626135),
    p = e(71619),
    x = e(590433),
    f = e(981631),
    b = e(388032),
    v = e(923333);
function k(t) {
    var n, e;
    let { guildId: k, userId: g, anaylticsLocations: _, transitionState: C, onClose: w } = t,
        y = (0, d.Dt)(),
        { analyticsLocations: j } = (0, c.ZP)(),
        D = null !== (e = null !== (n = null == _ ? void 0 : _[0]) && void 0 !== n ? n : null == j ? void 0 : j[0]) && void 0 !== e ? e : null,
        T = (0, a.e7)([h.default], () => h.default.getUser(g), [g]),
        [N, I] = (0, p.ZP)(g, k),
        [z, E] = s.useState(!1),
        P = s.useCallback(async () => {
            if (null != T) {
                E(!0);
                try {
                    await o.Z.setCommunicationDisabledDuration(k, g, null, null, D), (0, i.showToast)((0, i.createToast)(b.intl.string(b.t['/Mmbfn']), i.ToastType.SUCCESS)), w();
                } catch (t) {
                    (0, i.showToast)((0, i.createToast)(b.intl.string(b.t.epyCur), i.ToastType.FAILURE));
                } finally {
                    E(!1);
                }
            }
        }, [k, T, g, w, D]),
        S = s.useCallback(() => {
            I || w();
        }, [I, w]);
    return ((0, r.Z)(() => {
        null != T &&
            m.default.track(f.rMx.OPEN_MODAL, {
                type: x.av,
                guild_id: k,
                other_user_id: T.id
            });
    }),
    s.useEffect(() => {
        (null == T || null == k) && w();
    }),
    null == T || null == k)
        ? null
        : (0, l.jsxs)(i.Y0X, {
              transitionState: C,
              'aria-labelledby': y,
              children: [
                  (0, l.jsxs)(i.xBx, {
                      className: v.header,
                      separator: !1,
                      children: [
                          (0, l.jsx)(i.X6q, {
                              variant: 'heading-lg/semibold',
                              children: b.intl.string(b.t['+ZD3oq'])
                          }),
                          (0, l.jsx)(i.P3F, {
                              onClick: w,
                              className: v.closeButton,
                              'aria-label': b.intl.string(b.t.cpT0Cg),
                              children: (0, l.jsx)(i.Dio, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.hzk, {
                      children: [
                          (0, l.jsx)(i.Text, {
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
                                                onInterval: S,
                                                showUnits: !0,
                                                stopAtOneSec: !0
                                            })
                              })
                          }),
                          (0, l.jsx)(i.Text, {
                              className: v.cta,
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: b.intl.format(b.t.KtENkJ, { link: x.cu })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.mzw, {
                      children: [
                          (0, l.jsx)(i.zxk, {
                              color: i.zxk.Colors.RED,
                              onClick: P,
                              submitting: z,
                              children: b.intl.string(b.t.qXtNtb)
                          }),
                          (0, l.jsx)(i.zxk, {
                              type: 'button',
                              look: i.zxk.Looks.LINK,
                              color: i.zxk.Colors.PRIMARY,
                              onClick: w,
                              children: b.intl.string(b.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
