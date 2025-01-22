var i = r(200651);
r(192379);
var a = r(481060),
    o = r(388032);
let s = (e, n) => {
    let r = {
        display: 'flex',
        gap: '4px',
        margin: '8px 0 4px 0',
        alignItems: 'center'
    };
    return (0, i.jsxs)(
        a.Text,
        {
            color: 'text-danger',
            style: r,
            variant: 'text-sm/normal',
            children: [
                (0, i.jsx)(a.CircleWarningIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14
                }),
                e
            ]
        },
        n
    );
};
function l(e) {
    return e ? o.intl.format(o.t.Q1rwpq, { warningHook: s }) : o.intl.string(o.t.WQ6zpa);
}
function u(e) {
    return e ? o.intl.format(o.t.Rx4pbG, { warningHook: s }) : o.intl.string(o.t.cuMfHx);
}
n.Z = {
    getTextInVoiceSendMessageChannelPermissionText: l,
    getTextInVoiceReadMessageHistoryChannelPermissionText: u
};
