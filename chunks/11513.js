(n.d(t, { w: () => a }), n(704826), n(35282), n(781311));
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
    i = /(\n|\t|\s)/g,
    o = (e) => e.replace(r, '').replace(i, ' '),
    a = (e) => (null == e ? [] : o(e).trim().split(' '));
