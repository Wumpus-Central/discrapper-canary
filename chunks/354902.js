n.d(e, { default: () => M });
var i = n(627968),
    r = n(64700),
    a = n(702841),
    s = n(224640),
    o = n(430993),
    l = n(189213),
    u = n(772707),
    c = n(331322),
    E = n(289873),
    d = n(155718),
    R = n(475743),
    f = n(765548),
    C = n(139716),
    I = n(847599),
    N = n(36149),
    _ = n(287809),
    S = n(899847),
    A = n(191627);
let g = Object.freeze({
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
    p = { section: g.ERROR, params: { failureCode: A.vW.GENERIC_ERROR } };
async function T(t, e) {
    try {
        var n;
        return (
            (n = await S.Ay.getConnectionPrerequisites(t, e)),
            "ready" in n
                ? { section: g.REQUEST, params: { teenIdentity: n.teen_identity } }
                : "invalid_link_code" in n
                  ? { section: g.INVALID_CODE }
                  : "verified_teen_blocked" in n
                    ? { section: g.MUST_BE_ADULT }
                    : "requires_adult_verification" in n
                      ? { section: g.CONFIRM_AGE }
                      : p
        );
    } catch {
        return p;
    }
}
var O = n(438732),
    x = n(602339),
    k = n(375708),
    m = n(256768);
function j(t) {
    let e = (0, a.bG)([_.default], () => _.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, R.A)(e);
    r.useEffect(() => {
        null == n || n === e || (null != e && e !== d.Tk.UNVERIFIED && t());
    }, [e, n, t]);
}
function y(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(s.d, {
        transitionState: e,
        onClose: n,
        size: "sm",
        "aria-label": k.intl.string(x.default.GH11eI),
        children: (0, i.jsx)(o.c, {
            children: (0, i.jsx)(c.B, {
                justify: "center",
                align: "center",
                className: m.g,
                children: (0, i.jsx)(E.y, {}),
            }),
        }),
    });
}
function G(t) {
    let { transitionState: e, onClose: n, title: r, description: a, primaryText: s, onPrimary: o } = t;
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: n,
        size: "sm",
        title: r,
        subtitle: a,
        actions: [{ variant: "primary", text: s, onClick: o }],
    });
}
function D(t) {
    let { userId: e, linkCode: n, onResolved: a, transitionState: s, onClose: o } = t;
    return (
        r.useEffect(() => {
            let t = !1;
            return (
                (async function () {
                    let i = await T(e, n);
                    t || (i.section === g.ERROR ? a(i.section, i.params.failureCode) : a(i.section));
                })(),
                () => {
                    t = !0;
                }
            );
        }, []),
        (0, i.jsx)(y, { transitionState: s, onClose: o })
    );
}
function b(t) {
    let { transitionState: e, onPending: n, onClose: a } = t;
    j(n);
    let s = r.useCallback(() => {
        C.A.showAgeVerificationGetStartedModal({ entryPoint: I.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(u.k, {
        transitionState: e,
        onClose: a,
        size: "md",
        graphic: { type: "image", src: "/assets/7af394f8519f888f.svg", aspectRatio: "6/4" },
        title: k.intl.string(x.default.pQQMJ7),
        subtitle: k.intl.format(x.default["0o3yg8"], {
            link: "https://support.discord.com/hc/articles/14155060633623",
        }),
        actions: [
            { variant: "secondary", text: k.intl.string(k.t.oEAioF), onClick: a },
            { variant: "primary", text: k.intl.string(x.default["3oUE4o"]), onClick: s },
        ],
    });
}
function U(t) {
    let { transitionState: e, onPending: n, onClose: a } = t;
    j(n);
    let s = r.useCallback(() => {
        C.A.showAgeVerificationGetStartedModal({ entryPoint: I.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(G, {
        transitionState: e,
        onClose: a,
        title: k.intl.string(x.default.BQFHXW),
        description: k.intl.format(x.default.WDjaKn, { link: { onClick: s } }),
        primaryText: k.intl.string(k.t["NX+WJN"]),
        onPrimary: a,
    });
}
function h(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(G, {
        transitionState: e,
        onClose: n,
        title: k.intl.string(x.default.ewSb6o),
        description: k.intl.string(x.default.jcUN2F),
        primaryText: k.intl.string(k.t.WAI6xu),
        onPrimary: n,
    });
}
function v(t) {
    let { transitionState: e, failureCode: n, onClose: r } = t,
        s = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        o = (0, O.A)(),
        l = A.H1[n],
        u = { isAdult: o, email: s?.email ?? void 0 };
    return (0, i.jsx)(G, {
        transitionState: e,
        onClose: r,
        title: l.header(u),
        description: l.description(u),
        primaryText: k.intl.string(k.t.cpT0Cq),
        onPrimary: r,
    });
}
function F(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(l.Modal, {
        transitionState: e,
        onClose: n,
        size: "sm",
        title: k.intl.string(x.default.GH11eI),
        actions: [{ variant: "primary", text: k.intl.string(k.t.cpT0Cq), onClick: n }],
    });
}
function L(t) {
    let { transitionState: e, onVerified: n, onFailed: s, onClose: o } = t,
        l = (0, N.b8)(),
        u = (0, a.bG)([_.default], () => _.default.getCurrentUser()?.ageVerificationStatus),
        c = r.useRef(!1),
        E = (0, f.A)(n),
        R = (0, f.A)(s);
    return (
        r.useEffect(() => {
            if (!c.current) {
                if (l) {
                    (c.current = !0), E();
                    return;
                }
                u === d.Tk.UNVERIFIED && ((c.current = !0), R());
            }
        }, [l, u, E, R]),
        r.useEffect(() => {
            let t = setTimeout(() => {
                c.current || ((c.current = !0), R());
            }, A.tN);
            return () => clearTimeout(t);
        }, [R]),
        (0, i.jsx)(y, { transitionState: e, onClose: o })
    );
}
function M(t) {
    let { userId: e, linkCode: n, transitionState: a, onClose: s } = t,
        [o, l] = r.useState(g.PREREQ_LOADING),
        [u, c] = r.useState(A.vW.GENERIC_ERROR),
        E = r.useCallback(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.vW.GENERIC_ERROR;
            c(t), l(g.ERROR);
        }, []),
        d = r.useCallback(
            (t, e) => {
                t === g.ERROR ? E(e) : l(t);
            },
            [E],
        ),
        R = r.useCallback(() => {
            l(g.VERIFYING);
        }, []),
        f = r.useCallback(() => {
            l(g.PREREQ_LOADING);
        }, []),
        C = r.useCallback(() => {
            E();
        }, [E]);
    switch (o) {
        case g.CONFIRM_AGE:
            return (0, i.jsx)(b, { transitionState: a, onPending: R, onClose: s });
        case g.VERIFYING:
            return (0, i.jsx)(L, { transitionState: a, onVerified: f, onFailed: C, onClose: s });
        case g.MUST_BE_ADULT:
            return (0, i.jsx)(U, { transitionState: a, onPending: R, onClose: s });
        case g.INVALID_CODE:
            return (0, i.jsx)(h, { transitionState: a, onClose: s });
        case g.REQUEST:
            return (0, i.jsx)(F, { transitionState: a, userId: e, linkCode: n, onClose: s });
        case g.ERROR:
            return (0, i.jsx)(v, { transitionState: a, failureCode: u, onClose: s });
        case g.PREREQ_LOADING:
        default:
            return (0, i.jsx)(D, { userId: e, linkCode: n, onResolved: d, transitionState: a, onClose: s });
    }
}
