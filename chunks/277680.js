n.d(t, { A: () => s });
var i = n(985018);
let l = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function s(e) {
    let t = i.intl.string(i.t.FeUKeA);
    return (
        null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
        { sanitizedTitle: t.replace(l, ""), title: t }
    );
}
