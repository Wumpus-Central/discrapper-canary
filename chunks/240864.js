"use strict";
function r(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: r,
        scrollTop: i,
        sectionHeaderHeight: s = 0,
        sectionFooterHeight: a = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let o = t?.current?.getSectionDescriptors(),
        l = t.current?.getListDimensions()?.height;
    if (null == o || o.length !== r.length || null == l || l <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let u = i,
        c = i + l,
        d = !1,
        _ = !1,
        f = "function" == typeof s ? s : () => s,
        p = "function" == typeof a ? a : () => a;
    return (
        r.forEach((e, t) => {
            let n = o[t],
                r = n.offset.top + f(t);
            Math.min(n.offset.bottom - p(t), c) - Math.max(r, u) >= 20 && (e.isNitroLocked ? (d = !0) : (_ = !0));
        }),
        { isNitroLockedSectionVisible: d, areOnlyNitroLockedSectionsVisible: d && !_ }
    );
}
n.d(t, { s: () => r }), n(64700);
