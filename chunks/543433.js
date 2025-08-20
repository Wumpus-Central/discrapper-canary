n.d(t, { w: () => C });
var r = n(951288);
n(647438);
var o = n(120356),
    s = n.n(o),
    i = n(772848),
    a = n(481060),
    l = n(626135),
    u = n(617136),
    c = n(110560),
    d = n(266843),
    m = n(981631),
    p = n(388032),
    h = n(598272),
    g = n(87181);
function x(e) {
    let { questId: t, questContent: n, fullWidth: o } = e;
    return (0, r.jsx)("div", {
        className: h.buttonContainer,
        children: (0, r.jsx)(a.zxk, {
            fullWidth: o,
            variant: "primary",
            onClick: () => {
                (0, c.navigateToQuestHome)({ fromContent: n }),
                    l.default.track(
                        m.rMx.QUEST_CONTENT_CLICKED,
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
                                click_id: (0, i.Z)(),
                                cta_name: u.jZ.VIEW_QUESTS,
                                is_targeted: !1,
                            },
                            (0, u.mH)(n),
                        ),
                    );
            },
            text: p.intl.string(p.t.GURBQk),
        }),
    });
}
function C(e) {
    let { questId: t, fallbackReason: n, bodyText: o, questContent: i } = e,
        { containerRef: l, size: c } = (0, d.h)();
    return (
        (0, u.Zk)(n, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                l.current = e;
            },
            className: s()(h.container, {
                [h.wide]: "lg" === c,
                [h.tall]: "lg" !== c,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: h.contentContainer,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "lg" === c ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: p.intl.string(p.t.vnP31d),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: h.__invalid_mobileWebCopy,
                            children: o,
                        }),
                        (0, r.jsx)(x, {
                            questId: t,
                            questContent: i,
                            fullWidth: "lg" !== c,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: h.imgContainer,
                    children: (0, r.jsx)("img", {
                        src: g,
                        alt: "",
                        className: h.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
