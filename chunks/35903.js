l.d(t, { A: () => eh });
var n = l(627968);
l(64700);
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
    h = l(235986),
    p = l(25528),
    x = l(821609),
    g = l(990078),
    y = l(309010),
    f = l(559256),
    v = l(783198),
    j = l(375708);
function N(e) {
    let { userId: t, channel: l, onAction: i, variant: s = "primary" } = e,
        a = (0, f.u)(t, l),
        r = (0, c.bG)([y.A], () => y.A.getVoiceChannelId() === l.id, [l.id]);
    if (null == a) return null;
    let o = (0, n.jsx)(x.$, {
        text: j.intl.string(v.default.DKHhec),
        variant: s,
        size: "sm",
        onClick: () => {
            a.handleRequestToStream("request to stream button"), i?.();
        },
        fullWidth: !0,
        disabled: !r,
    });
    return r
        ? o
        : (0, n.jsx)(g.m, { position: "top", text: j.intl.string(v.default.qRXats), asContainer: !0, children: o });
}
var T = l(82149),
    S = l(734057),
    I = l(287809),
    C = l(874546),
    P = l(90644),
    E = l(61330),
    _ = l(205390),
    b = l(50820),
    L = l(773952),
    O = l(30370);
function G(e) {
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: s, icon: a, ...r } = e;
    return (0, c.bG)([O.A], () => O.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(x.$, {
              onClick: () => {
                  s?.(), (0, L.A)({ platformType: t.type, location: "Activity Action" });
              },
              variant: l,
              size: i,
              icon: a,
              text: j.intl.format(j.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var k = l(729937),
    z = l(76843),
    M = l(998218);
function U(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: s, ...a } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function r(e, t, l) {
        try {
            let n = await (0, k.yb)(e, t);
            if (n.button_urls.length <= l) return;
            let i = n.button_urls[l];
            if ("string" != typeof i) return;
            let s = M.A.safeParseWithQuery(i);
            if (null == s || null == s.protocol || null == s.hostname) return;
            (0, z.h)({ href: M.A.format(s), trusted: !1 });
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
                        s?.(), r(t, l.id, c);
                    },
                    ...a,
                },
                `customButton-${c}`,
            ),
        ),
    });
}
var W = l(284525),
    D = l(790535),
    V = l(977997);
let w = (e) => {
    let { guildId: t, channelId: l, variant: i = "active", size: s = "sm", onAction: a, ...r } = e,
        o = (0, c.bG)([V.A], () => V.A.isInChannel(l), [l]);
    return (0, n.jsx)(x.$, {
        variant: i,
        size: s,
        text: j.intl.string(j.t.ZYO5OK),
        disabled: o,
        onClick: () => {
            a?.(), D.CH(t, l);
        },
        fullWidth: !0,
        ...r,
    });
};
var R = l(626584),
    $ = l(833349),
    H = l(652215);
function F(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: s, ...a } = e;
    return (0, $.A)(t, H.jUm.INSTANCE)
        ? (0, n.jsx)(x.$, {
              text: j.intl.string(j.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: () => {
                  s?.(), new R.A("UserActivityActions").log("notify", l.id, t);
              },
              fullWidth: !0,
              ...a,
          })
        : null;
}
var Y = l(913948),
    B = l(109487),
    X = l(353411);
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
        { label: d, tooltip: u, loading: m, disabled: A, onClick: h } = (0, X._B)(t, l, i);
    return (0, n.jsx)(g.m, {
        text: u,
        children: (0, n.jsx)(x.$, {
            variant: a,
            size: s,
            icon: B.L,
            text: d,
            fullWidth: r,
            onClick: () => {
                c?.(), h();
            },
            disabled: A,
            loading: m,
            ...o,
        }),
    });
}
function K(e) {
    let { activity: t, user: l, source: i, onAction: s } = e;
    return null != t && (0, $.A)(t, H.jUm.PLAY) && (0, P.A)(t)
        ? (0, n.jsx)(J, { fullWidth: !0, activity: t, user: l, source: i, onAction: s })
        : null;
}
var Q = l(408278),
    q = l(835723),
    Z = l(562153);
function ee(e) {
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
        { tooltip: u, loading: m, disabled: A, onClick: h } = (0, X.J$)(t, l, a, Z.Ay.getNickname(s, i, l));
    return (0, n.jsx)(g.m, {
        text: u,
        children: (0, n.jsx)(Q.K, {
            icon: q.J,
            size: r,
            variant: c,
            onClick: () => {
                o?.(), h();
            },
            disabled: A,
            loading: m,
            "aria-label": u ?? t.name,
            ...d,
        }),
    });
}
function et(e) {
    let { activity: t, user: l, guildId: i, channelId: s, source: a, onAction: r } = e;
    return null != t && (0, $.A)(t, H.jUm.SYNC) && (0, P.A)(t)
        ? (0, n.jsx)(ee, {
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
var el = l(648246),
    en = l(183623),
    ei = l(622631),
    es = l(982168),
    ea = l(730852),
    er = l(401843),
    ec = l(279250),
    eo = l(267102),
    ed = l(616356),
    eu = l(625494);
function em(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        { activeStream: s, watchingOtherStream: a } = (0, c.cf)([ed.A], () => ({
            activeStream: ed.A.getActiveStreamForApplicationStream(l),
            watchingOtherStream:
                null != l &&
                ed.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        })),
        r = (0, c.bG)([S.A], () => S.A.getChannel(l?.channelId)),
        [o, d] = (0, ec.zP)(r),
        u = (0, eo.aL)(),
        m = null != s && null != l && s.state !== H.XYD.ENDED && s.ownerId === l.ownerId,
        A = (e) => {
            null != l &&
                (i?.(),
                ea.default.selectVoiceChannel(l.channelId),
                m || (0, er.Nl)(l, { forceMultiple: e }),
                u.dispatch(H.jej.POPOUT_CLOSE),
                eu._.dispatch(H.jej.MODAL_CLOSE),
                es.A.popAll());
        };
    if (null == l) return null;
    let h = (0, ec.CT)(d);
    return (
        t ? (h = j.intl.string(j.t.XvBdeT)) : m && (h = j.intl.string(j.t["JH1SJ+"])),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(x.$, {
                    size: "sm",
                    variant: m ? "secondary" : "active",
                    icon: en.F,
                    text: h,
                    disabled: t || m || !o,
                    onClick: () => A(!1),
                    fullWidth: !0,
                }),
                a && !m
                    ? (0, n.jsx)(g.m, {
                          text: j.intl.string(j.t.wCrzut),
                          children: (0, n.jsx)(Q.K, {
                              variant: "secondary",
                              size: "sm",
                              icon: ei.v,
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
var eA = l(708727);
let eh = (0, m.A)((e) => {
    let {
            activity: t,
            embeddedActivity: l,
            user: i,
            applicationStream: a,
            className: m,
            guildId: x,
            channelId: g,
            source: y,
            buttonVariant: f,
            type: v,
            onAction: j,
        } = e,
        L = (0, c.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        O = v === b.O.STREAM_PREVIEW || null != a,
        k = (0, P.A)(t),
        z = k || O ? h.A.Direction.HORIZONTAL : h.A.Direction.VERTICAL,
        M = (0, c.bG)([S.A], () => (null != g ? S.A.getChannel(g) : null), [g]),
        D = null != M && (0, p.F9)(t),
        V = (0, _.A)("voice_channel_activity_actions", t?.application_id),
        R = z === h.A.Direction.VERTICAL;
    return (0, n.jsx)(h.A, {
        grow: 0,
        align: h.A.Align.STRETCH,
        direction: z,
        wrap: R ? h.A.Wrap.WRAP : h.A.Wrap.NO_WRAP,
        className: s()(m, eA.jx, R ? eA.Vd : eA.xM),
        children: (() => {
            if (!(0, C.Ay)(t)) {
                if ((0, E.A)(t))
                    return (0, n.jsx)(G, { platform: A.A.get(H.fg2.XBOX), variant: f, onAction: j, icon: o.Y });
                if (t?.platform === H.yTV.PS4 || t?.platform === H.yTV.PS5)
                    return (0, n.jsx)(G, { variant: f, platform: A.A.get(H.fg2.PLAYSTATION), onAction: j, icon: d.X });
            }
            if (V.length > 0) return (0, n.jsx)(Y.A, { distributorCTAConfigs: V, buttonVariant: "overlay-primary" });
            if (k) {
                let e = (0, n.jsx)(et, { activity: t, user: i, guildId: x, channelId: g, source: y, onAction: j }),
                    l = (0, n.jsx)(K, { activity: t, user: i, source: y, onAction: j });
                return (0, n.jsxs)(u.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, T.Cy)(t)) {
                let e = (0, T.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(w, { guildId: e.guildId, channelId: e.channelId, variant: f, onAction: j });
            }
            return O
                ? (0, n.jsx)(em, { isCurrentUser: L.id === i.id, applicationStream: a, onAction: j })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          D && (0, n.jsx)(N, { userId: i.id, channel: M, onAction: j }),
                          (0, n.jsx)(el.A, { activity: t, variant: D ? "secondary" : f, onAction: j }),
                          (0, n.jsx)(W.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: D ? "secondary" : f,
                              onAction: j,
                          }),
                          (0, n.jsx)(F, { activity: t, user: i, variant: D ? "secondary" : f, onAction: j }),
                          (0, n.jsx)(U, { user: i, activity: t, variant: D ? "secondary" : f, onAction: j }),
                      ],
                  });
        })(),
    });
});
