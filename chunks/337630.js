"use strict";
n.d(t, { A: () => l }), n(321073);
var i = n(711371);
function l(e, t) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [n, l] = t,
        s = [];
    if (!i.l5.isText(n)) return s;
    let [r] = i.VW.node(e, i.PW.parent(l));
    return (
        i.AS.isType(r, "applicationCommand") &&
            n === r.children[0] &&
            s.push({
                anchor: { path: l, offset: 0 },
                focus: { path: l, offset: 0 + r.command.displayName.length + 1 },
                commandName: !0,
            }),
        s
    );
}
