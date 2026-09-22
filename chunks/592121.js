(n.r(l), n.d(l, { default: () => eO }));
var t = n(477900),
    i = n(582128),
    a = n(991690),
    s = n(17928),
    c = n(228366),
    r = n(334738),
    o = n(47167),
    u = n(726249),
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
    v = n(927813);
let E = { lastAutoOpenedAt: null },
    w = E;
class _ extends s.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        w = e ?? E;
    }
    getState() {
        return w;
    }
    canAutoOpen(e) {
        return null == w.lastAutoOpenedAt || e - w.lastAutoOpenedAt >= v.A.Millis.DAY;
    }
}
let N = new _(c.h, {
    LOGOUT: function () {
        if (null == w.lastAutoOpenedAt) return !1;
        w = E;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: l } = e;
        w = { lastAutoOpenedAt: l };
    },
});
var O = n(333007),
    S = n(192308),
    T = n(148494),
    k = n(281969),
    M = n(672929),
    R = n(20465),
    G = n(249288),
    P = n(120426),
    V = n(563013);
function D(e) {
    let l,
        { channelId: n, applicationId: a, surface: c, onOpenChat: r } = e,
        o = (0, M.A)(a, c),
        u = o?.id ?? null,
        d =
            ((l = i.useCallback((e) => k.A.subscribe(e), [])),
            i.useSyncExternalStore(l, () => null != u && k.A.isFrameVisible(u))),
        h = (0, s.bG)([G.A], () => G.A.getToastsEnabled(n), [n]),
        A = d && h,
        p = (0, S.useHasAnyModalOpen)(),
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
            })((0, P.F)(null, u));
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
            (r(), T.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [r],
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
var B = n(742589),
    L = n(353428),
    H = n(375708),
    z = n(999900);
function U(e) {
    let { channel: l, channelName: n, guild: i, toolbar: a } = e;
    return (0, t.jsx)("div", {
        className: z.SC,
        children: (0, t.jsx)(
            B.A,
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
    es = n(477782),
    ec = n(22231),
    er = n(663417),
    eo = n(625903),
    eu = n(624479),
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
            onEdit: c,
            canRemix: r,
            onRemix: o,
            projectId: u,
            onProjectSettings: d,
        } = e,
        h = i.useRef(null),
        A = H.intl.string(H.t["UKOtz+"]),
        p = (0, s.bG)([eh.Ay], () => null != u && null != eh.Ay.getSettings(u), [u]),
        g = i.useCallback(() => {
            null != u && (0, eA.A)(u);
        }, [u]);
    return (0, t.jsx)(ei.Y, {
        targetElementRef: h,
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
                "aria-label": A,
                children: (0, t.jsxs)(es.rX, {
                    children: [
                        a
                            ? (0, t.jsx)(es.Dr, {
                                  id: "edit",
                                  icon: ec.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: ec.PencilIcon },
                                  label: H.intl.string(ep.default.NXfIfj),
                                  action: c,
                              })
                            : null,
                        (0, t.jsx)(es.Dr, {
                            id: "refresh",
                            icon: er.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: er.RefreshIcon },
                            label: H.intl.string(ep.default.xKexN1),
                            disabled: n,
                            action: l,
                        }),
                        p
                            ? (0, t.jsx)(es.Dr, {
                                  id: "settings",
                                  icon: eo.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: eo.SettingsIcon },
                                  label: H.intl.string(ep.default.gTMvzD),
                                  action: g,
                              })
                            : null,
                        null != d
                            ? (0, t.jsx)(es.Dr, {
                                  id: "project-settings",
                                  icon: eo.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: eo.SettingsIcon },
                                  label: H.intl.string(ep.default["xhcY+n"]),
                                  action: d,
                              })
                            : null,
                        r
                            ? (0, t.jsx)(es.Dr, {
                                  id: "remix",
                                  icon: eu.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: eu.CopyIcon },
                                  label: H.intl.string(ep.default["V+azw/"]),
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
                className: eg.h,
                children: (0, t.jsx)(B.A.Icon, {
                    icon: ed.MoreHorizontalIcon,
                    tooltip: A,
                    "aria-label": A,
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
    let s = "custom" === n.size ? { width: n.width, height: n.height } : (0, eb.J)(n.size ?? "md");
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
    ej = n(869369),
    em = n(584936),
    ev = n(746080),
    eE = n(165610);
function ew(e) {
    let l,
        { applicationId: n, surface: a, guildId: c, channelId: r, project: o, chatOpen: u, onToggleChat: d } = e,
        A = (0, M.A)(n, a),
        { badge: p, mentionCount: g } = (0, s.cf)(
            [h.Ay],
            () => {
                let e = h.Ay.getMentionCount(r);
                return e > 0
                    ? { badge: "mention", mentionCount: e }
                    : h.Ay.hasUnread(r)
                      ? { badge: "unread", mentionCount: e }
                      : { badge: null, mentionCount: e };
            },
            [r],
        ),
        I = (0, W.G)(),
        { remix: b, canRemix: C } =
            ((l = null != c && null != o && (0, x.H_)(o)),
            {
                remix: i.useCallback(() => {
                    null != c && null != o && (0, em.A)(o, c);
                }, [c, o]),
                canRemix: l,
            }),
        j = null != o && (0, x.PV)(o),
        m = null != c && null != o,
        v = i.useCallback(() => {
            null != c && null != o && (0, ee.pX)(y.BVt.CHANNEL(c, ev.VV.VIBEGRATIONS, o.id));
        }, [c, o]),
        E = (0, eE.x1)(A) && A.data.proxyTicketRefreshing,
        w = i.useCallback(() => {
            null == A || E || X.A.refreshProxyTicket(A.id);
        }, [A, E]),
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
                    })(c, (0, eE.h)(a)),
                ));
        }, [A?.id, c, a]),
        O = H.intl.string(!0 === u ? ep.default.YdgE0j : ep.default.aWVf4j),
        S = !0 === u ? null : p,
        T = [O];
    "mention" === S
        ? T.push(H.intl.formatToPlainString(H.t["3l1GOx"], { mentionCount: g }))
        : "unread" === S && T.push(H.intl.string(H.t.x5zAGZ));
    let k = i.useCallback((e) => (0, t.jsx)(ex, { ...e, badge: S }), [S]),
        R =
            null == d
                ? null
                : (0, t.jsx)(B.A.Icon, {
                      icon: k,
                      tooltip: O,
                      "aria-label": T.join(", "),
                      selected: !0 === u,
                      onClick: d,
                  });
    if (!(0, eE.x1)(A)) return R;
    let G = H.intl.string(ep.default["6g22y7"]),
        P = H.intl.string(ep.default.Ea0Wrr);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(ef, {
                projectId: o?.id,
                onRefresh: w,
                isRefreshing: E,
                canEdit: m,
                onEdit: v,
                canRemix: C,
                onRemix: b,
                onProjectSettings: j && null != o ? () => (0, ej.A)(o.id, o.guild_id ?? c ?? void 0) : void 0,
            }),
            R,
            (0, t.jsx)(ey.A, { frame: A, controlProjectId: null != o && n === o.preview_application_id ? o.id : null }),
            I ? (0, t.jsx)(B.A.Icon, { icon: F.t, tooltip: G, "aria-label": G, onClick: _ }) : null,
            (0, t.jsx)(B.A.Icon, { icon: Y.DoorExitIcon, tooltip: P, "aria-label": P, onClick: N }),
        ],
    });
}
var e_ = n(87143),
    eN = n(955999);
function eO(e) {
    let l,
        n,
        v,
        E,
        w,
        { channel: _ } = e,
        O = (0, p.B9)(_.topic),
        S =
            ((n = null != (l = (0, p.B9)(_?.topic))),
            (v = _?.guild_id ?? null),
            (E = (0, s.bG)(
                [d.A, f.A],
                () => {
                    let e = null != v ? d.A.getGuild(v) : null;
                    return null != e && f.A.can(y.xBc.MANAGE_GUILD, e);
                },
                [v],
            )),
            (w = (0, s.yK)([g.Ay], () => (null != v ? (g.Ay.getSelfMember(v)?.roles ?? []) : []), [v])),
            i.useEffect(() => {
                n && null != l && (0, C.hF)(v ?? void 0);
            }, [n, l, v, E, w]),
            (0, s.bG)(
                [x.Ay],
                () => {
                    if (null == l) return null;
                    let e = x.Ay.findProjectByApplicationId(l);
                    if (null == e || (0, x.PV)(e)) return e;
                    let n = null != v ? I.default.castGuildIdAsEveryoneGuildRoleId(v) : null,
                        t = (e.collaborator_role_ids ?? []).some((e) => e === n || w.includes(e));
                    return e.guild_id === v && (0, b.XE)(e) && (E || t) ? e : null;
                },
                [l, E, w, v],
            )),
        T = (0, o.Ay)(_),
        k = (0, s.bG)([d.A], () => d.A.getGuild(_.guild_id), [_.guild_id]),
        M = (0, s.bG)([m.A], () => m.A.isChatOpen(_.id), [_.id]),
        R = (0, s.bG)([h.Ay], () => h.Ay.hasUnread(_.id), [_.id]),
        G = i.useRef(!1),
        P = i.useRef(!1),
        V = i.useRef(!0);
    i.useEffect(() => {
        ((G.current = !1), (P.current = !1), (V.current = !0));
    }, [_.id]);
    let B = i.useCallback(() => {
            !(h.Ay.getMentionCount(_.id) > 0) &&
                h.Ay.hasUnread(_.id) &&
                (0, r.ack)(
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
                ((G.current = !e), e || B(), (0, A.T)(_.id, e));
            },
            [_.id, B],
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
            return (c.h.subscribe("MESSAGE_CREATE", e), () => c.h.unsubscribe("MESSAGE_CREATE", e));
        }, [_.id]));
    let Y = i.useMemo(() => ({ channel: _, guild: k ?? void 0, open: M, onClose: z }), [_, k, M, z]),
        {
            availability: K,
            activeMode: W,
            widgetApplicationId: X,
        } = (0, j.q)({
            applicationId: O ?? null,
            previewApplicationId: S?.preview_application_id ?? null,
            declaredActivity: !1,
            installScope: S?.install_scope ?? null,
        }),
        q = i.useMemo(() => ({ ...K, modes: null != W ? [W] : [], defaultMode: W, showModeSwitch: !1 }), [K, W]),
        J = i.useMemo(() => ({ type: a.U.APP_CHANNEL, channelId: _.id, guildId: _.guild_id ?? void 0 }), [_]);
    if (null == O) return null;
    let Z = (0, t.jsx)(U, {
        channel: _,
        channelName: T,
        guild: k,
        toolbar: (0, t.jsx)(ew, {
            applicationId: O,
            surface: J,
            guildId: _.guild_id,
            channelId: _.id,
            project: S ?? null,
            chatOpen: M,
            onToggleChat: H,
        }),
    });
    return (0, t.jsxs)("div", {
        className: eN.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, t.jsx)(u.HI, { location: k?.name, subsection: T ?? void 0 }),
            (0, t.jsx)(e_.A, {
                availability: q,
                activeMode: W,
                widgetApplicationId: X,
                projectId: S?.id ?? null,
                installScope: S?.install_scope ?? null,
                previewApplicationId: S?.preview_application_id ?? null,
                applicationId: O,
                surface: J,
                header: Z,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: Y,
            }),
            M ? null : (0, t.jsx)(D, { channelId: _.id, applicationId: O, surface: J, onOpenChat: F }),
        ],
    });
}
