(n.d(t, { w: () => o }), n(704826), n(35282), n(781311));
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
    i = /(\n|\t|\s)/g,
    a = (e) => e.replace(r, '').replace(i, ' '),
    o = (e) => (null == e ? [] : a(e).trim().split(' '));
