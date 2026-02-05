n.d(t, { l: () => R });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(662518),
    u = n(311907),
    o = n(397927),
    c = n(157559),
    d = n(554375),
    m = n(964486),
    h = n(626584),
    g = n(885617),
    x = n(288224),
    j = n(71393),
    f = n(576705),
    _ = n(967198),
    b = n(954571),
    E = n(690521),
    v = n(339143),
    I = n(80569),
    A = n(380334),
    S = n(316628),
    N = n(421314),
    p = n(516628),
    O = n(150639),
    C = n(804998),
    y = n(652215),
    M = n(985018),
    w = n(373149);
let T = new h.A("EmojiStudio"),
    R = (e) => {
        let { guildId: t } = e,
            n = "userImage" in e ? e.userImage : void 0,
            r = "emoji" in e ? e.emoji : void 0,
            h = !!r,
            [R, D] = i.useState(n ?? null),
            [L, G] = i.useState(!1),
            F = (0, u.bG)([j.A, _.A, f.A], () => {
                let e = _.A.getGuildId(),
                    t = j.A.getGuild(e);
                return f.A.can(y.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [H, U] = i.useState(t ?? F),
            [W, z] = i.useState(!1),
            [P, J] = i.useState(null),
            [B, K] = i.useState(null),
            [$, Y] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        n = t.lastIndexOf("."),
                        l = -1 === n ? t : t.substring(0, n);
                    return E.Ay.sanitizeEmojiName(l);
                })(R),
            ),
            [q, Q] = i.useState(null),
            V = i.useRef(Date.now()),
            X = i.useRef(0),
            Z = i.useRef(0),
            ee = i.useRef(!1),
            et = i.useRef(null),
            [en, el] = i.useState(!1),
            ei = i.useRef(null);
        i.useEffect(
            () => (
                (0, v.O)(!1),
                () => {
                    (0, v.O)(!1);
                }
            ),
            [],
        ),
            i.useEffect(() => {
                if (null == r) return;
                let e = g.A.getEmojiRawAsset(r.id);
                if (null != e) {
                    D(e), Q(e.data), Y(r.name), G(!1);
                    return;
                }
                G(!0),
                    (0, N.$)(r)
                        .then((e) => {
                            D(e), Q(e.data), Y(r.name), G(!1);
                        })
                        .catch((e) => {
                            T.error("Failed to fetch emoji image", e), J(I.j.MISSING_IMAGE_DATA), G(!1);
                        });
            }, [r]);
        let er = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    n = P ?? B;
                b.default.track(y.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === X.current,
                    has_image: null != R,
                    error: null == n ? null : String(n),
                    throttled_edit_count: Z.current,
                    session_duration_ms: Date.now() - V.current,
                    has_guild_selected: null != H,
                });
            },
            [P, B, V, R, H],
        );
        (0, m.l0)(() => {
            ee.current || er({ reason: "closed" });
        });
        let ea = i.useCallback(async () => {
                if ((J(null), null == H)) return void J(I.j.MISSING_GUILD);
                if (null == R || R?.file == null || null == q) return void J(I.j.MISSING_IMAGE_DATA);
                z(!0);
                let e = null;
                try {
                    (e = await (0, d.Gf)({
                        image: q,
                        guildId: H,
                        name: $,
                        analyticsLocation: { page: y.liQ.EMOJI_STUDIO },
                    })),
                        x.X({ emojiId: e.id, userImage: { ...R } });
                } catch (e) {
                    z(!1), J((0, p.E2)(e)), T.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != r)
                    try {
                        await (0, d.ak)(H, r.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            c.A.show({ title: M.intl.string(M.t.iufib1), body: M.intl.string(M.t.Whhv4w) });
                        else {
                            z(!1), J((0, p.E2)(e)), T.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, v.O)(!1),
                    (0, o.OoC)(I.y),
                    er({ reason: "uploaded" }),
                    (ee.current = !0),
                    (0, A.T)({ emoji: e, guildId: H }),
                    z(!1);
            }, [H, R, r, q, er, $]),
            es = i.useCallback(() => {
                J(null), null != R && Q(R.data), (Z.current = 0), (0, v.O)(!1), et.current?.reset();
            }, [et, R]),
            eu = i.useCallback(() => {
                (0, N.p)({ onClose: es });
            }, [es]),
            eo = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: l } = e,
                    i = null;
                null != t && E.Ay.isDataTooBig(t) && (i = I.j.TOO_BIG),
                    J(l ?? i),
                    n < X.current || (null != t && (Q(t), (X.current = n)));
            }, []),
            ec = i.useCallback(() => {
                Z.current++, (0, v.O)(!0);
            }, []),
            ed = h ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
        return L || null == R
            ? (0, l.jsx)("main", {
                  className: w.iW,
                  children: (0, l.jsxs)("div", {
                      className: w.EN,
                      children: [
                          (0, l.jsx)("div", {
                              className: w.uv,
                              children: (0, l.jsx)(o.Heading, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: w.DD,
                                  children: ed,
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: w.b,
                              children: (0, l.jsx)(o.JnF, { size: "md", onClick: eu }),
                          }),
                      ],
                  }),
              })
            : (0, l.jsxs)("main", {
                  className: a()(w.iW, { [w.WY]: null != R }),
                  children: [
                      (0, l.jsxs)("div", {
                          className: w.EN,
                          children: [
                              (0, l.jsx)(C.n, {
                                  ref: et,
                                  file: R.file,
                                  imageUri: R.data,
                                  onUpdate: eo,
                                  onThrottledEdit: ec,
                              }),
                              (0, l.jsx)("div", {
                                  className: w.uv,
                                  children: (0, l.jsx)(o.Heading, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: w.DD,
                                      children: ed,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: w.b,
                                  children: (0, l.jsx)(o.JnF, { size: "md", onClick: eu }),
                              }),
                              (0, l.jsx)("div", {
                                  className: w.WA,
                                  children: (0, l.jsx)(o.YNO, {
                                      targetElementRef: ei,
                                      "aria-label": M.intl.string(M.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, l.jsx)(o.W1t, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": M.intl.string(M.t.vznjTl),
                                              children: (0, l.jsx)(o.Drp, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: M.intl.string(M.t.ka3Yhm),
                                                  action: es,
                                              }),
                                          });
                                      },
                                      shouldShow: en,
                                      onRequestClose: () => el(!1),
                                      children: () =>
                                          (0, l.jsx)(o.K0, {
                                              buttonRef: ei,
                                              variant: "icon-only",
                                              icon: o.n1$,
                                              onClick: () => el(!0),
                                              "aria-label": M.intl.string(M.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("aside", {
                          className: w.HU,
                          children: [
                              (0, l.jsx)("div", {
                                  className: w.ey,
                                  children: (0, l.jsx)(o.D0$, {
                                      label: M.intl.string(M.t.JmuIb5),
                                      children: (0, l.jsxs)("ul", {
                                          children: [
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsxs)("div", {
                                                      className: w.Br,
                                                      children: [
                                                          (0, l.jsx)(k, { src: q, alt: M.intl.string(M.t["zS0K+s"]) }),
                                                          (0, l.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsx)("li", {
                                                  children: (0, l.jsx)("div", {
                                                      className: w.SA,
                                                      children: (0, l.jsx)(k, {
                                                          src: q,
                                                          alt: M.intl.string(M.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  children: (0, l.jsx)(S.e, {
                                      label: M.intl.string(M.t.m0YV7M),
                                      name: $,
                                      onNameChange: Y,
                                  }),
                              }),
                              h
                                  ? null
                                  : (0, l.jsx)("div", {
                                        children: (0, l.jsx)(O.v, {
                                            label: M.intl.string(M.t["9uKafS"]),
                                            required: !0,
                                            onChange: U,
                                            selected: H,
                                            onError: (e) => K(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, s.q)(R?.file?.type),
                                            errorMessage: null != B ? (0, p.u1)(B) : void 0,
                                        }),
                                    }),
                              (0, l.jsxs)("div", {
                                  className: w.jt,
                                  children: [
                                      null != P &&
                                          (0, l.jsx)(p.Fx, {
                                              error: P,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, l.jsx)(o.Button, {
                                          text: M.intl.string(M.t.Q7UP6F),
                                          onClick: ea,
                                          loading: W,
                                          disabled: W || null == R || null == H || $.length < 2 || null != B,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    k = (e) => {
        let { src: t, alt: n } = e;
        return null == t || "" === t ? (0, l.jsx)("div", { className: w.A3 }) : (0, l.jsx)("img", { src: t, alt: n });
    };
