n.d(t, {
    UT: () => O,
    _4: () => h,
    cm: () => b,
    e: () => j,
    eg: () => v,
    lJ: () => x,
    rY: () => _,
    uo: () => C,
}),
    n(539854),
    n(388685),
    n(781311);
var r = n(647438),
    i = n(658722),
    l = n.n(i),
    a = n(442837),
    s = n(271383),
    o = n(594174),
    c = n(626135),
    d = n(823379),
    u = n(892880),
    g = n(51144),
    m = n(480608),
    p = n(203377),
    f = n(981631);
let h = 50,
    b = 1000;
function x(e, t) {
    let n = (0, a.Wu)([s.ZP], () => {
            let n = s.ZP.getMembers(e);
            return null == t ? n : n.filter(t);
        }, [e, t]),
        i = (0, a.cj)(
            [o.default],
            () =>
                n.reduce((e, t) => {
                    let n = o.default.getUser(t.userId);
                    return null == n || (e[t.userId] = n), e;
                }, {}),
            [n],
        );
    return r.useMemo(() => {
        let t = [];
        for (let l of n) {
            var r;
            let n = i[l.userId];
            null != n &&
                t.push({
                    name: null != (r = l.nick) ? r : g.ZP.getName(n),
                    userTag: g.ZP.getUserTag(n),
                    id: l.userId,
                    avatarSource: n.getAvatarSource(e),
                    avatarURL: n.getAvatarURL(e, 80),
                    bot: n.bot,
                    verifiedBot: n.isVerifiedBot(),
                    roles: l.roles,
                    key: l.userId,
                    user: n,
                });
        }
        return t;
    }, [n, i, e]);
}
function j(e, t, n) {
    let i = r.useRef(n);
    return (
        r.useEffect(() => {
            i.current = n;
        }),
        r.useEffect(() => {
            (0, m.H)(e, t).catch(i.current);
        }, [e, t]),
        x(
            e,
            r.useCallback((e) => e.roles.includes(t), [t]),
        )
    );
}
function _(e, t) {
    let n = r.useRef(!1);
    r.useEffect(() => {
        u.Z.requestMembers(e, t, 200),
            "" === t ||
                n.current ||
                (c.default.track(f.rMx.SEARCH_STARTED, { search_type: "Role Members" }), (n.current = !0));
    }, [e, t]);
}
function v(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase());
}
function O(e) {
    switch (e) {
        case p.ZI.MEMBERS:
            return "Members";
        case p.ZI.PERMISSIONS:
            return "Permissions";
        case p.ZI.DISPLAY:
            return "Role Settings";
        case p.ZI.VERIFICATIONS:
            return "Connections";
        default:
            (0, d.vE)(e);
    }
}
function C(e, t) {
    return "" === t || e.name.toLowerCase().includes(t.toLowerCase());
}
