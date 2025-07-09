(l.d(t, { default: () => U }), l(388685));
var n = l(255367),
    r = l(73800),
    a = l(442837),
    s = l(755721),
    o = l(481060),
    i = l(91176),
    c = l(493773),
    u = l(906732),
    d = l(313201),
    _ = l(910693),
    x = l(501517),
    h = l(592125),
    m = l(594174),
    T = l(626135),
    p = l(5192),
    C = l(590433),
    g = l(981631),
    v = l(388032),
    N = l(130883),
    E = l(454489);
function O(e) {
    return {
        value: e,
        get label() {
            return (0, C.L9)(e);
        }
    };
}
let j = [O(C.UK.DURATION_60_SEC), O(C.UK.DURATION_5_MIN), O(C.UK.DURATION_10_MIN), O(C.UK.DURATION_1_HOUR), O(C.UK.DURATION_1_DAY), O(C.UK.DURATION_1_WEEK)];
function U(e) {
    var t, l;
    let { guildId: O, userId: U, anaylticsLocations: f, transitionState: S, onClose: R, modReportId: b } = e,
        y = (0, d.Dt)(),
        { analyticsLocations: D } = (0, u.ZP)(),
        I = null != (l = null != (t = null == f ? void 0 : f[0]) ? t : null == D ? void 0 : D[0]) ? l : null,
        k = (0, a.e7)([m.default], () => m.default.getUser(U), [U]),
        [A, K] = r.useState(C.UK.DURATION_60_SEC),
        [M, Z] = r.useState(''),
        [B, w] = r.useState(!1),
        [P, H] = r.useState(!1),
        L = (0, a.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getChannel(b)) ? void 0 : e.isArchivedThread();
        }),
        X = (0, _.sE)(O, {
            location: I,
            targetUserId: U
        }),
        z = r.useCallback(async () => {
            if (null != k) {
                w(!0);
                try {
                    (await i.Z.setCommunicationDisabledDuration(O, U, A, M, I, b), P && null != b && x.Z.resolveFlag(b), X(_.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(v.intl.formatToPlainString(v.t.O9C3Nj, { user: p.ZP.getName(O, null, k) }), o.ToastType.SUCCESS)), R());
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(v.intl.string(v.t.epyCur), o.ToastType.FAILURE));
                } finally {
                    w(!1);
                }
            }
        }, [O, k, U, R, A, M, I, X, b, P]);
    return ((0, c.ZP)(() => {
        null != k &&
            T.default.track(g.rMx.OPEN_MODAL, {
                type: C.Cl,
                guild_id: O,
                other_user_id: k.id
            });
    }),
    r.useEffect(() => {
        (null == k || null == O) && R();
    }, [O, k, R]),
    null == k || null == O)
        ? null
        : (0, n.jsxs)(o.Y0X, {
              transitionState: S,
              'aria-labelledby': y,
              parentComponent: 'GuildDisableCommunicationModal',
              children: [
                  (0, n.jsx)(o.xBx, {
                      separator: !1,
                      children: (0, n.jsxs)(o.Kqy, {
                          direction: 'vertical',
                          justify: 'space-between',
                          children: [
                              (0, n.jsx)(o.olH, {
                                  className: E.closeButton,
                                  onClick: R
                              }),
                              (0, n.jsx)(o.X6q, {
                                  id: y,
                                  variant: 'heading-xl/bold',
                                  children: v.intl.format(v.t.OhsOy8, { user: p.ZP.getName(O, null, k) })
                              })
                          ]
                      })
                  }),
                  (0, n.jsxs)(o.hzk, {
                      className: E.contentContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t.Ns83GR, { helpdeskArticle: C.cu })
                          }),
                          (0, n.jsx)(o.X6q, {
                              className: E.selectorHeader,
                              variant: 'heading-sm/semibold',
                              children: v.intl.string(v.t['9XsExs'])
                          }),
                          (0, n.jsx)(s.hE, {
                              buttons: j.map((e) =>
                                  (function (e, t, l) {
                                      let { value: r, label: a } = e;
                                      return {
                                          content: (0, n.jsx)(o.Text, {
                                              variant: 'text-sm/semibold',
                                              className: t ? E.selectorTextSelected : E.selectorText,
                                              children: a
                                          }),
                                          className: t ? E.selectorButtonSelected : E.selectorButton,
                                          onClick: () => l(r)
                                      };
                                  })(e, e.value === A, K)
                              )
                          }),
                          (0, n.jsx)(o.X6q, {
                              className: E.selectorHeader,
                              variant: 'heading-sm/semibold',
                              children: v.intl.string(v.t.ewHW19)
                          }),
                          (0, n.jsx)(o.Kx8, {
                              value: M,
                              onChange: (e) => Z(e),
                              placeholder: v.intl.string(v.t.GakiHx),
                              rows: 4,
                              maxLength: C.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(o.mzw, {
                      children: [
                          (0, n.jsxs)(o.hE2, {
                              direction: 'horizontal-reverse',
                              children: [
                                  (0, n.jsx)(o.zxk, {
                                      variant: 'primary',
                                      text: v.intl.string(v.t.MlPTIi),
                                      onClick: z,
                                      loading: B
                                  }),
                                  (0, n.jsx)(o.zxk, {
                                      variant: 'secondary',
                                      text: v.intl.string(v.t['ETE/oK']),
                                      type: 'button',
                                      onClick: R
                                  })
                              ]
                          }),
                          null != b &&
                              !L &&
                              (0, n.jsx)(o.XZJ, {
                                  value: P,
                                  onChange: (e, t) => {
                                      H(t);
                                  },
                                  children: v.intl.string(N.default['8yIKen'])
                              })
                      ]
                  })
              ]
          });
}
