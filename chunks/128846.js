"use strict";
n.d(t, { A: () => eL });
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
    E = n(240248),
    p = n(562708);
n(181658);
var m = n(499785),
    g = n(652215);
async function A() {
    let e = await m.A.get({
        url: g.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: p.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function I(e) {
    return (
        await m.A.post({
            url: g.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: p.NetworkActionNames.USER_VERIFY },
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
var N = n(837451),
    C = n(375708),
    y =
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
    R = new Set(Object.values(O)),
    v = new Set([10]);
C.intl.string(N.default["Qm6K/s"]), C.intl.string(N.default["dSkE/A"]), C.intl.string(N.default.dMMSA0);
var b = (((r = {}).Empty = "empty"), (r.VerificationCode = "verification_code"), r),
    L = n(627575),
    D = n(17928),
    w = n(155718),
    P = n(379257),
    M = n(287809),
    x = n(430993),
    U = n(825484),
    k = n(214437);
function G(e) {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, s.jsxs)("footer", {
              className: k.q,
              children: [
                  null != n && (0, s.jsx)("div", { children: n }),
                  (0, s.jsx)(U.e, {
                      className: k.G,
                      justify: "end",
                      children: t.map((e, t) => (0, s.jsx)(d.$, { ...e }, t)),
                  }),
              ],
          });
}
let V = { bottom: 40, left: 32, right: 32, top: 32 };
var F = n(831067);
function B(e) {
    let { children: t, actions: n, footerInput: i, title: r } = e;
    return (0, s.jsxs)(l.B, {
        direction: "vertical",
        justify: "start",
        padding: V,
        className: F.kL,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-lg/semibold", className: F.R_, children: r }),
            (0, s.jsx)(x.c, { children: t }),
            (0, s.jsx)("div", { className: F.Ic }),
            (0, s.jsx)(G, { actions: n, footerInput: i }),
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
    X = n(834981),
    Q = n(22071),
    J = n(336862);
function ee() {
    return (0, s.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: J.Q,
        children: C.intl.format(N.default.ifObbX, {
            handleAgeVerifyHook: () =>
                P.A.showAgeVerificationGetStartedModal({ entryPoint: h.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var et = n(191627),
    en = n(503698),
    ei = n.n(en),
    er = n(778712),
    es = n(97808),
    ea = n(939249),
    eo = n(947641),
    el = n(789645),
    eu = n(486020),
    ec = n(923531);
let ed = () => ({
    seconds: C.intl.string(N.default.M4NOO3),
    minutes: N.default["9nem85"],
    hours: N.default.sJjWRY,
    yesterday: C.intl.string(N.default["7SxW32"]),
    days: N.default.tVHevX,
    date: N.default.q6jzya,
});
var e_ = n(602339),
    eh = n(402008);
function ef(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: r,
            isDeclineLoading: l,
            actionsDisabled: u,
            onAccept: d,
            onDecline: _,
        } = e,
        h = (0, D.bG)([M.default], () => M.default.getUser(n.parent_id)),
        f = h?.globalName ?? h?.username ?? n.parent_username,
        E = h?.username ?? n.parent_username,
        p = E !== f,
        m = h?.avatar ?? n.parent_avatar,
        { isConnected: g, isResolved: A } = (function (e) {
            let t = (0, D.bG)([q.A], () => q.A.getLinkedUsers()[e]?.link_status),
                [n, i] = a.useState(() =>
                    t === et.Ef.ACTIVE ? "connected" : null == t || t === et.Ef.PENDING ? null : "declined",
                ),
                [r, s] = a.useState(t);
            t !== r &&
                (s(t),
                t === et.Ef.ACTIVE
                    ? i("connected")
                    : t === et.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != r && r !== et.Ef.ACTIVE && i("declined"));
            let o = "connected" === n,
                l = "declined" === n;
            return { isConnected: o, isDeclined: l, isResolved: o || l };
        })(n.parent_id),
        I = ((t = n.created_at), (0, ec.mV)(Date.parse(t), ed)),
        T = eu.Ay.getUserAvatarURL({ id: n.parent_id, avatar: m }, !1, (0, er.FT)(er._3.SIZE_40));
    return (0, s.jsxs)("div", {
        className: eh.nM,
        children: [
            (0, s.jsx)("div", {
                className: eh.R3,
                children: (0, s.jsx)(es.eu, { src: T, size: er._3.SIZE_40, "aria-label": E }),
            }),
            (0, s.jsxs)("div", {
                className: eh.zH,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: f,
                    }),
                    p &&
                        (0, s.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: E,
                        }),
                    (0, s.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: I }),
                ],
            }),
            A
                ? (0, s.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(g ? N.default.YQP5dE : N.default["2HvOvh"]),
                  })
                : (0, s.jsxs)("div", {
                      className: eh.o1,
                      children: [
                          !i &&
                              (0, s.jsx)(ea.D, {
                                  "aria-label": C.intl.formatToPlainString(e_.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: ei()(eh.hP, eh.xG),
                                  onClick: () => !u && d(n.parent_id),
                                  children: r
                                      ? (0, s.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, s.jsx)(eo.r, { className: eh.gE, color: "currentColor" }),
                              }),
                          (0, s.jsx)(ea.D, {
                              "aria-label": C.intl.formatToPlainString(e_.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: ei()(eh.hP, eh.rr),
                              onClick: () => !u && _(n.parent_id),
                              children: l
                                  ? (0, s.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, s.jsx)(el.P, { className: eh.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function eE(e) {
    let { pendingRequests: t, linkedUsersProcessed: n } = e,
        {
            seenRequests: i,
            hasMaxConnections: r,
            actioningUserId: o,
            isAcceptLoading: l,
            isDeclineLoading: u,
            actionsDisabled: c,
            handleAccept: d,
            handleDecline: _,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                r = (0, X.xr)(),
                [s, o] = a.useState(null),
                {
                    acceptLinkRequest: l,
                    declineLinkRequest: u,
                    isAcceptLoading: c,
                    isDeclineLoading: d,
                } = (0, Z.A)({
                    onSuccess: () => o(null),
                    onError: () => {
                        o(null), i();
                    },
                }),
                _ = c || d,
                [h, f] = a.useState(() => new Set()),
                E = a.useCallback((e) => {
                    f((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return n.add(e), n;
                    });
                }, []),
                p = a.useCallback(
                    (e) => {
                        _ || (E(e), o(e), l(e));
                    },
                    [_, E, l],
                ),
                m = a.useCallback(
                    (e) => {
                        _ || (E(e), o(e), u(e));
                    },
                    [_, E, u],
                ),
                [g, A] = a.useState(t),
                [I, T] = a.useState(t),
                [S, N] = a.useState(n);
            return (
                n && !S
                    ? (N(!0),
                      T(t),
                      A((e) => {
                          let n = new Map();
                          for (let t of e) h.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== I &&
                      (T(t),
                      A((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: g,
                    hasMaxConnections: r,
                    actioningUserId: s,
                    isAcceptLoading: c,
                    isDeclineLoading: d,
                    actionsDisabled: _,
                    handleAccept: p,
                    handleDecline: m,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, Y.P0)((0, K.o)(C.intl.string(e_.default.Wu8BK2), $.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, s.jsx)("div", {
              className: eh.Nr,
              children: i.map((e) =>
                  (0, s.jsx)(
                      ef,
                      {
                          request: e,
                          hasMaxConnections: r,
                          isAcceptLoading: l && o === e.parent_id,
                          isDeclineLoading: u && o === e.parent_id,
                          actionsDisabled: c,
                          onAccept: d,
                          onDecline: _,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var ep = n(231723),
    em = n(818348),
    eg = n(42076);
let eA = "https://support.discord.com/hc/articles/14155060633623";
var eI = n(242235);
let eT = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: b.Empty }), window.location.reload();
                }, [t]);
            return (0, s.jsxs)("div", {
                className: eI.kL,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/bold",
                        className: eI.DD,
                        children: C.intl.string(N.default.v52itt),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eI.h_,
                        children: C.intl.string(N.default["5am8D3"]),
                    }),
                    (0, s.jsx)(l.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, s.jsx)(d.$, {
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
                n = (0, D.bG)([M.default], () => M.default.getCurrentUser());
            return (0, s.jsx)(B, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === w.Tk.UNVERIFIED
                                ? P.A.showAgeVerificationGetStartedModal({
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
            var t;
            let n,
                i,
                { configData: r, onSubmit: o, disabled: u, transitionState: _ = ep.ip.ENTERED } = e,
                { getLinkCode: h } = (0, Z.A)(),
                f = a.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = r ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [r]),
                E = (0, X.VT)(),
                p = (0, X.Du)(),
                m = (0, D.bG)([q.A], () => q.A.getLinkedUsers()),
                g = (0, D.bG)([q.A], () => q.A.getAreLinkedUsersProcessed()),
                A =
                    ((t = f.pending_requests),
                    (n = (0, D.bG)([q.A], () => q.A.getLinkedUsers())),
                    (i = (0, D.bG)([M.default], () => M.default.getCurrentUser()?.id)),
                    a.useMemo(() => {
                        if (!g) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            r = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== et.Ef.PENDING || t.requestor_id === i) continue;
                            let n = M.default.getUser(t.user_id),
                                s = e.get(t.user_id);
                            r.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? s?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? s?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return r;
                    }, [g, n, i, t])),
                I = g ? Object.values(m).some((e) => null != e) : f.pending_requests.length > 0,
                T = g ? E : f.pending_requests.length,
                S = (0, D.bG)([q.A], () => q.A.getLinkCode()),
                y = (0, D.bG)([q.A], () => q.A.getLinkCodeExpiresAt()),
                O = S ?? f.link_code,
                R = y ?? Date.parse(f.link_code_expires_at),
                v = a.useCallback(async () => {
                    try {
                        await o({ type: b.Empty });
                    } catch {
                        (0, Y.P0)((0, K.o)(C.intl.string(N.default["+QRSxc"]), $.Ck.FAILURE));
                    }
                }, [o]),
                [w, P] = a.useState(I);
            I && !w && P(!0);
            let [U, k] = a.useState(!1),
                G = !w || U,
                V = G
                    ? C.intl.format(N.default["6GaRTu"], { link: eA })
                    : C.intl.format(N.default["Ke+kz5"], { pendingCount: T, link: eA });
            return (0, s.jsxs)(H.d, {
                transitionState: _,
                onClose: em.tE,
                dismissable: !1,
                size: "md",
                "aria-label": C.intl.string(N.default.dMMSA0),
                children: [
                    U &&
                        (0, s.jsx)("div", {
                            className: eg.g,
                            children: (0, s.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: z.n,
                                text: C.intl.string(N.default.CLAQas),
                                onClick: () => k(!1),
                            }),
                        }),
                    (0, s.jsx)(j.rQ, { alignCenter: !0, title: C.intl.string(N.default.dMMSA0), subtitle: V }),
                    (0, s.jsxs)(x.c, {
                        children: [
                            G &&
                                (0, s.jsx)(l.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, s.jsx)(Q.r, { linkCode: O, expiresAt: R, onRefresh: h }),
                                }),
                            (0, s.jsx)("div", {
                                hidden: G,
                                children: (0, s.jsx)(eE, { pendingRequests: A, linkedUsersProcessed: g }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(W.H, {
                        actionsFullWidth: !0,
                        actions:
                            w && !U
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
                                          onClick: v,
                                          disabled: !p || u,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, s.jsx)(ee, {}),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: eg.r,
                        children: C.intl.format(N.default["0DHxym"], {
                            handleLogOut: () => (0, L.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    eS = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: r } = S(),
            a = eT[r.ui_component.component.type];
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
var eN = n(754302),
    eC = n(721940);
let ey = {
        [y.EMAIL_VERIFICATION]: C.intl.string(N.default.HC4IiR),
        [y.REFRESH_APP]: C.intl.string(N.default.SzfxQ3),
        [y.AGE_VERIFICATION]: C.intl.string(N.default["dSkE/A"]),
        [y.PARENTAL_CONSENT_CONNECTION]: C.intl.string(N.default.dMMSA0),
    },
    eO = function () {
        let { task: e } = S(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, s.jsxs)(l.B, {
            direction: "vertical",
            justify: "space-between",
            padding: V,
            className: eC.k,
            children: [
                (0, s.jsxs)(l.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, s.jsx)(u.D, {
                            variant: "display-md",
                            className: eC.D,
                            children: C.intl.string(N.default["/OpRAP"]),
                        }),
                        (0, s.jsx)(l.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, s.jsx)(
                                    eN.B,
                                    {
                                        title: ey[e.task_type] ?? "",
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
                    children: C.intl.format(N.default["0DHxym"], {
                        handleLogOut: () => (0, L.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eR = n(561452);
let ev = n(843020);
function eb(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: r } = e,
        [o, l] = a.useState(t),
        u = a.useMemo(() => ({ task: o, setTask: l }), [o, l]);
    a.useEffect(() => {
        l(t);
    }, [t]);
    let c = v.has(o.task_type);
    return (0, s.jsxs)(T.Provider, {
        value: u,
        children: [!c && (0, s.jsx)(eO, {}), (0, s.jsx)(eS, { onSubmit: n, disabled: i, transitionState: r })],
    });
}
let eL = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, r] = a.useState(null),
        [p, m] = a.useState(!0),
        [g, T] = a.useState(null),
        [S, D] = a.useState(!1),
        w = a.useCallback(async () => {
            m(!0), T(null);
            try {
                let e = await A();
                if (null == e) return void n();
                !(0, E.uJ)(e.ui_component?.component.type) && R.has(e.ui_component.component.type)
                    ? r(e)
                    : r({
                          task_id: e.task_id,
                          task_type: y.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: O.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                T(C.intl.string(N.default["/f++3g"]));
            } finally {
                m(!1);
            }
        }, [n]),
        P = a.useCallback(
            async (e) => {
                if (null !== i) {
                    D(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await I(t), w();
                    } catch (e) {
                        if (v.has(i.task_type)) throw e;
                        T(C.intl.string(N.default["+QRSxc"]));
                    } finally {
                        D(!1);
                    }
                }
            },
            [i, w],
        );
    (0, _.Ay)(() => {
        w();
    });
    let M = a.useMemo(() => i?.task_type === y.AGE_VERIFICATION, [i]),
        x = null != i && null === g && v.has(i.task_type);
    return (0, s.jsxs)("div", {
        className: eR.Tp,
        children: [
            (0, s.jsx)("img", { className: eR.xX, src: ev, alt: "" }),
            M
                ? (0, s.jsx)(f.default, {
                      transitionState: t ?? ep.ip.ENTERED,
                      entryPoint: h.q1.SAFETY_FLOWS,
                      onClose: em.tE,
                      onComplete: async () => {
                          await P({ type: b.Empty });
                      },
                      dismissable: !1,
                  })
                : x && null != i
                  ? (0, s.jsx)(eb, { task: i, handleSubmit: P, disabled: S, transitionState: t ?? ep.ip.ENTERED })
                  : (0, s.jsx)("div", {
                        className: eR.nA,
                        children: p
                            ? (0, s.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, s.jsx)("div", {
                                  className: eR.kL,
                                  children: (0, s.jsxs)(l.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eR.rf,
                                      children: [
                                          null !== g &&
                                              (0, s.jsxs)(l.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eR.Nj,
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
                                                                      (0, L.k)("safety_flows_modal");
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
                                              (0, s.jsx)(eb, { task: i, handleSubmit: P, disabled: S }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
