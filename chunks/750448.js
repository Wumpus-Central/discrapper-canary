n.d(t, { A: () => C });
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
    g = n(652215),
    m = n(985018);
let p = "app-download-item",
    _ = "add-server-item";
function x() {
    return !1;
}
function f(e) {
    let t = o.default.getMutableGuildStates();
    return (
        (e === g.sFm.SERVER_DISCOVERY_BADGE && !u.A.hasViewed(g.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== p && e !== _ && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let E = (0, A.L_)((e, t, n) => ["null", ...t, ...e, _, g.sFm.E3_SERVER_DISCOVERY_BADGE, p]),
    C = l.forwardRef(function (e, t) {
        let n = (0, s.yK)([c.Ay, d.A, o.default], () =>
                E(c.Ay.getGuildFolders(), d.A.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel()),
            ),
            l = (0, s.bG)([h.A], () => h.A.isFocused()),
            u = (0, s.bG)([r.A], () => r.A.getExpandedFolders());
        return (0, i.jsx)(a.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: x,
            textUnread: m.intl.string(m.t.y2b7CA),
            textMention: m.intl.string(m.t.y2b7CA),
            isMentioned: f,
            animate: l,
            expandedFolders: u,
        });
    });
