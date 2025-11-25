n.d(t, { Z: () => d });
var i = n(473749),
    r = n(442837),
    l = n(430824),
    a = n(70956),
    o = n(411935),
    s = n(210218),
    c = n(699955);
let u = 30 * a.Z.Millis.MINUTE;
function d(e) {
    let { guildId: t, location: n } = e,
        a = (0, c.cZ)({ location: n }),
        d = (0, r.e7)([l.Z], () => l.Z.getGuild(null != t ? t : null), [t]),
        p = (0, r.e7)([s.Z], () => (null != d ? s.Z.getStorefrontData(d.id) : void 0));
    return (
        i.useEffect(() => {
            if ((null == d ? void 0 : d.id) == null || !a) return;
            let e = s.Z.getStorefrontData(null == d ? void 0 : d.id);
            (null == e ? void 0 : e.state) === "loading" ||
                (null == e ? void 0 : e.state) === "error" ||
                ((null == e ? void 0 : e.state) === "fetched" &&
                    (null == e ? void 0 : e.fetchedAt) != null &&
                    Date.now() - (null == e ? void 0 : e.fetchedAt) < u) ||
                (0, o.YL)(null == d ? void 0 : d.id);
        }, [null == d ? void 0 : d.id, p, a]),
        p
    );
}
