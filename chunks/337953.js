n.d(e, { Z: () => s });
var a = n(512722),
    l = n.n(a),
    i = n(875425);
function s(t) {
    if (t !== i.F.TODAY) return l()('number' == typeof t, 'Invalid custom status clear timeout'), t;
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
