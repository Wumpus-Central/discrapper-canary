"use strict";
n.d(t, { V: () => s });
var l = n(64700),
    a = n(866323);
function s() {
    let [e, t] = l.useState(!0);
    return {
        transitions: (0, a.p)(e, {
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
let i = { mass: 1, tension: 250, friction: 18, clamp: !0 };
