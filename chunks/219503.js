n.d(t, { A: () => eL });
var i,
    l,
    a = n(477900),
    r = n(582128),
    s = n(231723),
    o = n(289873),
    d = n(331322),
    c = n(297264),
    u = n(834730),
    m = n(821609),
    h = n(964486),
    f = n(306537),
    p = n(595746),
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
    y = new Set(Object.values(j)),
    N = new Set([10]),
    R = new Set([11]);
(b.intl.string(I.default["Qm6K/s"]),
    b.intl.string(I.default["dSkE/A"]),
    b.intl.string(I.default.dMMSA0),
    b.intl.string(I.default.Z87TFb));
var M = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    O = n(627575),
    w = n(17928),
    L = n(155718),
    k = n(379257),
    P = n(287809),
    D = n(430993),
    U = n(503698),
    F = n.n(U),
    G = n(825484),
    V = n(745848);
function H(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: l = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: F()(V.qr, { [V.$6]: l }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(G.e, {
                      className: F()(V.GC, { [V.Z7]: i }),
                      justify: "end",
                      fullWidth: i,
                      children: t.map((e, t) => (0, a.jsx)(m.$, { ...e }, t)),
                  }),
              ],
          });
}
let B = { bottom: 40, left: 32, right: 32, top: 32 };
var W = n(588900);
function z(e) {
    let { children: t, actions: n, footerInput: i, title: l, variant: r = "default" } = e,
        s = "app_store_lockdown" === r;
    return (0, a.jsxs)(d.B, {
        direction: "vertical",
        justify: "start",
        padding: B,
        className: W.kL,
        children: [
            (0, a.jsx)(c.D, { variant: "heading-lg/semibold", className: s ? void 0 : W.R_, children: l }),
            (0, a.jsx)(D.c, { children: t }),
            (0, a.jsx)("div", { className: W.Ic }),
            (0, a.jsx)(H, { actions: n, footerInput: i, actionsFullWidth: s, showDivider: s }),
        ],
    });
}
var Z = n(509434),
    K = n(376357),
    q = n(857250),
    Y = n(97483),
    $ = n(224640),
    X = n(921853),
    Q = n(20742),
    J = n(696208),
    ee = n(695515),
    et = n(794364),
    en = n(10005),
    ei = n(453322),
    el = n(834981),
    ea = n(22071),
    er = n(196359);
function es() {
    return (0, a.jsx)(u.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: er.Q,
        children: b.intl.format(I.default.ifObbX, {
            handleAgeVerifyHook: () =>
                k.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var eo = n(191627),
    ed = n(778712),
    ec = n(97808),
    eu = n(939249),
    em = n(947641),
    eh = n(789645),
    ef = n(486020),
    ep = n(923531);
let eg = () => ({
    seconds: b.intl.string(I.default.M4NOO3),
    minutes: I.default["9nem85"],
    hours: I.default.sJjWRY,
    yesterday: b.intl.string(I.default["7SxW32"]),
    days: I.default.tVHevX,
    date: I.default.q6jzya,
});
var eA = n(513687),
    ev = n(838131);
function ex(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: l,
            isDeclineLoading: s,
            actionsDisabled: d,
            onAccept: c,
            onDecline: m,
        } = e,
        h = (0, w.bG)([P.default], () => P.default.getUser(n.parent_id)),
        f = h?.globalName ?? h?.username ?? n.parent_username,
        p = h?.username ?? n.parent_username,
        g = p !== f,
        A = h?.avatar ?? n.parent_avatar,
        { isConnected: v, isResolved: x } = (function (e) {
            let t = (0, w.bG)([ee.A], () => ee.A.getLinkedUsers()[e]?.link_status),
                [n, i] = r.useState(() =>
                    t === eo.Ef.ACTIVE ? "connected" : null == t || t === eo.Ef.PENDING ? null : "declined",
                ),
                [l, a] = r.useState(t);
            t !== l &&
                (a(t),
                t === eo.Ef.ACTIVE
                    ? i("connected")
                    : t === eo.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== eo.Ef.ACTIVE && i("declined"));
            let s = "connected" === n,
                o = "declined" === n;
            return { isConnected: s, isDeclined: o, isResolved: s || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, ep.mV)(Date.parse(t), eg)),
        C = ef.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, ed.FT)(ed._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: ev.nM,
        children: [
            (0, a.jsx)("div", {
                className: ev.R3,
                children: (0, a.jsx)(ec.eu, { src: C, size: ed._3.SIZE_40, "aria-label": p }),
            }),
            (0, a.jsxs)("div", {
                className: ev.zH,
                children: [
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: f,
                    }),
                    g &&
                        (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: p,
                        }),
                    (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            x
                ? (0, a.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: b.intl.string(v ? I.default.YQP5dE : I.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: ev.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(eu.D, {
                                  "aria-label": b.intl.formatToPlainString(eA.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: F()(ev.hP, ev.xG),
                                  onClick: () => !d && c(n.parent_id),
                                  children: l
                                      ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(em.r, { className: ev.gE, color: "currentColor" }),
                              }),
                          (0, a.jsx)(eu.D, {
                              "aria-label": b.intl.formatToPlainString(eA.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: F()(ev.hP, ev.rr),
                              onClick: () => !d && m(n.parent_id),
                              children: s
                                  ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(eh.P, { className: ev.gE, color: "currentColor" }),
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
            hasMaxConnections: l,
            actioningUserId: s,
            isAcceptLoading: o,
            isDeclineLoading: d,
            actionsDisabled: c,
            handleAccept: u,
            handleDecline: m,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                l = (0, el.xr)(),
                [a, s] = r.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: d,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                } = (0, en.A)({
                    onSuccess: () => s(null),
                    onError: () => {
                        (s(null), i());
                    },
                }),
                m = c || u,
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
                        m || (p(e), s(e), d(e));
                    },
                    [m, p, d],
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
                (0, K.P)((0, q.o)(b.intl.string(eA.default.Wu8BK2), Y.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, a.jsx)("div", {
              className: ev.Nr,
              children: i.map((e) =>
                  (0, a.jsx)(
                      ex,
                      {
                          request: e,
                          hasMaxConnections: l,
                          isAcceptLoading: o && s === e.parent_id,
                          isDeclineLoading: d && s === e.parent_id,
                          actionsDisabled: c,
                          onAccept: u,
                          onDecline: m,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var eC = n(818348),
    e_ = n(703687);
let eT = "https://support.discord.com/hc/articles/14155060633623";
var eI = n(846330);
let eb = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = r.useCallback(async () => {
                    (await t({ type: M.Empty }), window.location.reload());
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eI.kL,
                children: [
                    (0, a.jsx)(c.D, {
                        variant: "heading-lg/bold",
                        className: eI.DD,
                        children: b.intl.string(I.default.v52itt),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eI.h_,
                        children: b.intl.string(I.default["5am8D3"]),
                    }),
                    (0, a.jsx)(d.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, a.jsx)(m.$, {
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
                n = (0, w.bG)([P.default], () => P.default.getCurrentUser());
            return (0, a.jsx)(z, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === L.Tk.UNVERIFIED
                                ? k.A.showAgeVerificationGetStartedModal({
                                      entryPoint: f.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: M.Empty }),
                                  })
                                : t({ type: M.Empty });
                        },
                    },
                ],
                children: (0, a.jsxs)(d.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, a.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, a.jsx)(u.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            var t;
            let n,
                i,
                { configData: l, onSubmit: o, disabled: c, transitionState: f = s.ip.ENTERED } = e,
                { getLinkCode: p } = (0, en.A)();
            (0, h.Ay)(() => {
                (0, et._z)();
            });
            let g = r.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                A = (0, el.VT)(),
                v = (0, el.Du)(),
                x = (0, w.bG)([ee.A], () => ee.A.getLinkedUsers()),
                E = (0, w.bG)([ee.A], () => ee.A.getAreLinkedUsersProcessed()),
                C =
                    ((t = g.pending_requests),
                    (n = (0, w.bG)([ee.A], () => ee.A.getLinkedUsers())),
                    (i = (0, w.bG)([P.default], () => P.default.getCurrentUser()?.id)),
                    r.useMemo(() => {
                        if (!E) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== eo.Ef.PENDING || t.requestor_id === i) continue;
                            let n = P.default.getUser(t.user_id),
                                a = e.get(t.user_id);
                            l.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? a?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? a?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return l;
                    }, [E, n, i, t])),
                _ = E ? Object.values(x).some((e) => null != e) : g.pending_requests.length > 0,
                T = E ? A : g.pending_requests.length,
                S = (0, w.bG)([ee.A], () => ee.A.getLinkCode()),
                j = (0, w.bG)([ee.A], () => ee.A.getLinkCodeExpiresAt()),
                y = S ?? g.link_code,
                N = j ?? Date.parse(g.link_code_expires_at),
                R = r.useCallback(async () => {
                    try {
                        await o({ type: M.Empty });
                    } catch {
                        (0, K.P)((0, q.o)(b.intl.string(I.default["+QRSxc"]), Y.Ck.FAILURE));
                    }
                }, [o]),
                [L, k] = r.useState(_);
            _ && !L && k(!0);
            let [U, F] = r.useState(!1),
                G = r.useCallback(() => {
                    (F(!1), p());
                }, [p]);
            (0, ei.A)(G);
            let V = !L || U,
                H = V
                    ? b.intl.format(I.default["6GaRTu"], { link: eT })
                    : b.intl.format(I.default["Ke+kz5"], { pendingCount: T, link: eT });
            return (0, a.jsxs)($.d, {
                transitionState: f,
                onClose: eC.tE,
                dismissable: !1,
                size: "md",
                "aria-label": b.intl.string(I.default.dMMSA0),
                children: [
                    U &&
                        (0, a.jsx)("div", {
                            className: e_.g,
                            children: (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: X.n,
                                text: b.intl.string(I.default.CLAQas),
                                onClick: () => F(!1),
                            }),
                        }),
                    (0, a.jsx)(Q.rQ, { alignCenter: !0, title: b.intl.string(I.default.dMMSA0), subtitle: H }),
                    (0, a.jsxs)(D.c, {
                        children: [
                            V &&
                                (0, a.jsx)(d.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(ea.r, { linkCode: y, expiresAt: N, onRefresh: p }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: V,
                                children: (0, a.jsx)(eE, { pendingRequests: C, linkedUsersProcessed: E }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(J.H, {
                        actionsFullWidth: !0,
                        actions:
                            L && !U
                                ? [
                                      {
                                          text: b.intl.string(I.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              F(!0);
                                          },
                                      },
                                      {
                                          text: b.intl.string(I.default.OaHZUf),
                                          variant: "primary",
                                          onClick: R,
                                          disabled: !v || c,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(es, {}),
                    (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: e_.r,
                        children: b.intl.format(I.default["0DHxym"], {
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
                children: (0, a.jsxs)(d.B, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            children: b.intl.string(I.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(d.B, {
                            children: [
                                (0, a.jsx)(c.D, {
                                    variant: "text-md/normal",
                                    children: b.intl.string(I.default.z1L5Wt),
                                }),
                                (0, a.jsx)(u.E, {
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
    eS = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = T(),
            r = eb[l.ui_component.component.type];
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
var ej = n(754302),
    ey = n(700265);
let eN = {
        [S.EMAIL_VERIFICATION]: b.intl.string(I.default.HC4IiR),
        [S.REFRESH_APP]: b.intl.string(I.default.SzfxQ3),
        [S.AGE_VERIFICATION]: b.intl.string(I.default["dSkE/A"]),
        [S.PARENTAL_CONSENT_CONNECTION]: b.intl.string(I.default.dMMSA0),
        [S.APP_STORE_PARENTAL_REVOCATION]: b.intl.string(I.default.Z87TFb),
    },
    eR = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            i = !R.has(e.task_type);
        return (0, a.jsxs)(d.B, {
            direction: "vertical",
            justify: "space-between",
            padding: B,
            className: ey.k,
            children: [
                (0, a.jsxs)(d.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            className: ey.D,
                            children: b.intl.string(I.default["/OpRAP"]),
                        }),
                        i &&
                            (0, a.jsx)(d.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        ej.B,
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
                (0, a.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: b.intl.format(I.default["0DHxym"], {
                        handleLogOut: () => (0, O.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eM = n(450165);
let eO = n(843020);
function ew(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [s, o] = r.useState(t),
        d = r.useMemo(() => ({ task: s, setTask: o }), [s, o]);
    r.useEffect(() => {
        o(t);
    }, [t]);
    let c = N.has(s.task_type);
    return (0, a.jsxs)(_.Provider, {
        value: d,
        children: [!c && (0, a.jsx)(eR, {}), (0, a.jsx)(eS, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eL = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = r.useState(null),
        [A, v] = r.useState(!0),
        [x, _] = r.useState(null),
        [T, R] = r.useState(!1),
        w = r.useCallback(async () => {
            (v(!0), _(null));
            try {
                let e = await E();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && y.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: S.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: j.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                _(b.intl.string(I.default["/f++3g"]));
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
                        if (N.has(i.task_type)) throw e;
                        _(b.intl.string(I.default["+QRSxc"]));
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
    let k = r.useMemo(() => i?.task_type === S.AGE_VERIFICATION, [i]),
        P = null != i && null === x && N.has(i.task_type);
    return (0, a.jsxs)("div", {
        className: eM.Tp,
        children: [
            (0, a.jsx)("img", { className: eM.xX, src: eO, alt: "" }),
            k
                ? (0, a.jsx)(p.default, {
                      transitionState: t ?? s.ip.ENTERED,
                      entryPoint: f.q1.SAFETY_FLOWS,
                      onClose: eC.tE,
                      onComplete: async () => {
                          await L({ type: M.Empty });
                      },
                      dismissable: !1,
                  })
                : P && null != i
                  ? (0, a.jsx)(ew, { task: i, handleSubmit: L, disabled: T, transitionState: t ?? s.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: eM.nA,
                        children: A
                            ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: eM.kL,
                                  children: (0, a.jsxs)(d.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eM.rf,
                                      children: [
                                          null !== x &&
                                              (0, a.jsxs)(d.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eM.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(d.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(c.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: b.intl.string(b.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(u.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: b.intl.string(b.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)(d.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: b.intl.string(b.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, O.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, a.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  text: b.intl.string(b.t["7NqTJn"]),
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
                                              (0, a.jsx)(ew, { task: i, handleSubmit: L, disabled: T }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
