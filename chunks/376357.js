n.d(t, { xJ: () => T, ox: () => g, P0: () => S, Ck: () => p, VD: () => N });
var i,
    r,
    a = n(176781),
    s = n(173936),
    l = n(606096),
    o = n(406810),
    d = n(152367),
    c = n(27232),
    u = n(292801),
    _ = n(849516),
    E = n(435462);
let A = E.P0;
var h = n(661531),
    f = n(8062),
    I = n(652215),
    p =
        (((i = {}).MESSAGE = "message"),
        (i.SUCCESS = "success"),
        (i.FAILURE = "failure"),
        (i.CLIP = "clip"),
        (i.LINK = "link"),
        (i.FORWARD = "forward"),
        (i.INVITE = "invite"),
        (i.BOOKMARK = "bookmark"),
        (i.CLOCK = "clock"),
        (i.AI = "ai"),
        (i.FAVORITE = "favorite"),
        i),
    T = (((r = {})[(r.TOP = 0)] = "TOP"), (r[(r.BOTTOM = 1)] = "BOTTOM"), r);
let m = {
    clip: { icon: a.x },
    link: { icon: s.LinkIcon },
    bookmark: { icon: l.BookmarkIcon },
    clock: { icon: o.ClockIcon },
    ai: { icon: d.D },
    favorite: { icon: c.StarIcon },
    forward: { icon: u.t, color: h.A.colors.ICON_FEEDBACK_POSITIVE },
    invite: { icon: _.u, color: h.A.colors.ICON_BRAND },
};
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = {
            surface: f.a[n.appContext ?? I.BRT.APP],
            position: 1 === n.position ? "bottom" : "top",
            duration: n.duration,
        };
    switch (t) {
        case "success":
            return { ...i, text: e, variant: "success" };
        case "failure":
            return { ...i, text: e, variant: "critical" };
        default: {
            let n = m[t];
            if (null == n) return { ...i, text: e, variant: "default" };
            return { ...i, text: e, variant: "default", icon: n.icon, iconColor: n.color };
        }
    }
}
function S(e) {
    A("message" in e ? g(e.message, e.type, e.options) : e);
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.BRT.APP;
    (0, E.VD)(f.a[e]);
}
