n.d(t, { Z: () => o });
var l = n(192379),
    a = n(442837),
    i = n(231757),
    r = n(553795);
function o(e) {
    let t = (0, a.e7)([r.Z], () => r.Z.getAccounts().some((t) => t.type === e)),
        n = l.useCallback(() => {
            if (null == e) return null;
            (0, i.Z)({
                platformType: e,
                location: 'Member List Content Popout'
            });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
