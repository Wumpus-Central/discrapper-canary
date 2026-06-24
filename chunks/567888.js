"use strict";
n.d(t, { A: () => eh });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(289873),
    l = n(331322),
    u = n(534514),
    c = n(834730),
    d = n(821609),
    _ = n(964486),
    h = n(847599),
    f = n(595746),
    p = n(240248),
    E = n(562708);
n(181658);
var m = n(499785),
    g = n(652215);
async function A() {
    let e = await m.A.get({
        url: g.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: E.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function I(e) {
    return (
        await m.A.post({
            url: g.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: E.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let T = a.createContext(null);
function S() {
    let e = a.useContext(T);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var y = n(837451),
    C = n(375708),
    N =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        i);
let v = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
    },
    R = new Set(Object.values(v)),
    O = new Set([10]);
C.intl.string(y.default["Qm6K/s"]), C.intl.string(y.default["dSkE/A"]), C.intl.string(y.default.dMMSA0);
var b = (((r = {}).Empty = "empty"), (r.VerificationCode = "verification_code"), r),
    D = n(627575),
    L = n(17928),
    w = n(155718),
    M = n(139716),
    P = n(287809),
    x = n(430993),
    k = n(825484),
    U = n(214437);
function G(e) {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, s.jsxs)("footer", {
              className: U.q,
              children: [
                  null != n && (0, s.jsx)("div", { children: n }),
                  (0, s.jsx)(k.e, {
                      className: U.G,
                      justify: "end",
                      children: t.map((e, t) => (0, s.jsx)(d.$, { ...e }, t)),
                  }),
              ],
          });
}
let F = { bottom: 40, left: 32, right: 32, top: 32 };
var V = n(831067);
function B(e) {
    let { children: t, actions: n, footerInput: i, title: r } = e;
    return (0, s.jsxs)(l.B, {
        direction: "vertical",
        justify: "start",
        padding: F,
        className: V.kL,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-lg/semibold", className: V.R_, children: r }),
            (0, s.jsx)(x.c, { children: t }),
            (0, s.jsx)("div", { className: V.Ic }),
            (0, s.jsx)(G, { actions: n, footerInput: i }),
        ],
    });
}
var j = n(224640),
    H = n(20742),
    Y = n(696208),
    W = n(691540),
    K = n(857250),
    $ = n(97483),
    z = n(921853),
    q = n(695515),
    Z = n(10005),
    X = n(834981),
    Q = n(916590),
    J = n(231723),
    ee = n(818348),
    et = n(42076);
let en = "https://support.discord.com/hc/articles/14155060633623";
var ei = n(242235);
let er = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: b.Empty }), window.location.reload();
                }, [t]);
            return (0, s.jsxs)("div", {
                className: ei.kL,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/bold",
                        className: ei.DD,
                        children: C.intl.string(y.default.v52itt),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: ei.h_,
                        children: C.intl.string(y.default["5am8D3"]),
                    }),
                    (0, s.jsx)(l.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, s.jsx)(d.$, {
                            variant: "primary",
                            text: C.intl.string(y.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, L.bG)([P.default], () => P.default.getCurrentUser());
            return (0, s.jsx)(B, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === w.Tk.UNVERIFIED
                                ? M.A.showAgeVerificationGetStartedModal({
                                      entryPoint: h.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: b.Empty }),
                                  })
                                : t({ type: b.Empty });
                        },
                    },
                ],
                children: (0, s.jsxs)(l.B, {
                    gap: 8,
                    children: [
                        (0, s.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, s.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, s.jsx)(c.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            let t,
                { configData: n, onSubmit: i, disabled: r, transitionState: o = J.ip.ENTERED } = e,
                { getLinkCode: u } = (0, Z.A)(),
                _ = {
                    link_code: "string" == typeof (t = n ?? {}).link_code ? t.link_code : "",
                    link_code_expires_at: "string" == typeof t.link_code_expires_at ? t.link_code_expires_at : "",
                    pending_requests: Array.isArray(t.pending_requests) ? t.pending_requests : [],
                },
                h = (0, X.VT)(),
                f = (0, X.Du)(),
                p = (0, L.bG)([q.A], () => q.A.getLinkedUsers()),
                E = (0, L.bG)([q.A], () => q.A.getAreLinkedUsersProcessed()),
                m = E ? Object.values(p).some((e) => null != e) : _.pending_requests.length > 0,
                g = E ? h : _.pending_requests.length,
                A = (0, L.bG)([q.A], () => q.A.getLinkCode()),
                I = (0, L.bG)([q.A], () => q.A.getLinkCodeExpiresAt()),
                T = A ?? _.link_code,
                S = I ?? Date.parse(_.link_code_expires_at),
                N = a.useCallback(async () => {
                    try {
                        await i({ type: b.Empty });
                    } catch {
                        (0, W.P0)((0, K.o)(C.intl.string(y.default["+QRSxc"]), $.Ck.FAILURE));
                    }
                }, [i]),
                [v, R] = a.useState(!1),
                O = !m || v,
                w = O
                    ? C.intl.format(y.default["6GaRTu"], { link: en })
                    : C.intl.format(y.default["Ke+kz5"], { pendingCount: g, link: en });
            return (0, s.jsxs)(j.d, {
                transitionState: o,
                onClose: ee.tE,
                dismissable: !1,
                size: "md",
                "aria-label": C.intl.string(y.default.dMMSA0),
                children: [
                    v &&
                        (0, s.jsx)("div", {
                            className: et.g,
                            children: (0, s.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: z.n,
                                text: C.intl.string(y.default.CLAQas),
                                onClick: () => R(!1),
                            }),
                        }),
                    (0, s.jsx)(H.rQ, { alignCenter: !0, title: C.intl.string(y.default.dMMSA0), subtitle: w }),
                    (0, s.jsx)(x.c, {
                        children:
                            O &&
                            (0, s.jsx)(l.B, {
                                direction: "vertical",
                                align: "center",
                                gap: 16,
                                children: (0, s.jsx)(Q.r, { linkCode: T, expiresAt: S, onRefresh: u }),
                            }),
                    }),
                    (0, s.jsx)(Y.H, {
                        actionsFullWidth: !0,
                        actions:
                            m && !v
                                ? [
                                      {
                                          text: C.intl.string(y.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: () => {
                                              R(!0);
                                          },
                                      },
                                      {
                                          text: C.intl.string(y.default.OaHZUf),
                                          variant: "primary",
                                          onClick: N,
                                          disabled: !f || r,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: et.r,
                        children: C.intl.format(y.default["0DHxym"], {
                            handleLogOut: () => (0, D.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    es = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: r } = S(),
            a = er[r.ui_component.component.type];
        return null == a
            ? null
            : (0, s.jsx)(a, {
                  configData: r.ui_component.component,
                  onSubmit: t,
                  taskId: r.task_id,
                  flowId: r.flow_context?.flow_id,
                  assignmentId: r.assignment_id,
                  disabled: n,
                  transitionState: i,
              });
    };
var ea = n(754302),
    eo = n(721940);
let el = {
        [N.EMAIL_VERIFICATION]: C.intl.string(y.default.HC4IiR),
        [N.REFRESH_APP]: C.intl.string(y.default.SzfxQ3),
        [N.AGE_VERIFICATION]: C.intl.string(y.default["dSkE/A"]),
        [N.PARENTAL_CONSENT_CONNECTION]: C.intl.string(y.default.dMMSA0),
    },
    eu = function () {
        let { task: e } = S(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, s.jsxs)(l.B, {
            direction: "vertical",
            justify: "space-between",
            padding: F,
            className: eo.k,
            children: [
                (0, s.jsxs)(l.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, s.jsx)(u.D, {
                            variant: "display-md",
                            className: eo.D,
                            children: C.intl.string(y.default["/OpRAP"]),
                        }),
                        (0, s.jsx)(l.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, s.jsx)(
                                    ea.B,
                                    {
                                        title: el[e.task_type] ?? "",
                                        listType: "numbered",
                                        index: n,
                                        color: n === t ? "text-strong" : n < t ? "feedback-positive" : "text-muted",
                                        completed: n < t,
                                    },
                                    e.task_type,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, s.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: C.intl.format(y.default["0DHxym"], {
                        handleLogOut: () => (0, D.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var ec = n(561452);
let ed = n(843020);
function e_(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: r } = e,
        [o, l] = a.useState(t),
        u = a.useMemo(() => ({ task: o, setTask: l }), [o, l]);
    a.useEffect(() => {
        l(t);
    }, [t]);
    let c = O.has(o.task_type);
    return (0, s.jsxs)(T.Provider, {
        value: u,
        children: [!c && (0, s.jsx)(eu, {}), (0, s.jsx)(es, { onSubmit: n, disabled: i, transitionState: r })],
    });
}
let eh = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, r] = a.useState(null),
        [E, m] = a.useState(!0),
        [g, T] = a.useState(null),
        [S, L] = a.useState(!1),
        w = a.useCallback(async () => {
            m(!0), T(null);
            try {
                let e = await A();
                if (null == e) return void n();
                !(0, p.uJ)(e.ui_component?.component.type) && R.has(e.ui_component.component.type)
                    ? r(e)
                    : r({
                          task_id: e.task_id,
                          task_type: N.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: v.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                T(C.intl.string(y.default["/f++3g"]));
            } finally {
                m(!1);
            }
        }, [n]),
        M = a.useCallback(
            async (e) => {
                if (null !== i) {
                    L(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await I(t), w();
                    } catch (e) {
                        if (O.has(i.task_type)) throw e;
                        T(C.intl.string(y.default["+QRSxc"]));
                    } finally {
                        L(!1);
                    }
                }
            },
            [i, w],
        );
    (0, _.Ay)(() => {
        w();
    });
    let P = a.useMemo(() => i?.task_type === N.AGE_VERIFICATION, [i]),
        x = null != i && null === g && O.has(i.task_type);
    return (0, s.jsxs)("div", {
        className: ec.Tp,
        children: [
            (0, s.jsx)("img", { className: ec.xX, src: ed, alt: "" }),
            P
                ? (0, s.jsx)(f.default, {
                      transitionState: t ?? J.ip.ENTERED,
                      entryPoint: h.q1.SAFETY_FLOWS,
                      onClose: ee.tE,
                      onComplete: async () => {
                          await M({ type: b.Empty });
                      },
                      dismissable: !1,
                  })
                : x && null != i
                  ? (0, s.jsx)(e_, { task: i, handleSubmit: M, disabled: S, transitionState: t ?? J.ip.ENTERED })
                  : (0, s.jsx)("div", {
                        className: ec.nA,
                        children: E
                            ? (0, s.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, s.jsx)("div", {
                                  className: ec.kL,
                                  children: (0, s.jsxs)(l.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: ec.rf,
                                      children: [
                                          null !== g &&
                                              (0, s.jsxs)(l.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: ec.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, s.jsxs)(l.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, s.jsx)(u.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: C.intl.string(C.t.c6kn6F),
                                                              }),
                                                              (0, s.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: C.intl.string(C.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(l.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, s.jsx)(d.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: C.intl.string(C.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, D.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, s.jsx)(d.$, {
                                                                  fullWidth: !0,
                                                                  text: C.intl.string(C.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      w();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === g &&
                                              null != i &&
                                              (0, s.jsx)(e_, { task: i, handleSubmit: M, disabled: S }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
