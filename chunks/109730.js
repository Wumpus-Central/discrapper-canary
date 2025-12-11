n.d(e, { default: () => h }), n(388685);
var l = n(54381),
    i = n(473749),
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
    b = n(626135),
    g = n(5192),
    D = n(590433),
    O = n(981631),
    C = n(388032),
    A = n(162085),
    S = n(32930);
function M(t) {
    return {
        value: t,
        get label() {
            return (0, D.getFriendlyDurationString)(t);
        },
    };
}
let f = [
    M(D.DisableCommunicationDuration.DURATION_60_SEC),
    M(D.DisableCommunicationDuration.DURATION_5_MIN),
    M(D.DisableCommunicationDuration.DURATION_10_MIN),
    M(D.DisableCommunicationDuration.DURATION_1_HOUR),
    M(D.DisableCommunicationDuration.DURATION_1_DAY),
    M(D.DisableCommunicationDuration.DURATION_1_WEEK),
];
function h(t) {
    var e, n;
    let { guildId: M, userId: h, anaylticsLocations: I, transitionState: p, onClose: N, modReportId: R } = t,
        { analyticsLocations: y } = (0, d.ZP)(),
        v = null != (n = null != (e = null == I ? void 0 : I[0]) ? e : null == y ? void 0 : y[0]) ? n : null,
        x = (0, o.e7)([m.default], () => m.default.getUser(h), [h]),
        [U, k] = i.useState(D.DisableCommunicationDuration.DURATION_60_SEC),
        [j, P] = i.useState(""),
        [B, L] = i.useState(!1),
        [Z, w] = i.useState(!1),
        H = (0, o.e7)([T.Z], () => {
            var t;
            return null == (t = T.Z.getChannel(R)) ? void 0 : t.isArchivedThread();
        }),
        F = (0, _.sE)(M, {
            location: v,
            targetUserId: h,
        }),
        G = i.useCallback(async () => {
            if (null != x) {
                L(!0);
                try {
                    await c.Z.setCommunicationDisabledDuration(M, h, U, j, v, R),
                        Z && null != R && E.Z.resolveFlag(R),
                        F(_.jQ.TIMEOUT),
                        (0, u.showToast)(
                            (0, u.createToast)(
                                C.intl.formatToPlainString(C.t.O9C3Nt, { user: g.ZP.getName(M, null, x) }),
                                u.ToastType.SUCCESS,
                            ),
                        ),
                        N();
                } catch (t) {
                    (0, u.showToast)((0, u.createToast)(C.intl.string(C.t.epyCuh), u.ToastType.FAILURE));
                } finally {
                    L(!1);
                }
            }
        }, [M, x, h, N, U, j, v, F, R, Z]);
    return ((0, s.ZP)(() => {
        null != x &&
            b.default.track(O.rMx.OPEN_MODAL, {
                type: D.Cl,
                guild_id: M,
                other_user_id: x.id,
            });
    }),
    i.useEffect(() => {
        (null == x || null == M) && N();
    }, [M, x, N]),
    null == x || null == M)
        ? null
        : (0, l.jsx)(a.Modal, {
              transitionState: p,
              title: C.intl.formatToPlainString(C.t.OhsOy0, { user: g.ZP.getName(M, null, x) }),
              subtitle: C.intl.format(C.t.Ns83GT, { helpdeskArticle: D.cu }),
              actions: [
                  {
                      text: C.intl.string(C.t["ETE/oC"]),
                      onClick: N,
                      variant: "secondary",
                  },
                  {
                      text: C.intl.string(C.t.MlPTIi),
                      onClick: G,
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
                            label: C.intl.string(A.default["8yIKem"]),
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
                                  children: C.intl.string(C.t["9XsExm"]),
                              }),
                              (0, l.jsx)(r.hE, {
                                  buttons: f.map((t) =>
                                      (function (t, e, n) {
                                          let { value: i, label: a } = t;
                                          return {
                                              content: (0, l.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  className: e ? S.selectorTextSelected : S.selectorText,
                                                  children: a,
                                              }),
                                              className: e ? S.selectorButtonSelected : S.selectorButton,
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
                                  children: C.intl.string(C.t.ewHW15),
                              }),
                              (0, l.jsx)(u.Kx8, {
                                  value: j,
                                  onChange: (t) => P(t),
                                  placeholder: C.intl.string(C.t.GakiH1),
                                  rows: 4,
                                  maxLength: D.GN,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
