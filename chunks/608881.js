n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    c = n(820284),
    u = n(793574),
    d = n(688810),
    p = n(915089),
    f = n(379848),
    h = n(193699),
    A = n(153488),
    g = n(426389),
    m = n(652215),
    b = n(985018),
    _ = n(181485);
function E() {
    let { analyticsLocations: e } = (0, d.Ay)(u.A.ACTIVE_NOW_COLUMN),
        t = (0, a.bG)([A.A], () => A.A.hasConsented(m.YAq.PERSONALIZATION)) ? [] : [s.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, p.GV)();
    return (0, r.jsx)(d.f5, {
        value: e,
        children: (0, r.jsx)(c.A, {
            section: m.JJy.ACTIVE_NOW_COLUMN,
            children: (0, r.jsx)("aside", {
                className: l()(_.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, r.jsx)(o.HOs, {
                    className: _.XG,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                className: _.wx,
                                id: n,
                                children: b.intl.string(b.t.F4Zggw),
                            }),
                            (0, r.jsx)(f.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === s.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, r.jsx)(h.A, {
                                            className: _.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, r.jsx)(g.A, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
