(O.r(I), O.d(I, { default: () => p }));
var a = O(477900);
O(582128);
var _ = O(806163);
(O(323874), O(14289), O(35956));
var R = O(435220),
    P = O(652215);
function E() {
    let t = new URLSearchParams(location.search),
        I = t.get("q"),
        O = t.get("category_id");
    return (
        t.delete("page"),
        (0, a.jsxs)(_.dO, {
            children: [
                null != O && null == I
                    ? (0, a.jsx)(_.rd, {
                          path: P.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${P.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(`${O}`)}`,
                      })
                    : (0, a.jsx)(_.rd, {
                          path: P.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${P.BVt.GLOBAL_DISCOVERY_APPS_SEARCH}?${t.toString()}`,
                      }),
                (0, a.jsx)(_.rd, {
                    path: P.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                    to: P.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                }),
                (0, a.jsx)(_.rd, {
                    path: P.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", R.h.STORE),
                    to: P.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        R.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, a.jsx)(_.rd, {
                    path: P.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", R.h.PREMIUM_DEPRECATED),
                    to: P.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        R.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, a.jsx)(_.rd, {
                    path: P.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                    to: { pathname: P.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), search: location.search },
                }),
                (0, a.jsx)(_.rd, { path: P.BVt.APPLICATION_DIRECTORY, to: P.BVt.GLOBAL_DISCOVERY_APPS }),
            ],
        })
    );
}
function p() {
    return (0, a.jsx)(_.qh, { path: P.BVt.APPLICATION_DIRECTORY, component: E });
}
