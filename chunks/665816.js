n.d(t, {
    i: () => b,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(835245),
    o = n(397927),
    l = n(954571),
    c = n(18437),
    u = n(590202),
    d = n(545986),
    f = n(394900),
    p = n(652215),
    _ = n(985018),
    h = n(933674),
    m = n(956324);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e) {
    let { questId: t, questContent: n, fullWidth: i } = e,
        a = () => {
            (0, d.navigateToQuestHome)({
                fromContent: n,
            }),
                l.default.track(
                    p.HAw.QUEST_CONTENT_CLICKED,
                    E(
                        {
                            quest_id: t,
                            click_id: (0, s.A)(),
                            cta_name: u.Cy.VIEW_QUESTS,
                            is_targeted: !1,
                        },
                        (0, u.fF)(n),
                    ),
                );
        };
    return (0, r.jsx)("div", {
        className: h.UD,
        children: (0, r.jsx)(o.Button, {
            fullWidth: i,
            variant: "primary",
            onClick: a,
            text: _.intl.string(_.t.GURBQl),
        }),
    });
}

function b(e) {
    let { questId: t, fallbackReason: n, bodyText: i, questContent: s } = e,
        { containerRef: l, size: u } = (0, f.L)();
    return (
        (0, c.Ii)(n, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                l.current = e;
            },
            className: a()(h.kL, {
                [h.U]: "lg" === u,
                [h.SP]: "lg" !== u,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: h.hQ,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: _.intl.string(_.t.vnP31W),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: h.__invalid_mobileWebCopy,
                            children: i,
                        }),
                        (0, r.jsx)(y, {
                            questId: t,
                            questContent: s,
                            fullWidth: "lg" !== u,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: h.Dg,
                    children: (0, r.jsx)("img", {
                        src: m,
                        alt: "",
                        className: h.Wg,
                    }),
                }),
            ],
        })
    );
}
