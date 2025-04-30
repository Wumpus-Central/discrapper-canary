n.d(t, { Z: () => a }), n(388685), n(539854);
var r = n(887490);
let i = 'applicationCommand';
function a(e, t) {
    if (r.bN.areStylesDisabled(e)) return [];
    let [n, a] = t,
        o = [];
    if (!r.LC.isText(n)) return o;
    let [s] = r.bN.node(e, r.C0.parent(a));
    return (
        r.aj.isType(s, i) &&
            n === s.children[0] &&
            o.push({
                anchor: {
                    path: a,
                    offset: 0
                },
                focus: {
                    path: a,
                    offset: 0 + s.command.displayName.length + 1
                },
                commandName: !0
            }),
        o
    );
}
