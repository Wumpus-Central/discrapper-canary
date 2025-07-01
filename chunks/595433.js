(n.d(t, { H: () => a }), n(388685));
var r = n(73800),
    i = n(481060);
function a() {
    let [e, t] = r.useState(!0);
    return {
        transitions: (0, i.Yzy)(e, {
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
