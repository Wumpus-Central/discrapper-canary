(t.r(n), t.d(n, { default: () => eA }));
var l = t(477900),
    i = t(17928),
    a = t(627363),
    s = t(91242),
    r = t(582128),
    o = t(289873),
    c = t(475743),
    d = t(587895),
    u = t(574172),
    p = t(850891),
    m = t(933958),
    A = t(969151),
    x = t(833147),
    I = t(503698),
    h = t.n(I),
    j = t(3026),
    y = t(862482),
    f = t(866665),
    v = t(43990),
    C = t(834730),
    T = t(922016),
    g = t(95561),
    b = t(717048),
    P = t(567249),
    N = t(885386),
    O = t(246356),
    k = t(365199),
    _ = t(688810),
    w = t(384059),
    E = t(204651),
    L = t(375708);
function R(e) {
    let { onClick: n, ...t } = e,
        { parentAnalyticsLocation: i } = (0, _.Ay)();
    return (0, l.jsx)(E.A, {
        label: L.intl.string(L.t["UKOtz+"]),
        iconComponent: k.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            ((0, w.X)(i, w.O.MORE), n(e));
        },
        ...t,
    });
}
var U = t(423562),
    M = t(520006),
    S = t(128286),
    D = t(619344),
    G = t(734057),
    W = t(696451),
    Y = t(287809),
    F = t(723702),
    z = t(427262),
    K = t(19575),
    V = t(475815),
    B = t(795816),
    H = t(869003),
    $ = t(104171),
    q = t(47294),
    X = t(728033),
    Z = t(652215),
    J = t(16961),
    Q = t(52464);
let ee = $.DN.SIZE_24;
function en(e) {
    let n,
        t,
        {
            application: a,
            channelId: s,
            compositeInstanceId: o,
            userIds: c,
            isRichPresenceInvite: d,
            onConfirmClosePopout: p,
        } = e,
        m = (0, i.bG)([G.A], () => G.A.getChannel(s)),
        A = N.Q_.useSetting(),
        x = (0, i.yK)(
            [W.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => W.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        I = r.useMemo(() => {
            let e = new Map();
            return (
                x.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [x]),
        k = r.useCallback(
            (e, n) => {
                if (null == e || e === $.mt) return null;
                let t = I.get(e.id),
                    i = t?.nick ?? z.Ay.getName(e);
                return (0, l.jsx)(
                    f.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, l.jsx)(
                            "img",
                            { src: e.getAvatarURL(n?.guild_id, ee), alt: i, className: Q.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [I],
        ),
        _ = (0, i.yK)(
            [Y.default],
            () =>
                Array.from(c ?? [])
                    .map((e) => Y.default.getUser(e))
                    .filter((e) => null != e),
            [c],
        ),
        {
            canStayOnTop: w,
            popoutWindowAlwaysOnTop: E,
            handleStayOnTop: B,
        } = ((n = (0, i.bG)([P.A], () => P.A.getIsAlwaysOnTop(Z.MLl.ACTIVITY_POPOUT))),
        (t = r.useCallback((e) => {
            u.setAlwaysOnTop(Z.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: F.isPlatformEmbedded && K.Ay.supportsFeature(Z.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: n,
            handleStayOnTop: t,
        }),
        H = (0, J.G)(),
        {
            rootNode: en,
            popoutWindow: et,
            toggleFullScreen: el,
        } = (function () {
            let e,
                n,
                t,
                {
                    popoutWindow: l,
                    currentDocument: a,
                    rootNode: s,
                } = ((e = (0, i.bG)([P.A], () => P.A.getWindow(Z.MLl.ACTIVITY_POPOUT))),
                (n = r.useMemo(() => e?.window.document, [e])),
                (t = r.useMemo(() => n?.getElementById("app-mount"), [n])),
                { popoutWindow: e, currentDocument: n, rootNode: t }),
                [o, c] = r.useState(!1),
                d = r.useCallback(() => {
                    null == s || (o && (c(!1), (0, V.sP)(s, a)));
                }, [s, a, o]),
                u = r.useCallback(() => {
                    null != s && (o ? d() : (c(!0), (0, V.tl)(s)));
                }, [s, o, d]),
                p = r.useCallback(() => {
                    null != s && !(0, V._U)(s, a) && o && u();
                }, [s, a, o, u]);
            return (
                r.useEffect(
                    () => (
                        a?.addEventListener(V.Wb, p),
                        () => {
                            a?.removeEventListener(V.Wb, p);
                        }
                    ),
                    [a, p],
                ),
                { rootNode: s, popoutWindow: l, toggleFullScreen: u }
            );
        })(),
        ei = r.useRef(null),
        ea = (0, l.jsx)(b.A, { application: a, size: 24, className: Q.Z2 });
    return (
        A && null != o && (ea = (0, l.jsx)(f.m, { asContainer: !0, text: o, position: "bottom", children: ea })),
        (0, l.jsx)(v.N, {
            theme: Z.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: h()(Q.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: h()(Q.ND, Q.c8),
                            children: [
                                ea,
                                (0, l.jsx)(C.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: Q.SX,
                                    children: (0, l.jsx)(j.A, { children: a.name }),
                                }),
                                _.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: Q.SC,
                                                  children: (0, l.jsx)(C.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)($.Ay, {
                                                  renderIcon: !1,
                                                  users: _,
                                                  size: ee,
                                                  max: 6,
                                                  renderUser: (e) => k(e, m),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: h()(Q.ND, Q.fU),
                            children: [
                                (0, l.jsx)("div", { className: Q.Rv }),
                                (0, l.jsxs)("div", {
                                    className: Q.fc,
                                    children: [
                                        (0, l.jsx)(M.A, {
                                            appContext: Z.BRT.POPOUT,
                                            applicationId: a.id,
                                            channel: m,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: Q.NS,
                                            size: y.$n.Sizes.TINY,
                                            look: y.$n.Looks.FILLED,
                                            buttonText: L.intl.string(L.t["6F9ivu"]),
                                            color: y.$n.Colors.TRANSPARENT,
                                        }),
                                        w
                                            ? (0, l.jsx)(D.A, { popoutWindowAlwaysOnTop: E, onToggleStayOnTop: B })
                                            : null,
                                        H
                                            ? (0, l.jsx)(S.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, g.zV)(Z.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, q.A)({ onConfirm: p }));
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(U.A, { node: en, guestWindow: et, onClick: el }),
                                        (0, l.jsx)(
                                            T.Y,
                                            {
                                                targetElementRef: ei,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, l.jsx)(O.A, {
                                                        children: (0, l.jsx)(X.default, {
                                                            application: a,
                                                            channelId: s,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    let { isShown: t } = n;
                                                    return (0, r.createElement)(R, {
                                                        ...e,
                                                        buttonRef: ei,
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
function et(e) {
    let { application: n, channelId: t } = e,
        a = (0, i.bG)([m.Ay], () => m.Ay.getSelfEmbeddedActivities().get(n.id)),
        s = r.useCallback(async () => {
            (await (0, B.od)(n.id, t ?? null), H.A.popInActivity());
        }, [n.id, t]);
    return (0, l.jsx)(en, {
        application: n,
        channelId: t,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: s,
    });
}
var el = t(835519);
function ei(e) {
    let { activity: n, renderHeader: t, renderActivityIFrameWithLoadedData: a, isLoading: s = !1 } = e,
        m = r.useRef(null),
        A = (0, c.Ay)(n);
    r.useEffect(() => {
        null != n
            ? clearTimeout(m.current)
            : null != A &&
              null == n &&
              (m.current = window.setTimeout(() => {
                  (0, u.close)(Z.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [A, n]);
    let x = (0, i.bG)([d.A], () => {
        let e = n?.applicationId;
        return null == e ? void 0 : d.A.getApplication(e);
    });
    return (0, l.jsx)("div", {
        className: el.kL,
        children:
            null == n || null == x || s
                ? (0, l.jsx)(o.y, { className: el.pU })
                : (0, l.jsx)("div", {
                      className: el.U$,
                      children: (0, l.jsxs)("div", {
                          className: el.kq,
                          children: [
                              (0, l.jsx)("div", { className: el.N1, children: t({ activity: n, application: x }) }),
                              (0, l.jsx)(p.A, { type: "embedded-activity", applicationId: x.id }),
                              (0, l.jsx)("div", { className: el.Wc, children: a({ activity: n, application: x }) }),
                          ],
                      }),
                  }),
    });
}
function ea() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t,
        } = (0, i.cf)([m.Ay], () => {
            let e = m.Ay.getCurrentEmbeddedActivity(),
                n = (0, A.H)(e?.location),
                t = (0, A.D)(e?.location);
            return { embeddedActivity: e, channelId: n, guildId: t };
        }),
        a = (0, i.bG)([m.Ay], () => e?.applicationId != null && m.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        s = r.useCallback(
            (e) => {
                let { application: t } = e;
                return (0, l.jsx)(et, { application: t, channelId: n });
            },
            [n],
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
                    null != t && "" !== t && (s.guild_id = t),
                    null != n && "" !== n && (s.channel_id = n));
                let r = e?.url;
                return (0, l.jsx)(x.A, { application: a, queryParams: s, url: r });
            },
            [n, t, e],
        );
    return (0, l.jsx)(ei, { activity: e, isLoading: a, renderHeader: s, renderActivityIFrameWithLoadedData: o });
}
var es = t(625180),
    er = t(809871);
function eo(e) {
    let { frame: n, application: t } = e,
        i = r.useCallback(async () => {
            (await es.A.refreshProxyTicket(n.id), er.A.popInFrame());
        }, [n.id]);
    return (0, l.jsx)(en, { application: t, isRichPresenceInvite: !0, onConfirmClosePopout: i, channelId: void 0 });
}
var ec = t(269094),
    ed = t(165610);
function eu() {
    let e = (0, i.bG)([s.A], () => (0, ed.ny)(s.A.getMainFrame())),
        n = e?.data.proxyTicketRefreshing ?? !1;
    return (0, l.jsx)(ei, {
        activity: e,
        isLoading: n,
        renderHeader: (e) => {
            let { activity: n, application: t } = e;
            return (0, l.jsx)(eo, { frame: n, application: t });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: n, application: t } = e;
            return (0, l.jsx)(ec.A, { frame: n, application: t });
        },
    });
}
var ep = t(979186),
    em = t(620148);
function eA(e) {
    let { windowKey: n } = e,
        t = (0, em.A)(),
        r = (0, i.bG)([s.A], () => s.A.getMainFrame()),
        { data: o } = (0, a.YY)(r?.applicationId),
        c = t?.name ?? o?.name ?? L.intl.string(L.t.IC5Ann);
    return (0, l.jsx)(ep.A, {
        withTitleBar: !0,
        windowKey: n,
        title: c,
        children: null != t ? (0, l.jsx)(ea, {}) : (0, l.jsx)(eu, {}),
    });
}
