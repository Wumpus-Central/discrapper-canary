"use strict";
n.d(t, {
    ks: () => tD,
    UK: () => tH,
    Ez: () => tV,
    LL: () => tk,
    OZ: () => tF,
    yR: () => tW,
    Uq: () => tK,
    $o: () => tw,
    bU: () => tM,
    Uk: () => tb,
    GN: () => tG,
    Y0: () => tz,
    P$: () => tL,
    _d: () => tO,
    gL: () => tR,
    Dk: () => tP,
    Ab: () => tU,
});
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(735438),
    c = n.n(o),
    u = n(621466),
    d = n(17928),
    h = n(922016),
    m = n(187322),
    p = n(821609),
    f = n(289873),
    g = n(939249),
    _ = n(582394),
    x = n(306788),
    C = n(834730),
    A = n(534514),
    E = n(789645),
    I = n(364522),
    v = n(720149),
    y = n(334738),
    b = n(192308),
    S = n(267102),
    N = n(619517),
    j = n(256905),
    T = n(536763),
    w = n(218394);
class R extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, T.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, b.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, b.closeModal)(j.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: i,
            src: s,
            original: a,
            width: r,
            height: o,
            animated: c,
            srcIsAnimated: d,
            children: h,
            shouldHideMediaOptions: m = !1,
            sourceMetadata: p,
            analyticsSource: f,
            contentType: g,
            originalContentType: _,
        } = this.props;
        (0, u.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, j.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: s,
                        width: r,
                        height: o,
                        type: "IMAGE",
                        alt: i,
                        contentType: g,
                        originalContentType: _,
                        zoomThumbnailPlaceholder: n,
                        animated: c,
                        srcIsAnimated: d,
                        children: h,
                        trigger: l,
                        sourceMetadata: p,
                        original: a ?? s,
                    },
                ],
                shouldHideMediaOptions: m,
                location: f ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(N.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function L(e) {
    let t = (0, S.Us)(),
        n = (0, w.j)();
    return (0, i.jsx)(R, { ...e, isWindowFocused: n, appContext: t });
}
var k = n(9578),
    M = n(56562),
    O = n(475743),
    P = n(564771),
    D = n(692051),
    U = n(915089),
    V = n(611371),
    G = n(453771),
    F = n(994064);
class B extends s.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: s,
            volume: a,
            renderLinkComponent: r,
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
            fileSize: (0, G.Hb)(t),
            fileSizeBytes: t,
            type: F.Ay.Types.AUDIO,
            className: l,
            playable: s,
            volume: a,
            onMute: h,
            autoMute: d,
            onVolumeChange: o,
            onVolumeShow: c,
            onVolumeHide: u,
            renderLinkComponent: r,
            mimeType: m,
            onPlay: p,
        });
    }
}
var H = n(248643),
    W = n(156828),
    K = n(990078),
    z = n(408278),
    Z = n(900797),
    q = n(847374),
    J = n(305866),
    Y = n(732771),
    X = n(387758),
    $ = n(550079),
    Q = n(477782),
    ee = n(32880),
    et = n(365199),
    en = n(349288),
    el = n(26430),
    ei = n(224640),
    es = n(417964),
    ea = n(639169),
    er = n(157941),
    eo = n(255438),
    ec = n(985018),
    eu = n(460224),
    ed = n(429128);
function eh(e) {
    let { text: t, language: l, wordWrap: s } = e,
        a = () => (0, i.jsx)("code", { className: r()(ed.kw, eu.Xb, "hljs", { [eu.Zw]: s }), children: t });
    return (0, i.jsx)("pre", {
        children: (0, i.jsx)(er.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: l,
            className: r()(ed.kw, eu.Xb, "hljs", { [eu.Zw]: s }),
            children: (0, i.jsx)(W.c2, {
                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(l)) return a();
                    let n = e.highlight(l, t, !0);
                    return null == n
                        ? a()
                        : (0, i.jsx)("code", {
                              className: r()(ed.kw, eu.Xb, "hljs", n.language, { [eu.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => a(),
            }),
        }),
    });
}
function em(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        a = ec.intl.formatToPlainString(s ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: l }),
        r = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${a})`;
    return (0, i.jsx)("div", {
        className: eu.py,
        children: (0, i.jsx)(K.m, {
            text: r,
            children: (0, i.jsx)(z.K, {
                icon: t ? Z.t : q.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": r,
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
        a = s.useRef(null);
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(J.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: eu.md,
                    children: (0, i.jsxs)(Y.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), l();
                        },
                        options: Array.from(ea.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)(Y.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                            (0, i.jsx)(Y.X2, {}),
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
                    children: (0, i.jsx)(X.G, { size: "sm", color: "currentColor", ref: a }),
                }),
            }),
    });
}
function eg(e) {
    let { wordWrap: t, setWordWrap: n, url: l, fileName: a } = e,
        r = s.useRef(null),
        o = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: r,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsx)($.W, {
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
                            children: (0, i.jsx)(et.j, { ref: r, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(en.Anchor, {
                ref: o,
                href: l,
                download: a,
                className: eu.op,
                children: (0, i.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function e_(e) {
    return (0, i.jsx)(K.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, i.jsx)(g.D, {
            className: eu.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, b.openModal)((t) => (0, i.jsx)(eC, { ...e, ...t }));
            },
            children: (0, i.jsx)(el._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function ex(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            fileContents: s,
            expanded: a,
            setExpanded: o,
            language: c,
            setLanguage: u,
            wordWrap: d,
            setWordWrap: h,
            bytesLeft: m,
            className: p,
        } = e,
        g = s?.split("\n"),
        _ = g?.length ?? 0,
        x = a ? 100 : 6,
        C = 0 === m,
        A = "";
    C && a && _ > x ? (A = "\n...") : C || (A = "..."),
        "" !== A &&
            (C
                ? (A += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: _ - x }))
                : (A += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eo.up)(m) })));
    let E = g?.slice(0, x).join("\n") + A,
        v = (0, es.sJ)(E),
        y = a || x < _;
    return (0, i.jsxs)("div", {
        className: r()(p, eu.kL),
        children: [
            (0, i.jsx)(I.Ip, {
                className: eu.FS,
                children:
                    null == s
                        ? (0, i.jsx)(f.y, { className: eu.u1 })
                        : (0, i.jsx)(eh, { text: v, language: c, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: eu.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    y ? (0, i.jsx)(em, { expanded: a, setExpanded: o, numLines: _, isWholeFile: C }) : null,
                    (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: eu.Kb }),
                    (0, i.jsx)(ef, { language: c, setLanguage: u, align: "top" }),
                    null != s
                        ? (0, i.jsx)(e_, {
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
            transitionState: a,
            language: r,
            wordWrap: o,
            fileContents: c,
            bytesLeft: u,
            onClose: d,
        } = e,
        [h, m] = s.useState(r),
        [p, g] = s.useState(o),
        _ = c ?? "";
    return (
        0 !== u && (_ += `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eo.up)(u) })}`),
        (0, i.jsx)(ei.d, {
            transitionState: a,
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: d,
            children: (0, i.jsxs)("div", {
                className: eu.jE,
                children: [
                    (0, i.jsx)(I.Ip, {
                        className: eu.ot,
                        children:
                            null == c
                                ? (0, i.jsx)(f.y, { className: eu.u1 })
                                : (0, i.jsx)(eh, { text: _, language: h, wordWrap: p }),
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
                                (0, i.jsx)(ef, { language: h, setLanguage: m, align: "bottom" }),
                                (0, i.jsx)(eg, { wordWrap: p, setWordWrap: g, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eA = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: a, className: o, onClick: c, onContextMenu: u } = e,
            [d, h] = s.useState(!1),
            [m, p] = s.useState(n.split(".").slice(-1)[0]),
            [f, g] = s.useState(!1),
            {
                fileContents: _,
                bytesLeft: x,
                hadError: C,
            } = (function (e, t) {
                let [n, l] = s.useState(!1),
                    [i, a] = s.useState(null),
                    [r, o] = s.useState(1);
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
                                    r = n.headers.get("content-length") ?? "1",
                                    c = parseInt(s.split("/")[1]) - parseInt(r);
                                a(0 === c ? i : i.slice(0, -1)), o(c), l(!1);
                            } catch (e) {
                                o(0), l(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: i, bytesLeft: r, hadError: n }
                );
            })(t, a);
        return C
            ? (0, i.jsx)(P.A, { url: t, fileName: n, fileSize: l, onClick: c, onContextMenu: u, className: o })
            : (0, i.jsx)(ex, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: _,
                  bytesLeft: x,
                  expanded: d,
                  setExpanded: h,
                  language: m,
                  setLanguage: p,
                  wordWrap: f,
                  setWordWrap: g,
                  className: r()(eu.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eE = n(863922),
    eI = n(822074),
    ev = n(534890),
    ey = n(442433),
    eb = n(640708),
    eS = n(941971),
    eN = n(707539),
    ej = n(576705),
    eT = n(222823),
    ew = n(340833),
    eR = n(913642),
    eL = n(935208),
    ek = n(798505);
n(321073);
var eM = n(97808),
    eO = n(778712),
    eP = n(707606),
    eD = n(403362),
    eU = n(922704);
let eV = (0, eP.A)((e) => {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: eU.pO })
            : (0, i.jsx)("div", {
                  className: eU.pO,
                  children: (0, i.jsx)(eM.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eO._3.SIZE_16,
                      className: eU.pO,
                  }),
              });
    }),
    eG = (e) => {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: s = 2, guildId: a } = e,
            { totalSize: r, knownSize: o } = t;
        if (r < l) return null;
        let u = c()(n)
                .filter(eD.Vq)
                .take(s)
                .map((e) => (0, i.jsx)(eV, { member: e, guildId: a }, e.id))
                .value(),
            d = r - o;
        for (let e = 0; e < d && u.length < s; e++)
            u.push((0, i.jsx)(eV, { empty: !0, guildId: a }, `empty-member-${e}`));
        let h = Math.max(Math.min(r - u.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            u.push((0, i.jsx)(eV, { member: e, guildId: a }, e.id));
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
    eB = n(490334);
function eH() {
    return (0, i.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eB.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: eB.Kk,
                        children: (0, i.jsx)(x.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eB.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(eF.A, { className: eB.uf }),
                ],
            }),
            (0, i.jsx)(A.D, {
                className: eB.wx,
                variant: "heading-xl/semibold",
                children: ec.intl.string(ec.t.yJHJei),
            }),
            (0, i.jsx)(C.E, {
                className: eB.Qq,
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
    let { summary: t, channel: l, members: a, guildId: r, unread: o, onClick: c } = e,
        [u, h] = s.useState(!1),
        m = (0, eN.aK)(eL.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([eI.A], () => eI.A.summaryFeedback(t)),
        f = (e, n) => {
            e.stopPropagation(), (0, ek.A)({ summary: t, channel: l, rating: n });
        },
        _ = ej.A.can(eW.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(g.D, {
        className: ez.kL,
        onClick: c,
        onContextMenu: (e) => {
            _ &&
                (0, ey.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, i.jsx)(eS.A, { hovered: u, unread: o, className: ez.dM }),
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
                        (0, i.jsx)(eb.A, { height: 4, width: 4, "aria-hidden": "true", className: ez.Om }),
                        (0, i.jsx)(ev.o, { size: "xxs", color: "currentColor", className: ez.Kk }),
                        (0, i.jsx)(C.E, {
                            className: ez.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        a.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eb.A, { height: 4, width: 4, "aria-hidden": "true", className: ez.Om }),
                                    (0, i.jsx)(eG, {
                                        partySize: { knownSize: a.length, totalSize: a.length },
                                        maxAvatarsShown: 3,
                                        members: a,
                                        guildId: r,
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
                            children: (0, i.jsx)(eR.A, { className: ez.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(g.D, {
                            onClick: (e) => f(e, eK.P0.BAD),
                            children: (0, i.jsx)(ew.A, { className: ez.O1, width: 12, height: 12 }),
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
function eq(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: a, setOpen: r } = e,
        o = (0, d.bG)([eT.Ay], () => eT.Ay.getOldestUnreadMessageId(l.id)),
        c = s.useCallback(
            (e) => {
                a(e), r(!1);
            },
            [a, r],
        );
    return t.length < 1
        ? (0, i.jsx)(eH, {})
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
var eJ = n(253932),
    eY = n(113494),
    eX = n(782134),
    e$ = n(775602),
    eQ = n(228366),
    e0 = n(713021),
    e1 = n(118019),
    e2 = n(20504),
    e6 = n(625494),
    e3 = n(927813),
    e4 = n(824744);
n(508300);
var e7 = n(661531),
    e8 = n(602853),
    e5 = n(765671);
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
var ta = n(614108);
let tr = [0, 0, 0, 0, 0];
function to(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function tc(e) {
    var t, n, l, i;
    let { context: s, devicePixelRatio: a, canvasHeight: r, segmentValue: o, segmentIndex: c, constrainMin: u } = e,
        d = u ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * c * a),
        (n = (r / 2 - d / 2) * a),
        (l = d * a),
        (i = +a),
        s.moveTo(t, n + i),
        s.lineTo(t, n + l - i),
        s.arc(t + i, n + l - i, i, Math.PI, 0, !0),
        s.lineTo(t + 2 * i, n + i),
        s.arc(t + i, n + i, i, 0, Math.PI, !0),
        s.closePath());
}
function tu(e, t, n) {
    let [l, i] = s.useState(e),
        [a, r] = s.useState(e),
        o = s.useRef(a);
    return (
        s.useLayoutEffect(() => {
            o.current = a;
        }),
        s.useLayoutEffect(() => {
            i(o.current), r(e);
        }, [e, t, n]),
        [l, a]
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
            waveform: a,
            currentTime: o,
            duration: c,
            played: u,
            playing: d,
            onDrag: h,
            onDragStart: m,
            onDragEnd: p,
        } = e,
        { ref: f, width: g } = (0, e5.Ay)(),
        _ = s.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((c <= 0.5 ? 40 : c >= 45 ? 294 : ((Math.min(c, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [c],
        ),
        x = s.useRef(void 0),
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
                    })(a),
                [a],
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
                                        a = 0;
                                    for (let n = i; n < t && n < e.length; n++) (s += e[n]), a++;
                                    (l[l.length] = s / a), (i = t);
                                }
                                return l;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? tr,
                [t, n],
            )),
        A = s.useRef(u),
        E = s.useRef(d),
        I = s.useRef(null),
        v = window.devicePixelRatio,
        {
            lastBackgroundFillColor: y,
            backgroundFillColor: b,
            lastActiveFillColor: S,
            activeFillColor: N,
            lastInactiveFillColor: j,
            inactiveFillColor: T,
        } = (function (e, t) {
            let n = (0, e8.r)(e7.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, e8.r)(e7.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, e8.r)(e7.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e8.r)(e7.A.unsafe_rawColors.BRAND_430).hex(),
                a = (0, e8.r)(e7.A.unsafe_rawColors.WHITE).hex(),
                r = t ? s : n,
                [o, c] = tu(r, t, e),
                [u, d] = tu(t ? a : e ? i : l, t, e),
                [h, m] = tu(e ? r : l, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: c,
                lastActiveFillColor: u,
                activeFillColor: d,
                lastInactiveFillColor: h,
                inactiveFillColor: m,
            };
        })(u, d),
        w = { currentTime: o, duration: c, played: u },
        R = s.useRef(w);
    s.useEffect(() => {
        R.current = w;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = R.current,
                l = to({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            x.current = C.map((e, t) => new ti(t < l ? e : 0));
        }, [C]),
        s.useEffect(() => {
            let e = x.current;
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
                        s = x.current;
                    if (null == l || null == i || null == s) return;
                    let a = !1;
                    (A.current !== u || E.current !== d) && ((A.current = u), (E.current = d), (I.current = n)),
                        null != I.current && n > I.current + 200 && (I.current = null);
                    let r = l.height / v;
                    i.clearRect(0, 0, l.width, l.height), i.beginPath();
                    let [o, c] = td(y, b, n, I.current);
                    (a = a || c), (i.fillStyle = o);
                    for (let e = 0; e < C.length; e++)
                        tc({
                            context: i,
                            devicePixelRatio: v,
                            canvasHeight: r,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [h, m] = td(j, T, n, I.current);
                    a = a || m;
                    let [p, g] = td(S, N, n, I.current);
                    a = a || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? h : p),
                            tc({
                                context: i,
                                devicePixelRatio: v,
                                canvasHeight: r,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (a = a || t.isAnimating()),
                            i.fill();
                    }
                    a && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [f, v, C, g, o, c, u, d, y, b, S, N, j, T]);
    let [, L] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: l, onDragEnd: i } = e,
            [a, r] = s.useState(!1);
        return (
            s.useEffect(() => {
                if (a)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", l),
                        () => {
                            window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l);
                        }
                    );
                function e() {
                    i?.(), r(!1);
                }
                function l(e) {
                    let l = t.current;
                    null != l && n?.(e9(l, e));
                }
            }, [t, a, i, n]),
            [
                a,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (r(!0), l?.(), n?.(e9(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: f, onDrag: h, onDragStart: m, onDragEnd: p });
    return (0, i.jsx)("canvas", {
        onMouseDown: L,
        className: r()(ta.J, l),
        style: { width: _ },
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
            onVolumeChange: a,
            onMute: o,
            waveform: c,
            durationSecs: u,
            onVolumeShow: h,
            onVolumeHide: m,
            onPlay: p,
            onPause: f,
            onError: _,
            playbackCacheKey: x,
        } = e,
        A = s.useRef(null),
        E = s.useMemo(() => (null != x ? e0.Ay.getPlaybackPosition(x) : 0), [x]),
        I = (0, d.bG)([e0.Ay], () => e0.Ay.getPlaybackRate(e0.k0.VOICE_MESSAGE)),
        [v, y] = s.useState(E > 0),
        [b, S] = s.useState(E),
        [N, j] = s.useState(u),
        [T, w] = s.useState(!1),
        [R, L] = s.useState(!1),
        [k, M] = s.useState(!1),
        [O, P] = s.useState(!1),
        [D, U] = s.useState("none"),
        [V, G] = s.useState(() => ("function" == typeof l ? l() : l)),
        F = s.useRef(void 0),
        B = s.useCallback(() => {
            L((e) => !e), P(!0);
        }, []),
        H = s.useCallback(() => {
            U("metadata");
        }, []),
        W = s.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || j(t);
        }, []),
        K = s.useCallback(
            (e) => {
                null != u &&
                    null != x &&
                    eQ.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: x, position: e, duration: u });
            },
            [x, u],
        ),
        z = s.useCallback(() => {
            L(!1),
                null == F.current &&
                    (F.current = setTimeout(() => {
                        y(!1), P(!1), (F.current = void 0);
                    }, 500));
        }, []),
        Z = s.useCallback(() => {
            k || (K(0), z());
        }, [z, k, K]),
        q = s.useCallback((e) => {
            let t = A.current;
            null != t && (S(e), (t.currentTime = e), y(!0));
        }, []),
        J = s.useCallback(() => {
            let e = A.current;
            if (null == e) return;
            let t = e.error;
            _?.(t);
        }, [_]),
        Y = s.useCallback(
            (e) => {
                let t = (0, e4.w)(e, 1);
                w(0 === t), G(t), a?.(t);
            },
            [a],
        ),
        X = s.useCallback(() => {
            w(!T), o?.(!T);
        }, [T, o]),
        $ = s.useCallback(() => {
            M(!0);
        }, []),
        Q = s.useCallback(() => {
            M(!1), b === N && z(), K(b);
        }, [b, N, z, K]),
        ee = s.useCallback(
            (e) => {
                let t = A.current;
                null == N || null == t || (q(e * N), clearTimeout(F.current), (F.current = void 0));
            },
            [N, q],
        );
    s.useEffect(() => {
        !v && R && y(!0);
    }, [R, v]);
    let et = s.useRef(null),
        en = { played: O, currentTime: b, onPause: f, onPlay: p },
        el = s.useRef(en);
    s.useEffect(() => {
        el.current = en;
    }),
        s.useEffect(() => {
            E > 0 && q(E);
        }, [E, q]),
        s.useEffect(() => {
            let e;
            return (
                R &&
                    !k &&
                    (e = setInterval(() => {
                        K(A.current?.currentTime ?? 0);
                    }, e3.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [R, k, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || R)
                if (R) (et.current = performance.now()), l?.(!1, t, (A.current?.duration ?? 0) * e3.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        l = et.current;
                    n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null);
                }
        }, [R, n, N, K]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = A.current;
                    null == n || (S(n.currentTime), R && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [A, R, S]),
        s.useEffect(() => {
            if (R)
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
        }, [n, R, L]);
    let ei = R ? eY.E : eX.u,
        es = R ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        ea = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: I }),
        er = `${I.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tp, {
                      ref: A,
                      className: tm.Zn,
                      src: n,
                      preload: D,
                      playing: R && !k,
                      onEnded: Z,
                      onLoadedMetadata: W,
                      onError: J,
                      muted: T,
                      volume: V,
                      playbackRate: I,
                  }),
              })
            : (0, i.jsx)(e1.A, {
                  ref: A,
                  className: tm.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: Z,
                  onLoadedMetadata: W,
                  onError: J,
                  muted: T,
                  volume: V,
                  playbackRate: I,
                  playing: R && !k,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([e$.A], () => e$.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: r()(tm.kL, { [tm.he]: R }),
        onMouseEnter: H,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: tm.Kl,
                children: (0, i.jsx)("div", { className: r()(tm.fq, { [tm.VN]: eo }) }),
            }),
            (0, i.jsx)(g.D, {
                className: tm.k0,
                onClick: B,
                "aria-label": es,
                children: (0, i.jsx)(ei, { className: tm.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(th, {
                className: tm.ou,
                waveform: c,
                currentTime: b,
                duration: N ?? 1,
                playing: R,
                played: v,
                onDrag: ee,
                onDragStart: $,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tf, { played: v, currentTime: b, duration: N }),
            (0, i.jsx)(g.D, {
                className: tm.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (ts.indexOf(I) + 1) % ts.length),
                        void ((e = ts[n]),
                        (t = e0.k0.VOICE_MESSAGE),
                        eQ.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": ea,
                children: (0, i.jsx)(C.E, { variant: "text-xs/semibold", className: tm.Sn, children: er }),
            }),
            (0, i.jsx)(e2.A, {
                className: tm.bk,
                iconClassName: tm._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tm.MQ,
                muted: T,
                value: (0, e4.M)(V, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Y,
                onToggleMute: X,
                onVolumeShow: h,
                onVolumeHide: m,
            }),
            t,
        ],
    });
});
var t_ = n(287809),
    tx = n(147925),
    tC = n(954571),
    tA = n(587481),
    tE = n(838541),
    tI = n(521732),
    tv = n(650583),
    ty = n(708147);
let tb = { delay: 300, position: "top" },
    tS = (e) => (t) => {
        e?.(t), (0, tA.ls)(t);
    },
    tN = (e) => (t) => {
        e?.(t), (0, tA.y5)(t);
    };
function tj(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
        className: ty.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tv.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)("span", { className: ty.k_, children: ec.intl.string(ec.t.fSiQ3A) }),
            (0, i.jsx)("span", { className: ty.a7, children: t }),
        ],
    });
}
function tT(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: a,
            alt: o,
            renderAdjacentContent: c,
            renderOverlayContent: u,
            disableAltTextDisplay: d = !1,
            hiddenSpoilers: p,
            mosaicStyleAlt: f,
            mediaLayoutType: g,
            reducedSizeAltTextButton: _,
            ...x
        } = e,
        C = tS(t),
        A = tN(n);
    (l = null == l ? tA.v1 : l), (a = null == a ? tA.uj : a);
    let [E, I] = s.useState(!0),
        [v, y] = s.useState(!1),
        b = g === tE.dG.MOSAIC || !0 === f,
        S = (E || v) && !d && eJ._z.getSetting() && null != o && "" !== o && !0 !== p,
        N = s.useRef(null);
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(H.A, {
                ...x,
                alt: o,
                autoMute: a,
                mediaLayoutType: g,
                onControlsHide: () => I(!1),
                onControlsShow: () => I(!0),
                onMute: A,
                onVolumeChange: C,
                renderLinkComponent: tM,
                renderOverlayContent: u,
                volume: l,
            }),
            null != c && c(),
            b &&
                S &&
                (0, i.jsx)("div", {
                    className: ty.NO,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: N,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tj, { altText: o, altButtonRef: N }),
                        children: (e) =>
                            (0, i.jsx)(m.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: N,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    onMouseEnter: () => y(!0),
                                    onMouseLeave: () => y(!1),
                                    className: r()(ty.DV, { [ty.yZ]: !0, [ty.I5]: _ }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !b && S && (0, i.jsx)("span", { className: ty.R5, children: o }),
        ],
    });
}
function tw(e) {
    return (0, i.jsx)(tT, { ...e });
}
function tR(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: a,
            onVolumeHide: r,
            renderAdjacentContent: o,
            ...c
        } = e,
        u = tS(t),
        d = tN(l);
    return (
        (n = null == n ? tA.v1 : n),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(B, {
                    ...c,
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: a,
                    onVolumeHide: r,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: tM,
                }),
                null != o && o(),
            ],
        })
    );
}
function tL(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...s } = e,
        a = tS(t),
        r = tN(l);
    return (n = null == n ? tA.v1 : n), (0, i.jsx)(tg, { ...s, onVolumeChange: a, onMute: r, volume: n });
}
function tk(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: a,
            imageContainerClassName: o,
            disableAltTextDisplay: c = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: f,
        } = e,
        g = d === tE.dG.MOSAIC || !0 === f,
        _ = !c && eJ._z.getSetting() && null != t && "" !== t && !0 !== n,
        x = s.createRef();
    return (0, i.jsxs)("div", {
        className: r()(ty.fo, a),
        children: [
            (0, i.jsxs)("div", {
                className: r()(ty.ZS, o),
                style: p,
                children: [(0, i.jsx)(L, { ...e }), null != l && l()],
            }),
            g &&
                _ &&
                (0, i.jsx)("div", {
                    className: ty.Y1,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: x,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tj, { altText: t, altButtonRef: x }),
                        children: (e) =>
                            (0, i.jsx)(m.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: x,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: r()(ty.DV, { [ty.I5]: u }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !g && _ && (0, i.jsx)("span", { className: ty.R5, children: t }),
        ],
    });
}
function tM(e) {
    return (0, i.jsx)(k.A, { ...e });
}
function tO(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(eA, { ...n }), null != t && t()] });
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
                          className: r()(ty.Sg, l),
                          children: [
                              (0, i.jsx)("div", {
                                  className: ty.$I,
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
                                        className: ty.u1,
                                        itemClassName: ty.$N,
                                    }),
                          ],
                      }),
        });
    },
    tV = (e) => {
        let { onClick: t, loading: n, className: l } = e;
        return (0, i.jsx)(D.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)(g.D, {
                          className: r()(ty._5, l),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, i.jsx)("div", { className: ty.$I, children: ec.intl.string(ec.t["1zUvlw"]) }),
                              n
                                  ? (0, i.jsx)(f.y, {
                                        type: f.y.Type.PULSING_ELLIPSIS,
                                        className: ty.u1,
                                        itemClassName: ty.$N,
                                    })
                                  : (0, i.jsx)("div", {
                                        className: r()(ty.hQ, ty.d3),
                                        children: ec.intl.string(ec.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function tG(e) {
    let { content: t, channelId: n } = e,
        [l] = s.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        a = s.useCallback(() => {
            let e = eT.Ay.ackMessageId(n);
            null != e
                ? v.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : v.A.jumpToMessage({
                      channelId: n,
                      messageId: eL.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, y.ack)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = s.useContext(D.Y);
    return c
        ? null
        : (0, i.jsxs)("div", {
              className: r()(ty.eb, { [ty.y7]: c }),
              children: [
                  (0, i.jsx)(m.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: ty.$I,
                          onClick: a,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: ty.Ln, children: t }),
                      }),
                  }),
                  (0, i.jsx)(m.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, i.jsx)("div", {
                          className: ty._o,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: ty.hQ,
                              children: [
                                  (0, i.jsx)("span", { className: ty.vE, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, i.jsx)(_.M, { size: "md", color: "currentColor", className: ty.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tF(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: a } = s.useContext(D.Y),
        [o, h] = s.useState(null),
        m = s.useRef(null),
        [p, f] = s.useState(null),
        b = s.useRef(null),
        S = (0, d.yK)([eI.A], () => eI.A.summaries(t.id) ?? [], [t]),
        N = (0, O.A)(S);
    s.useEffect(() => {
        c().isEqual(N, S) ||
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: S.length,
                message_counts: S.map((e) => e.count),
                start_message_ids: S.map((e) => e.startId),
                end_message_ids: S.map((e) => e.endId),
                num_participants: S.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [S, N, t.guild_id, t.id, t.type]);
    let j = (0, d.bG)(
            [t_.default],
            () => S?.map((e) => e.people?.map((e) => t_.default.getUser(e) ?? null).filter(eD.Vq)) ?? [],
            [S],
            tB,
        ),
        T = (0, d.bG)([eI.A], () => eI.A.visibleSummaryIndex()) ?? -1,
        w = S?.[T]?.topic;
    null == w && null == o && S?.length >= 1 && (w = S[0]?.topic);
    let R = s.useMemo(
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
                        (0, eE.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        k = s.useCallback(
            (e) => {
                L(), R(e);
            },
            [R, L],
        ),
        [P, U] = s.useState(!1),
        G = s.useCallback(() => {
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: S.length,
                message_counts: S.map((e) => e.count),
                start_message_ids: S.map((e) => e.startId),
                end_message_ids: S.map((e) => e.endId),
                num_participants: S.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!P);
        }, [P, S, U, t]),
        F = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tI.eh.PILL_DROPDOWN,
                    i = S[e];
                if (null == i) return;
                (0, eE.sK)(t.id, i.id), (0, eE.C6)(t.id, i.id);
                let s = () => {
                    l.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            l.addAutomaticAnchorCallback(k, !1);
                        }, 100);
                };
                l.removeAutomaticAnchorCallback(k),
                    l.addScrollCompleteCallback(s),
                    tC.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    v.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: M.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [S, t, k, l],
        ),
        B = s.useCallback((e) => {
            U(e);
            let t = b.current?.scrollTop;
            null != t && f(t);
        }, []);
    s.useEffect(() => {
        null != p && P && b.current?.scrollTo({ top: p });
    }, [p, P]);
    let H = s.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && m.current?.contains(e.target)) ||
                (P &&
                    tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: S.length,
                        message_counts: S.map((e) => e.count),
                        start_message_ids: S.map((e) => e.startId),
                        end_message_ids: S.map((e) => e.endId),
                        num_participants: S.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                B(!1));
        },
        [P, S, t, B],
    );
    s.useEffect(
        () => (
            l.addAutomaticAnchorCallback(k),
            () => {
                l.removeAutomaticAnchorCallback(k);
            }
        ),
        [l, k],
    ),
        s.useEffect(() => {
            (0, eE.$T)(t.id);
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
    let W = s.useMemo(
            () => (0, i.jsx)(eq, { channel: t, summaries: S, summariesMembers: j, selectTopic: F, setOpen: B }),
            [S, j, F, B, t],
        ),
        K = s.useCallback(() => {
            let e = eT.Ay.ackMessageId(t.id);
            null != e
                ? v.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : v.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eL.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, y.ack)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = ec.intl.string(ec.t["38qwgO"]);
    return (
        S.length > 0 && (Z = "" === w || null == w ? ec.intl.string(ec.t.DwnFuG) : w),
        a
            ? null
            : (0, i.jsxs)("div", {
                  ref: m,
                  className: r()(ty.dw, ty.jh),
                  children: [
                      (0, i.jsx)("div", {
                          className: ty.qm,
                          children: (0, i.jsx)(g.D, {
                              className: ty.TQ,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: G,
                              children: (0, i.jsxs)("div", {
                                  className: r()({ [ty.hN]: !P, [ty.Ap]: P }),
                                  children: [
                                      (0, i.jsx)(x.K, { size: "xs", color: "currentColor", className: ty.Vd }),
                                      (0, i.jsx)(C.E, {
                                          variant: "text-sm/medium",
                                          className: r()(ty.$U, ty.lc),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tx.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tx.A.Directions.DOWN,
                                          className: ty.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(g.D, { onClick: K, className: ty.ij, children: n }),
                      (0, i.jsxs)(g.D, {
                          onClick: z,
                          className: r()(ty.hQ, ty.NX),
                          children: [
                              (0, i.jsx)("div", { className: ty.$U, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, i.jsx)(_.M, { size: "md", color: "currentColor", className: ty.t3 }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: ty.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ty.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: ty.Ne,
                                              children: [
                                                  (0, i.jsx)(x.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: ty.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(A.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(V.A, { className: ty.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(g.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: G,
                                              className: ty.oX,
                                              children: (0, i.jsx)(E.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(I.Ip, { ref: b, className: ty.Pe, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tB(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tH(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = s.useContext(D.Y),
        [a, o] = s.useState(null),
        h = s.useRef(null),
        [m, p] = s.useState(null),
        f = s.useRef(null),
        _ = (0, d.yK)([eI.A], () => eI.A.summaries(t.id) ?? [], [t]),
        y = (0, O.A)(_);
    s.useEffect(() => {
        c().isEqual(y, _) ||
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
    }, [_, y, t.guild_id, t.id, t.type]);
    let b = (0, d.bG)(
            [t_.default],
            () => _?.map((e) => e.people?.map((e) => t_.default.getUser(e) ?? null).filter(eD.Vq)) ?? [],
            [_],
            tB,
        ),
        S = (0, d.bG)([eI.A], () => eI.A.visibleSummaryIndex()) ?? -1,
        N = _?.[S]?.topic;
    null == N && null == a && _?.length >= 1 && (N = _[0]?.topic);
    let j = s.useMemo(() => c().get(_, S - 1), [S, _]),
        T = s.useMemo(() => c().get(_, S + 1), [S, _]),
        w = s.useMemo(
            () =>
                c().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        R = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, eE.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(
            (e) => {
                R(), w(e);
            },
            [w, R],
        ),
        [k, P] = s.useState(!1),
        U = s.useCallback(() => {
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !k,
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                P(!k);
        }, [k, _, P, t]),
        G = s.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tI.eh.PILL_DROPDOWN,
                    i = _[e];
                if (null == i) return;
                (0, eE.sK)(t.id, i.id), (0, eE.C6)(t.id, i.id);
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
                    v.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: M.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [_, t, L, n],
        ),
        F = s.useCallback(() => {
            G(S - 1, tI.eh.PILL_NEXT_ARROW);
        }, [G, S]),
        B = s.useCallback(() => {
            G(S + 1, tI.eh.PILL_PREVIOUS_ARROW);
        }, [S, G]),
        H = s.useCallback((e) => {
            P(e);
            let t = f.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != m && k && f.current?.scrollTo({ top: m });
    }, [m, k]);
    let W = s.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (k &&
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
        [k, _, t, H],
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
            (0, eE.$T)(t.id);
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
        () => (0, i.jsx)(eq, { channel: t, summaries: _, summariesMembers: b, selectTopic: G, setOpen: H }),
        [_, b, G, H, t],
    );
    if (!(0, d.bG)([eI.A], () => eI.A.shouldShowTopicsBar())) return null;
    let z = ec.intl.string(ec.t["38qwgO"]);
    return (
        _.length > 0 && (z = "" === N || null == N ? ec.intl.string(ec.t.DwnFuG) : N),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: h,
                  className: r()(ty.$T, ty.jh),
                  children: [
                      (0, i.jsxs)("div", {
                          className: ty.sE,
                          children: [
                              (0, i.jsx)(g.D, {
                                  className: ty.LP,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: r()({ [ty.Nv]: !k, [ty.An]: k }),
                                      children: [
                                          (0, i.jsx)(x.K, { size: "xs", color: "currentColor", className: ty.Np }),
                                          (0, i.jsx)(C.E, { className: ty.r1, variant: "text-sm/medium", children: z }),
                                          (0, i.jsx)(tx.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tx.A.Directions.DOWN,
                                              className: ty._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: ty.Yk,
                                  children: [
                                      (0, i.jsx)(g.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: B,
                                          className: r()(ty.ZM, ty.vz, { [ty.jf]: null == T }),
                                          children: (0, i.jsx)(tx.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tx.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(g.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: F,
                                          className: r()(ty.ZM, ty.mt, { [ty.jf]: null == j }),
                                          children: (0, i.jsx)(tx.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tx.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      k &&
                          (0, i.jsxs)("div", {
                              className: ty.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ty.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: ty.Ne,
                                              children: [
                                                  (0, i.jsx)(x.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: ty.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(A.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(V.A, { className: ty.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(g.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: U,
                                              className: ty.oX,
                                              children: (0, i.jsx)(E.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(I.Ip, { ref: f, className: ty.Pe, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
let tW = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, i.jsxs)("div", {
            className: ty.YL,
            children: [
                (0, i.jsx)(C.E, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: ty.Ld,
                    children: e,
                }),
                t &&
                    (0, i.jsx)(C.E, {
                        className: ty.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: ec.intl.string(ec.t["515vjG"]),
                    }),
            ],
        });
    },
    tK = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: r()(ty.jC, n), children: t });
    },
    tz = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(tK, {
            className: t,
            children: (0, i.jsx)("div", { className: ty.wH, children: (0, i.jsx)("div", { className: ty.j3 }) }),
        });
    };
