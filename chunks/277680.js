n.d(t, { A: () => r });
var i = n(985018);
let a = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function r(e) {
    let t = i.intl.string(i.t.FeUKeA);
    return (
        null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
        { sanitizedTitle: t.replace(a, ""), title: t }
    );
}
