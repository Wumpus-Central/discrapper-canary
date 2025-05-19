n.d(t, { Z: () => o });
var r = n(524437),
    a = n(247206),
    i = n(82554),
    l = n(388032);
let o = {
    getTitle: () => l.intl.string(l.t['5Qu1IS']),
    getDisabledTitle: () => l.intl.string(l.t.YdZZtL),
    getDescription: () => l.intl.string(l.t.Vzp5BA),
    eligibleReportSubtypes: [i.i5.SUB_CSAM, i.i5.SUB_LOLI, i.i5.SUB_NCP, i.i5.SUB_SEXUALLY_DEGRADING_CONTENT, i.i5.SUB_UNSOLICITED_PORN],
    onApply: () =>
        (0, a.zj)(
            (function () {
                let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, a.l4)(),
                    i = {};
                return e === r.Q4.SHOW && (i.explicitContentGuilds = r.Q4.BLUR), t === r.Q4.SHOW && (i.explicitContentFriendDm = r.Q4.BLUR), n === r.Q4.SHOW && (i.explicitContentNonFriendDm = r.Q4.BLUR), i;
            })()
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, a.l4)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    }
};
