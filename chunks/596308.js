a.d(e, { I: () => i });
var r = a(395848),
    n = a(383704),
    o = a(202937),
    _ = a(896247);
let i = (t, e) => {
    let a = (0, _.W)(),
        i = 'navigate';
    return (
        a && ((r.m.document && r.m.document.prerendering) || (0, o.A)() > 0 ? (i = 'prerender') : r.m.document && r.m.document.wasDiscarded ? (i = 'restore') : a.type && (i = a.type.replace(/_/g, '-'))),
        {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: 'good',
            delta: 0,
            entries: [],
            id: (0, n.f)(),
            navigationType: i
        }
    );
};
