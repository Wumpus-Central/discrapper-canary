n.d(t, { Z: () => o });
var r = n(524437),
    l = n(247206),
    i = n(82554),
    a = n(388032);
let o = {
    getTitle: () => a.NW.string(a.t['5Qu1IS']),
    getDisabledTitle: () => a.NW.string(a.t.YdZZtL),
    getDescription: () => a.NW.string(a.t.Vzp5BA),
    eligibleReportSubtypes: [i.i5.SUB_CSAM, i.i5.SUB_LOLI, i.i5.SUB_NCP, i.i5.SUB_SEXUALLY_DEGRADING_CONTENT, i.i5.SUB_UNSOLICITED_PORN],
    onApply: () =>
        (0, l.zj)(
            (function () {
                let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, l.l4)(),
                    i = {};
                return e === r.Q4.SHOW && (i.explicitContentGuilds = r.Q4.BLUR), t === r.Q4.SHOW && (i.explicitContentFriendDm = r.Q4.BLUR), n === r.Q4.SHOW && (i.explicitContentNonFriendDm = r.Q4.BLUR), i;
            })()
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, l.l4)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    }
};
