n.d(t, { I: () => T }), n(388685);
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(33309),
    s = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(80932),
    m = n(493773),
    h = n(710845),
    g = n(430824),
    f = n(496675),
    x = n(914010),
    p = n(626135),
    _ = n(176354),
    b = n(598117),
    v = n(390620),
    j = n(983205),
    N = n(903759),
    C = n(746622),
    E = n(384694),
    I = n(273391),
    O = n(981631),
    S = n(388032),
    y = n(342745);
let w = new h.Z("EmojiStudio"),
    T = (e) => {
        var t;
        let { userImage: n, guildId: i } = e,
            [h, T] = r.useState(n),
            k = (0, s.e7)([g.Z, x.Z, f.Z], () => {
                let e = x.Z.getGuildId(),
                    t = g.Z.getGuild(e);
                return f.Z.can(O.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [A, P] = r.useState(null != i ? i : k),
            [D, z] = r.useState(null),
            [G, L] = r.useState(null),
            [Z, B] = r.useState(""),
            [U, H] = r.useState(null),
            [F, V] = r.useState(() => Date.now()),
            J = r.useRef(0),
            W = r.useRef(0),
            Y = r.useRef(!1),
            K = r.useCallback(
                (e) => {
                    let { reason: t } = e,
                        n = null != D ? D : G;
                    p.default.track(O.rMx.EMOJI_STUDIO_ENDED, {
                        reason: t,
                        is_initial: 0 === J.current,
                        has_image: null != h,
                        error: null == n ? null : String(n),
                        throttled_edit_count: W.current,
                        session_duration_ms: Date.now() - F,
                        has_guild_selected: null != A,
                    });
                },
                [D, G, F, h, A],
            );
        (0, m.zq)(() => {
            Y.current || K({ reason: "closed" });
        });
        let X = r.useCallback(async () => {
                if ((z(null), null == A)) return void z(b.ze.MISSING_GUILD);
                if (null == h || (null == h ? void 0 : h.file) == null || null == U)
                    return void z(b.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, d.rS)({
                        image: U,
                        guildId: A,
                        name: Z,
                        analyticsLocation: { page: O.ZY5.EMOJI_STUDIO },
                    });
                } catch (e) {
                    z((0, C.z)(e)), w.error("Failed to upload emoji.", e);
                    return;
                }
                K({ reason: "uploaded" }),
                    (Y.current = !0),
                    (0, c.Mr3)(b.Hj),
                    (0, v.y)({
                        emoji: e,
                        guildId: A,
                    });
            }, [A, h, U, K, Z]),
            q = r.useCallback(() => {
                K({ reason: "back_button" }), z(null), T(null), H(null), B(""), V(Date.now()), (W.current = 0);
            }, [K]),
            $ = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: l } = e,
                    r = null;
                null != t && _.ZP.isDataTooBig(t) && (r = b.ze.TOO_BIG),
                    z(null != l ? l : r),
                    n < J.current || (null != t && (H(t), (J.current = n)));
            }, []),
            Q = r.useCallback(() => {
                W.current++;
            }, []),
            ee = r.useCallback((e) => {
                var t;
                T(e),
                    B((t) => {
                        var n, l;
                        if ("" !== t) return t;
                        let r = null != (l = null == e || null == (n = e.file) ? void 0 : n.name) ? l : "",
                            i = r.lastIndexOf("."),
                            a = -1 === i ? r : r.substring(0, i);
                        return _.ZP.sanitizeEmojiName(a);
                    }),
                    H(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []);
        return (0, l.jsxs)("main", {
            className: a()(y.main, { [y.checkerboard]: null != h }),
            children: [
                (0, l.jsx)(c.X6q, {
                    variant: "heading-lg/medium",
                    color: "header-primary",
                    className: y.heading,
                    children: S.intl.string(S.t.iMJO39),
                }),
                null == h
                    ? (0, l.jsx)(N.u, { setImage: ee })
                    : (0, l.jsx)("div", {
                          className: y.editor,
                          children: (0, l.jsx)(I.v, {
                              file: h.file,
                              imageUri: h.data,
                              onUpdate: $,
                              onThrottledEdit: Q,
                          }),
                      }),
                (0, l.jsxs)("aside", {
                    className: y.aside,
                    children: [
                        (0, l.jsxs)("div", {
                            className: y.preview,
                            children: [
                                (0, l.jsx)("label", { children: S.intl.string(S.t.JmuIb2) }),
                                (0, l.jsxs)("ul", {
                                    children: [
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsxs)("div", {
                                                className: y.reactions,
                                                children: [
                                                    (0, l.jsx)(R, {
                                                        src: U,
                                                        alt: S.intl.string(S.t["zS0K+v"]),
                                                    }),
                                                    (0, l.jsx)("span", { children: "8" }),
                                                ],
                                            }),
                                        }),
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)("div", {
                                                className: y.jumbo,
                                                children: (0, l.jsx)(R, {
                                                    src: U,
                                                    alt: S.intl.string(S.t["tE41+f"]),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)(c.xJW, {
                            title: S.intl.string(S.t.m0YV7O),
                            required: !0,
                            tag: "label",
                            children: (0, l.jsx)(j.y, {
                                name: Z,
                                onNameChange: B,
                            }),
                        }),
                        (0, l.jsx)(c.xJW, {
                            title: S.intl.string(S.t["9uKafX"]),
                            required: !0,
                            tag: "label",
                            titleId: "guild-selector-label",
                            children: (0, l.jsxs)("div", {
                                className: y.guildSelectorContainer,
                                children: [
                                    (0, l.jsx)(E.q, {
                                        onChange: P,
                                        selected: A,
                                        onError: (e) => L(e),
                                        labelledBy: "guild-selector-label",
                                        isEmojiAnimated: (0, o.v)(null == h || null == (t = h.file) ? void 0 : t.type),
                                    }),
                                    null != G &&
                                        (0, l.jsx)(C.H, {
                                            error: G,
                                            variant: "text-xs/medium",
                                            color: "text-feedback-warning",
                                        }),
                                    null == A &&
                                        (0, l.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-tertiary",
                                            children: S.intl.string(S.t["1pdw0N"]),
                                        }),
                                ],
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: y.foot,
                            children: [
                                null != D &&
                                    (0, l.jsx)(C.H, {
                                        error: D,
                                        variant: "text-sm/normal",
                                        color: "text-danger",
                                    }),
                                (0, l.jsx)(u.zx, {
                                    className: y.submit,
                                    onClick: X,
                                    fullWidth: !0,
                                    disabled: null == h || null == A || Z.length < 2 || null != G,
                                    children: S.intl.string(S.t.DU0dy8),
                                }),
                            ],
                        }),
                    ],
                }),
                null != h
                    ? (0, l.jsx)(M, { back: q })
                    : (0, l.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(b.Hj),
                          className: y.closeButton,
                      }),
            ],
        });
    },
    M = (e) => {
        let { back: t } = e;
        return (0, l.jsx)(u.zx, {
            "aria-label": S.intl.string(S.t["13/7kZ"]),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: y.backButtonInnner,
            className: y.backButton,
            children: (0, l.jsx)(c.j9r, {
                color: "currentColor",
                size: "md",
            }),
        });
    },
    R = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, l.jsx)("div", { className: y.previewPlaceholder })
            : (0, l.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
