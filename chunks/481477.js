t.r(n), t.d(n, { default: () => eI });
var l = t(627968),
    i = t(17928),
    a = t(627363),
    s = t(91242),
    r = t(64700),
    o = t(536246),
    c = t(395678),
    u = t(667080);
function d(e) {
    let { application: n, queryParams: t, url: i } = e;
    return (0, l.jsx)(c.o, {
        allowPopups: (0, o.b)(n),
        referrerPolicy: "origin",
        url: i,
        queryParams: t,
        className: u.p,
        shouldRefocus: !1,
    });
}
var p = t(289873),
    m = t(475743),
    A = t(587895),
    x = t(574172),
    I = t(982484),
    h = t(933958),
    y = t(969151),
    f = t(503698),
    j = t.n(f),
    v = t(780645),
    C = t(990078),
    P = t(862482),
    T = t(43990),
    b = t(834730),
    g = t(922016),
    N = t(58149),
    k = t(717048),
    O = t(567249),
    _ = t(253932),
    w = t(246356),
    E = t(365199),
    L = t(688810),
    R = t(384059),
    U = t(709562),
    G = t(985018);
function S(e) {
    let { onClick: n, ...t } = e,
        { parentAnalyticsLocation: i } = (0, L.Ay)();
    return (0, l.jsx)(U.A, {
        label: G.intl.string(G.t["UKOtz+"]),
        iconComponent: E.j,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, R.X)(i, R.O.MORE), n(e);
        },
        ...t,
    });
}
var D = t(423562),
    F = t(520006),
    M = t(128286),
    W = t(619344),
    Y = t(734057),
    z = t(696451),
    K = t(287809),
    V = t(723702),
    B = t(427262),
    q = t(19575),
    H = t(475815),
    $ = t(795816),
    X = t(869003),
    Z = t(104171),
    J = t(47294),
    Q = t(728033),
    ee = t(652215),
    en = t(16961),
    et = t(316561);
let el = Z.DN.SIZE_24;
function ei(e) {
    let n,
        t,
        {
            hasActivity: a,
            applicationId: s,
            channelId: o,
            compositeInstanceId: c,
            userIds: u,
            isRichPresenceInvite: d,
            onConfirmClosePopout: p,
        } = e,
        m = (0, i.bG)([A.A], () => A.A.getApplication(s)),
        I = (0, i.bG)([Y.A], () => Y.A.getChannel(o)),
        h = _.Q_.useSetting(),
        y = (0, i.yK)(
            [z.Ay],
            () => (null == I || null == u ? [] : Array.from(u ?? []).map((e) => z.Ay.getMember(I.guild_id, e))),
            [I, u],
        ),
        f = r.useMemo(() => {
            let e = new Map();
            return (
                y.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [y]),
        E = r.useCallback(
            (e, n) => {
                if (null == e || e === Z.mt) return null;
                let t = f.get(e.id),
                    i = t?.nick ?? B.Ay.getName(e);
                return (0, l.jsx)(
                    C.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, l.jsx)(
                            "img",
                            { src: e.getAvatarURL(n?.guild_id, el), alt: i, className: et.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [f],
        ),
        L = (0, i.yK)(
            [K.default],
            () =>
                Array.from(u ?? [])
                    .map((e) => K.default.getUser(e))
                    .filter((e) => null != e),
            [u],
        ),
        {
            canStayOnTop: R,
            popoutWindowAlwaysOnTop: U,
            handleStayOnTop: $,
        } = ((n = (0, i.bG)([O.A], () => O.A.getIsAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT))),
        (t = r.useCallback((e) => {
            x.setAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: V.isPlatformEmbedded && q.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: n,
            handleStayOnTop: t,
        }),
        X = (0, en.G)(),
        {
            rootNode: ei,
            popoutWindow: ea,
            toggleFullScreen: es,
        } = (function () {
            let e,
                n,
                t,
                {
                    popoutWindow: l,
                    currentDocument: a,
                    rootNode: s,
                } = ((e = (0, i.bG)([O.A], () => O.A.getWindow(ee.MLl.ACTIVITY_POPOUT))),
                (n = r.useMemo(() => e?.window.document, [e])),
                (t = r.useMemo(() => n?.getElementById("app-mount"), [n])),
                { popoutWindow: e, currentDocument: n, rootNode: t }),
                [o, c] = r.useState(!1),
                u = r.useCallback(() => {
                    null == s || (o && (c(!1), (0, H.sP)(s, a)));
                }, [s, a, o]),
                d = r.useCallback(() => {
                    null != s && (o ? u() : (c(!0), (0, H.tl)(s)));
                }, [s, o, u]),
                p = r.useCallback(() => {
                    null != s && !(0, H._U)(s, a) && o && d();
                }, [s, a, o, d]);
            return (
                r.useEffect(
                    () => (
                        a?.addEventListener(H.Wb, p),
                        () => {
                            a?.removeEventListener(H.Wb, p);
                        }
                    ),
                    [a, p],
                ),
                { rootNode: s, popoutWindow: l, toggleFullScreen: d }
            );
        })(),
        er = r.useRef(null);
    if (null == m || !a) return null;
    let eo = (0, l.jsx)(k.A, { application: m, size: 24, className: et.Z2 });
    return (
        h && null != c && (eo = (0, l.jsx)(C.m, { asContainer: !0, text: c, position: "bottom", children: eo })),
        (0, l.jsx)(T.N, {
            theme: ee.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: j()(et.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: j()(et.ND, et.c8),
                            children: [
                                eo,
                                (0, l.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: et.SX,
                                    children: (0, l.jsx)(v.A, { children: m.name }),
                                }),
                                L.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: et.SC,
                                                  children: (0, l.jsx)(b.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)(Z.Ay, {
                                                  renderIcon: !1,
                                                  users: L,
                                                  size: el,
                                                  max: 6,
                                                  renderUser: (e) => E(e, I),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: j()(et.ND, et.fU),
                            children: [
                                (0, l.jsx)("div", { className: et.Rv }),
                                (0, l.jsxs)("div", {
                                    className: et.fc,
                                    children: [
                                        (0, l.jsx)(F.A, {
                                            appContext: ee.BRT.POPOUT,
                                            applicationId: s,
                                            channel: I,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: et.NS,
                                            size: P.$n.Sizes.TINY,
                                            look: P.$n.Looks.FILLED,
                                            buttonText: G.intl.string(G.t["6F9ivu"]),
                                            color: P.$n.Colors.TRANSPARENT,
                                        }),
                                        R
                                            ? (0, l.jsx)(W.A, { popoutWindowAlwaysOnTop: U, onToggleStayOnTop: $ })
                                            : null,
                                        X
                                            ? (0, l.jsx)(M.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, N.zV)(ee.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, J.A)({ onConfirm: p });
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(D.A, { node: ei, guestWindow: ea, onClick: es }),
                                        (0, l.jsx)(
                                            g.Y,
                                            {
                                                targetElementRef: er,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, l.jsx)(w.A, {
                                                        children: (0, l.jsx)(Q.default, {
                                                            application: m,
                                                            channelId: o,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    let { isShown: t } = n;
                                                    return (0, r.createElement)(S, {
                                                        ...e,
                                                        buttonRef: er,
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
function ea(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, i.bG)([h.Ay], () => h.Ay.getSelfEmbeddedActivities().get(n)),
        s = r.useCallback(async () => {
            await (0, $.od)(n, t ?? null), X.A.popInActivity();
        }, [n, t]);
    return (0, l.jsx)(ei, {
        hasActivity: null != a,
        applicationId: n,
        channelId: t,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: s,
    });
}
var es = t(376554);
function er(e) {
    let { activity: n, renderHeader: t, renderActivityIFrameWithLoadedData: a, isLoading: s = !1 } = e,
        o = r.useRef(null),
        c = (0, m.A)(n);
    r.useEffect(() => {
        null != n
            ? clearTimeout(o.current)
            : null != c &&
              null == n &&
              (o.current = window.setTimeout(() => {
                  (0, x.close)(ee.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [c, n]);
    let u = (0, i.bG)([A.A], () => {
        let e = n?.applicationId;
        return null == e ? void 0 : A.A.getApplication(e);
    });
    return (0, l.jsx)("div", {
        className: es.kL,
        children:
            null == n || null == u || s
                ? (0, l.jsx)(p.y, { className: es.pU })
                : (0, l.jsx)("div", {
                      className: es.U$,
                      children: (0, l.jsxs)("div", {
                          className: es.kq,
                          children: [
                              (0, l.jsx)("div", { className: es.N1, children: t({ application: u }) }),
                              (0, l.jsx)(I.A, { applicationId: u.id }),
                              (0, l.jsx)("div", { className: es.Wc, children: a({ application: u }) }),
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
        } = (0, i.cf)([h.Ay], () => {
            let e = h.Ay.getCurrentEmbeddedActivity(),
                n = (0, y.H)(e?.location),
                t = (0, y.D)(e?.location);
            return { embeddedActivity: e, channelId: n, guildId: t };
        }),
        a = (0, i.bG)([h.Ay], () => e?.applicationId != null && h.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        s = r.useCallback(
            (e) => {
                let { application: t } = e;
                return (0, l.jsx)(ea, { applicationId: t.id, channelId: n });
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
                return (0, l.jsx)(d, { application: a, queryParams: s, url: r });
            },
            [n, t, e],
        );
    return (0, l.jsx)(er, { activity: e, isLoading: a, renderHeader: s, renderActivityIFrameWithLoadedData: o });
}
var ec = t(625180),
    eu = t(809871);
function ed(e) {
    let { applicationId: n } = e,
        t = (0, i.bG)([s.A], () => s.A.getConnectedFrame()),
        a = r.useCallback(async () => {
            await ec.A.refreshProxyTicket({ applicationId: n }), eu.A.popInFrame();
        }, [n]);
    return (0, l.jsx)(ei, {
        hasActivity: null != t,
        applicationId: n,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: a,
        channelId: void 0,
    });
}
var ep = t(360469);
function em() {
    let e = (0, i.bG)([s.A], () => s.A.getConnectedFrame()),
        n = (0, i.bG)([s.A], () => e?.applicationId != null && s.A.isProxyTicketRefreshing(e.applicationId), [e]),
        t = r.useCallback((e) => {
            let { application: n } = e;
            return (0, l.jsx)(ed, { applicationId: n.id });
        }, []),
        a = r.useCallback(
            (n) => {
                let { application: t } = n,
                    i = {};
                null != e &&
                    ((i.instance_id = "example-cl-instance"),
                    (i.platform = ep.vu.DESKTOP),
                    null != e.proxyTicket && (i.discord_proxy_ticket = e.proxyTicket));
                let a = e?.url;
                return (0, l.jsx)(d, { application: t, queryParams: i, url: a });
            },
            [e],
        );
    return (0, l.jsx)(er, { activity: e, isLoading: n, renderHeader: t, renderActivityIFrameWithLoadedData: a });
}
var eA = t(979186),
    ex = t(620148);
function eI(e) {
    let { windowKey: n } = e,
        t = (0, ex.A)(),
        r = (0, i.bG)([s.A], () => s.A.getConnectedFrame()),
        { data: o } = (0, a.YY)(r?.applicationId),
        c = t?.name ?? o?.name ?? G.intl.string(G.t.IC5Ann);
    return (0, l.jsx)(eA.A, {
        withTitleBar: !0,
        windowKey: n,
        title: c,
        children: null != t ? (0, l.jsx)(eo, {}) : (0, l.jsx)(em, {}),
    });
}
