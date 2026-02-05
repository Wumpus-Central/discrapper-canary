l.d(t, { A: () => j, D: () => h });
var i = l(627968),
    s = l(64700),
    a = l(397927),
    n = l(686956),
    r = l(356343),
    c = l(235986),
    d = l(915089),
    o = l(287809),
    u = l(695184),
    x = l(943457),
    m = l(652215),
    C = l(985018),
    g = l(550886);
function h(e) {
    let {
            guildTemplate: t,
            onClose: l,
            onBack: h,
            onHubGuildInfoSet: j,
            onGuildCreated: L,
            isSlideReady: _,
            hasFooter: f = !0,
            isCommunity: p = !1,
        } = e,
        [A, v] = s.useState(u.A.getGuildNameSuggestion()),
        [S, b] = s.useState(null),
        [I, N] = s.useState(!1),
        [T, H] = s.useState(null),
        y = !!o.default.getCurrentUser()?.isStaff(),
        [M, G] = s.useState(y),
        E = (0, d.GV)(),
        U = s.useRef(null);
    s.useEffect(() => {
        _ && U.current?.focus();
    }, [_]);
    let k = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != t)) {
                    N(!0), H(null);
                    try {
                        if (null != j) j(A, S);
                        else {
                            let e = await x.A.createGuildFromTemplate(A, S, t, p, M);
                            n.A.transitionToGuildSync(e.id), L?.(e.id);
                        }
                    } catch (e) {
                        H(e);
                    }
                    N(!1);
                }
            },
            [t, j, A, S, p, M, L],
        ),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Button, {
                    variant: "primary",
                    text: null != j ? C.intl.string(C.t.PDTjLN) : C.intl.string(C.t.CumH4u),
                    onClick: k,
                    disabled: 0 === A.length,
                    loading: I,
                }),
                (0, i.jsx)(a.QWc, { size: "sm", variant: "secondary", text: C.intl.string(C.t["13/7kX"]), onClick: h }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.rQ0, {
                    "data-migration-pending": !0,
                    direction: c.A.Direction.VERTICAL,
                    className: g.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            className: g.DD,
                            variant: "heading-xl/semibold",
                            children: C.intl.string(C.t["2H6Nij"]),
                        }),
                        (0, i.jsx)(a.Text, {
                            className: g.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: C.intl.string(C.t.AAfVqR),
                        }),
                        null != l && (0, i.jsx)(a.s_y, { "data-migration-pending": !0, className: g.b, onClick: l }),
                    ],
                }),
                (0, i.jsxs)(a.$mQ, {
                    "data-migration-pending": !0,
                    className: g.iW,
                    children: [
                        (0, i.jsx)("div", { className: g.T3, children: (0, i.jsx)(r.A, { icon: S, onChange: b }) }),
                        (0, i.jsx)("form", {
                            onSubmit: k,
                            children: (0, i.jsxs)(a.BJc, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(a.ksK, {
                                        label: C.intl.string(C.t.dBih7e),
                                        required: !0,
                                        error: T?.getFirstFieldErrorMessage("name"),
                                        value: A,
                                        maxLength: 100,
                                        onChange: v,
                                        inputRef: U,
                                        id: E,
                                    }),
                                    y &&
                                        (0, i.jsx)(a.dOG, {
                                            label: "Staff Only",
                                            description: C.intl.string(C.t.edQ5va),
                                            checked: M,
                                            onChange: (e) => G(e),
                                        }),
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: C.intl.format(C.t["2bprXx"], { guidelinesURL: m.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(a.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: T.message,
                              }),
                    ],
                }),
                f && (0, i.jsx)(a.jlY, { "data-migration-pending": !0, className: g.qr, children: D }),
            ],
        }),
        footer: D,
    };
}
function j(e) {
    let { content: t } = h(e);
    return t;
}
