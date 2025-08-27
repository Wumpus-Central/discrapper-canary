n.d(t, { I: () => R }), n(388685);
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
    f = n(471613),
    x = n(806774),
    p = n(430824),
    b = n(496675),
    v = n(914010),
    j = n(626135),
    y = n(176354),
    _ = n(598117),
    O = n(390620),
    E = n(983205),
    N = n(457574),
    C = n(903759),
    w = n(746622),
    I = n(384694),
    S = n(273391),
    P = n(981631),
    T = n(388032),
    A = n(342745);
let M = new g.Z("EmojiStudio"),
    R = (e) => {
        var t;
        let { guildId: n } = e,
            i = "userImage" in e ? e.userImage : void 0,
            g = "emoji" in e ? e.emoji : void 0,
            R = !!g,
            [z, G] = l.useState(null != i ? i : null),
            [Z, L] = l.useState(!1),
            U = (0, s.e7)([p.Z, v.Z, b.Z], () => {
                let e = v.Z.getGuildId(),
                    t = p.Z.getGuild(e);
                return b.Z.can(P.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [H, F] = l.useState(null != n ? n : U),
            [B, V] = l.useState(null),
            [W, Y] = l.useState(null),
            [J, K] = l.useState(""),
            [X, q] = l.useState(null),
            [Q, $] = l.useState(() => Date.now()),
            ee = l.useRef(0),
            et = l.useRef(0),
            en = l.useRef(!1);
        l.useEffect(() => {
            if (null == g) return;
            let e = f.Z.getEmojiRawAsset(g.id);
            if (null != e) {
                G(e), q(e.data), K(g.name), L(!1);
                return;
            }
            L(!0),
                (0, N.Q)(g)
                    .then((e) => {
                        G(e), q(e.data), K(g.name), L(!1);
                    })
                    .catch((e) => {
                        M.error("Failed to fetch emoji image", e), V(_.ze.MISSING_IMAGE_DATA), L(!1);
                    });
        }, [g]);
        let er = l.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != B ? B : W;
                j.default.track(P.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ee.current,
                    has_image: null != z,
                    error: null == n ? null : String(n),
                    throttled_edit_count: et.current,
                    session_duration_ms: Date.now() - Q,
                    has_guild_selected: null != H,
                });
            },
            [B, W, Q, z, H],
        );
        (0, h.zq)(() => {
            en.current || er({ reason: "closed" });
        });
        let el = l.useCallback(async () => {
                if ((V(null), null == H)) return void V(_.ze.MISSING_GUILD);
                if (null == z || (null == z ? void 0 : z.file) == null || null == X)
                    return void V(_.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    (e = await (0, m.rS)({
                        image: X,
                        guildId: H,
                        name: J,
                        analyticsLocation: { page: P.ZY5.EMOJI_STUDIO },
                    })),
                        x.MK({
                            emojiId: e.id,
                            userImage: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, z),
                        });
                } catch (e) {
                    V((0, w.z)(e)), M.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != g)
                    try {
                        await (0, m.RE)(H, g.id);
                    } catch (e) {
                        if (429 === e.status)
                            d.Z.show({
                                title: T.intl.string(T.t.iufib2),
                                body: T.intl.string(T.t["Whhv4+"]),
                            });
                        else {
                            V((0, w.z)(e)), M.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                er({ reason: "uploaded" }),
                    (en.current = !0),
                    (0, c.Mr3)(_.Hj),
                    (0, O.y)({
                        emoji: e,
                        guildId: H,
                    });
            }, [H, z, g, X, er, J]),
            ei = l.useCallback(() => {
                er({ reason: "back_button" }), V(null), G(null), q(null), K(""), $(Date.now()), (et.current = 0);
            }, [er]),
            ea = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                null != t && y.ZP.isDataTooBig(t) && (l = _.ze.TOO_BIG),
                    V(null != r ? r : l),
                    n < ee.current || (null != t && (q(t), (ee.current = n)));
            }, []),
            eo = l.useCallback(() => {
                et.current++;
            }, []),
            es = l.useCallback((e) => {
                var t;
                G(e),
                    K((t) => {
                        var n, r;
                        if ("" !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : "",
                            i = l.lastIndexOf("."),
                            a = -1 === i ? l : l.substring(0, i);
                        return y.ZP.sanitizeEmojiName(a);
                    }),
                    q(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []),
            eu = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.iMJO39),
            ec = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.DU0dy8);
        return Z
            ? (0, r.jsxs)("main", {
                  className: A.main,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: A.heading,
                          children: eu,
                      }),
                      (0, r.jsx)("div", { className: A.editor }),
                      (0, r.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(_.Hj),
                          className: A.closeButton,
                      }),
                  ],
              })
            : (0, r.jsxs)("main", {
                  className: a()(A.main, { [A.checkerboard]: null != z }),
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: A.heading,
                          children: eu,
                      }),
                      null == z
                          ? (0, r.jsx)(C.u, { setImage: es })
                          : (0, r.jsx)("div", {
                                className: A.editor,
                                children: (0, r.jsx)(S.v, {
                                    file: z.file,
                                    imageUri: z.data,
                                    onUpdate: ea,
                                    onThrottledEdit: eo,
                                }),
                            }),
                      (0, r.jsxs)("aside", {
                          className: A.aside,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: A.preview,
                                  children: [
                                      (0, r.jsx)("label", { children: T.intl.string(T.t.JmuIb2) }),
                                      (0, r.jsxs)("ul", {
                                          children: [
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsxs)("div", {
                                                      className: A.reactions,
                                                      children: [
                                                          (0, r.jsx)(k, {
                                                              src: X,
                                                              alt: T.intl.string(T.t["zS0K+v"]),
                                                          }),
                                                          (0, r.jsx)("span", { children: "8" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("div", {
                                                      className: A.jumbo,
                                                      children: (0, r.jsx)(k, {
                                                          src: X,
                                                          alt: T.intl.string(T.t["tE41+f"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(c.xJW, {
                                  title: T.intl.string(T.t.m0YV7O),
                                  required: !0,
                                  tag: "label",
                                  children: (0, r.jsx)(E.y, {
                                      name: J,
                                      onNameChange: K,
                                  }),
                              }),
                              R
                                  ? null
                                  : (0, r.jsx)(c.xJW, {
                                        title: T.intl.string(T.t["9uKafX"]),
                                        required: !0,
                                        tag: "label",
                                        titleId: "guild-selector-label",
                                        children: (0, r.jsxs)("div", {
                                            className: A.guildSelectorContainer,
                                            children: [
                                                (0, r.jsx)(I.q, {
                                                    onChange: F,
                                                    selected: H,
                                                    onError: (e) => Y(e),
                                                    labelledBy: "guild-selector-label",
                                                    isEmojiAnimated: (0, o.v)(
                                                        null == z || null == (t = z.file) ? void 0 : t.type,
                                                    ),
                                                }),
                                                null != W &&
                                                    (0, r.jsx)(w.H, {
                                                        error: W,
                                                        variant: "text-xs/medium",
                                                        color: "text-feedback-warning",
                                                    }),
                                                null == H &&
                                                    (0, r.jsx)(c.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-tertiary",
                                                        children: T.intl.string(T.t["1pdw0N"]),
                                                    }),
                                            ],
                                        }),
                                    }),
                              (0, r.jsxs)("div", {
                                  className: A.foot,
                                  children: [
                                      null != B &&
                                          (0, r.jsx)(w.H, {
                                              error: B,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, r.jsx)(u.zx, {
                                          className: A.submit,
                                          onClick: el,
                                          fullWidth: !0,
                                          disabled: null == z || null == H || J.length < 2 || null != W,
                                          children: ec,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      null != z
                          ? (0, r.jsx)(D, { back: ei })
                          : (0, r.jsx)(c.olH, {
                                onClick: () => (0, c.Mr3)(_.Hj),
                                className: A.closeButton,
                            }),
                  ],
              });
    },
    D = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            "aria-label": T.intl.string(T.t["13/7kZ"]),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: A.backButtonInnner,
            className: A.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: "currentColor",
                size: "md",
            }),
        });
    },
    k = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, r.jsx)("div", { className: A.previewPlaceholder })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
