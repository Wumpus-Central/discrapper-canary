a.d(e, { I: () => i });
var r = a(395848),
    _ = a(383704),
    n = a(202937),
    o = a(896247);
let i = (t, e) => {
    let a = (0, o.W)(),
        i = 'navigate';
    return (
        a && ((r.m.document && r.m.document.prerendering) || (0, n.A)() > 0 ? (i = 'prerender') : r.m.document && r.m.document.wasDiscarded ? (i = 'restore') : a.type && (i = a.type.replace(/_/g, '-'))),
        {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: 'good',
            delta: 0,
            entries: [],
            id: (0, _.f)(),
            navigationType: i
        }
    );
};
