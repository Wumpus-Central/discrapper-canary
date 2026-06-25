"use strict";
n.d(t, {
    ks: () => tG,
    UK: () => tY,
    Ez: () => tV,
    _z: () => tb,
    LL: () => tP,
    Uq: () => tK,
    yR: () => tW,
    OZ: () => tj,
    $o: () => tL,
    bU: () => tx,
    Uk: () => tN,
    GN: () => tB,
    Y0: () => t$,
    P$: () => tM,
    _d: () => tk,
    gL: () => tw,
    Dk: () => tU,
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
    p = n(821609),
    E = n(289873),
    m = n(939249),
    g = n(582394),
    A = n(306788),
    I = n(534514),
    T = n(789645),
    S = n(364522),
    y = n(493336),
    C = n(334738),
    N = n(192308),
    v = n(267102),
    R = n(619517),
    O = n(256905),
    b = n(536763),
    D = n(218394);
class L extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: i, onMouseEnter: r, handlePreloadImage: s } = this.props;
        (r?.(e), null != s) ? s() : (0, b.A)({ src: t, width: n, height: i, options: this.props });
    };
    modalContext = (0, N.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, N.closeModal)(O.K, this.modalContext);
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
            analyticsSource: p,
            contentType: E,
            originalContentType: m,
        } = this.props;
        (0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, O.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: s,
                        width: o,
                        height: l,
                        type: "IMAGE",
                        alt: r,
                        contentType: E,
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
                location: p ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, r.jsx)(R.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function w(e) {
    let t = (0, v.Us)(),
        n = (0, D.j)();
    return (0, r.jsx)(L, { ...e, isWindowFocused: n, appContext: t });
}
var M = n(9578),
    P = n(56562),
    x = n(475743),
    k = n(564771),
    U = n(692051),
    G = n(915089),
    F = n(611371),
    V = n(453771),
    B = n(994064);
class j extends s.PureComponent {
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
            fileSize: (0, V.Hb)(t),
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
var H = n(248643),
    Y = n(156828),
    W = n(990078),
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
    el = n(255438),
    eu = n(375708),
    ec = n(713152),
    ed = n(134536);
function e_(e) {
    let { text: t, language: i, wordWrap: s } = e;
    function a() {
        return (0, r.jsx)("code", { className: o()(ed.kw, ec.Xb, "hljs", { [ec.Zw]: s }), children: t });
    }
    return (0, r.jsx)("pre", {
        children: (0, r.jsx)(eo.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: o()(ed.kw, ec.Xb, "hljs", { [ec.Zw]: s }),
            children: (0, r.jsx)(Y.c2, {
                createPromise: () => Promise.resolve().then(n.bind(n, 149938)),
                webpackId: 149938,
                render: (e) => {
                    if (!e.hasLanguage(i)) return a();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? a()
                        : (0, r.jsx)("code", {
                              className: o()(ed.kw, ec.Xb, "hljs", n.language, { [ec.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => a(),
            }),
        }),
    });
}
function eh(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: s } = e,
        a = eu.intl.formatToPlainString(s ? eu.t.Go5Vvs : eu.t.yJcYan, { lines: i }),
        o = `${t ? eu.intl.string(eu.t.iTcuma) : eu.intl.string(eu.t.dcl9MQ)} (${a})`;
    return (0, r.jsx)("div", {
        className: ec.py,
        children: (0, r.jsx)(W.m, {
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
function ef(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, el.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: ec.VI,
        children: [
            (0, r.jsx)("div", {
                className: ec.VW,
                children: (0, r.jsx)(W.m, {
                    text: i,
                    children: (0, r.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ec.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(f.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, el.up)(n) }),
        ],
    });
}
function ep(e) {
    let { language: t, setLanguage: n, align: i } = e,
        a = s.useRef(null);
    return (0, r.jsx)(_.Y, {
        targetElementRef: a,
        position: "left",
        align: i,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(q.l, {
                "aria-label": eu.intl.string(eu.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: ec.md,
                    children: (0, r.jsxs)(Z.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(ea.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, r.jsx)(Z.a3, { placeholder: eu.intl.string(eu.t.GofftW) }),
                            (0, r.jsx)(Z.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(W.m, {
                ariaHidden: !0,
                text: eu.intl.string(eu.t.utm4qs),
                children: (0, r.jsx)(m.D, {
                    ...e,
                    className: ec.Qw,
                    "aria-label": eu.intl.string(eu.t.utm4qs),
                    children: (0, r.jsx)(X.G, { size: "sm", color: "currentColor", ref: a }),
                }),
            }),
    });
}
function eE(e) {
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
                        "aria-label": eu.intl.string(eu.t.PdRCRg),
                        children: (0, r.jsxs)(J.rX, {
                            children: [
                                (0, r.jsx)(J.Dr, {
                                    id: "download",
                                    label: eu.intl.string(eu.t["1WjMbC"]),
                                    icon: ee.s,
                                    action: () => {
                                        l.current?.click(), i();
                                    },
                                }),
                                (0, r.jsx)(J.sL, {
                                    id: "word-wrap",
                                    label: eu.intl.string(eu.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(W.m, {
                        ariaHidden: !0,
                        text: eu.intl.string(eu.t["UKOtz+"]),
                        children: (0, r.jsx)(m.D, {
                            ...e,
                            className: ec.IQ,
                            "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                            children: (0, r.jsx)(et.j, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(en.Anchor, {
                ref: l,
                href: i,
                download: a,
                className: ec.op,
                children: (0, r.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function em(e) {
    return (0, r.jsx)(W.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: eu.intl.string(eu.t["0PQYk3"]),
        children: (0, r.jsx)(m.D, {
            className: ec.R1,
            "aria-label": eu.intl.string(eu.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, r.jsx)(eA, { ...e, ...t }));
            },
            children: (0, r.jsx)(ei._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eg(e) {
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
        p = s?.split("\n"),
        m = p?.length ?? 0,
        g = a ? 100 : 6,
        A = 0 === h,
        I = "";
    A && a && m > g ? (I = "\n...") : A || (I = "..."),
        "" !== I &&
            (A
                ? (I += " " + eu.intl.formatToPlainString(eu.t.DQnFp2, { lines: m - g }))
                : (I += " " + eu.intl.formatToPlainString(eu.t["1+gGcK"], { formattedBytes: (0, el.up)(h) })));
    let T = p?.slice(0, g).join("\n") + I,
        y = (0, es.sJ)(T),
        C = a || g < m;
    return (0, r.jsxs)("div", {
        className: o()(f, ec.kL),
        children: [
            (0, r.jsx)(S.Ip, {
                className: ec.FS,
                children:
                    null == s
                        ? (0, r.jsx)(E.y, { className: ec.u1 })
                        : (0, r.jsx)(e_, { text: y, language: u, wordWrap: d }),
            }),
            (0, r.jsxs)("div", {
                className: ec.qr,
                role: "group",
                "aria-label": eu.intl.string(eu.t.TlXA8e),
                children: [
                    C ? (0, r.jsx)(eh, { expanded: a, setExpanded: l, numLines: m, isWholeFile: A }) : null,
                    (0, r.jsx)(ef, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: ec.Kb }),
                    (0, r.jsx)(ep, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, r.jsx)(em, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: u,
                              wordWrap: d,
                              fileContents: s,
                              bytesLeft: h,
                          })
                        : null,
                    (0, r.jsx)(eE, { wordWrap: d, setWordWrap: _, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function eA(e) {
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
        [h, p] = s.useState(o),
        [m, g] = s.useState(l),
        A = s.useRef(null),
        I = u ?? "";
    return (
        0 !== d && (I += `... ${eu.intl.formatToPlainString(eu.t["1+gGcK"], { formattedBytes: (0, el.up)(d) })}`),
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
            "aria-label": eu.intl.string(eu.t["qxQjc+"]),
            size: "xxl",
            onClose: _,
            children: (0, r.jsxs)("div", {
                className: ec.jE,
                children: [
                    (0, r.jsx)(S.Ip, {
                        className: ec.ot,
                        children:
                            null == u
                                ? (0, r.jsx)(E.y, { className: ec.u1 })
                                : (0, r.jsx)("div", {
                                      ref: A,
                                      children: (0, r.jsx)(e_, { text: I, language: h, wordWrap: m }),
                                  }),
                    }),
                    (0, r.jsx)("div", {
                        role: "group",
                        "aria-label": eu.intl.string(eu.t.TlXA8e),
                        children: (0, r.jsxs)(f.E, {
                            color: "text-default",
                            className: ec.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)(ef, { fileName: n, fileSize: i }),
                                (0, r.jsx)("div", { className: ec.Kb }),
                                (0, r.jsx)(ep, { language: h, setLanguage: p, align: "bottom" }),
                                (0, r.jsx)(eE, { wordWrap: m, setWordWrap: g, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eI = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: i, contentType: a, className: l, onClick: u, onContextMenu: c } = e,
            [d, _] = s.useState(!1),
            [h, f] = s.useState(n.split(".").slice(-1)[0]),
            [p, E] = s.useState(!1),
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
            ? (0, r.jsx)(k.A, { url: t, fileName: n, fileSize: i, onClick: u, onContextMenu: c, className: l })
            : (0, r.jsx)(eg, {
                  url: t,
                  fileName: n,
                  fileSize: i,
                  fileContents: m,
                  bytesLeft: g,
                  expanded: d,
                  setExpanded: _,
                  language: h,
                  setLanguage: f,
                  wordWrap: p,
                  setWordWrap: E,
                  className: o()(ec.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eT = n(863922),
    eS = n(822074),
    ey = n(534890),
    eC = n(442433),
    eN = n(640708),
    ev = n(941971),
    eR = n(707539),
    eO = n(576705),
    eb = n(568548),
    eD = n(340833),
    eL = n(913642),
    ew = n(935208),
    eM = n(453302);
n(321073);
var eP = n(97808),
    ex = n(778712),
    ek = n(707606),
    eU = n(403362),
    eG = n(585936);
let eF = (0, ek.A)(function (e) {
        let { member: t, empty: n, guildId: i } = e;
        return n || null == t
            ? (0, r.jsx)("div", { className: eG.pO })
            : (0, r.jsx)("div", {
                  className: eG.pO,
                  children: (0, r.jsx)(eP.eu, {
                      src: t.getAvatarURL(i, 16),
                      "aria-label": t.username,
                      size: ex._3.SIZE_16,
                      className: eG.pO,
                  }),
              });
    }),
    eV = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: s = 2, guildId: a } = e,
            { totalSize: o, knownSize: l } = t;
        if (o < i) return null;
        let c = u()(n)
                .filter(eU.Vq)
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
            className: eG.iE,
            children: (0, r.jsxs)("div", {
                className: eG.S3,
                children: [c, _ > 1 ? (0, r.jsxs)("div", { className: eG.Hi, children: ["+", _] }) : null],
            }),
        });
    };
var eB = n(303727),
    ej = n(678750);
function eH() {
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
                    (0, r.jsx)(eB.A, { className: ej.uf }),
                ],
            }),
            (0, r.jsx)(I.D, {
                className: ej.wx,
                variant: "heading-xl/semibold",
                children: eu.intl.string(eu.t.yJHJei),
            }),
            (0, r.jsx)(f.E, {
                className: ej.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: eu.intl.string(eu.t.p2dIh6),
            }),
        ],
    });
}
var eY = n(652215),
    eW = n(670455),
    eK = n(559004);
function e$(e) {
    let { summary: t, channel: i, members: a, guildId: o, unread: l, onClick: u } = e,
        [c, _] = s.useState(!1),
        h = (0, eR.aK)(ew.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([eS.A], () => eS.A.summaryFeedback(t));
    function E(e, n) {
        e.stopPropagation(), (0, eM.A)({ summary: t, channel: i, rating: n });
    }
    let g = eO.A.can(eY.xBc.MANAGE_MESSAGES, i);
    return (0, r.jsxs)(m.D, {
        className: eK.kL,
        onClick: u,
        onContextMenu: function (e) {
            g &&
                (0, eC.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: [
            (0, r.jsx)(ev.A, { hovered: c, unread: l, className: eK.dM }),
            (0, r.jsx)("div", {
                className: eK.uV,
                children: (0, r.jsxs)("div", {
                    className: eK.Hw,
                    children: [
                        (0, r.jsx)(f.E, {
                            className: eK.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: h,
                        }),
                        (0, r.jsx)(eN.A, { height: 4, width: 4, "aria-hidden": "true", className: eK.Om }),
                        (0, r.jsx)(ey.o, { size: "xxs", color: "currentColor", className: eK.Kk }),
                        (0, r.jsx)(f.E, {
                            className: eK.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        a.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eN.A, { height: 4, width: 4, "aria-hidden": "true", className: eK.Om }),
                                    (0, r.jsx)(eV, {
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
                null == p &&
                (0, r.jsxs)("div", {
                    className: eK.p_,
                    children: [
                        (0, r.jsx)(m.D, {
                            onClick: (e) => E(e, eW.P0.GOOD),
                            children: (0, r.jsx)(eL.A, { className: eK.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(m.D, {
                            onClick: (e) => E(e, eW.P0.BAD),
                            children: (0, r.jsx)(eD.A, { className: eK.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(f.E, { color: "text-strong", variant: "text-sm/semibold", className: eK.DD, children: t.topic }),
            (0, r.jsx)(f.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eK.VA,
                children: t.summShort,
            }),
        ],
    });
}
function ez(e) {
    let { summaries: t, summariesMembers: n, channel: i, selectTopic: a, setOpen: o } = e,
        l = (0, d.bG)([eb.Ay], () => eb.Ay.getOldestUnreadMessageId(i.id)),
        u = s.useCallback(
            (e) => {
                a(e), o(!1);
            },
            [a, o],
        );
    return t.length < 1
        ? (0, r.jsx)(eH, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, r.jsx)(
                      e$,
                      {
                          summary: e,
                          channel: i,
                          members: s,
                          guildId: i.guild_id,
                          unread: null != l && ew.default.compare(e.endId, l) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var eq = n(885386),
    eZ = n(113494),
    eX = n(782134),
    eQ = n(775602),
    eJ = n(228366),
    e0 = n(713021),
    e1 = n(745601),
    e2 = n(20504),
    e3 = n(625494),
    e6 = n(927813),
    e4 = n(824744);
n(508300);
var e5 = n(661531),
    e7 = n(602853),
    e8 = n(765671);
function e9(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var te = n(998304),
    tt = n(284009),
    tn = n.n(tt),
    ti = n(722872);
class tr {
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
              ? ti.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : ti.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
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
var ta = n(793692);
let to = [0, 0, 0, 0, 0];
function tl(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: r } = e;
    return t ? r : Math.max(0, Math.round((n / i) * r));
}
function tu(e) {
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
function tc(e, t, n) {
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
function td(e, t, n, i) {
    if (null == i) return [t, !1];
    let r = Math.min((n - i) / 200, 1);
    return 1 === r ? [t, !1] : [(0, te.De)(e, t, r), !0];
}
function t_(e) {
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
        { ref: p, width: E } = (0, e8.Ay)(),
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
                    })(E),
                [E],
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
                                if ((tn()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
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
                    })(t ?? [], n) ?? to,
                [t, n],
            )),
        I = s.useRef(c),
        T = s.useRef(d),
        S = s.useRef(null),
        y = window.devicePixelRatio,
        {
            lastBackgroundFillColor: C,
            backgroundFillColor: N,
            lastActiveFillColor: v,
            activeFillColor: R,
            lastInactiveFillColor: O,
            inactiveFillColor: b,
        } = (function (e, t) {
            let n = (0, e7.r)(e5.A.colors.BACKGROUND_MOD_MUTED).hex(),
                i = (0, e7.r)(e5.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                r = (0, e7.r)(e5.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e7.r)(e5.A.unsafe_rawColors.BRAND_430).hex(),
                a = (0, e7.r)(e5.A.unsafe_rawColors.WHITE).hex(),
                o = t ? s : n,
                [l, u] = tc(o, t, e),
                [c, d] = tc(t ? a : e ? r : i, t, e),
                [_, h] = tc(e ? o : i, t, e);
            return {
                lastBackgroundFillColor: l,
                backgroundFillColor: u,
                lastActiveFillColor: c,
                activeFillColor: d,
                lastInactiveFillColor: _,
                inactiveFillColor: h,
            };
        })(c, d),
        D = { currentTime: l, duration: u, played: c },
        L = s.useRef(D);
    s.useEffect(() => {
        L.current = D;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = L.current,
                i = tl({ showAll: !n, currentTime: e, duration: t, numSegments: A.length });
            g.current = A.map((e, t) => new tr(t < i ? e : 0));
        }, [A]),
        s.useEffect(() => {
            let e = g.current;
            if (null == e) return;
            let t = tl({ showAll: !c, currentTime: l, duration: u, numSegments: A.length });
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
                    let i = p.current,
                        r = i?.getContext("2d"),
                        s = g.current;
                    if (null == i || null == r || null == s) return;
                    let a = !1;
                    (I.current !== c || T.current !== d) && ((I.current = c), (T.current = d), (S.current = n)),
                        null != S.current && n > S.current + 200 && (S.current = null);
                    let o = i.height / y;
                    r.clearRect(0, 0, i.width, i.height), r.beginPath();
                    let [l, u] = td(C, N, n, S.current);
                    (a = a || u), (r.fillStyle = l);
                    for (let e = 0; e < A.length; e++)
                        tu({
                            context: r,
                            devicePixelRatio: y,
                            canvasHeight: o,
                            segmentValue: A[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    r.fill();
                    let [_, h] = td(O, b, n, S.current);
                    a = a || h;
                    let [f, E] = td(v, R, n, S.current);
                    a = a || E;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), A[e] - 0.1);
                        r.beginPath(),
                            (r.fillStyle = t.isReset ? _ : f),
                            tu({
                                context: r,
                                devicePixelRatio: y,
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
        }, [p, y, A, E, l, u, c, d, C, N, v, R, O, b]);
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
                    null != i && n?.(e9(i, e));
                }
            }, [t, a, r, n]),
            [
                a,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let r = t.current;
                        null != r && (o(!0), i?.(), n?.(e9(r, e)));
                    },
                    [t, i, n],
                ),
            ]
        );
    })({ ref: p, onDrag: _, onDragStart: h, onDragEnd: f });
    return (0, r.jsx)("canvas", {
        onMouseDown: w,
        className: o()(ta.J, i),
        style: { width: m },
        ref: p,
        height: 32 * window.devicePixelRatio,
        width: (E ?? 0) * window.devicePixelRatio,
    });
}
var th = n(253654);
let tf = s.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function tp(e) {
    let { played: t, duration: n, currentTime: i } = e,
        s = null == n ? "--:--" : t ? (0, B.rB)(Math.ceil(n - i)) : (0, B.rB)(Math.ceil(n));
    return (0, r.jsx)(f.E, { variant: "text-sm/normal", className: th.p0, tabularNumbers: !0, children: s });
}
let tE = s.memo(function (e) {
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
            onPlay: p,
            onPause: E,
            onError: g,
            playbackCacheKey: A,
        } = e,
        I = s.useRef(null),
        T = s.useMemo(() => (null != A ? e0.Ay.getPlaybackPosition(A) : 0), [A]),
        S = (0, d.bG)([e0.Ay], () => e0.Ay.getPlaybackRate(e0.k0.VOICE_MESSAGE)),
        [y, C] = s.useState(T > 0),
        [N, v] = s.useState(T),
        [R, O] = s.useState(c),
        [b, D] = s.useState(!1),
        [L, w] = s.useState(!1),
        [M, P] = s.useState(!1),
        [x, k] = s.useState(!1),
        [U, G] = s.useState("none"),
        [F, V] = s.useState(() => ("function" == typeof i ? i() : i)),
        B = s.useRef(void 0),
        j = s.useCallback(() => {
            w((e) => !e), k(!0);
        }, []),
        H = s.useCallback(() => {
            G("metadata");
        }, []),
        Y = s.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || O(t);
        }, []),
        W = s.useCallback(
            (e) => {
                null != c &&
                    null != A &&
                    eJ.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: A, position: e, duration: c });
            },
            [A, c],
        ),
        K = s.useCallback(() => {
            w(!1),
                null == B.current &&
                    (B.current = setTimeout(() => {
                        C(!1), k(!1), (B.current = void 0);
                    }, 500));
        }, []),
        $ = s.useCallback(() => {
            M || (W(0), K());
        }, [K, M, W]),
        z = s.useCallback((e) => {
            let t = I.current;
            null != t && (v(e), (t.currentTime = e), C(!0));
        }, []),
        q = s.useCallback(() => {
            let e = I.current;
            if (null == e) return;
            let t = e.error;
            g?.(t);
        }, [g]),
        Z = s.useCallback(
            (e) => {
                let t = (0, e4.w)(e, 1);
                D(0 === t), V(t), a?.(t);
            },
            [a],
        ),
        X = s.useCallback(() => {
            D(!b), l?.(!b);
        }, [b, l]),
        Q = s.useCallback(() => {
            P(!0);
        }, []),
        J = s.useCallback(() => {
            P(!1), N === R && K(), W(N);
        }, [N, R, K, W]),
        ee = s.useCallback(
            (e) => {
                let t = I.current;
                null == R || null == t || (z(e * R), clearTimeout(B.current), (B.current = void 0));
            },
            [R, z],
        );
    s.useEffect(() => {
        !y && L && C(!0);
    }, [L, y]);
    let et = s.useRef(null),
        en = { played: x, currentTime: N, onPause: E, onPlay: p },
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
                L &&
                    !M &&
                    (e = setInterval(() => {
                        W(I.current?.currentTime ?? 0);
                    }, e6.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [L, M, W]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: i } = ei.current;
            if (e || L)
                if (L) (et.current = performance.now()), i?.(!1, t, (I.current?.duration ?? 0) * e6.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        i = et.current;
                    n?.(t, null != i ? (e - i) / 1e3 : 0), W(t), (et.current = null);
                }
        }, [L, n, R, W]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = I.current;
                    null == n || (v(n.currentTime), L && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [I, L, v]),
        s.useEffect(() => {
            if (L)
                return (
                    e3._.dispatch(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e3._.subscribe(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e3._.unsubscribe(eY.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && w(!1);
            }
        }, [n, L, w]);
    let er = L ? eZ.E : eX.u,
        es = L ? eu.intl.string(eu.t["3XohGn"]) : eu.intl.string(eu.t.AlHqHT),
        ea = eu.intl.formatToPlainString(eu.t.LgCPMt, { playbackRate: S }),
        eo = `${S.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(s.Suspense, {
                  children: (0, r.jsx)(tf, {
                      ref: I,
                      className: th.Zn,
                      src: n,
                      preload: U,
                      playing: L && !M,
                      onEnded: $,
                      onLoadedMetadata: Y,
                      onError: q,
                      muted: b,
                      volume: F,
                      playbackRate: S,
                  }),
              })
            : (0, r.jsx)(e1.A, {
                  ref: I,
                  className: th.Zn,
                  controls: !1,
                  preload: U,
                  onEnded: $,
                  onLoadedMetadata: Y,
                  onError: q,
                  muted: b,
                  volume: F,
                  playbackRate: S,
                  playing: L && !M,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let el = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: o()(th.kL, { [th.he]: L }),
        onMouseEnter: H,
        role: "region",
        "aria-label": eu.intl.string(eu.t.c8U6xd),
        children: [
            (0, r.jsx)("div", {
                className: th.Kl,
                children: (0, r.jsx)("div", { className: o()(th.fq, { [th.VN]: el }) }),
            }),
            (0, r.jsx)(m.D, {
                className: th.k0,
                onClick: j,
                "aria-label": es,
                children: (0, r.jsx)(er, { className: th.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(t_, {
                className: th.ou,
                waveform: u,
                currentTime: N,
                duration: R ?? 1,
                playing: L,
                played: y,
                onDrag: ee,
                onDragStart: Q,
                onDragEnd: J,
            }),
            (0, r.jsx)(tp, { played: y, currentTime: N, duration: R }),
            (0, r.jsx)(m.D, {
                className: th.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (ts.indexOf(S) + 1) % ts.length),
                        void ((e = ts[n]),
                        (t = e0.k0.VOICE_MESSAGE),
                        eJ.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": ea,
                children: (0, r.jsx)(f.E, { variant: "text-xs/semibold", className: th.Sn, children: eo }),
            }),
            (0, r.jsx)(e2.A, {
                className: th.bk,
                iconClassName: th._j,
                iconColor: "currentColor",
                sliderWrapperClassName: th.MQ,
                muted: b,
                value: (0, e4.M)(F, 1),
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
var tm = n(287809),
    tg = n(147925),
    tA = n(174459),
    tI = n(587481),
    tT = n(838541),
    tS = n(521732),
    ty = n(650583),
    tC = n(814131);
let tN = { delay: 300, position: "top" };
function tv(e) {
    return (t) => {
        e?.(t), (0, tI.ls)(t);
    };
}
function tR(e) {
    return (t) => {
        e?.(t), (0, tI.y5)(t);
    };
}
function tO(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, r.jsxs)("div", {
        role: "dialog",
        "aria-label": eu.intl.string(eu.t.fSiQ3A),
        className: tC.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === ty.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, r.jsx)("span", { className: tC.k_, children: eu.intl.string(eu.t.fSiQ3A) }),
            (0, r.jsx)("span", { className: tC.a7, children: t }),
        ],
    });
}
function tb(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: i = !1,
            hiddenSpoilers: a = !1,
            reducedSizeAltTextButton: l = !1,
        } = e,
        [u, c] = s.useState(!1),
        d = s.useRef(null);
    return (n || u) && !i && eq._z.getSetting() && null != t && "" !== t && !0 !== a
        ? (0, r.jsx)("div", {
              className: tC.NO,
              children: (0, r.jsx)(_.Y, {
                  targetElementRef: d,
                  animation: _.Y.Animation.FADE,
                  renderPopout: () => (0, r.jsx)(tO, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, r.jsx)(h.vN, {
                          offset: 4,
                          children: (0, r.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": eu.intl.string(eu.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: o()(tC.DV, { [tC.yZ]: !0, [tC.I5]: l }),
                              children: eu.intl.string(eu.t.jCV1Tz),
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
            reducedSizeAltTextButton: p,
            ...E
        } = e,
        m = tv(t),
        g = tR(n);
    (i = null == i ? tI.v1 : i), (a = null == a ? tI.uj : a);
    let [A, I] = s.useState(!0),
        T = h === tT.dG.MOSAIC || !0 === _,
        S = A && !c && eq._z.getSetting() && null != o && "" !== o && !0 !== d;
    return (0, r.jsxs)(s.Fragment, {
        children: [
            (0, r.jsx)(H.A, {
                ...E,
                alt: o,
                autoMute: a,
                mediaLayoutType: h,
                onControlsHide: () => I(!1),
                onControlsShow: () => I(!0),
                onMute: g,
                onVolumeChange: m,
                renderLinkComponent: tx,
                renderOverlayContent: u,
                volume: i,
            }),
            null != l && l(),
            T &&
                (0, r.jsx)(tb, {
                    alt: o,
                    controlsVisible: A,
                    disableAltTextDisplay: c,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: p,
                }),
            !T &&
                S &&
                (0, r.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tC.R5,
                    children: o,
                }),
        ],
    });
}
function tL(e) {
    return (0, r.jsx)(tD, { ...e });
}
function tw(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: a,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e,
        c = tv(t),
        d = tR(i);
    return (
        (n = null == n ? tI.v1 : n),
        (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(j, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: a,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tx,
                }),
                null != l && l(),
            ],
        })
    );
}
function tM(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...s } = e,
        a = tv(t),
        o = tR(i);
    return (n = null == n ? tI.v1 : n), (0, r.jsx)(tE, { ...s, onVolumeChange: a, onMute: o, volume: n });
}
function tP(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: a,
            imageContainerClassName: l,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: E,
        } = e,
        m = d === tT.dG.MOSAIC || !0 === E,
        g = !u && eq._z.getSetting() && null != t && "" !== t && !0 !== n,
        A = s.createRef();
    return (0, r.jsxs)("div", {
        className: o()(tC.fo, a),
        children: [
            (0, r.jsxs)("div", {
                className: o()(tC.ZS, l),
                style: p,
                children: [(0, r.jsx)(w, { ...e }), null != i && i()],
            }),
            m &&
                g &&
                (0, r.jsx)("div", {
                    className: tC.Y1,
                    children: (0, r.jsx)(_.Y, {
                        targetElementRef: A,
                        animation: _.Y.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(tO, { altText: t, altButtonRef: A }),
                        children: (e) =>
                            (0, r.jsx)(h.vN, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: A,
                                    "aria-label": eu.intl.string(eu.t.fSiQ3A),
                                    className: o()(tC.DV, { [tC.I5]: c }),
                                    children: eu.intl.string(eu.t.jCV1Tz),
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
                    className: tC.R5,
                    children: t,
                }),
        ],
    });
}
function tx(e) {
    return (0, r.jsx)(M.A, { ...e });
}
function tk(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(s.Fragment, { children: [(0, r.jsx)(eI, { ...n }), null != t && t()] });
}
function tU(e) {
    return (0, r.jsx)(k.A, { ...e });
}
var tG = (((i = {})[(i.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (i[(i.REPLY = 1)] = "REPLY"), i);
let tF = (e) => {
    let { type: t = 0, onClick: n, className: i } = e;
    return (0, r.jsx)(U.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, r.jsxs)("div", {
                      onClick: n,
                      className: o()(tC.Sg, i),
                      children: [
                          (0, r.jsx)("div", {
                              className: tC.$I,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return eu.intl.string(eu.t["4EvBbw"]);
                                      case 1:
                                          return eu.intl.string(eu.t["1J6Xq7"]);
                                      default:
                                          return (0, eU.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, r.jsx)(h.vN, {
                                    offset: -2,
                                    children: (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return eu.intl.string(eu.t.gpoQsB);
                                                case 1:
                                                    return eu.intl.string(eu.t.k3RM8z);
                                                default:
                                                    return (0, eU.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, r.jsx)(E.y, {
                                    type: E.y.Type.PULSING_ELLIPSIS,
                                    className: tC.u1,
                                    itemClassName: tC.$N,
                                }),
                      ],
                  }),
    });
};
function tV(e) {
    let { onClick: t, loading: n, className: i } = e;
    return (0, r.jsx)(U.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, r.jsxs)(m.D, {
                      className: o()(tC._5, i),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, r.jsx)("div", { className: tC.$I, children: eu.intl.string(eu.t["1zUvlw"]) }),
                          n
                              ? (0, r.jsx)(E.y, {
                                    type: E.y.Type.PULSING_ELLIPSIS,
                                    className: tC.u1,
                                    itemClassName: tC.$N,
                                })
                              : (0, r.jsx)("div", {
                                    className: o()(tC.hQ, tC.d3),
                                    children: eu.intl.string(eu.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tB(e) {
    let { content: t, channelId: n } = e,
        [i] = s.useState(() => (0, G.Ld)("NewMessagesBarJumpToNewMessages_")),
        a = s.useCallback(() => {
            let e = eb.Ay.ackMessageId(n);
            null != e
                ? y.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : y.A.jumpToMessage({
                      channelId: n,
                      messageId: ew.default.castChannelIdAsMessageId(n),
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
        { disableInteractions: u } = s.useContext(U.Y);
    return u
        ? null
        : (0, r.jsxs)("div", {
              className: o()(tC.eb, { [tC.y7]: u }),
              children: [
                  (0, r.jsx)(h.vN, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: tC.$I,
                          onClick: a,
                          "aria-label": eu.intl.string(eu.t.z0Mkp3),
                          "aria-describedby": i,
                          children: (0, r.jsx)("span", { id: i, className: tC.Ln, children: t }),
                      }),
                  }),
                  (0, r.jsx)(h.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, r.jsx)("div", {
                          className: tC._o,
                          children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: l,
                              className: tC.hQ,
                              children: [
                                  (0, r.jsx)("span", { className: tC.vE, children: eu.intl.string(eu.t.e6RscS) }),
                                  (0, r.jsx)(g.M, { size: "md", color: "currentColor", className: tC.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tj(e) {
    let { channel: t, content: n, scrollManager: i } = e,
        { disableInteractions: a } = s.useContext(U.Y),
        [l, _] = s.useState(null),
        h = s.useRef(null),
        [p, E] = s.useState(null),
        N = s.useRef(null),
        v = (0, d.yK)([eS.A], () => eS.A.summaries(t.id) ?? [], [t]),
        R = (0, x.A)(v);
    s.useEffect(() => {
        u().isEqual(R, v) ||
            tA.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [v, R, t.guild_id, t.id, t.type]);
    let O = (0, d.bG)(
            [tm.default],
            () => v?.map((e) => e.people?.map((e) => tm.default.getUser(e) ?? null).filter(eU.Vq)) ?? [],
            [v],
            tH,
        ),
        b = (0, d.bG)([eS.A], () => eS.A.visibleSummaryIndex()) ?? -1,
        D = v?.[b]?.topic;
    null == D && null == l && v?.length >= 1 && (D = v[0]?.topic);
    let L = s.useMemo(
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
                        (0, eT.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(
            (e) => {
                w(), L(e);
            },
            [L, w],
        ),
        [k, G] = s.useState(!1),
        V = s.useCallback(() => {
            tA.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !k,
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                G(!k);
        }, [k, v, G, t]),
        B = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.eh.PILL_DROPDOWN,
                    r = v[e];
                null != r &&
                    ((0, eT.sK)(t.id, r.id),
                    (0, eT.C6)(t.id, r.id),
                    i.removeAutomaticAnchorCallback(M),
                    i.addScrollCompleteCallback(function e() {
                        i.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                i.addAutomaticAnchorCallback(M, !1);
                            }, 100);
                    }),
                    tA.default.track(eY.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: r.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    y.A.jumpToMessage({
                        channelId: t.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: P.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [v, t, M, i],
        ),
        j = s.useCallback((e) => {
            G(e);
            let t = N.current?.scrollTop;
            null != t && E(t);
        }, []);
    s.useEffect(() => {
        null != p && k && N.current?.scrollTo({ top: p });
    }, [p, k]);
    let H = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && h.current?.contains(e.target)) ||
                (k &&
                    tA.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: v.length,
                        message_counts: v.map((e) => e.count),
                        start_message_ids: v.map((e) => e.startId),
                        end_message_ids: v.map((e) => e.endId),
                        num_participants: v.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                j(!1));
        },
        [k, v, t, j],
    );
    s.useEffect(
        () => (
            i.addAutomaticAnchorCallback(M),
            () => {
                i.removeAutomaticAnchorCallback(M);
            }
        ),
        [i, M],
    ),
        s.useEffect(() => {
            (0, eT.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", H),
                () => {
                    document.removeEventListener("mousedown", H);
                }
            ),
            [H],
        );
    let Y = s.useMemo(
            () => (0, r.jsx)(ez, { channel: t, summaries: v, summariesMembers: O, selectTopic: B, setOpen: j }),
            [v, O, B, j, t],
        ),
        W = s.useCallback(() => {
            let e = eb.Ay.ackMessageId(t.id);
            null != e
                ? y.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : y.A.jumpToMessage({
                      channelId: t.id,
                      messageId: ew.default.castChannelIdAsMessageId(t.id),
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
        $ = eu.intl.string(eu.t["38qwgO"]);
    return (
        v.length > 0 && ($ = "" === D || null == D ? eu.intl.string(eu.t.DwnFuG) : D),
        a
            ? null
            : (0, r.jsxs)("div", {
                  ref: h,
                  className: o()(tC.dw, tC.jh),
                  children: [
                      (0, r.jsx)("div", {
                          className: tC.qm,
                          children: (0, r.jsx)(m.D, {
                              className: tC.TQ,
                              "aria-label": eu.intl.string(eu.t.RT3MPz),
                              onClick: V,
                              children: (0, r.jsxs)("div", {
                                  className: o()({ [tC.hN]: !k, [tC.Ap]: k }),
                                  children: [
                                      (0, r.jsx)(A.K, { size: "xs", color: "currentColor", className: tC.Vd }),
                                      (0, r.jsx)(f.E, {
                                          variant: "text-sm/medium",
                                          className: o()(tC.$U, tC.lc),
                                          children: $,
                                      }),
                                      (0, r.jsx)(tg.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tg.A.Directions.DOWN,
                                          className: tC.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(m.D, { onClick: W, className: tC.ij, children: n }),
                      (0, r.jsxs)(m.D, {
                          onClick: K,
                          className: o()(tC.hQ, tC.NX),
                          children: [
                              (0, r.jsx)("div", { className: tC.$U, children: eu.intl.string(eu.t.e6RscS) }),
                              (0, r.jsx)(g.M, { size: "md", color: "currentColor", className: tC.t3 }),
                          ],
                      }),
                      k &&
                          (0, r.jsxs)("div", {
                              className: tC.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: tC.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: tC.Ne,
                                              children: [
                                                  (0, r.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tC.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(I.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eu.intl.string(eu.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(F.A, { className: tC.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(m.D, {
                                              "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                              onClick: V,
                                              className: tC.oX,
                                              children: (0, r.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: N, className: tC.Pe, fade: !0, children: Y }),
                              ],
                          }),
                  ],
              })
    );
}
function tH(e, t) {
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
        { disableInteractions: i } = s.useContext(U.Y),
        [a, l] = s.useState(null),
        _ = s.useRef(null),
        [h, p] = s.useState(null),
        E = s.useRef(null),
        g = (0, d.yK)([eS.A], () => eS.A.summaries(t.id) ?? [], [t]),
        C = (0, x.A)(g);
    s.useEffect(() => {
        u().isEqual(C, g) ||
            tA.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
    let N = (0, d.bG)(
            [tm.default],
            () => g?.map((e) => e.people?.map((e) => tm.default.getUser(e) ?? null).filter(eU.Vq)) ?? [],
            [g],
            tH,
        ),
        v = (0, d.bG)([eS.A], () => eS.A.visibleSummaryIndex()) ?? -1,
        R = g?.[v]?.topic;
    null == R && null == a && g?.length >= 1 && (R = g[0]?.topic);
    let O = s.useMemo(() => u().get(g, v - 1), [v, g]),
        b = s.useMemo(() => u().get(g, v + 1), [v, g]),
        D = s.useMemo(
            () =>
                u().debounce((e) => {
                    l(e?.id ?? null);
                }, 64),
            [l],
        ),
        L = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eT.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        w = s.useCallback(
            (e) => {
                L(), D(e);
            },
            [D, L],
        ),
        [M, k] = s.useState(!1),
        G = s.useCallback(() => {
            tA.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !M,
                num_summaries: g.length,
                message_counts: g.map((e) => e.count),
                start_message_ids: g.map((e) => e.startId),
                end_message_ids: g.map((e) => e.endId),
                num_participants: g.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                k(!M);
        }, [M, g, k, t]),
        V = s.useCallback(
            function (e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.eh.PILL_DROPDOWN,
                    r = g[e];
                null != r &&
                    ((0, eT.sK)(t.id, r.id),
                    (0, eT.C6)(t.id, r.id),
                    n.removeAutomaticAnchorCallback(w),
                    n.addScrollCompleteCallback(function e() {
                        n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(w, !1);
                            }, 100);
                    }),
                    tA.default.track(eY.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: i,
                        message_id: r.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    y.A.jumpToMessage({
                        channelId: t.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: P.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [g, t, w, n],
        ),
        B = s.useCallback(() => {
            V(v - 1, tS.eh.PILL_NEXT_ARROW);
        }, [V, v]),
        j = s.useCallback(() => {
            V(v + 1, tS.eh.PILL_PREVIOUS_ARROW);
        }, [v, V]),
        H = s.useCallback((e) => {
            k(e);
            let t = E.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != h && M && E.current?.scrollTo({ top: h });
    }, [h, M]);
    let Y = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && _.current?.contains(e.target)) ||
                (M &&
                    tA.default.track(eY.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                H(!1));
        },
        [M, g, t, H],
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
            (0, eT.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", Y),
                () => {
                    document.removeEventListener("mousedown", Y);
                }
            ),
            [Y],
        );
    let W = s.useMemo(
        () => (0, r.jsx)(ez, { channel: t, summaries: g, summariesMembers: N, selectTopic: V, setOpen: H }),
        [g, N, V, H, t],
    );
    if (!(0, d.bG)([eS.A], () => eS.A.shouldShowTopicsBar())) return null;
    let K = eu.intl.string(eu.t["38qwgO"]);
    return (
        g.length > 0 && (K = "" === R || null == R ? eu.intl.string(eu.t.DwnFuG) : R),
        i
            ? null
            : (0, r.jsxs)("div", {
                  ref: _,
                  className: o()(tC.$T, tC.jh),
                  children: [
                      (0, r.jsxs)("div", {
                          className: tC.sE,
                          children: [
                              (0, r.jsx)(m.D, {
                                  className: tC.LP,
                                  "aria-label": eu.intl.string(eu.t.RT3MPz),
                                  onClick: G,
                                  children: (0, r.jsxs)("div", {
                                      className: o()({ [tC.Nv]: !M, [tC.An]: M }),
                                      children: [
                                          (0, r.jsx)(A.K, { size: "xs", color: "currentColor", className: tC.Np }),
                                          (0, r.jsx)(f.E, { className: tC.r1, variant: "text-sm/medium", children: K }),
                                          (0, r.jsx)(tg.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tg.A.Directions.DOWN,
                                              className: tC._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: tC.Yk,
                                  children: [
                                      (0, r.jsx)(m.D, {
                                          "aria-label": eu.intl.string(eu.t["4huCnC"]),
                                          onClick: j,
                                          className: o()(tC.ZM, tC.vz, { [tC.jf]: null == b }),
                                          children: (0, r.jsx)(tg.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tg.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(m.D, {
                                          "aria-label": eu.intl.string(eu.t["58KOoF"]),
                                          onClick: B,
                                          className: o()(tC.ZM, tC.mt, { [tC.jf]: null == O }),
                                          children: (0, r.jsx)(tg.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tg.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      M &&
                          (0, r.jsxs)("div", {
                              className: tC.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: tC.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: tC.Ne,
                                              children: [
                                                  (0, r.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tC.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(I.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eu.intl.string(eu.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(F.A, { className: tC.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(m.D, {
                                              "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                              onClick: G,
                                              className: tC.oX,
                                              children: (0, r.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: E, className: tC.Pe, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tW(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, r.jsxs)("div", {
        className: tC.YL,
        children: [
            (0, r.jsx)(f.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tC.Ld,
                children: e,
            }),
            t &&
                (0, r.jsx)(f.E, {
                    className: tC.$o,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: eu.intl.string(eu.t["515vjG"]),
                }),
        ],
    });
}
function tK(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: o()(tC.jC, n), children: t });
}
function t$(e) {
    let { className: t } = e;
    return (0, r.jsx)(tK, {
        className: t,
        children: (0, r.jsx)("div", { className: tC.wH, children: (0, r.jsx)("div", { className: tC.j3 }) }),
    });
}
