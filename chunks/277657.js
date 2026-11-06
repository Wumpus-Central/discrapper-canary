var i = r(284009),
    a = r.n(i),
    s = r(13202),
    n = r(370480),
    u = r(738104);
r.d(
    t,
    {},
    {
        V: async function (e) {
            let t = await (0, u.d)(e, { twoWayLinkType: s.I.DESKTOP });
            if (null == t) throw Error("missing authorizeURL");
            let { state: r } = (0, n.vA)(t);
            return (a()(null != r, "Authorize URL state query parameter must be present"), r);
        },
    },
);
