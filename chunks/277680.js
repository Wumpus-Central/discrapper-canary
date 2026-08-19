"use strict";
n.d(t, { A: () => a });
var i = n(375708);
let r = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function a(e) {
    let t = i.intl.string(i.t.FeUKeA);
    return (
        null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
        { sanitizedTitle: t.replace(r, ""), title: t }
    );
}
