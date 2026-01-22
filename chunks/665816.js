n.d(t, { i: () => b });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    l = n(954571),
    c = n(216456),
    u = n(545986),
    d = n(394900),
    f = n(652215),
    p = n(985018),
    _ = n(933674),
    h = n(956324);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    let { questId: t, questContent: n, fullWidth: i } = e,
        a = () => {
            (0, u.navigateToQuestHome)({ fromContent: n }),
                l.default.track(
                    f.HAw.QUEST_CONTENT_CLICKED,
                    g(
                        {
                            quest_id: t,
                            click_id: (0, s.A)(),
                            cta_name: c.Cy.VIEW_QUESTS,
                            is_targeted: !1,
                        },
                        (0, c.fF)(n),
                    ),
                );
        };
    return (0, r.jsx)("div", {
        className: _.UD,
        children: (0, r.jsx)(o.Button, {
            fullWidth: i,
            variant: "primary",
            onClick: a,
            text: p.intl.string(p.t.GURBQl),
        }),
    });
}
function b(e) {
    let { questId: t, fallbackReason: n, bodyText: i, questContent: s } = e,
        { containerRef: l, size: u } = (0, d.L)();
    return (
        (0, c.Ii)(n, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                l.current = e;
            },
            className: a()(_.kL, {
                [_.U]: "lg" === u,
                [_.SP]: "lg" !== u,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: _.hQ,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: p.intl.string(p.t.vnP31W),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: _.__invalid_mobileWebCopy,
                            children: i,
                        }),
                        (0, r.jsx)(E, {
                            questId: t,
                            questContent: s,
                            fullWidth: "lg" !== u,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: _.Dg,
                    children: (0, r.jsx)("img", {
                        src: h,
                        alt: "",
                        className: _.Wg,
                    }),
                }),
            ],
        })
    );
}
