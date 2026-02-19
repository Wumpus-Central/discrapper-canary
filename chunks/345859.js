"use strict";
n.d(t, { H: () => a });
var i = n(64700),
    s = n(311907),
    l = n(822382),
    r = n(65600);
function a(e) {
    let t = (0, s.bG)([r.A], () => {
        let t = (0, l.bS)(e);
        return r.A.getSearchResultsQueryString(t);
    });
    return i.useMemo(() => (0, l._o)(t ?? ""), [t]);
}
