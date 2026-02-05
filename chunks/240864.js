"use strict";
function r(e) {
    let { listRef: t, searchQuery: n, nitroLockedSectionStates: r, scrollTop: i } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let a = t?.current?.getSectionDescriptors(),
        s = t.current?.getListDimensions()?.height;
    if (null == a || a.length !== r.length || null == s || s <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let o = i,
        l = i + s,
        u = !1,
        c = !1;
    return (
        r.forEach((e, t) => {
            let n = a[t];
            n.offset.top < l && n.offset.bottom > o && (e.isNitroLocked ? (u = !0) : (c = !0));
        }),
        { isNitroLockedSectionVisible: u, areOnlyNitroLockedSectionsVisible: u && !c }
    );
}
n.d(t, { s: () => r }), n(64700);
