n.d(t, { I: () => A }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(33309),
    s = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(668781),
    m = n(80932),
    h = n(493773),
    g = n(710845),
    f = n(430824),
    x = n(496675),
    p = n(914010),
    b = n(626135),
    v = n(176354),
    j = n(598117),
    _ = n(390620),
    y = n(983205),
    O = n(457574),
    E = n(903759),
    N = n(746622),
    C = n(384694),
    I = n(273391),
    w = n(981631),
    S = n(388032),
    T = n(342745);
let P = new g.Z("EmojiStudio"),
    A = (e) => {
        var t;
        let { guildId: n } = e,
            i = "userImage" in e ? e.userImage : void 0,
            g = "emoji" in e ? e.emoji : void 0,
            A = !!g,
            [D, k] = l.useState(null != i ? i : null),
            [z, G] = l.useState(!1),
            Z = (0, s.e7)([f.Z, p.Z, x.Z], () => {
                let e = p.Z.getGuildId(),
                    t = f.Z.getGuild(e);
                return x.Z.can(w.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [L, U] = l.useState(null != n ? n : Z),
            [H, F] = l.useState(null),
            [B, V] = l.useState(null),
            [W, Y] = l.useState(""),
            [J, K] = l.useState(null),
            [X, q] = l.useState(() => Date.now()),
            Q = l.useRef(0),
            $ = l.useRef(0),
            ee = l.useRef(!1);
        l.useEffect(() => {
            null != g &&
                (G(!0),
                (0, O.Q)(g)
                    .then((e) => {
                        k(e), K(e.data), Y(g.name), G(!1);
                    })
                    .catch((e) => {
                        P.error("Failed to fetch emoji image", e), F(j.ze.MISSING_IMAGE_DATA), G(!1);
                    }));
        }, [g]);
        let et = l.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != H ? H : B;
                b.default.track(w.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === Q.current,
                    has_image: null != D,
                    error: null == n ? null : String(n),
                    throttled_edit_count: $.current,
                    session_duration_ms: Date.now() - X,
                    has_guild_selected: null != L,
                });
            },
            [H, B, X, D, L],
        );
        (0, h.zq)(() => {
            ee.current || et({ reason: "closed" });
        });
        let en = l.useCallback(async () => {
                if ((F(null), null == L)) return void F(j.ze.MISSING_GUILD);
                if (null == D || (null == D ? void 0 : D.file) == null || null == J)
                    return void F(j.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, m.rS)({
                        image: J,
                        guildId: L,
                        name: W,
                        analyticsLocation: { page: w.ZY5.EMOJI_STUDIO },
                    });
                } catch (e) {
                    F((0, N.z)(e)), P.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != g)
                    try {
                        await (0, m.RE)(L, g.id);
                    } catch (e) {
                        if (429 === e.status)
                            d.Z.show({
                                title: S.intl.string(S.t.iufib2),
                                body: S.intl.string(S.t["Whhv4+"]),
                            });
                        else {
                            F((0, N.z)(e)), P.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                et({ reason: "uploaded" }),
                    (ee.current = !0),
                    (0, c.Mr3)(j.Hj),
                    (0, _.y)({
                        emoji: e,
                        guildId: L,
                    });
            }, [L, D, g, J, et, W]),
            er = l.useCallback(() => {
                et({ reason: "back_button" }), F(null), k(null), K(null), Y(""), q(Date.now()), ($.current = 0);
            }, [et]),
            el = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                null != t && v.ZP.isDataTooBig(t) && (l = j.ze.TOO_BIG),
                    F(null != r ? r : l),
                    n < Q.current || (null != t && (K(t), (Q.current = n)));
            }, []),
            ei = l.useCallback(() => {
                $.current++;
            }, []),
            ea = l.useCallback((e) => {
                var t;
                k(e),
                    Y((t) => {
                        var n, r;
                        if ("" !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : "",
                            i = l.lastIndexOf("."),
                            a = -1 === i ? l : l.substring(0, i);
                        return v.ZP.sanitizeEmojiName(a);
                    }),
                    K(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []),
            eo = A ? S.intl.string(S.t.FOYn8f) : S.intl.string(S.t.iMJO39),
            es = A ? S.intl.string(S.t.FOYn8f) : S.intl.string(S.t.DU0dy8);
        return z
            ? (0, r.jsxs)("main", {
                  className: T.main,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: T.heading,
                          children: eo,
                      }),
                      (0, r.jsx)("div", { className: T.editor }),
                      (0, r.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(j.Hj),
                          className: T.closeButton,
                      }),
                  ],
              })
            : (0, r.jsxs)("main", {
                  className: a()(T.main, { [T.checkerboard]: null != D }),
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: T.heading,
                          children: eo,
                      }),
                      null == D
                          ? (0, r.jsx)(E.u, { setImage: ea })
                          : (0, r.jsx)("div", {
                                className: T.editor,
                                children: (0, r.jsx)(I.v, {
                                    file: D.file,
                                    imageUri: D.data,
                                    onUpdate: el,
                                    onThrottledEdit: ei,
                                }),
                            }),
                      (0, r.jsxs)("aside", {
                          className: T.aside,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: T.preview,
                                  children: [
                                      (0, r.jsx)("label", { children: S.intl.string(S.t.JmuIb2) }),
                                      (0, r.jsxs)("ul", {
                                          children: [
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsxs)("div", {
                                                      className: T.reactions,
                                                      children: [
                                                          (0, r.jsx)(R, {
                                                              src: J,
                                                              alt: S.intl.string(S.t["zS0K+v"]),
                                                          }),
                                                          (0, r.jsx)("span", { children: "8" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("div", {
                                                      className: T.jumbo,
                                                      children: (0, r.jsx)(R, {
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
                                  children: (0, r.jsx)(y.y, {
                                      name: W,
                                      onNameChange: Y,
                                  }),
                              }),
                              A
                                  ? null
                                  : (0, r.jsx)(c.xJW, {
                                        title: S.intl.string(S.t["9uKafX"]),
                                        required: !0,
                                        tag: "label",
                                        titleId: "guild-selector-label",
                                        children: (0, r.jsxs)("div", {
                                            className: T.guildSelectorContainer,
                                            children: [
                                                (0, r.jsx)(C.q, {
                                                    onChange: U,
                                                    selected: L,
                                                    onError: (e) => V(e),
                                                    labelledBy: "guild-selector-label",
                                                    isEmojiAnimated: (0, o.v)(
                                                        null == D || null == (t = D.file) ? void 0 : t.type,
                                                    ),
                                                }),
                                                null != B &&
                                                    (0, r.jsx)(N.H, {
                                                        error: B,
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
                                  className: T.foot,
                                  children: [
                                      null != H &&
                                          (0, r.jsx)(N.H, {
                                              error: H,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, r.jsx)(u.zx, {
                                          className: T.submit,
                                          onClick: en,
                                          fullWidth: !0,
                                          disabled: null == D || null == L || W.length < 2 || null != B,
                                          children: es,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      null != D
                          ? (0, r.jsx)(M, { back: er })
                          : (0, r.jsx)(c.olH, {
                                onClick: () => (0, c.Mr3)(j.Hj),
                                className: T.closeButton,
                            }),
                  ],
              });
    },
    M = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            "aria-label": S.intl.string(S.t["13/7kZ"]),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: T.backButtonInnner,
            className: T.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: "currentColor",
                size: "md",
            }),
        });
    },
    R = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, r.jsx)("div", { className: T.previewPlaceholder })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
