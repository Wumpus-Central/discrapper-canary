l.d(t, { default: () => k }), l(47120);
var n = l(200651),
    o = l(192379),
    s = l(442837),
    a = l(481060),
    r = l(91176),
    c = l(493773),
    i = l(906732),
    u = l(313201),
    d = l(910693),
    x = l(594174),
    _ = l(626135),
    h = l(5192),
    m = l(590433),
    T = l(981631),
    C = l(388032),
    N = l(939202);
function U(e) {
    return {
        value: e,
        get label() {
            var t;
            return null === (t = (0, m.L9)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase();
        }
    };
}
let g = [U(m.UK.DURATION_60_SEC), U(m.UK.DURATION_5_MIN), U(m.UK.DURATION_10_MIN), U(m.UK.DURATION_1_HOUR), U(m.UK.DURATION_1_DAY), U(m.UK.DURATION_1_WEEK)];
function k(e) {
    var t, l;
    let { guildId: U, userId: k, anaylticsLocations: p, transitionState: v, onClose: I } = e,
        S = (0, u.Dt)(),
        { analyticsLocations: f } = (0, i.ZP)(),
        j = null !== (l = null !== (t = null == p ? void 0 : p[0]) && void 0 !== t ? t : null == f ? void 0 : f[0]) && void 0 !== l ? l : null,
        D = (0, s.e7)([x.default], () => x.default.getUser(k), [k]),
        [b, O] = o.useState(m.UK.DURATION_60_SEC),
        E = (0, d.sE)(U, {
            location: j,
            targetUserId: k
        }),
        [A, R] = o.useState(''),
        [y, B] = o.useState(!1),
        K = o.useCallback(async () => {
            if (null != D) {
                B(!0);
                try {
                    await r.Z.setCommunicationDisabledDuration(U, k, b, A, j), E(d.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(C.intl.formatToPlainString(C.t.O9C3Nj, { user: h.ZP.getName(U, null, D) }), a.ToastType.SUCCESS)), I();
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.epyCur), a.ToastType.FAILURE));
                } finally {
                    B(!1);
                }
            }
        }, [U, D, k, I, b, A, j, E]);
    return ((0, c.ZP)(() => {
        null != D &&
            _.default.track(T.rMx.OPEN_MODAL, {
                type: m.Cl,
                guild_id: U,
                other_user_id: D.id
            });
    }),
    o.useEffect(() => {
        (null == D || null == U) && I();
    }, [U, D, I]),
    null == D || null == U)
        ? null
        : (0, n.jsxs)(a.Y0X, {
              transitionState: v,
              'aria-labelledby': S,
              children: [
                  (0, n.jsxs)(a.xBx, {
                      className: N.header,
                      separator: !1,
                      children: [
                          (0, n.jsx)(a.X6q, {
                              id: S,
                              variant: 'heading-lg/semibold',
                              children: C.intl.format(C.t.OhsOy8, { user: h.ZP.getName(U, null, D) })
                          }),
                          (0, n.jsx)(a.P3F, {
                              onClick: I,
                              className: N.closeButton,
                              'aria-label': C.intl.string(C.t.cpT0Cg),
                              children: (0, n.jsx)(a.Dio, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: N.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, n.jsxs)(a.hzk, {
                      className: N.contentContainer,
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: C.intl.format(C.t.Ns83GR, { helpdeskArticle: m.cu })
                          }),
                          (0, n.jsx)(a.Text, {
                              className: N.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: C.intl.string(C.t['9XsExs'])
                          }),
                          (0, n.jsx)(a.hE2, {
                              buttons: g.map((e) =>
                                  (function (e, t, l) {
                                      let { value: o, label: s } = e;
                                      return {
                                          content: (0, n.jsx)(a.Text, {
                                              variant: 'text-xs/normal',
                                              className: t ? N.selectorTextSelected : N.selectorText,
                                              children: s
                                          }),
                                          className: t ? N.selectorButtonSelected : N.selectorButton,
                                          onClick: () => l(o)
                                      };
                                  })(e, e.value === b, O)
                              )
                          }),
                          (0, n.jsx)(a.Text, {
                              className: N.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: C.intl.string(C.t.ewHW19)
                          }),
                          (0, n.jsx)(a.Kx8, {
                              value: A,
                              onChange: (e) => R(e),
                              placeholder: C.intl.string(C.t.GakiHx),
                              rows: 2,
                              maxLength: m.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(a.mzw, {
                      children: [
                          (0, n.jsx)(a.zxk, {
                              onClick: K,
                              color: a.zxk.Colors.BRAND,
                              submitting: y,
                              children: C.intl.string(C.t.MlPTIi)
                          }),
                          (0, n.jsx)(a.zxk, {
                              type: 'button',
                              look: a.zxk.Looks.LINK,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: I,
                              children: C.intl.string(C.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
