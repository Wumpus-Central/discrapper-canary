a.d(t, { default: () => U });
var l = a(627968),
    n = a(64700),
    r = a(189213),
    i = a(17928),
    o = a(503698),
    s = a.n(o),
    u = a(187322),
    d = a(297362);
let c = (e) => {
        let { data: t, disabled: a } = e,
            { content: n, className: r, onClick: i, disabled: o } = t;
        return (0, l.jsx)(u.vN, {
            children: (0, l.jsx)("button", {
                type: "button",
                className: s()(d.A, r),
                onClick: i,
                disabled: a || o,
                children: n,
            }),
        });
    },
    g = (e) => {
        let { buttons: t, disabled: a, className: n } = e;
        return (0, l.jsx)("div", {
            role: "group",
            className: s()(d.O, n),
            children: t.map((e, t) => (0, l.jsx)(c, { data: e, disabled: a }, t)),
        });
    };
var m = a(834730),
    b = a(691540),
    h = a(857250),
    p = a(97483),
    x = a(150934),
    y = a(331322),
    _ = a(534514),
    f = a(260598),
    v = a(262577),
    C = a(964486),
    A = a(688810),
    D = a(504049),
    j = a(226698),
    O = a(734057),
    w = a(287809),
    E = a(954571),
    T = a(562153),
    N = a(200700),
    S = a(652215),
    I = a(985018),
    R = a(221314),
    M = a(213808);
function P(e) {
    return {
        value: e,
        get label() {
            return (0, N.getFriendlyDurationString)(e);
        },
    };
}
let k = [
    P(N.DisableCommunicationDuration.DURATION_60_SEC),
    P(N.DisableCommunicationDuration.DURATION_5_MIN),
    P(N.DisableCommunicationDuration.DURATION_10_MIN),
    P(N.DisableCommunicationDuration.DURATION_1_HOUR),
    P(N.DisableCommunicationDuration.DURATION_1_DAY),
    P(N.DisableCommunicationDuration.DURATION_1_WEEK),
];
function U(e) {
    let { guildId: t, userId: a, anaylticsLocations: o, transitionState: s, onClose: u, modReportId: d } = e,
        { analyticsLocations: c } = (0, A.Ay)(),
        P = o?.[0] ?? c?.[0] ?? null,
        U = (0, i.bG)([w.default], () => w.default.getUser(a), [a]),
        [F, B] = n.useState(N.DisableCommunicationDuration.DURATION_60_SEC),
        [z, L] = n.useState(""),
        [V, $] = n.useState(!1),
        [H, W] = n.useState(!1),
        G = (0, i.bG)([O.A], () => O.A.getChannel(d)?.isArchivedThread()),
        K = (0, D.$9)(t, { location: P, targetUserId: a }),
        X = n.useCallback(async () => {
            if (null != U) {
                $(!0);
                try {
                    await v.A.setCommunicationDisabledDuration(t, a, F, z, P, d),
                        H && null != d && j.A.resolveFlag(d),
                        K(D.Nj.TIMEOUT),
                        (0, b.P0)(
                            (0, h.o)(
                                I.intl.formatToPlainString(I.t.O9C3Nt, { user: T.Ay.getName(t, null, U) }),
                                p.Ck.SUCCESS,
                            ),
                        ),
                        u();
                } catch (e) {
                    (0, b.P0)((0, h.o)(I.intl.string(I.t.epyCuh), p.Ck.FAILURE));
                } finally {
                    $(!1);
                }
            }
        }, [t, U, a, u, F, z, P, K, d, H]);
    return ((0, C.Ay)(() => {
        null != U && E.default.track(S.HAw.OPEN_MODAL, { type: N.aZ, guild_id: t, other_user_id: U.id });
    }),
    n.useEffect(() => {
        (null == U || null == t) && u();
    }, [t, U, u]),
    null == U || null == t)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: s,
              title: I.intl.formatToPlainString(I.t.OhsOy0, { user: T.Ay.getName(t, null, U) }),
              subtitle: I.intl.format(I.t.Ns83GT, { helpdeskArticle: N.MO }),
              actions: [
                  { text: I.intl.string(I.t["ETE/oC"]), onClick: u, variant: "secondary" },
                  { text: I.intl.string(I.t.MlPTIi), onClick: X, loading: V },
              ],
              actionBarInput:
                  null == d || G
                      ? void 0
                      : (0, l.jsx)(x.S, {
                            checked: H,
                            onChange: (e) => W(e),
                            labelType: "secondary",
                            label: I.intl.string(R.default["8yIKem"]),
                        }),
              onClose: u,
              children: (0, l.jsxs)(y.B, {
                  gap: 16,
                  children: [
                      (0, l.jsxs)(y.B, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(_.D, {
                                  variant: "heading-sm/semibold",
                                  children: I.intl.string(I.t["9XsExm"]),
                              }),
                              (0, l.jsx)(g, {
                                  buttons: k.map((e) =>
                                      (function (e, t, a) {
                                          let { value: n, label: r } = e;
                                          return {
                                              content: (0, l.jsx)(m.E, {
                                                  variant: "text-sm/semibold",
                                                  className: t ? M.u$ : M.nM,
                                                  children: r,
                                              }),
                                              className: t ? M.XZ : M.aK,
                                              onClick: () => a(n),
                                          };
                                      })(e, e.value === F, B),
                                  ),
                              }),
                          ],
                      }),
                      (0, l.jsxs)(y.B, {
                          gap: 8,
                          children: [
                              (0, l.jsx)(_.D, { variant: "heading-sm/semibold", children: I.intl.string(I.t.ewHW15) }),
                              (0, l.jsx)(f.f, {
                                  value: z,
                                  onChange: (e) => L(e),
                                  placeholder: I.intl.string(I.t.GakiH1),
                                  rows: 4,
                                  maxLength: N.hl,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
