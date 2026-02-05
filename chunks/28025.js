n.d(t, { x: () => o }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var r = n(960488),
    a = n(435220),
    l = n(162157),
    s = n(652215);
function o() {
    let e = new URLSearchParams(location.search),
        t = e.get("q"),
        n = e.get("category_id");
    return (
        e.delete("page"),
        (0, i.jsxs)(r.dO, {
            children: [
                null != n && null == t
                    ? (0, i.jsx)(r.rd, {
                          path: s.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${s.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(`${n}`)}`,
                      })
                    : (0, i.jsx)(r.rd, {
                          path: s.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${s.BVt.GLOBAL_DISCOVERY_APPS_SEARCH}?${e.toString()}`,
                      }),
                (0, i.jsx)(r.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                    to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                }),
                (0, i.jsx)(r.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", l.h.STORE),
                    to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        a.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, i.jsx)(r.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", l.h.PREMIUM_DEPRECATED),
                    to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        a.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, i.jsx)(r.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                    to: { pathname: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), search: location.search },
                }),
                (0, i.jsx)(r.rd, { path: s.BVt.APPLICATION_DIRECTORY, to: s.BVt.GLOBAL_DISCOVERY_APPS }),
            ],
        })
    );
}
