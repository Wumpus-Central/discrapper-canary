"use strict";
n.d(t, { A: () => a });
var r = n(155718),
    i = n(652215);
function a(e) {
    if (null == e) return null;
    let { linkedGames: t = [] } = e,
        n = t.find((e) => e.type === r.Mh.NVIDIA);
    return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === i.d3x.NVIDIA_GDN_APP);
}
