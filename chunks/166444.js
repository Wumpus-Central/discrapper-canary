var s = l(477900),
    i = l(582128),
    t = l(503698),
    a = l.n(t);
if (221552 == l.j) var r = l(837381);
var u = l(855986);
if (221552 == l.j) var c = l(3026);
var o = l(97808),
    d = l(778712),
    A = l(866665);
if (221552 == l.j) var E = l(834730);
if (221552 == l.j) var f = l(559106);
var N = l(25639),
    m = l(186369),
    h = l(148719),
    b = l(47167),
    _ = l(970812),
    D = l(713654),
    p = l(501803),
    T = l(922301),
    g = l(16371),
    x = l(598104),
    C = l(95035),
    M = l(162199),
    U = l(897898),
    v = l(71393),
    I = l(290863),
    j = l(741961),
    y = l(287809),
    R = l(977997),
    L = l(253400),
    G = l(66933),
    S = l(652215),
    O = l(790782),
    V = l(964306),
    k = l(672812),
    P = l(736541);
let w = "body-md/medium",
    H = {
        SELECTED: k.J1,
        CONNECTED: k.d4,
        UNREAD_IMPORTANT: k.V2,
        UNREAD_LESS_IMPORTANT: k.modeUnreadLessImportant,
        MUTED: k.F4,
        LOCKED: k.yg,
    };
function K(e) {
    (e.preventDefault(), e.stopPropagation());
}
let F = L.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function z(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: i } = e;
    return (0, s.jsx)(x.A, { className: i, channel: n, "aria-hidden": !0, size: l });
}
function B(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: i } = e,
        t = (0, u.bG)([y.default], () => y.default.getUser(n?.recipients[0])),
        a = (0, u.bG)(
            [j.A],
            () => !(null == t || null == n || n.isMultiUserDM()) && null != j.A.getTypingUsers(n?.id)[t?.id],
        ),
        {
            status: r,
            isMobile: c,
            isVR: o,
        } = (0, u.cf)([I.A], () =>
            null == t || null == n || n.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(t.id), isMobile: I.A.isMobileOnline(t.id), isVR: I.A.isVROnline(t.id) },
        );
    return (0, s.jsx)(F, {
        className: i,
        size: l,
        src: t?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: c,
        isVR: o,
        isTyping: a,
        "aria-label": t?.username,
        statusTooltip: !0,
    });
}
let Z = i.memo(function (e) {
    let {
            className: n,
            containerClassName: l,
            channel: i,
            locked: t,
            hasActiveThreads: r,
            hasUsersInVoiceChannel: c,
            tooltipText: o,
        } = e,
        d = (0, u.bG)([v.A], () => v.A.getGuild(i.guild_id), [i.guild_id]),
        { enableWaveformIcon: E } = (0, m.b)(i.guild_id, "ChannelItemIcon"),
        f = (0, u.bG)([N.A], () => N.A.getAnimationStyle(i.id), [i.id]),
        b = i.type === S.rbe.GUILD_VOICE,
        p = null;
    if (E && b && !t && c)
        p = (0, s.jsx)(_.A, { color: "currentColor", className: a()(k.Kk, n), animationStyle: f, locked: (0, h.A)(i) });
    else {
        let e = (function (e, n, l) {
            switch (e.type) {
                case S.rbe.DM:
                    return function (n) {
                        let { className: l } = n;
                        return (0, s.jsx)(B, { channel: e, className: l });
                    };
                case S.rbe.GROUP_DM:
                    return function (n) {
                        let { className: l } = n;
                        return (0, s.jsx)(z, { channel: e, className: l });
                    };
                default:
                    return (0, D.gU)(e, n, l);
            }
        })(i, d, { locked: t, hasActiveThreads: r });
        if (null == e) return null;
        p = (0, s.jsx)(e, { color: "currentColor", className: a()(k.Kk, n) });
    }
    let T = (0, D.Bq)(i, d, t, r),
        g = `${T} icon`;
    return (0, s.jsx)(A.m, {
        text: o ?? T,
        delay: 500,
        children: (0, s.jsx)("div", { role: "img", "aria-label": g, className: a()(k.zc, l), children: p }),
    });
});
function q(e) {
    let { channel: n, name: l, textVariant: t } = e,
        a = n.isPrivate() && 1 === (n.rawRecipients ?? []).length,
        r = n.rawRecipients?.[0]?.display_name_styles,
        u = i.useMemo(() => (a ? (0, p.mT)(r) : null), [a, r]);
    return null != u
        ? (0, s.jsx)(g.A, {
              userName: l,
              displayNameStyles: u,
              effectDisplayType: T.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: t,
          })
        : (0, s.jsx)(E.E, { variant: t, tag: "span", color: "none", children: l });
}
l.d(
    n,
    {},
    {
        Ay: function (e) {
            let {
                    channel: n,
                    name: l,
                    muted: t,
                    selected: o,
                    connected: d,
                    unread: A,
                    locked: N,
                    hasActiveThreads: m,
                    onClick: h,
                    onMouseDown: _,
                    onMouseUp: D,
                    onContextMenu: p,
                    connectDragPreview: T,
                    className: g,
                    iconClassName: x,
                    iconTooltipText: v,
                    subtitle: I,
                    subtitleColor: j,
                    channel: { type: y },
                    onMouseEnter: L,
                    onMouseLeave: F,
                    "aria-label": z,
                    children: B,
                    guild: J,
                    channelTypeOverride: W,
                    forceInteractable: Y,
                    mentionCount: X,
                    resolvedUnreadSetting: $,
                    isFavoriteSuggestion: Q,
                    hasActiveEvent: ee = !1,
                    disableOverflowTooltip: en = !1,
                    transitionExtras: el,
                    ref: es,
                } = e,
                ei = $ === O.e.ALL_MESSAGES || (null != X && X > 0),
                et = (0, u.bG)([R.A], () => Object.values(R.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                { role: ea, ...er } = (0, r.rm)(n.id),
                eu = i.useRef(null),
                ec = i.useRef(null),
                eo = (0, M.A)(n);
            null != eo && G.A.getConfig({ guildId: eo, location: "channel_item" });
            let ed = S.BVt.CHANNEL(eo, n.id),
                eA = (0, b.Ay)(n),
                eE = n.isGuildVocal(),
                ef = null != h || null != D || null != _ || Y,
                eN = (0, s.jsx)("div", {
                    className: a()({ [k.ow]: Q }),
                    ref: ec,
                    children: (0, s.jsxs)(C.A, {
                        role: eE && !d ? "button" : "link",
                        href: eE ? void 0 : ed,
                        target: "_blank",
                        ref: eu,
                        className: k.nf,
                        onClick: () => h?.(n),
                        onMouseDown: eE ? U.q : void 0,
                        onClickCapture: (e) => (0, U.A)(e, n),
                        onAuxClick: (e) => (0, U.A)(e, n),
                        transitionExtras: el,
                        ...er,
                        "aria-label": z,
                        "aria-current": o ? "page" : void 0,
                        focusProps: { enabled: !1 },
                        children: [
                            (0, s.jsxs)("div", {
                                className: k.Y5,
                                children: [
                                    (0, s.jsx)(Z, {
                                        className: x,
                                        tooltipText: v,
                                        channel: n,
                                        guild: J,
                                        hasUsersInVoiceChannel: et,
                                        hasActiveThreads: m,
                                        locked: N,
                                    }),
                                    (0, s.jsx)(c.A, {
                                        className: a()(k.UU, P[w], { [k.NW]: ee }),
                                        shouldShow: !en,
                                        "aria-hidden": !0,
                                        children: (0, s.jsx)(q, {
                                            textVariant: w,
                                            channel: n,
                                            name: null != l ? l : eA,
                                        }),
                                    }),
                                    i.Children.count(B) > 0
                                        ? (0, s.jsx)("div", { onClick: K, onKeyPress: K, className: k.Y_, children: B })
                                        : null,
                                ],
                            }),
                            null != I
                                ? (0, s.jsx)("div", {
                                      className: k.MA,
                                      children: (0, s.jsx)(E.E, {
                                          color: j ?? "text-muted",
                                          variant: "body-xs/medium",
                                          className: k.VA,
                                          children: I,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                });
            return (0, s.jsx)(f.vN, {
                focusTarget: eu,
                ringTarget: ec,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, s.jsxs)("div", {
                    ref: es,
                    className: a()(
                        g,
                        ef ? k.iE : k.IA,
                        (function () {
                            if (o) return a()(V.rM, H.SELECTED);
                            if (d) return a()(V.rM, H.CONNECTED);
                            if (N) return H.LOCKED;
                            if (t) return H.MUTED;
                            if (A)
                                if (ei) return H.UNREAD_IMPORTANT;
                                else return H.UNREAD_LESS_IMPORTANT;
                            return null;
                        })(),
                        (function (e) {
                            switch (e) {
                                case S.rbe.GUILD_STAGE_VOICE:
                                case S.rbe.GUILD_VOICE:
                                    return k.typeVoice;
                                case S.rbe.ANNOUNCEMENT_THREAD:
                                case S.rbe.PUBLIC_THREAD:
                                case S.rbe.PRIVATE_THREAD:
                                    return k.ZS;
                                case S.rbe.GUILD_ANNOUNCEMENT:
                                case S.rbe.GUILD_TEXT:
                                case S.rbe.GUILD_STORE:
                                case S.rbe.GUILD_FORUM:
                                case S.rbe.GUILD_MEDIA:
                                case S.rbe.GUILD_APP:
                                default:
                                    return k.typeDefault;
                            }
                        })(W ?? y),
                    ),
                    onMouseUp: (e) => D?.(e, n),
                    onMouseDown: (e) => _?.(e, n),
                    onContextMenu: (e) => p?.(e, n),
                    onMouseEnter: L,
                    onMouseLeave: F,
                    children: [
                        t || !A ? null : (0, s.jsx)("div", { className: a()(k.gy, ei ? k.WS : void 0) }),
                        T?.(eN) ?? eN,
                    ],
                }),
            });
        },
        IC: z,
        Pk: B,
        dG: K,
        gm: Z,
    },
);
