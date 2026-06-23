l.d(t, { A: () => ey });
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
    j = l(680724),
    N = l(309858),
    T = l(783198),
    S = l(375708);
function I(e) {
    let { userId: t, channel: l, onAction: i, variant: a = "primary" } = e,
        s = (0, N.u)(t, l),
        r = (0, c.bG)([j.A], () => j.A.isRequestOnCooldown(t)),
        o = (0, c.bG)([v.A], () => v.A.getVoiceChannelId() === l.id, [l.id]);
    if (null == s) return null;
    let [d, u] = r
        ? [!0, S.intl.string(T.default.mVFTUg)]
        : o
          ? [!1, S.intl.string(T.default.qRXats)]
          : [!0, S.intl.string(T.default.qRXats)];
    return (0, n.jsx)(f.m, {
        position: "top",
        text: u,
        shouldShow: d,
        asContainer: !0,
        children: (0, n.jsx)(y.$, {
            text: S.intl.string(T.default.DKHhec),
            variant: a,
            size: "sm",
            onClick: () => {
                s.handleRequestToStream("request to stream button"), i?.();
            },
            fullWidth: !0,
            disabled: d,
        }),
    });
}
var C = l(82149),
    P = l(734057),
    E = l(287809),
    b = l(874546),
    _ = l(90644),
    L = l(61330),
    O = l(544441),
    G = l(50820),
    k = l(968309),
    z = l(30370);
function M(e) {
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: a, icon: s, ...r } = e;
    return (0, c.bG)([z.A], () => z.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(y.$, {
              onClick: function () {
                  a?.(), (0, k.A)({ platformType: t.type, location: "Activity Action" });
              },
              variant: l,
              size: i,
              icon: s,
              text: S.intl.format(S.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var V = l(729937),
    D = l(123917),
    w = l(998218);
function W(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function r(e, t, l) {
        try {
            let n = await (0, V.yb)(e, t);
            if (n.button_urls.length <= l) return;
            let i = n.button_urls[l];
            if ("string" != typeof i) return;
            let a = w.A.safeParseWithQuery(i);
            if (null == a || null == a.protocol || null == a.hostname) return;
            (0, D.h)({ href: w.A.format(a), trusted: !1 });
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
var U = l(284525),
    R = l(790535),
    $ = l(977997);
let H = function (e) {
    let { guildId: t, channelId: l, variant: i = "active", size: a = "sm", onAction: s, ...r } = e,
        o = (0, c.bG)([$.A], () => $.A.isInChannel(l), [l]);
    return (0, n.jsx)(y.$, {
        variant: i,
        size: a,
        text: S.intl.string(S.t.ZYO5OK),
        disabled: o,
        onClick: function () {
            s?.(), R.CH(t, l);
        },
        fullWidth: !0,
        ...r,
    });
};
var Y = l(626584),
    F = l(55730),
    B = l(652215);
function X(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    return (0, F.A)(t, B.jUm.INSTANCE)
        ? (0, n.jsx)(y.$, {
              text: S.intl.string(S.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: function () {
                  a?.(), new Y.A("UserActivityActions").log("notify", l.id, t);
              },
              fullWidth: !0,
              ...s,
          })
        : null;
}
var J = l(601007),
    q = l(109487),
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
            icon: q.L,
            text: d,
            fullWidth: r,
            onClick: function () {
                c?.(), p();
            },
            disabled: A,
            loading: m,
            ...o,
        }),
    });
}
function Z(e) {
    let { activity: t, user: l, source: i, onAction: a } = e;
    return null != t && (0, F.A)(t, B.jUm.PLAY) && (0, _.A)(t)
        ? (0, n.jsx)(Q, { fullWidth: !0, activity: t, user: l, source: i, onAction: a })
        : null;
}
var ee = l(408278),
    et = l(835723),
    el = l(562153);
function en(e) {
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
        { tooltip: u, loading: m, disabled: A, onClick: p } = (0, K.J$)(t, l, s, el.Ay.getNickname(a, i, l));
    return (0, n.jsx)(f.m, {
        text: u,
        children: (0, n.jsx)(ee.K, {
            icon: et.J,
            size: r,
            variant: c,
            onClick: function () {
                o?.(), p();
            },
            disabled: A,
            loading: m,
            "aria-label": u ?? t.name,
            ...d,
        }),
    });
}
function ei(e) {
    let { activity: t, user: l, guildId: i, channelId: a, source: s, onAction: r } = e;
    return null != t && (0, F.A)(t, B.jUm.SYNC) && (0, _.A)(t)
        ? (0, n.jsx)(en, {
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
var ea = l(648246),
    es = l(183623),
    er = l(845012),
    ec = l(982168),
    eo = l(730852),
    ed = l(401843),
    eu = l(279250),
    em = l(267102),
    eA = l(616356),
    ep = l(625494),
    eh = l(925932);
function ex(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        { activeStream: a, watchingOtherStream: s } = (0, c.cf)([eA.A], () => ({
            activeStream: eA.A.getActiveStreamForApplicationStream(l),
            watchingOtherStream:
                null != l &&
                eA.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        })),
        r = (0, c.bG)([P.A], () => P.A.getChannel(l?.channelId)),
        [o, d] = (0, eu.zP)(r),
        u = (0, em.aL)(),
        m = null != a && null != l && a.state !== B.XYD.ENDED && a.ownerId === l.ownerId,
        A = (e) => {
            null != l &&
                (i?.(),
                eo.default.selectVoiceChannel(l.channelId),
                m || (0, ed.Nl)(l, { forceMultiple: e }),
                u.dispatch(B.jej.POPOUT_CLOSE),
                ep._.dispatch(B.jej.MODAL_CLOSE),
                ec.A.popAll());
        };
    if (null == l) return null;
    let p = (0, eu.CT)(d);
    return (
        t ? (p = S.intl.string(S.t.XvBdeT)) : m && (p = S.intl.string(S.t["JH1SJ+"])),
        (0, n.jsxs)("div", {
            className: eh.w,
            children: [
                (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: m ? "secondary" : "active",
                    icon: es.F,
                    text: p,
                    disabled: t || m || !o,
                    onClick: () => A(!1),
                    fullWidth: !0,
                }),
                s && !m
                    ? (0, n.jsx)(f.m, {
                          text: S.intl.string(S.t.wCrzut),
                          children: (0, n.jsx)(ee.K, {
                              variant: "secondary",
                              size: "sm",
                              icon: er.v,
                              "aria-label": S.intl.string(S.t.wCrzut),
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
var eg = l(708727);
let ey = (0, m.A)((e) => {
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
        S = (0, c.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        k = N === G.O.STREAM_PREVIEW || null != s,
        z = (0, _.A)(t),
        V = z ? x.A.Direction.HORIZONTAL : x.A.Direction.VERTICAL,
        D = (0, c.bG)([P.A], () => (null != f ? P.A.getChannel(f) : null), [f]),
        w = null != D && (0, g.F9)(t),
        R = t?.application_id,
        $ = (0, O.A)(R),
        { analyticsLocations: Y } = (0, h.Ay)(p.A.VOICE_CHANNEL_ACTIVITY_ACTIONS),
        F = V === x.A.Direction.VERTICAL;
    return (0, n.jsx)(x.A, {
        grow: 0,
        align: x.A.Align.STRETCH,
        direction: V,
        wrap: F ? x.A.Wrap.WRAP : x.A.Wrap.NO_WRAP,
        className: a()(m, eg.jx, F ? eg.Vd : eg.xM),
        children: (() => {
            if (!(0, b.Ay)(t)) {
                if ((0, L.A)(t))
                    return (0, n.jsx)(M, { platform: A.A.get(B.fg2.XBOX), variant: j, onAction: T, icon: o.Y });
                if (t?.platform === B.yTV.PS4 || t?.platform === B.yTV.PS5)
                    return (0, n.jsx)(M, { variant: j, platform: A.A.get(B.fg2.PLAYSTATION), onAction: T, icon: d.X });
            }
            if (z) {
                let e = (0, n.jsx)(ei, { activity: t, user: i, guildId: y, channelId: f, source: v, onAction: T }),
                    l = (0, n.jsx)(Z, { activity: t, user: i, source: v, onAction: T });
                return (0, n.jsxs)(u.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, C.Cy)(t)) {
                let e = (0, C.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(H, { guildId: e.guildId, channelId: e.channelId, variant: j, onAction: T });
            }
            return k
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ex, { isCurrentUser: S.id === i.id, applicationStream: s, onAction: T }),
                          $.length > 0
                              ? (0, n.jsx)(J.A, {
                                    distributorCTAConfigs: $,
                                    applicationId: R ?? "",
                                    analyticsLocations: Y,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          w && (0, n.jsx)(I, { userId: i.id, channel: D, onAction: T }),
                          (0, n.jsx)(ea.A, { activity: t, variant: w ? "secondary" : j, onAction: T }),
                          (0, n.jsx)(U.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: w ? "secondary" : j,
                              onAction: T,
                          }),
                          (0, n.jsx)(X, { activity: t, user: i, variant: w ? "secondary" : j, onAction: T }),
                          (0, n.jsx)(W, { user: i, activity: t, variant: w ? "secondary" : j, onAction: T }),
                          $.length > 0
                              ? (0, n.jsx)(J.A, {
                                    distributorCTAConfigs: $,
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
