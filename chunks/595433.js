n.d(t, { H: () => i }), n(388685);
var r = n(73800),
    l = n(481060);
function i() {
    let [e, t] = r.useState(!0);
    return {
        transitions: (0, l.Yzy)(e, {
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
