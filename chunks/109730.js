l.d(t, { default: () => g }), l(388685);
var n = l(255367),
    o = l(73800),
    r = l(442837),
    a = l(481060),
    c = l(91176),
    i = l(493773),
    s = l(906732),
    u = l(313201),
    _ = l(910693),
    d = l(594174),
    E = l(626135),
    x = l(5192),
    T = l(590433),
    m = l(981631),
    A = l(388032),
    C = l(589713);
function N(e) {
    return {
        value: e,
        get label() {
            var t;
            return null == (t = (0, T.L9)(e)) ? void 0 : t.toLocaleUpperCase();
        }
    };
}
let O = [N(T.UK.DURATION_60_SEC), N(T.UK.DURATION_5_MIN), N(T.UK.DURATION_10_MIN), N(T.UK.DURATION_1_HOUR), N(T.UK.DURATION_1_DAY), N(T.UK.DURATION_1_WEEK)];
function g(e) {
    var t, l;
    let { guildId: N, userId: g, anaylticsLocations: I, transitionState: f, onClose: h, modReportId: S } = e,
        D = (0, u.Dt)(),
        { analyticsLocations: M } = (0, s.ZP)(),
        U = null != (l = null != (t = null == I ? void 0 : I[0]) ? t : null == M ? void 0 : M[0]) ? l : null,
        b = (0, r.e7)([d.default], () => d.default.getUser(g), [g]),
        [p, v] = o.useState(T.UK.DURATION_60_SEC),
        k = (0, _.sE)(N, {
            location: U,
            targetUserId: g
        }),
        [R, y] = o.useState(''),
        [j, B] = o.useState(!1),
        L = o.useCallback(async () => {
            if (null != b) {
                B(!0);
                try {
                    await c.Z.setCommunicationDisabledDuration(N, g, p, R, U, S), k(_.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(A.intl.formatToPlainString(A.t.O9C3Nj, { user: x.ZP.getName(N, null, b) }), a.ToastType.SUCCESS)), h();
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(A.intl.string(A.t.epyCur), a.ToastType.FAILURE));
                } finally {
                    B(!1);
                }
            }
        }, [N, b, g, h, p, R, U, k, S]);
    return ((0, i.ZP)(() => {
        null != b &&
            E.default.track(m.rMx.OPEN_MODAL, {
                type: T.Cl,
                guild_id: N,
                other_user_id: b.id
            });
    }),
    o.useEffect(() => {
        (null == b || null == N) && h();
    }, [N, b, h]),
    null == b || null == N)
        ? null
        : (0, n.jsxs)(a.Y0X, {
              transitionState: f,
              'aria-labelledby': D,
              children: [
                  (0, n.jsxs)(a.xBx, {
                      className: C.header,
                      separator: !1,
                      children: [
                          (0, n.jsx)(a.X6q, {
                              id: D,
                              variant: 'heading-lg/semibold',
                              children: A.intl.format(A.t.OhsOy8, { user: x.ZP.getName(N, null, b) })
                          }),
                          (0, n.jsx)(a.P3F, {
                              onClick: h,
                              className: C.closeButton,
                              'aria-label': A.intl.string(A.t.cpT0Cg),
                              children: (0, n.jsx)(a.Dio, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, n.jsxs)(a.hzk, {
                      className: C.contentContainer,
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: A.intl.format(A.t.Ns83GR, { helpdeskArticle: T.cu })
                          }),
                          (0, n.jsx)(a.Text, {
                              className: C.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: A.intl.string(A.t['9XsExs'])
                          }),
                          (0, n.jsx)(a.hE2, {
                              buttons: O.map((e) =>
                                  (function (e, t, l) {
                                      let { value: o, label: r } = e;
                                      return {
                                          content: (0, n.jsx)(a.Text, {
                                              variant: 'text-xs/normal',
                                              className: t ? C.selectorTextSelected : C.selectorText,
                                              children: r
                                          }),
                                          className: t ? C.selectorButtonSelected : C.selectorButton,
                                          onClick: () => l(o)
                                      };
                                  })(e, e.value === p, v)
                              )
                          }),
                          (0, n.jsx)(a.Text, {
                              className: C.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: A.intl.string(A.t.ewHW19)
                          }),
                          (0, n.jsx)(a.Kx8, {
                              value: R,
                              onChange: (e) => y(e),
                              placeholder: A.intl.string(A.t.GakiHx),
                              rows: 2,
                              maxLength: T.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(a.mzw, {
                      children: [
                          (0, n.jsx)(a.zxk, {
                              onClick: L,
                              color: a.zxk.Colors.BRAND,
                              submitting: j,
                              children: A.intl.string(A.t.MlPTIi)
                          }),
                          (0, n.jsx)(a.zxk, {
                              type: 'button',
                              look: a.zxk.Looks.LINK,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: h,
                              children: A.intl.string(A.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
