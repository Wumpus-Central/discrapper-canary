n.d(t, { Z: () => l });
var r = n(512722),
    a = n.n(r),
    i = n(875425);
function l(e) {
    if (e !== i.FO.TODAY) return a()('number' == typeof e, 'Invalid custom status clear timeout'), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
