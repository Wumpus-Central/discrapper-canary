n.d(t, { W: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(772848),
    s = n(755721),
    l = n(481060),
    c = n(626135),
    u = n(617136),
    d = n(497505),
    f = n(110560),
    _ = n(266843),
    p = n(46140),
    h = n(981631),
    m = n(388032),
    g = n(815648),
    E = n(87181);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let { questId: t } = e,
        n = () => {
            (0, f.navigateToQuestHome)({ fromContent: d.jn.EXCLUDED_QUEST_EMBED }),
                c.default.track(
                    h.rMx.QUEST_CONTENT_CLICKED,
                    y(
                        {
                            quest_id: t,
                            click_id: (0, a.Z)(),
                            cta_name: u.jZ.VIEW_QUESTS,
                            is_targeted: !1,
                        },
                        (0, u.mH)(d.jn.EXCLUDED_QUEST_EMBED),
                    ),
                );
        };
    return (0, r.jsx)("div", {
        className: g.buttonContainer,
        children: (0, r.jsx)(s.zx, {
            className: g.button,
            color: s.Tt.BRAND,
            onClick: n,
            children: m.intl.string(m.t.GURBQk),
        }),
    });
}
function v(e) {
    let { questId: t } = e,
        { containerRef: n, size: i } = (0, _.h)();
    return (
        (0, u.Zk)(p.V_.EXCLUDED_QUEST, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                n.current = e;
            },
            className: o()(g.container, {
                [g.wide]: "lg" === i,
                [g.tall]: "lg" !== i,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: g.contentContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: "lg" === i ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: m.intl.string(m.t.vnP31d),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: g.__invalid_mobileWebCopy,
                            children: m.intl.string(m.t.nuWSYW),
                        }),
                        (0, r.jsx)(O, { questId: t }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: g.imgContainer,
                    children: (0, r.jsx)("img", {
                        src: E,
                        alt: "",
                        className: g.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
