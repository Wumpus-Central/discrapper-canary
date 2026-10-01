(n.r(t), n.d(t, { default: () => tI }));
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
    m = n(925166),
    g = n(605117),
    j = n(17928),
    p = n(707554),
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
    M = n(263577),
    F = n(471107),
    G = n(381849),
    _ = n(342296),
    O = n(734057),
    z = n(290863),
    B = n(287809),
    U = n(240248),
    W = n(652215),
    V = n(682530),
    H = n(375708),
    Z = n(604506);
function $(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, j.bG)([B.default], () => B.default.getUser(t.userId), [t.userId]),
        o = (0, g.c)(),
        u = (function (e, t, n) {
            let i = (0, j.bG)(
                    [z.A],
                    () => {
                        let t = z.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === W.$pd.PLAYING || i?.type === W.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, j.bG)([O.A], () => (r ? O.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
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
                            ? H.intl.format(V.default.KddZZf, { duration: (0, l.jsx)(Y, { start: t }) })
                            : H.intl.string(V.default["8ALChp"]),
                };
            }
            if (null == i) return null;
            let o = (function (e, t) {
                switch (e.type) {
                    case W.$pd.PLAYING:
                    case W.$pd.COMPETING:
                        return { Icon: w.GameControllerIcon, text: X(e.details) ?? (t ? null : X(e.name)) };
                    case W.$pd.LISTENING:
                        return { Icon: y.T, text: X(e.details) ?? X(e.name) };
                    case W.$pd.WATCHING:
                        return { Icon: D.k, text: X(e.details) ?? X(e.name) };
                    case W.$pd.CUSTOM_STATUS:
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
                    null != d ? H.intl.format(V.default.Fb6oNP, { text: c, duration: (0, l.jsx)(Y, { start: d }) }) : c,
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
        : (0, l.jsx)(_.A, {
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
                                      (0, l.jsx)(q, { subtitle: u }),
                                  ],
                              }),
                              null != t.gameAssetUrl && (0, l.jsx)(M.V, { src: t.gameAssetUrl, size: 32 }),
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
    return (0, U.uJ)(e) ? null : e;
}
function Y(e) {
    let { start: t } = e,
        { now: n } = (0, F.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, G.WR)({ seconds: l, getFormatter: G.i });
}
function q(e) {
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
    let { leading: t, trailing: n, label: s, color: r } = e,
        a = (0, g.c)(),
        o = a ? b.A : i.Fragment;
    return (0, l.jsxs)(E.B, {
        direction: "horizontal",
        justify: a ? "center" : "start",
        align: "center",
        padding: el,
        fullWidth: !1,
        className: en.UP,
        children: [
            (0, l.jsx)("div", { className: en.R4, children: (0, l.jsx)(t, {}) }),
            (0, l.jsx)(o, {
                children: (0, l.jsx)(et.D, {
                    variant: "text-sm/medium",
                    color: r ?? "text-muted",
                    lineClamp: 1,
                    children: s,
                }),
            }),
            null != n && !a && (0, l.jsx)("div", { className: en.ZY, children: (0, l.jsx)(n, {}) }),
        ],
    });
}
let es = { top: 12, bottom: 4 },
    er = 24 + es.top + es.bottom;
function ea(e) {
    let { section: t } = e,
        n = (0, j.bG)([v.A], () => v.A.getSections()[t]);
    return (0, l.jsx)(E.B, {
        padding: es,
        children: (0, l.jsx)(ei, {
            leading: () => (0, l.jsx)(eo, { section: n }),
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
function eo(e) {
    let { section: t } = e;
    switch (t.type) {
        case R.ik.ACTIVE_NOW:
            return (0, l.jsx)(J.g, { size: "xs" });
        case R.ik.ONLINE:
            return (0, l.jsx)(eu, {});
        case R.ik.OFFLINE:
            return (0, l.jsx)(ec, {});
        case R.ik.GAME:
            return (0, l.jsx)(ed, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case R.ik.LETTER:
            return (0, l.jsx)(ex, { letter: t.label ?? "#" });
    }
}
function eu() {
    return (0, l.jsx)(K.nW, { status: W.clD.ONLINE, size: 12 });
}
function ec() {
    return (0, l.jsx)(K.nW, { status: W.clD.OFFLINE, size: 12 });
}
function ed(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, Q.O)(null == n ? t : null),
        s = n ?? (0, ee.C4)(i)?.src;
    return (0, l.jsx)(M.V, { src: s, size: 18, "aria-hidden": !0 });
}
function ex(e) {
    let { letter: t } = e;
    return (0, l.jsx)(N.E, { variant: "text-sm/bold", children: t });
}
var ef = n(214947),
    eh = n(661531),
    em = n(821609),
    eg = n(283973),
    ej = n(408278),
    ep = n(376357),
    eb = n(857250),
    eC = n(97483),
    ev = n(305866),
    eR = n(173936),
    eA = n(95477),
    eE = n(103557),
    eI = n(922016),
    eN = n(376728),
    eS = n(279208),
    ek = n(189883),
    ew = n(237309),
    ey = n(957565),
    eD = n(499516);
let eP = { sending: !1, success: null, error: null };
function eL(e, t) {
    switch (t.type) {
        case "RESET":
            return eP;
        case "SENDING":
            return { ...eP, sending: !0 };
        case "SUCCESS":
            return { ...eP, sending: !1, success: t.text };
        case "ERROR":
            return { ...eP, sending: !1, error: t.text };
    }
}
function eT() {
    let [e, t] = i.useReducer(eL, eP),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: f } = ek.A.useConfig({ location: "AddFriendPopout" });
    async function h() {
        x(!0);
        try {
            let e = await eN.Ay.createFriendInvite(null, W.PE1.ADD_FRIENDS_POPOUT);
            (0, ey.C)(
                (0, eS.A)(e.code),
                () => (0, ep.P)((0, eb.o)(H.intl.string(H.t.tBOSx4), eC.Ck.SUCCESS)),
                () => (0, ep.P)((0, eb.o)(H.intl.string(H.t.R0RpRX), eC.Ck.FAILURE)),
            );
        } catch {
            (0, ep.P)((0, eb.o)(H.intl.string(H.t.R0RpRX), eC.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(ev.l, {
        children: (0, l.jsx)("div", {
            className: eD.kL,
            children: (0, l.jsx)(p.F, {
                component: (0, l.jsxs)("div", {
                    className: eD.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eD.gn,
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
                            children: (0, l.jsx)(ej.K, {
                                icon: eR.LinkIcon,
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
                            (0, ew.Ay)({
                                discordTag: a,
                                note: f && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: ew.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), o(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, l.jsxs)("div", {
                        className: eD.hQ,
                        children: [
                            (0, l.jsx)(eA.k, {
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
                                (0, l.jsx)(eE.f, {
                                    label: H.intl.string(H.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: H.intl.string(H.t.UtfQNw),
                                    maxLength: ew.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: H.intl.string(H.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, l.jsx)(em.$, {
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
function eM(e) {
    let { position: t, onClose: n, children: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!1),
        u = i.useCallback(() => {
            (o(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                h._.subscribe(W.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    h._.unsubscribe(W.jej.FRIENDS_SIDEBAR_RESIZED, u);
                }
            ),
            [u],
        ),
        (0, l.jsx)(eI.Y, {
            targetElementRef: r,
            shouldShow: a,
            onRequestClose: u,
            position: t,
            renderPopout: () => (0, l.jsx)(eT, {}),
            children: () => s({ buttonRef: r, onClick: () => o(!a) }),
        })
    );
}
var eF = n(184322);
let eG = Array.from({ length: 10 }, (e, t) =>
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
function e_() {
    return (0, g.c)() ? (0, l.jsx)(ez, {}) : (0, l.jsx)(eO, {});
}
function eO() {
    return (0, l.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, l.jsx)("div", { className: eF.Dd, children: eG }),
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
                        (0, l.jsx)(ef.$, { size: "lg", color: eh.A.colors.ICON_DEFAULT }),
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
                        (0, l.jsx)(eM, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(em.$, {
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
function ez() {
    return (0, l.jsx)("div", {
        className: eF.kL,
        children: (0, l.jsxs)("div", {
            className: r()(eF.Dd, eF.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: eF._f,
                    children: (0, l.jsx)(eM, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(S.m, {
                                text: H.intl.string(V.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(ej.K, {
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
                eG,
            ],
        }),
    });
}
var eB = n(983851),
    eU = n(177953),
    eW = n(730852),
    eV = n(47167),
    eH = n(977997),
    eZ = n(798350);
function e$(e) {
    let { row: t, sectionType: n } = e,
        i = (0, j.bG)([O.A], () => O.A.getChannel(t.channelId), [t.channelId]),
        s = (0, eV.Ay)(i) ?? H.intl.string(H.t.BVZqJl),
        a = (0, T.gU)(i) ?? eB.H,
        o = (0, j.bG)([eH.A], () => eH.A.isInChannel(t.channelId)) ? null : (0, l.jsx)(eX, { channelId: t.channelId });
    return (0, l.jsxs)(E.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(eZ.Os, eZ.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: eZ.h_ }),
            (0, l.jsx)(ei, {
                leading: () => (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: () => o,
                label: s,
                color: "text-default",
            }),
            (0, l.jsx)("div", {
                children: t.rows.map((e) => (0, l.jsx)($, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 &&
                (0, l.jsxs)(E.B, {
                    direction: "horizontal",
                    align: "center",
                    fullWidth: !1,
                    gap: 4,
                    padding: { top: 4, bottom: 4 },
                    children: [
                        (0, l.jsx)("b", { className: eZ.hF }),
                        (0, l.jsx)(eU.n, { size: "custom", width: 10, height: 10, color: "var(--icon-muted)" }),
                        (0, l.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: H.intl.formatToPlainString(V.default.d90MfZ, { count: t.extraMemberCount }),
                        }),
                    ],
                }),
        ],
    });
}
function eX(e) {
    let { channelId: t } = e;
    return (0, l.jsx)("div", {
        className: eZ.PD,
        children: (0, l.jsx)(em.$, {
            text: H.intl.string(H.t.VJlc0S),
            variant: "active",
            size: "sm",
            onClick: () => eW.default.selectVoiceChannel(t),
        }),
    });
}
var eY = n(182927);
function eq() {
    let e = (0, j.bG)([v.A], () => v.A.getSections()),
        t = i.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = i.useId(),
        s = i.useCallback(
            (t, n) => {
                let l = e[t]?.rows[n];
                return null == l
                    ? 48
                    : l.type === R.VZ.VOICE_GROUP && l.rows.length > 1
                      ? 60 + 48 * l.rows.length + 28 * (l.extraMemberCount > 0)
                      : 48;
            },
            [e],
        ),
        r = i.useCallback(
            (t) => {
                let { section: n, row: i } = t,
                    s = e[n],
                    r = s?.rows[i];
                return null == r || null == s
                    ? null
                    : r.type === R.VZ.VOICE_GROUP
                      ? (0, l.jsx)(e$, { row: r, sectionType: s.type }, r.key)
                      : (0, l.jsx)($, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, l.jsx)(e_, {})
        : (0, l.jsx)(p.F, {
              component: (0, l.jsx)(b.A, { children: (0, l.jsx)(p.H, { id: n, children: H.intl.string(H.t.TdEu5X) }) }),
              children: (0, l.jsx)(C.OZ, {
                  className: eY.p,
                  "aria-labelledby": n,
                  sections: t,
                  sectionHeight: er,
                  rowHeight: s,
                  renderSection: (e) => {
                      let { section: t } = e;
                      return (0, l.jsx)(ea, { section: t });
                  },
                  renderRow: r,
                  fade: !0,
                  paddingBottom: 4,
                  scrollbarGutter: "both-edges",
                  style: { "--custom-friend-row-height": "32px" },
              }),
          });
}
var eJ = n(259730),
    eK = n(847374),
    eQ = n(450030),
    e0 = n(783977),
    e1 = n(7689),
    e6 = n(765671),
    e3 = n(980707),
    e4 = n(477782),
    e2 = n(606325),
    e7 = n(303911),
    e8 = n(67746);
let e9 = [
    [R.Vj.ACTIVE_NOW, V.default["/lMTzd"], V.default.IzzWNM],
    [R.Vj.GAME, V.default.aKZ12v, V.default.lE79Lm],
    [R.Vj.ALPHABETICAL, V.default.eVxFX3, null],
];
function e5(e) {
    let { width: t, closePopout: n } = e,
        i = (0, j.bG)([v.A], () => v.A.getGroupingMode()),
        s = (0, j.bG)([v.A], () => v.A.isVoiceGroupingEnabled());
    return (0, l.jsx)("div", {
        className: e8.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(e3.W, {
            navId: "friends-list-group-config",
            "aria-label": H.intl.string(V.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(e4.rX, {
                    label: H.intl.string(V.default.OvTyCX),
                    children: e9.map((e) => {
                        let [t, s, r] = e;
                        return (0, l.jsx)(
                            e4.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: H.intl.string(s),
                                subtext: null != r ? H.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    ((0, e2.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, e7.kR)(i) &&
                    (0, l.jsx)(e4.rX, {
                        label: H.intl.string(H.t["8/udY0"]),
                        children: (0, l.jsx)(e4.fP, {
                            id: "friends-list-group-voice-channels",
                            label: H.intl.string(V.default["/b1eZT"]),
                            subtext: H.intl.string(V.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, e2.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var te = n(602853),
    tt = n(308528),
    tn = n(565860),
    tl = n(723690),
    ti = n(976860),
    ts = n(994500),
    tr = n(972910);
function ta(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, j.cf)([z.A], () => ({
            status: z.A.getStatus(t.userId),
            isMobile: z.A.isMobileOnline(t.userId),
            isVR: z.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(A.D, {
        className: r()(tr.Ke, { [tr.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = O.A.getDMFromUserId(t.user.id);
            (null != e ? (0, ti.pX)(W.BVt.CHANNEL(W.ME, e)) : tt.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(tl.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, l.jsx)(N.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: tr.eF,
        }),
    });
}
function to(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, te.r)(eh.A.space.SPACE_XS),
        s = (0, te.r)(eh.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(C.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(ta, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(N.E, {
                className: tr.nw,
                variant: "text-sm/medium",
                children: H.intl.format(H.t.xIWGxu, { count: t.length }),
            });
        },
        className: tr.Xv,
    });
}
function tu() {
    return (0, l.jsx)(N.E, {
        variant: "text-sm/medium",
        className: tr.n1,
        children: H.intl.string(V.default["0usxBd"]),
    });
}
function tc() {
    return (0, l.jsx)(N.E, { variant: "text-sm/medium", className: tr.n1, children: H.intl.string(V.default.VH2HXW) });
}
function td(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, tn.HI)(t),
        s = (0, j.bG)(
            [ts.A, B.default],
            () => {
                if ("" === i) return [];
                let e = ts.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = B.default.getUser(e);
                        if (void 0 === n) return;
                        let l = ts.A.getNickname(e),
                            s = [(0, tn.HI)(n.username)];
                        (null != n.globalName && s.push((0, tn.HI)(n.globalName)),
                            null != l && s.push((0, tn.HI)(l)),
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
        ? (0, l.jsx)(tu, {})
        : s.length > 0
          ? (0, l.jsx)(to, { searchResults: s, closePopout: n })
          : (0, l.jsx)(tc, {});
}
function tx(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(tr.kL, tr.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(td, { rawQuery: t, closePopout: i }),
    });
}
function tf(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(ev.l, {
        children: (0, l.jsxs)("div", {
            className: tr.kL,
            children: [
                (0, l.jsx)("div", {
                    className: tr.M6,
                    children: (0, l.jsx)(eA.k, { placeholder: H.intl.string(H.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(td, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var th = n(540950);
function tm() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            h._.subscribe(W.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                h._.unsubscribe(W.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let n = (0, g.c)(),
        { appBarToggleEnabled: s } = m.A.useConfig({ location: "FriendsListHeader" }),
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
    (0, e6.i4)(u, f);
    let j = n
        ? (0, l.jsx)(tj, {})
        : "search" === e
          ? (0, l.jsx)(tv, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(tg, {
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
                            (0, l.jsx)(tv, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(tR, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, l.jsx)(tA, {
                                      icon: eJ.E,
                                      label: H.intl.string(V.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tg, { ghost: !0, ref: d }),
            (0, l.jsx)(E.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: th.wx,
                ref: u,
                children: j,
            }),
        ],
    });
}
function tg(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: u } = e,
        c = i.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, l.jsx)(ef.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(N.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: H.intl.string(V.default["7kJd9e"]),
              }),
        f = (0, l.jsx)(A.D, {
            className: r()(th.Iw, { [th.qy]: n }),
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
                children: [x, (0, l.jsx)(eK.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return f;
    let h = (0, l.jsx)(eI.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(e5, { width: s?.current, closePopout: d }),
        children: () => f,
    });
    return a ? h : (0, l.jsx)(S.m, { text: H.intl.string(V.default.wvbB3Z), asContainer: !0, children: h });
}
function tj() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(eI.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(tp, { onClose: r }),
        children: () =>
            (0, l.jsx)(tA, {
                buttonRef: e,
                icon: eQ.U,
                label: H.intl.string(V.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function tp(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(E.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: th.QG,
        children: [
            (0, l.jsx)(tb, {}),
            (0, l.jsx)(tC, { onClose: t }),
            (0, l.jsx)(tR, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function tb() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s() {
        n(!1);
    }
    return (0, l.jsx)(eI.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, l.jsx)(e5, { closePopout: s }),
        children: () =>
            (0, l.jsx)(tA, {
                buttonRef: e,
                icon: e0.R,
                label: H.intl.string(V.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function tC(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(eI.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(tf, { closePopout: a }),
        children: () =>
            (0, l.jsx)(tA, {
                buttonRef: n,
                icon: e1.MagnifyingGlassIcon,
                label: H.intl.string(V.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function tv(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState("");
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(eI.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(tx, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: th.wB,
                      children: (0, l.jsx)(eA.k, {
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
        : (0, l.jsx)(tA, {
              icon: e1.MagnifyingGlassIcon,
              label: H.intl.string(V.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function tR(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(eM, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(tA, {
                buttonRef: t,
                icon: eg.R,
                label: H.intl.string(V.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function tA(e) {
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
            className: th.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var tE = n(45863);
function tI() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        j = (0, g.c)(),
        { appBarToggleEnabled: p } = m.A.useConfig({ location: "FriendsSidebar" }),
        b = i.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || b(j ? 64 : 280);
    }, [j, b]);
    let C = i.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== (0, g.A)() && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [b],
        ),
        v = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(tE.cB), h._.dispatch(W.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(tE.cB));
        }, []),
        A = i.useCallback((e) => (p ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [p]),
        E = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: p ? 200 : 64,
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
                        l = p ? 280 : 64;
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
            [p, A, C],
        ),
        N = (0, f.NC)();
    return (0, l.jsx)(x.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(o.N, {
            theme: N,
            children: (n) =>
                (0, l.jsxs)("div", {
                    ref: e,
                    className: r()(tE.kL, n),
                    children: [
                        (0, l.jsx)(u.vN, {
                            children: (0, l.jsx)("div", {
                                ref: t,
                                role: "separator",
                                tabIndex: 0,
                                "aria-orientation": "vertical",
                                "aria-label": H.intl.string(V.default["F3+Xei"]),
                                "aria-valuemin": p ? 280 : 64,
                                "aria-valuemax": 320,
                                className: tE.Di,
                                onMouseDown: E,
                                onKeyDown: I,
                            }),
                        }),
                        (0, l.jsx)(tm, {}),
                        (0, l.jsx)(u.xp, { containerRef: e, children: (0, l.jsx)(eq, {}) }),
                    ],
                }),
        }),
    });
}
