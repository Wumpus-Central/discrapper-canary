_.d(e, { I: () => E });
var a = _(395848),
    r = _(383704),
    n = _(202937),
    o = _(896247);
let E = (t, e) => {
    let _ = (0, o.W)(),
        E = "navigate";
    return (
        _ &&
            ((a.m.document && a.m.document.prerendering) || (0, n.A)() > 0
                ? (E = "prerender")
                : a.m.document && a.m.document.wasDiscarded
                  ? (E = "restore")
                  : _.type && (E = _.type.replace(/_/g, "-"))),
        {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: (0, r.f)(),
            navigationType: E,
        }
    );
};
