n.d(t, { A: () => eP });
var i,
    l,
    a = n(477900),
    s = n(582128),
    r = n(289873),
    o = n(331322),
    d = n(297264),
    c = n(834730),
    u = n(821609),
    h = n(964486),
    m = n(847599),
    p = n(595746),
    g = n(240248),
    f = n(562708);
n(181658);
var A = n(499785),
    x = n(652215);
async function v() {
    let e = await A.A.get({
        url: x.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: f.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function C(e) {
    return (
        await A.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: f.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let E = s.createContext(null);
function T() {
    let e = s.useContext(E);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(525227),
    I = n(375708),
    j =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        (i[(i.APP_STORE_PARENTAL_REVOCATION = 11)] = "APP_STORE_PARENTAL_REVOCATION"),
        i);
let N = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
        APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation",
    },
    S = new Set(Object.values(N)),
    b = new Set([10]),
    y = new Set([11]);
I.intl.string(_.default["Qm6K/s"]),
    I.intl.string(_.default["dSkE/A"]),
    I.intl.string(_.default.dMMSA0),
    I.intl.string(_.default.Z87TFb);
var M = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    R = n(627575),
    O = n(17928),
    k = n(155718),
    P = n(379257),
    w = n(287809),
    L = n(430993),
    D = n(503698),
    U = n.n(D),
    G = n(825484),
    F = n(745848);
function V(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: l = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: U()(F.qr, { [F.$6]: l }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(G.e, {
                      className: U()(F.GC, { [F.Z7]: i }),
                      justify: "end",
                      fullWidth: i,
                      children: t.map((e, t) => (0, a.jsx)(u.$, { ...e }, t)),
                  }),
              ],
          });
}
let H = { bottom: 40, left: 32, right: 32, top: 32 };
var B = n(588900);
function W(e) {
    let { children: t, actions: n, footerInput: i, title: l, variant: s = "default" } = e,
        r = "app_store_lockdown" === s;
    return (0, a.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: H,
        className: B.kL,
        children: [
            (0, a.jsx)(d.D, { variant: "heading-lg/semibold", className: r ? void 0 : B.R_, children: l }),
            (0, a.jsx)(L.c, { children: t }),
            (0, a.jsx)("div", { className: B.Ic }),
            (0, a.jsx)(V, { actions: n, footerInput: i, actionsFullWidth: r, showDivider: r }),
        ],
    });
}
var Z = n(509434),
    z = n(224640),
    K = n(20742),
    q = n(696208),
    Y = n(691540),
    $ = n(857250),
    X = n(97483),
    J = n(921853),
    Q = n(695515),
    ee = n(794364),
    et = n(10005),
    en = n(453322),
    ei = n(834981),
    el = n(22071),
    ea = n(196359);
function es() {
    return (0, a.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: ea.Q,
        children: I.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                P.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var er = n(191627),
    eo = n(778712),
    ed = n(97808),
    ec = n(939249),
    eu = n(947641),
    eh = n(789645),
    em = n(486020),
    ep = n(923531);
let eg = () => ({
    seconds: I.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: I.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var ef = n(670595),
    eA = n(838131);
function ex(e) {
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
        m = (0, O.bG)([w.default], () => w.default.getUser(n.parent_id)),
        p = m?.globalName ?? m?.username ?? n.parent_username,
        g = m?.username ?? n.parent_username,
        f = g !== p,
        A = m?.avatar ?? n.parent_avatar,
        { isConnected: x, isResolved: v } = (function (e) {
            let t = (0, O.bG)([Q.A], () => Q.A.getLinkedUsers()[e]?.link_status),
                [n, i] = s.useState(() =>
                    t === er.Ef.ACTIVE ? "connected" : null == t || t === er.Ef.PENDING ? null : "declined",
                ),
                [l, a] = s.useState(t);
            t !== l &&
                (a(t),
                t === er.Ef.ACTIVE
                    ? i("connected")
                    : t === er.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== er.Ef.ACTIVE && i("declined"));
            let r = "connected" === n,
                o = "declined" === n;
            return { isConnected: r, isDeclined: o, isResolved: r || o };
        })(n.parent_id),
        C = ((t = n.created_at), (0, ep.mV)(Date.parse(t), eg)),
        E = em.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, eo.FT)(eo._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: eA.nM,
        children: [
            (0, a.jsx)("div", {
                className: eA.R3,
                children: (0, a.jsx)(ed.eu, { src: E, size: eo._3.SIZE_40, "aria-label": g }),
            }),
            (0, a.jsxs)("div", {
                className: eA.zH,
                children: [
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: p,
                    }),
                    f &&
                        (0, a.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: g,
                        }),
                    (0, a.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: C }),
                ],
            }),
            v
                ? (0, a.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: I.intl.string(x ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: eA.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(ec.D, {
                                  "aria-label": I.intl.formatToPlainString(ef.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: U()(eA.hP, eA.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: l
                                      ? (0, a.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(eu.r, { className: eA.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(ec.D, {
                              "aria-label": I.intl.formatToPlainString(ef.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: U()(eA.hP, eA.rr),
                              onClick: () => !d && h(n.parent_id),
                              children: o
                                  ? (0, a.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(eh.P, { className: eA.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function ev(e) {
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
                l = (0, ei.xr)(),
                [a, r] = s.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: d,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                } = (0, et.A)({
                    onSuccess: () => r(null),
                    onError: () => {
                        r(null), i();
                    },
                }),
                h = c || u,
                [m, p] = s.useState(() => new Set()),
                g = s.useCallback((e) => {
                    p((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return n.add(e), n;
                    });
                }, []),
                f = s.useCallback(
                    (e) => {
                        h || (g(e), r(e), o(e));
                    },
                    [h, g, o],
                ),
                A = s.useCallback(
                    (e) => {
                        h || (g(e), r(e), d(e));
                    },
                    [h, g, d],
                ),
                [x, v] = s.useState(t),
                [C, E] = s.useState(t),
                [T, _] = s.useState(n);
            return (
                n && !T
                    ? (_(!0),
                      E(t),
                      v((e) => {
                          let n = new Map();
                          for (let t of e) m.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== C &&
                      (E(t),
                      v((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: x,
                    hasMaxConnections: l,
                    actioningUserId: a,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                    actionsDisabled: h,
                    handleAccept: f,
                    handleDecline: A,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, Y.P0)((0, $.o)(I.intl.string(ef.default.Wu8BK2), X.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, a.jsx)("div", {
              className: eA.Nr,
              children: i.map((e) =>
                  (0, a.jsx)(
                      ex,
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
var eC = n(231723),
    eE = n(818348),
    eT = n(703687);
let e_ = "https://support.discord.com/hc/articles/14155060633623";
var eI = n(846330);
let ej = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = s.useCallback(async () => {
                    await t({ type: M.Empty }), window.location.reload();
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eI.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: eI.DD,
                        children: I.intl.string(_.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eI.h_,
                        children: I.intl.string(_.default["5am8D3"]),
                    }),
                    (0, a.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(u.$, {
                            variant: "primary",
                            text: I.intl.string(_.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, O.bG)([w.default], () => w.default.getCurrentUser());
            return (0, a.jsx)(W, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === k.Tk.UNVERIFIED
                                ? P.A.showAgeVerificationGetStartedModal({
                                      entryPoint: m.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: M.Empty }),
                                  })
                                : t({ type: M.Empty });
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
                { configData: l, onSubmit: r, disabled: d, transitionState: m = eC.ip.ENTERED } = e,
                { getLinkCode: p } = (0, et.A)();
            (0, h.Ay)(() => {
                (0, ee._z)();
            });
            let g = s.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                f = (0, ei.VT)(),
                A = (0, ei.Du)(),
                x = (0, O.bG)([Q.A], () => Q.A.getLinkedUsers()),
                v = (0, O.bG)([Q.A], () => Q.A.getAreLinkedUsersProcessed()),
                C =
                    ((t = g.pending_requests),
                    (n = (0, O.bG)([Q.A], () => Q.A.getLinkedUsers())),
                    (i = (0, O.bG)([w.default], () => w.default.getCurrentUser()?.id)),
                    s.useMemo(() => {
                        if (!v) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== er.Ef.PENDING || t.requestor_id === i) continue;
                            let n = w.default.getUser(t.user_id),
                                a = e.get(t.user_id);
                            l.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? a?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? a?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return l;
                    }, [v, n, i, t])),
                E = v ? Object.values(x).some((e) => null != e) : g.pending_requests.length > 0,
                T = v ? f : g.pending_requests.length,
                j = (0, O.bG)([Q.A], () => Q.A.getLinkCode()),
                N = (0, O.bG)([Q.A], () => Q.A.getLinkCodeExpiresAt()),
                S = j ?? g.link_code,
                b = N ?? Date.parse(g.link_code_expires_at),
                y = s.useCallback(async () => {
                    try {
                        await r({ type: M.Empty });
                    } catch {
                        (0, Y.P0)((0, $.o)(I.intl.string(_.default["+QRSxc"]), X.Ck.FAILURE));
                    }
                }, [r]),
                [k, P] = s.useState(E);
            E && !k && P(!0);
            let [D, U] = s.useState(!1),
                G = s.useCallback(() => {
                    U(!1), p();
                }, [p]);
            (0, en.A)(G);
            let F = !k || D,
                V = F
                    ? I.intl.format(_.default["6GaRTu"], { link: e_ })
                    : I.intl.format(_.default["Ke+kz5"], { pendingCount: T, link: e_ });
            return (0, a.jsxs)(z.d, {
                transitionState: m,
                onClose: eE.tE,
                dismissable: !1,
                size: "md",
                "aria-label": I.intl.string(_.default.dMMSA0),
                children: [
                    D &&
                        (0, a.jsx)("div", {
                            className: eT.g,
                            children: (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: J.n,
                                text: I.intl.string(_.default.CLAQas),
                                onClick: () => U(!1),
                            }),
                        }),
                    (0, a.jsx)(K.rQ, { alignCenter: !0, title: I.intl.string(_.default.dMMSA0), subtitle: V }),
                    (0, a.jsxs)(L.c, {
                        children: [
                            F &&
                                (0, a.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(el.r, { linkCode: S, expiresAt: b, onRefresh: p }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: F,
                                children: (0, a.jsx)(ev, { pendingRequests: C, linkedUsersProcessed: v }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(q.H, {
                        actionsFullWidth: !0,
                        actions:
                            k && !D
                                ? [
                                      {
                                          text: I.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              U(!0);
                                          },
                                      },
                                      {
                                          text: I.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: y,
                                          disabled: !A || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(es, {}),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: eT.r,
                        children: I.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, R.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
        app_store_parental_revocation: (e) => {
            let { disabled: t } = e,
                n = s.useCallback(() => {
                    window.open(
                        "https://support.discord.com/hc/articles/14155060633623",
                        "_blank",
                        "noopener,noreferrer",
                    );
                }, []);
            return (0, a.jsx)(W, {
                title: I.intl.string(_.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: I.intl.string(_.default["6FXIU6"]),
                        variant: "primary",
                        icon: Z.I,
                        iconPosition: "end",
                        onClick: n,
                        disabled: t,
                    },
                ],
                children: (0, a.jsxs)(o.B, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            children: I.intl.string(_.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(o.B, {
                            children: [
                                (0, a.jsx)(d.D, {
                                    variant: "text-md/normal",
                                    children: I.intl.string(_.default.z1L5Wt),
                                }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: I.intl.string(_.default.BaI6L4),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
    eN = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = T(),
            s = ej[l.ui_component.component.type];
        return null == s
            ? null
            : (0, a.jsx)(s, {
                  configData: l.ui_component.component,
                  onSubmit: t,
                  taskId: l.task_id,
                  flowId: l.flow_context?.flow_id,
                  assignmentId: l.assignment_id,
                  disabled: n,
                  transitionState: i,
              });
    };
var eS = n(754302),
    eb = n(700265);
let ey = {
        [j.EMAIL_VERIFICATION]: I.intl.string(_.default.HC4IiR),
        [j.REFRESH_APP]: I.intl.string(_.default.SzfxQ3),
        [j.AGE_VERIFICATION]: I.intl.string(_.default["dSkE/A"]),
        [j.PARENTAL_CONSENT_CONNECTION]: I.intl.string(_.default.dMMSA0),
        [j.APP_STORE_PARENTAL_REVOCATION]: I.intl.string(_.default.Z87TFb),
    },
    eM = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            i = !y.has(e.task_type);
        return (0, a.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: H,
            className: eb.k,
            children: [
                (0, a.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: eb.D,
                            children: I.intl.string(_.default["/OpRAP"]),
                        }),
                        i &&
                            (0, a.jsx)(o.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        eS.B,
                                        {
                                            title: ey[e.task_type] ?? "",
                                            listType: "numbered",
                                            index: t,
                                            color: t === n ? "text-strong" : t < n ? "feedback-positive" : "text-muted",
                                            completed: t < n,
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
                    children: I.intl.format(_.default["0DHxym"], {
                        handleLogOut: () => (0, R.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eR = n(450165);
let eO = n(843020);
function ek(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [r, o] = s.useState(t),
        d = s.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    s.useEffect(() => {
        o(t);
    }, [t]);
    let c = b.has(r.task_type);
    return (0, a.jsxs)(E.Provider, {
        value: d,
        children: [!c && (0, a.jsx)(eM, {}), (0, a.jsx)(eN, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eP = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = s.useState(null),
        [f, A] = s.useState(!0),
        [x, E] = s.useState(null),
        [T, y] = s.useState(!1),
        O = s.useCallback(async () => {
            A(!0), E(null);
            try {
                let e = await v();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && S.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: j.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: N.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                E(I.intl.string(_.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        k = s.useCallback(
            async (e) => {
                if (null !== i) {
                    y(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await C(t), O();
                    } catch (e) {
                        if (b.has(i.task_type)) throw e;
                        E(I.intl.string(_.default["+QRSxc"]));
                    } finally {
                        y(!1);
                    }
                }
            },
            [i, O],
        );
    (0, h.Ay)(() => {
        O();
    });
    let P = s.useMemo(() => i?.task_type === j.AGE_VERIFICATION, [i]),
        w = null != i && null === x && b.has(i.task_type);
    return (0, a.jsxs)("div", {
        className: eR.Tp,
        children: [
            (0, a.jsx)("img", { className: eR.xX, src: eO, alt: "" }),
            P
                ? (0, a.jsx)(p.default, {
                      transitionState: t ?? eC.ip.ENTERED,
                      entryPoint: m.q1.SAFETY_FLOWS,
                      onClose: eE.tE,
                      onComplete: async () => {
                          await k({ type: M.Empty });
                      },
                      dismissable: !1,
                  })
                : w && null != i
                  ? (0, a.jsx)(ek, { task: i, handleSubmit: k, disabled: T, transitionState: t ?? eC.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: eR.nA,
                        children: f
                            ? (0, a.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: eR.kL,
                                  children: (0, a.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eR.rf,
                                      children: [
                                          null !== x &&
                                              (0, a.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eR.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(o.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(d.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: I.intl.string(I.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: I.intl.string(I.t.ZUEGFn),
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
                                                                  text: I.intl.string(I.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, R.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  text: I.intl.string(I.t["7NqTJn"]),
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
                                              (0, a.jsx)(ek, { task: i, handleSubmit: k, disabled: T }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
