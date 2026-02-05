n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(311907),
    s = n(554146),
    o = n(397927),
    d = n(820284),
    c = n(793574),
    u = n(688810),
    A = n(915089),
    h = n(379848),
    _ = n(193699),
    m = n(153488),
    p = n(426389),
    g = n(652215),
    E = n(985018),
    f = n(181485);
function I() {
    let { analyticsLocations: e } = (0, u.Ay)(c.A.ACTIVE_NOW_COLUMN),
        t = (0, l.bG)([m.A], () => m.A.hasConsented(g.YAq.PERSONALIZATION)) ? [] : [s.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, A.GV)();
    return (0, i.jsx)(u.f5, {
        value: e,
        children: (0, i.jsx)(d.A, {
            section: g.JJy.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)("aside", {
                className: a()(f.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, i.jsx)(o.HOs, {
                    className: f.XG,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                className: f.wx,
                                id: n,
                                children: E.intl.string(E.t.F4Zggw),
                            }),
                            (0, i.jsx)(h.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === s.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, i.jsx)(_.A, {
                                            className: f.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, i.jsx)(p.A, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
