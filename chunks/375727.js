n.d(t, { I: () => k }), n(388685);
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
    g = n(710845),
    h = n(471613),
    b = n(806774),
    f = n(430824),
    v = n(496675),
    x = n(914010),
    j = n(626135),
    p = n(176354),
    E = n(539266),
    O = n(598117),
    y = n(390620),
    S = n(983205),
    I = n(457574),
    N = n(746622),
    _ = n(384694),
    w = n(273391),
    C = n(981631),
    M = n(388032),
    T = n(286274);
let P = new g.Z("EmojiStudio"),
    k = (e) => {
        var t;
        let { guildId: n } = e,
            i = "userImage" in e ? e.userImage : void 0,
            g = "emoji" in e ? e.emoji : void 0,
            k = !!g,
            [R, Z] = r.useState(null != i ? i : null),
            [D, z] = r.useState(!1),
            G = (0, s.e7)([f.Z, x.Z, v.Z], () => {
                let e = x.Z.getGuildId(),
                    t = f.Z.getGuild(e);
                return v.Z.can(C.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [U, L] = r.useState(null != n ? n : G),
            [B, J] = r.useState(!1),
            [H, F] = r.useState(null),
            [W, Y] = r.useState(null),
            [q, K] = r.useState(
                (function (e) {
                    var t, n;
                    if (null == e) return "";
                    let l = null != (n = null == e || null == (t = e.file) ? void 0 : t.name) ? n : "",
                        r = l.lastIndexOf("."),
                        i = -1 === r ? l : l.substring(0, r);
                    return p.ZP.sanitizeEmojiName(i);
                })(R),
            ),
            [V, X] = r.useState(null),
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
                if (null == g) return;
                let e = h.Z.getEmojiRawAsset(g.id);
                if (null != e) {
                    Z(e), X(e.data), K(g.name), z(!1);
                    return;
                }
                z(!0),
                    (0, I.Q)(g)
                        .then((e) => {
                            Z(e), X(e.data), K(g.name), z(!1);
                        })
                        .catch((e) => {
                            P.error("Failed to fetch emoji image", e), F(O.ze.MISSING_IMAGE_DATA), z(!1);
                        });
            }, [g]);
        let ea = r.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != H ? H : W;
                j.default.track(C.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === $.current,
                    has_image: null != R,
                    error: null == n ? null : String(n),
                    throttled_edit_count: ee.current,
                    session_duration_ms: Date.now() - Q.current,
                    has_guild_selected: null != U,
                });
            },
            [H, W, Q, R, U],
        );
        (0, m.zq)(() => {
            et.current || ea({ reason: "closed" });
        });
        let eo = r.useCallback(async () => {
                if ((F(null), null == U)) return void F(O.ze.MISSING_GUILD);
                if (null == R || (null == R ? void 0 : R.file) == null || null == V)
                    return void F(O.ze.MISSING_IMAGE_DATA);
                J(!0);
                let e = null;
                try {
                    (e = await (0, d.rS)({
                        image: V,
                        guildId: U,
                        name: q,
                        analyticsLocation: { page: C.ZY5.EMOJI_STUDIO },
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
                            })({}, R),
                        });
                } catch (e) {
                    J(!1), F((0, N.zg)(e)), P.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != g)
                    try {
                        await (0, d.RE)(U, g.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            c.Z.show({
                                title: M.intl.string(M.t.iufib1),
                                body: M.intl.string(M.t.Whhv4w),
                            });
                        else {
                            J(!1), F((0, N.zg)(e)), P.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, E.g)(!1),
                    (0, u.Mr3)(O.Hj),
                    ea({ reason: "uploaded" }),
                    (et.current = !0),
                    (0, y.y)({
                        emoji: e,
                        guildId: U,
                    }),
                    J(!1);
            }, [U, R, g, V, ea, q]),
            es = r.useCallback(() => {
                var e;
                F(null), null != R && X(R.data), (ee.current = 0), (0, E.g)(!1), null == (e = en.current) || e.reset();
            }, [en, R]),
            eu = r.useCallback(() => {
                (0, I.E)({ onClose: es });
            }, [es]),
            ec = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: l } = e,
                    r = null;
                null != t && p.ZP.isDataTooBig(t) && (r = O.ze.TOO_BIG),
                    F(null != l ? l : r),
                    n < $.current || (null != t && (X(t), ($.current = n)));
            }, []),
            ed = r.useCallback(() => {
                ee.current++, (0, E.g)(!0);
            }, []),
            em = k ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
        return D || null == R
            ? (0, l.jsx)("main", {
                  className: T.main,
                  children: (0, l.jsxs)("div", {
                      className: T.editor,
                      children: [
                          (0, l.jsx)("div", {
                              className: T.titleBar,
                              children: (0, l.jsx)(u.Heading, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: T.title,
                                  children: em,
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: T.closeButton,
                              children: (0, l.jsx)(u.PZ7, {
                                  size: "md",
                                  onClick: eu,
                              }),
                          }),
                      ],
                  }),
              })
            : (0, l.jsxs)("main", {
                  className: a()(T.main, { [T.checkerboard]: null != R }),
                  children: [
                      (0, l.jsxs)("div", {
                          className: T.editor,
                          children: [
                              (0, l.jsx)(w.v, {
                                  ref: en,
                                  file: R.file,
                                  imageUri: R.data,
                                  onUpdate: ec,
                                  onThrottledEdit: ed,
                              }),
                              (0, l.jsx)("div", {
                                  className: T.titleBar,
                                  children: (0, l.jsx)(u.Heading, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: T.title,
                                      children: em,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: T.closeButton,
                                  children: (0, l.jsx)(u.PZ7, {
                                      size: "md",
                                      onClick: eu,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: T.resetButton,
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
                          className: T.aside,
                          children: [
                              (0, l.jsx)("div", {
                                  className: T.previews,
                                  children: (0, l.jsx)(u.gNt, {
                                      label: M.intl.string(M.t.JmuIb5),
                                      children: (0, l.jsxs)("ul", {
                                          children: [
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsxs)("div", {
                                                      className: T.reactions,
                                                      children: [
                                                          (0, l.jsx)(A, {
                                                              src: V,
                                                              alt: M.intl.string(M.t["zS0K+s"]),
                                                          }),
                                                          (0, l.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsx)("div", {
                                                      className: T.jumbo,
                                                      children: (0, l.jsx)(A, {
                                                          src: V,
                                                          alt: M.intl.string(M.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  children: (0, l.jsx)(S.y, {
                                      label: M.intl.string(M.t.m0YV7M),
                                      name: q,
                                      onNameChange: K,
                                  }),
                              }),
                              k
                                  ? null
                                  : (0, l.jsx)("div", {
                                        children: (0, l.jsx)(_.q, {
                                            label: M.intl.string(M.t["9uKafS"]),
                                            required: !0,
                                            onChange: L,
                                            selected: U,
                                            onError: (e) => Y(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, o.v)(
                                                null == R || null == (t = R.file) ? void 0 : t.type,
                                            ),
                                            errorMessage: null != W ? (0, N.e$)(W) : void 0,
                                        }),
                                    }),
                              (0, l.jsxs)("div", {
                                  className: T.foot,
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
                                          disabled: B || null == R || null == U || q.length < 2 || null != W,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    A = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t
            ? (0, l.jsx)("div", { className: T.previewPlaceholder })
            : (0, l.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
