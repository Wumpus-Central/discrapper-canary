n.d(t, { Z: () => l });
var i = n(524437),
    r = n(247206),
    a = n(82554),
    s = n(388032);
function o() {
    let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, r.l4)(),
        a = {};
    return e === i.Q4.SHOW && (a.explicitContentGuilds = i.Q4.BLUR), t === i.Q4.SHOW && (a.explicitContentFriendDm = i.Q4.BLUR), n === i.Q4.SHOW && (a.explicitContentNonFriendDm = i.Q4.BLUR), a;
}
let l = {
    getTitle: () => s.intl.string(s.t['5Qu1IS']),
    getDisabledTitle: () => s.intl.string(s.t.YdZZtL),
    getDescription: () => s.intl.string(s.t.Vzp5BA),
    eligibleReportSubtypes: [a.i5.SUB_CSAM, a.i5.SUB_LOLI, a.i5.SUB_NCP, a.i5.SUB_SEXUALLY_DEGRADING_CONTENT, a.i5.SUB_UNSOLICITED_PORN],
    onApply: () => (0, r.zj)(o()),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, r.l4)();
        return e === i.Q4.SHOW || t === i.Q4.SHOW || n === i.Q4.SHOW;
    }
};
