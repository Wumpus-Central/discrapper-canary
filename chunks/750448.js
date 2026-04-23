n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(173860),
    r = n(383394),
    o = n(458294),
    d = n(131677),
    c = n(711014),
    u = n(871697),
    h = n(531685),
    A = n(583613),
    _ = n(652215),
    m = n(985018);
let g = "app-download-item",
    p = "add-server-item";
function f() {
    return !1;
}
function E(e) {
    let t = o.default.getMutableGuildStates();
    return (
        (e === _.sFm.SERVER_DISCOVERY_BADGE && !u.A.hasViewed(_.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== g && e !== p && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let x = (0, A.L_)((e, t, n) => ["null", ...t, ...e, p, _.sFm.E3_SERVER_DISCOVERY_BADGE, g]),
    I = l.forwardRef(function (e, t) {
        let n = (0, s.yK)([c.Ay, d.A, o.default], () =>
                x(c.Ay.getGuildFolders(), d.A.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel()),
            ),
            l = (0, s.bG)([h.A], () => h.A.isFocused()),
            u = (0, s.bG)([r.A], () => r.A.getExpandedFolders());
        return (0, i.jsx)(a.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: f,
            textUnread: m.intl.string(m.t.y2b7CA),
            textMention: m.intl.string(m.t.y2b7CA),
            isMentioned: E,
            animate: l,
            expandedFolders: u,
        });
    });
