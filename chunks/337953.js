n.d(e, { Z: () => i });
var l = n(512722),
    r = n.n(l),
    a = n(875425);
function i(t) {
    if (t !== a.FO.TODAY) return r()('number' == typeof t, 'Invalid custom status clear timeout'), t;
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
