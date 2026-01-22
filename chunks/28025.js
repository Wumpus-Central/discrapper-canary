n.d(t, {
    x: () => o,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var r = n(627968);
n(64700);
var i = n(960488),
    l = n(435220),
    a = n(162157),
    s = n(652215);

function o() {
    let e = new URLSearchParams(location.search),
        t = e.get("q"),
        n = e.get("category_id");
    return (
        e.delete("page"),
        (0, r.jsxs)(i.dO, {
            children: [
                null != n && null == t
                    ? (0, r.jsx)(i.rd, {
                          path: s.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: "".concat(s.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(n))),
                      })
                    : (0, r.jsx)(i.rd, {
                          path: s.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: "".concat(s.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, "?").concat(e.toString()),
                      }),
                (0, r.jsx)(i.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                    to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                }),
                (0, r.jsx)(i.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", a.h.STORE),
                    to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        l.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, r.jsx)(i.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", a.h.PREMIUM_DEPRECATED),
                    to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        l.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, r.jsx)(i.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                    to: {
                        pathname: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                        search: location.search,
                    },
                }),
                (0, r.jsx)(i.rd, {
                    path: s.BVt.APPLICATION_DIRECTORY,
                    to: s.BVt.GLOBAL_DISCOVERY_APPS,
                }),
            ],
        })
    );
}
