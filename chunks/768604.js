n.d(t, { I: () => b }), n(290780);
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(168107),
    o = n(480916),
    s = n(247206),
    l = n(925513),
    c = n(294602),
    u = n(915009),
    d = n(880257),
    f = n(400313),
    _ = n(947707),
    p = n(726985),
    h = n(388032),
    m = n(404517);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b() {
    var e;
    let t = null == (e = (0, d.Z)()) || e,
        n = (0, u.LN)(),
        { goreContentGuilds: g, goreContentFriendDm: b, goreContentNonFriendDm: y } = (0, c.K)(),
        O = (e) => {
            let t = Object.values(e);
            if ((0, s.Ks)() && t.includes(i.Q4.SHOW))
                return void a.Z.showAgeVerificationGetStartedModal({
                    entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, l.Jr)(e);
        },
        v = [
            {
                value: i.Q4.BLUR,
                label: h.intl.string(h.t.S49Uad),
            },
            {
                value: i.Q4.BLOCK,
                label: h.intl.string(h.t["D/157Y"]),
            },
        ],
        I = [
            {
                value: i.Q4.BLUR,
                label: h.intl.string(h.t.S49Uad),
            },
        ],
        T = {
            value: i.Q4.SHOW,
            label: h.intl.string(h.t["5k5OFp"]),
        };
    t && (v.unshift(T), I.unshift(T));
    let S = {
        isDisabled: n,
        tooltipText: n ? h.intl.string(m.default["6Af/cw"]) : void 0,
    };
    return (0, r.jsxs)(f.n, {
        setting: p.s6.GORE_MEDIA_REDACTION,
        description: h.intl.string(h.t.XgH9eh),
        children: [
            (0, r.jsx)(
                _.Z,
                E(
                    {
                        title: h.intl.string(h.t["+uI23H"]),
                        value: b,
                        onChange: (e) => O({ goreContentFriendDm: e }),
                        options: v,
                    },
                    S,
                ),
            ),
            (0, r.jsx)(
                _.Z,
                E(
                    {
                        title: h.intl.string(h.t["Yh+HX1"]),
                        value: y,
                        onChange: (e) => O({ goreContentNonFriendDm: e }),
                        options: v,
                    },
                    S,
                ),
            ),
            (0, r.jsx)(_.Z, {
                title: h.intl.string(h.t["FP+a42"]),
                value: g,
                onChange: (e) => O({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: I,
                tooltipText: n ? h.intl.string(m.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
