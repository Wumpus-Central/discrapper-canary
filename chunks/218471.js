n.d(t, { Z: () => l });
var r = n(524437),
    a = n(925513),
    i = n(82554),
    o = n(388032);
let l = {
    getTitle: () => o.intl.string(o.t.RVX1zc),
    getDisabledTitle: () => o.intl.string(o.t.SYkEBg),
    getDescription: () => o.intl.string(o.t.aqlmp6),
    eligibleReportSubtypes: [i.i5.SUB_GORE, i.i5.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, a.Jr)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, a.O6)(),
                    i = {};
                return (e === r.Q4.SHOW && (i.goreContentGuilds = r.Q4.BLUR), t === r.Q4.SHOW && (i.goreContentFriendDm = r.Q4.BLUR), n === r.Q4.SHOW && (i.goreContentNonFriendDm = r.Q4.BLUR), i);
            })()
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, a.O6)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    }
};
