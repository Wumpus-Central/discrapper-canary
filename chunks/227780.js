l.d(t, { EmojiStudioModal: () => eR });
var n = l(627968),
    i = l(64700),
    a = l(935462),
    r = l(503698),
    s = l.n(r);
let o = (e) => "image/gif" === e || "image/webp" === e || "image/avif" === e;
var u = l(17928),
    c = l(192308),
    d = l(534514),
    h = l(815021),
    m = l(922016),
    g = l(550079),
    x = l(477782),
    f = l(408278),
    j = l(454743),
    v = l(452027),
    E = l(821609),
    _ = l(157559),
    b = l(554375),
    I = l(964486),
    A = l(626584),
    N = l(691223),
    p = l(288224),
    S = l(71393),
    w = l(576705),
    M = l(967198),
    C = l(954571),
    y = l(690521),
    O = l(339143),
    R = l(80569),
    T = l(834730),
    D = l(691540),
    k = l(857250),
    L = l(97483),
    G = l(565645),
    H = l(927813),
    F = l(985018),
    U = l(780999),
    J = l(861173);
let W = 6 * H.A.Millis.SECOND;
function Z(e) {
    let { emoji: t, guildId: l } = e,
        i = (0, u.bG)([S.A], () => S.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: s()(J.oR, U.o),
        children: [
            (0, n.jsx)(G.A, { emojiId: t.id, size: "default" }),
            (0, n.jsx)(T.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: F.intl.format(F.t.BaxFf8, {
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
var z = l(292666);
let B = (e) => {
    let { name: t, onNameChange: l, label: a } = e,
        r = i.useRef(null),
        s = i.useRef(null),
        [o, u] = i.useState(!1),
        c = i.useCallback(
            (e) => {
                (s.current = r.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : y.Ay.sanitizeEmojiName(e)));
            },
            [l],
        );
    i.useEffect(() => {
        null != s.current && (r.current?.setSelectionRange(s.current, s.current), (s.current = null));
    });
    let d = i.useCallback(() => {
            u(!1);
        }, []),
        h = i.useCallback(() => {
            u(!0);
        }, []);
    return (0, n.jsx)(z.k, {
        inputRef: r,
        error: o ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: c,
        placeholder: F.intl.string(F.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: h,
        label: a,
        clearable: !0,
        required: !0,
    });
};
var P = l(308295),
    V = l(652215),
    K = l(307731);
let Y = (e) => {
        let { error: t, variant: l, color: i } = e;
        return (0, n.jsx)(T.E, { variant: l, color: i, children: $(t) });
    },
    $ = (e) => {
        switch (e) {
            case V.t02.TOO_MANY_EMOJI:
            case V.t02.TOO_MANY_ANIMATED_EMOJI:
                return F.intl.string(F.t.FtKH49);
            case R.j.TOO_BIG:
            case V.t02.INVALID_FILE_ASSET_SIZE:
            case V.t02.INVALID_FORM_BODY:
                return F.intl.formatToPlainString(F.t.kIO9jy, { maxSize: K.EMOJI_MAX_FILESIZE_KB });
            case V.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
                return F.intl.string(F.t["6WN/qk"]);
            case R.j.MISSING_IMAGE_DATA:
                return F.intl.string(F.t["41/Kbh"]);
            case R.j.MISSING_GUILD:
                return F.intl.string(F.t["8RCtpD"]);
            case R.j.ANIMATED_CROPPING:
                return F.intl.string(F.t.yoVkHN);
            case R.j.IMAGE_LOAD:
                return F.intl.format(F.t.xZLPcF, {});
            case R.j.NO_PERMISSIONS:
                return F.intl.string(F.t.QY7ZFZ);
            case 429:
                return F.intl.string(F.t["4rjikl"]);
            case R.j.UNKNOWN:
            default:
                return F.intl.string(F.t.iufib1);
        }
    },
    Q = (e) => {
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
        return R.j.UNKNOWN;
    };
var q = l(691885),
    X = l(159273),
    ee = l(548118),
    et = l(492494),
    el = l(711014),
    en = l(403362),
    ei = l(473145);
let ea = (e) => ({ label: e.name, value: e.id }),
    er = (e) => w.A.can(V.xBc.CREATE_GUILD_EXPRESSIONS, e),
    es = (e) => {
        let {
                onChange: t,
                selected: l,
                onError: a,
                labelledBy: r,
                isEmojiAnimated: s,
                label: o,
                required: c,
                errorMessage: d,
            } = e,
            h = (0, u.cf)([S.A, el.Ay], () =>
                Object.fromEntries(
                    el.Ay.getFlattenedGuildIds()
                        .map((e) => S.A.getGuild(e))
                        .filter(en.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            m = (0, u.cf)(
                [X.Ay],
                () =>
                    Object.fromEntries(
                        Object.entries(h).map((e) => {
                            let [t, l] = e;
                            return [
                                t,
                                (function (e) {
                                    let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                        i =
                                            l.filter((e) => e.animated === n && !e.managed && !(0, et.Eg)(e, t.id))
                                                .length ?? 0;
                                    return (0, ei.sN)(t) - i;
                                })({ guild: l, emojis: X.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                            ];
                        }),
                    ),
                [h, s],
            ),
            g = i.useMemo(() => Object.values(h).filter(er).map(ea), [h]),
            x = i.useCallback(
                (e) => {
                    let { value: t, label: l, disabled: i } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: l,
                        disabled: i,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = h[e.value];
                            return null == t
                                ? null
                                : (0, n.jsx)(ee.Ay, { guild: t, size: ee.Ay.Sizes.SMALLER, active: !0 });
                        })(e),
                        trailing:
                            null == e.value ? null : F.intl.formatToPlainString(F.t.WkK72v, { count: m[e.value] }),
                    };
                },
                [m, h],
            );
        return (
            i.useEffect(() => {
                g.length < 1
                    ? a(R.j.NO_PERMISSIONS)
                    : null != l && (m?.[l] ?? 0) < 1
                      ? a(V.t02.TOO_MANY_EMOJI)
                      : a(null);
            }, [g, t, a, l, m]),
            (0, n.jsx)(q.l, {
                label: o,
                required: c,
                selectionMode: "single",
                errorMessage: d,
                onSelectionChange: t,
                options: g,
                formatOption: x,
                value: l,
                "aria-labelledby": r,
                placeholder: g.length < 1 ? F.intl.string(F.t.jHpxwo) : F.intl.string(F.t["4mqeQO"]),
                disabled: g.length < 1,
            })
        );
    };
var eo = l(830917),
    eu = l(990078),
    ec = l(831453),
    ed = l(725441),
    eh = l(92259),
    em = l(106236),
    eg = l(218429),
    ex = l(59520),
    ef = l(424632),
    ej = l(902916),
    ev = l(818348),
    eE = l(482390);
let e_ = new A.A("ImageEditor"),
    eb = { width: 288, height: 288 },
    eI = i.forwardRef(function (e, t) {
        let { file: l, imageUri: a, onUpdate: r, onThrottledEdit: u } = e,
            c = i.useRef({ x: 0, y: 0 }),
            [d, h] = i.useState({ x: 0, y: 0 }),
            m = i.useRef(null),
            [g, x] = i.useState(1),
            [j, v] = i.useState(null),
            [E, _] = i.useState(!1),
            [b, I] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [A, N] = i.useState(0),
            [p, S] = i.useState({ x: 0, y: 0 }),
            [w, M] = i.useState(!1),
            { isGIF: C, isWebP: y, isCheckingAnimation: O, isEditableAnimatedImage: D } = (0, ej._)(l),
            k = o(l.type) && !C && !y,
            [L, G] = i.useState(null),
            H = (0, ex.I)(u ?? ev.tE, 500),
            U = i.useRef(null),
            J = i.useRef(0),
            W = i.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: c.current.x, y: c.current.y };
                    if (null == m.current) return;
                    let { x: t, y: l } = (0, ef.F3)(e.x, e.y, b);
                    (c.current = { x: t, y: l }),
                        (m.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`),
                        h({ x: t, y: l });
                },
                [m, A, b, E],
            );
        i.useEffect(() => {
            null == j || O || I(ep(j, g, D));
        }, [j, g, D, O]);
        let Z = i.useCallback(
                (e) => {
                    if (null == j) return;
                    let t = ep(j, e, D);
                    x(e), I(t), W(), H?.();
                },
                [j, W, D, H],
            ),
            z = i.useCallback(() => {
                if (null == m.current || null == j) return;
                let e = (A + 90) % 360,
                    t = j.height,
                    l = j.width,
                    n = ep({ width: t, height: l }, g, D);
                N(e), v({ width: t, height: l }), I(n), W(), H?.();
            }, [j, A, W, g, D, H]),
            B = i.useCallback(() => {
                null != m.current && (_((e) => !e), W(), H?.());
            }, [m, W, H]),
            P = i.useCallback(() => {
                if (null == j) return {};
                let { height: e, width: t } = eN(eA(j, A), g);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [j, A, g]),
            V = i.useCallback(() => {
                U.current?.moveGrabber(-0.025);
            }, []),
            K = i.useCallback(() => {
                U.current?.moveGrabber(0.025);
            }, []),
            Y = i.useCallback((e) => {
                S({ x: e.clientX - c.current.x, y: e.clientY - c.current.y }), M(!0);
            }, []);
        i.useEffect(() => {
            let e = () => M(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let $ = i.useCallback(
            (e) => {
                let { x: t, y: l } = c.current;
                w &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (W({ x: (t = e.clientX - p.x), y: (l = e.clientY - p.y) }), H?.());
            },
            [w, p, W, H],
        );
        i.useEffect(() => {
            if (w) return window.addEventListener("mousemove", $), () => window.removeEventListener("mousemove", $);
        }, [$, w]);
        let Q = i.useRef(null),
            q = i.useCallback(async () => {
                let e;
                if (null == m.current || null == j || O) return;
                let t = Date.now(),
                    n = m.current,
                    i = { height: 128, width: 128 },
                    s = null;
                if ((null != Q.current && (Q.current(), (Q.current = null)), D))
                    try {
                        let t = eS(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: eb,
                                    cropOriginCoordinates: c.current,
                                    maxDimensions: i,
                                    imageRotation: A,
                                    flipHorizontal: E,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                j,
                                g,
                            ),
                            { result: a, cancelFn: r } = await (0, ef.ny)(t);
                        (Q.current = r), (e = await a);
                    } catch (e) {
                        e_.error("Error cropping animated image", e), (s = R.j.ANIMATED_CROPPING);
                    } finally {
                        Q.current?.(), (Q.current = null);
                    }
                else
                    e = k
                        ? a
                        : (0, eo.iL)({
                              image: n,
                              cropDimensions: eb,
                              cropOriginCoordinates: c.current,
                              maxDimensions: i,
                              imageRotation: A,
                              flipHorizontal: E,
                          });
                return (
                    r({ imageData: e, imageDataTimestamp: t, error: s, loading: !1 }),
                    () => {
                        Q.current?.(), (Q.current = null);
                    }
                );
            }, [l, A, D, k, O, r, j, g, a, E]);
        i.useEffect(() => {
            w || q();
        }, [q, d, A, j, w, g, L, E]);
        let X = i.useCallback(() => {
                if (null == m.current) return;
                let e = m.current.naturalWidth,
                    t = m.current.naturalHeight;
                v({ width: e, height: t }), N(0), _(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                x(l), G(l), (J.current += 1), I(ep({ width: e, height: t }, l, D)), W({ x: 0, y: 0 });
            }, [m, D, W]),
            ee = i.useCallback(() => {
                X();
            }, [X]);
        return (
            i.useImperativeHandle(t, () => ({ reset: X })),
            (0, n.jsxs)("div", {
                className: s()(eE.j0, { [eE.Id]: w }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: eE.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: ee,
                                onError: () => {
                                    r({ error: R.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != j),
                                    transform: `translate3d(${c.current.x}px, ${c.current.y}px, 0) rotate(${A}deg) scaleX(${E ? "-1" : "1"})`,
                                    ...P(),
                                },
                                className: eE.Sl,
                                src: a,
                                crossOrigin: "anonymous",
                                alt: F.intl.string(F.t.EYR1Fa),
                                ref: m,
                                onMouseDown: Y,
                                draggable: !1,
                            }),
                            !k &&
                                !O &&
                                (0, n.jsx)("div", {
                                    className: eE.Lw,
                                    style: { opacity: +(null != j), width: eb.width, height: eb.height },
                                    children: (0, n.jsx)(T.E, {
                                        className: eE.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: F.intl.string(F.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    k
                        ? (0, n.jsx)("div", {
                              className: eE.Nf,
                              children: (0, n.jsx)(T.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: F.intl.string(F.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: eE.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eE.R5,
                                      children: [
                                          (0, n.jsx)(eu.m, {
                                              text: F.intl.string(F.t.FEIIO9),
                                              "aria-label": F.intl.string(F.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: eE.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ec.H,
                                                      onClick: z,
                                                      "aria-label": F.intl.string(F.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(eu.m, {
                                              text: F.intl.string(F.t["4LRS2p"]),
                                              "aria-label": F.intl.string(F.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: eE.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ed.v,
                                                      onClick: B,
                                                      "aria-label": F.intl.string(F.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(eE.mu, eE.R5),
                                      children: [
                                          (0, n.jsx)(eu.m, {
                                              text: F.intl.string(F.t.QlArhK),
                                              "aria-label": F.intl.string(F.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: eE.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eh.V,
                                                      onClick: V,
                                                      "aria-label": F.intl.string(F.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != L &&
                                              (0, n.jsx)(
                                                  em.A,
                                                  {
                                                      ref: U,
                                                      className: eE.aw,
                                                      initialValue: L,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: Z,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": F.intl.string(F.t["2hPcVJ"]),
                                                  },
                                                  J.current,
                                              ),
                                          (0, n.jsx)(eu.m, {
                                              text: F.intl.string(F.t.Ch32tT),
                                              "aria-label": F.intl.string(F.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: eE.Q$,
                                                  children: (0, n.jsx)(f.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eg.r,
                                                      onClick: K,
                                                      "aria-label": F.intl.string(F.t.Ch32tT),
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
    eA = (e, t) => {
        let { width: l, height: n } = e;
        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
    },
    eN = (e, t) => {
        let { width: l, height: n } = e,
            i = 288 * t,
            a = l / n;
        return l > n ? (n = (l = i) / a) : (l = (n = i) * a), { width: l, height: n };
    };
function ep(e, t, l) {
    let { width: n, height: i } = eN(e, t),
        a = Math.abs(288 - n) / 2,
        r = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: r, bottom: -r, left: -a, right: a };
}
let eS = (e, t, l) => {
    let { height: n, width: i } = eN(t, l),
        a = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
        r = { height: n, width: i },
        s = Math.floor(a < 1 ? 128 * a : 128 / a);
    return { ...e, cropDimensions: r, resizeHeight: a < 1 ? s : 128, resizeWidth: a > 1 ? s : 128 };
};
var ew = l(905702);
let eM = new A.A("EmojiStudio"),
    eC = (e) => {
        let { guildId: t } = e,
            l = "userImage" in e ? e.userImage : void 0,
            a = "emoji" in e ? e.emoji : void 0,
            r = !!a,
            [A, T] = i.useState(l ?? null),
            [G, H] = i.useState(!1),
            U = (0, u.bG)([S.A, M.A, w.A], () => {
                let e = M.A.getGuildId(),
                    t = S.A.getGuild(e);
                return w.A.can(V.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [J, z] = i.useState(t ?? U),
            [K, q] = i.useState(!1),
            [X, ee] = i.useState(null),
            [et, el] = i.useState(null),
            [en, ei] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return y.Ay.sanitizeEmojiName(n);
                })(A),
            ),
            [ea, er] = i.useState(null),
            eo = i.useRef(Date.now()),
            eu = i.useRef(0),
            ec = i.useRef(0),
            ed = i.useRef(!1),
            eh = i.useRef(null),
            [em, eg] = i.useState(!1),
            ex = i.useRef(null);
        i.useEffect(
            () => (
                (0, O.O)(!1),
                () => {
                    (0, O.O)(!1);
                }
            ),
            [],
        ),
            i.useEffect(() => {
                if (null == a) return;
                let e = N.A.getEmojiRawAsset(a.id);
                if (null != e) {
                    T(e), er(e.data), ei(a.name), H(!1);
                    return;
                }
                H(!0),
                    (0, P.$)(a)
                        .then((e) => {
                            T(e), er(e.data), ei(a.name), H(!1);
                        })
                        .catch((e) => {
                            eM.error("Failed to fetch emoji image", e), ee(R.j.MISSING_IMAGE_DATA), H(!1);
                        });
            }, [a]);
        let ef = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = X ?? et;
                C.default.track(V.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === eu.current,
                    has_image: null != A,
                    error: null == l ? null : String(l),
                    throttled_edit_count: ec.current,
                    session_duration_ms: Date.now() - eo.current,
                    has_guild_selected: null != J,
                });
            },
            [X, et, eo, A, J],
        );
        (0, I.l0)(() => {
            ed.current || ef({ reason: "closed" });
        });
        let ej = i.useCallback(async () => {
                if ((ee(null), null == J)) return void ee(R.j.MISSING_GUILD);
                if (null == A || A?.file == null || null == ea) return void ee(R.j.MISSING_IMAGE_DATA);
                q(!0);
                let e = null;
                try {
                    (e = await (0, b.Gf)({
                        image: ea,
                        guildId: J,
                        name: en,
                        analyticsLocation: { page: V.liQ.EMOJI_STUDIO },
                    })),
                        p.X({ emojiId: e.id, userImage: { ...A } });
                } catch (e) {
                    q(!1), ee(Q(e)), eM.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != a)
                    try {
                        await (0, b.ak)(J, a.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            _.A.show({ title: F.intl.string(F.t.iufib1), body: F.intl.string(F.t.Whhv4w) });
                        else {
                            q(!1), ee(Q(e)), eM.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, O.O)(!1),
                    (0, c.closeModal)(R.y),
                    ef({ reason: "uploaded" }),
                    (ed.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, D.P0)(
                            (0, k.o)("", L.Ck.CUSTOM, {
                                position: L.xJ.TOP,
                                component: (0, n.jsx)(Z, { emoji: t, guildId: l }),
                                duration: W,
                            }),
                        );
                    })({ emoji: e, guildId: J }),
                    q(!1);
            }, [J, A, a, ea, ef, en]),
            ev = i.useCallback(() => {
                ee(null), null != A && er(A.data), (ec.current = 0), (0, O.O)(!1), eh.current?.reset();
            }, [eh, A]),
            eE = i.useCallback(() => {
                (0, P.p)({ onClose: ev });
            }, [ev]),
            e_ = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                null != t && y.Ay.isDataTooBig(t) && (i = R.j.TOO_BIG),
                    ee(n ?? i),
                    l < eu.current || (null != t && (er(t), (eu.current = l)));
            }, []),
            eb = i.useCallback(() => {
                ec.current++, (0, O.O)(!0);
            }, []),
            eA = r ? F.intl.string(F.t.FOYn8U) : F.intl.string(F.t.iMJO37);
        return G || null == A
            ? (0, n.jsx)("main", {
                  className: ew.iW,
                  children: (0, n.jsxs)("div", {
                      className: ew.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: ew.uv,
                              children: (0, n.jsx)(d.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: ew.DD,
                                  children: eA,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: ew.b,
                              children: (0, n.jsx)(h.J, { size: "md", onClick: eE }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(ew.iW, { [ew.WY]: null != A }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: ew.EN,
                          children: [
                              (0, n.jsx)(eI, {
                                  ref: eh,
                                  file: A.file,
                                  imageUri: A.data,
                                  onUpdate: e_,
                                  onThrottledEdit: eb,
                              }),
                              (0, n.jsx)("div", {
                                  className: ew.uv,
                                  children: (0, n.jsx)(d.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: ew.DD,
                                      children: eA,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ew.b,
                                  children: (0, n.jsx)(h.J, { size: "md", onClick: eE }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ew.WA,
                                  children: (0, n.jsx)(m.Y, {
                                      targetElementRef: ex,
                                      "aria-label": F.intl.string(F.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(g.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": F.intl.string(F.t.vznjTl),
                                              children: (0, n.jsx)(x.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: F.intl.string(F.t.ka3Yhm),
                                                  action: ev,
                                              }),
                                          });
                                      },
                                      shouldShow: em,
                                      onRequestClose: () => eg(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: ex,
                                              variant: "icon-only",
                                              icon: j.n,
                                              onClick: () => eg(!0),
                                              "aria-label": F.intl.string(F.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: ew.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: ew.ey,
                                  children: (0, n.jsx)(v.D, {
                                      label: F.intl.string(F.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: ew.Br,
                                                      children: [
                                                          (0, n.jsx)(ey, {
                                                              src: ea,
                                                              alt: F.intl.string(F.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: ew.SA,
                                                      children: (0, n.jsx)(ey, {
                                                          src: ea,
                                                          alt: F.intl.string(F.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(B, {
                                      label: F.intl.string(F.t.m0YV7M),
                                      name: en,
                                      onNameChange: ei,
                                  }),
                              }),
                              r
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(es, {
                                            label: F.intl.string(F.t["9uKafS"]),
                                            required: !0,
                                            onChange: z,
                                            selected: J,
                                            onError: (e) => el(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: o(A?.file?.type),
                                            errorMessage: null != et ? $(et) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: ew.jt,
                                  children: [
                                      null != X &&
                                          (0, n.jsx)(Y, {
                                              error: X,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(E.$, {
                                          text: F.intl.string(F.t.Q7UP6F),
                                          onClick: ej,
                                          loading: K,
                                          disabled: K || null == A || null == J || en.length < 2 || null != et,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    ey = (e) => {
        let { src: t, alt: l } = e;
        return null == t || "" === t ? (0, n.jsx)("div", { className: ew.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
    };
var eO = l(250747);
let eR = (e) => {
    let { transitionState: t, guildId: l } = e,
        i = "userImage" in e ? e.userImage : void 0,
        r = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != r ? { emoji: r } : null != i ? { userImage: i } : {}) };
    return (0, n.jsx)(a.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: a.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: eO.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(a.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: eO.jE,
            children: (0, n.jsx)(eC, { ...s }),
        }),
    });
};
