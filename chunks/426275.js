n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(692547),
    l = n(481060),
    o = n(375954),
    s = n(876338),
    c = n(912332),
    u = n(245216),
    d = n(388032);
function p(e) {
    let { className: t, channelId: n, messageId: p, targetKind: m, embedIndex: f } = e,
        h = i.useCallback(() => {
            let e = o.Z.getMessage(n, p);
            if (null == e) return;
            let t = (0, s.j)(e, {
                targetKind: m,
                embedIndex: f
            });
            (0, c.l8)({
                message: e,
                source: 'message-actions',
                forwardOptions: t
            });
        }, [n, f, p, m]);
    return (0, r.jsx)(l.M0o, {
        className: t,
        tooltip: d.NW.string(d.t.I3ltXF),
        color: l.YX$.SECONDARY,
        icon: (0, r.jsx)(u.Z, {
            size: 'xs',
            color: a.Z.colors.INTERACTIVE_NORMAL
        }),
        onClick: h
    });
}
