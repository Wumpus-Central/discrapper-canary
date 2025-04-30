n.d(t, { Z: () => s });
var r = n(73800),
    i = n(442837),
    a = n(231757),
    o = n(553795);
function s(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, a.Z)({
                platformType: e,
                location: 'Member List Content Popout'
            });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
