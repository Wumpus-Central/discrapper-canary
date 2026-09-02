l.d(t, { A: () => ey });
var n = l(477900);
l(582128);
var i = l(503698),
    s = l.n(i),
    a = l(284009),
    r = l.n(a),
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
    f = l(866665),
    j = l(309010),
    v = l(680724),
    N = l(309858),
    T = l(905322),
    S = l(375708);
function I(e) {
    let { userId: t, channel: l, onAction: i, variant: s = "primary" } = e,
        a = (0, N.u)(t, l),
        r = (0, c.bG)([v.A], () => v.A.isRequestOnCooldown(t)),
        o = (0, c.bG)([j.Ay], () => j.Ay.getVoiceChannelId() === l.id, [l.id]);
    if (null == a) return null;
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
            variant: s,
            size: "sm",
            onClick: () => {
                a.handleRequestToStream("request to stream button"), i?.();
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
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: s, icon: a, ...r } = e;
    return (0, c.bG)([z.A], () => z.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(y.$, {
              onClick: function () {
                  s?.(), (0, k.A)({ platformType: t.type, location: "Activity Action" });
              },
              variant: l,
              size: i,
              icon: a,
              text: S.intl.format(S.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var V = l(729937),
    W = l(123917),
    U = l(998218);
function R(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: s, ...a } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function r(e, t, l) {
        try {
            let n = await (0, V.yb)(e, t);
            if (n.button_urls.length <= l) return;
            let i = n.button_urls[l];
            if ("string" != typeof i) return;
            let s = U.A.safeParseWithQuery(i);
            if (null == s || null == s.protocol || null == s.hostname) return;
            (0, W.h)({ href: U.A.format(s), trusted: !1 });
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
                        s?.(), r(t, l.id, c);
                    },
                    ...a,
                },
                `customButton-${c}`,
            ),
        ),
    });
}
var w = l(284525),
    D = l(790535),
    $ = l(977997);
let H = function (e) {
    let { guildId: t, channelId: l, variant: i = "active", size: s = "sm", onAction: a, ...r } = e,
        o = (0, c.bG)([$.A], () => $.A.isInChannel(l), [l]);
    return (0, n.jsx)(y.$, {
        variant: i,
        size: s,
        text: S.intl.string(S.t.ZYO5OK),
        disabled: o,
        onClick: function () {
            a?.(), D.CH(t, l);
        },
        fullWidth: !0,
        ...r,
    });
};
var Y = l(626584),
    F = l(55730),
    B = l(652215);
function X(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: s, ...a } = e;
    return (0, F.A)(t, B.jUm.INSTANCE)
        ? (0, n.jsx)(y.$, {
              text: S.intl.string(S.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: function () {
                  s?.(), new Y.A("UserActivityActions").log("notify", l.id, t);
              },
              fullWidth: !0,
              ...a,
          })
        : null;
}
var K = l(601007),
    q = l(109487),
    Q = l(353411);
function J(e) {
    let {
            activity: t,
            user: l,
            source: i,
            size: s = "sm",
            variant: a = "secondary",
            fullWidth: r,
            onAction: c,
            ...o
        } = e,
        { label: d, tooltip: u, loading: m, disabled: A, onClick: p } = (0, Q._B)(t, l, i);
    return (0, n.jsx)(f.m, {
        text: u,
        children: (0, n.jsx)(y.$, {
            variant: a,
            size: s,
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
    let { activity: t, user: l, source: i, onAction: s } = e;
    return null != t && (0, F.A)(t, B.jUm.PLAY) && (0, _.A)(t)
        ? (0, n.jsx)(J, { fullWidth: !0, activity: t, user: l, source: i, onAction: s })
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
            guildId: s,
            source: a,
            size: r = "sm",
            variant: c = "secondary",
            onAction: o,
            ...d
        } = e,
        { tooltip: u, loading: m, disabled: A, onClick: p } = (0, Q.J$)(t, l, a, el.Ay.getNickname(s, i, l));
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
    let { activity: t, user: l, guildId: i, channelId: s, source: a, onAction: r } = e;
    return null != t && (0, F.A)(t, B.jUm.SYNC) && (0, _.A)(t)
        ? (0, n.jsx)(en, {
              size: "sm",
              variant: "secondary",
              user: l,
              activity: t,
              guildId: i ?? void 0,
              channelId: s,
              source: a,
              onAction: r,
          })
        : null;
}
var es = l(648246),
    ea = l(183623),
    er = l(622631),
    ec = l(982168),
    eo = l(730852),
    ed = l(401843),
    eu = l(711589),
    em = l(267102),
    eA = l(616356),
    ep = l(625494),
    eh = l(408399);
function ex(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        s = (0, c.bG)(
            [eA.A],
            () =>
                null != l &&
                eA.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        ),
        { actionString: a, canWatch: r, isWatching: o } = (0, eu.K)(l),
        d = (0, em.aL)();
    function u(e) {
        null != l &&
            (i?.(),
            eo.default.selectVoiceChannel(l.channelId),
            o || (0, ed.Nl)(l, { forceMultiple: e }),
            d.dispatch(B.jej.POPOUT_CLOSE),
            ep._.dispatch(B.jej.MODAL_CLOSE),
            ec.A.popAll());
    }
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: eh.w,
              children: [
                  (0, n.jsx)(y.$, {
                      size: "sm",
                      variant: o ? "secondary" : "active",
                      icon: ea.F,
                      text: a,
                      disabled: t || o || !r,
                      onClick: () => u(!1),
                      fullWidth: !0,
                  }),
                  s && !o
                      ? (0, n.jsx)(f.m, {
                            text: S.intl.string(S.t.wCrzut),
                            children: (0, n.jsx)(ee.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: er.v,
                                "aria-label": S.intl.string(S.t.wCrzut),
                                onClick: () => {
                                    u(!0);
                                },
                            }),
                        })
                      : null,
              ],
          });
}
var eg = l(279954);
let ey = (0, m.A)((e) => {
    let {
            activity: t,
            embeddedActivity: l,
            user: i,
            applicationStream: a,
            className: m,
            guildId: y,
            channelId: f,
            source: j,
            buttonVariant: v,
            type: N,
            onAction: T,
        } = e,
        S = (0, c.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        k = N === G.O.STREAM_PREVIEW || null != a,
        z = (0, _.A)(t),
        V = z ? x.A.Direction.HORIZONTAL : x.A.Direction.VERTICAL,
        W = (0, c.bG)([P.A], () => (null != f ? P.A.getChannel(f) : null), [f]),
        U = null != W && (0, g.F9)(t),
        D = t?.application_id,
        $ = (0, O.A)(D),
        { analyticsLocations: Y } = (0, h.Ay)(p.A.VOICE_CHANNEL_ACTIVITY_ACTIONS),
        F = V === x.A.Direction.VERTICAL;
    return (0, n.jsx)(x.A, {
        grow: 0,
        align: x.A.Align.STRETCH,
        direction: V,
        wrap: F ? x.A.Wrap.WRAP : x.A.Wrap.NO_WRAP,
        className: s()(m, eg.jx, F ? eg.Vd : eg.xM),
        children: (function () {
            if (!(0, b.Ay)(t)) {
                if ((0, L.A)(t))
                    return (0, n.jsx)(M, { platform: A.A.get(B.fg2.XBOX), variant: v, onAction: T, icon: o.Y });
                if (t?.platform === B.yTV.PS4 || t?.platform === B.yTV.PS5)
                    return (0, n.jsx)(M, { variant: v, platform: A.A.get(B.fg2.PLAYSTATION), onAction: T, icon: d.X });
            }
            if (z) {
                let e = (0, n.jsx)(ei, { activity: t, user: i, guildId: y, channelId: f, source: j, onAction: T }),
                    l = (0, n.jsx)(Z, { activity: t, user: i, source: j, onAction: T });
                return (0, n.jsxs)(u.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, C.Cy)(t)) {
                let e = (0, C.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(H, { guildId: e.guildId, channelId: e.channelId, variant: v, onAction: T });
            }
            return k
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ex, { isCurrentUser: S.id === i.id, applicationStream: a, onAction: T }),
                          $.length > 0
                              ? (0, n.jsx)(K.A, {
                                    distributorCTAConfigs: $,
                                    applicationId: D ?? "",
                                    analyticsLocations: Y,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          U && (0, n.jsx)(I, { userId: i.id, channel: W, onAction: T }),
                          (0, n.jsx)(es.A, { activity: t, variant: U ? "secondary" : v, onAction: T }),
                          (0, n.jsx)(w.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: U ? "secondary" : v,
                              onAction: T,
                          }),
                          (0, n.jsx)(X, { activity: t, user: i, variant: U ? "secondary" : v, onAction: T }),
                          (0, n.jsx)(R, { user: i, activity: t, variant: U ? "secondary" : v, onAction: T }),
                          $.length > 0
                              ? (0, n.jsx)(K.A, {
                                    distributorCTAConfigs: $,
                                    applicationId: D ?? "",
                                    analyticsLocations: Y,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  });
        })(),
    });
});
