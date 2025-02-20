n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(388032);
let a = (e, t) => {
        let n = {
            display: 'flex',
            gap: '4px',
            margin: '8px 0 4px 0',
            alignItems: 'center'
        };
        return (0, r.jsxs)(
            i.Text,
            {
                color: 'text-danger',
                style: n,
                variant: 'text-sm/normal',
                children: [
                    (0, r.jsx)(i.P4T, {
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
    s = {
        getTextInVoiceSendMessageChannelPermissionText: function (e) {
            return e ? o.NW.format(o.t.Q1rwpq, { warningHook: a }) : o.NW.string(o.t.WQ6zpa);
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function (e) {
            return e ? o.NW.format(o.t.Rx4pbG, { warningHook: a }) : o.NW.string(o.t.cuMfHx);
        }
    };
