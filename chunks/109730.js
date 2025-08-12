n.d(e, { default: () => U }), n(388685);
var l = n(255367),
    a = n(73800),
    i = n(442837),
    r = n(82659),
    o = n(755721),
    u = n(481060),
    s = n(91176),
    c = n(493773),
    _ = n(906732),
    d = n(910693),
    E = n(501517),
    T = n(592125),
    g = n(594174),
    A = n(626135),
    O = n(5192),
    S = n(590433),
    f = n(981631),
    m = n(388032),
    C = n(130883),
    I = n(678960);
function M(t) {
    return {
        value: t,
        get label() {
            return (0, S.L9)(t);
        },
    };
}
let h = [
    M(S.UK.DURATION_60_SEC),
    M(S.UK.DURATION_5_MIN),
    M(S.UK.DURATION_10_MIN),
    M(S.UK.DURATION_1_HOUR),
    M(S.UK.DURATION_1_DAY),
    M(S.UK.DURATION_1_WEEK),
];
function U(t) {
    var e, n;
    let { guildId: M, userId: U, anaylticsLocations: D, transitionState: x, onClose: N, modReportId: v } = t,
        { analyticsLocations: b } = (0, _.ZP)(),
        p = null != (n = null != (e = null == D ? void 0 : D[0]) ? e : null == b ? void 0 : b[0]) ? n : null,
        y = (0, i.e7)([g.default], () => g.default.getUser(U), [U]),
        [R, k] = a.useState(S.UK.DURATION_60_SEC),
        [j, B] = a.useState(""),
        [K, P] = a.useState(!1),
        [L, Z] = a.useState(!1),
        w = (0, i.e7)([T.Z], () => {
            var t;
            return null == (t = T.Z.getChannel(v)) ? void 0 : t.isArchivedThread();
        }),
        H = (0, d.sE)(M, {
            location: p,
            targetUserId: U,
        }),
        F = a.useCallback(async () => {
            if (null != y) {
                P(!0);
                try {
                    await s.Z.setCommunicationDisabledDuration(M, U, R, j, p, v),
                        L && null != v && E.Z.resolveFlag(v),
                        H(d.jQ.TIMEOUT),
                        (0, u.showToast)(
                            (0, u.createToast)(
                                m.intl.formatToPlainString(m.t.O9C3Nj, { user: O.ZP.getName(M, null, y) }),
                                u.ToastType.SUCCESS,
                            ),
                        ),
                        N();
                } catch (t) {
                    (0, u.showToast)((0, u.createToast)(m.intl.string(m.t.epyCur), u.ToastType.FAILURE));
                } finally {
                    P(!1);
                }
            }
        }, [M, y, U, N, R, j, p, H, v, L]);
    return ((0, c.ZP)(() => {
        null != y &&
            A.default.track(f.rMx.OPEN_MODAL, {
                type: S.Cl,
                guild_id: M,
                other_user_id: y.id,
            });
    }),
    a.useEffect(() => {
        (null == y || null == M) && N();
    }, [M, y, N]),
    null == y || null == M)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: x,
              title: m.intl.formatToPlainString(m.t.OhsOy8, { user: O.ZP.getName(M, null, y) }),
              subtitle: m.intl.format(m.t.Ns83GR, { helpdeskArticle: S.cu }),
              actions: [
                  {
                      text: m.intl.string(m.t["ETE/oK"]),
                      onClick: N,
                      variant: "secondary",
                  },
                  {
                      text: m.intl.string(m.t.MlPTIi),
                      onClick: F,
                      loading: K,
                  },
              ],
              actionBarInput:
                  null == v || w
                      ? void 0
                      : (0, l.jsx)(u.XZJ, {
                            value: L,
                            onChange: (t, e) => {
                                Z(e);
                            },
                            children: m.intl.string(C.default["8yIKen"]),
                        }),
              onClose: N,
              children: (0, l.jsxs)(u.Kqy, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(u.Kqy, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(u.X6q, {
                                  variant: "heading-sm/semibold",
                                  children: m.intl.string(m.t["9XsExs"]),
                              }),
                              (0, l.jsx)(o.hE, {
                                  buttons: h.map((t) =>
                                      (function (t, e, n) {
                                          let { value: a, label: i } = t;
                                          return {
                                              content: (0, l.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  className: e ? I.selectorTextSelected : I.selectorText,
                                                  children: i,
                                              }),
                                              className: e ? I.selectorButtonSelected : I.selectorButton,
                                              onClick: () => n(a),
                                          };
                                      })(t, t.value === R, k),
                                  ),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(u.Kqy, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(u.X6q, {
                                  variant: "heading-sm/semibold",
                                  children: m.intl.string(m.t.ewHW19),
                              }),
                              (0, l.jsx)(u.Kx8, {
                                  value: j,
                                  onChange: (t) => B(t),
                                  placeholder: m.intl.string(m.t.GakiHx),
                                  rows: 4,
                                  maxLength: S.GN,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
