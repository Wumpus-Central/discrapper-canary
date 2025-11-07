n.d(t, { I: () => T }), n(388685);
var l = n(951288),
    r = n(647438),
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
    f = n(806774),
    b = n(430824),
    v = n(496675),
    p = n(914010),
    x = n(626135),
    j = n(176354),
    E = n(539266),
    _ = n(598117),
    O = n(390620),
    y = n(983205),
    C = n(457574),
    I = n(746622),
    N = n(384694),
    S = n(273391),
    w = n(981631),
    M = n(388032),
    R = n(342745);
let A = new h.Z("EmojiStudio"),
    T = (e) => {
        var t;
        let { guildId: n } = e,
            i = "userImage" in e ? e.userImage : void 0,
            h = "emoji" in e ? e.emoji : void 0,
            T = !!h,
            [D, k] = r.useState(null != i ? i : null),
            [G, Z] = r.useState(!1),
            z = (0, s.e7)([b.Z, p.Z, v.Z], () => {
                let e = p.Z.getGuildId(),
                    t = b.Z.getGuild(e);
                return v.Z.can(w.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [L, U] = r.useState(null != n ? n : z),
            [B, F] = r.useState(null),
            [J, H] = r.useState(null),
            [V, W] = r.useState(
                (function (e) {
                    var t, n;
                    if (null == e) return "";
                    let l = null != (n = null == e || null == (t = e.file) ? void 0 : t.name) ? n : "",
                        r = l.lastIndexOf("."),
                        i = -1 === r ? l : l.substring(0, r);
                    return j.ZP.sanitizeEmojiName(i);
                })(D),
            ),
            [Y, q] = r.useState(null),
            K = r.useRef(Date.now()),
            X = r.useRef(0),
            Q = r.useRef(0),
            $ = r.useRef(!1),
            ee = r.useRef(null),
            [et, en] = r.useState(!1),
            el = r.useRef(null);
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
                    k(e), q(e.data), W(h.name), Z(!1);
                    return;
                }
                Z(!0),
                    (0, C.Q)(h)
                        .then((e) => {
                            k(e), q(e.data), W(h.name), Z(!1);
                        })
                        .catch((e) => {
                            A.error("Failed to fetch emoji image", e), F(_.ze.MISSING_IMAGE_DATA), Z(!1);
                        });
            }, [h]);
        let er = r.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = null != B ? B : J;
                x.default.track(w.rMx.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === X.current,
                    has_image: null != D,
                    error: null == n ? null : String(n),
                    throttled_edit_count: Q.current,
                    session_duration_ms: Date.now() - K.current,
                    has_guild_selected: null != L,
                });
            },
            [B, J, K, D, L],
        );
        (0, m.zq)(() => {
            $.current || er({ reason: "closed" });
        });
        let ei = r.useCallback(async () => {
                if ((F(null), null == L)) return void F(_.ze.MISSING_GUILD);
                if (null == D || (null == D ? void 0 : D.file) == null || null == Y)
                    return void F(_.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    (e = await (0, d.rS)({
                        image: Y,
                        guildId: L,
                        name: V,
                        analyticsLocation: { page: w.ZY5.EMOJI_STUDIO },
                    })),
                        f.M({
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
                    F((0, I.zg)(e)), A.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != h)
                    try {
                        await (0, d.RE)(L, h.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            c.Z.show({
                                title: M.intl.string(M.t.iufib1),
                                body: M.intl.string(M.t.Whhv4w),
                            });
                        else {
                            F((0, I.zg)(e)), A.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, E.g)(!1),
                    (0, u.Mr3)(_.Hj),
                    er({ reason: "uploaded" }),
                    ($.current = !0),
                    (0, O.y)({
                        emoji: e,
                        guildId: L,
                    });
            }, [L, D, h, Y, er, V]),
            ea = r.useCallback(() => {
                var e;
                F(null), null != D && q(D.data), (Q.current = 0), (0, E.g)(!1), null == (e = ee.current) || e.reset();
            }, [ee, D]),
            eo = r.useCallback(() => {
                (0, C.E)({ onClose: ea });
            }, [ea]),
            es = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: l } = e,
                    r = null;
                null != t && j.ZP.isDataTooBig(t) && (r = _.ze.TOO_BIG),
                    F(null != l ? l : r),
                    n < X.current || (null != t && (q(t), (X.current = n)));
            }, []),
            eu = r.useCallback(() => {
                Q.current++, (0, E.g)(!0);
            }, []),
            ec = T ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
        return G || null == D
            ? (0, l.jsx)("main", {
                  className: R.main,
                  children: (0, l.jsxs)("div", {
                      className: R.editor,
                      children: [
                          (0, l.jsx)("div", {
                              className: R.titleBar,
                              children: (0, l.jsx)(u.Heading, {
                                  variant: "heading-lg/medium",
                                  color: "header-primary",
                                  className: R.title,
                                  children: ec,
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: R.closeButton,
                              children: (0, l.jsx)(u.PZ7, {
                                  size: "md",
                                  onClick: eo,
                              }),
                          }),
                      ],
                  }),
              })
            : (0, l.jsxs)("main", {
                  className: a()(R.main, { [R.checkerboard]: null != D }),
                  children: [
                      (0, l.jsxs)("div", {
                          className: R.editor,
                          children: [
                              (0, l.jsx)(S.v, {
                                  ref: ee,
                                  file: D.file,
                                  imageUri: D.data,
                                  onUpdate: es,
                                  onThrottledEdit: eu,
                              }),
                              (0, l.jsx)("div", {
                                  className: R.titleBar,
                                  children: (0, l.jsx)(u.Heading, {
                                      variant: "heading-lg/medium",
                                      color: "header-primary",
                                      className: R.title,
                                      children: ec,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: R.closeButton,
                                  children: (0, l.jsx)(u.PZ7, {
                                      size: "md",
                                      onClick: eo,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: R.resetButton,
                                  children: (0, l.jsx)(u.yRy, {
                                      targetElementRef: el,
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
                                                  action: ea,
                                              }),
                                          });
                                      },
                                      shouldShow: et,
                                      onRequestClose: () => en(!1),
                                      children: () =>
                                          (0, l.jsx)(u.hU, {
                                              buttonRef: el,
                                              variant: "icon-only",
                                              icon: u.MTm,
                                              onClick: () => en(!0),
                                              "aria-label": M.intl.string(M.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("aside", {
                          className: R.aside,
                          children: [
                              (0, l.jsx)("div", {
                                  className: R.previews,
                                  children: (0, l.jsx)(u.gNt, {
                                      label: M.intl.string(M.t.JmuIb5),
                                      children: (0, l.jsxs)("ul", {
                                          children: [
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsxs)("div", {
                                                      className: R.reactions,
                                                      children: [
                                                          (0, l.jsx)(P, {
                                                              src: Y,
                                                              alt: M.intl.string(M.t["zS0K+s"]),
                                                          }),
                                                          (0, l.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsx)("div", {
                                                      className: R.jumbo,
                                                      children: (0, l.jsx)(P, {
                                                          src: Y,
                                                          alt: M.intl.string(M.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  children: (0, l.jsx)(y.y, {
                                      label: M.intl.string(M.t.m0YV7M),
                                      name: V,
                                      onNameChange: W,
                                  }),
                              }),
                              T
                                  ? null
                                  : (0, l.jsx)("div", {
                                        children: (0, l.jsx)(N.q, {
                                            label: M.intl.string(M.t["9uKafS"]),
                                            required: !0,
                                            helperText: null == L ? M.intl.string(M.t["1pdw0A"]) : void 0,
                                            onChange: U,
                                            selected: L,
                                            onError: (e) => H(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, o.v)(
                                                null == D || null == (t = D.file) ? void 0 : t.type,
                                            ),
                                            errorMessage: null != J ? (0, I.e$)(J) : void 0,
                                        }),
                                    }),
                              (0, l.jsxs)("div", {
                                  className: R.foot,
                                  children: [
                                      null != B &&
                                          (0, l.jsx)(I.H4, {
                                              error: B,
                                              variant: "text-sm/normal",
                                              color: "text-danger",
                                          }),
                                      (0, l.jsx)(u.Button, {
                                          text: M.intl.string(M.t.Q7UP6F),
                                          onClick: ei,
                                          disabled: null == D || null == L || V.length < 2 || null != J,
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
            ? (0, l.jsx)("div", { className: R.previewPlaceholder })
            : (0, l.jsx)("img", {
                  src: t,
                  alt: n,
              });
    };
