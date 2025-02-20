n.d(t, {
    d: () => r,
    y: () => a
});
var i = n(981631),
    s = n(490897),
    l = n(388032);
let r = (e) => [
        {
            label: l.NW.string(l.t['HVah//']),
            value: i.bL.ALL_MESSAGES
        },
        {
            label: l.NW.string(l.t['tu+ZWF']),
            value: i.bL.ONLY_MENTIONS
        },
        {
            label: l.NW.string(l.t.X4wWUl),
            value: i.bL.NO_MESSAGES
        }
    ],
    a = (e) => [
        {
            label: l.NW.string(l.t['HVah//']),
            value: s.i.ALL_MESSAGES
        },
        {
            value: s.i.ONLY_MENTIONS,
            label: l.NW.string(l.t['tu+ZWF']),
            disabled: (null == e ? void 0 : e.notificationSetting) === i.bL.ALL_MESSAGES
        }
    ];
