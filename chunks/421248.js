n.d(t, { Z: () => p }), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    a = n(847599),
    r = n(390248),
    o = n(632119),
    d = n(278616),
    c = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    g = n(639383),
    A = n(531525),
    h = n(985018),
    x = n(842130);
function p() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        { explicitContentGuilds: p, explicitContentFriendDm: T, explicitContentNonFriendDm: E } = (0, d.R)(),
        S = (e) => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW)
                ? l.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, o.Jz)(e);
        },
        C = [
            { value: s.TO.BLUR, label: h.intl.string(h.t.S49Uad) },
            { value: s.TO.BLOCK, label: h.intl.string(h.t["D/157Y"]) },
        ],
        f = [{ value: s.TO.BLUR, label: h.intl.string(h.t.S49Uad) }],
        b = { value: s.TO.SHOW, label: h.intl.string(h.t["5k5OFp"]) };
    e && (C.unshift(b), f.unshift(b));
    let N = { isDisabled: n, tooltipText: t ? h.intl.string(x.default["6Af/cw"]) : void 0 };
    return (0, i.jsxs)(m.E, {
        setting: A.H.PRIVACY_SENSITIVE_MEDIA_V2,
        description: h.intl.string(h.t.Wnojv1),
        children: [
            (0, i.jsx)(g.A, {
                title: h.intl.string(h.t["+uI23H"]),
                value: T,
                onChange: (e) => S({ explicitContentFriendDm: e }),
                options: C,
                ...N,
            }),
            (0, i.jsx)(g.A, {
                title: h.intl.string(h.t["Yh+HX1"]),
                value: E,
                onChange: (e) => S({ explicitContentNonFriendDm: e }),
                options: C,
                ...N,
            }),
            (0, i.jsx)(g.A, {
                title: h.intl.string(h.t["FP+a42"]),
                value: p,
                onChange: (e) => S({ explicitContentGuilds: e }),
                isDisabled: !e || n,
                tooltipText: t ? h.intl.string(x.default["6Af/cw"]) : void 0,
                options: f,
            }),
        ],
    });
}
