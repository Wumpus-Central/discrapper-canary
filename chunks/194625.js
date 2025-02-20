n.d(t, { Z: () => o }), n(47120), n(653041);
var r = n(887490);
let i = 'applicationCommand';
function o(e, t) {
    if (r.bN.areStylesDisabled(e)) return [];
    let [n, o] = t,
        a = [];
    if (!r.LC.isText(n)) return a;
    let [s] = r.bN.node(e, r.C0.parent(o));
    return (
        r.aj.isType(s, i) &&
            n === s.children[0] &&
            a.push({
                anchor: {
                    path: o,
                    offset: 0
                },
                focus: {
                    path: o,
                    offset: 0 + s.command.displayName.length + 1
                },
                commandName: !0
            }),
        a
    );
}
