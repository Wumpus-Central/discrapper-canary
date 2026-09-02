i.r(l), i.d(l, { default: () => eI });
var n = i(477900),
    t = i(582128),
    a = i(17928),
    r = i(228366),
    c = i(47167),
    s = i(726249),
    d = i(280450),
    o = i(71393),
    u = i(309010),
    h = i(662980),
    g = i(683180),
    p = i(595332),
    A = i(742589),
    f = i(353428),
    x = i(375708),
    I = i(999900);
function m(e) {
    let { channel: l, channelName: i, guild: t, toolbar: a } = e;
    return (0, n.jsx)("div", {
        className: I.SC,
        children: (0, n.jsx)(
            A.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: I.DD,
                "aria-label": x.intl.string(x.t.BIYAqa),
                children: (0, f.zF)({ channel: l, channelName: i, guild: t }),
            },
            `header-${l.id}`,
        ),
    });
}
i(321073);
var y = i(866665),
    b = i(408278),
    j = i(811893),
    C = i(70688),
    v = i(47294),
    E = i(16961),
    _ = i(625180),
    N = i(91242),
    T = i(580954),
    k = i(672929),
    P = i(494126),
    w = i(5867);
async function S(e) {
    null == N.A.getFrame(e) ||
        ((await (0, P.refreshProxyTicket)(e)) &&
            ((0, P.promoteFrame)(e),
            (0, P.updateFramePanelMode)(e, w.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var M = i(574172),
    G = i(869146),
    O = i(976860),
    R = i(808728),
    V = i(576705),
    D = i(673724),
    z = i(972786),
    B = i(621466),
    F = i(453903),
    H = i(922016),
    L = i(980707),
    W = i(477782),
    U = i(22231),
    Y = i(663417),
    K = i(625903),
    X = i(624479),
    q = i(365199),
    Z = i(18739),
    $ = i(976814),
    J = i(50617),
    Q = i(452394);
function ee(e) {
    let {
            onRefresh: l,
            isRefreshing: i,
            canEdit: r,
            onEdit: c,
            canRemix: s,
            onRemix: d,
            projectId: o,
            onProjectSettings: u,
        } = e,
        h = t.useRef(null),
        g = x.intl.string(x.t["UKOtz+"]),
        p = (0, a.bG)([Z.Ay], () => null != o && null != Z.Ay.getSettings(o), [o]),
        A = t.useCallback(() => {
            null != o && (0, $.A)(o);
        }, [o]);
    return (0, n.jsx)(H.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, B.vq)(document.activeElement, HTMLIFrameElement)) return F.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(L.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, n.jsxs)(W.rX, {
                    children: [
                        r
                            ? (0, n.jsx)(W.Dr, {
                                  id: "edit",
                                  icon: U.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: U.PencilIcon },
                                  label: x.intl.string(J.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, n.jsx)(W.Dr, {
                            id: "refresh",
                            icon: Y.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: Y.RefreshIcon },
                            label: x.intl.string(J.default.xKexN1),
                            disabled: i,
                            action: l,
                        }),
                        p
                            ? (0, n.jsx)(W.Dr, {
                                  id: "settings",
                                  icon: K.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: K.SettingsIcon },
                                  label: x.intl.string(J.default.gTMvzD),
                                  action: A,
                              })
                            : null,
                        null != u
                            ? (0, n.jsx)(W.Dr, {
                                  id: "project-settings",
                                  icon: K.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: K.SettingsIcon },
                                  label: x.intl.string(J.default["xhcY+n"]),
                                  action: u,
                              })
                            : null,
                        s
                            ? (0, n.jsx)(W.Dr, {
                                  id: "remix",
                                  icon: X.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: X.CopyIcon },
                                  label: x.intl.string(J.default["V+azw/"]),
                                  action: d,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, n.jsx)("div", {
                ref: h,
                className: Q.h,
                children: (0, n.jsx)(y.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, n.jsx)(b.K, {
                        "aria-label": g,
                        icon: q.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
var el = i(534890),
    ei = i(27989),
    en = i(403853);
function et(e) {
    let { badge: l, ...i } = e,
        a = t.useId();
    if (null == l) return (0, n.jsx)(el.ChatIcon, { ...i });
    let r = "custom" === i.size ? { width: i.width, height: i.height } : (0, ei.J)(i.size ?? "md");
    return (0, n.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: i.className,
        style: i.style,
        children: [
            (0, n.jsx)("defs", {
                children: (0, n.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, n.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, n.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, n.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, n.jsx)(el.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: i.color,
                    colorClass: i.colorClass,
                }),
            }),
            (0, n.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? en.a : en.Z }),
        ],
    });
}
var ea = i(869369),
    er = i(584936),
    ec = i(573163),
    es = i(652215),
    ed = i(746080),
    eo = i(165610);
function eu(e) {
    let l,
        { applicationId: i, surface: r, guildId: c, channelId: s, project: d, chatOpen: o, onToggleChat: u } = e,
        h = (0, k.A)(i, r),
        { badge: g, mentionCount: p } = (0, a.cf)([ec.Ay], () => {
            let e = ec.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : ec.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        A = (0, E.G)(),
        { remix: f, canRemix: I } =
            ((l = null != c && null != d && ((0, z.PV)(d) || (0, D.tr)(d))),
            {
                remix: t.useCallback(() => {
                    null != c && null != d && (0, er.A)(d, c);
                }, [c, d]),
                canRemix: l,
            }),
        m = null != d && (0, z.PV)(d),
        P = null != c && null != d,
        w = t.useCallback(() => {
            null != c && null != d && (0, O.pX)(es.BVt.CHANNEL(c, ed.VV.VIBEGRATIONS, d.id));
        }, [c, d]),
        B = (0, eo.x1)(h) && h.data.proxyTicketRefreshing,
        F = t.useCallback(() => {
            null == h || B || _.A.refreshProxyTicket(h.id);
        }, [h, B]),
        H = t.useCallback(() => {
            null != h && (0, v.A)({ onConfirm: () => S(h.id) });
        }, [h]),
        L = t.useCallback(() => {
            let e = h?.id;
            null != e &&
                G.A.getWindowOpen(es.MLl.ACTIVITY_POPOUT) &&
                N.A.getMainFrame()?.id === e &&
                (0, M.close)(es.MLl.ACTIVITY_POPOUT),
                (0, T.A)().leaveFrame(e),
                (0, O.pX)(
                    (function (e, l) {
                        if (null == e) return es.BVt.FRIENDS;
                        let i = R.Ay.getDefaultChannel(e);
                        if (null != i && i.id !== l) return es.BVt.CHANNEL(e, i.id);
                        let n = R.Ay.getFirstChannel(e, (e) => {
                            let { channel: i } = e;
                            return i.id !== l && V.A.can(es.xBc.VIEW_CHANNEL, i);
                        });
                        return null != n ? es.BVt.CHANNEL(e, n.id) : es.BVt.FRIENDS;
                    })(c, (0, eo.h)(r)),
                );
        }, [h?.id, c, r]),
        W = x.intl.string(!0 === o ? J.default.YdgE0j : J.default.aWVf4j),
        U = !0 === o ? null : g,
        Y = [W];
    "mention" === U
        ? Y.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: p }))
        : "unread" === U && Y.push(x.intl.string(x.t.x5zAGZ));
    let K = t.useCallback((e) => (0, n.jsx)(et, { ...e, badge: U }), [U]),
        X =
            null == u
                ? null
                : (0, n.jsx)(y.m, {
                      text: W,
                      ariaHidden: !0,
                      children: (0, n.jsx)(b.K, {
                          "aria-label": Y.join(", "),
                          "aria-pressed": !0 === o,
                          icon: K,
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  });
    if (!(0, eo.x1)(h)) return X;
    let q = x.intl.string(J.default["6g22y7"]),
        Z = x.intl.string(J.default.Ea0Wrr);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ee, {
                projectId: d?.id,
                onRefresh: F,
                isRefreshing: B,
                canEdit: P,
                onEdit: w,
                canRemix: I,
                onRemix: f,
                onProjectSettings: m && null != d ? () => (0, ea.A)(d.id, d.guild_id ?? c ?? void 0) : void 0,
            }),
            X,
            A
                ? (0, n.jsx)(y.m, {
                      text: q,
                      ariaHidden: !0,
                      children: (0, n.jsx)(b.K, {
                          "aria-label": q,
                          icon: j.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: H,
                      }),
                  })
                : null,
            (0, n.jsx)(y.m, {
                text: Z,
                ariaHidden: !0,
                children: (0, n.jsx)(b.K, {
                    "aria-label": Z,
                    icon: C.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: L,
                }),
            }),
        ],
    });
}
var eh = i(4645),
    eg = i(696451),
    ep = i(935208),
    eA = i(948230),
    ef = i(899154),
    ex = i(955999);
function eI(e) {
    let l,
        i,
        A,
        f,
        x,
        { channel: I } = e,
        y = (0, g.B9)(I.topic),
        b =
            ((i = null != (l = (0, g.B9)(I?.topic))),
            (A = I?.guild_id ?? null),
            (f = (0, a.bG)([o.A, V.A], () => {
                let e = null != A ? o.A.getGuild(A) : null;
                return null != e && V.A.can(es.xBc.MANAGE_GUILD, e);
            }, [A])),
            (x = (0, a.yK)([eg.Ay], () => (null != A ? (eg.Ay.getSelfMember(A)?.roles ?? []) : []), [A])),
            t.useEffect(() => {
                i && null != l && (0, eA.hF)(A ?? void 0);
            }, [i, l, A, f, x]),
            (0, a.bG)([z.Ay], () => {
                if (null == l) return null;
                let e = z.Ay.findProjectByApplicationId(l);
                if (null == e || (0, z.PV)(e)) return e;
                let i = null != A ? ep.default.castGuildIdAsEveryoneGuildRoleId(A) : null,
                    n = (e.collaborator_role_ids ?? []).some((e) => e === i || x.includes(e));
                return e.guild_id === A && (0, D.XE)(e) && (f || n) ? e : null;
            }, [l, f, x, A])),
        j = (0, c.Ay)(I),
        C = (0, a.bG)([o.A], () => o.A.getGuild(I.guild_id), [I.guild_id]),
        v = (0, a.bG)([p.A], () => p.A.isChatOpen(I.id), [I.id]),
        E = t.useRef(!1),
        _ = t.useCallback(
            (e) => {
                (E.current = !e), (0, h.T)(I.id, e);
            },
            [I.id],
        ),
        N = t.useCallback(() => _(!v), [v, _]),
        T = t.useCallback(() => _(!1), [_]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== I.id ||
                e.message.author?.id === d.default.getId() ||
                u.Ay.getCurrentlySelectedChannelId() !== I.id ||
                E.current ||
                (0, h.T)(I.id, !0);
        }
        return (E.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [I.id]);
    let k = t.useMemo(() => ({ channel: I, guild: C ?? void 0, open: v, onClose: T }), [I, C, v, T]),
        {
            availability: P,
            activeMode: w,
            widgetApplicationId: S,
        } = (0, ef.q)({
            applicationId: y ?? null,
            previewApplicationId: b?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: b?.install_scope ?? null,
        }),
        M = t.useMemo(() => ({ ...P, modes: null != w ? [w] : [], defaultMode: w, showModeSwitch: !1 }), [P, w]),
        G = t.useMemo(() => ({ type: eo.U4.APP_CHANNEL, channelId: I.id, guildId: I.guild_id ?? void 0 }), [I]);
    if (null == y) return null;
    let O = (0, n.jsx)(m, {
        channel: I,
        channelName: j,
        guild: C,
        toolbar: (0, n.jsx)(eu, {
            applicationId: y,
            surface: G,
            guildId: I.guild_id,
            channelId: I.id,
            project: b ?? null,
            chatOpen: v,
            onToggleChat: N,
        }),
    });
    return (0, n.jsxs)("div", {
        className: ex.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, n.jsx)(s.HI, { location: C?.name, subsection: j ?? void 0 }),
            (0, n.jsx)(eh.A, {
                availability: M,
                activeMode: w,
                widgetApplicationId: S,
                projectId: b?.id ?? null,
                previewApplicationId: b?.preview_application_id ?? null,
                applicationId: y,
                surface: G,
                header: O,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: k,
            }),
        ],
    });
}
