n.d(e, { M: () => H });
var r = n(477900),
    s = n(582128),
    l = n(403581),
    c = n(834730),
    o = n(821609),
    i = n(396583),
    a = n(812095),
    u = n(75678),
    d = n(871123),
    m = n(831024),
    x = n(906383),
    h = n(421108),
    j = n(503698),
    v = n.n(j),
    f = n(317097),
    k = n(43990),
    N = n(406810),
    p = n(52133),
    g = n(417098),
    b = n(818348),
    C = n(375708),
    A = n(395822);
function y(t) {
    let { className: e, color: n = "default", sticky: s = !1, children: l } = t,
        c = s ? A.qf : void 0;
    function o() {
        let {
            className: t,
            noticeColor: e,
            customStyle: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsx)(g.$T, { className: t, color: e, style: n, children: l });
    }
    if ("nitro-pink" === n)
        return o({
            className: v()(A.cI, A.p3, c, e),
            customStyle: {
                "--custom-notice-background": "var(--background-surface-highest)",
                "--custom-notice-text": "var(--text-strong)",
                "--custom-notice-button-hover": "var(--background-surface-highest)",
            },
        });
    if ((0, f.qt)(n)) {
        let t = (0, f.OK)((0, f.LX)(n)) > 0.5 ? b.NJ.DARK : b.NJ.LIGHT;
        return (0, r.jsx)(k.N, {
            theme: t,
            children: (t) =>
                o({
                    className: v()(t, A.cI, c, e),
                    customStyle: {
                        "--custom-notice-background": n,
                        "--custom-notice-text": "var(--text-strong)",
                        "--custom-notice-button-hover": n,
                    },
                }),
        });
    }
    return (0, r.jsx)(k.N, {
        theme: b.NJ.DARK,
        children: (t) => o({ className: v()(t, A.cI, c, e), noticeColor: g.Hv.BRAND }),
    });
}
function I(t) {
    let { Icon: e, children: n, endDatetime: l, ...c } = t,
        [o, a] = s.useState(() => (0, h.ZH)(l));
    function u() {
        return (0, r.jsxs)("div", {
            className: A.lt,
            children: [null != e && (0, r.jsx)(e, { size: "xs", color: "currentColor", className: A.Kk }), n],
        });
    }
    return ((0, i.A)(() => {
        let t = (0, h.ZH)(l);
        a((e) => (null == t ? null : null != e && (0, p.A)(e, t) ? e : t));
    }, 1e3),
    null != o)
        ? o.days > 0
            ? (0, r.jsxs)(y, { ...c, children: [u(), (0, r.jsx)(S, { days: o.days })] })
            : (0, r.jsxs)(y, { ...c, children: [u(), (0, r.jsx)(z, { timeLeft: o })] })
        : null != l
          ? null
          : (0, r.jsx)(y, { ...c, children: u() });
}
function S(t) {
    let { days: e } = t;
    return (0, r.jsxs)("div", {
        className: A.S5,
        children: [
            (0, r.jsx)(N.ClockIcon, { size: "sm", color: "currentColor" }),
            (0, r.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: C.intl.formatToPlainString(C.t.BXpdIg, { days: e }),
            }),
        ],
    });
}
function z(t) {
    let {
        timeLeft: { days: e, hours: n, minutes: s, seconds: l },
    } = t;
    function o(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = String(t).padStart(2, "0").split("");
        return (0, r.jsx)(r.Fragment, {
            children: n.map((t, n) =>
                (0, r.jsx)(
                    c.E,
                    {
                        className: v()(A.g2, { [A.$2]: e }),
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: t,
                    },
                    n,
                ),
            ),
        });
    }
    function i() {
        return (0, r.jsx)(c.E, { className: A.At, variant: "text-lg/bold", children: ":" });
    }
    return (0, r.jsxs)("div", {
        className: A.kz,
        children: [e > 0 && o(e), e > 0 && i(), o(n), i(), o(s), i(), o(l, !0)],
    });
}
var E = n(202541),
    R = n(279673);
function H(t) {
    let { applicationId: e, analyticsLocations: n } = t,
        j = (0, m.u)({ surface: "storefront_banner", applicationId: e }),
        v = (0, x.Pc)(j),
        f = j?.endsAt ?? null,
        [, k] = s.useReducer((t) => t + 1, 0);
    (0, i.A)(k, null != f ? 1e3 : null);
    let N = null != f && null == (0, h.ZH)(f),
        p = s.useCallback(() => {
            (0, u.A)({
                subscriptionTier: E.pe.TIER_2,
                analyticsLocations: n,
                applicationId: e,
                ...(0, d.zl)(j?.rewardRequirements ?? []),
            });
        }, [n, e, j]);
    if (null == j || N) return null;
    if ((0, x.ad)(v))
        return (0, r.jsx)(y, {
            color: "nitro-pink",
            sticky: !0,
            children: (0, r.jsxs)("div", {
                className: R.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.FS,
                        children: [
                            (0, r.jsx)(l.t, { size: "xs", color: "currentColor", className: R.Kk }),
                            (0, r.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "currentColor",
                                children: (0, a.U)(j.text),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: l.t,
                        text: C.intl.string(C.t.pj0XBN),
                        onClick: p,
                    }),
                ],
            }),
        });
    let g = "nitro" === j.flavor;
    return (0, r.jsx)(I, {
        sticky: !0,
        Icon: g ? l.t : j.Icon,
        endDatetime: j.endsAt,
        color: g ? "nitro-pink" : void 0,
        children: (0, r.jsx)(c.E, { variant: "text-sm/normal", color: "currentColor", children: (0, a.U)(j.text) }),
    });
}
