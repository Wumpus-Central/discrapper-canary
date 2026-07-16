"use strict";
n.d(t, {
    ks: () => tF,
    UK: () => tY,
    Ez: () => tB,
    _z: () => tv,
    LL: () => tw,
    Uq: () => t$,
    yR: () => tK,
    OZ: () => tj,
    $o: () => tM,
    bU: () => tG,
    Uk: () => tO,
    GN: () => tH,
    Y0: () => tz,
    P$: () => tU,
    _d: () => tx,
    gL: () => tP,
    Dk: () => tk,
    Ab: () => tV,
});
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(435558),
    d = n.n(o),
    c = n(621466),
    u = n(17928),
    _ = n(834730),
    E = n(922016),
    A = n(187322),
    h = n(821609),
    I = n(289873),
    f = n(939249),
    p = n(582394),
    T = n(306788),
    m = n(297264),
    g = n(789645),
    S = n(364522),
    N = n(493336),
    C = n(334738),
    R = n(192308),
    O = n(267102),
    L = n(619517),
    y = n(256905),
    D = n(536763),
    v = n(218394);
class b extends a.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: i, onMouseEnter: r, handlePreloadImage: a } = this.props;
        (r?.(e), null != a) ? a() : (0, D.A)({ src: t, width: n, height: i, options: this.props });
    };
    modalContext = (0, R.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, R.closeModal)(y.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: i } = t;
        e.preventDefault();
        let {
            alt: r,
            src: a,
            original: s,
            width: l,
            height: o,
            animated: d,
            srcIsAnimated: u,
            children: _,
            shouldHideMediaOptions: E = !1,
            sourceMetadata: A,
            analyticsSource: h,
            contentType: I,
            originalContentType: f,
        } = this.props;
        (0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, y.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: a,
                        width: l,
                        height: o,
                        type: "IMAGE",
                        alt: r,
                        contentType: I,
                        originalContentType: f,
                        zoomThumbnailPlaceholder: n,
                        animated: d,
                        srcIsAnimated: u,
                        children: _,
                        trigger: i,
                        sourceMetadata: A,
                        original: s ?? a,
                    },
                ],
                shouldHideMediaOptions: E,
                location: h ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, r.jsx)(L.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function M(e) {
    let t = (0, O.Us)(),
        n = (0, v.j)();
    return (0, r.jsx)(b, { ...e, isWindowFocused: n, appContext: t });
}
var P = n(9578),
    U = n(56562),
    w = n(475743),
    G = n(564771),
    x = n(692051),
    k = n(915089),
    F = n(611371),
    V = n(453771),
    B = n(994064);
class H extends a.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: i,
            playable: a,
            volume: s,
            renderLinkComponent: l,
            onVolumeChange: o,
            onVolumeShow: d,
            onVolumeHide: c,
            autoMute: u,
            onMute: _,
            mimeType: E,
            onPlay: A,
        } = this.props;
        return (0, r.jsx)(B.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, V.Hb)(t),
            fileSizeBytes: t,
            type: B.Ay.Types.AUDIO,
            className: i,
            playable: a,
            volume: s,
            onMute: _,
            autoMute: u,
            onVolumeChange: o,
            onVolumeShow: d,
            onVolumeHide: c,
            renderLinkComponent: l,
            mimeType: E,
            onPlay: A,
        });
    }
}
var j = n(248643),
    W = n(156828),
    Y = n(866665),
    K = n(408278),
    $ = n(900797),
    z = n(847374),
    q = n(305866),
    Z = n(732771),
    X = n(387758),
    Q = n(980707),
    J = n(477782),
    ee = n(32880),
    et = n(365199),
    en = n(349288),
    ei = n(26430),
    er = n(224640),
    ea = n(417964),
    es = n(639169),
    el = n(157941),
    eo = n(768947),
    ed = n(255438),
    ec = n(375708),
    eu = n(460224),
    e_ = n(429128);
function eE(e) {
    let { text: t, language: i, wordWrap: a } = e;
    function s() {
        return (0, r.jsx)("code", { className: l()(e_.kw, eu.Xb, "hljs", { [eu.Zw]: a }), children: t });
    }
    return (0, r.jsx)("pre", {
        children: (0, r.jsx)(el.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: l()(e_.kw, eu.Xb, "hljs", { [eu.Zw]: a }),
            children: (0, r.jsx)(W.c2, {
                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(i)) return s();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? s()
                        : (0, r.jsx)("code", {
                              className: l()(e_.kw, eu.Xb, "hljs", n.language, { [eu.Zw]: a }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => s(),
            }),
        }),
    });
}
function eA(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: a } = e,
        s = ec.intl.formatToPlainString(a ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: i }),
        l = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${s})`;
    return (0, r.jsx)("div", {
        className: eu.py,
        children: (0, r.jsx)(Y.m, {
            text: l,
            children: (0, r.jsx)(K.K, {
                icon: t ? $.t : z.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": l,
            }),
        }),
    });
}
function eh(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, ed.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: eu.VI,
        children: [
            (0, r.jsx)("div", {
                className: eu.VW,
                children: (0, r.jsx)(Y.m, {
                    text: i,
                    children: (0, r.jsx)(_.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: eu.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(_.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, ed.up)(n) }),
        ],
    });
}
function eI(e) {
    let { language: t, setLanguage: n, align: i } = e,
        s = a.useRef(null),
        l = el.L.useConfig({ location: "LanguageSelect" }).enabled ? eo.No : es.Q;
    return (0, r.jsx)(E.Y, {
        targetElementRef: s,
        position: "left",
        align: i,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(q.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: eu.md,
                    children: (0, r.jsxs)(Z.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(l).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, r.jsx)(Z.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                            (0, r.jsx)(Z.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(Y.m, {
                ariaHidden: !0,
                text: ec.intl.string(ec.t.utm4qs),
                children: (0, r.jsx)(f.D, {
                    ...e,
                    className: eu.Qw,
                    "aria-label": ec.intl.string(ec.t.utm4qs),
                    children: (0, r.jsx)(X.G, { size: "sm", color: "currentColor", ref: s }),
                }),
            }),
    });
}
function ef(e) {
    let { wordWrap: t, setWordWrap: n, url: i, fileName: s } = e,
        l = a.useRef(null),
        o = a.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(E.Y, {
                targetElementRef: l,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsx)(Q.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: i,
                        onSelect: () => {},
                        "aria-label": ec.intl.string(ec.t.PdRCRg),
                        children: (0, r.jsxs)(J.rX, {
                            children: [
                                (0, r.jsx)(J.Dr, {
                                    id: "download",
                                    label: ec.intl.string(ec.t["1WjMbC"]),
                                    icon: ee.s,
                                    action: () => {
                                        o.current?.click(), i();
                                    },
                                }),
                                (0, r.jsx)(J.sL, {
                                    id: "word-wrap",
                                    label: ec.intl.string(ec.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(Y.m, {
                        ariaHidden: !0,
                        text: ec.intl.string(ec.t["UKOtz+"]),
                        children: (0, r.jsx)(f.D, {
                            ...e,
                            className: eu.IQ,
                            "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                            children: (0, r.jsx)(et.j, { ref: l, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(en.Anchor, {
                ref: o,
                href: i,
                download: s,
                className: eu.op,
                children: (0, r.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function ep(e) {
    return (0, r.jsx)(Y.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, r.jsx)(f.D, {
            className: eu.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, R.openModal)((t) => (0, r.jsx)(em, { ...e, ...t }));
            },
            children: (0, r.jsx)(ei._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eT(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: a,
            expanded: s,
            setExpanded: o,
            language: d,
            setLanguage: c,
            wordWrap: u,
            setWordWrap: _,
            bytesLeft: E,
            className: A,
        } = e,
        h = a?.split("\n"),
        f = h?.length ?? 0,
        p = s ? 100 : 6,
        T = 0 === E,
        m = "";
    T && s && f > p ? (m = "\n...") : T || (m = "..."),
        "" !== m &&
            (T
                ? (m += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: f - p }))
                : (m += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, ed.up)(E) })));
    let g = h?.slice(0, p).join("\n") + m,
        N = (0, ea.sJ)(g),
        C = s || p < f;
    return (0, r.jsxs)("div", {
        className: l()(A, eu.kL),
        children: [
            (0, r.jsx)(S.Ip, {
                className: eu.FS,
                children:
                    null == a
                        ? (0, r.jsx)(I.y, { className: eu.u1 })
                        : (0, r.jsx)(eE, { text: N, language: d, wordWrap: u }),
            }),
            (0, r.jsxs)("div", {
                className: eu.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    C ? (0, r.jsx)(eA, { expanded: s, setExpanded: o, numLines: f, isWholeFile: T }) : null,
                    (0, r.jsx)(eh, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: eu.Kb }),
                    (0, r.jsx)(eI, { language: d, setLanguage: c, align: "top" }),
                    null != a
                        ? (0, r.jsx)(ep, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: d,
                              wordWrap: u,
                              fileContents: a,
                              bytesLeft: E,
                          })
                        : null,
                    (0, r.jsx)(ef, { wordWrap: u, setWordWrap: _, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function em(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            transitionState: s,
            language: l,
            wordWrap: o,
            fileContents: d,
            bytesLeft: u,
            onClose: E,
        } = e,
        [A, h] = a.useState(l),
        [f, p] = a.useState(o),
        T = a.useRef(null),
        m = d ?? "";
    return (
        0 !== u && (m += `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, ed.up)(u) })}`),
        a.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != T.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        e.selectNodeContents(T.current), n.removeAllRanges(), n.addRange(e);
                    }
                }
            }
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, []),
        (0, r.jsx)(er.d, {
            transitionState: s,
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: E,
            children: (0, r.jsxs)("div", {
                className: eu.jE,
                children: [
                    (0, r.jsx)(S.Ip, {
                        className: eu.ot,
                        children:
                            null == d
                                ? (0, r.jsx)(I.y, { className: eu.u1 })
                                : (0, r.jsx)("div", {
                                      ref: T,
                                      children: (0, r.jsx)(eE, { text: m, language: A, wordWrap: f }),
                                  }),
                    }),
                    (0, r.jsx)("div", {
                        role: "group",
                        "aria-label": ec.intl.string(ec.t.TlXA8e),
                        children: (0, r.jsxs)(_.E, {
                            color: "text-default",
                            className: eu.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)(eh, { fileName: n, fileSize: i }),
                                (0, r.jsx)("div", { className: eu.Kb }),
                                (0, r.jsx)(eI, { language: A, setLanguage: h, align: "bottom" }),
                                (0, r.jsx)(ef, { wordWrap: f, setWordWrap: p, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eg = a.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: i, contentType: s, className: o, onClick: d, onContextMenu: c } = e,
            [u, _] = a.useState(!1),
            [E, A] = a.useState(n.split(".").slice(-1)[0]),
            [h, I] = a.useState(!1),
            {
                fileContents: f,
                bytesLeft: p,
                hadError: T,
            } = (function (e, t) {
                let [n, i] = a.useState(!1),
                    [r, s] = a.useState(null),
                    [l, o] = a.useState(1);
                return (
                    a.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    r = (function (e) {
                                        let t = "utf-8",
                                            n = e?.split("charset=").slice(-1)[0] ?? t;
                                        try {
                                            return new TextDecoder(n);
                                        } catch (i) {
                                            if (e?.startsWith("text") || n.toLowerCase().includes("utf"))
                                                return new TextDecoder(t);
                                            throw i;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    a = n.headers.get("content-range") ?? "0",
                                    l = n.headers.get("content-length") ?? "1",
                                    d = parseInt(a.split("/")[1]) - parseInt(l);
                                s(0 === d ? r : r.slice(0, -1)), o(d), i(!1);
                            } catch (e) {
                                o(0), i(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: r, bytesLeft: l, hadError: n }
                );
            })(t, s);
        return T
            ? (0, r.jsx)(G.A, { url: t, fileName: n, fileSize: i, onClick: d, onContextMenu: c, className: o })
            : (0, r.jsx)(eT, {
                  url: t,
                  fileName: n,
                  fileSize: i,
                  fileContents: f,
                  bytesLeft: p,
                  expanded: u,
                  setExpanded: _,
                  language: E,
                  setLanguage: A,
                  wordWrap: h,
                  setWordWrap: I,
                  className: l()(eu.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eS = n(863922),
    eN = n(822074),
    eC = n(534890),
    eR = n(442433),
    eO = n(640708),
    eL = n(941971),
    ey = n(707539),
    eD = n(576705),
    ev = n(568548),
    eb = n(340833),
    eM = n(913642),
    eP = n(935208),
    eU = n(453302);
n(321073);
var ew = n(97808),
    eG = n(778712),
    ex = n(707606),
    ek = n(403362),
    eF = n(922704);
let eV = (0, ex.A)(function (e) {
        let { member: t, empty: n, guildId: i } = e;
        return n || null == t
            ? (0, r.jsx)("div", { className: eF.pO })
            : (0, r.jsx)("div", {
                  className: eF.pO,
                  children: (0, r.jsx)(ew.eu, {
                      src: t.getAvatarURL(i, 16),
                      "aria-label": t.username,
                      size: eG._3.SIZE_16,
                      className: eF.pO,
                  }),
              });
    }),
    eB = function (e) {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: a = 2, guildId: s } = e,
            { totalSize: l, knownSize: o } = t;
        if (l < i) return null;
        let c = d()(n)
                .filter(ek.Vq)
                .take(a)
                .map((e) => (0, r.jsx)(eV, { member: e, guildId: s }, e.id))
                .value(),
            u = l - o;
        for (let e = 0; e < u && c.length < a; e++)
            c.push((0, r.jsx)(eV, { empty: !0, guildId: s }, `empty-member-${e}`));
        let _ = Math.max(Math.min(l - c.length, 99), 0);
        if (1 === _) {
            let e = n[a];
            c.push((0, r.jsx)(eV, { member: e, guildId: s }, e.id));
        }
        return (0, r.jsx)("div", {
            className: eF.iE,
            children: (0, r.jsxs)("div", {
                className: eF.S3,
                children: [c, _ > 1 ? (0, r.jsxs)("div", { className: eF.Hi, children: ["+", _] }) : null],
            }),
        });
    };
var eH = n(303727),
    ej = n(490334);
function eW() {
    return (0, r.jsxs)("div", {
        className: ej.kL,
        children: [
            (0, r.jsxs)("div", {
                className: ej.zc,
                children: [
                    (0, r.jsx)("div", {
                        className: ej.Kk,
                        children: (0, r.jsx)(T.K, {
                            size: "custom",
                            color: "currentColor",
                            className: ej.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, r.jsx)(eH.A, { className: ej.uf }),
                ],
            }),
            (0, r.jsx)(m.D, {
                className: ej.wx,
                variant: "heading-xl/semibold",
                children: ec.intl.string(ec.t.yJHJei),
            }),
            (0, r.jsx)(_.E, {
                className: ej.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ec.intl.string(ec.t.p2dIh6),
            }),
        ],
    });
}
var eY = n(652215),
    eK = n(670455),
    e$ = n(156700);
function ez(e) {
    let { summary: t, channel: i, members: s, guildId: l, unread: o, onClick: d } = e,
        [c, E] = a.useState(!1),
        A = (0, ey.aK)(eP.default.extractTimestamp(t.startId)),
        h = (0, u.bG)([eN.A], () => eN.A.summaryFeedback(t));
    function I(e, n) {
        e.stopPropagation(), (0, eU.A)({ summary: t, channel: i, rating: n });
    }
    let p = eD.A.can(eY.xBc.MANAGE_MESSAGES, i);
    return (0, r.jsxs)(f.D, {
        className: e$.kL,
        onClick: d,
        onContextMenu: function (e) {
            p &&
                (0, eR.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        children: [
            (0, r.jsx)(eL.A, { hovered: c, unread: o, className: e$.dM }),
            (0, r.jsx)("div", {
                className: e$.uV,
                children: (0, r.jsxs)("div", {
                    className: e$.Hw,
                    children: [
                        (0, r.jsx)(_.E, {
                            className: e$.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: A,
                        }),
                        (0, r.jsx)(eO.A, { height: 4, width: 4, "aria-hidden": "true", className: e$.Om }),
                        (0, r.jsx)(eC.o, { size: "xxs", color: "currentColor", className: e$.Kk }),
                        (0, r.jsx)(_.E, {
                            className: e$.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        s.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eO.A, { height: 4, width: 4, "aria-hidden": "true", className: e$.Om }),
                                    (0, r.jsx)(eB, {
                                        partySize: { knownSize: s.length, totalSize: s.length },
                                        maxAvatarsShown: 3,
                                        members: s,
                                        guildId: l,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            c &&
                null == h &&
                (0, r.jsxs)("div", {
                    className: e$.p_,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: (e) => I(e, eK.P0.GOOD),
                            children: (0, r.jsx)(eM.A, { className: e$.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(f.D, {
                            onClick: (e) => I(e, eK.P0.BAD),
                            children: (0, r.jsx)(eb.A, { className: e$.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(_.E, { color: "text-strong", variant: "text-sm/semibold", className: e$.DD, children: t.topic }),
            (0, r.jsx)(_.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: e$.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eq(e) {
    let { summaries: t, summariesMembers: n, channel: i, selectTopic: s, setOpen: l } = e,
        o = (0, u.bG)([ev.Ay], () => ev.Ay.getOldestUnreadMessageId(i.id)),
        d = a.useCallback(
            (e) => {
                s(e), l(!1);
            },
            [s, l],
        );
    return t.length < 1
        ? (0, r.jsx)(eW, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  let a = n[t] ?? [];
                  return (0, r.jsx)(
                      ez,
                      {
                          summary: e,
                          channel: i,
                          members: a,
                          guildId: i.guild_id,
                          unread: null != o && eP.default.compare(e.endId, o) > 0,
                          onClick: () => d(t),
                      },
                      t,
                  );
              }),
          });
}
var eZ = n(885386),
    eX = n(113494),
    eQ = n(782134),
    eJ = n(775602),
    e0 = n(228366),
    e1 = n(713021),
    e2 = n(745601),
    e3 = n(20504),
    e6 = n(625494),
    e4 = n(927813),
    e5 = n(824744);
n(508300);
var e7 = n(661531),
    e8 = n(602853),
    e9 = n(765671);
function te(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var tt = n(998304),
    tn = n(284009),
    ti = n.n(tn),
    tr = n(722872);
class ta {
    value;
    animationDetails;
    isReset;
    constructor(e) {
        (this.value = e), (this.animationDetails = null), (this.isReset = !1);
    }
    getCurrentValue() {
        if (null == this.animationDetails) return this.value;
        let e = performance.now() - this.animationDetails.animationStart,
            t = this.value < this.animationDetails.lastValue ? 150 : 500;
        return e > t
            ? ((this.animationDetails = null), this.value)
            : this.value < this.animationDetails.lastValue
              ? tr.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : tr.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
    }
    animateTo(e) {
        (this.isReset = !1),
            this.value !== e &&
                ((this.animationDetails = { lastValue: this.value, animationStart: performance.now() }),
                (this.value = e));
    }
    isAnimating() {
        return null != this.animationDetails;
    }
    reset() {
        this.animateTo(0), (this.isReset = !0);
    }
}
let ts = [0.75, 1, 1.5, 2];
var tl = n(614108);
let to = [0, 0, 0, 0, 0];
function td(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: r } = e;
    return t ? r : Math.max(0, Math.round((n / i) * r));
}
function tc(e) {
    var t, n, i, r;
    let { context: a, devicePixelRatio: s, canvasHeight: l, segmentValue: o, segmentIndex: d, constrainMin: c } = e,
        u = c ? 22 * o + 2 : 24 * o;
    0 !== u &&
        ((t = 6 * d * s),
        (n = (l / 2 - u / 2) * s),
        (i = u * s),
        (r = +s),
        a.moveTo(t, n + r),
        a.lineTo(t, n + i - r),
        a.arc(t + r, n + i - r, r, Math.PI, 0, !0),
        a.lineTo(t + 2 * r, n + r),
        a.arc(t + r, n + r, r, 0, Math.PI, !0),
        a.closePath());
}
function tu(e, t, n) {
    let [i, r] = a.useState(e),
        [s, l] = a.useState(e),
        o = a.useRef(s);
    return (
        a.useLayoutEffect(() => {
            o.current = s;
        }),
        a.useLayoutEffect(() => {
            r(o.current), l(e);
        }, [e, t, n]),
        [i, s]
    );
}
function t_(e, t, n, i) {
    if (null == i) return [t, !1];
    let r = Math.min((n - i) / 200, 1);
    return 1 === r ? [t, !1] : [(0, tt.De)(e, t, r), !0];
}
function tE(e) {
    let t,
        n,
        {
            className: i,
            waveform: s,
            currentTime: o,
            duration: d,
            played: c,
            playing: u,
            onDrag: _,
            onDragStart: E,
            onDragEnd: A,
        } = e,
        { ref: h, width: I } = (0, e9.Ay)(),
        f = a.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((d <= 0.5 ? 40 : d >= 45 ? 294 : ((Math.min(d, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [d],
        ),
        p = a.useRef(void 0),
        T =
            ((t = a.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (null == e) return;
                        try {
                            t = window.atob(e);
                        } catch (e) {
                            return;
                        }
                        let n = [];
                        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / 255;
                        return n;
                    })(s),
                [s],
            )),
            (n = a.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(I),
                [I],
            )),
            a.useMemo(
                () =>
                    (function (e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0));
                            }
                            return (function (e, t) {
                                if ((ti()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
                                let n = e.length / t,
                                    i = [],
                                    r = 0;
                                for (; i.length < t; ) {
                                    let t = Math.round((i.length + 1) * n),
                                        a = 0,
                                        s = 0;
                                    for (let n = r; n < t && n < e.length; n++) (a += e[n]), s++;
                                    (i[i.length] = a / s), (r = t);
                                }
                                return i;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? to,
                [t, n],
            )),
        m = a.useRef(c),
        g = a.useRef(u),
        S = a.useRef(null),
        N = window.devicePixelRatio,
        {
            lastBackgroundFillColor: C,
            backgroundFillColor: R,
            lastActiveFillColor: O,
            activeFillColor: L,
            lastInactiveFillColor: y,
            inactiveFillColor: D,
        } = (function (e, t) {
            let n = (0, e8.r)(e7.A.colors.BACKGROUND_MOD_MUTED).hex(),
                i = (0, e8.r)(e7.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                r = (0, e8.r)(e7.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                a = (0, e8.r)(e7.A.unsafe_rawColors.BRAND_430).hex(),
                s = (0, e8.r)(e7.A.unsafe_rawColors.WHITE).hex(),
                l = t ? a : n,
                [o, d] = tu(l, t, e),
                [c, u] = tu(t ? s : e ? r : i, t, e),
                [_, E] = tu(e ? l : i, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: d,
                lastActiveFillColor: c,
                activeFillColor: u,
                lastInactiveFillColor: _,
                inactiveFillColor: E,
            };
        })(c, u),
        v = { currentTime: o, duration: d, played: c },
        b = a.useRef(v);
    a.useEffect(() => {
        b.current = v;
    }),
        a.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = b.current,
                i = td({ showAll: !n, currentTime: e, duration: t, numSegments: T.length });
            p.current = T.map((e, t) => new ta(t < i ? e : 0));
        }, [T]),
        a.useEffect(() => {
            let e = p.current;
            if (null == e) return;
            let t = td({ showAll: !c, currentTime: o, duration: d, numSegments: T.length });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(T[n]);
                    continue;
                }
                i.reset();
            }
        }, [T, o, d, c]),
        a.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let i = h.current,
                        r = i?.getContext("2d"),
                        a = p.current;
                    if (null == i || null == r || null == a) return;
                    let s = !1;
                    (m.current !== c || g.current !== u) && ((m.current = c), (g.current = u), (S.current = n)),
                        null != S.current && n > S.current + 200 && (S.current = null);
                    let l = i.height / N;
                    r.clearRect(0, 0, i.width, i.height), r.beginPath();
                    let [o, d] = t_(C, R, n, S.current);
                    (s = s || d), (r.fillStyle = o);
                    for (let e = 0; e < T.length; e++)
                        tc({
                            context: r,
                            devicePixelRatio: N,
                            canvasHeight: l,
                            segmentValue: T[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    r.fill();
                    let [_, E] = t_(y, D, n, S.current);
                    s = s || E;
                    let [A, I] = t_(O, L, n, S.current);
                    s = s || I;
                    for (let e = 0; e < a.length; e++) {
                        let t = a[e],
                            n = Math.max(t.getCurrentValue(), T[e] - 0.1);
                        r.beginPath(),
                            (r.fillStyle = t.isReset ? _ : A),
                            tc({
                                context: r,
                                devicePixelRatio: N,
                                canvasHeight: l,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (s = s || t.isAnimating()),
                            r.fill();
                    }
                    s && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [h, N, T, I, o, d, c, u, C, R, O, L, y, D]);
    let [, M] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: i, onDragEnd: r } = e,
            [s, l] = a.useState(!1);
        return (
            a.useEffect(() => {
                if (s)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", i),
                        () => {
                            window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", i);
                        }
                    );
                function e() {
                    r?.(), l(!1);
                }
                function i(e) {
                    let i = t.current;
                    null != i && n?.(te(i, e));
                }
            }, [t, s, r, n]),
            [
                s,
                a.useCallback(
                    (e) => {
                        e.preventDefault();
                        let r = t.current;
                        null != r && (l(!0), i?.(), n?.(te(r, e)));
                    },
                    [t, i, n],
                ),
            ]
        );
    })({ ref: h, onDrag: _, onDragStart: E, onDragEnd: A });
    return (0, r.jsx)("canvas", {
        onMouseDown: M,
        className: l()(tl.J, i),
        style: { width: f },
        ref: h,
        height: 32 * window.devicePixelRatio,
        width: (I ?? 0) * window.devicePixelRatio,
    });
}
var tA = n(132246);
let th = a.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function tI(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? "--:--" : t ? (0, B.rB)(Math.ceil(n - i)) : (0, B.rB)(Math.ceil(n));
    return (0, r.jsx)(_.E, { variant: "text-sm/normal", className: tA.p0, tabularNumbers: !0, children: a });
}
let tf = a.memo(function (e) {
    let t,
        {
            src: n,
            volume: i = 1,
            onVolumeChange: s,
            onMute: o,
            waveform: d,
            durationSecs: c,
            onVolumeShow: E,
            onVolumeHide: A,
            onPlay: h,
            onPause: I,
            onError: p,
            playbackCacheKey: T,
        } = e,
        m = a.useRef(null),
        g = a.useMemo(() => (null != T ? e1.Ay.getPlaybackPosition(T) : 0), [T]),
        S = (0, u.bG)([e1.Ay], () => e1.Ay.getPlaybackRate(e1.k0.VOICE_MESSAGE)),
        [N, C] = a.useState(g > 0),
        [R, O] = a.useState(g),
        [L, y] = a.useState(c),
        [D, v] = a.useState(!1),
        [b, M] = a.useState(!1),
        [P, U] = a.useState(!1),
        [w, G] = a.useState(!1),
        [x, k] = a.useState("none"),
        [F, V] = a.useState(() => ("function" == typeof i ? i() : i)),
        B = a.useRef(void 0),
        H = a.useCallback(() => {
            M((e) => !e), G(!0);
        }, []),
        j = a.useCallback(() => {
            k("metadata");
        }, []),
        W = a.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || y(t);
        }, []),
        Y = a.useCallback(
            (e) => {
                null != c &&
                    null != T &&
                    e0.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: T, position: e, duration: c });
            },
            [T, c],
        ),
        K = a.useCallback(() => {
            M(!1),
                null == B.current &&
                    (B.current = setTimeout(() => {
                        C(!1), G(!1), (B.current = void 0);
                    }, 500));
        }, []),
        $ = a.useCallback(() => {
            P || (Y(0), K());
        }, [K, P, Y]),
        z = a.useCallback((e) => {
            let t = m.current;
            null != t && (O(e), (t.currentTime = e), C(!0));
        }, []),
        q = a.useCallback(() => {
            let e = m.current;
            if (null == e) return;
            let t = e.error;
            p?.(t);
        }, [p]),
        Z = a.useCallback(
            (e) => {
                let t = (0, e5.w)(e, 1);
                v(0 === t), V(t), s?.(t);
            },
            [s],
        ),
        X = a.useCallback(() => {
            v(!D), o?.(!D);
        }, [D, o]),
        Q = a.useCallback(() => {
            U(!0);
        }, []),
        J = a.useCallback(() => {
            U(!1), R === L && K(), Y(R);
        }, [R, L, K, Y]),
        ee = a.useCallback(
            (e) => {
                let t = m.current;
                null == L || null == t || (z(e * L), clearTimeout(B.current), (B.current = void 0));
            },
            [L, z],
        );
    a.useEffect(() => {
        !N && b && C(!0);
    }, [b, N]);
    let et = a.useRef(null),
        en = { played: w, currentTime: R, onPause: I, onPlay: h },
        ei = a.useRef(en);
    a.useEffect(() => {
        ei.current = en;
    }),
        a.useEffect(() => {
            g > 0 && z(g);
        }, [g, z]),
        a.useEffect(() => {
            let e;
            return (
                b &&
                    !P &&
                    (e = setInterval(() => {
                        Y(m.current?.currentTime ?? 0);
                    }, e4.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [b, P, Y]),
        a.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: i } = ei.current;
            if (e || b)
                if (b) (et.current = performance.now()), i?.(!1, t, (m.current?.duration ?? 0) * e4.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        i = et.current;
                    n?.(t, null != i ? (e - i) / 1e3 : 0), Y(t), (et.current = null);
                }
        }, [b, n, L, Y]),
        a.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = m.current;
                    null == n || (O(n.currentTime), b && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [m, b, O]),
        a.useEffect(() => {
            if (b)
                return (
                    e6._.dispatch(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e6._.subscribe(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e6._.unsubscribe(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && M(!1);
            }
        }, [n, b, M]);
    let er = b ? eX.E : eQ.u,
        ea = b ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        es = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: S }),
        el = `${S.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(a.Suspense, {
                  children: (0, r.jsx)(th, {
                      ref: m,
                      className: tA.Zn,
                      src: n,
                      preload: x,
                      playing: b && !P,
                      onEnded: $,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: D,
                      volume: F,
                      playbackRate: S,
                  }),
              })
            : (0, r.jsx)(e2.A, {
                  ref: m,
                  className: tA.Zn,
                  controls: !1,
                  preload: x,
                  onEnded: $,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: D,
                  volume: F,
                  playbackRate: S,
                  playing: b && !P,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let eo = (0, u.bG)([eJ.Ay], () => eJ.Ay.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: l()(tA.kL, { [tA.he]: b }),
        onMouseEnter: j,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, r.jsx)("div", {
                className: tA.Kl,
                children: (0, r.jsx)("div", { className: l()(tA.fq, { [tA.VN]: eo }) }),
            }),
            (0, r.jsx)(f.D, {
                className: tA.k0,
                onClick: H,
                "aria-label": ea,
                children: (0, r.jsx)(er, { className: tA.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(tE, {
                className: tA.ou,
                waveform: d,
                currentTime: R,
                duration: L ?? 1,
                playing: b,
                played: N,
                onDrag: ee,
                onDragStart: Q,
                onDragEnd: J,
            }),
            (0, r.jsx)(tI, { played: N, currentTime: R, duration: L }),
            (0, r.jsx)(f.D, {
                className: tA.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (ts.indexOf(S) + 1) % ts.length),
                        void ((e = ts[n]),
                        (t = e1.k0.VOICE_MESSAGE),
                        e0.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": es,
                children: (0, r.jsx)(_.E, { variant: "text-xs/semibold", className: tA.Sn, children: el }),
            }),
            (0, r.jsx)(e3.A, {
                className: tA.bk,
                iconClassName: tA._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tA.MQ,
                muted: D,
                value: (0, e5.M)(F, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Z,
                onToggleMute: X,
                onVolumeShow: E,
                onVolumeHide: A,
            }),
            t,
        ],
    });
});
var tp = n(287809),
    tT = n(147925),
    tm = n(174459),
    tg = n(587481),
    tS = n(838541),
    tN = n(521732),
    tC = n(650583),
    tR = n(708147);
let tO = { delay: 300, position: "top" };
function tL(e) {
    return (t) => {
        e?.(t), (0, tg.ls)(t);
    };
}
function ty(e) {
    return (t) => {
        e?.(t), (0, tg.y5)(t);
    };
}
function tD(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, r.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
        className: tR.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tC.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, r.jsx)(_.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: tR.k_Z,
                children: ec.intl.string(ec.t.fSiQ3A),
            }),
            (0, r.jsx)(_.E, { variant: "text-md/normal", color: "none", tag: "span", className: tR.a7V, children: t }),
        ],
    });
}
function tv(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: i = !1,
            hiddenSpoilers: s = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [d, c] = a.useState(!1),
        u = a.useRef(null);
    return (n || d) && !i && eZ._z.getSetting() && null != t && "" !== t && !0 !== s
        ? (0, r.jsx)("div", {
              className: tR.NOQ,
              children: (0, r.jsx)(E.Y, {
                  targetElementRef: u,
                  animation: E.Y.Animation.FADE,
                  renderPopout: () => (0, r.jsx)(tD, { altText: t, altButtonRef: u }),
                  children: (e) =>
                      (0, r.jsx)(A.vN, {
                          offset: 4,
                          children: (0, r.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: u,
                              "aria-label": ec.intl.string(ec.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: l()(tR.DV5, { [tR.yZ5]: !0, [tR.I54]: o }),
                              children: ec.intl.string(ec.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tb(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: i,
            autoMute: s,
            alt: l,
            renderAdjacentContent: o,
            renderOverlayContent: d,
            disableAltTextDisplay: c = !1,
            hiddenSpoilers: u,
            mosaicStyleAlt: E,
            mediaLayoutType: A,
            reducedSizeAltTextButton: h,
            ...I
        } = e,
        f = tL(t),
        p = ty(n);
    (i = null == i ? tg.v1 : i), (s = null == s ? tg.uj : s);
    let [T, m] = a.useState(!0),
        g = A === tS.dG.MOSAIC || !0 === E,
        S = T && !c && eZ._z.getSetting() && null != l && "" !== l && !0 !== u;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            (0, r.jsx)(j.A, {
                ...I,
                alt: l,
                autoMute: s,
                mediaLayoutType: A,
                onControlsHide: () => m(!1),
                onControlsShow: () => m(!0),
                onMute: p,
                onVolumeChange: f,
                renderLinkComponent: tG,
                renderOverlayContent: d,
                volume: i,
            }),
            null != o && o(),
            g &&
                (0, r.jsx)(tv, {
                    alt: l,
                    controlsVisible: T,
                    disableAltTextDisplay: c,
                    hiddenSpoilers: u,
                    reducedSizeAltTextButton: h,
                }),
            !g &&
                S &&
                (0, r.jsx)(_.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tR.R5R,
                    children: l,
                }),
        ],
    });
}
function tM(e) {
    return (0, r.jsx)(tb, { ...e });
}
function tP(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: s,
            onVolumeHide: l,
            renderAdjacentContent: o,
            ...d
        } = e,
        c = tL(t),
        u = ty(i);
    return (
        (n = null == n ? tg.v1 : n),
        (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsx)(H, {
                    ...d,
                    onVolumeChange: c,
                    onMute: u,
                    onVolumeShow: s,
                    onVolumeHide: l,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tG,
                }),
                null != o && o(),
            ],
        })
    );
}
function tU(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...a } = e,
        s = tL(t),
        l = ty(i);
    return (n = null == n ? tg.v1 : n), (0, r.jsx)(tf, { ...a, onVolumeChange: s, onMute: l, volume: n });
}
function tw(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: s,
            imageContainerClassName: o,
            disableAltTextDisplay: d = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: u,
            imageContainerStyle: h,
            mosaicStyleAlt: I,
        } = e,
        f = u === tS.dG.MOSAIC || !0 === I,
        p = !d && eZ._z.getSetting() && null != t && "" !== t && !0 !== n,
        T = a.createRef();
    return (0, r.jsxs)("div", {
        className: l()(tR.foG, s),
        children: [
            (0, r.jsxs)("div", {
                className: l()(tR.ZSk, o),
                style: h,
                children: [(0, r.jsx)(M, { ...e }), null != i && i()],
            }),
            f &&
                p &&
                (0, r.jsx)("div", {
                    className: tR.Y1Z,
                    children: (0, r.jsx)(E.Y, {
                        targetElementRef: T,
                        animation: E.Y.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(tD, { altText: t, altButtonRef: T }),
                        children: (e) =>
                            (0, r.jsx)(A.vN, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: T,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: l()(tR.DV5, { [tR.I54]: c }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !f &&
                p &&
                (0, r.jsx)(_.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tR.R5R,
                    children: t,
                }),
        ],
    });
}
function tG(e) {
    return (0, r.jsx)(P.A, { ...e });
}
function tx(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(a.Fragment, { children: [(0, r.jsx)(eg, { ...n }), null != t && t()] });
}
function tk(e) {
    return (0, r.jsx)(G.A, { ...e });
}
var tF = (((i = {})[(i.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (i[(i.REPLY = 1)] = "REPLY"), i);
let tV = (e) => {
    let { type: t = 0, onClick: n, className: i } = e;
    return (0, r.jsx)(x.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, r.jsxs)("div", {
                      onClick: n,
                      className: l()(tR.Sg2, i),
                      children: [
                          (0, r.jsx)("div", {
                              className: tR.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ec.intl.string(ec.t["4EvBbw"]);
                                      case 1:
                                          return ec.intl.string(ec.t["1J6Xq7"]);
                                      default:
                                          return (0, ek.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, r.jsx)(A.vN, {
                                    offset: -2,
                                    children: (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ec.intl.string(ec.t.gpoQsB);
                                                case 1:
                                                    return ec.intl.string(ec.t.k3RM8z);
                                                default:
                                                    return (0, ek.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, r.jsx)(I.y, {
                                    type: I.y.Type.PULSING_ELLIPSIS,
                                    className: tR.u1E,
                                    itemClassName: tR.$N2,
                                }),
                      ],
                  }),
    });
};
function tB(e) {
    let { onClick: t, loading: n, className: i } = e;
    return (0, r.jsx)(x.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, r.jsxs)(f.D, {
                      className: l()(tR._5m, i),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, r.jsx)("div", { className: tR.$IB, children: ec.intl.string(ec.t["1zUvlw"]) }),
                          n
                              ? (0, r.jsx)(I.y, {
                                    type: I.y.Type.PULSING_ELLIPSIS,
                                    className: tR.u1E,
                                    itemClassName: tR.$N2,
                                })
                              : (0, r.jsx)("div", {
                                    className: l()(tR.hQH, tR.d3o),
                                    children: ec.intl.string(ec.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tH(e) {
    let { content: t, channelId: n } = e,
        [i] = a.useState(() => (0, k.Ld)("NewMessagesBarJumpToNewMessages_")),
        s = a.useCallback(() => {
            let e = ev.Ay.ackMessageId(n);
            null != e
                ? N.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: n,
                      messageId: eP.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = a.useCallback(() => {
            (0, C.ack)(n, {
                section: eY.JJy.NEW_MESSAGES_BANNER,
                object: eY.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eY.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: d } = a.useContext(x.Y);
    return d
        ? null
        : (0, r.jsxs)("div", {
              className: l()(tR.ebV, { [tR.y71]: d }),
              children: [
                  (0, r.jsx)(A.vN, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: tR.$IB,
                          onClick: s,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": i,
                          children: (0, r.jsx)("span", { id: i, className: tR.Lnh, children: t }),
                      }),
                  }),
                  (0, r.jsx)(A.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, r.jsx)("div", {
                          className: tR._ov,
                          children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tR.hQH,
                              children: [
                                  (0, r.jsx)("span", { className: tR.vE$, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, r.jsx)(p.M, { size: "md", color: "currentColor", className: tR.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tj(e) {
    let { channel: t, content: n, scrollManager: i } = e,
        { disableInteractions: s } = a.useContext(x.Y),
        [o, E] = a.useState(null),
        A = a.useRef(null),
        [h, I] = a.useState(null),
        R = a.useRef(null),
        O = (0, u.yK)([eN.A], () => eN.A.summaries(t.id) ?? [], [t]),
        L = (0, w.A)(O);
    a.useEffect(() => {
        d().isEqual(L, O) ||
            tm.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [O, L, t.guild_id, t.id, t.type]);
    let y = (0, u.bG)(
            [tp.default],
            () => O?.map((e) => e.people?.map((e) => tp.default.getUser(e) ?? null).filter(ek.Vq)) ?? [],
            [O],
            tW,
        ),
        D = (0, u.bG)([eN.A], () => eN.A.visibleSummaryIndex()) ?? -1,
        v = O?.[D]?.topic;
    null == v && null == o && O?.length >= 1 && (v = O[0]?.topic);
    let b = a.useMemo(
            () =>
                d().debounce((e) => {
                    E(e?.id ?? null);
                }, 64),
            [E],
        ),
        M = a.useMemo(
            () =>
                d().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        P = a.useCallback(
            (e) => {
                M(), b(e);
            },
            [b, M],
        ),
        [G, k] = a.useState(!1),
        V = a.useCallback(() => {
            tm.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !G,
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                k(!G);
        }, [G, O, k, t]),
        B = a.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tN.eh.PILL_DROPDOWN,
                    r = O[e];
                null != r &&
                    ((0, eS.sK)(t.id, r.id),
                    (0, eS.C6)(t.id, r.id),
                    i.removeAutomaticAnchorCallback(P),
                    i.addScrollCompleteCallback(function e() {
                        i.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                i.addAutomaticAnchorCallback(P, !1);
                            }, 100);
                    }),
                    tm.default.track(eY.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: r.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    N.A.jumpToMessage({
                        channelId: t.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: U.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [O, t, P, i],
        ),
        H = a.useCallback((e) => {
            k(e);
            let t = R.current?.scrollTop;
            null != t && I(t);
        }, []);
    a.useEffect(() => {
        null != h && G && R.current?.scrollTo({ top: h });
    }, [h, G]);
    let j = a.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && A.current?.contains(e.target)) ||
                (G &&
                    tm.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: O.length,
                        message_counts: O.map((e) => e.count),
                        start_message_ids: O.map((e) => e.startId),
                        end_message_ids: O.map((e) => e.endId),
                        num_participants: O.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                H(!1));
        },
        [G, O, t, H],
    );
    a.useEffect(
        () => (
            i.addAutomaticAnchorCallback(P),
            () => {
                i.removeAutomaticAnchorCallback(P);
            }
        ),
        [i, P],
    ),
        a.useEffect(() => {
            (0, eS.$T)(t.id);
        }, [t.id]),
        a.useEffect(
            () => (
                document.addEventListener("mousedown", j),
                () => {
                    document.removeEventListener("mousedown", j);
                }
            ),
            [j],
        );
    let W = a.useMemo(
            () => (0, r.jsx)(eq, { channel: t, summaries: O, summariesMembers: y, selectTopic: B, setOpen: H }),
            [O, y, B, H, t],
        ),
        Y = a.useCallback(() => {
            let e = ev.Ay.ackMessageId(t.id);
            null != e
                ? N.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eP.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        K = a.useCallback(() => {
            (0, C.ack)(t.id, {
                section: eY.JJy.NEW_TOPICS_BAR,
                object: eY.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eY.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        $ = ec.intl.string(ec.t["38qwgO"]);
    return (
        O.length > 0 && ($ = "" === v || null == v ? ec.intl.string(ec.t.DwnFuG) : v),
        s
            ? null
            : (0, r.jsxs)("div", {
                  ref: A,
                  className: l()(tR.dw5, tR.jht),
                  children: [
                      (0, r.jsx)("div", {
                          className: tR.qmJ,
                          children: (0, r.jsx)(f.D, {
                              className: tR.TQl,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: V,
                              children: (0, r.jsxs)("div", {
                                  className: l()({ [tR.hNz]: !G, [tR.Apq]: G }),
                                  children: [
                                      (0, r.jsx)(T.K, { size: "xs", color: "currentColor", className: tR.VdQ }),
                                      (0, r.jsx)(_.E, {
                                          variant: "text-sm/medium",
                                          className: l()(tR.$Uj, tR.lc3),
                                          children: $,
                                      }),
                                      (0, r.jsx)(tT.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tT.A.Directions.DOWN,
                                          className: tR.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(f.D, { onClick: Y, className: tR.ijE, children: n }),
                      (0, r.jsxs)(f.D, {
                          onClick: K,
                          className: l()(tR.hQH, tR.NXP),
                          children: [
                              (0, r.jsx)("div", { className: tR.$Uj, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, r.jsx)(p.M, { size: "md", color: "currentColor", className: tR.t3N }),
                          ],
                      }),
                      G &&
                          (0, r.jsxs)("div", {
                              className: tR.A1T,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: tR.kee,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: tR.Ney,
                                              children: [
                                                  (0, r.jsx)(T.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tR.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(m.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(F.A, { className: tR.Zxm }),
                                              ],
                                          }),
                                          (0, r.jsx)(f.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: V,
                                              className: tR.oX1,
                                              children: (0, r.jsx)(g.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: R, className: tR.Pei, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tW(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var i;
            return null == (i = t[n]) || e.length !== i.length || !!e.some((e, t) => i[t] !== e);
        })
    );
}
function tY(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: i } = a.useContext(x.Y),
        [s, o] = a.useState(null),
        E = a.useRef(null),
        [A, h] = a.useState(null),
        I = a.useRef(null),
        p = (0, u.yK)([eN.A], () => eN.A.summaries(t.id) ?? [], [t]),
        C = (0, w.A)(p);
    a.useEffect(() => {
        d().isEqual(C, p) ||
            tm.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: p.length,
                message_counts: p.map((e) => e.count),
                start_message_ids: p.map((e) => e.startId),
                end_message_ids: p.map((e) => e.endId),
                num_participants: p.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [p, C, t.guild_id, t.id, t.type]);
    let R = (0, u.bG)(
            [tp.default],
            () => p?.map((e) => e.people?.map((e) => tp.default.getUser(e) ?? null).filter(ek.Vq)) ?? [],
            [p],
            tW,
        ),
        O = (0, u.bG)([eN.A], () => eN.A.visibleSummaryIndex()) ?? -1,
        L = p?.[O]?.topic;
    null == L && null == s && p?.length >= 1 && (L = p[0]?.topic);
    let y = a.useMemo(() => d().get(p, O - 1), [O, p]),
        D = a.useMemo(() => d().get(p, O + 1), [O, p]),
        v = a.useMemo(
            () =>
                d().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        b = a.useMemo(
            () =>
                d().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = a.useCallback(
            (e) => {
                b(), v(e);
            },
            [v, b],
        ),
        [P, G] = a.useState(!1),
        k = a.useCallback(() => {
            tm.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: p.length,
                message_counts: p.map((e) => e.count),
                start_message_ids: p.map((e) => e.startId),
                end_message_ids: p.map((e) => e.endId),
                num_participants: p.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                G(!P);
        }, [P, p, G, t]),
        V = a.useCallback(
            function (e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tN.eh.PILL_DROPDOWN,
                    r = p[e];
                null != r &&
                    ((0, eS.sK)(t.id, r.id),
                    (0, eS.C6)(t.id, r.id),
                    n.removeAutomaticAnchorCallback(M),
                    n.addScrollCompleteCallback(function e() {
                        n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(M, !1);
                            }, 100);
                    }),
                    tm.default.track(eY.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: i,
                        message_id: r.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    N.A.jumpToMessage({
                        channelId: t.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: U.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [p, t, M, n],
        ),
        B = a.useCallback(() => {
            V(O - 1, tN.eh.PILL_NEXT_ARROW);
        }, [V, O]),
        H = a.useCallback(() => {
            V(O + 1, tN.eh.PILL_PREVIOUS_ARROW);
        }, [O, V]),
        j = a.useCallback((e) => {
            G(e);
            let t = I.current?.scrollTop;
            null != t && h(t);
        }, []);
    a.useEffect(() => {
        null != A && P && I.current?.scrollTo({ top: A });
    }, [A, P]);
    let W = a.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && E.current?.contains(e.target)) ||
                (P &&
                    tm.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: p.length,
                        message_counts: p.map((e) => e.count),
                        start_message_ids: p.map((e) => e.startId),
                        end_message_ids: p.map((e) => e.endId),
                        num_participants: p.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                j(!1));
        },
        [P, p, t, j],
    );
    a.useEffect(
        () => (
            n.addAutomaticAnchorCallback(M),
            () => {
                n.removeAutomaticAnchorCallback(M);
            }
        ),
        [n, M],
    ),
        a.useEffect(() => {
            (0, eS.$T)(t.id);
        }, [t.id]),
        a.useEffect(
            () => (
                document.addEventListener("mousedown", W),
                () => {
                    document.removeEventListener("mousedown", W);
                }
            ),
            [W],
        );
    let Y = a.useMemo(
        () => (0, r.jsx)(eq, { channel: t, summaries: p, summariesMembers: R, selectTopic: V, setOpen: j }),
        [p, R, V, j, t],
    );
    if (!(0, u.bG)([eN.A], () => eN.A.shouldShowTopicsBar())) return null;
    let K = ec.intl.string(ec.t["38qwgO"]);
    return (
        p.length > 0 && (K = "" === L || null == L ? ec.intl.string(ec.t.DwnFuG) : L),
        i
            ? null
            : (0, r.jsxs)("div", {
                  ref: E,
                  className: l()(tR.$T$, tR.jht),
                  children: [
                      (0, r.jsxs)("div", {
                          className: tR.sEF,
                          children: [
                              (0, r.jsx)(f.D, {
                                  className: tR.LPV,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: k,
                                  children: (0, r.jsxs)("div", {
                                      className: l()({ [tR.Nv2]: !P, [tR.Ann]: P }),
                                      children: [
                                          (0, r.jsx)(T.K, { size: "xs", color: "currentColor", className: tR.Npc }),
                                          (0, r.jsx)(_.E, {
                                              className: tR.r1V,
                                              variant: "text-sm/medium",
                                              children: K,
                                          }),
                                          (0, r.jsx)(tT.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tT.A.Directions.DOWN,
                                              className: tR._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: tR.Ykg,
                                  children: [
                                      (0, r.jsx)(f.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: H,
                                          className: l()(tR.ZMY, tR.vzA, { [tR.jfO]: null == D }),
                                          children: (0, r.jsx)(tT.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tT.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(f.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: B,
                                          className: l()(tR.ZMY, tR.mtW, { [tR.jfO]: null == y }),
                                          children: (0, r.jsx)(tT.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tT.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      P &&
                          (0, r.jsxs)("div", {
                              className: tR.A1T,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: tR.kee,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: tR.Ney,
                                              children: [
                                                  (0, r.jsx)(T.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tR.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(m.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(F.A, { className: tR.Zxm }),
                                              ],
                                          }),
                                          (0, r.jsx)(f.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: k,
                                              className: tR.oX1,
                                              children: (0, r.jsx)(g.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: I, className: tR.Pei, fade: !0, children: Y }),
                              ],
                          }),
                  ],
              })
    );
}
function tK(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
        className: tR.YLv,
        children: [
            (0, r.jsx)(_.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tR.LdH,
                children: e,
            }),
            t &&
                (0, r.jsx)(_.E, {
                    className: tR.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ec.intl.string(ec.t["515vjG"]),
                }),
        ],
    });
}
function t$(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: l()(tR.jCT, n), children: t });
}
function tz(e) {
    let { className: t } = e;
    return (0, r.jsx)(t$, {
        className: t,
        children: (0, r.jsx)("div", { className: tR.wHG, children: (0, r.jsx)("div", { className: tR.j3g }) }),
    });
}
