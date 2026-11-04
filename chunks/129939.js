n.d(t, { A: () => eR });
var l,
    i,
    a = n(477900),
    r = n(582128),
    s = n(231723),
    o = n(289873),
    u = n(331322),
    d = n(534514),
    c = n(834730),
    m = n(821609),
    h = n(964486),
    f = n(171576),
    p = n(962877),
    g = n(240248),
    A = n(613412);
n(181658);
var v = n(499785),
    x = n(652215);
let E = r.createContext(null);
function C() {
    let e = r.useContext(E);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(742350),
    y = n(792996),
    T =
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
    b = new Set(Object.values(N)),
    j = new Set([10]),
    I = new Set([11]);
(y.intl.string(_.default["Qm6K/s"]),
    y.intl.string(_.default["dSkE/A"]),
    y.intl.string(_.default.dMMSA0),
    y.intl.string(_.default.Z87TFb));
var S = (((i = {}).Empty = "empty"), (i.VerificationCode = "verification_code"), i),
    R = n(627575),
    M = n(855986),
    O = n(155718),
    w = n(871309),
    P = n(287809),
    L = n(430993),
    k = n(503698),
    D = n.n(k),
    U = n(825484),
    F = n(745848);
function G(e) {
    let { actions: t, footerInput: n, actionsFullWidth: l = !1, showDivider: i = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: D()(F.qr, { [F.$6]: i }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(U.e, {
                      className: D()(F.GC, { [F.Z7]: l }),
                      justify: "end",
                      fullWidth: l,
                      children: t.map((e, t) => (0, a.jsx)(m.$, { ...e }, t)),
                  }),
              ],
          });
}
let V = { bottom: 40, left: 32, right: 32, top: 32 };
var H = n(588900);
function B(e) {
    let { children: t, actions: n, footerInput: l, title: i, variant: r = "default" } = e,
        s = "app_store_lockdown" === r;
    return (0, a.jsxs)(u.B, {
        direction: "vertical",
        justify: "start",
        padding: V,
        className: H.kL,
        children: [
            (0, a.jsx)(d.D, { variant: "heading-lg/semibold", className: s ? void 0 : H.R_, children: i }),
            (0, a.jsx)(L.c, { children: t }),
            (0, a.jsx)("div", { className: H.Ic }),
            (0, a.jsx)(G, { actions: n, footerInput: l, actionsFullWidth: s, showDivider: s }),
        ],
    });
}
var W = n(509434),
    Z = n(858899),
    z = n(224640),
    K = n(921853),
    q = n(20742),
    Y = n(696208),
    Q = n(695515),
    $ = n(491815),
    X = n(10005),
    J = n(453322),
    ee = n(834981),
    et = n(509914),
    en = n(196359);
function el() {
    return (0, a.jsx)(c.E, {
        variant: "body-md/normal",
        color: "text-subtle",
        className: en.Q,
        children: y.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                w.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var ei = n(191627),
    ea = n(778712),
    er = n(97808),
    es = n(939249),
    eo = n(947641),
    eu = n(789645),
    ed = n(486020),
    ec = n(923531);
let em = () => ({
    seconds: y.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: y.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var eh = n(665956),
    ef = n(838131);
function ep(e) {
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
        h = (0, M.bG)([P.default], () => P.default.getUser(n.parent_id)),
        f = h?.globalName ?? h?.username ?? n.parent_username,
        p = h?.username ?? n.parent_username,
        g = p !== f,
        A = h?.avatar ?? n.parent_avatar,
        { isConnected: v, isResolved: x } = (function (e) {
            let t = (0, M.bG)([Q.A], () => Q.A.getLinkedUsers()[e]?.link_status),
                [n, l] = r.useState(() =>
                    t === ei.Ef.ACTIVE ? "connected" : null == t || t === ei.Ef.PENDING ? null : "declined",
                ),
                [i, a] = r.useState(t);
            t !== i &&
                (a(t),
                t === ei.Ef.ACTIVE
                    ? l("connected")
                    : t === ei.Ef.PENDING
                      ? l(null)
                      : null != t
                        ? l("declined")
                        : null != i && i !== ei.Ef.ACTIVE && l("declined"));
            let s = "connected" === n,
                o = "declined" === n;
            return { isConnected: s, isDeclined: o, isResolved: s || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, ec.mV)(Date.parse(t), em)),
        C = ed.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, ea.FT)(ea._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: ef.nM,
        children: [
            (0, a.jsx)("div", {
                className: ef.R3,
                children: (0, a.jsx)(er.eu, { src: C, size: ea._3.SIZE_40, "aria-label": p }),
            }),
            (0, a.jsxs)("div", {
                className: ef.zH,
                children: [
                    (0, a.jsx)(c.E, {
                        variant: "body-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: f,
                    }),
                    g &&
                        (0, a.jsx)(c.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: p,
                        }),
                    (0, a.jsx)(c.E, { variant: "body-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            x
                ? (0, a.jsx)(c.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: y.intl.string(v ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: ef.o1,
                      children: [
                          !l &&
                              (0, a.jsx)(es.D, {
                                  "aria-label": y.intl.formatToPlainString(eh.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: D()(ef.hP, ef.xG),
                                  onClick: () => !u && d(n.parent_id),
                                  children: i
                                      ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(eo.r, { className: ef.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(es.D, {
                              "aria-label": y.intl.formatToPlainString(eh.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: D()(ef.hP, ef.rr),
                              onClick: () => !u && m(n.parent_id),
                              children: s
                                  ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(eu.P, { className: ef.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function eg(e) {
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
                i = (0, ee.xr)(),
                [a, s] = r.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: u,
                    isAcceptLoading: d,
                    isDeclineLoading: c,
                } = (0, X.A)({
                    onSuccess: () => s(null),
                    onError: () => {
                        (s(null), l());
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
                [v, x] = r.useState(t),
                [E, C] = r.useState(t),
                [_, y] = r.useState(n);
            return (
                n && !_
                    ? (y(!0),
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
                (0, Z.P0)({ text: y.intl.string(eh.default.Wu8BK2), variant: "critical" });
            },
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: ef.Nr,
              children: l.map((e) =>
                  (0, a.jsx)(
                      ep,
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
var eA = n(818348),
    ev = n(703687);
let ex = "https://support.discord.com/hc/articles/14155060633623";
var eE = n(846330);
let eC = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                l = r.useCallback(async () => {
                    (await t({ type: S.Empty }), window.location.reload());
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eE.kL,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-lg/semibold",
                        className: eE.DD,
                        children: y.intl.string(_.default.v52itt),
                    }),
                    (0, a.jsx)(c.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        className: eE.h_,
                        children: y.intl.string(_.default["5am8D3"]),
                    }),
                    (0, a.jsx)(u.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(m.$, {
                            variant: "primary",
                            text: y.intl.string(_.default["GDsHl+"]),
                            onClick: l,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, M.bG)([P.default], () => P.default.getCurrentUser());
            return (0, a.jsx)(B, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === O.Tk.UNVERIFIED
                                ? w.A.showAgeVerificationGetStartedModal({
                                      entryPoint: f.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: S.Empty }),
                                  })
                                : t({ type: S.Empty });
                        },
                    },
                ],
                children: (0, a.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(c.E, {
                            variant: "body-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, a.jsx)(c.E, {
                            variant: "body-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, a.jsx)(c.E, { variant: "body-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            var t;
            let n,
                l,
                { configData: i, onSubmit: o, disabled: d, transitionState: f = s.ip.ENTERED } = e,
                { getLinkCode: p } = (0, X.A)();
            (0, h.Ay)(() => {
                (0, $._z)();
            });
            let g = r.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = i ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [i]),
                A = (0, ee.VT)(),
                v = (0, ee.Du)(),
                x = (0, M.bG)([Q.A], () => Q.A.getLinkedUsers()),
                E = (0, M.bG)([Q.A], () => Q.A.getAreLinkedUsersProcessed()),
                C =
                    ((t = g.pending_requests),
                    (n = (0, M.bG)([Q.A], () => Q.A.getLinkedUsers())),
                    (l = (0, M.bG)([P.default], () => P.default.getCurrentUser()?.id)),
                    r.useMemo(() => {
                        if (!E) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            i = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== ei.Ef.PENDING || t.requestor_id === l) continue;
                            let n = P.default.getUser(t.user_id),
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
                T = E ? Object.values(x).some((e) => null != e) : g.pending_requests.length > 0,
                N = E ? A : g.pending_requests.length,
                b = (0, M.bG)([Q.A], () => Q.A.getLinkCode()),
                j = (0, M.bG)([Q.A], () => Q.A.getLinkCodeExpiresAt()),
                I = b ?? g.link_code,
                O = j ?? Date.parse(g.link_code_expires_at),
                w = r.useCallback(async () => {
                    try {
                        await o({ type: S.Empty });
                    } catch {
                        (0, Z.P0)({ text: y.intl.string(_.default["+QRSxc"]), variant: "critical" });
                    }
                }, [o]),
                [k, D] = r.useState(T);
            T && !k && D(!0);
            let [U, F] = r.useState(!1),
                G = r.useCallback(() => {
                    (F(!1), p());
                }, [p]);
            (0, J.A)(G);
            let V = !k || U,
                H = V
                    ? y.intl.format(_.default["6GaRTu"], { link: ex })
                    : y.intl.format(_.default["Ke+kz5"], { pendingCount: N, link: ex });
            return (0, a.jsxs)(z.d, {
                transitionState: f,
                onClose: eA.tE,
                dismissable: !1,
                size: "md",
                "aria-label": y.intl.string(_.default.dMMSA0),
                children: [
                    U &&
                        (0, a.jsx)("div", {
                            className: ev.g,
                            children: (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: K.n,
                                text: y.intl.string(_.default.CLAQas),
                                onClick: () => F(!1),
                            }),
                        }),
                    (0, a.jsx)(q.rQ, { alignCenter: !0, title: y.intl.string(_.default.dMMSA0), subtitle: H }),
                    (0, a.jsxs)(L.c, {
                        children: [
                            V &&
                                (0, a.jsx)(u.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(et.r, { linkCode: I, expiresAt: O, onRefresh: p }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: V,
                                children: (0, a.jsx)(eg, { pendingRequests: C, linkedUsersProcessed: E }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Y.H, {
                        actionsFullWidth: !0,
                        actions:
                            k && !U
                                ? [
                                      {
                                          text: y.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              F(!0);
                                          },
                                      },
                                      {
                                          text: y.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: w,
                                          disabled: !v || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(el, {}),
                    (0, a.jsx)(c.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        className: ev.r,
                        children: y.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, R.k)("safety_flows_parental_consent_connection"),
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
            return (0, a.jsx)(B, {
                title: y.intl.string(_.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: y.intl.string(_.default["6FXIU6"]),
                        variant: "primary",
                        icon: W.I,
                        iconPosition: "end",
                        onClick: n,
                        disabled: t,
                    },
                ],
                children: (0, a.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(c.E, {
                            variant: "body-md/normal",
                            color: "text-subtle",
                            children: y.intl.string(_.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(u.B, {
                            children: [
                                (0, a.jsx)(d.D, {
                                    variant: "body-md/normal",
                                    children: y.intl.string(_.default.z1L5Wt),
                                }),
                                (0, a.jsx)(c.E, {
                                    variant: "body-md/normal",
                                    color: "text-subtle",
                                    children: y.intl.string(_.default.BaI6L4),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
    e_ = (e) => {
        let { onSubmit: t, disabled: n, transitionState: l } = e,
            { task: i } = C(),
            r = eC[i.ui_component.component.type];
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
var ey = n(754302),
    eT = n(700265);
let eN = {
        [T.EMAIL_VERIFICATION]: y.intl.string(_.default.HC4IiR),
        [T.REFRESH_APP]: y.intl.string(_.default.SzfxQ3),
        [T.AGE_VERIFICATION]: y.intl.string(_.default["dSkE/A"]),
        [T.PARENTAL_CONSENT_CONNECTION]: y.intl.string(_.default.dMMSA0),
        [T.APP_STORE_PARENTAL_REVOCATION]: y.intl.string(_.default.Z87TFb),
    },
    eb = function () {
        let { task: e } = C(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            l = !I.has(e.task_type);
        return (0, a.jsxs)(u.B, {
            direction: "vertical",
            justify: "space-between",
            padding: V,
            className: eT.k,
            children: [
                (0, a.jsxs)(u.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(d.D, {
                            variant: "display-md",
                            className: eT.D,
                            children: y.intl.string(_.default["/OpRAP"]),
                        }),
                        l &&
                            (0, a.jsx)(u.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        ey.B,
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
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: y.intl.format(_.default["0DHxym"], {
                        handleLogOut: () => (0, R.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var ej = n(450165);
let eI = n(843020);
function eS(e) {
    let { task: t, handleSubmit: n, disabled: l, transitionState: i } = e,
        [s, o] = r.useState(t),
        u = r.useMemo(() => ({ task: s, setTask: o }), [s, o]);
    r.useEffect(() => {
        o(t);
    }, [t]);
    let d = j.has(s.task_type);
    return (0, a.jsxs)(E.Provider, {
        value: u,
        children: [!d && (0, a.jsx)(eb, {}), (0, a.jsx)(e_, { onSubmit: n, disabled: l, transitionState: i })],
    });
}
let eR = function (e) {
    let { transitionState: t, onClose: n } = e,
        [l, i] = r.useState(null),
        [E, C] = r.useState(!0),
        [I, M] = r.useState(null),
        [O, w] = r.useState(!1),
        P = r.useCallback(async () => {
            (C(!0), M(null));
            try {
                let e = await (async function () {
                    let e = await v.A.get({
                        url: x.Rsh.SAFETY_FLOWS_TASK,
                        trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
                        rejectWithError: !0,
                    });
                    return 204 === e.status ? null : e.body;
                })();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && b.has(e.ui_component.component.type)
                    ? i(e)
                    : i({
                          task_id: e.task_id,
                          task_type: T.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: N.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                M(y.intl.string(_.default["/f++3g"]));
            } finally {
                C(!1);
            }
        }, [n]),
        L = r.useCallback(
            async (e) => {
                if (null !== l) {
                    w(!0);
                    try {
                        let t = { task_id: l.task_id, flow_id: l.flow_context.flow_id, data: e };
                        (await (async function (e) {
                            return (
                                await v.A.post({
                                    url: x.Rsh.SAFETY_FLOWS_TASK,
                                    body: e,
                                    trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
                                    rejectWithError: !0,
                                })
                            ).body;
                        })(t),
                            P());
                    } catch (e) {
                        if (j.has(l.task_type)) throw e;
                        M(y.intl.string(_.default["+QRSxc"]));
                    } finally {
                        w(!1);
                    }
                }
            },
            [l, P],
        );
    (0, h.Ay)(() => {
        P();
    });
    let k = r.useMemo(() => l?.task_type === T.AGE_VERIFICATION, [l]),
        D = null != l && null === I && j.has(l.task_type);
    return (0, a.jsxs)("div", {
        className: ej.Tp,
        children: [
            (0, a.jsx)("img", { className: ej.xX, src: eI, alt: "" }),
            k
                ? (0, a.jsx)(p.default, {
                      transitionState: t ?? s.ip.ENTERED,
                      entryPoint: f.q1.SAFETY_FLOWS,
                      onClose: eA.tE,
                      onComplete: async () => {
                          await L({ type: S.Empty });
                      },
                      dismissable: !1,
                  })
                : D && null != l
                  ? (0, a.jsx)(eS, { task: l, handleSubmit: L, disabled: O, transitionState: t ?? s.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: ej.nA,
                        children: E
                            ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: ej.kL,
                                  children: (0, a.jsxs)(u.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: ej.rf,
                                      children: [
                                          null !== I &&
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
                                                                  children: y.intl.string(y.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(c.E, {
                                                                  variant: "body-md/normal",
                                                                  color: "text-muted",
                                                                  children: y.intl.string(y.t.ZUEGFn),
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
                                                                  text: y.intl.string(y.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, R.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  text: y.intl.string(y.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      P();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === I &&
                                              null != l &&
                                              (0, a.jsx)(eS, { task: l, handleSubmit: L, disabled: O }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
