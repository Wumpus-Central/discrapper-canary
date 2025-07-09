n.d(e, { Z: () => i });
var l = n(512722),
    a = n.n(l),
    r = n(875425);
function i(t) {
    if (t !== r.FO.TODAY) return (a()('number' == typeof t, 'Invalid custom status clear timeout'), t);
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
