n.d(t, { L: () => N });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(187322),
    o = n(51264),
    d = n(820284),
    u = n(765671),
    c = n(793574),
    A = n(688810),
    h = n(757780),
    _ = n(748319),
    E = n(355205),
    p = n(652234),
    m = n(489683),
    g = n(947926),
    I = n(366811),
    C = n(652215),
    f = n(985018),
    T = n(111113);
function S(e) {
    let { analyticsLocations: t } = (0, A.Ay)(c.A.ACTIVITY_PANEL),
        n = (0, I.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, i.jsx)(A.f5, { value: t, children: (0, i.jsx)(E.A, { ...e, guildId: n }) });
}
let N = r.memo(function () {
    let e = r.useRef(null);
    (0, u.i4)(
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
        className: l()(T.C3, { [T.aB]: t }),
        "aria-label": f.intl.string(f.t.vTl6Lk),
        children: (0, i.jsxs)(s.xp, {
            containerRef: e,
            children: [
                (0, i.jsx)(o.A, {}),
                (0, i.jsx)(g.A, {}),
                (0, i.jsx)(p.A, {}),
                (0, i.jsx)(d.A, { section: C.JJy.ACTIVITY_PANEL, children: (0, i.jsx)(S, { className: T.iz }) }),
                (0, i.jsx)(d.A, { section: C.JJy.RTC_CONNECTION_PANEL, children: (0, i.jsx)(m.A, {}) }),
                (0, i.jsx)(d.A, { section: C.JJy.ACCOUNT_PANEL, children: (0, i.jsx)(_.A, {}) }),
            ],
        }),
    });
});
