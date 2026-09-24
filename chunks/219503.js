n.d(t, { A: () => ek });
var i,
    l,
    a = n(477900),
    s = n(582128),
    r = n(289873),
    o = n(331322),
    d = n(297264),
    c = n(834730),
    u = n(821609),
    m = n(964486),
    h = n(306537),
    f = n(595746),
    p = n(240248),
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
let C = s.createContext(null);
function _() {
    let e = s.useContext(C);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var I = n(730215),
    b = n(375708),
    S =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        (i[(i.APP_STORE_PARENTAL_REVOCATION = 11)] = "APP_STORE_PARENTAL_REVOCATION"),
        i);
let j = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
        APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation",
    },
    T = new Set(Object.values(j)),
    N = new Set([10]),
    y = new Set([11]);
(b.intl.string(I.default["Qm6K/s"]),
    b.intl.string(I.default["dSkE/A"]),
    b.intl.string(I.default.dMMSA0),
    b.intl.string(I.default.Z87TFb));
var R = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    M = n(627575),
    O = n(17928),
    w = n(155718),
    k = n(379257),
    L = n(287809),
    P = n(430993),
    D = n(503698),
    U = n.n(D),
    F = n(825484),
    G = n(745848);
function V(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: l = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: U()(G.qr, { [G.$6]: l }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(F.e, {
                      className: U()(G.GC, { [G.Z7]: i }),
                      justify: "end",
                      fullWidth: i,
                      children: t.map((e, t) => (0, a.jsx)(u.$, { ...e }, t)),
                  }),
              ],
          });
}
let H = { bottom: 40, left: 32, right: 32, top: 32 };
var B = n(588900);
function z(e) {
    let { children: t, actions: n, footerInput: i, title: l, variant: s = "default" } = e,
        r = "app_store_lockdown" === s;
    return (0, a.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: H,
        className: B.kL,
        children: [
            (0, a.jsx)(d.D, { variant: "heading-lg/semibold", className: r ? void 0 : B.R_, children: l }),
            (0, a.jsx)(P.c, { children: t }),
            (0, a.jsx)("div", { className: B.Ic }),
            (0, a.jsx)(V, { actions: n, footerInput: i, actionsFullWidth: r, showDivider: r }),
        ],
    });
}
var Z = n(509434),
    W = n(224640),
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
        children: b.intl.format(I.default.ifObbX, {
            handleAgeVerifyHook: () =>
                k.A.showAgeVerificationGetStartedModal({ entryPoint: h.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var er = n(191627),
    eo = n(778712),
    ed = n(97808),
    ec = n(939249),
    eu = n(947641),
    em = n(789645),
    eh = n(486020),
    ef = n(923531);
let ep = () => ({
    seconds: b.intl.string(I.default.M4NOO3),
    minutes: I.default["9nem85"],
    hours: I.default.sJjWRY,
    yesterday: b.intl.string(I.default["7SxW32"]),
    days: I.default.tVHevX,
    date: I.default.q6jzya,
});
var eg = n(513687),
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
            onDecline: m,
        } = e,
        h = (0, O.bG)([L.default], () => L.default.getUser(n.parent_id)),
        f = h?.globalName ?? h?.username ?? n.parent_username,
        p = h?.username ?? n.parent_username,
        g = p !== f,
        A = h?.avatar ?? n.parent_avatar,
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
        E = ((t = n.created_at), (0, ef.mV)(Date.parse(t), ep)),
        C = eh.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, eo.FT)(eo._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: eA.nM,
        children: [
            (0, a.jsx)("div", {
                className: eA.R3,
                children: (0, a.jsx)(ed.eu, { src: C, size: eo._3.SIZE_40, "aria-label": p }),
            }),
            (0, a.jsxs)("div", {
                className: eA.zH,
                children: [
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: f,
                    }),
                    g &&
                        (0, a.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: p,
                        }),
                    (0, a.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            v
                ? (0, a.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: b.intl.string(x ? I.default.YQP5dE : I.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: eA.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(ec.D, {
                                  "aria-label": b.intl.formatToPlainString(eg.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: U()(eA.hP, eA.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: l
                                      ? (0, a.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(eu.r, { className: eA.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(ec.D, {
                              "aria-label": b.intl.formatToPlainString(eg.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: U()(eA.hP, eA.rr),
                              onClick: () => !d && m(n.parent_id),
                              children: o
                                  ? (0, a.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(em.P, { className: eA.gE, color: "currentColor" }),
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
            handleDecline: m,
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
                        (r(null), i());
                    },
                }),
                m = c || u,
                [h, f] = s.useState(() => new Set()),
                p = s.useCallback((e) => {
                    f((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return (n.add(e), n);
                    });
                }, []),
                g = s.useCallback(
                    (e) => {
                        m || (p(e), r(e), o(e));
                    },
                    [m, p, o],
                ),
                A = s.useCallback(
                    (e) => {
                        m || (p(e), r(e), d(e));
                    },
                    [m, p, d],
                ),
                [x, v] = s.useState(t),
                [E, C] = s.useState(t),
                [_, I] = s.useState(n);
            return (
                n && !_
                    ? (I(!0),
                      C(t),
                      v((e) => {
                          let n = new Map();
                          for (let t of e) h.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== E &&
                      (C(t),
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
                    actionsDisabled: m,
                    handleAccept: g,
                    handleDecline: A,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, Y.P0)((0, $.o)(b.intl.string(eg.default.Wu8BK2), X.Ck.FAILURE));
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
                          onDecline: m,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var eE = n(231723),
    eC = n(818348),
    e_ = n(703687);
let eI = "https://support.discord.com/hc/articles/14155060633623";
var eb = n(846330);
let eS = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = s.useCallback(async () => {
                    (await t({ type: R.Empty }), window.location.reload());
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eb.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: eb.DD,
                        children: b.intl.string(I.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eb.h_,
                        children: b.intl.string(I.default["5am8D3"]),
                    }),
                    (0, a.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(u.$, {
                            variant: "primary",
                            text: b.intl.string(I.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, O.bG)([L.default], () => L.default.getCurrentUser());
            return (0, a.jsx)(z, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === w.Tk.UNVERIFIED
                                ? k.A.showAgeVerificationGetStartedModal({
                                      entryPoint: h.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: R.Empty }),
                                  })
                                : t({ type: R.Empty });
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
                { configData: l, onSubmit: r, disabled: d, transitionState: h = eE.ip.ENTERED } = e,
                { getLinkCode: f } = (0, et.A)();
            (0, m.Ay)(() => {
                (0, ee._z)();
            });
            let p = s.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                g = (0, ei.VT)(),
                A = (0, ei.Du)(),
                x = (0, O.bG)([Q.A], () => Q.A.getLinkedUsers()),
                v = (0, O.bG)([Q.A], () => Q.A.getAreLinkedUsersProcessed()),
                E =
                    ((t = p.pending_requests),
                    (n = (0, O.bG)([Q.A], () => Q.A.getLinkedUsers())),
                    (i = (0, O.bG)([L.default], () => L.default.getCurrentUser()?.id)),
                    s.useMemo(() => {
                        if (!v) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== er.Ef.PENDING || t.requestor_id === i) continue;
                            let n = L.default.getUser(t.user_id),
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
                C = v ? Object.values(x).some((e) => null != e) : p.pending_requests.length > 0,
                _ = v ? g : p.pending_requests.length,
                S = (0, O.bG)([Q.A], () => Q.A.getLinkCode()),
                j = (0, O.bG)([Q.A], () => Q.A.getLinkCodeExpiresAt()),
                T = S ?? p.link_code,
                N = j ?? Date.parse(p.link_code_expires_at),
                y = s.useCallback(async () => {
                    try {
                        await r({ type: R.Empty });
                    } catch {
                        (0, Y.P0)((0, $.o)(b.intl.string(I.default["+QRSxc"]), X.Ck.FAILURE));
                    }
                }, [r]),
                [w, k] = s.useState(C);
            C && !w && k(!0);
            let [D, U] = s.useState(!1),
                F = s.useCallback(() => {
                    (U(!1), f());
                }, [f]);
            (0, en.A)(F);
            let G = !w || D,
                V = G
                    ? b.intl.format(I.default["6GaRTu"], { link: eI })
                    : b.intl.format(I.default["Ke+kz5"], { pendingCount: _, link: eI });
            return (0, a.jsxs)(W.d, {
                transitionState: h,
                onClose: eC.tE,
                dismissable: !1,
                size: "md",
                "aria-label": b.intl.string(I.default.dMMSA0),
                children: [
                    D &&
                        (0, a.jsx)("div", {
                            className: e_.g,
                            children: (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: J.n,
                                text: b.intl.string(I.default.CLAQas),
                                onClick: () => U(!1),
                            }),
                        }),
                    (0, a.jsx)(K.rQ, { alignCenter: !0, title: b.intl.string(I.default.dMMSA0), subtitle: V }),
                    (0, a.jsxs)(P.c, {
                        children: [
                            G &&
                                (0, a.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(el.r, { linkCode: T, expiresAt: N, onRefresh: f }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: G,
                                children: (0, a.jsx)(ev, { pendingRequests: E, linkedUsersProcessed: v }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(q.H, {
                        actionsFullWidth: !0,
                        actions:
                            w && !D
                                ? [
                                      {
                                          text: b.intl.string(I.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              U(!0);
                                          },
                                      },
                                      {
                                          text: b.intl.string(I.default.OaHZUf),
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
                        className: e_.r,
                        children: b.intl.format(I.default["0DHxym"], {
                            handleLogOut: () => (0, M.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
        app_store_parental_revocation: (e) => {
            let { disabled: t } = e,
                n = s.useCallback(() => {
                    window.open(
                        "https://support.discord.com/hc/en-us/articles/42855178312087",
                        "_blank",
                        "noopener,noreferrer",
                    );
                }, []);
            return (0, a.jsx)(z, {
                title: b.intl.string(I.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: b.intl.string(I.default["6FXIU6"]),
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
                            children: b.intl.string(I.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(o.B, {
                            children: [
                                (0, a.jsx)(d.D, {
                                    variant: "text-md/normal",
                                    children: b.intl.string(I.default.z1L5Wt),
                                }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(I.default.BaI6L4),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
    ej = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = _(),
            s = eS[l.ui_component.component.type];
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
var eT = n(754302),
    eN = n(700265);
let ey = {
        [S.EMAIL_VERIFICATION]: b.intl.string(I.default.HC4IiR),
        [S.REFRESH_APP]: b.intl.string(I.default.SzfxQ3),
        [S.AGE_VERIFICATION]: b.intl.string(I.default["dSkE/A"]),
        [S.PARENTAL_CONSENT_CONNECTION]: b.intl.string(I.default.dMMSA0),
        [S.APP_STORE_PARENTAL_REVOCATION]: b.intl.string(I.default.Z87TFb),
    },
    eR = function () {
        let { task: e } = _(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            i = !y.has(e.task_type);
        return (0, a.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: H,
            className: eN.k,
            children: [
                (0, a.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: eN.D,
                            children: b.intl.string(I.default["/OpRAP"]),
                        }),
                        i &&
                            (0, a.jsx)(o.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        eT.B,
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
                    children: b.intl.format(I.default["0DHxym"], {
                        handleLogOut: () => (0, M.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eM = n(450165);
let eO = n(843020);
function ew(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [r, o] = s.useState(t),
        d = s.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    s.useEffect(() => {
        o(t);
    }, [t]);
    let c = N.has(r.task_type);
    return (0, a.jsxs)(C.Provider, {
        value: d,
        children: [!c && (0, a.jsx)(eR, {}), (0, a.jsx)(ej, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let ek = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = s.useState(null),
        [g, A] = s.useState(!0),
        [x, C] = s.useState(null),
        [_, y] = s.useState(!1),
        O = s.useCallback(async () => {
            (A(!0), C(null));
            try {
                let e = await v();
                if (null == e) return void n();
                !(0, p.uJ)(e.ui_component?.component.type) && T.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: S.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: j.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                C(b.intl.string(I.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        w = s.useCallback(
            async (e) => {
                if (null !== i) {
                    y(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        (await E(t), O());
                    } catch (e) {
                        if (N.has(i.task_type)) throw e;
                        C(b.intl.string(I.default["+QRSxc"]));
                    } finally {
                        y(!1);
                    }
                }
            },
            [i, O],
        );
    (0, m.Ay)(() => {
        O();
    });
    let k = s.useMemo(() => i?.task_type === S.AGE_VERIFICATION, [i]),
        L = null != i && null === x && N.has(i.task_type);
    return (0, a.jsxs)("div", {
        className: eM.Tp,
        children: [
            (0, a.jsx)("img", { className: eM.xX, src: eO, alt: "" }),
            k
                ? (0, a.jsx)(f.default, {
                      transitionState: t ?? eE.ip.ENTERED,
                      entryPoint: h.q1.SAFETY_FLOWS,
                      onClose: eC.tE,
                      onComplete: async () => {
                          await w({ type: R.Empty });
                      },
                      dismissable: !1,
                  })
                : L && null != i
                  ? (0, a.jsx)(ew, { task: i, handleSubmit: w, disabled: _, transitionState: t ?? eE.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: eM.nA,
                        children: g
                            ? (0, a.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: eM.kL,
                                  children: (0, a.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eM.rf,
                                      children: [
                                          null !== x &&
                                              (0, a.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eM.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(o.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(d.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: b.intl.string(b.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: b.intl.string(b.t.ZUEGFn),
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
                                                                  text: b.intl.string(b.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, M.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  text: b.intl.string(b.t["7NqTJn"]),
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
                                              (0, a.jsx)(ew, { task: i, handleSubmit: w, disabled: _ }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
