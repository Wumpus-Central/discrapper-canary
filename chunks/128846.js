n.d(t, { A: () => ek });
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
async function E(e) {
    return (
        await A.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: f.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let C = a.createContext(null);
function I() {
    let e = a.useContext(C);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var _ = n(837451),
    T = n(375708),
    j =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
        i);
let S = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
        PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
    },
    N = new Set(Object.values(S)),
    y = new Set([10]);
T.intl.string(_.default["Qm6K/s"]), T.intl.string(_.default["dSkE/A"]), T.intl.string(_.default.dMMSA0);
var b = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    M = n(627575),
    R = n(17928),
    k = n(155718),
    w = n(379257),
    O = n(287809),
    L = n(430993),
    P = n(825484),
    U = n(214437);
function D(e) {
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
function H(e) {
    let { children: t, actions: n, footerInput: i, title: l } = e;
    return (0, s.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: G,
        className: F.kL,
        children: [
            (0, s.jsx)(d.D, { variant: "heading-lg/semibold", className: F.R_, children: l }),
            (0, s.jsx)(L.c, { children: t }),
            (0, s.jsx)("div", { className: F.Ic }),
            (0, s.jsx)(D, { actions: n, footerInput: i }),
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
    $ = n(794364),
    Q = n(10005),
    X = n(453322),
    J = n(834981),
    ee = n(22071),
    et = n(336862);
function en() {
    return (0, s.jsx)(c.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        className: et.Q,
        children: T.intl.format(_.default.ifObbX, {
            handleAgeVerifyHook: () =>
                w.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.PARENTAL_CONSENT_LOCKOUT }),
        }),
    });
}
n(321073);
var ei = n(191627),
    el = n(503698),
    es = n.n(el),
    ea = n(778712),
    er = n(97808),
    eo = n(939249),
    ed = n(947641),
    ec = n(789645),
    eu = n(486020),
    eh = n(923531);
let em = () => ({
    seconds: T.intl.string(_.default.M4NOO3),
    minutes: _.default["9nem85"],
    hours: _.default.sJjWRY,
    yesterday: T.intl.string(_.default["7SxW32"]),
    days: _.default.tVHevX,
    date: _.default.q6jzya,
});
var ep = n(602339),
    eg = n(402008);
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
        m = (0, R.bG)([O.default], () => O.default.getUser(n.parent_id)),
        p = m?.globalName ?? m?.username ?? n.parent_username,
        g = m?.username ?? n.parent_username,
        f = g !== p,
        A = m?.avatar ?? n.parent_avatar,
        { isConnected: x, isResolved: v } = (function (e) {
            let t = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers()[e]?.link_status),
                [n, i] = a.useState(() =>
                    t === ei.Ef.ACTIVE ? "connected" : null == t || t === ei.Ef.PENDING ? null : "declined",
                ),
                [l, s] = a.useState(t);
            t !== l &&
                (s(t),
                t === ei.Ef.ACTIVE
                    ? i("connected")
                    : t === ei.Ef.PENDING
                      ? i(null)
                      : null != t
                        ? i("declined")
                        : null != l && l !== ei.Ef.ACTIVE && i("declined"));
            let r = "connected" === n,
                o = "declined" === n;
            return { isConnected: r, isDeclined: o, isResolved: r || o };
        })(n.parent_id),
        E = ((t = n.created_at), (0, eh.mV)(Date.parse(t), em)),
        C = eu.Ay.getUserAvatarURL({ id: n.parent_id, avatar: A }, !1, (0, ea.FT)(ea._3.SIZE_40));
    return (0, s.jsxs)("div", {
        className: eg.nM,
        children: [
            (0, s.jsx)("div", {
                className: eg.R3,
                children: (0, s.jsx)(er.eu, { src: C, size: ea._3.SIZE_40, "aria-label": g }),
            }),
            (0, s.jsxs)("div", {
                className: eg.zH,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: p,
                    }),
                    f &&
                        (0, s.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            children: g,
                        }),
                    (0, s.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                ],
            }),
            v
                ? (0, s.jsx)(c.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: T.intl.string(x ? _.default.YQP5dE : _.default["2HvOvh"]),
                  })
                : (0, s.jsxs)("div", {
                      className: eg.o1,
                      children: [
                          !i &&
                              (0, s.jsx)(eo.D, {
                                  "aria-label": T.intl.formatToPlainString(ep.default.jc1Ip7, {
                                      name: n.parent_username,
                                  }),
                                  className: es()(eg.hP, eg.xG),
                                  onClick: () => !d && u(n.parent_id),
                                  children: l
                                      ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                      : (0, s.jsx)(ed.r, { className: eg.gE, color: "currentColor" }),
                              }),
                          (0, s.jsx)(eo.D, {
                              "aria-label": T.intl.formatToPlainString(ep.default["4GtllP"], {
                                  name: n.parent_username,
                              }),
                              className: es()(eg.hP, eg.rr),
                              onClick: () => !d && h(n.parent_id),
                              children: o
                                  ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE_SIMPLE })
                                  : (0, s.jsx)(ec.P, { className: eg.gE, color: "currentColor" }),
                          }),
                      ],
                  }),
        ],
    });
}
function eA(e) {
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
                l = (0, J.xr)(),
                [s, r] = a.useState(null),
                {
                    acceptLinkRequest: o,
                    declineLinkRequest: d,
                    isAcceptLoading: c,
                    isDeclineLoading: u,
                } = (0, Q.A)({
                    onSuccess: () => r(null),
                    onError: () => {
                        r(null), i();
                    },
                }),
                h = c || u,
                [m, p] = a.useState(() => new Set()),
                g = a.useCallback((e) => {
                    p((t) => {
                        if (t.has(e)) return t;
                        let n = new Set(t);
                        return n.add(e), n;
                    });
                }, []),
                f = a.useCallback(
                    (e) => {
                        h || (g(e), r(e), o(e));
                    },
                    [h, g, o],
                ),
                A = a.useCallback(
                    (e) => {
                        h || (g(e), r(e), d(e));
                    },
                    [h, g, d],
                ),
                [x, v] = a.useState(t),
                [E, C] = a.useState(t),
                [I, _] = a.useState(n);
            return (
                n && !I
                    ? (_(!0),
                      C(t),
                      v((e) => {
                          let n = new Map();
                          for (let t of e) m.has(t.parent_id) && n.set(t.parent_id, t);
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
                    actioningUserId: s,
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
                (0, Z.P0)((0, z.o)(T.intl.string(ep.default.Wu8BK2), K.Ck.FAILURE));
            },
        });
    return 0 === i.length
        ? null
        : (0, s.jsx)("div", {
              className: eg.Nr,
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
var ex = n(231723),
    ev = n(818348),
    eE = n(42076);
let eC = "https://support.discord.com/hc/articles/14155060633623";
var eI = n(242235);
let e_ = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: b.Empty }), window.location.reload();
                }, [t]);
            return (0, s.jsxs)("div", {
                className: eI.kL,
                children: [
                    (0, s.jsx)(d.D, {
                        variant: "heading-lg/bold",
                        className: eI.DD,
                        children: T.intl.string(_.default.v52itt),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: eI.h_,
                        children: T.intl.string(_.default["5am8D3"]),
                    }),
                    (0, s.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, s.jsx)(u.$, {
                            variant: "primary",
                            text: T.intl.string(_.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, R.bG)([O.default], () => O.default.getCurrentUser());
            return (0, s.jsx)(H, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: function () {
                            n?.ageVerificationStatus === k.Tk.UNVERIFIED
                                ? w.A.showAgeVerificationGetStartedModal({
                                      entryPoint: m.q1.SAFETY_FLOWS,
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
                { configData: l, onSubmit: r, disabled: d, transitionState: m = ex.ip.ENTERED } = e,
                { getLinkCode: p } = (0, Q.A)();
            (0, h.Ay)(() => {
                (0, $._z)();
            });
            let g = a.useMemo(() => {
                    let e;
                    return {
                        link_code: "string" == typeof (e = l ?? {}).link_code ? e.link_code : "",
                        link_code_expires_at: "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
                        pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
                    };
                }, [l]),
                f = (0, J.VT)(),
                A = (0, J.Du)(),
                x = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers()),
                v = (0, R.bG)([Y.A], () => Y.A.getAreLinkedUsersProcessed()),
                E =
                    ((t = g.pending_requests),
                    (n = (0, R.bG)([Y.A], () => Y.A.getLinkedUsers())),
                    (i = (0, R.bG)([O.default], () => O.default.getCurrentUser()?.id)),
                    a.useMemo(() => {
                        if (!v) return t;
                        let e = new Map(t.map((e) => [e.parent_id, e])),
                            l = [];
                        for (let t of Object.values(n)) {
                            if (null == t || t.link_status !== ei.Ef.PENDING || t.requestor_id === i) continue;
                            let n = O.default.getUser(t.user_id),
                                s = e.get(t.user_id);
                            l.push({
                                parent_id: t.user_id,
                                parent_username: n?.username ?? s?.parent_username ?? t.user_id,
                                parent_avatar: n?.avatar ?? s?.parent_avatar ?? null,
                                created_at: t.created_at,
                            });
                        }
                        return l;
                    }, [v, n, i, t])),
                C = v ? Object.values(x).some((e) => null != e) : g.pending_requests.length > 0,
                I = v ? f : g.pending_requests.length,
                j = (0, R.bG)([Y.A], () => Y.A.getLinkCode()),
                S = (0, R.bG)([Y.A], () => Y.A.getLinkCodeExpiresAt()),
                N = j ?? g.link_code,
                y = S ?? Date.parse(g.link_code_expires_at),
                k = a.useCallback(async () => {
                    try {
                        await r({ type: b.Empty });
                    } catch {
                        (0, Z.P0)((0, z.o)(T.intl.string(_.default["+QRSxc"]), K.Ck.FAILURE));
                    }
                }, [r]),
                [w, P] = a.useState(C);
            C && !w && P(!0);
            let [U, D] = a.useState(!1),
                G = a.useCallback(() => {
                    D(!1), p();
                }, [p]);
            (0, X.A)(G);
            let F = !w || U,
                H = F
                    ? T.intl.format(_.default["6GaRTu"], { link: eC })
                    : T.intl.format(_.default["Ke+kz5"], { pendingCount: I, link: eC });
            return (0, s.jsxs)(V.d, {
                transitionState: m,
                onClose: ev.tE,
                dismissable: !1,
                size: "md",
                "aria-label": T.intl.string(_.default.dMMSA0),
                children: [
                    U &&
                        (0, s.jsx)("div", {
                            className: eE.g,
                            children: (0, s.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: q.n,
                                text: T.intl.string(_.default.CLAQas),
                                onClick: () => D(!1),
                            }),
                        }),
                    (0, s.jsx)(W.rQ, { alignCenter: !0, title: T.intl.string(_.default.dMMSA0), subtitle: H }),
                    (0, s.jsxs)(L.c, {
                        children: [
                            F &&
                                (0, s.jsx)(o.B, {
                                    direction: "vertical",
                                    align: "center",
                                    gap: 16,
                                    children: (0, s.jsx)(ee.r, { linkCode: N, expiresAt: y, onRefresh: p }),
                                }),
                            (0, s.jsx)("div", {
                                hidden: F,
                                children: (0, s.jsx)(eA, { pendingRequests: E, linkedUsersProcessed: v }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(B.H, {
                        actionsFullWidth: !0,
                        actions:
                            w && !U
                                ? [
                                      {
                                          text: T.intl.string(_.default["RD76/V"]),
                                          variant: "secondary",
                                          onClick: () => {
                                              D(!0);
                                          },
                                      },
                                      {
                                          text: T.intl.string(_.default.OaHZUf),
                                          variant: "primary",
                                          onClick: k,
                                          disabled: !A || d,
                                      },
                                  ]
                                : void 0,
                    }),
                    (0, s.jsx)(en, {}),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: eE.r,
                        children: T.intl.format(_.default["0DHxym"], {
                            handleLogOut: () => (0, M.k)("safety_flows_parental_consent_connection"),
                        }),
                    }),
                ],
            });
        },
    },
    eT = (e) => {
        let { onSubmit: t, disabled: n, transitionState: i } = e,
            { task: l } = I(),
            a = e_[l.ui_component.component.type];
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
var ej = n(754302),
    eS = n(721940);
let eN = {
        [j.EMAIL_VERIFICATION]: T.intl.string(_.default.HC4IiR),
        [j.REFRESH_APP]: T.intl.string(_.default.SzfxQ3),
        [j.AGE_VERIFICATION]: T.intl.string(_.default["dSkE/A"]),
        [j.PARENTAL_CONSENT_CONNECTION]: T.intl.string(_.default.dMMSA0),
    },
    ey = function () {
        let { task: e } = I(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, s.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: G,
            className: eS.k,
            children: [
                (0, s.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, s.jsx)(d.D, {
                            variant: "display-md",
                            className: eS.D,
                            children: T.intl.string(_.default["/OpRAP"]),
                        }),
                        (0, s.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, s.jsx)(
                                    ej.B,
                                    {
                                        title: eN[e.task_type] ?? "",
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
                    children: T.intl.format(_.default["0DHxym"], {
                        handleLogOut: () => (0, M.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var eb = n(561452);
let eM = n(843020);
function eR(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: l } = e,
        [r, o] = a.useState(t),
        d = a.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let c = y.has(r.task_type);
    return (0, s.jsxs)(C.Provider, {
        value: d,
        children: [!c && (0, s.jsx)(ey, {}), (0, s.jsx)(eT, { onSubmit: n, disabled: i, transitionState: l })],
    });
}
let ek = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, l] = a.useState(null),
        [f, A] = a.useState(!0),
        [x, C] = a.useState(null),
        [I, R] = a.useState(!1),
        k = a.useCallback(async () => {
            A(!0), C(null);
            try {
                let e = await v();
                if (null == e) return void n();
                !(0, g.uJ)(e.ui_component?.component.type) && N.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: j.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: S.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                C(T.intl.string(_.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        w = a.useCallback(
            async (e) => {
                if (null !== i) {
                    R(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await E(t), k();
                    } catch (e) {
                        if (y.has(i.task_type)) throw e;
                        C(T.intl.string(_.default["+QRSxc"]));
                    } finally {
                        R(!1);
                    }
                }
            },
            [i, k],
        );
    (0, h.Ay)(() => {
        k();
    });
    let O = a.useMemo(() => i?.task_type === j.AGE_VERIFICATION, [i]),
        L = null != i && null === x && y.has(i.task_type);
    return (0, s.jsxs)("div", {
        className: eb.Tp,
        children: [
            (0, s.jsx)("img", { className: eb.xX, src: eM, alt: "" }),
            O
                ? (0, s.jsx)(p.default, {
                      transitionState: t ?? ex.ip.ENTERED,
                      entryPoint: m.q1.SAFETY_FLOWS,
                      onClose: ev.tE,
                      onComplete: async () => {
                          await w({ type: b.Empty });
                      },
                      dismissable: !1,
                  })
                : L && null != i
                  ? (0, s.jsx)(eR, { task: i, handleSubmit: w, disabled: I, transitionState: t ?? ex.ip.ENTERED })
                  : (0, s.jsx)("div", {
                        className: eb.nA,
                        children: f
                            ? (0, s.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                            : (0, s.jsx)("div", {
                                  className: eb.kL,
                                  children: (0, s.jsxs)(o.B, {
                                      direction: "horizontal",
                                      justify: "start",
                                      className: eb.rf,
                                      children: [
                                          null !== x &&
                                              (0, s.jsxs)(o.B, {
                                                  direction: "vertical",
                                                  justify: "space-between",
                                                  align: "center",
                                                  className: eb.Nj,
                                                  padding: 16,
                                                  children: [
                                                      (0, s.jsxs)(o.B, {
                                                          direction: "vertical",
                                                          gap: 4,
                                                          children: [
                                                              (0, s.jsx)(d.D, {
                                                                  variant: "heading-xl/semibold",
                                                                  children: T.intl.string(T.t.c6kn6F),
                                                              }),
                                                              (0, s.jsx)(c.E, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-muted",
                                                                  children: T.intl.string(T.t.ZUEGFn),
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
                                                                  text: T.intl.string(T.t["2jxGer"]),
                                                                  onClick: () => {
                                                                      (0, M.k)("safety_flows_modal");
                                                                  },
                                                              }),
                                                              (0, s.jsx)(u.$, {
                                                                  fullWidth: !0,
                                                                  text: T.intl.string(T.t["7NqTJn"]),
                                                                  onClick: () => {
                                                                      k();
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          null === x &&
                                              null != i &&
                                              (0, s.jsx)(eR, { task: i, handleSubmit: w, disabled: I }),
                                      ],
                                  }),
                              }),
                    }),
        ],
    });
};
