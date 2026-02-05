"use strict";
n.d(t, { A: () => a });
var r = n(427157),
    i = n(576622);
function a() {
    let e, t, n;
    for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
    let l = s[0],
        u = s[1];
    if ("string" == typeof l && ("string" == typeof u || null == u)) (e = l), (t = u), (n = s[2]);
    else if (l instanceof r.A && ("object" == typeof u || null == u))
        (e = l.id), (t = l.getAvatarURL(void 0, 80)), (n = u);
    else throw Error("[preloadUserProfileForPopout] Invalid arguments");
    return null == e
        ? Promise.resolve()
        : (0, i.A)(e, t, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...n });
}
