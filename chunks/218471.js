n.d(t, { Z: () => o });
var r = n(524437),
    i = n(925513),
    l = n(82554),
    a = n(388032);
let o = {
    getTitle: () => a.intl.string(a.t.RVX1zc),
    getDisabledTitle: () => a.intl.string(a.t.SYkEBg),
    getDescription: () => a.intl.string(a.t.aqlmp6),
    eligibleReportSubtypes: [l.i5.SUB_GORE, l.i5.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, i.Jr)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, i.O6)(),
                    l = {};
                return (
                    e === r.Q4.SHOW && (l.goreContentGuilds = r.Q4.BLUR),
                    t === r.Q4.SHOW && (l.goreContentFriendDm = r.Q4.BLUR),
                    n === r.Q4.SHOW && (l.goreContentNonFriendDm = r.Q4.BLUR),
                    l
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, i.O6)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    },
};
