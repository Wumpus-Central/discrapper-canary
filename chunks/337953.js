n.d(t, { Z: () => i });
var r = n(512722),
    l = n.n(r),
    a = n(875425);
function i(e) {
    if (e !== a.FO.TODAY) return l()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
