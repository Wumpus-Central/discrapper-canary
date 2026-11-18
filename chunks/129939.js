n.d(t, { A: () => eR });
var i,
    l,
    a = n(477900),
    r = n(582128),
    s = n(231723),
    o = n(289873),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    m = n(821609),
    p = n(964486),
    f = n(171576),
    h = n(962877),
    g = n(240248),
    A = n(613412);
n(181658);
var C = n(499785),
    x = n(652215);
let E = r.createContext(null);
function v() {
    let e = r.useContext(E);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(742350),
    y = n(792996),
    b =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        (i[(i.APP_STORE_PARENTAL_REVOCATION = 11)] = "APP_STORE_PARENTAL_REVOCATION"),
        i);
let T = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
        APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation",
    },
    S = new Set(Object.values(T)),
    I = new Set([10]),
    N = new Set([11]);
(y.intl.string(_.default["Qm6K/s"]),
    y.intl.string(_.default["dSkE/A"]),
    y.intl.string(_.default.dMMSA0),
    y.intl.string(_.default.Z87TFb));
var j = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    R = n(627575),
    O = n(855986),
    M = n(155718),
    P = n(871309),
    k = n(287809),
    L = n(430993),
    w = n(503698),
    D = n.n(w),
    U = n(825484),
    G = n(745848);
function F(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: l = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, a.jsxs)("footer", {
              className: D()(G.qr, { [G.$6]: l }),
              children: [
                  null != n && (0, a.jsx)("div", { children: n }),
                  (0, a.jsx)(U.e, {
                      className: D()(G.GC, { [G.Z7]: i }),
                      justify: "end",
                      fullWidth: i,
                      children: t.map((e, t) => (0, a.jsx)(m.$, { ...e }, t)),
                  }),
              ],
          });
}
let B = { bottom: 40, left: 32, right: 32, top: 32 };
var V = n(588900);
function H(e) {
    let { children: t, actions: n, footerInput: i, title: l, variant: r = "default" } = e,
        s = "app_store_lockdown" === r;
    return (0, a.jsxs)(u.B, {
        direction: "vertical",
        justify: "start",
        padding: B,
        className: V.kL,
        children: [
            (0, a.jsx)(c.D, { variant: "heading-lg/semibold", className: s ? void 0 : V.R_, children: l }),
            (0, a.jsx)(L.c, { children: t }),
            (0, a.jsx)("div", { className: V.Ic }),
            (0, a.jsx)(F, { actions: n, footerInput: i, actionsFullWidth: s, showDivider: s }),
        ],
    });
}
var W = n(509434),
    z = n(858899),
    K = n(224640),
    Y = n(921853),
    q = n(20742),
    Q = n(696208),
    $ = n(695515),
    X = n(491815),
    Z = n(10005),
    J = n(453322),
    ee = n(834981),
    et = n(509914),
    en = n(196359);
function ei() {
    return (0, a.jsx)(d.E, {
        variant: "body-md/normal",
        color: "text-subtle",
        className: en.Q,
        children: y.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                P.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var el = n(191627),
    ea = n(778712),
    er = n(97808),
    es = n(939249),
    eo = n(947641),
    eu = n(789645),
    ec = n(486020),
    ed = n(923531);
let em = () => ({
    seconds: y.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: y.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var ep = n(665956),
    ef = n(838131);
function eh(e) {
    var t;
    let {
            request: n,
            hasMaxConnections: i,
            isAcceptLoading: l,
            isDeclineLoading: s,
            actionsDisabled: u,
            onAccept: c,
            onDecline: m,
        } = e,
        p = (0, O.bG)([k.default], () => k.default.getUser(n.parent_id)),
        f = p?.globalName ?? p?.username ?? n.parent_username,
        h = p?.username ?? n.parent_username,
        g = h !== f,
        A = p?.avatar ?? n.parent_avatar,
        { isConnected: C, isResolved: x } = (function (e) {
            let t = (0, O.bG)([$.A], () => $.A.getLinkedUsers()[e]?.link_status),
                [n, i] = r.useState(() =>
                    t === el.Ef.ACTIVE ? "connected" : null == t || t === el.Ef.PENDING ? null : "declined",
                ),
                [l, a] = r.useState(t);
            t !== l &&
                (a(t),
                t === el.Ef.ACTIVE
                    ? i("connected")
                    : t === el.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== el.Ef.ACTIVE && i("declined"));
            let s = "connected" === n,
                o = "declined" === n;
            return { isConnected: s, isDeclined: o, isResolved: s || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, ed.mV)(Date.parse(t), em)),
        v = ec.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, ea.FT)(ea._3.SIZE_40));
    return (0, a.jsxs)("div", {
        className: ef.nM,
        children: [
            (0, a.jsx)("div", {
                className: ef.R3,
                children: (0, a.jsx)(er.eu, { src: v, size: ea._3.SIZE_40, "aria-label": h }),
            }),
            (0, a.jsxs)("div", {
                className: ef.zH,
                children: [
                    (0, a.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: f,
                    }),
                    g &&
                        (0, a.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: h,
                        }),
                    (0, a.jsx)(d.E, { variant: "body-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            x
                ? (0, a.jsx)(d.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: y.intl.string(C ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, a.jsxs)("div", {
                      className: ef.o1,
                      children: [
                          !i &&
                              (0, a.jsx)(es.D, {
                                  "aria-label": y.intl.formatToPlainString(ep.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: D()(ef.hP, ef.xG),
                                  onClick: () => !u && c(n.parent_id),
                                  children: l
                                      ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, a.jsx)(eo.CheckmarkLargeBoldIcon, {
                                            className: ef.gE,
                                            color: "currentColor",
                                        }),
                              }),
                          (0, a.jsx)(es.D, {
                              "aria-label": y.intl.formatToPlainString(ep.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: D()(ef.hP, ef.rr),
                              onClick: () => !u && m(n.parent_id),
                              children: s
                                  ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, a.jsx)(eu.XSmallIcon, { className: ef.gE, color: "currentColor" }),
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
            actioningUserId: s,
            isAcceptLoading: o,
            isDeclineLoading: u,
            actionsDisabled: c,
            handleAccept: d,
            handleDecline: m,
        } = (function (e) {
            let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
                l = (0, ee.xr)(),
                [a, s] = r.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: u,
                    isAcceptLoading: c,
                    isDeclineLoading: d,
                } = (0, Z.A)({
                    onSuccess: () => s(null),
                    onError: () => {
                        (s(null), i());
                    },
                }),
                m = c || d,
                [p, f] = r.useState(() => new Set()),
                h = r.useCallback((e) => {
                    f((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return (n.add(e), n);
                    });
                }, []),
                g = r.useCallback(
                    (e) => {
                        m || (h(e), s(e), o(e));
                    },
                    [m, h, o],
                ),
                A = r.useCallback(
                    (e) => {
                        m || (h(e), s(e), u(e));
                    },
                    [m, h, u],
                ),
                [C, x] = r.useState(t),
                [E, v] = r.useState(t),
                [_, y] = r.useState(n);
            return (
                n && !_
                    ? (y(!0),
                      v(t),
                      x((e) => {
                          let n = new Map();
                          for (let t of e) p.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== E &&
                      (v(t),
                      x((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: C,
                    hasMaxConnections: l,
                    actioningUserId: a,
                    isAcceptLoading: c,
                    isDeclineLoading: d,
                    actionsDisabled: m,
                    handleAccept: g,
                    handleDecline: A,
                }
            );
        })({
            pendingRequests: t,
            linkedUsersProcessed: n,
            onActionError: () => {
                (0, z.P0)({ text: y.intl.string(ep.default.Wu8BK2), variant: "critical" });
            },
        });
    return 0 === i.length
        ? null
        : (0, a.jsx)("div", {
              className: ef.Nr,
              children: i.map((e) =>
                  (0, a.jsx)(
                      eh,
                      {
                          request: e,
                          hasMaxConnections: l,
                          isAcceptLoading: o && s === e.parent_id,
                          isDeclineLoading: u && s === e.parent_id,
                          actionsDisabled: c,
                          onAccept: d,
                          onDecline: m,
                      },
                      e.parent_id,
                  ),
              ),
          });
}
var eA = n(818348),
    eC = n(703687);
let ex = "https://support.discord.com/hc/articles/14155060633623";
var eE = n(846330);
let ev = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = r.useCallback(async () => {
                    (await t({ type: j.Empty }), window.location.reload());
                }, [t]);
            return (0, a.jsxs)("div", {
                className: eE.kL,
                children: [
                    (0, a.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        className: eE.DD,
                        children: y.intl.string(_.default.v52itt),
                    }),
                    (0, a.jsx)(d.E, {
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
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, O.bG)([k.default], () => k.default.getCurrentUser());
            return (0, a.jsx)(H, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === M.Tk.UNVERIFIED
                                ? P.A.showAgeVerificationGetStartedModal({
                                      entryPoint: f.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: j.Empty }),
                                  })
                                : t({ type: j.Empty });
                        },
                    },
                ],
                children: (0, a.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, a.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, a.jsx)(d.E, { variant: "body-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            var t;
            let n,
                i,
                { configData: l, onSubmit: o, disabled: c, transitionState: f = s.ip.ENTERED } = e,
                { getLinkCode: h } = (0, Z.A)();
            (0, p.Ay)(() => {
                (0, X._z)();
            });
            let g = r.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                A = (0, ee.VT)(),
                C = (0, ee.Du)(),
                x = (0, O.bG)([$.A], () => $.A.getLinkedUsers()),
                E = (0, O.bG)([$.A], () => $.A.getAreLinkedUsersProcessed()),
                v =
                    ((t = g.pending_requests),
                    (n = (0, O.bG)([$.A], () => $.A.getLinkedUsers())),
                    (i = (0, O.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                    r.useMemo(() => {
                        if (!E) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== el.Ef.PENDING || t.requestor_id === i) continue;
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
                    }, [E, n, i, t])),
                b = E ? Object.values(x).some((e) => null != e) : g.pending_requests.length > 0,
                T = E ? A : g.pending_requests.length,
                S = (0, O.bG)([$.A], () => $.A.getLinkCode()),
                I = (0, O.bG)([$.A], () => $.A.getLinkCodeExpiresAt()),
                N = S ?? g.link_code,
                M = I ?? Date.parse(g.link_code_expires_at),
                P = r.useCallback(async () => {
                    try {
                        await o({ type: j.Empty });
                    } catch {
                        (0, z.P0)({ text: y.intl.string(_.default["+QRSxc"]), variant: "critical" });
                    }
                }, [o]),
                [w, D] = r.useState(b);
            b && !w && D(!0);
            let [U, G] = r.useState(!1),
                F = r.useCallback(() => {
                    (G(!1), h());
                }, [h]);
            (0, J.A)(F);
            let B = !w || U,
                V = B
                    ? y.intl.format(_.default["6GaRTu"], { link: ex })
                    : y.intl.format(_.default["Ke+kz5"], { pendingCount: T, link: ex });
            return (0, a.jsxs)(K.d, {
                transitionState: f,
                onClose: eA.tE,
                dismissable: !1,
                size: "md",
                "aria-label": y.intl.string(_.default.dMMSA0),
                children: [
                    U &&
                        (0, a.jsx)("div", {
                            className: eC.g,
                            children: (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Y.ChevronSmallLeftIcon,
                                text: y.intl.string(_.default.CLAQas),
                                onClick: () => G(!1),
                            }),
                        }),
                    (0, a.jsx)(q.rQ, { alignCenter: !0, title: y.intl.string(_.default.dMMSA0), subtitle: V }),
                    (0, a.jsxs)(L.c, {
                        children: [
                            B &&
                                (0, a.jsx)(u.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, a.jsx)(et.r, { linkCode: N, expiresAt: M, onRefresh: h }),
                                }),
                            (0, a.jsx)("div", {
                                hidden: B,
                                children: (0, a.jsx)(eg, { pendingRequests: v, linkedUsersProcessed: E }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.H, {
                        actionsFullWidth: !0,
                        actions:
                            w && !U
                                ? [
                                      {
                                          text: y.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              G(!0);
                                          },
                                      },
                                      {
                                          text: y.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: P,
                                          disabled: !C || c,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, a.jsx)(ei, {}),
                    (0, a.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        className: eC.r,
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
            return (0, a.jsx)(H, {
                title: y.intl.string(_.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: y.intl.string(_.default["6FXIU6"]),
                        variant: "primary",
                        icon: W.LinkExternalSmallIcon,
                        iconPosition: "end",
                        onClick: n,
                        disabled: t,
                    },
                ],
                children: (0, a.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, a.jsx)(d.E, {
                            variant: "body-md/normal",
                            color: "text-subtle",
                            children: y.intl.string(_.default["1YhkP1"]),
                        }),
                        (0, a.jsxs)(u.B, {
                            children: [
                                (0, a.jsx)(c.D, {
                                    variant: "body-md/normal",
                                    children: y.intl.string(_.default.z1L5Wt),
                                }),
                                (0, a.jsx)(d.E, {
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
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = v(),
            r = ev[l.ui_component.component.type];
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
var ey = n(754302),
    eb = n(700265);
let eT = {
        [b.EMAIL_VERIFICATION]: y.intl.string(_.default.HC4IiR),
        [b.REFRESH_APP]: y.intl.string(_.default.SzfxQ3),
        [b.AGE_VERIFICATION]: y.intl.string(_.default["dSkE/A"]),
        [b.PARENTAL_CONSENT_CONNECTION]: y.intl.string(_.default.dMMSA0),
        [b.APP_STORE_PARENTAL_REVOCATION]: y.intl.string(_.default.Z87TFb),
    },
    eS = function () {
        let { task: e } = v(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            i = !N.has(e.task_type);
        return (0, a.jsxs)(u.B, {
            direction: "vertical",
            justify: "space-between",
            padding: B,
            className: eb.k,
            children: [
                (0, a.jsxs)(u.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(c.D, {
                            variant: "display-md",
                            className: eb.D,
                            children: y.intl.string(_.default["/OpRAP"]),
                        }),
                        i &&
                            (0, a.jsx)(u.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, a.jsx)(
                                        ey.B,
                                        {
                                            title: eT[e.task_type] ?? "",
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
                (0, a.jsx)(d.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: y.intl.format(_.default["0DHxym"], {
                        handleLogOut: () => (0, R.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eI = n(450165);
let eN = n(843020);
function ej(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [s, o] = r.useState(t),
        u = r.useMemo(() => ({ task: s, setTask: o }), [s, o]);
    r.useEffect(() => {
        o(t);
    }, [t]);
    let c = I.has(s.task_type);
    return (0, a.jsxs)(E.Provider, {
        value: u,
        children: [!c && (0, a.jsx)(eS, {}), (0, a.jsx)(e_, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eR = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = r.useState(null),
        [E, v] = r.useState(!0),
        [N, O] = r.useState(null),
        [M, P] = r.useState(!1),
        k = r.useCallback(async () => {
            (v(!0), O(null));
            try {
                let e = await (async function () {
                    let e = await C.A.get({
                        url: x.Rsh.SAFETY_FLOWS_TASK,
                        trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
                        rejectWithError: !0,
                    });
                    return 204 === e.status ? null : e.body;
                })();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && S.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: b.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: T.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                O(y.intl.string(_.default["/f++3g"]));
            } finally {
                v(!1);
            }
        }, [n]),
        L = r.useCallback(
            async (e) => {
                if (null !== i) {
                    P(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        (await (async function (e) {
                            return (
                                await C.A.post({
                                    url: x.Rsh.SAFETY_FLOWS_TASK,
                                    body: e,
                                    trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
                                    rejectWithError: !0,
                                })
                            ).body;
                        })(t),
                            k());
                    } catch (e) {
                        if (I.has(i.task_type)) throw e;
                        O(y.intl.string(_.default["+QRSxc"]));
                    } finally {
                        P(!1);
                    }
                }
            },
            [i, k],
        );
    (0, p.Ay)(() => {
        k();
    });
    let w = r.useMemo(() => i?.task_type === b.AGE_VERIFICATION, [i]),
        D = null != i && null === N && I.has(i.task_type);
    return (0, a.jsxs)("div", {
        className: eI.Tp,
        children: [
            (0, a.jsx)("img", { className: eI.xX, src: eN, alt: "" }),
            w
                ? (0, a.jsx)(h.default, {
                      transitionState: t ?? s.ip.ENTERED,
                      entryPoint: f.q1.SAFETY_FLOWS,
                      onClose: eA.tE,
                      onComplete: async () => {
                          await L({ type: j.Empty });
                      },
                      dismissable: !1,
                  })
                : D && null != i
                  ? (0, a.jsx)(ej, { task: i, handleSubmit: L, disabled: M, transitionState: t ?? s.ip.ENTERED })
                  : (0, a.jsx)("div", {
                        className: eI.nA,
                        children: E
                            ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, a.jsx)("div", {
                                  className: eI.kL,
                                  children: (0, a.jsxs)(u.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eI.rf,
                                      children: [
                                          null !== N &&
                                              (0, a.jsxs)(u.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eI.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, a.jsxs)(u.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, a.jsx)(c.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: y.intl.string(y.t.c6kn6F),
                                                              }),
                                                              (0, a.jsx)(d.E, {
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
                                                                      k();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === N &&
                                              null != i &&
                                              (0, a.jsx)(ej, { task: i, handleSubmit: L, disabled: M }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
