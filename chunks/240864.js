function i(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: i,
        scrollTop: s,
        sectionHeaderHeight: l = 0,
        sectionFooterHeight: r = 0,
    } = e;
    if ("" !== n) return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let a = t?.current?.getSectionDescriptors(),
        o = t.current?.getListDimensions()?.height;
    if (null == a || a.length !== i.length || null == o || o <= 0)
        return { isNitroLockedSectionVisible: !1, areOnlyNitroLockedSectionsVisible: !1 };
    let c = s + o,
        u = !1,
        d = !1,
        m = "function" == typeof l ? l : () => l,
        f = "function" == typeof r ? r : () => r;
    return (
        i.forEach((e, t) => {
            let n = a[t],
                i = n.offset.top + m(t);
            Math.min(n.offset.bottom - f(t), c) - Math.max(i, s) >= 20 && (e.isNitroLocked ? (u = !0) : (d = !0));
        }),
        { isNitroLockedSectionVisible: u, areOnlyNitroLockedSectionsVisible: u && !d }
    );
}
(n.d(t, { s: () => i }), n(582128));
