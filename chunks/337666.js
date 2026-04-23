"use strict";
n.d(t, { A: () => i });
var l = n(64700),
    a = n(770178),
    s = n(765548);
let i = () => {
    let [e, t] = l.useState(400),
        n = (0, s.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, a.w)(n), containerWidth: e };
};
