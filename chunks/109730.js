l.d(t, { default: () => p }), l(388685);
var n = l(255367),
    o = l(73800),
    s = l(442837),
    a = l(481060),
    r = l(91176),
    c = l(493773),
    i = l(906732),
    u = l(313201),
    d = l(910693),
    x = l(594174),
    _ = l(626135),
    m = l(5192),
    h = l(590433),
    T = l(981631),
    C = l(388032),
    N = l(454489);
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
function p(e) {
    var t, l;
    let { guildId: U, userId: p, anaylticsLocations: k, transitionState: I, onClose: S, modReportId: f } = e,
        j = (0, u.Dt)(),
        { analyticsLocations: v } = (0, i.ZP)(),
        D = null != (l = null != (t = null == k ? void 0 : k[0]) ? t : null == v ? void 0 : v[0]) ? l : null,
        b = (0, s.e7)([x.default], () => x.default.getUser(p), [p]),
        [O, E] = o.useState(h.UK.DURATION_60_SEC),
        R = (0, d.sE)(U, {
            location: D,
            targetUserId: p
        }),
        [A, y] = o.useState(''),
        [B, K] = o.useState(!1),
        w = o.useCallback(async () => {
            if (null != b) {
                K(!0);
                try {
                    await r.Z.setCommunicationDisabledDuration(U, p, O, A, D, f), R(d.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(C.intl.formatToPlainString(C.t.O9C3Nj, { user: m.ZP.getName(U, null, b) }), a.ToastType.SUCCESS)), S();
                } catch (e) {
                    (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.epyCur), a.ToastType.FAILURE));
                } finally {
                    K(!1);
                }
            }
        }, [U, b, p, S, O, A, D, R, f]);
    return ((0, c.ZP)(() => {
        null != b &&
            _.default.track(T.rMx.OPEN_MODAL, {
                type: h.Cl,
                guild_id: U,
                other_user_id: b.id
            });
    }),
    o.useEffect(() => {
        (null == b || null == U) && S();
    }, [U, b, S]),
    null == b || null == U)
        ? null
        : (0, n.jsxs)(a.Y0X, {
              transitionState: I,
              'aria-labelledby': j,
              children: [
                  (0, n.jsxs)(a.xBx, {
                      className: N.header,
                      separator: !1,
                      children: [
                          (0, n.jsx)(a.X6q, {
                              id: j,
                              variant: 'heading-lg/semibold',
                              children: C.intl.format(C.t.OhsOy8, { user: m.ZP.getName(U, null, b) })
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
                              children: C.intl.format(C.t.Ns83GR, { helpdeskArticle: h.cu })
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
                                  })(e, e.value === O, E)
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
                              onChange: (e) => y(e),
                              placeholder: C.intl.string(C.t.GakiHx),
                              rows: 2,
                              maxLength: h.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(a.mzw, {
                      children: [
                          (0, n.jsx)(a.zxk, {
                              onClick: w,
                              color: a.zxk.Colors.BRAND,
                              submitting: B,
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
