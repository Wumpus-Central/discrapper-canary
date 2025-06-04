n.d(t, { U: () => i });
var r = n(591759);
function i(e) {
    var t, n, i;
    let a = r.Z.toURLSafe(e),
        o = null != (t = null == a ? void 0 : a.searchParams.get('referrer_id')) ? t : void 0;
    return {
        referrerId: o,
        customId: null != (n = null == a ? void 0 : a.searchParams.get('custom_id')) ? n : void 0,
        linkId: null != (i = null == a ? void 0 : a.searchParams.get('link_id')) ? i : void 0
    };
}
