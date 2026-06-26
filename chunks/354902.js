n.d(e, { default: () => K });
var i = n(627968),
    a = n(64700),
    s = n(702841),
    r = n(224640),
    l = n(430993),
    o = n(189213),
    c = n(772707),
    u = n(815021),
    d = n(696208),
    E = n(821609),
    f = n(331322),
    C = n(289873),
    m = n(97808),
    R = n(778712),
    x = n(534514),
    N = n(834730),
    I = n(155718),
    g = n(475743),
    j = n(765548),
    S = n(379257),
    _ = n(847599),
    A = n(36149),
    p = n(287809),
    b = n(486020),
    v = n(899847),
    T = n(191627);
let h = Object.freeze({
        PREREQ_LOADING: "PREREQ_LOADING",
        CONFIRM_AGE: "CONFIRM_AGE",
        VERIFYING: "VERIFYING",
        REQUEST: "REQUEST",
        SENT: "SENT",
        ERROR: "ERROR",
        INVALID_CODE: "INVALID_CODE",
        MUST_BE_ADULT: "MUST_BE_ADULT",
        TEEN_SCAN: "TEEN_SCAN",
    }),
    k = { section: h.ERROR, params: { failureCode: T.vW.GENERIC_ERROR } };
async function y(t, e) {
    try {
        var n;
        return (
            (n = await v.Ay.getConnectionPrerequisites(t, e)),
            "ready" in n
                ? { section: h.REQUEST, params: { teenIdentity: n.teen_identity } }
                : "invalid_link_code" in n
                  ? { section: h.INVALID_CODE }
                  : "verified_teen_blocked" in n
                    ? { section: h.MUST_BE_ADULT }
                    : "requires_adult_verification" in n
                      ? { section: h.CONFIRM_AGE }
                      : k
        );
    } catch {
        return k;
    }
}
var U = n(923531),
    O = n(10005),
    D = n(438732),
    G = n(299628),
    F = n(477480),
    L = n(375708),
    V = n(198528),
    M = n(31008);
function P(t) {
    let e = (0, s.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, g.A)(e);
    a.useEffect(() => {
        null == n || n === e || (null != e && e !== I.Tk.UNVERIFIED && t());
    }, [e, n, t]);
}
function w(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(r.d, {
        transitionState: e,
        onClose: n,
        size: "sm",
        "aria-label": L.intl.string(F.default.GH11eI),
        children: (0, i.jsx)(l.c, {
            children: (0, i.jsx)(f.B, {
                justify: "center",
                align: "center",
                className: V.g4,
                children: (0, i.jsx)(C.y, {}),
            }),
        }),
    });
}
function Q(t) {
    let { transitionState: e, onClose: n, title: a, description: s, primaryText: r, onPrimary: l } = t;
    return (0, i.jsx)(o.Modal, {
        transitionState: e,
        onClose: n,
        size: "sm",
        title: a,
        subtitle: s,
        actions: [{ variant: "primary", text: r, onClick: l }],
    });
}
function W(t) {
    let { userId: e, linkCode: n, onResolved: s, transitionState: r, onClose: l } = t;
    return (
        a.useEffect(() => {
            let t = !1;
            return (
                (async function () {
                    let i = await y(e, n);
                    t || s(i);
                })(),
                () => {
                    t = !0;
                }
            );
        }, []),
        (0, i.jsx)(w, { transitionState: r, onClose: l })
    );
}
function z(t) {
    let { transitionState: e, onPending: n, onClose: s } = t;
    P(n);
    let r = a.useCallback(() => {
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: s,
        size: "md",
        graphic: { type: "image", src: "/assets/7af394f8519f888f.svg", aspectRatio: "6/4" },
        title: L.intl.string(F.default.pQQMJ7),
        subtitle: L.intl.format(F.default["0o3yg8"], {
            link: "https://support.discord.com/hc/articles/14155060633623",
        }),
        actions: [
            { variant: "secondary", text: L.intl.string(L.t.oEAioF), onClick: s },
            { variant: "primary", text: L.intl.string(F.default["3oUE4o"]), onClick: r },
        ],
    });
}
function Y(t) {
    let { transitionState: e, onPending: n, onClose: s } = t;
    P(n);
    let r = a.useCallback(() => {
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(Q, {
        transitionState: e,
        onClose: s,
        title: L.intl.string(F.default.BQFHXW),
        description: L.intl.format(F.default.WDjaKn, { link: { onClick: r } }),
        primaryText: L.intl.string(L.t["NX+WJN"]),
        onPrimary: s,
    });
}
function q(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(Q, {
        transitionState: e,
        onClose: n,
        title: L.intl.string(F.default.ewSb6o),
        description: L.intl.string(F.default.jcUN2F),
        primaryText: L.intl.string(L.t.WAI6xu),
        onPrimary: n,
    });
}
function B(t) {
    let { transitionState: e, failureCode: n, onClose: a } = t,
        r = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
        l = (0, D.A)(),
        o = T.H1[n],
        c = { isAdult: l, email: r?.email ?? void 0 };
    return (0, i.jsx)(Q, {
        transitionState: e,
        onClose: a,
        title: o.header(c),
        description: o.description(c),
        primaryText: L.intl.string(L.t.cpT0Cq),
        onPrimary: a,
    });
}
function H(t) {
    let { teenIdentity: e } = t,
        n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
        a = e.global_name ?? e.username;
    return (0, i.jsxs)("div", {
        className: V.Il,
        children: [
            (0, i.jsxs)("div", {
                className: V.Y,
                children: [
                    (0, i.jsx)(m.eu, {
                        src: null != n ? b.Ay.getUserAvatarURL(n) : void 0,
                        size: R._3.SIZE_48,
                        "aria-label": L.intl.formatToPlainString(F.default.kFj4h1, {
                            name: n?.globalName ?? n?.username ?? "",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: V.I5,
                        children: [
                            (0, i.jsx)("span", { className: V.pw }),
                            (0, i.jsx)("span", { className: V.pw }),
                            (0, i.jsx)("span", { className: V.pw }),
                        ],
                    }),
                    (0, i.jsx)(m.eu, {
                        src: b.Ay.getUserAvatarURL({ id: e.id, avatar: e.avatar, discriminator: "0" }),
                        size: R._3.SIZE_48,
                        "aria-label": L.intl.formatToPlainString(F.default.kFj4h1, { name: a }),
                    }),
                ],
            }),
            (0, i.jsx)(x.D, {
                variant: "heading-xl/semibold",
                className: V.DD,
                children: L.intl.string(F.default.sMmIbm),
            }),
            (0, i.jsx)(x.D, { variant: "heading-xl/semibold", className: V._V, children: a }),
            (0, i.jsx)(N.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: V.vJ,
                children: L.intl.format(F.default.yiUJNU, { username: a }),
            }),
        ],
    });
}
function J(t) {
    let { transitionState: e, onClose: n, userId: s, linkCode: o, teenIdentity: c, onSent: f, onError: C } = t,
        m = (0, j.A)(() => {
            v.Ay.clearPendingConnection(), f();
        }),
        R = (0, j.A)((t) => {
            C((0, U.Nv)(t));
        }),
        { requestLink: N, isRequestingLink: I } = (0, O.A)({ onSuccess: m, onError: R }),
        g = a.useCallback(() => {
            N(s, o);
        }, [N, s, o]),
        S = a.useCallback(async () => {
            I || (await n());
        }, [I, n]);
    return (0, i.jsxs)(r.d, {
        transitionState: e,
        onClose: S,
        "aria-label": L.intl.string(F.default.sMmIbm),
        size: "md",
        children: [
            (0, i.jsxs)("div", {
                className: V.wx,
                children: [
                    (0, i.jsx)("div", { className: V.b, children: (0, i.jsx)(u.J, { onClick: S, disabled: I }) }),
                    null != c
                        ? (0, i.jsx)(H, { teenIdentity: c })
                        : (0, i.jsx)(x.D, {
                              variant: "heading-xl/semibold",
                              className: V.XW,
                              children: L.intl.string(F.default.GH11eI),
                          }),
                ],
            }),
            (0, i.jsx)(l.c, { controls: (0, i.jsx)("div", {}), children: (0, i.jsx)(G.A, {}) }),
            (0, i.jsx)(d.H, {
                leading: (0, i.jsx)(E.$, {
                    variant: "secondary",
                    text: L.intl.string(L.t["ETE/oC"]),
                    onClick: S,
                    disabled: I,
                }),
                actions: [
                    { variant: "primary", text: L.intl.string(F.default.ISg34l), onClick: g, disabled: I, loading: I },
                ],
            }),
        ],
    });
}
function X(t) {
    let { transitionState: e, onClose: n } = t,
        a = (0, s.bG)([p.default], () => p.default.getCurrentUser());
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: n,
        size: "sm",
        graphic: { type: "image", src: M.A },
        title: L.intl.string(F.default.EpwfZl),
        subtitle: L.intl.format(F.default.dVtWId, { email: a?.email }),
        actions: [{ variant: "primary", text: L.intl.string(L.t.cpT0Cq), onClick: n }],
    });
}
function Z(t) {
    let { transitionState: e, onVerified: n, onFailed: r, onClose: l } = t,
        o = (0, A.b8)(),
        c = (0, s.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        u = a.useRef(!1),
        d = (0, j.A)(n),
        E = (0, j.A)(r);
    return (
        a.useEffect(() => {
            if (!u.current) {
                if (o) {
                    (u.current = !0), d();
                    return;
                }
                c === I.Tk.UNVERIFIED && ((u.current = !0), E());
            }
        }, [o, c, d, E]),
        a.useEffect(() => {
            let t = setTimeout(() => {
                u.current || ((u.current = !0), E());
            }, T.tN);
            return () => clearTimeout(t);
        }, [E]),
        (0, i.jsx)(w, { transitionState: e, onClose: l })
    );
}
function K(t) {
    let { userId: e, linkCode: n, transitionState: s, onClose: r } = t,
        [l, o] = a.useState(h.PREREQ_LOADING),
        [c, u] = a.useState(T.vW.GENERIC_ERROR),
        [d, E] = a.useState(void 0),
        f = a.useCallback(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.vW.GENERIC_ERROR;
            u(t), o(h.ERROR);
        }, []),
        C = a.useCallback(
            (t) => {
                t.section === h.ERROR
                    ? f(t.params.failureCode)
                    : (t.section === h.REQUEST && E(t.params.teenIdentity), o(t.section));
            },
            [f],
        ),
        m = a.useCallback(() => {
            o(h.VERIFYING);
        }, []),
        R = a.useCallback(() => {
            o(h.PREREQ_LOADING);
        }, []),
        x = a.useCallback(() => {
            f();
        }, [f]),
        N = a.useCallback(() => {
            o(h.SENT);
        }, []);
    switch (l) {
        case h.CONFIRM_AGE:
            return (0, i.jsx)(z, { transitionState: s, onPending: m, onClose: r });
        case h.VERIFYING:
            return (0, i.jsx)(Z, { transitionState: s, onVerified: R, onFailed: x, onClose: r });
        case h.MUST_BE_ADULT:
            return (0, i.jsx)(Y, { transitionState: s, onPending: m, onClose: r });
        case h.INVALID_CODE:
            return (0, i.jsx)(q, { transitionState: s, onClose: r });
        case h.REQUEST:
            return (0, i.jsx)(J, {
                transitionState: s,
                userId: e,
                linkCode: n,
                teenIdentity: d,
                onSent: N,
                onError: f,
                onClose: r,
            });
        case h.SENT:
            return (0, i.jsx)(X, { transitionState: s, onClose: r });
        case h.ERROR:
            return (0, i.jsx)(B, { transitionState: s, failureCode: c, onClose: r });
        case h.PREREQ_LOADING:
        default:
            return (0, i.jsx)(W, { userId: e, linkCode: n, onResolved: C, transitionState: s, onClose: r });
    }
}
