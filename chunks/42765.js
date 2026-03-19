n.d(t, { q: () => h }), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    a = n(847599),
    r = n(390248),
    o = n(444802),
    d = n(278616),
    c = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    g = n(639383),
    A = n(985018),
    x = n(842130);
function h() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        { goreContentGuilds: h, goreContentFriendDm: p, goreContentNonFriendDm: T } = (0, d.g)(),
        E = (e) => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW)
                ? l.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, o.qY)(e);
        },
        S = [
            { value: s.TO.BLUR, label: A.intl.string(A.t.S49Uad) },
            { value: s.TO.BLOCK, label: A.intl.string(A.t["D/157Y"]) },
        ],
        C = [{ value: s.TO.BLUR, label: A.intl.string(A.t.S49Uad) }],
        f = { value: s.TO.SHOW, label: A.intl.string(A.t["5k5OFp"]) };
    e && (S.unshift(f), C.unshift(f));
    let N = { isDisabled: n, tooltipText: t ? A.intl.string(x.default["6Af/cw"]) : void 0 };
    return (0, i.jsxs)(m.E, {
        description: A.intl.string(A.t.XgH9eh),
        children: [
            (0, i.jsx)(g.A, {
                title: A.intl.string(A.t["+uI23H"]),
                value: p,
                onChange: (e) => E({ goreContentFriendDm: e }),
                options: S,
                ...N,
            }),
            (0, i.jsx)(g.A, {
                title: A.intl.string(A.t["Yh+HX1"]),
                value: T,
                onChange: (e) => E({ goreContentNonFriendDm: e }),
                options: S,
                ...N,
            }),
            (0, i.jsx)(g.A, {
                title: A.intl.string(A.t["FP+a42"]),
                value: h,
                onChange: (e) => E({ goreContentGuilds: e }),
                isDisabled: !e || n,
                options: C,
                tooltipText: t ? A.intl.string(x.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
