n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(935399),
    a = n(554146),
    r = n(505312),
    o = n(625903),
    d = n(848847),
    c = n(379848),
    u = n(134991),
    p = n(576989),
    h = n(203982),
    m = n(42473),
    _ = n(652215),
    A = n(49999),
    f = n(985018);
function g(e) {
    let t,
        n,
        {
            webBuildOverride: g,
            onClick: x,
            onContextMenu: E,
            dismissibleContents: C,
            iconForeground: T,
            nameplate: v,
        } = e,
        S = s.useRef(null),
        [b, j] = s.useState(!1);
    (0, l.Ay)(() => {
        let e = () => j(!0);
        return (
            h._.subscribe(_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                h._.unsubscribe(_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let I = s.useCallback(() => {
        j(!1), x();
    }, [x]);
    t = null != g ? f.intl.formatToPlainString(f.t.Gzh6ZP, { webBuildOverride: g.id }) : f.intl.string(f.t.cduTBL);
    let R = o.Z,
        N = (0, r.w)();
    return (
        (R = null != g ? d.H : N.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.A, {
                    ref: S,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: I,
                    onContextMenu: E,
                    "aria-label": f.intl.string(f.t.cduTBL),
                    icon: (0, i.jsx)(R, { size: "refresh_sm", color: "currentColor", className: T }),
                    ...N.events,
                    plated: null != v,
                }),
                (0, i.jsx)(u.V, { targetElementRef: S, shouldShow: b, onDismiss: () => j(!1) }),
                (0, i.jsx)(c.Ay, {
                    contentTypes: C,
                    groupName: A.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(p.K, { markAsDismissed: n, targetElementRef: S })
                            : null;
                    },
                }),
            ],
        })
    );
}
