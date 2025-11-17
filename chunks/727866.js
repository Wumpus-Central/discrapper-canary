n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(388032);
let o = (e, t) => {
        let n = {
            display: "flex",
            gap: "4px",
            margin: "8px 0 4px 0",
            alignItems: "center",
        };
        return (0, r.jsxs)(
            i.Text,
            {
                color: "text-danger",
                style: n,
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)(i.Mgn, {
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
    s = {
        getTextInVoiceSendMessageChannelPermissionText: function (e) {
            return e ? a.intl.format(a.t.Q1rwpr, { warningHook: o }) : a.intl.string(a.t.WQ6zpT);
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function (e) {
            return e ? a.intl.format(a.t.Rx4pbJ, { warningHook: o }) : a.intl.string(a.t.cuMfH0);
        },
    };
