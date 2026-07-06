n.d(t, { A: () => eM });
var i,
    l,
    s = n(627968),
    a = n(64700),
    r = n(289873),
    o = n(331322),
    d = n(534514),
    c = n(834730),
    u = n(821609),
    h = n(964486),
    p = n(847599),
    m = n(595746),
    f = n(240248),
    g = n(562708);
n(181658);
var A = n(499785),
    x = n(652215);
async function v() {
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
let T = a.createContext(null);
function C() {
    let e = a.useContext(T);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(837451),
    N = n(375708),
    I =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        i);
let j = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
    },
    S = new Set(Object.values(j)),
    y = new Set([10]);
N.intl.string(_.default["Qm6K/s"]), N.intl.string(_.default["dSkE/A"]), N.intl.string(_.default.dMMSA0);
var b = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    M = n(627575),
    R = n(17928),
    w = n(155718),
    O = n(379257),
    D = n(287809),
    k = n(430993),
    P = n(825484),
    U = n(214437);
function L(e) {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, s.jsxs)("footer", {
              className: U.q,
              children: [
                  null != n && (0, s.jsx)("div", { children: n }),
                  (0, s.jsx)(P.e, {
                      className: U.G,
                      justify: "end",
                      children: t.map((e, t) => (0, s.jsx)(u.$, { ...e }, t)),
                  }),
              ],
          });
}
let G = { bottom: 40, left: 32, right: 32, top: 32 };
var F = n(831067);
function V(e) {
    let { children: t, actions: n, footerInput: i, title: l } = e;
    return (0, s.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: G,
        className: F.kL,
        children: [
            (0, s.jsx)(d.D, { variant: "heading-lg/semibold", className: F.R_, children: l }),
            (0, s.jsx)(k.c, { children: t }),
            (0, s.jsx)("div", { className: F.Ic }),
            (0, s.jsx)(L, { actions: n, footerInput: i }),
        ],
    });
}
var H = n(224640),
    W = n(20742),
    B = n(696208),
    z = n(691540),
    Z = n(857250),
    K = n(97483),
    q = n(921853),
    Y = n(695515),
    J = n(10005),
    X = n(834981),
    $ = n(22071),
    Q = n(336862);
function ee() {
    return (0, s.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: Q.Q,
        children: N.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                O.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var et = n(191627),
    en = n(503698),
    ei = n.n(en),
    el = n(778712),
    es = n(97808),
    ea = n(939249),
    er = n(947641),
    eo = n(789645),
    ed = n(486020),
    ec = n(923531);
let eu = () => ({
    seconds: N.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: N.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var eh = n(602339),
    ep = n(402008);
function em(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: l,
            isDeclineLoading: o,
            actionsDisabled: d,
            onAccept: u,
            onDecline: h,
        } = e,
        p = (0, R.bG)([D.default], () => D.default.getUser(n.parent_id)),
        m = p?.globalName ?? p?.username ?? n.parent_username,
        f = p?.username ?? n.parent_username,
        g = f !== m,
        A = p?.avatar ?? n.parent_avatar,
        { isConnected: x, isResolved: v } = (function (e) {
            let t = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers()[e]?.link_status),
                [n, i] = a.useState(() =>
                    t === et.Ef.ACTIVE ? "connected" : null == t || t === et.Ef.PENDING ? null : "declined",
                ),
                [l, s] = a.useState(t);
            t !== l &&
                (s(t),
                t === et.Ef.ACTIVE
                    ? i("connected")
                    : t === et.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== et.Ef.ACTIVE && i("declined"));
            let r = "connected" === n,
                o = "declined" === n;
            return { isConnected: r, isDeclined: o, isResolved: r || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, ec.mV)(Date.parse(t), eu)),
        T = ed.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, el.FT)(el._3.SIZE_40));
    return (0, s.jsxs)("div", {
        className: ep.nM,
        children: [
            (0, s.jsx)("div", {
                className: ep.R3,
                children: (0, s.jsx)(es.eu, { src: T, size: el._3.SIZE_40, "aria-label": f }),
            }),
            (0, s.jsxs)("div", {
                className: ep.zH,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: m,
                    }),
                    g &&
                        (0, s.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: f,
                        }),
                    (0, s.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            v
                ? (0, s.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: N.intl.string(x ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, s.jsxs)("div", {
                      className: ep.o1,
                      children: [
                          !i &&
                              (0, s.jsx)(ea.D, {
                                  "aria-label": N.intl.formatToPlainString(eh.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: ei()(ep.hP, ep.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: l
                                      ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, s.jsx)(er.r, { className: ep.gE, color: "currentColor" }),
                              }),
                          (0, s.jsx)(ea.D, {
                              "aria-label": N.intl.formatToPlainString(eh.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: ei()(ep.hP, ep.rr),
                              onClick: () => !d && h(n.parent_id),
                              children: o
                                  ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, s.jsx)(eo.P, { className: ep.gE, color: "currentColor" }),
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
            hasMaxConnections: l,
            actioningUserId: r,
            isAcceptLoading: o,
            isDeclineLoading: d,
            actionsDisabled: c,
            handleAccept: u,
            handleDecline: h,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                l = (0, X.xr)(),
                [s, r] = a.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: d,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                } = (0, J.A)({
                    onSuccess: () => r(null),
                    onError: () => {
                        r(null), i();
                    },
                }),
                h = c || u,
                [p, m] = a.useState(() => new Set()),
                f = a.useCallback((e) => {
                    m((t) => {
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
                        h || (f(e), r(e), d(e));
                    },
                    [h, f, d],
                ),
                [x, v] = a.useState(t),
                [E, T] = a.useState(t),
                [C, _] = a.useState(n);
            return (
                n && !C
                    ? (_(!0),
                      T(t),
                      v((e) => {
                          let n = new Map();
                          for (let t of e) p.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== E &&
                      (T(t),
                      v((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: x,
                    hasMaxConnections: l,
                    actioningUserId: s,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                    actionsDisabled: h,
                    handleAccept: g,
                    handleDecline: A,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, z.P0)((0, Z.o)(N.intl.string(eh.default.Wu8BK2), K.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, s.jsx)("div", {
              className: ep.Nr,
              children: i.map((e) =>
                  (0, s.jsx)(
                      em,
                      {
                          request: e,
                          hasMaxConnections: l,
                          isAcceptLoading: o && r === e.parent_id,
                          isDeclineLoading: d && r === e.parent_id,
                          actionsDisabled: c,
                          onAccept: u,
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
let ev = "https://support.discord.com/hc/articles/14155060633623";
var eE = n(242235);
let eT = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: b.Empty }), window.location.reload();
                }, [t]);
            return (0, s.jsxs)("div", {
                className: eE.kL,
                children: [
                    (0, s.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: eE.DD,
                        children: N.intl.string(_.default.v52itt),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eE.h_,
                        children: N.intl.string(_.default["5am8D3"]),
                    }),
                    (0, s.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, s.jsx)(u.$, {
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
                n = (0, R.bG)([D.default], () => D.default.getCurrentUser());
            return (0, s.jsx)(V, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === w.Tk.UNVERIFIED
                                ? O.A.showAgeVerificationGetStartedModal({
                                      entryPoint: p.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: b.Empty }),
                                  })
                                : t({ type: b.Empty });
                        },
                    },
                ],
                children: (0, s.jsxs)(o.B, {
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
                { configData: l, onSubmit: r, disabled: d, transitionState: h = eg.ip.ENTERED } = e,
                { getLinkCode: p } = (0, J.A)(),
                m = a.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                f = (0, X.VT)(),
                g = (0, X.Du)(),
                A = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers()),
                x = (0, R.bG)([Y.A], () => Y.A.getAreLinkedUsersProcessed()),
                v =
                    ((t = m.pending_requests),
                    (n = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers())),
                    (i = (0, R.bG)([D.default], () => D.default.getCurrentUser()?.id)),
                    a.useMemo(() => {
                        if (!x) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== et.Ef.PENDING || t.requestor_id === i) continue;
                            let n = D.default.getUser(t.user_id),
                                s = e.get(t.user_id);
                            l.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? s?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? s?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return l;
                    }, [x, n, i, t])),
                E = x ? Object.values(A).some((e) => null != e) : m.pending_requests.length > 0,
                T = x ? f : m.pending_requests.length,
                C = (0, R.bG)([Y.A], () => Y.A.getLinkCode()),
                I = (0, R.bG)([Y.A], () => Y.A.getLinkCodeExpiresAt()),
                j = C ?? m.link_code,
                S = I ?? Date.parse(m.link_code_expires_at),
                y = a.useCallback(async () => {
                    try {
                        await r({ type: b.Empty });
                    } catch {
                        (0, z.P0)((0, Z.o)(N.intl.string(_.default["+QRSxc"]), K.Ck.FAILURE));
                    }
                }, [r]),
                [w, O] = a.useState(E);
            E && !w && O(!0);
            let [P, U] = a.useState(!1),
                L = !w || P,
                G = L
                    ? N.intl.format(_.default["6GaRTu"], { link: ev })
                    : N.intl.format(_.default["Ke+kz5"], { pendingCount: T, link: ev });
            return (0, s.jsxs)(H.d, {
                transitionState: h,
                onClose: eA.tE,
                dismissable: !1,
                size: "md",
                "aria-label": N.intl.string(_.default.dMMSA0),
                children: [
                    P &&
                        (0, s.jsx)("div", {
                            className: ex.g,
                            children: (0, s.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: q.n,
                                text: N.intl.string(_.default.CLAQas),
                                onClick: () => U(!1),
                            }),
                        }),
                    (0, s.jsx)(W.rQ, { alignCenter: !0, title: N.intl.string(_.default.dMMSA0), subtitle: G }),
                    (0, s.jsxs)(k.c, {
                        children: [
                            L &&
                                (0, s.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, s.jsx)($.r, { linkCode: j, expiresAt: S, onRefresh: p }),
                                }),
                            (0, s.jsx)("div", {
                                hidden: L,
                                children: (0, s.jsx)(ef, { pendingRequests: v, linkedUsersProcessed: x }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(B.H, {
                        actionsFullWidth: !0,
                        actions:
                            w && !P
                                ? [
                                      {
                                          text: N.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: () => {
                                              U(!0);
                                          },
                                      },
                                      {
                                          text: N.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: y,
                                          disabled: !g || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, s.jsx)(ee, {}),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: ex.r,
                        children: N.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, M.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    eC = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = C(),
            a = eT[l.ui_component.component.type];
        return null == a
            ? null
            : (0, s.jsx)(a, {
                  configData: l.ui_component.component,
                  onSubmit: t,
                  taskId: l.task_id,
                  flowId: l.flow_context?.flow_id,
                  assignmentId: l.assignment_id,
                  disabled: n,
                  transitionState: i,
              });
    };
var e_ = n(754302),
    eN = n(721940);
let eI = {
        [I.EMAIL_VERIFICATION]: N.intl.string(_.default.HC4IiR),
        [I.REFRESH_APP]: N.intl.string(_.default.SzfxQ3),
        [I.AGE_VERIFICATION]: N.intl.string(_.default["dSkE/A"]),
        [I.PARENTAL_CONSENT_CONNECTION]: N.intl.string(_.default.dMMSA0),
    },
    ej = function () {
        let { task: e } = C(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, s.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: G,
            className: eN.k,
            children: [
                (0, s.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, s.jsx)(d.D, {
                            variant: "display-md",
                            className: eN.D,
                            children: N.intl.string(_.default["/OpRAP"]),
                        }),
                        (0, s.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, s.jsx)(
                                    e_.B,
                                    {
                                        title: eI[e.task_type] ?? "",
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
                    children: N.intl.format(_.default["0DHxym"], {
                        handleLogOut: () => (0, M.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eS = n(561452);
let ey = n(843020);
function eb(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [r, o] = a.useState(t),
        d = a.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let c = y.has(r.task_type);
    return (0, s.jsxs)(T.Provider, {
        value: d,
        children: [!c && (0, s.jsx)(ej, {}), (0, s.jsx)(eC, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eM = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = a.useState(null),
        [g, A] = a.useState(!0),
        [x, T] = a.useState(null),
        [C, R] = a.useState(!1),
        w = a.useCallback(async () => {
            A(!0), T(null);
            try {
                let e = await v();
                if (null == e) return void n();
                !(0, f.uJ)(e.ui_component?.component.type) && S.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: I.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: j.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                T(N.intl.string(_.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        O = a.useCallback(
            async (e) => {
                if (null !== i) {
                    R(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await E(t), w();
                    } catch (e) {
                        if (y.has(i.task_type)) throw e;
                        T(N.intl.string(_.default["+QRSxc"]));
                    } finally {
                        R(!1);
                    }
                }
            },
            [i, w],
        );
    (0, h.Ay)(() => {
        w();
    });
    let D = a.useMemo(() => i?.task_type === I.AGE_VERIFICATION, [i]),
        k = null != i && null === x && y.has(i.task_type);
    return (0, s.jsxs)("div", {
        className: eS.Tp,
        children: [
            (0, s.jsx)("img", { className: eS.xX, src: ey, alt: "" }),
            D
                ? (0, s.jsx)(m.default, {
                      transitionState: t ?? eg.ip.ENTERED,
                      entryPoint: p.q1.SAFETY_FLOWS,
                      onClose: eA.tE,
                      onComplete: async () => {
                          await O({ type: b.Empty });
                      },
                      dismissable: !1,
                  })
                : k && null != i
                  ? (0, s.jsx)(eb, { task: i, handleSubmit: O, disabled: C, transitionState: t ?? eg.ip.ENTERED })
                  : (0, s.jsx)("div", {
                        className: eS.nA,
                        children: g
                            ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                            : (0, s.jsx)("div", {
                                  className: eS.kL,
                                  children: (0, s.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eS.rf,
                                      children: [
                                          null !== x &&
                                              (0, s.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eS.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, s.jsxs)(o.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, s.jsx)(d.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: N.intl.string(N.t.c6kn6F),
                                                              }),
                                                              (0, s.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: N.intl.string(N.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, s.jsxs)(o.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, s.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: N.intl.string(N.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, M.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, s.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  text: N.intl.string(N.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      w();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === x &&
                                              null != i &&
                                              (0, s.jsx)(eb, { task: i, handleSubmit: O, disabled: C }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
