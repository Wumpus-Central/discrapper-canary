(n.r(t), n.d(t, { default: () => ex }));
var i = n(477900),
    l = n(17928),
    a = n(627363),
    s = n(91242),
    o = n(582128),
    r = n(289873),
    c = n(475743),
    d = n(587895),
    u = n(477754),
    p = n(574172),
    m = n(850891),
    A = n(933958),
    x = n(969151),
    I = n(833147),
    h = n(503698),
    y = n.n(h),
    f = n(3026),
    j = n(862482),
    v = n(866665),
    C = n(43990),
    T = n(834730),
    g = n(922016),
    b = n(666860),
    P = n(717048),
    N = n(567249),
    O = n(885386),
    k = n(246356),
    _ = n(365199),
    w = n(688810),
    E = n(384059),
    L = n(204651),
    R = n(660183);
function U(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: l } = (0, w.Ay)();
    return (0, i.jsx)(L.A, {
        label: R.intl.string(R.t["UKOtz+"]),
        iconComponent: _.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            ((0, E.X)(l, E.O.MORE), t(e));
        },
        ...n,
    });
}
var M = n(423562),
    S = n(520006),
    Y = n(128286),
    D = n(619344),
    G = n(734057),
    W = n(696451),
    F = n(287809),
    z = n(723702),
    V = n(427262),
    K = n(19575),
    B = n(475815),
    H = n(795816),
    $ = n(869003),
    q = n(104171),
    X = n(47294),
    Z = n(728033),
    J = n(652215),
    Q = n(16961),
    ee = n(52464);
let et = q.DN.SIZE_24;
function en(e) {
    let t,
        n,
        {
            application: a,
            channelId: s,
            compositeInstanceId: r,
            userIds: c,
            isRichPresenceInvite: d,
            onConfirmClosePopout: u,
        } = e,
        m = (0, l.bG)([G.A], () => G.A.getChannel(s)),
        A = O.Q_.useSetting(),
        x = (0, l.yK)(
            [W.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => W.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        I = o.useMemo(() => {
            let e = new Map();
            return (
                x.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [x]),
        h = o.useCallback(
            (e, t) => {
                if (null == e || e === q.mt) return null;
                let n = I.get(e.id),
                    l = n?.nick ?? V.Ay.getName(e);
                return (0, i.jsx)(
                    v.m,
                    {
                        asContainer: !0,
                        text: l,
                        position: "bottom",
                        children: (0, i.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, et), alt: l, className: ee.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [I],
        ),
        _ = (0, l.yK)(
            [F.default],
            () =>
                Array.from(c ?? [])
                    .map((e) => F.default.getUser(e))
                    .filter((e) => null != e),
            [c],
        ),
        {
            canStayOnTop: w,
            popoutWindowAlwaysOnTop: E,
            handleStayOnTop: L,
        } = ((t = (0, l.bG)([N.A], () => N.A.getIsAlwaysOnTop(J.MLl.ACTIVITY_POPOUT))),
        (n = o.useCallback((e) => {
            p.setAlwaysOnTop(J.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: z.isPlatformEmbedded && K.Ay.supportsFeature(J.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        H = (0, Q.G)(),
        {
            rootNode: $,
            popoutWindow: en,
            toggleFullScreen: ei,
        } = (function () {
            let e,
                t,
                n,
                {
                    popoutWindow: i,
                    currentDocument: a,
                    rootNode: s,
                } = ((e = (0, l.bG)([N.A], () => N.A.getWindow(J.MLl.ACTIVITY_POPOUT))),
                (t = o.useMemo(() => e?.window.document, [e])),
                (n = o.useMemo(() => t?.getElementById("app-mount"), [t])),
                { popoutWindow: e, currentDocument: t, rootNode: n }),
                [r, c] = o.useState(!1),
                d = o.useCallback(() => {
                    null == s || (r && (c(!1), (0, B.sP)(s, a)));
                }, [s, a, r]),
                u = o.useCallback(() => {
                    null != s && (r ? d() : (c(!0), (0, B.tl)(s)));
                }, [s, r, d]),
                p = o.useCallback(() => {
                    null != s && !(0, B._U)(s, a) && r && u();
                }, [s, a, r, u]);
            return (
                o.useEffect(
                    () => (
                        a?.addEventListener(B.Wb, p),
                        () => {
                            a?.removeEventListener(B.Wb, p);
                        }
                    ),
                    [a, p],
                ),
                { rootNode: s, popoutWindow: i, toggleFullScreen: u }
            );
        })(),
        el = o.useRef(null),
        ea = (0, i.jsx)(P.A, { application: a, size: 24, className: ee.Z2 });
    return (
        A && null != r && (ea = (0, i.jsx)(v.m, { asContainer: !0, text: r, position: "bottom", children: ea })),
        (0, i.jsx)(C.N, {
            theme: J.NJ8.DARK,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: y()(ee.kL, e),
                    children: [
                        (0, i.jsxs)("div", {
                            className: y()(ee.ND, ee.c8),
                            children: [
                                ea,
                                (0, i.jsx)(T.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: ee.SX,
                                    children: (0, i.jsx)(f.A, { children: a.name }),
                                }),
                                _.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: ee.SC,
                                                  children: (0, i.jsx)(T.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, i.jsx)(q.Ay, {
                                                  renderIcon: !1,
                                                  users: _,
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
                            className: y()(ee.ND, ee.fU),
                            children: [
                                (0, i.jsx)("div", { className: ee.Rv }),
                                (0, i.jsxs)("div", {
                                    className: ee.fc,
                                    children: [
                                        (0, i.jsx)(S.A, {
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
                                        w
                                            ? (0, i.jsx)(D.A, { popoutWindowAlwaysOnTop: E, onToggleStayOnTop: L })
                                            : null,
                                        H
                                            ? (0, i.jsx)(Y.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, b.zV)(J.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, X.A)({ onConfirm: u }));
                                                  },
                                              })
                                            : null,
                                        (0, i.jsx)(M.A, { node: $, guestWindow: en, onClick: ei }),
                                        (0, i.jsx)(
                                            g.Y,
                                            {
                                                targetElementRef: el,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, i.jsx)(k.A, {
                                                        children: (0, i.jsx)(Z.default, {
                                                            application: a,
                                                            channelId: s,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, o.createElement)(U, {
                                                        ...e,
                                                        buttonRef: el,
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
function ei(e) {
    let { application: t, channelId: n } = e,
        a = (0, l.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivities().get(t.id)),
        s = o.useCallback(async () => {
            (await (0, H.od)(t.id, n ?? null), $.A.popInActivity());
        }, [t.id, n]);
    return (0, i.jsx)(en, {
        application: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: s,
    });
}
var el = n(835519);
function ea(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: a, isLoading: s = !1 } = e,
        u = o.useRef(null),
        A = (0, c.Ay)(t);
    o.useEffect(() => {
        null != t
            ? clearTimeout(u.current)
            : null != A &&
              null == t &&
              (u.current = window.setTimeout(() => {
                  (0, p.close)(J.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [A, t]);
    let x = (0, l.bG)([d.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : d.A.getApplication(e);
    });
    return (0, i.jsx)("div", {
        className: el.kL,
        children:
            null == t || null == x || s
                ? (0, i.jsx)(r.y, { className: el.pU })
                : (0, i.jsx)("div", {
                      className: el.U$,
                      children: (0, i.jsxs)("div", {
                          className: el.kq,
                          children: [
                              (0, i.jsx)("div", { className: el.N1, children: n({ activity: t, application: x }) }),
                              (0, i.jsx)(m.A, { type: "embedded-activity", applicationId: x.id }),
                              (0, i.jsx)("div", { className: el.Wc, children: a({ activity: t, application: x }) }),
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
        } = (0, l.cf)([A.Ay], () => {
            let e = A.Ay.getCurrentEmbeddedActivity(),
                t = (0, x.H)(e?.location),
                n = (0, x.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        a = (0, l.bG)([A.Ay], () => e?.applicationId != null && A.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        s = o.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, i.jsx)(ei, { application: n, channelId: t });
            },
            [t],
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
                    null != n && "" !== n && (s.guild_id = n),
                    null != t && "" !== t && (s.channel_id = t));
                let o = e?.url;
                return (0, i.jsx)(I.A, {
                    application: a,
                    queryParams: s,
                    url: o,
                    contextSource: { type: u.f.ACTIVITY, applicationId: a.id },
                });
            },
            [t, n, e],
        );
    return (0, i.jsx)(ea, { activity: e, isLoading: a, renderHeader: s, renderActivityIFrameWithLoadedData: r });
}
var eo = n(625180),
    er = n(809871);
function ec(e) {
    let { frame: t, application: n } = e,
        l = o.useCallback(async () => {
            (await eo.A.refreshProxyTicket(t.id), er.A.popInFrame());
        }, [t.id]);
    return (0, i.jsx)(en, { application: n, isRichPresenceInvite: !0, onConfirmClosePopout: l, channelId: void 0 });
}
var ed = n(269094),
    eu = n(165610);
function ep() {
    let e = (0, l.bG)([s.A], () => (0, eu.ny)(s.A.getMainFrame())),
        t = e?.data.proxyTicketRefreshing ?? !1;
    return (0, i.jsx)(ea, {
        activity: e,
        isLoading: t,
        renderHeader: (e) => {
            let { activity: t, application: n } = e;
            return (0, i.jsx)(ec, { frame: t, application: n });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: t, application: n } = e;
            return (0, i.jsx)(ed.A, { frame: t, application: n });
        },
    });
}
var em = n(979186),
    eA = n(620148);
function ex(e) {
    let { windowKey: t } = e,
        n = (0, eA.A)(),
        o = (0, l.bG)([s.A], () => s.A.getMainFrame()),
        { data: r } = (0, a.YY)(o?.applicationId),
        c = n?.name ?? r?.name ?? R.intl.string(R.t.IC5Ann);
    return (0, i.jsx)(em.A, {
        withTitleBar: !0,
        windowKey: t,
        title: c,
        children: null != n ? (0, i.jsx)(es, {}) : (0, i.jsx)(ep, {}),
    });
}
