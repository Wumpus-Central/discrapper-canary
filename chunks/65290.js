n.d(t, { A: () => l }), n(938796);
var i = n(311907),
    s = n(622543);
function l(e) {
    let t = (0, i.bG)([s.A], () => s.A.getUserProfile(e.id));
    return (
        t?.bio === "" &&
        t?.pronouns === "" &&
        t?.banner === void 0 &&
        t?.accentColor === void 0 &&
        t?.banner === void 0 &&
        e.flags === e.publicFlags &&
        (t?.badges == null || t?.badges?.length === 0)
    );
}
