r.d(t, { Z: () => u });
var n = r(192379),
    a = r(442837),
    i = r(570140),
    l = r(451478);
let u = () => {
    let e = (0, a.e7)([l.Z], () => l.Z.isFocused());
    n.useEffect(() => {
        e ||
            i.Z.dispatch({
                type: 'POTIONS_SET_CONFETTI_MODE',
                enabled: !1
            });
    }, [e]);
};
