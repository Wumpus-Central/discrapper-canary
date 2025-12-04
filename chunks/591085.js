n.d(t, { Z: () => l });
var r = n(473749),
    i = n(442837),
    a = n(80721),
    o = n(643281),
    s = n(602307);
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, i.e7)([o.Z], () => o.Z.getMembers()),
        n = (0, i.e7)([o.Z], () => !o.Z.hasFetchedMembers()),
        l = (0, s.Z)(e);
    return (
        (0, r.useEffect)(() => {
            !(async function () {
                !e || o.Z.isFetchingMembers() || o.Z.hasFetchedMembers() || (null != l && (await (0, a.i1)(l)));
            })();
        }, [l, e]),
        {
            premiumGroupMembers: t,
            isLoading: n,
        }
    );
}
