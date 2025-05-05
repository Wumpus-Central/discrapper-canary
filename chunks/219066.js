n.d(t, { Z: () => p }), n(388685);
var i = n(73800),
    r = n(392711),
    l = n.n(r),
    o = n(911969),
    a = n(254711),
    s = n(213459),
    c = n(10718),
    u = n(148958),
    d = n(689079);
function p(e) {
    var t;
    let { context: n } = e,
        r = 'channel' === n.type ? n.channel : void 0,
        p = (0, s.LD)(null == r ? void 0 : r.guild_id, !0),
        { commandsByActiveSection: m, loading: f } = c.wi({
            context: n,
            filters: {
                commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: d.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        h = i.useMemo(
            () =>
                m.reduce((e, t) => {
                    let { section: n, data: i } = t;
                    return i.length > 0 && e.add(n.id), e;
                }, new Set()),
            [m]
        ),
        b = i.useMemo(() => {
            var e, t;
            return Object.values(null != (t = null == (e = p.result) ? void 0 : e.sections) ? t : {})
                .map((e) => {
                    let { descriptor: t } = e;
                    return t;
                })
                .filter((e) => !(e.id in a.Tm) && h.has(e.id));
        }, [null == (t = p.result) ? void 0 : t.sections, h]),
        _ = (0, u.h)(b);
    return {
        appsInThisServer: i.useMemo(
            () =>
                l()
                    .compact(
                        _.map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    )
                    .map((e) => ({ application: e })),
            [_]
        ),
        isLoading: p.fetchState.fetching || f
    };
}
