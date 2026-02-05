"use strict";
n.d(t, { A: () => a });
var l = n(64700),
    i = n(770178),
    s = n(765548);
let a = () => {
    let [e, t] = l.useState(400),
        n = (0, s.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, i.w)(n), containerWidth: e };
};
