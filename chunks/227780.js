l.d(t, { EmojiStudioModal: () => eR });
var n = l(477900),
    i = l(582128),
    r = l(935462),
    a = l(503698),
    s = l.n(a),
    u = l(17928),
    o = l(192308),
    c = l(297264),
    d = l(815021),
    m = l(922016),
    h = l(980707),
    g = l(477782),
    f = l(408278),
    x = l(454743),
    j = l(452027),
    v = l(821609),
    E = l(157559),
    N = l(554375),
    I = l(964486),
    b = l(268429),
    A = l(61310),
    S = l(626584),
    M = l(691223),
    p = l(288224),
    O = l(902916),
    _ = l(71393),
    C = l(576705),
    y = l(967198),
    w = l(174459),
    k = l(690521),
    R = l(339143),
    D = l(80569),
    T = l(834730),
    G = l(858899),
    L = l(739187),
    z = l(857250),
    F = l(97483),
    Z = l(565645),
    H = l(973283),
    P = l(927813),
    B = l(375708),
    J = l(678058),
    V = l(655214);
let K = 6 * P.A.Millis.SECOND;
function U(e) {
    let { emoji: t, guildId: l } = e,
        i = (0, u.bG)([_.A], () => _.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: s()(V.oR, J.o),
        children: [
            (0, n.jsx)(Z.A, { emojiId: t.id, size: "default" }),
            (0, n.jsx)(T.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: B.intl.format(B.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, n.jsx)(
                            T.E,
                            { variant: "text-md/semibold", color: "text-strong", tag: "strong", children: e },
                            t,
                        ),
                    guildName: i,
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
var W = l(95477);
function Y(e) {
    let { name: t, onNameChange: l, label: r } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        [u, o] = i.useState(!1),
        c = i.useCallback(
            (e) => {
                ((s.current = a.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : k.Ay.sanitizeEmojiName(e))));
            },
            [l],
        );
    i.useEffect(() => {
        null != s.current && (a.current?.setSelectionRange(s.current, s.current), (s.current = null));
    });
    let d = i.useCallback(() => {
            o(!1);
        }, []),
        m = i.useCallback(() => {
            o(!0);
        }, []);
    return (0, n.jsx)(W.k, {
        inputRef: a,
        error: u ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: c,
        placeholder: B.intl.string(B.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: r,
        clearable: !0,
        required: !0,
    });
}
var $ = l(308295),
    Q = l(652215),
    X = l(307731);
function q(e) {
    let { error: t, variant: l, color: i } = e;
    return (0, n.jsx)(T.E, { variant: l, color: i, children: ee(t) });
}
function ee(e) {
    switch (e) {
        case Q.t02.TOO_MANY_EMOJI:
        case Q.t02.TOO_MANY_ANIMATED_EMOJI:
            return B.intl.string(B.t.FtKH49);
        case D.j.TOO_BIG:
        case Q.t02.INVALID_FILE_ASSET_SIZE:
        case Q.t02.INVALID_FORM_BODY:
            return B.intl.formatToPlainString(B.t.kIO9jy, { maxSize: X.EMOJI_MAX_FILESIZE_KB });
        case Q.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
            return B.intl.string(B.t["6WN/qk"]);
        case D.j.MISSING_IMAGE_DATA:
            return B.intl.string(B.t["41/Kbh"]);
        case D.j.MISSING_GUILD:
            return B.intl.string(B.t["8RCtpD"]);
        case D.j.ANIMATED_CROPPING:
            return B.intl.string(B.t.yoVkHN);
        case D.j.IMAGE_LOAD:
            return B.intl.format(B.t.xZLPcF, {});
        case D.j.NO_PERMISSIONS:
            return B.intl.string(B.t.QY7ZFZ);
        case 429:
            return B.intl.string(B.t["4rjikl"]);
        case D.j.UNKNOWN:
        default:
            return B.intl.string(B.t.iufib1);
    }
}
function et(e) {
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
    return D.j.UNKNOWN;
}
var el = l(691885),
    en = l(236285),
    ei = l(548118),
    er = l(492494),
    ea = l(711014),
    es = l(403362),
    eu = l(473145);
function eo(e) {
    return { label: e.name, value: e.id };
}
function ec(e) {
    return C.A.can(Q.xBc.CREATE_GUILD_EXPRESSIONS, e);
}
function ed(e) {
    let {
            onChange: t,
            selected: l,
            onError: r,
            labelledBy: a,
            isEmojiAnimated: s,
            label: o,
            required: c,
            errorMessage: d,
        } = e,
        m = (0, u.cf)([_.A, ea.Ay], () =>
            Object.fromEntries(
                ea.Ay.getFlattenedGuildIds()
                    .map((e) => _.A.getGuild(e))
                    .filter(es.Vq)
                    .map((e) => [e.id, e]),
            ),
        ),
        h = (0, u.cf)(
            [en.Ay],
            () =>
                Object.fromEntries(
                    Object.entries(m).map((e) => {
                        let [t, l] = e;
                        return [
                            t,
                            (function (e) {
                                let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                    i =
                                        l.filter((e) => e.animated === n && !e.managed && !(0, er.Eg)(e, t.id))
                                            .length ?? 0;
                                return (0, eu.sN)(t) - i;
                            })({ guild: l, emojis: en.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                        ];
                    }),
                ),
            [m, s],
        ),
        g = i.useMemo(() => Object.values(m).filter(ec).map(eo), [m]),
        f = i.useCallback(
            (e) => {
                let { value: t, label: l, disabled: i } = e;
                return {
                    id: String(t),
                    value: t,
                    label: l,
                    disabled: i,
                    leading: (function (e) {
                        if (null == e.value) return null;
                        let t = m[e.value];
                        return null == t
                            ? null
                            : (0, n.jsx)(ei.Ay, { guild: t, size: ei.Ay.Sizes.SMALLER, active: !0 });
                    })(e),
                    trailing: null == e.value ? null : B.intl.formatToPlainString(B.t.WkK72v, { count: h[e.value] }),
                };
            },
            [h, m],
        );
    return (
        i.useEffect(() => {
            g.length < 1 ? r(D.j.NO_PERMISSIONS) : null != l && (h?.[l] ?? 0) < 1 ? r(Q.t02.TOO_MANY_EMOJI) : r(null);
        }, [g, t, r, l, h]),
        (0, n.jsx)(el.l, {
            label: o,
            required: c,
            selectionMode: "single",
            errorMessage: d,
            onSelectionChange: t,
            options: g,
            formatOption: f,
            value: l,
            "aria-labelledby": a,
            placeholder: g.length < 1 ? B.intl.string(B.t.jHpxwo) : B.intl.string(B.t["4mqeQO"]),
            disabled: g.length < 1,
        })
    );
}
var em = l(830917),
    eh = l(866665),
    eg = l(831453),
    ef = l(725441),
    ex = l(92259),
    ej = l(299163),
    ev = l(218429),
    eE = l(59520),
    eN = l(424632),
    eI = l(818348),
    eb = l(162555);
let eA = new S.A("ImageEditor"),
    eS = { width: 288, height: 288 },
    eM = i.forwardRef(function (e, t) {
        let l,
            { file: r, imageUri: a, onUpdate: u, onThrottledEdit: o } = e,
            c = i.useRef({ x: 0, y: 0 }),
            [d, m] = i.useState({ x: 0, y: 0 }),
            h = i.useRef(null),
            [g, x] = i.useState(1),
            [j, v] = i.useState(null),
            [E, N] = i.useState(!1),
            [I, b] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [A, S] = i.useState(0),
            [M, p] = i.useState({ x: 0, y: 0 }),
            [_, C] = i.useState(!1),
            { isGIF: y, isWebP: w, isCheckingAnimation: k, isEditableAnimatedImage: R } = (0, O._)(r),
            G = ("image/gif" === (l = r.type) || "image/webp" === l || "image/avif" === l) && !y && !w,
            [L, z] = i.useState(null),
            F = (0, eE.I)(o ?? eI.tE, 500),
            Z = i.useRef(null),
            H = i.useRef(0),
            P = i.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: c.current.x, y: c.current.y };
                    if (null == h.current) return;
                    let { x: t, y: l } = (0, eN.F3)(e.x, e.y, I);
                    ((c.current = { x: t, y: l }),
                        (h.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`),
                        m({ x: t, y: l }));
                },
                [h, A, I, E],
            );
        i.useEffect(() => {
            null == j || k || b(eO(j, g, R));
        }, [j, g, R, k]);
        let J = i.useCallback(
                (e) => {
                    if (null == j) return;
                    let t = eO(j, e, R);
                    (x(e), b(t), P(), F?.());
                },
                [j, P, R, F],
            ),
            V = i.useCallback(() => {
                if (null == h.current || null == j) return;
                let e = (A + 90) % 360,
                    t = j.height,
                    l = j.width,
                    n = eO({ width: t, height: l }, g, R);
                (S(e), v({ width: t, height: l }), b(n), P(), F?.());
            }, [j, A, P, g, R, F]),
            K = i.useCallback(() => {
                null != h.current && (N((e) => !e), P(), F?.());
            }, [h, P, F]),
            U = i.useCallback(() => {
                if (null == j) return {};
                let { height: e, width: t } = ep(
                    (function (e, t) {
                        let { width: l, height: n } = e;
                        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
                    })(j, A),
                    g,
                );
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [j, A, g]),
            W = i.useCallback(() => {
                Z.current?.moveGrabber(-0.025);
            }, []),
            Y = i.useCallback(() => {
                Z.current?.moveGrabber(0.025);
            }, []),
            $ = i.useCallback((e) => {
                (p({ x: e.clientX - c.current.x, y: e.clientY - c.current.y }), C(!0));
            }, []);
        i.useEffect(() => {
            function e() {
                return C(!1);
            }
            return (window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e));
        }, []);
        let Q = i.useCallback(
            (e) => {
                let { x: t, y: l } = c.current;
                _ &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (P({ x: (t = e.clientX - M.x), y: (l = e.clientY - M.y) }), F?.());
            },
            [_, M, P, F],
        );
        i.useEffect(() => {
            if (_) return (window.addEventListener("mousemove", Q), () => window.removeEventListener("mousemove", Q));
        }, [Q, _]);
        let q = i.useRef(null),
            ee = i.useCallback(async () => {
                let e;
                if (null == h.current || null == j || k) return;
                let t = Date.now(),
                    l = h.current,
                    n = Math.min(128, Math.max(j.height, j.width)),
                    i = { height: n, width: n },
                    s = null;
                null != q.current && (q.current(), (q.current = null));
                let { x: o, y: d } = c.current;
                if (
                    0 === A &&
                    !E &&
                    1 === g &&
                    0 === o &&
                    0 === d &&
                    j.width === j.height &&
                    r.size <= X.EMOJI_MAX_FILESIZE
                )
                    e = a;
                else if (R)
                    try {
                        let t = (function (e, t, l) {
                                let { height: n, width: i } = ep(t, l),
                                    r = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
                                    a = { height: n, width: i },
                                    s = Math.min(128, Math.max(t.height, t.width)),
                                    u = Math.floor(r < 1 ? s * r : s / r);
                                return {
                                    ...e,
                                    cropDimensions: a,
                                    resizeHeight: r < 1 ? u : s,
                                    resizeWidth: r > 1 ? u : s,
                                };
                            })(
                                {
                                    file: r,
                                    image: l,
                                    cropDimensions: eS,
                                    cropOriginCoordinates: c.current,
                                    maxDimensions: i,
                                    imageRotation: A,
                                    flipHorizontal: E,
                                    resizeWidth: n,
                                    resizeHeight: n,
                                },
                                j,
                                g,
                            ),
                            { result: a, cancelFn: s } = await (0, eN.ny)(t);
                        ((q.current = s), (e = await a));
                    } catch (e) {
                        (eA.error("Error cropping animated image", e), (s = D.j.ANIMATED_CROPPING));
                    } finally {
                        (q.current?.(), (q.current = null));
                    }
                else
                    e = G
                        ? a
                        : (0, em.iL)({
                              image: l,
                              cropDimensions: eS,
                              cropOriginCoordinates: c.current,
                              maxDimensions: i,
                              imageRotation: A,
                              flipHorizontal: E,
                          });
                return (
                    u({ imageData: e, imageDataTimestamp: t, error: s, loading: !1 }),
                    () => {
                        (q.current?.(), (q.current = null));
                    }
                );
            }, [r, A, R, G, k, u, j, g, a, E]);
        i.useEffect(() => {
            _ || ee();
        }, [ee, d, A, j, _, g, L, E]);
        let et = i.useCallback(() => {
                if (null == h.current) return;
                let e = h.current.naturalWidth,
                    t = h.current.naturalHeight;
                (v({ width: e, height: t }), S(0), N(!1));
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                (x(l), z(l), (H.current += 1), b(eO({ width: e, height: t }, l, R)), P({ x: 0, y: 0 }));
            }, [h, R, P]),
            el = i.useCallback(() => {
                et();
            }, [et]);
        return (
            i.useImperativeHandle(t, () => ({ reset: et })),
            (0, n.jsxs)("div", {
                className: s()(eb.j0, { [eb.Id]: _ }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: eb.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: el,
                                onError: () => {
                                    u({ error: D.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != j),
                                    transform: `translate3d(${c.current.x}px, ${c.current.y}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`,
                                    ...U(),
                                },
                                className: eb.Sl,
                                src: a,
                                crossOrigin: "anonymous",
                                alt: B.intl.string(B.t.EYR1Fa),
                                ref: h,
                                onMouseDown: $,
                                draggable: !1,
                            }),
                            !G &&
                                !k &&
                                (0, n.jsx)("div", {
                                    className: eb.Lw,
                                    style: { opacity: +(null != j), width: eS.width, height: eS.height },
                                    children: (0, n.jsx)(T.E, {
                                        className: eb.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: B.intl.string(B.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    G
                        ? (0, n.jsx)("div", {
                              className: eb.Nf,
                              children: (0, n.jsx)(T.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: B.intl.string(B.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: eb.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eb.R5,
                                      children: [
                                          (0, n.jsx)(eh.m, {
                                              text: B.intl.string(B.t.FEIIO9),
                                              "aria-label": B.intl.string(B.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eg.H,
                                                      onClick: V,
                                                      "aria-label": B.intl.string(B.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(eh.m, {
                                              text: B.intl.string(B.t["4LRS2p"]),
                                              "aria-label": B.intl.string(B.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ef.v,
                                                      onClick: K,
                                                      "aria-label": B.intl.string(B.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(eb.mu, eb.R5),
                                      children: [
                                          (0, n.jsx)(eh.m, {
                                              text: B.intl.string(B.t.QlArhK),
                                              "aria-label": B.intl.string(B.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ex.V,
                                                      onClick: W,
                                                      "aria-label": B.intl.string(B.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != L &&
                                              (0, n.jsx)(
                                                  ej.A,
                                                  {
                                                      ref: Z,
                                                      className: eb.aw,
                                                      initialValue: L,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: J,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": B.intl.string(B.t["2hPcVJ"]),
                                                  },
                                                  H.current,
                                              ),
                                          (0, n.jsx)(eh.m, {
                                              text: B.intl.string(B.t.Ch32tT),
                                              "aria-label": B.intl.string(B.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ev.r,
                                                      onClick: Y,
                                                      "aria-label": B.intl.string(B.t.Ch32tT),
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
    });
function ep(e, t) {
    let { width: l, height: n } = e,
        i = 288 * t,
        r = l / n;
    return (l > n ? (n = (l = i) / r) : (l = (n = i) * r), { width: l, height: n });
}
function eO(e, t, l) {
    let { width: n, height: i } = ep(e, t),
        r = Math.abs(288 - n) / 2,
        a = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
var e_ = l(740243);
let eC = new S.A("EmojiStudio"),
    ey = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            S = "emoji" in e ? e.emoji : void 0,
            T = !!S,
            [Z, P] = i.useState(a ?? null),
            [J, V] = i.useState(!1),
            W = (0, u.bG)([_.A, y.A, C.A], () => {
                let e = y.A.getGuildId(),
                    t = _.A.getGuild(e);
                return C.A.can(Q.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [X, el] = i.useState(r ?? W),
            [en, ei] = i.useState(!1),
            [er, ea] = i.useState(null),
            [es, eu] = i.useState(null),
            [eo, ec] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return k.Ay.sanitizeEmojiName(n);
                })(Z),
            ),
            [em, eh] = i.useState(null),
            eg = i.useRef(Date.now()),
            ef = i.useRef(0),
            ex = i.useRef(0),
            ej = i.useRef(!1),
            ev = i.useRef(null),
            [eE, eN] = i.useState(!1),
            eI = i.useRef(null),
            eb =
                ((t = Z?.file),
                (l = i.useRef(null)),
                i.useEffect(() => {
                    if (null == t) {
                        l.current = null;
                        return;
                    }
                    l.current = b.A.fromBlob(A.f.EMOJI, t);
                }, [t]),
                l),
            { isEditableAnimatedImage: eA } = (0, O._)(Z?.file),
            eS = eA || Z?.file?.type === "image/avif";
        (i.useEffect(
            () => (
                (0, R.O)(!1),
                () => {
                    (0, R.O)(!1);
                }
            ),
            [],
        ),
            i.useEffect(() => {
                if (null == S) return;
                let e = M.A.getEmojiRawAsset(S.id);
                if (null != e) {
                    (P(e), eh(e.data), ec(S.name), V(!1));
                    return;
                }
                (V(!0),
                    (0, $.$)(S)
                        .then((e) => {
                            (P(e), eh(e.data), ec(S.name), V(!1));
                        })
                        .catch((e) => {
                            (eC.error("Failed to fetch emoji image", e), ea(D.j.MISSING_IMAGE_DATA), V(!1));
                        }));
            }, [S]));
        let ep = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = er ?? es;
                w.default.track(Q.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ef.current,
                    has_image: null != Z,
                    error: null == l ? null : String(l),
                    throttled_edit_count: ex.current,
                    session_duration_ms: Date.now() - eg.current,
                    has_guild_selected: null != X,
                });
            },
            [er, es, eg, Z, X],
        );
        (0, I.l0)(() => {
            ej.current || ep({ reason: "closed" });
        });
        let eO = i.useCallback(async () => {
                if ((ea(null), null == X)) return void ea(D.j.MISSING_GUILD);
                if (null == Z || Z?.file == null || null == em) return void ea(D.j.MISSING_IMAGE_DATA);
                ei(!0);
                let e = (await eb.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    ((t = await (0, N.Gf)({
                        image: em,
                        guildId: X,
                        name: eo,
                        originalMd5: e,
                        analyticsLocation: { page: Q.liQ.EMOJI_STUDIO },
                    })),
                        p.X({ emojiId: t.id, userImage: { ...Z } }));
                } catch (e) {
                    (ei(!1), ea(et(e)), eC.error("Failed to upload emoji.", e));
                    return;
                }
                if (null != S)
                    try {
                        await (0, N.ak)(X, S.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            E.A.show({ title: B.intl.string(B.t.iufib1), body: B.intl.string(B.t.Whhv4w) });
                        else {
                            (ei(!1), ea(et(e)), eC.error("Failed to delete emoji.", e));
                            return;
                        }
                    }
                ((0, R.O)(!1),
                    (0, o.closeModal)(D.y),
                    ep({ reason: "uploaded" }),
                    (ej.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, H.WD)("showEmojiCreatedToast")
                            ? (0, G.P0)({
                                  text: B.intl.formatToPlainString(B.t.BaxFf8, {
                                      emojiName: t.name,
                                      emojiNameHook: (e) => e,
                                      guildName: _.A.getGuild(l)?.name,
                                      guildNameHook: (e) => e,
                                  }),
                                  icon: { type: "emoji", src: (0, k.Ez)(t), alt: t.name },
                              })
                            : (0, L.P)(
                                  (0, z.o)("", F.Ck.CUSTOM, {
                                      position: F.xJ.TOP,
                                      component: (0, n.jsx)(U, { emoji: t, guildId: l }),
                                      duration: K,
                                  }),
                              );
                    })({ emoji: t, guildId: X }),
                    ei(!1));
            }, [X, Z, S, em, ep, eo, eb]),
            ey = i.useCallback(() => {
                (ea(null), null != Z && eh(Z.data), (ex.current = 0), (0, R.O)(!1), ev.current?.reset());
            }, [ev, Z]),
            ek = i.useCallback(() => {
                (0, $.p)({ onClose: ey });
            }, [ey]),
            eR = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                (null != t && k.Ay.isDataTooBig(t) && (i = D.j.TOO_BIG),
                    ea(n ?? i),
                    l < ef.current || (null != t && (eh(t), (ef.current = l))));
            }, []),
            eD = i.useCallback(() => {
                (ex.current++, (0, R.O)(!0));
            }, []),
            eT = T ? B.intl.string(B.t.FOYn8U) : B.intl.string(B.t.iMJO37);
        return J || null == Z
            ? (0, n.jsx)("main", {
                  className: e_.iW,
                  children: (0, n.jsxs)("div", {
                      className: e_.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: e_.uv,
                              children: (0, n.jsx)(c.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: e_.DD,
                                  children: eT,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: e_.b,
                              children: (0, n.jsx)(d.J, { size: "md", onClick: ek }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(e_.iW, { [e_.WY]: null != Z }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: e_.EN,
                          children: [
                              (0, n.jsx)(eM, {
                                  ref: ev,
                                  file: Z.file,
                                  imageUri: Z.data,
                                  onUpdate: eR,
                                  onThrottledEdit: eD,
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.uv,
                                  children: (0, n.jsx)(c.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: e_.DD,
                                      children: eT,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.b,
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: ek }),
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.WA,
                                  children: (0, n.jsx)(m.Y, {
                                      targetElementRef: eI,
                                      "aria-label": B.intl.string(B.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(h.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": B.intl.string(B.t.vznjTl),
                                              children: (0, n.jsx)(g.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: B.intl.string(B.t.ka3Yhm),
                                                  action: ey,
                                              }),
                                          });
                                      },
                                      shouldShow: eE,
                                      onRequestClose: () => eN(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: eI,
                                              variant: "icon-only",
                                              icon: x.n,
                                              onClick: () => eN(!0),
                                              "aria-label": B.intl.string(B.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: e_.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: e_.ey,
                                  children: (0, n.jsx)(j.D, {
                                      label: B.intl.string(B.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: e_.Br,
                                                      children: [
                                                          (0, n.jsx)(ew, {
                                                              src: em,
                                                              alt: B.intl.string(B.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: e_.SA,
                                                      children: (0, n.jsx)(ew, {
                                                          src: em,
                                                          alt: B.intl.string(B.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(Y, {
                                      label: B.intl.string(B.t.m0YV7M),
                                      name: eo,
                                      onNameChange: ec,
                                  }),
                              }),
                              T
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(ed, {
                                            label: B.intl.string(B.t["9uKafS"]),
                                            required: !0,
                                            onChange: el,
                                            selected: X,
                                            onError: (e) => eu(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: eS,
                                            errorMessage: null != es ? ee(es) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: e_.jt,
                                  children: [
                                      null != er &&
                                          (0, n.jsx)(q, {
                                              error: er,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(v.$, {
                                          text: B.intl.string(B.t.Q7UP6F),
                                          onClick: eO,
                                          loading: en,
                                          disabled: en || null == Z || null == X || eo.length < 2 || null != es,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
function ew(e) {
    let { src: t, alt: l } = e;
    return null == t || "" === t ? (0, n.jsx)("div", { className: e_.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
}
var ek = l(77634);
function eR(e) {
    let { transitionState: t, guildId: l } = e,
        i = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != i ? { userImage: i } : {}) };
    return (0, n.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: ek.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: ek.jE,
            children: (0, n.jsx)(ey, { ...s }),
        }),
    });
}
