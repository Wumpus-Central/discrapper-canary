n.d(t, { T: () => l });
var a = n(192379),
    i = n(127255);
function l(e, t, n) {
    let l = (0, i.Z)({
        guildId: t,
        context: e
    });
    return a.useMemo(() => {
        var e;
        return null !== (e = l.find((e) => e.application.id === n)) && void 0 !== e ? e : null;
    }, [l, n]);
}
