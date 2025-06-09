l.d(t, { default: () => j }), l(388685);
var n = l(255367),
    o = l(73800),
    r = l(442837),
    s = l(481060),
    a = l(91176),
    i = l(493773),
    c = l(906732),
    u = l(313201),
    d = l(910693),
    _ = l(501517),
    x = l(592125),
    h = l(594174),
    m = l(626135),
    T = l(5192),
    C = l(590433),
    N = l(981631),
    g = l(388032),
    p = l(130883),
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
        I = (0, r.e7)([h.default], () => h.default.getUser(j), [j]),
        [A, y] = o.useState(C.UK.DURATION_60_SEC),
        [K, M] = o.useState(''),
        [B, Z] = o.useState(!1),
        [P, w] = o.useState(!1),
        H = (0, r.e7)([x.Z], () => {
            var e;
            return null == (e = x.Z.getChannel(k)) ? void 0 : e.isArchivedThread();
        }),
        L = (0, d.sE)(E, {
            location: D,
            targetUserId: j
        }),
        z = o.useCallback(async () => {
            if (null != I) {
                Z(!0);
                try {
                    await a.Z.setCommunicationDisabledDuration(E, j, A, K, D, k), P && null != k && _.Z.resolveFlag(k), L(d.jQ.TIMEOUT), (0, s.showToast)((0, s.createToast)(g.intl.formatToPlainString(g.t.O9C3Nj, { user: T.ZP.getName(E, null, I) }), s.ToastType.SUCCESS)), f();
                } catch (e) {
                    (0, s.showToast)((0, s.createToast)(g.intl.string(g.t.epyCur), s.ToastType.FAILURE));
                } finally {
                    Z(!1);
                }
            }
        }, [E, I, j, f, A, K, D, L, k, P]);
    return ((0, i.ZP)(() => {
        null != I &&
            m.default.track(N.rMx.OPEN_MODAL, {
                type: C.Cl,
                guild_id: E,
                other_user_id: I.id
            });
    }),
    o.useEffect(() => {
        (null == I || null == E) && f();
    }, [E, I, f]),
    null == I || null == E)
        ? null
        : (0, n.jsxs)(s.Y0X, {
              transitionState: U,
              'aria-labelledby': S,
              parentComponent: 'GuildDisableCommunicationModal',
              children: [
                  (0, n.jsx)(s.xBx, {
                      separator: !1,
                      children: (0, n.jsxs)(s.Kqy, {
                          direction: 'vertical',
                          justify: 'space-between',
                          children: [
                              (0, n.jsx)(s.olH, {
                                  className: O.closeButton,
                                  onClick: f
                              }),
                              (0, n.jsx)(s.X6q, {
                                  id: S,
                                  variant: 'heading-xl/bold',
                                  children: g.intl.format(g.t.OhsOy8, { user: T.ZP.getName(E, null, I) })
                              })
                          ]
                      })
                  }),
                  (0, n.jsxs)(s.hzk, {
                      className: O.contentContainer,
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: g.intl.format(g.t.Ns83GR, { helpdeskArticle: C.cu })
                          }),
                          (0, n.jsx)(s.X6q, {
                              className: O.selectorHeader,
                              variant: 'heading-sm/semibold',
                              children: g.intl.string(g.t['9XsExs'])
                          }),
                          (0, n.jsx)(s.hE2, {
                              buttons: R.map((e) =>
                                  (function (e, t, l) {
                                      let { value: o, label: r } = e;
                                      return {
                                          content: (0, n.jsx)(s.Text, {
                                              variant: 'text-sm/semibold',
                                              className: t ? O.selectorTextSelected : O.selectorText,
                                              children: r
                                          }),
                                          className: t ? O.selectorButtonSelected : O.selectorButton,
                                          onClick: () => l(o)
                                      };
                                  })(e, e.value === A, y)
                              )
                          }),
                          (0, n.jsx)(s.X6q, {
                              className: O.selectorHeader,
                              variant: 'heading-sm/semibold',
                              children: g.intl.string(g.t.ewHW19)
                          }),
                          (0, n.jsx)(s.Kx8, {
                              value: K,
                              onChange: (e) => M(e),
                              placeholder: g.intl.string(g.t.GakiHx),
                              rows: 4,
                              maxLength: C.GN
                          })
                      ]
                  }),
                  (0, n.jsxs)(s.mzw, {
                      children: [
                          (0, n.jsx)(s.zxk, {
                              onClick: z,
                              color: s.zxk.Colors.BRAND,
                              submitting: B,
                              children: g.intl.string(g.t.MlPTIi)
                          }),
                          (0, n.jsx)(s.zxk, {
                              type: 'button',
                              look: s.zxk.Looks.LINK,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: f,
                              children: g.intl.string(g.t['ETE/oK'])
                          }),
                          null != k &&
                              !H &&
                              (0, n.jsx)(s.XZJ, {
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
