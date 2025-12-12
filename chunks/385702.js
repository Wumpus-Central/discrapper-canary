n.d(t, { I: () => _ });
var r = n(514962),
    i = n(484127),
    a = n(560684),
    o = n(24931);
let _ = (e, t) => {
    let n = (0, o.W)(),
        _ = "navigate";
    return (
        n &&
            ((r.m.document && r.m.document.prerendering) || (0, a.A)() > 0
                ? (_ = "prerender")
                : r.m.document && r.m.document.wasDiscarded
                  ? (_ = "restore")
                  : n.type && (_ = n.type.replace(/_/g, "-"))),
        {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: (0, i.f)(),
            navigationType: _,
        }
    );
};
