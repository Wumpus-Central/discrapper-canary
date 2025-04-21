n.d(t, { Z: () => i });
var l = n(512722),
    a = n.n(l),
    r = n(875425);
function i(e) {
    if (e !== r.FO.TODAY) return a()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
