(n.d(t, { Ay: () => tc, NE: () => th, Jz: () => td, YW: () => e4 }), n(321073));
var i = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(536637),
    a = n.n(s),
    o = n(17928),
    u = n(554146),
    d = n(189213),
    c = n(862482),
    h = n(858899),
    f = n(939249),
    g = n(97808),
    A = n(778712),
    p = n(834730),
    m = n(821609),
    E = n(95477),
    I = n(559106),
    S = n(289873),
    C = n(320448),
    _ = n(847374),
    N = n(297264),
    T = n(452027),
    v = n(109802),
    y = n(231723),
    M = n(765178),
    D = n(192308);
if (221552 == n.j) var R = n(888366);
if (221552 == n.j) var O = n(241541);
var x = n(387755),
    L = n(308528),
    w = n(711950),
    U = n(376728),
    P = n(73153);
let b = {
    search(e, t) {
        P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open: (e) => P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e }),
    close() {
        P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var G = n(49229),
    F = n(684136),
    j = n(964486),
    k = n(793574),
    V = n(666860),
    H = n(688810),
    B = n(571694),
    W = n(47167),
    Y = n(915089),
    z = n(131607),
    J = n(727245),
    K = n(247676),
    $ = n(66442);
if (221552 == n.j) var Z = n(43105);
if (221552 == n.j) var q = n(403581);
var X = n(783420),
    Q = n(358047),
    ee = n(174459),
    et = n(695526);
n(696101);
var en = n(652215),
    ei = n(49999),
    el = n(202541),
    er = n(105292);
function es(e) {
    let { targetElementRef: t, channelId: n, location: r, onAddToGroup: s } = e,
        a = (0, et.qH)(),
        d = "staff" === a,
        c = "entitled" === a,
        h = (0, o.bG)([Q.Ay], () => Q.Ay.getSection(n)),
        { enabled: f } = J.A.useConfig({ location: r }),
        [g, A] = (0, z.kn)(f && !d ? [u.M.NITRO_GDM_CAP_COACHMARK] : []),
        p = g === u.M.NITRO_GDM_CAP_COACHMARK,
        m = l.useCallback(() => {
            (ee.default.track(en.HAw.PREMIUM_PROMOTION_OPENED, { location: r, location_object: en.ZSU.BUTTON_CTA }),
                A(ei.i.TAKE_ACTION));
        }, [r, A]),
        E = l.useCallback(() => {
            (s(), A(ei.i.TAKE_ACTION));
        }, [s, A]);
    return p
        ? (0, i.jsx)(X.A, {
              subscriptionTier: el.pe.TIER_2,
              onClick: m,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, i.jsx)(
                      Z.A,
                      {
                          targetElementRef: t,
                          position: "bottom",
                          alignmentStrategy: "trigger-center",
                          gradientColor: "nitro-pink",
                          badge: { type: "beta", variant: "expressive" },
                          title: er.intl.string(er.t.d8Spvj),
                          body: er.intl.formatToPlainString(er.t.SXkUiv, { number: 25 }),
                          actions: [
                              c
                                  ? { text: er.intl.string(er.t.yZOtoD), variant: "primary", icon: O.D, onClick: E }
                                  : {
                                        text: er.intl.string((0, et.o9)(a)),
                                        variant: "expressive",
                                        icon: q.t,
                                        onClick: n,
                                    },
                          ],
                          onRequestClose: () => A(ei.i.USER_DISMISS),
                      },
                      h,
                  );
              },
          })
        : null;
}
if (221552 != n.j) var q = n(403581);
var ea = n(87719);
function eo(e) {
    let { location: t, nitroAudience: n, transitionState: r, onClose: s } = e,
        a = l.useCallback(async () => {
            (ee.default.track(en.HAw.PREMIUM_PROMOTION_OPENED, { location: t, location_object: en.ZSU.BUTTON_CTA }),
                await s(),
                (0, ea.e)());
        }, [t, s]);
    return (0, i.jsx)(X.A, {
        subscriptionTier: el.pe.TIER_2,
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(d.a, {
                transitionState: r ?? y.ip.ENTERED,
                onClose: async () => await s(),
                title: er.intl.formatToPlainString(er.t.IyBYPN, { number: en.wLU }),
                subtitle: er.intl.formatToPlainString(er.t["Ae97n/"], { number: 25 }),
                actions: [
                    { text: er.intl.string(er.t.PUZmk4), variant: "secondary", onClick: a },
                    {
                        text: er.intl.string((0, et.o9)(n)),
                        variant: "expressive",
                        icon: q.t,
                        onClick: async (e) => {
                            (t(e), await s());
                        },
                    },
                ],
            });
        },
    });
}
var eu = n(503698),
    ed = n.n(eu),
    ec = n(399513),
    eh = n(866323),
    ef = n(568602),
    eg = n(775602);
n(46121);
var eA = n(222358);
let ep = { mass: 1, tension: 320, friction: 30, clamp: !0 },
    em = function (e) {
        let { location: t, memberCount: n, recipientLimit: r, ref: s } = e,
            a = (0, et.qH)(),
            { enabled: u } = J.A.useConfig({ location: t }),
            d = (0, o.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
            [c, h] = l.useState(!1),
            [f, g] = l.useState(!1),
            [A, E] = l.useState(1.4),
            I = l.useRef(1.4),
            S = l.useRef(null),
            C = l.useRef(null),
            _ = (0, et.yh)(a) && n >= r && u,
            N = l.useCallback(() => {
                (E(I.current),
                    (I.current = Math.min(I.current + 2, 15)),
                    h(!0),
                    g(!0),
                    null != S.current && clearTimeout(S.current),
                    (S.current = setTimeout(() => {
                        (h(!1), (S.current = null));
                    }, 300)),
                    null != C.current && clearTimeout(C.current),
                    (C.current = setTimeout(() => {
                        (g(!1), (C.current = null));
                    }, 1e3)));
            }, []);
        (l.useImperativeHandle(s, () => ({ shake: N }), [N]),
            l.useEffect(() => {
                _ || (I.current = 1.4);
            }, [_]),
            l.useEffect(
                () => () => {
                    (null != S.current && clearTimeout(S.current), null != C.current && clearTimeout(C.current));
                },
                [],
            ));
        let T = l.useCallback(() => {
            ee.default.track(en.HAw.PREMIUM_PROMOTION_OPENED, { location: t });
        }, [t]);
        return (0, eh.p)(_, {
            from: { transform: "translateY(16px)", opacity: 0.4 },
            enter: { transform: "translateY(0)", opacity: 1 },
            leave: { transform: "translateY(16px)", opacity: 0 },
            config: ep,
        })(
            (e, t) =>
                t &&
                (0, i.jsx)(ec.animated.div, {
                    className: eA.kY,
                    style: e,
                    children: (0, i.jsxs)(ef.b, {
                        isShaking: c,
                        intensity: A,
                        className: ed()(eA.vK, { [eA.hO]: f && d }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: eA.Qs,
                                children: [
                                    (0, i.jsx)(p.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: er.intl.string(er.t.KCD0Hp),
                                    }),
                                    (0, i.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: er.intl.formatToPlainString(er.t["8o8Zk5"], { number: 25 }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: eA.XI,
                                children: (0, i.jsx)(X.A, {
                                    subscriptionTier: el.pe.TIER_2,
                                    children: (e) => {
                                        let { onClick: t } = e;
                                        return (0, i.jsx)(m.$, {
                                            variant: "expressive",
                                            size: "sm",
                                            text: er.intl.string((0, et.o9)(a)),
                                            icon: q.t,
                                            onClick: (e) => {
                                                (T(), t(e));
                                            },
                                        });
                                    },
                                }),
                            }),
                        ],
                    }),
                }),
        );
    };
var eE = n(683063),
    eI = n(84327);
function eS(e) {
    let { memberCount: t, recipientLimit: n } = e,
        l = (0, et.qH)(),
        r = (0, o.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        s = "entitled" === l && n > en.wLU,
        a = t > en.wLU,
        u = er.intl.formatToPlainString(er.t["9EQix0"], { numMembers: t, maxMemberLimit: n }),
        d = (0, i.jsx)("span", {
            className: ed()(eI.hJ, { [eI.VN]: r }),
            children: s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(q.t, {
                              size: "xxs",
                              color: "currentColor",
                              className: ed()(eI.cn, { [eI.fw]: a }),
                              "aria-hidden": !0,
                          }),
                          (0, i.jsx)(p.E, {
                              variant: "text-md/normal",
                              className: ed()(eI.qz, { [eI.fw]: a }),
                              children: u,
                          }),
                      ],
                  })
                : (0, i.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: !s && t >= n ? "text-feedback-critical" : "text-subtle",
                      children: u,
                  }),
        });
    return (0, i.jsx)("div", {
        className: eI.VA,
        children: s
            ? (0, i.jsx)(eE.u, {
                  title: er.intl.string(er.t.u1ilug),
                  body: er.intl.format(er.t["mr27w/"], { number: 25 }),
                  position: "bottom",
                  align: "center",
                  children: d,
              })
            : d,
    });
}
var eC = n(774300);
let e_ = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 2419200 } },
});
var eN = n(287809),
    eT = n(427262);
async function ev(e, t) {
    if (0 === t.length) return;
    let n = [];
    for (let e of t) {
        let t = eN.default.getUser(e);
        null == t || t.bot || n.push(t);
    }
    if (0 !== n.length)
        try {
            let t = await U.Ay.createInvite(
                    e,
                    {
                        max_age: (function (e) {
                            let { location: t } = e,
                                { inviteMaxAgeSeconds: n } = e_.getConfig({ location: t });
                            return n;
                        })({ location: "5326c5_1" }),
                    },
                    en.PE1.GROUP_DM,
                ),
                i = await Promise.all(
                    n.map(async (e) => {
                        var n;
                        return {
                            user: e,
                            success: await ((n = t.code),
                            new Promise((t) => {
                                eC.A.enqueue(
                                    {
                                        inviteKey: n,
                                        type: eC.F.USER,
                                        user: e,
                                        location: en.PE1.GROUP_DM,
                                        inviteAnalyticsMetadata: { source: en.PE1.GROUP_DM },
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
                ((t =
                    (e = r.map((e) => eT.Ay.getName(e))).length > 0
                        ? er.intl.formatToPlainString(er.t["wWp/+6"], {
                              inviteCount: e.length,
                              username1: e[0],
                              username2: e[1] ?? "",
                              remaining: Math.max(0, e.length - 2),
                          })
                        : er.intl.string(er.t.iRntUl)),
                    (0, h.P0)({ text: t, variant: "critical" }));
            } else
                l.length > 0 &&
                    (function (e) {
                        let t = e.map((e) => eT.Ay.getName(e));
                        if (0 === t.length) return;
                        let n = er.intl.formatToPlainString(er.t.gztrTs, {
                            inviteCount: t.length,
                            username1: t[0],
                            username2: t[1] ?? "",
                            remaining: Math.max(0, t.length - 2),
                        });
                        (0, h.P0)({ text: n, variant: "success" });
                    })(l);
        } catch {
            (0, h.P0)({ text: er.intl.string(er.t.iRntUl), variant: "critical" });
        }
}
var ey = n(279208),
    eM = n(267102),
    eD = n(976860),
    eR = n(175452),
    eO = n(427358),
    ex = n(95701),
    eL = n(734057),
    ew = n(71393),
    eU = n(958590),
    eP = n(584777),
    eb = n(763827),
    eG = n(573163),
    eF = n(994500),
    ej = n(351906),
    ek = n(957565),
    eV = n(625494),
    eH = n(927813),
    eB = n(403362),
    eW = n(935208),
    eY = n(58736),
    ez = n(837381),
    eJ = n(692617),
    eK = n(658675),
    e$ = n(297413),
    eZ = n(966327),
    eq = n(235986),
    eX = n(548118),
    eQ = n(640708),
    e0 = n(290863),
    e1 = n(294910);
function e2(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: r,
            mutualGuilds: s,
            selected: a,
            checked: u,
            disabled: d = !1,
            onClick: c,
            onMouseEnter: h,
            "aria-setsize": g,
            "aria-posinset": A,
        } = e,
        m = (0, o.bG)([e0.A], () => e0.A.getStatus(t.id)),
        E = (0, ez.rm)(String(t.id));
    return (0, i.jsx)(f.D, {
        id: `user-row-${n}`,
        className: ed()(e1.Se, { [e1.r9]: d }),
        onClick: function () {
            c?.(t.id, n);
        },
        onMouseEnter: function () {
            h?.(n);
        },
        ...E,
        role: "checkbox",
        "aria-checked": u,
        "aria-disabled": d,
        "aria-setsize": g,
        "aria-posinset": A,
        children: (0, i.jsxs)(eq.A, {
            align: eq.A.Align.CENTER,
            className: ed()(e1.Bc, { [e1.oz]: a }),
            children: [
                (0, i.jsx)(eZ.A, { user: t, status: m, className: e1.my }),
                (0, i.jsxs)("div", {
                    className: e1.YW,
                    children: [
                        (0, i.jsx)(p.E, {
                            tag: "strong",
                            className: e1.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != r && r === t.tag
                                    ? eT.Ay.getName(t)
                                    : null != r && "" !== r
                                      ? r
                                      : eT.Ay.getName(t),
                        }),
                        (0, i.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != s && s.length > 0 ? e1.dj : void 0,
                            children: [
                                (0, i.jsx)(e$.A, {
                                    user: t,
                                    hideDiscriminator: l,
                                    className: e1.xK,
                                    forceUsername: !0,
                                }),
                                null != s && s.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eQ.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: e1.a6,
                                              }),
                                              (0, i.jsx)(eJ.A, {
                                                  className: e1.gP,
                                                  guilds: s,
                                                  maxGuilds: 3,
                                                  size: eX.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: e1.tz,
                                                  children:
                                                      1 === s.length
                                                          ? s[0].name
                                                          : er.intl.format(er.t.E215W7, { count: s.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eK.P, { checked: u, disabled: d }),
            ],
        }),
    });
}
if (221552 != n.j) var Z = n(43105);
function e5(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        r = l.useCallback(() => {
            n(ei.i.USER_DISMISS);
        }, [n]);
    return (0, i.jsx)(Z.A, {
        targetElementRef: t,
        position: "left",
        alignmentStrategy: "edge",
        align: "center",
        badge: "new",
        title: er.intl.string(er.t["Ur/4dI"]),
        body: er.intl.string(er.t.AVPtNF),
        actions: [{ text: er.intl.string(er.t["NX+WJN"]), onClick: r }],
        onRequestClose: r,
    });
}
var e9 = n(650583),
    e3 = n(872330);
let e7 = (0, Y.Ld)(),
    e8 = "PrivateChannelRecipientsInvite",
    e4 = { ADD_FRIENDS_TO_DM: "Add Friends to DM", NEW_GROUP_DM: "New Group DM", MEMBER_LIST: "Member List" };
function e6(e) {
    if (eF.A.isFriend(e)) return !0;
    let t = eN.default.getCurrentUser(),
        n = eN.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function te(e) {
    let t = [],
        n = [];
    for (let i of e) e6(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function tt(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? L.A.createGroupDmShell({ recipientId: t[0], location: n })
        : L.A.openPrivateChannel({ recipientIds: t, location: n });
}
function tn() {
    (0, h.P0)({ text: er.intl.string(er.t.fEptJP), variant: "critical" });
}
function ti(e) {
    let { channel: t, onClose: n } = e,
        l = (0, W.Ay)(t) ?? "",
        r = (0, o.bG)([eG.Ay], () => eG.Ay.lastMessageId(t.id) ?? t.id);
    return (0, i.jsx)(f.D, {
        onClick: () => {
            ((0, eD.uh)(en.ME, t.id), n());
        },
        children: (0, i.jsxs)("div", {
            className: e3.us,
            children: [
                (0, i.jsx)(g.eu, { src: (0, B.Y)(t), size: A._3.SIZE_24, "aria-label": l }),
                (0, i.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    tag: "span",
                    className: e3.J2,
                    children: l,
                }),
                (0, i.jsx)("span", { className: e3.Pd, children: a()(eW.default.extractTimestamp(r)).fromNow() }),
            ],
        }),
    });
}
function tl(e) {
    let { onConfirm: t, channelIds: n, ...l } = e,
        r = (0, o.yK)([eL.A], () => Array.from(n).map(eL.A.getChannel), [n]);
    return (0, i.jsx)(d.a, {
        title: er.intl.string(er.t.uFHxNd),
        subtitle: er.intl.string(er.t.rIsSqE),
        actions: [
            { variant: "secondary", text: er.intl.string(er.t["ETE/oC"]), onClick: l.onClose },
            {
                variant: "primary",
                text: er.intl.string(er.t.KCNNJu),
                onClick: () => {
                    (t(), l.onClose());
                },
            },
        ],
        input: (0, i.jsx)(p.E, { variant: "text-md/normal", className: e3.Jv, children: er.intl.string(er.t.cjE7wH) }),
        ...l,
        children: r
            .filter(eB.Vq)
            .sort((e, t) => {
                let n = e.lastMessageId ?? e.id,
                    i = t.lastMessageId ?? t.id;
                return eW.default.compare(i, n);
            })
            .map((e) => (0, i.jsx)(ti, { onClose: l.onClose, channel: e }, e.id)),
    });
}
function tr(e) {
    let { targetElementRef: t } = e,
        [n, l] = (0, z.kn)([u.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK]);
    return n !== u.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK
        ? null
        : (0, i.jsx)(e5, { targetElementRef: t, markAsDismissed: l });
}
class ts extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = eM.Ay;
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
                ? ((n = t ?? e4.ADD_FRIENDS_TO_DM), (i = e.isDM() ? "DM" : "Group DM"))
                : ((n = e4.NEW_GROUP_DM), (i = "Friends List")),
            { entryPointType: n, entryPointSource: i }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        b.open(e?.id).then(() => {
            this.trackModalOpened();
        });
        let t = (0, V.dI)(e);
        (ee.default.track(en.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            eV._.subscribe(en.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eV._.subscribe(en.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            this.createInvite(),
            setTimeout(() => {
                this.forceFocus();
            }, 0));
    }
    trackModalOpened = () => {
        let { channel: e } = this.props,
            t = eP.A.getResults(),
            { friendCount: n, nonFriendCount: i } = (0, V.g4)(t.map((e) => e.user.id)),
            l = this._getAnalyticsEntryPoint();
        ee.default.track(en.HAw.PRIVATE_CHANNEL_INVITE_MODAL_OPENED, {
            ...(0, V.dI)(e),
            default_results_count: t.length,
            default_results_friend_count: n,
            default_results_non_friend_count: i,
            entry_point_type: l.entryPointType,
            entry_point_source: l.entryPointSource,
        });
    };
    componentWillUnmount() {
        (eV._.unsubscribe(en.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eV._.unsubscribe(en.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            b.close());
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
        return !eF.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds;
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            l = [];
        for (let t of e) eF.A.isFriend(t.user.id) ? i.push(t) : l.push(t);
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
        null == e ||
            !e.isMultiUserDM() ||
            this.isPartyFull() ||
            U.Ay.createInvite(e.id, { max_age: this.props.inviteMaxAgeSeconds }, en.PE1.GROUP_DM);
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
        return this.props.isInNitroCapTreatment && (0, et.yh)(this.props.nitroAudience);
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
            l = t.size > 1 || null != e ? er.intl.string(er.t["h1/FMu"]) : er.intl.string(er.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(m.$, {
            variant: "primary",
            text: er.intl.string(er.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return er.intl.string(er.t.Xjlbvs);
        if (this.isPartyFull()) return er.intl.string(er.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e
            ? er.intl.string(er.t.jD1qzM)
            : e.isMultiUserDM()
              ? er.intl.string(er.t.NB5DFD)
              : er.intl.string(er.t["PWkO7+"]);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = eN.default.getUser(t),
                        n = null != e ? e.username : "";
                    return er.intl.format(er.t["eg+R9x"], { username: n });
                }
            }
            return er.intl.string(er.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = eN.default.getUser(t),
                i = null != n ? n.username : "";
            return er.intl.format(er.t["eg+R9x"], { username: i });
        }
        if (null == e) return er.intl.format(er.t.t9mhPt, { number: (0, K.A)({ useNitroCapExperiment: !0 }) });
        let n = this.getRemaining();
        return n <= 0
            ? er.intl.formatToPlainString(er.t.xYr004, { number: (0, K.A)({ useNitroCapExperiment: !0 }) })
            : er.intl.formatToPlainString(er.t.barkEr, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, query: i } = this.props,
            { current: l } = this.searchBarRef;
        if (null == l) return;
        let r = this.getDisplayedResults(),
            s = t;
        switch (e.key) {
            case e9.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case e9.dh.ARROW_DOWN:
                (e.preventDefault(), e.stopPropagation(), ++s >= r.length && (s = 0), this.handleSelectionChange(s));
                break;
            case e9.dh.ARROW_UP:
                (e.preventDefault(), e.stopPropagation(), --s < 0 && (s = r.length - 1), this.handleSelectionChange(s));
                break;
            case e9.dh.ENTER:
                (e.preventDefault(), e.stopPropagation(), r.length > s && this.handleSelect(s));
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let l = [];
        n.forEach((e) => {
            let t = eN.default.getUser(e);
            null != t &&
                l.push({ id: e, label: eT.Ay.getName(t), icon: { type: "avatar", src: t.getAvatarURL(void 0, 32) } });
        });
        let { results: r, selectedRow: s, isLoading: a } = this.props,
            o = r.length > 0 || a,
            u = !1;
        for (let e of n) {
            if (eF.A.isFriend(e)) continue;
            let t = eN.default.getUser(e);
            if (null != t && !t.bot) {
                u = !0;
                break;
            }
        }
        return (0, i.jsxs)("div", {
            className: e3.ON,
            children: [
                (0, i.jsx)(E.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: er.intl.string(u ? er.t.xHuK72 : er.t.FIHggl),
                    placeholder: 0 === n.size ? er.intl.string(er.t["5h0QOP"]) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: {
                        type: "tags",
                        label: er.intl.string(er.t.kHyiXs),
                        items: l,
                        onRemove: this.handleRemoveUser,
                    },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": e7,
                    "aria-expanded": o,
                    "aria-activedescendant": o ? `user-row-${s}` : void 0,
                }),
                this.renderAddUsersButton(),
                (0, i.jsx)(tr, { targetElementRef: this.searchBarRef }),
            ],
        });
    }
    renderNitroUpsellBannerOverlay() {
        let { isInNitroCapTreatment: e, nitroAudience: t } = this.props;
        return e && (0, et.yh)(t)
            ? (0, i.jsx)("div", {
                  className: e3.qu,
                  children: (0, i.jsx)(em, {
                      ref: this.nitroUpsellBannerRef,
                      location: e8,
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
                        (0, i.jsx)(eS, {
                            memberCount: this.getTotalSelectedMemberCount(),
                            recipientLimit: (0, K.A)({ useNitroCapExperiment: !0 }),
                        }),
                    t,
                ],
            });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: e3.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(I.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(F.A, { className: e3.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", {
                    children: er.intl.format(er.t.xYr004, { number: (0, K.A)({ useNitroCapExperiment: !0 }) }),
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
                    className: e3.XG,
                    innerClassName: e3.bv,
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
                    innerId: e7,
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
                    className: e3.wV,
                    children: [
                        (0, i.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: er.intl.string(er.t.z3yXsY),
                        }),
                        (0, i.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: er.intl.string(t ? er.t["l6Rj+t"] : er.t["7w2iq7"]),
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
            className: e3.XG,
            innerClassName: e3.bv,
            renderRow: (l) => {
                let { section: s, row: a } = l,
                    o = e[s];
                if (null == o || t.has(o.type)) return null;
                if (a >= o.results.length)
                    return (0, i.jsx)("div", {
                        className: e3.Q_,
                        children: (0, i.jsx)(S.y, { type: S.t.SPINNING_CIRCLE, className: e3.u1 }),
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
                    a = "friends" === r.type ? er.intl.string(er.t.TdEu5X) : er.intl.string(er.t.y29JXs),
                    o = s ? C._ : _.a;
                return (0, i.jsxs)(f.D, {
                    className: e3.bV,
                    onClick: () => this.handleSectionToggle(r.type),
                    "aria-expanded": !s,
                    "aria-label": a,
                    children: [
                        (0, i.jsx)(N.D, { variant: "heading-sm/semibold", color: "text-muted", children: a }),
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
            innerId: e7,
        };
    }
    handleSectionToggle = (e) => {
        this.setState(
            (t) => {
                let { collapsedSections: n } = t,
                    i = new Set(n);
                return (i.has(e) ? i.delete(e) : i.add(e), { collapsedSections: i });
            },
            () => {
                let e = this.getDisplayedResults();
                this.props.selectedRow >= e.length && b.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: l, selectedRow: r, hideDiscriminator: s, channel: a } = this.props,
            { user: o, comparator: u, mutualGuilds: d } = e,
            c = l.has(o.id) || a?.recipients.includes(o.id),
            h = (!c && 0 >= this.getRemaining() && !this.shouldShowNitroCapRoadblock()) || a?.recipients.includes(o.id);
        return (0, i.jsx)(
            e2,
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
        var e;
        let t,
            { channel: n, invite: l, hideInstantInvites: r } = this.props,
            { copied: s } = this.state;
        if (null == n || !n.isMultiUserDM() || this.isPartyFull()) return null;
        let a = null != l ? (0, ey.A)(l.code) : "",
            o = a.length > 0;
        return (0, i.jsx)(T.D, {
            label: er.intl.string(er.t.dTqtcN),
            helperText: o
                ? (t = Math.floor((e = this.props.inviteMaxAgeSeconds) / eH.A.Seconds.DAY)) <= 1
                    ? er.intl.formatToPlainString(er.t.ZVdJMy, { numHours: Math.round(e / eH.A.Seconds.HOUR) })
                    : er.intl.formatToPlainString(er.t.T96qss, { numDays: t })
                : void 0,
            children: (0, i.jsx)(v.e, {
                supportsCopy: ek.p5,
                placeholder: (0, ey.A)(er.intl.string(er.t.lPVBqP)),
                value: o ? (r ? er.intl.string(er.t["6HzNgZ"]) : a) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: o ? (s ? er.intl.string(er.t.q30c5i) : er.intl.string(er.t.OpuAlK)) : er.intl.string(er.t.qzxqUf),
                mode: s ? v.q.SUCCESS : v.q.DEFAULT,
                onCopy: () => {
                    o ? this.handleCopyInvite(a) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = eN.default.getUser(e),
                i = null != n && eF.A.getRelationshipType(n.id) === en.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? er.intl.string(er.t.xMH6vD) : er.intl.string(er.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: er.intl.string(er.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t) {
            let e = n.size > 1,
                t = new Set(n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(ta, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: t,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: er.intl.string(er.t["ETE/oC"]), onClick: this.props.onClose },
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
        if ((0, et.yh)(n)) return (0, i.jsx)(eo, { transitionState: e, onClose: t, location: e8, nitroAudience: n });
        let l = (0, K.A)({ useNitroCapExperiment: !0 });
        return (0, i.jsx)(d.a, {
            transitionState: e ?? y.ip.ENTERED,
            onClose: async () => await t(),
            title: er.intl.formatToPlainString(er.t.IyBYPN, { number: l }),
            subtitle: er.intl.formatToPlainString(er.t.xYr004, { number: l }),
            actions: [],
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        if (this.isPartyFull() && this.props.isInNitroCapTreatment) return this.renderNitroCapFullState();
        let { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(d.a, {
            transitionState: e ?? y.ip.ENTERED,
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
        (this.props.onClose(),
            G.A.sendRequest({
                discordTag: eT.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            }));
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        b.select(e);
    };
    handleSelect = (e) => {
        let { channel: t } = this.props;
        if (null == e) return void b.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id, e);
    };
    handleSelectionChange = (e) => {
        b.select(e);
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
            n = (0, V.dI)(t);
        (b.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                (ee.default.track(en.HAw.SEARCH_USER_LIST_STARTED, {
                    ...n,
                    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                    search_query_length: e.length,
                }),
                    this._searchCounter++);
            }, 500)));
    };
    handleRemoveTag = (e) => {
        let t = Array.from(this.props.selectedUsers);
        b.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        (e.forEach((e) => {
            let t = eN.default.getUser(e);
            (null != t &&
                M.O.announce(er.intl.formatToPlainString(er.t.JL1QSg, { username: eT.Ay.getName(t) }), "polite"),
                b.removeUser(e));
        }),
            this.forceFocus());
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
                let i = eF.A.isFriend(t);
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
            let d = eN.default.getUser(t);
            if (s) {
                if (0 >= e.getRemaining()) {
                    e.shouldShowNitroCapRoadblock() &&
                        (e.nitroUpsellBannerRef.current?.shake(), M.O.announce(er.intl.string(er.t.KCD0Hp), "polite"));
                    return;
                }
                e.getRemaining() > 0 &&
                    (ee.default.track(en.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                        ...(0, V.dI)(r),
                        section: o,
                        row: u,
                        interaction_type: "select",
                        affinity_score: eO.A.getUserAffinity(t)?.communicationProbability ?? -1,
                    }),
                    b.addUser(t),
                    null != d &&
                        M.O.announce(
                            er.intl.formatToPlainString(er.t.iyKU50, { username: eT.Ay.getName(d) }),
                            "polite",
                        ),
                    l.length > 0 && (b.clear(r?.id), e.forceFocus()));
            } else
                (ee.default.track(en.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                    ...(0, V.dI)(r),
                    section: o,
                    row: u,
                    interaction_type: "deselect",
                    affinity_score: eO.A.getUserAffinity(t)?.communicationProbability ?? -1,
                }),
                    b.removeUser(t),
                    null != d &&
                        M.O.announce(
                            er.intl.formatToPlainString(er.t.JL1QSg, { username: eT.Ay.getName(d) }),
                            "polite",
                        ));
        };
    })();
    handleAddFriendNavigation = () => {
        (w.A.transitionToSection(en.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose());
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = eO.A.getUserAffinity(e);
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
        ("" !== this.state.newChannelName && (n.name = this.state.newChannelName),
            null != this.state.previewIcon && (n.icon = this.state.previewIcon),
            (null != n.name || null != n.icon) && L.A.updateChannel(e, n, t),
            ee.default.track(en.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: en.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            }));
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, V.dI)(n),
            l = !0;
        1 === e.length && (l = null == L.A._openCachedDMChannel(e[0]));
        let r = (0, V.g4)(e);
        ee.default.track(en.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            e.length > 1 ? te(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        tt({ recipientIds: s, location: "New Group DM", useGroupDmShell: a.length > 0 })
            .then((e) => {
                (this.props.onComplete?.(e), this.updateGDM(e, k.A.NEW_GROUP_DM_INVITE_MODAL), ev(e, a));
            })
            .catch(tn);
    };
    pushToExistingDM = (e, t) => {
        let { channelRecipientIds: n, inviteLinkOnlyUserIds: i } = te(t),
            l = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(l, n, i)
            : e.isDM() && this._promoteDMToGroupDM(l, e.getRecipientId(), n, i);
        let r = (0, V.g4)(t);
        ee.default.track(en.HAw.CREATE_DM_USER_LIST_CLICKED, {
            ...(0, V.dI)(e),
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
        let i = eb.A.getChannelId() === e;
        (t.length > 0 ? L.A.addRecipients(e, t, en.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                (this.props.onComplete?.(e), ev(e, n), i && t.length > 0 && x.A.ring(e, t, "dm_invite"));
            })
            .catch(tn);
    };
    _promoteDMToGroupDM = (e, t, n, i) => {
        let l = eb.A.getChannelId() === e,
            r = e6(t),
            s = r ? [...n, t] : n,
            a = r ? i : [...i, t];
        (r && n.length > 0
            ? L.A.addRecipients(e, n, en.ThZ.ADD_FRIENDS_TO_DM)
            : s.length > 0 || a.length > 0
              ? tt({ recipientIds: s, location: "New Group DM", useGroupDmShell: a.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), ev(t, a), l)) {
                    if (t !== e) return void x.A.call(t, !1, !0);
                    n.length > 0 && x.A.ring(t, n, "dm_invite");
                }
            })
            .catch(tn);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            l = Array.from(t);
        if (null != e) {
            let t = tf(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, D.openModal)(
                      (n) => (0, i.jsx)(tl, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, D.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = tf(l);
            l.length > 1 && e.size > 0
                ? (0, D.openModal)(
                      (t) => (0, i.jsx)(tl, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, D.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        (null != n && (0, ek.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            ee.default.track(en.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: en.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            }));
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function ta(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: r, onIconRemove: s, onChange: a } = e,
        { analyticsLocations: o } = (0, H.Ay)(k.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, W.Jo)(Array.from(t), eN.default, eF.A);
    return (0, i.jsxs)("div", {
        className: e3.zj,
        children: [
            (0, i.jsx)($.X, {
                className: e3.r9,
                channel: null,
                previewIcon: l,
                onIconChange: r,
                onIconRemove: s,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(p.E, {
                className: e3.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: er.intl.string(er.t.YynaLK),
            }),
            (0, i.jsx)(E.k, {
                "aria-label": er.intl.string(er.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function to(e) {
    let { channel: t, onComplete: n, entryPointType: l, ...r } = e,
        s = (0, o.cf)([ej.A, eP.A, eU.A, ew.A, eF.A], () => {
            let e;
            return (
                null != t && null != (e = eU.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...eP.A.getState(),
                    hasFriends: eF.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: ej.A.hidePersonalInformation,
                    hideInstantInvites: ej.A.hideInstantInvites,
                    hasGuilds: ew.A.getGuildCount() > 0,
                }
            );
        }),
        a = (0, o.bG)(
            [eN.default],
            () =>
                !!eN.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => eN.default.getUser(e)?.isStaff()),
            [t],
        ),
        u = (0, et.qH)(),
        { enabled: d } = J.A.useConfig({ location: e8 }),
        c = (function (e) {
            let { location: t } = e,
                { inviteMaxAgeSeconds: n } = e_.useConfig({ location: t });
            return n;
        })({ location: "5326c5_1" });
    return (0, i.jsx)(ts, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        entryPointType: l,
        isInNitroCapTreatment: d,
        nitroAudience: u,
        inviteMaxAgeSeconds: c,
        ...r,
        ...s,
    });
}
function tu(e) {
    let { channel: t, subscribeToGlobalHotkey: n, entryPointType: r } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, D.useHasModalOpen)(s),
        o = l.useCallback(
            () =>
                (0, D.openModalLazy)(
                    () => Promise.resolve((e) => (0, i.jsx)(to, { ...e, channel: t, entryPointType: r })),
                    { modalKey: s },
                ),
            [t, r, s],
        ),
        u = l.useCallback(() => (a ? (0, D.closeModal)(s) : o()), [a, s, o]);
    return (
        l.useEffect(
            () => (
                n && eV._.subscribe(en.jej.TOGGLE_DM_CREATE, u),
                () => {
                    eV._.unsubscribe(en.jej.TOGGLE_DM_CREATE, u);
                }
            ),
            [n, u],
        ),
        (0, j.Ay)(() => {
            (0, eR.u)();
        }),
        { showModal: o, toggleVisible: u }
    );
}
function td(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, D.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(to, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function tc(e) {
    let {
            channel: t,
            iconClassName: n,
            className: r,
            icon: s,
            tooltip: a,
            tooltipPosition: u = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        c = l.useRef(null),
        h = s ?? (null == t ? R.g : O.D),
        { showModal: f } = tu({ channel: t, subscribeToGlobalHotkey: d }),
        g = (0, o.bG)([eN.default], () => eN.default.getUser(t?.getRecipientId()));
    return g?.bot || g?.isProvisional
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(eY.Ay.Icon, {
                      ref: c,
                      onClick: f,
                      icon: h,
                      className: r,
                      iconClassName: n,
                      tooltip: a,
                      tooltipPosition: u,
                  }),
                  null != t &&
                      t.isMultiUserDM() &&
                      (0, i.jsx)(es, { targetElementRef: c, channelId: t.id, location: e8, onAddToGroup: f }, t.id),
              ],
          });
}
function th(e) {
    let {
            channel: t,
            fullWidth: n = !1,
            text: r,
            icon: s,
            subscribeToGlobalHotkey: a = !1,
            allowFrictionlessGDMUpsell: o,
            entryPointType: d,
            ...c
        } = e,
        h = l.useRef(null),
        { showModal: f } = tu({ channel: t, subscribeToGlobalHotkey: a, entryPointType: d }),
        g = l.useMemo(() => (o ? [u.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK] : []), [o]),
        [A, p] = (0, z.kn)(g),
        E = l.useCallback(() => {
            (A === u.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && p(ei.i.TAKE_ACTION), f());
        }, [f, A, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.$, {
                variant: "primary",
                ...c,
                onClick: E,
                buttonRef: h,
                text: r,
                "aria-label": r,
                icon: s,
                fullWidth: n,
            }),
            A === u.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && (0, i.jsx)(e5, { targetElementRef: h, markAsDismissed: p }),
        ],
    });
}
function tf(e) {
    let t = tg(e);
    return new Set(
        (0, r.chain)(eL.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, ex.MK)(e.type))
            .filter((e) => tg(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function tg(e) {
    return JSON.stringify(e.sort());
}
