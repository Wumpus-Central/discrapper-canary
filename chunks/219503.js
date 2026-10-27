n.d(t, { A: () => eO });
var l,
    i,
    a = n(477900),
    r = n(582128),
    s = n(231723),
    o = n(289873),
    u = n(331322),
    d = n(297264),
    c = n(834730),
    m = n(821609),
    h = n(964486),
    p = n(306537),
    f = n(595746),
    g = n(240248),
    A = n(562708);
n(181658);
var v = n(499785),
    x = n(652215);
async function E() {
    let e = await v.A.get({
        url: x.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function C(e) {
    return (
        await v.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
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
var y = n(730215),
    I = n(105292),
    S =
        (((l = {})[(l.REFRESH_APP = -1)] = "REFRESH_APP"),
        (l[(l.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (l[(l.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (l[(l.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        (l[(l.APP_STORE_PARENTAL_REVOCATION = 11)] = "APP_STORE_PARENTAL_REVOCATION"),
        l);
let N = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
        APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation",
    },
    j = new Set(Object.values(N)),
    b = new Set([10]),
    R = new Set([11]);
(I.intl.string(y.default["Qm6K/s"]),
    I.intl.string(y.default["dSkE/A"]),
    I.intl.string(y.default.dMMSA0),
    I.intl.string(y.default.Z87TFb));
var M = (((i = {}).Empty = "empty"), (i.VerificationCode = "verification_code"), i),
    O = n(627575),
    w = n(17928),
    P = n(155718),
    L = n(379257),
    k = n(287809),
    D = n(430993),
    U = n(503698),
    G = n.n(U),
    F = n(825484),
    H = n(745848);
function V(e) {
    let { actions: t, footerInput: n, actionsFullWidth: l = !1, showDivider: i = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: G()(H.qr, { [H.$6]: i }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(F.e, {
                      className: G()(H.GC, { [H.Z7]: l }),
                      justify: "end",
                      fullWidth: l,
                      children: t.map((e, t) => (0, a.jsx)(m.$, { ...e }, t)),
                  }),
              ],
          });
}
let B = { bottom: 40, left: 32, right: 32, top: 32 };
var W = n(588900);
function z(e) {
    let { children: t, actions: n, footerInput: l, title: i, variant: r = "default" } = e,
        s = "app_store_lockdown" === r;
    return (0, a.jsxs)(u.B, {
        direction: "vertical",
        justify: "start",
        padding: B,
        className: W.kL,
        children: [
            (0, a.jsx)(d.D, { variant: "heading-lg/semibold", className: s ? void 0 : W.R_, children: i }),
            (0, a.jsx)(D.c, { children: t }),
            (0, a.jsx)("div", { className: W.Ic }),
            (0, a.jsx)(V, { actions: n, footerInput: l, actionsFullWidth: s, showDivider: s }),
        ],
    });
}
var Z = n(509434),
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
    el = n(22071),
    ei = n(196359);
function ea() {
    return (0, a.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: ei.Q,
        children: I.intl.format(y.default.ifObbX, {
            handleAgeVerifyHook: () =>
                L.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.PARENTAL_CONSENT_LOCKOUT }),
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
let ep = () => ({
    seconds: I.intl.string(y.default.M4NOO3),
    minutes: y.default["9nem85"],
    hours: y.default.sJjWRY,
    yesterday: I.intl.string(y.default["7SxW32"]),
    days: y.default.tVHevX,
    date: y.default.q6jzya,
});
var ef = n(513687),
    eg = n(838131);
function eA(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: l,
            isAcceptLoading: i,
            isDeclineLoading: s,
            actionsDisabled: u,
            onAccept: d,
            onDecline: m,
        } = e,
        h = (0, w.bG)([k.default], () => k.default.getUser(n.parent_id)),
        p = h?.globalName ?? h?.username ?? n.parent_username,
        f = h?.username ?? n.parent_username,
        g = f !== p,
        A = h?.avatar ?? n.parent_avatar,
        { isConnected: v, isResolved: x } = (function (e) {
            let t = (0, w.bG)([Q.A], () => Q.A.getLinkedUsers()[e]?.link_status),
                [n, l] = r.useState(() =>
                    t === er.Ef.ACTIVE ? "connected" : null == t || t === er.Ef.PENDING ? null : "declined",
                ),
                [i, a] = r.useState(t);
            t !== i &&
                (a(t),
                t === er.Ef.ACTIVE
                    ? l("connected")
                    : t === er.Ef.PENDING
                      ? l(null)
                      : null != t
                        ? l("declined")
                        : null != i && i !== er.Ef.ACTIVE && l("declined"));
            let s = "connected" === n,
                o = "declined" === n;
            return { isConnected: s, isDeclined: o, isResolved: s || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, eh.mV)(Date.parse(t), ep)),
        C = em.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, es.FT)(es._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: eg.nM,
        children: [
            (0, a.jsx)("div", {
                className: eg.R3,
                children: (0, a.jsx)(eo.eu, { src: C, size: es._3.SIZE_40, "aria-label": f }),
            }),
            (0, a.jsxs)("div", {
                className: eg.zH,
                children: [
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: p,
                    }),
                    g &&
                        (0, a.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: f,
                        }),
                    (0, a.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            x
                ? (0, a.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: I.intl.string(v ? y.default.YQP5dE : y.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: eg.o1,
                      children: [
                          !l &&
                              (0, a.jsx)(eu.D, {
                                  "aria-label": I.intl.formatToPlainString(ef.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: G()(eg.hP, eg.xG),
                                  onClick: () => !u && d(n.parent_id),
                                  children: i
                                      ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(ed.r, { className: eg.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(eu.D, {
                              "aria-label": I.intl.formatToPlainString(ef.default["4GtllP"], {
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
            seenRequests: l,
            hasMaxConnections: i,
            actioningUserId: s,
            isAcceptLoading: o,
            isDeclineLoading: u,
            actionsDisabled: d,
            handleAccept: c,
            handleDecline: m,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: l } = e,
                i = (0, en.xr)(),
                [a, s] = r.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: u,
                    isAcceptLoading: d,
                    isDeclineLoading: c,
                } = (0, ee.A)({
                    onSuccess: () => s(null),
                    onError: () => {
                        (s(null), l());
                    },
                }),
                m = d || c,
                [h, p] = r.useState(() => new Set()),
                f = r.useCallback((e) => {
                    p((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return (n.add(e), n);
                    });
                }, []),
                g = r.useCallback(
                    (e) => {
                        m || (f(e), s(e), o(e));
                    },
                    [m, f, o],
                ),
                A = r.useCallback(
                    (e) => {
                        m || (f(e), s(e), u(e));
                    },
                    [m, f, u],
                ),
                [v, x] = r.useState(t),
                [E, C] = r.useState(t),
                [_, T] = r.useState(n);
            return (
                n && !_
                    ? (T(!0),
                      C(t),
                      x((e) => {
                          let n = new Map();
                          for (let t of e) h.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== E &&
                      (C(t),
                      x((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: v,
                    hasMaxConnections: i,
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
                (0, K.P0)({ text: I.intl.string(ef.default.Wu8BK2), variant: "critical" });
            },
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: eg.Nr,
              children: l.map((e) =>
                  (0, a.jsx)(
                      eA,
                      {
                          request: e,
                          hasMaxConnections: i,
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
var ex = n(818348),
    eE = n(703687);
let eC = "https://support.discord.com/hc/articles/14155060633623";
var e_ = n(846330);
let eT = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                l = r.useCallback(async () => {
                    (await t({ type: M.Empty }), window.location.reload());
                }, [t]);
            return (0, a.jsxs)("div", {
                className: e_.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: e_.DD,
                        children: I.intl.string(y.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: e_.h_,
                        children: I.intl.string(y.default["5am8D3"]),
                    }),
                    (0, a.jsx)(u.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(m.$, {
                            variant: "primary",
                            text: I.intl.string(y.default["GDsHl+"]),
                            onClick: l,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, w.bG)([k.default], () => k.default.getCurrentUser());
            return (0, a.jsx)(z, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === P.Tk.UNVERIFIED
                                ? L.A.showAgeVerificationGetStartedModal({
                                      entryPoint: p.q1.SAFETY_FLOWS,
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
                l,
                { configData: i, onSubmit: o, disabled: d, transitionState: p = s.ip.ENTERED } = e,
                { getLinkCode: f } = (0, ee.A)();
            (0, h.Ay)(() => {
                (0, J._z)();
            });
            let g = r.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = i ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [i]),
                A = (0, en.VT)(),
                v = (0, en.Du)(),
                x = (0, w.bG)([Q.A], () => Q.A.getLinkedUsers()),
                E = (0, w.bG)([Q.A], () => Q.A.getAreLinkedUsersProcessed()),
                C =
                    ((t = g.pending_requests),
                    (n = (0, w.bG)([Q.A], () => Q.A.getLinkedUsers())),
                    (l = (0, w.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                    r.useMemo(() => {
                        if (!E) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            i = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== er.Ef.PENDING || t.requestor_id === l) continue;
                            let n = k.default.getUser(t.user_id),
                                a = e.get(t.user_id);
                            i.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? a?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? a?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return i;
                    }, [E, n, l, t])),
                _ = E ? Object.values(x).some((e) => null != e) : g.pending_requests.length > 0,
                T = E ? A : g.pending_requests.length,
                S = (0, w.bG)([Q.A], () => Q.A.getLinkCode()),
                N = (0, w.bG)([Q.A], () => Q.A.getLinkCodeExpiresAt()),
                j = S ?? g.link_code,
                b = N ?? Date.parse(g.link_code_expires_at),
                R = r.useCallback(async () => {
                    try {
                        await o({ type: M.Empty });
                    } catch {
                        (0, K.P0)({ text: I.intl.string(y.default["+QRSxc"]), variant: "critical" });
                    }
                }, [o]),
                [P, L] = r.useState(_);
            _ && !P && L(!0);
            let [U, G] = r.useState(!1),
                F = r.useCallback(() => {
                    (G(!1), f());
                }, [f]);
            (0, et.A)(F);
            let H = !P || U,
                V = H
                    ? I.intl.format(y.default["6GaRTu"], { link: eC })
                    : I.intl.format(y.default["Ke+kz5"], { pendingCount: T, link: eC });
            return (0, a.jsxs)(q.d, {
                transitionState: p,
                onClose: ex.tE,
                dismissable: !1,
                size: "md",
                "aria-label": I.intl.string(y.default.dMMSA0),
                children: [
                    U &&
                        (0, a.jsx)("div", {
                            className: eE.g,
                            children: (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Y.n,
                                text: I.intl.string(y.default.CLAQas),
                                onClick: () => G(!1),
                            }),
                        }),
                    (0, a.jsx)($.rQ, { alignCenter: !0, title: I.intl.string(y.default.dMMSA0), subtitle: V }),
                    (0, a.jsxs)(D.c, {
                        children: [
                            H &&
                                (0, a.jsx)(u.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(el.r, { linkCode: j, expiresAt: b, onRefresh: f }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: H,
                                children: (0, a.jsx)(ev, { pendingRequests: C, linkedUsersProcessed: E }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(X.H, {
                        actionsFullWidth: !0,
                        actions:
                            P && !U
                                ? [
                                      {
                                          text: I.intl.string(y.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              G(!0);
                                          },
                                      },
                                      {
                                          text: I.intl.string(y.default.OaHZUf),
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
                        className: eE.r,
                        children: I.intl.format(y.default["0DHxym"], {
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
            return (0, a.jsx)(z, {
                title: I.intl.string(y.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: I.intl.string(y.default["6FXIU6"]),
                        variant: "primary",
                        icon: Z.I,
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
                            children: I.intl.string(y.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(u.B, {
                            children: [
                                (0, a.jsx)(d.D, {
                                    variant: "text-md/normal",
                                    children: I.intl.string(y.default.z1L5Wt),
                                }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: I.intl.string(y.default.BaI6L4),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
    ey = (e) => {
        let { onSubmit: t, disabled: n, transitionState: l } = e,
            { task: i } = T(),
            r = eT[i.ui_component.component.type];
        return null == r
            ? null
            : (0, a.jsx)(r, {
                  configData: i.ui_component.component,
                  onSubmit: t,
                  taskId: i.task_id,
                  flowId: i.flow_context?.flow_id,
                  assignmentId: i.assignment_id,
                  disabled: n,
                  transitionState: l,
              });
    };
var eI = n(754302),
    eS = n(700265);
let eN = {
        [S.EMAIL_VERIFICATION]: I.intl.string(y.default.HC4IiR),
        [S.REFRESH_APP]: I.intl.string(y.default.SzfxQ3),
        [S.AGE_VERIFICATION]: I.intl.string(y.default["dSkE/A"]),
        [S.PARENTAL_CONSENT_CONNECTION]: I.intl.string(y.default.dMMSA0),
        [S.APP_STORE_PARENTAL_REVOCATION]: I.intl.string(y.default.Z87TFb),
    },
    ej = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            l = !R.has(e.task_type);
        return (0, a.jsxs)(u.B, {
            direction: "vertical",
            justify: "space-between",
            padding: B,
            className: eS.k,
            children: [
                (0, a.jsxs)(u.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: eS.D,
                            children: I.intl.string(y.default["/OpRAP"]),
                        }),
                        l &&
                            (0, a.jsx)(u.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        eI.B,
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
                    children: I.intl.format(y.default["0DHxym"], {
                        handleLogOut: () => (0, O.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eb = n(450165);
let eR = n(843020);
function eM(e) {
    let { task: t, handleSubmit: n, disabled: l, transitionState: i } = e,
        [s, o] = r.useState(t),
        u = r.useMemo(() => ({ task: s, setTask: o }), [s, o]);
    r.useEffect(() => {
        o(t);
    }, [t]);
    let d = b.has(s.task_type);
    return (0, a.jsxs)(_.Provider, {
        value: u,
        children: [!d && (0, a.jsx)(ej, {}), (0, a.jsx)(ey, { onSubmit: n, disabled: l, transitionState: i })],
    });
}
let eO = function (e) {
    let { transitionState: t, onClose: n } = e,
        [l, i] = r.useState(null),
        [A, v] = r.useState(!0),
        [x, _] = r.useState(null),
        [T, R] = r.useState(!1),
        w = r.useCallback(async () => {
            (v(!0), _(null));
            try {
                let e = await E();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && j.has(e.ui_component.component.type)
                    ? i(e)
                    : i({
                          task_id: e.task_id,
                          task_type: S.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: N.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                _(I.intl.string(y.default["/f++3g"]));
            } finally {
                v(!1);
            }
        }, [n]),
        P = r.useCallback(
            async (e) => {
                if (null !== l) {
                    R(!0);
                    try {
                        let t = { task_id: l.task_id, flow_id: l.flow_context.flow_id, data: e };
                        (await C(t), w());
                    } catch (e) {
                        if (b.has(l.task_type)) throw e;
                        _(I.intl.string(y.default["+QRSxc"]));
                    } finally {
                        R(!1);
                    }
                }
            },
            [l, w],
        );
    (0, h.Ay)(() => {
        w();
    });
    let L = r.useMemo(() => l?.task_type === S.AGE_VERIFICATION, [l]),
        k = null != l && null === x && b.has(l.task_type);
    return (0, a.jsxs)("div", {
        className: eb.Tp,
        children: [
            (0, a.jsx)("img", { className: eb.xX, src: eR, alt: "" }),
            L
                ? (0, a.jsx)(f.default, {
                      transitionState: t ?? s.ip.ENTERED,
                      entryPoint: p.q1.SAFETY_FLOWS,
                      onClose: ex.tE,
                      onComplete: async () => {
                          await P({ type: M.Empty });
                      },
                      dismissable: !1,
                  })
                : k && null != l
                  ? (0, a.jsx)(eM, { task: l, handleSubmit: P, disabled: T, transitionState: t ?? s.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: eb.nA,
                        children: A
                            ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: eb.kL,
                                  children: (0, a.jsxs)(u.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eb.rf,
                                      children: [
                                          null !== x &&
                                              (0, a.jsxs)(u.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eb.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(u.B, {
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
                                                      (0, a.jsxs)(u.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: I.intl.string(I.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, O.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  text: I.intl.string(I.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      w();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === x &&
                                              null != l &&
                                              (0, a.jsx)(eM, { task: l, handleSubmit: P, disabled: T }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
