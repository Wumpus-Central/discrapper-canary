n.d(t, { Z: () => a });
var r = n(911969),
    i = n(981631);
function a(e) {
    if (null == e) return null;
    let { linkedGames: t = [] } = e,
        n = t.find((e) => e.type === r.tE.NVIDIA);
    return null != n ? n : e.thirdPartySkus.find((e) => e.distributor === i.GQo.NVIDIA_GDN_APP);
}
