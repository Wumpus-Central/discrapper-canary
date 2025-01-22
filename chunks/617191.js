var i = r(524437),
    a = r(247206),
    o = r(82554),
    s = r(388032);
function l() {
    let { explicitContentGuilds: e, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = (0, a.l4)(),
        o = {};
    return e === i.Q4.SHOW && (o.explicitContentGuilds = i.Q4.BLUR), n === i.Q4.SHOW && (o.explicitContentFriendDm = i.Q4.BLUR), r === i.Q4.SHOW && (o.explicitContentNonFriendDm = i.Q4.BLUR), o;
}
let u = {
    getTitle: () => s.intl.string(s.t['5Qu1IS']),
    getDisabledTitle: () => s.intl.string(s.t.YdZZtL),
    getDescription: () => s.intl.string(s.t.Vzp5BA),
    eligibleReportSubtypes: [o.i5.SUB_CSAM, o.i5.SUB_LOLI, o.i5.SUB_NCP, o.i5.SUB_SEXUALLY_DEGRADING_CONTENT, o.i5.SUB_UNSOLICITED_PORN],
    onApply: () => (0, a.zj)(l()),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = (0, a.l4)();
        return e === i.Q4.SHOW || n === i.Q4.SHOW || r === i.Q4.SHOW;
    }
};
n.Z = u;
