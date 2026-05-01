l.d(t, { EmojiStudioModal: () => eR });
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
    N = l(821609),
    v = l(157559),
    E = l(554375),
    I = l(964486),
    S = l(626584),
    A = l(691223),
    p = l(288224),
    O = l(71393),
    _ = l(576705),
    C = l(967198),
    y = l(954571),
    M = l(690521),
    k = l(339143),
    R = l(80569),
    D = l(834730),
    w = l(691540),
    T = l(857250),
    G = l(97483),
    L = l(565645),
    z = l(927813),
    F = l(985018),
    K = l(780999),
    P = l(861173);
let H = 6 * z.A.Millis.SECOND;
function W(e) {
    let { emoji: t, guildId: l } = e,
        r = (0, c.bG)([O.A], () => O.A.getGuild(l)?.name);
    return (0, n.jsxs)("div", {
        className: s()(P.oR, K.o),
        children: [
            (0, n.jsx)(L.A, { emojiId: t.id, size: "default" }),
            (0, n.jsx)(D.E, {
                variant: "text-md/normal",
                color: "text-muted",
                children: F.intl.format(F.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, n.jsx)(
                            D.E,
                            { variant: "text-md/semibold", color: "text-strong", tag: "strong", children: e },
                            t,
                        ),
                    guildName: r,
                    guildNameHook: (e, t) =>
                        (0, n.jsx)(
                            D.E,
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
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : M.Ay.sanitizeEmojiName(e)));
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
        placeholder: F.intl.string(F.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: i,
        clearable: !0,
        required: !0,
    });
};
var $ = l(308295),
    B = l(652215),
    J = l(307731);
let V = (e) => {
        let { error: t, variant: l, color: r } = e;
        return (0, n.jsx)(D.E, { variant: l, color: r, children: Q(t) });
    },
    Q = (e) => {
        switch (e) {
            case B.t02.TOO_MANY_EMOJI:
            case B.t02.TOO_MANY_ANIMATED_EMOJI:
                return F.intl.string(F.t.FtKH49);
            case R.j.TOO_BIG:
            case B.t02.INVALID_FILE_ASSET_SIZE:
            case B.t02.INVALID_FORM_BODY:
                return F.intl.formatToPlainString(F.t.kIO9jy, { maxSize: J.EMOJI_MAX_FILESIZE_KB });
            case B.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
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
    X = (e) => {
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
    Z = l(159273),
    ee = l(548118),
    et = l(492494),
    el = l(711014),
    en = l(403362),
    er = l(473145);
let ei = (e) => ({ label: e.name, value: e.id }),
    ea = (e) => _.A.can(B.xBc.CREATE_GUILD_EXPRESSIONS, e),
    es = (e) => {
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
            m = (0, c.cf)([O.A, el.Ay], () =>
                Object.fromEntries(
                    el.Ay.getFlattenedGuildIds()
                        .map((e) => O.A.getGuild(e))
                        .filter(en.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            g = (0, c.cf)(
                [Z.Ay],
                () =>
                    Object.fromEntries(
                        Object.entries(m).map((e) => {
                            let [t, l] = e;
                            return [
                                t,
                                (function (e) {
                                    let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                        r =
                                            l.filter((e) => e.animated === n && !e.managed && !(0, et.Eg)(e, t.id))
                                                .length ?? 0;
                                    return (0, er.sN)(t) - r;
                                })({ guild: l, emojis: Z.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                            ];
                        }),
                    ),
                [m, s],
            ),
            h = r.useMemo(() => Object.values(m).filter(ea).map(ei), [m]),
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
                                : (0, n.jsx)(ee.Ay, { guild: t, size: ee.Ay.Sizes.SMALLER, active: !0 });
                        })(e),
                        trailing:
                            null == e.value ? null : F.intl.formatToPlainString(F.t.WkK72v, { count: g[e.value] }),
                    };
                },
                [g, m],
            );
        return (
            r.useEffect(() => {
                h.length < 1
                    ? i(R.j.NO_PERMISSIONS)
                    : null != l && (g?.[l] ?? 0) < 1
                      ? i(B.t02.TOO_MANY_EMOJI)
                      : i(null);
            }, [h, t, i, l, g]),
            (0, n.jsx)(q.l, {
                label: u,
                required: o,
                selectionMode: "single",
                errorMessage: d,
                onSelectionChange: t,
                options: h,
                formatOption: j,
                value: l,
                "aria-labelledby": a,
                placeholder: h.length < 1 ? F.intl.string(F.t.jHpxwo) : F.intl.string(F.t["4mqeQO"]),
                disabled: h.length < 1,
            })
        );
    };
var eu = l(830917),
    ec = l(990078),
    eo = l(831453),
    ed = l(725441),
    em = l(92259),
    eg = l(106236),
    eh = l(218429),
    ej = l(59520),
    ex = l(424632),
    ef = l(902916),
    eb = l(818348),
    eN = l(482390);
let ev = new S.A("ImageEditor"),
    eE = { width: 288, height: 288 },
    eI = r.forwardRef(function (e, t) {
        let { file: l, imageUri: i, onUpdate: a, onThrottledEdit: c } = e,
            o = r.useRef({ x: 0, y: 0 }),
            [d, m] = r.useState({ x: 0, y: 0 }),
            g = r.useRef(null),
            [h, j] = r.useState(1),
            [f, b] = r.useState(null),
            [N, v] = r.useState(!1),
            [E, I] = r.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [S, A] = r.useState(0),
            [p, O] = r.useState({ x: 0, y: 0 }),
            [_, C] = r.useState(!1),
            { isGIF: y, isWebP: M, isCheckingAnimation: k, isEditableAnimatedImage: w } = (0, ef._)(l),
            T = u(l.type) && !y && !M,
            [G, L] = r.useState(null),
            z = (0, ej.I)(c ?? eb.tE, 500),
            K = r.useRef(null),
            P = r.useRef(0),
            H = r.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: o.current.x, y: o.current.y };
                    if (null == g.current) return;
                    let { x: t, y: l } = (0, ex.F3)(e.x, e.y, E);
                    (o.current = { x: t, y: l }),
                        (g.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${S}deg) scaleX(${N ? "-1" : "1"})`),
                        m({ x: t, y: l });
                },
                [g, S, E, N],
            );
        r.useEffect(() => {
            null == f || k || I(ep(f, h, w));
        }, [f, h, w, k]);
        let W = r.useCallback(
                (e) => {
                    if (null == f) return;
                    let t = ep(f, e, w);
                    j(e), I(t), H(), z?.();
                },
                [f, H, w, z],
            ),
            U = r.useCallback(() => {
                if (null == g.current || null == f) return;
                let e = (S + 90) % 360,
                    t = f.height,
                    l = f.width,
                    n = ep({ width: t, height: l }, h, w);
                A(e), b({ width: t, height: l }), I(n), H(), z?.();
            }, [f, S, H, h, w, z]),
            Y = r.useCallback(() => {
                null != g.current && (v((e) => !e), H(), z?.());
            }, [g, H, z]),
            $ = r.useCallback(() => {
                if (null == f) return {};
                let { height: e, width: t } = eA(eS(f, S), h);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [f, S, h]),
            B = r.useCallback(() => {
                K.current?.moveGrabber(-0.025);
            }, []),
            J = r.useCallback(() => {
                K.current?.moveGrabber(0.025);
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
                if ((null != X.current && (X.current(), (X.current = null)), w))
                    try {
                        let t = eO(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: eE,
                                    cropOriginCoordinates: o.current,
                                    maxDimensions: r,
                                    imageRotation: S,
                                    flipHorizontal: N,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                f,
                                h,
                            ),
                            { result: i, cancelFn: a } = await (0, ex.ny)(t);
                        (X.current = a), (e = await i);
                    } catch (e) {
                        ev.error("Error cropping animated image", e), (s = R.j.ANIMATED_CROPPING);
                    } finally {
                        X.current?.(), (X.current = null);
                    }
                else
                    e = T
                        ? i
                        : (0, eu.iL)({
                              image: n,
                              cropDimensions: eE,
                              cropOriginCoordinates: o.current,
                              maxDimensions: r,
                              imageRotation: S,
                              flipHorizontal: N,
                          });
                return (
                    a({ imageData: e, imageDataTimestamp: t, error: s, loading: !1 }),
                    () => {
                        X.current?.(), (X.current = null);
                    }
                );
            }, [l, S, w, T, k, a, f, h, i, N]);
        r.useEffect(() => {
            _ || q();
        }, [q, d, S, f, _, h, G, N]);
        let Z = r.useCallback(() => {
                if (null == g.current) return;
                let e = g.current.naturalWidth,
                    t = g.current.naturalHeight;
                b({ width: e, height: t }), A(0), v(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                j(l), L(l), (P.current += 1), I(ep({ width: e, height: t }, l, w)), H({ x: 0, y: 0 });
            }, [g, w, H]),
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
                                    a({ error: R.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != f),
                                    transform: `translate3d(${o.current.x}px, ${o.current.y}px, 0) rotate(${S}deg) scaleX(${N ? "-1" : "1"})`,
                                    ...$(),
                                },
                                className: eN.Sl,
                                src: i,
                                crossOrigin: "anonymous",
                                alt: F.intl.string(F.t.EYR1Fa),
                                ref: g,
                                onMouseDown: V,
                                draggable: !1,
                            }),
                            !T &&
                                !k &&
                                (0, n.jsx)("div", {
                                    className: eN.Lw,
                                    style: { opacity: +(null != f), width: eE.width, height: eE.height },
                                    children: (0, n.jsx)(D.E, {
                                        className: eN.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: F.intl.string(F.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    T
                        ? (0, n.jsx)("div", {
                              className: eN.Nf,
                              children: (0, n.jsx)(D.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: F.intl.string(F.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: eN.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eN.R5,
                                      children: [
                                          (0, n.jsx)(ec.m, {
                                              text: F.intl.string(F.t.FEIIO9),
                                              "aria-label": F.intl.string(F.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eo.H,
                                                      onClick: U,
                                                      "aria-label": F.intl.string(F.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(ec.m, {
                                              text: F.intl.string(F.t["4LRS2p"]),
                                              "aria-label": F.intl.string(F.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: ed.v,
                                                      onClick: Y,
                                                      "aria-label": F.intl.string(F.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(eN.mu, eN.R5),
                                      children: [
                                          (0, n.jsx)(ec.m, {
                                              text: F.intl.string(F.t.QlArhK),
                                              "aria-label": F.intl.string(F.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: em.V,
                                                      onClick: B,
                                                      "aria-label": F.intl.string(F.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != G &&
                                              (0, n.jsx)(
                                                  eg.A,
                                                  {
                                                      ref: K,
                                                      className: eN.aw,
                                                      initialValue: G,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: W,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": F.intl.string(F.t["2hPcVJ"]),
                                                  },
                                                  P.current,
                                              ),
                                          (0, n.jsx)(ec.m, {
                                              text: F.intl.string(F.t.Ch32tT),
                                              "aria-label": F.intl.string(F.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: eN.Q$,
                                                  children: (0, n.jsx)(x.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: eh.r,
                                                      onClick: J,
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
    eS = (e, t) => {
        let { width: l, height: n } = e;
        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
    },
    eA = (e, t) => {
        let { width: l, height: n } = e,
            r = 288 * t,
            i = l / n;
        return l > n ? (n = (l = r) / i) : (l = (n = r) * i), { width: l, height: n };
    };
function ep(e, t, l) {
    let { width: n, height: r } = eA(e, t),
        i = Math.abs(288 - n) / 2,
        a = Math.abs(288 - r) / 2;
    return l && (n < 288 || r < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -i, right: i };
}
let eO = (e, t, l) => {
    let { height: n, width: r } = eA(t, l),
        i = (n = Math.min(n, 288)) / (r = Math.min(r, 288)),
        a = { height: n, width: r },
        s = Math.floor(i < 1 ? 128 * i : 128 / i);
    return { ...e, cropDimensions: a, resizeHeight: i < 1 ? s : 128, resizeWidth: i > 1 ? s : 128 };
};
var e_ = l(905702);
let eC = new S.A("EmojiStudio"),
    ey = (e) => {
        let { guildId: t } = e,
            l = "userImage" in e ? e.userImage : void 0,
            i = "emoji" in e ? e.emoji : void 0,
            a = !!i,
            [S, D] = r.useState(l ?? null),
            [L, z] = r.useState(!1),
            K = (0, c.bG)([O.A, C.A, _.A], () => {
                let e = C.A.getGuildId(),
                    t = O.A.getGuild(e);
                return _.A.can(B.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [P, U] = r.useState(t ?? K),
            [J, q] = r.useState(!1),
            [Z, ee] = r.useState(null),
            [et, el] = r.useState(null),
            [en, er] = r.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return M.Ay.sanitizeEmojiName(n);
                })(S),
            ),
            [ei, ea] = r.useState(null),
            eu = r.useRef(Date.now()),
            ec = r.useRef(0),
            eo = r.useRef(0),
            ed = r.useRef(!1),
            em = r.useRef(null),
            [eg, eh] = r.useState(!1),
            ej = r.useRef(null);
        r.useEffect(
            () => (
                (0, k.O)(!1),
                () => {
                    (0, k.O)(!1);
                }
            ),
            [],
        ),
            r.useEffect(() => {
                if (null == i) return;
                let e = A.A.getEmojiRawAsset(i.id);
                if (null != e) {
                    D(e), ea(e.data), er(i.name), z(!1);
                    return;
                }
                z(!0),
                    (0, $.$)(i)
                        .then((e) => {
                            D(e), ea(e.data), er(i.name), z(!1);
                        })
                        .catch((e) => {
                            eC.error("Failed to fetch emoji image", e), ee(R.j.MISSING_IMAGE_DATA), z(!1);
                        });
            }, [i]);
        let ex = r.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = Z ?? et;
                y.default.track(B.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ec.current,
                    has_image: null != S,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eo.current,
                    session_duration_ms: Date.now() - eu.current,
                    has_guild_selected: null != P,
                });
            },
            [Z, et, eu, S, P],
        );
        (0, I.l0)(() => {
            ed.current || ex({ reason: "closed" });
        });
        let ef = r.useCallback(async () => {
                if ((ee(null), null == P)) return void ee(R.j.MISSING_GUILD);
                if (null == S || S?.file == null || null == ei) return void ee(R.j.MISSING_IMAGE_DATA);
                q(!0);
                let e = null;
                try {
                    (e = await (0, E.Gf)({
                        image: ei,
                        guildId: P,
                        name: en,
                        analyticsLocation: { page: B.liQ.EMOJI_STUDIO },
                    })),
                        p.X({ emojiId: e.id, userImage: { ...S } });
                } catch (e) {
                    q(!1), ee(X(e)), eC.error("Failed to upload emoji.", e);
                    return;
                }
                if (null != i)
                    try {
                        await (0, E.ak)(P, i.id, e.id);
                    } catch (e) {
                        if (429 === e.status)
                            v.A.show({ title: F.intl.string(F.t.iufib1), body: F.intl.string(F.t.Whhv4w) });
                        else {
                            q(!1), ee(X(e)), eC.error("Failed to delete emoji.", e);
                            return;
                        }
                    }
                (0, k.O)(!1),
                    (0, o.closeModal)(R.y),
                    ex({ reason: "uploaded" }),
                    (ed.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, w.P0)(
                            (0, T.o)("", G.Ck.CUSTOM, {
                                position: G.xJ.TOP,
                                component: (0, n.jsx)(W, { emoji: t, guildId: l }),
                                duration: H,
                            }),
                        );
                    })({ emoji: e, guildId: P }),
                    q(!1);
            }, [P, S, i, ei, ex, en]),
            eb = r.useCallback(() => {
                ee(null), null != S && ea(S.data), (eo.current = 0), (0, k.O)(!1), em.current?.reset();
            }, [em, S]),
            eN = r.useCallback(() => {
                (0, $.p)({ onClose: eb });
            }, [eb]),
            ev = r.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    r = null;
                null != t && M.Ay.isDataTooBig(t) && (r = R.j.TOO_BIG),
                    ee(n ?? r),
                    l < ec.current || (null != t && (ea(t), (ec.current = l)));
            }, []),
            eE = r.useCallback(() => {
                eo.current++, (0, k.O)(!0);
            }, []),
            eS = a ? F.intl.string(F.t.FOYn8U) : F.intl.string(F.t.iMJO37);
        return L || null == S
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
                                  children: eS,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: e_.b,
                              children: (0, n.jsx)(m.J, { size: "md", onClick: eN }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(e_.iW, { [e_.WY]: null != S }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: e_.EN,
                          children: [
                              (0, n.jsx)(eI, {
                                  ref: em,
                                  file: S.file,
                                  imageUri: S.data,
                                  onUpdate: ev,
                                  onThrottledEdit: eE,
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.uv,
                                  children: (0, n.jsx)(d.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: e_.DD,
                                      children: eS,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.b,
                                  children: (0, n.jsx)(m.J, { size: "md", onClick: eN }),
                              }),
                              (0, n.jsx)("div", {
                                  className: e_.WA,
                                  children: (0, n.jsx)(g.Y, {
                                      targetElementRef: ej,
                                      "aria-label": F.intl.string(F.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(h.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": F.intl.string(F.t.vznjTl),
                                              children: (0, n.jsx)(j.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: F.intl.string(F.t.ka3Yhm),
                                                  action: eb,
                                              }),
                                          });
                                      },
                                      shouldShow: eg,
                                      onRequestClose: () => eh(!1),
                                      children: () =>
                                          (0, n.jsx)(x.K, {
                                              buttonRef: ej,
                                              variant: "icon-only",
                                              icon: f.n,
                                              onClick: () => eh(!0),
                                              "aria-label": F.intl.string(F.t.u8IcM0),
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
                                  children: (0, n.jsx)(b.D, {
                                      label: F.intl.string(F.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: e_.Br,
                                                      children: [
                                                          (0, n.jsx)(eM, {
                                                              src: ei,
                                                              alt: F.intl.string(F.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: e_.SA,
                                                      children: (0, n.jsx)(eM, {
                                                          src: ei,
                                                          alt: F.intl.string(F.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(Y, {
                                      label: F.intl.string(F.t.m0YV7M),
                                      name: en,
                                      onNameChange: er,
                                  }),
                              }),
                              a
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(es, {
                                            label: F.intl.string(F.t["9uKafS"]),
                                            required: !0,
                                            onChange: U,
                                            selected: P,
                                            onError: (e) => el(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: u(S?.file?.type),
                                            errorMessage: null != et ? Q(et) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: e_.jt,
                                  children: [
                                      null != Z &&
                                          (0, n.jsx)(V, {
                                              error: Z,
                                              variant: "text-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(N.$, {
                                          text: F.intl.string(F.t.Q7UP6F),
                                          onClick: ef,
                                          loading: J,
                                          disabled: J || null == S || null == P || en.length < 2 || null != et,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    eM = (e) => {
        let { src: t, alt: l } = e;
        return null == t || "" === t ? (0, n.jsx)("div", { className: e_.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
    };
var ek = l(250747);
let eR = (e) => {
    let { transitionState: t, guildId: l } = e,
        r = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != r ? { userImage: r } : {}) };
    return (0, n.jsx)(i.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: ek.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(i.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: ek.jE,
            children: (0, n.jsx)(ey, { ...s }),
        }),
    });
};
