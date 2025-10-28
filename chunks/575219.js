t.d(l, { v: () => u }), t(35282);
var a = t(951288);
t(647438);
var n = t(442837),
    o = t(594174),
    i = t(974674),
    r = t(231338),
    s = t(268685);
let u = {
    title: "Avatar",
    stories: [
        {
            id: "avatar",
            name: "Avatar",
            component: function (e) {
                let { size: l = s.EF.SIZE_48, status: t } = e,
                    { user: r } = (0, n.cj)([o.default], () => ({ user: o.default.getCurrentUser() })),
                    u = Number(l.split("_")[1]);
                return (0, a.jsx)(i.qE, {
                    src: null == r ? void 0 : r.getAvatarURL(void 0, u),
                    size: l,
                    "aria-label": "Sample User",
                    status: t,
                });
            },
            controls: {
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: s.EF.SIZE_48,
                    options: Object.keys(s.EF).map((e) => ({
                        label: e,
                        value: s.EF[e],
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
                        Object.keys(r.Sk).map((e) => ({
                            label: e,
                            value: r.Sk[e],
                        })),
                    ),
                },
            },
        },
    ],
};
