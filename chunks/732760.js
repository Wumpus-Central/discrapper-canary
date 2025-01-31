n.d(t, {
    d: () => a,
    y: () => r
});
var i = n(981631),
    s = n(490897),
    l = n(388032);
let a = (e) => [
        {
            label: l.intl.string(l.t['HVah//']),
            value: i.bL.ALL_MESSAGES
        },
        {
            label: l.intl.string(l.t['tu+ZWF']),
            value: i.bL.ONLY_MENTIONS
        },
        {
            label: l.intl.string(l.t.X4wWUl),
            value: i.bL.NO_MESSAGES
        }
    ],
    r = (e) => [
        {
            label: l.intl.string(l.t['HVah//']),
            value: s.i.ALL_MESSAGES
        },
        {
            value: s.i.ONLY_MENTIONS,
            label: l.intl.string(l.t['tu+ZWF']),
            disabled: (null == e ? void 0 : e.notificationSetting) === i.bL.ALL_MESSAGES
        }
    ];
