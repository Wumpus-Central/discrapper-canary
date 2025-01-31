n.d(t, { T: () => l });
var a = n(192379),
    i = n(127255);
function l(e, t) {
    let n = (0, i.Z)({ guildId: e });
    return a.useMemo(() => {
        var e;
        return null !== (e = n.find((e) => e.application.id === t)) && void 0 !== e ? e : null;
    }, [n, t]);
}
