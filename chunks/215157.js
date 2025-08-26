r.d(t, { Q: () => b }), r(781311), r(413496), r(433524), r(35282);
var n = r(647438),
    l = r(442837),
    o = r(794433),
    i = r(271383),
    s = r(485386),
    a = r(892880),
    c = r(226951),
    u = r(605436),
    d = r(71080);
function m(e) {
    let t = e.trim();
    return "@" === t[0] ? t.slice(1) : t;
}
function x(e, t) {
    let r = m(e);
    return RegExp("".concat(c.Z.escape(r)), "i").test(t);
}
function b(e, t, r, c) {
    let b = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
        h = (0, l.e7)([s.Z], () => (null != e ? s.Z.getSortedRoles(e.id) : [])),
        f = (0, l.Wu)([i.ZP], () => (null != e ? i.ZP.getMemberIds(e.id) : [])),
        y = n.useMemo(() => {
            if (null == e || "@" === c[0]) return [];
            if (b) return u.Wx(e, h, null != t ? t : null, r, (e) => x(c, e));
            let n = u.ik(e, h, null != t ? t : null, r, (e) => x(c, e));
            return 0 === n.length && "" === c.trim() && 1 === h.length && (n = u.aq()), n;
        }, [h, c, e, t, r, b]),
        g = n.useMemo(() => (null == e ? [] : u.iI(f, null != t ? t : null, e, r, (e) => x(c, e))), [f, c, e, t, r]);
    return (
        n.useEffect(() => {
            null != e && a.Z.requestMembers(e.id, m(c), d.EQ);
        }, [c, e]),
        {
            roles: y,
            members: g,
            getRichTag: n.useCallback((e) => {
                let t = null;
                return (
                    e.rowType === d.aC.ROLE || e.rowType === d.aC.ADMINISTRATOR
                        ? (t = {
                              type: o.F.ROLE,
                              label: e.name,
                              color: e.colorString,
                          })
                        : (e.rowType === d.aC.MEMBER || e.rowType === d.aC.OWNER) &&
                          (t = {
                              type: o.F.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL,
                          }),
                    t
                );
            }, []),
        }
    );
}
