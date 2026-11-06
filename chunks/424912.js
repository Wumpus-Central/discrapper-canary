var n = s(477900),
    a = s(582128),
    i = s(935462),
    r = s(331322),
    l = s(123292),
    c = s(821609),
    o = s(534514),
    d = s(834730),
    u = s(95477),
    m = s(143129),
    g = s(778858),
    x = s(356343),
    h = s(235986),
    f = s(915089),
    p = s(287809),
    j = s(695184),
    v = s(943457),
    b = s(652215),
    y = s(792996),
    A = s(753240);
function N(e) {
    let {
            guildTemplate: t,
            onClose: s,
            onBack: N,
            onHubGuildInfoSet: k,
            onGuildCreated: E,
            isSlideReady: C,
            hasFooter: _ = !0,
            isCommunity: S = !1,
        } = e,
        [D, G] = a.useState(j.A.getGuildNameSuggestion()),
        [w, L] = a.useState(null),
        [R, T] = a.useState(!1),
        [F, I] = a.useState(null),
        U = !!p.default.getCurrentUser()?.isStaff(),
        [Q, V] = a.useState(U),
        q = (0, f.GV)(),
        B = a.useRef(null);
    a.useEffect(() => {
        C && B.current?.focus();
    }, [C]);
    let W = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != t)) {
                    (T(!0), I(null));
                    try {
                        if (null != k) k(D, w);
                        else {
                            let e = await v.A.createGuildFromTemplate(D, w, t, S, Q);
                            (g.A.transitionToGuildSync(e.id), E?.(e.id));
                        }
                    } catch (e) {
                        I(e);
                    }
                    T(!1);
                }
            },
            [t, k, D, w, S, Q, E],
        ),
        X = (0, n.jsxs)(r.B, {
            fullWidth: !0,
            align: "center",
            justify: "space-between",
            direction: "horizontal",
            children: [
                (0, n.jsx)(l.Q, { size: "sm", variant: "secondary", text: y.intl.string(y.t["13/7kX"]), onClick: N }),
                (0, n.jsx)(c.$, {
                    variant: "primary",
                    text: null != k ? y.intl.string(y.t.PDTjLN) : y.intl.string(y.t.CumH4u),
                    onClick: W,
                    disabled: 0 === D.length,
                    loading: R,
                }),
            ],
        });
    return {
        content: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(i.rQ, {
                    "data-migration-pending": !0,
                    direction: h.A.Direction.VERTICAL,
                    className: A.wx,
                    separator: !1,
                    children: [
                        (0, n.jsx)(o.D, {
                            className: A.DD,
                            variant: "heading-xl/semibold",
                            children: y.intl.string(y.t["2H6Nij"]),
                        }),
                        (0, n.jsx)(d.E, {
                            className: A.VA,
                            color: "text-default",
                            variant: "body-md/normal",
                            children: y.intl.string(y.t.AAfVqR),
                        }),
                        null != s && (0, n.jsx)(i.s_, { "data-migration-pending": !0, className: A.b, onClick: s }),
                    ],
                }),
                (0, n.jsxs)(i.$m, {
                    "data-migration-pending": !0,
                    className: A.iW,
                    children: [
                        (0, n.jsx)("div", { className: A.T3, children: (0, n.jsx)(x.A, { icon: w, onChange: L }) }),
                        (0, n.jsx)("form", {
                            onSubmit: W,
                            children: (0, n.jsxs)(r.B, {
                                gap: 16,
                                children: [
                                    (0, n.jsx)(u.k, {
                                        label: y.intl.string(y.t.dBih7e),
                                        required: !0,
                                        error: F?.getFirstFieldErrorMessage("name"),
                                        value: D,
                                        maxLength: 100,
                                        onChange: G,
                                        inputRef: B,
                                        id: q,
                                    }),
                                    U &&
                                        (0, n.jsx)(m.d, {
                                            label: "Staff Only",
                                            description: y.intl.string(y.t.edQ5va),
                                            checked: Q,
                                            onChange: (e) => V(e),
                                        }),
                                    (0, n.jsx)(d.E, {
                                        className: A.I4,
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: y.intl.format(y.t["2bprXx"], { guidelinesURL: b.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == F || F.hasFieldErrors()
                            ? null
                            : (0, n.jsx)(d.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  children: F.message,
                              }),
                    ],
                }),
                _ && (0, n.jsx)(i.jl, { "data-migration-pending": !0, children: X }),
            ],
        }),
        footer: X,
    };
}
s.d(
    t,
    {},
    {
        A: function (e) {
            let { content: t } = N(e);
            return t;
        },
        D: N,
    },
);
