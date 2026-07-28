"use strict";
function i(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: i,
        scrollTop: r,
        sectionHeaderHeight: a = 0,
        sectionFooterHeight: s = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let l = t?.current?.getSectionDescriptors(),
        o = t.current?.getListDimensions()?.height;
    if (null == l || l.length !== i.length || null == o || o <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let d = r + o,
        c = !1,
        u = !1,
        _ = "function" == typeof a ? a : () => a,
        E = "function" == typeof s ? s : () => s;
    return (
        i.forEach((e, t) => {
            let n = l[t],
                i = n.offset.top + _(t);
            Math.min(n.offset.bottom - E(t), d) - Math.max(i, r) >= 20 && (e.isNitroLocked ? (c = !0) : (u = !0));
        }),
        { isNitroLockedSectionVisible: c, areOnlyNitroLockedSectionsVisible: c && !u }
    );
}
n.d(t, { s: () => i }), n(582128);
