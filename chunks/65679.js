n.d(t, { k: () => o }), n(388685);
var r = n(685816),
    i = n(52030),
    a = n(215023);
function o() {
    for (let e of [a.AW.HOME, a.AW.ORBS, a.AW.CATALOG]) {
        let t = i.Z.getShopBlocks(e).find((e) => e.type === r.z.WIDE_BANNER);
        if ((null == t ? void 0 : t.dismissibleContentVersion) != null) return t.dismissibleContentVersion;
    }
    return 0;
}
