n.d(i, { default: () => u });
var s = n(477900),
    a = n(582128),
    e = n(562708),
    r = n(732159),
    c = n(96358),
    l = n(841365),
    o = n(375708);
function u(t) {
    let { transitionState: i, onClose: n } = t,
        u = a.useCallback(async () => {
            try {
                (await (0, c.S)(), n());
            } catch {}
        }, [n]);
    return (0, s.jsx)(r.u, {
        transitionState: i,
        onClose: n,
        title: o.intl.string(l.default["g7/14g"]),
        subtitle: o.intl.string(l.default.FbTAmI),
        confirmText: o.intl.string(l.default.V822Mp),
        variant: "critical",
        cancelText: o.intl.string(o.t["ETE/oC"]),
        onConfirm: u,
        trackingProps: { impression: { impressionName: e.ImpressionNames.USER_AGE_VERIFICATION_RESET_CONFIRM } },
    });
}
