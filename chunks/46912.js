n.d(t, { Z: () => s });
var r = n(524437),
    l = n(656577),
    i = n(82554),
    a = n(388032);
let s = {
    getTitle: () => a.intl.string(a.t["Gtck/t"]),
    getDisabledTitle: () => a.intl.string(a.t.E6UmXa),
    getDescription: () => a.intl.string(a.t.jcRSp6),
    eligibleReportSubtypes: [
        i.i5.SUB_CSAM,
        i.i5.SUB_LOLI,
        i.i5.SUB_NCP,
        i.i5.SUB_SEXUALLY_DEGRADING_CONTENT,
        i.i5.SUB_UNSOLICITED_PORN,
    ],
    onApply: () =>
        (0, l.zj)(
            (function () {
                let {
                        explicitContentGuilds: e,
                        explicitContentFriendDm: t,
                        explicitContentNonFriendDm: n,
                    } = (0, l.l4)(),
                    i = {};
                return (
                    e === r.Q4.SHOW && (i.explicitContentGuilds = r.Q4.BLUR),
                    t === r.Q4.SHOW && (i.explicitContentFriendDm = r.Q4.BLUR),
                    n === r.Q4.SHOW && (i.explicitContentNonFriendDm = r.Q4.BLUR),
                    i
                );
            })(),
        ),
    predicate: () => {
        let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, l.l4)();
        return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
    },
};
