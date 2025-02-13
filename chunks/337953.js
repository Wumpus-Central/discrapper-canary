n.d(t, { Z: () => s });
var l = n(512722),
    a = n.n(l),
    i = n(875425);
function s(e) {
    if (e !== i.FO.TODAY) return a()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
