n.d(t, { v: () => c }), n(35282);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(594174),
    o = n(974674),
    s = n(231338),
    l = n(268685);
let c = {
    title: "Avatar",
    stories: [
        {
            id: "avatar",
            name: "Avatar",
            component: function (e) {
                let { size: t = l.EF.SIZE_48, status: n } = e,
                    { user: s } = (0, i.cj)([a.default], () => ({ user: a.default.getCurrentUser() })),
                    c = Number(t.split("_")[1]);
                return (0, r.jsx)(o.qE, {
                    src: null == s ? void 0 : s.getAvatarURL(void 0, c),
                    size: t,
                    "aria-label": "Sample User",
                    status: n,
                });
            },
            controls: {
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: l.EF.SIZE_48,
                    options: Object.keys(l.EF).map((e) => ({
                        label: e,
                        value: l.EF[e],
                    })),
                },
                status: {
                    type: "select",
                    label: "Status",
                    defaultValue: null,
                    options: [
                        {
                            label: "None",
                            value: null,
                        },
                    ].concat(
                        Object.keys(s.Sk).map((e) => ({
                            label: e,
                            value: s.Sk[e],
                        })),
                    ),
                },
            },
        },
    ],
};
