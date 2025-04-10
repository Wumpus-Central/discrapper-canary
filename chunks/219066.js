n.d(t, { Z: () => p }), n(388685);
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(911969),
    o = n(254711),
    s = n(213459),
    c = n(10718),
    d = n(148958),
    u = n(689079);
function p(e) {
    var t;
    let { context: n } = e,
        r = 'channel' === n.type ? n.channel : void 0,
        p = (0, s.LD)(null == r ? void 0 : r.guild_id, !0),
        { commandsByActiveSection: m, loading: f } = c.wi({
            context: n,
            filters: {
                commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
            },
            options: {
                placeholderCount: 0,
                limit: u.tn,
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
                .filter((e) => !(e.id in o.Tm) && h.has(e.id));
        }, [null == (t = p.result) ? void 0 : t.sections, h]),
        x = (0, d.h)(b);
    return {
        appsInThisServer: i.useMemo(
            () =>
                l()
                    .compact(
                        x.map((e) => {
                            let { application: t } = e;
                            return t;
                        })
                    )
                    .map((e) => ({ application: e })),
            [x]
        ),
        isLoading: p.fetchState.fetching || f
    };
}
