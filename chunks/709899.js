l.d(t, { A: () => ep });
var n = l(477900);
l(582128);
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
    y = l(655724),
    f = l(82149),
    j = l(734057),
    v = l(287809),
    N = l(874546),
    T = l(90644),
    S = l(61330),
    I = l(544441),
    C = l(50820),
    P = l(821609),
    E = l(968309),
    b = l(30370),
    _ = l(105292);
function L(e) {
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: a, icon: s, ...r } = e;
    return (0, c.bG)([b.A], () => b.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(P.$, {
              onClick: function () {
                  (a?.(), (0, E.A)({ platformType: t.type, location: "Activity Action" }));
              },
              variant: l,
              size: i,
              icon: s,
              text: _.intl.format(_.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var O = l(729937),
    G = l(123917),
    k = l(998218);
function z(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function r(e, t, l) {
        try {
            let n = await (0, O.yb)(e, t);
            if (n.button_urls.length <= l) return;
            let i = n.button_urls[l];
            if ("string" != typeof i) return;
            let a = k.A.safeParseWithQuery(i);
            if (null == a || null == a.protocol || null == a.hostname) return;
            (0, G.h)({ href: k.A.format(a), trusted: !1 });
        } catch (e) {}
    }
    return (0, n.jsx)(n.Fragment, {
        children: t.buttons.map((e, c) =>
            (0, n.jsx)(
                P.$,
                {
                    text: e,
                    variant: i,
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => {
                        (a?.(), r(t, l.id, c));
                    },
                    ...s,
                },
                `customButton-${c}`,
            ),
        ),
    });
}
var M = l(284525),
    V = l(747376),
    W = l(977997);
let U = function (e) {
    let { guildId: t, channelId: l, variant: i = "active", size: a = "sm", onAction: s, ...r } = e,
        o = (0, c.bG)([W.A], () => W.A.isInChannel(l), [l]);
    return (0, n.jsx)(P.$, {
        variant: i,
        size: a,
        text: _.intl.string(_.t.ZYO5OK),
        disabled: o,
        onClick: function () {
            (s?.(), V.CH(t, l));
        },
        fullWidth: !0,
        ...r,
    });
};
var w = l(626584),
    D = l(55730),
    R = l(652215);
function $(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    return (0, D.A)(t, R.jUm.INSTANCE)
        ? (0, n.jsx)(P.$, {
              text: _.intl.string(_.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: function () {
                  (a?.(), new w.A("UserActivityActions").log("notify", l.id, t));
              },
              fullWidth: !0,
              ...s,
          })
        : null;
}
var H = l(601007),
    Y = l(866665),
    B = l(109487),
    F = l(353411);
function K(e) {
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
        { label: d, tooltip: u, loading: m, disabled: A, onClick: p } = (0, F._B)(t, l, i);
    return (0, n.jsx)(Y.m, {
        text: u,
        children: (0, n.jsx)(P.$, {
            variant: s,
            size: a,
            icon: B.L,
            text: d,
            fullWidth: r,
            onClick: function () {
                (c?.(), p());
            },
            disabled: A,
            loading: m,
            ...o,
        }),
    });
}
function X(e) {
    let { activity: t, user: l, source: i, onAction: a } = e;
    return null != t && (0, D.A)(t, R.jUm.PLAY) && (0, T.A)(t)
        ? (0, n.jsx)(K, { fullWidth: !0, activity: t, user: l, source: i, onAction: a })
        : null;
}
var Q = l(408278),
    J = l(835723),
    q = l(562153);
function Z(e) {
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
        { tooltip: u, loading: m, disabled: A, onClick: p } = (0, F.J$)(t, l, s, q.Ay.getNickname(a, i, l));
    return (0, n.jsx)(Y.m, {
        text: u,
        children: (0, n.jsx)(Q.K, {
            icon: J.J,
            size: r,
            variant: c,
            onClick: function () {
                (o?.(), p());
            },
            disabled: A,
            loading: m,
            "aria-label": u ?? t.name,
            ...d,
        }),
    });
}
function ee(e) {
    let { activity: t, user: l, guildId: i, channelId: a, source: s, onAction: r } = e;
    return null != t && (0, D.A)(t, R.jUm.SYNC) && (0, T.A)(t)
        ? (0, n.jsx)(Z, {
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
var et = l(648246),
    el = l(183623),
    en = l(622631),
    ei = l(700058),
    ea = l(730852),
    es = l(401843),
    er = l(711589),
    ec = l(267102),
    eo = l(616356),
    ed = l(625494),
    eu = l(408399);
function em(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        a = (0, c.bG)(
            [eo.A],
            () =>
                null != l &&
                eo.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        ),
        { actionString: s, canWatch: r, isWatching: o } = (0, er.K)(l),
        d = (0, ec.aL)();
    function u(e) {
        null != l &&
            (i?.(),
            ea.default.selectVoiceChannel(l.channelId),
            o || (0, es.Nl)(l, { forceMultiple: e }),
            d.dispatch(R.jej.POPOUT_CLOSE),
            ed._.dispatch(R.jej.MODAL_CLOSE),
            ei.A.popAll());
    }
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eu.w,
              children: [
                  (0, n.jsx)(P.$, {
                      size: "sm",
                      variant: o ? "secondary" : "active",
                      icon: el.F,
                      text: s,
                      disabled: t || o || !r,
                      onClick: () => u(!1),
                      fullWidth: !0,
                  }),
                  a && !o
                      ? (0, n.jsx)(Y.m, {
                            text: _.intl.string(_.t.wCrzut),
                            children: (0, n.jsx)(Q.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: en.v,
                                "aria-label": _.intl.string(_.t.wCrzut),
                                onClick: () => {
                                    u(!0);
                                },
                            }),
                        })
                      : null,
              ],
          });
}
var eA = l(279954);
let ep = (0, m.A)((e) => {
    let {
            activity: t,
            embeddedActivity: l,
            user: i,
            applicationStream: s,
            className: m,
            guildId: P,
            channelId: E,
            source: b,
            buttonVariant: _,
            type: O,
            onAction: G,
        } = e,
        k = (0, c.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return (r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e);
        }),
        V = O === C.O.STREAM_PREVIEW || null != s,
        W = (0, T.A)(t),
        w = W ? x.A.Direction.HORIZONTAL : x.A.Direction.VERTICAL,
        D = (0, c.bG)([j.A], () => (null != E ? j.A.getChannel(E) : null), [E]),
        Y = null != D && (0, g.F9)(t),
        B = t?.application_id,
        F = (0, I.A)(B),
        { analyticsLocations: K } = (0, h.Ay)(p.A.VOICE_CHANNEL_ACTIVITY_ACTIONS),
        Q = w === x.A.Direction.VERTICAL;
    return (0, n.jsx)(x.A, {
        grow: 0,
        align: x.A.Align.STRETCH,
        direction: w,
        wrap: Q ? x.A.Wrap.WRAP : x.A.Wrap.NO_WRAP,
        className: a()(m, eA.jx, Q ? eA.Vd : eA.xM),
        children: (function () {
            if (!(0, N.Ay)(t)) {
                if ((0, S.A)(t))
                    return (0, n.jsx)(L, { platform: A.A.get(R.fg2.XBOX), variant: _, onAction: G, icon: o.Y });
                if (t?.platform === R.yTV.PS4 || t?.platform === R.yTV.PS5)
                    return (0, n.jsx)(L, { variant: _, platform: A.A.get(R.fg2.PLAYSTATION), onAction: G, icon: d.X });
            }
            if (W) {
                let e = (0, n.jsx)(ee, { activity: t, user: i, guildId: P, channelId: E, source: b, onAction: G }),
                    l = (0, n.jsx)(X, { activity: t, user: i, source: b, onAction: G });
                return (0, n.jsxs)(u.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, f.Cy)(t)) {
                let e = (0, f.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(U, { guildId: e.guildId, channelId: e.channelId, variant: _, onAction: G });
            }
            return V
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(em, { isCurrentUser: k.id === i.id, applicationStream: s, onAction: G }),
                          F.length > 0
                              ? (0, n.jsx)(H.A, {
                                    distributorCTAConfigs: F,
                                    applicationId: B ?? "",
                                    analyticsLocations: K,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          Y && (0, n.jsx)(y.B, { userId: i.id, channel: D, onAction: G }),
                          (0, n.jsx)(et.A, { activity: t, variant: Y ? "secondary" : _, onAction: G }),
                          (0, n.jsx)(M.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: Y ? "secondary" : _,
                              onAction: G,
                          }),
                          (0, n.jsx)($, { activity: t, user: i, variant: Y ? "secondary" : _, onAction: G }),
                          (0, n.jsx)(z, { user: i, activity: t, variant: Y ? "secondary" : _, onAction: G }),
                          F.length > 0
                              ? (0, n.jsx)(H.A, {
                                    distributorCTAConfigs: F,
                                    applicationId: B ?? "",
                                    analyticsLocations: K,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  });
        })(),
    });
});
