n.d(t, {
    A: () => i,
}),
    n(747238),
    n(812715);
var r = n(985018);
let l = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function i(e) {
    let t = r.intl.string(r.t.FeUKeA);
    return (
        null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
        {
            sanitizedTitle: t.replace(l, ""),
            title: t,
        }
    );
}
