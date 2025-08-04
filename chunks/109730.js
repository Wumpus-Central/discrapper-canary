(l.d(e, { default: () => f }), l(388685));
var n = l(255367),
    s = l(73800),
    a = l(442837),
    r = l(82659),
    i = l(755721),
    o = l(481060),
    c = l(91176),
    u = l(493773),
    d = l(906732),
    _ = l(910693),
    T = l(501517),
    h = l(592125),
    g = l(594174),
    x = l(626135),
    p = l(5192),
    O = l(590433),
    m = l(981631),
    E = l(388032),
    C = l(130883),
    S = l(454489);
function U(t) {
    return {
        value: t,
        get label() {
            return (0, O.L9)(t);
        }
    };
}
let N = [U(O.UK.DURATION_60_SEC), U(O.UK.DURATION_5_MIN), U(O.UK.DURATION_10_MIN), U(O.UK.DURATION_1_HOUR), U(O.UK.DURATION_1_DAY), U(O.UK.DURATION_1_WEEK)];
function f(t) {
    var e, l;
    let { guildId: U, userId: f, anaylticsLocations: v, transitionState: R, onClose: I, modReportId: y } = t,
        { analyticsLocations: D } = (0, d.ZP)(),
        A = null != (l = null != (e = null == v ? void 0 : v[0]) ? e : null == D ? void 0 : D[0]) ? l : null,
        j = (0, a.e7)([g.default], () => g.default.getUser(f), [f]),
        [K, b] = s.useState(O.UK.DURATION_60_SEC),
        [M, Z] = s.useState(''),
        [k, P] = s.useState(!1),
        [w, B] = s.useState(!1),
        L = (0, a.e7)([h.Z], () => {
            var t;
            return null == (t = h.Z.getChannel(y)) ? void 0 : t.isArchivedThread();
        }),
        q = (0, _.sE)(U, {
            location: A,
            targetUserId: f
        }),
        W = s.useCallback(async () => {
            if (null != j) {
                P(!0);
                try {
                    (await c.Z.setCommunicationDisabledDuration(U, f, K, M, A, y), w && null != y && T.Z.resolveFlag(y), q(_.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(E.intl.formatToPlainString(E.t.O9C3Nj, { user: p.ZP.getName(U, null, j) }), o.ToastType.SUCCESS)), I());
                } catch (t) {
                    (0, o.showToast)((0, o.createToast)(E.intl.string(E.t.epyCur), o.ToastType.FAILURE));
                } finally {
                    P(!1);
                }
            }
        }, [U, j, f, I, K, M, A, q, y, w]);
    return ((0, u.ZP)(() => {
        null != j &&
            x.default.track(m.rMx.OPEN_MODAL, {
                type: O.Cl,
                guild_id: U,
                other_user_id: j.id
            });
    }),
    s.useEffect(() => {
        (null == j || null == U) && I();
    }, [U, j, I]),
    null == j || null == U)
        ? null
        : (0, n.jsx)(r.Modal, {
              transitionState: R,
              title: E.intl.formatToPlainString(E.t.OhsOy8, { user: p.ZP.getName(U, null, j) }),
              subtitle: E.intl.format(E.t.Ns83GR, { helpdeskArticle: O.cu }),
              actions: [
                  {
                      text: E.intl.string(E.t['ETE/oK']),
                      onClick: I,
                      variant: 'secondary'
                  },
                  {
                      text: E.intl.string(E.t.MlPTIi),
                      onClick: W,
                      loading: k
                  }
              ],
              actionBarInput:
                  null == y || L
                      ? void 0
                      : (0, n.jsx)(o.XZJ, {
                            value: w,
                            onChange: (t, e) => {
                                B(e);
                            },
                            children: E.intl.string(C.default['8yIKen'])
                        }),
              onClose: I,
              children: (0, n.jsxs)(o.Kqy, {
                  gap: 16,
                  children: [
                      (0, n.jsxs)(o.Kqy, {
                          gap: 8,
                          children: [
                              (0, n.jsx)(o.X6q, {
                                  variant: 'heading-sm/semibold',
                                  children: E.intl.string(E.t['9XsExs'])
                              }),
                              (0, n.jsx)(i.hE, {
                                  buttons: N.map((t) =>
                                      (function (t, e, l) {
                                          let { value: s, label: a } = t;
                                          return {
                                              content: (0, n.jsx)(o.Text, {
                                                  variant: 'text-sm/semibold',
                                                  className: e ? S.selectorTextSelected : S.selectorText,
                                                  children: a
                                              }),
                                              className: e ? S.selectorButtonSelected : S.selectorButton,
                                              onClick: () => l(s)
                                          };
                                      })(t, t.value === K, b)
                                  )
                              })
                          ]
                      }),
                      (0, n.jsxs)(o.Kqy, {
                          gap: 8,
                          children: [
                              (0, n.jsx)(o.X6q, {
                                  variant: 'heading-sm/semibold',
                                  children: E.intl.string(E.t.ewHW19)
                              }),
                              (0, n.jsx)(o.Kx8, {
                                  value: M,
                                  onChange: (t) => Z(t),
                                  placeholder: E.intl.string(E.t.GakiHx),
                                  rows: 4,
                                  maxLength: O.GN
                              })
                          ]
                      })
                  ]
              })
          });
}
