t.d(n, { A: () => r }), t(938796);
var l = t(311907),
    i = t(622543);
function r(e) {
    let n = (0, l.bG)([i.A], () => i.A.getUserProfile(e.id));
    return (
        n?.bio === "" &&
        n?.pronouns === "" &&
        n?.banner === void 0 &&
        n?.accentColor === void 0 &&
        n?.banner === void 0 &&
        e.flags === e.publicFlags &&
        (n?.badges == null || n?.badges?.length === 0)
    );
}
