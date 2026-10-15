n.d(t, { P: () => r });
var i = n(582128),
    l = n(308941);
function r(e) {
    let t = i.forwardRef(function (t, n) {
        return i.createElement(e, { ...t, ref: n });
    });
    return (
        (t.displayName = `AnimatedWithRef(${("displayName" in e ? e.displayName : void 0) ?? e.name})`),
        (0, l.animated)(t)
    );
}
