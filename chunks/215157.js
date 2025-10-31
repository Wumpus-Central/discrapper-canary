n.d(t, { Q: () => h }), n(781311), n(413496), n(433524), n(35282);
var r = n(647438),
    i = n(442837),
    l = n(794433),
    a = n(271383),
    o = n(485386),
    s = n(892880),
    c = n(226951),
    u = n(605436),
    d = n(71080);
function p(e) {
    let t = e.trim();
    return "@" === t[0] ? t.slice(1) : t;
}
function f(e, t) {
    let n = p(e);
    return RegExp("".concat(c.Z.escape(n)), "i").test(t);
}
function h(e, t, n, c) {
    let h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
        m = (0, i.e7)([o.Z], () => (null != e ? o.Z.getSortedRoles(e.id) : [])),
        g = (0, i.Wu)([a.ZP], () => (null != e ? a.ZP.getMemberIds(e.id) : [])),
        b = r.useMemo(() => {
            if (null == e || "@" === c[0]) return [];
            if (h) return u.Wx(e, m, null != t ? t : null, n, (e) => f(c, e));
            let r = u.ik(e, m, null != t ? t : null, n, (e) => f(c, e));
            return 0 === r.length && "" === c.trim() && 1 === m.length && (r = u.aq()), r;
        }, [m, c, e, t, n, h]),
        _ = r.useMemo(() => (null == e ? [] : u.iI(g, null != t ? t : null, e, n, (e) => f(c, e))), [g, c, e, t, n]);
    return (
        r.useEffect(() => {
            null != e && s.Z.requestMembers(e.id, p(c), d.EQ);
        }, [c, e]),
        {
            roles: b,
            members: _,
            getRichTag: r.useCallback((e) => {
                let t = null;
                return (
                    e.rowType === d.aC.ROLE || e.rowType === d.aC.ADMINISTRATOR
                        ? (t = {
                              type: l.F.ROLE,
                              label: e.name,
                              color: e.colorString,
                          })
                        : (e.rowType === d.aC.MEMBER || e.rowType === d.aC.OWNER) &&
                          (t = {
                              type: l.F.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL,
                          }),
                    t
                );
            }, []),
        }
    );
}
