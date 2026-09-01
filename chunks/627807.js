n.d(e, { A: () => m });
var i,
    l = n(477900),
    r = n(582128),
    a = n(890497),
    s = n(486020),
    u =
        (((i = {})[(i.REQUIRES_BOT = 1)] = "REQUIRES_BOT"),
        (i[(i.SURFACE_NOT_SUPPORTED = 2)] = "SURFACE_NOT_SUPPORTED"),
        i),
    o = n(375708);
n(321073);
var d = n(627363),
    p = n(17928),
    c = n(927813),
    A = n(403362),
    E = n(587895),
    g = n(652215);
let h = (0, p.UT)(E.A, {
    getQueryId: g.fic.GUILD_EMBEDDED_APPLICATIONS,
    failureStaleAfter: c.A.Seconds.MINUTE,
    get: (t, e) => {
        let n = E.A.getGuildEmbeddedApplications(e ?? void 0, t);
        return null == n
            ? null
            : n
                  .map((t) => {
                      let { applicationId: e, status: n } = t,
                          i = E.A.getApplication(e);
                      return null != i ? { application: i, status: n } : null;
                  })
                  .filter(A.Vq);
    },
    load: async (t, e, n) => {
        null != e && (await d.Ay.getEmbeddedApplicationsForGuild(e, t, n));
    },
});
var T = n(165610);
function f(t, e) {
    return t.status.supported !== e.status.supported
        ? t.status.supported
            ? -1
            : 1
        : t.application.name.localeCompare(e.application.name);
}
function m(t) {
    let { guildId: e, channelId: n, selectedApplicationId: i, onChange: p, disabled: c, helperText: A } = t,
        {
            options: E,
            isLoading: g,
            hasNoApplications: m,
        } = (function (t, e, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                { data: l, isLoading: a } = (function (t, e, n) {
                    let i = h(t, e, n),
                        { data: l, error: a, isLoading: s, refetch: u } = i,
                        o = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            null != l ? (o.current = !0) : o.current && !s && null == a && ((o.current = !1), u());
                        }, [l, s, a, u]),
                        i
                    );
                })(T.U4.APP_CHANNEL, i ? void 0 : t, e),
                { data: s, isLoading: u } = (0, d.YY)(n, !0);
            return {
                options: r.useMemo(() => {
                    let t = [...(l ?? [])];
                    return (
                        null == s ||
                            t.some((t) => {
                                let { application: e } = t;
                                return e.id === s.id;
                            }) ||
                            t.push({ application: s, status: { supported: !0 } }),
                        t.sort(f)
                    );
                }, [l, s]),
                selectedApplication: s,
                isLoading: a || u,
                hasNoApplications: null != l && 0 === l.length,
            };
        })(e, n, i, c),
        R = r.useMemo(
            () =>
                E.map((t) => {
                    let { application: e, status: n } = t,
                        i = s.Ay.getApplicationIconURL({ ...e, size: 24 });
                    return {
                        id: e.id,
                        label: e.name,
                        value: e.id,
                        description: (function (t) {
                            if (!t.supported)
                                switch (t.reason) {
                                    case u.REQUIRES_BOT:
                                        return o.intl.string(o.t.V4y5nG);
                                    case u.SURFACE_NOT_SUPPORTED:
                                        return o.intl.string(o.t["iUWcU/"]);
                                    default:
                                        return o.intl.string(o.t.GZa4J0);
                                }
                        })(n),
                        disabled: !n.supported,
                        leading: null != i ? { type: "image", src: i } : void 0,
                    };
                }),
            [E],
        );
    return (0, l.jsx)(a.Z, {
        selectionMode: "single",
        label: o.intl.string(o.t.oYTLIL),
        options: R,
        placeholder: m ? o.intl.string(o.t.MlQm3T) : o.intl.string(o.t.F2FMFR),
        value: i,
        onSelectionChange: p,
        matchSorterOptions: {
            keys: ["label"],
            sorter: (t) =>
                t.sort((t, e) => {
                    let n = !t.item.disabled;
                    return !e.item.disabled !== n ? (n ? -1 : 1) : e.rank - t.rank;
                }),
        },
        loading: g,
        disabled: c || m,
        helperText: A,
        fullWidth: !0,
    });
}
