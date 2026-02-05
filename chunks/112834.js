"use strict";
n.d(t, { m: () => i });
var r = n(818348);
function i(e) {
    if (null == e) return;
    let t = r.rE.get(e);
    return null != t ? `theme-${t} theme-${e} images-${t}` : `theme-${e} images-${e}`;
}
