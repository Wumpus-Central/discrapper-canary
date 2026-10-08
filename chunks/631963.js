e.d(n, { default: () => M });
var i = e(477900),
    a = e(582128),
    l = e(17928),
    s = e(189213),
    r = e(503698),
    o = e.n(r),
    u = e(559106),
    c = e(802926);
function d(t) {
    let { data: n, disabled: e } = t,
        { content: a, className: l, onClick: s, disabled: r } = n;
    return (0, i.jsx)(u.vN, {
        children: (0, i.jsx)("button", {
            type: "button",
            className: o()(c.A, l),
            onClick: s,
            disabled: e || r,
            children: a,
        }),
    });
}
let m = function (t) {
    let { buttons: n, disabled: e, className: a } = t;
    return (0, i.jsx)("div", {
        role: "group",
        className: o()(c.O, a),
        children: n.map((t, n) => (0, i.jsx)(d, { data: t, disabled: e }, n)),
    });
};
var h = e(834730),
    g = e(376357),
    C = e(150934),
    D = e(331322),
    b = e(297264),
    A = e(103557),
    x = e(262577),
    p = e(964486),
    N = e(688810),
    _ = e(504049),
    f = e(226698),
    y = e(734057),
    O = e(287809),
    T = e(174459),
    j = e(562153),
    k = e(200700),
    I = e(652215),
    S = e(660183),
    v = e(39470),
    E = e(456439);
function U(t) {
    return {
        value: t,
        get label() {
            return (0, k.getFriendlyDurationString)(t);
        },
    };
}
let R = [
    U(k.DisableCommunicationDuration.DURATION_60_SEC),
    U(k.DisableCommunicationDuration.DURATION_5_MIN),
    U(k.DisableCommunicationDuration.DURATION_10_MIN),
    U(k.DisableCommunicationDuration.DURATION_1_HOUR),
    U(k.DisableCommunicationDuration.DURATION_1_DAY),
    U(k.DisableCommunicationDuration.DURATION_1_WEEK),
];
function M(t) {
    let { guildId: n, userId: e, anaylticsLocations: r, transitionState: o, onClose: u, modReportId: c } = t,
        { analyticsLocations: d } = (0, N.Ay)(),
        U = r?.[0] ?? d?.[0] ?? null,
        M = (0, l.bG)([O.default], () => O.default.getUser(e), [e]),
        [w, P] = a.useState(k.DisableCommunicationDuration.DURATION_60_SEC),
        [B, G] = a.useState(""),
        [H, L] = a.useState(!1),
        [F, K] = a.useState(!1),
        W = (0, l.bG)([y.A], () => y.A.getChannel(c)?.isArchivedThread()),
        X = (0, _.$9)(n, { location: U, targetUserId: e }),
        Z = a.useCallback(async () => {
            if (null != M) {
                L(!0);
                try {
                    (await x.A.setCommunicationDisabledDuration(n, e, w, B, U, c),
                        F && null != c && f.A.resolveFlag(c),
                        X(_.Nj.TIMEOUT),
                        (0, g.P0)(
                            (0, g.ox)(
                                S.intl.formatToPlainString(S.t.O9C3Nt, { user: j.Ay.getName(n, null, M) }),
                                g.Ck.SUCCESS,
                            ),
                        ),
                        u());
                } catch (t) {
                    (0, g.P0)((0, g.ox)(S.intl.string(S.t.epyCuh), g.Ck.FAILURE));
                } finally {
                    L(!1);
                }
            }
        }, [n, M, e, u, w, B, U, X, c, F]);
    return ((0, p.Ay)(() => {
        null != M && T.default.track(I.HAw.OPEN_MODAL, { type: k.aZ, guild_id: n, other_user_id: M.id });
    }),
    a.useEffect(() => {
        (null == M || null == n) && u();
    }, [n, M, u]),
    null == M || null == n)
        ? null
        : (0, i.jsx)(s.a, {
              transitionState: o,
              title: S.intl.formatToPlainString(S.t.OhsOy0, { user: j.Ay.getName(n, null, M) }),
              subtitle: S.intl.format(S.t.Ns83GT, { helpdeskArticle: k.MO }),
              actions: [
                  { text: S.intl.string(S.t["ETE/oC"]), onClick: u, variant: "secondary" },
                  { text: S.intl.string(S.t.MlPTIi), onClick: Z, loading: H },
              ],
              actionBarInput:
                  null == c || W
                      ? void 0
                      : (0, i.jsx)(C.S, {
                            checked: F,
                            onChange: (t) => K(t),
                            labelType: "secondary",
                            label: S.intl.string(v.default["8yIKem"]),
                        }),
              onClose: u,
              children: (0, i.jsxs)(D.B, {
                  gap: 16,
                  children: [
                      (0, i.jsxs)(D.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(b.D, {
                                  variant: "heading-sm/semibold",
                                  children: S.intl.string(S.t["9XsExm"]),
                              }),
                              (0, i.jsx)(m, {
                                  buttons: R.map((t) =>
                                      (function (t, n, e) {
                                          let { value: a, label: l } = t;
                                          return {
                                              content: (0, i.jsx)(h.E, {
                                                  variant: "text-sm/semibold",
                                                  className: n ? E.u$ : E.nM,
                                                  children: l,
                                              }),
                                              className: n ? E.XZ : E.aK,
                                              onClick: () => e(a),
                                          };
                                      })(t, t.value === w, P),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)(D.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(b.D, { variant: "heading-sm/semibold", children: S.intl.string(S.t.ewHW15) }),
                              (0, i.jsx)(A.f, {
                                  value: B,
                                  onChange: (t) => G(t),
                                  placeholder: S.intl.string(S.t.GakiH1),
                                  rows: 4,
                                  maxLength: k.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
