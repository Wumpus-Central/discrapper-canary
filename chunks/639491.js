n.d(t, { q: () => p }), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    a = n(847599),
    r = n(390248),
    o = n(444802),
    d = n(278616),
    u = n(771888),
    c = n(171316),
    g = n(945276),
    m = n(562783),
    _ = n(290389),
    A = n(985018),
    h = n(602339);
function p() {
    let e = (0, g.A)() ?? !0,
        t = (0, c.uM)(),
        n = (0, u.G)(),
        { goreContentGuilds: p, goreContentFriendDm: x, goreContentNonFriendDm: E } = (0, d.g)(),
        T = (e) => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW)
                ? l.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, o.qY)(e);
        },
        S = [
            { value: s.TO.BLUR, label: A.intl.string(A.t.S49Uad) },
            { value: s.TO.BLOCK, label: A.intl.string(A.t["D/157Y"]) },
        ],
        f = [{ value: s.TO.BLUR, label: A.intl.string(A.t.S49Uad) }],
        b = { value: s.TO.SHOW, label: A.intl.string(A.t["5k5OFp"]) };
    e && (S.unshift(b), f.unshift(b));
    let C = { isDisabled: n, tooltipText: t ? A.intl.string(h.default["6Af/cw"]) : void 0 };
    return (0, i.jsxs)(m.E, {
        description: A.intl.string(A.t.XgH9eh),
        children: [
            (0, i.jsx)(_.A, {
                title: A.intl.string(A.t["+uI23H"]),
                value: x,
                onChange: (e) => T({ goreContentFriendDm: e }),
                options: S,
                ...C,
            }),
            (0, i.jsx)(_.A, {
                title: A.intl.string(A.t["Yh+HX1"]),
                value: E,
                onChange: (e) => T({ goreContentNonFriendDm: e }),
                options: S,
                ...C,
            }),
            (0, i.jsx)(_.A, {
                title: A.intl.string(A.t["FP+a42"]),
                value: p,
                onChange: (e) => T({ goreContentGuilds: e }),
                isDisabled: !e || n,
                options: f,
                tooltipText: t ? A.intl.string(h.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
