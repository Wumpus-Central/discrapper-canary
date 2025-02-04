n.d(t, { H: () => l }), n(47120);
var i = n(192379),
    r = n(481060);
function l() {
    let [e, t] = i.useState(!0);
    return {
        transitions: (0, r.Yzy)(e, {
            keys: (e) => (e ? 'shown' : 'hidden'),
            config: a,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0
        }),
        setVisible: t
    };
}
let a = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
};
