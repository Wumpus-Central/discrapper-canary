n.d(t, { Z: () => o });
var r = n(875425),
    i = n(388032);
function o(e) {
    let t = null != e && e.size > 0 ? r.pS.filter((t) => !e.has(t.value)) : r.pS;
    if (0 === t.length)
        return {
            value: r.HO.ADD_STATUS,
            label: () => i.NW.string(i.t.Vq4UmZ)
        };
    let n = Math.floor(Math.random() * t.length);
    return t[n];
}
