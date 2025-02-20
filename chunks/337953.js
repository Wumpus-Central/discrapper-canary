n.d(t, { Z: () => i });
var r = n(512722),
    a = n.n(r),
    l = n(875425);
function i(e) {
    if (e !== l.FO.TODAY) return a()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
