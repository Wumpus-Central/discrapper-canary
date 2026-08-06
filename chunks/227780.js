l.d(t, { EmojiStudioModal: () => ew });
var n = l(477900),
    i = l(582128),
    r = l(935462),
    a = l(503698),
    s = l.n(a),
    u = l(17928),
    c = l(192308),
    o = l(297264),
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
    b = l(964486),
    I = l(77257),
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
    G = l(691540),
    L = l(857250),
    z = l(97483),
    F = l(565645),
    Z = l(927813),
    H = l(375708),
    V = l(492687),
    B = l(871645);
let J = 6 * Z.A.Millis.SECOND;
function K(e) {
    let { emoji: t, guildId: l } = e,
        i = (0, u.bG)([_.A], () => _.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: s()(B.oR, V.o),
        children: [
            (0, n.jsx)(F.A, { emojiId: t.id, size: "default" }),
            (0, n.jsx)(T.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: H.intl.format(H.t.BaxFf8, {
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
var P = l(292666);
function U(e) {
    let { name: t, onNameChange: l, label: r } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        [u, c] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                (s.current = a.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : k.Ay.sanitizeEmojiName(e)));
            },
            [l],
        );
    i.useEffect(() => {
        null != s.current && (a.current?.setSelectionRange(s.current, s.current), (s.current = null));
    });
    let d = i.useCallback(() => {
            c(!1);
        }, []),
        m = i.useCallback(() => {
            c(!0);
        }, []);
    return (0, n.jsx)(P.k, {
        inputRef: a,
        error: u ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: o,
        placeholder: H.intl.string(H.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: r,
        clearable: !0,
        required: !0,
    });
}
var W = l(308295),
    Y = l(652215),
    $ = l(307731);
function Q(e) {
    let { error: t, variant: l, color: i } = e;
    return (0, n.jsx)(T.E, { variant: l, color: i, children: X(t) });
}
function X(e) {
    switch (e) {
        case Y.t02.TOO_MANY_EMOJI:
        case Y.t02.TOO_MANY_ANIMATED_EMOJI:
            return H.intl.string(H.t.FtKH49);
        case D.j.TOO_BIG:
        case Y.t02.INVALID_FILE_ASSET_SIZE:
        case Y.t02.INVALID_FORM_BODY:
            return H.intl.formatToPlainString(H.t.kIO9jy, { maxSize: $.EMOJI_MAX_FILESIZE_KB });
        case Y.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
            return H.intl.string(H.t["6WN/qk"]);
        case D.j.MISSING_IMAGE_DATA:
            return H.intl.string(H.t["41/Kbh"]);
        case D.j.MISSING_GUILD:
            return H.intl.string(H.t["8RCtpD"]);
        case D.j.ANIMATED_CROPPING:
            return H.intl.string(H.t.yoVkHN);
        case D.j.IMAGE_LOAD:
            return H.intl.format(H.t.xZLPcF, {});
        case D.j.NO_PERMISSIONS:
            return H.intl.string(H.t.QY7ZFZ);
        case 429:
            return H.intl.string(H.t["4rjikl"]);
        case D.j.UNKNOWN:
        default:
            return H.intl.string(H.t.iufib1);
    }
}
function q(e) {
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
var ee = l(691885),
    et = l(236285),
    el = l(548118),
    en = l(492494),
    ei = l(711014),
    er = l(403362),
    ea = l(473145);
function es(e) {
    return { label: e.name, value: e.id };
}
function eu(e) {
    return C.A.can(Y.xBc.CREATE_GUILD_EXPRESSIONS, e);
}
function ec(e) {
    let {
            onChange: t,
            selected: l,
            onError: r,
            labelledBy: a,
            isEmojiAnimated: s,
            label: c,
            required: o,
            errorMessage: d,
        } = e,
        m = (0, u.cf)([_.A, ei.Ay], () =>
            Object.fromEntries(
                ei.Ay.getFlattenedGuildIds()
                    .map((e) => _.A.getGuild(e))
                    .filter(er.Vq)
                    .map((e) => [e.id, e]),
            ),
        ),
        h = (0, u.cf)(
            [et.Ay],
            () =>
                Object.fromEntries(
                    Object.entries(m).map((e) => {
                        let [t, l] = e;
                        return [
                            t,
                            (function (e) {
                                let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                    i =
                                        l.filter((e) => e.animated === n && !e.managed && !(0, en.Eg)(e, t.id))
                                            .length ?? 0;
                                return (0, ea.sN)(t) - i;
                            })({ guild: l, emojis: et.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                        ];
                    }),
                ),
            [m, s],
        ),
        g = i.useMemo(() => Object.values(m).filter(eu).map(es), [m]),
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
                            : (0, n.jsx)(el.Ay, { guild: t, size: el.Ay.Sizes.SMALLER, active: !0 });
                    })(e),
                    trailing: null == e.value ? null : H.intl.formatToPlainString(H.t.WkK72v, { count: h[e.value] }),
                };
            },
            [h, m],
        );
    return (
        i.useEffect(() => {
            g.length < 1 ? r(D.j.NO_PERMISSIONS) : null != l && (h?.[l] ?? 0) < 1 ? r(Y.t02.TOO_MANY_EMOJI) : r(null);
        }, [g, t, r, l, h]),
        (0, n.jsx)(ee.l, {
            label: c,
            required: o,
            selectionMode: "single",
            errorMessage: d,
            onSelectionChange: t,
            options: g,
            formatOption: f,
            value: l,
            "aria-labelledby": a,
            placeholder: g.length < 1 ? H.intl.string(H.t.jHpxwo) : H.intl.string(H.t["4mqeQO"]),
            disabled: g.length < 1,
        })
    );
}
var eo = l(830917),
    ed = l(866665),
    em = l(831453),
    eh = l(725441),
    eg = l(92259),
    ef = l(106236),
    ex = l(218429),
    ej = l(59520),
    ev = l(424632),
    eE = l(818348),
    eN = l(362830);
let eb = new S.A("ImageEditor"),
    eI = { width: 288, height: 288 },
    eA = i.forwardRef(function (e, t) {
        let l,
            { file: r, imageUri: a, onUpdate: u, onThrottledEdit: c } = e,
            o = i.useRef({ x: 0, y: 0 }),
            [d, m] = i.useState({ x: 0, y: 0 }),
            h = i.useRef(null),
            [g, x] = i.useState(1),
            [j, v] = i.useState(null),
            [E, N] = i.useState(!1),
            [b, I] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [A, S] = i.useState(0),
            [M, p] = i.useState({ x: 0, y: 0 }),
            [_, C] = i.useState(!1),
            { isGIF: y, isWebP: w, isCheckingAnimation: k, isEditableAnimatedImage: R } = (0, O._)(r),
            G = ("image/gif" === (l = r.type) || "image/webp" === l || "image/avif" === l) && !y && !w,
            [L, z] = i.useState(null),
            F = (0, ej.I)(c ?? eE.tE, 500),
            Z = i.useRef(null),
            V = i.useRef(0),
            B = i.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: o.current.x, y: o.current.y };
                    if (null == h.current) return;
                    let { x: t, y: l } = (0, ev.F3)(e.x, e.y, b);
                    (o.current = { x: t, y: l }),
                        (h.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`),
                        m({ x: t, y: l });
                },
                [h, A, b, E],
            );
        i.useEffect(() => {
            null == j || k || I(eM(j, g, R));
        }, [j, g, R, k]);
        let J = i.useCallback(
                (e) => {
                    if (null == j) return;
                    let t = eM(j, e, R);
                    x(e), I(t), B(), F?.();
                },
                [j, B, R, F],
            ),
            K = i.useCallback(() => {
                if (null == h.current || null == j) return;
                let e = (A + 90) % 360,
                    t = j.height,
                    l = j.width,
                    n = eM({ width: t, height: l }, g, R);
                S(e), v({ width: t, height: l }), I(n), B(), F?.();
            }, [j, A, B, g, R, F]),
            P = i.useCallback(() => {
                null != h.current && (N((e) => !e), B(), F?.());
            }, [h, B, F]),
            U = i.useCallback(() => {
                if (null == j) return {};
                let { height: e, width: t } = eS(
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
                p({ x: e.clientX - o.current.x, y: e.clientY - o.current.y }), C(!0);
            }, []);
        i.useEffect(() => {
            function e() {
                return C(!1);
            }
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let Q = i.useCallback(
            (e) => {
                let { x: t, y: l } = o.current;
                _ &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (B({ x: (t = e.clientX - M.x), y: (l = e.clientY - M.y) }), F?.());
            },
            [_, M, B, F],
        );
        i.useEffect(() => {
            if (_) return window.addEventListener("mousemove", Q), () => window.removeEventListener("mousemove", Q);
        }, [Q, _]);
        let X = i.useRef(null),
            q = i.useCallback(async () => {
                let e;
                if (null == h.current || null == j || k) return;
                let t = Date.now(),
                    l = h.current,
                    n = Math.min(128, Math.max(j.height, j.width)),
                    i = { height: n, width: n },
                    s = null;
                if ((null != X.current && (X.current(), (X.current = null)), R))
                    try {
                        let t = (function (e, t, l) {
                                let { height: n, width: i } = eS(t, l),
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
                                    cropDimensions: eI,
                                    cropOriginCoordinates: o.current,
                                    maxDimensions: i,
                                    imageRotation: A,
                                    flipHorizontal: E,
                                    resizeWidth: n,
                                    resizeHeight: n,
                                },
                                j,
                                g,
                            ),
                            { result: a, cancelFn: s } = await (0, ev.ny)(t);
                        (X.current = s), (e = await a);
                    } catch (e) {
                        eb.error("Error cropping animated image", e), (s = D.j.ANIMATED_CROPPING);
                    } finally {
                        X.current?.(), (X.current = null);
                    }
                else
                    e = G
                        ? a
                        : (0, eo.iL)({
                              image: l,
                              cropDimensions: eI,
                              cropOriginCoordinates: o.current,
                              maxDimensions: i,
                              imageRotation: A,
                              flipHorizontal: E,
                          });
                return (
                    u({ imageData: e, imageDataTimestamp: t, error: s, loading: !1 }),
                    () => {
                        X.current?.(), (X.current = null);
                    }
                );
            }, [r, A, R, G, k, u, j, g, a, E]);
        i.useEffect(() => {
            _ || q();
        }, [q, d, A, j, _, g, L, E]);
        let ee = i.useCallback(() => {
                if (null == h.current) return;
                let e = h.current.naturalWidth,
                    t = h.current.naturalHeight;
                v({ width: e, height: t }), S(0), N(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                x(l), z(l), (V.current += 1), I(eM({ width: e, height: t }, l, R)), B({ x: 0, y: 0 });
            }, [h, R, B]),
            et = i.useCallback(() => {
                ee();
            }, [ee]);
        return (
            i.useImperativeHandle(t, () => ({ reset: ee })),
            (0, n.jsxs)("div", {
                className: s()(eN.j0, { [eN.Id]: _ }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: eN.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: et,
                                onError: () => {
                                    u({ error: D.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != j),
                                    transform: `translate3d(${o.current.x}px, ${o.current.y}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`,
                                    ...U(),
                                },
                                className: eN.Sl,
                                src: a,
                                crossOrigin: "anonymous",
                                alt: H.intl.string(H.t.EYR1Fa),
                                ref: h,
                                onMouseDown: $,
                                draggable: !1,
                            }),
                            !G &&
                                !k &&
                                (0, n.jsx)("div", {
                                    className: eN.Lw,
                                    style: { opacity: +(null != j), width: eI.width, height: eI.height },
                                    children: (0, n.jsx)(T.E, {
                                        className: eN.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: H.intl.string(H.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    G
                        ? (0, n.jsx)("div", {
                              className: eN.Nf,
                              children: (0, n.jsx)(T.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: H.intl.string(H.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: eN.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eN.R5,
                                      children: [
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t.FEIIO9),
                                              "aria-label": H.intl.string(H.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: em.H,
                                                      onClick: K,
                                                      "aria-label": H.intl.string(H.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t["4LRS2p"]),
                                              "aria-label": H.intl.string(H.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eh.v,
                                                      onClick: P,
                                                      "aria-label": H.intl.string(H.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(eN.mu, eN.R5),
                                      children: [
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t.QlArhK),
                                              "aria-label": H.intl.string(H.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eg.V,
                                                      onClick: W,
                                                      "aria-label": H.intl.string(H.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != L &&
                                              (0, n.jsx)(
                                                  ef.A,
                                                  {
                                                      ref: Z,
                                                      className: eN.aw,
                                                      initialValue: L,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: J,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": H.intl.string(H.t["2hPcVJ"]),
                                                  },
                                                  V.current,
                                              ),
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t.Ch32tT),
                                              "aria-label": H.intl.string(H.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ex.r,
                                                      onClick: Y,
                                                      "aria-label": H.intl.string(H.t.Ch32tT),
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
function eS(e, t) {
    let { width: l, height: n } = e,
        i = 288 * t,
        r = l / n;
    return l > n ? (n = (l = i) / r) : (l = (n = i) * r), { width: l, height: n };
}
function eM(e, t, l) {
    let { width: n, height: i } = eS(e, t),
        r = Math.abs(288 - n) / 2,
        a = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
var ep = l(43934);
let eO = new S.A("EmojiStudio"),
    e_ = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            S = "emoji" in e ? e.emoji : void 0,
            T = !!S,
            [F, Z] = i.useState(a ?? null),
            [V, B] = i.useState(!1),
            P = (0, u.bG)([_.A, y.A, C.A], () => {
                let e = y.A.getGuildId(),
                    t = _.A.getGuild(e);
                return C.A.can(Y.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [$, ee] = i.useState(r ?? P),
            [et, el] = i.useState(!1),
            [en, ei] = i.useState(null),
            [er, ea] = i.useState(null),
            [es, eu] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return k.Ay.sanitizeEmojiName(n);
                })(F),
            ),
            [eo, ed] = i.useState(null),
            em = i.useRef(Date.now()),
            eh = i.useRef(0),
            eg = i.useRef(0),
            ef = i.useRef(!1),
            ex = i.useRef(null),
            [ej, ev] = i.useState(!1),
            eE = i.useRef(null),
            eN =
                ((t = F?.file),
                (l = i.useRef(null)),
                i.useEffect(() => {
                    if (null == t) {
                        l.current = null;
                        return;
                    }
                    l.current = I.A.fromBlob(A.f.EMOJI, t);
                }, [t]),
                l),
            { isEditableAnimatedImage: eb } = (0, O._)(F?.file),
            eI = eb || F?.file?.type === "image/avif";
        i.useEffect(
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
                    Z(e), ed(e.data), eu(S.name), B(!1);
                    return;
                }
                B(!0),
                    (0, W.$)(S)
                        .then((e) => {
                            Z(e), ed(e.data), eu(S.name), B(!1);
                        })
                        .catch((e) => {
                            eO.error("Failed to fetch emoji image", e), ei(D.j.MISSING_IMAGE_DATA), B(!1);
                        });
            }, [S]);
        let eS = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = en ?? er;
                w.default.track(Y.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === eh.current,
                    has_image: null != F,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eg.current,
                    session_duration_ms: Date.now() - em.current,
                    has_guild_selected: null != $,
                });
            },
            [en, er, em, F, $],
        );
        (0, b.l0)(() => {
            ef.current || eS({ reason: "closed" });
        });
        let eM = i.useCallback(async () => {
                if ((ei(null), null == $)) return void ei(D.j.MISSING_GUILD);
                if (null == F || F?.file == null || null == eo) return void ei(D.j.MISSING_IMAGE_DATA);
                el(!0);
                let e = (await eN.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    (t = await (0, N.Gf)({
                        image: eo,
                        guildId: $,
                        name: es,
                        originalMd5: e,
                        analyticsLocation: { page: Y.liQ.EMOJI_STUDIO },
                    })),
                        p.X({ emojiId: t.id, userImage: { ...F } });
                } catch (e) {
                    el(!1), ei(q(e)), eO.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != S)
                    try {
                        await (0, N.ak)($, S.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            E.A.show({ title: H.intl.string(H.t.iufib1), body: H.intl.string(H.t.Whhv4w) });
                        else {
                            el(!1), ei(q(e)), eO.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, R.O)(!1),
                    (0, c.closeModal)(D.y),
                    eS({ reason: "uploaded" }),
                    (ef.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, G.P0)(
                            (0, L.o)("", z.Ck.CUSTOM, {
                                position: z.xJ.TOP,
                                component: (0, n.jsx)(K, { emoji: t, guildId: l }),
                                duration: J,
                            }),
                        );
                    })({ emoji: t, guildId: $ }),
                    el(!1);
            }, [$, F, S, eo, eS, es, eN]),
            e_ = i.useCallback(() => {
                ei(null), null != F && ed(F.data), (eg.current = 0), (0, R.O)(!1), ex.current?.reset();
            }, [ex, F]),
            ey = i.useCallback(() => {
                (0, W.p)({ onClose: e_ });
            }, [e_]),
            ew = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                null != t && k.Ay.isDataTooBig(t) && (i = D.j.TOO_BIG),
                    ei(n ?? i),
                    l < eh.current || (null != t && (ed(t), (eh.current = l)));
            }, []),
            ek = i.useCallback(() => {
                eg.current++, (0, R.O)(!0);
            }, []),
            eR = T ? H.intl.string(H.t.FOYn8U) : H.intl.string(H.t.iMJO37);
        return V || null == F
            ? (0, n.jsx)("main", {
                  className: ep.iW,
                  children: (0, n.jsxs)("div", {
                      className: ep.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: ep.uv,
                              children: (0, n.jsx)(o.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: ep.DD,
                                  children: eR,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: ep.b,
                              children: (0, n.jsx)(d.J, { size: "md", onClick: ey }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(ep.iW, { [ep.WY]: null != F }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: ep.EN,
                          children: [
                              (0, n.jsx)(eA, {
                                  ref: ex,
                                  file: F.file,
                                  imageUri: F.data,
                                  onUpdate: ew,
                                  onThrottledEdit: ek,
                              }),
                              (0, n.jsx)("div", {
                                  className: ep.uv,
                                  children: (0, n.jsx)(o.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: ep.DD,
                                      children: eR,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ep.b,
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: ey }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ep.WA,
                                  children: (0, n.jsx)(m.Y, {
                                      targetElementRef: eE,
                                      "aria-label": H.intl.string(H.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(h.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": H.intl.string(H.t.vznjTl),
                                              children: (0, n.jsx)(g.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: H.intl.string(H.t.ka3Yhm),
                                                  action: e_,
                                              }),
                                          });
                                      },
                                      shouldShow: ej,
                                      onRequestClose: () => ev(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: eE,
                                              variant: "icon-only",
                                              icon: x.n,
                                              onClick: () => ev(!0),
                                              "aria-label": H.intl.string(H.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: ep.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: ep.ey,
                                  children: (0, n.jsx)(j.D, {
                                      label: H.intl.string(H.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: ep.Br,
                                                      children: [
                                                          (0, n.jsx)(eC, {
                                                              src: eo,
                                                              alt: H.intl.string(H.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: ep.SA,
                                                      children: (0, n.jsx)(eC, {
                                                          src: eo,
                                                          alt: H.intl.string(H.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(U, {
                                      label: H.intl.string(H.t.m0YV7M),
                                      name: es,
                                      onNameChange: eu,
                                  }),
                              }),
                              T
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(ec, {
                                            label: H.intl.string(H.t["9uKafS"]),
                                            required: !0,
                                            onChange: ee,
                                            selected: $,
                                            onError: (e) => ea(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: eI,
                                            errorMessage: null != er ? X(er) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: ep.jt,
                                  children: [
                                      null != en &&
                                          (0, n.jsx)(Q, {
                                              error: en,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(v.$, {
                                          text: H.intl.string(H.t.Q7UP6F),
                                          onClick: eM,
                                          loading: et,
                                          disabled: et || null == F || null == $ || es.length < 2 || null != er,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
function eC(e) {
    let { src: t, alt: l } = e;
    return null == t || "" === t ? (0, n.jsx)("div", { className: ep.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
}
var ey = l(138467);
function ew(e) {
    let { transitionState: t, guildId: l } = e,
        i = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != i ? { userImage: i } : {}) };
    return (0, n.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: ey.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: ey.jE,
            children: (0, n.jsx)(e_, { ...s }),
        }),
    });
}
