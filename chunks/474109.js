n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(256916),
    o = n(664915),
    s = n(888369),
    c = n(358652),
    u = n(771845),
    d = n(613060),
    h = n(451478),
    p = n(251625),
    f = n(981631),
    m = n(388032);
let g = 'app-download-item',
    v = 'add-server-item';
function C() {
    return !1;
}
function x(e) {
    var t;
    let n = s.default.getMutableGuildStates();
    return (e === f.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE)) || (e !== g && e !== v && (null === (t = n[null != e ? e : 'null']) || void 0 === t ? void 0 : t.highImportanceMentionCount) > 0);
}
let I = (0, p.oH)((e, t, n) => ['null', ...t, ...e, v, f.x8Z.E3_SERVER_DISCOVERY_BADGE, g]);
t.Z = l.forwardRef(function (e, t) {
    let n = (0, r.Wu)([u.ZP, c.Z, s.default], () => I(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())),
        l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
        d = (0, r.e7)([o.Z], () => o.Z.getExpandedFolders());
    return (0, i.jsx)(a.Z, {
        ...e,
        ref: t,
        items: n,
        isUnread: C,
        textUnread: m.intl.string(m.t.y2b7CA),
        textMention: m.intl.string(m.t.y2b7CA),
        isMentioned: x,
        animate: l,
        expandedFolders: d
    });
});
