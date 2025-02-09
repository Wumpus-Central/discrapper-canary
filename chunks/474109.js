n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(18998),
    o = n(664915),
    s = n(888369),
    c = n(358652),
    d = n(771845),
    u = n(613060),
    h = n(451478),
    p = n(251625),
    m = n(981631),
    g = n(388032);
let f = 'app-download-item',
    _ = 'add-server-item';
function v() {
    return !1;
}
function C(e) {
    var t;
    let n = s.default.getMutableGuildStates();
    return (e === m.x8Z.SERVER_DISCOVERY_BADGE && !u.Z.hasViewed(m.x8Z.SERVER_DISCOVERY_BADGE)) || (e !== f && e !== _ && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.highImportanceMentionCount) > 0);
}
let x = (0, p.oH)((e, t, n) => ['null', ...t, ...e, _, m.x8Z.E3_SERVER_DISCOVERY_BADGE, f]),
    Z = l.forwardRef(function (e, t) {
        let n = (0, r.Wu)([d.ZP, c.Z, s.default], () => x(d.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())),
            l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
            u = (0, r.e7)([o.Z], () => o.Z.getExpandedFolders());
        return (0, i.jsx)(a.Z, {
            ...e,
            ref: t,
            items: n,
            isUnread: v,
            textUnread: g.intl.string(g.t.y2b7CA),
            textMention: g.intl.string(g.t.y2b7CA),
            isMentioned: C,
            animate: l,
            expandedFolders: u
        });
    });
