function r(e) {
    var t, n, r;
    let { listRef: i, searchQuery: a, nitroLockedSectionStates: s, scrollTop: o } = e;
    if ("" !== a)
        return {
            isNitroLockedSectionVisible: !1,
            areOnlyNitroLockedSectionsVisible: !1,
        };
    let l = null == i || null == (t = i.current) ? void 0 : t.getSectionDescriptors(),
        c = null == (r = i.current) || null == (n = r.getListDimensions()) ? void 0 : n.height;
    if (null == l || l.length !== s.length || null == c || c <= 0)
        return {
            isNitroLockedSectionVisible: !1,
            areOnlyNitroLockedSectionsVisible: !1,
        };
    let u = o,
        d = o + c,
        f = !1,
        p = !1;
    return (
        s.forEach((e, t) => {
            let n = l[t];
            n.offset.top < d && n.offset.bottom > u && (e.isNitroLocked ? (f = !0) : (p = !0));
        }),
        {
            isNitroLockedSectionVisible: f,
            areOnlyNitroLockedSectionsVisible: f && !p,
        }
    );
}
n.d(t, { s: () => r }), n(64700);
