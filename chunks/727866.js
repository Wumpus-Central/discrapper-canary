n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(388032);
let s = (e, t) => {
        let n = {
            display: 'flex',
            gap: '4px',
            margin: '8px 0 4px 0',
            alignItems: 'center'
        };
        return (0, i.jsxs)(
            r.Text,
            {
                color: 'text-danger',
                style: n,
                variant: 'text-sm/normal',
                children: [
                    (0, i.jsx)(r.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 14,
                        height: 14
                    }),
                    e
                ]
            },
            t
        );
    },
    o = {
        getTextInVoiceSendMessageChannelPermissionText: function (e) {
            return e ? a.intl.format(a.t.Q1rwpq, { warningHook: s }) : a.intl.string(a.t.WQ6zpa);
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function (e) {
            return e ? a.intl.format(a.t.Rx4pbG, { warningHook: s }) : a.intl.string(a.t.cuMfHx);
        }
    };
