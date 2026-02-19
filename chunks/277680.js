"use strict";
n.d(t, { A: () => l });
var i = n(985018);
let s = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function l(e) {
    let t = i.intl.string(i.t.FeUKeA);
    return (
        null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
        { sanitizedTitle: t.replace(s, ""), title: t }
    );
}
