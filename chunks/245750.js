n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    s = n(935399),
    l = n(554146),
    r = n(505312),
    o = n(397927),
    d = n(379848),
    c = n(134991),
    u = n(535731),
    m = n(203982),
    h = n(42473),
    x = n(652215),
    p = n(49999),
    g = n(985018);
function _(e) {
    let t,
        n,
        {
            webBuildOverride: _,
            onClick: f,
            onContextMenu: b,
            dismissibleContents: v,
            iconForeground: j,
            nameplate: C,
        } = e,
        A = i.useRef(null),
        [T, S] = i.useState(!1);
    (0, s.Ay)(() => {
        let e = () => S(!0);
        return (
            m._.subscribe(x.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                m._.unsubscribe(x.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let y = i.useCallback(() => {
        S(!1), f();
    }, [f]);
    t = null != _ ? g.intl.formatToPlainString(g.t.Gzh6ZP, { webBuildOverride: _.id }) : g.intl.string(g.t.cduTBL);
    let E = o.Zes,
        N = (0, r.w)();
    return (
        (E = null != _ ? o.Hnu : N.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(h.A, {
                    ref: A,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: y,
                    onContextMenu: b,
                    "aria-label": g.intl.string(g.t.cduTBL),
                    icon: (0, a.jsx)(E, { size: "refresh_sm", color: "currentColor", className: j }),
                    ...N.events,
                    plated: null != C,
                }),
                (0, a.jsx)(c.V, { targetElementRef: A, shouldShow: T, onDismiss: () => S(!1) }),
                !T &&
                    (0, a.jsx)(d.Ay, {
                        contentTypes: v,
                        groupName: p.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === l.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(u.y, { targetElementRef: A, markAsDismissed: n });
                        },
                    }),
            ],
        })
    );
}
