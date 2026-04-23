a.d(l, { p: () => d });
var t = a(627968);
a(64700);
var o = a(311907),
    n = a(287809),
    i = a(97808),
    r = a(818348),
    s = a(778712);
let d = {
    title: "Avatar",
    stories: [
        {
            id: "avatar",
            name: "Avatar",
            component: function (e) {
                let { size: l = s._3.SIZE_48, status: a, isVR: r = !1, isMobile: d = !1 } = e,
                    { user: u } = (0, o.cf)([n.default], () => ({ user: n.default.getCurrentUser() })),
                    c = Number(l.split("_")[1]);
                return (0, t.jsx)(i.eu, {
                    src: u?.getAvatarURL(void 0, c),
                    size: l,
                    "aria-label": "Sample User",
                    status: a,
                    isVR: r,
                    isMobile: d,
                });
            },
            controls: {
                size: {
                    type: "select",
                    label: "Size",
                    defaultValue: s._3.SIZE_48,
                    options: Object.keys(s._3).map((e) => ({ label: e, value: s._3[e] })),
                },
                status: {
                    type: "select",
                    label: "Status",
                    defaultValue: null,
                    options: [{ label: "None", value: null }].concat(
                        Object.keys(r.cl).map((e) => ({ label: e, value: r.cl[e] })),
                    ),
                },
                isVR: { type: "boolean", label: "VR", defaultValue: !1 },
                isMobile: { type: "boolean", label: "Mobile", defaultValue: !1 },
            },
        },
    ],
};
