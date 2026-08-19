"use strict";
function l(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: l,
        scrollTop: i,
        sectionHeaderHeight: s = 0,
        sectionFooterHeight: r = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let a = t?.current?.getSectionDescriptors(),
        o = t.current?.getListDimensions()?.height;
    if (null == a || a.length !== l.length || null == o || o <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let u = i + o,
        c = !1,
        d = !1,
        h = "function" == typeof s ? s : () => s,
        m = "function" == typeof r ? r : () => r;
    return (
        l.forEach((e, t) => {
            let n = a[t],
                l = n.offset.top + h(t);
            Math.min(n.offset.bottom - m(t), u) - Math.max(l, i) >= 20 && (e.isNitroLocked ? (c = !0) : (d = !0));
        }),
        { isNitroLockedSectionVisible: c, areOnlyNitroLockedSectionsVisible: c && !d }
    );
}
n.d(t, { s: () => l }), n(582128);
