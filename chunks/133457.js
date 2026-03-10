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
        if (null == e) return;
        let n = () => {
                c.current = !1;
                let t = u.get(e.sidebarItemKey);
                null != t &&
                    t.forEach((e) => {
                        (0, i.Dr)(e, { dismissAction: s.i.AUTO, forceTrack: !0 });
                    });
            },
            r = a.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (t) => {
                    let r = null != t && null != l ? l.entry(t)?.parentSidebarItemKey : null;
                    null != r && (r === e.sidebarItemKey ? (c.current = !0) : c.current && n());
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
        return () => {
            r(), c.current && n();
        };
    }, [t, o, l, u]);
}
