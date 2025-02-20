e.d(n, { default: () => N }), e(47120);
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
    v = e(739111);
function N(t) {
    var n, e;
    let { guildId: N, userId: k, anaylticsLocations: g, transitionState: _, onClose: C } = t,
        w = (0, d.Dt)(),
        { analyticsLocations: y } = (0, c.ZP)(),
        j = null !== (e = null !== (n = null == g ? void 0 : g[0]) && void 0 !== n ? n : null == y ? void 0 : y[0]) && void 0 !== e ? e : null,
        D = (0, a.e7)([h.default], () => h.default.getUser(k), [k]),
        [T, W] = (0, p.ZP)(k, N),
        [I, P] = s.useState(!1),
        z = s.useCallback(async () => {
            if (null != D) {
                P(!0);
                try {
                    await o.Z.setCommunicationDisabledDuration(N, k, null, null, j), (0, i.showToast)((0, i.createToast)(b.NW.string(b.t['/Mmbfn']), i.ToastType.SUCCESS)), C();
                } catch (t) {
                    (0, i.showToast)((0, i.createToast)(b.NW.string(b.t.epyCur), i.ToastType.FAILURE));
                } finally {
                    P(!1);
                }
            }
        }, [N, D, k, C, j]),
        E = s.useCallback(() => {
            W || C();
        }, [W, C]);
    return ((0, r.ZP)(() => {
        null != D &&
            m.default.track(f.rMx.OPEN_MODAL, {
                type: x.av,
                guild_id: N,
                other_user_id: D.id
            });
    }),
    s.useEffect(() => {
        (null == D || null == N) && C();
    }),
    null == D || null == N)
        ? null
        : (0, l.jsxs)(i.Y0X, {
              transitionState: _,
              'aria-labelledby': w,
              children: [
                  (0, l.jsxs)(i.xBx, {
                      className: v.header,
                      separator: !1,
                      children: [
                          (0, l.jsx)(i.X6q, {
                              variant: 'heading-lg/semibold',
                              children: b.NW.string(b.t['+ZD3oq'])
                          }),
                          (0, l.jsx)(i.P3F, {
                              onClick: C,
                              className: v.closeButton,
                              'aria-label': b.NW.string(b.t.cpT0Cg),
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
                              children: b.NW.format(b.t['t+abNT'], {
                                  username: D.username,
                                  countdown: (t) =>
                                      null == T
                                          ? null
                                          : (0, l.jsx)(u.Z, {
                                                className: v.countdown,
                                                deadline: new Date(T),
                                                onInterval: E,
                                                showUnits: !0,
                                                stopAtOneSec: !0
                                            })
                              })
                          }),
                          (0, l.jsx)(i.Text, {
                              className: v.cta,
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: b.NW.format(b.t.KtENkJ, { link: x.cu })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.mzw, {
                      children: [
                          (0, l.jsx)(i.zxk, {
                              color: i.zxk.Colors.RED,
                              onClick: z,
                              submitting: I,
                              children: b.NW.string(b.t.qXtNtb)
                          }),
                          (0, l.jsx)(i.zxk, {
                              type: 'button',
                              look: i.zxk.Looks.LINK,
                              color: i.zxk.Colors.PRIMARY,
                              onClick: C,
                              children: b.NW.string(b.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
