l.d(t, { default: () => k }), l(47120);
var o = l(200651),
    n = l(192379),
    s = l(442837),
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
    C = l(400529);
function U(e) {
    return {
        value: e,
        get label() {
            var t;
            return null === (t = (0, h.L9)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase();
        }
    };
}
let g = [U(h.UK.DURATION_60_SEC), U(h.UK.DURATION_5_MIN), U(h.UK.DURATION_10_MIN), U(h.UK.DURATION_1_HOUR), U(h.UK.DURATION_1_DAY), U(h.UK.DURATION_1_WEEK)];
function k(e) {
    var t, l;
    let { guildId: U, userId: k, anaylticsLocations: p, transitionState: v, onClose: I } = e,
        S = (0, u.Dt)(),
        { analyticsLocations: f } = (0, i.ZP)(),
        j = null !== (l = null !== (t = null == p ? void 0 : p[0]) && void 0 !== t ? t : null == f ? void 0 : f[0]) && void 0 !== l ? l : null,
        D = (0, s.e7)([x.default], () => x.default.getUser(k), [k]),
        [b, O] = n.useState(h.UK.DURATION_60_SEC),
        E = (0, d.sE)(U, {
            location: j,
            targetUserId: k
        }),
        [A, R] = n.useState(''),
        [y, B] = n.useState(!1),
        W = n.useCallback(async () => {
            if (null != D) {
                B(!0);
                try {
                    await r.Z.setCommunicationDisabledDuration(U, k, b, A, j), E(d.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(T.NW.formatToPlainString(T.t.O9C3Nj, { user: N.ZP.getName(U, null, D) }), a.ToastType.SUCCESS)), I();
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(T.NW.string(T.t.epyCur), a.ToastType.FAILURE));
                } finally {
                    B(!1);
                }
            }
        }, [U, D, k, I, b, A, j, E]);
    return ((0, c.ZP)(() => {
        null != D &&
            _.default.track(m.rMx.OPEN_MODAL, {
                type: h.Cl,
                guild_id: U,
                other_user_id: D.id
            });
    }),
    n.useEffect(() => {
        (null == D || null == U) && I();
    }, [U, D, I]),
    null == D || null == U)
        ? null
        : (0, o.jsxs)(a.Y0X, {
              transitionState: v,
              'aria-labelledby': S,
              children: [
                  (0, o.jsxs)(a.xBx, {
                      className: C.header,
                      separator: !1,
                      children: [
                          (0, o.jsx)(a.X6q, {
                              id: S,
                              variant: 'heading-lg/semibold',
                              children: T.NW.format(T.t.OhsOy8, { user: N.ZP.getName(U, null, D) })
                          }),
                          (0, o.jsx)(a.P3F, {
                              onClick: I,
                              className: C.closeButton,
                              'aria-label': T.NW.string(T.t.cpT0Cg),
                              children: (0, o.jsx)(a.Dio, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, o.jsxs)(a.hzk, {
                      className: C.contentContainer,
                      children: [
                          (0, o.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: T.NW.format(T.t.Ns83GR, { helpdeskArticle: h.cu })
                          }),
                          (0, o.jsx)(a.Text, {
                              className: C.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: T.NW.string(T.t['9XsExs'])
                          }),
                          (0, o.jsx)(a.hE2, {
                              buttons: g.map((e) =>
                                  (function (e, t, l) {
                                      let { value: n, label: s } = e;
                                      return {
                                          content: (0, o.jsx)(a.Text, {
                                              variant: 'text-xs/normal',
                                              className: t ? C.selectorTextSelected : C.selectorText,
                                              children: s
                                          }),
                                          className: t ? C.selectorButtonSelected : C.selectorButton,
                                          onClick: () => l(n)
                                      };
                                  })(e, e.value === b, O)
                              )
                          }),
                          (0, o.jsx)(a.Text, {
                              className: C.selectorHeader,
                              variant: 'text-xs/semibold',
                              color: 'interactive-normal',
                              children: T.NW.string(T.t.ewHW19)
                          }),
                          (0, o.jsx)(a.Kx8, {
                              value: A,
                              onChange: (e) => R(e),
                              placeholder: T.NW.string(T.t.GakiHx),
                              rows: 2,
                              maxLength: h.GN
                          })
                      ]
                  }),
                  (0, o.jsxs)(a.mzw, {
                      children: [
                          (0, o.jsx)(a.zxk, {
                              onClick: W,
                              color: a.zxk.Colors.BRAND,
                              submitting: y,
                              children: T.NW.string(T.t.MlPTIi)
                          }),
                          (0, o.jsx)(a.zxk, {
                              type: 'button',
                              look: a.zxk.Looks.LINK,
                              color: a.zxk.Colors.PRIMARY,
                              onClick: I,
                              children: T.NW.string(T.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
