"use strict";
n.d(t, { B: () => l });
var r = n(64700),
    i = n(826673),
    a = n(894858),
    s = n(49999);
function l(e) {
    let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: l } = e,
        { dismissibleContentToNodeKeys: o, nodeKeyToDismissibleContents: c } = n,
        u = r.useRef(!1);
    r.useEffect(() => {
        if (((u.current = !1), null == t || !o.has(t))) return;
        let e = o.get(t);
        if (null == e) return;
        let n = () => {
                u.current = !1;
                let t = c.get(e.sidebarItemKey);
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
                    null != r && (r === e.sidebarItemKey ? (u.current = !0) : u.current && n());
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
        return () => {
            r(), u.current && n();
        };
    }, [t, o, l, c]);
}
