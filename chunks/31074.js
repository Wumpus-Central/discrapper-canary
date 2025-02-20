n.d(t, { Z: () => o });
var r = n(192379),
    a = n(442837),
    l = n(231757),
    i = n(553795);
function o(e) {
    let t = (0, a.e7)([i.Z], () => i.Z.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, l.Z)({
                platformType: e,
                location: 'Member List Content Popout'
            });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
