n.d(t, { Z: () => s });
var r = n(524437),
    i = n(656577),
    l = n(82554),
    a = n(388032);
let s = {
    getTitle: () => a.intl.string(a.t["Gtck/v"]),
    getDisabledTitle: () => a.intl.string(a.t.E6UmXV),
    getDescription: () => a.intl.string(a.t.jcRSp6),
    eligibleReportSubtypes: [
        l.i5.SUB_CSAM,
        l.i5.SUB_LOLI,
        l.i5.SUB_NCP,
        l.i5.SUB_SEXUALLY_DEGRADING_CONTENT,
        l.i5.SUB_UNSOLICITED_PORN,
    ],
    onApply: () =>
        (0, i.zj)(
            (function () {
                let {
                        explicitContentGuilds: e,
                        explicitContentFriendDm: t,
                        explicitContentNonFriendDm: n,
                    } = (0, i.l4)(),
                    l = {};
                return (
                    e === r.Q4.SHOW && (l.explicitContentGuilds = r.Q4.BLUR),
                    t === r.Q4.SHOW && (l.explicitContentFriendDm = r.Q4.BLUR),
                    n === r.Q4.SHOW && (l.explicitContentNonFriendDm = r.Q4.BLUR),
                    l
                );
            })(),
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, i.l4)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    },
};
