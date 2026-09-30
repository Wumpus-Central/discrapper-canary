(n.r(t), n.d(t, { default: () => tx }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(333007),
    o = n(43990),
    u = n(559106),
    c = n(604681);
n(183994);
var d = n(761929),
    x = n(386467),
    h = n(97469),
    f = n(925166),
    m = n(605117),
    g = n(17928),
    j = n(707554),
    p = n(140735),
    C = n(475825),
    b = n(546359),
    v = n(736347),
    A = n(939249),
    N = n(331322),
    R = n(778712),
    I = n(834730),
    E = n(866665),
    k = n(683063),
    S = n(687966),
    w = n(432017),
    y = n(31300),
    L = n(442433),
    P = n(966327),
    D = n(713654),
    T = n(263577),
    O = n(471107),
    F = n(381849),
    M = n(342296),
    G = n(734057),
    z = n(290863),
    U = n(287809),
    B = n(240248),
    H = n(652215),
    W = n(347932),
    _ = n(375708),
    V = n(604506);
function $(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, g.bG)([U.default], () => U.default.getUser(t.userId), [t.userId]),
        o = (0, m.c)(),
        u = (function (e, t, n) {
            let i = (0, g.bG)(
                    [z.A],
                    () => {
                        let t = z.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === H.$pd.PLAYING || i?.type === H.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, g.bG)([G.A], () => (r ? G.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n = (0, D.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, l.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": _.intl.string(W.default["8ALChp"]),
                              }),
                    textColor: s,
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? _.intl.format(W.default.KddZZf, { duration: (0, l.jsx)(X, { start: t }) })
                            : _.intl.string(W.default["8ALChp"]),
                };
            }
            if (null == i) return null;
            let o = (function (e, t) {
                switch (e.type) {
                    case H.$pd.PLAYING:
                    case H.$pd.COMPETING:
                        return { Icon: S.GameControllerIcon, text: Z(e.details) ?? (t ? null : Z(e.name)) };
                    case H.$pd.LISTENING:
                        return { Icon: w.T, text: Z(e.details) ?? Z(e.name) };
                    case H.$pd.WATCHING:
                        return { Icon: y.k, text: Z(e.details) ?? Z(e.name) };
                    case H.$pd.CUSTOM_STATUS:
                        return { text: Z(e.state) };
                    default:
                        return null;
                }
            })(i, t === v.ik.GAME);
            if (null == o || null == o.text) return null;
            let { Icon: u, text: c } = o,
                d = i.timestamps?.start;
            return {
                icon:
                    null != u &&
                    (0, l.jsx)(u, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content:
                    null != d ? _.intl.format(W.default.Fb6oNP, { text: c, duration: (0, l.jsx)(X, { start: d }) }) : c,
            };
        })(t, s, r),
        c = i.useRef(null),
        d = i.useCallback(
            (e) => {
                let i = U.default.getUser(t.userId);
                null != i &&
                    (0, L.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("463317"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("893190"),
                            n.e("189673"),
                            n.e("882073"),
                            n.e("797558"),
                            n.e("691994"),
                            n.e("576665"),
                            n.e("624198"),
                            n.e("532418"),
                        ]).then(n.bind(n, 668569));
                        return (t) => (0, l.jsx)(e, { ...t, user: i });
                    });
            },
            [t.userId],
        );
    return null == a
        ? null
        : (0, l.jsx)(M.A, {
              targetElementRef: c,
              user: a,
              position: "left",
              spacing: 16,
              children: (e) => {
                  let n = (0, l.jsx)(A.D, {
                      tag: "div",
                      innerRef: c,
                      ...e,
                      onContextMenu: d,
                      children: (0, l.jsxs)(N.B, {
                          direction: "horizontal",
                          align: "center",
                          padding: 8,
                          fullWidth: !1,
                          className: V.nM,
                          children: [
                              (0, l.jsx)(P.A, {
                                  user: a,
                                  size: R._3.SIZE_32,
                                  status: t.status,
                                  "aria-hidden": !0,
                                  className: V.LY,
                              }),
                              (0, l.jsxs)("div", {
                                  className: V.rf,
                                  children: [
                                      (0, l.jsx)(I.E, { variant: "text-md/normal", lineClamp: 1, children: t.name }),
                                      (0, l.jsx)(q, { subtitle: u }),
                                  ],
                              }),
                              null != t.gameAssetUrl && (0, l.jsx)(T.V, { src: t.gameAssetUrl, size: 32 }),
                          ],
                      }),
                  });
                  return o
                      ? null == u
                          ? (0, l.jsx)(E.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                          : (0, l.jsx)(k.u, {
                                title: t.name,
                                body: u.content,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                      : n;
              },
          });
}
function Z(e) {
    return (0, B.uJ)(e) ? null : e;
}
function X(e) {
    let { start: t } = e,
        { now: n } = (0, O.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, F.WR)({ seconds: l, getFormatter: F.i });
}
function q(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(N.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  t.icon,
                  (0, l.jsx)(I.E, {
                      variant: "text-xs/normal",
                      color: t.textColor,
                      lineClamp: 1,
                      "aria-hidden": t.contentAriaHidden,
                      children: t.content,
                  }),
              ],
          });
}
var J = n(768622),
    Y = n(935154),
    K = n(80558),
    Q = n(939341),
    ee = n(297264),
    et = n(416852);
let en = { left: 8, right: 8 };
function el(e) {
    let { leading: t, label: n, color: s } = e,
        r = (0, m.c)(),
        a = r ? p.A : i.Fragment;
    return (0, l.jsxs)(N.B, {
        direction: "horizontal",
        justify: r ? "center" : "start",
        align: "center",
        padding: en,
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", { className: et.R, children: (0, l.jsx)(t, {}) }),
            (0, l.jsx)(a, {
                children: (0, l.jsx)(ee.D, {
                    variant: "text-sm/medium",
                    color: s ?? "text-muted",
                    lineClamp: 1,
                    children: n,
                }),
            }),
        ],
    });
}
let ei = { top: 16, bottom: 8 };
function es(e) {
    let { section: t } = e,
        n = (0, g.bG)([b.A], () => b.A.getSections()[t]);
    return (0, l.jsx)(N.B, {
        padding: ei,
        children: (0, l.jsx)(el, {
            leading: () => (0, l.jsx)(er, { section: n }),
            label: (function (e) {
                switch (e.type) {
                    case v.ik.ACTIVE_NOW:
                        return _.intl.string(_.t.TxqPQR);
                    case v.ik.ONLINE:
                        return _.intl.string(_.t.WbGtnH);
                    case v.ik.OFFLINE:
                        return _.intl.string(_.t.Vv0abJ);
                    case v.ik.GAME:
                        return e.label;
                    case v.ik.LETTER:
                        return null;
                }
            })(n),
        }),
    });
}
function er(e) {
    let { section: t } = e;
    switch (t.type) {
        case v.ik.ACTIVE_NOW:
            return (0, l.jsx)(J.g, { size: "xs" });
        case v.ik.ONLINE:
            return (0, l.jsx)(ea, {});
        case v.ik.OFFLINE:
            return (0, l.jsx)(eo, {});
        case v.ik.GAME:
            return (0, l.jsx)(eu, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case v.ik.LETTER:
            return (0, l.jsx)(ec, { letter: t.label ?? "#" });
    }
}
function ea() {
    return (0, l.jsx)(Y.nW, { status: H.clD.ONLINE, size: 12 });
}
function eo() {
    return (0, l.jsx)(Y.nW, { status: H.clD.OFFLINE, size: 12 });
}
function eu(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, K.O)(null == n ? t : null),
        s = n ?? (0, Q.C4)(i)?.src;
    return (0, l.jsx)(T.V, { src: s, size: 18, "aria-hidden": !0 });
}
function ec(e) {
    let { letter: t } = e;
    return (0, l.jsx)(I.E, { variant: "text-sm/bold", children: t });
}
var ed = n(214947),
    ex = n(661531),
    eh = n(821609),
    ef = n(283973),
    em = n(408278),
    eg = n(376357),
    ej = n(857250),
    ep = n(97483),
    eC = n(305866),
    eb = n(173936),
    ev = n(95477),
    eA = n(103557),
    eN = n(922016),
    eR = n(376728),
    eI = n(279208),
    eE = n(189883),
    ek = n(237309),
    eS = n(957565),
    ew = n(499516);
let ey = { sending: !1, success: null, error: null };
function eL(e, t) {
    switch (t.type) {
        case "RESET":
            return ey;
        case "SENDING":
            return { ...ey, sending: !0 };
        case "SUCCESS":
            return { ...ey, sending: !1, success: t.text };
        case "ERROR":
            return { ...ey, sending: !1, error: t.text };
    }
}
function eP() {
    let [e, t] = i.useReducer(eL, ey),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = eE.A.useConfig({ location: "AddFriendPopout" });
    async function f() {
        x(!0);
        try {
            let e = await eR.Ay.createFriendInvite(null, H.PE1.ADD_FRIENDS_POPOUT);
            (0, eS.C)(
                (0, eI.A)(e.code),
                () => (0, eg.P)((0, ej.o)(_.intl.string(_.t.tBOSx4), ep.Ck.SUCCESS)),
                () => (0, eg.P)((0, ej.o)(_.intl.string(_.t.R0RpRX), ep.Ck.FAILURE)),
            );
        } catch {
            (0, eg.P)((0, ej.o)(_.intl.string(_.t.R0RpRX), ep.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(eC.l, {
        children: (0, l.jsx)("div", {
            className: ew.kL,
            children: (0, l.jsx)(j.F, {
                component: (0, l.jsxs)("div", {
                    className: ew.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: ew.gn,
                            children: (0, l.jsx)(I.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.zIJnA6),
                            }),
                        }),
                        (0, l.jsx)(E.m, {
                            text: _.intl.string(_.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(em.K, {
                                icon: eb.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": _.intl.string(_.t.t1T3kD),
                                variant: "icon-only",
                                loading: d,
                            }),
                        }),
                    ],
                }),
                children: (0, l.jsx)("form", {
                    onSubmit: function (e) {
                        (e.preventDefault(),
                            t({ type: "SENDING" }),
                            (0, ek.Ay)({
                                discordTag: a,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: ek.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), o(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, l.jsxs)("div", {
                        className: ew.hQ,
                        children: [
                            (0, l.jsx)(ev.k, {
                                value: a,
                                onChange: (e) => {
                                    (o(e), t({ type: "RESET" }));
                                },
                                label: _.intl.string(_.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: _.intl.string(_.t.jx0GiG),
                                successMessage: s,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            h &&
                                (0, l.jsx)(eA.f, {
                                    label: _.intl.string(_.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: _.intl.string(_.t.UtfQNw),
                                    maxLength: ek.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: _.intl.string(_.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, l.jsx)(eh.$, {
                                variant: "primary",
                                size: "md",
                                text: _.intl.string(_.t.HWT3wh),
                                fullWidth: !0,
                                disabled: "" === a.trim() || n,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function eD(e) {
    let { position: t, onClose: n, children: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!1);
    return (0, l.jsx)(eN.Y, {
        targetElementRef: r,
        shouldShow: a,
        onRequestClose: function () {
            (o(!1), n?.());
        },
        position: t,
        renderPopout: () => (0, l.jsx)(eP, {}),
        children: () => s({ buttonRef: r, onClick: () => o(!a) }),
    });
}
var eT = n(184322);
let eO = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: eT._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: eT.RH }), (0, l.jsx)("div", { className: eT.rl })],
        },
        t,
    ),
);
function eF() {
    return (0, m.c)() ? (0, l.jsx)(eG, {}) : (0, l.jsx)(eM, {});
}
function eM() {
    return (0, l.jsxs)("div", {
        className: eT.kL,
        children: [
            (0, l.jsx)("div", { className: eT.Dd, children: eO }),
            (0, l.jsx)(N.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: eT.C,
                children: (0, l.jsxs)(N.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(ed.$, { size: "lg", color: ex.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(N.B, {
                            gap: 4,
                            className: eT.Dk,
                            children: [
                                (0, l.jsx)(ee.D, {
                                    variant: "heading-md/medium",
                                    children: _.intl.string(W.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(I.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: _.intl.string(W.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eD, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(eh.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: ef.R,
                                    text: _.intl.string(W.default.au4mU4),
                                    onClick: n,
                                });
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eG() {
    return (0, l.jsx)("div", {
        className: eT.kL,
        children: (0, l.jsxs)("div", {
            className: r()(eT.Dd, eT.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: eT._f,
                    children: (0, l.jsx)(eD, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(E.m, {
                                text: _.intl.string(W.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(em.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: ef.R,
                                    "aria-label": _.intl.string(W.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                eO,
            ],
        }),
    });
}
var ez = n(983851),
    eU = n(730852),
    eB = n(47167),
    eH = n(798350);
function eW(e) {
    let { row: t, sectionType: n } = e,
        i = (0, g.bG)([G.A], () => G.A.getChannel(t.channelId), [t.channelId]),
        s = (0, eB.Ay)(i) ?? _.intl.string(_.t.BVZqJl),
        a = (0, m.c)(),
        o = (0, D.gU)(i) ?? ez.H;
    return (0, l.jsxs)(N.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(eH.Os, eH.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: eH.h_ }),
            (0, l.jsx)(el, {
                leading: () => (0, l.jsx)(o, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                label: s,
                color: "text-default",
            }),
            (0, l.jsx)("div", {
                children: t.rows.map((e) => (0, l.jsx)($, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            !a &&
                (0, l.jsx)(eh.$, {
                    variant: "active",
                    text: _.intl.string(_.t.eIi3Om),
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => eU.default.selectVoiceChannel(t.channelId),
                }),
        ],
    });
}
var e_ = n(182927);
function eV() {
    let e = (0, g.bG)([b.A], () => b.A.getSections()),
        t = i.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = (0, m.c)(),
        s = i.useId(),
        r = i.useCallback(
            (t, l) => {
                let i = e[t]?.rows[l];
                return null == i ? 48 : i.type === v.VZ.VOICE_GROUP ? 54 + 48 * i.rows.length + 36 * !n : 48;
            },
            [e, n],
        ),
        a = i.useCallback(
            (t) => {
                let { section: n, row: i } = t,
                    s = e[n],
                    r = s?.rows[i];
                return null == r || null == s
                    ? null
                    : r.type === v.VZ.VOICE_GROUP
                      ? (0, l.jsx)(eW, { row: r, sectionType: s.type }, r.key)
                      : (0, l.jsx)($, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, l.jsx)(eF, {})
        : (0, l.jsx)(j.F, {
              component: (0, l.jsx)(p.A, { children: (0, l.jsx)(j.H, { id: s, children: _.intl.string(_.t.TdEu5X) }) }),
              children: (0, l.jsx)(C.OZ, {
                  className: e_.p,
                  "aria-labelledby": s,
                  sections: t,
                  sectionHeight: 42,
                  rowHeight: r,
                  renderSection: (e) => {
                      let { section: t } = e;
                      return (0, l.jsx)(es, { section: t });
                  },
                  renderRow: a,
                  fade: !0,
                  paddingBottom: 4,
                  scrollbarGutter: "both-edges",
                  style: { "--custom-friend-row-height": "32px" },
              }),
          });
}
var e$ = n(259730),
    eZ = n(847374),
    eX = n(450030),
    eq = n(783977),
    eJ = n(7689),
    eY = n(765671);
n(321073);
var eK = n(602853),
    eQ = n(308528),
    e0 = n(565860),
    e1 = n(723690),
    e6 = n(976860),
    e3 = n(994500),
    e8 = n(972910);
function e2(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, g.cf)([z.A], () => ({
            status: z.A.getStatus(t.userId),
            isMobile: z.A.isMobileOnline(t.userId),
            isVR: z.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(A.D, {
        className: r()(e8.Ke, { [e8.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = G.A.getDMFromUserId(t.user.id);
            (null != e ? (0, e6.pX)(H.BVt.CHANNEL(H.ME, e)) : eQ.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(e1.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, l.jsx)(I.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: e8.eF,
        }),
    });
}
function e4(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, eK.r)(ex.A.space.SPACE_XS),
        s = (0, eK.r)(ex.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(C.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(e2, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(I.E, {
                className: e8.nw,
                variant: "text-sm/medium",
                children: _.intl.format(_.t.xIWGxu, { count: t.length }),
            });
        },
        className: e8.Xv,
    });
}
function e7() {
    return (0, l.jsx)(I.E, {
        variant: "text-sm/medium",
        className: e8.n1,
        children: _.intl.string(W.default["0usxBd"]),
    });
}
function e9() {
    return (0, l.jsx)(I.E, { variant: "text-sm/medium", className: e8.n1, children: _.intl.string(W.default.VH2HXW) });
}
function e5(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, e0.HI)(t),
        s = (0, g.bG)(
            [e3.A, U.default],
            () => {
                if ("" === i) return [];
                let e = e3.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = U.default.getUser(e);
                        if (void 0 === n) return;
                        let l = e3.A.getNickname(e),
                            s = [(0, e0.HI)(n.username)];
                        (null != n.globalName && s.push((0, e0.HI)(n.globalName)),
                            null != l && s.push((0, e0.HI)(l)),
                            s.some((e) => e.includes(i)) &&
                                t.push({
                                    userId: e,
                                    user: n,
                                    nickname: l,
                                    sortName:
                                        l?.toLowerCase() ?? n.globalName?.toLowerCase() ?? n.username.toLowerCase(),
                                }));
                    }),
                    t.sort((e, t) => e.sortName.localeCompare(t.sortName)),
                    t
                );
            },
            [i],
        );
    return "" === i
        ? (0, l.jsx)(e7, {})
        : s.length > 0
          ? (0, l.jsx)(e4, { searchResults: s, closePopout: n })
          : (0, l.jsx)(e9, {});
}
function te(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(e8.kL, e8.zZ),
        style: n > 0 ? { "--custom-search-friends-popout-width": `${n}px` } : void 0,
        children: (0, l.jsx)(e5, { rawQuery: t, closePopout: i }),
    });
}
function tt(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(eC.l, {
        children: (0, l.jsxs)("div", {
            className: e8.kL,
            children: [
                (0, l.jsx)("div", {
                    className: e8.M6,
                    children: (0, l.jsx)(ev.k, { placeholder: _.intl.string(_.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(e5, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var tn = n(540950);
function tl(e) {
    let { isSearching: t, setIsSearching: n } = e,
        s = (0, m.c)(),
        { appBarToggleEnabled: r } = f.A.useConfig({ location: "FriendsListHeader" }),
        [a, o] = i.useState(!1),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useRef(null),
        h = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                l = x.current?.getBoundingClientRect().width;
            null != t && null != n && null != l && o(t - (n + l) <= 24);
        }, []);
    (0, eY.i4)(u, h);
    let g = s
        ? (0, l.jsx)(ts, {})
        : t
          ? (0, l.jsx)(to, { isSearching: !0, setIsSearching: n })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ti, { compact: a }),
                    (0, l.jsxs)(N.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, l.jsx)(to, { isSearching: t, setIsSearching: n }),
                            (0, l.jsx)(tu, { popoutPosition: "bottom" }),
                            r
                                ? null
                                : (0, l.jsx)(tc, {
                                      icon: e$.E,
                                      label: _.intl.string(W.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ti, { ghost: !0, ref: d }),
            (0, l.jsx)(N.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: s ? "center" : "space-between",
                padding: 8,
                className: tn.wx,
                ref: u,
                children: g,
            }),
        ],
    });
}
function ti(e) {
    let { compact: t = !1, ghost: n = !1, ref: s } = e,
        a = n ? i.Fragment : E.m,
        o = t
            ? (0, l.jsx)(ed.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(I.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: _.intl.string(W.default["7kJd9e"]),
              });
    return (0, l.jsx)(a, {
        text: _.intl.string(W.default["7kJd9e"]),
        children: (0, l.jsx)(A.D, {
            className: r()(tn.Iw, { [tn.qy]: n }),
            "aria-label": _.intl.string(W.default["7kJd9e"]),
            innerRef: s,
            children: (0, l.jsxs)(N.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [o, (0, l.jsx)(eZ.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function ts() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(eN.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(tr, { onClose: r }),
        children: () =>
            (0, l.jsx)(tc, {
                buttonRef: e,
                icon: eX.U,
                label: _.intl.string(W.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function tr(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(N.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: tn.QG,
        children: [
            (0, l.jsx)(tc, { icon: eq.R, label: _.intl.string(W.default["i+986w"]), tooltipPosition: "left" }),
            (0, l.jsx)(ta, { onClose: t }),
            (0, l.jsx)(tu, { popoutPosition: "left", tooltipPosition: "left", onClose: t }),
        ],
    });
}
function ta(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(eN.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(tt, { closePopout: a }),
        children: () =>
            (0, l.jsx)(tc, {
                buttonRef: n,
                icon: eJ.MagnifyingGlassIcon,
                label: _.intl.string(W.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function to(e) {
    let { isSearching: t, setIsSearching: n } = e,
        s = i.useRef(null),
        [r, a] = i.useState(""),
        [o, u] = i.useState(0);
    function c() {
        (n(!1), a(""));
    }
    return (i.useLayoutEffect(() => {
        if (!t) return;
        let e = s.current;
        null != e && u(e.getBoundingClientRect().width);
    }, [t]),
    t)
        ? (0, l.jsx)(eN.Y, {
              targetElementRef: s,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(te, { query: r, width: o, closePopout: c }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: s,
                      className: tn.wB,
                      children: (0, l.jsx)(ev.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: _.intl.string(W.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: _.intl.string(_.t.lLDtTK),
                          value: r,
                          onChange: a,
                      }),
                  }),
          })
        : (0, l.jsx)(tc, {
              icon: eJ.MagnifyingGlassIcon,
              label: _.intl.string(W.default["60M8Ae"]),
              onClick: () => n(!0),
          });
}
function tu(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(eD, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(tc, {
                buttonRef: t,
                icon: ef.R,
                label: _.intl.string(W.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function tc(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = i.useRef(null),
        c = o ?? u;
    return (0, l.jsx)(E.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, l.jsx)(A.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: tn.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var td = n(45863);
function tx() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        g = (0, m.c)(),
        { appBarToggleEnabled: j } = f.A.useConfig({ location: "FriendsSidebar" }),
        [p, C] = i.useState(!1),
        b = i.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || b(g ? 64 : 280);
    }, [g, b]);
    let v = i.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== (0, m.A)() && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [b],
        ),
        A = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(td.cB), C(!1));
        }, []),
        N = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(td.cB));
        }, []),
        R = i.useCallback((e) => (j ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [j]),
        I = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: j ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: A,
            onApplyDimension: v,
            onElementResizeEnd: N,
            getClampedValue: R,
        }),
        E = i.useCallback(
            (t) => {
                let l;
                if (null == e.current) return;
                switch (t.key) {
                    case "ArrowLeft":
                        l = Math.max(200, s.current + 10);
                        break;
                    case "ArrowRight":
                        l = s.current - 10;
                        break;
                    case "Home":
                        l = j ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = R(l);
                ((n.current = !0), v(i), (n.current = !1));
            },
            [j, R, v],
        ),
        k = (0, h.NC)();
    return (0, l.jsx)(x.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(o.N, {
            theme: k,
            children: (n) =>
                (0, l.jsxs)("div", {
                    ref: e,
                    className: r()(td.kL, n),
                    children: [
                        (0, l.jsx)(u.vN, {
                            children: (0, l.jsx)("div", {
                                ref: t,
                                role: "separator",
                                tabIndex: 0,
                                "aria-orientation": "vertical",
                                "aria-label": _.intl.string(W.default["F3+Xei"]),
                                "aria-valuemin": j ? 280 : 64,
                                "aria-valuemax": 320,
                                className: td.Di,
                                onMouseDown: I,
                                onKeyDown: E,
                            }),
                        }),
                        (0, l.jsx)(tl, { isSearching: p, setIsSearching: C }),
                        (0, l.jsx)(u.xp, { containerRef: e, children: (0, l.jsx)(eV, {}) }),
                    ],
                }),
        }),
    });
}
