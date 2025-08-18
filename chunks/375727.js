n.d(t, { I: () => w }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(33309),
    o = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(80932),
    h = n(493773),
    m = n(710845),
    g = n(430824),
    p = n(496675),
    f = n(914010),
    v = n(626135),
    x = n(176354),
    _ = n(598117),
    b = n(390620),
    j = n(983205),
    O = n(903759),
    E = n(746622),
    N = n(384694),
    C = n(273391),
    D = n(981631),
    y = n(388032),
    I = n(342745);
let S = new m.Z("EmojiStudio"),
    w = (e) => {
        var t;
        let { userImage: n, guildId: a } = e,
            [m, w] = l.useState(n),
            k = (0, o.e7)([g.Z, f.Z, p.Z], () => {
                let e = f.Z.getGuildId(),
                    t = g.Z.getGuild(e);
                return p.Z.can(D.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [M, R] = l.useState(null != a ? a : k),
            [P, L] = l.useState(null),
            [Z, z] = l.useState(null),
            [G, U] = l.useState(""),
            [W, B] = l.useState(null),
            [F, H] = l.useState(() => Date.now()),
            V = l.useRef(0),
            J = l.useRef(0),
            Y = l.useRef(!1),
            K = l.useCallback(
                (e) => {
                    let { reason: t } = e,
                        n = null != P ? P : Z;
                    v.default.track(D.rMx.EMOJI_STUDIO_ENDED, {
                        reason: t,
                        is_initial: 0 === V.current,
                        has_image: null != m,
                        error: null == n ? null : String(n),
                        throttled_edit_count: J.current,
                        session_duration_ms: Date.now() - F,
                        has_guild_selected: null != M,
                    });
                },
                [P, Z, F, m, M],
            );
        (0, h.zq)(() => {
            Y.current || K({ reason: "closed" });
        });
        let X = l.useCallback(async () => {
                if ((L(null), null == M)) return void L(_.ze.MISSING_GUILD);
                if (null == m || (null == m ? void 0 : m.file) == null || null == W)
                    return void L(_.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, d.rS)({
                        image: W,
                        guildId: M,
                        name: G,
                        analyticsLocation: { page: D.ZY5.EMOJI_STUDIO },
                    });
                } catch (e) {
                    L((0, E.z)(e)), S.error("Failed to upload emoji.", e);
                    return;
                }
                K({ reason: "uploaded" }),
                    (Y.current = !0),
                    (0, c.Mr3)(_.Hj),
                    (0, b.y)({
                        emoji: e,
                        guildId: M,
                    });
            }, [M, m, W, K, G]),
            q = l.useCallback(() => {
                K({ reason: "back_button" }), L(null), w(null), B(null), U(""), H(Date.now()), (J.current = 0);
            }, [K]),
            $ = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                null != t && x.ZP.isDataTooBig(t) && (l = _.ze.TOO_BIG),
                    L(null != r ? r : l),
                    n < V.current || (null != t && (B(t), (V.current = n)));
            }, []),
            Q = l.useCallback(() => {
                J.current++;
            }, []),
            ee = l.useCallback((e) => {
                var t;
                w(e),
                    U((t) => {
                        var n, r;
                        if ("" !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : "",
                            a = l.lastIndexOf("."),
                            i = -1 === a ? l : l.substring(0, a);
                        return x.ZP.sanitizeEmojiName(i);
                    }),
                    B(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []);
        return (0, r.jsxs)("main", {
            className: i()(I.main, { [I.checkerboard]: null != m }),
            children: [
                (0, r.jsx)(c.X6q, {
                    variant: "heading-lg/medium",
                    color: "header-primary",
                    className: I.heading,
                    children: y.intl.string(y.t.iMJO39),
                }),
                null == m
                    ? (0, r.jsx)(O.u, { setImage: ee })
                    : (0, r.jsx)("div", {
                          className: I.editor,
                          children: (0, r.jsx)(C.v, {
                              file: m.file,
                              imageUri: m.data,
                              onUpdate: $,
                              onThrottledEdit: Q,
                          }),
                      }),
                (0, r.jsxs)("aside", {
                    className: I.aside,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.preview,
                            children: [
                                (0, r.jsx)("label", { children: y.intl.string(y.t.JmuIb2) }),
                                (0, r.jsxs)("ul", {
                                    children: [
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsxs)("div", {
                                                className: I.reactions,
                                                children: [
                                                    (0, r.jsx)(A, {
                                                        src: W,
                                                        alt: y.intl.string(y.t["zS0K+v"]),
                                                    }),
                                                    (0, r.jsx)("span", { children: "8" }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)("div", {
                                                className: I.jumbo,
                                                children: (0, r.jsx)(A, {
                                                    src: W,
                                                    alt: y.intl.string(y.t["tE41+f"]),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(c.xJW, {
                            title: y.intl.string(y.t.m0YV7O),
                            required: !0,
                            tag: "label",
                            children: (0, r.jsx)(j.y, {
                                name: G,
                                onNameChange: U,
                            }),
                        }),
                        (0, r.jsx)(c.xJW, {
                            title: y.intl.string(y.t["9uKafX"]),
                            required: !0,
                            tag: "label",
                            titleId: "guild-selector-label",
                            children: (0, r.jsxs)("div", {
                                className: I.guildSelectorContainer,
                                children: [
                                    (0, r.jsx)(N.q, {
                                        onChange: R,
                                        selected: M,
                                        onError: (e) => z(e),
                                        labelledBy: "guild-selector-label",
                                        isEmojiAnimated: (0, s.v)(null == m || null == (t = m.file) ? void 0 : t.type),
                                    }),
                                    null != Z &&
                                        (0, r.jsx)(E.H, {
                                            error: Z,
                                            variant: "text-xs/medium",
                                            color: "text-feedback-warning",
                                        }),
                                    null == M &&
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-tertiary",
                                            children: y.intl.string(y.t["1pdw0N"]),
                                        }),
                                ],
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: I.foot,
                            children: [
                                null != P &&
                                    (0, r.jsx)(E.H, {
                                        error: P,
                                        variant: "text-sm/normal",
                                        color: "text-danger",
                                    }),
                                (0, r.jsx)(u.zx, {
                                    className: I.submit,
                                    onClick: X,
                                    fullWidth: !0,
                                    disabled: null == m || null == M || G.length < 2 || null != Z,
                                    children: y.intl.string(y.t.DU0dy8),
                                }),
                            ],
                        }),
                    ],
                }),
                null != m
                    ? (0, r.jsx)(T, { back: q })
                    : (0, r.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(_.Hj),
                          className: I.closeButton,
                      }),
            ],
        });
    },
    T = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            "aria-label": y.intl.string(y.t["13/7kZ"]),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: I.backButtonInnner,
            className: I.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: "currentColor",
                size: "md",
            }),
        });
    },
    A = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, r.jsx)("div", { className: I.previewPlaceholder })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
