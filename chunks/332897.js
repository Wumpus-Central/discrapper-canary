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
                let { size: t = l._3.SIZE_48, status: n, isVR: o = !1, isMobile: u = !1 } = e,
                    { user: c } = (0, i.cf)([a.default], () => ({ user: a.default.getCurrentUser() })),
                    d = Number(t.split("_")[1]);
                return (0, r.jsx)(s.eu, {
                    src: c?.getAvatarURL(void 0, d),
                    size: t,
                    "aria-label": "Sample User",
                    status: n,
                    isVR: o,
                    isMobile: u,
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
                isVR: { type: "boolean", label: "VR", defaultValue: !1 },
                isMobile: { type: "boolean", label: "Mobile", defaultValue: !1 },
            },
        },
    ],
};
