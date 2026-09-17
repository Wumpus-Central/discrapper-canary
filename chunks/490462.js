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
    p = n(595332),
    g = n(927813);
let f = { lastAutoOpenedAt: null },
    I = f;
class b extends a.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        I = e ?? f;
    }
    getState() {
        return I;
    }
    canAutoOpen(e) {
        return null == I.lastAutoOpenedAt || e - I.lastAutoOpenedAt >= g.A.Millis.DAY;
    }
}
let C = new b(s.h, {
    LOGOUT: function () {
        if (null == I.lastAutoOpenedAt) return !1;
        I = f;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: l } = e;
        I = { lastAutoOpenedAt: l };
    },
});
var x = n(333007),
    y = n(192308),
    j = n(148494),
    m = n(281969),
    v = n(672929),
    E = n(20465),
    w = n(249288),
    _ = n(120426),
    N = n(563013);
function O(e) {
    let l,
        { channelId: n, applicationId: s, surface: c, onOpenChat: r } = e,
        o = (0, v.A)(s, c),
        u = o?.id ?? null,
        d =
            ((l = i.useCallback((e) => m.A.subscribe(e), [])),
            i.useSyncExternalStore(l, () => null != u && m.A.isFrameVisible(u))),
        h = (0, a.bG)([w.A], () => w.A.getToastsEnabled(n), [n]),
        A = d && h,
        p = (0, y.useHasAnyModalOpen)(),
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
            })((0, _.F)(null, u));
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
            (r(), j.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [r],
    );
    return !A || null == g || p
        ? null
        : (0, x.createPortal)(
              (0, t.jsx)("div", {
                  className: N.T,
                  style: { top: g.top, left: g.left, width: g.width, height: g.height / 2 },
                  children: (0, t.jsx)("div", {
                      className: N.f,
                      children: (0, t.jsx)(E.A, { channelId: n, onToastClick: I }),
                  }),
              }),
              document.body,
          );
}
var S = n(742589),
    T = n(353428),
    k = n(375708),
    M = n(999900);
function R(e) {
    let { channel: l, channelName: n, guild: i, toolbar: a } = e;
    return (0, t.jsx)("div", {
        className: M.SC,
        children: (0, t.jsx)(
            S.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: M.DD,
                "aria-label": k.intl.string(k.t.BIYAqa),
                children: (0, T.zF)({ channel: l, channelName: n, guild: i }),
            },
            `header-${l.id}`,
        ),
    });
}
n(321073);
var G = n(811893),
    P = n(70688),
    V = n(47294),
    D = n(16961),
    B = n(625180),
    L = n(91242),
    H = n(580954),
    z = n(241696),
    U = n(574172),
    F = n(869146),
    Y = n(976860),
    K = n(808728),
    W = n(576705),
    X = n(972786),
    q = n(621466),
    J = n(453903),
    Z = n(922016),
    $ = n(980707),
    Q = n(477782),
    ee = n(22231),
    el = n(663417),
    en = n(625903),
    et = n(624479),
    ei = n(365199),
    ea = n(277977),
    es = n(976814),
    ec = n(50617),
    er = n(452394);
function eo(e) {
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
        A = k.intl.string(k.t["UKOtz+"]),
        p = (0, a.bG)([ea.Ay], () => null != u && null != ea.Ay.getSettings(u), [u]),
        g = i.useCallback(() => {
            null != u && (0, es.A)(u);
        }, [u]);
    return (0, t.jsx)(Z.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, q.vq)(document.activeElement, HTMLIFrameElement)) return J.o;
        },
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, t.jsx)($.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: i,
                onSelect: i,
                "aria-label": A,
                children: (0, t.jsxs)(Q.rX, {
                    children: [
                        s
                            ? (0, t.jsx)(Q.Dr, {
                                  id: "edit",
                                  icon: ee.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: ee.PencilIcon },
                                  label: k.intl.string(ec.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, t.jsx)(Q.Dr, {
                            id: "refresh",
                            icon: el.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: el.RefreshIcon },
                            label: k.intl.string(ec.default.xKexN1),
                            disabled: n,
                            action: l,
                        }),
                        p
                            ? (0, t.jsx)(Q.Dr, {
                                  id: "settings",
                                  icon: en.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: en.SettingsIcon },
                                  label: k.intl.string(ec.default.gTMvzD),
                                  action: g,
                              })
                            : null,
                        null != d
                            ? (0, t.jsx)(Q.Dr, {
                                  id: "project-settings",
                                  icon: en.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: en.SettingsIcon },
                                  label: k.intl.string(ec.default["xhcY+n"]),
                                  action: d,
                              })
                            : null,
                        r
                            ? (0, t.jsx)(Q.Dr, {
                                  id: "remix",
                                  icon: et.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: et.CopyIcon },
                                  label: k.intl.string(ec.default["V+azw/"]),
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
                className: er.h,
                children: (0, t.jsx)(S.A.Icon, {
                    icon: ei.MoreHorizontalIcon,
                    tooltip: A,
                    "aria-label": A,
                    onClick: l,
                }),
            });
        },
    });
}
var eu = n(534890),
    ed = n(27989),
    eh = n(403853);
function eA(e) {
    let { badge: l, ...n } = e,
        a = i.useId();
    if (null == l) return (0, t.jsx)(eu.ChatIcon, { ...n });
    let s = "custom" === n.size ? { width: n.width, height: n.height } : (0, ed.J)(n.size ?? "md");
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
                children: (0, t.jsx)(eu.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: n.color,
                    colorClass: n.colorClass,
                }),
            }),
            (0, t.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? eh.a : eh.Z }),
        ],
    });
}
var ep = n(210744),
    eg = n(869369),
    ef = n(584936),
    eI = n(652215),
    eb = n(746080),
    eC = n(165610);
function ex(e) {
    let l,
        { applicationId: n, surface: s, guildId: c, channelId: r, project: o, chatOpen: u, onToggleChat: h } = e,
        A = (0, v.A)(n, s),
        { badge: p, mentionCount: g } = (0, a.cf)(
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
        f = (0, D.G)(),
        { remix: I, canRemix: b } =
            ((l = null != c && null != o && (0, X.H_)(o)),
            {
                remix: i.useCallback(() => {
                    null != c && null != o && (0, ef.A)(o, c);
                }, [c, o]),
                canRemix: l,
            }),
        C = null != o && (0, X.PV)(o),
        x = null != c && null != o,
        y = i.useCallback(() => {
            null != c && null != o && (0, Y.pX)(eI.BVt.CHANNEL(c, eb.VV.VIBEGRATIONS, o.id));
        }, [c, o]),
        j = (0, eC.x1)(A) && A.data.proxyTicketRefreshing,
        m = i.useCallback(() => {
            null == A || j || B.A.refreshProxyTicket(A.id);
        }, [A, j]),
        E = i.useCallback(() => {
            null != A && (0, V.A)({ onConfirm: () => (0, z.A)(A.id) });
        }, [A]),
        w = i.useCallback(() => {
            let e = A?.id;
            (null != e &&
                F.A.getWindowOpen(eI.MLl.ACTIVITY_POPOUT) &&
                L.A.getMainFrame()?.id === e &&
                (0, U.close)(eI.MLl.ACTIVITY_POPOUT),
                (0, H.A)().leaveFrame(e),
                (0, Y.pX)(
                    (function (e, l) {
                        if (null == e) return eI.BVt.FRIENDS;
                        let n = K.Ay.getDefaultChannel(e);
                        if (null != n && n.id !== l) return eI.BVt.CHANNEL(e, n.id);
                        let t = K.Ay.getFirstChannel(e, (e) => {
                            let { channel: n } = e;
                            return n.id !== l && W.A.can(eI.xBc.VIEW_CHANNEL, n);
                        });
                        return null != t ? eI.BVt.CHANNEL(e, t.id) : eI.BVt.FRIENDS;
                    })(c, (0, eC.h)(s)),
                ));
        }, [A?.id, c, s]),
        _ = k.intl.string(!0 === u ? ec.default.YdgE0j : ec.default.aWVf4j),
        N = !0 === u ? null : p,
        O = [_];
    "mention" === N
        ? O.push(k.intl.formatToPlainString(k.t["3l1GOx"], { mentionCount: g }))
        : "unread" === N && O.push(k.intl.string(k.t.x5zAGZ));
    let T = i.useCallback((e) => (0, t.jsx)(eA, { ...e, badge: N }), [N]),
        M =
            null == h
                ? null
                : (0, t.jsx)(S.A.Icon, {
                      icon: T,
                      tooltip: _,
                      "aria-label": O.join(", "),
                      selected: !0 === u,
                      onClick: h,
                  });
    if (!(0, eC.x1)(A)) return M;
    let R = k.intl.string(ec.default["6g22y7"]),
        q = k.intl.string(ec.default.Ea0Wrr);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(eo, {
                projectId: o?.id,
                onRefresh: m,
                isRefreshing: j,
                canEdit: x,
                onEdit: y,
                canRemix: b,
                onRemix: I,
                onProjectSettings: C && null != o ? () => (0, eg.A)(o.id, o.guild_id ?? c ?? void 0) : void 0,
            }),
            M,
            (0, t.jsx)(ep.A, { frame: A, controlProjectId: null != o && n === o.preview_application_id ? o.id : null }),
            f ? (0, t.jsx)(S.A.Icon, { icon: G.t, tooltip: R, "aria-label": R, onClick: E }) : null,
            (0, t.jsx)(S.A.Icon, { icon: P.DoorExitIcon, tooltip: q, "aria-label": q, onClick: w }),
        ],
    });
}
var ey = n(641985),
    ej = n(696451),
    em = n(935208),
    ev = n(673724),
    eE = n(948230),
    ew = n(899154),
    e_ = n(955999);
function eN(e) {
    let l,
        n,
        g,
        f,
        I,
        { channel: b } = e,
        x = (0, A.B9)(b.topic),
        y =
            ((n = null != (l = (0, A.B9)(b?.topic))),
            (g = b?.guild_id ?? null),
            (f = (0, a.bG)(
                [u.A, W.A],
                () => {
                    let e = null != g ? u.A.getGuild(g) : null;
                    return null != e && W.A.can(eI.xBc.MANAGE_GUILD, e);
                },
                [g],
            )),
            (I = (0, a.yK)([ej.Ay], () => (null != g ? (ej.Ay.getSelfMember(g)?.roles ?? []) : []), [g])),
            i.useEffect(() => {
                n && null != l && (0, eE.hF)(g ?? void 0);
            }, [n, l, g, f, I]),
            (0, a.bG)(
                [X.Ay],
                () => {
                    if (null == l) return null;
                    let e = X.Ay.findProjectByApplicationId(l);
                    if (null == e || (0, X.PV)(e)) return e;
                    let n = null != g ? em.default.castGuildIdAsEveryoneGuildRoleId(g) : null,
                        t = (e.collaborator_role_ids ?? []).some((e) => e === n || I.includes(e));
                    return e.guild_id === g && (0, ev.XE)(e) && (f || t) ? e : null;
                },
                [l, f, I, g],
            )),
        j = (0, r.Ay)(b),
        m = (0, a.bG)([u.A], () => u.A.getGuild(b.guild_id), [b.guild_id]),
        v = (0, a.bG)([p.A], () => p.A.isChatOpen(b.id), [b.id]),
        E = (0, a.bG)([d.Ay], () => d.Ay.hasUnread(b.id), [b.id]),
        w = i.useRef(!1),
        _ = i.useRef(!1),
        N = i.useRef(!0);
    i.useEffect(() => {
        ((w.current = !1), (_.current = !1), (N.current = !0));
    }, [b.id]);
    let S = i.useCallback(() => {
            !(d.Ay.getMentionCount(b.id) > 0) &&
                d.Ay.hasUnread(b.id) &&
                (0, c.ack)(
                    b.id,
                    {
                        section: eI.JJy.CHANNEL,
                        object: eI.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                        objectType: eI.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        }, [b.id]),
        T = i.useCallback(
            (e) => {
                ((w.current = !e), e || S(), (0, h.T)(b.id, e));
            },
            [b.id, S],
        ),
        k = i.useCallback(() => T(!v), [v, T]),
        M = i.useCallback(() => T(!1), [T]),
        G = i.useCallback(() => T(!0), [T]);
    (i.useEffect(() => {
        !E ||
            !N.current ||
            ((N.current = !1),
            w.current ||
                p.A.isChatOpen(b.id) ||
                (!_.current &&
                    C.canAutoOpen(Date.now()) &&
                    ((_.current = !0), (0, h.Y)(b.id, Date.now()), (0, h.T)(b.id, !0))));
    }, [E, b.id]),
        i.useEffect(() => {
            function e(e) {
                e.channelId === b.id && (N.current = !1);
            }
            return (s.h.subscribe("MESSAGE_CREATE", e), () => s.h.unsubscribe("MESSAGE_CREATE", e));
        }, [b.id]));
    let P = i.useMemo(() => ({ channel: b, guild: m ?? void 0, open: v, onClose: M }), [b, m, v, M]),
        {
            availability: V,
            activeMode: D,
            widgetApplicationId: B,
        } = (0, ew.q)({
            applicationId: x ?? null,
            previewApplicationId: y?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: y?.install_scope ?? null,
        }),
        L = i.useMemo(() => ({ ...V, modes: null != D ? [D] : [], defaultMode: D, showModeSwitch: !1 }), [V, D]),
        H = i.useMemo(() => ({ type: eC.U4.APP_CHANNEL, channelId: b.id, guildId: b.guild_id ?? void 0 }), [b]);
    if (null == x) return null;
    let z = (0, t.jsx)(R, {
        channel: b,
        channelName: j,
        guild: m,
        toolbar: (0, t.jsx)(ex, {
            applicationId: x,
            surface: H,
            guildId: b.guild_id,
            channelId: b.id,
            project: y ?? null,
            chatOpen: v,
            onToggleChat: k,
        }),
    });
    return (0, t.jsxs)("div", {
        className: e_.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, t.jsx)(o.HI, { location: m?.name, subsection: j ?? void 0 }),
            (0, t.jsx)(ey.A, {
                availability: L,
                activeMode: D,
                widgetApplicationId: B,
                projectId: y?.id ?? null,
                installScope: y?.install_scope ?? null,
                previewApplicationId: y?.preview_application_id ?? null,
                applicationId: x,
                surface: H,
                header: z,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: P,
            }),
            v ? null : (0, t.jsx)(O, { channelId: b.id, applicationId: x, surface: H, onOpenChat: G }),
        ],
    });
}
