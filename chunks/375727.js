n.d(t, { I: () => T }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(33309),
    o = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(80932),
    m = n(493773),
    h = n(710845),
    g = n(430824),
    p = n(496675),
    f = n(914010),
    v = n(626135),
    x = n(176354),
    b = n(598117),
    _ = n(390620),
    j = n(983205),
    O = n(457574),
    E = n(903759),
    N = n(746622),
    y = n(384694),
    D = n(273391),
    C = n(981631),
    I = n(388032),
    w = n(342745);
let S = new h.Z("EmojiStudio"),
    T = (e) => {
        var t;
        let { guildId: n } = e,
            a = "userImage" in e ? e.userImage : void 0,
            h = "emoji" in e ? e.emoji : void 0,
            [T, k] = l.useState(null != a ? a : null),
            [P, R] = l.useState(!1),
            L = (0, o.e7)([g.Z, f.Z, p.Z], () => {
                let e = f.Z.getGuildId(),
                    t = g.Z.getGuild(e);
                return p.Z.can(C.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [Z, z] = l.useState(null != n ? n : L),
            [G, U] = l.useState(null),
            [F, B] = l.useState(null),
            [W, H] = l.useState(""),
            [V, J] = l.useState(null),
            [Y, K] = l.useState(() => Date.now()),
            X = l.useRef(0),
            q = l.useRef(0),
            Q = l.useRef(!1);
        l.useEffect(() => {
            null != h &&
                (R(!0),
                (0, O.Q)(h)
                    .then((e) => {
                        k(e), J(e.data), H(h.name), R(!1);
                    })
                    .catch((e) => {
                        S.error("Failed to fetch emoji image", e), U(b.ze.MISSING_IMAGE_DATA), R(!1);
                    }));
        }, [h]);
        let $ = l.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != G ? G : F;
                v.default.track(C.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === X.current,
                    has_image: null != T,
                    error: null == n ? null : String(n),
                    throttled_edit_count: q.current,
                    session_duration_ms: Date.now() - Y,
                    has_guild_selected: null != Z,
                });
            },
            [G, F, Y, T, Z],
        );
        (0, m.zq)(() => {
            Q.current || $({ reason: "closed" });
        });
        let ee = l.useCallback(async () => {
                if ((U(null), null == Z)) return void U(b.ze.MISSING_GUILD);
                if (null == T || (null == T ? void 0 : T.file) == null || null == V)
                    return void U(b.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, d.rS)({
                        image: V,
                        guildId: Z,
                        name: W,
                        analyticsLocation: { page: C.ZY5.EMOJI_STUDIO },
                    });
                } catch (e) {
                    U((0, N.z)(e)), S.error("Failed to upload emoji.", e);
                    return;
                }
                $({ reason: "uploaded" }),
                    (Q.current = !0),
                    (0, c.Mr3)(b.Hj),
                    (0, _.y)({
                        emoji: e,
                        guildId: Z,
                    });
            }, [Z, T, V, $, W]),
            et = l.useCallback(() => {
                $({ reason: "back_button" }), U(null), k(null), J(null), H(""), K(Date.now()), (q.current = 0);
            }, [$]),
            en = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                null != t && x.ZP.isDataTooBig(t) && (l = b.ze.TOO_BIG),
                    U(null != r ? r : l),
                    n < X.current || (null != t && (J(t), (X.current = n)));
            }, []),
            er = l.useCallback(() => {
                q.current++;
            }, []),
            el = l.useCallback((e) => {
                var t;
                k(e),
                    H((t) => {
                        var n, r;
                        if ("" !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : "",
                            a = l.lastIndexOf("."),
                            i = -1 === a ? l : l.substring(0, a);
                        return x.ZP.sanitizeEmojiName(i);
                    }),
                    J(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []),
            ea = null == h ? I.intl.string(I.t.iMJO39) : I.intl.string(I.t.FOYn8f);
        return P
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
                          onClick: () => (0, c.Mr3)(b.Hj),
                          className: w.closeButton,
                      }),
                  ],
              })
            : (0, r.jsxs)("main", {
                  className: i()(w.main, { [w.checkerboard]: null != T }),
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: w.heading,
                          children: ea,
                      }),
                      null == T
                          ? (0, r.jsx)(E.u, { setImage: el })
                          : (0, r.jsx)("div", {
                                className: w.editor,
                                children: (0, r.jsx)(D.v, {
                                    file: T.file,
                                    imageUri: T.data,
                                    onUpdate: en,
                                    onThrottledEdit: er,
                                }),
                            }),
                      (0, r.jsxs)("aside", {
                          className: w.aside,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: w.preview,
                                  children: [
                                      (0, r.jsx)("label", { children: I.intl.string(I.t.JmuIb2) }),
                                      (0, r.jsxs)("ul", {
                                          children: [
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsxs)("div", {
                                                      className: w.reactions,
                                                      children: [
                                                          (0, r.jsx)(M, {
                                                              src: V,
                                                              alt: I.intl.string(I.t["zS0K+v"]),
                                                          }),
                                                          (0, r.jsx)("span", { children: "8" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("div", {
                                                      className: w.jumbo,
                                                      children: (0, r.jsx)(M, {
                                                          src: V,
                                                          alt: I.intl.string(I.t["tE41+f"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(c.xJW, {
                                  title: I.intl.string(I.t.m0YV7O),
                                  required: !0,
                                  tag: "label",
                                  children: (0, r.jsx)(j.y, {
                                      name: W,
                                      onNameChange: H,
                                  }),
                              }),
                              (0, r.jsx)(c.xJW, {
                                  title: I.intl.string(I.t["9uKafX"]),
                                  required: !0,
                                  tag: "label",
                                  titleId: "guild-selector-label",
                                  children: (0, r.jsxs)("div", {
                                      className: w.guildSelectorContainer,
                                      children: [
                                          (0, r.jsx)(y.q, {
                                              onChange: z,
                                              selected: Z,
                                              onError: (e) => B(e),
                                              labelledBy: "guild-selector-label",
                                              isEmojiAnimated: (0, s.v)(
                                                  null == T || null == (t = T.file) ? void 0 : t.type,
                                              ),
                                          }),
                                          null != F &&
                                              (0, r.jsx)(N.H, {
                                                  error: F,
                                                  variant: "text-xs/medium",
                                                  color: "text-feedback-warning",
                                              }),
                                          null == Z &&
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-tertiary",
                                                  children: I.intl.string(I.t["1pdw0N"]),
                                              }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: w.foot,
                                  children: [
                                      null != G &&
                                          (0, r.jsx)(N.H, {
                                              error: G,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, r.jsx)(u.zx, {
                                          className: w.submit,
                                          onClick: ee,
                                          fullWidth: !0,
                                          disabled: null == T || null == Z || W.length < 2 || null != F,
                                          children: I.intl.string(I.t.DU0dy8),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      null != T
                          ? (0, r.jsx)(A, { back: et })
                          : (0, r.jsx)(c.olH, {
                                onClick: () => (0, c.Mr3)(b.Hj),
                                className: w.closeButton,
                            }),
                  ],
              });
    },
    A = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            "aria-label": I.intl.string(I.t["13/7kZ"]),
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
