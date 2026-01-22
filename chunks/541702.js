n.d(t, { A: () => s });
var r = n(311907),
    l = n(517019),
    i = n(287809);
function s(e) {
    let t = e.nsfw,
        n =
            !1 ===
            (0, r.bG)([i.default], () => {
                var e;
                return null == (e = i.default.getCurrentUser()) ? void 0 : e.nsfwAllowed;
            }),
        s = !(0, r.bG)([l.A], () => l.A.didAgree(e.guild_id));
    return t && (s || n);
}
