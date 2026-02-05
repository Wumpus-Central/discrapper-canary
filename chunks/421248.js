n.d(t, { Z: () => C }), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    r = n(935649),
    a = n(847599),
    l = n(390248),
    o = n(632119),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    A = n(639383),
    g = n(355097),
    E = n(531525),
    h = n(985018),
    p = n(842130);
function C() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, d.G)(),
        { explicitContentGuilds: C, explicitContentFriendDm: x, explicitContentNonFriendDm: T } = (0, c.R)(),
        I = (e) => {
            let t = Object.values(e);
            (0, l.hK)() && t.includes(s.TO.SHOW)
                ? r.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, o.Jz)(e);
        },
        S = [
            { value: s.TO.BLUR, label: h.intl.string(h.t.S49Uad) },
            { value: s.TO.BLOCK, label: h.intl.string(h.t["D/157Y"]) },
        ],
        f = [{ value: s.TO.BLUR, label: h.intl.string(h.t.S49Uad) }],
        N = { value: s.TO.SHOW, label: h.intl.string(h.t["5k5OFp"]) };
    e && (S.unshift(N), f.unshift(N));
    let b = { isDisabled: n, tooltipText: t ? h.intl.string(p.default["6Af/cw"]) : void 0 };
    return (0, i.jsxs)(m.E, {
        setting: E.H.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: g.d1.EXPLICIT_MEDIA_REDACTION_V2,
        description: h.intl.string(h.t.Wnojv1),
        children: [
            (0, i.jsx)(A.A, {
                title: h.intl.string(h.t["+uI23H"]),
                value: x,
                onChange: (e) => I({ explicitContentFriendDm: e }),
                options: S,
                ...b,
            }),
            (0, i.jsx)(A.A, {
                title: h.intl.string(h.t["Yh+HX1"]),
                value: T,
                onChange: (e) => I({ explicitContentNonFriendDm: e }),
                options: S,
                ...b,
            }),
            (0, i.jsx)(A.A, {
                title: h.intl.string(h.t["FP+a42"]),
                value: C,
                onChange: (e) => I({ explicitContentGuilds: e }),
                isDisabled: !e || n,
                tooltipText: t ? h.intl.string(p.default["6Af/cw"]) : void 0,
                options: f,
            }),
        ],
    });
}
