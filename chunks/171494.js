e.r(n),
    e.d(n, {
        default: function () {
            return g;
        }
    }),
    e(47120);
var l = e(200651),
    a = e(192379),
    s = e(442837),
    i = e(481060),
    o = e(91176),
    r = e(493773),
    c = e(906732),
    u = e(346486),
    d = e(313201),
    h = e(594174),
    m = e(626135),
    p = e(71619),
    f = e(590433),
    v = e(981631),
    x = e(388032),
    b = e(923333);
function g(t) {
    var n, e;
    let { guildId: g, userId: C, anaylticsLocations: y, transitionState: j, onClose: k } = t,
        w = (0, d.Dt)(),
        { analyticsLocations: D } = (0, c.ZP)(),
        _ = null !== (e = null !== (n = null == y ? void 0 : y[0]) && void 0 !== n ? n : null == D ? void 0 : D[0]) && void 0 !== e ? e : null,
        T = (0, s.e7)([h.default], () => h.default.getUser(C), [C]),
        [N, I] = (0, p.ZP)(C, g),
        [S, E] = a.useState(!1),
        M = a.useCallback(async () => {
            if (null != T) {
                E(!0);
                try {
                    await o.Z.setCommunicationDisabledDuration(g, C, null, null, _), (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['/Mmbfn']), i.ToastType.SUCCESS)), k();
                } catch (t) {
                    (0, i.showToast)((0, i.createToast)(x.intl.string(x.t.epyCur), i.ToastType.FAILURE));
                } finally {
                    E(!1);
                }
            }
        }, [g, T, C, k, _]),
        Z = a.useCallback(() => {
            !I && k();
        }, [I, k]);
    return ((0, r.Z)(() => {
        if (null != T)
            m.default.track(v.rMx.OPEN_MODAL, {
                type: f.av,
                guild_id: g,
                other_user_id: T.id
            });
    }),
    a.useEffect(() => {
        (null == T || null == g) && k();
    }),
    null == T || null == g)
        ? null
        : (0, l.jsxs)(i.ModalRoot, {
              transitionState: j,
              'aria-labelledby': w,
              children: [
                  (0, l.jsxs)(i.ModalHeader, {
                      className: b.header,
                      separator: !1,
                      children: [
                          (0, l.jsx)(i.Heading, {
                              variant: 'heading-lg/semibold',
                              children: x.intl.string(x.t['+ZD3oq'])
                          }),
                          (0, l.jsx)(i.Clickable, {
                              onClick: k,
                              className: b.closeButton,
                              'aria-label': x.intl.string(x.t.cpT0Cg),
                              children: (0, l.jsx)(i.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: b.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.ModalContent, {
                      children: [
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: x.intl.format(x.t['t+abNT'], {
                                  username: T.username,
                                  countdown: (t) =>
                                      null == N
                                          ? null
                                          : (0, l.jsx)(u.Z, {
                                                className: b.countdown,
                                                deadline: new Date(N),
                                                onInterval: Z,
                                                showUnits: !0,
                                                stopAtOneSec: !0
                                            })
                              })
                          }),
                          (0, l.jsx)(i.Text, {
                              className: b.cta,
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: x.intl.format(x.t.KtENkJ, { link: f.cu })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.ModalFooter, {
                      children: [
                          (0, l.jsx)(i.Button, {
                              color: i.Button.Colors.RED,
                              onClick: M,
                              submitting: S,
                              children: x.intl.string(x.t.qXtNtb)
                          }),
                          (0, l.jsx)(i.Button, {
                              type: 'button',
                              look: i.Button.Looks.LINK,
                              color: i.Button.Colors.PRIMARY,
                              onClick: k,
                              children: x.intl.string(x.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
