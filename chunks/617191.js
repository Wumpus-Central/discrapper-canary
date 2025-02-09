n.d(t, { Z: () => s });
var l = n(524437),
    i = n(247206),
    r = n(82554),
    a = n(388032);
let s = {
    getTitle: () => a.intl.string(a.t['5Qu1IS']),
    getDisabledTitle: () => a.intl.string(a.t.YdZZtL),
    getDescription: () => a.intl.string(a.t.Vzp5BA),
    eligibleReportSubtypes: [r.i5.SUB_CSAM, r.i5.SUB_LOLI, r.i5.SUB_NCP, r.i5.SUB_SEXUALLY_DEGRADING_CONTENT, r.i5.SUB_UNSOLICITED_PORN],
    onApply: () =>
        (0, i.zj)(
            (function () {
                let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, i.l4)(),
                    r = {};
                return e === l.Q4.SHOW && (r.explicitContentGuilds = l.Q4.BLUR), t === l.Q4.SHOW && (r.explicitContentFriendDm = l.Q4.BLUR), n === l.Q4.SHOW && (r.explicitContentNonFriendDm = l.Q4.BLUR), r;
            })()
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, i.l4)();
        return e === l.Q4.SHOW || t === l.Q4.SHOW || n === l.Q4.SHOW;
    }
};
