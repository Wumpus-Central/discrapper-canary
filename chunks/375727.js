n.d(t, { I: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(33309),
    o = n(442837),
    u = n(481060),
    c = n(668781),
    d = n(80932),
    h = n(493773),
    m = n(710845),
    g = n(471613),
    p = n(806774),
    f = n(430824),
    v = n(496675),
    x = n(914010),
    b = n(626135),
    j = n(176354),
    _ = n(598117),
    O = n(390620),
    y = n(983205),
    E = n(457574),
    D = n(903759),
    w = n(746622),
    N = n(384694),
    C = n(273391),
    I = n(981631),
    S = n(388032),
    T = n(342745);
let M = new m.Z("EmojiStudio");
function A(e) {
    var t, n;
    if (null == e) return "";
    let r = null != (n = null == e || null == (t = e.file) ? void 0 : t.name) ? n : "",
        i = r.lastIndexOf("."),
        l = -1 === i ? r : r.substring(0, i);
    return j.ZP.sanitizeEmojiName(l);
}
let P = (e) => {
        var t;
        let { guildId: n } = e,
            l = "userImage" in e ? e.userImage : void 0,
            m = "emoji" in e ? e.emoji : void 0,
            P = !!m,
            [Z, L] = i.useState(null != l ? l : null),
            [G, z] = i.useState(!1),
            U = (0, o.e7)([f.Z, x.Z, v.Z], () => {
                let e = x.Z.getGuildId(),
                    t = f.Z.getGuild(e);
                return v.Z.can(I.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [F, W] = i.useState(null != n ? n : U),
            [H, B] = i.useState(null),
            [V, J] = i.useState(null),
            [Y, K] = i.useState(A(Z)),
            [X, q] = i.useState(null),
            [$, Q] = i.useState(() => Date.now()),
            ee = i.useRef(0),
            et = i.useRef(0),
            en = i.useRef(!1);
        i.useEffect(() => {
            if (null == m) return;
            let e = g.Z.getEmojiRawAsset(m.id);
            if (null != e) {
                L(e), q(e.data), K(m.name), z(!1);
                return;
            }
            z(!0),
                (0, E.Q)(m)
                    .then((e) => {
                        L(e), q(e.data), K(m.name), z(!1);
                    })
                    .catch((e) => {
                        M.error("Failed to fetch emoji image", e), B(_.ze.MISSING_IMAGE_DATA), z(!1);
                    });
        }, [m]);
        let er = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != H ? H : V;
                b.default.track(I.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ee.current,
                    has_image: null != Z,
                    error: null == n ? null : String(n),
                    throttled_edit_count: et.current,
                    session_duration_ms: Date.now() - $,
                    has_guild_selected: null != F,
                });
            },
            [H, V, $, Z, F],
        );
        (0, h.zq)(() => {
            en.current || er({ reason: "closed" });
        });
        let ei = i.useCallback(async () => {
                if ((B(null), null == F)) return void B(_.ze.MISSING_GUILD);
                if (null == Z || (null == Z ? void 0 : Z.file) == null || null == X)
                    return void B(_.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    (e = await (0, d.rS)({
                        image: X,
                        guildId: F,
                        name: Y,
                        analyticsLocation: { page: I.ZY5.EMOJI_STUDIO },
                    })),
                        p.MK({
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
                            })({}, Z),
                        });
                } catch (e) {
                    B((0, w.zg)(e)), M.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != m)
                    try {
                        await (0, d.RE)(F, m.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            c.Z.show({
                                title: S.intl.string(S.t.iufib1),
                                body: S.intl.string(S.t.Whhv4w),
                            });
                        else {
                            B((0, w.zg)(e)), M.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                er({ reason: "uploaded" }),
                    (en.current = !0),
                    (0, u.Mr3)(_.Hj),
                    (0, O.y)({
                        emoji: e,
                        guildId: F,
                    });
            }, [F, Z, m, X, er, Y]),
            el = i.useCallback(() => {
                er({ reason: "back_button" }), B(null), L(null), q(null), K(""), Q(Date.now()), (et.current = 0);
            }, [er]),
            ea = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    i = null;
                null != t && j.ZP.isDataTooBig(t) && (i = _.ze.TOO_BIG),
                    B(null != r ? r : i),
                    n < ee.current || (null != t && (q(t), (ee.current = n)));
            }, []),
            es = i.useCallback(() => {
                et.current++;
            }, []),
            eo = i.useCallback((e) => {
                var t;
                L(e), K((t) => ("" !== t ? t : A(e))), q(null != (t = null == e ? void 0 : e.data) ? t : null);
            }, []),
            eu = P ? S.intl.string(S.t.FOYn8U) : S.intl.string(S.t.iMJO37),
            ec = P ? S.intl.string(S.t.FOYn8U) : S.intl.string(S.t["DU0dy/"]);
        return G
            ? (0, r.jsxs)("main", {
                  className: T.main,
                  children: [
                      (0, r.jsx)(u.Heading, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: T.heading,
                          children: eu,
                      }),
                      (0, r.jsx)("div", { className: T.editor }),
                      (0, r.jsx)("div", {
                          className: T.closeButton,
                          children: (0, r.jsx)(u.PZ7, {
                              size: "md",
                              onClick: () => (0, u.Mr3)(_.Hj),
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)("main", {
                  className: a()(T.main, { [T.checkerboard]: null != Z }),
                  children: [
                      (0, r.jsx)(u.Heading, {
                          variant: "heading-lg/medium",
                          color: "header-primary",
                          className: T.heading,
                          children: eu,
                      }),
                      null == Z
                          ? (0, r.jsx)(D.u, { setImage: eo })
                          : (0, r.jsx)("div", {
                                className: T.editor,
                                children: (0, r.jsx)(C.v, {
                                    file: Z.file,
                                    imageUri: Z.data,
                                    onUpdate: ea,
                                    onThrottledEdit: es,
                                }),
                            }),
                      (0, r.jsxs)("aside", {
                          className: T.aside,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: T.preview,
                                  children: [
                                      (0, r.jsx)("label", { children: S.intl.string(S.t.JmuIb5) }),
                                      (0, r.jsxs)("ul", {
                                          children: [
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsxs)("div", {
                                                      className: T.reactions,
                                                      children: [
                                                          (0, r.jsx)(k, {
                                                              src: X,
                                                              alt: S.intl.string(S.t["zS0K+s"]),
                                                          }),
                                                          (0, r.jsx)("span", { children: "8" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsx)("li", {
                                                  children: (0, r.jsx)("div", {
                                                      className: T.jumbo,
                                                      children: (0, r.jsx)(k, {
                                                          src: X,
                                                          alt: S.intl.string(S.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children: (0, r.jsx)(y.y, {
                                      label: S.intl.string(S.t.m0YV7M),
                                      name: Y,
                                      onNameChange: K,
                                  }),
                              }),
                              P
                                  ? null
                                  : (0, r.jsx)("div", {
                                        children: (0, r.jsx)(N.q, {
                                            label: S.intl.string(S.t["9uKafS"]),
                                            required: !0,
                                            helperText: null == F ? S.intl.string(S.t["1pdw0A"]) : void 0,
                                            onChange: W,
                                            selected: F,
                                            onError: (e) => J(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, s.v)(
                                                null == Z || null == (t = Z.file) ? void 0 : t.type,
                                            ),
                                            errorMessage: null != V ? (0, w.e$)(V) : void 0,
                                        }),
                                    }),
                              (0, r.jsxs)("div", {
                                  className: T.foot,
                                  children: [
                                      null != H &&
                                          (0, r.jsx)(w.H4, {
                                              error: H,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, r.jsx)(u.Button, {
                                          text: ec,
                                          onClick: ei,
                                          disabled: null == Z || null == F || Y.length < 2 || null != V,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      null != Z
                          ? (0, r.jsx)(R, { back: el })
                          : (0, r.jsx)("div", {
                                className: T.closeButton,
                                children: (0, r.jsx)(u.PZ7, {
                                    size: "md",
                                    onClick: () => (0, u.Mr3)(_.Hj),
                                }),
                            }),
                  ],
              });
    },
    R = (e) => {
        let { back: t } = e;
        return (0, r.jsx)("div", {
            className: T.backButton,
            children: (0, r.jsx)(u.hU, {
                variant: "icon-only",
                icon: u.j9r,
                onClick: t,
                "aria-label": S.intl.string(S.t["13/7kX"]),
                size: "md",
            }),
        });
    },
    k = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, r.jsx)("div", { className: T.previewPlaceholder })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
