n.d(t, { Z: () => o });
var r = n(524437),
    a = n(925513),
    i = n(82554),
    l = n(388032);
let o = {
    getTitle: () => l.intl.string(l.t.RVX1zc),
    getDisabledTitle: () => l.intl.string(l.t.SYkEBg),
    getDescription: () => l.intl.string(l.t.aqlmp6),
    eligibleReportSubtypes: [i.i5.SUB_GORE, i.i5.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, a.Jr)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, a.O6)(),
                    i = {};
                return (
                    e === r.Q4.SHOW && (i.goreContentGuilds = r.Q4.BLUR),
                    t === r.Q4.SHOW && (i.goreContentFriendDm = r.Q4.BLUR),
                    n === r.Q4.SHOW && (i.goreContentNonFriendDm = r.Q4.BLUR),
                    i
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, a.O6)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    },
};
