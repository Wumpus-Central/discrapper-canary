"use strict";
n.d(t, { B: () => l });
var r = n(64700),
    i = n(826673),
    a = n(894858),
    s = n(49999);
function l(e) {
    let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: l } = e,
        { dismissibleContentToNodeKeys: o, nodeKeyToDismissibleContents: u } = n,
        c = r.useRef(!1);
    r.useEffect(() => {
        if (((c.current = !1), null == t || !o.has(t))) return;
        let e = o.get(t);
        if (null != e)
            return a.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (t) => {
                    let n = null != t && null != l ? l.entry(t)?.parentSidebarItemKey : null;
                    if (null != n) {
                        if (n === e.sidebarItemKey) c.current = !0;
                        else if (c.current) {
                            c.current = !1;
                            let t = u.get(e.sidebarItemKey);
                            if (null == t) return;
                            t.forEach((e) => {
                                (0, i.Dr)(e, { dismissAction: s.i.AUTO, forceTrack: !0 });
                            });
                        }
                    }
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
    }, [t, o, l, u]);
}
