"use strict";
n.d(t, { p: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(287809),
    s = n(97808),
    o = n(818348),
    l = n(778712);
let u = {
    title: "Avatar",
    stories: [
        {
            id: "avatar",
            name: "Avatar",
            component: function (e) {
                let { size: t = l._3.SIZE_48, status: n } = e,
                    { user: o } = (0, i.cf)([a.default], () => ({ user: a.default.getCurrentUser() })),
                    u = Number(t.split("_")[1]);
                return (0, r.jsx)(s.eu, {
                    src: o?.getAvatarURL(void 0, u),
                    size: t,
                    "aria-label": "Sample User",
                    status: n,
                });
            },
            controls: {
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: l._3.SIZE_48,
                    options: Object.keys(l._3).map((e) => ({ label: e, value: l._3[e] })),
                },
                status: {
                    type: "select",
                    label: "Status",
                    defaultValue: null,
                    options: [{ label: "None", value: null }].concat(
                        Object.keys(o.cl).map((e) => ({ label: e, value: o.cl[e] })),
                    ),
                },
            },
        },
    ],
};
