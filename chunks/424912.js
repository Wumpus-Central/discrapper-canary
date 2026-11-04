var n = s(477900),
    a = s(582128),
    i = s(935462),
    l = s(331322),
    r = s(123292),
    c = s(821609),
    d = s(534514),
    o = s(834730),
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
    N = s(753240);
function k(e) {
    let {
            guildTemplate: t,
            onClose: s,
            onBack: k,
            onHubGuildInfoSet: A,
            onGuildCreated: E,
            isSlideReady: C,
            hasFooter: _ = !0,
            isCommunity: S = !1,
        } = e,
        [D, G] = a.useState(j.A.getGuildNameSuggestion()),
        [w, L] = a.useState(null),
        [R, F] = a.useState(!1),
        [T, I] = a.useState(null),
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
                    (F(!0), I(null));
                    try {
                        if (null != A) A(D, w);
                        else {
                            let e = await v.A.createGuildFromTemplate(D, w, t, S, Q);
                            (g.A.transitionToGuildSync(e.id), E?.(e.id));
                        }
                    } catch (e) {
                        I(e);
                    }
                    F(!1);
                }
            },
            [t, A, D, w, S, Q, E],
        ),
        X = (0, n.jsxs)(l.B, {
            fullWidth: !0,
            align: "center",
            justify: "space-between",
            direction: "horizontal",
            children: [
                (0, n.jsx)(r.Q, { size: "sm", variant: "secondary", text: y.intl.string(y.t["13/7kX"]), onClick: k }),
                (0, n.jsx)(c.$, {
                    variant: "primary",
                    text: null != A ? y.intl.string(y.t.PDTjLN) : y.intl.string(y.t.CumH4u),
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
                    className: N.wx,
                    separator: !1,
                    children: [
                        (0, n.jsx)(d.D, {
                            className: N.DD,
                            variant: "heading-xl/semibold",
                            children: y.intl.string(y.t["2H6Nij"]),
                        }),
                        (0, n.jsx)(o.E, {
                            className: N.VA,
                            color: "text-default",
                            variant: "body-md/normal",
                            children: y.intl.string(y.t.AAfVqR),
                        }),
                        null != s && (0, n.jsx)(i.s_, { "data-migration-pending": !0, className: N.b, onClick: s }),
                    ],
                }),
                (0, n.jsxs)(i.$m, {
                    "data-migration-pending": !0,
                    className: N.iW,
                    children: [
                        (0, n.jsx)("div", { className: N.T3, children: (0, n.jsx)(x.A, { icon: w, onChange: L }) }),
                        (0, n.jsx)("form", {
                            onSubmit: W,
                            children: (0, n.jsxs)(l.B, {
                                gap: 16,
                                children: [
                                    (0, n.jsx)(u.k, {
                                        label: y.intl.string(y.t.dBih7e),
                                        required: !0,
                                        error: T?.getFirstFieldErrorMessage("name"),
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
                                    (0, n.jsx)(o.E, {
                                        className: N.I4,
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: y.intl.format(y.t["2bprXx"], { guidelinesURL: b.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, n.jsx)(o.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  children: T.message,
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
            let { content: t } = k(e);
            return t;
        },
        D: k,
    },
);
