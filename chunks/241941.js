(t.r(n), t.d(n, { default: () => eI }));
var i = t(477900),
    l = t(17928),
    a = t(627363),
    s = t(91242),
    o = t(582128),
    r = t(289873),
    c = t(475743),
    d = t(587895),
    u = t(477754),
    p = t(574172),
    m = t(850891),
    A = t(933958),
    x = t(969151),
    I = t(824613),
    h = t(833147),
    f = t(503698),
    j = t.n(f),
    y = t(3026),
    v = t(862482),
    C = t(866665),
    T = t(43990),
    g = t(834730),
    b = t(265872),
    P = t(666860),
    N = t(717048),
    O = t(567249),
    k = t(885386),
    _ = t(246356),
    E = t(365199),
    w = t(688810),
    L = t(384059),
    U = t(204651),
    R = t(105292);
function M(e) {
    let { onClick: n, ...t } = e,
        { parentAnalyticsLocation: l } = (0, w.Ay)();
    return (0, i.jsx)(U.A, {
        label: R.intl.string(R.t["UKOtz+"]),
        iconComponent: E.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            ((0, L.X)(l, L.O.MORE), n(e));
        },
        ...t,
    });
}
var S = t(423562),
    G = t(520006),
    W = t(128286),
    Y = t(619344),
    D = t(734057),
    z = t(696451),
    F = t(287809),
    V = t(723702),
    K = t(427262),
    B = t(19575),
    H = t(475815),
    $ = t(795816),
    q = t(104171),
    X = t(47294),
    Z = t(652934),
    J = t(728033),
    Q = t(652215),
    ee = t(16961),
    en = t(52464);
let et = q.DN.SIZE_24;
function ei(e) {
    let n,
        t,
        {
            application: a,
            channelId: s,
            compositeInstanceId: r,
            userIds: c,
            isRichPresenceInvite: d,
            onConfirmClosePopout: u,
        } = e,
        m = (0, l.bG)([D.A], () => D.A.getChannel(s)),
        A = k.Q_.useSetting(),
        x = (0, l.yK)(
            [z.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => z.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        I = o.useMemo(() => {
            let e = new Map();
            return (
                x.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [x]),
        h = o.useCallback(
            (e, n) => {
                if (null == e || e === q.mt) return null;
                let t = I.get(e.id),
                    l = t?.nick ?? K.Ay.getName(e);
                return (0, i.jsx)(
                    C.m,
                    {
                        asContainer: !0,
                        text: l,
                        position: "bottom",
                        children: (0, i.jsx)(
                            "img",
                            { src: e.getAvatarURL(n?.guild_id, et), alt: l, className: en.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [I],
        ),
        f = (0, l.yK)(
            [F.default],
            () =>
                Array.from(c ?? [])
                    .map((e) => F.default.getUser(e))
                    .filter((e) => null != e),
            [c],
        ),
        {
            canStayOnTop: E,
            popoutWindowAlwaysOnTop: w,
            handleStayOnTop: L,
        } = ((n = (0, l.bG)([O.A], () => O.A.getIsAlwaysOnTop(Q.MLl.ACTIVITY_POPOUT))),
        (t = o.useCallback((e) => {
            p.setAlwaysOnTop(Q.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: V.isPlatformEmbedded && B.Ay.supportsFeature(Q.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: n,
            handleStayOnTop: t,
        }),
        U = (0, ee.G)(),
        {
            rootNode: $,
            popoutWindow: Z,
            toggleFullScreen: ei,
        } = (function () {
            let e,
                n,
                t,
                {
                    popoutWindow: i,
                    currentDocument: a,
                    rootNode: s,
                } = ((e = (0, l.bG)([O.A], () => O.A.getWindow(Q.MLl.ACTIVITY_POPOUT))),
                (n = o.useMemo(() => e?.window.document, [e])),
                (t = o.useMemo(() => n?.getElementById("app-mount"), [n])),
                { popoutWindow: e, currentDocument: n, rootNode: t }),
                [r, c] = o.useState(!1),
                d = o.useCallback(() => {
                    null == s || (r && (c(!1), (0, H.sP)(s, a)));
                }, [s, a, r]),
                u = o.useCallback(() => {
                    null != s && (r ? d() : (c(!0), (0, H.tl)(s)));
                }, [s, r, d]),
                p = o.useCallback(() => {
                    null != s && !(0, H._U)(s, a) && r && u();
                }, [s, a, r, u]);
            return (
                o.useEffect(
                    () => (
                        a?.addEventListener(H.Wb, p),
                        () => {
                            a?.removeEventListener(H.Wb, p);
                        }
                    ),
                    [a, p],
                ),
                { rootNode: s, popoutWindow: i, toggleFullScreen: u }
            );
        })(),
        el = o.useRef(null),
        ea = (0, i.jsx)(N.A, { application: a, size: 24, className: en.Z2 });
    return (
        A && null != r && (ea = (0, i.jsx)(C.m, { asContainer: !0, text: r, position: "bottom", children: ea })),
        (0, i.jsx)(T.N, {
            theme: Q.NJ8.DARK,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: j()(en.kL, e),
                    children: [
                        (0, i.jsxs)("div", {
                            className: j()(en.ND, en.c8),
                            children: [
                                ea,
                                (0, i.jsx)(g.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: en.SX,
                                    children: (0, i.jsx)(y.A, { children: a.name }),
                                }),
                                f.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: en.SC,
                                                  children: (0, i.jsx)(g.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, i.jsx)(q.Ay, {
                                                  renderIcon: !1,
                                                  users: f,
                                                  size: et,
                                                  max: 6,
                                                  renderUser: (e) => h(e, m),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: j()(en.ND, en.fU),
                            children: [
                                (0, i.jsx)("div", { className: en.Rv }),
                                (0, i.jsxs)("div", {
                                    className: en.fc,
                                    children: [
                                        (0, i.jsx)(G.A, {
                                            appContext: Q.BRT.POPOUT,
                                            applicationId: a.id,
                                            channel: m,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: en.NS,
                                            size: v.$n.Sizes.TINY,
                                            look: v.$n.Looks.FILLED,
                                            buttonText: R.intl.string(R.t["6F9ivu"]),
                                            color: v.$n.Colors.TRANSPARENT,
                                        }),
                                        E
                                            ? (0, i.jsx)(Y.A, { popoutWindowAlwaysOnTop: w, onToggleStayOnTop: L })
                                            : null,
                                        U
                                            ? (0, i.jsx)(W.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, P.zV)(Q.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, X.A)({ onConfirm: u }));
                                                  },
                                              })
                                            : null,
                                        (0, i.jsx)(S.A, { node: $, guestWindow: Z, onClick: ei }),
                                        (0, i.jsx)(
                                            b.Y,
                                            {
                                                targetElementRef: el,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, i.jsx)(_.A, {
                                                        children: (0, i.jsx)(J.default, {
                                                            application: a,
                                                            channelId: s,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    let { isShown: t } = n;
                                                    return (0, o.createElement)(M, {
                                                        ...e,
                                                        buttonRef: el,
                                                        key: "more-options",
                                                        isActive: t,
                                                    });
                                                },
                                            },
                                            "more-options-popout",
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}
function el(e) {
    let { application: n, channelId: t } = e,
        a = (0, l.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivities().get(n.id)),
        s = o.useCallback(async () => {
            (await (0, $.od)(n.id, t ?? null), (0, Z.G)());
        }, [n.id, t]);
    return (0, i.jsx)(ei, {
        application: n,
        channelId: t,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: s,
    });
}
var ea = t(835519);
function es(e) {
    let { activity: n, renderHeader: t, renderActivityIFrameWithLoadedData: a, isLoading: s = !1 } = e,
        u = o.useRef(null),
        A = (0, c.Ay)(n);
    o.useEffect(() => {
        null != n
            ? clearTimeout(u.current)
            : null != A &&
              null == n &&
              (u.current = window.setTimeout(() => {
                  (0, p.close)(Q.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [A, n]);
    let x = (0, l.bG)([d.A], () => {
        let e = n?.applicationId;
        return null == e ? void 0 : d.A.getApplication(e);
    });
    return (0, i.jsx)("div", {
        className: ea.kL,
        children:
            null == n || null == x || s
                ? (0, i.jsx)(r.y, { className: ea.pU })
                : (0, i.jsx)("div", {
                      className: ea.U$,
                      children: (0, i.jsxs)("div", {
                          className: ea.kq,
                          children: [
                              (0, i.jsx)("div", { className: ea.N1, children: t({ activity: n, application: x }) }),
                              (0, i.jsx)(m.A, { type: "embedded-activity", applicationId: x.id }),
                              (0, i.jsx)("div", { className: ea.Wc, children: a({ activity: n, application: x }) }),
                          ],
                      }),
                  }),
    });
}
function eo() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t,
        } = (0, l.cf)([A.Ay], () => {
            let e = A.Ay.getCurrentEmbeddedActivity(),
                n = (0, x.H)(e?.location),
                t = (0, x.D)(e?.location);
            return { embeddedActivity: e, channelId: n, guildId: t };
        }),
        a = (0, l.bG)([A.Ay], () => e?.applicationId != null && A.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        s = o.useCallback(
            (e) => {
                let { application: t } = e;
                return (0, i.jsx)(el, { application: t, channelId: n });
            },
            [n],
        ),
        r = o.useCallback(
            (l) => {
                let { application: a } = l,
                    s = {};
                null != e &&
                    ((s.instance_id = e.compositeInstanceId ?? e.launchId ?? ""),
                    (s.location_id = e.location?.id),
                    (s.launch_id = e.launchId),
                    (s.referrer_id = e.referrerId),
                    (s.custom_id = e.customId),
                    null != t && "" !== t && (s.guild_id = t),
                    null != n && "" !== n && (s.channel_id = n));
                let o = e?.url;
                return (0, i.jsx)(h.A, {
                    application: a,
                    queryParams: s,
                    url: o,
                    onIframeMount: (e) => (0, I.hN)(a.id, e),
                    onIframeUnmount: (e) => (0, I.WO)(a.id, e),
                    contextSource: { type: u.f.ACTIVITY, applicationId: a.id },
                });
            },
            [n, t, e],
        );
    return (0, i.jsx)(es, { activity: e, isLoading: a, renderHeader: s, renderActivityIFrameWithLoadedData: r });
}
var er = t(625180),
    ec = t(567245);
function ed(e) {
    let { frame: n, application: t } = e,
        l = o.useCallback(async () => {
            (await er.A.refreshProxyTicket(n.id), (0, ec.E)());
        }, [n.id]);
    return (0, i.jsx)(ei, { application: t, isRichPresenceInvite: !0, onConfirmClosePopout: l, channelId: void 0 });
}
var eu = t(269094),
    ep = t(165610);
function em() {
    let e = (0, l.bG)([s.A], () => (0, ep.ny)(s.A.getMainFrame())),
        n = e?.data.proxyTicketRefreshing ?? !1;
    return (0, i.jsx)(es, {
        activity: e,
        isLoading: n,
        renderHeader: (e) => {
            let { activity: n, application: t } = e;
            return (0, i.jsx)(ed, { frame: n, application: t });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: n, application: t } = e;
            return (0, i.jsx)(eu.A, { frame: n, application: t });
        },
    });
}
var eA = t(979186),
    ex = t(620148);
function eI(e) {
    let { windowKey: n } = e,
        t = (0, ex.A)(),
        o = (0, l.bG)([s.A], () => s.A.getMainFrame()),
        { data: r } = (0, a.YY)(o?.applicationId),
        c = t?.name ?? r?.name ?? R.intl.string(R.t.IC5Ann);
    return (0, i.jsx)(eA.A, {
        withTitleBar: !0,
        windowKey: n,
        title: c,
        children: null != t ? (0, i.jsx)(eo, {}) : (0, i.jsx)(em, {}),
    });
}
