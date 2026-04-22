"use strict";
function i(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: i,
        scrollTop: l,
        sectionHeaderHeight: s = 0,
        sectionFooterHeight: r = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let a = t?.current?.getSectionDescriptors(),
        o = t.current?.getListDimensions()?.height;
    if (null == a || a.length !== i.length || null == o || o <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let c = l + o,
        u = !1,
        d = !1,
        h = "function" == typeof s ? s : () => s,
        m = "function" == typeof r ? r : () => r;
    return (
        i.forEach((e, t) => {
            let n = a[t],
                i = n.offset.top + h(t);
            Math.min(n.offset.bottom - m(t), c) - Math.max(i, l) >= 20 && (e.isNitroLocked ? (u = !0) : (d = !0));
        }),
        { isNitroLockedSectionVisible: u, areOnlyNitroLockedSectionsVisible: u && !d }
    );
}
n.d(t, { s: () => i }), n(64700);
