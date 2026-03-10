"use strict";
n.d(t, { H: () => s, Z: () => a }), n(321073);
var r = n(963935),
    i = n(890934);
function a(e, t) {
    let n = [],
        a = new Map(),
        s = new Map(),
        l = new Map();
    return (
        (0, i.A)(e, (e) => {
            if (!("getDismissibleBadges" in e)) return;
            let i = e.getDismissibleBadges?.();
            if (null == i) return;
            let o = t.entry(e.key);
            if (o?.parentSidebarItemKey == null) return;
            let u = null;
            if (null != o.parentCategoryKey) {
                let e = t.get(o.parentCategoryKey);
                e?.type === r.Z6.CATEGORY && (0, r.bJ)(e) && (u = o.parentCategoryKey);
            }
            let c = { sidebarItemKey: o.parentSidebarItemKey, categoryKey: u };
            i.forEach((e) =>
                (function (e, t) {
                    let { dismissibleContent: r } = e;
                    n.push(r), a.set(r, t), l.set(r, e);
                    let i = s.get(t.sidebarItemKey) ?? new Set();
                    if ((i.add(r), s.set(t.sidebarItemKey, i), null != t.categoryKey)) {
                        let e = s.get(t.categoryKey) ?? new Set();
                        e.add(r), s.set(t.categoryKey, e);
                    }
                })(e, c),
            );
        }),
        {
            allDismissibleContents: n,
            dismissibleContentToNodeKeys: a,
            nodeKeyToDismissibleContents: s,
            dismissibleContentToBadge: l,
        }
    );
}
function s(e, t, n) {
    let { nodeKeyToDismissibleContents: r, dismissibleContentToBadge: i } = n,
        a = r.get(e);
    return null != t && null != a && a.has(t) ? i.get(t) : null;
}
