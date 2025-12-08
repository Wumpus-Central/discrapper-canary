n.d(t, { Z: () => s });
var r = n(524437),
    l = n(925513),
    i = n(82554),
    a = n(388032);
let s = {
    getTitle: () => a.intl.string(a.t.RVX1zT),
    getDisabledTitle: () => a.intl.string(a.t.SYkEBi),
    getDescription: () => a.intl.string(a.t.aqlmp8),
    eligibleReportSubtypes: [i.i5.SUB_GORE, i.i5.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, l.Jr)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, l.O6)(),
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
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, l.O6)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    },
};
