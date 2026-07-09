n.d(t, { A: () => eR });
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
async function T(e) {
    return (
        await A.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let E = a.createContext(null);
function C() {
    let e = a.useContext(E);
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
let I = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
    },
    S = new Set(Object.values(I)),
    y = new Set([10]);
N.intl.string(_.default["Qm6K/s"]), N.intl.string(_.default["dSkE/A"]), N.intl.string(_.default.dMMSA0);
var b = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    M = n(627575),
    R = n(17928),
    w = n(155718),
    O = n(379257),
    k = n(287809),
    P = n(430993),
    L = n(825484),
    D = n(214437);
function U(e) {
    let { actions: t, footerInput: n } = e;
    return 0 === t.length && null == n
        ? null
        : (0, s.jsxs)("footer", {
              className: D.q,
              children: [
                  null != n && (0, s.jsx)("div", { children: n }),
                  (0, s.jsx)(L.e, {
                      className: D.G,
                      justify: "end",
                      children: t.map((e, t) => (0, s.jsx)(u.$, { ...e }, t)),
                  }),
              ],
          });
}
let F = { bottom: 40, left: 32, right: 32, top: 32 };
var G = n(831067);
function H(e) {
    let { children: t, actions: n, footerInput: i, title: l } = e;
    return (0, s.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: F,
        className: G.kL,
        children: [
            (0, s.jsx)(d.D, { variant: "heading-lg/semibold", className: G.R_, children: l }),
            (0, s.jsx)(P.c, { children: t }),
            (0, s.jsx)("div", { className: G.Ic }),
            (0, s.jsx)(U, { actions: n, footerInput: i }),
        ],
    });
}
var V = n(224640),
    W = n(20742),
    B = n(696208),
    Z = n(691540),
    z = n(857250),
    K = n(97483),
    q = n(921853),
    Y = n(695515),
    J = n(10005),
    X = n(453322),
    $ = n(834981),
    Q = n(22071),
    ee = n(336862);
function et() {
    return (0, s.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: ee.Q,
        children: N.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                O.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var en = n(191627),
    ei = n(503698),
    el = n.n(ei),
    es = n(778712),
    ea = n(97808),
    er = n(939249),
    eo = n(947641),
    ed = n(789645),
    ec = n(486020),
    eu = n(923531);
let eh = () => ({
    seconds: N.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: N.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var ep = n(602339),
    em = n(402008);
function ef(e) {
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
        p = (0, R.bG)([k.default], () => k.default.getUser(n.parent_id)),
        m = p?.globalName ?? p?.username ?? n.parent_username,
        f = p?.username ?? n.parent_username,
        g = f !== m,
        A = p?.avatar ?? n.parent_avatar,
        { isConnected: x, isResolved: v } = (function (e) {
            let t = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers()[e]?.link_status),
                [n, i] = a.useState(() =>
                    t === en.Ef.ACTIVE ? "connected" : null == t || t === en.Ef.PENDING ? null : "declined",
                ),
                [l, s] = a.useState(t);
            t !== l &&
                (s(t),
                t === en.Ef.ACTIVE
                    ? i("connected")
                    : t === en.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== en.Ef.ACTIVE && i("declined"));
            let r = "connected" === n,
                o = "declined" === n;
            return { isConnected: r, isDeclined: o, isResolved: r || o };
        })(n.parent_id),
        T = ((t = n.created_at), (0, eu.mV)(Date.parse(t), eh)),
        E = ec.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, es.FT)(es._3.SIZE_40));
    return (0, s.jsxs)("div", {
        className: em.nM,
        children: [
            (0, s.jsx)("div", {
                className: em.R3,
                children: (0, s.jsx)(ea.eu, { src: E, size: es._3.SIZE_40, "aria-label": f }),
            }),
            (0, s.jsxs)("div", {
                className: em.zH,
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
                    (0, s.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: T }),
                ],
            }),
            v
                ? (0, s.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: N.intl.string(x ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, s.jsxs)("div", {
                      className: em.o1,
                      children: [
                          !i &&
                              (0, s.jsx)(er.D, {
                                  "aria-label": N.intl.formatToPlainString(ep.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: el()(em.hP, em.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: l
                                      ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, s.jsx)(eo.r, { className: em.gE, color: "currentColor" }),
                              }),
                          (0, s.jsx)(er.D, {
                              "aria-label": N.intl.formatToPlainString(ep.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: el()(em.hP, em.rr),
                              onClick: () => !d && h(n.parent_id),
                              children: o
                                  ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, s.jsx)(ed.P, { className: em.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function eg(e) {
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
                l = (0, $.xr)(),
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
                [T, E] = a.useState(t),
                [C, _] = a.useState(n);
            return (
                n && !C
                    ? (_(!0),
                      E(t),
                      v((e) => {
                          let n = new Map();
                          for (let t of e) p.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== T &&
                      (E(t),
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
                (0, Z.P0)((0, z.o)(N.intl.string(ep.default.Wu8BK2), K.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, s.jsx)("div", {
              className: em.Nr,
              children: i.map((e) =>
                  (0, s.jsx)(
                      ef,
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
var eA = n(231723),
    ex = n(818348),
    ev = n(42076);
let eT = "https://support.discord.com/hc/articles/14155060633623";
var eE = n(242235);
let eC = {
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
                n = (0, R.bG)([k.default], () => k.default.getCurrentUser());
            return (0, s.jsx)(H, {
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
                { configData: l, onSubmit: r, disabled: d, transitionState: h = eA.ip.ENTERED } = e,
                { getLinkCode: p } = (0, J.A)(),
                m = a.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                f = (0, $.VT)(),
                g = (0, $.Du)(),
                A = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers()),
                x = (0, R.bG)([Y.A], () => Y.A.getAreLinkedUsersProcessed()),
                v =
                    ((t = m.pending_requests),
                    (n = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers())),
                    (i = (0, R.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                    a.useMemo(() => {
                        if (!x) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== en.Ef.PENDING || t.requestor_id === i) continue;
                            let n = k.default.getUser(t.user_id),
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
                T = x ? Object.values(A).some((e) => null != e) : m.pending_requests.length > 0,
                E = x ? f : m.pending_requests.length,
                C = (0, R.bG)([Y.A], () => Y.A.getLinkCode()),
                j = (0, R.bG)([Y.A], () => Y.A.getLinkCodeExpiresAt()),
                I = C ?? m.link_code,
                S = j ?? Date.parse(m.link_code_expires_at),
                y = a.useCallback(async () => {
                    try {
                        await r({ type: b.Empty });
                    } catch {
                        (0, Z.P0)((0, z.o)(N.intl.string(_.default["+QRSxc"]), K.Ck.FAILURE));
                    }
                }, [r]),
                [w, O] = a.useState(T);
            T && !w && O(!0);
            let [L, D] = a.useState(!1),
                U = a.useCallback(() => {
                    D(!1), p();
                }, [p]);
            (0, X.A)(U);
            let F = !w || L,
                G = F
                    ? N.intl.format(_.default["6GaRTu"], { link: eT })
                    : N.intl.format(_.default["Ke+kz5"], { pendingCount: E, link: eT });
            return (0, s.jsxs)(V.d, {
                transitionState: h,
                onClose: ex.tE,
                dismissable: !1,
                size: "md",
                "aria-label": N.intl.string(_.default.dMMSA0),
                children: [
                    L &&
                        (0, s.jsx)("div", {
                            className: ev.g,
                            children: (0, s.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: q.n,
                                text: N.intl.string(_.default.CLAQas),
                                onClick: () => D(!1),
                            }),
                        }),
                    (0, s.jsx)(W.rQ, { alignCenter: !0, title: N.intl.string(_.default.dMMSA0), subtitle: G }),
                    (0, s.jsxs)(P.c, {
                        children: [
                            F &&
                                (0, s.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, s.jsx)(Q.r, { linkCode: I, expiresAt: S, onRefresh: p }),
                                }),
                            (0, s.jsx)("div", {
                                hidden: F,
                                children: (0, s.jsx)(eg, { pendingRequests: v, linkedUsersProcessed: x }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(B.H, {
                        actionsFullWidth: !0,
                        actions:
                            w && !L
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
                                          onClick: y,
                                          disabled: !g || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, s.jsx)(et, {}),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: ev.r,
                        children: N.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, M.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    e_ = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = C(),
            a = eC[l.ui_component.component.type];
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
var eN = n(754302),
    ej = n(721940);
let eI = {
        [j.EMAIL_VERIFICATION]: N.intl.string(_.default.HC4IiR),
        [j.REFRESH_APP]: N.intl.string(_.default.SzfxQ3),
        [j.AGE_VERIFICATION]: N.intl.string(_.default["dSkE/A"]),
        [j.PARENTAL_CONSENT_CONNECTION]: N.intl.string(_.default.dMMSA0),
    },
    eS = function () {
        let { task: e } = C(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, s.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: F,
            className: ej.k,
            children: [
                (0, s.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, s.jsx)(d.D, {
                            variant: "display-md",
                            className: ej.D,
                            children: N.intl.string(_.default["/OpRAP"]),
                        }),
                        (0, s.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, s.jsx)(
                                    eN.B,
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
var ey = n(561452);
let eb = n(843020);
function eM(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [r, o] = a.useState(t),
        d = a.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let c = y.has(r.task_type);
    return (0, s.jsxs)(E.Provider, {
        value: d,
        children: [!c && (0, s.jsx)(eS, {}), (0, s.jsx)(e_, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eR = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = a.useState(null),
        [g, A] = a.useState(!0),
        [x, E] = a.useState(null),
        [C, R] = a.useState(!1),
        w = a.useCallback(async () => {
            A(!0), E(null);
            try {
                let e = await v();
                if (null == e) return void n();
                !(0, f.uJ)(e.ui_component?.component.type) && S.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: j.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: I.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                E(N.intl.string(_.default["/f++3g"]));
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
                        await T(t), w();
                    } catch (e) {
                        if (y.has(i.task_type)) throw e;
                        E(N.intl.string(_.default["+QRSxc"]));
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
    let k = a.useMemo(() => i?.task_type === j.AGE_VERIFICATION, [i]),
        P = null != i && null === x && y.has(i.task_type);
    return (0, s.jsxs)("div", {
        className: ey.Tp,
        children: [
            (0, s.jsx)("img", { className: ey.xX, src: eb, alt: "" }),
            k
                ? (0, s.jsx)(m.default, {
                      transitionState: t ?? eA.ip.ENTERED,
                      entryPoint: p.q1.SAFETY_FLOWS,
                      onClose: ex.tE,
                      onComplete: async () => {
                          await O({ type: b.Empty });
                      },
                      dismissable: !1,
                  })
                : P && null != i
                  ? (0, s.jsx)(eM, { task: i, handleSubmit: O, disabled: C, transitionState: t ?? eA.ip.ENTERED })
                  : (0, s.jsx)("div", {
                        className: ey.nA,
                        children: g
                            ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                            : (0, s.jsx)("div", {
                                  className: ey.kL,
                                  children: (0, s.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: ey.rf,
                                      children: [
                                          null !== x &&
                                              (0, s.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: ey.Nj,
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
                                              (0, s.jsx)(eM, { task: i, handleSubmit: O, disabled: C }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
