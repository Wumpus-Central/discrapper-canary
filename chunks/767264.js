(n.r(t), n.d(t, { default: () => tv }));
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
    f = n(97469),
    h = n(625494),
    g = n(925166),
    m = n(605117),
    p = n(17928),
    j = n(707554),
    b = n(140735),
    C = n(475825),
    v = n(546359),
    R = n(736347),
    A = n(939249),
    E = n(331322),
    I = n(778712),
    N = n(834730),
    S = n(866665),
    k = n(683063),
    w = n(687966),
    y = n(432017),
    D = n(31300),
    P = n(442433),
    L = n(966327),
    T = n(713654),
    F = n(263577),
    _ = n(471107),
    G = n(381849),
    M = n(342296),
    O = n(734057),
    z = n(290863),
    B = n(287809),
    W = n(240248),
    U = n(652215),
    V = n(682530),
    H = n(375708),
    Z = n(604506);
function $(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, p.bG)([B.default], () => B.default.getUser(t.userId), [t.userId]),
        o = (0, m.c)(),
        u = (function (e, t, n) {
            let i = (0, p.bG)(
                    [z.A],
                    () => {
                        let t = z.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === U.$pd.PLAYING || i?.type === U.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, p.bG)([O.A], () => (r ? O.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n = (0, T.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, l.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": H.intl.string(V.default["8ALChp"]),
                              }),
                    textColor: s,
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? H.intl.format(V.default.KddZZf, { duration: (0, l.jsx)(q, { start: t }) })
                            : H.intl.string(V.default["8ALChp"]),
                };
            }
            if (null == i) return null;
            let o = (function (e, t) {
                switch (e.type) {
                    case U.$pd.PLAYING:
                    case U.$pd.COMPETING:
                        return { Icon: w.GameControllerIcon, text: X(e.details) ?? (t ? null : X(e.name)) };
                    case U.$pd.LISTENING:
                        return { Icon: y.T, text: X(e.details) ?? X(e.name) };
                    case U.$pd.WATCHING:
                        return { Icon: D.k, text: X(e.details) ?? X(e.name) };
                    case U.$pd.CUSTOM_STATUS:
                        return { text: X(e.state) };
                    default:
                        return null;
                }
            })(i, t === R.ik.GAME);
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
                    null != d ? H.intl.format(V.default.Fb6oNP, { text: c, duration: (0, l.jsx)(q, { start: d }) }) : c,
            };
        })(t, s, r),
        c = i.useRef(null),
        d = i.useCallback(
            (e) => {
                let i = B.default.getUser(t.userId);
                null != i &&
                    (0, P.L3)(e, async () => {
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
                      children: (0, l.jsxs)(E.B, {
                          direction: "horizontal",
                          align: "center",
                          padding: 8,
                          fullWidth: !1,
                          className: Z.nM,
                          children: [
                              (0, l.jsx)(L.A, {
                                  user: a,
                                  size: I._3.SIZE_32,
                                  status: t.status,
                                  "aria-hidden": !0,
                                  className: Z.LY,
                              }),
                              (0, l.jsxs)("div", {
                                  className: Z.rf,
                                  children: [
                                      (0, l.jsx)(N.E, { variant: "text-md/normal", lineClamp: 1, children: t.name }),
                                      (0, l.jsx)(Y, { subtitle: u }),
                                  ],
                              }),
                              null != t.gameAssetUrl && (0, l.jsx)(F.V, { src: t.gameAssetUrl, size: 32 }),
                          ],
                      }),
                  });
                  return o
                      ? null == u
                          ? (0, l.jsx)(S.m, {
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
function X(e) {
    return (0, W.uJ)(e) ? null : e;
}
function q(e) {
    let { start: t } = e,
        { now: n } = (0, _.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, G.WR)({ seconds: l, getFormatter: G.i });
}
function Y(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  t.icon,
                  (0, l.jsx)(N.E, {
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
    K = n(935154),
    Q = n(80558),
    ee = n(939341),
    et = n(297264),
    en = n(416852);
let el = { left: 8, right: 8 };
function ei(e) {
    let { leading: t, label: n, color: s } = e,
        r = (0, m.c)(),
        a = r ? b.A : i.Fragment;
    return (0, l.jsxs)(E.B, {
        direction: "horizontal",
        justify: r ? "center" : "start",
        align: "center",
        padding: el,
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", { className: en.R, children: (0, l.jsx)(t, {}) }),
            (0, l.jsx)(a, {
                children: (0, l.jsx)(et.D, {
                    variant: "text-sm/medium",
                    color: s ?? "text-muted",
                    lineClamp: 1,
                    children: n,
                }),
            }),
        ],
    });
}
let es = { top: 16, bottom: 8 };
function er(e) {
    let { section: t } = e,
        n = (0, p.bG)([v.A], () => v.A.getSections()[t]);
    return (0, l.jsx)(E.B, {
        padding: es,
        children: (0, l.jsx)(ei, {
            leading: () => (0, l.jsx)(ea, { section: n }),
            label: (function (e) {
                switch (e.type) {
                    case R.ik.ACTIVE_NOW:
                        return H.intl.string(H.t.TxqPQR);
                    case R.ik.ONLINE:
                        return H.intl.string(H.t.WbGtnH);
                    case R.ik.OFFLINE:
                        return H.intl.string(H.t.Vv0abJ);
                    case R.ik.GAME:
                        return e.label;
                    case R.ik.LETTER:
                        return null;
                }
            })(n),
        }),
    });
}
function ea(e) {
    let { section: t } = e;
    switch (t.type) {
        case R.ik.ACTIVE_NOW:
            return (0, l.jsx)(J.g, { size: "xs" });
        case R.ik.ONLINE:
            return (0, l.jsx)(eo, {});
        case R.ik.OFFLINE:
            return (0, l.jsx)(eu, {});
        case R.ik.GAME:
            return (0, l.jsx)(ec, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case R.ik.LETTER:
            return (0, l.jsx)(ed, { letter: t.label ?? "#" });
    }
}
function eo() {
    return (0, l.jsx)(K.nW, { status: U.clD.ONLINE, size: 12 });
}
function eu() {
    return (0, l.jsx)(K.nW, { status: U.clD.OFFLINE, size: 12 });
}
function ec(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, Q.O)(null == n ? t : null),
        s = n ?? (0, ee.C4)(i)?.src;
    return (0, l.jsx)(F.V, { src: s, size: 18, "aria-hidden": !0 });
}
function ed(e) {
    let { letter: t } = e;
    return (0, l.jsx)(N.E, { variant: "text-sm/bold", children: t });
}
var ex = n(214947),
    ef = n(661531),
    eh = n(821609),
    eg = n(283973),
    em = n(408278),
    ep = n(376357),
    ej = n(857250),
    eb = n(97483),
    eC = n(305866),
    ev = n(173936),
    eR = n(95477),
    eA = n(103557),
    eE = n(922016),
    eI = n(376728),
    eN = n(279208),
    eS = n(189883),
    ek = n(237309),
    ew = n(957565),
    ey = n(499516);
let eD = { sending: !1, success: null, error: null };
function eP(e, t) {
    switch (t.type) {
        case "RESET":
            return eD;
        case "SENDING":
            return { ...eD, sending: !0 };
        case "SUCCESS":
            return { ...eD, sending: !1, success: t.text };
        case "ERROR":
            return { ...eD, sending: !1, error: t.text };
    }
}
function eL() {
    let [e, t] = i.useReducer(eP, eD),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: f } = eS.A.useConfig({ location: "AddFriendPopout" });
    async function h() {
        x(!0);
        try {
            let e = await eI.Ay.createFriendInvite(null, U.PE1.ADD_FRIENDS_POPOUT);
            (0, ew.C)(
                (0, eN.A)(e.code),
                () => (0, ep.P)((0, ej.o)(H.intl.string(H.t.tBOSx4), eb.Ck.SUCCESS)),
                () => (0, ep.P)((0, ej.o)(H.intl.string(H.t.R0RpRX), eb.Ck.FAILURE)),
            );
        } catch {
            (0, ep.P)((0, ej.o)(H.intl.string(H.t.R0RpRX), eb.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(eC.l, {
        children: (0, l.jsx)("div", {
            className: ey.kL,
            children: (0, l.jsx)(j.F, {
                component: (0, l.jsxs)("div", {
                    className: ey.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: ey.gn,
                            children: (0, l.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: H.intl.string(H.t.zIJnA6),
                            }),
                        }),
                        (0, l.jsx)(S.m, {
                            text: H.intl.string(H.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(em.K, {
                                icon: ev.LinkIcon,
                                size: "sm",
                                onClick: h,
                                "aria-label": H.intl.string(H.t.t1T3kD),
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
                                note: f && "" !== u ? u : void 0,
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
                        className: ey.hQ,
                        children: [
                            (0, l.jsx)(eR.k, {
                                value: a,
                                onChange: (e) => {
                                    (o(e), t({ type: "RESET" }));
                                },
                                label: H.intl.string(H.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: H.intl.string(H.t.jx0GiG),
                                successMessage: s,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            f &&
                                (0, l.jsx)(eA.f, {
                                    label: H.intl.string(H.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: H.intl.string(H.t.UtfQNw),
                                    maxLength: ek.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: H.intl.string(H.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, l.jsx)(eh.$, {
                                variant: "primary",
                                size: "md",
                                text: H.intl.string(H.t.HWT3wh),
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
function eT(e) {
    let { position: t, onClose: n, children: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!1),
        u = i.useCallback(() => {
            (o(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                h._.subscribe(U.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    h._.unsubscribe(U.jej.FRIENDS_SIDEBAR_RESIZED, u);
                }
            ),
            [u],
        ),
        (0, l.jsx)(eE.Y, {
            targetElementRef: r,
            shouldShow: a,
            onRequestClose: u,
            position: t,
            renderPopout: () => (0, l.jsx)(eL, {}),
            children: () => s({ buttonRef: r, onClick: () => o(!a) }),
        })
    );
}
var eF = n(184322);
let e_ = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: eF._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: eF.RH }), (0, l.jsx)("div", { className: eF.rl })],
        },
        t,
    ),
);
function eG() {
    return (0, m.c)() ? (0, l.jsx)(eO, {}) : (0, l.jsx)(eM, {});
}
function eM() {
    return (0, l.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, l.jsx)("div", { className: eF.Dd, children: e_ }),
            (0, l.jsx)(E.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: eF.C,
                children: (0, l.jsxs)(E.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(ex.$, { size: "lg", color: ef.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(E.B, {
                            gap: 4,
                            className: eF.Dk,
                            children: [
                                (0, l.jsx)(et.D, {
                                    variant: "heading-md/medium",
                                    children: H.intl.string(V.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: H.intl.string(V.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eT, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(eh.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: eg.R,
                                    text: H.intl.string(V.default.au4mU4),
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
function eO() {
    return (0, l.jsx)("div", {
        className: eF.kL,
        children: (0, l.jsxs)("div", {
            className: r()(eF.Dd, eF.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: eF._f,
                    children: (0, l.jsx)(eT, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(S.m, {
                                text: H.intl.string(V.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(em.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: eg.R,
                                    "aria-label": H.intl.string(V.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                e_,
            ],
        }),
    });
}
var ez = n(983851),
    eB = n(730852),
    eW = n(47167),
    eU = n(798350);
function eV(e) {
    let { row: t, sectionType: n } = e,
        i = (0, p.bG)([O.A], () => O.A.getChannel(t.channelId), [t.channelId]),
        s = (0, eW.Ay)(i) ?? H.intl.string(H.t.BVZqJl),
        a = (0, m.c)(),
        o = (0, T.gU)(i) ?? ez.H;
    return (0, l.jsxs)(E.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(eU.Os, eU.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: eU.h_ }),
            (0, l.jsx)(ei, {
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
                    text: H.intl.string(H.t.eIi3Om),
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => eB.default.selectVoiceChannel(t.channelId),
                }),
        ],
    });
}
var eH = n(182927);
function eZ() {
    let e = (0, p.bG)([v.A], () => v.A.getSections()),
        t = i.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = (0, m.c)(),
        s = i.useId(),
        r = i.useCallback(
            (t, l) => {
                let i = e[t]?.rows[l];
                return null == i
                    ? 48
                    : i.type === R.VZ.VOICE_GROUP && i.rows.length > 1
                      ? 54 + 48 * i.rows.length + 36 * !n
                      : 48;
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
                    : r.type === R.VZ.VOICE_GROUP
                      ? (0, l.jsx)(eV, { row: r, sectionType: s.type }, r.key)
                      : (0, l.jsx)($, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, l.jsx)(eG, {})
        : (0, l.jsx)(j.F, {
              component: (0, l.jsx)(b.A, { children: (0, l.jsx)(j.H, { id: s, children: H.intl.string(H.t.TdEu5X) }) }),
              children: (0, l.jsx)(C.OZ, {
                  className: eH.p,
                  "aria-labelledby": s,
                  sections: t,
                  sectionHeight: 42,
                  rowHeight: r,
                  renderSection: (e) => {
                      let { section: t } = e;
                      return (0, l.jsx)(er, { section: t });
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
    eX = n(847374),
    eq = n(450030),
    eY = n(783977),
    eJ = n(7689),
    eK = n(765671),
    eQ = n(980707),
    e0 = n(477782),
    e1 = n(606325),
    e6 = n(303911),
    e3 = n(67746);
let e2 = [
    [R.Vj.ACTIVE_NOW, V.default["/lMTzd"], V.default.IzzWNM],
    [R.Vj.GAME, V.default.aKZ12v, V.default.lE79Lm],
    [R.Vj.ALPHABETICAL, V.default.eVxFX3, null],
];
function e8(e) {
    let { width: t, closePopout: n } = e,
        i = (0, p.bG)([v.A], () => v.A.getGroupingMode()),
        s = (0, p.bG)([v.A], () => v.A.isVoiceGroupingEnabled());
    return (0, l.jsx)("div", {
        className: e3.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(eQ.W, {
            navId: "friends-list-group-config",
            "aria-label": H.intl.string(V.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(e0.rX, {
                    label: H.intl.string(V.default.OvTyCX),
                    children: e2.map((e) => {
                        let [t, s, r] = e;
                        return (0, l.jsx)(
                            e0.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: H.intl.string(s),
                                subtext: null != r ? H.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    ((0, e1.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, e6.kR)(i) &&
                    (0, l.jsx)(e0.rX, {
                        label: H.intl.string(H.t["8/udY0"]),
                        children: (0, l.jsx)(e0.fP, {
                            id: "friends-list-group-voice-channels",
                            label: H.intl.string(V.default["/b1eZT"]),
                            subtext: H.intl.string(V.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, e1.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var e4 = n(602853),
    e7 = n(308528),
    e9 = n(565860),
    e5 = n(723690),
    te = n(976860),
    tt = n(994500),
    tn = n(972910);
function tl(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, p.cf)([z.A], () => ({
            status: z.A.getStatus(t.userId),
            isMobile: z.A.isMobileOnline(t.userId),
            isVR: z.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(A.D, {
        className: r()(tn.Ke, { [tn.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = O.A.getDMFromUserId(t.user.id);
            (null != e ? (0, te.pX)(U.BVt.CHANNEL(U.ME, e)) : e7.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(e5.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, l.jsx)(N.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: tn.eF,
        }),
    });
}
function ti(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, e4.r)(ef.A.space.SPACE_XS),
        s = (0, e4.r)(ef.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(C.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(tl, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(N.E, {
                className: tn.nw,
                variant: "text-sm/medium",
                children: H.intl.format(H.t.xIWGxu, { count: t.length }),
            });
        },
        className: tn.Xv,
    });
}
function ts() {
    return (0, l.jsx)(N.E, {
        variant: "text-sm/medium",
        className: tn.n1,
        children: H.intl.string(V.default["0usxBd"]),
    });
}
function tr() {
    return (0, l.jsx)(N.E, { variant: "text-sm/medium", className: tn.n1, children: H.intl.string(V.default.VH2HXW) });
}
function ta(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, e9.HI)(t),
        s = (0, p.bG)(
            [tt.A, B.default],
            () => {
                if ("" === i) return [];
                let e = tt.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = B.default.getUser(e);
                        if (void 0 === n) return;
                        let l = tt.A.getNickname(e),
                            s = [(0, e9.HI)(n.username)];
                        (null != n.globalName && s.push((0, e9.HI)(n.globalName)),
                            null != l && s.push((0, e9.HI)(l)),
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
        ? (0, l.jsx)(ts, {})
        : s.length > 0
          ? (0, l.jsx)(ti, { searchResults: s, closePopout: n })
          : (0, l.jsx)(tr, {});
}
function to(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(tn.kL, tn.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(ta, { rawQuery: t, closePopout: i }),
    });
}
function tu(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(eC.l, {
        children: (0, l.jsxs)("div", {
            className: tn.kL,
            children: [
                (0, l.jsx)("div", {
                    className: tn.M6,
                    children: (0, l.jsx)(eR.k, { placeholder: H.intl.string(H.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(ta, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var tc = n(540950);
function td() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            h._.subscribe(U.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                h._.unsubscribe(U.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let n = (0, m.c)(),
        { appBarToggleEnabled: s } = g.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = i.useState(!1),
        o = i.useRef(void 0),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useRef(null),
        f = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                l = x.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != l && a(t - (n + l) <= 24));
        }, []);
    (0, eK.i4)(u, f);
    let p = n
        ? (0, l.jsx)(tf, {})
        : "search" === e
          ? (0, l.jsx)(tp, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(tx, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(E.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, l.jsx)(tp, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(tj, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, l.jsx)(tb, {
                                      icon: e$.E,
                                      label: H.intl.string(V.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tx, { ghost: !0, ref: d }),
            (0, l.jsx)(E.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: tc.wx,
                ref: u,
                children: p,
            }),
        ],
    });
}
function tx(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: u } = e,
        c = i.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, l.jsx)(ex.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(N.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: H.intl.string(V.default["7kJd9e"]),
              }),
        f = (0, l.jsx)(A.D, {
            className: r()(tc.Iw, { [tc.qy]: n }),
            "aria-label": H.intl.string(V.default["7kJd9e"]),
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: u ?? c,
            children: (0, l.jsxs)(E.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [x, (0, l.jsx)(eX.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return f;
    let h = (0, l.jsx)(eE.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(e8, { width: s?.current, closePopout: d }),
        children: () => f,
    });
    return a ? h : (0, l.jsx)(S.m, { text: H.intl.string(V.default.wvbB3Z), asContainer: !0, children: h });
}
function tf() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(eE.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(th, { onClose: r }),
        children: () =>
            (0, l.jsx)(tb, {
                buttonRef: e,
                icon: eq.U,
                label: H.intl.string(V.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function th(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(E.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: tc.QG,
        children: [
            (0, l.jsx)(tg, {}),
            (0, l.jsx)(tm, { onClose: t }),
            (0, l.jsx)(tj, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function tg() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s() {
        n(!1);
    }
    return (0, l.jsx)(eE.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, l.jsx)(e8, { closePopout: s }),
        children: () =>
            (0, l.jsx)(tb, {
                buttonRef: e,
                icon: eY.R,
                label: H.intl.string(V.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function tm(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(eE.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(tu, { closePopout: a }),
        children: () =>
            (0, l.jsx)(tb, {
                buttonRef: n,
                icon: eJ.MagnifyingGlassIcon,
                label: H.intl.string(V.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function tp(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState("");
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(eE.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(to, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: tc.wB,
                      children: (0, l.jsx)(eR.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: H.intl.string(V.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: H.intl.string(H.t.lLDtTK),
                          value: a,
                          onChange: o,
                      }),
                  }),
          })
        : (0, l.jsx)(tb, {
              icon: eJ.MagnifyingGlassIcon,
              label: H.intl.string(V.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function tj(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(eT, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(tb, {
                buttonRef: t,
                icon: eg.R,
                label: H.intl.string(V.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function tb(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = i.useRef(null),
        c = o ?? u;
    return (0, l.jsx)(S.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, l.jsx)(A.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: tc.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var tC = n(45863);
function tv() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        p = (0, m.c)(),
        { appBarToggleEnabled: j } = g.A.useConfig({ location: "FriendsSidebar" }),
        b = i.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || b(p ? 64 : 280);
    }, [p, b]);
    let C = i.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== (0, m.A)() && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [b],
        ),
        v = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(tC.cB), h._.dispatch(U.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(tC.cB));
        }, []),
        A = i.useCallback((e) => (j ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [j]),
        E = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: j ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: v,
            onApplyDimension: C,
            onElementResizeEnd: R,
            getClampedValue: A,
        }),
        I = i.useCallback(
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
                let i = A(l);
                ((n.current = !0), C(i), (n.current = !1));
            },
            [j, A, C],
        ),
        N = (0, f.NC)();
    return (0, l.jsx)(x.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(o.N, {
            theme: N,
            children: (n) =>
                (0, l.jsxs)("div", {
                    ref: e,
                    className: r()(tC.kL, n),
                    children: [
                        (0, l.jsx)(u.vN, {
                            children: (0, l.jsx)("div", {
                                ref: t,
                                role: "separator",
                                tabIndex: 0,
                                "aria-orientation": "vertical",
                                "aria-label": H.intl.string(V.default["F3+Xei"]),
                                "aria-valuemin": j ? 280 : 64,
                                "aria-valuemax": 320,
                                className: tC.Di,
                                onMouseDown: E,
                                onKeyDown: I,
                            }),
                        }),
                        (0, l.jsx)(td, {}),
                        (0, l.jsx)(u.xp, { containerRef: e, children: (0, l.jsx)(eZ, {}) }),
                    ],
                }),
        }),
    });
}
