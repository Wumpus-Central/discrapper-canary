n.d(t, { Z: () => p }), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    a = n(847599),
    r = n(390248),
    o = n(632119),
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
        { explicitContentGuilds: p, explicitContentFriendDm: x, explicitContentNonFriendDm: E } = (0, d.R)(),
        T = (e) => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW)
                ? l.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, o.Jz)(e);
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
        description: A.intl.string(A.t.Wnojv1),
        children: [
            (0, i.jsx)(_.A, {
                title: A.intl.string(A.t["+uI23H"]),
                value: x,
                onChange: (e) => T({ explicitContentFriendDm: e }),
                options: S,
                ...C,
            }),
            (0, i.jsx)(_.A, {
                title: A.intl.string(A.t["Yh+HX1"]),
                value: E,
                onChange: (e) => T({ explicitContentNonFriendDm: e }),
                options: S,
                ...C,
            }),
            (0, i.jsx)(_.A, {
                title: A.intl.string(A.t["FP+a42"]),
                value: p,
                onChange: (e) => T({ explicitContentGuilds: e }),
                isDisabled: !e || n,
                tooltipText: t ? A.intl.string(h.default["6Af/cw"]) : void 0,
                options: f,
            }),
        ],
    });
}
