n.d(t, {
    q: () => b,
}),
    n(667532);
var r = n(627968);
n(64700);
var i = n(873298),
    l = n(935649),
    s = n(847599),
    a = n(390248),
    o = n(444802),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    _ = n(945276),
    p = n(86689),
    m = n(639383),
    g = n(531525),
    A = n(985018),
    f = n(842130);

function h(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function b() {
    var e;
    let t = null == (e = (0, _.A)()) || e,
        n = (0, u.uM)(),
        b = (0, d.G)(),
        { goreContentGuilds: E, goreContentFriendDm: x, goreContentNonFriendDm: O } = (0, c.g)(),
        C = (e) => {
            let t = Object.values(e);
            (0, a.hK)() && t.includes(i.TO.SHOW)
                ? l.A.showAgeVerificationGetStartedModal({
                      entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS,
                  })
                : (0, o.qY)(e);
        },
        I = [
            {
                value: i.TO.BLUR,
                label: A.intl.string(A.t.S49Uad),
            },
            {
                value: i.TO.BLOCK,
                label: A.intl.string(A.t["D/157Y"]),
            },
        ],
        T = [
            {
                value: i.TO.BLUR,
                label: A.intl.string(A.t.S49Uad),
            },
        ],
        S = {
            value: i.TO.SHOW,
            label: A.intl.string(A.t["5k5OFp"]),
        };
    t && (I.unshift(S), T.unshift(S));
    let j = {
        isDisabled: b,
        tooltipText: n ? A.intl.string(f.default["6Af/cw"]) : void 0,
    };
    return (0, r.jsxs)(p.E, {
        setting: g.H.GORE_MEDIA_REDACTION,
        description: A.intl.string(A.t.XgH9eh),
        children: [
            (0, r.jsx)(
                m.A,
                h(
                    {
                        title: A.intl.string(A.t["+uI23H"]),
                        value: x,
                        onChange: (e) =>
                            C({
                                goreContentFriendDm: e,
                            }),
                        options: I,
                    },
                    j,
                ),
            ),
            (0, r.jsx)(
                m.A,
                h(
                    {
                        title: A.intl.string(A.t["Yh+HX1"]),
                        value: O,
                        onChange: (e) =>
                            C({
                                goreContentNonFriendDm: e,
                            }),
                        options: I,
                    },
                    j,
                ),
            ),
            (0, r.jsx)(m.A, {
                title: A.intl.string(A.t["FP+a42"]),
                value: E,
                onChange: (e) =>
                    C({
                        goreContentGuilds: e,
                    }),
                isDisabled: !t || b,
                options: T,
                tooltipText: n ? A.intl.string(f.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
