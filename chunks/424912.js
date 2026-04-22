l.d(t, { A: () => S, D: () => v });
var i = l(627968),
    s = l(64700),
    a = l(821609),
    n = l(123292),
    r = l(935462),
    c = l(534514),
    d = l(834730),
    o = l(331322),
    u = l(292666),
    m = l(243721),
    x = l(686956),
    C = l(356343),
    g = l(235986),
    h = l(915089),
    j = l(287809),
    L = l(695184),
    _ = l(943457),
    p = l(652215),
    f = l(985018),
    A = l(907891);
function v(e) {
    let {
            guildTemplate: t,
            onClose: l,
            onBack: v,
            onHubGuildInfoSet: S,
            onGuildCreated: b,
            isSlideReady: I,
            hasFooter: N = !0,
            isCommunity: E = !1,
        } = e,
        [y, H] = s.useState(L.A.getGuildNameSuggestion()),
        [M, T] = s.useState(null),
        [G, k] = s.useState(!1),
        [U, D] = s.useState(null),
        Z = !!j.default.getCurrentUser()?.isStaff(),
        [O, R] = s.useState(Z),
        B = (0, h.GV)(),
        V = s.useRef(null);
    s.useEffect(() => {
        I && V.current?.focus();
    }, [I]);
    let F = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != t)) {
                    k(!0), D(null);
                    try {
                        if (null != S) S(y, M);
                        else {
                            let e = await _.A.createGuildFromTemplate(y, M, t, E, O);
                            x.A.transitionToGuildSync(e.id), b?.(e.id);
                        }
                    } catch (e) {
                        D(e);
                    }
                    k(!1);
                }
            },
            [t, S, y, M, E, O, b],
        ),
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.$, {
                    variant: "primary",
                    text: null != S ? f.intl.string(f.t.PDTjLN) : f.intl.string(f.t.CumH4u),
                    onClick: F,
                    disabled: 0 === y.length,
                    loading: G,
                }),
                (0, i.jsx)(n.Q, { size: "sm", variant: "secondary", text: f.intl.string(f.t["13/7kX"]), onClick: v }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.rQ, {
                    "data-migration-pending": !0,
                    direction: g.A.Direction.VERTICAL,
                    className: A.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(c.D, {
                            className: A.DD,
                            variant: "heading-xl/semibold",
                            children: f.intl.string(f.t["2H6Nij"]),
                        }),
                        (0, i.jsx)(d.E, {
                            className: A.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: f.intl.string(f.t.AAfVqR),
                        }),
                        null != l && (0, i.jsx)(r.s_, { "data-migration-pending": !0, className: A.b, onClick: l }),
                    ],
                }),
                (0, i.jsxs)(r.$m, {
                    "data-migration-pending": !0,
                    className: A.iW,
                    children: [
                        (0, i.jsx)("div", { className: A.T3, children: (0, i.jsx)(C.A, { icon: M, onChange: T }) }),
                        (0, i.jsx)("form", {
                            onSubmit: F,
                            children: (0, i.jsxs)(o.B, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(u.k, {
                                        label: f.intl.string(f.t.dBih7e),
                                        required: !0,
                                        error: U?.getFirstFieldErrorMessage("name"),
                                        value: y,
                                        maxLength: 100,
                                        onChange: H,
                                        inputRef: V,
                                        id: B,
                                    }),
                                    Z &&
                                        (0, i.jsx)(m.d, {
                                            label: "Staff Only",
                                            description: f.intl.string(f.t.edQ5va),
                                            checked: O,
                                            onChange: (e) => R(e),
                                        }),
                                    (0, i.jsx)(d.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: f.intl.format(f.t["2bprXx"], { guidelinesURL: p.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == U || U.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: U.message,
                              }),
                    ],
                }),
                N && (0, i.jsx)(r.jl, { "data-migration-pending": !0, className: A.qr, children: w }),
            ],
        }),
        footer: w,
    };
}
function S(e) {
    let { content: t } = v(e);
    return t;
}
