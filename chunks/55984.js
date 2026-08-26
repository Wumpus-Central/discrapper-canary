n.r(l), n.d(l, { default: () => eA });
var i = n(477900),
    t = n(582128),
    a = n(17928),
    r = n(228366),
    c = n(47167),
    d = n(726249),
    s = n(280450),
    o = n(71393),
    u = n(309010),
    h = n(662980),
    g = n(683180),
    p = n(595332),
    A = n(742589),
    f = n(131047),
    x = n(375708),
    I = n(999900);
function m(e) {
    let { channel: l, channelName: n, guild: t, toolbar: a } = e;
    return (0, i.jsx)("div", {
        className: I.SC,
        children: (0, i.jsx)(
            A.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: I.DD,
                "aria-label": x.intl.string(x.t.BIYAqa),
                children: (0, f.zF)({ channel: l, channelName: n, guild: t }),
            },
            `header-${l.id}`,
        ),
    });
}
n(321073);
var b = n(866665),
    j = n(408278),
    C = n(811893),
    y = n(70688),
    v = n(47294),
    E = n(16961),
    N = n(625180),
    T = n(91242),
    _ = n(580954),
    k = n(672929),
    P = n(494126),
    w = n(5867);
async function M(e) {
    null == T.A.getFrame(e) ||
        ((await (0, P.refreshProxyTicket)(e)) &&
            ((0, P.promoteFrame)(e),
            (0, P.updateFramePanelMode)(e, w.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var S = n(574172),
    O = n(869146),
    R = n(976860),
    G = n(808728),
    V = n(576705),
    B = n(673724),
    D = n(948230),
    z = n(972786),
    F = n(621466),
    H = n(453903),
    L = n(922016),
    W = n(980707),
    U = n(477782),
    Y = n(22231),
    K = n(663417),
    q = n(625903),
    X = n(624479),
    Z = n(365199),
    $ = n(18739),
    J = n(976814),
    Q = n(295813),
    ee = n(452394);
function el(e) {
    let {
            onRefresh: l,
            isRefreshing: n,
            canEdit: r,
            onEdit: c,
            canRemix: d,
            onRemix: s,
            projectId: o,
            sharingEnabled: u,
            onToggleSharing: h,
        } = e,
        g = t.useRef(null),
        p = x.intl.string(x.t["UKOtz+"]),
        A = (0, a.bG)([$.Ay], () => null != o && null != $.Ay.getSettings(o), [o]),
        f = t.useCallback(() => {
            null != o && (0, J.A)(o);
        }, [o]);
    return (0, i.jsx)(L.Y, {
        targetElementRef: g,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, F.vq)(document.activeElement, HTMLIFrameElement)) return H.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(W.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": p,
                children: (0, i.jsxs)(U.rX, {
                    children: [
                        r
                            ? (0, i.jsx)(U.Dr, {
                                  id: "edit",
                                  icon: Y.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: Y.PencilIcon },
                                  label: x.intl.string(Q.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, i.jsx)(U.Dr, {
                            id: "refresh",
                            icon: K.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: K.RefreshIcon },
                            label: x.intl.string(Q.default.xKexN1),
                            disabled: n,
                            action: l,
                        }),
                        A
                            ? (0, i.jsx)(U.Dr, {
                                  id: "settings",
                                  icon: q.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: q.SettingsIcon },
                                  label: x.intl.string(Q.default.gTMvzD),
                                  action: f,
                              })
                            : null,
                        d
                            ? (0, i.jsx)(U.Dr, {
                                  id: "remix",
                                  icon: X.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: X.CopyIcon },
                                  label: x.intl.string(Q.default["V+azw/"]),
                                  action: s,
                              })
                            : null,
                        null != h
                            ? (0, i.jsx)(U.sL, {
                                  id: "sharing",
                                  label: x.intl.string(Q.default.EHMPvA),
                                  checked: !0 === u,
                                  action: h,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, i.jsx)("div", {
                ref: g,
                className: ee.h,
                children: (0, i.jsx)(b.m, {
                    text: p,
                    ariaHidden: !0,
                    children: (0, i.jsx)(j.K, {
                        "aria-label": p,
                        icon: Z.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
var en = n(534890),
    ei = n(27989),
    et = n(403853);
function ea(e) {
    let { badge: l, ...n } = e,
        a = t.useId();
    if (null == l) return (0, i.jsx)(en.ChatIcon, { ...n });
    let r = "custom" === n.size ? { width: n.width, height: n.height } : (0, ei.J)(n.size ?? "md");
    return (0, i.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: n.className,
        style: n.style,
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, i.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, i.jsx)(en.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: n.color,
                    colorClass: n.colorClass,
                }),
            }),
            (0, i.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? et.a : et.Z }),
        ],
    });
}
var er = n(584936),
    ec = n(573163),
    ed = n(652215),
    es = n(746080),
    eo = n(165610);
function eu(e) {
    let l,
        { applicationId: n, surface: r, guildId: c, channelId: d, project: s, chatOpen: o, onToggleChat: u } = e,
        h = (0, k.A)(n, r),
        { badge: g, mentionCount: p } = (0, a.cf)([ec.Ay], () => {
            let e = ec.Ay.getMentionCount(d);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ec.Ay.hasUnread(d)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [d]),
        A = (0, E.G)(),
        { remix: f, canRemix: I } =
            ((l = null != c && null != s && ((0, z.P)(s) || (0, B.tr)(s))),
            {
                remix: t.useCallback(() => {
                    null != c && null != s && (0, er.A)(s, c);
                }, [c, s]),
                canRemix: l,
            }),
        m = null != s && (0, z.P)(s),
        P = null != c && null != s,
        w = t.useCallback(() => {
            null != c && null != s && (0, R.pX)(ed.BVt.CHANNEL(c, es.VV.VIBEGRATIONS, s.id));
        }, [c, s]),
        F = (0, eo.x1)(h) && h.data.proxyTicketRefreshing,
        H = t.useCallback(() => {
            null == h || F || N.A.refreshProxyTicket(h.id);
        }, [h, F]),
        L = t.useCallback(() => {
            null != h && (0, v.A)({ onConfirm: () => M(h.id) });
        }, [h]),
        W = t.useCallback(() => {
            let e = h?.id;
            null != e &&
                O.A.getWindowOpen(ed.MLl.ACTIVITY_POPOUT) &&
                T.A.getMainFrame()?.id === e &&
                (0, S.close)(ed.MLl.ACTIVITY_POPOUT),
                (0, _.A)().leaveFrame(e),
                (0, R.pX)(
                    (function (e, l) {
                        if (null == e) return ed.BVt.FRIENDS;
                        let n = G.Ay.getDefaultChannel(e);
                        if (null != n && n.id !== l) return ed.BVt.CHANNEL(e, n.id);
                        let i = G.Ay.getFirstChannel(e, (e) => {
                            let { channel: n } = e;
                            return n.id !== l && V.A.can(ed.xBc.VIEW_CHANNEL, n);
                        });
                        return null != i ? ed.BVt.CHANNEL(e, i.id) : ed.BVt.FRIENDS;
                    })(c, (0, eo.h)(r)),
                );
        }, [h?.id, c, r]),
        U = x.intl.string(!0 === o ? Q.default.YdgE0j : Q.default.aWVf4j),
        Y = !0 === o ? null : g,
        K = [U];
    "mention" === Y
        ? K.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: p }))
        : "unread" === Y && K.push(x.intl.string(x.t.x5zAGZ));
    let q = t.useCallback((e) => (0, i.jsx)(ea, { ...e, badge: Y }), [Y]),
        X =
            null == u
                ? null
                : (0, i.jsx)(b.m, {
                      text: U,
                      ariaHidden: !0,
                      children: (0, i.jsx)(j.K, {
                          "aria-label": K.join(", "),
                          "aria-pressed": !0 === o,
                          icon: q,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  });
    if (!(0, eo.x1)(h)) return X;
    let Z = x.intl.string(Q.default["6g22y7"]),
        $ = x.intl.string(Q.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(el, {
                projectId: s?.id,
                onRefresh: H,
                isRefreshing: F,
                canEdit: P,
                onEdit: w,
                canRemix: I,
                onRemix: f,
                sharingEnabled: null != s && (0, B.tr)(s),
                onToggleSharing: m && null != s ? () => (0, D.gv)(s.id, !(0, B.tr)(s)) : void 0,
            }),
            X,
            A
                ? (0, i.jsx)(b.m, {
                      text: Z,
                      ariaHidden: !0,
                      children: (0, i.jsx)(j.K, {
                          "aria-label": Z,
                          icon: C.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: L,
                      }),
                  })
                : null,
            (0, i.jsx)(b.m, {
                text: $,
                ariaHidden: !0,
                children: (0, i.jsx)(j.K, {
                    "aria-label": $,
                    icon: y.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: W,
                }),
            }),
        ],
    });
}
var eh = n(155007),
    eg = n(899154),
    ep = n(955999);
function eA(e) {
    let l,
        n,
        A,
        f,
        { channel: x } = e,
        I = (0, g.B9)(x.topic),
        b =
            ((n = null != (l = (0, g.B9)(x?.topic))),
            (A = x?.guild_id ?? null),
            (f = (0, a.bG)([o.A, V.A], () => {
                let e = null != A ? o.A.getGuild(A) : null;
                return null != e && V.A.can(ed.xBc.MANAGE_GUILD, e);
            }, [A])),
            t.useEffect(() => {
                if (!n || null == l) return;
                let e = z.A.getProjectsFetchState();
                (null == e || "error" === e.type || (f && null == z.A.findProjectByApplicationId(l))) &&
                    (0, D.hF)(A ?? void 0);
            }, [n, l, A, f]),
            (0, a.bG)([z.A], () => {
                if (null == l) return null;
                let e = z.A.findProjectByApplicationId(l);
                return null == e || (0, z.P)(e) || (f && e.guild_id === A) ? e : null;
            }, [l, f, A])),
        j = (0, c.Ay)(x),
        C = (0, a.bG)([o.A], () => o.A.getGuild(x.guild_id), [x.guild_id]),
        y = (0, a.bG)([p.A], () => p.A.isChatOpen(x.id), [x.id]),
        v = t.useRef(!1),
        E = t.useCallback(
            (e) => {
                (v.current = !e), (0, h.T)(x.id, e);
            },
            [x.id],
        ),
        N = t.useCallback(() => E(!y), [y, E]),
        T = t.useCallback(() => E(!1), [E]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== x.id ||
                e.message.author?.id === s.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== x.id ||
                v.current ||
                (0, h.T)(x.id, !0);
        }
        return (v.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [x.id]);
    let _ = t.useMemo(() => ({ channel: x, guild: C ?? void 0, open: y, onClose: T }), [x, C, y, T]),
        {
            availability: k,
            activeMode: P,
            widgetApplicationId: w,
        } = (0, eg.q)({
            applicationId: I ?? null,
            previewApplicationId: b?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: b?.install_scope ?? null,
        }),
        M = t.useMemo(() => ({ ...k, modes: null != P ? [P] : [], defaultMode: P, showModeSwitch: !1 }), [k, P]),
        S = t.useMemo(() => ({ type: eo.U4.APP_CHANNEL, channelId: x.id, guildId: x.guild_id ?? void 0 }), [x]);
    if (null == I) return null;
    let O = (0, i.jsx)(m, {
        channel: x,
        channelName: j,
        guild: C,
        toolbar: (0, i.jsx)(eu, {
            applicationId: I,
            surface: S,
            guildId: x.guild_id,
            channelId: x.id,
            project: b ?? null,
            chatOpen: y,
            onToggleChat: N,
        }),
    });
    return (0, i.jsxs)("div", {
        className: ep.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(d.HI, { location: C?.name, subsection: j ?? void 0 }),
            (0, i.jsx)(eh.A, {
                availability: M,
                activeMode: P,
                widgetApplicationId: w,
                projectId: b?.id ?? null,
                previewApplicationId: b?.preview_application_id ?? null,
                applicationId: I,
                surface: S,
                header: O,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: _,
            }),
        ],
    });
}
