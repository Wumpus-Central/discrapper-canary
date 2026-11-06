n.d(t, { A: () => eR });
var i,
    l,
    r = n(477900),
    a = n(582128),
    s = n(231723),
    o = n(289873),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    m = n(821609),
    f = n(964486),
    p = n(171576),
    h = n(962877),
    g = n(240248),
    A = n(613412);
n(181658);
var C = n(499785),
    E = n(652215);
let x = a.createContext(null);
function v() {
    let e = a.useContext(x);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(742350),
    b = n(792996),
    y =
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
(b.intl.string(_.default["Qm6K/s"]),
    b.intl.string(_.default["dSkE/A"]),
    b.intl.string(_.default.dMMSA0),
    b.intl.string(_.default.Z87TFb));
var j = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    R = n(627575),
    M = n(855986),
    O = n(155718),
    k = n(871309),
    P = n(287809),
    L = n(430993),
    D = n(503698),
    w = n.n(D),
    U = n(825484),
    G = n(745848);
function F(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: l = !1 } = e;
    return 0 === t.length && null == n
        ? null
        : (0, r.jsxs)("footer", {
              className: w()(G.qr, { [G.$6]: l }),
              children: [
                  null != n && (0, r.jsx)("div", { children: n }),
                  (0, r.jsx)(U.e, {
                      className: w()(G.GC, { [G.Z7]: i }),
                      justify: "end",
                      fullWidth: i,
                      children: t.map((e, t) => (0, r.jsx)(m.$, { ...e }, t)),
                  }),
              ],
          });
}
let B = { bottom: 40, left: 32, right: 32, top: 32 };
var H = n(588900);
function V(e) {
    let { children: t, actions: n, footerInput: i, title: l, variant: a = "default" } = e,
        s = "app_store_lockdown" === a;
    return (0, r.jsxs)(u.B, {
        direction: "vertical",
        justify: "start",
        padding: B,
        className: H.kL,
        children: [
            (0, r.jsx)(c.D, { variant: "heading-lg/semibold", className: s ? void 0 : H.R_, children: l }),
            (0, r.jsx)(L.c, { children: t }),
            (0, r.jsx)("div", { className: H.Ic }),
            (0, r.jsx)(F, { actions: n, footerInput: i, actionsFullWidth: s, showDivider: s }),
        ],
    });
}
var W = n(509434),
    K = n(858899),
    z = n(224640),
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
    return (0, r.jsx)(d.E, {
        variant: "body-md/normal",
        color: "text-subtle",
        className: en.Q,
        children: b.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                k.A.showAgeVerificationGetStartedModal({ entryPoint: p.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var el = n(191627),
    er = n(778712),
    ea = n(97808),
    es = n(939249),
    eo = n(947641),
    eu = n(789645),
    ec = n(486020),
    ed = n(923531);
let em = () => ({
    seconds: b.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: b.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var ef = n(665956),
    ep = n(838131);
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
        f = (0, M.bG)([P.default], () => P.default.getUser(n.parent_id)),
        p = f?.globalName ?? f?.username ?? n.parent_username,
        h = f?.username ?? n.parent_username,
        g = h !== p,
        A = f?.avatar ?? n.parent_avatar,
        { isConnected: C, isResolved: E } = (function (e) {
            let t = (0, M.bG)([$.A], () => $.A.getLinkedUsers()[e]?.link_status),
                [n, i] = a.useState(() =>
                    t === el.Ef.ACTIVE ? "connected" : null == t || t === el.Ef.PENDING ? null : "declined",
                ),
                [l, r] = a.useState(t);
            t !== l &&
                (r(t),
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
        x = ((t = n.created_at), (0, ed.mV)(Date.parse(t), em)),
        v = ec.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, er.FT)(er._3.SIZE_40));
    return (0, r.jsxs)("div", {
        className: ep.nM,
        children: [
            (0, r.jsx)("div", {
                className: ep.R3,
                children: (0, r.jsx)(ea.eu, { src: v, size: er._3.SIZE_40, "aria-label": h }),
            }),
            (0, r.jsxs)("div", {
                className: ep.zH,
                children: [
                    (0, r.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: p,
                    }),
                    g &&
                        (0, r.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: h,
                        }),
                    (0, r.jsx)(d.E, { variant: "body-xs/normal", color: "text-muted", children: x }),
                ],
            }),
            E
                ? (0, r.jsx)(d.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: b.intl.string(C ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, r.jsxs)("div", {
                      className: ep.o1,
                      children: [
                          !i &&
                              (0, r.jsx)(es.D, {
                                  "aria-label": b.intl.formatToPlainString(ef.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: w()(ep.hP, ep.xG),
                                  onClick: () => !u && c(n.parent_id),
                                  children: l
                                      ? (0, r.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, r.jsx)(eo.CheckmarkLargeBoldIcon, {
                                            className: ep.gE,
                                            color: "currentColor",
                                        }),
                              }),
                          (0, r.jsx)(es.D, {
                              "aria-label": b.intl.formatToPlainString(ef.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: w()(ep.hP, ep.rr),
                              onClick: () => !u && m(n.parent_id),
                              children: s
                                  ? (0, r.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, r.jsx)(eu.XSmallIcon, { className: ep.gE, color: "currentColor" }),
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
                [r, s] = a.useState(null),
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
                [f, p] = a.useState(() => new Set()),
                h = a.useCallback((e) => {
                    p((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return (n.add(e), n);
                    });
                }, []),
                g = a.useCallback(
                    (e) => {
                        m || (h(e), s(e), o(e));
                    },
                    [m, h, o],
                ),
                A = a.useCallback(
                    (e) => {
                        m || (h(e), s(e), u(e));
                    },
                    [m, h, u],
                ),
                [C, E] = a.useState(t),
                [x, v] = a.useState(t),
                [_, b] = a.useState(n);
            return (
                n && !_
                    ? (b(!0),
                      v(t),
                      E((e) => {
                          let n = new Map();
                          for (let t of e) f.has(t.parent_id) && n.set(t.parent_id, t);
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      }))
                    : t !== x &&
                      (v(t),
                      E((e) => {
                          let n = new Map(e.map((e) => [e.parent_id, e]));
                          for (let e of t) n.set(e.parent_id, e);
                          return Array.from(n.values());
                      })),
                {
                    seenRequests: C,
                    hasMaxConnections: l,
                    actioningUserId: r,
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
                (0, K.P0)({ text: b.intl.string(ef.default.Wu8BK2), variant: "critical" });
            },
        });
    return 0 === i.length
        ? null
        : (0, r.jsx)("div", {
              className: ep.Nr,
              children: i.map((e) =>
                  (0, r.jsx)(
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
let eE = "https://support.discord.com/hc/articles/14155060633623";
var ex = n(846330);
let ev = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    (await t({ type: j.Empty }), window.location.reload());
                }, [t]);
            return (0, r.jsxs)("div", {
                className: ex.kL,
                children: [
                    (0, r.jsx)(c.D, {
                        variant: "heading-lg/semibold",
                        className: ex.DD,
                        children: b.intl.string(_.default.v52itt),
                    }),
                    (0, r.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        className: ex.h_,
                        children: b.intl.string(_.default["5am8D3"]),
                    }),
                    (0, r.jsx)(u.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, r.jsx)(m.$, {
                            variant: "primary",
                            text: b.intl.string(_.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, M.bG)([P.default], () => P.default.getCurrentUser());
            return (0, r.jsx)(V, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === O.Tk.UNVERIFIED
                                ? k.A.showAgeVerificationGetStartedModal({
                                      entryPoint: p.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: j.Empty }),
                                  })
                                : t({ type: j.Empty });
                        },
                    },
                ],
                children: (0, r.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, r.jsx)(d.E, {
                            variant: "body-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, r.jsx)(d.E, { variant: "body-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
        parental_consent_connection: (e) => {
            var t;
            let n,
                i,
                { configData: l, onSubmit: o, disabled: c, transitionState: p = s.ip.ENTERED } = e,
                { getLinkCode: h } = (0, Z.A)();
            (0, f.Ay)(() => {
                (0, X._z)();
            });
            let g = a.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                A = (0, ee.VT)(),
                C = (0, ee.Du)(),
                E = (0, M.bG)([$.A], () => $.A.getLinkedUsers()),
                x = (0, M.bG)([$.A], () => $.A.getAreLinkedUsersProcessed()),
                v =
                    ((t = g.pending_requests),
                    (n = (0, M.bG)([$.A], () => $.A.getLinkedUsers())),
                    (i = (0, M.bG)([P.default], () => P.default.getCurrentUser()?.id)),
                    a.useMemo(() => {
                        if (!x) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== el.Ef.PENDING || t.requestor_id === i) continue;
                            let n = P.default.getUser(t.user_id),
                                r = e.get(t.user_id);
                            l.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? r?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? r?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return l;
                    }, [x, n, i, t])),
                y = x ? Object.values(E).some((e) => null != e) : g.pending_requests.length > 0,
                T = x ? A : g.pending_requests.length,
                S = (0, M.bG)([$.A], () => $.A.getLinkCode()),
                I = (0, M.bG)([$.A], () => $.A.getLinkCodeExpiresAt()),
                N = S ?? g.link_code,
                O = I ?? Date.parse(g.link_code_expires_at),
                k = a.useCallback(async () => {
                    try {
                        await o({ type: j.Empty });
                    } catch {
                        (0, K.P0)({ text: b.intl.string(_.default["+QRSxc"]), variant: "critical" });
                    }
                }, [o]),
                [D, w] = a.useState(y);
            y && !D && w(!0);
            let [U, G] = a.useState(!1),
                F = a.useCallback(() => {
                    (G(!1), h());
                }, [h]);
            (0, J.A)(F);
            let B = !D || U,
                H = B
                    ? b.intl.format(_.default["6GaRTu"], { link: eE })
                    : b.intl.format(_.default["Ke+kz5"], { pendingCount: T, link: eE });
            return (0, r.jsxs)(z.d, {
                transitionState: p,
                onClose: eA.tE,
                dismissable: !1,
                size: "md",
                "aria-label": b.intl.string(_.default.dMMSA0),
                children: [
                    U &&
                        (0, r.jsx)("div", {
                            className: eC.g,
                            children: (0, r.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Y.ChevronSmallLeftIcon,
                                text: b.intl.string(_.default.CLAQas),
                                onClick: () => G(!1),
                            }),
                        }),
                    (0, r.jsx)(q.rQ, { alignCenter: !0, title: b.intl.string(_.default.dMMSA0), subtitle: H }),
                    (0, r.jsxs)(L.c, {
                        children: [
                            B &&
                                (0, r.jsx)(u.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, r.jsx)(et.r, { linkCode: N, expiresAt: O, onRefresh: h }),
                                }),
                            (0, r.jsx)("div", {
                                hidden: B,
                                children: (0, r.jsx)(eg, { pendingRequests: v, linkedUsersProcessed: x }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(Q.H, {
                        actionsFullWidth: !0,
                        actions:
                            D && !U
                                ? [
                                      {
                                          text: b.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: function () {
                                              G(!0);
                                          },
                                      },
                                      {
                                          text: b.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: k,
                                          disabled: !C || c,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        className: eC.r,
                        children: b.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, R.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
        app_store_parental_revocation: (e) => {
            let { disabled: t } = e,
                n = a.useCallback(() => {
                    window.open(
                        "https://support.discord.com/hc/en-us/articles/42855178312087",
                        "_blank",
                        "noopener,noreferrer",
                    );
                }, []);
            return (0, r.jsx)(V, {
                title: b.intl.string(_.default.Z87TFb),
                variant: "app_store_lockdown",
                actions: [
                    {
                        text: b.intl.string(_.default["6FXIU6"]),
                        variant: "primary",
                        icon: W.LinkExternalSmallIcon,
                        iconPosition: "end",
                        onClick: n,
                        disabled: t,
                    },
                ],
                children: (0, r.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(d.E, {
                            variant: "body-md/normal",
                            color: "text-subtle",
                            children: b.intl.string(_.default["1YhkP1"]),
                        }),
                        (0, r.jsxs)(u.B, {
                            children: [
                                (0, r.jsx)(c.D, {
                                    variant: "body-md/normal",
                                    children: b.intl.string(_.default.z1L5Wt),
                                }),
                                (0, r.jsx)(d.E, {
                                    variant: "body-md/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(_.default.BaI6L4),
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
            a = ev[l.ui_component.component.type];
        return null == a
            ? null
            : (0, r.jsx)(a, {
                  configData: l.ui_component.component,
                  onSubmit: t,
                  taskId: l.task_id,
                  flowId: l.flow_context?.flow_id,
                  assignmentId: l.assignment_id,
                  disabled: n,
                  transitionState: i,
              });
    };
var eb = n(754302),
    ey = n(700265);
let eT = {
        [y.EMAIL_VERIFICATION]: b.intl.string(_.default.HC4IiR),
        [y.REFRESH_APP]: b.intl.string(_.default.SzfxQ3),
        [y.AGE_VERIFICATION]: b.intl.string(_.default["dSkE/A"]),
        [y.PARENTAL_CONSENT_CONNECTION]: b.intl.string(_.default.dMMSA0),
        [y.APP_STORE_PARENTAL_REVOCATION]: b.intl.string(_.default.Z87TFb),
    },
    eS = function () {
        let { task: e } = v(),
            t = e.flow_context.tasks,
            n = t.findIndex((t) => t.task_type === e.task_type),
            i = !N.has(e.task_type);
        return (0, r.jsxs)(u.B, {
            direction: "vertical",
            justify: "space-between",
            padding: B,
            className: ey.k,
            children: [
                (0, r.jsxs)(u.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, r.jsx)(c.D, {
                            variant: "display-md",
                            className: ey.D,
                            children: b.intl.string(_.default["/OpRAP"]),
                        }),
                        i &&
                            (0, r.jsx)(u.B, {
                                direction: "vertical",
                                justify: "space-between",
                                gap: 0,
                                children: t.map((e, t) =>
                                    (0, r.jsx)(
                                        eb.B,
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
                (0, r.jsx)(d.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: b.intl.format(_.default["0DHxym"], {
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
        [s, o] = a.useState(t),
        u = a.useMemo(() => ({ task: s, setTask: o }), [s, o]);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let c = I.has(s.task_type);
    return (0, r.jsxs)(x.Provider, {
        value: u,
        children: [!c && (0, r.jsx)(eS, {}), (0, r.jsx)(e_, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let eR = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = a.useState(null),
        [x, v] = a.useState(!0),
        [N, M] = a.useState(null),
        [O, k] = a.useState(!1),
        P = a.useCallback(async () => {
            (v(!0), M(null));
            try {
                let e = await (async function () {
                    let e = await C.A.get({
                        url: E.Rsh.SAFETY_FLOWS_TASK,
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
                          task_type: y.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: T.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                M(b.intl.string(_.default["/f++3g"]));
            } finally {
                v(!1);
            }
        }, [n]),
        L = a.useCallback(
            async (e) => {
                if (null !== i) {
                    k(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        (await (async function (e) {
                            return (
                                await C.A.post({
                                    url: E.Rsh.SAFETY_FLOWS_TASK,
                                    body: e,
                                    trackedActionData: { event: A.NetworkActionNames.USER_VERIFY },
                                    rejectWithError: !0,
                                })
                            ).body;
                        })(t),
                            P());
                    } catch (e) {
                        if (I.has(i.task_type)) throw e;
                        M(b.intl.string(_.default["+QRSxc"]));
                    } finally {
                        k(!1);
                    }
                }
            },
            [i, P],
        );
    (0, f.Ay)(() => {
        P();
    });
    let D = a.useMemo(() => i?.task_type === y.AGE_VERIFICATION, [i]),
        w = null != i && null === N && I.has(i.task_type);
    return (0, r.jsxs)("div", {
        className: eI.Tp,
        children: [
            (0, r.jsx)("img", { className: eI.xX, src: eN, alt: "" }),
            D
                ? (0, r.jsx)(h.default, {
                      transitionState: t ?? s.ip.ENTERED,
                      entryPoint: p.q1.SAFETY_FLOWS,
                      onClose: eA.tE,
                      onComplete: async () => {
                          await L({ type: j.Empty });
                      },
                      dismissable: !1,
                  })
                : w && null != i
                  ? (0, r.jsx)(ej, { task: i, handleSubmit: L, disabled: O, transitionState: t ?? s.ip.ENTERED })
                  : (0, r.jsx)("div", {
                        className: eI.nA,
                        children: x
                            ? (0, r.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                            : (0, r.jsx)("div", {
                                  className: eI.kL,
                                  children: (0, r.jsxs)(u.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eI.rf,
                                      children: [
                                          null !== N &&
                                              (0, r.jsxs)(u.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eI.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, r.jsxs)(u.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(c.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: b.intl.string(b.t.c6kn6F),
                                                              }),
                                                              (0, r.jsx)(d.E, {
                                                                  variant: "body-md/normal",
                                                                  color: "text-muted",
                                                                  children: b.intl.string(b.t.ZUEGFn),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsxs)(u.B, {
                                                          direction: "horizontal",
                                                          justify: "center",
                                                          align: "center",
                                                          children: [
                                                              (0, r.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  variant: "secondary",
                                                                  text: b.intl.string(b.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, R.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, r.jsx)(m.$, {
                                                                  fullWidth: !0,
                                                                  text: b.intl.string(b.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      P();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === N &&
                                              null != i &&
                                              (0, r.jsx)(ej, { task: i, handleSubmit: L, disabled: O }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
