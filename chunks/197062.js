i.d(e, { Z: () => s });
var n = i(255367);
i(73800);
var r = i(481060),
    E = i(388032);
let l = (t, e) =>
        (0, n.jsxs)(
            r.Text,
            {
                color: "text-danger",
                style: {
                    display: "flex",
                    gap: "4px",
                    margin: "8px 0 4px 0",
                    alignItems: "center",
                },
                variant: "text-sm/normal",
                children: [
                    (0, n.jsx)(r.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        width: 14,
                        height: 14,
                    }),
                    t,
                ],
            },
            e,
        ),
    s = {
        getForumChannelPermissionText: function () {
            return E.intl.format(E.t.zlXUVV, { warningHook: l });
        },
    };
