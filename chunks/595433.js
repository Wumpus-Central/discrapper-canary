n.d(t, { H: () => i }), n(47120);
var r = n(192379),
    a = n(481060);
function i() {
    let [e, t] = r.useState(!0);
    return {
        transitions: (0, a.Yzy)(e, {
            keys: (e) => (e ? 'shown' : 'hidden'),
            config: l,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0
        }),
        setVisible: t
    };
}
let l = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
};
