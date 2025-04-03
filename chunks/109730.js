l.d(t, { default: () => k }), l(47120);
var n = l(200651),
    s = l(192379),
    o = l(442837),
    a = l(481060),
    r = l(91176),
    c = l(493773),
    i = l(906732),
    u = l(313201),
    d = l(910693),
    x = l(594174),
    _ = l(626135),
    N = l(5192),
    h = l(590433),
    m = l(981631),
    T = l(388032),
    C = l(454489);
function U(e) {
    return {
        value: e,
        get label() {
            var t;
            return null == (t = (0, h.L9)(e)) ? void 0 : t.toLocaleUpperCase();
        }
    };
}
let g = [U(h.UK.DURATION_60_SEC), U(h.UK.DURATION_5_MIN), U(h.UK.DURATION_10_MIN), U(h.UK.DURATION_1_HOUR), U(h.UK.DURATION_1_DAY), U(h.UK.DURATION_1_WEEK)];
function k(e) {
    var t, l;
    let { guildId: U, userId: k, anaylticsLocations: p, transitionState: I, onClose: S } = e,
        f = (0, u.Dt)(),
        { analyticsLocations: j } = (0, i.ZP)(),
        v = null != (l = null != (t = null == p ? void 0 : p[0]) ? t : null == j ? void 0 : j[0]) ? l : null,
        D = (0, o.e7)([x.default], () => x.default.getUser(k), [k]),
        [b, O] = s.useState(h.UK.DURATION_60_SEC),
        E = (0, d.sE)(U, {
            location: v,
            targetUserId: k
        }),
        [A, R] = s.useState(''),
        [y, B] = s.useState(!1),
        W = s.useCallback(async () => {
            if (null != D) {
                B(!0);
                try {
                    await r.Z.setCommunicationDisabledDuration(U, k, b, A, v), E(d.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(T.NW.formatToPlainString(T.t.O9C3Nj, { user: N.ZP.getName(U, null, D) }), a.ToastType.SUCCESS)), S();
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(T.NW.string(T.t.epyCur), a.ToastType.FAILURE));
                } finally {
                    B(!1);
                }
            }
        }, [U, D, k, S, b, A, v, E]);
    return ((0, c.ZP)(() => {
        null != D &&
            _.default.track(m.rMx.OPEN_MODAL, {
                type: h.Cl,
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
                      className: C.header,
                      separator: !1,
                      children: [
                          (0, n.jsx)(a.X6q, {
                              id: f,
                              variant: 'heading-lg/semibold',
                              children: T.NW.format(T.t.OhsOy8, { user: N.ZP.getName(U, null, D) })
                          }),
                          (0, n.jsx)(a.P3F, {
                              onClick: S,
                              className: C.closeButton,
                              'aria-label': T.NW.string(T.t.cpT0Cg),
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
                              children: T.NW.format(T.t.Ns83GR, { helpdeskArticle: h.cu })
                          }),
                          (0, n.jsx)(a.Text, {
                              className: C.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: T.NW.string(T.t['9XsExs'])
                          }),
                          (0, n.jsx)(a.hE2, {
                              buttons: g.map((e) =>
                                  (function (e, t, l) {
                                      let { value: s, label: o } = e;
                                      return {
                                          content: (0, n.jsx)(a.Text, {
                                              variant: 'text-xs/normal',
                                              className: t ? C.selectorTextSelected : C.selectorText,
                                              children: o
                                          }),
                                          className: t ? C.selectorButtonSelected : C.selectorButton,
                                          onClick: () => l(s)
                                      };
                                  })(e, e.value === b, O)
                              )
                          }),
                          (0, n.jsx)(a.Text, {
                              className: C.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: T.NW.string(T.t.ewHW19)
                          }),
                          (0, n.jsx)(a.Kx8, {
                              value: A,
                              onChange: (e) => R(e),
                              placeholder: T.NW.string(T.t.GakiHx),
                              rows: 2,
                              maxLength: h.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(a.mzw, {
                      children: [
                          (0, n.jsx)(a.zxk, {
                              onClick: W,
                              color: a.zxk.Colors.BRAND,
                              submitting: y,
                              children: T.NW.string(T.t.MlPTIi)
                          }),
                          (0, n.jsx)(a.zxk, {
                              type: 'button',
                              look: a.zxk.Looks.LINK,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: S,
                              children: T.NW.string(T.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
