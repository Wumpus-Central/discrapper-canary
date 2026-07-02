n.d(t, { A: () => eb });
var i,
    s,
    l = n(627968),
    a = n(64700),
    r = n(289873),
    o = n(331322),
    u = n(534514),
    c = n(834730),
    d = n(821609),
    h = n(964486),
    m = n(847599),
    p = n(595746),
    f = n(240248),
    g = n(562708);
n(181658);
var A = n(499785),
    x = n(652215);
async function C() {
    let e = await A.A.get({
        url: x.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function E(e) {
    return (
        await A.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let v = a.createContext(null);
function T() {
    let e = a.useContext(v);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(837451),
    N = n(375708),
    j =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        i);
let S = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
    },
    y = new Set(Object.values(S)),
    R = new Set([10]);
N.intl.string(_.default["Qm6K/s"]), N.intl.string(_.default["dSkE/A"]), N.intl.string(_.default.dMMSA0);
var I = (((s = {}).Empty = "empty"), (s.VerificationCode = "verification_code"), s),
    b = n(627575),
    M = n(17928),
    O = n(155718),
    w = n(379257),
    U = n(287809),
    k = n(430993),
    P = n(825484),
    D = n(214437);
function L(e) {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, l.jsxs)("footer", {
              className: D.q,
              children: [
                  null != n && (0, l.jsx)("div", { children: n }),
                  (0, l.jsx)(P.e, {
                      className: D.G,
                      justify: "end",
                      children: t.map((e, t) => (0, l.jsx)(d.$, { ...e }, t)),
                  }),
              ],
          });
}
let F = { bottom: 40, left: 32, right: 32, top: 32 };
var G = n(831067);
function V(e) {
    let { children: t, actions: n, footerInput: i, title: s } = e;
    return (0, l.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: F,
        className: G.kL,
        children: [
            (0, l.jsx)(u.D, { variant: "heading-lg/semibold", className: G.R_, children: s }),
            (0, l.jsx)(k.c, { children: t }),
            (0, l.jsx)("div", { className: G.Ic }),
            (0, l.jsx)(L, { actions: n, footerInput: i }),
        ],
    });
}
var B = n(224640),
    H = n(20742),
    Q = n(696208),
    W = n(691540),
    q = n(857250),
    z = n(97483),
    Z = n(921853),
    K = n(695515),
    $ = n(10005),
    Y = n(834981),
    X = n(22071),
    J = n(336862);
function ee() {
    return (0, l.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: J.Q,
        children: N.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                w.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var et = n(191627),
    en = n(503698),
    ei = n.n(en),
    es = n(778712),
    el = n(97808),
    ea = n(939249),
    er = n(947641),
    eo = n(789645),
    eu = n(486020),
    ec = n(923531);
let ed = () => ({
    seconds: N.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: N.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var eh = n(602339),
    em = n(402008);
function ep(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: s,
            isDeclineLoading: o,
            actionsDisabled: u,
            onAccept: d,
            onDecline: h,
        } = e,
        m = (0, M.bG)([U.default], () => U.default.getUser(n.parent_id)),
        p = m?.globalName ?? m?.username ?? n.parent_username,
        f = m?.username ?? n.parent_username,
        g = f !== p,
        A = m?.avatar ?? n.parent_avatar,
        { isConnected: x, isResolved: C } = (function (e) {
            let t = (0, M.bG)([K.A], () => K.A.getLinkedUsers()[e]?.link_status),
                [n, i] = a.useState(() =>
                    t === et.Ef.ACTIVE ? "connected" : null == t || t === et.Ef.PENDING ? null : "declined",
                ),
                [s, l] = a.useState(t);
            t !== s &&
                (l(t),
                t === et.Ef.ACTIVE
                    ? i("connected")
                    : t === et.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != s && s !== et.Ef.ACTIVE && i("declined"));
            let r = "connected" === n,
                o = "declined" === n;
            return { isConnected: r, isDeclined: o, isResolved: r || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, ec.mV)(Date.parse(t), ed)),
        v = eu.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, es.FT)(es._3.SIZE_40));
    return (0, l.jsxs)("div", {
        className: em.nM,
        children: [
            (0, l.jsx)("div", {
                className: em.R3,
                children: (0, l.jsx)(el.eu, { src: v, size: es._3.SIZE_40, "aria-label": f }),
            }),
            (0, l.jsxs)("div", {
                className: em.zH,
                children: [
                    (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: p,
                    }),
                    g &&
                        (0, l.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: f,
                        }),
                    (0, l.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            C
                ? (0, l.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: N.intl.string(x ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, l.jsxs)("div", {
                      className: em.o1,
                      children: [
                          !i &&
                              (0, l.jsx)(ea.D, {
                                  "aria-label": N.intl.formatToPlainString(eh.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: ei()(em.hP, em.xG),
                                  onClick: () => !u && d(n.parent_id),
                                  children: s
                                      ? (0, l.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, l.jsx)(er.r, { className: em.gE, color: "currentColor" }),
                              }),
                          (0, l.jsx)(ea.D, {
                              "aria-label": N.intl.formatToPlainString(eh.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: ei()(em.hP, em.rr),
                              onClick: () => !u && h(n.parent_id),
                              children: o
                                  ? (0, l.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, l.jsx)(eo.P, { className: em.gE, color: "currentColor" }),
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
            hasMaxConnections: s,
            actioningUserId: r,
            isAcceptLoading: o,
            isDeclineLoading: u,
            actionsDisabled: c,
            handleAccept: d,
            handleDecline: h,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                s = (0, Y.xr)(),
                [l, r] = a.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: u,
                    isAcceptLoading: c,
                    isDeclineLoading: d,
                } = (0, $.A)({
                    onSuccess: () => r(null),
                    onError: () => {
                        r(null), i();
                    },
                }),
                h = c || d,
                [m, p] = a.useState(() => new Set()),
                f = a.useCallback((e) => {
                    p((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return n.add(e), n;
                    });
                }, []),
                g = a.useCallback(
                    (e) => {
                        h || (f(e), r(e), o(e));
                    },
                    [h, f, o],
                ),
                A = a.useCallback(
                    (e) => {
                        h || (f(e), r(e), u(e));
                    },
                    [h, f, u],
                ),
                [x, C] = a.useState(t),
                [E, v] = a.useState(t),
                [T, _] = a.useState(n);
            return (
                n && !T
                    ? (_(!0),
                      v(t),
                      C((e) => {
                          let n = new Map();
                          for (let t of e) m.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== E &&
                      (v(t),
                      C((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: x,
                    hasMaxConnections: s,
                    actioningUserId: l,
                    isAcceptLoading: c,
                    isDeclineLoading: d,
                    actionsDisabled: h,
                    handleAccept: g,
                    handleDecline: A,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, W.P0)((0, q.o)(N.intl.string(eh.default.Wu8BK2), z.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, l.jsx)("div", {
              className: em.Nr,
              children: i.map((e) =>
                  (0, l.jsx)(
                      ep,
                      {
                          request: e,
                          hasMaxConnections: s,
                          isAcceptLoading: o && r === e.parent_id,
                          isDeclineLoading: u && r === e.parent_id,
                          actionsDisabled: c,
                          onAccept: d,
                          onDecline: h,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var eg = n(231723),
    eA = n(818348),
    ex = n(42076);
let eC = "https://support.discord.com/hc/articles/14155060633623";
var eE = n(242235);
let ev = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: I.Empty }), window.location.reload();
                }, [t]);
            return (0, l.jsxs)("div", {
                className: eE.kL,
                children: [
                    (0, l.jsx)(u.D, {
                        variant: "heading-lg/bold",
                        className: eE.DD,
                        children: N.intl.string(_.default.v52itt),
                    }),
                    (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eE.h_,
                        children: N.intl.string(_.default["5am8D3"]),
                    }),
                    (0, l.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, l.jsx)(d.$, {
                            variant: "primary",
                            text: N.intl.string(_.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, M.bG)([U.default], () => U.default.getCurrentUser());
            return (0, l.jsx)(V, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === O.Tk.UNVERIFIED
                                ? w.A.showAgeVerificationGetStartedModal({
                                      entryPoint: m.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: I.Empty }),
                                  })
                                : t({ type: I.Empty });
                        },
                    },
                ],
                children: (0, l.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, l.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, l.jsx)(c.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            var t;
            let n,
                i,
                { configData: s, onSubmit: r, disabled: u, transitionState: h = eg.ip.ENTERED } = e,
                { getLinkCode: m } = (0, $.A)(),
                p = a.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = s ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [s]),
                f = (0, Y.VT)(),
                g = (0, Y.Du)(),
                A = (0, M.bG)([K.A], () => K.A.getLinkedUsers()),
                x = (0, M.bG)([K.A], () => K.A.getAreLinkedUsersProcessed()),
                C =
                    ((t = p.pending_requests),
                    (n = (0, M.bG)([K.A], () => K.A.getLinkedUsers())),
                    (i = (0, M.bG)([U.default], () => U.default.getCurrentUser()?.id)),
                    a.useMemo(() => {
                        if (!x) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            s = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== et.Ef.PENDING || t.requestor_id === i) continue;
                            let n = U.default.getUser(t.user_id),
                                l = e.get(t.user_id);
                            s.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? l?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? l?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return s;
                    }, [x, n, i, t])),
                E = x ? Object.values(A).some((e) => null != e) : p.pending_requests.length > 0,
                v = x ? f : p.pending_requests.length,
                T = (0, M.bG)([K.A], () => K.A.getLinkCode()),
                j = (0, M.bG)([K.A], () => K.A.getLinkCodeExpiresAt()),
                S = T ?? p.link_code,
                y = j ?? Date.parse(p.link_code_expires_at),
                R = a.useCallback(async () => {
                    try {
                        await r({ type: I.Empty });
                    } catch {
                        (0, W.P0)((0, q.o)(N.intl.string(_.default["+QRSxc"]), z.Ck.FAILURE));
                    }
                }, [r]),
                [O, w] = a.useState(E);
            E && !O && w(!0);
            let [P, D] = a.useState(!1),
                L = !O || P,
                F = L
                    ? N.intl.format(_.default["6GaRTu"], { link: eC })
                    : N.intl.format(_.default["Ke+kz5"], { pendingCount: v, link: eC });
            return (0, l.jsxs)(B.d, {
                transitionState: h,
                onClose: eA.tE,
                dismissable: !1,
                size: "md",
                "aria-label": N.intl.string(_.default.dMMSA0),
                children: [
                    P &&
                        (0, l.jsx)("div", {
                            className: ex.g,
                            children: (0, l.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Z.n,
                                text: N.intl.string(_.default.CLAQas),
                                onClick: () => D(!1),
                            }),
                        }),
                    (0, l.jsx)(H.rQ, { alignCenter: !0, title: N.intl.string(_.default.dMMSA0), subtitle: F }),
                    (0, l.jsxs)(k.c, {
                        children: [
                            L &&
                                (0, l.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, l.jsx)(X.r, { linkCode: S, expiresAt: y, onRefresh: m }),
                                }),
                            (0, l.jsx)("div", {
                                hidden: L,
                                children: (0, l.jsx)(ef, { pendingRequests: C, linkedUsersProcessed: x }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(Q.H, {
                        actionsFullWidth: !0,
                        actions:
                            O && !P
                                ? [
                                      {
                                          text: N.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: () => {
                                              D(!0);
                                          },
                                      },
                                      {
                                          text: N.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: R,
                                          disabled: !g || u,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, l.jsx)(ee, {}),
                    (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: ex.r,
                        children: N.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, b.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    eT = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: s } = T(),
            a = ev[s.ui_component.component.type];
        return null == a
            ? null
            : (0, l.jsx)(a, {
                  configData: s.ui_component.component,
                  onSubmit: t,
                  taskId: s.task_id,
                  flowId: s.flow_context?.flow_id,
                  assignmentId: s.assignment_id,
                  disabled: n,
                  transitionState: i,
              });
    };
var e_ = n(754302),
    eN = n(721940);
let ej = {
        [j.EMAIL_VERIFICATION]: N.intl.string(_.default.HC4IiR),
        [j.REFRESH_APP]: N.intl.string(_.default.SzfxQ3),
        [j.AGE_VERIFICATION]: N.intl.string(_.default["dSkE/A"]),
        [j.PARENTAL_CONSENT_CONNECTION]: N.intl.string(_.default.dMMSA0),
    },
    eS = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, l.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: F,
            className: eN.k,
            children: [
                (0, l.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, l.jsx)(u.D, {
                            variant: "display-md",
                            className: eN.D,
                            children: N.intl.string(_.default["/OpRAP"]),
                        }),
                        (0, l.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, l.jsx)(
                                    e_.B,
                                    {
                                        title: ej[e.task_type] ?? "",
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
                (0, l.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: N.intl.format(_.default["0DHxym"], {
                        handleLogOut: () => (0, b.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var ey = n(561452);
let eR = n(843020);
function eI(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: s } = e,
        [r, o] = a.useState(t),
        u = a.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let c = R.has(r.task_type);
    return (0, l.jsxs)(v.Provider, {
        value: u,
        children: [!c && (0, l.jsx)(eS, {}), (0, l.jsx)(eT, { onSubmit: n, disabled: i, transitionState: s })],
    });
}
let eb = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, s] = a.useState(null),
        [g, A] = a.useState(!0),
        [x, v] = a.useState(null),
        [T, M] = a.useState(!1),
        O = a.useCallback(async () => {
            A(!0), v(null);
            try {
                let e = await C();
                if (null == e) return void n();
                !(0, f.uJ)(e.ui_component?.component.type) && y.has(e.ui_component.component.type)
                    ? s(e)
                    : s({
                          task_id: e.task_id,
                          task_type: j.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: S.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                v(N.intl.string(_.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        w = a.useCallback(
            async (e) => {
                if (null !== i) {
                    M(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await E(t), O();
                    } catch (e) {
                        if (R.has(i.task_type)) throw e;
                        v(N.intl.string(_.default["+QRSxc"]));
                    } finally {
                        M(!1);
                    }
                }
            },
            [i, O],
        );
    (0, h.Ay)(() => {
        O();
    });
    let U = a.useMemo(() => i?.task_type === j.AGE_VERIFICATION, [i]),
        k = null != i && null === x && R.has(i.task_type);
    return (0, l.jsxs)("div", {
        className: ey.Tp,
        children: [
            (0, l.jsx)("img", { className: ey.xX, src: eR, alt: "" }),
            U
                ? (0, l.jsx)(p.default, {
                      transitionState: t ?? eg.ip.ENTERED,
                      entryPoint: m.q1.SAFETY_FLOWS,
                      onClose: eA.tE,
                      onComplete: async () => {
                          await w({ type: I.Empty });
                      },
                      dismissable: !1,
                  })
                : k && null != i
                  ? (0, l.jsx)(eI, { task: i, handleSubmit: w, disabled: T, transitionState: t ?? eg.ip.ENTERED })
                  : (0, l.jsx)("div", {
                        className: ey.nA,
                        children: g
                            ? (0, l.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                            : (0, l.jsx)("div", {
                                  className: ey.kL,
                                  children: (0, l.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: ey.rf,
                                      children: [
                                          null !== x &&
                                              (0, l.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: ey.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, l.jsxs)(o.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, l.jsx)(u.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: N.intl.string(N.t.c6kn6F),
                                                              }),
                                                              (0, l.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: N.intl.string(N.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsxs)(o.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, l.jsx)(d.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: N.intl.string(N.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, b.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, l.jsx)(d.$, {
                                                                  fullWidth: !0,
                                                                  text: N.intl.string(N.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      O();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === x &&
                                              null != i &&
                                              (0, l.jsx)(eI, { task: i, handleSubmit: w, disabled: T }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
