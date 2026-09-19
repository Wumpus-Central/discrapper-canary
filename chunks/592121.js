(n.r(l), n.d(l, { default: () => eN }));
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(228366),
    c = n(334738),
    r = n(47167),
    o = n(726249),
    u = n(71393),
    d = n(573163),
    h = n(662980),
    A = n(683180),
    p = n(696451),
    g = n(576705),
    f = n(935208),
    I = n(673724),
    b = n(948230),
    C = n(972786),
    x = n(652215),
    y = n(822835),
    j = n(595332),
    m = n(927813);
let v = { lastAutoOpenedAt: null },
    E = v;
class w extends a.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        E = e ?? v;
    }
    getState() {
        return E;
    }
    canAutoOpen(e) {
        return null == E.lastAutoOpenedAt || e - E.lastAutoOpenedAt >= m.A.Millis.DAY;
    }
}
let _ = new w(s.h, {
    LOGOUT: function () {
        if (null == E.lastAutoOpenedAt) return !1;
        E = v;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: l } = e;
        E = { lastAutoOpenedAt: l };
    },
});
var N = n(333007),
    O = n(192308),
    S = n(148494),
    T = n(281969),
    k = n(672929),
    M = n(20465),
    R = n(249288),
    G = n(120426),
    P = n(563013);
function V(e) {
    let l,
        { channelId: n, applicationId: s, surface: c, onOpenChat: r } = e,
        o = (0, k.A)(s, c),
        u = o?.id ?? null,
        d =
            ((l = i.useCallback((e) => T.A.subscribe(e), [])),
            i.useSyncExternalStore(l, () => null != u && T.A.isFrameVisible(u))),
        h = (0, a.bG)([R.A], () => R.A.getToastsEnabled(n), [n]),
        A = d && h,
        p = (0, O.useHasAnyModalOpen)(),
        [g, f] = i.useState(null);
    i.useEffect(() => {
        if (!A) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let l = e.getBoundingClientRect();
                return l.width < 1 || l.height < 1
                    ? null
                    : { left: l.left, top: l.top, width: l.width, height: l.height };
            })((0, G.F)(null, u));
            f((l) =>
                (
                    null == l || null == e
                        ? l === e
                        : l.left === e.left && l.top === e.top && l.width === e.width && l.height === e.height
                )
                    ? l
                    : e,
            );
        }
        e();
        let l = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(l), window.removeEventListener("resize", e));
            }
        );
    }, [A, u]);
    let I = i.useCallback(
        (e) => {
            (r(), S.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [r],
    );
    return !A || null == g || p
        ? null
        : (0, N.createPortal)(
              (0, t.jsx)("div", {
                  className: P.T,
                  style: { top: g.top, left: g.left, width: g.width, height: g.height / 2 },
                  children: (0, t.jsx)("div", {
                      className: P.f,
                      children: (0, t.jsx)(M.A, { channelId: n, onToastClick: I }),
                  }),
              }),
              document.body,
          );
}
var D = n(742589),
    B = n(353428),
    L = n(375708),
    H = n(999900);
function z(e) {
    let { channel: l, channelName: n, guild: i, toolbar: a } = e;
    return (0, t.jsx)("div", {
        className: H.SC,
        children: (0, t.jsx)(
            D.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: H.DD,
                "aria-label": L.intl.string(L.t.BIYAqa),
                children: (0, B.zF)({ channel: l, channelName: n, guild: i }),
            },
            `header-${l.id}`,
        ),
    });
}
n(321073);
var U = n(811893),
    F = n(70688),
    Y = n(47294),
    K = n(16961),
    W = n(625180),
    X = n(91242),
    q = n(580954),
    J = n(241696),
    Z = n(574172),
    $ = n(869146),
    Q = n(976860),
    ee = n(808728),
    el = n(621466),
    en = n(453903),
    et = n(922016),
    ei = n(980707),
    ea = n(477782),
    es = n(22231),
    ec = n(663417),
    er = n(625903),
    eo = n(624479),
    eu = n(365199),
    ed = n(277977),
    eh = n(976814),
    eA = n(50617),
    ep = n(452394);
function eg(e) {
    let {
            onRefresh: l,
            isRefreshing: n,
            canEdit: s,
            onEdit: c,
            canRemix: r,
            onRemix: o,
            projectId: u,
            onProjectSettings: d,
        } = e,
        h = i.useRef(null),
        A = L.intl.string(L.t["UKOtz+"]),
        p = (0, a.bG)([ed.Ay], () => null != u && null != ed.Ay.getSettings(u), [u]),
        g = i.useCallback(() => {
            null != u && (0, eh.A)(u);
        }, [u]);
    return (0, t.jsx)(et.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, el.vq)(document.activeElement, HTMLIFrameElement)) return en.o;
        },
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, t.jsx)(ei.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: i,
                onSelect: i,
                "aria-label": A,
                children: (0, t.jsxs)(ea.rX, {
                    children: [
                        s
                            ? (0, t.jsx)(ea.Dr, {
                                  id: "edit",
                                  icon: es.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: es.PencilIcon },
                                  label: L.intl.string(eA.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, t.jsx)(ea.Dr, {
                            id: "refresh",
                            icon: ec.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: ec.RefreshIcon },
                            label: L.intl.string(eA.default.xKexN1),
                            disabled: n,
                            action: l,
                        }),
                        p
                            ? (0, t.jsx)(ea.Dr, {
                                  id: "settings",
                                  icon: er.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: er.SettingsIcon },
                                  label: L.intl.string(eA.default.gTMvzD),
                                  action: g,
                              })
                            : null,
                        null != d
                            ? (0, t.jsx)(ea.Dr, {
                                  id: "project-settings",
                                  icon: er.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: er.SettingsIcon },
                                  label: L.intl.string(eA.default["xhcY+n"]),
                                  action: d,
                              })
                            : null,
                        r
                            ? (0, t.jsx)(ea.Dr, {
                                  id: "remix",
                                  icon: eo.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: eo.CopyIcon },
                                  label: L.intl.string(eA.default["V+azw/"]),
                                  action: o,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsx)("div", {
                ref: h,
                className: ep.h,
                children: (0, t.jsx)(D.A.Icon, {
                    icon: eu.MoreHorizontalIcon,
                    tooltip: A,
                    "aria-label": A,
                    onClick: l,
                }),
            });
        },
    });
}
var ef = n(534890),
    eI = n(27989),
    eb = n(403853);
function eC(e) {
    let { badge: l, ...n } = e,
        a = i.useId();
    if (null == l) return (0, t.jsx)(ef.ChatIcon, { ...n });
    let s = "custom" === n.size ? { width: n.width, height: n.height } : (0, eI.J)(n.size ?? "md");
    return (0, t.jsxs)("svg", {
        width: s?.width ?? 24,
        height: s?.height ?? 24,
        viewBox: "0 0 24 24",
        className: n.className,
        style: n.style,
        children: [
            (0, t.jsx)("defs", {
                children: (0, t.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, t.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, t.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, t.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, t.jsx)(ef.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: n.color,
                    colorClass: n.colorClass,
                }),
            }),
            (0, t.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? eb.a : eb.Z }),
        ],
    });
}
var ex = n(210744),
    ey = n(869369),
    ej = n(584936),
    em = n(746080),
    ev = n(165610);
function eE(e) {
    let l,
        { applicationId: n, surface: s, guildId: c, channelId: r, project: o, chatOpen: u, onToggleChat: h } = e,
        A = (0, k.A)(n, s),
        { badge: p, mentionCount: f } = (0, a.cf)(
            [d.Ay],
            () => {
                let e = d.Ay.getMentionCount(r);
                return e > 0
                    ? { badge: "mention", mentionCount: e }
                    : d.Ay.hasUnread(r)
                      ? { badge: "unread", mentionCount: e }
                      : { badge: null, mentionCount: e };
            },
            [r],
        ),
        I = (0, K.G)(),
        { remix: b, canRemix: y } =
            ((l = null != c && null != o && (0, C.H_)(o)),
            {
                remix: i.useCallback(() => {
                    null != c && null != o && (0, ej.A)(o, c);
                }, [c, o]),
                canRemix: l,
            }),
        j = null != o && (0, C.PV)(o),
        m = null != c && null != o,
        v = i.useCallback(() => {
            null != c && null != o && (0, Q.pX)(x.BVt.CHANNEL(c, em.VV.VIBEGRATIONS, o.id));
        }, [c, o]),
        E = (0, ev.x1)(A) && A.data.proxyTicketRefreshing,
        w = i.useCallback(() => {
            null == A || E || W.A.refreshProxyTicket(A.id);
        }, [A, E]),
        _ = i.useCallback(() => {
            null != A && (0, Y.A)({ onConfirm: () => (0, J.A)(A.id) });
        }, [A]),
        N = i.useCallback(() => {
            let e = A?.id;
            (null != e &&
                $.A.getWindowOpen(x.MLl.ACTIVITY_POPOUT) &&
                X.A.getMainFrame()?.id === e &&
                (0, Z.close)(x.MLl.ACTIVITY_POPOUT),
                (0, q.A)().leaveFrame(e),
                (0, Q.pX)(
                    (function (e, l) {
                        if (null == e) return x.BVt.FRIENDS;
                        let n = ee.Ay.getDefaultChannel(e);
                        if (null != n && n.id !== l) return x.BVt.CHANNEL(e, n.id);
                        let t = ee.Ay.getFirstChannel(e, (e) => {
                            let { channel: n } = e;
                            return n.id !== l && g.A.can(x.xBc.VIEW_CHANNEL, n);
                        });
                        return null != t ? x.BVt.CHANNEL(e, t.id) : x.BVt.FRIENDS;
                    })(c, (0, ev.h)(s)),
                ));
        }, [A?.id, c, s]),
        O = L.intl.string(!0 === u ? eA.default.YdgE0j : eA.default.aWVf4j),
        S = !0 === u ? null : p,
        T = [O];
    "mention" === S
        ? T.push(L.intl.formatToPlainString(L.t["3l1GOx"], { mentionCount: f }))
        : "unread" === S && T.push(L.intl.string(L.t.x5zAGZ));
    let M = i.useCallback((e) => (0, t.jsx)(eC, { ...e, badge: S }), [S]),
        R =
            null == h
                ? null
                : (0, t.jsx)(D.A.Icon, {
                      icon: M,
                      tooltip: O,
                      "aria-label": T.join(", "),
                      selected: !0 === u,
                      onClick: h,
                  });
    if (!(0, ev.x1)(A)) return R;
    let G = L.intl.string(eA.default["6g22y7"]),
        P = L.intl.string(eA.default.Ea0Wrr);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(eg, {
                projectId: o?.id,
                onRefresh: w,
                isRefreshing: E,
                canEdit: m,
                onEdit: v,
                canRemix: y,
                onRemix: b,
                onProjectSettings: j && null != o ? () => (0, ey.A)(o.id, o.guild_id ?? c ?? void 0) : void 0,
            }),
            R,
            (0, t.jsx)(ex.A, { frame: A, controlProjectId: null != o && n === o.preview_application_id ? o.id : null }),
            I ? (0, t.jsx)(D.A.Icon, { icon: U.t, tooltip: G, "aria-label": G, onClick: _ }) : null,
            (0, t.jsx)(D.A.Icon, { icon: F.DoorExitIcon, tooltip: P, "aria-label": P, onClick: N }),
        ],
    });
}
var ew = n(121063),
    e_ = n(955999);
function eN(e) {
    let l,
        n,
        m,
        v,
        E,
        { channel: w } = e,
        N = (0, A.B9)(w.topic),
        O =
            ((n = null != (l = (0, A.B9)(w?.topic))),
            (m = w?.guild_id ?? null),
            (v = (0, a.bG)(
                [u.A, g.A],
                () => {
                    let e = null != m ? u.A.getGuild(m) : null;
                    return null != e && g.A.can(x.xBc.MANAGE_GUILD, e);
                },
                [m],
            )),
            (E = (0, a.yK)([p.Ay], () => (null != m ? (p.Ay.getSelfMember(m)?.roles ?? []) : []), [m])),
            i.useEffect(() => {
                n && null != l && (0, b.hF)(m ?? void 0);
            }, [n, l, m, v, E]),
            (0, a.bG)(
                [C.Ay],
                () => {
                    if (null == l) return null;
                    let e = C.Ay.findProjectByApplicationId(l);
                    if (null == e || (0, C.PV)(e)) return e;
                    let n = null != m ? f.default.castGuildIdAsEveryoneGuildRoleId(m) : null,
                        t = (e.collaborator_role_ids ?? []).some((e) => e === n || E.includes(e));
                    return e.guild_id === m && (0, I.XE)(e) && (v || t) ? e : null;
                },
                [l, v, E, m],
            )),
        S = (0, r.Ay)(w),
        T = (0, a.bG)([u.A], () => u.A.getGuild(w.guild_id), [w.guild_id]),
        k = (0, a.bG)([j.A], () => j.A.isChatOpen(w.id), [w.id]),
        M = (0, a.bG)([d.Ay], () => d.Ay.hasUnread(w.id), [w.id]),
        R = i.useRef(!1),
        G = i.useRef(!1),
        P = i.useRef(!0);
    i.useEffect(() => {
        ((R.current = !1), (G.current = !1), (P.current = !0));
    }, [w.id]);
    let D = i.useCallback(() => {
            !(d.Ay.getMentionCount(w.id) > 0) &&
                d.Ay.hasUnread(w.id) &&
                (0, c.ack)(
                    w.id,
                    {
                        section: x.JJy.CHANNEL,
                        object: x.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                        objectType: x.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        }, [w.id]),
        B = i.useCallback(
            (e) => {
                ((R.current = !e), e || D(), (0, h.T)(w.id, e));
            },
            [w.id, D],
        ),
        L = i.useCallback(() => B(!k), [k, B]),
        H = i.useCallback(() => B(!1), [B]),
        U = i.useCallback(() => B(!0), [B]);
    (i.useEffect(() => {
        !M ||
            !P.current ||
            ((P.current = !1),
            R.current ||
                j.A.isChatOpen(w.id) ||
                (!G.current &&
                    _.canAutoOpen(Date.now()) &&
                    ((G.current = !0), (0, h.Y)(w.id, Date.now()), (0, h.T)(w.id, !0))));
    }, [M, w.id]),
        i.useEffect(() => {
            function e(e) {
                e.channelId === w.id && (P.current = !1);
            }
            return (s.h.subscribe("MESSAGE_CREATE", e), () => s.h.unsubscribe("MESSAGE_CREATE", e));
        }, [w.id]));
    let F = i.useMemo(() => ({ channel: w, guild: T ?? void 0, open: k, onClose: H }), [w, T, k, H]),
        {
            availability: Y,
            activeMode: K,
            widgetApplicationId: W,
        } = (0, y.q)({
            applicationId: N ?? null,
            previewApplicationId: O?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: O?.install_scope ?? null,
        }),
        X = i.useMemo(() => ({ ...Y, modes: null != K ? [K] : [], defaultMode: K, showModeSwitch: !1 }), [Y, K]),
        q = i.useMemo(() => ({ type: ev.U4.APP_CHANNEL, channelId: w.id, guildId: w.guild_id ?? void 0 }), [w]);
    if (null == N) return null;
    let J = (0, t.jsx)(z, {
        channel: w,
        channelName: S,
        guild: T,
        toolbar: (0, t.jsx)(eE, {
            applicationId: N,
            surface: q,
            guildId: w.guild_id,
            channelId: w.id,
            project: O ?? null,
            chatOpen: k,
            onToggleChat: L,
        }),
    });
    return (0, t.jsxs)("div", {
        className: e_.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, t.jsx)(o.HI, { location: T?.name, subsection: S ?? void 0 }),
            (0, t.jsx)(ew.A, {
                availability: X,
                activeMode: K,
                widgetApplicationId: W,
                projectId: O?.id ?? null,
                installScope: O?.install_scope ?? null,
                previewApplicationId: O?.preview_application_id ?? null,
                applicationId: N,
                surface: q,
                header: J,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: F,
            }),
            k ? null : (0, t.jsx)(V, { channelId: w.id, applicationId: N, surface: q, onOpenChat: U }),
        ],
    });
}
