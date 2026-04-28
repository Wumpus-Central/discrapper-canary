"use strict";
function l(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: l,
        scrollTop: i,
        sectionHeaderHeight: s = 0,
        sectionFooterHeight: a = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let r = t?.current?.getSectionDescriptors(),
        o = t.current?.getListDimensions()?.height;
    if (null == r || r.length !== l.length || null == o || o <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let c = i + o,
        u = !1,
        d = !1,
        h = "function" == typeof s ? s : () => s,
        m = "function" == typeof a ? a : () => a;
    return (
        l.forEach((e, t) => {
            let n = r[t],
                l = n.offset.top + h(t);
            Math.min(n.offset.bottom - m(t), c) - Math.max(l, i) >= 20 && (e.isNitroLocked ? (u = !0) : (d = !0));
        }),
        { isNitroLockedSectionVisible: u, areOnlyNitroLockedSectionsVisible: u && !d }
    );
}
n.d(t, { s: () => l }), n(64700);
