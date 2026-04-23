"use strict";
n.d(t, { A: () => i }), n(321073);
var r = n(711371);
function i(e, t) {
    if (r.VW.areStylesDisabled(e)) return [];
    let [n, i] = t,
        s = [];
    if (!r.l5.isText(n)) return s;
    let [a] = r.VW.node(e, r.PW.parent(i));
    return (
        r.AS.isType(a, "applicationCommand") &&
            n === a.children[0] &&
            s.push({
                anchor: { path: i, offset: 0 },
                focus: { path: i, offset: 0 + a.command.displayName.length + 1 },
                commandName: !0,
            }),
        s
    );
}
