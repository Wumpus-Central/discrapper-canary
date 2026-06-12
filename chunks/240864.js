"use strict";
function i(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: i,
        scrollTop: r,
        sectionHeaderHeight: s = 0,
        sectionFooterHeight: a = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let o = t?.current?.getSectionDescriptors(),
        l = t.current?.getListDimensions()?.height;
    if (null == o || o.length !== i.length || null == l || l <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let u = r + l,
        c = !1,
        d = !1,
        _ = "function" == typeof s ? s : () => s,
        h = "function" == typeof a ? a : () => a;
    return (
        i.forEach((e, t) => {
            let n = o[t],
                i = n.offset.top + _(t);
            Math.min(n.offset.bottom - h(t), u) - Math.max(i, r) >= 20 && (e.isNitroLocked ? (c = !0) : (d = !0));
        }),
        { isNitroLockedSectionVisible: c, areOnlyNitroLockedSectionsVisible: c && !d }
    );
}
n.d(t, { s: () => i }), n(64700);
