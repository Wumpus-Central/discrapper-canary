i.d(e, { Z: () => s });
var r = i(255367);
i(73800);
var n = i(481060),
    E = i(388032);
let l = (t, e) =>
        (0, r.jsxs)(
            n.Text,
            {
                color: 'text-danger',
                style: {
                    display: 'flex',
                    gap: '4px',
                    margin: '8px 0 4px 0',
                    alignItems: 'center'
                },
                variant: 'text-sm/normal',
                children: [
                    (0, r.jsx)(n.Mgn, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 14,
                        height: 14
                    }),
                    t
                ]
            },
            e
        ),
    s = {
        getForumChannelPermissionText: function () {
            return E.intl.format(E.t.zlXUVV, { warningHook: l });
        }
    };
