l.d(t, { EmojiStudioModal: () => eA });
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
    j = l(454743),
    x = l(452027),
    v = l(821609),
    E = l(157559),
    N = l(554375),
    I = l(964486),
    b = l(268429),
    A = l(61310),
    S = l(626584),
    M = l(691223),
    p = l(288224),
    _ = l(902916),
    O = l(71393),
    y = l(576705),
    C = l(967198),
    w = l(174459),
    k = l(690521),
    R = l(339143),
    D = l(80569),
    T = l(858899),
    L = l(660183),
    G = l(95477);
function z(e) {
    let { name: t, onNameChange: l, label: r } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        [u, c] = i.useState(!1),
        o = i.useCallback(
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
            c(!1);
        }, []),
        m = i.useCallback(() => {
            c(!0);
        }, []);
    return (0, n.jsx)(G.k, {
        inputRef: a,
        error: u ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: o,
        placeholder: L.intl.string(L.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: r,
        clearable: !0,
        required: !0,
    });
}
var F = l(308295),
    Z = l(834730),
    H = l(652215),
    V = l(307731);
function B(e) {
    let { error: t, variant: l, color: i } = e;
    return (0, n.jsx)(Z.E, { variant: l, color: i, children: J(t) });
}
function J(e) {
    switch (e) {
        case H.t02.TOO_MANY_EMOJI:
        case H.t02.TOO_MANY_ANIMATED_EMOJI:
            return L.intl.string(L.t.FtKH49);
        case D.j.TOO_BIG:
        case H.t02.INVALID_FILE_ASSET_SIZE:
        case H.t02.INVALID_FORM_BODY:
            return L.intl.formatToPlainString(L.t.kIO9jy, { maxSize: V.EMOJI_MAX_FILESIZE_KB });
        case H.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
            return L.intl.string(L.t["6WN/qk"]);
        case D.j.MISSING_IMAGE_DATA:
            return L.intl.string(L.t["41/Kbh"]);
        case D.j.MISSING_GUILD:
            return L.intl.string(L.t["8RCtpD"]);
        case D.j.ANIMATED_CROPPING:
            return L.intl.string(L.t.yoVkHN);
        case D.j.IMAGE_LOAD:
            return L.intl.format(L.t.xZLPcF, {});
        case D.j.NO_PERMISSIONS:
            return L.intl.string(L.t.QY7ZFZ);
        case 429:
            return L.intl.string(L.t["4rjikl"]);
        case D.j.UNKNOWN:
        default:
            return L.intl.string(L.t.iufib1);
    }
}
function K(e) {
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
var P = l(691885),
    U = l(236285),
    W = l(548118),
    Y = l(492494),
    $ = l(711014),
    Q = l(403362),
    X = l(473145);
function q(e) {
    return { label: e.name, value: e.id };
}
function ee(e) {
    return y.A.can(H.xBc.CREATE_GUILD_EXPRESSIONS, e);
}
function et(e) {
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
        m = (0, u.cf)([O.A, $.Ay], () =>
            Object.fromEntries(
                $.Ay.getFlattenedGuildIds()
                    .map((e) => O.A.getGuild(e))
                    .filter(Q.Vq)
                    .map((e) => [e.id, e]),
            ),
        ),
        h = (0, u.cf)(
            [U.Ay],
            () =>
                Object.fromEntries(
                    Object.entries(m).map((e) => {
                        let [t, l] = e;
                        return [
                            t,
                            (function (e) {
                                let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                    i =
                                        l.filter((e) => e.animated === n && !e.managed && !(0, Y.Eg)(e, t.id)).length ??
                                        0;
                                return (0, X.sN)(t) - i;
                            })({ guild: l, emojis: U.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                        ];
                    }),
                ),
            [m, s],
        ),
        g = i.useMemo(() => Object.values(m).filter(ee).map(q), [m]),
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
                        return null == t ? null : (0, n.jsx)(W.Ay, { guild: t, size: W.Ay.Sizes.SMALLER, active: !0 });
                    })(e),
                    trailing: null == e.value ? null : L.intl.formatToPlainString(L.t.WkK72v, { count: h[e.value] }),
                };
            },
            [h, m],
        );
    return (
        i.useEffect(() => {
            g.length < 1 ? r(D.j.NO_PERMISSIONS) : null != l && (h?.[l] ?? 0) < 1 ? r(H.t02.TOO_MANY_EMOJI) : r(null);
        }, [g, t, r, l, h]),
        (0, n.jsx)(P.l, {
            label: c,
            required: o,
            selectionMode: "single",
            errorMessage: d,
            onSelectionChange: t,
            options: g,
            formatOption: f,
            value: l,
            "aria-labelledby": a,
            placeholder: g.length < 1 ? L.intl.string(L.t.jHpxwo) : L.intl.string(L.t["4mqeQO"]),
            disabled: g.length < 1,
        })
    );
}
var el = l(830917),
    en = l(866665),
    ei = l(831453),
    er = l(725441),
    ea = l(92259),
    es = l(299163),
    eu = l(218429),
    ec = l(59520),
    eo = l(424632),
    ed = l(818348),
    em = l(162555);
let eh = new S.A("ImageEditor"),
    eg = { width: 288, height: 288 };
function ef(e) {
    let t,
        { ref: l, ...r } = e,
        { file: a, imageUri: u, onUpdate: c, onThrottledEdit: o } = r,
        d = i.useRef({ x: 0, y: 0 }),
        [m, h] = i.useState({ x: 0, y: 0 }),
        g = i.useRef(null),
        [j, x] = i.useState(1),
        [v, E] = i.useState(null),
        [N, I] = i.useState(!1),
        [b, A] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
        [S, M] = i.useState(0),
        [p, O] = i.useState({ x: 0, y: 0 }),
        [y, C] = i.useState(!1),
        { isGIF: w, isWebP: k, isCheckingAnimation: R, isEditableAnimatedImage: T } = (0, _._)(a),
        G = ("image/gif" === (t = a.type) || "image/webp" === t || "image/avif" === t) && !w && !k,
        [z, F] = i.useState(null),
        H = (0, ec.I)(o ?? ed.tE, 500),
        B = i.useRef(null),
        J = i.useRef(0),
        K = i.useCallback(
            function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { x: d.current.x, y: d.current.y };
                if (null == g.current) return;
                let { x: t, y: l } = (0, eo.F3)(e.x, e.y, b);
                ((d.current = { x: t, y: l }),
                    (g.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${S}deg) scaleX(${N ? "-1" : "1"})`),
                    h({ x: t, y: l }));
            },
            [g, S, b, N],
        );
    i.useEffect(() => {
        null == v || R || A(ex(v, j, T));
    }, [v, j, T, R]);
    let P = i.useCallback(
            (e) => {
                if (null == v) return;
                let t = ex(v, e, T);
                (x(e), A(t), K(), H?.());
            },
            [v, K, T, H],
        ),
        U = i.useCallback(() => {
            if (null == g.current || null == v) return;
            let e = (S + 90) % 360,
                t = v.height,
                l = v.width,
                n = ex({ width: t, height: l }, j, T);
            (M(e), E({ width: t, height: l }), A(n), K(), H?.());
        }, [v, S, K, j, T, H]),
        W = i.useCallback(() => {
            null != g.current && (I((e) => !e), K(), H?.());
        }, [g, K, H]),
        Y = i.useCallback(() => {
            if (null == v) return {};
            let { height: e, width: t } = ej(
                (function (e, t) {
                    let { width: l, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
                })(v, S),
                j,
            );
            return { height: e, width: t, minHeight: e, minWidth: t };
        }, [v, S, j]),
        $ = i.useCallback(() => {
            B.current?.moveGrabber(-0.025);
        }, []),
        Q = i.useCallback(() => {
            B.current?.moveGrabber(0.025);
        }, []),
        X = i.useCallback((e) => {
            (O({ x: e.clientX - d.current.x, y: e.clientY - d.current.y }), C(!0));
        }, []);
    i.useEffect(() => {
        function e() {
            return C(!1);
        }
        return (window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e));
    }, []);
    let q = i.useCallback(
        (e) => {
            let { x: t, y: l } = d.current;
            y &&
                (e.clientX !== t || e.clientY !== l) &&
                (K({ x: (t = e.clientX - p.x), y: (l = e.clientY - p.y) }), H?.());
        },
        [y, p, K, H],
    );
    i.useEffect(() => {
        if (y) return (window.addEventListener("mousemove", q), () => window.removeEventListener("mousemove", q));
    }, [q, y]);
    let ee = i.useRef(null),
        et = i.useCallback(async () => {
            let e;
            if (null == g.current || null == v || R) return;
            let t = Date.now(),
                l = g.current,
                n = Math.min(128, Math.max(v.height, v.width)),
                i = { height: n, width: n },
                r = null;
            null != ee.current && (ee.current(), (ee.current = null));
            let { x: s, y: o } = d.current;
            if (
                0 === S &&
                !N &&
                1 === j &&
                0 === s &&
                0 === o &&
                v.width === v.height &&
                a.size <= V.EMOJI_MAX_FILESIZE
            )
                e = u;
            else if (T)
                try {
                    let t = (function (e, t, l) {
                            let { height: n, width: i } = ej(t, l),
                                r = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
                                a = { height: n, width: i },
                                s = Math.min(128, Math.max(t.height, t.width)),
                                u = Math.floor(r < 1 ? s * r : s / r);
                            return { ...e, cropDimensions: a, resizeHeight: r < 1 ? u : s, resizeWidth: r > 1 ? u : s };
                        })(
                            {
                                file: a,
                                image: l,
                                cropDimensions: eg,
                                cropOriginCoordinates: d.current,
                                maxDimensions: i,
                                imageRotation: S,
                                flipHorizontal: N,
                                resizeWidth: n,
                                resizeHeight: n,
                            },
                            v,
                            j,
                        ),
                        { result: r, cancelFn: s } = await (0, eo.ny)(t);
                    ((ee.current = s), (e = await r));
                } catch (e) {
                    (eh.error("Error cropping animated image", e), (r = D.j.ANIMATED_CROPPING));
                } finally {
                    (ee.current?.(), (ee.current = null));
                }
            else
                e = G
                    ? u
                    : (0, el.iL)({
                          image: l,
                          cropDimensions: eg,
                          cropOriginCoordinates: d.current,
                          maxDimensions: i,
                          imageRotation: S,
                          flipHorizontal: N,
                      });
            return (
                c({ imageData: e, imageDataTimestamp: t, error: r, loading: !1 }),
                () => {
                    (ee.current?.(), (ee.current = null));
                }
            );
        }, [a, S, T, G, R, c, v, j, u, N]);
    i.useEffect(() => {
        y || et();
    }, [et, m, S, v, y, j, z, N]);
    let ef = i.useCallback(() => {
            if (null == g.current) return;
            let e = g.current.naturalWidth,
                t = g.current.naturalHeight;
            (E({ width: e, height: t }), M(0), I(!1));
            let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (x(l), F(l), (J.current += 1), A(ex({ width: e, height: t }, l, T)), K({ x: 0, y: 0 }));
        }, [g, T, K]),
        ev = i.useCallback(() => {
            ef();
        }, [ef]);
    return (
        i.useImperativeHandle(l, () => ({ reset: ef })),
        (0, n.jsxs)("div", {
            className: s()(em.j0, { [em.Id]: y }),
            style: { "--custom-image-editor-size": "288px" },
            children: [
                (0, n.jsxs)("div", {
                    className: em.oW,
                    children: [
                        (0, n.jsx)("img", {
                            onLoad: ev,
                            onError: () => {
                                c({ error: D.j.IMAGE_LOAD, loading: !1 });
                            },
                            style: {
                                opacity: +(null != v),
                                transform: `translate3d(${d.current.x}px, ${d.current.y}px, 0) rotate(${S}deg) scaleX(${N ? "-1" : "1"})`,
                                ...Y(),
                            },
                            className: em.Sl,
                            src: u,
                            crossOrigin: "anonymous",
                            alt: L.intl.string(L.t.EYR1Fa),
                            ref: g,
                            onMouseDown: X,
                            draggable: !1,
                        }),
                        !G &&
                            !R &&
                            (0, n.jsx)("div", {
                                className: em.Lw,
                                style: { opacity: +(null != v), width: eg.width, height: eg.height },
                                children: (0, n.jsx)(Z.E, {
                                    className: em.TB,
                                    variant: "text-xs/normal",
                                    color: "text-strong",
                                    children: L.intl.string(L.t.oBPhdN),
                                }),
                            }),
                    ],
                }),
                G
                    ? (0, n.jsx)("div", {
                          className: em.Nf,
                          children: (0, n.jsx)(Z.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: L.intl.string(L.t.AjdEvM),
                          }),
                      })
                    : (0, n.jsxs)("div", {
                          className: em.KE,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: em.R5,
                                  children: [
                                      (0, n.jsx)(en.m, {
                                          text: L.intl.string(L.t.FEIIO9),
                                          "aria-label": L.intl.string(L.t.FEIIO9),
                                          children: (0, n.jsx)("div", {
                                              className: em.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: ei.H,
                                                  onClick: U,
                                                  "aria-label": L.intl.string(L.t.FEIIO9),
                                              }),
                                          }),
                                      }),
                                      (0, n.jsx)(en.m, {
                                          text: L.intl.string(L.t["4LRS2p"]),
                                          "aria-label": L.intl.string(L.t["4LRS2p"]),
                                          children: (0, n.jsx)("div", {
                                              className: em.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: er.v,
                                                  onClick: W,
                                                  "aria-label": L.intl.string(L.t["4LRS2p"]),
                                              }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: s()(em.mu, em.R5),
                                  children: [
                                      (0, n.jsx)(en.m, {
                                          text: L.intl.string(L.t.QlArhK),
                                          "aria-label": L.intl.string(L.t.QlArhK),
                                          children: (0, n.jsx)("div", {
                                              className: em.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: ea.V,
                                                  onClick: $,
                                                  "aria-label": L.intl.string(L.t.QlArhK),
                                              }),
                                          }),
                                      }),
                                      null != z &&
                                          (0, n.jsx)(
                                              es.A,
                                              {
                                                  ref: B,
                                                  className: em.aw,
                                                  initialValue: z,
                                                  minValue: 1,
                                                  maxValue: 4,
                                                  keyboardStep: 0.025,
                                                  asValueChanges: P,
                                                  equidistant: !0,
                                                  hideBubble: !0,
                                                  "aria-label": L.intl.string(L.t["2hPcVJ"]),
                                              },
                                              J.current,
                                          ),
                                      (0, n.jsx)(en.m, {
                                          text: L.intl.string(L.t.Ch32tT),
                                          "aria-label": L.intl.string(L.t.Ch32tT),
                                          children: (0, n.jsx)("div", {
                                              className: em.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: eu.r,
                                                  onClick: Q,
                                                  "aria-label": L.intl.string(L.t.Ch32tT),
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
}
function ej(e, t) {
    let { width: l, height: n } = e,
        i = 288 * t,
        r = l / n;
    return (l > n ? (n = (l = i) / r) : (l = (n = i) * r), { width: l, height: n });
}
function ex(e, t, l) {
    let { width: n, height: i } = ej(e, t),
        r = Math.abs(288 - n) / 2,
        a = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
var ev = l(740243);
let eE = new S.A("EmojiStudio"),
    eN = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            S = "emoji" in e ? e.emoji : void 0,
            G = !!S,
            [Z, V] = i.useState(a ?? null),
            [P, U] = i.useState(!1),
            W = (0, u.bG)([O.A, C.A, y.A], () => {
                let e = C.A.getGuildId(),
                    t = O.A.getGuild(e);
                return y.A.can(H.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [Y, $] = i.useState(r ?? W),
            [Q, X] = i.useState(!1),
            [q, ee] = i.useState(null),
            [el, en] = i.useState(null),
            [ei, er] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return k.Ay.sanitizeEmojiName(n);
                })(Z),
            ),
            [ea, es] = i.useState(null),
            eu = i.useRef(Date.now()),
            ec = i.useRef(0),
            eo = i.useRef(0),
            ed = i.useRef(!1),
            em = i.useRef(null),
            [eh, eg] = i.useState(!1),
            ej = i.useRef(null),
            ex =
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
            { isEditableAnimatedImage: eN } = (0, _._)(Z?.file),
            eb = eN || Z?.file?.type === "image/avif";
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
                    (V(e), es(e.data), er(S.name), U(!1));
                    return;
                }
                (U(!0),
                    (0, F.$)(S)
                        .then((e) => {
                            (V(e), es(e.data), er(S.name), U(!1));
                        })
                        .catch((e) => {
                            (eE.error("Failed to fetch emoji image", e), ee(D.j.MISSING_IMAGE_DATA), U(!1));
                        }));
            }, [S]));
        let eA = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = q ?? el;
                w.default.track(H.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ec.current,
                    has_image: null != Z,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eo.current,
                    session_duration_ms: Date.now() - eu.current,
                    has_guild_selected: null != Y,
                });
            },
            [q, el, eu, Z, Y],
        );
        (0, I.l0)(() => {
            ed.current || eA({ reason: "closed" });
        });
        let eS = i.useCallback(async () => {
                if ((ee(null), null == Y)) return void ee(D.j.MISSING_GUILD);
                if (null == Z || Z?.file == null || null == ea) return void ee(D.j.MISSING_IMAGE_DATA);
                X(!0);
                let e = (await ex.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    ((t = await (0, N.Gf)({
                        image: ea,
                        guildId: Y,
                        name: ei,
                        originalMd5: e,
                        analyticsLocation: { page: H.liQ.EMOJI_STUDIO },
                    })),
                        p.X({ emojiId: t.id, userImage: { ...Z } }));
                } catch (e) {
                    (X(!1), ee(K(e)), eE.error("Failed to upload emoji.", e));
                    return;
                }
                if (null != S)
                    try {
                        await (0, N.ak)(Y, S.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            E.A.show({ title: L.intl.string(L.t.iufib1), body: L.intl.string(L.t.Whhv4w) });
                        else {
                            (X(!1), ee(K(e)), eE.error("Failed to delete emoji.", e));
                            return;
                        }
                    }
                ((0, R.O)(!1),
                    (0, c.closeModal)(D.y),
                    eA({ reason: "uploaded" }),
                    (ed.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, T.P0)({
                            text: L.intl.formatToPlainString(L.t.BaxFf8, {
                                emojiName: t.name,
                                emojiNameHook: (e) => e,
                                guildName: O.A.getGuild(l)?.name,
                                guildNameHook: (e) => e,
                            }),
                            icon: { type: "emoji", src: (0, k.Ez)(t), alt: t.name },
                        });
                    })({ emoji: t, guildId: Y }),
                    X(!1));
            }, [Y, Z, S, ea, eA, ei, ex]),
            eM = i.useCallback(() => {
                (ee(null), null != Z && es(Z.data), (eo.current = 0), (0, R.O)(!1), em.current?.reset());
            }, [em, Z]),
            ep = i.useCallback(() => {
                (0, F.p)({ onClose: eM });
            }, [eM]),
            e_ = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                (null != t && k.Ay.isDataTooBig(t) && (i = D.j.TOO_BIG),
                    ee(n ?? i),
                    l < ec.current || (null != t && (es(t), (ec.current = l))));
            }, []),
            eO = i.useCallback(() => {
                (eo.current++, (0, R.O)(!0));
            }, []),
            ey = G ? L.intl.string(L.t.FOYn8U) : L.intl.string(L.t.iMJO37);
        return P || null == Z
            ? (0, n.jsx)("main", {
                  className: ev.iW,
                  children: (0, n.jsxs)("div", {
                      className: ev.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: ev.uv,
                              children: (0, n.jsx)(o.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: ev.DD,
                                  children: ey,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: ev.b,
                              children: (0, n.jsx)(d.J, { size: "md", onClick: ep }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(ev.iW, { [ev.WY]: null != Z }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: ev.EN,
                          children: [
                              (0, n.jsx)(ef, {
                                  ref: em,
                                  file: Z.file,
                                  imageUri: Z.data,
                                  onUpdate: e_,
                                  onThrottledEdit: eO,
                              }),
                              (0, n.jsx)("div", {
                                  className: ev.uv,
                                  children: (0, n.jsx)(o.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: ev.DD,
                                      children: ey,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ev.b,
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: ep }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ev.WA,
                                  children: (0, n.jsx)(m.Y, {
                                      targetElementRef: ej,
                                      "aria-label": L.intl.string(L.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(h.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": L.intl.string(L.t.vznjTl),
                                              children: (0, n.jsx)(g.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: L.intl.string(L.t.ka3Yhm),
                                                  action: eM,
                                              }),
                                          });
                                      },
                                      shouldShow: eh,
                                      onRequestClose: () => eg(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: ej,
                                              variant: "icon-only",
                                              icon: j.n,
                                              onClick: () => eg(!0),
                                              "aria-label": L.intl.string(L.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: ev.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: ev.ey,
                                  children: (0, n.jsx)(x.D, {
                                      label: L.intl.string(L.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: ev.Br,
                                                      children: [
                                                          (0, n.jsx)(eI, {
                                                              src: ea,
                                                              alt: L.intl.string(L.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: ev.SA,
                                                      children: (0, n.jsx)(eI, {
                                                          src: ea,
                                                          alt: L.intl.string(L.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(z, {
                                      label: L.intl.string(L.t.m0YV7M),
                                      name: ei,
                                      onNameChange: er,
                                  }),
                              }),
                              G
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(et, {
                                            label: L.intl.string(L.t["9uKafS"]),
                                            required: !0,
                                            onChange: $,
                                            selected: Y,
                                            onError: (e) => en(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: eb,
                                            errorMessage: null != el ? J(el) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: ev.jt,
                                  children: [
                                      null != q &&
                                          (0, n.jsx)(B, {
                                              error: q,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(v.$, {
                                          text: L.intl.string(L.t.Q7UP6F),
                                          onClick: eS,
                                          loading: Q,
                                          disabled: Q || null == Z || null == Y || ei.length < 2 || null != el,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
function eI(e) {
    let { src: t, alt: l } = e;
    return null == t || "" === t ? (0, n.jsx)("div", { className: ev.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
}
var eb = l(77634);
function eA(e) {
    let { transitionState: t, guildId: l } = e,
        i = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != i ? { userImage: i } : {}) };
    return (0, n.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: eb.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: eb.jE,
            children: (0, n.jsx)(eN, { ...s }),
        }),
    });
}
