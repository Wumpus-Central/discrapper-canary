n.d(t, { Z: () => a });
var r = n(442837),
    i = n(731290),
    l = n(594174);
function a(e) {
    let t = e.nsfw,
        n =
            !1 ===
            (0, r.e7)([l.default], () => {
                var e;
                return null == (e = l.default.getCurrentUser()) ? void 0 : e.nsfwAllowed;
            }),
        a = !(0, r.e7)([i.Z], () => i.Z.didAgree(e.guild_id));
    return t && (a || n);
}
