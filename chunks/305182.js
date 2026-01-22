n.d(t, { V: () => a }), n(896048);
var l = n(64700),
    r = n(397927);
function a() {
    let [e, t] = l.useState(!0);
    return {
        transitions: (0, r.pnh)(e, {
            keys: (e) => (e ? "shown" : "hidden"),
            config: i,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0,
        }),
        setVisible: t,
    };
}
let i = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0,
};
