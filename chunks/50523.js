n.d(t, { b: () => _ }), n(653041), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(100527),
    o = n(906732),
    l = n(783097),
    s = n(606192),
    c = n(812236),
    d = n(230171),
    u = n(758199),
    p = n(914498),
    m = n(208444),
    f = n(81063),
    h = n(768581),
    g = n(388032);
function _(e) {
    var t, n;
    let { application: _, customId: b, customLink: v, embedUrl: y, referrerId: x } = e,
        O = null == _ ? void 0 : null === (t = _.bot) || void 0 === t ? void 0 : t.id,
        E = (0, c.ms)({
            context: { type: 'contextless' },
            applicationId: _.id,
            botUserId: null == _ ? void 0 : null === (n = _.bot) || void 0 === n ? void 0 : n.id
        }),
        j = null != _ && (0, l.ye)(_),
        N = null != O && j && E,
        { analyticsLocations: C } = (0, o.ZP)(a.Z.ACTIVITY_BOOKMARK),
        I = null != b ? b : v.custom_id,
        S = null != x ? x : v.referrer_id,
        T = N
            ? [
                  {
                      label: null != v.primary_cta ? v.primary_cta : g.NW.string(g.t.RscU7O),
                      onClick() {
                          (0, s.W)({
                              appId: _.id,
                              botId: O,
                              analyticsLocations: C,
                              customId: I,
                              referrerId: S
                          }),
                              (0, p.KX)(_.id, d.U.ACTIVITY, p.j_.PLAY, S, I);
                      }
                  }
              ]
            : void 0,
        P = i.useCallback(
            (e) => {
                (0, p.KX)(_.id, d.U.ACTIVITY, e, S, I);
            },
            [_.id, I, S]
        ),
        A = (0, m.z)(_, P);
    return (
        null != T && null != A && T.push(A),
        (0, r.jsx)(u.W, {
            actions: T,
            embedUrl: y,
            header: _.name,
            iconSrc: h.ZP.getApplicationIconURL({
                id: _.id,
                icon: _.icon,
                bot: _.bot
            }),
            info: (0, r.jsx)('div', { children: v.description }),
            staticBannerSrc: (0, f.getAssetImage)(_.id, v.asset_id, 512),
            title: v.title
        })
    );
}
