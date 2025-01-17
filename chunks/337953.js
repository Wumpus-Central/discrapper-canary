n.d(e, {
    Z: function () {
        return i;
    }
});
var a = n(512722),
    l = n.n(a),
    s = n(875425);
function i(t) {
    if (t !== s.F.TODAY) return l()('number' == typeof t, 'Invalid custom status clear timeout'), t;
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
