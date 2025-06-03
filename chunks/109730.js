l.d(t, { default: () => j }), l(388685);
var n = l(255367),
    r = l(73800),
    s = l(442837),
    o = l(481060),
    a = l(91176),
    i = l(493773),
    c = l(906732),
    u = l(313201),
    d = l(910693),
    _ = l(501517),
    x = l(592125),
    h = l(594174),
    T = l(626135),
    m = l(5192),
    C = l(590433),
    N = l(981631),
    g = l(388032),
    p = l(463959),
    O = l(454489);
function E(e) {
    return {
        value: e,
        get label() {
            return (0, C.L9)(e);
        }
    };
}
let R = [E(C.UK.DURATION_60_SEC), E(C.UK.DURATION_5_MIN), E(C.UK.DURATION_10_MIN), E(C.UK.DURATION_1_HOUR), E(C.UK.DURATION_1_DAY), E(C.UK.DURATION_1_WEEK)];
function j(e) {
    var t, l;
    let { guildId: E, userId: j, anaylticsLocations: v, transitionState: U, onClose: f, modReportId: k } = e,
        S = (0, u.Dt)(),
        { analyticsLocations: b } = (0, c.ZP)(),
        D = null != (l = null != (t = null == v ? void 0 : v[0]) ? t : null == b ? void 0 : b[0]) ? l : null,
        I = (0, s.e7)([h.default], () => h.default.getUser(j), [j]),
        [A, y] = r.useState(C.UK.DURATION_60_SEC),
        [K, B] = r.useState(''),
        [M, Z] = r.useState(!1),
        [P, w] = r.useState(!1),
        H = (0, s.e7)([x.Z], () => {
            var e;
            return null == (e = x.Z.getChannel(k)) ? void 0 : e.isArchivedThread();
        }),
        L = (0, d.sE)(E, {
            location: D,
            targetUserId: j
        }),
        z = r.useCallback(async () => {
            if (null != I) {
                Z(!0);
                try {
                    await a.Z.setCommunicationDisabledDuration(E, j, A, K, D, k), P && null != k && _.Z.resolveFlag(k), L(d.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(g.intl.formatToPlainString(g.t.O9C3Nj, { user: m.ZP.getName(E, null, I) }), o.ToastType.SUCCESS)), f();
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(g.intl.string(g.t.epyCur), o.ToastType.FAILURE));
                } finally {
                    Z(!1);
                }
            }
        }, [E, I, j, f, A, K, D, L, k, P]);
    return ((0, i.ZP)(() => {
        null != I &&
            T.default.track(N.rMx.OPEN_MODAL, {
                type: C.Cl,
                guild_id: E,
                other_user_id: I.id
            });
    }),
    r.useEffect(() => {
        (null == I || null == E) && f();
    }, [E, I, f]),
    null == I || null == E)
        ? null
        : (0, n.jsxs)(o.Y0X, {
              transitionState: U,
              'aria-labelledby': S,
              children: [
                  (0, n.jsx)(o.xBx, {
                      separator: !1,
                      children: (0, n.jsxs)(o.Kqy, {
                          direction: 'vertical',
                          justify: 'space-between',
                          children: [
                              (0, n.jsx)(o.olH, {
                                  className: O.closeButton,
                                  onClick: f
                              }),
                              (0, n.jsx)(o.X6q, {
                                  id: S,
                                  variant: 'heading-xl/bold',
                                  children: g.intl.format(g.t.OhsOy8, { user: m.ZP.getName(E, null, I) })
                              })
                          ]
                      })
                  }),
                  (0, n.jsxs)(o.hzk, {
                      className: O.contentContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: g.intl.format(g.t.Ns83GR, { helpdeskArticle: C.cu })
                          }),
                          (0, n.jsx)(o.X6q, {
                              className: O.selectorHeader,
                              variant: 'heading-sm/semibold',
                              children: g.intl.string(g.t['9XsExs'])
                          }),
                          (0, n.jsx)(o.hE2, {
                              buttons: R.map((e) =>
                                  (function (e, t, l) {
                                      let { value: r, label: s } = e;
                                      return {
                                          content: (0, n.jsx)(o.Text, {
                                              variant: 'text-sm/semibold',
                                              className: t ? O.selectorTextSelected : O.selectorText,
                                              children: s
                                          }),
                                          className: t ? O.selectorButtonSelected : O.selectorButton,
                                          onClick: () => l(r)
                                      };
                                  })(e, e.value === A, y)
                              )
                          }),
                          (0, n.jsx)(o.X6q, {
                              className: O.selectorHeader,
                              variant: 'heading-sm/semibold',
                              children: g.intl.string(g.t.ewHW19)
                          }),
                          (0, n.jsx)(o.Kx8, {
                              value: K,
                              onChange: (e) => B(e),
                              placeholder: g.intl.string(g.t.GakiHx),
                              rows: 4,
                              maxLength: C.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(o.mzw, {
                      children: [
                          (0, n.jsx)(o.zxk, {
                              onClick: z,
                              color: o.zxk.Colors.BRAND,
                              submitting: M,
                              children: g.intl.string(g.t.MlPTIi)
                          }),
                          (0, n.jsx)(o.zxk, {
                              type: 'button',
                              look: o.zxk.Looks.LINK,
                              color: o.zxk.Colors.PRIMARY,
                              onClick: f,
                              children: g.intl.string(g.t['ETE/oK'])
                          }),
                          null != k &&
                              !H &&
                              (0, n.jsx)(o.XZJ, {
                                  value: P,
                                  onChange: (e, t) => {
                                      w(t);
                                  },
                                  children: g.intl.string(p.default['8yIKen'])
                              })
                      ]
                  })
              ]
          });
}
