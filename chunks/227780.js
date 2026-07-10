l.d(t, { EmojiStudioModal: () => eR });
var n = l(627968),
    i = l(64700),
    r = l(935462),
    a = l(503698),
    s = l.n(a);
let u = (e) => "image/gif" === e || "image/webp" === e || "image/avif" === e;
var c = l(17928),
    o = l(192308),
    d = l(534514),
    m = l(815021),
    h = l(922016),
    g = l(980707),
    x = l(477782),
    f = l(408278),
    j = l(454743),
    v = l(452027),
    E = l(821609),
    N = l(157559),
    b = l(554375),
    I = l(964486),
    A = l(77257),
    S = l(61310),
    M = l(626584),
    p = l(691223),
    O = l(288224),
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
    V = l(780999),
    B = l(861173);
let J = 6 * Z.A.Millis.SECOND;
function K(e) {
    let { emoji: t, guildId: l } = e,
        i = (0, c.bG)([_.A], () => _.A.getGuild(l)?.name);
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
    et = l(159273),
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
            label: u,
            required: o,
            errorMessage: d,
        } = e,
        m = (0, c.cf)([_.A, ei.Ay], () =>
            Object.fromEntries(
                ei.Ay.getFlattenedGuildIds()
                    .map((e) => _.A.getGuild(e))
                    .filter(er.Vq)
                    .map((e) => [e.id, e]),
            ),
        ),
        h = (0, c.cf)(
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
        x = i.useCallback(
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
            label: u,
            required: o,
            selectionMode: "single",
            errorMessage: d,
            onSelectionChange: t,
            options: g,
            formatOption: x,
            value: l,
            "aria-labelledby": a,
            placeholder: g.length < 1 ? H.intl.string(H.t.jHpxwo) : H.intl.string(H.t["4mqeQO"]),
            disabled: g.length < 1,
        })
    );
}
var eo = l(830917),
    ed = l(990078),
    em = l(831453),
    eh = l(725441),
    eg = l(92259),
    ex = l(106236),
    ef = l(218429),
    ej = l(59520),
    ev = l(424632),
    eE = l(902916),
    eN = l(818348),
    eb = l(482390);
let eI = new M.A("ImageEditor"),
    eA = { width: 288, height: 288 },
    eS = i.forwardRef(function (e, t) {
        let { file: l, imageUri: r, onUpdate: a, onThrottledEdit: c } = e,
            o = i.useRef({ x: 0, y: 0 }),
            [d, m] = i.useState({ x: 0, y: 0 }),
            h = i.useRef(null),
            [g, x] = i.useState(1),
            [j, v] = i.useState(null),
            [E, N] = i.useState(!1),
            [b, I] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [A, S] = i.useState(0),
            [M, p] = i.useState({ x: 0, y: 0 }),
            [O, _] = i.useState(!1),
            { isGIF: C, isWebP: y, isCheckingAnimation: w, isEditableAnimatedImage: k } = (0, eE._)(l),
            R = u(l.type) && !C && !y,
            [G, L] = i.useState(null),
            z = (0, ej.I)(c ?? eN.tE, 500),
            F = i.useRef(null),
            Z = i.useRef(0),
            V = i.useCallback(
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
            null == j || w || I(ep(j, g, k));
        }, [j, g, k, w]);
        let B = i.useCallback(
                (e) => {
                    if (null == j) return;
                    let t = ep(j, e, k);
                    x(e), I(t), V(), z?.();
                },
                [j, V, k, z],
            ),
            J = i.useCallback(() => {
                if (null == h.current || null == j) return;
                let e = (A + 90) % 360,
                    t = j.height,
                    l = j.width,
                    n = ep({ width: t, height: l }, g, k);
                S(e), v({ width: t, height: l }), I(n), V(), z?.();
            }, [j, A, V, g, k, z]),
            K = i.useCallback(() => {
                null != h.current && (N((e) => !e), V(), z?.());
            }, [h, V, z]),
            P = i.useCallback(() => {
                if (null == j) return {};
                let { height: e, width: t } = eM(
                    (function (e, t) {
                        let { width: l, height: n } = e;
                        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
                    })(j, A),
                    g,
                );
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [j, A, g]),
            U = i.useCallback(() => {
                F.current?.moveGrabber(-0.025);
            }, []),
            W = i.useCallback(() => {
                F.current?.moveGrabber(0.025);
            }, []),
            Y = i.useCallback((e) => {
                p({ x: e.clientX - o.current.x, y: e.clientY - o.current.y }), _(!0);
            }, []);
        i.useEffect(() => {
            function e() {
                return _(!1);
            }
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let $ = i.useCallback(
            (e) => {
                let { x: t, y: l } = o.current;
                O &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (V({ x: (t = e.clientX - M.x), y: (l = e.clientY - M.y) }), z?.());
            },
            [O, M, V, z],
        );
        i.useEffect(() => {
            if (O) return window.addEventListener("mousemove", $), () => window.removeEventListener("mousemove", $);
        }, [$, O]);
        let Q = i.useRef(null),
            X = i.useCallback(async () => {
                let e;
                if (null == h.current || null == j || w) return;
                let t = Date.now(),
                    n = h.current,
                    i = Math.min(128, Math.max(j.height, j.width)),
                    s = { height: i, width: i },
                    u = null;
                if ((null != Q.current && (Q.current(), (Q.current = null)), k))
                    try {
                        let t = eO(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: eA,
                                    cropOriginCoordinates: o.current,
                                    maxDimensions: s,
                                    imageRotation: A,
                                    flipHorizontal: E,
                                    resizeWidth: i,
                                    resizeHeight: i,
                                },
                                j,
                                g,
                            ),
                            { result: r, cancelFn: a } = await (0, ev.ny)(t);
                        (Q.current = a), (e = await r);
                    } catch (e) {
                        eI.error("Error cropping animated image", e), (u = D.j.ANIMATED_CROPPING);
                    } finally {
                        Q.current?.(), (Q.current = null);
                    }
                else
                    e = R
                        ? r
                        : (0, eo.iL)({
                              image: n,
                              cropDimensions: eA,
                              cropOriginCoordinates: o.current,
                              maxDimensions: s,
                              imageRotation: A,
                              flipHorizontal: E,
                          });
                return (
                    a({ imageData: e, imageDataTimestamp: t, error: u, loading: !1 }),
                    () => {
                        Q.current?.(), (Q.current = null);
                    }
                );
            }, [l, A, k, R, w, a, j, g, r, E]);
        i.useEffect(() => {
            O || X();
        }, [X, d, A, j, O, g, G, E]);
        let q = i.useCallback(() => {
                if (null == h.current) return;
                let e = h.current.naturalWidth,
                    t = h.current.naturalHeight;
                v({ width: e, height: t }), S(0), N(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                x(l), L(l), (Z.current += 1), I(ep({ width: e, height: t }, l, k)), V({ x: 0, y: 0 });
            }, [h, k, V]),
            ee = i.useCallback(() => {
                q();
            }, [q]);
        return (
            i.useImperativeHandle(t, () => ({ reset: q })),
            (0, n.jsxs)("div", {
                className: s()(eb.j0, { [eb.Id]: O }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: eb.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: ee,
                                onError: () => {
                                    a({ error: D.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != j),
                                    transform: `translate3d(${o.current.x}px, ${o.current.y}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`,
                                    ...P(),
                                },
                                className: eb.Sl,
                                src: r,
                                crossOrigin: "anonymous",
                                alt: H.intl.string(H.t.EYR1Fa),
                                ref: h,
                                onMouseDown: Y,
                                draggable: !1,
                            }),
                            !R &&
                                !w &&
                                (0, n.jsx)("div", {
                                    className: eb.Lw,
                                    style: { opacity: +(null != j), width: eA.width, height: eA.height },
                                    children: (0, n.jsx)(T.E, {
                                        className: eb.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: H.intl.string(H.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    R
                        ? (0, n.jsx)("div", {
                              className: eb.Nf,
                              children: (0, n.jsx)(T.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: H.intl.string(H.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: eb.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eb.R5,
                                      children: [
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t.FEIIO9),
                                              "aria-label": H.intl.string(H.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: em.H,
                                                      onClick: J,
                                                      "aria-label": H.intl.string(H.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t["4LRS2p"]),
                                              "aria-label": H.intl.string(H.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eh.v,
                                                      onClick: K,
                                                      "aria-label": H.intl.string(H.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(eb.mu, eb.R5),
                                      children: [
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t.QlArhK),
                                              "aria-label": H.intl.string(H.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eg.V,
                                                      onClick: U,
                                                      "aria-label": H.intl.string(H.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != G &&
                                              (0, n.jsx)(
                                                  ex.A,
                                                  {
                                                      ref: F,
                                                      className: eb.aw,
                                                      initialValue: G,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: B,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": H.intl.string(H.t["2hPcVJ"]),
                                                  },
                                                  Z.current,
                                              ),
                                          (0, n.jsx)(ed.m, {
                                              text: H.intl.string(H.t.Ch32tT),
                                              "aria-label": H.intl.string(H.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: eb.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ef.r,
                                                      onClick: W,
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
    }),
    eM = (e, t) => {
        let { width: l, height: n } = e,
            i = 288 * t,
            r = l / n;
        return l > n ? (n = (l = i) / r) : (l = (n = i) * r), { width: l, height: n };
    };
function ep(e, t, l) {
    let { width: n, height: i } = eM(e, t),
        r = Math.abs(288 - n) / 2,
        a = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
let eO = (e, t, l) => {
    let { height: n, width: i } = eM(t, l),
        r = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
        a = { height: n, width: i },
        s = Math.min(128, Math.max(t.height, t.width)),
        u = Math.floor(r < 1 ? s * r : s / r);
    return { ...e, cropDimensions: a, resizeHeight: r < 1 ? u : s, resizeWidth: r > 1 ? u : s };
};
var e_ = l(905702);
let eC = new M.A("EmojiStudio"),
    ey = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            M = "emoji" in e ? e.emoji : void 0,
            T = !!M,
            [F, Z] = i.useState(a ?? null),
            [V, B] = i.useState(!1),
            P = (0, c.bG)([_.A, y.A, C.A], () => {
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
            ex = i.useRef(!1),
            ef = i.useRef(null),
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
                    l.current = A.A.fromBlob(S.f.EMOJI, t);
                }, [t]),
                l);
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
                if (null == M) return;
                let e = p.A.getEmojiRawAsset(M.id);
                if (null != e) {
                    Z(e), ed(e.data), eu(M.name), B(!1);
                    return;
                }
                B(!0),
                    (0, W.$)(M)
                        .then((e) => {
                            Z(e), ed(e.data), eu(M.name), B(!1);
                        })
                        .catch((e) => {
                            eC.error("Failed to fetch emoji image", e), ei(D.j.MISSING_IMAGE_DATA), B(!1);
                        });
            }, [M]);
        let eb = i.useCallback(
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
        (0, I.l0)(() => {
            ex.current || eb({ reason: "closed" });
        });
        let eI = i.useCallback(async () => {
                if ((ei(null), null == $)) return void ei(D.j.MISSING_GUILD);
                if (null == F || F?.file == null || null == eo) return void ei(D.j.MISSING_IMAGE_DATA);
                el(!0);
                let e = (await eN.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    (t = await (0, b.Gf)({
                        image: eo,
                        guildId: $,
                        name: es,
                        originalMd5: e,
                        analyticsLocation: { page: Y.liQ.EMOJI_STUDIO },
                    })),
                        O.X({ emojiId: t.id, userImage: { ...F } });
                } catch (e) {
                    el(!1), ei(q(e)), eC.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != M)
                    try {
                        await (0, b.ak)($, M.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            N.A.show({ title: H.intl.string(H.t.iufib1), body: H.intl.string(H.t.Whhv4w) });
                        else {
                            el(!1), ei(q(e)), eC.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, R.O)(!1),
                    (0, o.closeModal)(D.y),
                    eb({ reason: "uploaded" }),
                    (ex.current = !0),
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
            }, [$, F, M, eo, eb, es, eN]),
            eA = i.useCallback(() => {
                ei(null), null != F && ed(F.data), (eg.current = 0), (0, R.O)(!1), ef.current?.reset();
            }, [ef, F]),
            eM = i.useCallback(() => {
                (0, W.p)({ onClose: eA });
            }, [eA]),
            ep = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                null != t && k.Ay.isDataTooBig(t) && (i = D.j.TOO_BIG),
                    ei(n ?? i),
                    l < eh.current || (null != t && (ed(t), (eh.current = l)));
            }, []),
            eO = i.useCallback(() => {
                eg.current++, (0, R.O)(!0);
            }, []),
            ey = T ? H.intl.string(H.t.FOYn8U) : H.intl.string(H.t.iMJO37);
        return V || null == F
            ? (0, n.jsx)("main", {
                  className: e_.iW,
                  children: (0, n.jsxs)("div", {
                      className: e_.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: e_.uv,
                              children: (0, n.jsx)(d.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: e_.DD,
                                  children: ey,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: e_.b,
                              children: (0, n.jsx)(m.J, { size: "md", onClick: eM }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(e_.iW, { [e_.WY]: null != F }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: e_.EN,
                          children: [
                              (0, n.jsx)(eS, {
                                  ref: ef,
                                  file: F.file,
                                  imageUri: F.data,
                                  onUpdate: ep,
                                  onThrottledEdit: eO,
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.uv,
                                  children: (0, n.jsx)(d.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: e_.DD,
                                      children: ey,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.b,
                                  children: (0, n.jsx)(m.J, { size: "md", onClick: eM }),
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.WA,
                                  children: (0, n.jsx)(h.Y, {
                                      targetElementRef: eE,
                                      "aria-label": H.intl.string(H.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(g.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": H.intl.string(H.t.vznjTl),
                                              children: (0, n.jsx)(x.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: H.intl.string(H.t.ka3Yhm),
                                                  action: eA,
                                              }),
                                          });
                                      },
                                      shouldShow: ej,
                                      onRequestClose: () => ev(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: eE,
                                              variant: "icon-only",
                                              icon: j.n,
                                              onClick: () => ev(!0),
                                              "aria-label": H.intl.string(H.t.u8IcM0),
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
                                  children: (0, n.jsx)(v.D, {
                                      label: H.intl.string(H.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: e_.Br,
                                                      children: [
                                                          (0, n.jsx)(ew, {
                                                              src: eo,
                                                              alt: H.intl.string(H.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: e_.SA,
                                                      children: (0, n.jsx)(ew, {
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
                                            isEmojiAnimated: u(F?.file?.type),
                                            errorMessage: null != er ? X(er) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: e_.jt,
                                  children: [
                                      null != en &&
                                          (0, n.jsx)(Q, {
                                              error: en,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(E.$, {
                                          text: H.intl.string(H.t.Q7UP6F),
                                          onClick: eI,
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
function ew(e) {
    let { src: t, alt: l } = e;
    return null == t || "" === t ? (0, n.jsx)("div", { className: e_.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
}
var ek = l(250747);
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
