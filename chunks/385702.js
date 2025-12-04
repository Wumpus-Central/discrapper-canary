r.d(t, { I: () => _ });
var n = r(514962),
    a = r(484127),
    i = r(560684),
    o = r(24931);
let _ = (e, t) => {
    let r = (0, o.W)(),
        _ = "navigate";
    return (
        r &&
            ((n.m.document && n.m.document.prerendering) || (0, i.A)() > 0
                ? (_ = "prerender")
                : n.m.document && n.m.document.wasDiscarded
                  ? (_ = "restore")
                  : r.type && (_ = r.type.replace(/_/g, "-"))),
        {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: (0, a.f)(),
            navigationType: _,
        }
    );
};
