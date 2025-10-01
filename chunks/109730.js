n.d(e, { default: () => D }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(793030),
    i = n(442837),
    o = n(755721),
    u = n(481060),
    s = n(91176),
    c = n(493773),
    _ = n(906732),
    d = n(910693),
    E = n(501517),
    T = n(592125),
    O = n(594174),
    g = n(626135),
    A = n(5192),
    M = n(590433),
    S = n(981631),
    f = n(388032),
    C = n(764295),
    h = n(678437);
function m(t) {
    return {
        value: t,
        get label() {
            return (0, M.L9)(t);
        },
    };
}
let I = [
    m(M.UK.DURATION_60_SEC),
    m(M.UK.DURATION_5_MIN),
    m(M.UK.DURATION_10_MIN),
    m(M.UK.DURATION_1_HOUR),
    m(M.UK.DURATION_1_DAY),
    m(M.UK.DURATION_1_WEEK),
];
function D(t) {
    var e, n;
    let { guildId: m, userId: D, anaylticsLocations: N, transitionState: R, onClose: p, modReportId: U } = t,
        { analyticsLocations: v } = (0, _.ZP)(),
        x = null != (n = null != (e = null == N ? void 0 : N[0]) ? e : null == v ? void 0 : v[0]) ? n : null,
        b = (0, i.e7)([O.default], () => O.default.getUser(D), [D]),
        [y, j] = r.useState(M.UK.DURATION_60_SEC),
        [k, P] = r.useState(""),
        [B, K] = r.useState(!1),
        [L, Z] = r.useState(!1),
        w = (0, i.e7)([T.Z], () => {
            var t;
            return null == (t = T.Z.getChannel(U)) ? void 0 : t.isArchivedThread();
        }),
        F = (0, d.sE)(m, {
            location: x,
            targetUserId: D,
        }),
        H = r.useCallback(async () => {
            if (null != b) {
                K(!0);
                try {
                    await s.Z.setCommunicationDisabledDuration(m, D, y, k, x, U),
                        L && null != U && E.Z.resolveFlag(U),
                        F(d.jQ.TIMEOUT),
                        (0, u.showToast)(
                            (0, u.createToast)(
                                f.intl.formatToPlainString(f.t.O9C3Nj, { user: A.ZP.getName(m, null, b) }),
                                u.ToastType.SUCCESS,
                            ),
                        ),
                        p();
                } catch (t) {
                    (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.epyCur), u.ToastType.FAILURE));
                } finally {
                    K(!1);
                }
            }
        }, [m, b, D, p, y, k, x, F, U, L]);
    return ((0, c.ZP)(() => {
        null != b &&
            g.default.track(S.rMx.OPEN_MODAL, {
                type: M.Cl,
                guild_id: m,
                other_user_id: b.id,
            });
    }),
    r.useEffect(() => {
        (null == b || null == m) && p();
    }, [m, b, p]),
    null == b || null == m)
        ? null
        : (0, l.jsx)(a.Modal, {
              transitionState: R,
              title: f.intl.formatToPlainString(f.t.OhsOy8, { user: A.ZP.getName(m, null, b) }),
              subtitle: f.intl.format(f.t.Ns83GR, { helpdeskArticle: M.cu }),
              actions: [
                  {
                      text: f.intl.string(f.t["ETE/oK"]),
                      onClick: p,
                      variant: "secondary",
                  },
                  {
                      text: f.intl.string(f.t.MlPTIi),
                      onClick: H,
                      loading: B,
                  },
              ],
              actionBarInput:
                  null == U || w
                      ? void 0
                      : (0, l.jsx)(o.$q, {
                            value: L,
                            onChange: (t, e) => {
                                Z(e);
                            },
                            children: f.intl.string(C.default["8yIKen"]),
                        }),
              onClose: p,
              children: (0, l.jsxs)(u.Kqy, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(u.Kqy, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(u.X6q, {
                                  variant: "heading-sm/semibold",
                                  children: f.intl.string(f.t["9XsExs"]),
                              }),
                              (0, l.jsx)(o.hE, {
                                  buttons: I.map((t) =>
                                      (function (t, e, n) {
                                          let { value: r, label: a } = t;
                                          return {
                                              content: (0, l.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  className: e ? h.selectorTextSelected : h.selectorText,
                                                  children: a,
                                              }),
                                              className: e ? h.selectorButtonSelected : h.selectorButton,
                                              onClick: () => n(r),
                                          };
                                      })(t, t.value === y, j),
                                  ),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(u.Kqy, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(u.X6q, {
                                  variant: "heading-sm/semibold",
                                  children: f.intl.string(f.t.ewHW19),
                              }),
                              (0, l.jsx)(u.Kx8, {
                                  value: k,
                                  onChange: (t) => P(t),
                                  placeholder: f.intl.string(f.t.GakiHx),
                                  rows: 4,
                                  maxLength: M.GN,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
