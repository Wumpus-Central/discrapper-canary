n.d(t, {
    UT: () => O,
    _4: () => f,
    cm: () => x,
    e: () => j,
    eg: () => v,
    lJ: () => b,
    rY: () => _,
    uo: () => C
}),
    n(539854),
    n(388685),
    n(781311);
var r = n(192379),
    i = n(658722),
    l = n.n(i),
    s = n(442837),
    a = n(271383),
    o = n(594174),
    c = n(626135),
    u = n(823379),
    d = n(892880),
    m = n(51144),
    g = n(480608),
    p = n(203377),
    h = n(981631);
let f = 50,
    x = 1000;
function b(e, t) {
    let n = (0, s.Wu)(
            [a.ZP],
            () => {
                let n = a.ZP.getMembers(e);
                return null == t ? n : n.filter(t);
            },
            [e, t]
        ),
        i = (0, s.cj)(
            [o.default],
            () =>
                n.reduce((e, t) => {
                    let n = o.default.getUser(t.userId);
                    return null == n || (e[t.userId] = n), e;
                }, {}),
            [n]
        );
    return r.useMemo(() => {
        let t = [];
        for (let l of n) {
            var r;
            let n = i[l.userId];
            null != n &&
                t.push({
                    name: null != (r = l.nick) ? r : m.ZP.getName(n),
                    userTag: m.ZP.getUserTag(n),
                    id: l.userId,
                    avatarSource: n.getAvatarSource(e),
                    avatarURL: n.getAvatarURL(e, 80),
                    bot: n.bot,
                    verifiedBot: n.isVerifiedBot(),
                    roles: l.roles,
                    key: l.userId,
                    user: n
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
            (0, g.H)(e, t).catch(i.current);
        }, [e, t]),
        b(
            e,
            r.useCallback((e) => e.roles.includes(t), [t])
        )
    );
}
function _(e, t) {
    let n = r.useRef(!1);
    r.useEffect(() => {
        d.Z.requestMembers(e, t, 200), '' === t || n.current || (c.default.track(h.rMx.SEARCH_STARTED, { search_type: 'Role Members' }), (n.current = !0));
    }, [e, t]);
}
function v(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase());
}
function O(e) {
    switch (e) {
        case p.ZI.MEMBERS:
            return 'Members';
        case p.ZI.PERMISSIONS:
            return 'Permissions';
        case p.ZI.DISPLAY:
            return 'Role Settings';
        case p.ZI.VERIFICATIONS:
            return 'Connections';
        default:
            (0, u.vE)(e);
    }
}
function C(e, t) {
    return '' === t || e.name.toLowerCase().includes(t.toLowerCase());
}
