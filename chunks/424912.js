n.d(t, {
    A: () => b,
    D: () => j,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(686956),
    r = n(356343),
    c = n(235986),
    d = n(915089),
    o = n(287809),
    u = n(695184),
    x = n(943457),
    m = n(652215),
    g = n(985018),
    C = n(550886);
function j(e) {
    var t;
    let {
            guildTemplate: n,
            onClose: j,
            onBack: b,
            onHubGuildInfoSet: f,
            onGuildCreated: h,
            isSlideReady: p,
            hasFooter: L = !0,
            isCommunity: v = !1,
        } = e,
        [y, O] = i.useState(u.A.getGuildNameSuggestion()),
        [S, A] = i.useState(null),
        [N, _] = i.useState(!1),
        [H, I] = i.useState(null),
        T = !!(null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [E, M] = i.useState(T),
        k = (0, d.GV)(),
        D = i.useRef(null);
    i.useEffect(() => {
        var e;
        p && (null == (e = D.current) || e.focus());
    }, [p]);
    let G = i.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    _(!0), I(null);
                    try {
                        if (null != f) f(y, S);
                        else {
                            let e = await x.A.createGuildFromTemplate(y, S, n, v, E);
                            a.A.transitionToGuildSync(e.id), null == h || h(e.id);
                        }
                    } catch (e) {
                        I(e);
                    }
                    _(!1);
                }
            },
            [n, f, y, S, v, E, h],
        ),
        U = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(s.Button, {
                    variant: "primary",
                    text: null != f ? g.intl.string(g.t.PDTjLN) : g.intl.string(g.t.CumH4u),
                    onClick: G,
                    disabled: 0 === y.length,
                    loading: N,
                }),
                (0, l.jsx)(s.QWc, {
                    size: "sm",
                    variant: "secondary",
                    text: g.intl.string(g.t["13/7kX"]),
                    onClick: b,
                }),
            ],
        });
    return {
        content: (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(s.rQ0, {
                    "data-migration-pending": !0,
                    direction: c.A.Direction.VERTICAL,
                    className: C.wx,
                    separator: !1,
                    children: [
                        (0, l.jsx)(s.Heading, {
                            className: C.DD,
                            variant: "heading-xl/semibold",
                            children: g.intl.string(g.t["2H6Nij"]),
                        }),
                        (0, l.jsx)(s.Text, {
                            className: C.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: g.intl.string(g.t.AAfVqR),
                        }),
                        null != j &&
                            (0, l.jsx)(s.s_y, {
                                "data-migration-pending": !0,
                                className: C.b,
                                onClick: j,
                            }),
                    ],
                }),
                (0, l.jsxs)(s.$mQ, {
                    "data-migration-pending": !0,
                    className: C.iW,
                    children: [
                        (0, l.jsx)("div", {
                            className: C.T3,
                            children: (0, l.jsx)(r.A, {
                                icon: S,
                                onChange: A,
                            }),
                        }),
                        (0, l.jsx)("form", {
                            onSubmit: G,
                            children: (0, l.jsxs)(s.BJc, {
                                gap: 16,
                                children: [
                                    (0, l.jsx)(s.ksK, {
                                        label: g.intl.string(g.t.dBih7e),
                                        required: !0,
                                        error: null == H ? void 0 : H.getFirstFieldErrorMessage("name"),
                                        value: y,
                                        maxLength: 100,
                                        onChange: O,
                                        inputRef: D,
                                        id: k,
                                    }),
                                    T &&
                                        (0, l.jsx)(s.dOG, {
                                            label: "Staff Only",
                                            description: g.intl.string(g.t.edQ5va),
                                            checked: E,
                                            onChange: (e) => M(e),
                                        }),
                                    (0, l.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: g.intl.format(g.t["2bprXx"], { guidelinesURL: m.X7G.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == H || H.hasFieldErrors()
                            ? null
                            : (0, l.jsx)(s.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: H.message,
                              }),
                    ],
                }),
                L &&
                    (0, l.jsx)(s.jlY, {
                        "data-migration-pending": !0,
                        className: C.qr,
                        children: U,
                    }),
            ],
        }),
        footer: U,
    };
}
function b(e) {
    let { content: t } = j(e);
    return t;
}
