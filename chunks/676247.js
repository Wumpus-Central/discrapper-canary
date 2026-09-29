(n.r(t), n.d(t, { default: () => tu }));
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
    x = n(97469),
    h = n(925166),
    f = n(605117),
    m = n(17928),
    g = n(707554),
    j = n(140735),
    p = n(475825),
    C = n(546359),
    b = n(736347),
    v = n(331322),
    A = n(778712),
    N = n(834730),
    R = n(866665),
    I = n(683063),
    E = n(687966),
    k = n(432017),
    S = n(31300),
    w = n(966327),
    y = n(713654),
    L = n(263577),
    P = n(471107),
    T = n(381849),
    D = n(734057),
    O = n(290863),
    F = n(287809),
    G = n(240248),
    M = n(652215),
    z = n(347932),
    U = n(375708),
    B = n(604506);
function H(e) {
    let { row: t, sectionType: n, inVoiceSubgroup: i = !1 } = e,
        s = (0, m.bG)([F.default], () => F.default.getUser(t.userId), [t.userId]),
        r = (0, f.c)(),
        a = (function (e, t, n) {
            let i = (0, m.bG)(
                    [O.A],
                    () => {
                        let t = O.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === M.$pd.PLAYING || i?.type === M.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, m.bG)([D.A], () => (r ? D.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n = (0, y.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, l.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": U.intl.string(z.default["8ALChp"]),
                              }),
                    textColor: s,
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? U.intl.format(z.default.KddZZf, { duration: (0, l.jsx)(_, { start: t }) })
                            : U.intl.string(z.default["8ALChp"]),
                };
            }
            if (null == i) return null;
            let o = (function (e, t) {
                switch (e.type) {
                    case M.$pd.PLAYING:
                    case M.$pd.COMPETING:
                        return { Icon: E.GameControllerIcon, text: W(e.details) ?? (t ? null : W(e.name)) };
                    case M.$pd.LISTENING:
                        return { Icon: k.T, text: W(e.details) ?? W(e.name) };
                    case M.$pd.WATCHING:
                        return { Icon: S.k, text: W(e.details) ?? W(e.name) };
                    case M.$pd.CUSTOM_STATUS:
                        return { text: W(e.state) };
                    default:
                        return null;
                }
            })(i, t === b.ik.GAME);
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
                    null != d ? U.intl.format(z.default.Fb6oNP, { text: c, duration: (0, l.jsx)(_, { start: d }) }) : c,
            };
        })(t, n, i);
    if (null == s) return null;
    let o = (0, l.jsxs)(v.B, {
        direction: "horizontal",
        align: "center",
        padding: 8,
        fullWidth: !1,
        className: B.nM,
        children: [
            (0, l.jsx)(w.A, { user: s, size: A._3.SIZE_32, status: t.status, "aria-hidden": !0, className: B.LY }),
            (0, l.jsxs)("div", {
                className: B.rf,
                children: [
                    (0, l.jsx)(N.E, { variant: "text-md/normal", lineClamp: 1, children: t.name }),
                    (0, l.jsx)(V, { subtitle: a }),
                ],
            }),
            null != t.gameAssetUrl && (0, l.jsx)(L.V, { src: t.gameAssetUrl, size: 32 }),
        ],
    });
    return r
        ? null == a
            ? (0, l.jsx)(R.m, {
                  text: t.name,
                  position: "left",
                  asContainer: !0,
                  tag: "div",
                  "aria-hidden": !0,
                  children: o,
              })
            : (0, l.jsx)(I.u, {
                  title: t.name,
                  body: a.content,
                  position: "left",
                  asContainer: !0,
                  element: "div",
                  "aria-hidden": !0,
                  children: o,
              })
        : o;
}
function W(e) {
    return (0, G.uJ)(e) ? null : e;
}
function _(e) {
    let { start: t } = e,
        { now: n } = (0, P.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, T.WR)({ seconds: l, getFormatter: T.i });
}
function V(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(v.B, {
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
var $ = n(768622),
    Z = n(935154),
    X = n(80558),
    q = n(939341),
    J = n(297264),
    Y = n(416852);
let K = { left: 8, right: 8 };
function Q(e) {
    let { leading: t, label: n, color: s } = e,
        r = (0, f.c)(),
        a = r ? j.A : i.Fragment;
    return (0, l.jsxs)(v.B, {
        direction: "horizontal",
        justify: r ? "center" : "start",
        align: "center",
        padding: K,
        fullWidth: !1,
        children: [
            (0, l.jsx)("div", { className: Y.R, children: (0, l.jsx)(t, {}) }),
            (0, l.jsx)(a, {
                children: (0, l.jsx)(J.D, {
                    variant: "text-sm/medium",
                    color: s ?? "text-muted",
                    lineClamp: 1,
                    children: n,
                }),
            }),
        ],
    });
}
let ee = { top: 16, bottom: 8 };
function et(e) {
    let { section: t } = e,
        n = (0, m.bG)([C.A], () => C.A.getSections()[t]);
    return (0, l.jsx)(v.B, {
        padding: ee,
        children: (0, l.jsx)(Q, {
            leading: () => (0, l.jsx)(en, { section: n }),
            label: (function (e) {
                switch (e.type) {
                    case b.ik.ACTIVE_NOW:
                        return U.intl.string(U.t.TxqPQR);
                    case b.ik.ONLINE:
                        return U.intl.string(U.t.WbGtnH);
                    case b.ik.OFFLINE:
                        return U.intl.string(U.t.Vv0abJ);
                    case b.ik.GAME:
                        return e.label;
                    case b.ik.LETTER:
                        return null;
                }
            })(n),
        }),
    });
}
function en(e) {
    let { section: t } = e;
    switch (t.type) {
        case b.ik.ACTIVE_NOW:
            return (0, l.jsx)($.g, { size: "xs" });
        case b.ik.ONLINE:
            return (0, l.jsx)(el, {});
        case b.ik.OFFLINE:
            return (0, l.jsx)(ei, {});
        case b.ik.GAME:
            return (0, l.jsx)(es, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case b.ik.LETTER:
            return (0, l.jsx)(er, { letter: t.label ?? "#" });
    }
}
function el() {
    return (0, l.jsx)(Z.nW, { status: M.clD.ONLINE, size: 12 });
}
function ei() {
    return (0, l.jsx)(Z.nW, { status: M.clD.OFFLINE, size: 12 });
}
function es(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, X.O)(null == n ? t : null),
        s = n ?? (0, q.C4)(i)?.src;
    return (0, l.jsx)(L.V, { src: s, size: 18, "aria-hidden": !0 });
}
function er(e) {
    let { letter: t } = e;
    return (0, l.jsx)(N.E, { variant: "text-sm/bold", children: t });
}
var ea = n(214947),
    eo = n(661531),
    eu = n(821609),
    ec = n(283973),
    ed = n(408278),
    ex = n(691540),
    eh = n(857250),
    ef = n(97483),
    em = n(305866),
    eg = n(173936),
    ej = n(95477),
    ep = n(103557),
    eC = n(922016),
    eb = n(376728),
    ev = n(279208),
    eA = n(189883),
    eN = n(237309),
    eR = n(957565),
    eI = n(499516);
let eE = { sending: !1, success: null, error: null };
function ek(e, t) {
    switch (t.type) {
        case "RESET":
            return eE;
        case "SENDING":
            return { ...eE, sending: !0 };
        case "SUCCESS":
            return { ...eE, sending: !1, success: t.text };
        case "ERROR":
            return { ...eE, sending: !1, error: t.text };
    }
}
function eS() {
    let [e, t] = i.useReducer(ek, eE),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = eA.A.useConfig({ location: "AddFriendPopout" });
    async function f() {
        x(!0);
        try {
            let e = await eb.Ay.createFriendInvite(null, M.PE1.ADD_FRIENDS_POPOUT);
            (0, eR.C)(
                (0, ev.A)(e.code),
                () => (0, ex.P0)((0, eh.o)(U.intl.string(U.t.tBOSx4), ef.Ck.SUCCESS)),
                () => (0, ex.P0)((0, eh.o)(U.intl.string(U.t.R0RpRX), ef.Ck.FAILURE)),
            );
        } catch {
            (0, ex.P0)((0, eh.o)(U.intl.string(U.t.R0RpRX), ef.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(em.l, {
        children: (0, l.jsx)("div", {
            className: eI.kL,
            children: (0, l.jsx)(g.F, {
                component: (0, l.jsxs)("div", {
                    className: eI.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eI.gn,
                            children: (0, l.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: U.intl.string(U.t.zIJnA6),
                            }),
                        }),
                        (0, l.jsx)(R.m, {
                            text: U.intl.string(U.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(ed.K, {
                                icon: eg.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": U.intl.string(U.t.t1T3kD),
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
                            (0, eN.Ay)({
                                discordTag: a,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: eN.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), o(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, l.jsxs)("div", {
                        className: eI.hQ,
                        children: [
                            (0, l.jsx)(ej.k, {
                                value: a,
                                onChange: (e) => {
                                    (o(e), t({ type: "RESET" }));
                                },
                                label: U.intl.string(U.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: U.intl.string(U.t.jx0GiG),
                                successMessage: s,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            h &&
                                (0, l.jsx)(ep.f, {
                                    label: U.intl.string(U.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: U.intl.string(U.t.UtfQNw),
                                    maxLength: eN.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: U.intl.string(U.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, l.jsx)(eu.$, {
                                variant: "primary",
                                size: "md",
                                text: U.intl.string(U.t.HWT3wh),
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
function ew(e) {
    let { position: t, onClose: n, children: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!1);
    return (0, l.jsx)(eC.Y, {
        targetElementRef: r,
        shouldShow: a,
        onRequestClose: function () {
            (o(!1), n?.());
        },
        position: t,
        renderPopout: () => (0, l.jsx)(eS, {}),
        children: () => s({ buttonRef: r, onClick: () => o(!a) }),
    });
}
var ey = n(184322);
let eL = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: ey._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: ey.RH }), (0, l.jsx)("div", { className: ey.rl })],
        },
        t,
    ),
);
function eP() {
    return (0, f.c)() ? (0, l.jsx)(eD, {}) : (0, l.jsx)(eT, {});
}
function eT() {
    return (0, l.jsxs)("div", {
        className: ey.kL,
        children: [
            (0, l.jsx)("div", { className: ey.Dd, children: eL }),
            (0, l.jsx)(v.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: ey.C,
                children: (0, l.jsxs)(v.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(ea.$, { size: "lg", color: eo.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(v.B, {
                            gap: 4,
                            className: ey.Dk,
                            children: [
                                (0, l.jsx)(J.D, {
                                    variant: "heading-md/medium",
                                    children: U.intl.string(z.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: U.intl.string(z.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(ew, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(eu.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: ec.R,
                                    text: U.intl.string(z.default.au4mU4),
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
function eD() {
    return (0, l.jsx)("div", {
        className: ey.kL,
        children: (0, l.jsxs)("div", {
            className: r()(ey.Dd, ey.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: ey._f,
                    children: (0, l.jsx)(ew, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(R.m, {
                                text: U.intl.string(z.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(ed.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: ec.R,
                                    "aria-label": U.intl.string(z.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                eL,
            ],
        }),
    });
}
var eO = n(983851),
    eF = n(730852),
    eG = n(47167),
    eM = n(798350);
function ez(e) {
    let { row: t, sectionType: n } = e,
        i = (0, m.bG)([D.A], () => D.A.getChannel(t.channelId), [t.channelId]),
        s = (0, eG.Ay)(i) ?? U.intl.string(U.t.BVZqJl),
        a = (0, f.c)(),
        o = (0, y.gU)(i) ?? eO.H;
    return (0, l.jsxs)(v.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(eM.Os, eM.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: eM.h_ }),
            (0, l.jsx)(Q, {
                leading: () => (0, l.jsx)(o, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                label: s,
                color: "text-default",
            }),
            (0, l.jsx)("div", {
                children: t.rows.map((e) => (0, l.jsx)(H, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            !a &&
                (0, l.jsx)(eu.$, {
                    variant: "active",
                    text: U.intl.string(U.t.eIi3Om),
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => eF.default.selectVoiceChannel(t.channelId),
                }),
        ],
    });
}
var eU = n(182927);
function eB() {
    let e = (0, m.bG)([C.A], () => C.A.getSections()),
        t = i.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = (0, f.c)(),
        s = i.useId(),
        r = i.useCallback(
            (t, l) => {
                let i = e[t]?.rows[l];
                return null == i ? 48 : i.type === b.VZ.VOICE_GROUP ? 54 + 48 * i.rows.length + 36 * !n : 48;
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
                    : r.type === b.VZ.VOICE_GROUP
                      ? (0, l.jsx)(ez, { row: r, sectionType: s.type }, r.key)
                      : (0, l.jsx)(H, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, l.jsx)(eP, {})
        : (0, l.jsx)(g.F, {
              component: (0, l.jsx)(j.A, { children: (0, l.jsx)(g.H, { id: s, children: U.intl.string(U.t.TdEu5X) }) }),
              children: (0, l.jsx)(p.OZ, {
                  className: eU.p,
                  "aria-labelledby": s,
                  sections: t,
                  sectionHeight: 42,
                  rowHeight: r,
                  renderSection: (e) => {
                      let { section: t } = e;
                      return (0, l.jsx)(et, { section: t });
                  },
                  renderRow: a,
                  fade: !0,
                  paddingBottom: 4,
                  scrollbarGutter: "both-edges",
                  style: { "--custom-friend-row-height": "32px" },
              }),
          });
}
var eH = n(259730),
    eW = n(939249),
    e_ = n(847374),
    eV = n(450030),
    e$ = n(783977),
    eZ = n(7689),
    eX = n(765671);
n(321073);
var eq = n(602853),
    eJ = n(308528),
    eY = n(565860),
    eK = n(723690),
    eQ = n(976860),
    e0 = n(994500),
    e1 = n(972910);
function e3(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, m.cf)([O.A], () => ({
            status: O.A.getStatus(t.userId),
            isMobile: O.A.isMobileOnline(t.userId),
            isVR: O.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(eW.D, {
        className: r()(e1.Ke, { [e1.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = D.A.getDMFromUserId(t.user.id);
            (null != e ? (0, eQ.pX)(M.BVt.CHANNEL(M.ME, e)) : eJ.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(eK.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, l.jsx)(N.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: e1.eF,
        }),
    });
}
function e6(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, eq.r)(eo.A.space.SPACE_XS),
        s = (0, eq.r)(eo.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(p.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(e3, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(N.E, {
                className: e1.nw,
                variant: "text-sm/medium",
                children: U.intl.format(U.t.xIWGxu, { count: t.length }),
            });
        },
        className: e1.Xv,
    });
}
function e8() {
    return (0, l.jsx)(N.E, {
        variant: "text-sm/medium",
        className: e1.n1,
        children: U.intl.string(z.default["0usxBd"]),
    });
}
function e2() {
    return (0, l.jsx)(N.E, { variant: "text-sm/medium", className: e1.n1, children: U.intl.string(z.default.VH2HXW) });
}
function e4(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, eY.HI)(t),
        s = (0, m.bG)(
            [e0.A, F.default],
            () => {
                if ("" === i) return [];
                let e = e0.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = F.default.getUser(e);
                        if (void 0 === n) return;
                        let l = e0.A.getNickname(e),
                            s = [(0, eY.HI)(n.username)];
                        (null != n.globalName && s.push((0, eY.HI)(n.globalName)),
                            null != l && s.push((0, eY.HI)(l)),
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
        ? (0, l.jsx)(e8, {})
        : s.length > 0
          ? (0, l.jsx)(e6, { searchResults: s, closePopout: n })
          : (0, l.jsx)(e2, {});
}
function e7(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(e1.kL, e1.zZ),
        style: n > 0 ? { "--custom-search-friends-popout-width": `${n}px` } : void 0,
        children: (0, l.jsx)(e4, { rawQuery: t, closePopout: i }),
    });
}
function e9(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(em.l, {
        children: (0, l.jsxs)("div", {
            className: e1.kL,
            children: [
                (0, l.jsx)("div", {
                    className: e1.M6,
                    children: (0, l.jsx)(ej.k, { placeholder: U.intl.string(U.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(e4, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var e5 = n(540950);
function te(e) {
    let { isSearching: t, setIsSearching: n } = e,
        s = (0, f.c)(),
        { appBarToggleEnabled: r } = h.A.useConfig({ location: "FriendsListHeader" }),
        [a, o] = i.useState(!1),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useRef(null),
        m = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                l = x.current?.getBoundingClientRect().width;
            null != t && null != n && null != l && o(t - (n + l) <= 24);
        }, []);
    (0, eX.i4)(u, m);
    let g = s
        ? (0, l.jsx)(tn, {})
        : t
          ? (0, l.jsx)(ts, { isSearching: !0, setIsSearching: n })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(tt, { compact: a }),
                    (0, l.jsxs)(v.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, l.jsx)(ts, { isSearching: t, setIsSearching: n }),
                            (0, l.jsx)(tr, { popoutPosition: "bottom" }),
                            r
                                ? null
                                : (0, l.jsx)(ta, {
                                      icon: eH.E,
                                      label: U.intl.string(z.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tt, { ghost: !0, ref: d }),
            (0, l.jsx)(v.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: s ? "center" : "space-between",
                padding: 8,
                className: e5.wx,
                ref: u,
                children: g,
            }),
        ],
    });
}
function tt(e) {
    let { compact: t = !1, ghost: n = !1, ref: s } = e,
        a = n ? i.Fragment : R.m,
        o = t
            ? (0, l.jsx)(ea.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(N.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: U.intl.string(z.default["7kJd9e"]),
              });
    return (0, l.jsx)(a, {
        text: U.intl.string(z.default["7kJd9e"]),
        children: (0, l.jsx)(eW.D, {
            className: r()(e5.Iw, { [e5.qy]: n }),
            "aria-label": U.intl.string(z.default["7kJd9e"]),
            innerRef: s,
            children: (0, l.jsxs)(v.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [o, (0, l.jsx)(e_.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function tn() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(eC.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(tl, { onClose: r }),
        children: () =>
            (0, l.jsx)(ta, {
                buttonRef: e,
                icon: eV.U,
                label: U.intl.string(z.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function tl(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(v.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: e5.QG,
        children: [
            (0, l.jsx)(ta, { icon: e$.R, label: U.intl.string(z.default["i+986w"]), tooltipPosition: "left" }),
            (0, l.jsx)(ti, { onClose: t }),
            (0, l.jsx)(tr, { popoutPosition: "left", tooltipPosition: "left", onClose: t }),
        ],
    });
}
function ti(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(eC.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(e9, { closePopout: a }),
        children: () =>
            (0, l.jsx)(ta, {
                buttonRef: n,
                icon: eZ.MagnifyingGlassIcon,
                label: U.intl.string(z.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function ts(e) {
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
        ? (0, l.jsx)(eC.Y, {
              targetElementRef: s,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(e7, { query: r, width: o, closePopout: c }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: s,
                      className: e5.wB,
                      children: (0, l.jsx)(ej.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: U.intl.string(z.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: U.intl.string(U.t.lLDtTK),
                          value: r,
                          onChange: a,
                      }),
                  }),
          })
        : (0, l.jsx)(ta, {
              icon: eZ.MagnifyingGlassIcon,
              label: U.intl.string(z.default["60M8Ae"]),
              onClick: () => n(!0),
          });
}
function tr(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(ew, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(ta, {
                buttonRef: t,
                icon: ec.R,
                label: U.intl.string(z.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function ta(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = i.useRef(null),
        c = o ?? u;
    return (0, l.jsx)(R.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, l.jsx)(eW.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: e5.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var to = n(45863);
function tu() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        m = (0, f.c)(),
        { appBarToggleEnabled: g } = h.A.useConfig({ location: "FriendsSidebar" }),
        [j, p] = i.useState(!1),
        C = i.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || C(m ? 64 : 280);
    }, [m, C]);
    let b = i.useCallback(
            (e) => {
                C(e);
                let t = e < 200;
                t !== (0, f.A)() && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [C],
        ),
        v = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(to.cB), p(!1));
        }, []),
        A = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(to.cB));
        }, []),
        N = i.useCallback((e) => (g ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [g]),
        R = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: g ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: v,
            onApplyDimension: b,
            onElementResizeEnd: A,
            getClampedValue: N,
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
                        l = g ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = N(l);
                ((n.current = !0), b(i), (n.current = !1));
            },
            [g, N, b],
        ),
        E = (0, x.NC)();
    return (0, l.jsx)(o.N, {
        theme: E,
        children: (n) =>
            (0, l.jsxs)("div", {
                ref: e,
                className: r()(to.kL, n),
                children: [
                    (0, l.jsx)(u.vN, {
                        children: (0, l.jsx)("div", {
                            ref: t,
                            role: "separator",
                            tabIndex: 0,
                            "aria-orientation": "vertical",
                            "aria-label": U.intl.string(z.default["F3+Xei"]),
                            "aria-valuemin": g ? 280 : 64,
                            "aria-valuemax": 320,
                            className: to.Di,
                            onMouseDown: R,
                            onKeyDown: I,
                        }),
                    }),
                    (0, l.jsx)(te, { isSearching: j, setIsSearching: p }),
                    (0, l.jsx)(eB, {}),
                ],
            }),
    });
}
