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
    I = n(969151),
    x = n(824613),
    h = n(833147),
    f = n(503698),
    y = n.n(f),
    j = n(3026),
    T = n(862482),
    v = n(866665),
    C = n(43990),
    P = n(834730),
    g = n(265872),
    b = n(666860),
    N = n(717048),
    O = n(567249),
    _ = n(885386),
    k = n(246356),
    E = n(365199),
    w = n(688810),
    L = n(384059),
    U = n(204651),
    R = n(105292);
function M(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: l } = (0, w.Ay)();
    return (0, i.jsx)(U.A, {
        label: R.intl.string(R.t["UKOtz+"]),
        iconComponent: E.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            ((0, L.X)(l, L.O.MORE), t(e));
        },
        ...n,
    });
}
var D = n(423562),
    S = n(520006),
    Y = n(128286),
    W = n(619344),
    G = n(734057),
    z = n(696451),
    F = n(287809),
    V = n(723702),
    B = n(427262),
    K = n(19575),
    H = n(475815),
    $ = n(795816),
    q = n(104171),
    X = n(47294),
    Z = n(73153),
    J = n(728033),
    Q = n(652215),
    ee = n(16961),
    et = n(52464);
let en = q.DN.SIZE_24;
function ei(e) {
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
        A = _.Q_.useSetting(),
        I = (0, l.yK)(
            [z.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => z.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        x = o.useMemo(() => {
            let e = new Map();
            return (
                I.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [I]),
        h = o.useCallback(
            (e, t) => {
                if (null == e || e === q.mt) return null;
                let n = x.get(e.id),
                    l = n?.nick ?? B.Ay.getName(e);
                return (0, i.jsx)(
                    v.m,
                    {
                        asContainer: !0,
                        text: l,
                        position: "bottom",
                        children: (0, i.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, en), alt: l, className: et.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [x],
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
        } = ((t = (0, l.bG)([O.A], () => O.A.getIsAlwaysOnTop(Q.MLl.ACTIVITY_POPOUT))),
        (n = o.useCallback((e) => {
            p.setAlwaysOnTop(Q.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: V.isPlatformEmbedded && K.Ay.supportsFeature(Q.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        U = (0, ee.G)(),
        {
            rootNode: $,
            popoutWindow: Z,
            toggleFullScreen: ei,
        } = (function () {
            let e,
                t,
                n,
                {
                    popoutWindow: i,
                    currentDocument: a,
                    rootNode: s,
                } = ((e = (0, l.bG)([O.A], () => O.A.getWindow(Q.MLl.ACTIVITY_POPOUT))),
                (t = o.useMemo(() => e?.window.document, [e])),
                (n = o.useMemo(() => t?.getElementById("app-mount"), [t])),
                { popoutWindow: e, currentDocument: t, rootNode: n }),
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
        ea = (0, i.jsx)(N.A, { application: a, size: 24, className: et.Z2 });
    return (
        A && null != r && (ea = (0, i.jsx)(v.m, { asContainer: !0, text: r, position: "bottom", children: ea })),
        (0, i.jsx)(C.N, {
            theme: Q.NJ8.DARK,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: y()(et.kL, e),
                    children: [
                        (0, i.jsxs)("div", {
                            className: y()(et.ND, et.c8),
                            children: [
                                ea,
                                (0, i.jsx)(P.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: et.SX,
                                    children: (0, i.jsx)(j.A, { children: a.name }),
                                }),
                                f.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: et.SC,
                                                  children: (0, i.jsx)(P.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, i.jsx)(q.Ay, {
                                                  renderIcon: !1,
                                                  users: f,
                                                  size: en,
                                                  max: 6,
                                                  renderUser: (e) => h(e, m),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: y()(et.ND, et.fU),
                            children: [
                                (0, i.jsx)("div", { className: et.Rv }),
                                (0, i.jsxs)("div", {
                                    className: et.fc,
                                    children: [
                                        (0, i.jsx)(S.A, {
                                            appContext: Q.BRT.POPOUT,
                                            applicationId: a.id,
                                            channel: m,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: et.NS,
                                            size: T.$n.Sizes.TINY,
                                            look: T.$n.Looks.FILLED,
                                            buttonText: R.intl.string(R.t["6F9ivu"]),
                                            color: T.$n.Colors.TRANSPARENT,
                                        }),
                                        E
                                            ? (0, i.jsx)(W.A, { popoutWindowAlwaysOnTop: w, onToggleStayOnTop: L })
                                            : null,
                                        U
                                            ? (0, i.jsx)(Y.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, b.zV)(Q.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, X.A)({ onConfirm: u }));
                                                  },
                                              })
                                            : null,
                                        (0, i.jsx)(D.A, { node: $, guestWindow: Z, onClick: ei }),
                                        (0, i.jsx)(
                                            g.Y,
                                            {
                                                targetElementRef: el,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, i.jsx)(k.A, {
                                                        children: (0, i.jsx)(J.default, {
                                                            application: a,
                                                            channelId: s,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, o.createElement)(M, {
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
function el(e) {
    let { application: t, channelId: n } = e,
        a = (0, l.bG)([A.Ay], () => A.Ay.getSelfEmbeddedActivities().get(t.id)),
        s = o.useCallback(async () => {
            (await (0, $.od)(t.id, n ?? null), Z.h.dispatch({ type: "EMBEDDED_ACTIVITY_POP_IN" }));
        }, [t.id, n]);
    return (0, i.jsx)(ei, {
        application: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: s,
    });
}
var ea = n(835519);
function es(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: a, isLoading: s = !1 } = e,
        u = o.useRef(null),
        A = (0, c.Ay)(t);
    o.useEffect(() => {
        null != t
            ? clearTimeout(u.current)
            : null != A &&
              null == t &&
              (u.current = window.setTimeout(() => {
                  (0, p.close)(Q.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [A, t]);
    let I = (0, l.bG)([d.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : d.A.getApplication(e);
    });
    return (0, i.jsx)("div", {
        className: ea.kL,
        children:
            null == t || null == I || s
                ? (0, i.jsx)(r.y, { className: ea.pU })
                : (0, i.jsx)("div", {
                      className: ea.U$,
                      children: (0, i.jsxs)("div", {
                          className: ea.kq,
                          children: [
                              (0, i.jsx)("div", { className: ea.N1, children: n({ activity: t, application: I }) }),
                              (0, i.jsx)(m.A, { type: "embedded-activity", applicationId: I.id }),
                              (0, i.jsx)("div", { className: ea.Wc, children: a({ activity: t, application: I }) }),
                          ],
                      }),
                  }),
    });
}
function eo() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n,
        } = (0, l.cf)([A.Ay], () => {
            let e = A.Ay.getCurrentEmbeddedActivity(),
                t = (0, I.H)(e?.location),
                n = (0, I.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        a = (0, l.bG)([A.Ay], () => e?.applicationId != null && A.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        s = o.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, i.jsx)(el, { application: n, channelId: t });
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
                return (0, i.jsx)(h.A, {
                    application: a,
                    queryParams: s,
                    url: o,
                    onIframeMount: (e) => (0, x.hN)(a.id, e),
                    onIframeUnmount: (e) => (0, x.WO)(a.id, e),
                    contextSource: { type: u.f.ACTIVITY, applicationId: a.id },
                });
            },
            [t, n, e],
        );
    return (0, i.jsx)(es, { activity: e, isLoading: a, renderHeader: s, renderActivityIFrameWithLoadedData: r });
}
var er = n(625180),
    ec = n(567245);
function ed(e) {
    let { frame: t, application: n } = e,
        l = o.useCallback(async () => {
            (await er.A.refreshProxyTicket(t.id), (0, ec.E)());
        }, [t.id]);
    return (0, i.jsx)(ei, { application: n, isRichPresenceInvite: !0, onConfirmClosePopout: l, channelId: void 0 });
}
var eu = n(269094),
    ep = n(165610);
function em() {
    let e = (0, l.bG)([s.A], () => (0, ep.ny)(s.A.getMainFrame())),
        t = e?.data.proxyTicketRefreshing ?? !1;
    return (0, i.jsx)(es, {
        activity: e,
        isLoading: t,
        renderHeader: (e) => {
            let { activity: t, application: n } = e;
            return (0, i.jsx)(ed, { frame: t, application: n });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: t, application: n } = e;
            return (0, i.jsx)(eu.A, { frame: t, application: n });
        },
    });
}
var eA = n(979186),
    eI = n(620148);
function ex(e) {
    let { windowKey: t } = e,
        n = (0, eI.A)(),
        o = (0, l.bG)([s.A], () => s.A.getMainFrame()),
        { data: r } = (0, a.YY)(o?.applicationId),
        c = n?.name ?? r?.name ?? R.intl.string(R.t.IC5Ann);
    return (0, i.jsx)(eA.A, {
        withTitleBar: !0,
        windowKey: t,
        title: c,
        children: null != n ? (0, i.jsx)(eo, {}) : (0, i.jsx)(em, {}),
    });
}
