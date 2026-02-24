n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    s = n(935399),
    l = n(554146),
    r = n(397927),
    o = n(379848),
    d = n(134991),
    c = n(535731),
    u = n(203982),
    m = n(42473),
    h = n(652215),
    x = n(49999),
    p = n(985018);
function g(e) {
    let t,
        n,
        {
            webBuildOverride: r,
            onClick: g,
            onContextMenu: f,
            dismissibleContents: b,
            iconForeground: v,
            nameplate: j,
        } = e,
        C = i.useRef(null),
        [A, T] = i.useState(!1);
    (0, s.Ay)(() => {
        let e = () => T(!0);
        return (
            u._.subscribe(h.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                u._.unsubscribe(h.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let S = i.useCallback(() => {
        T(!1), g();
    }, [g]);
    return (
        (t =
            null != r ? p.intl.formatToPlainString(p.t.Gzh6ZP, { webBuildOverride: r.id }) : p.intl.string(p.t.cduTBL)),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(m.A, {
                    ref: C,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: S,
                    onContextMenu: f,
                    "aria-label": p.intl.string(p.t.cduTBL),
                    icon: (0, a.jsx)(_, { webBuildOverride: r, iconForeground: v, eventTargetRef: C }),
                    plated: null != j,
                }),
                (0, a.jsx)(d.V, { targetElementRef: C, shouldShow: A, onDismiss: () => T(!1) }),
                !A &&
                    (0, a.jsx)(o.Ay, {
                        contentTypes: b,
                        groupName: x.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === l.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(c.y, { targetElementRef: C, markAsDismissed: n });
                        },
                    }),
            ],
        })
    );
}
function _(e) {
    let { webBuildOverride: t, iconForeground: n, eventTargetRef: i } = e;
    return null != t
        ? (0, a.jsx)(r.Hnu, { size: "refresh_sm", color: "currentColor", className: n })
        : (0, a.jsx)(r.MX_, { dataBinding: { fill: "currentColor" }, className: r.d5l.refresh_sm, eventTargetRef: i });
}
