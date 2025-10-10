n.d(t, { I: () => g }), n(290780);
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
    m = n(388032);
function g() {
    var e;
    let t = null == (e = (0, f.Z)()) || e,
        n = (0, d.LN)(),
        { goreContentGuilds: g, goreContentFriendDm: E, goreContentNonFriendDm: b } = (0, u.K)(),
        y = (e) => {
            let t = Object.values(e);
            if ((0, l.Ks)() && t.includes(i.Q4.SHOW))
                return void o.Z.showAgeVerificationGetStartedModal({
                    entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, c.Jr)(e);
        },
        O = [
            {
                value: i.Q4.BLUR,
                label: m.intl.string(m.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: m.intl.string(m.t["D/157e"]),
            },
        ],
        v = [
            {
                value: i.Q4.BLUR,
                label: m.intl.string(m.t.S49UaW),
            },
        ],
        I = {
            value: i.Q4.SHOW,
            label: m.intl.string(m.t["5k5OFh"]),
        };
    return (
        t && (O.unshift(I), v.unshift(I)),
        (0, r.jsxs)(_.U, {
            setting: h.s6.GORE_MEDIA_REDACTION,
            children: [
                (0, r.jsx)(p.Z, {
                    title: m.intl.string(m.t["+uI23N"]),
                    value: E,
                    onChange: (e) => y({ goreContentFriendDm: e }),
                    isDisabled: n,
                    options: O,
                }),
                (0, r.jsx)(p.Z, {
                    title: m.intl.string(m.t["Yh+HX1"]),
                    value: b,
                    onChange: (e) => y({ goreContentNonFriendDm: e }),
                    isDisabled: n,
                    options: O,
                }),
                (0, r.jsx)(p.Z, {
                    title: m.intl.string(m.t["FP+a4+"]),
                    value: g,
                    onChange: (e) => y({ goreContentGuilds: e }),
                    isDisabled: !t || n,
                    options: v,
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: m.intl.string(m.t.XgH9en),
                }),
            ],
        })
    );
}
