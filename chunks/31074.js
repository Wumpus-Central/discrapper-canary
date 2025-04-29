n.d(t, { Z: () => s });
var r = n(192379),
    i = n(442837),
    o = n(231757),
    a = n(553795);
function s(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, o.Z)({
                platformType: e,
                location: 'Member List Content Popout'
            });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
