n.d(t, {
    Z: () => O,
}),
    n(667532);
var r = n(627968);
n(64700);
var i = n(873298),
    a = n(935649),
    s = n(847599),
    o = n(390248),
    l = n(632119),
    c = n(278616),
    u = n(771888),
    d = n(171316),
    f = n(945276),
    p = n(86689),
    _ = n(639383),
    h = n(355097),
    m = n(531525),
    g = n(985018),
    E = n(842130);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function O() {
    var e;
    let t = null == (e = (0, f.A)()) || e,
        n = (0, d.uM)(),
        b = (0, u.G)(),
        { explicitContentGuilds: O, explicitContentFriendDm: A, explicitContentNonFriendDm: v } = (0, c.R)(),
        S = (e) => {
            let t = Object.values(e);
            (0, o.hK)() && t.includes(i.TO.SHOW)
                ? a.A.showAgeVerificationGetStartedModal({
                      entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS,
                  })
                : (0, l.Jz)(e);
        },
        I = [
            {
                value: i.TO.BLUR,
                label: g.intl.string(g.t.S49Uad),
            },
            {
                value: i.TO.BLOCK,
                label: g.intl.string(g.t["D/157Y"]),
            },
        ],
        T = [
            {
                value: i.TO.BLUR,
                label: g.intl.string(g.t.S49Uad),
            },
        ],
        C = {
            value: i.TO.SHOW,
            label: g.intl.string(g.t["5k5OFp"]),
        };
    t && (I.unshift(C), T.unshift(C));
    let N = {
        isDisabled: b,
        tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : void 0,
    };
    return (0, r.jsxs)(p.E, {
        setting: m.H.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: h.d1.EXPLICIT_MEDIA_REDACTION_V2,
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, r.jsx)(
                _.A,
                y(
                    {
                        title: g.intl.string(g.t["+uI23H"]),
                        value: A,
                        onChange: (e) =>
                            S({
                                explicitContentFriendDm: e,
                            }),
                        options: I,
                    },
                    N,
                ),
            ),
            (0, r.jsx)(
                _.A,
                y(
                    {
                        title: g.intl.string(g.t["Yh+HX1"]),
                        value: v,
                        onChange: (e) =>
                            S({
                                explicitContentNonFriendDm: e,
                            }),
                        options: I,
                    },
                    N,
                ),
            ),
            (0, r.jsx)(_.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: O,
                onChange: (e) =>
                    S({
                        explicitContentGuilds: e,
                    }),
                isDisabled: !t || b,
                tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : void 0,
                options: T,
            }),
        ],
    });
}
