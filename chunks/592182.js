n.d(t, { A: () => k });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(284009),
    r = n.n(s),
    o = n(311907),
    c = n(802516),
    d = n(22363),
    u = n(825484),
    h = n(707606),
    m = n(573648),
    A = n(235986),
    g = n(159426),
    _ = n(25528),
    p = n(655724),
    f = n(82149),
    E = n(734057),
    C = n(287809),
    x = n(874546),
    S = n(90644),
    I = n(61330),
    v = n(709309),
    N = n(153331),
    T = n(33852),
    y = n(834425),
    b = n(284525),
    j = n(443493),
    R = n(462226),
    M = n(913948),
    L = n(329151),
    D = n(738080),
    P = n(648246),
    O = n(305637),
    w = n(652215),
    U = n(708727);
let k = (0, h.A)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: l,
            applicationStream: s,
            className: h,
            guildId: k,
            channelId: G,
            source: F,
            buttonVariant: H,
            type: B,
            onAction: V,
        } = e,
        W = (0, o.bG)([C.default], () => {
            let e = C.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        z = B === N.O.STREAM_PREVIEW || null != s,
        K = (0, S.A)(t),
        Y = K || z ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL,
        q = (0, o.bG)([E.A], () => (null != G ? E.A.getChannel(G) : null), [G]),
        { enableRequestToStream: J } = g.m.useExperiment(
            { guildId: k ?? q?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        $ = null != q && J && (0, _.F9)(t),
        Z = (0, v.A)("voice_channel_activity_actions", t?.application_id),
        X = Y === A.A.Direction.VERTICAL;
    return (0, i.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: Y,
        wrap: X ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: a()(h, U.jx, X ? U.Vd : U.xM),
        children: (() => {
            if (!(0, x.Ay)(t)) {
                if ((0, I.A)(t))
                    return (0, i.jsx)(T.A, { platform: m.A.get(w.fg2.XBOX), variant: H, onAction: V, icon: c.Y });
                if (t?.platform === w.yTV.PS4 || t?.platform === w.yTV.PS5)
                    return (0, i.jsx)(T.A, {
                        variant: H,
                        platform: m.A.get(w.fg2.PLAYSTATION),
                        onAction: V,
                        icon: d.X,
                    });
            }
            if (Z.length > 0) return (0, i.jsx)(M.A, { distributorCTAConfigs: Z, buttonVariant: "overlay-primary" });
            if (K) {
                let e = (0, i.jsx)(D.A, { activity: t, user: l, guildId: k, channelId: G, source: F, onAction: V }),
                    n = (0, i.jsx)(L.A, { activity: t, user: l, source: F, onAction: V });
                return (0, i.jsxs)(u.e, { size: "sm", fullWidth: !0, children: [n, e] });
            }
            if ((0, f.Cy)(t)) {
                let e = (0, f.UW)(t);
                return null == e
                    ? null
                    : (0, i.jsx)(j.A, { guildId: e.guildId, channelId: e.channelId, variant: H, onAction: V });
            }
            return z
                ? (0, i.jsx)(O.A, { isCurrentUser: W.id === l.id, applicationStream: s, onAction: V })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          $ && (0, i.jsx)(p.B, { userId: l.id, channel: q, onAction: V }),
                          (0, i.jsx)(P.A, { activity: t, variant: $ ? "secondary" : H, onAction: V }),
                          (0, i.jsx)(b.A, {
                              activity: t,
                              embeddedActivity: n,
                              user: l,
                              variant: $ ? "secondary" : H,
                              onAction: V,
                          }),
                          (0, i.jsx)(R.A, { activity: t, user: l, variant: $ ? "secondary" : H, onAction: V }),
                          (0, i.jsx)(y.A, { user: l, activity: t, variant: $ ? "secondary" : H, onAction: V }),
                      ],
                  });
        })(),
    });
});
