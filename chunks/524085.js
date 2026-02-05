n.d(e, { default: () => S });
var a = n(627968),
    i = n(64700),
    l = n(158954),
    o = n(311907),
    r = n(421380),
    s = n(397927),
    u = n(262577),
    c = n(964486),
    _ = n(688810),
    d = n(504049),
    A = n(226698),
    E = n(734057),
    T = n(287809),
    D = n(954571),
    m = n(562153),
    C = n(200700),
    g = n(652215),
    O = n(985018),
    h = n(641131),
    I = n(471053);
function M(t) {
    return {
        value: t,
        get label() {
            return (0, C.getFriendlyDurationString)(t);
        },
    };
}
let R = [
    M(C.DisableCommunicationDuration.DURATION_60_SEC),
    M(C.DisableCommunicationDuration.DURATION_5_MIN),
    M(C.DisableCommunicationDuration.DURATION_10_MIN),
    M(C.DisableCommunicationDuration.DURATION_1_HOUR),
    M(C.DisableCommunicationDuration.DURATION_1_DAY),
    M(C.DisableCommunicationDuration.DURATION_1_WEEK),
];
function S(t) {
    let { guildId: e, userId: n, anaylticsLocations: M, transitionState: S, onClose: N, modReportId: b } = t,
        { analyticsLocations: p } = (0, _.Ay)(),
        U = M?.[0] ?? p?.[0] ?? null,
        f = (0, o.bG)([T.default], () => T.default.getUser(n), [n]),
        [y, k] = i.useState(C.DisableCommunicationDuration.DURATION_60_SEC),
        [v, x] = i.useState(""),
        [H, B] = i.useState(!1),
        [j, L] = i.useState(!1),
        w = (0, o.bG)([E.A], () => E.A.getChannel(b)?.isArchivedThread()),
        F = (0, d.$9)(e, { location: U, targetUserId: n }),
        P = i.useCallback(async () => {
            if (null != f) {
                B(!0);
                try {
                    await u.A.setCommunicationDisabledDuration(e, n, y, v, U, b),
                        j && null != b && A.A.resolveFlag(b),
                        F(d.Nj.TIMEOUT),
                        (0, s.showToast)(
                            (0, s.createToast)(
                                O.intl.formatToPlainString(O.t.O9C3Nt, { user: m.Ay.getName(e, null, f) }),
                                s.ToastType.SUCCESS,
                            ),
                        ),
                        N();
                } catch (t) {
                    (0, s.showToast)((0, s.createToast)(O.intl.string(O.t.epyCuh), s.ToastType.FAILURE));
                } finally {
                    B(!1);
                }
            }
        }, [e, f, n, N, y, v, U, F, b, j]);
    return ((0, c.Ay)(() => {
        null != f && D.default.track(g.HAw.OPEN_MODAL, { type: C.aZ, guild_id: e, other_user_id: f.id });
    }),
    i.useEffect(() => {
        (null == f || null == e) && N();
    }, [e, f, N]),
    null == f || null == e)
        ? null
        : (0, a.jsx)(l.Modal, {
              transitionState: S,
              title: O.intl.formatToPlainString(O.t.OhsOy0, { user: m.Ay.getName(e, null, f) }),
              subtitle: O.intl.format(O.t.Ns83GT, { helpdeskArticle: C.MO }),
              actions: [
                  { text: O.intl.string(O.t["ETE/oC"]), onClick: N, variant: "secondary" },
                  { text: O.intl.string(O.t.MlPTIi), onClick: P, loading: H },
              ],
              actionBarInput:
                  null == b || w
                      ? void 0
                      : (0, a.jsx)(s.Checkbox, {
                            checked: j,
                            onChange: (t) => L(t),
                            labelType: "secondary",
                            label: O.intl.string(h.default["8yIKem"]),
                        }),
              onClose: N,
              children: (0, a.jsxs)(s.BJc, {
                  gap: 16,
                  children: [
                      (0, a.jsxs)(s.BJc, {
                          gap: 8,
                          children: [
                              (0, a.jsx)(s.Heading, {
                                  variant: "heading-sm/semibold",
                                  children: O.intl.string(O.t["9XsExm"]),
                              }),
                              (0, a.jsx)(r.e2, {
                                  buttons: R.map((t) =>
                                      (function (t, e, n) {
                                          let { value: i, label: l } = t;
                                          return {
                                              content: (0, a.jsx)(s.Text, {
                                                  variant: "text-sm/semibold",
                                                  className: e ? I.u$ : I.nM,
                                                  children: l,
                                              }),
                                              className: e ? I.XZ : I.aK,
                                              onClick: () => n(i),
                                          };
                                      })(t, t.value === y, k),
                                  ),
                              }),
                          ],
                      }),
                      (0, a.jsxs)(s.BJc, {
                          gap: 8,
                          children: [
                              (0, a.jsx)(s.Heading, {
                                  variant: "heading-sm/semibold",
                                  children: O.intl.string(O.t.ewHW15),
                              }),
                              (0, a.jsx)(s.fs1, {
                                  value: v,
                                  onChange: (t) => x(t),
                                  placeholder: O.intl.string(O.t.GakiH1),
                                  rows: 4,
                                  maxLength: C.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
