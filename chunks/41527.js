n.d(e, { default: () => Z });
var i = n(477900),
    a = n(582128),
    s = n(164636),
    r = n(224640),
    l = n(430993),
    o = n(189213),
    c = n(772707),
    d = n(815021),
    u = n(696208),
    E = n(821609),
    f = n(331322),
    C = n(289873),
    m = n(97808),
    R = n(778712),
    I = n(534514),
    x = n(834730),
    N = n(155718),
    g = n(475743),
    j = n(765548),
    S = n(871309),
    _ = n(171576),
    p = n(36149),
    b = n(287809),
    A = n(486020),
    y = n(899847),
    v = n(923531),
    h = n(191627);
let k = Object.freeze({
        PREREQ_LOADING: "PREREQ_LOADING",
        CONFIRM_AGE: "CONFIRM_AGE",
        VERIFYING: "VERIFYING",
        REQUEST: "REQUEST",
        SENT: "SENT",
        ERROR: "ERROR",
        INVALID_CODE: "INVALID_CODE",
        MUST_BE_ADULT: "MUST_BE_ADULT",
    }),
    T = { section: k.ERROR, params: { failureCode: h.vW.GENERIC_ERROR } };
var O = n(10005),
    U = n(438732),
    D = n(299628),
    G = n(564382),
    F = n(792996),
    L = n(936223),
    V = n(31008);
function P(t) {
    let e = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.ageVerificationStatus),
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
        "aria-label": F.intl.string(G.default.GH11eI),
        children: (0, i.jsx)(l.c, {
            children: (0, i.jsx)(f.B, {
                justify: "center",
                align: "center",
                className: L.g4,
                children: (0, i.jsx)(C.y, {}),
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
                                    ? { section: k.REQUEST, params: { teenIdentity: n.teen_identity } }
                                    : "invalid_link_code" in n
                                      ? { section: k.INVALID_CODE }
                                      : "verified_teen_blocked" in n
                                        ? { section: k.MUST_BE_ADULT }
                                        : "requires_adult_verification" in n
                                          ? { section: k.CONFIRM_AGE, params: { teenIdentity: n.teen_identity } }
                                          : T
                            );
                        } catch {
                            return T;
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
    P(n);
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
        title: F.intl.formatToPlainString(G.default.pQQMJ7, { username: r?.global_name ?? r?.username ?? "" }),
        subtitle: F.intl.format(G.default["0o3yg8"], {
            link: "https://support.discord.com/hc/articles/14155060633623",
        }),
        actions: [
            { variant: "secondary", text: F.intl.string(F.t.oEAioF), onClick: s },
            { variant: "primary", text: F.intl.string(G.default["3oUE4o"]), onClick: l },
        ],
    });
}
function z(t) {
    let { transitionState: e, onPending: n, onClose: s } = t;
    P(n);
    let r = a.useCallback(() => {
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(w, {
        transitionState: e,
        onClose: s,
        title: F.intl.string(G.default.BQFHXW),
        description: F.intl.format(G.default.WDjaKn, { link: { onClick: r } }),
        primaryText: F.intl.string(F.t["NX+WJN"]),
        onPrimary: s,
    });
}
function Y(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(w, {
        transitionState: e,
        onClose: n,
        title: F.intl.string(G.default.ewSb6o),
        description: F.intl.string(G.default.jcUN2F),
        primaryText: F.intl.string(F.t.WAI6xu),
        onPrimary: n,
    });
}
function q(t) {
    let { transitionState: e, failureCode: n, onClose: a } = t,
        r = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        l = (0, U.A)(),
        o = h.H1[n],
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
        n = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        a = e.global_name ?? e.username;
    return (0, i.jsxs)("div", {
        className: L.Il,
        children: [
            (0, i.jsxs)("div", {
                className: L.Y,
                children: [
                    (0, i.jsx)(m.eu, {
                        src: null != n ? A.Ay.getUserAvatarURL(n) : void 0,
                        size: R._3.SIZE_48,
                        "aria-label": F.intl.formatToPlainString(G.default.kFj4h1, {
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
                    (0, i.jsx)(m.eu, {
                        src: A.Ay.getUserAvatarURL({ id: e.id, avatar: e.avatar, discriminator: "0" }),
                        size: R._3.SIZE_48,
                        "aria-label": F.intl.formatToPlainString(G.default.kFj4h1, { name: a }),
                    }),
                ],
            }),
            (0, i.jsx)(I.D, {
                variant: "heading-xl/semibold",
                className: L.DD,
                children: F.intl.string(G.default.sMmIbm),
            }),
            (0, i.jsx)(I.D, { variant: "heading-xl/semibold", className: L._V, children: a }),
            (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: L.vJ,
                children: F.intl.format(G.default.yiUJNU, { username: a }),
            }),
        ],
    });
}
function H(t) {
    let { transitionState: e, onClose: n, userId: s, linkCode: o, teenIdentity: c, onSent: f, onError: C } = t,
        m = (0, j.A)(() => {
            (y.Ay.clearPendingConnection(), f());
        }),
        R = (0, j.A)((t) => {
            C(
                290007 === t.code
                    ? { section: k.INVALID_CODE }
                    : { section: k.ERROR, params: { failureCode: (0, v.Nv)(t) } },
            );
        }),
        { requestLink: x, isRequestingLink: N } = (0, O.A)({ onSuccess: m, onError: R }),
        g = a.useCallback(() => {
            x(s, o);
        }, [x, s, o]),
        S = a.useCallback(async () => {
            N || (await n());
        }, [N, n]);
    return (0, i.jsxs)(r.d, {
        transitionState: e,
        onClose: S,
        "aria-label": F.intl.string(G.default.sMmIbm),
        size: "md",
        children: [
            (0, i.jsxs)("div", {
                className: L.wx,
                children: [
                    (0, i.jsx)("div", { className: L.b, children: (0, i.jsx)(d.J, { onClick: S, disabled: N }) }),
                    null != c
                        ? (0, i.jsx)(B, { teenIdentity: c })
                        : (0, i.jsx)(I.D, {
                              variant: "heading-xl/semibold",
                              className: L.XW,
                              children: F.intl.string(G.default.GH11eI),
                          }),
                ],
            }),
            (0, i.jsx)(l.c, { controls: (0, i.jsx)("div", {}), children: (0, i.jsx)(D.A, {}) }),
            (0, i.jsx)(u.H, {
                leading: (0, i.jsx)(E.$, {
                    variant: "secondary",
                    text: F.intl.string(F.t["ETE/oC"]),
                    onClick: S,
                    disabled: N,
                }),
                actions: [
                    { variant: "primary", text: F.intl.string(G.default.ISg34l), onClick: g, disabled: N, loading: N },
                ],
            }),
        ],
    });
}
function J(t) {
    let { transitionState: e, onClose: n } = t,
        a = (0, s.bG)([b.default], () => b.default.getCurrentUser());
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: n,
        size: "sm",
        graphic: { type: "image", src: V.A },
        title: F.intl.string(G.default.EpwfZl),
        subtitle: F.intl.format(G.default.dVtWId, { email: a?.email }),
        actions: [{ variant: "primary", text: F.intl.string(F.t.cpT0Cq), onClick: n }],
    });
}
function X(t) {
    let { transitionState: e, onVerified: n, onFailed: r, onClose: l } = t,
        o = (0, p.b8)(),
        c = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.ageVerificationStatus),
        d = a.useRef(!1),
        u = (0, j.A)(n),
        E = (0, j.A)(r);
    return (
        a.useEffect(() => {
            if (!d.current) {
                if (o) {
                    ((d.current = !0), u());
                    return;
                }
                c === N.Tk.UNVERIFIED && ((d.current = !0), E());
            }
        }, [o, c, u, E]),
        a.useEffect(() => {
            let t = setTimeout(() => {
                d.current || ((d.current = !0), E());
            }, h.tN);
            return () => clearTimeout(t);
        }, [E]),
        (0, i.jsx)(M, { transitionState: e, onClose: l })
    );
}
function Z(t) {
    let { userId: e, linkCode: n, transitionState: s, onClose: r } = t,
        [l, o] = a.useState(k.PREREQ_LOADING),
        [c, d] = a.useState(h.vW.GENERIC_ERROR),
        [u, E] = a.useState(void 0),
        f = a.useCallback(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.vW.GENERIC_ERROR;
            (d(t), o(k.ERROR));
        }, []),
        C = a.useCallback(
            (t) => {
                t.section === k.ERROR
                    ? f(t.params.failureCode)
                    : ((t.section === k.REQUEST || t.section === k.CONFIRM_AGE) && E(t.params.teenIdentity),
                      o(t.section));
            },
            [f],
        ),
        m = a.useCallback(() => {
            o(k.VERIFYING);
        }, []),
        R = a.useCallback(() => {
            o(k.PREREQ_LOADING);
        }, []),
        I = a.useCallback(() => {
            f();
        }, [f]),
        x = a.useCallback(() => {
            o(k.SENT);
        }, []);
    switch (l) {
        case k.CONFIRM_AGE:
            return (0, i.jsx)(W, { transitionState: s, onPending: m, onClose: r, teenIdentity: u });
        case k.VERIFYING:
            return (0, i.jsx)(X, { transitionState: s, onVerified: R, onFailed: I, onClose: r });
        case k.MUST_BE_ADULT:
            return (0, i.jsx)(z, { transitionState: s, onPending: m, onClose: r });
        case k.INVALID_CODE:
            return (0, i.jsx)(Y, { transitionState: s, onClose: r });
        case k.REQUEST:
            return (0, i.jsx)(H, {
                transitionState: s,
                userId: e,
                linkCode: n,
                teenIdentity: u,
                onSent: x,
                onError: C,
                onClose: r,
            });
        case k.SENT:
            return (0, i.jsx)(J, { transitionState: s, onClose: r });
        case k.ERROR:
            return (0, i.jsx)(q, { transitionState: s, failureCode: c, onClose: r });
        case k.PREREQ_LOADING:
        default:
            return (0, i.jsx)(Q, { userId: e, linkCode: n, onResolved: C, transitionState: s, onClose: r });
    }
}
