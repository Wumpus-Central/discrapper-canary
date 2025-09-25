n.d(t, { I: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(33309),
    o = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(668781),
    h = n(80932),
    m = n(493773),
    g = n(710845),
    p = n(471613),
    f = n(806774),
    v = n(430824),
    x = n(496675),
    b = n(914010),
    j = n(626135),
    O = n(176354),
    _ = n(598117),
    y = n(390620),
    E = n(983205),
    N = n(457574),
    w = n(903759),
    D = n(746622),
    C = n(384694),
    I = n(273391),
    S = n(981631),
    T = n(388032),
    P = n(176898);
let A = new g.Z("EmojiStudio");
function M(e) {
    var t, n;
    if (null == e) return "";
    let r = null != (n = null == e || null == (t = e.file) ? void 0 : t.name) ? n : "",
        i = r.lastIndexOf("."),
        l = -1 === i ? r : r.substring(0, i);
    return O.ZP.sanitizeEmojiName(l);
}
let R = (e) => {
        var t;
        let { guildId: n } = e,
            l = "userImage" in e ? e.userImage : void 0,
            g = "emoji" in e ? e.emoji : void 0,
            R = !!g,
            [L, z] = i.useState(null != l ? l : null),
            [G, U] = i.useState(!1),
            F = (0, o.e7)([v.Z, b.Z, x.Z], () => {
                let e = b.Z.getGuildId(),
                    t = v.Z.getGuild(e);
                return x.Z.can(S.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [W, B] = i.useState(null != n ? n : F),
            [H, V] = i.useState(null),
            [J, Y] = i.useState(null),
            [K, X] = i.useState(M(L)),
            [q, $] = i.useState(null),
            [Q, ee] = i.useState(() => Date.now()),
            et = i.useRef(0),
            en = i.useRef(0),
            er = i.useRef(!1);
        i.useEffect(() => {
            if (null == g) return;
            let e = p.Z.getEmojiRawAsset(g.id);
            if (null != e) {
                z(e), $(e.data), X(g.name), U(!1);
                return;
            }
            U(!0),
                (0, N.Q)(g)
                    .then((e) => {
                        z(e), $(e.data), X(g.name), U(!1);
                    })
                    .catch((e) => {
                        A.error("Failed to fetch emoji image", e), V(_.ze.MISSING_IMAGE_DATA), U(!1);
                    });
        }, [g]);
        let ei = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != H ? H : J;
                j.default.track(S.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === et.current,
                    has_image: null != L,
                    error: null == n ? null : String(n),
                    throttled_edit_count: en.current,
                    session_duration_ms: Date.now() - Q,
                    has_guild_selected: null != W,
                });
            },
            [H, J, Q, L, W],
        );
        (0, m.zq)(() => {
            er.current || ei({ reason: "closed" });
        });
        let el = i.useCallback(async () => {
                if ((V(null), null == W)) return void V(_.ze.MISSING_GUILD);
                if (null == L || (null == L ? void 0 : L.file) == null || null == q)
                    return void V(_.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    (e = await (0, h.rS)({
                        image: q,
                        guildId: W,
                        name: K,
                        analyticsLocation: { page: S.ZY5.EMOJI_STUDIO },
                    })),
                        f.MK({
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
                            })({}, L),
                        });
                } catch (e) {
                    V((0, D.zg)(e)), A.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != g)
                    try {
                        await (0, h.RE)(W, g.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            d.Z.show({
                                title: T.intl.string(T.t.iufib2),
                                body: T.intl.string(T.t["Whhv4+"]),
                            });
                        else {
                            V((0, D.zg)(e)), A.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                ei({ reason: "uploaded" }),
                    (er.current = !0),
                    (0, c.Mr3)(_.Hj),
                    (0, y.y)({
                        emoji: e,
                        guildId: W,
                    });
            }, [W, L, g, q, ei, K]),
            ea = i.useCallback(() => {
                ei({ reason: "back_button" }), V(null), z(null), $(null), X(""), ee(Date.now()), (en.current = 0);
            }, [ei]),
            es = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    i = null;
                null != t && O.ZP.isDataTooBig(t) && (i = _.ze.TOO_BIG),
                    V(null != r ? r : i),
                    n < et.current || (null != t && ($(t), (et.current = n)));
            }, []),
            eo = i.useCallback(() => {
                en.current++;
            }, []),
            eu = i.useCallback((e) => {
                var t;
                z(e), X((t) => ("" !== t ? t : M(e))), $(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []),
            ec = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.iMJO39),
            ed = R ? T.intl.string(T.t.FOYn8f) : T.intl.string(T.t.DU0dy8);
        return G
            ? (0, r.jsxs)("main", {
                  className: P.main,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: P.heading,
                          children: ec,
                      }),
                      (0, r.jsx)("div", { className: P.editor }),
                      (0, r.jsx)("div", {
                          className: P.closeButton,
                          children: (0, r.jsx)(c.PZ7, {
                              size: "sm",
                              onClick: () => (0, c.Mr3)(_.Hj),
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)("main", {
                  className: a()(P.main, { [P.checkerboard]: null != L }),
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: P.heading,
                          children: ec,
                      }),
                      null == L
                          ? (0, r.jsx)(w.u, { setImage: eu })
                          : (0, r.jsx)("div", {
                                className: P.editor,
                                children: (0, r.jsx)(I.v, {
                                    file: L.file,
                                    imageUri: L.data,
                                    onUpdate: es,
                                    onThrottledEdit: eo,
                                }),
                            }),
                      (0, r.jsxs)("aside", {
                          className: P.aside,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: P.preview,
                                  children: [
                                      (0, r.jsx)("label", { children: T.intl.string(T.t.JmuIb2) }),
                                      (0, r.jsxs)("ul", {
                                          children: [
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsxs)("div", {
                                                      className: P.reactions,
                                                      children: [
                                                          (0, r.jsx)(Z, {
                                                              src: q,
                                                              alt: T.intl.string(T.t["zS0K+v"]),
                                                          }),
                                                          (0, r.jsx)("span", { children: "8" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("div", {
                                                      className: P.jumbo,
                                                      children: (0, r.jsx)(Z, {
                                                          src: q,
                                                          alt: T.intl.string(T.t["tE41+f"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children: (0, r.jsx)(E.y, {
                                      label: T.intl.string(T.t.m0YV7O),
                                      name: K,
                                      onNameChange: X,
                                  }),
                              }),
                              R
                                  ? null
                                  : (0, r.jsx)("div", {
                                        children: (0, r.jsx)(C.q, {
                                            label: T.intl.string(T.t["9uKafX"]),
                                            required: !0,
                                            helperText: null == W ? T.intl.string(T.t["1pdw0N"]) : void 0,
                                            onChange: B,
                                            selected: W,
                                            onError: (e) => Y(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, s.v)(
                                                null == L || null == (t = L.file) ? void 0 : t.type,
                                            ),
                                            errorMessage: null != J ? (0, D.e$)(J) : void 0,
                                        }),
                                    }),
                              (0, r.jsxs)("div", {
                                  className: P.foot,
                                  children: [
                                      null != H &&
                                          (0, r.jsx)(D.H4, {
                                              error: H,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, r.jsx)(u.zx, {
                                          className: P.submit,
                                          onClick: el,
                                          fullWidth: !0,
                                          disabled: null == L || null == W || K.length < 2 || null != J,
                                          children: ed,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      null != L
                          ? (0, r.jsx)(k, { back: ea })
                          : (0, r.jsx)("div", {
                                className: P.closeButton,
                                children: (0, r.jsx)(c.PZ7, {
                                    size: "sm",
                                    onClick: () => (0, c.Mr3)(_.Hj),
                                }),
                            }),
                  ],
              });
    },
    k = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            "aria-label": T.intl.string(T.t["13/7kZ"]),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: P.backButtonInnner,
            className: P.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: "currentColor",
                size: "md",
            }),
        });
    },
    Z = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, r.jsx)("div", { className: P.previewPlaceholder })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
