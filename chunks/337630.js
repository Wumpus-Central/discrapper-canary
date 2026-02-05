"use strict";
n.d(t, { A: () => a }), n(321073);
var r = n(711371);
let i = "applicationCommand";
function a(e, t) {
    if (r.VW.areStylesDisabled(e)) return [];
    let [n, a] = t,
        s = [];
    if (!r.l5.isText(n)) return s;
    let [o] = r.VW.node(e, r.PW.parent(a));
    return (
        r.AS.isType(o, i) &&
            n === o.children[0] &&
            s.push({
                anchor: { path: a, offset: 0 },
                focus: { path: a, offset: 0 + o.command.displayName.length + 1 },
                commandName: !0,
            }),
        s
    );
}
