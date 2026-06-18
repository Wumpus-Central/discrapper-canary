e.d(n, { default: () => P });
var i = e(627968),
    a = e(64700),
    l = e(189213),
    s = e(17928),
    r = e(503698),
    o = e.n(r),
    u = e(187322),
    c = e(297362);
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
    g = e(691540),
    C = e(857250),
    D = e(97483),
    b = e(150934),
    A = e(331322),
    p = e(534514),
    N = e(260598),
    _ = e(262577),
    x = e(964486),
    f = e(688810),
    y = e(504049),
    O = e(226698),
    T = e(734057),
    j = e(287809),
    k = e(174459),
    I = e(562153),
    S = e(200700),
    v = e(652215),
    E = e(375708),
    U = e(221314),
    R = e(213808);
function M(t) {
    return {
        value: t,
        get label() {
            return (0, S.getFriendlyDurationString)(t);
        },
    };
}
let w = [
    M(S.DisableCommunicationDuration.DURATION_60_SEC),
    M(S.DisableCommunicationDuration.DURATION_5_MIN),
    M(S.DisableCommunicationDuration.DURATION_10_MIN),
    M(S.DisableCommunicationDuration.DURATION_1_HOUR),
    M(S.DisableCommunicationDuration.DURATION_1_DAY),
    M(S.DisableCommunicationDuration.DURATION_1_WEEK),
];
function P(t) {
    let { guildId: n, userId: e, anaylticsLocations: r, transitionState: o, onClose: u, modReportId: c } = t,
        { analyticsLocations: d } = (0, f.Ay)(),
        M = r?.[0] ?? d?.[0] ?? null,
        P = (0, s.bG)([j.default], () => j.default.getUser(e), [e]),
        [B, G] = a.useState(S.DisableCommunicationDuration.DURATION_60_SEC),
        [H, L] = a.useState(""),
        [F, K] = a.useState(!1),
        [W, X] = a.useState(!1),
        Z = (0, s.bG)([T.A], () => T.A.getChannel(c)?.isArchivedThread()),
        $ = (0, y.$9)(n, { location: M, targetUserId: e }),
        Y = a.useCallback(async () => {
            if (null != P) {
                K(!0);
                try {
                    await _.A.setCommunicationDisabledDuration(n, e, B, H, M, c),
                        W && null != c && O.A.resolveFlag(c),
                        $(y.Nj.TIMEOUT),
                        (0, g.P0)(
                            (0, C.o)(
                                E.intl.formatToPlainString(E.t.O9C3Nt, { user: I.Ay.getName(n, null, P) }),
                                D.Ck.SUCCESS,
                            ),
                        ),
                        u();
                } catch (t) {
                    (0, g.P0)((0, C.o)(E.intl.string(E.t.epyCuh), D.Ck.FAILURE));
                } finally {
                    K(!1);
                }
            }
        }, [n, P, e, u, B, H, M, $, c, W]);
    return ((0, x.Ay)(() => {
        null != P && k.default.track(v.HAw.OPEN_MODAL, { type: S.aZ, guild_id: n, other_user_id: P.id });
    }),
    a.useEffect(() => {
        (null == P || null == n) && u();
    }, [n, P, u]),
    null == P || null == n)
        ? null
        : (0, i.jsx)(l.Modal, {
              transitionState: o,
              title: E.intl.formatToPlainString(E.t.OhsOy0, { user: I.Ay.getName(n, null, P) }),
              subtitle: E.intl.format(E.t.Ns83GT, { helpdeskArticle: S.MO }),
              actions: [
                  { text: E.intl.string(E.t["ETE/oC"]), onClick: u, variant: "secondary" },
                  { text: E.intl.string(E.t.MlPTIi), onClick: Y, loading: F },
              ],
              actionBarInput:
                  null == c || Z
                      ? void 0
                      : (0, i.jsx)(b.S, {
                            checked: W,
                            onChange: (t) => X(t),
                            labelType: "secondary",
                            label: E.intl.string(U.default["8yIKem"]),
                        }),
              onClose: u,
              children: (0, i.jsxs)(A.B, {
                  gap: 16,
                  children: [
                      (0, i.jsxs)(A.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(p.D, {
                                  variant: "heading-sm/semibold",
                                  children: E.intl.string(E.t["9XsExm"]),
                              }),
                              (0, i.jsx)(m, {
                                  buttons: w.map((t) =>
                                      (function (t, n, e) {
                                          let { value: a, label: l } = t;
                                          return {
                                              content: (0, i.jsx)(h.E, {
                                                  variant: "text-sm/semibold",
                                                  className: n ? R.u$ : R.nM,
                                                  children: l,
                                              }),
                                              className: n ? R.XZ : R.aK,
                                              onClick: () => e(a),
                                          };
                                      })(t, t.value === B, G),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)(A.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(p.D, { variant: "heading-sm/semibold", children: E.intl.string(E.t.ewHW15) }),
                              (0, i.jsx)(N.f, {
                                  value: H,
                                  onChange: (t) => L(t),
                                  placeholder: E.intl.string(E.t.GakiH1),
                                  rows: 4,
                                  maxLength: S.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
