n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018);
let s = (e, t) => {
        let n = {
            display: "flex",
            gap: "4px",
            margin: "8px 0 4px 0",
            alignItems: "center",
        };
        return (0, r.jsxs)(
            i.Text,
            {
                color: "text-feedback-critical",
                style: n,
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)(i.EpV, {
                        size: "custom",
                        color: "currentColor",
                        width: 14,
                        height: 14,
                    }),
                    e,
                ],
            },
            t,
        );
    },
    o = {
        getForumChannelPermissionText: function () {
            return a.intl.format(a.t.zlXUVY, {
                warningHook: s,
            });
        },
    };
