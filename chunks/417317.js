n.d(t, { Z: () => u });
var i = n(473749),
    r = n(442837),
    l = n(430824),
    a = n(70956),
    o = n(411935),
    s = n(210218);
let c = 30 * a.Z.Millis.MINUTE;
function u(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([l.Z], () => l.Z.getGuild(null != t ? t : null), [t]),
        a = (0, r.e7)([s.Z], () => (null != n ? s.Z.getStorefrontData(n.id) : void 0));
    return (
        i.useEffect(() => {
            if ((null == n ? void 0 : n.id) == null) return;
            let e = s.Z.getStorefrontData(null == n ? void 0 : n.id);
            (null == e ? void 0 : e.state) === "loading" ||
                ((null == e ? void 0 : e.state) === "fetched" &&
                    (null == e ? void 0 : e.fetchedAt) != null &&
                    Date.now() - (null == e ? void 0 : e.fetchedAt) < c) ||
                (0, o.YL)(null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id]),
        a
    );
}
