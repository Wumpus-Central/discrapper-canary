n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(935399),
    o = n(554146),
    d = n(397927),
    c = n(379848),
    u = n(134991),
    m = n(576989),
    h = n(203982),
    x = n(42473),
    p = n(652215),
    g = n(49999),
    f = n(985018);
function v(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: l,
            onContextMenu: d,
            dismissibleContents: v,
            iconForeground: b,
            nameplate: j,
        } = e,
        A = i.useRef(null),
        [C, y] = i.useState(!1);
    (0, r.Ay)(() => {
        let e = () => y(!0);
        return (
            h._.subscribe(p.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                h._.unsubscribe(p.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let S = i.useCallback(() => {
        y(!1), l();
    }, [l]);
    return (
        (t =
            null != s ? f.intl.formatToPlainString(f.t.Gzh6ZP, { webBuildOverride: s.id }) : f.intl.string(f.t.cduTBL)),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(x.A, {
                    ref: A,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: S,
                    onContextMenu: d,
                    "aria-label": f.intl.string(f.t.cduTBL),
                    icon: (0, a.jsx)(_, { webBuildOverride: s, iconForeground: b, eventTargetRef: A }),
                    plated: null != j,
                }),
                (0, a.jsx)(u.V, { targetElementRef: A, shouldShow: C, onDismiss: () => y(!1) }),
                (0, a.jsx)(c.Ay, {
                    contentTypes: v,
                    groupName: g.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === o.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, a.jsx)(m.K, { markAsDismissed: n, targetElementRef: A })
                            : null;
                    },
                }),
            ],
        })
    );
}
function _(e) {
    let { webBuildOverride: t, iconForeground: n, eventTargetRef: i } = e;
    return null != t
        ? (0, a.jsx)(d.Hnu, { size: "refresh_sm", color: "currentColor", className: n })
        : (0, a.jsx)(d.MX_, {
              dataBinding: { fill: "currentColor" },
              className: l()(d.d5l.refresh_sm, n),
              eventTargetRef: i,
          });
}
