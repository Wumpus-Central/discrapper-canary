n.r(t), n.d(t, { default: () => ey });
var i = n(477900),
    l = n(17928),
    a = n(627363),
    r = n(91242),
    o = n(582128),
    s = n(536246),
    c = n(162802),
    d = n(355361);
function u(e) {
    let { application: t, queryParams: n, url: l, onIframeMount: a, onIframeUnmount: r, onGuestReload: o } = e;
    return (0, i.jsx)(c.o, {
        allowPopups: (0, s.b)(t),
        referrerPolicy: "origin",
        url: l,
        onIframeMount: a,
        onIframeUnmount: r,
        onGuestReload: o,
        queryParams: n,
        className: d.p,
        shouldRefocus: !1,
    });
}
var m = n(289873),
    p = n(475743),
    A = n(587895),
    x = n(574172),
    I = n(850891),
    f = n(933958),
    h = n(969151),
    y = n(503698),
    j = n.n(y),
    v = n(3026),
    P = n(862482),
    T = n(866665),
    C = n(43990),
    g = n(834730),
    b = n(922016),
    N = n(95561),
    O = n(494667),
    k = n(567249),
    _ = n(885386),
    w = n(246356),
    E = n(365199),
    R = n(688810),
    U = n(384059),
    L = n(204651),
    M = n(375708);
function S(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: l } = (0, R.Ay)();
    return (0, i.jsx)(L.A, {
        label: M.intl.string(M.t["UKOtz+"]),
        iconComponent: E.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, U.X)(l, U.O.MORE), t(e);
        },
        ...n,
    });
}
var F = n(423562),
    G = n(520006),
    D = n(128286),
    W = n(619344),
    Y = n(734057),
    z = n(696451),
    K = n(287809),
    V = n(723702),
    B = n(427262),
    H = n(19575),
    q = n(475815),
    $ = n(795816),
    X = n(869003),
    Z = n(104171),
    J = n(47294),
    Q = n(728033),
    ee = n(652215),
    et = n(16961),
    en = n(52464);
let ei = Z.DN.SIZE_24;
function el(e) {
    let t,
        n,
        {
            application: a,
            channelId: r,
            compositeInstanceId: s,
            userIds: c,
            isRichPresenceInvite: d,
            onConfirmClosePopout: u,
        } = e,
        m = (0, l.bG)([Y.A], () => Y.A.getChannel(r)),
        p = _.Q_.useSetting(),
        A = (0, l.yK)(
            [z.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => z.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        I = o.useMemo(() => {
            let e = new Map();
            return (
                A.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [A]),
        f = o.useCallback(
            (e, t) => {
                if (null == e || e === Z.mt) return null;
                let n = I.get(e.id),
                    l = n?.nick ?? B.Ay.getName(e);
                return (0, i.jsx)(
                    T.m,
                    {
                        asContainer: !0,
                        text: l,
                        position: "bottom",
                        children: (0, i.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, ei), alt: l, className: en.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [I],
        ),
        h = (0, l.yK)(
            [K.default],
            () =>
                Array.from(c ?? [])
                    .map((e) => K.default.getUser(e))
                    .filter((e) => null != e),
            [c],
        ),
        {
            canStayOnTop: y,
            popoutWindowAlwaysOnTop: E,
            handleStayOnTop: R,
        } = ((t = (0, l.bG)([k.A], () => k.A.getIsAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT))),
        (n = o.useCallback((e) => {
            x.setAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: V.isPlatformEmbedded && H.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        U = (0, et.G)(),
        {
            rootNode: L,
            popoutWindow: $,
            toggleFullScreen: X,
        } = (function () {
            let e,
                t,
                n,
                {
                    popoutWindow: i,
                    currentDocument: a,
                    rootNode: r,
                } = ((e = (0, l.bG)([k.A], () => k.A.getWindow(ee.MLl.ACTIVITY_POPOUT))),
                (t = o.useMemo(() => e?.window.document, [e])),
                (n = o.useMemo(() => t?.getElementById("app-mount"), [t])),
                { popoutWindow: e, currentDocument: t, rootNode: n }),
                [s, c] = o.useState(!1),
                d = o.useCallback(() => {
                    null == r || (s && (c(!1), (0, q.sP)(r, a)));
                }, [r, a, s]),
                u = o.useCallback(() => {
                    null != r && (s ? d() : (c(!0), (0, q.tl)(r)));
                }, [r, s, d]),
                m = o.useCallback(() => {
                    null != r && !(0, q._U)(r, a) && s && u();
                }, [r, a, s, u]);
            return (
                o.useEffect(
                    () => (
                        a?.addEventListener(q.Wb, m),
                        () => {
                            a?.removeEventListener(q.Wb, m);
                        }
                    ),
                    [a, m],
                ),
                { rootNode: r, popoutWindow: i, toggleFullScreen: u }
            );
        })(),
        el = o.useRef(null),
        ea = (0, i.jsx)(O.A, { application: a, size: 24, className: en.Z2 });
    return (
        p && null != s && (ea = (0, i.jsx)(T.m, { asContainer: !0, text: s, position: "bottom", children: ea })),
        (0, i.jsx)(C.N, {
            theme: ee.NJ8.DARK,
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
                                    children: (0, i.jsx)(v.A, { children: a.name }),
                                }),
                                h.length > 0
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
                                              (0, i.jsx)(Z.Ay, {
                                                  renderIcon: !1,
                                                  users: h,
                                                  size: ei,
                                                  max: 6,
                                                  renderUser: (e) => f(e, m),
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
                                            appContext: ee.BRT.POPOUT,
                                            applicationId: a.id,
                                            channel: m,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: en.NS,
                                            size: P.$n.Sizes.TINY,
                                            look: P.$n.Looks.FILLED,
                                            buttonText: M.intl.string(M.t["6F9ivu"]),
                                            color: P.$n.Colors.TRANSPARENT,
                                        }),
                                        y
                                            ? (0, i.jsx)(W.A, { popoutWindowAlwaysOnTop: E, onToggleStayOnTop: R })
                                            : null,
                                        U
                                            ? (0, i.jsx)(D.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, N.zV)(ee.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, J.A)({ onConfirm: u });
                                                  },
                                              })
                                            : null,
                                        (0, i.jsx)(F.A, { node: L, guestWindow: $, onClick: X }),
                                        (0, i.jsx)(
                                            b.Y,
                                            {
                                                targetElementRef: el,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, i.jsx)(w.A, {
                                                        children: (0, i.jsx)(Q.default, {
                                                            application: a,
                                                            channelId: r,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, o.createElement)(S, {
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
function ea(e) {
    let { application: t, channelId: n } = e,
        a = (0, l.bG)([f.Ay], () => f.Ay.getSelfEmbeddedActivities().get(t.id)),
        r = o.useCallback(async () => {
            await (0, $.od)(t.id, n ?? null), X.A.popInActivity();
        }, [t.id, n]);
    return (0, i.jsx)(el, {
        application: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
var er = n(835519);
function eo(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: a, isLoading: r = !1 } = e,
        s = o.useRef(null),
        c = (0, p.Ay)(t);
    o.useEffect(() => {
        null != t
            ? clearTimeout(s.current)
            : null != c &&
              null == t &&
              (s.current = window.setTimeout(() => {
                  (0, x.close)(ee.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [c, t]);
    let d = (0, l.bG)([A.A], () => {
        let e = t?.applicationId;
        return null == e ? void 0 : A.A.getApplication(e);
    });
    return (0, i.jsx)("div", {
        className: er.kL,
        children:
            null == t || null == d || r
                ? (0, i.jsx)(m.y, { className: er.pU })
                : (0, i.jsx)("div", {
                      className: er.U$,
                      children: (0, i.jsxs)("div", {
                          className: er.kq,
                          children: [
                              (0, i.jsx)("div", { className: er.N1, children: n({ activity: t, application: d }) }),
                              (0, i.jsx)(I.A, { type: "embedded-activity", applicationId: d.id }),
                              (0, i.jsx)("div", { className: er.Wc, children: a({ activity: t, application: d }) }),
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
        } = (0, l.cf)([f.Ay], () => {
            let e = f.Ay.getCurrentEmbeddedActivity(),
                t = (0, h.H)(e?.location),
                n = (0, h.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        a = (0, l.bG)([f.Ay], () => e?.applicationId != null && f.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        r = o.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, i.jsx)(ea, { application: n, channelId: t });
            },
            [t],
        ),
        s = o.useCallback(
            (l) => {
                let { application: a } = l,
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
                return (0, i.jsx)(u, { application: a, queryParams: r, url: o });
            },
            [t, n, e],
        );
    return (0, i.jsx)(eo, { activity: e, isLoading: a, renderHeader: r, renderActivityIFrameWithLoadedData: s });
}
var ec = n(625180),
    ed = n(37042),
    eu = n(809871);
function em(e) {
    let { frame: t, application: n } = e,
        l = o.useCallback(async () => {
            await ec.A.refreshProxyTicket(t.id), eu.A.popInFrame();
        }, [t.id]);
    return (0, i.jsx)(el, { application: n, isRichPresenceInvite: !0, onConfirmClosePopout: l, channelId: void 0 });
}
var ep = n(165610),
    eA = n(360469);
function ex(e) {
    let { frame: t, application: n } = e,
        l = {
            instance_id: "example-cl-instance",
            platform: eA.vu.DESKTOP,
            discord_proxy_ticket: t.data.proxyTicket,
            ...(0, ed.A)(t.data),
        };
    return (0, i.jsx)(u, {
        application: n,
        queryParams: l,
        url: t.data.url,
        onIframeMount: (e) => ec.A.attachFrameIframe(t.id, e),
        onIframeUnmount: (e) => ec.A.detachFrameIframe(t.id, e),
        onGuestReload: () => ec.A.setFramePrefersPictureInPictureOnNavigateAway(t.id, !1),
    });
}
function eI() {
    let e = (0, l.bG)([r.A], () => (0, ep.ny)(r.A.getMainFrame())),
        t = e?.data.proxyTicketRefreshing ?? !1;
    return (0, i.jsx)(eo, {
        activity: e,
        isLoading: t,
        renderHeader: (e) => {
            let { activity: t, application: n } = e;
            return (0, i.jsx)(em, { frame: t, application: n });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: t, application: n } = e;
            return (0, i.jsx)(ex, { frame: t, application: n });
        },
    });
}
var ef = n(979186),
    eh = n(620148);
function ey(e) {
    let { windowKey: t } = e,
        n = (0, eh.A)(),
        o = (0, l.bG)([r.A], () => r.A.getMainFrame()),
        { data: s } = (0, a.YY)(o?.applicationId),
        c = n?.name ?? s?.name ?? M.intl.string(M.t.IC5Ann);
    return (0, i.jsx)(ef.A, {
        withTitleBar: !0,
        windowKey: t,
        title: c,
        children: null != n ? (0, i.jsx)(es, {}) : (0, i.jsx)(eI, {}),
    });
}
