"use strict";
n.d(t, {
    ks: () => tx,
    UK: () => tj,
    Ez: () => tV,
    LL: () => tP,
    OZ: () => tB,
    yR: () => tW,
    Uq: () => tY,
    $o: () => tL,
    bU: () => tk,
    Uk: () => tR,
    GN: () => tF,
    Y0: () => tK,
    P$: () => tw,
    _d: () => tM,
    gL: () => tb,
    Dk: () => tU,
    Ab: () => tG,
});
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(735438),
    d = n.n(l),
    _ = n(621466),
    u = n(17928),
    c = n(922016),
    E = n(187322),
    h = n(821609),
    m = n(289873),
    f = n(939249),
    g = n(582394),
    p = n(306788),
    A = n(834730),
    I = n(534514),
    T = n(789645),
    S = n(364522),
    N = n(720149),
    C = n(334738),
    R = n(192308),
    O = n(267102),
    y = n(619517),
    v = n(256905),
    D = n(536763),
    L = n(218394);
class b extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: i, onMouseEnter: r, handlePreloadImage: s } = this.props;
        (r?.(e), null != s) ? s() : (0, D.A)({ src: t, width: n, height: i, options: this.props });
    };
    modalContext = (0, R.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, R.closeModal)(v.K, this.modalContext);
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
            animated: d,
            srcIsAnimated: u,
            children: c,
            shouldHideMediaOptions: E = !1,
            sourceMetadata: h,
            analyticsSource: m,
            contentType: f,
            originalContentType: g,
        } = this.props;
        (0, _.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, v.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: s,
                        width: o,
                        height: l,
                        type: "IMAGE",
                        alt: r,
                        contentType: f,
                        originalContentType: g,
                        zoomThumbnailPlaceholder: n,
                        animated: d,
                        srcIsAnimated: u,
                        children: c,
                        trigger: i,
                        sourceMetadata: h,
                        original: a ?? s,
                    },
                ],
                shouldHideMediaOptions: E,
                location: m ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, r.jsx)(y.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function w(e) {
    let t = (0, O.Us)(),
        n = (0, L.j)();
    return (0, r.jsx)(b, { ...e, isWindowFocused: n, appContext: t });
}
var P = n(9578),
    k = n(56562),
    M = n(475743),
    U = n(564771),
    x = n(692051),
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
            onVolumeShow: d,
            onVolumeHide: _,
            autoMute: u,
            onMute: c,
            mimeType: E,
            onPlay: h,
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
            onMute: c,
            autoMute: u,
            onVolumeChange: l,
            onVolumeShow: d,
            onVolumeHide: _,
            renderLinkComponent: o,
            mimeType: E,
            onPlay: h,
        });
    }
}
var j = n(248643),
    W = n(156828),
    Y = n(990078),
    K = n(408278),
    z = n(900797),
    $ = n(847374),
    q = n(305866),
    X = n(732771),
    Z = n(387758),
    Q = n(550079),
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
    ed = n(985018),
    e_ = n(460224),
    eu = n(429128);
function ec(e) {
    let { text: t, language: i, wordWrap: s } = e,
        a = () => (0, r.jsx)("code", { className: o()(eu.kw, e_.Xb, "hljs", { [e_.Zw]: s }), children: t });
    return (0, r.jsx)("pre", {
        children: (0, r.jsx)(eo.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: i,
            className: o()(eu.kw, e_.Xb, "hljs", { [e_.Zw]: s }),
            children: (0, r.jsx)(W.c2, {
                createPromise: () => Promise.resolve().then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(i)) return a();
                    let n = e.highlight(i, t, !0);
                    return null == n
                        ? a()
                        : (0, r.jsx)("code", {
                              className: o()(eu.kw, e_.Xb, "hljs", n.language, { [e_.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => a(),
            }),
        }),
    });
}
function eE(e) {
    let { expanded: t, setExpanded: n, numLines: i, isWholeFile: s } = e,
        a = ed.intl.formatToPlainString(s ? ed.t.Go5Vvs : ed.t.yJcYan, { lines: i }),
        o = `${t ? ed.intl.string(ed.t.iTcuma) : ed.intl.string(ed.t.dcl9MQ)} (${a})`;
    return (0, r.jsx)("div", {
        className: e_.py,
        children: (0, r.jsx)(Y.m, {
            text: o,
            children: (0, r.jsx)(K.K, {
                icon: t ? z.t : $.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": o,
            }),
        }),
    });
}
function eh(e) {
    let { fileName: t, fileSize: n } = e,
        i = `${t} (${(0, el.up)(n)})`;
    return (0, r.jsxs)("div", {
        className: e_.VI,
        children: [
            (0, r.jsx)("div", {
                className: e_.VW,
                children: (0, r.jsx)(Y.m, {
                    text: i,
                    children: (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: e_.Md,
                        children: t,
                    }),
                }),
            }),
            (0, r.jsx)(A.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, el.up)(n) }),
        ],
    });
}
function em(e) {
    let { language: t, setLanguage: n, align: i } = e,
        a = s.useRef(null);
    return (0, r.jsx)(c.Y, {
        targetElementRef: a,
        position: "left",
        align: i,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(q.l, {
                "aria-label": ed.intl.string(ed.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: e_.md,
                    children: (0, r.jsxs)(X.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), i();
                        },
                        options: Array.from(ea.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, r.jsx)(X.a3, { placeholder: ed.intl.string(ed.t.GofftW) }),
                            (0, r.jsx)(X.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(Y.m, {
                ariaHidden: !0,
                text: ed.intl.string(ed.t.utm4qs),
                children: (0, r.jsx)(f.D, {
                    ...e,
                    className: e_.Qw,
                    "aria-label": ed.intl.string(ed.t.utm4qs),
                    children: (0, r.jsx)(Z.G, { size: "sm", color: "currentColor", ref: a }),
                }),
            }),
    });
}
function ef(e) {
    let { wordWrap: t, setWordWrap: n, url: i, fileName: a } = e,
        o = s.useRef(null),
        l = s.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Y, {
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
                        "aria-label": ed.intl.string(ed.t.PdRCRg),
                        children: (0, r.jsxs)(J.rX, {
                            children: [
                                (0, r.jsx)(J.Dr, {
                                    id: "download",
                                    label: ed.intl.string(ed.t["1WjMbC"]),
                                    icon: ee.s,
                                    action: () => {
                                        l.current?.click(), i();
                                    },
                                }),
                                (0, r.jsx)(J.sL, {
                                    id: "word-wrap",
                                    label: ed.intl.string(ed.t.AMKNT1),
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
                        text: ed.intl.string(ed.t["UKOtz+"]),
                        children: (0, r.jsx)(f.D, {
                            ...e,
                            className: e_.IQ,
                            "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                            children: (0, r.jsx)(et.j, { ref: o, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, r.jsx)(en.Anchor, {
                ref: l,
                href: i,
                download: a,
                className: e_.op,
                children: (0, r.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eg(e) {
    return (0, r.jsx)(Y.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ed.intl.string(ed.t["0PQYk3"]),
        children: (0, r.jsx)(f.D, {
            className: e_.R1,
            "aria-label": ed.intl.string(ed.t["0PQYk3"]),
            onClick: () => {
                (0, R.openModal)((t) => (0, r.jsx)(eA, { ...e, ...t }));
            },
            children: (0, r.jsx)(ei._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function ep(e) {
    let {
            url: t,
            fileName: n,
            fileSize: i,
            fileContents: s,
            expanded: a,
            setExpanded: l,
            language: d,
            setLanguage: _,
            wordWrap: u,
            setWordWrap: c,
            bytesLeft: E,
            className: h,
        } = e,
        f = s?.split("\n"),
        g = f?.length ?? 0,
        p = a ? 100 : 6,
        A = 0 === E,
        I = "";
    A && a && g > p ? (I = "\n...") : A || (I = "..."),
        "" !== I &&
            (A
                ? (I += " " + ed.intl.formatToPlainString(ed.t.DQnFp2, { lines: g - p }))
                : (I += " " + ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, el.up)(E) })));
    let T = f?.slice(0, p).join("\n") + I,
        N = (0, es.sJ)(T),
        C = a || p < g;
    return (0, r.jsxs)("div", {
        className: o()(h, e_.kL),
        children: [
            (0, r.jsx)(S.Ip, {
                className: e_.FS,
                children:
                    null == s
                        ? (0, r.jsx)(m.y, { className: e_.u1 })
                        : (0, r.jsx)(ec, { text: N, language: d, wordWrap: u }),
            }),
            (0, r.jsxs)("div", {
                className: e_.qr,
                role: "group",
                "aria-label": ed.intl.string(ed.t.TlXA8e),
                children: [
                    C ? (0, r.jsx)(eE, { expanded: a, setExpanded: l, numLines: g, isWholeFile: A }) : null,
                    (0, r.jsx)(eh, { fileName: n, fileSize: i }),
                    (0, r.jsx)("div", { className: e_.Kb }),
                    (0, r.jsx)(em, { language: d, setLanguage: _, align: "top" }),
                    null != s
                        ? (0, r.jsx)(eg, {
                              url: t,
                              fileName: n,
                              fileSize: i,
                              language: d,
                              wordWrap: u,
                              fileContents: s,
                              bytesLeft: E,
                          })
                        : null,
                    (0, r.jsx)(ef, { wordWrap: u, setWordWrap: c, url: t, fileName: n }),
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
            fileContents: d,
            bytesLeft: _,
            onClose: u,
        } = e,
        [c, E] = s.useState(o),
        [h, f] = s.useState(l),
        g = d ?? "";
    return (
        0 !== _ && (g += `... ${ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, el.up)(_) })}`),
        (0, r.jsx)(er.d, {
            transitionState: a,
            "aria-label": ed.intl.string(ed.t["qxQjc+"]),
            size: "xxl",
            onClose: u,
            children: (0, r.jsxs)("div", {
                className: e_.jE,
                children: [
                    (0, r.jsx)(S.Ip, {
                        className: e_.ot,
                        children:
                            null == d
                                ? (0, r.jsx)(m.y, { className: e_.u1 })
                                : (0, r.jsx)(ec, { text: g, language: c, wordWrap: h }),
                    }),
                    (0, r.jsx)("div", {
                        role: "group",
                        "aria-label": ed.intl.string(ed.t.TlXA8e),
                        children: (0, r.jsxs)(A.E, {
                            color: "text-default",
                            className: e_.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)(eh, { fileName: n, fileSize: i }),
                                (0, r.jsx)("div", { className: e_.Kb }),
                                (0, r.jsx)(em, { language: c, setLanguage: E, align: "bottom" }),
                                (0, r.jsx)(ef, { wordWrap: h, setWordWrap: f, url: t, fileName: n }),
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
        let { url: t, fileName: n, fileSize: i, contentType: a, className: l, onClick: d, onContextMenu: _ } = e,
            [u, c] = s.useState(!1),
            [E, h] = s.useState(n.split(".").slice(-1)[0]),
            [m, f] = s.useState(!1),
            {
                fileContents: g,
                bytesLeft: p,
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
                                    d = parseInt(s.split("/")[1]) - parseInt(o);
                                a(0 === d ? r : r.slice(0, -1)), l(d), i(!1);
                            } catch (e) {
                                l(0), i(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: r, bytesLeft: o, hadError: n }
                );
            })(t, a);
        return A
            ? (0, r.jsx)(U.A, { url: t, fileName: n, fileSize: i, onClick: d, onContextMenu: _, className: l })
            : (0, r.jsx)(ep, {
                  url: t,
                  fileName: n,
                  fileSize: i,
                  fileContents: g,
                  bytesLeft: p,
                  expanded: u,
                  setExpanded: c,
                  language: E,
                  setLanguage: h,
                  wordWrap: m,
                  setWordWrap: f,
                  className: o()(e_.mr, l),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eT = n(863922),
    eS = n(822074),
    eN = n(534890),
    eC = n(442433),
    eR = n(640708),
    eO = n(941971),
    ey = n(707539),
    ev = n(576705),
    eD = n(222823),
    eL = n(340833),
    eb = n(913642),
    ew = n(935208),
    eP = n(798505);
n(321073);
var ek = n(97808),
    eM = n(778712),
    eU = n(707606),
    ex = n(403362),
    eG = n(922704);
let eV = (0, eU.A)((e) => {
        let { member: t, empty: n, guildId: i } = e;
        return n || null == t
            ? (0, r.jsx)("div", { className: eG.pO })
            : (0, r.jsx)("div", {
                  className: eG.pO,
                  children: (0, r.jsx)(ek.eu, {
                      src: t.getAvatarURL(i, 16),
                      "aria-label": t.username,
                      size: eM._3.SIZE_16,
                      className: eG.pO,
                  }),
              });
    }),
    eF = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: s = 2, guildId: a } = e,
            { totalSize: o, knownSize: l } = t;
        if (o < i) return null;
        let _ = d()(n)
                .filter(ex.Vq)
                .take(s)
                .map((e) => (0, r.jsx)(eV, { member: e, guildId: a }, e.id))
                .value(),
            u = o - l;
        for (let e = 0; e < u && _.length < s; e++)
            _.push((0, r.jsx)(eV, { empty: !0, guildId: a }, `empty-member-${e}`));
        let c = Math.max(Math.min(o - _.length, 99), 0);
        if (1 === c) {
            let e = n[s];
            _.push((0, r.jsx)(eV, { member: e, guildId: a }, e.id));
        }
        return (0, r.jsx)("div", {
            className: eG.iE,
            children: (0, r.jsxs)("div", {
                className: eG.S3,
                children: [_, c > 1 ? (0, r.jsxs)("div", { className: eG.Hi, children: ["+", c] }) : null],
            }),
        });
    };
var eB = n(303727),
    eH = n(490334);
function ej() {
    return (0, r.jsxs)("div", {
        className: eH.kL,
        children: [
            (0, r.jsxs)("div", {
                className: eH.zc,
                children: [
                    (0, r.jsx)("div", {
                        className: eH.Kk,
                        children: (0, r.jsx)(p.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eH.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, r.jsx)(eB.A, { className: eH.uf }),
                ],
            }),
            (0, r.jsx)(I.D, {
                className: eH.wx,
                variant: "heading-xl/semibold",
                children: ed.intl.string(ed.t.yJHJei),
            }),
            (0, r.jsx)(A.E, {
                className: eH.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ed.intl.string(ed.t.p2dIh6),
            }),
        ],
    });
}
var eW = n(652215),
    eY = n(670455),
    eK = n(156700);
function ez(e) {
    let { summary: t, channel: i, members: a, guildId: o, unread: l, onClick: d } = e,
        [_, c] = s.useState(!1),
        E = (0, ey.aK)(ew.default.extractTimestamp(t.startId)),
        h = (0, u.bG)([eS.A], () => eS.A.summaryFeedback(t)),
        m = (e, n) => {
            e.stopPropagation(), (0, eP.A)({ summary: t, channel: i, rating: n });
        },
        g = ev.A.can(eW.xBc.MANAGE_MESSAGES, i);
    return (0, r.jsxs)(f.D, {
        className: eK.kL,
        onClick: d,
        onContextMenu: (e) => {
            g &&
                (0, eC.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => c(!0),
        onMouseLeave: () => c(!1),
        children: [
            (0, r.jsx)(eO.A, { hovered: _, unread: l, className: eK.dM }),
            (0, r.jsx)("div", {
                className: eK.uV,
                children: (0, r.jsxs)("div", {
                    className: eK.Hw,
                    children: [
                        (0, r.jsx)(A.E, {
                            className: eK.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: E,
                        }),
                        (0, r.jsx)(eR.A, { height: 4, width: 4, "aria-hidden": "true", className: eK.Om }),
                        (0, r.jsx)(eN.o, { size: "xxs", color: "currentColor", className: eK.Kk }),
                        (0, r.jsx)(A.E, {
                            className: eK.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        a.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eR.A, { height: 4, width: 4, "aria-hidden": "true", className: eK.Om }),
                                    (0, r.jsx)(eF, {
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
            _ &&
                null == h &&
                (0, r.jsxs)("div", {
                    className: eK.p_,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: (e) => m(e, eY.P0.GOOD),
                            children: (0, r.jsx)(eb.A, { className: eK.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(f.D, {
                            onClick: (e) => m(e, eY.P0.BAD),
                            children: (0, r.jsx)(eL.A, { className: eK.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(A.E, { color: "text-strong", variant: "text-sm/semibold", className: eK.DD, children: t.topic }),
            (0, r.jsx)(A.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eK.VA,
                children: t.summShort,
            }),
        ],
    });
}
function e$(e) {
    let { summaries: t, summariesMembers: n, channel: i, selectTopic: a, setOpen: o } = e,
        l = (0, u.bG)([eD.Ay], () => eD.Ay.getOldestUnreadMessageId(i.id)),
        d = s.useCallback(
            (e) => {
                a(e), o(!1);
            },
            [a, o],
        );
    return t.length < 1
        ? (0, r.jsx)(ej, {})
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
                          unread: null != l && ew.default.compare(e.endId, l) > 0,
                          onClick: () => d(t),
                      },
                      t,
                  );
              }),
          });
}
var eq = n(253932),
    eX = n(113494),
    eZ = n(782134),
    eQ = n(775602),
    eJ = n(228366),
    e0 = n(713021),
    e1 = n(118019),
    e2 = n(20504),
    e3 = n(625494),
    e6 = n(927813),
    e4 = n(824744);
n(508300);
var e7 = n(661531),
    e5 = n(602853),
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
var ta = n(614108);
let to = [0, 0, 0, 0, 0];
function tl(e) {
    let { showAll: t, currentTime: n, duration: i, numSegments: r } = e;
    return t ? r : Math.max(0, Math.round((n / i) * r));
}
function td(e) {
    var t, n, i, r;
    let { context: s, devicePixelRatio: a, canvasHeight: o, segmentValue: l, segmentIndex: d, constrainMin: _ } = e,
        u = _ ? 22 * l + 2 : 24 * l;
    0 !== u &&
        ((t = 6 * d * a),
        (n = (o / 2 - u / 2) * a),
        (i = u * a),
        (r = +a),
        s.moveTo(t, n + r),
        s.lineTo(t, n + i - r),
        s.arc(t + r, n + i - r, r, Math.PI, 0, !0),
        s.lineTo(t + 2 * r, n + r),
        s.arc(t + r, n + r, r, 0, Math.PI, !0),
        s.closePath());
}
function t_(e, t, n) {
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
function tu(e, t, n, i) {
    if (null == i) return [t, !1];
    let r = Math.min((n - i) / 200, 1);
    return 1 === r ? [t, !1] : [(0, te.De)(e, t, r), !0];
}
function tc(e) {
    let t,
        n,
        {
            className: i,
            waveform: a,
            currentTime: l,
            duration: d,
            played: _,
            playing: u,
            onDrag: c,
            onDragStart: E,
            onDragEnd: h,
        } = e,
        { ref: m, width: f } = (0, e8.Ay)(),
        g = s.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((d <= 0.5 ? 40 : d >= 45 ? 294 : ((Math.min(d, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [d],
        ),
        p = s.useRef(void 0),
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
                    })(f),
                [f],
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
        I = s.useRef(_),
        T = s.useRef(u),
        S = s.useRef(null),
        N = window.devicePixelRatio,
        {
            lastBackgroundFillColor: C,
            backgroundFillColor: R,
            lastActiveFillColor: O,
            activeFillColor: y,
            lastInactiveFillColor: v,
            inactiveFillColor: D,
        } = (function (e, t) {
            let n = (0, e5.r)(e7.A.colors.BACKGROUND_MOD_MUTED).hex(),
                i = (0, e5.r)(e7.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                r = (0, e5.r)(e7.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e5.r)(e7.A.unsafe_rawColors.BRAND_430).hex(),
                a = (0, e5.r)(e7.A.unsafe_rawColors.WHITE).hex(),
                o = t ? s : n,
                [l, d] = t_(o, t, e),
                [_, u] = t_(t ? a : e ? r : i, t, e),
                [c, E] = t_(e ? o : i, t, e);
            return {
                lastBackgroundFillColor: l,
                backgroundFillColor: d,
                lastActiveFillColor: _,
                activeFillColor: u,
                lastInactiveFillColor: c,
                inactiveFillColor: E,
            };
        })(_, u),
        L = { currentTime: l, duration: d, played: _ },
        b = s.useRef(L);
    s.useEffect(() => {
        b.current = L;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = b.current,
                i = tl({ showAll: !n, currentTime: e, duration: t, numSegments: A.length });
            p.current = A.map((e, t) => new tr(t < i ? e : 0));
        }, [A]),
        s.useEffect(() => {
            let e = p.current;
            if (null == e) return;
            let t = tl({ showAll: !_, currentTime: l, duration: d, numSegments: A.length });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(A[n]);
                    continue;
                }
                i.reset();
            }
        }, [A, l, d, _]),
        s.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let i = m.current,
                        r = i?.getContext("2d"),
                        s = p.current;
                    if (null == i || null == r || null == s) return;
                    let a = !1;
                    (I.current !== _ || T.current !== u) && ((I.current = _), (T.current = u), (S.current = n)),
                        null != S.current && n > S.current + 200 && (S.current = null);
                    let o = i.height / N;
                    r.clearRect(0, 0, i.width, i.height), r.beginPath();
                    let [l, d] = tu(C, R, n, S.current);
                    (a = a || d), (r.fillStyle = l);
                    for (let e = 0; e < A.length; e++)
                        td({
                            context: r,
                            devicePixelRatio: N,
                            canvasHeight: o,
                            segmentValue: A[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    r.fill();
                    let [c, E] = tu(v, D, n, S.current);
                    a = a || E;
                    let [h, f] = tu(O, y, n, S.current);
                    a = a || f;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), A[e] - 0.1);
                        r.beginPath(),
                            (r.fillStyle = t.isReset ? c : h),
                            td({
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
        }, [m, N, A, f, l, d, _, u, C, R, O, y, v, D]);
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
    })({ ref: m, onDrag: c, onDragStart: E, onDragEnd: h });
    return (0, r.jsx)("canvas", {
        onMouseDown: w,
        className: o()(ta.J, i),
        style: { width: g },
        ref: m,
        height: 32 * window.devicePixelRatio,
        width: (f ?? 0) * window.devicePixelRatio,
    });
}
var tE = n(132246);
let th = s.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function tm(e) {
    let { played: t, duration: n, currentTime: i } = e,
        s = null == n ? "--:--" : t ? (0, B.rB)(Math.ceil(n - i)) : (0, B.rB)(Math.ceil(n));
    return (0, r.jsx)(A.E, { variant: "text-sm/normal", className: tE.p0, tabularNumbers: !0, children: s });
}
let tf = s.memo(function (e) {
    let t,
        {
            src: n,
            volume: i = 1,
            onVolumeChange: a,
            onMute: l,
            waveform: d,
            durationSecs: _,
            onVolumeShow: c,
            onVolumeHide: E,
            onPlay: h,
            onPause: m,
            onError: g,
            playbackCacheKey: p,
        } = e,
        I = s.useRef(null),
        T = s.useMemo(() => (null != p ? e0.Ay.getPlaybackPosition(p) : 0), [p]),
        S = (0, u.bG)([e0.Ay], () => e0.Ay.getPlaybackRate(e0.k0.VOICE_MESSAGE)),
        [N, C] = s.useState(T > 0),
        [R, O] = s.useState(T),
        [y, v] = s.useState(_),
        [D, L] = s.useState(!1),
        [b, w] = s.useState(!1),
        [P, k] = s.useState(!1),
        [M, U] = s.useState(!1),
        [x, G] = s.useState("none"),
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
                null != _ &&
                    null != p &&
                    eJ.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: p, position: e, duration: _ });
            },
            [p, _],
        ),
        K = s.useCallback(() => {
            w(!1),
                null == B.current &&
                    (B.current = setTimeout(() => {
                        C(!1), U(!1), (B.current = void 0);
                    }, 500));
        }, []),
        z = s.useCallback(() => {
            P || (Y(0), K());
        }, [K, P, Y]),
        $ = s.useCallback((e) => {
            let t = I.current;
            null != t && (O(e), (t.currentTime = e), C(!0));
        }, []),
        q = s.useCallback(() => {
            let e = I.current;
            if (null == e) return;
            let t = e.error;
            g?.(t);
        }, [g]),
        X = s.useCallback(
            (e) => {
                let t = (0, e4.w)(e, 1);
                L(0 === t), F(t), a?.(t);
            },
            [a],
        ),
        Z = s.useCallback(() => {
            L(!D), l?.(!D);
        }, [D, l]),
        Q = s.useCallback(() => {
            k(!0);
        }, []),
        J = s.useCallback(() => {
            k(!1), R === y && K(), Y(R);
        }, [R, y, K, Y]),
        ee = s.useCallback(
            (e) => {
                let t = I.current;
                null == y || null == t || ($(e * y), clearTimeout(B.current), (B.current = void 0));
            },
            [y, $],
        );
    s.useEffect(() => {
        !N && b && C(!0);
    }, [b, N]);
    let et = s.useRef(null),
        en = { played: M, currentTime: R, onPause: m, onPlay: h },
        ei = s.useRef(en);
    s.useEffect(() => {
        ei.current = en;
    }),
        s.useEffect(() => {
            T > 0 && $(T);
        }, [T, $]),
        s.useEffect(() => {
            let e;
            return (
                b &&
                    !P &&
                    (e = setInterval(() => {
                        Y(I.current?.currentTime ?? 0);
                    }, e6.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [b, P, Y]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: i } = ei.current;
            if (e || b)
                if (b) (et.current = performance.now()), i?.(!1, t, (I.current?.duration ?? 0) * e6.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        i = et.current;
                    n?.(t, null != i ? (e - i) / 1e3 : 0), Y(t), (et.current = null);
                }
        }, [b, n, y, Y]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = I.current;
                    null == n || (O(n.currentTime), b && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [I, b, O]),
        s.useEffect(() => {
            if (b)
                return (
                    e3._.dispatch(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e3._.subscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e3._.unsubscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && w(!1);
            }
        }, [n, b, w]);
    let er = b ? eX.E : eZ.u,
        es = b ? ed.intl.string(ed.t["3XohGn"]) : ed.intl.string(ed.t.AlHqHT),
        ea = ed.intl.formatToPlainString(ed.t.LgCPMt, { playbackRate: S }),
        eo = `${S.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(s.Suspense, {
                  children: (0, r.jsx)(th, {
                      ref: I,
                      className: tE.Zn,
                      src: n,
                      preload: x,
                      playing: b && !P,
                      onEnded: z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: D,
                      volume: V,
                      playbackRate: S,
                  }),
              })
            : (0, r.jsx)(e1.A, {
                  ref: I,
                  className: tE.Zn,
                  controls: !1,
                  preload: x,
                  onEnded: z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: D,
                  volume: V,
                  playbackRate: S,
                  playing: b && !P,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let el = (0, u.bG)([eQ.A], () => eQ.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: o()(tE.kL, { [tE.he]: b }),
        onMouseEnter: j,
        role: "region",
        "aria-label": ed.intl.string(ed.t.c8U6xd),
        children: [
            (0, r.jsx)("div", {
                className: tE.Kl,
                children: (0, r.jsx)("div", { className: o()(tE.fq, { [tE.VN]: el }) }),
            }),
            (0, r.jsx)(f.D, {
                className: tE.k0,
                onClick: H,
                "aria-label": es,
                children: (0, r.jsx)(er, { className: tE.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(tc, {
                className: tE.ou,
                waveform: d,
                currentTime: R,
                duration: y ?? 1,
                playing: b,
                played: N,
                onDrag: ee,
                onDragStart: Q,
                onDragEnd: J,
            }),
            (0, r.jsx)(tm, { played: N, currentTime: R, duration: y }),
            (0, r.jsx)(f.D, {
                className: tE.LJ,
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
                children: (0, r.jsx)(A.E, { variant: "text-xs/semibold", className: tE.Sn, children: eo }),
            }),
            (0, r.jsx)(e2.A, {
                className: tE.bk,
                iconClassName: tE._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tE.MQ,
                muted: D,
                value: (0, e4.M)(V, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: X,
                onToggleMute: Z,
                onVolumeShow: c,
                onVolumeHide: E,
            }),
            t,
        ],
    });
});
var tg = n(287809),
    tp = n(147925),
    tA = n(954571),
    tI = n(587481),
    tT = n(838541),
    tS = n(521732),
    tN = n(650583),
    tC = n(708147);
let tR = { delay: 300, position: "top" },
    tO = (e) => (t) => {
        e?.(t), (0, tI.ls)(t);
    },
    ty = (e) => (t) => {
        e?.(t), (0, tI.y5)(t);
    };
function tv(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, r.jsxs)("div", {
        role: "dialog",
        "aria-label": ed.intl.string(ed.t.fSiQ3A),
        className: tC.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tN.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, r.jsx)("span", { className: tC.k_, children: ed.intl.string(ed.t.fSiQ3A) }),
            (0, r.jsx)("span", { className: tC.a7, children: t }),
        ],
    });
}
function tD(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: i,
            autoMute: a,
            alt: l,
            renderAdjacentContent: d,
            renderOverlayContent: _,
            disableAltTextDisplay: u = !1,
            hiddenSpoilers: h,
            mosaicStyleAlt: m,
            mediaLayoutType: f,
            reducedSizeAltTextButton: g,
            ...p
        } = e,
        A = tO(t),
        I = ty(n);
    (i = null == i ? tI.v1 : i), (a = null == a ? tI.uj : a);
    let [T, S] = s.useState(!0),
        [N, C] = s.useState(!1),
        R = f === tT.dG.MOSAIC || !0 === m,
        O = (T || N) && !u && eq._z.getSetting() && null != l && "" !== l && !0 !== h,
        y = s.useRef(null);
    return (0, r.jsxs)(s.Fragment, {
        children: [
            (0, r.jsx)(j.A, {
                ...p,
                alt: l,
                autoMute: a,
                mediaLayoutType: f,
                onControlsHide: () => S(!1),
                onControlsShow: () => S(!0),
                onMute: I,
                onVolumeChange: A,
                renderLinkComponent: tk,
                renderOverlayContent: _,
                volume: i,
            }),
            null != d && d(),
            R &&
                O &&
                (0, r.jsx)("div", {
                    className: tC.NO,
                    children: (0, r.jsx)(c.Y, {
                        targetElementRef: y,
                        animation: c.Y.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(tv, { altText: l, altButtonRef: y }),
                        children: (e) =>
                            (0, r.jsx)(E.vN, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: y,
                                    "aria-label": ed.intl.string(ed.t.fSiQ3A),
                                    onMouseEnter: () => C(!0),
                                    onMouseLeave: () => C(!1),
                                    className: o()(tC.DV, { [tC.yZ]: !0, [tC.I5]: g }),
                                    children: ed.intl.string(ed.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !R && O && (0, r.jsx)("span", { className: tC.R5, children: l }),
        ],
    });
}
function tL(e) {
    return (0, r.jsx)(tD, { ...e });
}
function tb(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: a,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...d
        } = e,
        _ = tO(t),
        u = ty(i);
    return (
        (n = null == n ? tI.v1 : n),
        (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(H, {
                    ...d,
                    onVolumeChange: _,
                    onMute: u,
                    onVolumeShow: a,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: tk,
                }),
                null != l && l(),
            ],
        })
    );
}
function tw(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...s } = e,
        a = tO(t),
        o = ty(i);
    return (n = null == n ? tI.v1 : n), (0, r.jsx)(tf, { ...s, onVolumeChange: a, onMute: o, volume: n });
}
function tP(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: a,
            imageContainerClassName: l,
            disableAltTextDisplay: d = !1,
            reducedSizeAltTextButton: _ = !1,
            mediaLayoutType: u,
            imageContainerStyle: h,
            mosaicStyleAlt: m,
        } = e,
        f = u === tT.dG.MOSAIC || !0 === m,
        g = !d && eq._z.getSetting() && null != t && "" !== t && !0 !== n,
        p = s.createRef();
    return (0, r.jsxs)("div", {
        className: o()(tC.fo, a),
        children: [
            (0, r.jsxs)("div", {
                className: o()(tC.ZS, l),
                style: h,
                children: [(0, r.jsx)(w, { ...e }), null != i && i()],
            }),
            f &&
                g &&
                (0, r.jsx)("div", {
                    className: tC.Y1,
                    children: (0, r.jsx)(c.Y, {
                        targetElementRef: p,
                        animation: c.Y.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(tv, { altText: t, altButtonRef: p }),
                        children: (e) =>
                            (0, r.jsx)(E.vN, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: p,
                                    "aria-label": ed.intl.string(ed.t.fSiQ3A),
                                    className: o()(tC.DV, { [tC.I5]: _ }),
                                    children: ed.intl.string(ed.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !f && g && (0, r.jsx)("span", { className: tC.R5, children: t }),
        ],
    });
}
function tk(e) {
    return (0, r.jsx)(P.A, { ...e });
}
function tM(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(s.Fragment, { children: [(0, r.jsx)(eI, { ...n }), null != t && t()] });
}
function tU(e) {
    return (0, r.jsx)(U.A, { ...e });
}
var tx = (((i = {})[(i.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (i[(i.REPLY = 1)] = "REPLY"), i);
let tG = (e) => {
        let { type: t = 0, onClick: n, className: i } = e;
        return (0, r.jsx)(x.Y.Consumer, {
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
                                              return ed.intl.string(ed.t["4EvBbw"]);
                                          case 1:
                                              return ed.intl.string(ed.t["1J6Xq7"]);
                                          default:
                                              return (0, ex.xb)(e);
                                      }
                                  })(t),
                              }),
                              null != n
                                  ? (0, r.jsx)(E.vN, {
                                        offset: -2,
                                        children: (0, r.jsx)(h.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: (function (e) {
                                                switch (e) {
                                                    case 0:
                                                        return ed.intl.string(ed.t.gpoQsB);
                                                    case 1:
                                                        return ed.intl.string(ed.t.k3RM8z);
                                                    default:
                                                        return (0, ex.xb)(e);
                                                }
                                            })(t),
                                            onClick: n,
                                        }),
                                    })
                                  : (0, r.jsx)(m.y, {
                                        type: m.y.Type.PULSING_ELLIPSIS,
                                        className: tC.u1,
                                        itemClassName: tC.$N,
                                    }),
                          ],
                      }),
        });
    },
    tV = (e) => {
        let { onClick: t, loading: n, className: i } = e;
        return (0, r.jsx)(x.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)(f.D, {
                          className: o()(tC._5, i),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, r.jsx)("div", { className: tC.$I, children: ed.intl.string(ed.t["1zUvlw"]) }),
                              n
                                  ? (0, r.jsx)(m.y, {
                                        type: m.y.Type.PULSING_ELLIPSIS,
                                        className: tC.u1,
                                        itemClassName: tC.$N,
                                    })
                                  : (0, r.jsx)("div", {
                                        className: o()(tC.hQ, tC.d3),
                                        children: ed.intl.string(ed.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function tF(e) {
    let { content: t, channelId: n } = e,
        [i] = s.useState(() => (0, G.Ld)("NewMessagesBarJumpToNewMessages_")),
        a = s.useCallback(() => {
            let e = eD.Ay.ackMessageId(n);
            null != e
                ? N.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: n,
                      messageId: ew.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        l = s.useCallback(() => {
            (0, C.ack)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: d } = s.useContext(x.Y);
    return d
        ? null
        : (0, r.jsxs)("div", {
              className: o()(tC.eb, { [tC.y7]: d }),
              children: [
                  (0, r.jsx)(E.vN, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: tC.$I,
                          onClick: a,
                          "aria-label": ed.intl.string(ed.t.z0Mkp3),
                          "aria-describedby": i,
                          children: (0, r.jsx)("span", { id: i, className: tC.Ln, children: t }),
                      }),
                  }),
                  (0, r.jsx)(E.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, r.jsx)("div", {
                          className: tC._o,
                          children: (0, r.jsxs)("button", {
                              type: "button",
                              onClick: l,
                              className: tC.hQ,
                              children: [
                                  (0, r.jsx)("span", { className: tC.vE, children: ed.intl.string(ed.t.e6RscS) }),
                                  (0, r.jsx)(g.M, { size: "md", color: "currentColor", className: tC.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tB(e) {
    let { channel: t, content: n, scrollManager: i } = e,
        { disableInteractions: a } = s.useContext(x.Y),
        [l, c] = s.useState(null),
        E = s.useRef(null),
        [h, m] = s.useState(null),
        R = s.useRef(null),
        O = (0, u.yK)([eS.A], () => eS.A.summaries(t.id) ?? [], [t]),
        y = (0, M.A)(O);
    s.useEffect(() => {
        d().isEqual(y, O) ||
            tA.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: O.length,
                message_counts: O.map((e) => e.count),
                start_message_ids: O.map((e) => e.startId),
                end_message_ids: O.map((e) => e.endId),
                num_participants: O.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [O, y, t.guild_id, t.id, t.type]);
    let v = (0, u.bG)(
            [tg.default],
            () => O?.map((e) => e.people?.map((e) => tg.default.getUser(e) ?? null).filter(ex.Vq)) ?? [],
            [O],
            tH,
        ),
        D = (0, u.bG)([eS.A], () => eS.A.visibleSummaryIndex()) ?? -1,
        L = O?.[D]?.topic;
    null == L && null == l && O?.length >= 1 && (L = O[0]?.topic);
    let b = s.useMemo(
            () =>
                d().debounce((e) => {
                    c(e?.id ?? null);
                }, 64),
            [c],
        ),
        w = s.useMemo(
            () =>
                d().throttle(
                    () => {
                        (0, eT.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        P = s.useCallback(
            (e) => {
                w(), b(e);
            },
            [b, w],
        ),
        [U, G] = s.useState(!1),
        F = s.useCallback(() => {
            tA.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.eh.PILL_DROPDOWN,
                    r = O[e];
                if (null == r) return;
                (0, eT.sK)(t.id, r.id), (0, eT.C6)(t.id, r.id);
                let s = () => {
                    i.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            i.addAutomaticAnchorCallback(P, !1);
                        }, 100);
                };
                i.removeAutomaticAnchorCallback(P),
                    i.addScrollCompleteCallback(s),
                    tA.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: k.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [O, t, P, i],
        ),
        H = s.useCallback((e) => {
            G(e);
            let t = R.current?.scrollTop;
            null != t && m(t);
        }, []);
    s.useEffect(() => {
        null != h && U && R.current?.scrollTo({ top: h });
    }, [h, U]);
    let j = s.useCallback(
        (e) => {
            ((0, _.vq)(e.target) && E.current?.contains(e.target)) ||
                (U &&
                    tA.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            (0, eT.$T)(t.id);
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
            () => (0, r.jsx)(e$, { channel: t, summaries: O, summariesMembers: v, selectTopic: B, setOpen: H }),
            [O, v, B, H, t],
        ),
        Y = s.useCallback(() => {
            let e = eD.Ay.ackMessageId(t.id);
            null != e
                ? N.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: t.id,
                      messageId: ew.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        K = s.useCallback(() => {
            (0, C.ack)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        z = ed.intl.string(ed.t["38qwgO"]);
    return (
        O.length > 0 && (z = "" === L || null == L ? ed.intl.string(ed.t.DwnFuG) : L),
        a
            ? null
            : (0, r.jsxs)("div", {
                  ref: E,
                  className: o()(tC.dw, tC.jh),
                  children: [
                      (0, r.jsx)("div", {
                          className: tC.qm,
                          children: (0, r.jsx)(f.D, {
                              className: tC.TQ,
                              "aria-label": ed.intl.string(ed.t.RT3MPz),
                              onClick: F,
                              children: (0, r.jsxs)("div", {
                                  className: o()({ [tC.hN]: !U, [tC.Ap]: U }),
                                  children: [
                                      (0, r.jsx)(p.K, { size: "xs", color: "currentColor", className: tC.Vd }),
                                      (0, r.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          className: o()(tC.$U, tC.lc),
                                          children: z,
                                      }),
                                      (0, r.jsx)(tp.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tp.A.Directions.DOWN,
                                          className: tC.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(f.D, { onClick: Y, className: tC.ij, children: n }),
                      (0, r.jsxs)(f.D, {
                          onClick: K,
                          className: o()(tC.hQ, tC.NX),
                          children: [
                              (0, r.jsx)("div", { className: tC.$U, children: ed.intl.string(ed.t.e6RscS) }),
                              (0, r.jsx)(g.M, { size: "md", color: "currentColor", className: tC.t3 }),
                          ],
                      }),
                      U &&
                          (0, r.jsxs)("div", {
                              className: tC.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: tC.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: tC.Ne,
                                              children: [
                                                  (0, r.jsx)(p.K, {
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
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(V.A, { className: tC.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(f.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: F,
                                              className: tC.oX,
                                              children: (0, r.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: R, className: tC.Pe, fade: !0, children: W }),
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
function tj(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: i } = s.useContext(x.Y),
        [a, l] = s.useState(null),
        c = s.useRef(null),
        [E, h] = s.useState(null),
        m = s.useRef(null),
        g = (0, u.yK)([eS.A], () => eS.A.summaries(t.id) ?? [], [t]),
        C = (0, M.A)(g);
    s.useEffect(() => {
        d().isEqual(C, g) ||
            tA.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
    let R = (0, u.bG)(
            [tg.default],
            () => g?.map((e) => e.people?.map((e) => tg.default.getUser(e) ?? null).filter(ex.Vq)) ?? [],
            [g],
            tH,
        ),
        O = (0, u.bG)([eS.A], () => eS.A.visibleSummaryIndex()) ?? -1,
        y = g?.[O]?.topic;
    null == y && null == a && g?.length >= 1 && (y = g[0]?.topic);
    let v = s.useMemo(() => d().get(g, O - 1), [O, g]),
        D = s.useMemo(() => d().get(g, O + 1), [O, g]),
        L = s.useMemo(
            () =>
                d().debounce((e) => {
                    l(e?.id ?? null);
                }, 64),
            [l],
        ),
        b = s.useMemo(
            () =>
                d().throttle(
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
                b(), L(e);
            },
            [L, b],
        ),
        [P, U] = s.useState(!1),
        G = s.useCallback(() => {
            tA.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.eh.PILL_DROPDOWN,
                    r = g[e];
                if (null == r) return;
                (0, eT.sK)(t.id, r.id), (0, eT.C6)(t.id, r.id);
                let s = () => {
                    n.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(w, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(w),
                    n.addScrollCompleteCallback(s),
                    tA.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: k.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [g, t, w, n],
        ),
        B = s.useCallback(() => {
            F(O - 1, tS.eh.PILL_NEXT_ARROW);
        }, [F, O]),
        H = s.useCallback(() => {
            F(O + 1, tS.eh.PILL_PREVIOUS_ARROW);
        }, [O, F]),
        j = s.useCallback((e) => {
            U(e);
            let t = m.current?.scrollTop;
            null != t && h(t);
        }, []);
    s.useEffect(() => {
        null != E && P && m.current?.scrollTo({ top: E });
    }, [E, P]);
    let W = s.useCallback(
        (e) => {
            ((0, _.vq)(e.target) && c.current?.contains(e.target)) ||
                (P &&
                    tA.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            (0, eT.$T)(t.id);
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
        () => (0, r.jsx)(e$, { channel: t, summaries: g, summariesMembers: R, selectTopic: F, setOpen: j }),
        [g, R, F, j, t],
    );
    if (!(0, u.bG)([eS.A], () => eS.A.shouldShowTopicsBar())) return null;
    let K = ed.intl.string(ed.t["38qwgO"]);
    return (
        g.length > 0 && (K = "" === y || null == y ? ed.intl.string(ed.t.DwnFuG) : y),
        i
            ? null
            : (0, r.jsxs)("div", {
                  ref: c,
                  className: o()(tC.$T, tC.jh),
                  children: [
                      (0, r.jsxs)("div", {
                          className: tC.sE,
                          children: [
                              (0, r.jsx)(f.D, {
                                  className: tC.LP,
                                  "aria-label": ed.intl.string(ed.t.RT3MPz),
                                  onClick: G,
                                  children: (0, r.jsxs)("div", {
                                      className: o()({ [tC.Nv]: !P, [tC.An]: P }),
                                      children: [
                                          (0, r.jsx)(p.K, { size: "xs", color: "currentColor", className: tC.Np }),
                                          (0, r.jsx)(A.E, { className: tC.r1, variant: "text-sm/medium", children: K }),
                                          (0, r.jsx)(tp.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tp.A.Directions.DOWN,
                                              className: tC._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: tC.Yk,
                                  children: [
                                      (0, r.jsx)(f.D, {
                                          "aria-label": ed.intl.string(ed.t["4huCnC"]),
                                          onClick: H,
                                          className: o()(tC.ZM, tC.vz, { [tC.jf]: null == D }),
                                          children: (0, r.jsx)(tp.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tp.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(f.D, {
                                          "aria-label": ed.intl.string(ed.t["58KOoF"]),
                                          onClick: B,
                                          className: o()(tC.ZM, tC.mt, { [tC.jf]: null == v }),
                                          children: (0, r.jsx)(tp.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tp.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      P &&
                          (0, r.jsxs)("div", {
                              className: tC.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: tC.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: tC.Ne,
                                              children: [
                                                  (0, r.jsx)(p.K, {
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
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(V.A, { className: tC.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(f.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: G,
                                              className: tC.oX,
                                              children: (0, r.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Ip, { ref: m, className: tC.Pe, fade: !0, children: Y }),
                              ],
                          }),
                  ],
              })
    );
}
let tW = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, r.jsxs)("div", {
            className: tC.YL,
            children: [
                (0, r.jsx)(A.E, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: tC.Ld,
                    children: e,
                }),
                t &&
                    (0, r.jsx)(A.E, {
                        className: tC.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: ed.intl.string(ed.t["515vjG"]),
                    }),
            ],
        });
    },
    tY = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: o()(tC.jC, n), children: t });
    },
    tK = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(tY, {
            className: t,
            children: (0, r.jsx)("div", { className: tC.wH, children: (0, r.jsx)("div", { className: tC.j3 }) }),
        });
    };
