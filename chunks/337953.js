n.d(t, { Z: () => i });
var l = n(512722),
    r = n.n(l),
    a = n(875425);
function i(e) {
    if (e !== a.FO.TODAY) return r()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
