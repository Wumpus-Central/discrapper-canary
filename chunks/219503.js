n.d(t, { A: () => eO });
var i,
    l,
    a = n(477900),
    r = n(582128),
    s = n(231723),
    o = n(289873),
    u = n(331322),
    d = n(297264),
    c = n(834730),
    m = n(821609),
    h = n(964486),
    f = n(306537),
    p = n(595746),
    g = n(240248),
    A = n(562708);
n(181658);
var v = n(499785),
    E = n(652215);
async function x() {
    let e = await v.A.get({
        url: E.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function C(e) {
    return (
        await v.A.post({
            url: E.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let _ = r.createContext(null);
function T() {
    let e = r.useContext(_);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var I = n(730215),
    S = n(105292),
    y =
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
    b = new Set(Object.values(N)),
    j = new Set([10]),
    R = new Set([11]);
(S.intl.string(I.default["Qm6K/s"]),
    S.intl.string(I.default["dSkE/A"]),
    S.intl.string(I.default.dMMSA0),
    S.intl.string(I.default.Z87TFb));
var M = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    O = n(627575),
    w = n(17928),
    L = n(155718),
    P = n(379257),
    k = n(287809),
    D = n(430993),
    U = n(503698),
    G = n.n(U),
    F = n(825484),
    V = n(745848);
function H(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: l = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: G()(V.qr, { [V.$6]: l }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(F.e, {
                      className: G()(V.GC, { [V.Z7]: i }),
                      justify: "end",
                      fullWidth: i,
                      children: t.map((e, t) => (0, a.jsx)(m.$, { ...e }, t)),
                  }),
              ],
          });
}
let B = { bottom: 40, left: 32, right: 32, top: 32 };
var W = n(588900);
function Z(e) {
    let { children: t, actions: n, footerInput: i, title: l, variant: r = "default" } = e,
        s = "app_store_lockdown" === r;
    return (0, a.jsxs)(u.B, {
        direction: "vertical",
        justify: "start",
        padding: B,
        className: W.kL,
        children: [
            (0, a.jsx)(d.D, { variant: "heading-lg/semibold", className: s ? void 0 : W.R_, children: l }),
            (0, a.jsx)(D.c, { children: t }),
            (0, a.jsx)("div", { className: W.Ic }),
            (0, a.jsx)(H, { actions: n, footerInput: i, actionsFullWidth: s, showDivider: s }),
        ],
    });
}
var z = n(509434),
    K = n(858899),
    q = n(224640),
    Y = n(921853),
    $ = n(20742),
    X = n(696208),
    Q = n(695515),
    J = n(794364),
    ee = n(10005),
    et = n(453322),
    en = n(834981),
    ei = n(22071),
    el = n(196359);
function ea() {
    return (0, a.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: el.Q,
        children: S.intl.format(I.default.ifObbX, {
            handleAgeVerifyHook: () =>
                P.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var er = n(191627),
    es = n(778712),
    eo = n(97808),
    eu = n(939249),
    ed = n(947641),
    ec = n(789645),
    em = n(486020),
    eh = n(923531);
let ef = () => ({
    seconds: S.intl.string(I.default.M4NOO3),
    minutes: I.default["9nem85"],
    hours: I.default.sJjWRY,
    yesterday: S.intl.string(I.default["7SxW32"]),
    days: I.default.tVHevX,
    date: I.default.q6jzya,
});
var ep = n(513687),
    eg = n(838131);
function eA(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: l,
            isDeclineLoading: s,
            actionsDisabled: u,
            onAccept: d,
            onDecline: m,
        } = e,
        h = (0, w.bG)([k.default], () => k.default.getUser(n.parent_id)),
        f = h?.globalName ?? h?.username ?? n.parent_username,
        p = h?.username ?? n.parent_username,
        g = p !== f,
        A = h?.avatar ?? n.parent_avatar,
        { isConnected: v, isResolved: E } = (function (e) {
            let t = (0, w.bG)([Q.A], () => Q.A.getLinkedUsers()[e]?.link_status),
                [n, i] = r.useState(() =>
                    t === er.Ef.ACTIVE ? "connected" : null == t || t === er.Ef.PENDING ? null : "declined",
                ),
                [l, a] = r.useState(t);
            t !== l &&
                (a(t),
                t === er.Ef.ACTIVE
                    ? i("connected")
                    : t === er.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== er.Ef.ACTIVE && i("declined"));
            let s = "connected" === n,
                o = "declined" === n;
            return { isConnected: s, isDeclined: o, isResolved: s || o };
        })(n.parent_id),
        x = ((t = n.created_at), (0, eh.mV)(Date.parse(t), ef)),
        C = em.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, es.FT)(es._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: eg.nM,
        children: [
            (0, a.jsx)("div", {
                className: eg.R3,
                children: (0, a.jsx)(eo.eu, { src: C, size: es._3.SIZE_40, "aria-label": p }),
            }),
            (0, a.jsxs)("div", {
                className: eg.zH,
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
                    (0, a.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: x }),
                ],
            }),
            E
                ? (0, a.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: S.intl.string(v ? I.default.YQP5dE : I.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: eg.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(eu.D, {
                                  "aria-label": S.intl.formatToPlainString(ep.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: G()(eg.hP, eg.xG),
                                  onClick: () => !u && d(n.parent_id),
                                  children: l
                                      ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(ed.r, { className: eg.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(eu.D, {
                              "aria-label": S.intl.formatToPlainString(ep.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: G()(eg.hP, eg.rr),
                              onClick: () => !u && m(n.parent_id),
                              children: s
                                  ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(ec.P, { className: eg.gE, color: "currentColor" }),
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
            actioningUserId: s,
            isAcceptLoading: o,
            isDeclineLoading: u,
            actionsDisabled: d,
            handleAccept: c,
            handleDecline: m,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                l = (0, en.xr)(),
                [a, s] = r.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: u,
                    isAcceptLoading: d,
                    isDeclineLoading: c,
                } = (0, ee.A)({
                    onSuccess: () => s(null),
                    onError: () => {
                        (s(null), i());
                    },
                }),
                m = d || c,
                [h, f] = r.useState(() => new Set()),
                p = r.useCallback((e) => {
                    f((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return (n.add(e), n);
                    });
                }, []),
                g = r.useCallback(
                    (e) => {
                        m || (p(e), s(e), o(e));
                    },
                    [m, p, o],
                ),
                A = r.useCallback(
                    (e) => {
                        m || (p(e), s(e), u(e));
                    },
                    [m, p, u],
                ),
                [v, E] = r.useState(t),
                [x, C] = r.useState(t),
                [_, T] = r.useState(n);
            return (
                n && !_
                    ? (T(!0),
                      C(t),
                      E((e) => {
                          let n = new Map();
                          for (let t of e) h.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== x &&
                      (C(t),
                      E((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: v,
                    hasMaxConnections: l,
                    actioningUserId: a,
                    isAcceptLoading: d,
                    isDeclineLoading: c,
                    actionsDisabled: m,
                    handleAccept: g,
                    handleDecline: A,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, K.P0)({ text: S.intl.string(ep.default.Wu8BK2), variant: "critical" });
            },
        });
    return 0 === i.length
        ? null
        : (0, a.jsx)("div", {
              className: eg.Nr,
              children: i.map((e) =>
                  (0, a.jsx)(
                      eA,
                      {
                          request: e,
                          hasMaxConnections: l,
                          isAcceptLoading: o && s === e.parent_id,
                          isDeclineLoading: u && s === e.parent_id,
                          actionsDisabled: d,
                          onAccept: c,
                          onDecline: m,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var eE = n(818348),
    ex = n(703687);
let eC = "https://support.discord.com/hc/articles/14155060633623";
var e_ = n(846330);
let eT = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = r.useCallback(async () => {
                    (await t({ type: M.Empty }), window.location.reload());
                }, [t]);
            return (0, a.jsxs)("div", {
                className: e_.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: e_.DD,
                        children: S.intl.string(I.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: e_.h_,
                        children: S.intl.string(I.default["5am8D3"]),
                    }),
                    (0, a.jsx)(u.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(m.$, {
                            variant: "primary",
                            text: S.intl.string(I.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, w.bG)([k.default], () => k.default.getCurrentUser());
            return (0, a.jsx)(Z, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === L.Tk.UNVERIFIED
                                ? P.A.showAgeVerificationGetStartedModal({
                                      entryPoint: f.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: M.Empty }),
                                  })
                                : t({ type: M.Empty });
                        },
                    },
                ],
                children: (0, a.jsxs)(u.B, {
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
                { configData: l, onSubmit: o, disabled: d, transitionState: f = s.ip.ENTERED } = e,
                { getLinkCode: p } = (0, ee.A)();
            (0, h.Ay)(() => {
                (0, J._z)();
            });
            let g = r.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                A = (0, en.VT)(),
                v = (0, en.Du)(),
                E = (0, w.bG)([Q.A], () => Q.A.getLinkedUsers()),
                x = (0, w.bG)([Q.A], () => Q.A.getAreLinkedUsersProcessed()),
                C =
                    ((t = g.pending_requests),
                    (n = (0, w.bG)([Q.A], () => Q.A.getLinkedUsers())),
                    (i = (0, w.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                    r.useMemo(() => {
                        if (!x) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== er.Ef.PENDING || t.requestor_id === i) continue;
                            let n = k.default.getUser(t.user_id),
                                a = e.get(t.user_id);
                            l.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? a?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? a?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return l;
                    }, [x, n, i, t])),
                _ = x ? Object.values(E).some((e) => null != e) : g.pending_requests.length > 0,
                T = x ? A : g.pending_requests.length,
                y = (0, w.bG)([Q.A], () => Q.A.getLinkCode()),
                N = (0, w.bG)([Q.A], () => Q.A.getLinkCodeExpiresAt()),
                b = y ?? g.link_code,
                j = N ?? Date.parse(g.link_code_expires_at),
                R = r.useCallback(async () => {
                    try {
                        await o({ type: M.Empty });
                    } catch {
                        (0, K.P0)({ text: S.intl.string(I.default["+QRSxc"]), variant: "critical" });
                    }
                }, [o]),
                [L, P] = r.useState(_);
            _ && !L && P(!0);
            let [U, G] = r.useState(!1),
                F = r.useCallback(() => {
                    (G(!1), p());
                }, [p]);
            (0, et.A)(F);
            let V = !L || U,
                H = V
                    ? S.intl.format(I.default["6GaRTu"], { link: eC })
                    : S.intl.format(I.default["Ke+kz5"], { pendingCount: T, link: eC });
            return (0, a.jsxs)(q.d, {
                transitionState: f,
                onClose: eE.tE,
                dismissable: !1,
                size: "md",
                "aria-label": S.intl.string(I.default.dMMSA0),
                children: [
                    U &&
                        (0, a.jsx)("div", {
                            className: ex.g,
                            children: (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Y.n,
                                text: S.intl.string(I.default.CLAQas),
                                onClick: () => G(!1),
                            }),
                        }),
                    (0, a.jsx)($.rQ, { alignCenter: !0, title: S.intl.string(I.default.dMMSA0), subtitle: H }),
                    (0, a.jsxs)(D.c, {
                        children: [
                            V &&
                                (0, a.jsx)(u.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(ei.r, { linkCode: b, expiresAt: j, onRefresh: p }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: V,
                                children: (0, a.jsx)(ev, { pendingRequests: C, linkedUsersProcessed: x }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(X.H, {
                        actionsFullWidth: !0,
                        actions:
                            L && !U
                                ? [
                                      {
                                          text: S.intl.string(I.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              G(!0);
                                          },
                                      },
                                      {
                                          text: S.intl.string(I.default.OaHZUf),
                                          variant: "primary",
                                          onClick: R,
                                          disabled: !v || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(ea, {}),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: ex.r,
                        children: S.intl.format(I.default["0DHxym"], {
                            handleLogOut: () => (0, O.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
        app_store_parental_revocation: (e) => {
            let { disabled: t } = e,
                n = r.useCallback(() => {
                    window.open(
                        "https://support.discord.com/hc/en-us/articles/42855178312087",
                        "_blank",
                        "noopener,noreferrer",
                    );
                }, []);
            return (0, a.jsx)(Z, {
                title: S.intl.string(I.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: S.intl.string(I.default["6FXIU6"]),
                        variant: "primary",
                        icon: z.I,
                        iconPosition: "end",
                        onClick: n,
                        disabled: t,
                    },
                ],
                children: (0, a.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            children: S.intl.string(I.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(u.B, {
                            children: [
                                (0, a.jsx)(d.D, {
                                    variant: "text-md/normal",
                                    children: S.intl.string(I.default.z1L5Wt),
                                }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: S.intl.string(I.default.BaI6L4),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
    eI = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = T(),
            r = eT[l.ui_component.component.type];
        return null == r
            ? null
            : (0, a.jsx)(r, {
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
    ey = n(700265);
let eN = {
        [y.EMAIL_VERIFICATION]: S.intl.string(I.default.HC4IiR),
        [y.REFRESH_APP]: S.intl.string(I.default.SzfxQ3),
        [y.AGE_VERIFICATION]: S.intl.string(I.default["dSkE/A"]),
        [y.PARENTAL_CONSENT_CONNECTION]: S.intl.string(I.default.dMMSA0),
        [y.APP_STORE_PARENTAL_REVOCATION]: S.intl.string(I.default.Z87TFb),
    },
    eb = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            i = !R.has(e.task_type);
        return (0, a.jsxs)(u.B, {
            direction: "vertical",
            justify: "space-between",
            padding: B,
            className: ey.k,
            children: [
                (0, a.jsxs)(u.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: ey.D,
                            children: S.intl.string(I.default["/OpRAP"]),
                        }),
                        i &&
                            (0, a.jsx)(u.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        eS.B,
                                        {
                                            title: eN[e.task_type] ?? "",
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
                    children: S.intl.format(I.default["0DHxym"], {
                        handleLogOut: () => (0, O.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var ej = n(450165);
let eR = n(843020);
function eM(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [s, o] = r.useState(t),
        u = r.useMemo(() => ({ task: s, setTask: o }), [s, o]);
    r.useEffect(() => {
        o(t);
    }, [t]);
    let d = j.has(s.task_type);
    return (0, a.jsxs)(_.Provider, {
        value: u,
        children: [!d && (0, a.jsx)(eb, {}), (0, a.jsx)(eI, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eO = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = r.useState(null),
        [A, v] = r.useState(!0),
        [E, _] = r.useState(null),
        [T, R] = r.useState(!1),
        w = r.useCallback(async () => {
            (v(!0), _(null));
            try {
                let e = await x();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && b.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: y.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: N.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                _(S.intl.string(I.default["/f++3g"]));
            } finally {
                v(!1);
            }
        }, [n]),
        L = r.useCallback(
            async (e) => {
                if (null !== i) {
                    R(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        (await C(t), w());
                    } catch (e) {
                        if (j.has(i.task_type)) throw e;
                        _(S.intl.string(I.default["+QRSxc"]));
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
    let P = r.useMemo(() => i?.task_type === y.AGE_VERIFICATION, [i]),
        k = null != i && null === E && j.has(i.task_type);
    return (0, a.jsxs)("div", {
        className: ej.Tp,
        children: [
            (0, a.jsx)("img", { className: ej.xX, src: eR, alt: "" }),
            P
                ? (0, a.jsx)(p.default, {
                      transitionState: t ?? s.ip.ENTERED,
                      entryPoint: f.q1.SAFETY_FLOWS,
                      onClose: eE.tE,
                      onComplete: async () => {
                          await L({ type: M.Empty });
                      },
                      dismissable: !1,
                  })
                : k && null != i
                  ? (0, a.jsx)(eM, { task: i, handleSubmit: L, disabled: T, transitionState: t ?? s.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: ej.nA,
                        children: A
                            ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: ej.kL,
                                  children: (0, a.jsxs)(u.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: ej.rf,
                                      children: [
                                          null !== E &&
                                              (0, a.jsxs)(u.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: ej.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(u.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(d.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: S.intl.string(S.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: S.intl.string(S.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)(u.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: S.intl.string(S.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, O.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  text: S.intl.string(S.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      w();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === E &&
                                              null != i &&
                                              (0, a.jsx)(eM, { task: i, handleSubmit: L, disabled: T }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
