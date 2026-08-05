n.r(t), n.d(t, { default: () => eh });
var l = n(477900),
    i = n(17928),
    a = n(627363),
    r = n(91242),
    s = n(582128),
    o = n(536246),
    c = n(809239),
    d = n(813280);
function u(e) {
    let { application: t, queryParams: n, url: i, onIframeMount: a, onIframeUnmount: r } = e;
    return (0, l.jsx)(c.o, {
        allowPopups: (0, o.b)(t),
        referrerPolicy: "origin",
        url: i,
        onIframeMount: a,
        onIframeUnmount: r,
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
    O = n(717048),
    k = n(567249),
    _ = n(885386),
    w = n(246356),
    E = n(365199),
    U = n(688810),
    L = n(384059),
    R = n(204651),
    M = n(375708);
function S(e) {
    let { onClick: t, ...n } = e,
        { parentAnalyticsLocation: i } = (0, U.Ay)();
    return (0, l.jsx)(R.A, {
        label: M.intl.string(M.t["UKOtz+"]),
        iconComponent: E.j,
        tooltipPosition: "bottom",
        onClick: (e) => {
            (0, L.X)(i, L.O.MORE), t(e);
        },
        ...n,
    });
}
var D = n(423562),
    F = n(520006),
    G = n(128286),
    W = n(619344),
    Y = n(734057),
    z = n(696451),
    K = n(287809),
    V = n(723702),
    B = n(427262),
    q = n(19575),
    H = n(475815),
    $ = n(795816),
    X = n(869003),
    Z = n(104171),
    J = n(47294),
    Q = n(728033),
    ee = n(652215),
    et = n(16961),
    en = n(955385);
let el = Z.DN.SIZE_24;
function ei(e) {
    let t,
        n,
        {
            application: a,
            channelId: r,
            compositeInstanceId: o,
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
        I = s.useMemo(() => {
            let e = new Map();
            return (
                A.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [A]),
        f = s.useCallback(
            (e, t) => {
                if (null == e || e === Z.mt) return null;
                let n = I.get(e.id),
                    i = n?.nick ?? B.Ay.getName(e);
                return (0, l.jsx)(
                    T.m,
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
        } = ((t = (0, i.bG)([k.A], () => k.A.getIsAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT))),
        (n = s.useCallback((e) => {
            x.setAlwaysOnTop(ee.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: V.isPlatformEmbedded && q.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        L = (0, et.G)(),
        {
            rootNode: R,
            popoutWindow: $,
            toggleFullScreen: X,
        } = (function () {
            let e,
                t,
                n,
                {
                    popoutWindow: l,
                    currentDocument: a,
                    rootNode: r,
                } = ((e = (0, i.bG)([k.A], () => k.A.getWindow(ee.MLl.ACTIVITY_POPOUT))),
                (t = s.useMemo(() => e?.window.document, [e])),
                (n = s.useMemo(() => t?.getElementById("app-mount"), [t])),
                { popoutWindow: e, currentDocument: t, rootNode: n }),
                [o, c] = s.useState(!1),
                d = s.useCallback(() => {
                    null == r || (o && (c(!1), (0, H.sP)(r, a)));
                }, [r, a, o]),
                u = s.useCallback(() => {
                    null != r && (o ? d() : (c(!0), (0, H.tl)(r)));
                }, [r, o, d]),
                m = s.useCallback(() => {
                    null != r && !(0, H._U)(r, a) && o && u();
                }, [r, a, o, u]);
            return (
                s.useEffect(
                    () => (
                        a?.addEventListener(H.Wb, m),
                        () => {
                            a?.removeEventListener(H.Wb, m);
                        }
                    ),
                    [a, m],
                ),
                { rootNode: r, popoutWindow: l, toggleFullScreen: u }
            );
        })(),
        ei = s.useRef(null),
        ea = (0, l.jsx)(O.A, { application: a, size: 24, className: en.Z2 });
    return (
        p && null != o && (ea = (0, l.jsx)(T.m, { asContainer: !0, text: o, position: "bottom", children: ea })),
        (0, l.jsx)(C.N, {
            theme: ee.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: j()(en.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: j()(en.ND, en.c8),
                            children: [
                                ea,
                                (0, l.jsx)(g.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: en.SX,
                                    children: (0, l.jsx)(v.A, { children: a.name }),
                                }),
                                h.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: en.SC,
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
                            className: j()(en.ND, en.fU),
                            children: [
                                (0, l.jsx)("div", { className: en.Rv }),
                                (0, l.jsxs)("div", {
                                    className: en.fc,
                                    children: [
                                        (0, l.jsx)(F.A, {
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
                                                    let { closePopout: t } = e;
                                                    return (0, l.jsx)(w.A, {
                                                        children: (0, l.jsx)(Q.default, {
                                                            application: a,
                                                            channelId: r,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, s.createElement)(S, {
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
function ea(e) {
    let { application: t, channelId: n } = e,
        a = (0, i.bG)([f.Ay], () => f.Ay.getSelfEmbeddedActivities().get(t.id)),
        r = s.useCallback(async () => {
            await (0, $.od)(t.id, n ?? null), X.A.popInActivity();
        }, [t.id, n]);
    return (0, l.jsx)(ei, {
        application: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
var er = n(998258);
function es(e) {
    let { activity: t, renderHeader: n, renderActivityIFrameWithLoadedData: a, isLoading: r = !1 } = e,
        o = s.useRef(null),
        c = (0, p.Ay)(t);
    s.useEffect(() => {
        null != t
            ? clearTimeout(o.current)
            : null != c &&
              null == t &&
              (o.current = window.setTimeout(() => {
                  (0, x.close)(ee.MLl.ACTIVITY_POPOUT);
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
                ? (0, l.jsx)(m.y, { className: er.pU })
                : (0, l.jsx)("div", {
                      className: er.U$,
                      children: (0, l.jsxs)("div", {
                          className: er.kq,
                          children: [
                              (0, l.jsx)("div", { className: er.N1, children: n({ activity: t, application: d }) }),
                              (0, l.jsx)(I.A, { type: "embedded-activity", applicationId: d.id }),
                              (0, l.jsx)("div", { className: er.Wc, children: a({ activity: t, application: d }) }),
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
        } = (0, i.cf)([f.Ay], () => {
            let e = f.Ay.getCurrentEmbeddedActivity(),
                t = (0, h.H)(e?.location),
                n = (0, h.D)(e?.location);
            return { embeddedActivity: e, channelId: t, guildId: n };
        }),
        a = (0, i.bG)([f.Ay], () => e?.applicationId != null && f.Ay.isProxyTicketRefreshing(e.applicationId), [e]),
        r = s.useCallback(
            (e) => {
                let { application: n } = e;
                return (0, l.jsx)(ea, { application: n, channelId: t });
            },
            [t],
        ),
        o = s.useCallback(
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
                let s = e?.url;
                return (0, l.jsx)(u, { application: a, queryParams: r, url: s });
            },
            [t, n, e],
        );
    return (0, l.jsx)(es, { activity: e, isLoading: a, renderHeader: r, renderActivityIFrameWithLoadedData: o });
}
var ec = n(113854),
    ed = n(809871);
function eu(e) {
    let { frame: t, application: n } = e,
        i = s.useCallback(async () => {
            await ec.A.refreshProxyTicket(t.id), ed.A.popInFrame();
        }, [t.id]);
    return (0, l.jsx)(ei, { application: n, isRichPresenceInvite: !0, onConfirmClosePopout: i, channelId: void 0 });
}
var em = n(165610),
    ep = n(360469);
function eA(e) {
    let { frame: t, application: n } = e,
        i = { instance_id: "example-cl-instance", platform: ep.vu.DESKTOP, discord_proxy_ticket: t.data.proxyTicket };
    return (0, l.jsx)(u, {
        application: n,
        queryParams: i,
        url: t.data.url,
        onIframeMount: (e) => ec.A.attachFrameIframe(t.id, e),
        onIframeUnmount: (e) => ec.A.detachFrameIframe(t.id, e),
    });
}
function ex() {
    let e = (0, i.bG)([r.A], () => (0, em.ny)(r.A.getMainFrame())),
        t = e?.data.proxyTicketRefreshing ?? !1;
    return (0, l.jsx)(es, {
        activity: e,
        isLoading: t,
        renderHeader: (e) => {
            let { activity: t, application: n } = e;
            return (0, l.jsx)(eu, { frame: t, application: n });
        },
        renderActivityIFrameWithLoadedData: (e) => {
            let { activity: t, application: n } = e;
            return (0, l.jsx)(eA, { frame: t, application: n });
        },
    });
}
var eI = n(979186),
    ef = n(620148);
function eh(e) {
    let { windowKey: t } = e,
        n = (0, ef.A)(),
        s = (0, i.bG)([r.A], () => r.A.getMainFrame()),
        { data: o } = (0, a.YY)(s?.applicationId),
        c = n?.name ?? o?.name ?? M.intl.string(M.t.IC5Ann);
    return (0, l.jsx)(eI.A, {
        withTitleBar: !0,
        windowKey: t,
        title: c,
        children: null != n ? (0, l.jsx)(eo, {}) : (0, l.jsx)(ex, {}),
    });
}
