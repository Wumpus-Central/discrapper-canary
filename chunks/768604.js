n.d(t, { I: () => y }), n(290780);
var r = n(54381);
n(473749);
var i = n(524437),
    a = n(168107),
    o = n(480916),
    s = n(247206),
    l = n(925513),
    c = n(294602),
    u = n(666515),
    d = n(915009),
    f = n(880257),
    p = n(400313),
    _ = n(947707),
    m = n(726985),
    h = n(388032),
    g = n(744038);
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
    let t = null == (e = (0, f.Z)()) || e,
        n = (0, d.LN)(),
        E = (0, u.r)(),
        { goreContentGuilds: y, goreContentFriendDm: O, goreContentNonFriendDm: v } = (0, c.K)(),
        S = (e) => {
            let t = Object.values(e);
            if ((0, s.Ks)() && t.includes(i.Q4.SHOW))
                return void a.Z.showAgeVerificationGetStartedModal({
                    entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, l.Jr)(e);
        },
        I = [
            {
                value: i.Q4.BLUR,
                label: h.intl.string(h.t.S49Uad),
            },
            {
                value: i.Q4.BLOCK,
                label: h.intl.string(h.t["D/157Y"]),
            },
        ],
        T = [
            {
                value: i.Q4.BLUR,
                label: h.intl.string(h.t.S49Uad),
            },
        ],
        A = {
            value: i.Q4.SHOW,
            label: h.intl.string(h.t["5k5OFp"]),
        };
    t && (I.unshift(A), T.unshift(A));
    let C = {
        isDisabled: E,
        tooltipText: n ? h.intl.string(g.default["6Af/cw"]) : void 0,
    };
    return (0, r.jsxs)(p.n, {
        setting: m.s6.GORE_MEDIA_REDACTION,
        description: h.intl.string(h.t.XgH9eh),
        children: [
            (0, r.jsx)(
                _.Z,
                b(
                    {
                        title: h.intl.string(h.t["+uI23H"]),
                        value: O,
                        onChange: (e) => S({ goreContentFriendDm: e }),
                        options: I,
                    },
                    C,
                ),
            ),
            (0, r.jsx)(
                _.Z,
                b(
                    {
                        title: h.intl.string(h.t["Yh+HX1"]),
                        value: v,
                        onChange: (e) => S({ goreContentNonFriendDm: e }),
                        options: I,
                    },
                    C,
                ),
            ),
            (0, r.jsx)(_.Z, {
                title: h.intl.string(h.t["FP+a42"]),
                value: y,
                onChange: (e) => S({ goreContentGuilds: e }),
                isDisabled: !t || E,
                options: T,
                tooltipText: n ? h.intl.string(g.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
