n.d(t, {
    T: function () {
        return l;
    }
});
var i = n(192379),
    a = n(127255);
function l(e, t) {
    let n = (0, a.Z)({ guildId: e });
    return i.useMemo(() => {
        var e;
        return null !== (e = n.find((e) => e.application.id === t)) && void 0 !== e ? e : null;
    }, [n, t]);
}
