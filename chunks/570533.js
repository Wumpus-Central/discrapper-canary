e.d(n, {
    Z: function () {
        return a;
    }
});
var i = e(192379),
    r = e(442837),
    l = e(339085),
    u = e(889564);
let o = [];
function a(t) {
    let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(t), [t]);
    return i.useMemo(() => (null == n ? o : n.filter((n) => (0, u.Kt)(n, t))), [n, t]);
}
