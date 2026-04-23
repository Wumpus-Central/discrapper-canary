l.d(t, { l: () => W });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(662518),
    o = l(311907),
    u = l(192308),
    c = l(534514),
    d = l(815021),
    h = l(265872),
    m = l(861672),
    g = l(477782),
    x = l(408278),
    f = l(454743),
    j = l(452027),
    v = l(821609),
    E = l(157559),
    _ = l(554375),
    b = l(964486),
    A = l(626584),
    I = l(885617),
    N = l(288224),
    p = l(71393),
    S = l(576705),
    w = l(967198),
    M = l(954571),
    C = l(690521),
    y = l(339143),
    O = l(80569),
    R = l(380334),
    T = l(316628),
    k = l(421314),
    D = l(516628),
    L = l(150639),
    G = l(582617),
    F = l(652215),
    H = l(985018),
    U = l(905702);
let J = new A.A("EmojiStudio"),
    W = (e) => {
        let { guildId: t } = e,
            l = "userImage" in e ? e.userImage : void 0,
            a = "emoji" in e ? e.emoji : void 0,
            A = !!a,
            [W, z] = i.useState(l ?? null),
            [B, P] = i.useState(!1),
            V = (0, o.bG)([p.A, w.A, S.A], () => {
                let e = w.A.getGuildId(),
                    t = p.A.getGuild(e);
                return S.A.can(F.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [K, Y] = i.useState(t ?? V),
            [$, q] = i.useState(!1),
            [Q, X] = i.useState(null),
            [ee, et] = i.useState(null),
            [el, en] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return C.Ay.sanitizeEmojiName(n);
                })(W),
            ),
            [ei, ea] = i.useState(null),
            er = i.useRef(Date.now()),
            es = i.useRef(0),
            eo = i.useRef(0),
            eu = i.useRef(!1),
            ec = i.useRef(null),
            [ed, eh] = i.useState(!1),
            em = i.useRef(null);
        i.useEffect(
            () => (
                (0, y.O)(!1),
                () => {
                    (0, y.O)(!1);
                }
            ),
            [],
        ),
            i.useEffect(() => {
                if (null == a) return;
                let e = I.A.getEmojiRawAsset(a.id);
                if (null != e) {
                    z(e), ea(e.data), en(a.name), P(!1);
                    return;
                }
                P(!0),
                    (0, k.$)(a)
                        .then((e) => {
                            z(e), ea(e.data), en(a.name), P(!1);
                        })
                        .catch((e) => {
                            J.error("Failed to fetch emoji image", e), X(O.j.MISSING_IMAGE_DATA), P(!1);
                        });
            }, [a]);
        let eg = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = Q ?? ee;
                M.default.track(F.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === es.current,
                    has_image: null != W,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eo.current,
                    session_duration_ms: Date.now() - er.current,
                    has_guild_selected: null != K,
                });
            },
            [Q, ee, er, W, K],
        );
        (0, b.l0)(() => {
            eu.current || eg({ reason: "closed" });
        });
        let ex = i.useCallback(async () => {
                if ((X(null), null == K)) return void X(O.j.MISSING_GUILD);
                if (null == W || W?.file == null || null == ei) return void X(O.j.MISSING_IMAGE_DATA);
                q(!0);
                let e = null;
                try {
                    (e = await (0, _.Gf)({
                        image: ei,
                        guildId: K,
                        name: el,
                        analyticsLocation: { page: F.liQ.EMOJI_STUDIO },
                    })),
                        N.X({ emojiId: e.id, userImage: { ...W } });
                } catch (e) {
                    q(!1), X((0, D.E2)(e)), J.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != a)
                    try {
                        await (0, _.ak)(K, a.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            E.A.show({ title: H.intl.string(H.t.iufib1), body: H.intl.string(H.t.Whhv4w) });
                        else {
                            q(!1), X((0, D.E2)(e)), J.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, y.O)(!1),
                    (0, u.closeModal)(O.y),
                    eg({ reason: "uploaded" }),
                    (eu.current = !0),
                    (0, R.T)({ emoji: e, guildId: K }),
                    q(!1);
            }, [K, W, a, ei, eg, el]),
            ef = i.useCallback(() => {
                X(null), null != W && ea(W.data), (eo.current = 0), (0, y.O)(!1), ec.current?.reset();
            }, [ec, W]),
            ej = i.useCallback(() => {
                (0, k.p)({ onClose: ef });
            }, [ef]),
            ev = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                null != t && C.Ay.isDataTooBig(t) && (i = O.j.TOO_BIG),
                    X(n ?? i),
                    l < es.current || (null != t && (ea(t), (es.current = l)));
            }, []),
            eE = i.useCallback(() => {
                eo.current++, (0, y.O)(!0);
            }, []),
            e_ = A ? H.intl.string(H.t.FOYn8U) : H.intl.string(H.t.iMJO37);
        return B || null == W
            ? (0, n.jsx)("main", {
                  className: U.iW,
                  children: (0, n.jsxs)("div", {
                      className: U.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: U.uv,
                              children: (0, n.jsx)(c.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: U.DD,
                                  children: e_,
                              }),
                          }),
                          (0, n.jsx)("div", { className: U.b, children: (0, n.jsx)(d.J, { size: "md", onClick: ej }) }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: r()(U.iW, { [U.WY]: null != W }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: U.EN,
                          children: [
                              (0, n.jsx)(G.n, {
                                  ref: ec,
                                  file: W.file,
                                  imageUri: W.data,
                                  onUpdate: ev,
                                  onThrottledEdit: eE,
                              }),
                              (0, n.jsx)("div", {
                                  className: U.uv,
                                  children: (0, n.jsx)(c.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: U.DD,
                                      children: e_,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: U.b,
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: ej }),
                              }),
                              (0, n.jsx)("div", {
                                  className: U.WA,
                                  children: (0, n.jsx)(h.Y, {
                                      targetElementRef: em,
                                      "aria-label": H.intl.string(H.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(m.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": H.intl.string(H.t.vznjTl),
                                              children: (0, n.jsx)(g.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: H.intl.string(H.t.ka3Yhm),
                                                  action: ef,
                                              }),
                                          });
                                      },
                                      shouldShow: ed,
                                      onRequestClose: () => eh(!1),
                                      children: () =>
                                          (0, n.jsx)(x.K, {
                                              buttonRef: em,
                                              variant: "icon-only",
                                              icon: f.n,
                                              onClick: () => eh(!0),
                                              "aria-label": H.intl.string(H.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: U.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: U.ey,
                                  children: (0, n.jsx)(j.D, {
                                      label: H.intl.string(H.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: U.Br,
                                                      children: [
                                                          (0, n.jsx)(Z, { src: ei, alt: H.intl.string(H.t["zS0K+s"]) }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: U.SA,
                                                      children: (0, n.jsx)(Z, {
                                                          src: ei,
                                                          alt: H.intl.string(H.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(T.e, {
                                      label: H.intl.string(H.t.m0YV7M),
                                      name: el,
                                      onNameChange: en,
                                  }),
                              }),
                              A
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(L.v, {
                                            label: H.intl.string(H.t["9uKafS"]),
                                            required: !0,
                                            onChange: Y,
                                            selected: K,
                                            onError: (e) => et(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: (0, s.q)(W?.file?.type),
                                            errorMessage: null != ee ? (0, D.u1)(ee) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: U.jt,
                                  children: [
                                      null != Q &&
                                          (0, n.jsx)(D.Fx, {
                                              error: Q,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(v.$, {
                                          text: H.intl.string(H.t.Q7UP6F),
                                          onClick: ex,
                                          loading: $,
                                          disabled: $ || null == W || null == K || el.length < 2 || null != ee,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    Z = (e) => {
        let { src: t, alt: l } = e;
        return null == t || "" === t ? (0, n.jsx)("div", { className: U.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
    };
