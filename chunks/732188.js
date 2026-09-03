a.d(r, { A: () => t });
var d = a(17928),
    i = a(287809);
a(938796);
var s = a(321191);
function t(e) {
    let r,
        a = (0, d.bG)([i.default], () => i.default.getCurrentUser()),
        t =
            ((r = (0, d.bG)([s.A], () => s.A.getUserProfile(e.id))),
            r?.bio === "" &&
                r?.pronouns === "" &&
                r?.banner === void 0 &&
                r?.accentColor === void 0 &&
                e.flags === e.publicFlags &&
                (r?.badges == null || r?.badges?.length === 0));
    return a?.id !== e.id && !t;
}
