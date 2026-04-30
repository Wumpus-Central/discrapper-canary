s.d(t, { A: () => y, D: () => A });
var a = s(627968),
    n = s(64700),
    i = s(821609),
    r = s(123292),
    l = s(935462),
    c = s(534514),
    d = s(834730),
    o = s(331322),
    u = s(292666),
    m = s(243721),
    x = s(66834),
    g = s(356343),
    h = s(235986),
    p = s(915089),
    f = s(287809),
    j = s(695184),
    v = s(943457),
    b = s(652215),
    N = s(375708),
    k = s(907891);
function A(e) {
    let {
            guildTemplate: t,
            onClose: s,
            onBack: A,
            onHubGuildInfoSet: y,
            onGuildCreated: C,
            isSlideReady: E,
            hasFooter: _ = !0,
            isCommunity: S = !1,
        } = e,
        [D, G] = n.useState(j.A.getGuildNameSuggestion()),
        [L, w] = n.useState(null),
        [F, R] = n.useState(!1),
        [T, U] = n.useState(null),
        I = !!f.default.getCurrentUser()?.isStaff(),
        [q, Q] = n.useState(I),
        V = (0, p.GV)(),
        X = n.useRef(null);
    n.useEffect(() => {
        E && X.current?.focus();
    }, [E]);
    let B = n.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != t)) {
                    R(!0), U(null);
                    try {
                        if (null != y) y(D, L);
                        else {
                            let e = await v.A.createGuildFromTemplate(D, L, t, S, q);
                            x.A.transitionToGuildSync(e.id), C?.(e.id);
                        }
                    } catch (e) {
                        U(e);
                    }
                    R(!1);
                }
            },
            [t, y, D, L, S, q, C],
        ),
        H = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(i.$, {
                    variant: "primary",
                    text: null != y ? N.intl.string(N.t.PDTjLN) : N.intl.string(N.t.CumH4u),
                    onClick: B,
                    disabled: 0 === D.length,
                    loading: F,
                }),
                (0, a.jsx)(r.Q, { size: "sm", variant: "secondary", text: N.intl.string(N.t["13/7kX"]), onClick: A }),
            ],
        });
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(l.rQ, {
                    "data-migration-pending": !0,
                    direction: h.A.Direction.VERTICAL,
                    className: k.wx,
                    separator: !1,
                    children: [
                        (0, a.jsx)(c.D, {
                            className: k.DD,
                            variant: "heading-xl/semibold",
                            children: N.intl.string(N.t["2H6Nij"]),
                        }),
                        (0, a.jsx)(d.E, {
                            className: k.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: N.intl.string(N.t.AAfVqR),
                        }),
                        null != s && (0, a.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                    ],
                }),
                (0, a.jsxs)(l.$m, {
                    "data-migration-pending": !0,
                    className: k.iW,
                    children: [
                        (0, a.jsx)("div", { className: k.T3, children: (0, a.jsx)(g.A, { icon: L, onChange: w }) }),
                        (0, a.jsx)("form", {
                            onSubmit: B,
                            children: (0, a.jsxs)(o.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(u.k, {
                                        label: N.intl.string(N.t.dBih7e),
                                        required: !0,
                                        error: T?.getFirstFieldErrorMessage("name"),
                                        value: D,
                                        maxLength: 100,
                                        onChange: G,
                                        inputRef: X,
                                        id: V,
                                    }),
                                    I &&
                                        (0, a.jsx)(m.d, {
                                            label: "Staff Only",
                                            description: N.intl.string(N.t.edQ5va),
                                            checked: q,
                                            onChange: (e) => Q(e),
                                        }),
                                    (0, a.jsx)(d.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: N.intl.format(N.t["2bprXx"], { guidelinesURL: b.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, a.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: T.message,
                              }),
                    ],
                }),
                _ && (0, a.jsx)(l.jl, { "data-migration-pending": !0, className: k.qr, children: H }),
            ],
        }),
        footer: H,
    };
}
function y(e) {
    let { content: t } = A(e);
    return t;
}
