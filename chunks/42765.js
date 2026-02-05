n.d(t, { q: () => p }), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    r = n(935649),
    a = n(847599),
    l = n(390248),
    o = n(444802),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    A = n(639383),
    g = n(531525),
    E = n(985018),
    h = n(842130);
function p() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, d.G)(),
        { goreContentGuilds: p, goreContentFriendDm: C, goreContentNonFriendDm: x } = (0, c.g)(),
        T = (e) => {
            let t = Object.values(e);
            (0, l.hK)() && t.includes(s.TO.SHOW)
                ? r.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, o.qY)(e);
        },
        I = [
            { value: s.TO.BLUR, label: E.intl.string(E.t.S49Uad) },
            { value: s.TO.BLOCK, label: E.intl.string(E.t["D/157Y"]) },
        ],
        S = [{ value: s.TO.BLUR, label: E.intl.string(E.t.S49Uad) }],
        f = { value: s.TO.SHOW, label: E.intl.string(E.t["5k5OFp"]) };
    e && (I.unshift(f), S.unshift(f));
    let N = { isDisabled: n, tooltipText: t ? E.intl.string(h.default["6Af/cw"]) : void 0 };
    return (0, i.jsxs)(m.E, {
        setting: g.H.GORE_MEDIA_REDACTION,
        description: E.intl.string(E.t.XgH9eh),
        children: [
            (0, i.jsx)(A.A, {
                title: E.intl.string(E.t["+uI23H"]),
                value: C,
                onChange: (e) => T({ goreContentFriendDm: e }),
                options: I,
                ...N,
            }),
            (0, i.jsx)(A.A, {
                title: E.intl.string(E.t["Yh+HX1"]),
                value: x,
                onChange: (e) => T({ goreContentNonFriendDm: e }),
                options: I,
                ...N,
            }),
            (0, i.jsx)(A.A, {
                title: E.intl.string(E.t["FP+a42"]),
                value: p,
                onChange: (e) => T({ goreContentGuilds: e }),
                isDisabled: !e || n,
                options: S,
                tooltipText: t ? E.intl.string(h.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
