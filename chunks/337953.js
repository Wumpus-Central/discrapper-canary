n.d(t, { Z: () => a });
var r = n(512722),
    i = n.n(r),
    l = n(875425);
function a(e) {
    if (e !== l.FO.TODAY) return i()("number" == typeof e, "Invalid custom status clear timeout"), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
