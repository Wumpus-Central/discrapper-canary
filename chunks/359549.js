n.d(t, {
    A: () => y,
    J: () => b,
}),
    n(896048),
    n(938796);
var r = n(64700),
    i = n(665260),
    a = n(554146),
    s = n(522305),
    o = n(735991),
    l = n(627363),
    c = n(826673),
    u = n(438652),
    d = n(954571),
    f = n(450995),
    p = n(652215),
    _ = n(49999);
let h = new Set();

function m(e) {
    return (0, i.Lt)(e.flags, p.gfo.CLOUD_GAMING_DEMO) && (0, i.Lt)(e.flags, p.gfo.EMBEDDED);
}

function g(e) {
    let { countryCode: t, activity: n } = e;
    return (
        null == t ||
        (!n.blocked_locales.includes(t) && (!(n.supported_locales.length > 0) || !!n.supported_locales.includes(t)))
    );
}

function E(e) {
    let t = null != e ? (0, f.A)(e) : null,
        n = null == t ? void 0 : t.id,
        { data: i, refetch: a } = (0, l.YY)(n);
    return (
        r.useEffect(() => {
            null == n || null == i || null != i.bot || h.has(n) || (a(), h.add(n));
        }, [n, i, a]),
        i
    );
}

function b(e) {
    let { data: t } = (0, u.Q)(),
        n = E(e),
        { bot: r } =
            null != n
                ? n
                : {
                      bot: null,
                  };
    return (
        null != e &&
        ((null == e ? void 0 : e.embeddedActivityConfig) == null ||
            !!g({
                countryCode: null == t ? void 0 : t.alpha2,
                activity: e.embeddedActivityConfig,
            })) &&
        (!!m(e) ||
            (null != r &&
                null != n &&
                !!(0, o.Ag)(n) &&
                ((null == n ? void 0 : n.embeddedActivityConfig) == null ||
                    !!g({
                        countryCode: null == t ? void 0 : t.alpha2,
                        activity: n.embeddedActivityConfig,
                    }))))
    );
}

function y(e) {
    let { application: t, analyticsLocations: n } = e,
        i = b(t),
        { bot: o } =
            null != t
                ? t
                : {
                      bot: null,
                  },
        l = E(t),
        { bot: u } =
            null != l
                ? l
                : {
                      bot: null,
                  },
        f = null == l ? void 0 : l.id,
        h = null == u ? void 0 : u.id;
    return r.useMemo(() => {
        if (!i || null == t) return null;
        let e = () => {
            (0, c.Dr)(a.M.CLOUD_PLAY_NEW_BADGE, {
                dismissAction: _.i.TAKE_ACTION,
            }),
                (0, c.Dr)(a.M.CLOUD_PLAY_POPOVER, {
                    dismissAction: _.i.TAKE_ACTION,
                });
        };
        return m(t) && null != o
            ? () => {
                  e(),
                      d.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
                          source_application_id: t.id,
                          launching_application_id: t.id,
                          location_stack: n,
                      }),
                      (0, s.Q)({
                          appId: t.id,
                          botId: o.id,
                          analyticsLocations: null != n ? n : [],
                      });
              }
            : null != f && null != h
              ? () => {
                    e(),
                        d.default.track(p.HAw.CLOUD_PLAY_CTA_CLICKED, {
                            source_application_id: t.id,
                            launching_application_id: f,
                            location_stack: n,
                        }),
                        (0, s.Q)({
                            appId: f,
                            botId: h,
                            analyticsLocations: null != n ? n : [],
                        });
                }
              : void 0;
    }, [i, t, o, f, h, n]);
}
