n.d(t, {
    UT: function () {
        return I;
    },
    _4: function () {
        return p;
    },
    cm: function () {
        return f;
    },
    e: function () {
        return v;
    },
    eg: function () {
        return N;
    },
    lJ: function () {
        return C;
    },
    rY: function () {
        return _;
    },
    uo: function () {
        return T;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(192379),
    r = n(658722),
    l = n.n(r),
    a = n(442837),
    s = n(271383),
    o = n(594174),
    c = n(626135),
    d = n(823379),
    u = n(892880),
    m = n(51144),
    h = n(480608),
    g = n(203377),
    x = n(981631);
let p = 50,
    f = 1000;
function C(e, t) {
    let n = (0, a.Wu)(
            [s.ZP],
            () => {
                let n = s.ZP.getMembers(e);
                return null == t ? n : n.filter(t);
            },
            [e, t]
        ),
        r = (0, a.cj)(
            [o.default],
            () =>
                n.reduce((e, t) => {
                    let n = o.default.getUser(t.userId);
                    return null == n ? e : ((e[t.userId] = n), e);
                }, {}),
            [n]
        );
    return i.useMemo(() => {
        let t = [];
        for (let l of n) {
            var i;
            let n = r[l.userId];
            null != n &&
                t.push({
                    name: null !== (i = l.nick) && void 0 !== i ? i : m.ZP.getName(n),
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
    }, [n, r, e]);
}
function v(e, t, n) {
    let r = i.useRef(n);
    return (
        i.useEffect(() => {
            r.current = n;
        }),
        i.useEffect(() => {
            (0, h.H)(e, t).catch(r.current);
        }, [e, t]),
        C(
            e,
            i.useCallback((e) => e.roles.includes(t), [t])
        )
    );
}
function _(e, t) {
    let n = i.useRef(!1);
    i.useEffect(() => {
        u.Z.requestMembers(e, t, 200), '' !== t && !n.current && (c.default.track(x.rMx.SEARCH_STARTED, { search_type: 'Role Members' }), (n.current = !0));
    }, [e, t]);
}
function N(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase());
}
function I(e) {
    switch (e) {
        case g.ZI.MEMBERS:
            return 'Members';
        case g.ZI.PERMISSIONS:
            return 'Permissions';
        case g.ZI.DISPLAY:
            return 'Role Settings';
        case g.ZI.VERIFICATIONS:
            return 'Connections';
        default:
            (0, d.vE)(e);
    }
}
function T(e, t) {
    return '' === t || e.name.toLowerCase().includes(t.toLowerCase());
}
