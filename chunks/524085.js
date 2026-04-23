a.d(t, { default: () => I });
var l = a(627968),
    n = a(64700),
    r = a(189213),
    i = a(311907),
    o = a(135714),
    s = a(834730),
    u = a(691540),
    d = a(857250),
    c = a(97483),
    g = a(150934),
    m = a(331322),
    b = a(534514),
    h = a(260598),
    p = a(262577),
    x = a(964486),
    y = a(688810),
    _ = a(504049),
    f = a(226698),
    v = a(734057),
    C = a(287809),
    A = a(954571),
    D = a(562153),
    j = a(200700),
    O = a(652215),
    w = a(985018),
    E = a(221314),
    T = a(213808);
function N(e) {
    return {
        value: e,
        get label() {
            return (0, j.getFriendlyDurationString)(e);
        },
    };
}
let S = [
    N(j.DisableCommunicationDuration.DURATION_60_SEC),
    N(j.DisableCommunicationDuration.DURATION_5_MIN),
    N(j.DisableCommunicationDuration.DURATION_10_MIN),
    N(j.DisableCommunicationDuration.DURATION_1_HOUR),
    N(j.DisableCommunicationDuration.DURATION_1_DAY),
    N(j.DisableCommunicationDuration.DURATION_1_WEEK),
];
function I(e) {
    let { guildId: t, userId: a, anaylticsLocations: N, transitionState: I, onClose: R, modReportId: M } = e,
        { analyticsLocations: P } = (0, y.Ay)(),
        k = N?.[0] ?? P?.[0] ?? null,
        U = (0, i.bG)([C.default], () => C.default.getUser(a), [a]),
        [F, B] = n.useState(j.DisableCommunicationDuration.DURATION_60_SEC),
        [z, L] = n.useState(""),
        [V, $] = n.useState(!1),
        [H, W] = n.useState(!1),
        G = (0, i.bG)([v.A], () => v.A.getChannel(M)?.isArchivedThread()),
        K = (0, _.$9)(t, { location: k, targetUserId: a }),
        X = n.useCallback(async () => {
            if (null != U) {
                $(!0);
                try {
                    await p.A.setCommunicationDisabledDuration(t, a, F, z, k, M),
                        H && null != M && f.A.resolveFlag(M),
                        K(_.Nj.TIMEOUT),
                        (0, u.P0)(
                            (0, d.o)(
                                w.intl.formatToPlainString(w.t.O9C3Nt, { user: D.Ay.getName(t, null, U) }),
                                c.Ck.SUCCESS,
                            ),
                        ),
                        R();
                } catch (e) {
                    (0, u.P0)((0, d.o)(w.intl.string(w.t.epyCuh), c.Ck.FAILURE));
                } finally {
                    $(!1);
                }
            }
        }, [t, U, a, R, F, z, k, K, M, H]);
    return ((0, x.Ay)(() => {
        null != U && A.default.track(O.HAw.OPEN_MODAL, { type: j.aZ, guild_id: t, other_user_id: U.id });
    }),
    n.useEffect(() => {
        (null == U || null == t) && R();
    }, [t, U, R]),
    null == U || null == t)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: I,
              title: w.intl.formatToPlainString(w.t.OhsOy0, { user: D.Ay.getName(t, null, U) }),
              subtitle: w.intl.format(w.t.Ns83GT, { helpdeskArticle: j.MO }),
              actions: [
                  { text: w.intl.string(w.t["ETE/oC"]), onClick: R, variant: "secondary" },
                  { text: w.intl.string(w.t.MlPTIi), onClick: X, loading: V },
              ],
              actionBarInput:
                  null == M || G
                      ? void 0
                      : (0, l.jsx)(g.S, {
                            checked: H,
                            onChange: (e) => W(e),
                            labelType: "secondary",
                            label: w.intl.string(E.default["8yIKem"]),
                        }),
              onClose: R,
              children: (0, l.jsxs)(m.B, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(m.B, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(b.D, {
                                  variant: "heading-sm/semibold",
                                  children: w.intl.string(w.t["9XsExm"]),
                              }),
                              (0, l.jsx)(o.A, {
                                  buttons: S.map((e) =>
                                      (function (e, t, a) {
                                          let { value: n, label: r } = e;
                                          return {
                                              content: (0, l.jsx)(s.E, {
                                                  variant: "text-sm/semibold",
                                                  className: t ? T.u$ : T.nM,
                                                  children: r,
                                              }),
                                              className: t ? T.XZ : T.aK,
                                              onClick: () => a(n),
                                          };
                                      })(e, e.value === F, B),
                                  ),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(m.B, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(b.D, { variant: "heading-sm/semibold", children: w.intl.string(w.t.ewHW15) }),
                              (0, l.jsx)(h.f, {
                                  value: z,
                                  onChange: (e) => L(e),
                                  placeholder: w.intl.string(w.t.GakiH1),
                                  rows: 4,
                                  maxLength: j.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
