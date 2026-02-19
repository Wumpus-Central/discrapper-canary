n.d(i, { default: () => p });
var a = n(627968),
    s = n(64700),
    e = n(110259),
    r = n(158954),
    l = n(96358),
    c = n(536242),
    o = n(985018);
function p(t) {
    let { transitionState: i, onClose: n } = t,
        p = s.useCallback(async () => {
            try {
                await (0, l.S)(), n();
            } catch {}
        }, [n]);
    return (0, a.jsx)(r.ConfirmModal, {
        transitionState: i,
        onClose: n,
        title: o.intl.string(c.default["g7/14g"]),
        subtitle: o.intl.string(c.default.FbTAmI),
        confirmText: o.intl.string(c.default.V822Mp),
        variant: "critical",
        cancelText: o.intl.string(o.t["ETE/oC"]),
        onConfirm: p,
        trackingProps: { impression: { impressionName: e.ImpressionNames.USER_AGE_VERIFICATION_RESET_CONFIRM } },
    });
}
