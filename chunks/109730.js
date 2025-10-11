n.d(e, { default: () => h }), n(388685);
var l = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    r = n(755721),
    u = n(481060),
    c = n(91176),
    s = n(493773),
    d = n(906732),
    _ = n(910693),
    E = n(501517),
    T = n(592125),
    m = n(594174),
    g = n(626135),
    D = n(5192),
    O = n(590433),
    A = n(981631),
    C = n(388032),
    S = n(764295),
    b = n(678437);
function M(t) {
    return {
        value: t,
        get label() {
            return (0, O.getFriendlyDurationString)(t);
        },
    };
}
let f = [
    M(O.DisableCommunicationDuration.DURATION_60_SEC),
    M(O.DisableCommunicationDuration.DURATION_5_MIN),
    M(O.DisableCommunicationDuration.DURATION_10_MIN),
    M(O.DisableCommunicationDuration.DURATION_1_HOUR),
    M(O.DisableCommunicationDuration.DURATION_1_DAY),
    M(O.DisableCommunicationDuration.DURATION_1_WEEK),
];
function h(t) {
    var e, n;
    let { guildId: M, userId: h, anaylticsLocations: I, transitionState: p, onClose: N, modReportId: R } = t,
        { analyticsLocations: x } = (0, d.ZP)(),
        y = null != (n = null != (e = null == I ? void 0 : I[0]) ? e : null == x ? void 0 : x[0]) ? n : null,
        v = (0, o.e7)([m.default], () => m.default.getUser(h), [h]),
        [U, k] = i.useState(O.DisableCommunicationDuration.DURATION_60_SEC),
        [j, P] = i.useState(""),
        [B, L] = i.useState(!1),
        [Z, w] = i.useState(!1),
        H = (0, o.e7)([T.Z], () => {
            var t;
            return null == (t = T.Z.getChannel(R)) ? void 0 : t.isArchivedThread();
        }),
        F = (0, _.sE)(M, {
            location: y,
            targetUserId: h,
        }),
        K = i.useCallback(async () => {
            if (null != v) {
                L(!0);
                try {
                    await c.Z.setCommunicationDisabledDuration(M, h, U, j, y, R),
                        Z && null != R && E.Z.resolveFlag(R),
                        F(_.jQ.TIMEOUT),
                        (0, u.showToast)(
                            (0, u.createToast)(
                                C.intl.formatToPlainString(C.t.O9C3Nj, { user: D.ZP.getName(M, null, v) }),
                                u.ToastType.SUCCESS,
                            ),
                        ),
                        N();
                } catch (t) {
                    (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.epyCur), u.ToastType.FAILURE));
                } finally {
                    L(!1);
                }
            }
        }, [M, v, h, N, U, j, y, F, R, Z]);
    return ((0, s.ZP)(() => {
        null != v &&
            g.default.track(A.rMx.OPEN_MODAL, {
                type: O.Cl,
                guild_id: M,
                other_user_id: v.id,
            });
    }),
    i.useEffect(() => {
        (null == v || null == M) && N();
    }, [M, v, N]),
    null == v || null == M)
        ? null
        : (0, l.jsx)(a.Modal, {
              transitionState: p,
              title: C.intl.formatToPlainString(C.t.OhsOy8, { user: D.ZP.getName(M, null, v) }),
              subtitle: C.intl.format(C.t.Ns83GR, { helpdeskArticle: O.cu }),
              actions: [
                  {
                      text: C.intl.string(C.t["ETE/oK"]),
                      onClick: N,
                      variant: "secondary",
                  },
                  {
                      text: C.intl.string(C.t.MlPTIi),
                      onClick: K,
                      loading: B,
                  },
              ],
              actionBarInput:
                  null == R || H
                      ? void 0
                      : (0, l.jsx)(u.Checkbox, {
                            checked: Z,
                            onChange: (t) => w(t),
                            labelType: "secondary",
                            label: C.intl.string(S.default["8yIKen"]),
                        }),
              onClose: N,
              children: (0, l.jsxs)(u.Kqy, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(u.Kqy, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-sm/semibold",
                                  children: C.intl.string(C.t["9XsExs"]),
                              }),
                              (0, l.jsx)(r.hE, {
                                  buttons: f.map((t) =>
                                      (function (t, e, n) {
                                          let { value: i, label: a } = t;
                                          return {
                                              content: (0, l.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  className: e ? b.selectorTextSelected : b.selectorText,
                                                  children: a,
                                              }),
                                              className: e ? b.selectorButtonSelected : b.selectorButton,
                                              onClick: () => n(i),
                                          };
                                      })(t, t.value === U, k),
                                  ),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(u.Kqy, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-sm/semibold",
                                  children: C.intl.string(C.t.ewHW19),
                              }),
                              (0, l.jsx)(u.Kx8, {
                                  value: j,
                                  onChange: (t) => P(t),
                                  placeholder: C.intl.string(C.t.GakiHx),
                                  rows: 4,
                                  maxLength: O.GN,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
