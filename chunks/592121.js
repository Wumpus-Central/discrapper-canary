(n.r(l), n.d(l, { default: () => eN }));
var t = n(477900),
    i = n(582128),
    a = n(991690),
    r = n(17928),
    s = n(228366),
    c = n(334738),
    u = n(47167),
    o = n(726249),
    d = n(71393),
    h = n(573163),
    A = n(662980),
    p = n(683180),
    g = n(696451),
    f = n(576705),
    I = n(935208),
    b = n(673724),
    C = n(948230),
    x = n(972786),
    y = n(652215),
    j = n(822835),
    m = n(595332),
    E = n(927813);
let v = { lastAutoOpenedAt: null },
    w = v;
class _ extends r.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        w = e ?? v;
    }
    getState() {
        return w;
    }
    canAutoOpen(e) {
        return null == w.lastAutoOpenedAt || e - w.lastAutoOpenedAt >= E.A.Millis.DAY;
    }
}
let N = new _(s.h, {
    LOGOUT: function () {
        if (null == w.lastAutoOpenedAt) return !1;
        w = v;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: l } = e;
        w = { lastAutoOpenedAt: l };
    },
});
var O = n(333007),
    T = n(192308),
    k = n(148494),
    S = n(281969),
    M = n(672929),
    R = n(20465),
    G = n(249288),
    P = n(120426),
    V = n(563013);
function B(e) {
    let l,
        { channelId: n, applicationId: a, surface: s, onOpenChat: c } = e,
        u = (0, M.A)(a, s),
        o = u?.id ?? null,
        d =
            ((l = i.useCallback((e) => S.A.subscribe(e), [])),
            i.useSyncExternalStore(l, () => null != o && S.A.isFrameVisible(o))),
        h = (0, r.bG)([G.A], () => G.A.getToastsEnabled(n), [n]),
        A = d && h,
        p = (0, T.useHasAnyModalOpen)(),
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
            })((0, P.F)(null, o));
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
    }, [A, o]);
    let I = i.useCallback(
        (e) => {
            (c(), k.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [c],
    );
    return !A || null == g || p
        ? null
        : (0, O.createPortal)(
              (0, t.jsx)("div", {
                  className: V.T,
                  style: { top: g.top, left: g.left, width: g.width, height: g.height / 2 },
                  children: (0, t.jsx)("div", {
                      className: V.f,
                      children: (0, t.jsx)(R.A, { channelId: n, onToastClick: I }),
                  }),
              }),
              document.body,
          );
}
var D = n(742589),
    L = n(353428),
    H = n(375708),
    z = n(999900);
function U(e) {
    let { channel: l, channelName: n, guild: i, toolbar: a } = e;
    return (0, t.jsx)("div", {
        className: z.SC,
        children: (0, t.jsx)(
            D.A,
            {
                guildId: l.guild_id,
                channelId: l.id,
                channelType: l.type,
                hideSearch: !0,
                toolbar: a,
                className: z.DD,
                "aria-label": H.intl.string(H.t.BIYAqa),
                children: (0, L.zF)({ channel: l, channelName: n, guild: i }),
            },
            `header-${l.id}`,
        ),
    });
}
n(321073);
var F = n(811893),
    Y = n(70688),
    K = n(47294),
    W = n(16961),
    X = n(625180),
    q = n(91242),
    J = n(580954),
    Z = n(241696),
    $ = n(574172),
    Q = n(869146),
    ee = n(976860),
    el = n(808728),
    en = n(621466),
    et = n(453903),
    ei = n(922016),
    ea = n(980707),
    er = n(477782),
    es = n(22231),
    ec = n(663417),
    eu = n(625903),
    eo = n(624479),
    ed = n(365199),
    eh = n(277977),
    eA = n(976814),
    ep = n(50617),
    eg = n(452394);
function ef(e) {
    let {
            onRefresh: l,
            isRefreshing: n,
            canEdit: a,
            onEdit: s,
            canRemix: c,
            onRemix: u,
            projectId: o,
            isOwner: d,
            guildId: h,
        } = e,
        A = i.useRef(null),
        p = H.intl.string(H.t["UKOtz+"]),
        g = (0, r.bG)([eh.Ay], () => null != o && null != eh.Ay.getSettings(o), [o]),
        f = i.useCallback(() => {
            null != o && (0, eA.A)(o, { guildId: h, initialTab: "app" });
        }, [h, o]);
    return (0, t.jsx)(ei.Y, {
        targetElementRef: A,
        align: "right",
        position: "bottom",
        onRequestClose: (e, l) => {
            if ("user:escape" === l && (0, en.vq)(document.activeElement, HTMLIFrameElement)) return et.o;
        },
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, t.jsx)(ea.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: i,
                onSelect: i,
                "aria-label": p,
                children: (0, t.jsxs)(er.rX, {
                    children: [
                        a
                            ? (0, t.jsx)(er.Dr, {
                                  id: "edit",
                                  icon: es.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: es.PencilIcon },
                                  label: H.intl.string(ep.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, t.jsx)(er.Dr, {
                            id: "refresh",
                            icon: ec.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: ec.RefreshIcon },
                            label: H.intl.string(ep.default.xKexN1),
                            disabled: n,
                            action: l,
                        }),
                        null != o && (g || d)
                            ? (0, t.jsx)(er.Dr, {
                                  id: "settings",
                                  icon: eu.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: eu.SettingsIcon },
                                  label: H.intl.string(ep.default.cWmjzs),
                                  action: f,
                              })
                            : null,
                        c
                            ? (0, t.jsx)(er.Dr, {
                                  id: "remix",
                                  icon: eo.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: eo.CopyIcon },
                                  label: H.intl.string(ep.default["V+azw/"]),
                                  action: u,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsx)("div", {
                ref: A,
                className: eg.h,
                children: (0, t.jsx)(D.A.Icon, {
                    icon: ed.MoreHorizontalIcon,
                    tooltip: p,
                    "aria-label": p,
                    onClick: l,
                }),
            });
        },
    });
}
var eI = n(534890),
    eb = n(27989),
    eC = n(403853);
function ex(e) {
    let { badge: l, ...n } = e,
        a = i.useId();
    if (null == l) return (0, t.jsx)(eI.ChatIcon, { ...n });
    let r = "custom" === n.size ? { width: n.width, height: n.height } : (0, eb.J)(n.size ?? "md");
    return (0, t.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
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
                children: (0, t.jsx)(eI.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: n.color,
                    colorClass: n.colorClass,
                }),
            }),
            (0, t.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === l ? eC.a : eC.Z }),
        ],
    });
}
var ey = n(210744),
    ej = n(584936),
    em = n(746080),
    eE = n(165610);
function ev(e) {
    let l,
        { applicationId: n, surface: a, guildId: s, channelId: c, project: u, chatOpen: o, onToggleChat: d } = e,
        A = (0, M.A)(n, a),
        { badge: p, mentionCount: g } = (0, r.cf)(
            [h.Ay],
            () => {
                let e = h.Ay.getMentionCount(c);
                return e > 0
                    ? { badge: "mention", mentionCount: e }
                    : h.Ay.hasUnread(c)
                      ? { badge: "unread", mentionCount: e }
                      : { badge: null, mentionCount: e };
            },
            [c],
        ),
        I = (0, W.G)(),
        { remix: b, canRemix: C } =
            ((l = null != s && null != u && (0, x.H_)(u)),
            {
                remix: i.useCallback(() => {
                    null != s && null != u && (0, ej.A)(u, s);
                }, [s, u]),
                canRemix: l,
            }),
        j = null != u && (0, x.PV)(u),
        m = null != s && null != u,
        E = i.useCallback(() => {
            null != s && null != u && (0, ee.pX)(y.BVt.CHANNEL(s, em.VV.VIBEGRATIONS, u.id));
        }, [s, u]),
        v = (0, eE.x1)(A) && A.data.proxyTicketRefreshing,
        w = i.useCallback(() => {
            null == A || v || X.A.refreshProxyTicket(A.id);
        }, [A, v]),
        _ = i.useCallback(() => {
            null != A && (0, K.A)({ onConfirm: () => (0, Z.A)(A.id) });
        }, [A]),
        N = i.useCallback(() => {
            let e = A?.id;
            (null != e &&
                Q.A.getWindowOpen(y.MLl.ACTIVITY_POPOUT) &&
                q.A.getMainFrame()?.id === e &&
                (0, $.close)(y.MLl.ACTIVITY_POPOUT),
                (0, J.A)().leaveFrame(e),
                (0, ee.pX)(
                    (function (e, l) {
                        if (null == e) return y.BVt.FRIENDS;
                        let n = el.Ay.getDefaultChannel(e);
                        if (null != n && n.id !== l) return y.BVt.CHANNEL(e, n.id);
                        let t = el.Ay.getFirstChannel(e, (e) => {
                            let { channel: n } = e;
                            return n.id !== l && f.A.can(y.xBc.VIEW_CHANNEL, n);
                        });
                        return null != t ? y.BVt.CHANNEL(e, t.id) : y.BVt.FRIENDS;
                    })(s, (0, eE.h)(a)),
                ));
        }, [A?.id, s, a]),
        O = H.intl.string(!0 === o ? ep.default.YdgE0j : ep.default.aWVf4j),
        T = !0 === o ? null : p,
        k = [O];
    "mention" === T
        ? k.push(H.intl.formatToPlainString(H.t["3l1GOx"], { mentionCount: g }))
        : "unread" === T && k.push(H.intl.string(H.t.x5zAGZ));
    let S = i.useCallback((e) => (0, t.jsx)(ex, { ...e, badge: T }), [T]),
        R =
            null == d
                ? null
                : (0, t.jsx)(D.A.Icon, {
                      icon: S,
                      tooltip: O,
                      "aria-label": k.join(", "),
                      selected: !0 === o,
                      onClick: d,
                  });
    if (!(0, eE.x1)(A)) return R;
    let G = H.intl.string(ep.default["6g22y7"]),
        P = H.intl.string(ep.default.Ea0Wrr);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(ef, {
                projectId: u?.id,
                onRefresh: w,
                isRefreshing: v,
                canEdit: m,
                onEdit: E,
                canRemix: C,
                onRemix: b,
                isOwner: j,
                guildId: s,
            }),
            R,
            (0, t.jsx)(ey.A, { frame: A, controlProjectId: null != u && n === u.preview_application_id ? u.id : null }),
            I ? (0, t.jsx)(D.A.Icon, { icon: F.t, tooltip: G, "aria-label": G, onClick: _ }) : null,
            (0, t.jsx)(D.A.Icon, { icon: Y.DoorExitIcon, tooltip: P, "aria-label": P, onClick: N }),
        ],
    });
}
var ew = n(884599),
    e_ = n(955999);
function eN(e) {
    let l,
        n,
        E,
        v,
        w,
        { channel: _ } = e,
        O = (0, p.B9)(_.topic),
        T =
            ((n = null != (l = (0, p.B9)(_?.topic))),
            (E = _?.guild_id ?? null),
            (v = (0, r.bG)(
                [d.A, f.A],
                () => {
                    let e = null != E ? d.A.getGuild(E) : null;
                    return null != e && f.A.can(y.xBc.MANAGE_GUILD, e);
                },
                [E],
            )),
            (w = (0, r.yK)([g.Ay], () => (null != E ? (g.Ay.getSelfMember(E)?.roles ?? []) : []), [E])),
            i.useEffect(() => {
                n && null != l && (0, C.hF)(E ?? void 0);
            }, [n, l, E, v, w]),
            (0, r.bG)(
                [x.Ay],
                () => {
                    if (null == l) return null;
                    let e = x.Ay.findProjectByApplicationId(l);
                    if (null == e || (0, x.PV)(e)) return e;
                    let n = null != E ? I.default.castGuildIdAsEveryoneGuildRoleId(E) : null,
                        t = (e.collaborator_role_ids ?? []).some((e) => e === n || w.includes(e));
                    return e.guild_id === E && (0, b.XE)(e) && (v || t) ? e : null;
                },
                [l, v, w, E],
            )),
        k = (0, u.Ay)(_),
        S = (0, r.bG)([d.A], () => d.A.getGuild(_.guild_id), [_.guild_id]),
        M = (0, r.bG)([m.A], () => m.A.isChatOpen(_.id), [_.id]),
        R = (0, r.bG)([h.Ay], () => h.Ay.hasUnread(_.id), [_.id]),
        G = i.useRef(!1),
        P = i.useRef(!1),
        V = i.useRef(!0);
    i.useEffect(() => {
        ((G.current = !1), (P.current = !1), (V.current = !0));
    }, [_.id]);
    let D = i.useCallback(() => {
            !(h.Ay.getMentionCount(_.id) > 0) &&
                h.Ay.hasUnread(_.id) &&
                (0, c.ack)(
                    _.id,
                    {
                        section: y.JJy.CHANNEL,
                        object: y.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                        objectType: y.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        }, [_.id]),
        L = i.useCallback(
            (e) => {
                ((G.current = !e), e || D(), (0, A.T)(_.id, e));
            },
            [_.id, D],
        ),
        H = i.useCallback(() => L(!M), [M, L]),
        z = i.useCallback(() => L(!1), [L]),
        F = i.useCallback(() => L(!0), [L]);
    (i.useEffect(() => {
        !R ||
            !V.current ||
            ((V.current = !1),
            G.current ||
                m.A.isChatOpen(_.id) ||
                (!P.current &&
                    N.canAutoOpen(Date.now()) &&
                    ((P.current = !0), (0, A.Y)(_.id, Date.now()), (0, A.T)(_.id, !0))));
    }, [R, _.id]),
        i.useEffect(() => {
            function e(e) {
                e.channelId === _.id && (V.current = !1);
            }
            return (s.h.subscribe("MESSAGE_CREATE", e), () => s.h.unsubscribe("MESSAGE_CREATE", e));
        }, [_.id]));
    let Y = i.useMemo(() => ({ channel: _, guild: S ?? void 0, open: M, onClose: z }), [_, S, M, z]),
        {
            availability: K,
            activeMode: W,
            widgetApplicationId: X,
        } = (0, j.q)({
            applicationId: O ?? null,
            previewApplicationId: T?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: T?.install_scope ?? null,
        }),
        q = i.useMemo(() => ({ ...K, modes: null != W ? [W] : [], defaultMode: W, showModeSwitch: !1 }), [K, W]),
        J = i.useMemo(() => ({ type: a.U.APP_CHANNEL, channelId: _.id, guildId: _.guild_id ?? void 0 }), [_]);
    if (null == O) return null;
    let Z = (0, t.jsx)(U, {
        channel: _,
        channelName: k,
        guild: S,
        toolbar: (0, t.jsx)(ev, {
            applicationId: O,
            surface: J,
            guildId: _.guild_id,
            channelId: _.id,
            project: T ?? null,
            chatOpen: M,
            onToggleChat: H,
        }),
    });
    return (0, t.jsxs)("div", {
        className: e_.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, t.jsx)(o.HI, { location: S?.name, subsection: k ?? void 0 }),
            (0, t.jsx)(ew.A, {
                availability: q,
                activeMode: W,
                widgetApplicationId: X,
                projectId: T?.id ?? null,
                installScope: T?.install_scope ?? null,
                previewApplicationId: T?.preview_application_id ?? null,
                applicationId: O,
                surface: J,
                header: Z,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: Y,
            }),
            M ? null : (0, t.jsx)(B, { channelId: _.id, applicationId: O, surface: J, onOpenChat: F }),
        ],
    });
}
