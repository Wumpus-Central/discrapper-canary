n.d(t, { Z: () => c });
var i = n(473749),
    r = n(442837),
    l = n(70956),
    a = n(411935),
    o = n(210218);
let s = 30 * l.Z.Millis.MINUTE;
function c(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([o.Z], () => (null != t ? o.Z.getStorefrontData(t) : void 0));
    return (
        i.useEffect(() => {
            if (null == t) return;
            let e = o.Z.getStorefrontData(t);
            (null == e ? void 0 : e.loading) ||
                ((null == e ? void 0 : e.fetchedAt) != null && Date.now() - (null == e ? void 0 : e.fetchedAt) < s) ||
                (0, a.YL)(t);
        }, [t]),
        n
    );
}
