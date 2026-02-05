n.d(t, { L: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(158954),
    o = n(51264),
    d = n(820284),
    c = n(765671),
    u = n(793574),
    A = n(688810),
    h = n(757780),
    _ = n(748319),
    m = n(355205),
    p = n(652234),
    g = n(489683),
    E = n(947926),
    f = n(366811),
    I = n(652215),
    C = n(985018),
    N = n(933460);
function T(e) {
    let { analyticsLocations: t } = (0, A.Ay)(u.A.ACTIVITY_PANEL),
        n = (0, f.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, i.jsx)(A.f5, { value: t, children: (0, i.jsx)(m.A, { ...e, guildId: n }) });
}
let S = r.memo(function () {
    let e = r.useRef(null);
    (0, c.i4)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", `${t}px`);
        },
        [],
    );
    let { isSorting: t } = (0, h.A)();
    return (0, i.jsx)("section", {
        ref: e,
        className: l()(N.C3, { [N.aB]: t }),
        "aria-label": C.intl.string(C.t.StREWK),
        children: (0, i.jsxs)(s.xpW, {
            containerRef: e,
            children: [
                (0, i.jsx)(o.A, {}),
                (0, i.jsx)(E.A, {}),
                (0, i.jsx)(p.A, {}),
                (0, i.jsx)(d.A, { section: I.JJy.ACTIVITY_PANEL, children: (0, i.jsx)(T, { className: N.iz }) }),
                (0, i.jsx)(d.A, { section: I.JJy.RTC_CONNECTION_PANEL, children: (0, i.jsx)(g.A, {}) }),
                (0, i.jsx)(d.A, { section: I.JJy.ACCOUNT_PANEL, children: (0, i.jsx)(_.A, {}) }),
            ],
        }),
    });
});
