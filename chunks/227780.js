l.d(t, { EmojiStudioModal: () => eD });
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
    h = l(922016),
    g = l(980707),
    x = l(477782),
    j = l(408278),
    f = l(454743),
    v = l(452027),
    E = l(821609),
    N = l(157559),
    b = l(554375),
    I = l(964486),
    A = l(77257),
    S = l(61310),
    p = l(626584),
    M = l(691223),
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
        r = (0, c.bG)([_.A], () => _.A.getGuild(l)?.name);
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
var P = l(292666);
let U = (e) => {
    let { name: t, onNameChange: l, label: i } = e,
        a = r.useRef(null),
        s = r.useRef(null),
        [u, c] = r.useState(!1),
        o = r.useCallback(
            (e) => {
                (s.current = a.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : k.Ay.sanitizeEmojiName(e)));
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
        label: i,
        clearable: !0,
        required: !0,
    });
};
var W = l(308295),
    Y = l(652215),
    $ = l(307731);
let Q = (e) => {
        let { error: t, variant: l, color: r } = e;
        return (0, n.jsx)(T.E, { variant: l, color: r, children: X(t) });
    },
    X = (e) => {
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
    },
    q = (e) => {
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
    };
var ee = l(691885),
    et = l(159273),
    el = l(548118),
    en = l(492494),
    er = l(711014),
    ei = l(403362),
    ea = l(473145);
let es = (e) => ({ label: e.name, value: e.id }),
    eu = (e) => C.A.can(Y.xBc.CREATE_GUILD_EXPRESSIONS, e),
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
            m = (0, c.cf)([_.A, er.Ay], () =>
                Object.fromEntries(
                    er.Ay.getFlattenedGuildIds()
                        .map((e) => _.A.getGuild(e))
                        .filter(ei.Vq)
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
            g = r.useMemo(() => Object.values(m).filter(eu).map(es), [m]),
            x = r.useCallback(
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
                            null == e.value ? null : H.intl.formatToPlainString(H.t.WkK72v, { count: h[e.value] }),
                    };
                },
                [h, m],
            );
        return (
            r.useEffect(() => {
                g.length < 1
                    ? i(D.j.NO_PERMISSIONS)
                    : null != l && (h?.[l] ?? 0) < 1
                      ? i(Y.t02.TOO_MANY_EMOJI)
                      : i(null);
            }, [g, t, i, l, h]),
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
    };
var eo = l(830917),
    ed = l(990078),
    em = l(831453),
    eh = l(725441),
    eg = l(92259),
    ex = l(106236),
    ej = l(218429),
    ef = l(59520),
    ev = l(424632),
    eE = l(902916),
    eN = l(818348),
    eb = l(482390);
let eI = new p.A("ImageEditor"),
    eA = { width: 288, height: 288 },
    eS = r.forwardRef(function (e, t) {
        let { file: l, imageUri: i, onUpdate: a, onThrottledEdit: c } = e,
            o = r.useRef({ x: 0, y: 0 }),
            [d, m] = r.useState({ x: 0, y: 0 }),
            h = r.useRef(null),
            [g, x] = r.useState(1),
            [f, v] = r.useState(null),
            [E, N] = r.useState(!1),
            [b, I] = r.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [A, S] = r.useState(0),
            [p, M] = r.useState({ x: 0, y: 0 }),
            [O, _] = r.useState(!1),
            { isGIF: C, isWebP: y, isCheckingAnimation: w, isEditableAnimatedImage: k } = (0, eE._)(l),
            R = u(l.type) && !C && !y,
            [G, L] = r.useState(null),
            z = (0, ef.I)(c ?? eN.tE, 500),
            F = r.useRef(null),
            Z = r.useRef(0),
            V = r.useCallback(
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
        r.useEffect(() => {
            null == f || w || I(eO(f, g, k));
        }, [f, g, k, w]);
        let B = r.useCallback(
                (e) => {
                    if (null == f) return;
                    let t = eO(f, e, k);
                    x(e), I(t), V(), z?.();
                },
                [f, V, k, z],
            ),
            J = r.useCallback(() => {
                if (null == h.current || null == f) return;
                let e = (A + 90) % 360,
                    t = f.height,
                    l = f.width,
                    n = eO({ width: t, height: l }, g, k);
                S(e), v({ width: t, height: l }), I(n), V(), z?.();
            }, [f, A, V, g, k, z]),
            K = r.useCallback(() => {
                null != h.current && (N((e) => !e), V(), z?.());
            }, [h, V, z]),
            P = r.useCallback(() => {
                if (null == f) return {};
                let { height: e, width: t } = eM(ep(f, A), g);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [f, A, g]),
            U = r.useCallback(() => {
                F.current?.moveGrabber(-0.025);
            }, []),
            W = r.useCallback(() => {
                F.current?.moveGrabber(0.025);
            }, []),
            Y = r.useCallback((e) => {
                M({ x: e.clientX - o.current.x, y: e.clientY - o.current.y }), _(!0);
            }, []);
        r.useEffect(() => {
            let e = () => _(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let $ = r.useCallback(
            (e) => {
                let { x: t, y: l } = o.current;
                O &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (V({ x: (t = e.clientX - p.x), y: (l = e.clientY - p.y) }), z?.());
            },
            [O, p, V, z],
        );
        r.useEffect(() => {
            if (O) return window.addEventListener("mousemove", $), () => window.removeEventListener("mousemove", $);
        }, [$, O]);
        let Q = r.useRef(null),
            X = r.useCallback(async () => {
                let e;
                if (null == h.current || null == f || w) return;
                let t = Date.now(),
                    n = h.current,
                    r = { height: 128, width: 128 },
                    s = null;
                if ((null != Q.current && (Q.current(), (Q.current = null)), k))
                    try {
                        let t = e_(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: eA,
                                    cropOriginCoordinates: o.current,
                                    maxDimensions: r,
                                    imageRotation: A,
                                    flipHorizontal: E,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                f,
                                g,
                            ),
                            { result: i, cancelFn: a } = await (0, ev.ny)(t);
                        (Q.current = a), (e = await i);
                    } catch (e) {
                        eI.error("Error cropping animated image", e), (s = D.j.ANIMATED_CROPPING);
                    } finally {
                        Q.current?.(), (Q.current = null);
                    }
                else
                    e = R
                        ? i
                        : (0, eo.iL)({
                              image: n,
                              cropDimensions: eA,
                              cropOriginCoordinates: o.current,
                              maxDimensions: r,
                              imageRotation: A,
                              flipHorizontal: E,
                          });
                return (
                    a({ imageData: e, imageDataTimestamp: t, error: s, loading: !1 }),
                    () => {
                        Q.current?.(), (Q.current = null);
                    }
                );
            }, [l, A, k, R, w, a, f, g, i, E]);
        r.useEffect(() => {
            O || X();
        }, [X, d, A, f, O, g, G, E]);
        let q = r.useCallback(() => {
                if (null == h.current) return;
                let e = h.current.naturalWidth,
                    t = h.current.naturalHeight;
                v({ width: e, height: t }), S(0), N(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                x(l), L(l), (Z.current += 1), I(eO({ width: e, height: t }, l, k)), V({ x: 0, y: 0 });
            }, [h, k, V]),
            ee = r.useCallback(() => {
                q();
            }, [q]);
        return (
            r.useImperativeHandle(t, () => ({ reset: q })),
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
                                    opacity: +(null != f),
                                    transform: `translate3d(${o.current.x}px, ${o.current.y}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`,
                                    ...P(),
                                },
                                className: eb.Sl,
                                src: i,
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
                                    style: { opacity: +(null != f), width: eA.width, height: eA.height },
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
                                                  children: (0, n.jsx)(j.K, {
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
                                                  children: (0, n.jsx)(j.K, {
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
                                                  children: (0, n.jsx)(j.K, {
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
                                                  children: (0, n.jsx)(j.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ej.r,
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
    ep = (e, t) => {
        let { width: l, height: n } = e;
        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
    },
    eM = (e, t) => {
        let { width: l, height: n } = e,
            r = 288 * t,
            i = l / n;
        return l > n ? (n = (l = r) / i) : (l = (n = r) * i), { width: l, height: n };
    };
function eO(e, t, l) {
    let { width: n, height: r } = eM(e, t),
        i = Math.abs(288 - n) / 2,
        a = Math.abs(288 - r) / 2;
    return l && (n < 288 || r < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -i, right: i };
}
let e_ = (e, t, l) => {
    let { height: n, width: r } = eM(t, l),
        i = (n = Math.min(n, 288)) / (r = Math.min(r, 288)),
        a = { height: n, width: r },
        s = Math.floor(i < 1 ? 128 * i : 128 / i);
    return { ...e, cropDimensions: a, resizeHeight: i < 1 ? s : 128, resizeWidth: i > 1 ? s : 128 };
};
var eC = l(905702);
let ey = new p.A("EmojiStudio"),
    ew = (e) => {
        var t;
        let l,
            { guildId: i } = e,
            a = "userImage" in e ? e.userImage : void 0,
            p = "emoji" in e ? e.emoji : void 0,
            T = !!p,
            [F, Z] = r.useState(a ?? null),
            [V, B] = r.useState(!1),
            P = (0, c.bG)([_.A, y.A, C.A], () => {
                let e = y.A.getGuildId(),
                    t = _.A.getGuild(e);
                return C.A.can(Y.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [$, ee] = r.useState(i ?? P),
            [et, el] = r.useState(!1),
            [en, er] = r.useState(null),
            [ei, ea] = r.useState(null),
            [es, eu] = r.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return k.Ay.sanitizeEmojiName(n);
                })(F),
            ),
            [eo, ed] = r.useState(null),
            em = r.useRef(Date.now()),
            eh = r.useRef(0),
            eg = r.useRef(0),
            ex = r.useRef(!1),
            ej = r.useRef(null),
            [ef, ev] = r.useState(!1),
            eE = r.useRef(null),
            eN =
                ((t = F?.file),
                (l = r.useRef(null)),
                r.useEffect(() => {
                    if (null == t) {
                        l.current = null;
                        return;
                    }
                    l.current = A.A.fromBlob(S.f.EMOJI, t);
                }, [t]),
                l);
        r.useEffect(
            () => (
                (0, R.O)(!1),
                () => {
                    (0, R.O)(!1);
                }
            ),
            [],
        ),
            r.useEffect(() => {
                if (null == p) return;
                let e = M.A.getEmojiRawAsset(p.id);
                if (null != e) {
                    Z(e), ed(e.data), eu(p.name), B(!1);
                    return;
                }
                B(!0),
                    (0, W.$)(p)
                        .then((e) => {
                            Z(e), ed(e.data), eu(p.name), B(!1);
                        })
                        .catch((e) => {
                            ey.error("Failed to fetch emoji image", e), er(D.j.MISSING_IMAGE_DATA), B(!1);
                        });
            }, [p]);
        let eb = r.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = en ?? ei;
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
            [en, ei, em, F, $],
        );
        (0, I.l0)(() => {
            ex.current || eb({ reason: "closed" });
        });
        let eI = r.useCallback(async () => {
                if ((er(null), null == $)) return void er(D.j.MISSING_GUILD);
                if (null == F || F?.file == null || null == eo) return void er(D.j.MISSING_IMAGE_DATA);
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
                    el(!1), er(q(e)), ey.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != p)
                    try {
                        await (0, b.ak)($, p.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            N.A.show({ title: H.intl.string(H.t.iufib1), body: H.intl.string(H.t.Whhv4w) });
                        else {
                            el(!1), er(q(e)), ey.error("Failed to delete emoji.", e);
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
            }, [$, F, p, eo, eb, es, eN]),
            eA = r.useCallback(() => {
                er(null), null != F && ed(F.data), (eg.current = 0), (0, R.O)(!1), ej.current?.reset();
            }, [ej, F]),
            ep = r.useCallback(() => {
                (0, W.p)({ onClose: eA });
            }, [eA]),
            eM = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    r = null;
                null != t && k.Ay.isDataTooBig(t) && (r = D.j.TOO_BIG),
                    er(n ?? r),
                    l < eh.current || (null != t && (ed(t), (eh.current = l)));
            }, []),
            eO = r.useCallback(() => {
                eg.current++, (0, R.O)(!0);
            }, []),
            e_ = T ? H.intl.string(H.t.FOYn8U) : H.intl.string(H.t.iMJO37);
        return V || null == F
            ? (0, n.jsx)("main", {
                  className: eC.iW,
                  children: (0, n.jsxs)("div", {
                      className: eC.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: eC.uv,
                              children: (0, n.jsx)(d.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: eC.DD,
                                  children: e_,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: eC.b,
                              children: (0, n.jsx)(m.J, { size: "md", onClick: ep }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(eC.iW, { [eC.WY]: null != F }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: eC.EN,
                          children: [
                              (0, n.jsx)(eS, {
                                  ref: ej,
                                  file: F.file,
                                  imageUri: F.data,
                                  onUpdate: eM,
                                  onThrottledEdit: eO,
                              }),
                              (0, n.jsx)("div", {
                                  className: eC.uv,
                                  children: (0, n.jsx)(d.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: eC.DD,
                                      children: e_,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: eC.b,
                                  children: (0, n.jsx)(m.J, { size: "md", onClick: ep }),
                              }),
                              (0, n.jsx)("div", {
                                  className: eC.WA,
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
                                      shouldShow: ef,
                                      onRequestClose: () => ev(!1),
                                      children: () =>
                                          (0, n.jsx)(j.K, {
                                              buttonRef: eE,
                                              variant: "icon-only",
                                              icon: f.n,
                                              onClick: () => ev(!0),
                                              "aria-label": H.intl.string(H.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: eC.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: eC.ey,
                                  children: (0, n.jsx)(v.D, {
                                      label: H.intl.string(H.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: eC.Br,
                                                      children: [
                                                          (0, n.jsx)(ek, {
                                                              src: eo,
                                                              alt: H.intl.string(H.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: eC.SA,
                                                      children: (0, n.jsx)(ek, {
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
                                            errorMessage: null != ei ? X(ei) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: eC.jt,
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
                                          disabled: et || null == F || null == $ || es.length < 2 || null != ei,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    ek = (e) => {
        let { src: t, alt: l } = e;
        return null == t || "" === t ? (0, n.jsx)("div", { className: eC.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
    };
var eR = l(250747);
let eD = (e) => {
    let { transitionState: t, guildId: l } = e,
        r = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != r ? { userImage: r } : {}) };
    return (0, n.jsx)(i.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: eR.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(i.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: eR.jE,
            children: (0, n.jsx)(ew, { ...s }),
        }),
    });
};
