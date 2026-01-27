n.d(t, {
    i: () => b,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(835245),
    s = n(397927),
    o = n(954571),
    c = n(18437),
    u = n(590202),
    d = n(545986),
    p = n(394900),
    m = n(652215),
    f = n(985018),
    g = n(933674),
    h = n(956324);

function _(e) {
    let { questId: t, questContent: n, fullWidth: i } = e;
    return (0, r.jsx)("div", {
        className: g.UD,
        children: (0, r.jsx)(s.Button, {
            fullWidth: i,
            variant: "primary",
            onClick: () => {
                (0, d.navigateToQuestHome)({
                    fromContent: n,
                }),
                    o.default.track(
                        m.HAw.QUEST_CONTENT_CLICKED,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                quest_id: t,
                                click_id: (0, a.A)(),
                                cta_name: u.Cy.VIEW_QUESTS,
                                is_targeted: !1,
                            },
                            (0, u.fF)(n),
                        ),
                    );
            },
            text: f.intl.string(f.t.GURBQl),
        }),
    });
}

function b(e) {
    let { questId: t, fallbackReason: n, bodyText: i, questContent: a } = e,
        { containerRef: o, size: u } = (0, p.L)();
    return (
        (0, c.Ii)(n, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                o.current = e;
            },
            className: l()(g.kL, {
                [g.U]: "lg" === u,
                [g.SP]: "lg" !== u,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: g.hQ,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: f.intl.string(f.t.vnP31W),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: g.__invalid_mobileWebCopy,
                            children: i,
                        }),
                        (0, r.jsx)(_, {
                            questId: t,
                            questContent: a,
                            fullWidth: "lg" !== u,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: g.Dg,
                    children: (0, r.jsx)("img", {
                        src: h,
                        alt: "",
                        className: g.Wg,
                    }),
                }),
            ],
        })
    );
}
