n.r(t), n.d(t, { default: () => ex });
var l = n(627968),
    i = n(17928),
    a = n(627363),
    r = n(91242),
    o = n(64700),
    s = n(536246),
    c = n(395678),
    d = n(667080);
function u(e) {
    let { application: t, queryParams: n, url: i } = e;
    return (0, l.jsx)(c.o, {
        allowPopups: (0, s.b)(t),
        referrerPolicy: "origin",
        url: i,
        queryParams: n,
        className: d.p,
        shouldRefocus: !1,
    });
}
var p = n(289873),
    m = n(475743),
    A = n(587895),
    h = n(574172),
    x = n(982484),
    v = n(933958),
    f = n(969151),
    I = n(503698),
    g = n.n(I),
    C = n(3026),
    _ = n(990078),
    y = n(862482),
    b = n(43990),
    j = n(834730),
    T = n(922016),
    N = n(58149),
    P = n(717048),
    w = n(567249),
    k = n(253932),
    O = n(246356),
    L = n(365199),
    E = n(688810),
    R = n(384059),
    S = n(709562),
    U = n(985018);
function M(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: i } = (0, E.Ay)();
    return (0, l.jsx)(S.A, {
        label: U.intl.string(U.t["UKOtz+"]),
        iconComponent: L.j,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, R.X)(i, R.O.MORE), t(e);
        },
        ...n,
    });
}
var G = n(423562),
    D = n(520006),
    W = n(128286),
    F = n(619344),
    V = n(734057),
    Y = n(696451),
    B = n(287809),
    K = n(723702),
    Z = n(427262),
    q = n(19575),
    H = n(475815),
    z = n(795816),
    $ = n(869003),
    X = n(104171),
    J = n(47294),
    Q = n(728033),
    ee = n(652215),
    et = n(16961),
    en = n(316561);
let el = X.DN.SIZE_24;
function ei(e) {
    let t,
        n,
        {
            hasActivity: a,
            applicationId: r,
            channelId: s,
            compositeInstanceId: c,
            userIds: d,
            isRichPresenceInvite: u,
            onConfirmClosePopout: p,
        } = e,
        m = (0, i.bG)([A.A], () => A.A.getApplication(r)),
        x = (0, i.bG)([V.A], () => V.A.getChannel(s)),
        v = k.Q_.useSetting(),
        f = (0, i.yK)(
            [Y.Ay],
            () => (null == x || null == d ? [] : Array.from(d ?? []).map((e) => Y.Ay.getMember(x.guild_id, e))),
            [x, d],
        ),
        I = o.useMemo(() => {
            let e = new Map();
            return (
                f.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [f]),
        L = o.useCallback(
            (e, t) => {
                if (null == e || e === X.mt) return null;
                let n = I.get(e.id),
                    i = n?.nick ?? Z.Ay.getName(e);
                return (0, l.jsx)(
                    _.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, l.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, el), alt: i, className: en.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [I],
        ),
        E = (0, i.yK)(
            [B.default],
            () =>
                Array.from(d ?? [])
                    .map((e) => B.default.getUser(e))
                    .filter((e) => null != e),
            [d],
        ),
        {
            canStayOnTop: R,
            popoutWindowAlwaysOnTop: S,
            handleStayOnTop: z,
        } = ((t = (0, i.bG)([w.A], () => w.A.getIsAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT))),
        (n = o.useCallback((e) => {
            h.setAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: K.isPlatformEmbedded && q.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        $ = (0, et.G)(),
        {
            rootNode: ei,
            popoutWindow: ea,
            toggleFullScreen: er,
        } = (function () {
            let e,
                t,
                n,
                {
                    popoutWindow: l,
                    currentDocument: a,
                    rootNode: r,
                } = ((e = (0, i.bG)([w.A], () => w.A.getWindow(ee.MLl.ACTIVITY_POPOUT))),
                (t = o.useMemo(() => e?.window.document, [e])),
                (n = o.useMemo(() => t?.getElementById("app-mount"), [t])),
                { popoutWindow: e, currentDocument: t, rootNode: n }),
                [s, c] = o.useState(!1),
                d = o.useCallback(() => {
                    null == r || (s && (c(!1), (0, H.sP)(r, a)));
                }, [r, a, s]),
                u = o.useCallback(() => {
                    null != r && (s ? d() : (c(!0), (0, H.tl)(r)));
                }, [r, s, d]),
                p = o.useCallback(() => {
                    null != r && !(0, H._U)(r, a) && s && u();
                }, [r, a, s, u]);
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
                { rootNode: r, popoutWindow: l, toggleFullScreen: u }
            );
        })(),
        eo = o.useRef(null);
    if (null == m || !a) return null;
    let es = (0, l.jsx)(P.A, { application: m, size: 24, className: en.Z2 });
    return (
        v && null != c && (es = (0, l.jsx)(_.m, { asContainer: !0, text: c, position: "bottom", children: es })),
        (0, l.jsx)(b.N, {
            theme: ee.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: g()(en.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: g()(en.ND, en.c8),
                            children: [
                                es,
                                (0, l.jsx)(j.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: en.SX,
                                    children: (0, l.jsx)(C.A, { children: m.name }),
                                }),
                                E.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: en.SC,
                                                  children: (0, l.jsx)(j.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)(X.Ay, {
                                                  renderIcon: !1,
                                                  users: E,
                                                  size: el,
                                                  max: 6,
                                                  renderUser: (e) => L(e, x),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: g()(en.ND, en.fU),
                            children: [
                                (0, l.jsx)("div", { className: en.Rv }),
                                (0, l.jsxs)("div", {
                                    className: en.fc,
                                    children: [
                                        (0, l.jsx)(D.A, {
                                            appContext: ee.BRT.POPOUT,
                                            applicationId: r,
                                            channel: x,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: u,
                                            iconClassName: en.NS,
                                            size: y.$n.Sizes.TINY,
                                            look: y.$n.Looks.FILLED,
                                            buttonText: U.intl.string(U.t["6F9ivu"]),
                                            color: y.$n.Colors.TRANSPARENT,
                                        }),
                                        R
                                            ? (0, l.jsx)(F.A, { popoutWindowAlwaysOnTop: S, onToggleStayOnTop: z })
                                            : null,
                                        $
                                            ? (0, l.jsx)(W.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, N.zV)(ee.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, J.A)({ onConfirm: p });
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(G.A, { node: ei, guestWindow: ea, onClick: er }),
                                        (0, l.jsx)(
                                            T.Y,
                                            {
                                                targetElementRef: eo,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, l.jsx)(O.A, {
                                                        children: (0, l.jsx)(Q.default, {
                                                            application: m,
                                                            channelId: s,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, o.createElement)(M, {
                                                        ...e,
                                                        buttonRef: eo,
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
function ea(e) {
    let { applicationId: t, channelId: n } = e,
        a = (0, i.bG)([v.Ay], () => v.Ay.getSelfEmbeddedActivities().get(t)),
        r = o.useCallback(async () => {
            await (0, z.od)(t, n ?? null), $.A.popInActivity();
        }, [t, n]);
    return (0, l.jsx)(ei, {
        hasActivity: null != a,
        applicationId: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
var er = n(376554);
function eo(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: a, isLoading: r = !1 } = e,
        s = o.useRef(null),
        c = (0, m.A)(t);
    o.useEffect(() => {
        null != t
            ? clearTimeout(s.current)
            : null != c &&
              null == t &&
              (s.current = window.setTimeout(() => {
                  (0, h.close)(ee.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [c, t]);
    let d = (0, i.bG)([A.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : A.A.getApplication(e);
    });
    return (0, l.jsx)("div", {
        className: er.kL,
        children:
            null == t || null == d || r
                ? (0, l.jsx)(p.y, { className: er.pU })
                : (0, l.jsx)("div", {
                      className: er.U$,
                      children: (0, l.jsxs)("div", {
                          className: er.kq,
                          children: [
                              (0, l.jsx)("div", { className: er.N1, children: n({ application: d }) }),
                              (0, l.jsx)(x.A, { applicationId: d.id }),
                              (0, l.jsx)("div", { className: er.Wc, children: a({ application: d }) }),
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
        } = (0, i.cf)([v.Ay], () => {
            let e = v.Ay.getCurrentEmbeddedActivity(),
                t = (0, f.H)(e?.location),
                n = (0, f.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        a = (0, i.bG)([v.Ay], () => e?.applicationId != null && v.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        r = o.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, l.jsx)(ea, { applicationId: n.id, channelId: t });
            },
            [t],
        ),
        s = o.useCallback(
            (i) => {
                let { application: a } = i,
                    r = {};
                null != e &&
                    ((r.instance_id = e.compositeInstanceId ?? e.launchId ?? ""),
                    (r.location_id = e.location?.id),
                    (r.launch_id = e.launchId),
                    (r.referrer_id = e.referrerId),
                    (r.custom_id = e.customId),
                    null != n && "" !== n && (r.guild_id = n),
                    null != t && "" !== t && (r.channel_id = t));
                let o = e?.url;
                return (0, l.jsx)(u, { application: a, queryParams: r, url: o });
            },
            [t, n, e],
        );
    return (0, l.jsx)(eo, { activity: e, isLoading: a, renderHeader: r, renderActivityIFrameWithLoadedData: s });
}
var ec = n(625180),
    ed = n(809871);
function eu(e) {
    let { applicationId: t } = e,
        n = (0, i.bG)([r.A], () => r.A.getConnectedFrame()),
        a = o.useCallback(async () => {
            await ec.A.refreshProxyTicket({ applicationId: t }), ed.A.popInFrame();
        }, [t]);
    return (0, l.jsx)(ei, {
        hasActivity: null != n,
        applicationId: t,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: a,
        channelId: void 0,
    });
}
var ep = n(360469);
function em() {
    let e = (0, i.bG)([r.A], () => r.A.getConnectedFrame()),
        t = (0, i.bG)([r.A], () => e?.applicationId != null && r.A.isProxyTicketRefreshing(e.applicationId), [e]),
        n = o.useCallback((e) => {
            let { application: t } = e;
            return (0, l.jsx)(eu, { applicationId: t.id });
        }, []),
        a = o.useCallback(
            (t) => {
                let { application: n } = t,
                    i = {};
                null != e &&
                    ((i.instance_id = "example-cl-instance"),
                    (i.platform = ep.vu.DESKTOP),
                    null != e.proxyTicket && (i.discord_proxy_ticket = e.proxyTicket));
                let a = e?.url;
                return (0, l.jsx)(u, { application: n, queryParams: i, url: a });
            },
            [e],
        );
    return (0, l.jsx)(eo, { activity: e, isLoading: t, renderHeader: n, renderActivityIFrameWithLoadedData: a });
}
var eA = n(979186),
    eh = n(620148);
function ex(e) {
    let { windowKey: t } = e,
        n = (0, eh.A)(),
        o = (0, i.bG)([r.A], () => r.A.getConnectedFrame()),
        { data: s } = (0, a.YY)(o?.applicationId),
        c = n?.name ?? s?.name ?? U.intl.string(U.t.IC5Ann);
    return (0, l.jsx)(eA.A, {
        withTitleBar: !0,
        windowKey: t,
        title: c,
        children: null != n ? (0, l.jsx)(es, {}) : (0, l.jsx)(em, {}),
    });
}
