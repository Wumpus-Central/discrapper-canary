n.d(t, { I: () => T }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(33309),
    s = n(442837),
    u = n(481060),
    c = n(668781),
    d = n(80932),
    m = n(493773),
    h = n(710845),
    g = n(471613),
    b = n(806774),
    f = n(430824),
    v = n(496675),
    p = n(914010),
    x = n(626135),
    j = n(176354),
    E = n(539266),
    O = n(598117),
    y = n(390620),
    I = n(983205),
    C = n(457574),
    N = n(746622),
    _ = n(384694),
    w = n(273391),
    S = n(981631),
    M = n(388032),
    A = n(286274);
let R = new h.Z("EmojiStudio"),
    T = (e) => {
        var t;
        let { guildId: n } = e,
            i = "userImage" in e ? e.userImage : void 0,
            h = "emoji" in e ? e.emoji : void 0,
            T = !!h,
            [D, k] = r.useState(null != i ? i : null),
            [G, Z] = r.useState(!1),
            U = (0, s.e7)([f.Z, p.Z, v.Z], () => {
                let e = p.Z.getGuildId(),
                    t = f.Z.getGuild(e);
                return v.Z.can(S.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [z, L] = r.useState(null != n ? n : U),
            [B, J] = r.useState(!1),
            [H, F] = r.useState(null),
            [V, W] = r.useState(null),
            [Y, q] = r.useState(
                (function (e) {
                    var t, n;
                    if (null == e) return "";
                    let l = null != (n = null == e || null == (t = e.file) ? void 0 : t.name) ? n : "",
                        r = l.lastIndexOf("."),
                        i = -1 === r ? l : l.substring(0, r);
                    return j.ZP.sanitizeEmojiName(i);
                })(D),
            ),
            [K, X] = r.useState(null),
            Q = r.useRef(Date.now()),
            $ = r.useRef(0),
            ee = r.useRef(0),
            et = r.useRef(!1),
            en = r.useRef(null),
            [el, er] = r.useState(!1),
            ei = r.useRef(null);
        r.useEffect(
            () => (
                (0, E.g)(!1),
                () => {
                    (0, E.g)(!1);
                }
            ),
            [],
        ),
            r.useEffect(() => {
                if (null == h) return;
                let e = g.Z.getEmojiRawAsset(h.id);
                if (null != e) {
                    k(e), X(e.data), q(h.name), Z(!1);
                    return;
                }
                Z(!0),
                    (0, C.Q)(h)
                        .then((e) => {
                            k(e), X(e.data), q(h.name), Z(!1);
                        })
                        .catch((e) => {
                            R.error("Failed to fetch emoji image", e), F(O.ze.MISSING_IMAGE_DATA), Z(!1);
                        });
            }, [h]);
        let ea = r.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != H ? H : V;
                x.default.track(S.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === $.current,
                    has_image: null != D,
                    error: null == n ? null : String(n),
                    throttled_edit_count: ee.current,
                    session_duration_ms: Date.now() - Q.current,
                    has_guild_selected: null != z,
                });
            },
            [H, V, Q, D, z],
        );
        (0, m.zq)(() => {
            et.current || ea({ reason: "closed" });
        });
        let eo = r.useCallback(async () => {
                if ((F(null), null == z)) return void F(O.ze.MISSING_GUILD);
                if (null == D || (null == D ? void 0 : D.file) == null || null == K)
                    return void F(O.ze.MISSING_IMAGE_DATA);
                J(!0);
                let e = null;
                try {
                    (e = await (0, d.rS)({
                        image: K,
                        guildId: z,
                        name: Y,
                        analyticsLocation: { page: S.ZY5.EMOJI_STUDIO },
                    })),
                        b.M({
                            emojiId: e.id,
                            userImage: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        l = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        l.forEach(function (t) {
                                            var l;
                                            (l = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = l);
                                        });
                                }
                                return e;
                            })({}, D),
                        });
                } catch (e) {
                    J(!1), F((0, N.zg)(e)), R.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != h)
                    try {
                        await (0, d.RE)(z, h.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            c.Z.show({
                                title: M.intl.string(M.t.iufib1),
                                body: M.intl.string(M.t.Whhv4w),
                            });
                        else {
                            J(!1), F((0, N.zg)(e)), R.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, E.g)(!1),
                    (0, u.Mr3)(O.Hj),
                    ea({ reason: "uploaded" }),
                    (et.current = !0),
                    (0, y.y)({
                        emoji: e,
                        guildId: z,
                    }),
                    J(!1);
            }, [z, D, h, K, ea, Y]),
            es = r.useCallback(() => {
                var e;
                F(null), null != D && X(D.data), (ee.current = 0), (0, E.g)(!1), null == (e = en.current) || e.reset();
            }, [en, D]),
            eu = r.useCallback(() => {
                (0, C.E)({ onClose: es });
            }, [es]),
            ec = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: l } = e,
                    r = null;
                null != t && j.ZP.isDataTooBig(t) && (r = O.ze.TOO_BIG),
                    F(null != l ? l : r),
                    n < $.current || (null != t && (X(t), ($.current = n)));
            }, []),
            ed = r.useCallback(() => {
                ee.current++, (0, E.g)(!0);
            }, []),
            em = T ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
        return G || null == D
            ? (0, l.jsx)("main", {
                  className: A.main,
                  children: (0, l.jsxs)("div", {
                      className: A.editor,
                      children: [
                          (0, l.jsx)("div", {
                              className: A.titleBar,
                              children: (0, l.jsx)(u.Heading, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: A.title,
                                  children: em,
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: A.closeButton,
                              children: (0, l.jsx)(u.PZ7, {
                                  size: "md",
                                  onClick: eu,
                              }),
                          }),
                      ],
                  }),
              })
            : (0, l.jsxs)("main", {
                  className: a()(A.main, { [A.checkerboard]: null != D }),
                  children: [
                      (0, l.jsxs)("div", {
                          className: A.editor,
                          children: [
                              (0, l.jsx)(w.v, {
                                  ref: en,
                                  file: D.file,
                                  imageUri: D.data,
                                  onUpdate: ec,
                                  onThrottledEdit: ed,
                              }),
                              (0, l.jsx)("div", {
                                  className: A.titleBar,
                                  children: (0, l.jsx)(u.Heading, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: A.title,
                                      children: em,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: A.closeButton,
                                  children: (0, l.jsx)(u.PZ7, {
                                      size: "md",
                                      onClick: eu,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: A.resetButton,
                                  children: (0, l.jsx)(u.yRy, {
                                      targetElementRef: ei,
                                      "aria-label": M.intl.string(M.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, l.jsx)(u.v2r, {
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": M.intl.string(M.t.vznjTl),
                                              children: (0, l.jsx)(u.sNh, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: M.intl.string(M.t.ka3Yhm),
                                                  action: es,
                                              }),
                                          });
                                      },
                                      shouldShow: el,
                                      onRequestClose: () => er(!1),
                                      children: () =>
                                          (0, l.jsx)(u.hU, {
                                              buttonRef: ei,
                                              variant: "icon-only",
                                              icon: u.MTm,
                                              onClick: () => er(!0),
                                              "aria-label": M.intl.string(M.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("aside", {
                          className: A.aside,
                          children: [
                              (0, l.jsx)("div", {
                                  className: A.previews,
                                  children: (0, l.jsx)(u.gNt, {
                                      label: M.intl.string(M.t.JmuIb5),
                                      children: (0, l.jsxs)("ul", {
                                          children: [
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsxs)("div", {
                                                      className: A.reactions,
                                                      children: [
                                                          (0, l.jsx)(P, {
                                                              src: K,
                                                              alt: M.intl.string(M.t["zS0K+s"]),
                                                          }),
                                                          (0, l.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsx)("div", {
                                                      className: A.jumbo,
                                                      children: (0, l.jsx)(P, {
                                                          src: K,
                                                          alt: M.intl.string(M.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  children: (0, l.jsx)(I.y, {
                                      label: M.intl.string(M.t.m0YV7M),
                                      name: Y,
                                      onNameChange: q,
                                  }),
                              }),
                              T
                                  ? null
                                  : (0, l.jsx)("div", {
                                        children: (0, l.jsx)(_.q, {
                                            label: M.intl.string(M.t["9uKafS"]),
                                            required: !0,
                                            helperText: null == z ? M.intl.string(M.t["1pdw0A"]) : void 0,
                                            onChange: L,
                                            selected: z,
                                            onError: (e) => W(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, o.v)(
                                                null == D || null == (t = D.file) ? void 0 : t.type,
                                            ),
                                            errorMessage: null != V ? (0, N.e$)(V) : void 0,
                                        }),
                                    }),
                              (0, l.jsxs)("div", {
                                  className: A.foot,
                                  children: [
                                      null != H &&
                                          (0, l.jsx)(N.H4, {
                                              error: H,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, l.jsx)(u.Button, {
                                          text: M.intl.string(M.t.Q7UP6F),
                                          onClick: eo,
                                          loading: B,
                                          disabled: B || null == D || null == z || Y.length < 2 || null != V,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    P = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, l.jsx)("div", { className: A.previewPlaceholder })
            : (0, l.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
