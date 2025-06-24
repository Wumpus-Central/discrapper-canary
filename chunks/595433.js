n.d(t, { H: () => l }), n(388685);
var r = n(73800),
    a = n(481060);
function l() {
    let [e, t] = r.useState(!0);
    return {
        transitions: (0, a.Yzy)(e, {
            keys: (e) => (e ? 'shown' : 'hidden'),
            config: i,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0
        }),
        setVisible: t
    };
}
let i = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
};
