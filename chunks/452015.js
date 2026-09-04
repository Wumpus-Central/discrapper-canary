n.d(t, { Ay: () => tg, NE: () => tf, Jz: () => th, YW: () => te }), n(321073);
var i = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(536637),
    a = n.n(s),
    o = n(189213),
    u = n(17928),
    d = n(554146),
    c = n(862482),
    h = n(691540),
    g = n(857250),
    f = n(97483),
    A = n(939249),
    E = n(97808),
    p = n(778712),
    m = n(834730),
    I = n(821609),
    S = n(95477),
    C = n(259678),
    _ = n(289873),
    N = n(320448),
    T = n(847374),
    v = n(297264),
    M = n(452027),
    y = n(109802),
    D = n(231723),
    R = n(765178),
    x = n(192308);
if (221552 == n.j) var O = n(888366);
if (221552 == n.j) var U = n(241541);
var w = n(228366),
    P = n(387755),
    L = n(308528),
    b = n(711950),
    G = n(376728);
let F = {
    search(e, t) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open: (e) => w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e }),
    close() {
        w.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var j = n(717398),
    V = n(684136),
    k = n(964486),
    H = n(793574),
    B = n(95561),
    Y = n(688810),
    W = n(571694),
    z = n(47167),
    J = n(915089),
    Z = n(131607),
    $ = n(727245),
    K = n(247676),
    q = n(66442);
if (221552 == n.j) var X = n(43105);
if (221552 == n.j) var Q = n(403581);
var ee = n(783420),
    et = n(761640),
    en = n(174459),
    ei = n(695526);
n(696101);
var el = n(652215),
    er = n(49999),
    es = n(202541),
    ea = n(375708);
function eo(e) {
    let { targetElementRef: t, channelId: n, location: r, onAddToGroup: s } = e,
        a = (0, ei.qH)(),
        o = "staff" === a,
        c = "entitled" === a,
        h = (0, u.bG)([et.Ay], () => et.Ay.getSection(n)),
        { enabled: g } = $.A.useConfig({ location: r }),
        [f, A] = (0, Z.kn)(g && !o ? [d.M.NITRO_GDM_CAP_COACHMARK] : []),
        E = f === d.M.NITRO_GDM_CAP_COACHMARK,
        p = l.useCallback(() => {
            en.default.track(el.HAw.PREMIUM_PROMOTION_OPENED, { location: r, location_object: el.ZSU.BUTTON_CTA }),
                A(er.i.TAKE_ACTION);
        }, [r, A]),
        m = l.useCallback(() => {
            s(), A(er.i.TAKE_ACTION);
        }, [s, A]);
    return E
        ? (0, i.jsx)(ee.A, {
              subscriptionTier: es.pe.TIER_2,
              onClick: p,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(
                      X.A,
                      {
                          targetElementRef: t,
                          position: "bottom",
                          alignmentStrategy: "trigger-center",
                          gradientColor: "nitro-pink",
                          badge: { type: "beta", variant: "expressive" },
                          title: ea.intl.string(ea.t.d8Spvj),
                          body: ea.intl.formatToPlainString(ea.t.SXkUiv, { number: 25 }),
                          actions: [
                              c
                                  ? { text: ea.intl.string(ea.t.yZOtoD), variant: "primary", icon: U.D, onClick: m }
                                  : {
                                        text: ea.intl.string((0, ei.o9)(a)),
                                        variant: "expressive",
                                        icon: Q.t,
                                        onClick: n,
                                    },
                          ],
                          onRequestClose: () => A(er.i.USER_DISMISS),
                      },
                      h,
                  );
              },
          })
        : null;
}
if (221552 != n.j) var Q = n(403581);
var eu = n(87719);
function ed(e) {
    let { location: t, nitroAudience: n, transitionState: r, onClose: s } = e,
        a = l.useCallback(async () => {
            en.default.track(el.HAw.PREMIUM_PROMOTION_OPENED, { location: t, location_object: el.ZSU.BUTTON_CTA }),
                await s(),
                (0, eu.e)();
        }, [t, s]);
    return (0, i.jsx)(ee.A, {
        subscriptionTier: es.pe.TIER_2,
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(o.Modal, {
                transitionState: r ?? D.ip.ENTERED,
                onClose: async () => await s(),
                title: ea.intl.formatToPlainString(ea.t.IyBYPN, { number: el.wLU }),
                subtitle: ea.intl.formatToPlainString(ea.t["Ae97n/"], { number: 25 }),
                actions: [
                    { text: ea.intl.string(ea.t.PUZmk4), variant: "secondary", onClick: a },
                    {
                        text: ea.intl.string((0, ei.o9)(n)),
                        variant: "expressive",
                        icon: Q.t,
                        onClick: async (e) => {
                            t(e), await s();
                        },
                    },
                ],
            });
        },
    });
}
var ec = n(503698),
    eh = n.n(ec),
    eg = n(74445),
    ef = n(866323),
    eA = n(568602),
    eE = n(775602);
n(46121);
var ep = n(222358);
let em = { mass: 1, tension: 320, friction: 30, clamp: !0 },
    eI = l.forwardRef(function (e, t) {
        let { location: n, memberCount: r, recipientLimit: s } = e,
            a = (0, ei.qH)(),
            { enabled: o } = $.A.useConfig({ location: n }),
            d = (0, u.bG)([eE.Ay], () => eE.Ay.useReducedMotion),
            [c, h] = l.useState(!1),
            [g, f] = l.useState(!1),
            [A, E] = l.useState(1.4),
            p = l.useRef(1.4),
            S = l.useRef(null),
            C = l.useRef(null),
            _ = (0, ei.yh)(a) && r >= s && o,
            N = l.useCallback(() => {
                E(p.current),
                    (p.current = Math.min(p.current + 2, 15)),
                    h(!0),
                    f(!0),
                    null != S.current && clearTimeout(S.current),
                    (S.current = setTimeout(() => {
                        h(!1), (S.current = null);
                    }, 300)),
                    null != C.current && clearTimeout(C.current),
                    (C.current = setTimeout(() => {
                        f(!1), (C.current = null);
                    }, 1e3));
            }, []);
        l.useImperativeHandle(t, () => ({ shake: N }), [N]),
            l.useEffect(() => {
                _ || (p.current = 1.4);
            }, [_]),
            l.useEffect(
                () => () => {
                    null != S.current && clearTimeout(S.current), null != C.current && clearTimeout(C.current);
                },
                [],
            );
        let T = l.useCallback(() => {
            en.default.track(el.HAw.PREMIUM_PROMOTION_OPENED, { location: n });
        }, [n]);
        return (0, ef.p)(_, {
            from: { transform: "translateY(16px)", opacity: 0.4 },
            enter: { transform: "translateY(0)", opacity: 1 },
            leave: { transform: "translateY(16px)", opacity: 0 },
            config: em,
        })(
            (e, t) =>
                t &&
                (0, i.jsx)(eg.animated.div, {
                    className: ep.kY,
                    style: e,
                    children: (0, i.jsxs)(eA.b, {
                        isShaking: c,
                        intensity: A,
                        className: eh()(ep.vK, { [ep.hO]: g && d }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: ep.Qs,
                                children: [
                                    (0, i.jsx)(m.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: ea.intl.string(ea.t.KCD0Hp),
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: ea.intl.formatToPlainString(ea.t["8o8Zk5"], { number: 25 }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: ep.XI,
                                children: (0, i.jsx)(ee.A, {
                                    subscriptionTier: es.pe.TIER_2,
                                    children: (e) => {
                                        let { onClick: t } = e;
                                        return (0, i.jsx)(I.$, {
                                            variant: "expressive",
                                            size: "sm",
                                            text: ea.intl.string((0, ei.o9)(a)),
                                            icon: Q.t,
                                            onClick: (e) => {
                                                T(), t(e);
                                            },
                                        });
                                    },
                                }),
                            }),
                        ],
                    }),
                }),
        );
    });
var eS = n(683063),
    eC = n(84327);
function e_(e) {
    let { memberCount: t, recipientLimit: n } = e,
        l = (0, ei.qH)(),
        r = (0, u.bG)([eE.Ay], () => eE.Ay.useReducedMotion),
        s = "entitled" === l && n > el.wLU,
        a = t > el.wLU,
        o = ea.intl.formatToPlainString(ea.t["9EQix0"], { numMembers: t, maxMemberLimit: n }),
        d = (0, i.jsx)("span", {
            className: eh()(eC.hJ, { [eC.VN]: r }),
            children: s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(Q.t, {
                              size: "xxs",
                              color: "currentColor",
                              className: eh()(eC.cn, { [eC.fw]: a }),
                              "aria-hidden": !0,
                          }),
                          (0, i.jsx)(m.E, {
                              variant: "text-md/normal",
                              className: eh()(eC.qz, { [eC.fw]: a }),
                              children: o,
                          }),
                      ],
                  })
                : (0, i.jsx)(m.E, {
                      variant: "text-md/normal",
                      color: !s && t >= n ? "text-feedback-critical" : "text-subtle",
                      children: o,
                  }),
        });
    return (0, i.jsx)("div", {
        className: eC.VA,
        children: s
            ? (0, i.jsx)(eS.u, {
                  title: ea.intl.string(ea.t.u1ilug),
                  body: ea.intl.format(ea.t["mr27w/"], { number: 25 }),
                  position: "bottom",
                  align: "center",
                  children: d,
              })
            : d,
    });
}
var eN = n(774300);
let eT = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function ev(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = eT.getConfig({ location: t });
    return n;
}
var eM = n(287809),
    ey = n(427262);
async function eD(e, t) {
    if (0 === t.length) return;
    let n = [];
    for (let e of t) {
        let t = eM.default.getUser(e);
        null == t || t.bot || n.push(t);
    }
    if (0 !== n.length)
        try {
            let t = await G.Ay.createInvite(e, { max_age: ev({ location: "5326c5_1" }) }, el.PE1.GROUP_DM),
                i = await Promise.all(
                    n.map(async (e) => {
                        var n;
                        return {
                            user: e,
                            success: await ((n = t.code),
                            new Promise((t) => {
                                eN.A.enqueue(
                                    {
                                        inviteKey: n,
                                        type: eN.F.USER,
                                        user: e,
                                        location: el.PE1.GROUP_DM,
                                        inviteAnalyticsMetadata: { source: el.PE1.GROUP_DM },
                                    },
                                    (e) => {
                                        t(e);
                                    },
                                );
                            })),
                        };
                    }),
                ),
                l = [],
                r = [];
            for (let { user: e, success: t } of i) t ? l.push(e) : r.push(e);
            if (r.length > 0) {
                let e, t;
                (t =
                    (e = r.map((e) => ey.Ay.getName(e))).length > 0
                        ? ea.intl.formatToPlainString(ea.t["wWp/+6"], {
                              inviteCount: e.length,
                              username1: e[0],
                              username2: e[1] ?? "",
                              remaining: Math.max(0, e.length - 2),
                          })
                        : ea.intl.string(ea.t.iRntUl)),
                    (0, h.P0)((0, g.o)(t, f.Ck.FAILURE));
            } else
                l.length > 0 &&
                    (function (e) {
                        let t = e.map((e) => ey.Ay.getName(e));
                        if (0 === t.length) return;
                        let n = ea.intl.formatToPlainString(ea.t.gztrTs, {
                            inviteCount: t.length,
                            username1: t[0],
                            username2: t[1] ?? "",
                            remaining: Math.max(0, t.length - 2),
                        });
                        (0, h.P0)((0, g.o)(n, f.Ck.SUCCESS));
                    })(l);
        } catch {
            (0, h.P0)((0, g.o)(ea.intl.string(ea.t.iRntUl), f.Ck.FAILURE));
        }
}
var eR = n(279208),
    ex = n(267102),
    eO = n(976860),
    eU = n(219271),
    ew = n(427358),
    eP = n(95701),
    eL = n(734057),
    eb = n(71393),
    eG = n(958590),
    eF = n(584777),
    ej = n(763827),
    eV = n(573163),
    ek = n(994500),
    eH = n(351906),
    eB = n(957565),
    eY = n(625494),
    eW = n(403362),
    ez = n(935208),
    eJ = n(58736),
    eZ = n(837381),
    e$ = n(692617),
    eK = n(658675),
    eq = n(297413),
    eX = n(966327),
    eQ = n(235986),
    e0 = n(548118),
    e1 = n(640708),
    e2 = n(290863),
    e9 = n(294910);
function e5(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: r,
            mutualGuilds: s,
            selected: a,
            checked: o,
            disabled: d = !1,
            onClick: c,
            onMouseEnter: h,
            "aria-setsize": g,
            "aria-posinset": f,
        } = e,
        E = (0, u.bG)([e2.A], () => e2.A.getStatus(t.id)),
        p = (0, eZ.rm)(String(t.id));
    return (0, i.jsx)(A.D, {
        id: `user-row-${n}`,
        className: eh()(e9.Se, { [e9.r9]: d }),
        onClick: function () {
            c?.(t.id, n);
        },
        onMouseEnter: function () {
            h?.(n);
        },
        ...p,
        role: "checkbox",
        "aria-checked": o,
        "aria-disabled": d,
        "aria-setsize": g,
        "aria-posinset": f,
        children: (0, i.jsxs)(eQ.A, {
            align: eQ.A.Align.CENTER,
            className: eh()(e9.Bc, { [e9.oz]: a }),
            children: [
                (0, i.jsx)(eX.A, { user: t, status: E, className: e9.my }),
                (0, i.jsxs)("div", {
                    className: e9.YW,
                    children: [
                        (0, i.jsx)(m.E, {
                            tag: "strong",
                            className: e9.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != r && r === t.tag
                                    ? ey.Ay.getName(t)
                                    : null != r && "" !== r
                                      ? r
                                      : ey.Ay.getName(t),
                        }),
                        (0, i.jsxs)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != s && s.length > 0 ? e9.dj : void 0,
                            children: [
                                (0, i.jsx)(eq.A, {
                                    user: t,
                                    hideDiscriminator: l,
                                    className: e9.xK,
                                    forceUsername: !0,
                                }),
                                null != s && s.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(e1.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: e9.a6,
                                              }),
                                              (0, i.jsx)(e$.A, {
                                                  className: e9.gP,
                                                  guilds: s,
                                                  maxGuilds: 3,
                                                  size: e0.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: e9.tz,
                                                  children:
                                                      1 === s.length
                                                          ? s[0].name
                                                          : ea.intl.format(ea.t.E215W7, { count: s.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eK.P, { checked: o, disabled: d }),
            ],
        }),
    });
}
if (221552 != n.j) var X = n(43105);
function e7(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        r = l.useCallback(() => {
            n(er.i.USER_DISMISS);
        }, [n]);
    return (0, i.jsx)(X.A, {
        targetElementRef: t,
        position: "left",
        alignmentStrategy: "edge",
        align: "center",
        badge: "new",
        title: ea.intl.string(ea.t["Ur/4dI"]),
        body: ea.intl.string(ea.t.AVPtNF),
        actions: [{ text: ea.intl.string(ea.t["NX+WJN"]), onClick: r }],
        onRequestClose: r,
    });
}
var e3 = n(650583),
    e8 = n(872330);
let e6 = (0, J.Ld)(),
    e4 = "PrivateChannelRecipientsInvite",
    te = { ADD_FRIENDS_TO_DM: "Add Friends to DM", NEW_GROUP_DM: "New Group DM", MEMBER_LIST: "Member List" };
function tt(e) {
    if (ek.A.isFriend(e)) return !0;
    let t = eM.default.getCurrentUser(),
        n = eM.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function tn(e) {
    let t = [],
        n = [];
    for (let i of e) tt(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function ti(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? L.A.createGroupDmShell({ recipientId: t[0], location: n })
        : L.A.openPrivateChannel({ recipientIds: t, location: n });
}
function tl() {
    (0, h.P0)((0, g.o)(ea.intl.string(ea.t.fEptJP), f.Ck.FAILURE));
}
function tr(e) {
    let { channel: t, onClose: n } = e,
        l = (0, z.Ay)(t) ?? "",
        r = (0, u.bG)([eV.Ay], () => eV.Ay.lastMessageId(t.id) ?? t.id);
    return (0, i.jsx)(A.D, {
        onClick: () => {
            (0, eO.uh)(el.ME, t.id), n();
        },
        children: (0, i.jsxs)("div", {
            className: e8.us,
            children: [
                (0, i.jsx)(E.eu, { src: (0, W.Y)(t), size: p._3.SIZE_24, "aria-label": l }),
                (0, i.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    tag: "span",
                    className: e8.J2,
                    children: l,
                }),
                (0, i.jsx)("span", { className: e8.Pd, children: a()(ez.default.extractTimestamp(r)).fromNow() }),
            ],
        }),
    });
}
function ts(e) {
    let { onConfirm: t, channelIds: n, ...l } = e,
        r = (0, u.yK)([eL.A], () => Array.from(n).map(eL.A.getChannel), [n]);
    return (0, i.jsx)(o.Modal, {
        title: ea.intl.string(ea.t.uFHxNd),
        subtitle: ea.intl.string(ea.t.rIsSqE),
        actions: [
            { variant: "secondary", text: ea.intl.string(ea.t["ETE/oC"]), onClick: l.onClose },
            {
                variant: "primary",
                text: ea.intl.string(ea.t.KCNNJu),
                onClick: () => {
                    t(), l.onClose();
                },
            },
        ],
        input: (0, i.jsx)(m.E, { variant: "text-md/normal", className: e8.Jv, children: ea.intl.string(ea.t.cjE7wH) }),
        ...l,
        children: r
            .filter(eW.Vq)
            .sort((e, t) => {
                let n = e.lastMessageId ?? e.id,
                    i = t.lastMessageId ?? t.id;
                return ez.default.compare(i, n);
            })
            .map((e) => (0, i.jsx)(tr, { onClose: l.onClose, channel: e }, e.id)),
    });
}
function ta(e) {
    let { targetElementRef: t } = e,
        [n, l] = (0, Z.kn)([d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK]);
    return n !== d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK
        ? null
        : (0, i.jsx)(e7, { targetElementRef: t, markAsDismissed: l });
}
class to extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = ex.Ay;
    copyTimeout;
    nitroUpsellBannerRef = l.createRef();
    scrollerRef = l.createRef();
    searchBarRef = l.createRef();
    _mobileCloseRef = l.createRef();
    _searchCounter = 0;
    _existingTimeout = null;
    _getAnalyticsEntryPoint() {
        let { channel: e, entryPointType: t } = this.props,
            n = "",
            i = "";
        return (
            null != e
                ? ((n = t ?? te.ADD_FRIENDS_TO_DM), (i = e.isDM() ? "DM" : "Group DM"))
                : ((n = te.NEW_GROUP_DM), (i = "Friends List")),
            { entryPointType: n, entryPointSource: i }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        w.h.wait(() => {
            F.open(e?.id).then(() => {
                this.trackModalOpened();
            });
        });
        let t = (0, B.dI)(e);
        en.default.track(el.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            eY._.subscribe(el.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eY._.subscribe(el.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            this.createInvite(),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    trackModalOpened = () => {
        let { channel: e } = this.props,
            t = eF.A.getResults(),
            { friendCount: n, nonFriendCount: i } = (0, B.g4)(t.map((e) => e.user.id)),
            l = this._getAnalyticsEntryPoint();
        en.default.track(el.HAw.PRIVATE_CHANNEL_INVITE_MODAL_OPENED, {
            ...(0, B.dI)(e),
            default_results_count: t.length,
            default_results_friend_count: n,
            default_results_non_friend_count: i,
            entry_point_type: l.entryPointType,
            entry_point_source: l.entryPointSource,
        });
    };
    componentWillUnmount() {
        eY._.unsubscribe(el.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eY._.unsubscribe(el.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            w.h.wait(() => F.close());
    }
    scrollPageUp = () => {
        this.scrollerRef.current?.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        this.scrollerRef.current?.scrollPageDown({ animate: !0 });
    };
    isNotFriends() {
        let { channel: e, isStaffOnlyDM: t } = this.props;
        if (null == e || !e.isDM()) return !1;
        let n = e.getRecipientId();
        if (null == n) throw Error("no recipient in DM");
        return !ek.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds;
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            l = [];
        for (let t of e) ek.A.isFriend(t.user.id) ? i.push(t) : l.push(t);
        let r = [];
        return (
            i.length > 0 && r.push({ type: "friends", results: i, showSpinner: !1 }),
            (l.length > 0 || n) && r.push({ type: "serverMembers", results: l, showSpinner: n }),
            r
        );
    }
    getDisplayedResults() {
        let e = this.getResultsSections();
        if (null == e) return this.props.results;
        let { collapsedSections: t } = this.state,
            n = [];
        for (let i of e) t.has(i.type) || n.push(...i.results);
        return n;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = ev({ location: "5326c5_1" });
        G.Ay.createInvite(e.id, { max_age: t }, el.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= (0, K.A)({ useNitroCapExperiment: !0 });
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return (0, K.A)({ useNitroCapExperiment: !0 }) - t.size - n;
    }
    getTotalSelectedMemberCount() {
        let { channel: e, selectedUsers: t } = this.props;
        return new Set([...(e?.recipients ?? []), ...t]).size + 1;
    }
    shouldShowNitroCapRoadblock() {
        return this.props.isInNitroCapTreatment && (0, ei.yh)(this.props.nitroAudience);
    }
    getListBottomPadding() {
        return this.shouldShowNitroCapRoadblock() &&
            this.getTotalSelectedMemberCount() >= (0, K.A)({ useNitroCapExperiment: !0 })
            ? 104
            : 14;
    }
    shouldShowPersonLimitCounter() {
        let { hasFriends: e } = this.props;
        return !(
            !this.props.isInNitroCapTreatment ||
            ((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker())
        );
    }
    getCreateGroupButtonAction() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            i = (null != e && 0 === t.size) || n < 0,
            l = t.size > 1 || null != e ? ea.intl.string(ea.t["h1/FMu"]) : ea.intl.string(ea.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(I.$, {
            variant: "primary",
            text: ea.intl.string(ea.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return ea.intl.string(ea.t.Xjlbvs);
        if (this.isPartyFull()) return ea.intl.string(ea.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e
            ? ea.intl.string(ea.t.jD1qzM)
            : e.isMultiUserDM()
              ? ea.intl.string(ea.t.NB5DFD)
              : ea.intl.string(ea.t["PWkO7+"]);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = eM.default.getUser(t),
                        n = null != e ? e.username : "";
                    return ea.intl.format(ea.t["eg+R9x"], { username: n });
                }
            }
            return ea.intl.string(ea.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = eM.default.getUser(t),
                i = null != n ? n.username : "";
            return ea.intl.format(ea.t["eg+R9x"], { username: i });
        }
        if (null == e) return ea.intl.format(ea.t.t9mhPt, { number: (0, K.A)({ useNitroCapExperiment: !0 }) });
        let n = this.getRemaining();
        return n <= 0
            ? ea.intl.formatToPlainString(ea.t.xYr004, { number: (0, K.A)({ useNitroCapExperiment: !0 }) })
            : ea.intl.formatToPlainString(ea.t.barkEr, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, query: i } = this.props,
            { current: l } = this.searchBarRef;
        if (null == l) return;
        let r = this.getDisplayedResults(),
            s = t;
        switch (e.key) {
            case e3.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case e3.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++s >= r.length && (s = 0), this.handleSelectionChange(s);
                break;
            case e3.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --s < 0 && (s = r.length - 1), this.handleSelectionChange(s);
                break;
            case e3.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), r.length > s && this.handleSelect(s);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let l = [];
        n.forEach((e) => {
            let t = eM.default.getUser(e);
            null != t &&
                l.push({ id: e, label: ey.Ay.getName(t), icon: { type: "avatar", src: t.getAvatarURL(void 0, 32) } });
        });
        let { results: r, selectedRow: s, isLoading: a } = this.props,
            o = r.length > 0 || a,
            u = !1;
        for (let e of n) {
            if (ek.A.isFriend(e)) continue;
            let t = eM.default.getUser(e);
            if (null != t && !t.bot) {
                u = !0;
                break;
            }
        }
        return (0, i.jsxs)("div", {
            className: e8.ON,
            children: [
                (0, i.jsx)(S.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: ea.intl.string(u ? ea.t.xHuK72 : ea.t.FIHggl),
                    placeholder: 0 === n.size ? ea.intl.string(ea.t["5h0QOP"]) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: l, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": e6,
                    "aria-expanded": o,
                    "aria-activedescendant": o ? `user-row-${s}` : void 0,
                }),
                this.renderAddUsersButton(),
                (0, i.jsx)(ta, { targetElementRef: this.searchBarRef }),
            ],
        });
    }
    renderNitroUpsellBannerOverlay() {
        let { isInNitroCapTreatment: e, nitroAudience: t } = this.props;
        return e && (0, ei.yh)(t)
            ? (0, i.jsx)("div", {
                  className: e8.qu,
                  children: (0, i.jsx)(eI, {
                      ref: this.nitroUpsellBannerRef,
                      location: e4,
                      memberCount: this.getTotalSelectedMemberCount(),
                      recipientLimit: (0, K.A)({ useNitroCapExperiment: !0 }),
                  }),
              })
            : null;
    }
    renderModalInput() {
        let e = this.shouldShowPersonLimitCounter(),
            t = this.renderSearchBar();
        if (e || null != t)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    e &&
                        (0, i.jsx)(e_, {
                            memberCount: this.getTotalSelectedMemberCount(),
                            recipientLimit: (0, K.A)({ useNitroCapExperiment: !0 }),
                        }),
                    t,
                ],
            });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: e8.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(C.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(V.A, { className: e8.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", {
                    children: ea.intl.format(ea.t.xYr004, { number: (0, K.A)({ useNitroCapExperiment: !0 }) }),
                })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return;
        let n = this.getResultsSections();
        return null != n
            ? 0 === n.length
                ? this.getEmptyStateListProps()
                : this.getSectionedListProps(n)
            : 0 === t.length
              ? this.getEmptyStateListProps()
              : {
                    ref: this.scrollerRef,
                    sections: [t.length],
                    className: e8.XG,
                    innerClassName: e8.bv,
                    renderRow: this.renderFlatRow,
                    rowHeight: this.getFlatRowHeight,
                    renderSection: this.renderEmptySection,
                    sectionHeight: 0,
                    onScroll: this.handleScroll,
                    paddingTop: 0,
                    paddingBottom: this.getListBottomPadding(),
                    fade: !0,
                    role: void 0,
                    innerRole: "group",
                    innerId: e6,
                };
    }
    getEmptyStateListProps() {
        let { channel: e } = this.props;
        return {
            sections: [1],
            sectionHeight: 0,
            rowHeight: 32,
            paddingBottom: this.getListBottomPadding(),
            renderRow: () => {
                let t = null != e && e.isMultiUserDM();
                return (0, i.jsxs)("div", {
                    className: e8.wV,
                    children: [
                        (0, i.jsx)(m.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: ea.intl.string(ea.t.z3yXsY),
                        }),
                        (0, i.jsx)(m.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ea.intl.string(t ? ea.t["l6Rj+t"] : ea.t["7w2iq7"]),
                        }),
                    ],
                });
            },
        };
    }
    getSectionedListProps(e) {
        let { collapsedSections: t } = this.state,
            n = Array(e.length).fill(-1),
            l = 0;
        for (let i = 0; i < e.length; i++) t.has(e[i].type) || ((n[i] = l), (l += e[i].results.length));
        let r = l;
        return {
            ref: this.scrollerRef,
            sections: e.map((e) => e.results.length + +!!e.showSpinner),
            className: e8.XG,
            innerClassName: e8.bv,
            renderRow: (l) => {
                let { section: s, row: a } = l,
                    o = e[s];
                if (null == o || t.has(o.type)) return null;
                if (a >= o.results.length)
                    return (0, i.jsx)("div", {
                        className: e8.Q_,
                        children: (0, i.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: e8.u1 }),
                    });
                let u = o.results[a];
                if (null == u) return null;
                let d = n[s] + a;
                return this.renderUserRow(u, d, r);
            },
            rowHeight: (n, i) => {
                let l = e[n];
                return null == l || t.has(l.type) ? 0 : i >= l.results.length ? 40 : 48 * (null != l.results[i]);
            },
            renderSection: (n) => {
                let { section: l } = n,
                    r = e[l];
                if (null == r) return null;
                let s = t.has(r.type),
                    a = "friends" === r.type ? ea.intl.string(ea.t.TdEu5X) : ea.intl.string(ea.t.y29JXs),
                    o = s ? N._ : T.a;
                return (0, i.jsxs)(A.D, {
                    className: e8.bV,
                    onClick: () => this.handleSectionToggle(r.type),
                    "aria-expanded": !s,
                    "aria-label": a,
                    children: [
                        (0, i.jsx)(v.D, { variant: "heading-sm/semibold", color: "text-muted", children: a }),
                        (0, i.jsx)(o, { size: "xxs" }),
                    ],
                });
            },
            sectionHeight: 32,
            onScroll: this.handleScroll,
            paddingTop: 0,
            paddingBottom: this.getListBottomPadding(),
            fade: !0,
            role: void 0,
            innerRole: "group",
            innerId: e6,
        };
    }
    handleSectionToggle = (e) => {
        this.setState(
            (t) => {
                let { collapsedSections: n } = t,
                    i = new Set(n);
                return i.has(e) ? i.delete(e) : i.add(e), { collapsedSections: i };
            },
            () => {
                let e = this.getDisplayedResults();
                this.props.selectedRow >= e.length && F.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: l, selectedRow: r, hideDiscriminator: s, channel: a } = this.props,
            { user: o, comparator: u, mutualGuilds: d } = e,
            c = l.has(o.id) || a?.recipients.includes(o.id),
            h = (!c && 0 >= this.getRemaining() && !this.shouldShowNitroCapRoadblock()) || a?.recipients.includes(o.id);
        return (0, i.jsx)(
            e5,
            {
                row: t,
                user: o,
                hideDiscriminator: s,
                comparator: u,
                mutualGuilds: d,
                checked: c,
                disabled: h,
                selected: t === r,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": t + 1,
                "aria-setsize": n,
            },
            o.id,
        );
    }
    getFlatRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    renderFlatRow = (e) => {
        let { section: t, row: n } = e;
        if (t > 0) return null;
        let { results: i } = this.props,
            l = i[n];
        return null == l ? null : this.renderUserRow(l, n, i.length);
    };
    renderEmptySection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let r = null != t ? (0, eR.A)(t.code) : "",
            s = r.length > 0;
        return (0, i.jsx)(M.D, {
            label: ea.intl.string(ea.t.dTqtcN),
            helperText: r.length > 0 ? ea.intl.format(ea.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(y.e, {
                supportsCopy: eB.p5,
                placeholder: (0, eR.A)(ea.intl.string(ea.t.lPVBqP)),
                value: s ? (n ? ea.intl.string(ea.t["6HzNgZ"]) : r) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: s ? (l ? ea.intl.string(ea.t.q30c5i) : ea.intl.string(ea.t.OpuAlK)) : ea.intl.string(ea.t.qzxqUf),
                mode: l ? y.q.SUCCESS : y.q.DEFAULT,
                onCopy: () => {
                    s ? this.handleCopyInvite(r) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = eM.default.getUser(e),
                i = null != n && ek.A.getRelationshipType(n.id) === el.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? ea.intl.string(ea.t.xMH6vD) : ea.intl.string(ea.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: ea.intl.string(ea.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t) {
            let e = n.size > 1,
                t = new Set(n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(tu, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: t,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: ea.intl.string(ea.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        }
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let l = this.getInviteLinkFooter();
        return null != l ? { actionBarInput: l } : {};
    }
    renderNitroCapFullState() {
        let { transitionState: e, onClose: t, nitroAudience: n } = this.props;
        if ((0, ei.yh)(n)) return (0, i.jsx)(ed, { transitionState: e, onClose: t, location: e4, nitroAudience: n });
        let l = (0, K.A)({ useNitroCapExperiment: !0 });
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? D.ip.ENTERED,
            onClose: async () => await t(),
            title: ea.intl.formatToPlainString(ea.t.IyBYPN, { number: l }),
            subtitle: ea.intl.formatToPlainString(ea.t.xYr004, { number: l }),
            actions: [],
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        if (this.isPartyFull() && this.props.isInNitroCapTreatment) return this.renderNitroCapFullState();
        let { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? D.ip.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.shouldShowPersonLimitCounter() ? void 0 : this.getSubtitle(),
            input: this.renderModalInput(),
            preview: this.renderNitroUpsellBannerOverlay(),
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: l ?? [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            j.A.sendRequest({
                discordTag: ey.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        F.select(e);
    };
    handleSelect = (e) => {
        let { channel: t } = this.props;
        if (null == e) return void F.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id, e);
    };
    handleSelectionChange = (e) => {
        F.select(e);
        let t = this.scrollerRef.current;
        if (null == t) return;
        let n = this.getResultsSections();
        if (null == n) return void t.scrollToIndex({ section: 0, row: e, padding: 8 });
        let { collapsedSections: i } = this.state,
            l = e;
        for (let e = 0; e < n.length; e++)
            if (!i.has(n[e].type)) {
                if (l < n[e].results.length) return void t.scrollToIndex({ section: e, row: l, padding: 8 });
                l -= n[e].results.length;
            }
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, B.dI)(t);
        F.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                en.default.track(el.HAw.SEARCH_USER_LIST_STARTED, {
                    ...n,
                    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                    search_query_length: e.length,
                }),
                    this._searchCounter++;
            }, 500));
    };
    handleRemoveTag = (e) => {
        let t = Array.from(this.props.selectedUsers);
        F.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            let t = eM.default.getUser(e);
            null != t &&
                R.O.announce(ea.intl.formatToPlainString(ea.t.JL1QSg, { username: ey.Ay.getName(t) }), "polite"),
                F.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                { selectedUsers: i, query: l, channel: r } = e.props;
            if (r?.recipients.includes(t)) return;
            let s = !i.has(t),
                a = e.getResultsSections(),
                o = 0,
                u = n;
            if (null != a) {
                let i = ek.A.isFriend(t);
                o = i ? 1 : 2;
                let { collapsedSections: l } = e.state,
                    r = i ? "friends" : "serverMembers",
                    s = 0;
                for (let e of a) {
                    if (e.type === r) break;
                    l.has(e.type) || (s += e.results.length);
                }
                u = n - s;
            }
            let d = eM.default.getUser(t);
            if (s) {
                if (0 >= e.getRemaining()) {
                    e.shouldShowNitroCapRoadblock() &&
                        (e.nitroUpsellBannerRef.current?.shake(), R.O.announce(ea.intl.string(ea.t.KCD0Hp), "polite"));
                    return;
                }
                e.getRemaining() > 0 &&
                    (en.default.track(el.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                        ...(0, B.dI)(r),
                        section: o,
                        row: u,
                        interaction_type: "select",
                        affinity_score: ew.A.getUserAffinity(t)?.communicationProbability ?? -1,
                    }),
                    F.addUser(t),
                    null != d &&
                        R.O.announce(
                            ea.intl.formatToPlainString(ea.t.iyKU50, { username: ey.Ay.getName(d) }),
                            "polite",
                        ),
                    l.length > 0 && (F.clear(r?.id), e.forceFocus()));
            } else
                en.default.track(el.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                    ...(0, B.dI)(r),
                    section: o,
                    row: u,
                    interaction_type: "deselect",
                    affinity_score: ew.A.getUserAffinity(t)?.communicationProbability ?? -1,
                }),
                    F.removeUser(t),
                    null != d &&
                        R.O.announce(
                            ea.intl.formatToPlainString(ea.t.JL1QSg, { username: ey.Ay.getName(d) }),
                            "polite",
                        );
        };
    })();
    handleAddFriendNavigation = () => {
        b.A.transitionToSection(el.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = ew.A.getUserAffinity(e);
                return t?.communicationProbability ?? -1;
            }),
        };
    }
    handleChannelNameChange = (e) => {
        this.setState({ newChannelName: e });
    };
    handleIconChange = (e) => {
        let { imageUri: t } = e;
        this.setState({ previewIcon: t });
    };
    handleIconRemove = () => {
        this.setState({ previewIcon: null });
    };
    updateGDM = (e, t) => {
        let n = {};
        "" !== this.state.newChannelName && (n.name = this.state.newChannelName),
            null != this.state.previewIcon && (n.icon = this.state.previewIcon),
            (null != n.name || null != n.icon) && L.A.updateChannel(e, n, t),
            en.default.track(el.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: el.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, B.dI)(n),
            l = !0;
        1 === e.length && (l = null == L.A._openCachedDMChannel(e[0]));
        let r = (0, B.g4)(e);
        en.default.track(el.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...i,
            is_new_dm: l,
            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
            recipient_ids: e,
            num_searches: t,
            affinity_score: this._getUserAffinities(e).affinities,
            name_is_set: "" !== this.state.newChannelName,
            icon_is_set: null != this.state.previewIcon,
            friend_recipient_count: r.friendCount,
            non_friend_recipient_count: r.nonFriendCount,
        });
        let { channelRecipientIds: s, inviteLinkOnlyUserIds: a } =
            e.length > 1 ? tn(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        ti({ recipientIds: s, location: "New Group DM", useGroupDmShell: a.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, H.A.NEW_GROUP_DM_INVITE_MODAL), eD(e, a);
            })
            .catch(tl);
    };
    pushToExistingDM = (e, t) => {
        let { channelRecipientIds: n, inviteLinkOnlyUserIds: i } = tn(t),
            l = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(l, n, i)
            : e.isDM() && this._promoteDMToGroupDM(l, e.getRecipientId(), n, i);
        let r = (0, B.g4)(t);
        en.default.track(el.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...(0, B.dI)(e),
            is_new_dm: e.isDM(),
            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
            recipient_ids: t,
            num_searches: this._searchCounter,
            affinity_score: this._getUserAffinities(t).affinities,
            friend_recipient_count: r.friendCount,
            non_friend_recipient_count: r.nonFriendCount,
        });
    };
    _addRecipientsToExistingGroupDM = (e, t, n) => {
        let i = ej.A.getChannelId() === e;
        (t.length > 0 ? L.A.addRecipients(e, t, el.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e), eD(e, n), i && t.length > 0 && P.A.ring(e, t, "dm_invite");
            })
            .catch(tl);
    };
    _promoteDMToGroupDM = (e, t, n, i) => {
        let l = ej.A.getChannelId() === e,
            r = tt(t),
            s = r ? [...n, t] : n,
            a = r ? i : [...i, t];
        (r && n.length > 0
            ? L.A.addRecipients(e, n, el.ThZ.ADD_FRIENDS_TO_DM)
            : s.length > 0 || a.length > 0
              ? ti({ recipientIds: s, location: "New Group DM", useGroupDmShell: a.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), eD(t, a), l)) {
                    if (t !== e) return void P.A.call(t, !1, !0);
                    n.length > 0 && P.A.ring(t, n, "dm_invite");
                }
            })
            .catch(tl);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            l = Array.from(t);
        if (null != e) {
            let t = tA(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, x.openModal)(
                      (n) => (0, i.jsx)(ts, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, x.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = tA(l);
            l.length > 1 && e.size > 0
                ? (0, x.openModal)(
                      (t) => (0, i.jsx)(ts, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, x.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, eB.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            en.default.track(el.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: el.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function tu(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: r, onIconRemove: s, onChange: a } = e,
        { analyticsLocations: o } = (0, Y.Ay)(H.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, z.Jo)(Array.from(t), eM.default, ek.A);
    return (0, i.jsxs)("div", {
        className: e8.zj,
        children: [
            (0, i.jsx)(q.X, {
                className: e8.r9,
                channel: null,
                previewIcon: l,
                onIconChange: r,
                onIconRemove: s,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(m.E, {
                className: e8.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: ea.intl.string(ea.t.YynaLK),
            }),
            (0, i.jsx)(S.k, {
                "aria-label": ea.intl.string(ea.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function td(e) {
    let { channel: t, onComplete: n, entryPointType: l, ...r } = e,
        s = (0, u.cf)([eH.A, eF.A, eG.A, eb.A, ek.A], () => {
            let e;
            return (
                null != t && null != (e = eG.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...eF.A.getState(),
                    hasFriends: ek.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: eH.A.hidePersonalInformation,
                    hideInstantInvites: eH.A.hideInstantInvites,
                    hasGuilds: eb.A.getGuildCount() > 0,
                }
            );
        }),
        a = (0, u.bG)(
            [eM.default],
            () =>
                !!eM.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => eM.default.getUser(e)?.isStaff()),
            [t],
        ),
        o = (0, ei.qH)(),
        { enabled: d } = $.A.useConfig({ location: e4 });
    return (0, i.jsx)(to, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        entryPointType: l,
        isInNitroCapTreatment: d,
        nitroAudience: o,
        ...r,
        ...s,
    });
}
function tc(e) {
    let { channel: t, subscribeToGlobalHotkey: n, entryPointType: r } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, x.useHasModalOpen)(s),
        o = l.useCallback(
            () =>
                (0, x.openModalLazy)(
                    () => Promise.resolve((e) => (0, i.jsx)(td, { ...e, channel: t, entryPointType: r })),
                    { modalKey: s },
                ),
            [t, r, s],
        ),
        u = l.useCallback(() => (a ? (0, x.closeModal)(s) : o()), [a, s, o]);
    return (
        l.useEffect(
            () => (
                n && eY._.subscribe(el.jej.TOGGLE_DM_CREATE, u),
                () => {
                    eY._.unsubscribe(el.jej.TOGGLE_DM_CREATE, u);
                }
            ),
            [n, u],
        ),
        (0, k.Ay)(() => {
            (0, eU.u)();
        }),
        { showModal: o, toggleVisible: u }
    );
}
function th(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, x.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(td, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function tg(e) {
    let {
            channel: t,
            iconClassName: n,
            className: r,
            icon: s,
            tooltip: a,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        c = l.useRef(null),
        h = s ?? (null == t ? O.g : U.D),
        { showModal: g } = tc({ channel: t, subscribeToGlobalHotkey: d }),
        f = (0, u.bG)([eM.default], () => eM.default.getUser(t?.getRecipientId()));
    return f?.bot || f?.isProvisional
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(eJ.Ay.Icon, {
                      ref: c,
                      onClick: g,
                      icon: h,
                      className: r,
                      iconClassName: n,
                      tooltip: a,
                      tooltipPosition: o,
                  }),
                  null != t &&
                      t.isMultiUserDM() &&
                      (0, i.jsx)(eo, { targetElementRef: c, channelId: t.id, location: e4, onAddToGroup: g }, t.id),
              ],
          });
}
function tf(e) {
    let {
            channel: t,
            fullWidth: n = !1,
            text: r,
            icon: s,
            subscribeToGlobalHotkey: a = !1,
            allowFrictionlessGDMUpsell: o,
            entryPointType: u,
            ...c
        } = e,
        h = l.useRef(null),
        { showModal: g } = tc({ channel: t, subscribeToGlobalHotkey: a, entryPointType: u }),
        f = l.useMemo(() => (o ? [d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK] : []), [o]),
        [A, E] = (0, Z.kn)(f),
        p = l.useCallback(() => {
            A === d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && E(er.i.TAKE_ACTION), g();
        }, [g, A, E]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.$, {
                variant: "primary",
                ...c,
                onClick: p,
                buttonRef: h,
                text: r,
                "aria-label": r,
                icon: s,
                fullWidth: n,
            }),
            A === d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && (0, i.jsx)(e7, { targetElementRef: h, markAsDismissed: E }),
        ],
    });
}
function tA(e) {
    let t = tE(e);
    return new Set(
        (0, r.chain)(eL.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, eP.MK)(e.type))
            .filter((e) => tE(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function tE(e) {
    return JSON.stringify(e.sort());
}
