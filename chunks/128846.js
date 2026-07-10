"use strict";
n.d(t, { A: () => eb });
var i,
    r,
    a = n(627968),
    s = n(64700),
    l = n(289873),
    o = n(331322),
    d = n(534514),
    c = n(834730),
    u = n(821609),
    _ = n(964486),
    E = n(847599),
    A = n(595746),
    h = n(240248),
    I = n(562708);
n(181658);
var f = n(499785),
    p = n(652215);
async function T() {
    let e = await f.A.get({
        url: p.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: I.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function m(e) {
    return (
        await f.A.post({
            url: p.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: I.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let g = s.createContext(null);
function S() {
    let e = s.useContext(g);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var N = n(931642),
    C = n(375708),
    R =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        i);
let O = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
    },
    L = new Set(Object.values(O)),
    D = new Set([10]);
C.intl.string(N.default["Qm6K/s"]), C.intl.string(N.default["dSkE/A"]), C.intl.string(N.default.dMMSA0);
var y = (((r = {}).Empty = "empty"), (r.VerificationCode = "verification_code"), r),
    v = n(627575),
    b = n(17928),
    M = n(155718),
    P = n(379257),
    U = n(287809),
    w = n(430993),
    G = n(825484),
    x = n(818725);
function k(e) {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: x.q,
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(G.e, {
                      className: x.G,
                      justify: "end",
                      children: t.map((e, t) => (0, a.jsx)(u.$, { ...e }, t)),
                  }),
              ],
          });
}
let F = { bottom: 40, left: 32, right: 32, top: 32 };
var V = n(18075);
function B(e) {
    let { children: t, actions: n, footerInput: i, title: r } = e;
    return (0, a.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: F,
        className: V.kL,
        children: [
            (0, a.jsx)(d.D, { variant: "heading-lg/semibold", className: V.R_, children: r }),
            (0, a.jsx)(w.c, { children: t }),
            (0, a.jsx)("div", { className: V.Ic }),
            (0, a.jsx)(k, { actions: n, footerInput: i }),
        ],
    });
}
var H = n(224640),
    j = n(20742),
    W = n(696208),
    Y = n(691540),
    K = n(857250),
    $ = n(97483),
    z = n(921853),
    q = n(695515),
    Z = n(10005),
    X = n(453322),
    Q = n(834981),
    J = n(22071),
    ee = n(709854);
function et() {
    return (0, a.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: ee.Q,
        children: C.intl.format(N.default.ifObbX, {
            handleAgeVerifyHook: () =>
                P.A.showAgeVerificationGetStartedModal({ entryPoint: E.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var en = n(191627),
    ei = n(503698),
    er = n.n(ei),
    ea = n(778712),
    es = n(97808),
    el = n(939249),
    eo = n(947641),
    ed = n(789645),
    ec = n(486020),
    eu = n(923531);
let e_ = () => ({
    seconds: C.intl.string(N.default.M4NOO3),
    minutes: N.default["9nem85"],
    hours: N.default.sJjWRY,
    yesterday: C.intl.string(N.default["7SxW32"]),
    days: N.default.tVHevX,
    date: N.default.q6jzya,
});
var eE = n(477480),
    eA = n(343768);
function eh(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: r,
            isDeclineLoading: o,
            actionsDisabled: d,
            onAccept: u,
            onDecline: _,
        } = e,
        E = (0, b.bG)([U.default], () => U.default.getUser(n.parent_id)),
        A = E?.globalName ?? E?.username ?? n.parent_username,
        h = E?.username ?? n.parent_username,
        I = h !== A,
        f = E?.avatar ?? n.parent_avatar,
        { isConnected: p, isResolved: T } = (function (e) {
            let t = (0, b.bG)([q.A], () => q.A.getLinkedUsers()[e]?.link_status),
                [n, i] = s.useState(() =>
                    t === en.Ef.ACTIVE ? "connected" : null == t || t === en.Ef.PENDING ? null : "declined",
                ),
                [r, a] = s.useState(t);
            t !== r &&
                (a(t),
                t === en.Ef.ACTIVE
                    ? i("connected")
                    : t === en.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != r && r !== en.Ef.ACTIVE && i("declined"));
            let l = "connected" === n,
                o = "declined" === n;
            return { isConnected: l, isDeclined: o, isResolved: l || o };
        })(n.parent_id),
        m = ((t = n.created_at), (0, eu.mV)(Date.parse(t), e_)),
        g = ec.Ay.getUserAvatarURL({ id: n.parent_id, avatar: f }, !1, (0, ea.FT)(ea._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: eA.nM,
        children: [
            (0, a.jsx)("div", {
                className: eA.R3,
                children: (0, a.jsx)(es.eu, { src: g, size: ea._3.SIZE_40, "aria-label": h }),
            }),
            (0, a.jsxs)("div", {
                className: eA.zH,
                children: [
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: A,
                    }),
                    I &&
                        (0, a.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: h,
                        }),
                    (0, a.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: m }),
                ],
            }),
            T
                ? (0, a.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(p ? N.default.YQP5dE : N.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: eA.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(el.D, {
                                  "aria-label": C.intl.formatToPlainString(eE.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: er()(eA.hP, eA.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: r
                                      ? (0, a.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(eo.r, { className: eA.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(el.D, {
                              "aria-label": C.intl.formatToPlainString(eE.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: er()(eA.hP, eA.rr),
                              onClick: () => !d && _(n.parent_id),
                              children: o
                                  ? (0, a.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(ed.P, { className: eA.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function eI(e) {
    let { pendingRequests: t, linkedUsersProcessed: n } = e,
        {
            seenRequests: i,
            hasMaxConnections: r,
            actioningUserId: l,
            isAcceptLoading: o,
            isDeclineLoading: d,
            actionsDisabled: c,
            handleAccept: u,
            handleDecline: _,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                r = (0, Q.xr)(),
                [a, l] = s.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: d,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                } = (0, Z.A)({
                    onSuccess: () => l(null),
                    onError: () => {
                        l(null), i();
                    },
                }),
                _ = c || u,
                [E, A] = s.useState(() => new Set()),
                h = s.useCallback((e) => {
                    A((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return n.add(e), n;
                    });
                }, []),
                I = s.useCallback(
                    (e) => {
                        _ || (h(e), l(e), o(e));
                    },
                    [_, h, o],
                ),
                f = s.useCallback(
                    (e) => {
                        _ || (h(e), l(e), d(e));
                    },
                    [_, h, d],
                ),
                [p, T] = s.useState(t),
                [m, g] = s.useState(t),
                [S, N] = s.useState(n);
            return (
                n && !S
                    ? (N(!0),
                      g(t),
                      T((e) => {
                          let n = new Map();
                          for (let t of e) E.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== m &&
                      (g(t),
                      T((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: p,
                    hasMaxConnections: r,
                    actioningUserId: a,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                    actionsDisabled: _,
                    handleAccept: I,
                    handleDecline: f,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, Y.P0)((0, K.o)(C.intl.string(eE.default.Wu8BK2), $.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, a.jsx)("div", {
              className: eA.Nr,
              children: i.map((e) =>
                  (0, a.jsx)(
                      eh,
                      {
                          request: e,
                          hasMaxConnections: r,
                          isAcceptLoading: o && l === e.parent_id,
                          isDeclineLoading: d && l === e.parent_id,
                          actionsDisabled: c,
                          onAccept: u,
                          onDecline: _,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var ef = n(231723),
    ep = n(818348),
    eT = n(925660);
let em = "https://support.discord.com/hc/articles/14155060633623";
var eg = n(430651);
let eS = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = s.useCallback(async () => {
                    await t({ type: y.Empty }), window.location.reload();
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eg.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: eg.DD,
                        children: C.intl.string(N.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eg.h_,
                        children: C.intl.string(N.default["5am8D3"]),
                    }),
                    (0, a.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(u.$, {
                            variant: "primary",
                            text: C.intl.string(N.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, b.bG)([U.default], () => U.default.getCurrentUser());
            return (0, a.jsx)(B, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === M.Tk.UNVERIFIED
                                ? P.A.showAgeVerificationGetStartedModal({
                                      entryPoint: E.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: y.Empty }),
                                  })
                                : t({ type: y.Empty });
                        },
                    },
                ],
                children: (0, a.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, a.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, a.jsx)(c.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            var t;
            let n,
                i,
                { configData: r, onSubmit: l, disabled: d, transitionState: _ = ef.ip.ENTERED } = e,
                { getLinkCode: E } = (0, Z.A)(),
                A = s.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = r ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [r]),
                h = (0, Q.VT)(),
                I = (0, Q.Du)(),
                f = (0, b.bG)([q.A], () => q.A.getLinkedUsers()),
                p = (0, b.bG)([q.A], () => q.A.getAreLinkedUsersProcessed()),
                T =
                    ((t = A.pending_requests),
                    (n = (0, b.bG)([q.A], () => q.A.getLinkedUsers())),
                    (i = (0, b.bG)([U.default], () => U.default.getCurrentUser()?.id)),
                    s.useMemo(() => {
                        if (!p) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            r = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== en.Ef.PENDING || t.requestor_id === i) continue;
                            let n = U.default.getUser(t.user_id),
                                a = e.get(t.user_id);
                            r.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? a?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? a?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return r;
                    }, [p, n, i, t])),
                m = p ? Object.values(f).some((e) => null != e) : A.pending_requests.length > 0,
                g = p ? h : A.pending_requests.length,
                S = (0, b.bG)([q.A], () => q.A.getLinkCode()),
                R = (0, b.bG)([q.A], () => q.A.getLinkCodeExpiresAt()),
                O = S ?? A.link_code,
                L = R ?? Date.parse(A.link_code_expires_at),
                D = s.useCallback(async () => {
                    try {
                        await l({ type: y.Empty });
                    } catch {
                        (0, Y.P0)((0, K.o)(C.intl.string(N.default["+QRSxc"]), $.Ck.FAILURE));
                    }
                }, [l]),
                [M, P] = s.useState(m);
            m && !M && P(!0);
            let [G, x] = s.useState(!1),
                k = s.useCallback(() => {
                    x(!1), E();
                }, [E]);
            (0, X.A)(k);
            let F = !M || G,
                V = F
                    ? C.intl.format(N.default["6GaRTu"], { link: em })
                    : C.intl.format(N.default["Ke+kz5"], { pendingCount: g, link: em });
            return (0, a.jsxs)(H.d, {
                transitionState: _,
                onClose: ep.tE,
                dismissable: !1,
                size: "md",
                "aria-label": C.intl.string(N.default.dMMSA0),
                children: [
                    G &&
                        (0, a.jsx)("div", {
                            className: eT.g,
                            children: (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: z.n,
                                text: C.intl.string(N.default.CLAQas),
                                onClick: () => x(!1),
                            }),
                        }),
                    (0, a.jsx)(j.rQ, { alignCenter: !0, title: C.intl.string(N.default.dMMSA0), subtitle: V }),
                    (0, a.jsxs)(w.c, {
                        children: [
                            F &&
                                (0, a.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(J.r, { linkCode: O, expiresAt: L, onRefresh: E }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: F,
                                children: (0, a.jsx)(eI, { pendingRequests: T, linkedUsersProcessed: p }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(W.H, {
                        actionsFullWidth: !0,
                        actions:
                            M && !G
                                ? [
                                      {
                                          text: C.intl.string(N.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: () => {
                                              x(!0);
                                          },
                                      },
                                      {
                                          text: C.intl.string(N.default.OaHZUf),
                                          variant: "primary",
                                          onClick: D,
                                          disabled: !I || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(et, {}),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: eT.r,
                        children: C.intl.format(N.default["0DHxym"], {
                            handleLogOut: () => (0, v.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    eN = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: r } = S(),
            s = eS[r.ui_component.component.type];
        return null == s
            ? null
            : (0, a.jsx)(s, {
                  configData: r.ui_component.component,
                  onSubmit: t,
                  taskId: r.task_id,
                  flowId: r.flow_context?.flow_id,
                  assignmentId: r.assignment_id,
                  disabled: n,
                  transitionState: i,
              });
    };
var eC = n(754302),
    eR = n(910356);
let eO = {
        [R.EMAIL_VERIFICATION]: C.intl.string(N.default.HC4IiR),
        [R.REFRESH_APP]: C.intl.string(N.default.SzfxQ3),
        [R.AGE_VERIFICATION]: C.intl.string(N.default["dSkE/A"]),
        [R.PARENTAL_CONSENT_CONNECTION]: C.intl.string(N.default.dMMSA0),
    },
    eL = function () {
        let { task: e } = S(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, a.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: F,
            className: eR.k,
            children: [
                (0, a.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: eR.D,
                            children: C.intl.string(N.default["/OpRAP"]),
                        }),
                        (0, a.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, a.jsx)(
                                    eC.B,
                                    {
                                        title: eO[e.task_type] ?? "",
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
                (0, a.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: C.intl.format(N.default["0DHxym"], {
                        handleLogOut: () => (0, v.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eD = n(818604);
let ey = n(843020);
function ev(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: r } = e,
        [l, o] = s.useState(t),
        d = s.useMemo(() => ({ task: l, setTask: o }), [l, o]);
    s.useEffect(() => {
        o(t);
    }, [t]);
    let c = D.has(l.task_type);
    return (0, a.jsxs)(g.Provider, {
        value: d,
        children: [!c && (0, a.jsx)(eL, {}), (0, a.jsx)(eN, { onSubmit: n, disabled: i, transitionState: r })],
    });
}
let eb = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, r] = s.useState(null),
        [I, f] = s.useState(!0),
        [p, g] = s.useState(null),
        [S, b] = s.useState(!1),
        M = s.useCallback(async () => {
            f(!0), g(null);
            try {
                let e = await T();
                if (null == e) return void n();
                !(0, h.uJ)(e.ui_component?.component.type) && L.has(e.ui_component.component.type)
                    ? r(e)
                    : r({
                          task_id: e.task_id,
                          task_type: R.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: O.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                g(C.intl.string(N.default["/f++3g"]));
            } finally {
                f(!1);
            }
        }, [n]),
        P = s.useCallback(
            async (e) => {
                if (null !== i) {
                    b(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await m(t), M();
                    } catch (e) {
                        if (D.has(i.task_type)) throw e;
                        g(C.intl.string(N.default["+QRSxc"]));
                    } finally {
                        b(!1);
                    }
                }
            },
            [i, M],
        );
    (0, _.Ay)(() => {
        M();
    });
    let U = s.useMemo(() => i?.task_type === R.AGE_VERIFICATION, [i]),
        w = null != i && null === p && D.has(i.task_type);
    return (0, a.jsxs)("div", {
        className: eD.Tp,
        children: [
            (0, a.jsx)("img", { className: eD.xX, src: ey, alt: "" }),
            U
                ? (0, a.jsx)(A.default, {
                      transitionState: t ?? ef.ip.ENTERED,
                      entryPoint: E.q1.SAFETY_FLOWS,
                      onClose: ep.tE,
                      onComplete: async () => {
                          await P({ type: y.Empty });
                      },
                      dismissable: !1,
                  })
                : w && null != i
                  ? (0, a.jsx)(ev, { task: i, handleSubmit: P, disabled: S, transitionState: t ?? ef.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: eD.nA,
                        children: I
                            ? (0, a.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: eD.kL,
                                  children: (0, a.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eD.rf,
                                      children: [
                                          null !== p &&
                                              (0, a.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eD.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(o.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(d.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: C.intl.string(C.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: C.intl.string(C.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)(o.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, a.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: C.intl.string(C.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, v.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  text: C.intl.string(C.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      M();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === p &&
                                              null != i &&
                                              (0, a.jsx)(ev, { task: i, handleSubmit: P, disabled: S }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
