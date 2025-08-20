n.d(t, { I: () => g }), n(290780), n(388685);
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(481060),
    o = n(168107),
    s = n(480916),
    l = n(247206),
    c = n(925513),
    u = n(294602),
    d = n(249996),
    f = n(880257),
    _ = n(838436),
    p = n(726985),
    h = n(388032),
    m = n(789318);
function g() {
    var e;
    let t = null == (e = (0, f.Z)()) || e,
        { goreContentGuilds: n, goreContentFriendDm: g, goreContentNonFriendDm: E } = (0, u.K)(),
        b = (e) => {
            let t = Object.values(e);
            if ((0, l.Ks)() && t.includes(i.Q4.SHOW))
                return void o.Z.showAgeVerificationGetStartedModal(s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, c.Jr)(e);
        },
        y = [
            {
                value: i.Q4.BLUR,
                label: h.intl.string(h.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: h.intl.string(h.t["D/157e"]),
            },
        ],
        O = [
            {
                value: i.Q4.BLUR,
                label: h.intl.string(h.t.S49UaW),
            },
        ],
        v = {
            value: i.Q4.SHOW,
            label: h.intl.string(h.t["5k5OFh"]),
        };
    return (
        t && (y.unshift(v), O.unshift(v)),
        (0, r.jsxs)(_.U, {
            setting: p.s6.GORE_MEDIA_REDACTION,
            children: [
                (0, r.jsxs)("div", {
                    className: m.selectItemRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: h.intl.string(h.t["+uI23N"]),
                        }),
                        (0, r.jsx)(a.q4e, {
                            look: a.qQH.CUSTOM,
                            options: y,
                            value: g,
                            onChange: (e) => b({ goreContentFriendDm: e }),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, r.jsx)(d.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, r.jsx)(d.Z, { option: e }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: m.selectItemRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: h.intl.string(h.t["Yh+HX1"]),
                        }),
                        (0, r.jsx)(a.q4e, {
                            look: a.qQH.CUSTOM,
                            options: y,
                            value: E,
                            onChange: (e) => b({ goreContentNonFriendDm: e }),
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, r.jsx)(d.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, r.jsx)(d.Z, { option: e }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: m.selectItemRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: h.intl.string(h.t["FP+a4+"]),
                        }),
                        (0, r.jsx)(a.q4e, {
                            look: a.qQH.CUSTOM,
                            options: O,
                            value: n,
                            onChange: (e) => b({ goreContentGuilds: e }),
                            isDisabled: !t,
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return (0, r.jsx)(d.Z, { option: t });
                            },
                            renderOptionLabel: (e) => (0, r.jsx)(d.Z, { option: e }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: h.intl.string(h.t.XgH9en),
                }),
            ],
        })
    );
}
