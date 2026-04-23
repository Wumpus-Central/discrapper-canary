n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(935399),
    o = n(311907),
    d = n(331322),
    u = n(106236),
    c = n(834730),
    g = n(821609),
    m = n(113494),
    _ = n(782134),
    A = n(54570),
    h = n(8880),
    p = n(75804),
    x = n(985018);
let E = a().debounce((e) => {
    (0, A.zU)(e);
}, 250);
function T() {
    let e = (0, o.bG)([h.A], () => h.A.speechRate);
    return (0, i.jsxs)(d.B, {
        gap: 16,
        children: [
            (0, i.jsx)(u.A, {
                label: x.intl.string(x.t.lsW5Ev),
                description: x.intl.string(x.t.Ci4wMS),
                markers: p.P,
                initialValue: e,
                defaultValue: 1,
                stickToMarkers: !0,
                onValueChange: E,
                onValueRender: (e) => `x${e.toFixed(2)}`,
                onMarkerRender: (e) =>
                    0 === e
                        ? (0, i.jsx)(c.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              children: x.intl.string(x.t["493lwX"]),
                          })
                        : 10 === e
                          ? (0, i.jsx)(c.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: x.intl.string(x.t.ZSZEdS),
                            })
                          : 1 === e
                            ? (0, i.jsx)(c.E, {
                                  variant: "text-xs/medium",
                                  color: "text-feedback-positive",
                                  children: "x1.0",
                              })
                            : e % 1 == 0
                              ? ""
                              : void 0,
            }),
            (0, i.jsx)(S, {}),
        ],
    });
}
function S() {
    let [e, t] = s.useState(!1);
    return (
        (0, r.l0)(() => (0, A.pr)()),
        (0, i.jsx)(g.$, {
            text: x.intl.string(x.t.SKNnqq),
            icon: e ? m.E : _.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, A.pr)(), t(!1);
                    return;
                }
                (0, A.AU)(
                    x.intl.string(x.t.PKaNJL),
                    !0,
                    void 0,
                    () => t(!0),
                    () => t(!1),
                ),
                    t(!0);
            },
        })
    );
}
