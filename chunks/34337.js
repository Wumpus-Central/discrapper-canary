"use strict";
n.d(t, {
    ks: () => tD,
    UK: () => tB,
    Ez: () => tG,
    LL: () => tM,
    OZ: () => tF,
    yR: () => tW,
    Uq: () => tK,
    $o: () => tR,
    bU: () => tw,
    Uk: () => tN,
    GN: () => tV,
    Y0: () => tz,
    P$: () => tL,
    _d: () => tk,
    gL: () => tO,
    Dk: () => tP,
    Ab: () => tU,
});
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    c = n.n(o),
    u = n(621466),
    d = n(17928),
    h = n(922016),
    m = n(187322),
    p = n(821609),
    f = n(289873),
    g = n(939249),
    x = n(582394),
    A = n(306788),
    C = n(834730),
    E = n(534514),
    I = n(789645),
    y = n(364522),
    S = n(720149),
    v = n(334738),
    N = n(192308),
    _ = n(267102),
    T = n(619517),
    j = n(256905),
    b = n(536763),
    R = n(218394);
class O extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, b.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, N.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, N.closeModal)(j.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: i,
            src: s,
            original: r,
            width: a,
            height: o,
            animated: c,
            srcIsAnimated: d,
            children: h,
            shouldHideMediaOptions: m = !1,
            sourceMetadata: p,
            analyticsSource: f,
            contentType: g,
            originalContentType: x,
        } = this.props;
        (0, u.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, j.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: s,
                        width: a,
                        height: o,
                        type: "IMAGE",
                        alt: i,
                        contentType: g,
                        originalContentType: x,
                        zoomThumbnailPlaceholder: n,
                        animated: c,
                        srcIsAnimated: d,
                        children: h,
                        trigger: l,
                        sourceMetadata: p,
                        original: r ?? s,
                    },
                ],
                shouldHideMediaOptions: m,
                location: f ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(T.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function L(e) {
    let t = (0, _.Us)(),
        n = (0, R.j)();
    return (0, i.jsx)(O, { ...e, isWindowFocused: n, appContext: t });
}
var M = n(9578),
    w = n(56562),
    k = n(475743),
    P = n(564771),
    D = n(692051),
    U = n(915089),
    G = n(611371),
    V = n(453771),
    F = n(994064);
class H extends s.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: s,
            volume: r,
            renderLinkComponent: a,
            onVolumeChange: o,
            onVolumeShow: c,
            onVolumeHide: u,
            autoMute: d,
            onMute: h,
            mimeType: m,
            onPlay: p,
        } = this.props;
        return (0, i.jsx)(F.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, V.Hb)(t),
            fileSizeBytes: t,
            type: F.Ay.Types.AUDIO,
            className: l,
            playable: s,
            volume: r,
            onMute: h,
            autoMute: d,
            onVolumeChange: o,
            onVolumeShow: c,
            onVolumeHide: u,
            renderLinkComponent: a,
            mimeType: m,
            onPlay: p,
        });
    }
}
var B = n(248643),
    W = n(156828),
    K = n(990078),
    z = n(408278),
    Z = n(900797),
    Y = n(847374),
    q = n(305866),
    J = n(732771),
    $ = n(387758),
    X = n(980707),
    Q = n(477782),
    ee = n(32880),
    et = n(365199),
    en = n(349288),
    el = n(26430),
    ei = n(224640),
    es = n(417964),
    er = n(639169),
    ea = n(157941),
    eo = n(255438),
    ec = n(375708),
    eu = n(460224),
    ed = n(429128);
function eh(e) {
    let { text: t, language: l, wordWrap: s } = e,
        r = () => (0, i.jsx)("code", { className: a()(ed.kw, eu.Xb, "hljs", { [eu.Zw]: s }), children: t });
    return (0, i.jsx)("pre", {
        children: (0, i.jsx)(ea.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: l,
            className: a()(ed.kw, eu.Xb, "hljs", { [eu.Zw]: s }),
            children: (0, i.jsx)(W.c2, {
                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(l)) return r();
                    let n = e.highlight(l, t, !0);
                    return null == n
                        ? r()
                        : (0, i.jsx)("code", {
                              className: a()(ed.kw, eu.Xb, "hljs", n.language, { [eu.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => r(),
            }),
        }),
    });
}
function em(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        r = ec.intl.formatToPlainString(s ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: l }),
        a = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${r})`;
    return (0, i.jsx)("div", {
        className: eu.py,
        children: (0, i.jsx)(K.m, {
            text: a,
            children: (0, i.jsx)(z.K, {
                icon: t ? Z.t : Y.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": a,
            }),
        }),
    });
}
function ep(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, eo.up)(n)})`;
    return (0, i.jsxs)("div", {
        className: eu.VI,
        children: [
            (0, i.jsx)("div", {
                className: eu.VW,
                children: (0, i.jsx)(K.m, {
                    text: l,
                    children: (0, i.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: eu.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(C.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eo.up)(n) }),
        ],
    });
}
function ef(e) {
    let { language: t, setLanguage: n, align: l } = e,
        r = s.useRef(null);
    return (0, i.jsx)(h.Y, {
        targetElementRef: r,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(q.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: eu.md,
                    children: (0, i.jsxs)(J.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), l();
                        },
                        options: Array.from(er.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)(J.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                            (0, i.jsx)(J.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(K.m, {
                ariaHidden: !0,
                text: ec.intl.string(ec.t.utm4qs),
                children: (0, i.jsx)(g.D, {
                    ...e,
                    className: eu.Qw,
                    "aria-label": ec.intl.string(ec.t.utm4qs),
                    children: (0, i.jsx)($.G, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function eg(e) {
    let { wordWrap: t, setWordWrap: n, url: l, fileName: r } = e,
        a = s.useRef(null),
        o = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: a,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsx)(X.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: l,
                        onSelect: () => {},
                        "aria-label": ec.intl.string(ec.t.PdRCRg),
                        children: (0, i.jsxs)(Q.rX, {
                            children: [
                                (0, i.jsx)(Q.Dr, {
                                    id: "download",
                                    label: ec.intl.string(ec.t["1WjMbC"]),
                                    icon: ee.s,
                                    action: () => {
                                        o.current?.click(), l();
                                    },
                                }),
                                (0, i.jsx)(Q.sL, {
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
                    (0, i.jsx)(K.m, {
                        ariaHidden: !0,
                        text: ec.intl.string(ec.t["UKOtz+"]),
                        children: (0, i.jsx)(g.D, {
                            ...e,
                            className: eu.IQ,
                            "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                            children: (0, i.jsx)(et.j, { ref: a, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(en.Anchor, {
                ref: o,
                href: l,
                download: r,
                className: eu.op,
                children: (0, i.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function ex(e) {
    return (0, i.jsx)(K.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, i.jsx)(g.D, {
            className: eu.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, i.jsx)(eC, { ...e, ...t }));
            },
            children: (0, i.jsx)(el._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eA(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            fileContents: s,
            expanded: r,
            setExpanded: o,
            language: c,
            setLanguage: u,
            wordWrap: d,
            setWordWrap: h,
            bytesLeft: m,
            className: p,
        } = e,
        g = s?.split("\n"),
        x = g?.length ?? 0,
        A = r ? 100 : 6,
        C = 0 === m,
        E = "";
    C && r && x > A ? (E = "\n...") : C || (E = "..."),
        "" !== E &&
            (C
                ? (E += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: x - A }))
                : (E += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eo.up)(m) })));
    let I = g?.slice(0, A).join("\n") + E,
        S = (0, es.sJ)(I),
        v = r || A < x;
    return (0, i.jsxs)("div", {
        className: a()(p, eu.kL),
        children: [
            (0, i.jsx)(y.Ip, {
                className: eu.FS,
                children:
                    null == s
                        ? (0, i.jsx)(f.y, { className: eu.u1 })
                        : (0, i.jsx)(eh, { text: S, language: c, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: eu.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    v ? (0, i.jsx)(em, { expanded: r, setExpanded: o, numLines: x, isWholeFile: C }) : null,
                    (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: eu.Kb }),
                    (0, i.jsx)(ef, { language: c, setLanguage: u, align: "top" }),
                    null != s
                        ? (0, i.jsx)(ex, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: c,
                              wordWrap: d,
                              fileContents: s,
                              bytesLeft: m,
                          })
                        : null,
                    (0, i.jsx)(eg, { wordWrap: d, setWordWrap: h, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function eC(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            transitionState: r,
            language: a,
            wordWrap: o,
            fileContents: c,
            bytesLeft: d,
            onClose: h,
        } = e,
        [m, p] = s.useState(a),
        [g, x] = s.useState(o),
        A = s.useRef(null),
        E = c ?? "";
    return (
        0 !== d && (E += `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eo.up)(d) })}`),
        s.useEffect(() => {
            let e = (e) => {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != A.current) {
                    let t = document.activeElement;
                    if ((0, u.vq)(t, HTMLInputElement) || (0, u.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        e.selectNodeContents(A.current), n.removeAllRanges(), n.addRange(e);
                    }
                }
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, []),
        (0, i.jsx)(ei.d, {
            transitionState: r,
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: h,
            children: (0, i.jsxs)("div", {
                className: eu.jE,
                children: [
                    (0, i.jsx)(y.Ip, {
                        className: eu.ot,
                        children:
                            null == c
                                ? (0, i.jsx)(f.y, { className: eu.u1 })
                                : (0, i.jsx)("div", {
                                      ref: A,
                                      children: (0, i.jsx)(eh, { text: E, language: m, wordWrap: g }),
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": ec.intl.string(ec.t.TlXA8e),
                        children: (0, i.jsxs)(C.E, {
                            color: "text-default",
                            className: eu.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                                (0, i.jsx)("div", { className: eu.Kb }),
                                (0, i.jsx)(ef, { language: m, setLanguage: p, align: "bottom" }),
                                (0, i.jsx)(eg, { wordWrap: g, setWordWrap: x, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eE = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: r, className: o, onClick: c, onContextMenu: u } = e,
            [d, h] = s.useState(!1),
            [m, p] = s.useState(n.split(".").slice(-1)[0]),
            [f, g] = s.useState(!1),
            {
                fileContents: x,
                bytesLeft: A,
                hadError: C,
            } = (function (e, t) {
                let [n, l] = s.useState(!1),
                    [i, r] = s.useState(null),
                    [a, o] = s.useState(1);
                return (
                    s.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    i = (function (e) {
                                        let t = "utf-8",
                                            n = e?.split("charset=").slice(-1)[0] ?? t;
                                        try {
                                            return new TextDecoder(n);
                                        } catch (l) {
                                            if (e?.startsWith("text") || n.toLowerCase().includes("utf"))
                                                return new TextDecoder(t);
                                            throw l;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    s = n.headers.get("content-range") ?? "0",
                                    a = n.headers.get("content-length") ?? "1",
                                    c = parseInt(s.split("/")[1]) - parseInt(a);
                                r(0 === c ? i : i.slice(0, -1)), o(c), l(!1);
                            } catch (e) {
                                o(0), l(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: i, bytesLeft: a, hadError: n }
                );
            })(t, r);
        return C
            ? (0, i.jsx)(P.A, { url: t, fileName: n, fileSize: l, onClick: c, onContextMenu: u, className: o })
            : (0, i.jsx)(eA, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: x,
                  bytesLeft: A,
                  expanded: d,
                  setExpanded: h,
                  language: m,
                  setLanguage: p,
                  wordWrap: f,
                  setWordWrap: g,
                  className: a()(eu.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eI = n(863922),
    ey = n(822074),
    eS = n(534890),
    ev = n(442433),
    eN = n(640708),
    e_ = n(941971),
    eT = n(707539),
    ej = n(576705),
    eb = n(222823),
    eR = n(340833),
    eO = n(913642),
    eL = n(935208),
    eM = n(453302);
n(321073);
var ew = n(97808),
    ek = n(778712),
    eP = n(707606),
    eD = n(403362),
    eU = n(922704);
let eG = (0, eP.A)((e) => {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: eU.pO })
            : (0, i.jsx)("div", {
                  className: eU.pO,
                  children: (0, i.jsx)(ew.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: ek._3.SIZE_16,
                      className: eU.pO,
                  }),
              });
    }),
    eV = (e) => {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: s = 2, guildId: r } = e,
            { totalSize: a, knownSize: o } = t;
        if (a < l) return null;
        let u = c()(n)
                .filter(eD.Vq)
                .take(s)
                .map((e) => (0, i.jsx)(eG, { member: e, guildId: r }, e.id))
                .value(),
            d = a - o;
        for (let e = 0; e < d && u.length < s; e++)
            u.push((0, i.jsx)(eG, { empty: !0, guildId: r }, `empty-member-${e}`));
        let h = Math.max(Math.min(a - u.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            u.push((0, i.jsx)(eG, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: eU.iE,
            children: (0, i.jsxs)("div", {
                className: eU.S3,
                children: [u, h > 1 ? (0, i.jsxs)("div", { className: eU.Hi, children: ["+", h] }) : null],
            }),
        });
    };
var eF = n(303727),
    eH = n(490334);
function eB() {
    return (0, i.jsxs)("div", {
        className: eH.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eH.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: eH.Kk,
                        children: (0, i.jsx)(A.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eH.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(eF.A, { className: eH.uf }),
                ],
            }),
            (0, i.jsx)(E.D, {
                className: eH.wx,
                variant: "heading-xl/semibold",
                children: ec.intl.string(ec.t.yJHJei),
            }),
            (0, i.jsx)(C.E, {
                className: eH.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ec.intl.string(ec.t.p2dIh6),
            }),
        ],
    });
}
var eW = n(652215),
    eK = n(670455),
    ez = n(156700);
function eZ(e) {
    let { summary: t, channel: l, members: r, guildId: a, unread: o, onClick: c } = e,
        [u, h] = s.useState(!1),
        m = (0, eT.aK)(eL.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([ey.A], () => ey.A.summaryFeedback(t)),
        f = (e, n) => {
            e.stopPropagation(), (0, eM.A)({ summary: t, channel: l, rating: n });
        },
        x = ej.A.can(eW.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(g.D, {
        className: ez.kL,
        onClick: c,
        onContextMenu: (e) => {
            x &&
                (0, ev.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, i.jsx)(e_.A, { hovered: u, unread: o, className: ez.dM }),
            (0, i.jsx)("div", {
                className: ez.uV,
                children: (0, i.jsxs)("div", {
                    className: ez.Hw,
                    children: [
                        (0, i.jsx)(C.E, {
                            className: ez.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: m,
                        }),
                        (0, i.jsx)(eN.A, { height: 4, width: 4, "aria-hidden": "true", className: ez.Om }),
                        (0, i.jsx)(eS.o, { size: "xxs", color: "currentColor", className: ez.Kk }),
                        (0, i.jsx)(C.E, {
                            className: ez.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eN.A, { height: 4, width: 4, "aria-hidden": "true", className: ez.Om }),
                                    (0, i.jsx)(eV, {
                                        partySize: { knownSize: r.length, totalSize: r.length },
                                        maxAvatarsShown: 3,
                                        members: r,
                                        guildId: a,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            u &&
                null == p &&
                (0, i.jsxs)("div", {
                    className: ez.p_,
                    children: [
                        (0, i.jsx)(g.D, {
                            onClick: (e) => f(e, eK.P0.GOOD),
                            children: (0, i.jsx)(eO.A, { className: ez.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(g.D, {
                            onClick: (e) => f(e, eK.P0.BAD),
                            children: (0, i.jsx)(eR.A, { className: ez.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(C.E, { color: "text-strong", variant: "text-sm/semibold", className: ez.DD, children: t.topic }),
            (0, i.jsx)(C.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: ez.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eY(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: a } = e,
        o = (0, d.bG)([eb.Ay], () => eb.Ay.getOldestUnreadMessageId(l.id)),
        c = s.useCallback(
            (e) => {
                r(e), a(!1);
            },
            [r, a],
        );
    return t.length < 1
        ? (0, i.jsx)(eB, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, i.jsx)(
                      eZ,
                      {
                          summary: e,
                          channel: l,
                          members: s,
                          guildId: l.guild_id,
                          unread: null != o && eL.default.compare(e.endId, o) > 0,
                          onClick: () => c(t),
                      },
                      t,
                  );
              }),
          });
}
var eq = n(885386),
    eJ = n(113494),
    e$ = n(782134),
    eX = n(775602),
    eQ = n(228366),
    e0 = n(713021),
    e1 = n(745601),
    e2 = n(20504),
    e6 = n(625494),
    e3 = n(927813),
    e7 = n(824744);
n(508300);
var e4 = n(661531),
    e5 = n(602853),
    e8 = n(765671);
function e9(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var te = n(998304),
    tt = n(284009),
    tn = n.n(tt),
    tl = n(722872);
class ti {
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
              ? tl.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : tl.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
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
var tr = n(614108);
let ta = [0, 0, 0, 0, 0];
function to(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function tc(e) {
    var t, n, l, i;
    let { context: s, devicePixelRatio: r, canvasHeight: a, segmentValue: o, segmentIndex: c, constrainMin: u } = e,
        d = u ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * c * r),
        (n = (a / 2 - d / 2) * r),
        (l = d * r),
        (i = +r),
        s.moveTo(t, n + i),
        s.lineTo(t, n + l - i),
        s.arc(t + i, n + l - i, i, Math.PI, 0, !0),
        s.lineTo(t + 2 * i, n + i),
        s.arc(t + i, n + i, i, 0, Math.PI, !0),
        s.closePath());
}
function tu(e, t, n) {
    let [l, i] = s.useState(e),
        [r, a] = s.useState(e),
        o = s.useRef(r);
    return (
        s.useLayoutEffect(() => {
            o.current = r;
        }),
        s.useLayoutEffect(() => {
            i(o.current), a(e);
        }, [e, t, n]),
        [l, r]
    );
}
function td(e, t, n, l) {
    if (null == l) return [t, !1];
    let i = Math.min((n - l) / 200, 1);
    return 1 === i ? [t, !1] : [(0, te.De)(e, t, i), !0];
}
function th(e) {
    let t,
        n,
        {
            className: l,
            waveform: r,
            currentTime: o,
            duration: c,
            played: u,
            playing: d,
            onDrag: h,
            onDragStart: m,
            onDragEnd: p,
        } = e,
        { ref: f, width: g } = (0, e8.Ay)(),
        x = s.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((c <= 0.5 ? 40 : c >= 45 ? 294 : ((Math.min(c, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [c],
        ),
        A = s.useRef(void 0),
        C =
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
                    })(r),
                [r],
            )),
            (n = s.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(g),
                [g],
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
                                    l = [],
                                    i = 0;
                                for (; l.length < t; ) {
                                    let t = Math.round((l.length + 1) * n),
                                        s = 0,
                                        r = 0;
                                    for (let n = i; n < t && n < e.length; n++) (s += e[n]), r++;
                                    (l[l.length] = s / r), (i = t);
                                }
                                return l;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? ta,
                [t, n],
            )),
        E = s.useRef(u),
        I = s.useRef(d),
        y = s.useRef(null),
        S = window.devicePixelRatio,
        {
            lastBackgroundFillColor: v,
            backgroundFillColor: N,
            lastActiveFillColor: _,
            activeFillColor: T,
            lastInactiveFillColor: j,
            inactiveFillColor: b,
        } = (function (e, t) {
            let n = (0, e5.r)(e4.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, e5.r)(e4.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, e5.r)(e4.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e5.r)(e4.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, e5.r)(e4.A.unsafe_rawColors.WHITE).hex(),
                a = t ? s : n,
                [o, c] = tu(a, t, e),
                [u, d] = tu(t ? r : e ? i : l, t, e),
                [h, m] = tu(e ? a : l, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: c,
                lastActiveFillColor: u,
                activeFillColor: d,
                lastInactiveFillColor: h,
                inactiveFillColor: m,
            };
        })(u, d),
        R = { currentTime: o, duration: c, played: u },
        O = s.useRef(R);
    s.useEffect(() => {
        O.current = R;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = O.current,
                l = to({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            A.current = C.map((e, t) => new ti(t < l ? e : 0));
        }, [C]),
        s.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = to({ showAll: !u, currentTime: o, duration: c, numSegments: C.length });
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                if (n < t) {
                    l.animateTo(C[n]);
                    continue;
                }
                l.reset();
            }
        }, [C, o, c, u]),
        s.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let l = f.current,
                        i = l?.getContext("2d"),
                        s = A.current;
                    if (null == l || null == i || null == s) return;
                    let r = !1;
                    (E.current !== u || I.current !== d) && ((E.current = u), (I.current = d), (y.current = n)),
                        null != y.current && n > y.current + 200 && (y.current = null);
                    let a = l.height / S;
                    i.clearRect(0, 0, l.width, l.height), i.beginPath();
                    let [o, c] = td(v, N, n, y.current);
                    (r = r || c), (i.fillStyle = o);
                    for (let e = 0; e < C.length; e++)
                        tc({
                            context: i,
                            devicePixelRatio: S,
                            canvasHeight: a,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [h, m] = td(j, b, n, y.current);
                    r = r || m;
                    let [p, g] = td(_, T, n, y.current);
                    r = r || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? h : p),
                            tc({
                                context: i,
                                devicePixelRatio: S,
                                canvasHeight: a,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (r = r || t.isAnimating()),
                            i.fill();
                    }
                    r && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [f, S, C, g, o, c, u, d, v, N, _, T, j, b]);
    let [, L] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: l, onDragEnd: i } = e,
            [r, a] = s.useState(!1);
        return (
            s.useEffect(() => {
                if (r)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", l),
                        () => {
                            window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l);
                        }
                    );
                function e() {
                    i?.(), a(!1);
                }
                function l(e) {
                    let l = t.current;
                    null != l && n?.(e9(l, e));
                }
            }, [t, r, i, n]),
            [
                r,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (a(!0), l?.(), n?.(e9(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: f, onDrag: h, onDragStart: m, onDragEnd: p });
    return (0, i.jsx)("canvas", {
        onMouseDown: L,
        className: a()(tr.J, l),
        style: { width: x },
        ref: f,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var tm = n(132246);
let tp = s.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function tf(e) {
    let { played: t, duration: n, currentTime: l } = e,
        s = null == n ? "--:--" : t ? (0, F.rB)(Math.ceil(n - l)) : (0, F.rB)(Math.ceil(n));
    return (0, i.jsx)(C.E, { variant: "text-sm/normal", className: tm.p0, tabularNumbers: !0, children: s });
}
let tg = s.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: r,
            onMute: o,
            waveform: c,
            durationSecs: u,
            onVolumeShow: h,
            onVolumeHide: m,
            onPlay: p,
            onPause: f,
            onError: x,
            playbackCacheKey: A,
        } = e,
        E = s.useRef(null),
        I = s.useMemo(() => (null != A ? e0.Ay.getPlaybackPosition(A) : 0), [A]),
        y = (0, d.bG)([e0.Ay], () => e0.Ay.getPlaybackRate(e0.k0.VOICE_MESSAGE)),
        [S, v] = s.useState(I > 0),
        [N, _] = s.useState(I),
        [T, j] = s.useState(u),
        [b, R] = s.useState(!1),
        [O, L] = s.useState(!1),
        [M, w] = s.useState(!1),
        [k, P] = s.useState(!1),
        [D, U] = s.useState("none"),
        [G, V] = s.useState(() => ("function" == typeof l ? l() : l)),
        F = s.useRef(void 0),
        H = s.useCallback(() => {
            L((e) => !e), P(!0);
        }, []),
        B = s.useCallback(() => {
            U("metadata");
        }, []),
        W = s.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || j(t);
        }, []),
        K = s.useCallback(
            (e) => {
                null != u &&
                    null != A &&
                    eQ.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: A, position: e, duration: u });
            },
            [A, u],
        ),
        z = s.useCallback(() => {
            L(!1),
                null == F.current &&
                    (F.current = setTimeout(() => {
                        v(!1), P(!1), (F.current = void 0);
                    }, 500));
        }, []),
        Z = s.useCallback(() => {
            M || (K(0), z());
        }, [z, M, K]),
        Y = s.useCallback((e) => {
            let t = E.current;
            null != t && (_(e), (t.currentTime = e), v(!0));
        }, []),
        q = s.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            x?.(t);
        }, [x]),
        J = s.useCallback(
            (e) => {
                let t = (0, e7.w)(e, 1);
                R(0 === t), V(t), r?.(t);
            },
            [r],
        ),
        $ = s.useCallback(() => {
            R(!b), o?.(!b);
        }, [b, o]),
        X = s.useCallback(() => {
            w(!0);
        }, []),
        Q = s.useCallback(() => {
            w(!1), N === T && z(), K(N);
        }, [N, T, z, K]),
        ee = s.useCallback(
            (e) => {
                let t = E.current;
                null == T || null == t || (Y(e * T), clearTimeout(F.current), (F.current = void 0));
            },
            [T, Y],
        );
    s.useEffect(() => {
        !S && O && v(!0);
    }, [O, S]);
    let et = s.useRef(null),
        en = { played: k, currentTime: N, onPause: f, onPlay: p },
        el = s.useRef(en);
    s.useEffect(() => {
        el.current = en;
    }),
        s.useEffect(() => {
            I > 0 && Y(I);
        }, [I, Y]),
        s.useEffect(() => {
            let e;
            return (
                O &&
                    !M &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, e3.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [O, M, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || O)
                if (O) (et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e3.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        l = et.current;
                    n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null);
                }
        }, [O, n, T, K]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = E.current;
                    null == n || (_(n.currentTime), O && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, O, _]),
        s.useEffect(() => {
            if (O)
                return (
                    e6._.dispatch(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e6._.subscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e6._.unsubscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && L(!1);
            }
        }, [n, O, L]);
    let ei = O ? eJ.E : e$.u,
        es = O ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        er = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: y }),
        ea = `${y.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tp, {
                      ref: E,
                      className: tm.Zn,
                      src: n,
                      preload: D,
                      playing: O && !M,
                      onEnded: Z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: b,
                      volume: G,
                      playbackRate: y,
                  }),
              })
            : (0, i.jsx)(e1.A, {
                  ref: E,
                  className: tm.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: Z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: b,
                  volume: G,
                  playbackRate: y,
                  playing: O && !M,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([eX.A], () => eX.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(tm.kL, { [tm.he]: O }),
        onMouseEnter: B,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: tm.Kl,
                children: (0, i.jsx)("div", { className: a()(tm.fq, { [tm.VN]: eo }) }),
            }),
            (0, i.jsx)(g.D, {
                className: tm.k0,
                onClick: H,
                "aria-label": es,
                children: (0, i.jsx)(ei, { className: tm.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(th, {
                className: tm.ou,
                waveform: c,
                currentTime: N,
                duration: T ?? 1,
                playing: O,
                played: S,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tf, { played: S, currentTime: N, duration: T }),
            (0, i.jsx)(g.D, {
                className: tm.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (ts.indexOf(y) + 1) % ts.length),
                        void ((e = ts[n]),
                        (t = e0.k0.VOICE_MESSAGE),
                        eQ.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, i.jsx)(C.E, { variant: "text-xs/semibold", className: tm.Sn, children: ea }),
            }),
            (0, i.jsx)(e2.A, {
                className: tm.bk,
                iconClassName: tm._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tm.MQ,
                muted: b,
                value: (0, e7.M)(G, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: J,
                onToggleMute: $,
                onVolumeShow: h,
                onVolumeHide: m,
            }),
            t,
        ],
    });
});
var tx = n(287809),
    tA = n(147925),
    tC = n(174459),
    tE = n(587481),
    tI = n(838541),
    ty = n(521732),
    tS = n(650583),
    tv = n(708147);
let tN = { delay: 300, position: "top" },
    t_ = (e) => (t) => {
        e?.(t), (0, tE.ls)(t);
    },
    tT = (e) => (t) => {
        e?.(t), (0, tE.y5)(t);
    };
function tj(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
        className: tv.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tS.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)("span", { className: tv.k_, children: ec.intl.string(ec.t.fSiQ3A) }),
            (0, i.jsx)("span", { className: tv.a7, children: t }),
        ],
    });
}
function tb(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: r,
            alt: o,
            renderAdjacentContent: c,
            renderOverlayContent: u,
            disableAltTextDisplay: d = !1,
            hiddenSpoilers: p,
            mosaicStyleAlt: f,
            mediaLayoutType: g,
            reducedSizeAltTextButton: x,
            ...A
        } = e,
        C = t_(t),
        E = tT(n);
    (l = null == l ? tE.v1 : l), (r = null == r ? tE.uj : r);
    let [I, y] = s.useState(!0),
        [S, v] = s.useState(!1),
        N = g === tI.dG.MOSAIC || !0 === f,
        _ = (I || S) && !d && eq._z.getSetting() && null != o && "" !== o && !0 !== p,
        T = s.useRef(null);
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(B.A, {
                ...A,
                alt: o,
                autoMute: r,
                mediaLayoutType: g,
                onControlsHide: () => y(!1),
                onControlsShow: () => y(!0),
                onMute: E,
                onVolumeChange: C,
                renderLinkComponent: tw,
                renderOverlayContent: u,
                volume: l,
            }),
            null != c && c(),
            N &&
                _ &&
                (0, i.jsx)("div", {
                    className: tv.NO,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: T,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tj, { altText: o, altButtonRef: T }),
                        children: (e) =>
                            (0, i.jsx)(m.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: T,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    onMouseEnter: () => v(!0),
                                    onMouseLeave: () => v(!1),
                                    className: a()(tv.DV, { [tv.yZ]: !0, [tv.I5]: x }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !N && _ && (0, i.jsx)("span", { className: tv.R5, children: o }),
        ],
    });
}
function tR(e) {
    return (0, i.jsx)(tb, { ...e });
}
function tO(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: r,
            onVolumeHide: a,
            renderAdjacentContent: o,
            ...c
        } = e,
        u = t_(t),
        d = tT(l);
    return (
        (n = null == n ? tE.v1 : n),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(H, {
                    ...c,
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: r,
                    onVolumeHide: a,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: tw,
                }),
                null != o && o(),
            ],
        })
    );
}
function tL(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...s } = e,
        r = t_(t),
        a = tT(l);
    return (n = null == n ? tE.v1 : n), (0, i.jsx)(tg, { ...s, onVolumeChange: r, onMute: a, volume: n });
}
function tM(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: c = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: f,
        } = e,
        g = d === tI.dG.MOSAIC || !0 === f,
        x = !c && eq._z.getSetting() && null != t && "" !== t && !0 !== n,
        A = s.createRef();
    return (0, i.jsxs)("div", {
        className: a()(tv.fo, r),
        children: [
            (0, i.jsxs)("div", {
                className: a()(tv.ZS, o),
                style: p,
                children: [(0, i.jsx)(L, { ...e }), null != l && l()],
            }),
            g &&
                x &&
                (0, i.jsx)("div", {
                    className: tv.Y1,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: A,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tj, { altText: t, altButtonRef: A }),
                        children: (e) =>
                            (0, i.jsx)(m.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: A,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: a()(tv.DV, { [tv.I5]: u }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !g && x && (0, i.jsx)("span", { className: tv.R5, children: t }),
        ],
    });
}
function tw(e) {
    return (0, i.jsx)(M.A, { ...e });
}
function tk(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(eE, { ...n }), null != t && t()] });
}
function tP(e) {
    return (0, i.jsx)(P.A, { ...e });
}
var tD = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tU = (e) => {
        let { type: t = 0, onClick: n, className: l } = e;
        return (0, i.jsx)(D.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)("div", {
                          onClick: n,
                          className: a()(tv.Sg, l),
                          children: [
                              (0, i.jsx)("div", {
                                  className: tv.$I,
                                  children: (function (e) {
                                      switch (e) {
                                          case 0:
                                              return ec.intl.string(ec.t["4EvBbw"]);
                                          case 1:
                                              return ec.intl.string(ec.t["1J6Xq7"]);
                                          default:
                                              return (0, eD.xb)(e);
                                      }
                                  })(t),
                              }),
                              null != n
                                  ? (0, i.jsx)(m.vN, {
                                        offset: -2,
                                        children: (0, i.jsx)(p.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: (function (e) {
                                                switch (e) {
                                                    case 0:
                                                        return ec.intl.string(ec.t.gpoQsB);
                                                    case 1:
                                                        return ec.intl.string(ec.t.k3RM8z);
                                                    default:
                                                        return (0, eD.xb)(e);
                                                }
                                            })(t),
                                            onClick: n,
                                        }),
                                    })
                                  : (0, i.jsx)(f.y, {
                                        type: f.y.Type.PULSING_ELLIPSIS,
                                        className: tv.u1,
                                        itemClassName: tv.$N,
                                    }),
                          ],
                      }),
        });
    },
    tG = (e) => {
        let { onClick: t, loading: n, className: l } = e;
        return (0, i.jsx)(D.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)(g.D, {
                          className: a()(tv._5, l),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, i.jsx)("div", { className: tv.$I, children: ec.intl.string(ec.t["1zUvlw"]) }),
                              n
                                  ? (0, i.jsx)(f.y, {
                                        type: f.y.Type.PULSING_ELLIPSIS,
                                        className: tv.u1,
                                        itemClassName: tv.$N,
                                    })
                                  : (0, i.jsx)("div", {
                                        className: a()(tv.hQ, tv.d3),
                                        children: ec.intl.string(ec.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function tV(e) {
    let { content: t, channelId: n } = e,
        [l] = s.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = s.useCallback(() => {
            let e = eb.Ay.ackMessageId(n);
            null != e
                ? S.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: n,
                      messageId: eL.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, v.ack)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = s.useContext(D.Y);
    return c
        ? null
        : (0, i.jsxs)("div", {
              className: a()(tv.eb, { [tv.y7]: c }),
              children: [
                  (0, i.jsx)(m.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: tv.$I,
                          onClick: r,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: tv.Ln, children: t }),
                      }),
                  }),
                  (0, i.jsx)(m.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, i.jsx)("div", {
                          className: tv._o,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tv.hQ,
                              children: [
                                  (0, i.jsx)("span", { className: tv.vE, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, i.jsx)(x.M, { size: "md", color: "currentColor", className: tv.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tF(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = s.useContext(D.Y),
        [o, h] = s.useState(null),
        m = s.useRef(null),
        [p, f] = s.useState(null),
        N = s.useRef(null),
        _ = (0, d.yK)([ey.A], () => ey.A.summaries(t.id) ?? [], [t]),
        T = (0, k.A)(_);
    s.useEffect(() => {
        c().isEqual(T, _) ||
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [_, T, t.guild_id, t.id, t.type]);
    let j = (0, d.bG)(
            [tx.default],
            () => _?.map((e) => e.people?.map((e) => tx.default.getUser(e) ?? null).filter(eD.Vq)) ?? [],
            [_],
            tH,
        ),
        b = (0, d.bG)([ey.A], () => ey.A.visibleSummaryIndex()) ?? -1,
        R = _?.[b]?.topic;
    null == R && null == o && _?.length >= 1 && (R = _[0]?.topic);
    let O = s.useMemo(
            () =>
                c().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        L = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, eI.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(
            (e) => {
                L(), O(e);
            },
            [O, L],
        ),
        [P, U] = s.useState(!1),
        V = s.useCallback(() => {
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!P);
        }, [P, _, U, t]),
        F = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ty.eh.PILL_DROPDOWN,
                    i = _[e];
                if (null == i) return;
                (0, eI.sK)(t.id, i.id), (0, eI.C6)(t.id, i.id);
                let s = () => {
                    l.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            l.addAutomaticAnchorCallback(M, !1);
                        }, 100);
                };
                l.removeAutomaticAnchorCallback(M),
                    l.addScrollCompleteCallback(s),
                    tC.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    S.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: w.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [_, t, M, l],
        ),
        H = s.useCallback((e) => {
            U(e);
            let t = N.current?.scrollTop;
            null != t && f(t);
        }, []);
    s.useEffect(() => {
        null != p && P && N.current?.scrollTo({ top: p });
    }, [p, P]);
    let B = s.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && m.current?.contains(e.target)) ||
                (P &&
                    tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: _.length,
                        message_counts: _.map((e) => e.count),
                        start_message_ids: _.map((e) => e.startId),
                        end_message_ids: _.map((e) => e.endId),
                        num_participants: _.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                H(!1));
        },
        [P, _, t, H],
    );
    s.useEffect(
        () => (
            l.addAutomaticAnchorCallback(M),
            () => {
                l.removeAutomaticAnchorCallback(M);
            }
        ),
        [l, M],
    ),
        s.useEffect(() => {
            (0, eI.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", B),
                () => {
                    document.removeEventListener("mousedown", B);
                }
            ),
            [B],
        );
    let W = s.useMemo(
            () => (0, i.jsx)(eY, { channel: t, summaries: _, summariesMembers: j, selectTopic: F, setOpen: H }),
            [_, j, F, H, t],
        ),
        K = s.useCallback(() => {
            let e = eb.Ay.ackMessageId(t.id);
            null != e
                ? S.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eL.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, v.ack)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = ec.intl.string(ec.t["38qwgO"]);
    return (
        _.length > 0 && (Z = "" === R || null == R ? ec.intl.string(ec.t.DwnFuG) : R),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: m,
                  className: a()(tv.dw, tv.jh),
                  children: [
                      (0, i.jsx)("div", {
                          className: tv.qm,
                          children: (0, i.jsx)(g.D, {
                              className: tv.TQ,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: V,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [tv.hN]: !P, [tv.Ap]: P }),
                                  children: [
                                      (0, i.jsx)(A.K, { size: "xs", color: "currentColor", className: tv.Vd }),
                                      (0, i.jsx)(C.E, {
                                          variant: "text-sm/medium",
                                          className: a()(tv.$U, tv.lc),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tA.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tA.A.Directions.DOWN,
                                          className: tv.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(g.D, { onClick: K, className: tv.ij, children: n }),
                      (0, i.jsxs)(g.D, {
                          onClick: z,
                          className: a()(tv.hQ, tv.NX),
                          children: [
                              (0, i.jsx)("div", { className: tv.$U, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, i.jsx)(x.M, { size: "md", color: "currentColor", className: tv.t3 }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: tv.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tv.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tv.Ne,
                                              children: [
                                                  (0, i.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tv.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: tv.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(g.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: V,
                                              className: tv.oX,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: N, className: tv.Pe, fade: !0, children: W }),
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
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tB(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = s.useContext(D.Y),
        [r, o] = s.useState(null),
        h = s.useRef(null),
        [m, p] = s.useState(null),
        f = s.useRef(null),
        x = (0, d.yK)([ey.A], () => ey.A.summaries(t.id) ?? [], [t]),
        v = (0, k.A)(x);
    s.useEffect(() => {
        c().isEqual(v, x) ||
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: x.length,
                message_counts: x.map((e) => e.count),
                start_message_ids: x.map((e) => e.startId),
                end_message_ids: x.map((e) => e.endId),
                num_participants: x.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [x, v, t.guild_id, t.id, t.type]);
    let N = (0, d.bG)(
            [tx.default],
            () => x?.map((e) => e.people?.map((e) => tx.default.getUser(e) ?? null).filter(eD.Vq)) ?? [],
            [x],
            tH,
        ),
        _ = (0, d.bG)([ey.A], () => ey.A.visibleSummaryIndex()) ?? -1,
        T = x?.[_]?.topic;
    null == T && null == r && x?.length >= 1 && (T = x[0]?.topic);
    let j = s.useMemo(() => c().get(x, _ - 1), [_, x]),
        b = s.useMemo(() => c().get(x, _ + 1), [_, x]),
        R = s.useMemo(
            () =>
                c().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        O = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, eI.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(
            (e) => {
                O(), R(e);
            },
            [R, O],
        ),
        [M, P] = s.useState(!1),
        U = s.useCallback(() => {
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !M,
                num_summaries: x.length,
                message_counts: x.map((e) => e.count),
                start_message_ids: x.map((e) => e.startId),
                end_message_ids: x.map((e) => e.endId),
                num_participants: x.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                P(!M);
        }, [M, x, P, t]),
        V = s.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ty.eh.PILL_DROPDOWN,
                    i = x[e];
                if (null == i) return;
                (0, eI.sK)(t.id, i.id), (0, eI.C6)(t.id, i.id);
                let s = () => {
                    n.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(L, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(L),
                    n.addScrollCompleteCallback(s),
                    tC.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: l,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    S.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: w.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [x, t, L, n],
        ),
        F = s.useCallback(() => {
            V(_ - 1, ty.eh.PILL_NEXT_ARROW);
        }, [V, _]),
        H = s.useCallback(() => {
            V(_ + 1, ty.eh.PILL_PREVIOUS_ARROW);
        }, [_, V]),
        B = s.useCallback((e) => {
            P(e);
            let t = f.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != m && M && f.current?.scrollTo({ top: m });
    }, [m, M]);
    let W = s.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (M &&
                    tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: x.length,
                        message_counts: x.map((e) => e.count),
                        start_message_ids: x.map((e) => e.startId),
                        end_message_ids: x.map((e) => e.endId),
                        num_participants: x.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                B(!1));
        },
        [M, x, t, B],
    );
    s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(L),
            () => {
                n.removeAutomaticAnchorCallback(L);
            }
        ),
        [n, L],
    ),
        s.useEffect(() => {
            (0, eI.$T)(t.id);
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
    let K = s.useMemo(
        () => (0, i.jsx)(eY, { channel: t, summaries: x, summariesMembers: N, selectTopic: V, setOpen: B }),
        [x, N, V, B, t],
    );
    if (!(0, d.bG)([ey.A], () => ey.A.shouldShowTopicsBar())) return null;
    let z = ec.intl.string(ec.t["38qwgO"]);
    return (
        x.length > 0 && (z = "" === T || null == T ? ec.intl.string(ec.t.DwnFuG) : T),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: h,
                  className: a()(tv.$T, tv.jh),
                  children: [
                      (0, i.jsxs)("div", {
                          className: tv.sE,
                          children: [
                              (0, i.jsx)(g.D, {
                                  className: tv.LP,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [tv.Nv]: !M, [tv.An]: M }),
                                      children: [
                                          (0, i.jsx)(A.K, { size: "xs", color: "currentColor", className: tv.Np }),
                                          (0, i.jsx)(C.E, { className: tv.r1, variant: "text-sm/medium", children: z }),
                                          (0, i.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.DOWN,
                                              className: tv._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: tv.Yk,
                                  children: [
                                      (0, i.jsx)(g.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: H,
                                          className: a()(tv.ZM, tv.vz, { [tv.jf]: null == b }),
                                          children: (0, i.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(g.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: F,
                                          className: a()(tv.ZM, tv.mt, { [tv.jf]: null == j }),
                                          children: (0, i.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      M &&
                          (0, i.jsxs)("div", {
                              className: tv.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tv.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tv.Ne,
                                              children: [
                                                  (0, i.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tv.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: tv.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(g.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: U,
                                              className: tv.oX,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: f, className: tv.Pe, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
let tW = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, i.jsxs)("div", {
            className: tv.YL,
            children: [
                (0, i.jsx)(C.E, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: tv.Ld,
                    children: e,
                }),
                t &&
                    (0, i.jsx)(C.E, {
                        className: tv.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: ec.intl.string(ec.t["515vjG"]),
                    }),
            ],
        });
    },
    tK = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(tv.jC, n), children: t });
    },
    tz = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(tK, {
            className: t,
            children: (0, i.jsx)("div", { className: tv.wH, children: (0, i.jsx)("div", { className: tv.j3 }) }),
        });
    };
