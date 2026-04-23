n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(554146),
    o = n(573613),
    c = n(534514),
    d = n(820284),
    u = n(793574),
    m = n(688810),
    A = n(915089),
    h = n(379848),
    x = n(193699),
    p = n(153488),
    g = n(426389),
    N = n(652215),
    f = n(985018),
    _ = n(678428);
function I() {
    let { analyticsLocations: e } = (0, m.Ay)(u.A.ACTIVE_NOW_COLUMN),
        t = (0, a.bG)([p.A], () => p.A.hasConsented(N.YAq.PERSONALIZATION)) ? [] : [r.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, A.GV)();
    return (0, i.jsx)(m.f5, {
        value: e,
        children: (0, i.jsx)(d.A, {
            section: N.JJy.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)("aside", {
                className: l()(_.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, i.jsx)(o.Ip, {
                    className: _.XG,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.D, {
                                variant: "heading-lg/semibold",
                                className: _.wx,
                                id: n,
                                children: f.intl.string(f.t.F4Zggw),
                            }),
                            (0, i.jsx)(h.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === r.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, i.jsx)(x.A, {
                                            className: _.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, i.jsx)(g.A, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
