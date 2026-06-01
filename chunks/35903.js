l.d(t, { A: () => eg });
var n = l(627968);
l(64700);
var i = l(503698),
    a = l.n(i),
    s = l(284009),
    r = l.n(s),
    c = l(17928),
    o = l(802516),
    d = l(22363),
    u = l(825484),
    m = l(707606),
    A = l(573648),
    p = l(793574),
    h = l(688810),
    x = l(235986),
    g = l(25528),
    y = l(821609),
    f = l(990078),
    v = l(309010),
    j = l(559256),
    N = l(783198),
    T = l(375708);
function S(e) {
    let { userId: t, channel: l, onAction: i, variant: a = "primary" } = e,
        s = (0, j.u)(t, l),
        r = (0, c.bG)([v.A], () => v.A.getVoiceChannelId() === l.id, [l.id]);
    if (null == s) return null;
    let o = (0, n.jsx)(y.$, {
        text: T.intl.string(N.default.DKHhec),
        variant: a,
        size: "sm",
        onClick: () => {
            s.handleRequestToStream("request to stream button"), i?.();
        },
        fullWidth: !0,
        disabled: !r,
    });
    return r
        ? o
        : (0, n.jsx)(f.m, { position: "top", text: T.intl.string(N.default.qRXats), asContainer: !0, children: o });
}
var I = l(82149),
    C = l(734057),
    P = l(287809),
    E = l(874546),
    b = l(90644),
    _ = l(61330),
    L = l(544441),
    O = l(50820),
    G = l(968309),
    k = l(30370);
function z(e) {
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: a, icon: s, ...r } = e;
    return (0, c.bG)([k.A], () => k.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(y.$, {
              onClick: () => {
                  a?.(), (0, G.A)({ platformType: t.type, location: "Activity Action" });
              },
              variant: l,
              size: i,
              icon: s,
              text: T.intl.format(T.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var M = l(729937),
    D = l(123917),
    V = l(998218);
function W(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function r(e, t, l) {
        try {
            let n = await (0, M.yb)(e, t);
            if (n.button_urls.length <= l) return;
            let i = n.button_urls[l];
            if ("string" != typeof i) return;
            let a = V.A.safeParseWithQuery(i);
            if (null == a || null == a.protocol || null == a.hostname) return;
            (0, D.h)({ href: V.A.format(a), trusted: !1 });
        } catch (e) {}
    }
    return (0, n.jsx)(n.Fragment, {
        children: t.buttons.map((e, c) =>
            (0, n.jsx)(
                y.$,
                {
                    text: e,
                    variant: i,
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => {
                        a?.(), r(t, l.id, c);
                    },
                    ...s,
                },
                `customButton-${c}`,
            ),
        ),
    });
}
var w = l(284525),
    U = l(790535),
    R = l(977997);
let $ = (e) => {
    let { guildId: t, channelId: l, variant: i = "active", size: a = "sm", onAction: s, ...r } = e,
        o = (0, c.bG)([R.A], () => R.A.isInChannel(l), [l]);
    return (0, n.jsx)(y.$, {
        variant: i,
        size: a,
        text: T.intl.string(T.t.ZYO5OK),
        disabled: o,
        onClick: () => {
            s?.(), U.CH(t, l);
        },
        fullWidth: !0,
        ...r,
    });
};
var H = l(626584),
    Y = l(55730),
    F = l(652215);
function B(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    return (0, Y.A)(t, F.jUm.INSTANCE)
        ? (0, n.jsx)(y.$, {
              text: T.intl.string(T.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: () => {
                  a?.(), new H.A("UserActivityActions").log("notify", l.id, t);
              },
              fullWidth: !0,
              ...s,
          })
        : null;
}
var X = l(601007),
    J = l(109487),
    K = l(353411);
function Q(e) {
    let {
            activity: t,
            user: l,
            source: i,
            size: a = "sm",
            variant: s = "secondary",
            fullWidth: r,
            onAction: c,
            ...o
        } = e,
        { label: d, tooltip: u, loading: m, disabled: A, onClick: p } = (0, K._B)(t, l, i);
    return (0, n.jsx)(f.m, {
        text: u,
        children: (0, n.jsx)(y.$, {
            variant: s,
            size: a,
            icon: J.L,
            text: d,
            fullWidth: r,
            onClick: () => {
                c?.(), p();
            },
            disabled: A,
            loading: m,
            ...o,
        }),
    });
}
function q(e) {
    let { activity: t, user: l, source: i, onAction: a } = e;
    return null != t && (0, Y.A)(t, F.jUm.PLAY) && (0, b.A)(t)
        ? (0, n.jsx)(Q, { fullWidth: !0, activity: t, user: l, source: i, onAction: a })
        : null;
}
var Z = l(408278),
    ee = l(835723),
    et = l(562153);
function el(e) {
    let {
            activity: t,
            user: l,
            channelId: i,
            guildId: a,
            source: s,
            size: r = "sm",
            variant: c = "secondary",
            onAction: o,
            ...d
        } = e,
        { tooltip: u, loading: m, disabled: A, onClick: p } = (0, K.J$)(t, l, s, et.Ay.getNickname(a, i, l));
    return (0, n.jsx)(f.m, {
        text: u,
        children: (0, n.jsx)(Z.K, {
            icon: ee.J,
            size: r,
            variant: c,
            onClick: () => {
                o?.(), p();
            },
            disabled: A,
            loading: m,
            "aria-label": u ?? t.name,
            ...d,
        }),
    });
}
function en(e) {
    let { activity: t, user: l, guildId: i, channelId: a, source: s, onAction: r } = e;
    return null != t && (0, Y.A)(t, F.jUm.SYNC) && (0, b.A)(t)
        ? (0, n.jsx)(el, {
              size: "sm",
              variant: "secondary",
              user: l,
              activity: t,
              guildId: i ?? void 0,
              channelId: a,
              source: s,
              onAction: r,
          })
        : null;
}
var ei = l(648246),
    ea = l(183623),
    es = l(622631),
    er = l(982168),
    ec = l(730852),
    eo = l(401843),
    ed = l(279250),
    eu = l(267102),
    em = l(616356),
    eA = l(625494),
    ep = l(925932);
function eh(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        { activeStream: a, watchingOtherStream: s } = (0, c.cf)([em.A], () => ({
            activeStream: em.A.getActiveStreamForApplicationStream(l),
            watchingOtherStream:
                null != l &&
                em.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        })),
        r = (0, c.bG)([C.A], () => C.A.getChannel(l?.channelId)),
        [o, d] = (0, ed.zP)(r),
        u = (0, eu.aL)(),
        m = null != a && null != l && a.state !== F.XYD.ENDED && a.ownerId === l.ownerId,
        A = (e) => {
            null != l &&
                (i?.(),
                ec.default.selectVoiceChannel(l.channelId),
                m || (0, eo.Nl)(l, { forceMultiple: e }),
                u.dispatch(F.jej.POPOUT_CLOSE),
                eA._.dispatch(F.jej.MODAL_CLOSE),
                er.A.popAll());
        };
    if (null == l) return null;
    let p = (0, ed.CT)(d);
    return (
        t ? (p = T.intl.string(T.t.XvBdeT)) : m && (p = T.intl.string(T.t["JH1SJ+"])),
        (0, n.jsxs)("div", {
            className: ep.w,
            children: [
                (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: m ? "secondary" : "active",
                    icon: ea.F,
                    text: p,
                    disabled: t || m || !o,
                    onClick: () => A(!1),
                    fullWidth: !0,
                }),
                s && !m
                    ? (0, n.jsx)(f.m, {
                          text: T.intl.string(T.t.wCrzut),
                          children: (0, n.jsx)(Z.K, {
                              variant: "secondary",
                              size: "sm",
                              icon: es.v,
                              "aria-label": T.intl.string(T.t.wCrzut),
                              onClick: () => {
                                  A(!0);
                              },
                          }),
                      })
                    : null,
            ],
        })
    );
}
var ex = l(708727);
let eg = (0, m.A)((e) => {
    let {
            activity: t,
            embeddedActivity: l,
            user: i,
            applicationStream: s,
            className: m,
            guildId: y,
            channelId: f,
            source: v,
            buttonVariant: j,
            type: N,
            onAction: T,
        } = e,
        G = (0, c.bG)([P.default], () => {
            let e = P.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        k = N === O.O.STREAM_PREVIEW || null != s,
        M = (0, b.A)(t),
        D = M ? x.A.Direction.HORIZONTAL : x.A.Direction.VERTICAL,
        V = (0, c.bG)([C.A], () => (null != f ? C.A.getChannel(f) : null), [f]),
        U = null != V && (0, g.F9)(t),
        R = t?.application_id,
        H = (0, L.A)(R),
        { analyticsLocations: Y } = (0, h.Ay)(p.A.VOICE_CHANNEL_ACTIVITY_ACTIONS),
        J = D === x.A.Direction.VERTICAL;
    return (0, n.jsx)(x.A, {
        grow: 0,
        align: x.A.Align.STRETCH,
        direction: D,
        wrap: J ? x.A.Wrap.WRAP : x.A.Wrap.NO_WRAP,
        className: a()(m, ex.jx, J ? ex.Vd : ex.xM),
        children: (() => {
            if (!(0, E.Ay)(t)) {
                if ((0, _.A)(t))
                    return (0, n.jsx)(z, { platform: A.A.get(F.fg2.XBOX), variant: j, onAction: T, icon: o.Y });
                if (t?.platform === F.yTV.PS4 || t?.platform === F.yTV.PS5)
                    return (0, n.jsx)(z, { variant: j, platform: A.A.get(F.fg2.PLAYSTATION), onAction: T, icon: d.X });
            }
            if (M) {
                let e = (0, n.jsx)(en, { activity: t, user: i, guildId: y, channelId: f, source: v, onAction: T }),
                    l = (0, n.jsx)(q, { activity: t, user: i, source: v, onAction: T });
                return (0, n.jsxs)(u.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, I.Cy)(t)) {
                let e = (0, I.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)($, { guildId: e.guildId, channelId: e.channelId, variant: j, onAction: T });
            }
            return k
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eh, { isCurrentUser: G.id === i.id, applicationStream: s, onAction: T }),
                          H.length > 0
                              ? (0, n.jsx)(X.A, {
                                    distributorCTAConfigs: H,
                                    applicationId: R ?? "",
                                    analyticsLocations: Y,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          U && (0, n.jsx)(S, { userId: i.id, channel: V, onAction: T }),
                          (0, n.jsx)(ei.A, { activity: t, variant: U ? "secondary" : j, onAction: T }),
                          (0, n.jsx)(w.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: U ? "secondary" : j,
                              onAction: T,
                          }),
                          (0, n.jsx)(B, { activity: t, user: i, variant: U ? "secondary" : j, onAction: T }),
                          (0, n.jsx)(W, { user: i, activity: t, variant: U ? "secondary" : j, onAction: T }),
                          H.length > 0
                              ? (0, n.jsx)(X.A, {
                                    distributorCTAConfigs: H,
                                    applicationId: R ?? "",
                                    analyticsLocations: Y,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  });
        })(),
    });
});
