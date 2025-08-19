n.d(t, { W: () => E });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(772848),
    a = n(481060),
    s = n(626135),
    c = n(617136),
    u = n(497505),
    d = n(110560),
    p = n(266843),
    m = n(46140),
    f = n(981631),
    g = n(388032),
    _ = n(815648),
    h = n(87181);
function b(e) {
    let { questId: t, fullWidth: n } = e;
    return (0, r.jsx)("div", {
        className: _.buttonContainer,
        children: (0, r.jsx)(a.zxk, {
            fullWidth: n,
            variant: "primary",
            onClick: () => {
                (0, d.navigateToQuestHome)({ fromContent: u.jn.EXCLUDED_QUEST_EMBED }),
                    s.default.track(
                        f.rMx.QUEST_CONTENT_CLICKED,
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
                                click_id: (0, o.Z)(),
                                cta_name: c.jZ.VIEW_QUESTS,
                                is_targeted: !1,
                            },
                            (0, c.mH)(u.jn.EXCLUDED_QUEST_EMBED),
                        ),
                    );
            },
            text: g.intl.string(g.t.GURBQk),
        }),
    });
}
function E(e) {
    let { questId: t } = e,
        { containerRef: n, size: i } = (0, p.h)();
    return (
        (0, c.Zk)(m.V_.EXCLUDED_QUEST, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                n.current = e;
            },
            className: l()(_.container, {
                [_.wide]: "lg" === i,
                [_.tall]: "lg" !== i,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: _.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "lg" === i ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: g.intl.string(g.t.vnP31d),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: _.__invalid_mobileWebCopy,
                            children: g.intl.string(g.t.nuWSYW),
                        }),
                        (0, r.jsx)(b, {
                            questId: t,
                            fullWidth: "lg" !== i,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: _.imgContainer,
                    children: (0, r.jsx)("img", {
                        src: h,
                        alt: "",
                        className: _.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
