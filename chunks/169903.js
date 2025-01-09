n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(192379),
    r = n(584825),
    l = n(14263);
function s(e, t) {
    let n = (0, r.qi)(e),
        s = (0, l.Z)(e);
    return i.useMemo(
        () =>
            n.map((e) => {
                var n;
                let i = null == e ? void 0 : e.role_id;
                return {
                    ...(null !== (n = null == t ? void 0 : t.ppgs[e.id]) && void 0 !== n ? n : {}),
                    key: e.id,
                    subscriptionListing: e,
                    roleMemberCount: null == i ? void 0 : null == s ? void 0 : s[i]
                };
            }),
        [n, null == t ? void 0 : t.ppgs, s]
    );
}
