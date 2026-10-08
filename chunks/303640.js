(n.r(t), n.d(t, { default: () => eI }));
var l = n(477900),
    i = n(17928),
    a = n(627363),
    s = n(91242),
    r = n(582128),
    o = n(289873),
    c = n(475743),
    d = n(587895),
    u = n(477754),
    p = n(574172),
    m = n(850891),
    A = n(933958),
    I = n(969151),
    x = n(833147),
    h = n(503698),
    y = n.n(h),
    f = n(3026),
    j = n(862482),
    T = n(866665),
    v = n(43990),
    C = n(834730),
    P = n(922016),
    g = n(666860),
    b = n(717048),
    N = n(567249),
    O = n(885386),
    _ = n(246356),
    k = n(365199),
    E = n(688810),
    w = n(384059),
    L = n(204651),
    R = n(660183);
function U(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: i } = (0, E.Ay)();
    return (0, l.jsx)(L.A, {
        label: R.intl.string(R.t["UKOtz+"]),
        iconComponent: k.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            ((0, w.X)(i, w.O.MORE), t(e));
        },
        ...n,
    });
}
var M = n(423562),
    D = n(520006),
    S = n(128286),
    Y = n(619344),
    G = n(734057),
    W = n(696451),
    z = n(287809),
    F = n(723702),
    V = n(427262),
    B = n(19575),
    K = n(475815),
    H = n(795816),
    $ = n(104171),
    q = n(47294),
    X = n(73153),
    Z = n(728033),
    J = n(652215),
    Q = n(16961),
    ee = n(52464);
let et = $.DN.SIZE_24;
function en(e) {
    let t,
        n,
        {
            application: a,
            channelId: s,
            compositeInstanceId: o,
            userIds: c,
            isRichPresenceInvite: d,
            onConfirmClosePopout: u,
        } = e,
        m = (0, i.bG)([G.A], () => G.A.getChannel(s)),
        A = O.Q_.useSetting(),
        I = (0, i.yK)(
            [W.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => W.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        x = r.useMemo(() => {
            let e = new Map();
            return (
                I.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [I]),
        h = r.useCallback(
            (e, t) => {
                if (null == e || e === $.mt) return null;
                let n = x.get(e.id),
                    i = n?.nick ?? V.Ay.getName(e);
                return (0, l.jsx)(
                    T.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, l.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, et), alt: i, className: ee.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [x],
        ),
        k = (0, i.yK)(
            [z.default],
            () =>
                Array.from(c ?? [])
                    .map((e) => z.default.getUser(e))
                    .filter((e) => null != e),
            [c],
        ),
        {
            canStayOnTop: E,
            popoutWindowAlwaysOnTop: w,
            handleStayOnTop: L,
        } = ((t = (0, i.bG)([N.A], () => N.A.getIsAlwaysOnTop(J.MLl.ACTIVITY_POPOUT))),
        (n = r.useCallback((e) => {
            p.setAlwaysOnTop(J.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: F.isPlatformEmbedded && B.Ay.supportsFeature(J.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        H = (0, Q.G)(),
        {
            rootNode: X,
            popoutWindow: en,
            toggleFullScreen: el,
        } = (function () {
            let e,
                t,
                n,
                {
                    popoutWindow: l,
                    currentDocument: a,
                    rootNode: s,
                } = ((e = (0, i.bG)([N.A], () => N.A.getWindow(J.MLl.ACTIVITY_POPOUT))),
                (t = r.useMemo(() => e?.window.document, [e])),
                (n = r.useMemo(() => t?.getElementById("app-mount"), [t])),
                { popoutWindow: e, currentDocument: t, rootNode: n }),
                [o, c] = r.useState(!1),
                d = r.useCallback(() => {
                    null == s || (o && (c(!1), (0, K.sP)(s, a)));
                }, [s, a, o]),
                u = r.useCallback(() => {
                    null != s && (o ? d() : (c(!0), (0, K.tl)(s)));
                }, [s, o, d]),
                p = r.useCallback(() => {
                    null != s && !(0, K._U)(s, a) && o && u();
                }, [s, a, o, u]);
            return (
                r.useEffect(
                    () => (
                        a?.addEventListener(K.Wb, p),
                        () => {
                            a?.removeEventListener(K.Wb, p);
                        }
                    ),
                    [a, p],
                ),
                { rootNode: s, popoutWindow: l, toggleFullScreen: u }
            );
        })(),
        ei = r.useRef(null),
        ea = (0, l.jsx)(b.A, { application: a, size: 24, className: ee.Z2 });
    return (
        A && null != o && (ea = (0, l.jsx)(T.m, { asContainer: !0, text: o, position: "bottom", children: ea })),
        (0, l.jsx)(v.N, {
            theme: J.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: y()(ee.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: y()(ee.ND, ee.c8),
                            children: [
                                ea,
                                (0, l.jsx)(C.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: ee.SX,
                                    children: (0, l.jsx)(f.A, { children: a.name }),
                                }),
                                k.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: ee.SC,
                                                  children: (0, l.jsx)(C.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)($.Ay, {
                                                  renderIcon: !1,
                                                  users: k,
                                                  size: et,
                                                  max: 6,
                                                  renderUser: (e) => h(e, m),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: y()(ee.ND, ee.fU),
                            children: [
                                (0, l.jsx)("div", { className: ee.Rv }),
                                (0, l.jsxs)("div", {
                                    className: ee.fc,
                                    children: [
                                        (0, l.jsx)(D.A, {
                                            appContext: J.BRT.POPOUT,
                                            applicationId: a.id,
                                            channel: m,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: ee.NS,
                                            size: j.$n.Sizes.TINY,
                                            look: j.$n.Looks.FILLED,
                                            buttonText: R.intl.string(R.t["6F9ivu"]),
                                            color: j.$n.Colors.TRANSPARENT,
                                        }),
                                        E
                                            ? (0, l.jsx)(Y.A, { popoutWindowAlwaysOnTop: w, onToggleStayOnTop: L })
                                            : null,
                                        H
                                            ? (0, l.jsx)(S.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, g.zV)(J.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, q.A)({ onConfirm: u }));
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(M.A, { node: X, guestWindow: en, onClick: el }),
                                        (0, l.jsx)(
                                            P.Y,
                                            {
                                                targetElementRef: ei,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, l.jsx)(_.A, {
                                                        children: (0, l.jsx)(Z.default, {
                                                            application: a,
                                                            channelId: s,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, r.createElement)(U, {
                                                        ...e,
                                                        buttonRef: ei,
                                                        key: "more-options",
                                                        isActive: n,
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
    let { application: t, channelId: n } = e,
        a = (0, i.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivities().get(t.id)),
        s = r.useCallback(async () => {
            (await (0, H.od)(t.id, n ?? null), X.h.dispatch({ type: "EMBEDDED_ACTIVITY_POP_IN" }));
        }, [t.id, n]);
    return (0, l.jsx)(en, {
        application: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: s,
    });
}
var ei = n(835519);
function ea(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: a, isLoading: s = !1 } = e,
        u = r.useRef(null),
        A = (0, c.Ay)(t);
    r.useEffect(() => {
        null != t
            ? clearTimeout(u.current)
            : null != A &&
              null == t &&
              (u.current = window.setTimeout(() => {
                  (0, p.close)(J.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [A, t]);
    let I = (0, i.bG)([d.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : d.A.getApplication(e);
    });
    return (0, l.jsx)("div", {
        className: ei.kL,
        children:
            null == t || null == I || s
                ? (0, l.jsx)(o.y, { className: ei.pU })
                : (0, l.jsx)("div", {
                      className: ei.U$,
                      children: (0, l.jsxs)("div", {
                          className: ei.kq,
                          children: [
                              (0, l.jsx)("div", { className: ei.N1, children: n({ activity: t, application: I }) }),
                              (0, l.jsx)(m.A, { type: "embedded-activity", applicationId: I.id }),
                              (0, l.jsx)("div", { className: ei.Wc, children: a({ activity: t, application: I }) }),
                          ],
                      }),
                  }),
    });
}
function es() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n,
        } = (0, i.cf)([A.Ay], () => {
            let e = A.Ay.getCurrentEmbeddedActivity(),
                t = (0, I.H)(e?.location),
                n = (0, I.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        a = (0, i.bG)([A.Ay], () => e?.applicationId != null && A.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        s = r.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, l.jsx)(el, { application: n, channelId: t });
            },
            [t],
        ),
        o = r.useCallback(
            (i) => {
                let { application: a } = i,
                    s = {};
                null != e &&
                    ((s.instance_id = e.compositeInstanceId ?? e.launchId ?? ""),
                    (s.location_id = e.location?.id),
                    (s.launch_id = e.launchId),
                    (s.referrer_id = e.referrerId),
                    (s.custom_id = e.customId),
                    null != n && "" !== n && (s.guild_id = n),
                    null != t && "" !== t && (s.channel_id = t));
                let r = e?.url;
                return (0, l.jsx)(x.A, {
                    application: a,
                    queryParams: s,
                    url: r,
                    contextSource: { type: u.f.ACTIVITY, applicationId: a.id },
                });
            },
            [t, n, e],
        );
    return (0, l.jsx)(ea, { activity: e, isLoading: a, renderHeader: s, renderActivityIFrameWithLoadedData: o });
}
var er = n(625180),
    eo = n(567245);
function ec(e) {
    let { frame: t, application: n } = e,
        i = r.useCallback(async () => {
            (await er.A.refreshProxyTicket(t.id), (0, eo.E)());
        }, [t.id]);
    return (0, l.jsx)(en, { application: n, isRichPresenceInvite: !0, onConfirmClosePopout: i, channelId: void 0 });
}
var ed = n(269094),
    eu = n(165610);
function ep() {
    let e = (0, i.bG)([s.A], () => (0, eu.ny)(s.A.getMainFrame())),
        t = e?.data.proxyTicketRefreshing ?? !1;
    return (0, l.jsx)(ea, {
        activity: e,
        isLoading: t,
        renderHeader: (e) => {
            let { activity: t, application: n } = e;
            return (0, l.jsx)(ec, { frame: t, application: n });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: t, application: n } = e;
            return (0, l.jsx)(ed.A, { frame: t, application: n });
        },
    });
}
var em = n(979186),
    eA = n(620148);
function eI(e) {
    let { windowKey: t } = e,
        n = (0, eA.A)(),
        r = (0, i.bG)([s.A], () => s.A.getMainFrame()),
        { data: o } = (0, a.YY)(r?.applicationId),
        c = n?.name ?? o?.name ?? R.intl.string(R.t.IC5Ann);
    return (0, l.jsx)(em.A, {
        withTitleBar: !0,
        windowKey: t,
        title: c,
        children: null != n ? (0, l.jsx)(es, {}) : (0, l.jsx)(ep, {}),
    });
}
