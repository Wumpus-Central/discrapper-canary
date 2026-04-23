a.d(I, { x: () => i }), a(323874), a(14289), a(35956);
var O = a(627968);
a(64700);
var _ = a(873263),
    P = a(435220),
    R = a(652215);
function i() {
    let t = new URLSearchParams(location.search),
        I = t.get("q"),
        a = t.get("category_id");
    return (
        t.delete("page"),
        (0, O.jsxs)(_.dO, {
            children: [
                null != a && null == I
                    ? (0, O.jsx)(_.rd, {
                          path: R.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${R.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(`${a}`)}`,
                      })
                    : (0, O.jsx)(_.rd, {
                          path: R.BVt.APPLICATION_DIRECTORY_SEARCH,
                          to: `${R.BVt.GLOBAL_DISCOVERY_APPS_SEARCH}?${t.toString()}`,
                      }),
                (0, O.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                    to: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                }),
                (0, O.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(
                        ":applicationId",
                        P.ApplicationDirectoryProfileSections.STORE,
                    ),
                    to: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        P.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, O.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(
                        ":applicationId",
                        P.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                    ),
                    to: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        P.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, O.jsx)(_.rd, {
                    path: R.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                    to: { pathname: R.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), search: location.search },
                }),
                (0, O.jsx)(_.rd, { path: R.BVt.APPLICATION_DIRECTORY, to: R.BVt.GLOBAL_DISCOVERY_APPS }),
            ],
        })
    );
}
