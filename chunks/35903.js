l.d(t, { A: () => eh });
var n = l(627968);
l(64700);
var i = l(503698),
    a = l.n(i),
    s = l(284009),
    r = l.n(s),
    c = l(17928),
    o = l(802516),
    u = l(22363),
    d = l(825484),
    m = l(707606),
    A = l(573648),
    p = l(235986),
    h = l(159426),
    g = l(25528),
    x = l(821609),
    y = l(990078),
    f = l(309010),
    v = l(559256),
    S = l(783198),
    j = l(985018);
function T(e) {
    let { userId: t, channel: l, onAction: i, variant: a = "primary" } = e,
        s = (0, v.u)(t, l, "useRequestToStreamButton"),
        r = (0, c.bG)([f.A], () => f.A.getVoiceChannelId() === l.id, [l.id]);
    if (null == s) return null;
    let o = (0, n.jsx)(x.$, {
        text: j.intl.string(S.default.DKHhec),
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
        : (0, n.jsx)(y.m, { position: "top", text: j.intl.string(S.default.qRXats), asContainer: !0, children: o });
}
var N = l(82149),
    I = l(734057),
    C = l(287809),
    b = l(874546),
    E = l(90644),
    _ = l(61330),
    P = l(709309),
    O = l(50820),
    L = l(773952),
    R = l(30370);
function G(e) {
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: a, icon: s, ...r } = e;
    return (0, c.bG)([R.A], () => R.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(x.$, {
              onClick: () => {
                  a?.(), (0, L.A)({ platformType: t.type, location: "Activity Action" });
              },
              variant: l,
              size: i,
              icon: s,
              text: j.intl.format(j.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var k = l(729937),
    M = l(76843),
    V = l(998218);
function w(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function r(e, t, l) {
        try {
            let n = await (0, k.yb)(e, t);
            if (n.button_urls.length <= l) return;
            let i = n.button_urls[l];
            if ("string" != typeof i) return;
            let a = V.A.safeParseWithQuery(i);
            if (null == a || null == a.protocol || null == a.hostname) return;
            (0, M.h)({ href: V.A.format(a), trusted: !1 });
        } catch (e) {}
    }
    return (0, n.jsx)(n.Fragment, {
        children: t.buttons.map((e, c) =>
            (0, n.jsx)(
                x.$,
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
    z = l(790535),
    D = l(977997);
let W = (e) => {
    let { guildId: t, channelId: l, variant: i = "active", size: a = "sm", onAction: s, ...r } = e,
        o = (0, c.bG)([D.A], () => D.A.isInChannel(l), [l]);
    return (0, n.jsx)(x.$, {
        variant: i,
        size: a,
        text: j.intl.string(j.t.ZYO5OK),
        disabled: o,
        onClick: () => {
            s?.(), z.CH(t, l);
        },
        fullWidth: !0,
        ...r,
    });
};
var $ = l(626584),
    q = l(833349),
    F = l(652215);
function B(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    return (0, q.A)(t, F.jUm.INSTANCE)
        ? (0, n.jsx)(x.$, {
              text: j.intl.string(j.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: () => {
                  a?.(), new $.A("UserActivityActions").log("notify", l.id, t);
              },
              fullWidth: !0,
              ...s,
          })
        : null;
}
var H = l(913948),
    Y = l(109487),
    X = l(353411);
function J(e) {
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
        { label: u, tooltip: d, loading: m, disabled: A, onClick: p } = (0, X._B)(t, l, i);
    return (0, n.jsx)(y.m, {
        text: d,
        children: (0, n.jsx)(x.$, {
            variant: s,
            size: a,
            icon: Y.L,
            text: u,
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
function Z(e) {
    let { activity: t, user: l, source: i, onAction: a } = e;
    return null != t && (0, q.A)(t, F.jUm.PLAY) && (0, E.A)(t)
        ? (0, n.jsx)(J, { fullWidth: !0, activity: t, user: l, source: i, onAction: a })
        : null;
}
var Q = l(408278),
    K = l(835723),
    ee = l(562153);
function et(e) {
    let {
            activity: t,
            user: l,
            channelId: i,
            guildId: a,
            source: s,
            size: r = "sm",
            variant: c = "secondary",
            onAction: o,
            ...u
        } = e,
        { tooltip: d, loading: m, disabled: A, onClick: p } = (0, X.J$)(t, l, s, ee.Ay.getNickname(a, i, l));
    return (0, n.jsx)(y.m, {
        text: d,
        children: (0, n.jsx)(Q.K, {
            icon: K.J,
            size: r,
            variant: c,
            onClick: () => {
                o?.(), p();
            },
            disabled: A,
            loading: m,
            "aria-label": d ?? t.name,
            ...u,
        }),
    });
}
function el(e) {
    let { activity: t, user: l, guildId: i, channelId: a, source: s, onAction: r } = e;
    return null != t && (0, q.A)(t, F.jUm.SYNC) && (0, E.A)(t)
        ? (0, n.jsx)(et, {
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
var en = l(648246),
    ei = l(183623),
    ea = l(622631),
    es = l(982168),
    er = l(956793),
    ec = l(401843),
    eo = l(279250),
    eu = l(267102),
    ed = l(616356),
    em = l(625494);
function eA(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        { activeStream: a, watchingOtherStream: s } = (0, c.cf)([ed.A], () => ({
            activeStream: ed.A.getActiveStreamForApplicationStream(l),
            watchingOtherStream:
                null != l &&
                ed.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        })),
        r = (0, c.bG)([I.A], () => I.A.getChannel(l?.channelId)),
        [o, u] = (0, eo.zP)(r),
        d = (0, eu.aL)(),
        m = null != a && null != l && a.state !== F.XYD.ENDED && a.ownerId === l.ownerId,
        A = (e) => {
            null != l &&
                (i?.(),
                er.default.selectVoiceChannel(l.channelId),
                m || (0, ec.Nl)(l, { forceMultiple: e }),
                d.dispatch(F.jej.POPOUT_CLOSE),
                em._.dispatch(F.jej.MODAL_CLOSE),
                es.A.popAll());
        };
    if (null == l) return null;
    let p = (0, eo.CT)(u);
    return (
        t ? (p = j.intl.string(j.t.XvBdeT)) : m && (p = j.intl.string(j.t["JH1SJ+"])),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(x.$, {
                    size: "sm",
                    variant: m ? "secondary" : "active",
                    icon: ei.F,
                    text: p,
                    disabled: t || m || !o,
                    onClick: () => A(!1),
                    fullWidth: !0,
                }),
                s && !m
                    ? (0, n.jsx)(y.m, {
                          text: j.intl.string(j.t.wCrzut),
                          children: (0, n.jsx)(Q.K, {
                              variant: "secondary",
                              size: "sm",
                              icon: ea.v,
                              "aria-label": j.intl.string(j.t.wCrzut),
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
var ep = l(708727);
let eh = (0, m.A)((e) => {
    let {
            activity: t,
            embeddedActivity: l,
            user: i,
            applicationStream: s,
            className: m,
            guildId: x,
            channelId: y,
            source: f,
            buttonVariant: v,
            type: S,
            onAction: j,
        } = e,
        L = (0, c.bG)([C.default], () => {
            let e = C.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        R = S === O.O.STREAM_PREVIEW || null != s,
        k = (0, E.A)(t),
        M = k || R ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL,
        V = (0, c.bG)([I.A], () => (null != y ? I.A.getChannel(y) : null), [y]),
        { enableRequestToStream: z } = h.m.useExperiment(
            { guildId: x ?? V?.guild_id, location: "UserActivityActions" },
            { autoTrackExposure: !1 },
        ),
        D = null != V && z && (0, g.F9)(t),
        $ = (0, P.A)("voice_channel_activity_actions", t?.application_id),
        q = M === p.A.Direction.VERTICAL;
    return (0, n.jsx)(p.A, {
        grow: 0,
        align: p.A.Align.STRETCH,
        direction: M,
        wrap: q ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
        className: a()(m, ep.jx, q ? ep.Vd : ep.xM),
        children: (() => {
            if (!(0, b.Ay)(t)) {
                if ((0, _.A)(t))
                    return (0, n.jsx)(G, { platform: A.A.get(F.fg2.XBOX), variant: v, onAction: j, icon: o.Y });
                if (t?.platform === F.yTV.PS4 || t?.platform === F.yTV.PS5)
                    return (0, n.jsx)(G, { variant: v, platform: A.A.get(F.fg2.PLAYSTATION), onAction: j, icon: u.X });
            }
            if ($.length > 0) return (0, n.jsx)(H.A, { distributorCTAConfigs: $, buttonVariant: "overlay-primary" });
            if (k) {
                let e = (0, n.jsx)(el, { activity: t, user: i, guildId: x, channelId: y, source: f, onAction: j }),
                    l = (0, n.jsx)(Z, { activity: t, user: i, source: f, onAction: j });
                return (0, n.jsxs)(d.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, N.Cy)(t)) {
                let e = (0, N.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(W, { guildId: e.guildId, channelId: e.channelId, variant: v, onAction: j });
            }
            return R
                ? (0, n.jsx)(eA, { isCurrentUser: L.id === i.id, applicationStream: s, onAction: j })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          D && (0, n.jsx)(T, { userId: i.id, channel: V, onAction: j }),
                          (0, n.jsx)(en.A, { activity: t, variant: D ? "secondary" : v, onAction: j }),
                          (0, n.jsx)(U.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: D ? "secondary" : v,
                              onAction: j,
                          }),
                          (0, n.jsx)(B, { activity: t, user: i, variant: D ? "secondary" : v, onAction: j }),
                          (0, n.jsx)(w, { user: i, activity: t, variant: D ? "secondary" : v, onAction: j }),
                      ],
                  });
        })(),
    });
});
