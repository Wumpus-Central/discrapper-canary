n.d(e, { default: () => I }), n(896048);
var a = n(627968),
    i = n(64700),
    l = n(158954),
    r = n(311907),
    o = n(421380),
    u = n(397927),
    s = n(262577),
    c = n(964486),
    d = n(688810),
    _ = n(504049),
    A = n(226698),
    E = n(734057),
    m = n(287809),
    b = n(954571),
    D = n(562153),
    T = n(200700),
    g = n(652215),
    O = n(985018),
    C = n(641131),
    h = n(471053);
function f(t) {
    return {
        value: t,
        get label() {
            return (0, T.getFriendlyDurationString)(t);
        },
    };
}
let p = [
    f(T.DisableCommunicationDuration.DURATION_60_SEC),
    f(T.DisableCommunicationDuration.DURATION_5_MIN),
    f(T.DisableCommunicationDuration.DURATION_10_MIN),
    f(T.DisableCommunicationDuration.DURATION_1_HOUR),
    f(T.DisableCommunicationDuration.DURATION_1_DAY),
    f(T.DisableCommunicationDuration.DURATION_1_WEEK),
];
function I(t) {
    var e, n;
    let { guildId: f, userId: I, anaylticsLocations: M, transitionState: R, onClose: S, modReportId: y } = t,
        { analyticsLocations: N } = (0, d.Ay)(),
        v = null != (e = null != (n = null == M ? void 0 : M[0]) ? n : null == N ? void 0 : N[0]) ? e : null,
        U = (0, r.bG)([m.default], () => m.default.getUser(I), [I]),
        [k, j] = i.useState(T.DisableCommunicationDuration.DURATION_60_SEC),
        [w, x] = i.useState(""),
        [H, L] = i.useState(!1),
        [P, B] = i.useState(!1),
        F = (0, r.bG)([E.A], () => {
            var t;
            return null == (t = E.A.getChannel(y)) ? void 0 : t.isArchivedThread();
        }),
        G = (0, _.$9)(f, {
            location: v,
            targetUserId: I,
        }),
        K = i.useCallback(async () => {
            if (null != U) {
                L(!0);
                try {
                    await s.A.setCommunicationDisabledDuration(f, I, k, w, v, y),
                        P && null != y && A.A.resolveFlag(y),
                        G(_.Nj.TIMEOUT),
                        (0, u.showToast)(
                            (0, u.createToast)(
                                O.intl.formatToPlainString(O.t.O9C3Nt, { user: D.Ay.getName(f, null, U) }),
                                u.ToastType.SUCCESS,
                            ),
                        ),
                        S();
                } catch (t) {
                    (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.epyCuh), u.ToastType.FAILURE));
                } finally {
                    L(!1);
                }
            }
        }, [f, U, I, S, k, w, v, G, y, P]);
    return ((0, c.Ay)(() => {
        null != U &&
            b.default.track(g.HAw.OPEN_MODAL, {
                type: T.aZ,
                guild_id: f,
                other_user_id: U.id,
            });
    }),
    i.useEffect(() => {
        (null == U || null == f) && S();
    }, [f, U, S]),
    null == U || null == f)
        ? null
        : (0, a.jsx)(l.Modal, {
              transitionState: R,
              title: O.intl.formatToPlainString(O.t.OhsOy0, { user: D.Ay.getName(f, null, U) }),
              subtitle: O.intl.format(O.t.Ns83GT, { helpdeskArticle: T.MO }),
              actions: [
                  {
                      text: O.intl.string(O.t["ETE/oC"]),
                      onClick: S,
                      variant: "secondary",
                  },
                  {
                      text: O.intl.string(O.t.MlPTIi),
                      onClick: K,
                      loading: H,
                  },
              ],
              actionBarInput:
                  null == y || F
                      ? void 0
                      : (0, a.jsx)(u.Checkbox, {
                            checked: P,
                            onChange: (t) => B(t),
                            labelType: "secondary",
                            label: O.intl.string(C.default["8yIKem"]),
                        }),
              onClose: S,
              children: (0, a.jsxs)(u.BJc, {
                  gap: 16,
                  children: [
                      (0, a.jsxs)(u.BJc, {
                          gap: 8,
                          children: [
                              (0, a.jsx)(u.Heading, {
                                  variant: "heading-sm/semibold",
                                  children: O.intl.string(O.t["9XsExm"]),
                              }),
                              (0, a.jsx)(o.e2, {
                                  buttons: p.map((t) =>
                                      (function (t, e, n) {
                                          let { value: i, label: l } = t;
                                          return {
                                              content: (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  className: e ? h.u$ : h.nM,
                                                  children: l,
                                              }),
                                              className: e ? h.XZ : h.aK,
                                              onClick: () => n(i),
                                          };
                                      })(t, t.value === k, j),
                                  ),
                              }),
                          ],
                      }),
                      (0, a.jsxs)(u.BJc, {
                          gap: 8,
                          children: [
                              (0, a.jsx)(u.Heading, {
                                  variant: "heading-sm/semibold",
                                  children: O.intl.string(O.t.ewHW15),
                              }),
                              (0, a.jsx)(u.fs1, {
                                  value: w,
                                  onChange: (t) => x(t),
                                  placeholder: O.intl.string(O.t.GakiH1),
                                  rows: 4,
                                  maxLength: T.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
