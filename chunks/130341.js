n.d(t, {
    UT: () => v,
    _4: () => f,
    cm: () => b,
    e: () => j,
    eg: () => _,
    lJ: () => x,
    rY: () => N,
    uo: () => C
}),
    n(653041),
    n(47120),
    n(566702);
var r = n(192379),
    i = n(658722),
    s = n.n(i),
    a = n(442837),
    l = n(271383),
    o = n(594174),
    c = n(626135),
    d = n(823379),
    u = n(892880),
    m = n(51144),
    g = n(480608),
    p = n(203377),
    h = n(981631);
let f = 50,
    b = 1000;
function x(e, t) {
    let n = (0, a.Wu)(
            [l.ZP],
            () => {
                let n = l.ZP.getMembers(e);
                return null == t ? n : n.filter(t);
            },
            [e, t]
        ),
        i = (0, a.cj)(
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
        for (let s of n) {
            var r;
            let n = i[s.userId];
            null != n &&
                t.push({
                    name: null != (r = s.nick) ? r : m.ZP.getName(n),
                    userTag: m.ZP.getUserTag(n),
                    id: s.userId,
                    avatarSource: n.getAvatarSource(e),
                    avatarURL: n.getAvatarURL(e, 80),
                    bot: n.bot,
                    verifiedBot: n.isVerifiedBot(),
                    roles: s.roles,
                    key: s.userId,
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
        x(
            e,
            r.useCallback((e) => e.roles.includes(t), [t])
        )
    );
}
function N(e, t) {
    let n = r.useRef(!1);
    r.useEffect(() => {
        u.Z.requestMembers(e, t, 200), '' === t || n.current || (c.default.track(h.rMx.SEARCH_STARTED, { search_type: 'Role Members' }), (n.current = !0));
    }, [e, t]);
}
function _(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || s()(n, t.name.toLowerCase()) || s()(n, t.userTag.toLowerCase());
}
function v(e) {
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
            (0, d.vE)(e);
    }
}
function C(e, t) {
    return '' === t || e.name.toLowerCase().includes(t.toLowerCase());
}
