l.d(t, { EmojiStudioModal: () => ew });
var n = l(627968),
    r = l(64700),
    i = l(935462),
    a = l(503698),
    s = l.n(a);
let u = (e) => "image/gif" === e || "image/webp" === e || "image/avif" === e;
var c = l(17928),
    o = l(192308),
    d = l(534514),
    m = l(815021),
    g = l(922016),
    h = l(550079),
    j = l(477782),
    x = l(408278),
    f = l(454743),
    b = l(452027),
    v = l(821609),
    E = l(157559),
    N = l(554375),
    I = l(964486),
    S = l(870218),
    A = l(61310),
    p = l(626584),
    O = l(691223),
    _ = l(288224),
    C = l(71393),
    y = l(576705),
    M = l(967198),
    k = l(954571),
    R = l(690521),
    D = l(339143),
    w = l(80569),
    T = l(834730),
    G = l(691540),
    L = l(857250),
    z = l(97483),
    F = l(565645),
    K = l(927813),
    P = l(985018),
    H = l(780999),
    W = l(861173);
let B = 6 * K.A.Millis.SECOND;
function J(e) {
    let { emoji: t, guildId: l } = e,
        r = (0, c.bG)([C.A], () => C.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: s()(W.oR, H.o),
        children: [
            (0, n.jsx)(F.A, { emojiId: t.id, size: "default" }),
            (0, n.jsx)(T.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: P.intl.format(P.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, n.jsx)(
                            T.E,
                            { variant: "text-md/semibold", color: "text-strong", tag: "strong", children: e },
                            t,
                        ),
                    guildName: r,
                    guildNameHook: (e, t) =>
                        (0, n.jsx)(
                            T.E,
                            { variant: "text-md/semibold", color: "text-strong", tag: "strong", children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var U = l(292666);
let Y = (e) => {
    let { name: t, onNameChange: l, label: i } = e,
        a = r.useRef(null),
        s = r.useRef(null),
        [u, c] = r.useState(!1),
        o = r.useCallback(
            (e) => {
                (s.current = a.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : R.Ay.sanitizeEmojiName(e)));
            },
            [l],
        );
    r.useEffect(() => {
        null != s.current && (a.current?.setSelectionRange(s.current, s.current), (s.current = null));
    });
    let d = r.useCallback(() => {
            c(!1);
        }, []),
        m = r.useCallback(() => {
            c(!0);
        }, []);
    return (0, n.jsx)(U.k, {
        inputRef: a,
        error: u ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: o,
        placeholder: P.intl.string(P.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: i,
        clearable: !0,
        required: !0,
    });
};
var $ = l(308295),
    V = l(652215),
    Q = l(307731);
let X = (e) => {
        let { error: t, variant: l, color: r } = e;
        return (0, n.jsx)(T.E, { variant: l, color: r, children: q(t) });
    },
    q = (e) => {
        switch (e) {
            case V.t02.TOO_MANY_EMOJI:
            case V.t02.TOO_MANY_ANIMATED_EMOJI:
                return P.intl.string(P.t.FtKH49);
            case w.j.TOO_BIG:
            case V.t02.INVALID_FILE_ASSET_SIZE:
            case V.t02.INVALID_FORM_BODY:
                return P.intl.formatToPlainString(P.t.kIO9jy, { maxSize: Q.EMOJI_MAX_FILESIZE_KB });
            case V.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
                return P.intl.string(P.t["6WN/qk"]);
            case w.j.MISSING_IMAGE_DATA:
                return P.intl.string(P.t["41/Kbh"]);
            case w.j.MISSING_GUILD:
                return P.intl.string(P.t["8RCtpD"]);
            case w.j.ANIMATED_CROPPING:
                return P.intl.string(P.t.yoVkHN);
            case w.j.IMAGE_LOAD:
                return P.intl.format(P.t.xZLPcF, {});
            case w.j.NO_PERMISSIONS:
                return P.intl.string(P.t.QY7ZFZ);
            case 429:
                return P.intl.string(P.t["4rjikl"]);
            case w.j.UNKNOWN:
            default:
                return P.intl.string(P.t.iufib1);
        }
    },
    Z = (e) => {
        if (e?.body?.code != null) {
            let t = Number(e.body.code);
            if (!Number.isNaN(t)) return t;
        }
        if (e?.text)
            try {
                let t = JSON.parse(e.text);
                if (t?.code != null) {
                    let e = Number(t.code);
                    if (!Number.isNaN(e)) return e;
                }
            } catch (e) {}
        return w.j.UNKNOWN;
    };
var ee = l(691885),
    et = l(159273),
    el = l(548118),
    en = l(492494),
    er = l(711014),
    ei = l(403362),
    ea = l(473145);
let es = (e) => ({ label: e.name, value: e.id }),
    eu = (e) => y.A.can(V.xBc.CREATE_GUILD_EXPRESSIONS, e),
    ec = (e) => {
        let {
                onChange: t,
                selected: l,
                onError: i,
                labelledBy: a,
                isEmojiAnimated: s,
                label: u,
                required: o,
                errorMessage: d,
            } = e,
            m = (0, c.cf)([C.A, er.Ay], () =>
                Object.fromEntries(
                    er.Ay.getFlattenedGuildIds()
                        .map((e) => C.A.getGuild(e))
                        .filter(ei.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            g = (0, c.cf)(
                [et.Ay],
                () =>
                    Object.fromEntries(
                        Object.entries(m).map((e) => {
                            let [t, l] = e;
                            return [
                                t,
                                (function (e) {
                                    let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                        r =
                                            l.filter((e) => e.animated === n && !e.managed && !(0, en.Eg)(e, t.id))
                                                .length ?? 0;
                                    return (0, ea.sN)(t) - r;
                                })({ guild: l, emojis: et.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                            ];
                        }),
                    ),
                [m, s],
            ),
            h = r.useMemo(() => Object.values(m).filter(eu).map(es), [m]),
            j = r.useCallback(
                (e) => {
                    let { value: t, label: l, disabled: r } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: l,
                        disabled: r,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = m[e.value];
                            return null == t
                                ? null
                                : (0, n.jsx)(el.Ay, { guild: t, size: el.Ay.Sizes.SMALLER, active: !0 });
                        })(e),
                        trailing:
                            null == e.value ? null : P.intl.formatToPlainString(P.t.WkK72v, { count: g[e.value] }),
                    };
                },
                [g, m],
            );
        return (
            r.useEffect(() => {
                h.length < 1
                    ? i(w.j.NO_PERMISSIONS)
                    : null != l && (g?.[l] ?? 0) < 1
                      ? i(V.t02.TOO_MANY_EMOJI)
                      : i(null);
            }, [h, t, i, l, g]),
            (0, n.jsx)(ee.l, {
                label: u,
                required: o,
                selectionMode: "single",
                errorMessage: d,
                onSelectionChange: t,
                options: h,
                formatOption: j,
                value: l,
                "aria-labelledby": a,
                placeholder: h.length < 1 ? P.intl.string(P.t.jHpxwo) : P.intl.string(P.t["4mqeQO"]),
                disabled: h.length < 1,
            })
        );
    };
var eo = l(830917),
    ed = l(990078),
    em = l(831453),
    eg = l(725441),
    eh = l(92259),
    ej = l(106236),
    ex = l(218429),
    ef = l(59520),
    eb = l(424632),
    ev = l(902916),
    eE = l(818348),
    eN = l(482390);
let eI = new p.A("ImageEditor"),
    eS = { width: 288, height: 288 },
    eA = r.forwardRef(function (e, t) {
        let { file: l, imageUri: i, onUpdate: a, onThrottledEdit: c } = e,
            o = r.useRef({ x: 0, y: 0 }),
            [d, m] = r.useState({ x: 0, y: 0 }),
            g = r.useRef(null),
            [h, j] = r.useState(1),
            [f, b] = r.useState(null),
            [v, E] = r.useState(!1),
            [N, I] = r.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [S, A] = r.useState(0),
            [p, O] = r.useState({ x: 0, y: 0 }),
            [_, C] = r.useState(!1),
            { isGIF: y, isWebP: M, isCheckingAnimation: k, isEditableAnimatedImage: R } = (0, ev._)(l),
            D = u(l.type) && !y && !M,
            [G, L] = r.useState(null),
            z = (0, ef.I)(c ?? eE.tE, 500),
            F = r.useRef(null),
            K = r.useRef(0),
            H = r.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: o.current.x, y: o.current.y };
                    if (null == g.current) return;
                    let { x: t, y: l } = (0, eb.F3)(e.x, e.y, N);
                    (o.current = { x: t, y: l }),
                        (g.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${S}deg) scaleX(${v ? "-1" : "1"})`),
                        m({ x: t, y: l });
                },
                [g, S, N, v],
            );
        r.useEffect(() => {
            null == f || k || I(e_(f, h, R));
        }, [f, h, R, k]);
        let W = r.useCallback(
                (e) => {
                    if (null == f) return;
                    let t = e_(f, e, R);
                    j(e), I(t), H(), z?.();
                },
                [f, H, R, z],
            ),
            B = r.useCallback(() => {
                if (null == g.current || null == f) return;
                let e = (S + 90) % 360,
                    t = f.height,
                    l = f.width,
                    n = e_({ width: t, height: l }, h, R);
                A(e), b({ width: t, height: l }), I(n), H(), z?.();
            }, [f, S, H, h, R, z]),
            J = r.useCallback(() => {
                null != g.current && (E((e) => !e), H(), z?.());
            }, [g, H, z]),
            U = r.useCallback(() => {
                if (null == f) return {};
                let { height: e, width: t } = eO(ep(f, S), h);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [f, S, h]),
            Y = r.useCallback(() => {
                F.current?.moveGrabber(-0.025);
            }, []),
            $ = r.useCallback(() => {
                F.current?.moveGrabber(0.025);
            }, []),
            V = r.useCallback((e) => {
                O({ x: e.clientX - o.current.x, y: e.clientY - o.current.y }), C(!0);
            }, []);
        r.useEffect(() => {
            let e = () => C(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let Q = r.useCallback(
            (e) => {
                let { x: t, y: l } = o.current;
                _ &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (H({ x: (t = e.clientX - p.x), y: (l = e.clientY - p.y) }), z?.());
            },
            [_, p, H, z],
        );
        r.useEffect(() => {
            if (_) return window.addEventListener("mousemove", Q), () => window.removeEventListener("mousemove", Q);
        }, [Q, _]);
        let X = r.useRef(null),
            q = r.useCallback(async () => {
                let e;
                if (null == g.current || null == f || k) return;
                let t = Date.now(),
                    n = g.current,
                    r = { height: 128, width: 128 },
                    s = null;
                if ((null != X.current && (X.current(), (X.current = null)), R))
                    try {
                        let t = eC(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: eS,
                                    cropOriginCoordinates: o.current,
                                    maxDimensions: r,
                                    imageRotation: S,
                                    flipHorizontal: v,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                f,
                                h,
                            ),
                            { result: i, cancelFn: a } = await (0, eb.ny)(t);
                        (X.current = a), (e = await i);
                    } catch (e) {
                        eI.error("Error cropping animated image", e), (s = w.j.ANIMATED_CROPPING);
                    } finally {
                        X.current?.(), (X.current = null);
                    }
                else
                    e = D
                        ? i
                        : (0, eo.iL)({
                              image: n,
                              cropDimensions: eS,
                              cropOriginCoordinates: o.current,
                              maxDimensions: r,
                              imageRotation: S,
                              flipHorizontal: v,
                          });
                return (
                    a({ imageData: e, imageDataTimestamp: t, error: s, loading: !1 }),
                    () => {
                        X.current?.(), (X.current = null);
                    }
                );
            }, [l, S, R, D, k, a, f, h, i, v]);
        r.useEffect(() => {
            _ || q();
        }, [q, d, S, f, _, h, G, v]);
        let Z = r.useCallback(() => {
                if (null == g.current) return;
                let e = g.current.naturalWidth,
                    t = g.current.naturalHeight;
                b({ width: e, height: t }), A(0), E(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                j(l), L(l), (K.current += 1), I(e_({ width: e, height: t }, l, R)), H({ x: 0, y: 0 });
            }, [g, R, H]),
            ee = r.useCallback(() => {
                Z();
            }, [Z]);
        return (
            r.useImperativeHandle(t, () => ({ reset: Z })),
            (0, n.jsxs)("div", {
                className: s()(eN.j0, { [eN.Id]: _ }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: eN.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: ee,
                                onError: () => {
                                    a({ error: w.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != f),
                                    transform: `translate3d(${o.current.x}px, ${o.current.y}px, 0) rotate(${S}deg) scaleX(${v ? "-1" : "1"})`,
                                    ...U(),
                                },
                                className: eN.Sl,
                                src: i,
                                crossOrigin: "anonymous",
                                alt: P.intl.string(P.t.EYR1Fa),
                                ref: g,
                                onMouseDown: V,
                                draggable: !1,
                            }),
                            !D &&
                                !k &&
                                (0, n.jsx)("div", {
                                    className: eN.Lw,
                                    style: { opacity: +(null != f), width: eS.width, height: eS.height },
                                    children: (0, n.jsx)(T.E, {
                                        className: eN.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: P.intl.string(P.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    D
                        ? (0, n.jsx)("div", {
                              className: eN.Nf,
                              children: (0, n.jsx)(T.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: P.intl.string(P.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: eN.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eN.R5,
                                      children: [
                                          (0, n.jsx)(ed.m, {
                                              text: P.intl.string(P.t.FEIIO9),
                                              "aria-label": P.intl.string(P.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: em.H,
                                                      onClick: B,
                                                      "aria-label": P.intl.string(P.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(ed.m, {
                                              text: P.intl.string(P.t["4LRS2p"]),
                                              "aria-label": P.intl.string(P.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eg.v,
                                                      onClick: J,
                                                      "aria-label": P.intl.string(P.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(eN.mu, eN.R5),
                                      children: [
                                          (0, n.jsx)(ed.m, {
                                              text: P.intl.string(P.t.QlArhK),
                                              "aria-label": P.intl.string(P.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eh.V,
                                                      onClick: Y,
                                                      "aria-label": P.intl.string(P.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != G &&
                                              (0, n.jsx)(
                                                  ej.A,
                                                  {
                                                      ref: F,
                                                      className: eN.aw,
                                                      initialValue: G,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: W,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": P.intl.string(P.t["2hPcVJ"]),
                                                  },
                                                  K.current,
                                              ),
                                          (0, n.jsx)(ed.m, {
                                              text: P.intl.string(P.t.Ch32tT),
                                              "aria-label": P.intl.string(P.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ex.r,
                                                      onClick: $,
                                                      "aria-label": P.intl.string(P.t.Ch32tT),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                ],
            })
        );
    }),
    ep = (e, t) => {
        let { width: l, height: n } = e;
        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
    },
    eO = (e, t) => {
        let { width: l, height: n } = e,
            r = 288 * t,
            i = l / n;
        return l > n ? (n = (l = r) / i) : (l = (n = r) * i), { width: l, height: n };
    };
function e_(e, t, l) {
    let { width: n, height: r } = eO(e, t),
        i = Math.abs(288 - n) / 2,
        a = Math.abs(288 - r) / 2;
    return l && (n < 288 || r < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -i, right: i };
}
let eC = (e, t, l) => {
    let { height: n, width: r } = eO(t, l),
        i = (n = Math.min(n, 288)) / (r = Math.min(r, 288)),
        a = { height: n, width: r },
        s = Math.floor(i < 1 ? 128 * i : 128 / i);
    return { ...e, cropDimensions: a, resizeHeight: i < 1 ? s : 128, resizeWidth: i > 1 ? s : 128 };
};
var ey = l(905702);
let eM = new p.A("EmojiStudio"),
    ek = (e) => {
        var t;
        let l,
            { guildId: i } = e,
            a = "userImage" in e ? e.userImage : void 0,
            p = "emoji" in e ? e.emoji : void 0,
            T = !!p,
            [F, K] = r.useState(a ?? null),
            [H, W] = r.useState(!1),
            U = (0, c.bG)([C.A, M.A, y.A], () => {
                let e = M.A.getGuildId(),
                    t = C.A.getGuild(e);
                return y.A.can(V.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [Q, ee] = r.useState(i ?? U),
            [et, el] = r.useState(!1),
            [en, er] = r.useState(null),
            [ei, ea] = r.useState(null),
            [es, eu] = r.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return R.Ay.sanitizeEmojiName(n);
                })(F),
            ),
            [eo, ed] = r.useState(null),
            em = r.useRef(Date.now()),
            eg = r.useRef(0),
            eh = r.useRef(0),
            ej = r.useRef(!1),
            ex = r.useRef(null),
            [ef, eb] = r.useState(!1),
            ev = r.useRef(null),
            eE =
                ((t = F?.file),
                (l = r.useRef(null)),
                r.useEffect(() => {
                    if (null == t) {
                        l.current = null;
                        return;
                    }
                    l.current = S.A.fromBlob(A.f.EMOJI, t);
                }, [t]),
                l);
        r.useEffect(
            () => (
                (0, D.O)(!1),
                () => {
                    (0, D.O)(!1);
                }
            ),
            [],
        ),
            r.useEffect(() => {
                if (null == p) return;
                let e = O.A.getEmojiRawAsset(p.id);
                if (null != e) {
                    K(e), ed(e.data), eu(p.name), W(!1);
                    return;
                }
                W(!0),
                    (0, $.$)(p)
                        .then((e) => {
                            K(e), ed(e.data), eu(p.name), W(!1);
                        })
                        .catch((e) => {
                            eM.error("Failed to fetch emoji image", e), er(w.j.MISSING_IMAGE_DATA), W(!1);
                        });
            }, [p]);
        let eN = r.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = en ?? ei;
                k.default.track(V.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === eg.current,
                    has_image: null != F,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eh.current,
                    session_duration_ms: Date.now() - em.current,
                    has_guild_selected: null != Q,
                });
            },
            [en, ei, em, F, Q],
        );
        (0, I.l0)(() => {
            ej.current || eN({ reason: "closed" });
        });
        let eI = r.useCallback(async () => {
                if ((er(null), null == Q)) return void er(w.j.MISSING_GUILD);
                if (null == F || F?.file == null || null == eo) return void er(w.j.MISSING_IMAGE_DATA);
                el(!0);
                let e = (await eE.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    (t = await (0, N.Gf)({
                        image: eo,
                        guildId: Q,
                        name: es,
                        originalMd5: e,
                        analyticsLocation: { page: V.liQ.EMOJI_STUDIO },
                    })),
                        _.X({ emojiId: t.id, userImage: { ...F } });
                } catch (e) {
                    el(!1), er(Z(e)), eM.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != p)
                    try {
                        await (0, N.ak)(Q, p.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            E.A.show({ title: P.intl.string(P.t.iufib1), body: P.intl.string(P.t.Whhv4w) });
                        else {
                            el(!1), er(Z(e)), eM.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, D.O)(!1),
                    (0, o.closeModal)(w.y),
                    eN({ reason: "uploaded" }),
                    (ej.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, G.P0)(
                            (0, L.o)("", z.Ck.CUSTOM, {
                                position: z.xJ.TOP,
                                component: (0, n.jsx)(J, { emoji: t, guildId: l }),
                                duration: B,
                            }),
                        );
                    })({ emoji: t, guildId: Q }),
                    el(!1);
            }, [Q, F, p, eo, eN, es, eE]),
            eS = r.useCallback(() => {
                er(null), null != F && ed(F.data), (eh.current = 0), (0, D.O)(!1), ex.current?.reset();
            }, [ex, F]),
            ep = r.useCallback(() => {
                (0, $.p)({ onClose: eS });
            }, [eS]),
            eO = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    r = null;
                null != t && R.Ay.isDataTooBig(t) && (r = w.j.TOO_BIG),
                    er(n ?? r),
                    l < eg.current || (null != t && (ed(t), (eg.current = l)));
            }, []),
            e_ = r.useCallback(() => {
                eh.current++, (0, D.O)(!0);
            }, []),
            eC = T ? P.intl.string(P.t.FOYn8U) : P.intl.string(P.t.iMJO37);
        return H || null == F
            ? (0, n.jsx)("main", {
                  className: ey.iW,
                  children: (0, n.jsxs)("div", {
                      className: ey.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: ey.uv,
                              children: (0, n.jsx)(d.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: ey.DD,
                                  children: eC,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: ey.b,
                              children: (0, n.jsx)(m.J, { size: "md", onClick: ep }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(ey.iW, { [ey.WY]: null != F }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: ey.EN,
                          children: [
                              (0, n.jsx)(eA, {
                                  ref: ex,
                                  file: F.file,
                                  imageUri: F.data,
                                  onUpdate: eO,
                                  onThrottledEdit: e_,
                              }),
                              (0, n.jsx)("div", {
                                  className: ey.uv,
                                  children: (0, n.jsx)(d.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: ey.DD,
                                      children: eC,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ey.b,
                                  children: (0, n.jsx)(m.J, { size: "md", onClick: ep }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ey.WA,
                                  children: (0, n.jsx)(g.Y, {
                                      targetElementRef: ev,
                                      "aria-label": P.intl.string(P.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(h.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": P.intl.string(P.t.vznjTl),
                                              children: (0, n.jsx)(j.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: P.intl.string(P.t.ka3Yhm),
                                                  action: eS,
                                              }),
                                          });
                                      },
                                      shouldShow: ef,
                                      onRequestClose: () => eb(!1),
                                      children: () =>
                                          (0, n.jsx)(x.K, {
                                              buttonRef: ev,
                                              variant: "icon-only",
                                              icon: f.n,
                                              onClick: () => eb(!0),
                                              "aria-label": P.intl.string(P.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: ey.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: ey.ey,
                                  children: (0, n.jsx)(b.D, {
                                      label: P.intl.string(P.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: ey.Br,
                                                      children: [
                                                          (0, n.jsx)(eR, {
                                                              src: eo,
                                                              alt: P.intl.string(P.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: ey.SA,
                                                      children: (0, n.jsx)(eR, {
                                                          src: eo,
                                                          alt: P.intl.string(P.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(Y, {
                                      label: P.intl.string(P.t.m0YV7M),
                                      name: es,
                                      onNameChange: eu,
                                  }),
                              }),
                              T
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(ec, {
                                            label: P.intl.string(P.t["9uKafS"]),
                                            required: !0,
                                            onChange: ee,
                                            selected: Q,
                                            onError: (e) => ea(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: u(F?.file?.type),
                                            errorMessage: null != ei ? q(ei) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: ey.jt,
                                  children: [
                                      null != en &&
                                          (0, n.jsx)(X, {
                                              error: en,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(v.$, {
                                          text: P.intl.string(P.t.Q7UP6F),
                                          onClick: eI,
                                          loading: et,
                                          disabled: et || null == F || null == Q || es.length < 2 || null != ei,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    eR = (e) => {
        let { src: t, alt: l } = e;
        return null == t || "" === t ? (0, n.jsx)("div", { className: ey.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
    };
var eD = l(250747);
let ew = (e) => {
    let { transitionState: t, guildId: l } = e,
        r = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != r ? { userImage: r } : {}) };
    return (0, n.jsx)(i.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: eD.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(i.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: eD.jE,
            children: (0, n.jsx)(ek, { ...s }),
        }),
    });
};
