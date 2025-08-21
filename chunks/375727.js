n.d(t, { I: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(33309),
    s = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(80932),
    m = n(493773),
    f = n(710845),
    g = n(430824),
    h = n(496675),
    x = n(914010),
    p = n(626135),
    b = n(176354),
    v = n(598117),
    j = n(390620),
    _ = n(983205),
    N = n(457574),
    E = n(903759),
    O = n(746622),
    C = n(384694),
    I = n(273391),
    y = n(981631),
    S = n(388032),
    w = n(342745);
let T = new f.Z("EmojiStudio"),
    P = (e) => {
        var t;
        let { guildId: n } = e,
            i = "userImage" in e ? e.userImage : void 0,
            f = "emoji" in e ? e.emoji : void 0,
            P = !!f,
            [R, k] = l.useState(null != i ? i : null),
            [D, z] = l.useState(!1),
            G = (0, s.e7)([g.Z, x.Z, h.Z], () => {
                let e = x.Z.getGuildId(),
                    t = g.Z.getGuild(e);
                return h.Z.can(y.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [L, Z] = l.useState(null != n ? n : G),
            [U, B] = l.useState(null),
            [F, H] = l.useState(null),
            [V, Y] = l.useState(""),
            [J, W] = l.useState(null),
            [K, X] = l.useState(() => Date.now()),
            q = l.useRef(0),
            Q = l.useRef(0),
            $ = l.useRef(!1);
        l.useEffect(() => {
            null != f &&
                (z(!0),
                (0, N.Q)(f)
                    .then((e) => {
                        k(e), W(e.data), Y(f.name), z(!1);
                    })
                    .catch((e) => {
                        T.error("Failed to fetch emoji image", e), B(v.ze.MISSING_IMAGE_DATA), z(!1);
                    }));
        }, [f]);
        let ee = l.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != U ? U : F;
                p.default.track(y.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === q.current,
                    has_image: null != R,
                    error: null == n ? null : String(n),
                    throttled_edit_count: Q.current,
                    session_duration_ms: Date.now() - K,
                    has_guild_selected: null != L,
                });
            },
            [U, F, K, R, L],
        );
        (0, m.zq)(() => {
            $.current || ee({ reason: "closed" });
        });
        let et = l.useCallback(async () => {
                if ((B(null), null == L)) return void B(v.ze.MISSING_GUILD);
                if (null == R || (null == R ? void 0 : R.file) == null || null == J)
                    return void B(v.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, d.rS)({
                        image: J,
                        guildId: L,
                        name: V,
                        analyticsLocation: { page: y.ZY5.EMOJI_STUDIO },
                    });
                } catch (e) {
                    B((0, O.z)(e)), T.error("Failed to upload emoji.", e);
                    return;
                }
                ee({ reason: "uploaded" }),
                    ($.current = !0),
                    (0, c.Mr3)(v.Hj),
                    (0, j.y)({
                        emoji: e,
                        guildId: L,
                    });
            }, [L, R, J, ee, V]),
            en = l.useCallback(() => {
                ee({ reason: "back_button" }), B(null), k(null), W(null), Y(""), X(Date.now()), (Q.current = 0);
            }, [ee]),
            er = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                null != t && b.ZP.isDataTooBig(t) && (l = v.ze.TOO_BIG),
                    B(null != r ? r : l),
                    n < q.current || (null != t && (W(t), (q.current = n)));
            }, []),
            el = l.useCallback(() => {
                Q.current++;
            }, []),
            ei = l.useCallback((e) => {
                var t;
                k(e),
                    Y((t) => {
                        var n, r;
                        if ("" !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : "",
                            i = l.lastIndexOf("."),
                            a = -1 === i ? l : l.substring(0, i);
                        return b.ZP.sanitizeEmojiName(a);
                    }),
                    W(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []),
            ea = P ? S.intl.string(S.t.FOYn8f) : S.intl.string(S.t.iMJO39),
            eo = P ? S.intl.string(S.t.FOYn8f) : S.intl.string(S.t.DU0dy8);
        return D
            ? (0, r.jsxs)("main", {
                  className: w.main,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: w.heading,
                          children: ea,
                      }),
                      (0, r.jsx)("div", { className: w.editor }),
                      (0, r.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(v.Hj),
                          className: w.closeButton,
                      }),
                  ],
              })
            : (0, r.jsxs)("main", {
                  className: a()(w.main, { [w.checkerboard]: null != R }),
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: w.heading,
                          children: ea,
                      }),
                      null == R
                          ? (0, r.jsx)(E.u, { setImage: ei })
                          : (0, r.jsx)("div", {
                                className: w.editor,
                                children: (0, r.jsx)(I.v, {
                                    file: R.file,
                                    imageUri: R.data,
                                    onUpdate: er,
                                    onThrottledEdit: el,
                                }),
                            }),
                      (0, r.jsxs)("aside", {
                          className: w.aside,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: w.preview,
                                  children: [
                                      (0, r.jsx)("label", { children: S.intl.string(S.t.JmuIb2) }),
                                      (0, r.jsxs)("ul", {
                                          children: [
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsxs)("div", {
                                                      className: w.reactions,
                                                      children: [
                                                          (0, r.jsx)(M, {
                                                              src: J,
                                                              alt: S.intl.string(S.t["zS0K+v"]),
                                                          }),
                                                          (0, r.jsx)("span", { children: "8" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("div", {
                                                      className: w.jumbo,
                                                      children: (0, r.jsx)(M, {
                                                          src: J,
                                                          alt: S.intl.string(S.t["tE41+f"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(c.xJW, {
                                  title: S.intl.string(S.t.m0YV7O),
                                  required: !0,
                                  tag: "label",
                                  children: (0, r.jsx)(_.y, {
                                      name: V,
                                      onNameChange: Y,
                                  }),
                              }),
                              P
                                  ? null
                                  : (0, r.jsx)(c.xJW, {
                                        title: S.intl.string(S.t["9uKafX"]),
                                        required: !0,
                                        tag: "label",
                                        titleId: "guild-selector-label",
                                        children: (0, r.jsxs)("div", {
                                            className: w.guildSelectorContainer,
                                            children: [
                                                (0, r.jsx)(C.q, {
                                                    onChange: Z,
                                                    selected: L,
                                                    onError: (e) => H(e),
                                                    labelledBy: "guild-selector-label",
                                                    isEmojiAnimated: (0, o.v)(
                                                        null == R || null == (t = R.file) ? void 0 : t.type,
                                                    ),
                                                }),
                                                null != F &&
                                                    (0, r.jsx)(O.H, {
                                                        error: F,
                                                        variant: "text-xs/medium",
                                                        color: "text-feedback-warning",
                                                    }),
                                                null == L &&
                                                    (0, r.jsx)(c.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-tertiary",
                                                        children: S.intl.string(S.t["1pdw0N"]),
                                                    }),
                                            ],
                                        }),
                                    }),
                              (0, r.jsxs)("div", {
                                  className: w.foot,
                                  children: [
                                      null != U &&
                                          (0, r.jsx)(O.H, {
                                              error: U,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, r.jsx)(u.zx, {
                                          className: w.submit,
                                          onClick: et,
                                          fullWidth: !0,
                                          disabled: null == R || null == L || V.length < 2 || null != F,
                                          children: eo,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      null != R
                          ? (0, r.jsx)(A, { back: en })
                          : (0, r.jsx)(c.olH, {
                                onClick: () => (0, c.Mr3)(v.Hj),
                                className: w.closeButton,
                            }),
                  ],
              });
    },
    A = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            "aria-label": S.intl.string(S.t["13/7kZ"]),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: w.backButtonInnner,
            className: w.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: "currentColor",
                size: "md",
            }),
        });
    },
    M = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, r.jsx)("div", { className: w.previewPlaceholder })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
