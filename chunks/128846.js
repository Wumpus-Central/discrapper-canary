"use strict";
n.d(t, { A: () => eM });
var i,
    r,
    a = n(627968),
    s = n(64700),
    l = n(289873),
    o = n(331322),
    d = n(297264),
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
var N = n(837451),
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
    x = n(214437);
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
var V = n(831067);
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
    Z = n(794364),
    X = n(10005),
    Q = n(453322),
    J = n(834981),
    ee = n(22071),
    et = n(336862);
function en() {
    return (0, a.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: et.Q,
        children: C.intl.format(N.default.ifObbX, {
            handleAgeVerifyHook: () =>
                P.A.showAgeVerificationGetStartedModal({ entryPoint: E.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var ei = n(191627),
    er = n(503698),
    ea = n.n(er),
    es = n(778712),
    el = n(97808),
    eo = n(939249),
    ed = n(947641),
    ec = n(789645),
    eu = n(486020),
    e_ = n(923531);
let eE = () => ({
    seconds: C.intl.string(N.default.M4NOO3),
    minutes: N.default["9nem85"],
    hours: N.default.sJjWRY,
    yesterday: C.intl.string(N.default["7SxW32"]),
    days: N.default.tVHevX,
    date: N.default.q6jzya,
});
var eA = n(602339),
    eh = n(402008);
function eI(e) {
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
                    t === ei.Ef.ACTIVE ? "connected" : null == t || t === ei.Ef.PENDING ? null : "declined",
                ),
                [r, a] = s.useState(t);
            t !== r &&
                (a(t),
                t === ei.Ef.ACTIVE
                    ? i("connected")
                    : t === ei.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != r && r !== ei.Ef.ACTIVE && i("declined"));
            let l = "connected" === n,
                o = "declined" === n;
            return { isConnected: l, isDeclined: o, isResolved: l || o };
        })(n.parent_id),
        m = ((t = n.created_at), (0, e_.mV)(Date.parse(t), eE)),
        g = eu.Ay.getUserAvatarURL({ id: n.parent_id, avatar: f }, !1, (0, es.FT)(es._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: eh.nM,
        children: [
            (0, a.jsx)("div", {
                className: eh.R3,
                children: (0, a.jsx)(el.eu, { src: g, size: es._3.SIZE_40, "aria-label": h }),
            }),
            (0, a.jsxs)("div", {
                className: eh.zH,
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
                      className: eh.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(eo.D, {
                                  "aria-label": C.intl.formatToPlainString(eA.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: ea()(eh.hP, eh.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: r
                                      ? (0, a.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(ed.r, { className: eh.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(eo.D, {
                              "aria-label": C.intl.formatToPlainString(eA.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: ea()(eh.hP, eh.rr),
                              onClick: () => !d && _(n.parent_id),
                              children: o
                                  ? (0, a.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(ec.P, { className: eh.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function ef(e) {
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
                r = (0, J.xr)(),
                [a, l] = s.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: d,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                } = (0, X.A)({
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
                (0, Y.P0)((0, K.o)(C.intl.string(eA.default.Wu8BK2), $.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, a.jsx)("div", {
              className: eh.Nr,
              children: i.map((e) =>
                  (0, a.jsx)(
                      eI,
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
var ep = n(231723),
    eT = n(818348),
    em = n(42076);
let eg = "https://support.discord.com/hc/articles/14155060633623";
var eS = n(242235);
let eN = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = s.useCallback(async () => {
                    await t({ type: y.Empty }), window.location.reload();
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eS.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: eS.DD,
                        children: C.intl.string(N.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eS.h_,
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
                { configData: r, onSubmit: l, disabled: d, transitionState: E = ep.ip.ENTERED } = e,
                { getLinkCode: A } = (0, X.A)();
            (0, _.Ay)(() => {
                (0, Z._z)();
            });
            let h = s.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = r ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [r]),
                I = (0, J.VT)(),
                f = (0, J.Du)(),
                p = (0, b.bG)([q.A], () => q.A.getLinkedUsers()),
                T = (0, b.bG)([q.A], () => q.A.getAreLinkedUsersProcessed()),
                m =
                    ((t = h.pending_requests),
                    (n = (0, b.bG)([q.A], () => q.A.getLinkedUsers())),
                    (i = (0, b.bG)([U.default], () => U.default.getCurrentUser()?.id)),
                    s.useMemo(() => {
                        if (!T) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            r = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== ei.Ef.PENDING || t.requestor_id === i) continue;
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
                    }, [T, n, i, t])),
                g = T ? Object.values(p).some((e) => null != e) : h.pending_requests.length > 0,
                S = T ? I : h.pending_requests.length,
                R = (0, b.bG)([q.A], () => q.A.getLinkCode()),
                O = (0, b.bG)([q.A], () => q.A.getLinkCodeExpiresAt()),
                L = R ?? h.link_code,
                D = O ?? Date.parse(h.link_code_expires_at),
                M = s.useCallback(async () => {
                    try {
                        await l({ type: y.Empty });
                    } catch {
                        (0, Y.P0)((0, K.o)(C.intl.string(N.default["+QRSxc"]), $.Ck.FAILURE));
                    }
                }, [l]),
                [P, G] = s.useState(g);
            g && !P && G(!0);
            let [x, k] = s.useState(!1),
                F = s.useCallback(() => {
                    k(!1), A();
                }, [A]);
            (0, Q.A)(F);
            let V = !P || x,
                B = V
                    ? C.intl.format(N.default["6GaRTu"], { link: eg })
                    : C.intl.format(N.default["Ke+kz5"], { pendingCount: S, link: eg });
            return (0, a.jsxs)(H.d, {
                transitionState: E,
                onClose: eT.tE,
                dismissable: !1,
                size: "md",
                "aria-label": C.intl.string(N.default.dMMSA0),
                children: [
                    x &&
                        (0, a.jsx)("div", {
                            className: em.g,
                            children: (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: z.n,
                                text: C.intl.string(N.default.CLAQas),
                                onClick: () => k(!1),
                            }),
                        }),
                    (0, a.jsx)(j.rQ, { alignCenter: !0, title: C.intl.string(N.default.dMMSA0), subtitle: B }),
                    (0, a.jsxs)(w.c, {
                        children: [
                            V &&
                                (0, a.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(ee.r, { linkCode: L, expiresAt: D, onRefresh: A }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: V,
                                children: (0, a.jsx)(ef, { pendingRequests: m, linkedUsersProcessed: T }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(W.H, {
                        actionsFullWidth: !0,
                        actions:
                            P && !x
                                ? [
                                      {
                                          text: C.intl.string(N.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: () => {
                                              k(!0);
                                          },
                                      },
                                      {
                                          text: C.intl.string(N.default.OaHZUf),
                                          variant: "primary",
                                          onClick: M,
                                          disabled: !f || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(en, {}),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: em.r,
                        children: C.intl.format(N.default["0DHxym"], {
                            handleLogOut: () => (0, v.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    eC = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: r } = S(),
            s = eN[r.ui_component.component.type];
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
var eR = n(754302),
    eO = n(721940);
let eL = {
        [R.EMAIL_VERIFICATION]: C.intl.string(N.default.HC4IiR),
        [R.REFRESH_APP]: C.intl.string(N.default.SzfxQ3),
        [R.AGE_VERIFICATION]: C.intl.string(N.default["dSkE/A"]),
        [R.PARENTAL_CONSENT_CONNECTION]: C.intl.string(N.default.dMMSA0),
    },
    eD = function () {
        let { task: e } = S(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, a.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: F,
            className: eO.k,
            children: [
                (0, a.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: eO.D,
                            children: C.intl.string(N.default["/OpRAP"]),
                        }),
                        (0, a.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, a.jsx)(
                                    eR.B,
                                    {
                                        title: eL[e.task_type] ?? "",
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
var ey = n(561452);
let ev = n(843020);
function eb(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: r } = e,
        [l, o] = s.useState(t),
        d = s.useMemo(() => ({ task: l, setTask: o }), [l, o]);
    s.useEffect(() => {
        o(t);
    }, [t]);
    let c = D.has(l.task_type);
    return (0, a.jsxs)(g.Provider, {
        value: d,
        children: [!c && (0, a.jsx)(eD, {}), (0, a.jsx)(eC, { onSubmit: n, disabled: i, transitionState: r })],
    });
}
let eM = function (e) {
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
        className: ey.Tp,
        children: [
            (0, a.jsx)("img", { className: ey.xX, src: ev, alt: "" }),
            U
                ? (0, a.jsx)(A.default, {
                      transitionState: t ?? ep.ip.ENTERED,
                      entryPoint: E.q1.SAFETY_FLOWS,
                      onClose: eT.tE,
                      onComplete: async () => {
                          await P({ type: y.Empty });
                      },
                      dismissable: !1,
                  })
                : w && null != i
                  ? (0, a.jsx)(eb, { task: i, handleSubmit: P, disabled: S, transitionState: t ?? ep.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: ey.nA,
                        children: I
                            ? (0, a.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: ey.kL,
                                  children: (0, a.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: ey.rf,
                                      children: [
                                          null !== p &&
                                              (0, a.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: ey.Nj,
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
                                              (0, a.jsx)(eb, { task: i, handleSubmit: P, disabled: S }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
