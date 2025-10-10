n.d(t, { I: () => y }), n(290780);
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(481060),
    o = n(168107),
    s = n(480916),
    l = n(247206),
    c = n(925513),
    u = n(294602),
    d = n(915009),
    f = n(880257),
    _ = n(838436),
    p = n(947707),
    h = n(726985),
    m = n(388032),
    g = n(345909);
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
        { goreContentGuilds: E, goreContentFriendDm: y, goreContentNonFriendDm: O } = (0, u.K)(),
        v = (e) => {
            let t = Object.values(e);
            if ((0, l.Ks)() && t.includes(i.Q4.SHOW))
                return void o.Z.showAgeVerificationGetStartedModal({
                    entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, c.Jr)(e);
        },
        I = [
            {
                value: i.Q4.BLUR,
                label: m.intl.string(m.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: m.intl.string(m.t["D/157e"]),
            },
        ],
        T = [
            {
                value: i.Q4.BLUR,
                label: m.intl.string(m.t.S49UaW),
            },
        ],
        S = {
            value: i.Q4.SHOW,
            label: m.intl.string(m.t["5k5OFh"]),
        };
    t && (I.unshift(S), T.unshift(S));
    let A = {
        isDisabled: n,
        tooltipText: n ? m.intl.string(g.default["6Af/c3"]) : void 0,
    };
    return (0, r.jsxs)(_.U, {
        setting: h.s6.GORE_MEDIA_REDACTION,
        children: [
            (0, r.jsx)(
                p.Z,
                b(
                    {
                        title: m.intl.string(m.t["+uI23N"]),
                        value: y,
                        onChange: (e) => v({ goreContentFriendDm: e }),
                        options: I,
                    },
                    A,
                ),
            ),
            (0, r.jsx)(
                p.Z,
                b(
                    {
                        title: m.intl.string(m.t["Yh+HX1"]),
                        value: O,
                        onChange: (e) => v({ goreContentNonFriendDm: e }),
                        options: I,
                    },
                    A,
                ),
            ),
            (0, r.jsx)(p.Z, {
                title: m.intl.string(m.t["FP+a4+"]),
                value: E,
                onChange: (e) => v({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: T,
                tooltipText: n ? m.intl.string(g.default["6Af/c3"]) : void 0,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: m.intl.string(m.t.XgH9en),
            }),
        ],
    });
}
