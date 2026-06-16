O.r(I), O.d(I, { default: () => p });
var a = O(627968);
O(64700);
var _ = O(873263);
O(323874), O(14289), O(35956);
var P = O(435220),
    R = O(652215);
function i() {
    let t = new URLSearchParams(location.search),
        I = t.get("q"),
        O = t.get("category_id");
    return (
        t.delete("page"),
        (0, a.jsxs)(_.dO, {
            children: [
                null != O && null == I
                    ? (0, a.jsx)(_.rd, {
                          path: R.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${R.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(`${O}`)}`,
                      })
                    : (0, a.jsx)(_.rd, {
                          path: R.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${R.BVt.GLOBAL_DISCOVERY_APPS_SEARCH}?${t.toString()}`,
                      }),
                (0, a.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                    to: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                }),
                (0, a.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(
                        ":applicationId",
                        P.ApplicationDirectoryProfileSections.STORE,
                    ),
                    to: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        P.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, a.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(
                        ":applicationId",
                        P.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                    ),
                    to: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        P.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, a.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                    to: { pathname: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), search: location.search },
                }),
                (0, a.jsx)(_.rd, { path: R.BVt.APPLICATION_DIRECTORY, to: R.BVt.GLOBAL_DISCOVERY_APPS }),
            ],
        })
    );
}
function p() {
    return (0, a.jsx)(_.qh, { path: R.BVt.APPLICATION_DIRECTORY, component: i });
}
