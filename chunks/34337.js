"use strict";
n.d(t, {
    ks: () => tV,
    UK: () => tY,
    Ez: () => tB,
    _z: () => tL,
    LL: () => tx,
    Uq: () => t$,
    yR: () => tK,
    OZ: () => tj,
    $o: () => tw,
    bU: () => tU,
    Uk: () => tO,
    GN: () => tH,
    Y0: () => tz,
    P$: () => tM,
    _d: () => tk,
    gL: () => tP,
    Dk: () => tG,
    Ab: () => tF,
});
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(735438),
    u = n.n(l),
    c = n(621466),
    d = n(17928),
    _ = n(922016),
    h = n(187322),
    f = n(834730),
    E = n(821609),
    p = n(289873),
    m = n(939249),
    g = n(582394),
    A = n(306788),
    I = n(534514),
    T = n(789645),
    S = n(364522),
    N = n(493336),
    C = n(334738),
    y = n(192308),
    O = n(267102),
    R = n(619517),
    v = n(256905),
    b = n(536763),
    L = n(218394);
class D extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: i, onMouseEnter: r, handlePreloadImage: s } = this.props;
        (r?.(e), null != s) ? s() : (0, b.A)({ src: t, width: n, height: i, options: this.props });
    };
    modalContext = (0, y.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, y.closeModal)(v.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: i } = t;
        e.preventDefault();
        let {
            alt: r,
            src: s,
            original: a,
            width: o,
            height: l,
            animated: u,
            srcIsAnimated: d,
            children: _,
            shouldHideMediaOptions: h = !1,
            sourceMetadata: f,
            analyticsSource: E,
            contentType: p,
            originalContentType: m,
        } = this.props;
        (0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, v.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: s,
                        width: o,
                        height: l,
                        type: "IMAGE",
                        alt: r,
                        contentType: p,
                        originalContentType: m,
                        zoomThumbnailPlaceholder: n,
                        animated: u,
                        srcIsAnimated: d,
                        children: _,
                        trigger: i,
                        sourceMetadata: f,
                        original: a ?? s,
                    },
                ],
                shouldHideMediaOptions: h,
                location: E ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, r.jsx)(R.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function w(e) {
    let t = (0, O.Us)(),
        n = (0, L.j)();
    return (0, r.jsx)(D, { ...e, isWindowFocused: n, appContext: t });
}
var P = n(9578),
    M = n(56562),
    x = n(475743),
    U = n(564771),
    k = n(692051),
    G = n(915089),
    V = n(611371),
    F = n(453771),
    B = n(994064);
class H extends s.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: i,
            playable: s,
            volume: a,
            renderLinkComponent: o,
            onVolumeChange: l,
            onVolumeShow: u,
            onVolumeHide: c,
            autoMute: d,
            onMute: _,
            mimeType: h,
            onPlay: f,
        } = this.props;
        return (0, r.jsx)(B.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, F.Hb)(t),
            fileSizeBytes: t,
            type: B.Ay.Types.AUDIO,
            className: i,
            playable: s,
            volume: a,
            onMute: _,
            autoMute: d,
            onVolumeChange: l,
            onVolumeShow: u,
            onVolumeHide: c,
            renderLinkComponent: o,
            mimeType: h,
            onPlay: f,
        });
    }
}
var j = n(248643),
    W = n(156828),
    Y = n(990078),
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
    es = n(417964),
    ea = n(639169),
    eo = n(157941),
    el = n(768947),
    eu = n(255438),
    ec = n(375708),
    ed = n(460224),
    e_ = n(429128);
function eh(e) {
    let { text: t, language: i, wordWrap: s } = e;
    function a() {
        return (0, r.jsx)("code", { className: o()(e_.kw, ed.Xb, "hljs", { [ed.Zw]: s }), children: t });
    }
    return (0, r.jsx)("pre", {
        children: (0, r.jsx)(eo.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: o()(e_.kw, ed.Xb, "hljs", { [ed.Zw]: s }),
            children: (0, r.jsx)(W.c2, {
                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(i)) return a();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? a()
                        : (0, r.jsx)("code", {
                              className: o()(e_.kw, ed.Xb, "hljs", n.language, { [ed.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => a(),
            }),
        }),
    });
}
function ef(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: s } = e,
        a = ec.intl.formatToPlainString(s ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: i }),
        o = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${a})`;
    return (0, r.jsx)("div", {
        className: ed.py,
        children: (0, r.jsx)(Y.m, {
            text: o,
            children: (0, r.jsx)(K.K, {
                icon: t ? $.t : z.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": o,
            }),
        }),
    });
}
function eE(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, eu.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: ed.VI,
        children: [
            (0, r.jsx)("div", {
                className: ed.VW,
                children: (0, r.jsx)(Y.m, {
                    text: i,
                    children: (0, r.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ed.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(f.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eu.up)(n) }),
        ],
    });
}
function ep(e) {
    let { language: t, setLanguage: n, align: i } = e,
        a = s.useRef(null),
        o = eo.L.useConfig({ location: "LanguageSelect" }).enabled ? el.No : ea.Q;
    return (0, r.jsx)(_.Y, {
        targetElementRef: a,
        position: "left",
        align: i,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(q.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: ed.md,
                    children: (0, r.jsxs)(Z.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(o).map((e) => ({ value: e, label: e, id: e })),
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
                children: (0, r.jsx)(m.D, {
                    ...e,
                    className: ed.Qw,
                    "aria-label": ec.intl.string(ec.t.utm4qs),
                    children: (0, r.jsx)(X.G, { size: "sm", color: "currentColor", ref: a }),
                }),
            }),
    });
}
function em(e) {
    let { wordWrap: t, setWordWrap: n, url: i, fileName: a } = e,
        o = s.useRef(null),
        l = s.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Y, {
                targetElementRef: o,
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
                                        l.current?.click(), i();
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
                        children: (0, r.jsx)(m.D, {
                            ...e,
                            className: ed.IQ,
                            "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                            children: (0, r.jsx)(et.j, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(en.Anchor, {
                ref: l,
                href: i,
                download: a,
                className: ed.op,
                children: (0, r.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eg(e) {
    return (0, r.jsx)(Y.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, r.jsx)(m.D, {
            className: ed.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, y.openModal)((t) => (0, r.jsx)(eI, { ...e, ...t }));
            },
            children: (0, r.jsx)(ei._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eA(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: s,
            expanded: a,
            setExpanded: l,
            language: u,
            setLanguage: c,
            wordWrap: d,
            setWordWrap: _,
            bytesLeft: h,
            className: f,
        } = e,
        E = s?.split("\n"),
        m = E?.length ?? 0,
        g = a ? 100 : 6,
        A = 0 === h,
        I = "";
    A && a && m > g ? (I = "\n...") : A || (I = "..."),
        "" !== I &&
            (A
                ? (I += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: m - g }))
                : (I += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eu.up)(h) })));
    let T = E?.slice(0, g).join("\n") + I,
        N = (0, es.sJ)(T),
        C = a || g < m;
    return (0, r.jsxs)("div", {
        className: o()(f, ed.kL),
        children: [
            (0, r.jsx)(S.Ip, {
                className: ed.FS,
                children:
                    null == s
                        ? (0, r.jsx)(p.y, { className: ed.u1 })
                        : (0, r.jsx)(eh, { text: N, language: u, wordWrap: d }),
            }),
            (0, r.jsxs)("div", {
                className: ed.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    C ? (0, r.jsx)(ef, { expanded: a, setExpanded: l, numLines: m, isWholeFile: A }) : null,
                    (0, r.jsx)(eE, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: ed.Kb }),
                    (0, r.jsx)(ep, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, r.jsx)(eg, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: u,
                              wordWrap: d,
                              fileContents: s,
                              bytesLeft: h,
                          })
                        : null,
                    (0, r.jsx)(em, { wordWrap: d, setWordWrap: _, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function eI(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            transitionState: a,
            language: o,
            wordWrap: l,
            fileContents: u,
            bytesLeft: d,
            onClose: _,
        } = e,
        [h, E] = s.useState(o),
        [m, g] = s.useState(l),
        A = s.useRef(null),
        I = u ?? "";
    return (
        0 !== d && (I += `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eu.up)(d) })}`),
        s.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != A.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        e.selectNodeContents(A.current), n.removeAllRanges(), n.addRange(e);
                    }
                }
            }
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, []),
        (0, r.jsx)(er.d, {
            transitionState: a,
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: _,
            children: (0, r.jsxs)("div", {
                className: ed.jE,
                children: [
                    (0, r.jsx)(S.Ip, {
                        className: ed.ot,
                        children:
                            null == u
                                ? (0, r.jsx)(p.y, { className: ed.u1 })
                                : (0, r.jsx)("div", {
                                      ref: A,
                                      children: (0, r.jsx)(eh, { text: I, language: h, wordWrap: m }),
                                  }),
                    }),
                    (0, r.jsx)("div", {
                        role: "group",
                        "aria-label": ec.intl.string(ec.t.TlXA8e),
                        children: (0, r.jsxs)(f.E, {
                            color: "text-default",
                            className: ed.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)(eE, { fileName: n, fileSize: i }),
                                (0, r.jsx)("div", { className: ed.Kb }),
                                (0, r.jsx)(ep, { language: h, setLanguage: E, align: "bottom" }),
                                (0, r.jsx)(em, { wordWrap: m, setWordWrap: g, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eT = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: i, contentType: a, className: l, onClick: u, onContextMenu: c } = e,
            [d, _] = s.useState(!1),
            [h, f] = s.useState(n.split(".").slice(-1)[0]),
            [E, p] = s.useState(!1),
            {
                fileContents: m,
                bytesLeft: g,
                hadError: A,
            } = (function (e, t) {
                let [n, i] = s.useState(!1),
                    [r, a] = s.useState(null),
                    [o, l] = s.useState(1);
                return (
                    s.useEffect(() => {
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
                                    s = n.headers.get("content-range") ?? "0",
                                    o = n.headers.get("content-length") ?? "1",
                                    u = parseInt(s.split("/")[1]) - parseInt(o);
                                a(0 === u ? r : r.slice(0, -1)), l(u), i(!1);
                            } catch (e) {
                                l(0), i(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: r, bytesLeft: o, hadError: n }
                );
            })(t, a);
        return A
            ? (0, r.jsx)(U.A, { url: t, fileName: n, fileSize: i, onClick: u, onContextMenu: c, className: l })
            : (0, r.jsx)(eA, {
                  url: t,
                  fileName: n,
                  fileSize: i,
                  fileContents: m,
                  bytesLeft: g,
                  expanded: d,
                  setExpanded: _,
                  language: h,
                  setLanguage: f,
                  wordWrap: E,
                  setWordWrap: p,
                  className: o()(ed.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eS = n(863922),
    eN = n(822074),
    eC = n(534890),
    ey = n(442433),
    eO = n(640708),
    eR = n(941971),
    ev = n(707539),
    eb = n(576705),
    eL = n(568548),
    eD = n(340833),
    ew = n(913642),
    eP = n(935208),
    eM = n(453302);
n(321073);
var ex = n(97808),
    eU = n(778712),
    ek = n(707606),
    eG = n(403362),
    eV = n(922704);
let eF = (0, ek.A)(function (e) {
        let { member: t, empty: n, guildId: i } = e;
        return n || null == t
            ? (0, r.jsx)("div", { className: eV.pO })
            : (0, r.jsx)("div", {
                  className: eV.pO,
                  children: (0, r.jsx)(ex.eu, {
                      src: t.getAvatarURL(i, 16),
                      "aria-label": t.username,
                      size: eU._3.SIZE_16,
                      className: eV.pO,
                  }),
              });
    }),
    eB = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: s = 2, guildId: a } = e,
            { totalSize: o, knownSize: l } = t;
        if (o < i) return null;
        let c = u()(n)
                .filter(eG.Vq)
                .take(s)
                .map((e) => (0, r.jsx)(eF, { member: e, guildId: a }, e.id))
                .value(),
            d = o - l;
        for (let e = 0; e < d && c.length < s; e++)
            c.push((0, r.jsx)(eF, { empty: !0, guildId: a }, `empty-member-${e}`));
        let _ = Math.max(Math.min(o - c.length, 99), 0);
        if (1 === _) {
            let e = n[s];
            c.push((0, r.jsx)(eF, { member: e, guildId: a }, e.id));
        }
        return (0, r.jsx)("div", {
            className: eV.iE,
            children: (0, r.jsxs)("div", {
                className: eV.S3,
                children: [c, _ > 1 ? (0, r.jsxs)("div", { className: eV.Hi, children: ["+", _] }) : null],
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
                        children: (0, r.jsx)(A.K, {
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
            (0, r.jsx)(I.D, {
                className: ej.wx,
                variant: "heading-xl/semibold",
                children: ec.intl.string(ec.t.yJHJei),
            }),
            (0, r.jsx)(f.E, {
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
    let { summary: t, channel: i, members: a, guildId: o, unread: l, onClick: u } = e,
        [c, _] = s.useState(!1),
        h = (0, ev.aK)(eP.default.extractTimestamp(t.startId)),
        E = (0, d.bG)([eN.A], () => eN.A.summaryFeedback(t));
    function p(e, n) {
        e.stopPropagation(), (0, eM.A)({ summary: t, channel: i, rating: n });
    }
    let g = eb.A.can(eY.xBc.MANAGE_MESSAGES, i);
    return (0, r.jsxs)(m.D, {
        className: e$.kL,
        onClick: u,
        onContextMenu: function (e) {
            g &&
                (0, ey.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: [
            (0, r.jsx)(eR.A, { hovered: c, unread: l, className: e$.dM }),
            (0, r.jsx)("div", {
                className: e$.uV,
                children: (0, r.jsxs)("div", {
                    className: e$.Hw,
                    children: [
                        (0, r.jsx)(f.E, {
                            className: e$.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: h,
                        }),
                        (0, r.jsx)(eO.A, { height: 4, width: 4, "aria-hidden": "true", className: e$.Om }),
                        (0, r.jsx)(eC.o, { size: "xxs", color: "currentColor", className: e$.Kk }),
                        (0, r.jsx)(f.E, {
                            className: e$.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        a.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eO.A, { height: 4, width: 4, "aria-hidden": "true", className: e$.Om }),
                                    (0, r.jsx)(eB, {
                                        partySize: { knownSize: a.length, totalSize: a.length },
                                        maxAvatarsShown: 3,
                                        members: a,
                                        guildId: o,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            c &&
                null == E &&
                (0, r.jsxs)("div", {
                    className: e$.p_,
                    children: [
                        (0, r.jsx)(m.D, {
                            onClick: (e) => p(e, eK.P0.GOOD),
                            children: (0, r.jsx)(ew.A, { className: e$.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(m.D, {
                            onClick: (e) => p(e, eK.P0.BAD),
                            children: (0, r.jsx)(eD.A, { className: e$.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(f.E, { color: "text-strong", variant: "text-sm/semibold", className: e$.DD, children: t.topic }),
            (0, r.jsx)(f.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: e$.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eq(e) {
    let { summaries: t, summariesMembers: n, channel: i, selectTopic: a, setOpen: o } = e,
        l = (0, d.bG)([eL.Ay], () => eL.Ay.getOldestUnreadMessageId(i.id)),
        u = s.useCallback(
            (e) => {
                a(e), o(!1);
            },
            [a, o],
        );
    return t.length < 1
        ? (0, r.jsx)(eW, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, r.jsx)(
                      ez,
                      {
                          summary: e,
                          channel: i,
                          members: s,
                          guildId: i.guild_id,
                          unread: null != l && eP.default.compare(e.endId, l) > 0,
                          onClick: () => u(t),
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
class ts {
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
let ta = [0.75, 1, 1.5, 2];
var to = n(614108);
let tl = [0, 0, 0, 0, 0];
function tu(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: r } = e;
    return t ? r : Math.max(0, Math.round((n / i) * r));
}
function tc(e) {
    var t, n, i, r;
    let { context: s, devicePixelRatio: a, canvasHeight: o, segmentValue: l, segmentIndex: u, constrainMin: c } = e,
        d = c ? 22 * l + 2 : 24 * l;
    0 !== d &&
        ((t = 6 * u * a),
        (n = (o / 2 - d / 2) * a),
        (i = d * a),
        (r = +a),
        s.moveTo(t, n + r),
        s.lineTo(t, n + i - r),
        s.arc(t + r, n + i - r, r, Math.PI, 0, !0),
        s.lineTo(t + 2 * r, n + r),
        s.arc(t + r, n + r, r, 0, Math.PI, !0),
        s.closePath());
}
function td(e, t, n) {
    let [i, r] = s.useState(e),
        [a, o] = s.useState(e),
        l = s.useRef(a);
    return (
        s.useLayoutEffect(() => {
            l.current = a;
        }),
        s.useLayoutEffect(() => {
            r(l.current), o(e);
        }, [e, t, n]),
        [i, a]
    );
}
function t_(e, t, n, i) {
    if (null == i) return [t, !1];
    let r = Math.min((n - i) / 200, 1);
    return 1 === r ? [t, !1] : [(0, tt.De)(e, t, r), !0];
}
function th(e) {
    let t,
        n,
        {
            className: i,
            waveform: a,
            currentTime: l,
            duration: u,
            played: c,
            playing: d,
            onDrag: _,
            onDragStart: h,
            onDragEnd: f,
        } = e,
        { ref: E, width: p } = (0, e9.Ay)(),
        m = s.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((u <= 0.5 ? 40 : u >= 45 ? 294 : ((Math.min(u, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [u],
        ),
        g = s.useRef(void 0),
        A =
            ((t = s.useMemo(
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
                    })(a),
                [a],
            )),
            (n = s.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(p),
                [p],
            )),
            s.useMemo(
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
                                        s = 0,
                                        a = 0;
                                    for (let n = r; n < t && n < e.length; n++) (s += e[n]), a++;
                                    (i[i.length] = s / a), (r = t);
                                }
                                return i;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? tl,
                [t, n],
            )),
        I = s.useRef(c),
        T = s.useRef(d),
        S = s.useRef(null),
        N = window.devicePixelRatio,
        {
            lastBackgroundFillColor: C,
            backgroundFillColor: y,
            lastActiveFillColor: O,
            activeFillColor: R,
            lastInactiveFillColor: v,
            inactiveFillColor: b,
        } = (function (e, t) {
            let n = (0, e8.r)(e7.A.colors.BACKGROUND_MOD_MUTED).hex(),
                i = (0, e8.r)(e7.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                r = (0, e8.r)(e7.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e8.r)(e7.A.unsafe_rawColors.BRAND_430).hex(),
                a = (0, e8.r)(e7.A.unsafe_rawColors.WHITE).hex(),
                o = t ? s : n,
                [l, u] = td(o, t, e),
                [c, d] = td(t ? a : e ? r : i, t, e),
                [_, h] = td(e ? o : i, t, e);
            return {
                lastBackgroundFillColor: l,
                backgroundFillColor: u,
                lastActiveFillColor: c,
                activeFillColor: d,
                lastInactiveFillColor: _,
                inactiveFillColor: h,
            };
        })(c, d),
        L = { currentTime: l, duration: u, played: c },
        D = s.useRef(L);
    s.useEffect(() => {
        D.current = L;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = D.current,
                i = tu({ showAll: !n, currentTime: e, duration: t, numSegments: A.length });
            g.current = A.map((e, t) => new ts(t < i ? e : 0));
        }, [A]),
        s.useEffect(() => {
            let e = g.current;
            if (null == e) return;
            let t = tu({ showAll: !c, currentTime: l, duration: u, numSegments: A.length });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(A[n]);
                    continue;
                }
                i.reset();
            }
        }, [A, l, u, c]),
        s.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let i = E.current,
                        r = i?.getContext("2d"),
                        s = g.current;
                    if (null == i || null == r || null == s) return;
                    let a = !1;
                    (I.current !== c || T.current !== d) && ((I.current = c), (T.current = d), (S.current = n)),
                        null != S.current && n > S.current + 200 && (S.current = null);
                    let o = i.height / N;
                    r.clearRect(0, 0, i.width, i.height), r.beginPath();
                    let [l, u] = t_(C, y, n, S.current);
                    (a = a || u), (r.fillStyle = l);
                    for (let e = 0; e < A.length; e++)
                        tc({
                            context: r,
                            devicePixelRatio: N,
                            canvasHeight: o,
                            segmentValue: A[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    r.fill();
                    let [_, h] = t_(v, b, n, S.current);
                    a = a || h;
                    let [f, p] = t_(O, R, n, S.current);
                    a = a || p;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), A[e] - 0.1);
                        r.beginPath(),
                            (r.fillStyle = t.isReset ? _ : f),
                            tc({
                                context: r,
                                devicePixelRatio: N,
                                canvasHeight: o,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (a = a || t.isAnimating()),
                            r.fill();
                    }
                    a && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, N, A, p, l, u, c, d, C, y, O, R, v, b]);
    let [, w] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: i, onDragEnd: r } = e,
            [a, o] = s.useState(!1);
        return (
            s.useEffect(() => {
                if (a)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", i),
                        () => {
                            window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", i);
                        }
                    );
                function e() {
                    r?.(), o(!1);
                }
                function i(e) {
                    let i = t.current;
                    null != i && n?.(te(i, e));
                }
            }, [t, a, r, n]),
            [
                a,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let r = t.current;
                        null != r && (o(!0), i?.(), n?.(te(r, e)));
                    },
                    [t, i, n],
                ),
            ]
        );
    })({ ref: E, onDrag: _, onDragStart: h, onDragEnd: f });
    return (0, r.jsx)("canvas", {
        onMouseDown: w,
        className: o()(to.J, i),
        style: { width: m },
        ref: E,
        height: 32 * window.devicePixelRatio,
        width: (p ?? 0) * window.devicePixelRatio,
    });
}
var tf = n(132246);
let tE = s.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function tp(e) {
    let { played: t, duration: n, currentTime: i } = e,
        s = null == n ? "--:--" : t ? (0, B.rB)(Math.ceil(n - i)) : (0, B.rB)(Math.ceil(n));
    return (0, r.jsx)(f.E, { variant: "text-sm/normal", className: tf.p0, tabularNumbers: !0, children: s });
}
let tm = s.memo(function (e) {
    let t,
        {
            src: n,
            volume: i = 1,
            onVolumeChange: a,
            onMute: l,
            waveform: u,
            durationSecs: c,
            onVolumeShow: _,
            onVolumeHide: h,
            onPlay: E,
            onPause: p,
            onError: g,
            playbackCacheKey: A,
        } = e,
        I = s.useRef(null),
        T = s.useMemo(() => (null != A ? e1.Ay.getPlaybackPosition(A) : 0), [A]),
        S = (0, d.bG)([e1.Ay], () => e1.Ay.getPlaybackRate(e1.k0.VOICE_MESSAGE)),
        [N, C] = s.useState(T > 0),
        [y, O] = s.useState(T),
        [R, v] = s.useState(c),
        [b, L] = s.useState(!1),
        [D, w] = s.useState(!1),
        [P, M] = s.useState(!1),
        [x, U] = s.useState(!1),
        [k, G] = s.useState("none"),
        [V, F] = s.useState(() => ("function" == typeof i ? i() : i)),
        B = s.useRef(void 0),
        H = s.useCallback(() => {
            w((e) => !e), U(!0);
        }, []),
        j = s.useCallback(() => {
            G("metadata");
        }, []),
        W = s.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || v(t);
        }, []),
        Y = s.useCallback(
            (e) => {
                null != c &&
                    null != A &&
                    e0.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: A, position: e, duration: c });
            },
            [A, c],
        ),
        K = s.useCallback(() => {
            w(!1),
                null == B.current &&
                    (B.current = setTimeout(() => {
                        C(!1), U(!1), (B.current = void 0);
                    }, 500));
        }, []),
        $ = s.useCallback(() => {
            P || (Y(0), K());
        }, [K, P, Y]),
        z = s.useCallback((e) => {
            let t = I.current;
            null != t && (O(e), (t.currentTime = e), C(!0));
        }, []),
        q = s.useCallback(() => {
            let e = I.current;
            if (null == e) return;
            let t = e.error;
            g?.(t);
        }, [g]),
        Z = s.useCallback(
            (e) => {
                let t = (0, e5.w)(e, 1);
                L(0 === t), F(t), a?.(t);
            },
            [a],
        ),
        X = s.useCallback(() => {
            L(!b), l?.(!b);
        }, [b, l]),
        Q = s.useCallback(() => {
            M(!0);
        }, []),
        J = s.useCallback(() => {
            M(!1), y === R && K(), Y(y);
        }, [y, R, K, Y]),
        ee = s.useCallback(
            (e) => {
                let t = I.current;
                null == R || null == t || (z(e * R), clearTimeout(B.current), (B.current = void 0));
            },
            [R, z],
        );
    s.useEffect(() => {
        !N && D && C(!0);
    }, [D, N]);
    let et = s.useRef(null),
        en = { played: x, currentTime: y, onPause: p, onPlay: E },
        ei = s.useRef(en);
    s.useEffect(() => {
        ei.current = en;
    }),
        s.useEffect(() => {
            T > 0 && z(T);
        }, [T, z]),
        s.useEffect(() => {
            let e;
            return (
                D &&
                    !P &&
                    (e = setInterval(() => {
                        Y(I.current?.currentTime ?? 0);
                    }, e4.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [D, P, Y]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: i } = ei.current;
            if (e || D)
                if (D) (et.current = performance.now()), i?.(!1, t, (I.current?.duration ?? 0) * e4.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        i = et.current;
                    n?.(t, null != i ? (e - i) / 1e3 : 0), Y(t), (et.current = null);
                }
        }, [D, n, R, Y]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = I.current;
                    null == n || (O(n.currentTime), D && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [I, D, O]),
        s.useEffect(() => {
            if (D)
                return (
                    e6._.dispatch(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e6._.subscribe(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e6._.unsubscribe(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && w(!1);
            }
        }, [n, D, w]);
    let er = D ? eX.E : eQ.u,
        es = D ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        ea = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: S }),
        eo = `${S.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(s.Suspense, {
                  children: (0, r.jsx)(tE, {
                      ref: I,
                      className: tf.Zn,
                      src: n,
                      preload: k,
                      playing: D && !P,
                      onEnded: $,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: b,
                      volume: V,
                      playbackRate: S,
                  }),
              })
            : (0, r.jsx)(e2.A, {
                  ref: I,
                  className: tf.Zn,
                  controls: !1,
                  preload: k,
                  onEnded: $,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: b,
                  volume: V,
                  playbackRate: S,
                  playing: D && !P,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let el = (0, d.bG)([eJ.Ay], () => eJ.Ay.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: o()(tf.kL, { [tf.he]: D }),
        onMouseEnter: j,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, r.jsx)("div", {
                className: tf.Kl,
                children: (0, r.jsx)("div", { className: o()(tf.fq, { [tf.VN]: el }) }),
            }),
            (0, r.jsx)(m.D, {
                className: tf.k0,
                onClick: H,
                "aria-label": es,
                children: (0, r.jsx)(er, { className: tf.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(th, {
                className: tf.ou,
                waveform: u,
                currentTime: y,
                duration: R ?? 1,
                playing: D,
                played: N,
                onDrag: ee,
                onDragStart: Q,
                onDragEnd: J,
            }),
            (0, r.jsx)(tp, { played: N, currentTime: y, duration: R }),
            (0, r.jsx)(m.D, {
                className: tf.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (ta.indexOf(S) + 1) % ta.length),
                        void ((e = ta[n]),
                        (t = e1.k0.VOICE_MESSAGE),
                        e0.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": ea,
                children: (0, r.jsx)(f.E, { variant: "text-xs/semibold", className: tf.Sn, children: eo }),
            }),
            (0, r.jsx)(e3.A, {
                className: tf.bk,
                iconClassName: tf._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tf.MQ,
                muted: b,
                value: (0, e5.M)(V, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Z,
                onToggleMute: X,
                onVolumeShow: _,
                onVolumeHide: h,
            }),
            t,
        ],
    });
});
var tg = n(287809),
    tA = n(147925),
    tI = n(174459),
    tT = n(587481),
    tS = n(838541),
    tN = n(521732),
    tC = n(650583),
    ty = n(708147);
let tO = { delay: 300, position: "top" };
function tR(e) {
    return (t) => {
        e?.(t), (0, tT.ls)(t);
    };
}
function tv(e) {
    return (t) => {
        e?.(t), (0, tT.y5)(t);
    };
}
function tb(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, r.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
        className: ty.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tC.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, r.jsx)("span", { className: ty.k_, children: ec.intl.string(ec.t.fSiQ3A) }),
            (0, r.jsx)("span", { className: ty.a7, children: t }),
        ],
    });
}
function tL(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: i = !1,
            hiddenSpoilers: a = !1,
            reducedSizeAltTextButton: l = !1,
        } = e,
        [u, c] = s.useState(!1),
        d = s.useRef(null);
    return (n || u) && !i && eZ._z.getSetting() && null != t && "" !== t && !0 !== a
        ? (0, r.jsx)("div", {
              className: ty.NO,
              children: (0, r.jsx)(_.Y, {
                  targetElementRef: d,
                  animation: _.Y.Animation.FADE,
                  renderPopout: () => (0, r.jsx)(tb, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, r.jsx)(h.vN, {
                          offset: 4,
                          children: (0, r.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ec.intl.string(ec.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: o()(ty.DV, { [ty.yZ]: !0, [ty.I5]: l }),
                              children: ec.intl.string(ec.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tD(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: i,
            autoMute: a,
            alt: o,
            renderAdjacentContent: l,
            renderOverlayContent: u,
            disableAltTextDisplay: c = !1,
            hiddenSpoilers: d,
            mosaicStyleAlt: _,
            mediaLayoutType: h,
            reducedSizeAltTextButton: E,
            ...p
        } = e,
        m = tR(t),
        g = tv(n);
    (i = null == i ? tT.v1 : i), (a = null == a ? tT.uj : a);
    let [A, I] = s.useState(!0),
        T = h === tS.dG.MOSAIC || !0 === _,
        S = A && !c && eZ._z.getSetting() && null != o && "" !== o && !0 !== d;
    return (0, r.jsxs)(s.Fragment, {
        children: [
            (0, r.jsx)(j.A, {
                ...p,
                alt: o,
                autoMute: a,
                mediaLayoutType: h,
                onControlsHide: () => I(!1),
                onControlsShow: () => I(!0),
                onMute: g,
                onVolumeChange: m,
                renderLinkComponent: tU,
                renderOverlayContent: u,
                volume: i,
            }),
            null != l && l(),
            T &&
                (0, r.jsx)(tL, {
                    alt: o,
                    controlsVisible: A,
                    disableAltTextDisplay: c,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: E,
                }),
            !T &&
                S &&
                (0, r.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: ty.R5,
                    children: o,
                }),
        ],
    });
}
function tw(e) {
    return (0, r.jsx)(tD, { ...e });
}
function tP(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: a,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e,
        c = tR(t),
        d = tv(i);
    return (
        (n = null == n ? tT.v1 : n),
        (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(H, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: a,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tU,
                }),
                null != l && l(),
            ],
        })
    );
}
function tM(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...s } = e,
        a = tR(t),
        o = tv(i);
    return (n = null == n ? tT.v1 : n), (0, r.jsx)(tm, { ...s, onVolumeChange: a, onMute: o, volume: n });
}
function tx(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: a,
            imageContainerClassName: l,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: d,
            imageContainerStyle: E,
            mosaicStyleAlt: p,
        } = e,
        m = d === tS.dG.MOSAIC || !0 === p,
        g = !u && eZ._z.getSetting() && null != t && "" !== t && !0 !== n,
        A = s.createRef();
    return (0, r.jsxs)("div", {
        className: o()(ty.fo, a),
        children: [
            (0, r.jsxs)("div", {
                className: o()(ty.ZS, l),
                style: E,
                children: [(0, r.jsx)(w, { ...e }), null != i && i()],
            }),
            m &&
                g &&
                (0, r.jsx)("div", {
                    className: ty.Y1,
                    children: (0, r.jsx)(_.Y, {
                        targetElementRef: A,
                        animation: _.Y.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(tb, { altText: t, altButtonRef: A }),
                        children: (e) =>
                            (0, r.jsx)(h.vN, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: A,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: o()(ty.DV, { [ty.I5]: c }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !m &&
                g &&
                (0, r.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: ty.R5,
                    children: t,
                }),
        ],
    });
}
function tU(e) {
    return (0, r.jsx)(P.A, { ...e });
}
function tk(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(s.Fragment, { children: [(0, r.jsx)(eT, { ...n }), null != t && t()] });
}
function tG(e) {
    return (0, r.jsx)(U.A, { ...e });
}
var tV = (((i = {})[(i.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (i[(i.REPLY = 1)] = "REPLY"), i);
let tF = (e) => {
    let { type: t = 0, onClick: n, className: i } = e;
    return (0, r.jsx)(k.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, r.jsxs)("div", {
                      onClick: n,
                      className: o()(ty.Sg, i),
                      children: [
                          (0, r.jsx)("div", {
                              className: ty.$I,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ec.intl.string(ec.t["4EvBbw"]);
                                      case 1:
                                          return ec.intl.string(ec.t["1J6Xq7"]);
                                      default:
                                          return (0, eG.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, r.jsx)(h.vN, {
                                    offset: -2,
                                    children: (0, r.jsx)(E.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ec.intl.string(ec.t.gpoQsB);
                                                case 1:
                                                    return ec.intl.string(ec.t.k3RM8z);
                                                default:
                                                    return (0, eG.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, r.jsx)(p.y, {
                                    type: p.y.Type.PULSING_ELLIPSIS,
                                    className: ty.u1,
                                    itemClassName: ty.$N,
                                }),
                      ],
                  }),
    });
};
function tB(e) {
    let { onClick: t, loading: n, className: i } = e;
    return (0, r.jsx)(k.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, r.jsxs)(m.D, {
                      className: o()(ty._5, i),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, r.jsx)("div", { className: ty.$I, children: ec.intl.string(ec.t["1zUvlw"]) }),
                          n
                              ? (0, r.jsx)(p.y, {
                                    type: p.y.Type.PULSING_ELLIPSIS,
                                    className: ty.u1,
                                    itemClassName: ty.$N,
                                })
                              : (0, r.jsx)("div", {
                                    className: o()(ty.hQ, ty.d3),
                                    children: ec.intl.string(ec.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tH(e) {
    let { content: t, channelId: n } = e,
        [i] = s.useState(() => (0, G.Ld)("NewMessagesBarJumpToNewMessages_")),
        a = s.useCallback(() => {
            let e = eL.Ay.ackMessageId(n);
            null != e
                ? N.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: n,
                      messageId: eP.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        l = s.useCallback(() => {
            (0, C.ack)(n, {
                section: eY.JJy.NEW_MESSAGES_BANNER,
                object: eY.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eY.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(k.Y);
    return u
        ? null
        : (0, r.jsxs)("div", {
              className: o()(ty.eb, { [ty.y7]: u }),
              children: [
                  (0, r.jsx)(h.vN, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: ty.$I,
                          onClick: a,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": i,
                          children: (0, r.jsx)("span", { id: i, className: ty.Ln, children: t }),
                      }),
                  }),
                  (0, r.jsx)(h.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, r.jsx)("div", {
                          className: ty._o,
                          children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: l,
                              className: ty.hQ,
                              children: [
                                  (0, r.jsx)("span", { className: ty.vE, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, r.jsx)(g.M, { size: "md", color: "currentColor", className: ty.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tj(e) {
    let { channel: t, content: n, scrollManager: i } = e,
        { disableInteractions: a } = s.useContext(k.Y),
        [l, _] = s.useState(null),
        h = s.useRef(null),
        [E, p] = s.useState(null),
        y = s.useRef(null),
        O = (0, d.yK)([eN.A], () => eN.A.summaries(t.id) ?? [], [t]),
        R = (0, x.A)(O);
    s.useEffect(() => {
        u().isEqual(R, O) ||
            tI.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [O, R, t.guild_id, t.id, t.type]);
    let v = (0, d.bG)(
            [tg.default],
            () => O?.map((e) => e.people?.map((e) => tg.default.getUser(e) ?? null).filter(eG.Vq)) ?? [],
            [O],
            tW,
        ),
        b = (0, d.bG)([eN.A], () => eN.A.visibleSummaryIndex()) ?? -1,
        L = O?.[b]?.topic;
    null == L && null == l && O?.length >= 1 && (L = O[0]?.topic);
    let D = s.useMemo(
            () =>
                u().debounce((e) => {
                    _(e?.id ?? null);
                }, 64),
            [_],
        ),
        w = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        P = s.useCallback(
            (e) => {
                w(), D(e);
            },
            [D, w],
        ),
        [U, G] = s.useState(!1),
        F = s.useCallback(() => {
            tI.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !U,
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                G(!U);
        }, [U, O, G, t]),
        B = s.useCallback(
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
                    tI.default.track(eY.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: M.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [O, t, P, i],
        ),
        H = s.useCallback((e) => {
            G(e);
            let t = y.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != E && U && y.current?.scrollTo({ top: E });
    }, [E, U]);
    let j = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && h.current?.contains(e.target)) ||
                (U &&
                    tI.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
        [U, O, t, H],
    );
    s.useEffect(
        () => (
            i.addAutomaticAnchorCallback(P),
            () => {
                i.removeAutomaticAnchorCallback(P);
            }
        ),
        [i, P],
    ),
        s.useEffect(() => {
            (0, eS.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", j),
                () => {
                    document.removeEventListener("mousedown", j);
                }
            ),
            [j],
        );
    let W = s.useMemo(
            () => (0, r.jsx)(eq, { channel: t, summaries: O, summariesMembers: v, selectTopic: B, setOpen: H }),
            [O, v, B, H, t],
        ),
        Y = s.useCallback(() => {
            let e = eL.Ay.ackMessageId(t.id);
            null != e
                ? N.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eP.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        K = s.useCallback(() => {
            (0, C.ack)(t.id, {
                section: eY.JJy.NEW_TOPICS_BAR,
                object: eY.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eY.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        $ = ec.intl.string(ec.t["38qwgO"]);
    return (
        O.length > 0 && ($ = "" === L || null == L ? ec.intl.string(ec.t.DwnFuG) : L),
        a
            ? null
            : (0, r.jsxs)("div", {
                  ref: h,
                  className: o()(ty.dw, ty.jh),
                  children: [
                      (0, r.jsx)("div", {
                          className: ty.qm,
                          children: (0, r.jsx)(m.D, {
                              className: ty.TQ,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: F,
                              children: (0, r.jsxs)("div", {
                                  className: o()({ [ty.hN]: !U, [ty.Ap]: U }),
                                  children: [
                                      (0, r.jsx)(A.K, { size: "xs", color: "currentColor", className: ty.Vd }),
                                      (0, r.jsx)(f.E, {
                                          variant: "text-sm/medium",
                                          className: o()(ty.$U, ty.lc),
                                          children: $,
                                      }),
                                      (0, r.jsx)(tA.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tA.A.Directions.DOWN,
                                          className: ty.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(m.D, { onClick: Y, className: ty.ij, children: n }),
                      (0, r.jsxs)(m.D, {
                          onClick: K,
                          className: o()(ty.hQ, ty.NX),
                          children: [
                              (0, r.jsx)("div", { className: ty.$U, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, r.jsx)(g.M, { size: "md", color: "currentColor", className: ty.t3 }),
                          ],
                      }),
                      U &&
                          (0, r.jsxs)("div", {
                              className: ty.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: ty.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: ty.Ne,
                                              children: [
                                                  (0, r.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: ty.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(I.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(V.A, { className: ty.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(m.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: F,
                                              className: ty.oX,
                                              children: (0, r.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: y, className: ty.Pe, fade: !0, children: W }),
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
        { disableInteractions: i } = s.useContext(k.Y),
        [a, l] = s.useState(null),
        _ = s.useRef(null),
        [h, E] = s.useState(null),
        p = s.useRef(null),
        g = (0, d.yK)([eN.A], () => eN.A.summaries(t.id) ?? [], [t]),
        C = (0, x.A)(g);
    s.useEffect(() => {
        u().isEqual(C, g) ||
            tI.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: g.length,
                message_counts: g.map((e) => e.count),
                start_message_ids: g.map((e) => e.startId),
                end_message_ids: g.map((e) => e.endId),
                num_participants: g.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [g, C, t.guild_id, t.id, t.type]);
    let y = (0, d.bG)(
            [tg.default],
            () => g?.map((e) => e.people?.map((e) => tg.default.getUser(e) ?? null).filter(eG.Vq)) ?? [],
            [g],
            tW,
        ),
        O = (0, d.bG)([eN.A], () => eN.A.visibleSummaryIndex()) ?? -1,
        R = g?.[O]?.topic;
    null == R && null == a && g?.length >= 1 && (R = g[0]?.topic);
    let v = s.useMemo(() => u().get(g, O - 1), [O, g]),
        b = s.useMemo(() => u().get(g, O + 1), [O, g]),
        L = s.useMemo(
            () =>
                u().debounce((e) => {
                    l(e?.id ?? null);
                }, 64),
            [l],
        ),
        D = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        w = s.useCallback(
            (e) => {
                D(), L(e);
            },
            [L, D],
        ),
        [P, U] = s.useState(!1),
        G = s.useCallback(() => {
            tI.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: g.length,
                message_counts: g.map((e) => e.count),
                start_message_ids: g.map((e) => e.startId),
                end_message_ids: g.map((e) => e.endId),
                num_participants: g.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!P);
        }, [P, g, U, t]),
        F = s.useCallback(
            function (e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tN.eh.PILL_DROPDOWN,
                    r = g[e];
                null != r &&
                    ((0, eS.sK)(t.id, r.id),
                    (0, eS.C6)(t.id, r.id),
                    n.removeAutomaticAnchorCallback(w),
                    n.addScrollCompleteCallback(function e() {
                        n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(w, !1);
                            }, 100);
                    }),
                    tI.default.track(eY.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: M.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [g, t, w, n],
        ),
        B = s.useCallback(() => {
            F(O - 1, tN.eh.PILL_NEXT_ARROW);
        }, [F, O]),
        H = s.useCallback(() => {
            F(O + 1, tN.eh.PILL_PREVIOUS_ARROW);
        }, [O, F]),
        j = s.useCallback((e) => {
            U(e);
            let t = p.current?.scrollTop;
            null != t && E(t);
        }, []);
    s.useEffect(() => {
        null != h && P && p.current?.scrollTo({ top: h });
    }, [h, P]);
    let W = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && _.current?.contains(e.target)) ||
                (P &&
                    tI.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: g.length,
                        message_counts: g.map((e) => e.count),
                        start_message_ids: g.map((e) => e.startId),
                        end_message_ids: g.map((e) => e.endId),
                        num_participants: g.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                j(!1));
        },
        [P, g, t, j],
    );
    s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(w),
            () => {
                n.removeAutomaticAnchorCallback(w);
            }
        ),
        [n, w],
    ),
        s.useEffect(() => {
            (0, eS.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", W),
                () => {
                    document.removeEventListener("mousedown", W);
                }
            ),
            [W],
        );
    let Y = s.useMemo(
        () => (0, r.jsx)(eq, { channel: t, summaries: g, summariesMembers: y, selectTopic: F, setOpen: j }),
        [g, y, F, j, t],
    );
    if (!(0, d.bG)([eN.A], () => eN.A.shouldShowTopicsBar())) return null;
    let K = ec.intl.string(ec.t["38qwgO"]);
    return (
        g.length > 0 && (K = "" === R || null == R ? ec.intl.string(ec.t.DwnFuG) : R),
        i
            ? null
            : (0, r.jsxs)("div", {
                  ref: _,
                  className: o()(ty.$T, ty.jh),
                  children: [
                      (0, r.jsxs)("div", {
                          className: ty.sE,
                          children: [
                              (0, r.jsx)(m.D, {
                                  className: ty.LP,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: G,
                                  children: (0, r.jsxs)("div", {
                                      className: o()({ [ty.Nv]: !P, [ty.An]: P }),
                                      children: [
                                          (0, r.jsx)(A.K, { size: "xs", color: "currentColor", className: ty.Np }),
                                          (0, r.jsx)(f.E, { className: ty.r1, variant: "text-sm/medium", children: K }),
                                          (0, r.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.DOWN,
                                              className: ty._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: ty.Yk,
                                  children: [
                                      (0, r.jsx)(m.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: H,
                                          className: o()(ty.ZM, ty.vz, { [ty.jf]: null == b }),
                                          children: (0, r.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(m.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: B,
                                          className: o()(ty.ZM, ty.mt, { [ty.jf]: null == v }),
                                          children: (0, r.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      P &&
                          (0, r.jsxs)("div", {
                              className: ty.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: ty.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: ty.Ne,
                                              children: [
                                                  (0, r.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: ty.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(I.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(V.A, { className: ty.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(m.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: G,
                                              className: ty.oX,
                                              children: (0, r.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: p, className: ty.Pe, fade: !0, children: Y }),
                              ],
                          }),
                  ],
              })
    );
}
function tK(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
        className: ty.YL,
        children: [
            (0, r.jsx)(f.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: ty.Ld,
                children: e,
            }),
            t &&
                (0, r.jsx)(f.E, {
                    className: ty.$o,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ec.intl.string(ec.t["515vjG"]),
                }),
        ],
    });
}
function t$(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: o()(ty.jC, n), children: t });
}
function tz(e) {
    let { className: t } = e;
    return (0, r.jsx)(t$, {
        className: t,
        children: (0, r.jsx)("div", { className: ty.wH, children: (0, r.jsx)("div", { className: ty.j3 }) }),
    });
}
