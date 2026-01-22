n.d(t, {
    A: () => o,
});
var r = n(64700),
    i = n(311907),
    a = n(882997),
    s = n(962173);

function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, a.A)({
                platformType: e,
                location: "Member List Content Popout",
            });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
