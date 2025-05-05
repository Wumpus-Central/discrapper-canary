l.d(t, { default: () => k }), l(388685);
var n = l(255367),
    s = l(73800),
    o = l(442837),
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
    N = l(454489);
function U(e) {
    return {
        value: e,
        get label() {
            var t;
            return null == (t = (0, m.L9)(e)) ? void 0 : t.toLocaleUpperCase();
        }
    };
}
let g = [U(m.UK.DURATION_60_SEC), U(m.UK.DURATION_5_MIN), U(m.UK.DURATION_10_MIN), U(m.UK.DURATION_1_HOUR), U(m.UK.DURATION_1_DAY), U(m.UK.DURATION_1_WEEK)];
function k(e) {
    var t, l;
    let { guildId: U, userId: k, anaylticsLocations: p, transitionState: I, onClose: S } = e,
        f = (0, u.Dt)(),
        { analyticsLocations: j } = (0, i.ZP)(),
        v = null != (l = null != (t = null == p ? void 0 : p[0]) ? t : null == j ? void 0 : j[0]) ? l : null,
        D = (0, o.e7)([x.default], () => x.default.getUser(k), [k]),
        [b, O] = s.useState(m.UK.DURATION_60_SEC),
        E = (0, d.sE)(U, {
            location: v,
            targetUserId: k
        }),
        [A, R] = s.useState(''),
        [y, B] = s.useState(!1),
        K = s.useCallback(async () => {
            if (null != D) {
                B(!0);
                try {
                    await r.Z.setCommunicationDisabledDuration(U, k, b, A, v), E(d.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(C.intl.formatToPlainString(C.t.O9C3Nj, { user: h.ZP.getName(U, null, D) }), a.ToastType.SUCCESS)), S();
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.epyCur), a.ToastType.FAILURE));
                } finally {
                    B(!1);
                }
            }
        }, [U, D, k, S, b, A, v, E]);
    return ((0, c.ZP)(() => {
        null != D &&
            _.default.track(T.rMx.OPEN_MODAL, {
                type: m.Cl,
                guild_id: U,
                other_user_id: D.id
            });
    }),
    s.useEffect(() => {
        (null == D || null == U) && S();
    }, [U, D, S]),
    null == D || null == U)
        ? null
        : (0, n.jsxs)(a.Y0X, {
              transitionState: I,
              'aria-labelledby': f,
              children: [
                  (0, n.jsxs)(a.xBx, {
                      className: N.header,
                      separator: !1,
                      children: [
                          (0, n.jsx)(a.X6q, {
                              id: f,
                              variant: 'heading-lg/semibold',
                              children: C.intl.format(C.t.OhsOy8, { user: h.ZP.getName(U, null, D) })
                          }),
                          (0, n.jsx)(a.P3F, {
                              onClick: S,
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
                                      let { value: s, label: o } = e;
                                      return {
                                          content: (0, n.jsx)(a.Text, {
                                              variant: 'text-xs/normal',
                                              className: t ? N.selectorTextSelected : N.selectorText,
                                              children: o
                                          }),
                                          className: t ? N.selectorButtonSelected : N.selectorButton,
                                          onClick: () => l(s)
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
                              onClick: S,
                              children: C.intl.string(C.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
