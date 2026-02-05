"use strict";
n.d(t, { V: () => s });
var l = n(64700),
    i = n(397927);
function s() {
    let [e, t] = l.useState(!0);
    return {
        transitions: (0, i.pnh)(e, {
            keys: (e) => (e ? "shown" : "hidden"),
            config: a,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0,
        }),
        setVisible: t,
    };
}
let a = { mass: 1, tension: 250, friction: 18, clamp: !0 };
