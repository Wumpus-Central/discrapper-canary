n.d(e, { default: () => Z });
var i = n(477900),
    a = n(582128),
    s = n(164636),
    r = n(224640),
    l = n(430993),
    o = n(189213),
    c = n(772707),
    u = n(815021),
    d = n(696208),
    f = n(821609),
    E = n(331322),
    m = n(289873),
    C = n(97808),
    R = n(778712),
    x = n(534514),
    I = n(834730),
    N = n(155718),
    g = n(475743),
    j = n(765548),
    S = n(871309),
    _ = n(171576),
    b = n(36149),
    p = n(287809),
    A = n(486020),
    y = n(899847),
    v = n(191627);
let h = Object.freeze({
        PREREQ_LOADING: "PREREQ_LOADING",
        CONFIRM_AGE: "CONFIRM_AGE",
        VERIFYING: "VERIFYING",
        REQUEST: "REQUEST",
        SENT: "SENT",
        ERROR: "ERROR",
        INVALID_CODE: "INVALID_CODE",
        MUST_BE_ADULT: "MUST_BE_ADULT",
    }),
    k = { section: h.ERROR, params: { failureCode: v.vW.GENERIC_ERROR } };
var T = n(923531),
    O = n(10005),
    U = n(438732),
    G = n(299628),
    D = n(665956),
    F = n(792996),
    L = n(936223),
    P = n(31008);
function V(t) {
    let e = (0, s.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, g.Ay)(e);
    a.useEffect(() => {
        null == n || n === e || (null != e && e !== N.Tk.UNVERIFIED && t());
    }, [e, n, t]);
}
function M(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(r.d, {
        transitionState: e,
        onClose: n,
        size: "sm",
        "aria-label": F.intl.string(D.default.GH11eI),
        children: (0, i.jsx)(l.c, {
            children: (0, i.jsx)(E.B, {
                justify: "center",
                align: "center",
                className: L.g4,
                children: (0, i.jsx)(m.y, {}),
            }),
        }),
    });
}
function w(t) {
    let { transitionState: e, onClose: n, title: a, description: s, primaryText: r, onPrimary: l } = t;
    return (0, i.jsx)(o.a, {
        transitionState: e,
        onClose: n,
        size: "sm",
        title: a,
        subtitle: s,
        actions: [{ variant: "primary", text: r, onClick: l }],
    });
}
function Q(t) {
    let { userId: e, linkCode: n, onResolved: s, transitionState: r, onClose: l } = t;
    return (
        a.useEffect(() => {
            let t = !1;
            return (
                !(async function () {
                    let i = await (async function (t, e) {
                        try {
                            var n;
                            return (
                                (n = await y.Ay.getConnectionPrerequisites(t, e)),
                                "ready" in n
                                    ? { section: h.REQUEST, params: { teenIdentity: n.teen_identity } }
                                    : "invalid_link_code" in n
                                      ? { section: h.INVALID_CODE }
                                      : "verified_teen_blocked" in n
                                        ? { section: h.MUST_BE_ADULT }
                                        : "requires_adult_verification" in n
                                          ? { section: h.CONFIRM_AGE, params: { teenIdentity: n.teen_identity } }
                                          : k
                            );
                        } catch {
                            return k;
                        }
                    })(e, n);
                    t || s(i);
                })(),
                () => {
                    t = !0;
                }
            );
        }, []),
        (0, i.jsx)(M, { transitionState: r, onClose: l })
    );
}
function W(t) {
    let { transitionState: e, onPending: n, onClose: s, teenIdentity: r } = t;
    V(n);
    let l = a.useCallback(() => {
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: s,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/44bd4374a38e08c34fd75fe1140d58962ea08af99b619592b7f259cad5944d4a.svg",
            aspectRatio: "16/9",
        },
        title: F.intl.formatToPlainString(D.default.pQQMJ7, { username: r?.global_name ?? r?.username ?? "" }),
        subtitle: F.intl.format(D.default["0o3yg8"], {
            link: "https://support.discord.com/hc/articles/14155060633623",
        }),
        actions: [
            { variant: "secondary", text: F.intl.string(F.t.oEAioF), onClick: s },
            { variant: "primary", text: F.intl.string(D.default["3oUE4o"]), onClick: l },
        ],
    });
}
function z(t) {
    let { transitionState: e, onPending: n, onClose: s } = t;
    V(n);
    let r = a.useCallback(() => {
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(w, {
        transitionState: e,
        onClose: s,
        title: F.intl.string(D.default.BQFHXW),
        description: F.intl.format(D.default.WDjaKn, { link: { onClick: r } }),
        primaryText: F.intl.string(F.t["NX+WJN"]),
        onPrimary: s,
    });
}
function Y(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(w, {
        transitionState: e,
        onClose: n,
        title: F.intl.string(D.default.ewSb6o),
        description: F.intl.string(D.default.jcUN2F),
        primaryText: F.intl.string(F.t.WAI6xu),
        onPrimary: n,
    });
}
function q(t) {
    let { transitionState: e, failureCode: n, onClose: a } = t,
        r = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
        l = (0, U.A)(),
        o = v.H1[n],
        c = { isAdult: l, email: r?.email ?? void 0 };
    return (0, i.jsx)(w, {
        transitionState: e,
        onClose: a,
        title: o.header(c),
        description: o.description(c),
        primaryText: F.intl.string(F.t.cpT0Cq),
        onPrimary: a,
    });
}
function B(t) {
    let { teenIdentity: e } = t,
        n = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
        a = e.global_name ?? e.username;
    return (0, i.jsxs)("div", {
        className: L.Il,
        children: [
            (0, i.jsxs)("div", {
                className: L.Y,
                children: [
                    (0, i.jsx)(C.eu, {
                        src: null != n ? A.Ay.getUserAvatarURL(n) : void 0,
                        size: R._3.SIZE_48,
                        "aria-label": F.intl.formatToPlainString(D.default.kFj4h1, {
                            name: n?.globalName ?? n?.username ?? "",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: L.I5,
                        children: [
                            (0, i.jsx)("span", { className: L.pw }),
                            (0, i.jsx)("span", { className: L.pw }),
                            (0, i.jsx)("span", { className: L.pw }),
                        ],
                    }),
                    (0, i.jsx)(C.eu, {
                        src: A.Ay.getUserAvatarURL({ id: e.id, avatar: e.avatar, discriminator: "0" }),
                        size: R._3.SIZE_48,
                        "aria-label": F.intl.formatToPlainString(D.default.kFj4h1, { name: a }),
                    }),
                ],
            }),
            (0, i.jsx)(x.D, {
                variant: "heading-xl/semibold",
                className: L.DD,
                children: F.intl.string(D.default.sMmIbm),
            }),
            (0, i.jsx)(x.D, { variant: "heading-xl/semibold", className: L._V, children: a }),
            (0, i.jsx)(I.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: L.vJ,
                children: F.intl.format(D.default.yiUJNU, { username: a }),
            }),
        ],
    });
}
function H(t) {
    let { transitionState: e, onClose: n, userId: s, linkCode: o, teenIdentity: c, onSent: E, onError: m } = t,
        C = (0, j.A)(() => {
            (y.Ay.clearPendingConnection(), E());
        }),
        R = (0, j.A)((t) => {
            m((0, T.Nv)(t));
        }),
        { requestLink: I, isRequestingLink: N } = (0, O.A)({ onSuccess: C, onError: R }),
        g = a.useCallback(() => {
            I(s, o);
        }, [I, s, o]),
        S = a.useCallback(async () => {
            N || (await n());
        }, [N, n]);
    return (0, i.jsxs)(r.d, {
        transitionState: e,
        onClose: S,
        "aria-label": F.intl.string(D.default.sMmIbm),
        size: "md",
        children: [
            (0, i.jsxs)("div", {
                className: L.wx,
                children: [
                    (0, i.jsx)("div", { className: L.b, children: (0, i.jsx)(u.J, { onClick: S, disabled: N }) }),
                    null != c
                        ? (0, i.jsx)(B, { teenIdentity: c })
                        : (0, i.jsx)(x.D, {
                              variant: "heading-xl/semibold",
                              className: L.XW,
                              children: F.intl.string(D.default.GH11eI),
                          }),
                ],
            }),
            (0, i.jsx)(l.c, { controls: (0, i.jsx)("div", {}), children: (0, i.jsx)(G.A, {}) }),
            (0, i.jsx)(d.H, {
                leading: (0, i.jsx)(f.$, {
                    variant: "secondary",
                    text: F.intl.string(F.t["ETE/oC"]),
                    onClick: S,
                    disabled: N,
                }),
                actions: [
                    { variant: "primary", text: F.intl.string(D.default.ISg34l), onClick: g, disabled: N, loading: N },
                ],
            }),
        ],
    });
}
function J(t) {
    let { transitionState: e, onClose: n } = t,
        a = (0, s.bG)([p.default], () => p.default.getCurrentUser());
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: n,
        size: "sm",
        graphic: { type: "image", src: P.A },
        title: F.intl.string(D.default.EpwfZl),
        subtitle: F.intl.format(D.default.dVtWId, { email: a?.email }),
        actions: [{ variant: "primary", text: F.intl.string(F.t.cpT0Cq), onClick: n }],
    });
}
function X(t) {
    let { transitionState: e, onVerified: n, onFailed: r, onClose: l } = t,
        o = (0, b.b8)(),
        c = (0, s.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        u = a.useRef(!1),
        d = (0, j.A)(n),
        f = (0, j.A)(r);
    return (
        a.useEffect(() => {
            if (!u.current) {
                if (o) {
                    ((u.current = !0), d());
                    return;
                }
                c === N.Tk.UNVERIFIED && ((u.current = !0), f());
            }
        }, [o, c, d, f]),
        a.useEffect(() => {
            let t = setTimeout(() => {
                u.current || ((u.current = !0), f());
            }, v.tN);
            return () => clearTimeout(t);
        }, [f]),
        (0, i.jsx)(M, { transitionState: e, onClose: l })
    );
}
function Z(t) {
    let { userId: e, linkCode: n, transitionState: s, onClose: r } = t,
        [l, o] = a.useState(h.PREREQ_LOADING),
        [c, u] = a.useState(v.vW.GENERIC_ERROR),
        [d, f] = a.useState(void 0),
        E = a.useCallback(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.vW.GENERIC_ERROR;
            (u(t), o(h.ERROR));
        }, []),
        m = a.useCallback(
            (t) => {
                t.section === h.ERROR
                    ? E(t.params.failureCode)
                    : ((t.section === h.REQUEST || t.section === h.CONFIRM_AGE) && f(t.params.teenIdentity),
                      o(t.section));
            },
            [E],
        ),
        C = a.useCallback(() => {
            o(h.VERIFYING);
        }, []),
        R = a.useCallback(() => {
            o(h.PREREQ_LOADING);
        }, []),
        x = a.useCallback(() => {
            E();
        }, [E]),
        I = a.useCallback(() => {
            o(h.SENT);
        }, []);
    switch (l) {
        case h.CONFIRM_AGE:
            return (0, i.jsx)(W, { transitionState: s, onPending: C, onClose: r, teenIdentity: d });
        case h.VERIFYING:
            return (0, i.jsx)(X, { transitionState: s, onVerified: R, onFailed: x, onClose: r });
        case h.MUST_BE_ADULT:
            return (0, i.jsx)(z, { transitionState: s, onPending: C, onClose: r });
        case h.INVALID_CODE:
            return (0, i.jsx)(Y, { transitionState: s, onClose: r });
        case h.REQUEST:
            return (0, i.jsx)(H, {
                transitionState: s,
                userId: e,
                linkCode: n,
                teenIdentity: d,
                onSent: I,
                onError: E,
                onClose: r,
            });
        case h.SENT:
            return (0, i.jsx)(J, { transitionState: s, onClose: r });
        case h.ERROR:
            return (0, i.jsx)(q, { transitionState: s, failureCode: c, onClose: r });
        case h.PREREQ_LOADING:
        default:
            return (0, i.jsx)(Q, { userId: e, linkCode: n, onResolved: m, transitionState: s, onClose: r });
    }
}
