s.d(t, { A: () => y, D: () => A });
var a = s(477900),
    n = s(582128),
    i = s(935462),
    r = s(331322),
    l = s(123292),
    c = s(821609),
    d = s(297264),
    o = s(834730),
    u = s(95477),
    m = s(193249),
    x = s(66834),
    g = s(356343),
    h = s(235986),
    p = s(915089),
    f = s(287809),
    j = s(695184),
    v = s(943457),
    b = s(652215),
    N = s(105292),
    k = s(753240);
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
        [w, L] = n.useState(null),
        [F, R] = n.useState(!1),
        [T, I] = n.useState(null),
        U = !!f.default.getCurrentUser()?.isStaff(),
        [Q, V] = n.useState(U),
        q = (0, p.GV)(),
        B = n.useRef(null);
    n.useEffect(() => {
        E && B.current?.focus();
    }, [E]);
    let W = n.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != t)) {
                    (R(!0), I(null));
                    try {
                        if (null != y) y(D, w);
                        else {
                            let e = await v.A.createGuildFromTemplate(D, w, t, S, Q);
                            (x.A.transitionToGuildSync(e.id), C?.(e.id));
                        }
                    } catch (e) {
                        I(e);
                    }
                    R(!1);
                }
            },
            [t, y, D, w, S, Q, C],
        ),
        X = (0, a.jsxs)(r.B, {
            fullWidth: !0,
            align: "center",
            justify: "space-between",
            direction: "horizontal",
            children: [
                (0, a.jsx)(l.Q, { size: "sm", variant: "secondary", text: N.intl.string(N.t["13/7kX"]), onClick: A }),
                (0, a.jsx)(c.$, {
                    variant: "primary",
                    text: null != y ? N.intl.string(N.t.PDTjLN) : N.intl.string(N.t.CumH4u),
                    onClick: W,
                    disabled: 0 === D.length,
                    loading: F,
                }),
            ],
        });
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(i.rQ, {
                    "data-migration-pending": !0,
                    direction: h.A.Direction.VERTICAL,
                    className: k.wx,
                    separator: !1,
                    children: [
                        (0, a.jsx)(d.D, {
                            className: k.DD,
                            variant: "heading-xl/semibold",
                            children: N.intl.string(N.t["2H6Nij"]),
                        }),
                        (0, a.jsx)(o.E, {
                            className: k.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: N.intl.string(N.t.AAfVqR),
                        }),
                        null != s && (0, a.jsx)(i.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                    ],
                }),
                (0, a.jsxs)(i.$m, {
                    "data-migration-pending": !0,
                    className: k.iW,
                    children: [
                        (0, a.jsx)("div", { className: k.T3, children: (0, a.jsx)(g.A, { icon: w, onChange: L }) }),
                        (0, a.jsx)("form", {
                            onSubmit: W,
                            children: (0, a.jsxs)(r.B, {
                                gap: 16,
                                children: [
                                    (0, a.jsx)(u.k, {
                                        label: N.intl.string(N.t.dBih7e),
                                        required: !0,
                                        error: T?.getFirstFieldErrorMessage("name"),
                                        value: D,
                                        maxLength: 100,
                                        onChange: G,
                                        inputRef: B,
                                        id: q,
                                    }),
                                    U &&
                                        (0, a.jsx)(m.d, {
                                            label: "Staff Only",
                                            description: N.intl.string(N.t.edQ5va),
                                            checked: Q,
                                            onChange: (e) => V(e),
                                        }),
                                    (0, a.jsx)(o.E, {
                                        className: k.I4,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: N.intl.format(N.t["2bprXx"], { guidelinesURL: b.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, a.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: T.message,
                              }),
                    ],
                }),
                _ && (0, a.jsx)(i.jl, { "data-migration-pending": !0, children: X }),
            ],
        }),
        footer: X,
    };
}
function y(e) {
    let { content: t } = A(e);
    return t;
}
