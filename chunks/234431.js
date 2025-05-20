n.d(t, { U: () => i });
var r = n(591759);
function i(e) {
    var t, n, i;
    let o = r.Z.toURLSafe(e),
        a = null != (t = null == o ? void 0 : o.searchParams.get('referrer_id')) ? t : void 0;
    return {
        referrerId: a,
        customId: null != (n = null == o ? void 0 : o.searchParams.get('custom_id')) ? n : void 0,
        linkId: null != (i = null == o ? void 0 : o.searchParams.get('link_id')) ? i : void 0
    };
}
