n.d(e, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(339085),
    o = n(889564);
let u = [];
function a(t) {
    let e = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(t), [t]);
    return i.useMemo(() => (null == e ? u : e.filter((e) => (0, o.Kt)(e, t))), [e, t]);
}
