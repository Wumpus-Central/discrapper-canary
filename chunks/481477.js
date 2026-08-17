t.r(n), t.d(n, { default: () => eh });
var l = t(477900),
    i = t(17928),
    a = t(627363),
    r = t(91242),
    o = t(582128),
    s = t(536246),
    c = t(835228),
    d = t(813280);
function u(e) {
    let { application: n, queryParams: t, url: i, onIframeMount: a, onIframeUnmount: r } = e;
    return (0, l.jsx)(c.o, {
        allowPopups: (0, s.b)(n),
        referrerPolicy: "origin",
        url: i,
        onIframeMount: a,
        onIframeUnmount: r,
        queryParams: t,
        className: d.p,
        shouldRefocus: !1,
    });
}
var m = t(289873),
    p = t(475743),
    A = t(587895),
    x = t(574172),
    I = t(850891),
    f = t(933958),
    h = t(969151),
    y = t(503698),
    j = t.n(y),
    v = t(3026),
    P = t(862482),
    T = t(866665),
    C = t(43990),
    g = t(834730),
    b = t(922016),
    N = t(95561),
    O = t(717048),
    k = t(567249),
    _ = t(885386),
    w = t(246356),
    E = t(365199),
    U = t(688810),
    L = t(384059),
    R = t(204651),
    M = t(375708);
function S(e) {
    let { onClick: n, ...t } = e,
        { parentAnalyticsLocation: i } = (0, U.Ay)();
    return (0, l.jsx)(R.A, {
        label: M.intl.string(M.t["UKOtz+"]),
        iconComponent: E.MoreHorizontalIcon,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, L.X)(i, L.O.MORE), n(e);
        },
        ...t,
    });
}
var D = t(423562),
    F = t(520006),
    G = t(128286),
    W = t(619344),
    Y = t(734057),
    z = t(696451),
    K = t(287809),
    V = t(723702),
    B = t(427262),
    H = t(19575),
    q = t(475815),
    $ = t(795816),
    X = t(869003),
    Z = t(104171),
    J = t(47294),
    Q = t(728033),
    ee = t(652215),
    en = t(16961),
    et = t(955385);
let el = Z.DN.SIZE_24;
function ei(e) {
    let n,
        t,
        {
            application: a,
            channelId: r,
            compositeInstanceId: s,
            userIds: c,
            isRichPresenceInvite: d,
            onConfirmClosePopout: u,
        } = e,
        m = (0, i.bG)([Y.A], () => Y.A.getChannel(r)),
        p = _.Q_.useSetting(),
        A = (0, i.yK)(
            [z.Ay],
            () => (null == m || null == c ? [] : Array.from(c ?? []).map((e) => z.Ay.getMember(m.guild_id, e))),
            [m, c],
        ),
        I = o.useMemo(() => {
            let e = new Map();
            return (
                A.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [A]),
        f = o.useCallback(
            (e, n) => {
                if (null == e || e === Z.mt) return null;
                let t = I.get(e.id),
                    i = t?.nick ?? B.Ay.getName(e);
                return (0, l.jsx)(
                    T.m,
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
            [I],
        ),
        h = (0, i.yK)(
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
            handleStayOnTop: U,
        } = ((n = (0, i.bG)([k.A], () => k.A.getIsAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT))),
        (t = o.useCallback((e) => {
            x.setAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: V.isPlatformEmbedded && H.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: n,
            handleStayOnTop: t,
        }),
        L = (0, en.G)(),
        {
            rootNode: R,
            popoutWindow: $,
            toggleFullScreen: X,
        } = (function () {
            let e,
                n,
                t,
                {
                    popoutWindow: l,
                    currentDocument: a,
                    rootNode: r,
                } = ((e = (0, i.bG)([k.A], () => k.A.getWindow(ee.MLl.ACTIVITY_POPOUT))),
                (n = o.useMemo(() => e?.window.document, [e])),
                (t = o.useMemo(() => n?.getElementById("app-mount"), [n])),
                { popoutWindow: e, currentDocument: n, rootNode: t }),
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
                { rootNode: r, popoutWindow: l, toggleFullScreen: u }
            );
        })(),
        ei = o.useRef(null),
        ea = (0, l.jsx)(O.A, { application: a, size: 24, className: et.Z2 });
    return (
        p && null != s && (ea = (0, l.jsx)(T.m, { asContainer: !0, text: s, position: "bottom", children: ea })),
        (0, l.jsx)(C.N, {
            theme: ee.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: j()(et.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: j()(et.ND, et.c8),
                            children: [
                                ea,
                                (0, l.jsx)(g.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: et.SX,
                                    children: (0, l.jsx)(v.A, { children: a.name }),
                                }),
                                h.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: et.SC,
                                                  children: (0, l.jsx)(g.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)(Z.Ay, {
                                                  renderIcon: !1,
                                                  users: h,
                                                  size: el,
                                                  max: 6,
                                                  renderUser: (e) => f(e, m),
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
                                            applicationId: a.id,
                                            channel: m,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: d,
                                            iconClassName: et.NS,
                                            size: P.$n.Sizes.TINY,
                                            look: P.$n.Looks.FILLED,
                                            buttonText: M.intl.string(M.t["6F9ivu"]),
                                            color: P.$n.Colors.TRANSPARENT,
                                        }),
                                        y
                                            ? (0, l.jsx)(W.A, { popoutWindowAlwaysOnTop: E, onToggleStayOnTop: U })
                                            : null,
                                        L
                                            ? (0, l.jsx)(G.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, N.zV)(ee.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, J.A)({ onConfirm: u });
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(D.A, { node: R, guestWindow: $, onClick: X }),
                                        (0, l.jsx)(
                                            b.Y,
                                            {
                                                targetElementRef: ei,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, l.jsx)(w.A, {
                                                        children: (0, l.jsx)(Q.default, {
                                                            application: a,
                                                            channelId: r,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    let { isShown: t } = n;
                                                    return (0, o.createElement)(S, {
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
function ea(e) {
    let { application: n, channelId: t } = e,
        a = (0, i.bG)([f.Ay], () => f.Ay.getSelfEmbeddedActivities().get(n.id)),
        r = o.useCallback(async () => {
            await (0, $.od)(n.id, t ?? null), X.A.popInActivity();
        }, [n.id, t]);
    return (0, l.jsx)(ei, {
        application: n,
        channelId: t,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
var er = t(998258);
function eo(e) {
    let { activity: n, renderHeader: t, renderActivityIFrameWithLoadedData: a, isLoading: r = !1 } = e,
        s = o.useRef(null),
        c = (0, p.Ay)(n);
    o.useEffect(() => {
        null != n
            ? clearTimeout(s.current)
            : null != c &&
              null == n &&
              (s.current = window.setTimeout(() => {
                  (0, x.close)(ee.MLl.ACTIVITY_POPOUT);
              }, 5e3));
    }, [c, n]);
    let d = (0, i.bG)([A.A], () => {
        let e = n?.applicationId;
        return null == e ? void 0 : A.A.getApplication(e);
    });
    return (0, l.jsx)("div", {
        className: er.kL,
        children:
            null == n || null == d || r
                ? (0, l.jsx)(m.y, { className: er.pU })
                : (0, l.jsx)("div", {
                      className: er.U$,
                      children: (0, l.jsxs)("div", {
                          className: er.kq,
                          children: [
                              (0, l.jsx)("div", { className: er.N1, children: t({ activity: n, application: d }) }),
                              (0, l.jsx)(I.A, { type: "embedded-activity", applicationId: d.id }),
                              (0, l.jsx)("div", { className: er.Wc, children: a({ activity: n, application: d }) }),
                          ],
                      }),
                  }),
    });
}
function es() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t,
        } = (0, i.cf)([f.Ay], () => {
            let e = f.Ay.getCurrentEmbeddedActivity(),
                n = (0, h.H)(e?.location),
                t = (0, h.D)(e?.location);
            return { embeddedActivity: e, channelId: n, guildId: t };
        }),
        a = (0, i.bG)([f.Ay], () => e?.applicationId != null && f.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        r = o.useCallback(
            (e) => {
                let { application: t } = e;
                return (0, l.jsx)(ea, { application: t, channelId: n });
            },
            [n],
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
                    null != t && "" !== t && (r.guild_id = t),
                    null != n && "" !== n && (r.channel_id = n));
                let o = e?.url;
                return (0, l.jsx)(u, { application: a, queryParams: r, url: o });
            },
            [n, t, e],
        );
    return (0, l.jsx)(eo, { activity: e, isLoading: a, renderHeader: r, renderActivityIFrameWithLoadedData: s });
}
var ec = t(625180),
    ed = t(809871);
function eu(e) {
    let { frame: n, application: t } = e,
        i = o.useCallback(async () => {
            await ec.A.refreshProxyTicket(n.id), ed.A.popInFrame();
        }, [n.id]);
    return (0, l.jsx)(ei, { application: t, isRichPresenceInvite: !0, onConfirmClosePopout: i, channelId: void 0 });
}
var em = t(165610),
    ep = t(360469);
function eA(e) {
    let { frame: n, application: t } = e,
        i = { instance_id: "example-cl-instance", platform: ep.vu.DESKTOP, discord_proxy_ticket: n.data.proxyTicket };
    return (0, l.jsx)(u, {
        application: t,
        queryParams: i,
        url: n.data.url,
        onIframeMount: (e) => ec.A.attachFrameIframe(n.id, e),
        onIframeUnmount: (e) => ec.A.detachFrameIframe(n.id, e),
    });
}
function ex() {
    let e = (0, i.bG)([r.A], () => (0, em.ny)(r.A.getMainFrame())),
        n = e?.data.proxyTicketRefreshing ?? !1;
    return (0, l.jsx)(eo, {
        activity: e,
        isLoading: n,
        renderHeader: (e) => {
            let { activity: n, application: t } = e;
            return (0, l.jsx)(eu, { frame: n, application: t });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: n, application: t } = e;
            return (0, l.jsx)(eA, { frame: n, application: t });
        },
    });
}
var eI = t(979186),
    ef = t(620148);
function eh(e) {
    let { windowKey: n } = e,
        t = (0, ef.A)(),
        o = (0, i.bG)([r.A], () => r.A.getMainFrame()),
        { data: s } = (0, a.YY)(o?.applicationId),
        c = t?.name ?? s?.name ?? M.intl.string(M.t.IC5Ann);
    return (0, l.jsx)(eI.A, {
        withTitleBar: !0,
        windowKey: n,
        title: c,
        children: null != t ? (0, l.jsx)(es, {}) : (0, l.jsx)(ex, {}),
    });
}
