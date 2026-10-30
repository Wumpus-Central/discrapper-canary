e.d(n, { default: () => M });
var i = e(477900),
    a = e(582128),
    l = e(17928),
    s = e(189213),
    r = e(503698),
    u = e.n(r),
    o = e(559106),
    c = e(802926);
function d(t) {
    let { data: n, disabled: e } = t,
        { content: a, className: l, onClick: s, disabled: r } = n;
    return (0, i.jsx)(o.vN, {
        children: (0, i.jsx)("button", {
            type: "button",
            className: u()(c.A, l),
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
        className: u()(c.O, a),
        children: n.map((t, n) => (0, i.jsx)(d, { data: t, disabled: e }, n)),
    });
};
var h = e(834730),
    g = e(858899),
    D = e(150934),
    b = e(331322),
    C = e(297264),
    x = e(103557),
    A = e(262577),
    p = e(964486),
    N = e(688810),
    _ = e(504049),
    f = e(226698),
    y = e(734057),
    O = e(287809),
    T = e(174459),
    j = e(562153),
    v = e(200700),
    I = e(652215),
    k = e(105292),
    E = e(291185),
    S = e(456439);
function U(t) {
    return {
        value: t,
        get label() {
            return (0, v.getFriendlyDurationString)(t);
        },
    };
}
let R = [
    U(v.DisableCommunicationDuration.DURATION_60_SEC),
    U(v.DisableCommunicationDuration.DURATION_5_MIN),
    U(v.DisableCommunicationDuration.DURATION_10_MIN),
    U(v.DisableCommunicationDuration.DURATION_1_HOUR),
    U(v.DisableCommunicationDuration.DURATION_1_DAY),
    U(v.DisableCommunicationDuration.DURATION_1_WEEK),
];
function M(t) {
    let { guildId: n, userId: e, anaylticsLocations: r, transitionState: u, onClose: o, modReportId: c } = t,
        { analyticsLocations: d } = (0, N.Ay)(),
        U = r?.[0] ?? d?.[0] ?? null,
        M = (0, l.bG)([O.default], () => O.default.getUser(e), [e]),
        [w, P] = a.useState(v.DisableCommunicationDuration.DURATION_60_SEC),
        [B, G] = a.useState(""),
        [H, K] = a.useState(!1),
        [L, F] = a.useState(!1),
        W = (0, l.bG)([y.A], () => y.A.getChannel(c)?.isArchivedThread()),
        X = (0, _.$9)(n, { location: U, targetUserId: e }),
        Z = a.useCallback(async () => {
            if (null != M) {
                K(!0);
                try {
                    (await A.A.setCommunicationDisabledDuration(n, e, w, B, U, c),
                        L && null != c && f.A.resolveFlag(c),
                        X(_.Nj.TIMEOUT),
                        (0, g.P0)({
                            text: k.intl.formatToPlainString(k.t.O9C3Nt, { user: j.Ay.getName(n, null, M) }),
                            variant: "success",
                        }),
                        o());
                } catch (t) {
                    (0, g.P0)({ text: k.intl.string(k.t.epyCuh), variant: "critical" });
                } finally {
                    K(!1);
                }
            }
        }, [n, M, e, o, w, B, U, X, c, L]);
    return ((0, p.Ay)(() => {
        null != M && T.default.track(I.HAw.OPEN_MODAL, { type: v.aZ, guild_id: n, other_user_id: M.id });
    }),
    a.useEffect(() => {
        (null == M || null == n) && o();
    }, [n, M, o]),
    null == M || null == n)
        ? null
        : (0, i.jsx)(s.a, {
              transitionState: u,
              title: k.intl.formatToPlainString(k.t.OhsOy0, { user: j.Ay.getName(n, null, M) }),
              subtitle: k.intl.format(k.t.Ns83GT, { helpdeskArticle: v.MO }),
              actions: [
                  { text: k.intl.string(k.t["ETE/oC"]), onClick: o, variant: "secondary" },
                  { text: k.intl.string(k.t.MlPTIi), onClick: Z, loading: H },
              ],
              actionBarInput:
                  null == c || W
                      ? void 0
                      : (0, i.jsx)(D.S, {
                            checked: L,
                            onChange: (t) => F(t),
                            labelType: "secondary",
                            label: k.intl.string(E.default["8yIKem"]),
                        }),
              onClose: o,
              children: (0, i.jsxs)(b.B, {
                  gap: 16,
                  children: [
                      (0, i.jsxs)(b.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(C.D, {
                                  variant: "heading-sm/semibold",
                                  children: k.intl.string(k.t["9XsExm"]),
                              }),
                              (0, i.jsx)(m, {
                                  buttons: R.map((t) =>
                                      (function (t, n, e) {
                                          let { value: a, label: l } = t;
                                          return {
                                              content: (0, i.jsx)(h.E, {
                                                  variant: "text-sm/semibold",
                                                  className: n ? S.u$ : S.nM,
                                                  children: l,
                                              }),
                                              className: n ? S.XZ : S.aK,
                                              onClick: () => e(a),
                                          };
                                      })(t, t.value === w, P),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)(b.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(C.D, { variant: "heading-sm/semibold", children: k.intl.string(k.t.ewHW15) }),
                              (0, i.jsx)(x.f, {
                                  value: B,
                                  onChange: (t) => G(t),
                                  placeholder: k.intl.string(k.t.GakiH1),
                                  rows: 4,
                                  maxLength: v.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
