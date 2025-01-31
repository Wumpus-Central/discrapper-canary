n.d(t, { Z: () => a }), n(47120), n(653041);
var i = n(887490);
let r = 'applicationCommand';
function a(e, t) {
    if (i.bN.areStylesDisabled(e)) return [];
    let [n, a] = t,
        s = [];
    if (!i.LC.isText(n)) return s;
    let [o] = i.bN.node(e, i.C0.parent(a));
    return (
        i.aj.isType(o, r) &&
            n === o.children[0] &&
            s.push({
                anchor: {
                    path: a,
                    offset: 0
                },
                focus: {
                    path: a,
                    offset: 0 + o.command.displayName.length + 1
                },
                commandName: !0
            }),
        s
    );
}
