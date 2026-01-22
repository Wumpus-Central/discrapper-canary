n.d(t, {
    q: () => y,
}),
    n(667532);
var r = n(627968);
n(64700);
var i = n(873298),
    a = n(935649),
    s = n(847599),
    o = n(390248),
    l = n(444802),
    c = n(278616),
    u = n(771888),
    d = n(171316),
    f = n(945276),
    p = n(86689),
    _ = n(639383),
    h = n(531525),
    m = n(985018),
    g = n(842130);

function E(e, t, n) {
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

function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function y() {
    var e;
    let t = null == (e = (0, f.A)()) || e,
        n = (0, d.uM)(),
        E = (0, u.G)(),
        { goreContentGuilds: y, goreContentFriendDm: O, goreContentNonFriendDm: A } = (0, c.g)(),
        v = (e) => {
            let t = Object.values(e);
            (0, o.hK)() && t.includes(i.TO.SHOW)
                ? a.A.showAgeVerificationGetStartedModal({
                      entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS,
                  })
                : (0, l.qY)(e);
        },
        S = [
            {
                value: i.TO.BLUR,
                label: m.intl.string(m.t.S49Uad),
            },
            {
                value: i.TO.BLOCK,
                label: m.intl.string(m.t["D/157Y"]),
            },
        ],
        I = [
            {
                value: i.TO.BLUR,
                label: m.intl.string(m.t.S49Uad),
            },
        ],
        T = {
            value: i.TO.SHOW,
            label: m.intl.string(m.t["5k5OFp"]),
        };
    t && (S.unshift(T), I.unshift(T));
    let C = {
        isDisabled: E,
        tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : void 0,
    };
    return (0, r.jsxs)(p.E, {
        setting: h.H.GORE_MEDIA_REDACTION,
        description: m.intl.string(m.t.XgH9eh),
        children: [
            (0, r.jsx)(
                _.A,
                b(
                    {
                        title: m.intl.string(m.t["+uI23H"]),
                        value: O,
                        onChange: (e) =>
                            v({
                                goreContentFriendDm: e,
                            }),
                        options: S,
                    },
                    C,
                ),
            ),
            (0, r.jsx)(
                _.A,
                b(
                    {
                        title: m.intl.string(m.t["Yh+HX1"]),
                        value: A,
                        onChange: (e) =>
                            v({
                                goreContentNonFriendDm: e,
                            }),
                        options: S,
                    },
                    C,
                ),
            ),
            (0, r.jsx)(_.A, {
                title: m.intl.string(m.t["FP+a42"]),
                value: y,
                onChange: (e) =>
                    v({
                        goreContentGuilds: e,
                    }),
                isDisabled: !t || E,
                options: I,
                tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
