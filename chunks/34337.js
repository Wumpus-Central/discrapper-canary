"use strict";
n.d(t, {
    ks: () => tU,
    UK: () => tW,
    Ez: () => tF,
    _z: () => tj,
    LL: () => tO,
    Uq: () => tY,
    yR: () => tK,
    OZ: () => tB,
    $o: () => tP,
    bU: () => tw,
    Uk: () => tv,
    GN: () => tV,
    Y0: () => tz,
    P$: () => tM,
    _d: () => tk,
    gL: () => tL,
    Dk: () => tD,
    Ab: () => tG,
});
var l,
    i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    u = n.n(o),
    c = n(621466),
    d = n(17928),
    m = n(922016),
    h = n(187322),
    p = n(834730),
    f = n(821609),
    g = n(289873),
    E = n(939249),
    A = n(582394),
    C = n(306788),
    x = n(534514),
    I = n(789645),
    _ = n(364522),
    S = n(493336),
    y = n(334738),
    v = n(192308),
    T = n(267102),
    N = n(619517),
    b = n(256905),
    j = n(536763),
    R = n(218394);
class P extends r.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: i, handlePreloadImage: r } = this.props;
        (i?.(e), null != r) ? r() : (0, j.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, v.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, v.closeModal)(b.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: i,
            src: r,
            original: s,
            width: a,
            height: o,
            animated: u,
            srcIsAnimated: d,
            children: m,
            shouldHideMediaOptions: h = !1,
            sourceMetadata: p,
            analyticsSource: f,
            contentType: g,
            originalContentType: E,
        } = this.props;
        (0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, b.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: r,
                        width: a,
                        height: o,
                        type: "IMAGE",
                        alt: i,
                        contentType: g,
                        originalContentType: E,
                        zoomThumbnailPlaceholder: n,
                        animated: u,
                        srcIsAnimated: d,
                        children: m,
                        trigger: l,
                        sourceMetadata: p,
                        original: s ?? r,
                    },
                ],
                shouldHideMediaOptions: h,
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
    let t = (0, T.Us)(),
        n = (0, R.j)();
    return (0, i.jsx)(P, { ...e, isWindowFocused: n, appContext: t });
}
var M = n(9578),
    O = n(56562),
    w = n(475743),
    k = n(564771),
    D = n(692051),
    U = n(915089),
    G = n(611371),
    F = n(453771),
    V = n(994064);
class B extends r.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: r,
            volume: s,
            renderLinkComponent: a,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: c,
            autoMute: d,
            onMute: m,
            mimeType: h,
            onPlay: p,
        } = this.props;
        return (0, i.jsx)(V.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, F.Hb)(t),
            fileSizeBytes: t,
            type: V.Ay.Types.AUDIO,
            className: l,
            playable: r,
            volume: s,
            onMute: m,
            autoMute: d,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: c,
            renderLinkComponent: a,
            mimeType: h,
            onPlay: p,
        });
    }
}
var H = n(248643),
    W = n(156828),
    K = n(990078),
    Y = n(408278),
    z = n(900797),
    Z = n(847374),
    q = n(305866),
    $ = n(732771),
    J = n(387758),
    X = n(980707),
    Q = n(477782),
    ee = n(32880),
    et = n(365199),
    en = n(349288),
    el = n(26430),
    ei = n(224640),
    er = n(417964),
    es = n(639169),
    ea = n(157941),
    eo = n(255438),
    eu = n(375708),
    ec = n(713152),
    ed = n(134536);
function em(e) {
    let { text: t, language: l, wordWrap: r } = e;
    function s() {
        return (0, i.jsx)("code", { className: a()(ed.kw, ec.Xb, "hljs", { [ec.Zw]: r }), children: t });
    }
    return (0, i.jsx)("pre", {
        children: (0, i.jsx)(ea.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: l,
            className: a()(ed.kw, ec.Xb, "hljs", { [ec.Zw]: r }),
            children: (0, i.jsx)(W.c2, {
                createPromise: () => Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(l)) return s();
                    let n = e.highlight(l, t, !0);
                    return null == n
                        ? s()
                        : (0, i.jsx)("code", {
                              className: a()(ed.kw, ec.Xb, "hljs", n.language, { [ec.Zw]: r }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => s(),
            }),
        }),
    });
}
function eh(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: r } = e,
        s = eu.intl.formatToPlainString(r ? eu.t.Go5Vvs : eu.t.yJcYan, { lines: l }),
        a = `${t ? eu.intl.string(eu.t.iTcuma) : eu.intl.string(eu.t.dcl9MQ)} (${s})`;
    return (0, i.jsx)("div", {
        className: ec.py,
        children: (0, i.jsx)(K.m, {
            text: a,
            children: (0, i.jsx)(Y.K, {
                icon: t ? z.t : Z.a,
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
        className: ec.VI,
        children: [
            (0, i.jsx)("div", {
                className: ec.VW,
                children: (0, i.jsx)(K.m, {
                    text: l,
                    children: (0, i.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ec.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(p.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eo.up)(n) }),
        ],
    });
}
function ef(e) {
    let { language: t, setLanguage: n, align: l } = e,
        s = r.useRef(null);
    return (0, i.jsx)(m.Y, {
        targetElementRef: s,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(q.l, {
                "aria-label": eu.intl.string(eu.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: ec.md,
                    children: (0, i.jsxs)($.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), l();
                        },
                        options: Array.from(es.Q).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)($.a3, { placeholder: eu.intl.string(eu.t.GofftW) }),
                            (0, i.jsx)($.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(K.m, {
                ariaHidden: !0,
                text: eu.intl.string(eu.t.utm4qs),
                children: (0, i.jsx)(E.D, {
                    ...e,
                    className: ec.Qw,
                    "aria-label": eu.intl.string(eu.t.utm4qs),
                    children: (0, i.jsx)(J.G, { size: "sm", color: "currentColor", ref: s }),
                }),
            }),
    });
}
function eg(e) {
    let { wordWrap: t, setWordWrap: n, url: l, fileName: s } = e,
        a = r.useRef(null),
        o = r.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Y, {
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
                        "aria-label": eu.intl.string(eu.t.PdRCRg),
                        children: (0, i.jsxs)(Q.rX, {
                            children: [
                                (0, i.jsx)(Q.Dr, {
                                    id: "download",
                                    label: eu.intl.string(eu.t["1WjMbC"]),
                                    icon: ee.s,
                                    action: () => {
                                        o.current?.click(), l();
                                    },
                                }),
                                (0, i.jsx)(Q.sL, {
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
                    (0, i.jsx)(K.m, {
                        ariaHidden: !0,
                        text: eu.intl.string(eu.t["UKOtz+"]),
                        children: (0, i.jsx)(E.D, {
                            ...e,
                            className: ec.IQ,
                            "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                            children: (0, i.jsx)(et.j, { ref: a, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(en.Anchor, {
                ref: o,
                href: l,
                download: s,
                className: ec.op,
                children: (0, i.jsx)(ee.s, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eE(e) {
    return (0, i.jsx)(K.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: eu.intl.string(eu.t["0PQYk3"]),
        children: (0, i.jsx)(E.D, {
            className: ec.R1,
            "aria-label": eu.intl.string(eu.t["0PQYk3"]),
            onClick: () => {
                (0, v.openModal)((t) => (0, i.jsx)(eC, { ...e, ...t }));
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
            fileContents: r,
            expanded: s,
            setExpanded: o,
            language: u,
            setLanguage: c,
            wordWrap: d,
            setWordWrap: m,
            bytesLeft: h,
            className: p,
        } = e,
        f = r?.split("\n"),
        E = f?.length ?? 0,
        A = s ? 100 : 6,
        C = 0 === h,
        x = "";
    C && s && E > A ? (x = "\n...") : C || (x = "..."),
        "" !== x &&
            (C
                ? (x += " " + eu.intl.formatToPlainString(eu.t.DQnFp2, { lines: E - A }))
                : (x += " " + eu.intl.formatToPlainString(eu.t["1+gGcK"], { formattedBytes: (0, eo.up)(h) })));
    let I = f?.slice(0, A).join("\n") + x,
        S = (0, er.sJ)(I),
        y = s || A < E;
    return (0, i.jsxs)("div", {
        className: a()(p, ec.kL),
        children: [
            (0, i.jsx)(_.Ip, {
                className: ec.FS,
                children:
                    null == r
                        ? (0, i.jsx)(g.y, { className: ec.u1 })
                        : (0, i.jsx)(em, { text: S, language: u, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: ec.qr,
                role: "group",
                "aria-label": eu.intl.string(eu.t.TlXA8e),
                children: [
                    y ? (0, i.jsx)(eh, { expanded: s, setExpanded: o, numLines: E, isWholeFile: C }) : null,
                    (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: ec.Kb }),
                    (0, i.jsx)(ef, { language: u, setLanguage: c, align: "top" }),
                    null != r
                        ? (0, i.jsx)(eE, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: u,
                              wordWrap: d,
                              fileContents: r,
                              bytesLeft: h,
                          })
                        : null,
                    (0, i.jsx)(eg, { wordWrap: d, setWordWrap: m, url: t, fileName: n }),
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
            transitionState: s,
            language: a,
            wordWrap: o,
            fileContents: u,
            bytesLeft: d,
            onClose: m,
        } = e,
        [h, f] = r.useState(a),
        [E, A] = r.useState(o),
        C = r.useRef(null),
        x = u ?? "";
    return (
        0 !== d && (x += `... ${eu.intl.formatToPlainString(eu.t["1+gGcK"], { formattedBytes: (0, eo.up)(d) })}`),
        r.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != C.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        e.selectNodeContents(C.current), n.removeAllRanges(), n.addRange(e);
                    }
                }
            }
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, []),
        (0, i.jsx)(ei.d, {
            transitionState: s,
            "aria-label": eu.intl.string(eu.t["qxQjc+"]),
            size: "xxl",
            onClose: m,
            children: (0, i.jsxs)("div", {
                className: ec.jE,
                children: [
                    (0, i.jsx)(_.Ip, {
                        className: ec.ot,
                        children:
                            null == u
                                ? (0, i.jsx)(g.y, { className: ec.u1 })
                                : (0, i.jsx)("div", {
                                      ref: C,
                                      children: (0, i.jsx)(em, { text: x, language: h, wordWrap: E }),
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": eu.intl.string(eu.t.TlXA8e),
                        children: (0, i.jsxs)(p.E, {
                            color: "text-default",
                            className: ec.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                                (0, i.jsx)("div", { className: ec.Kb }),
                                (0, i.jsx)(ef, { language: h, setLanguage: f, align: "bottom" }),
                                (0, i.jsx)(eg, { wordWrap: E, setWordWrap: A, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let ex = r.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: s, className: o, onClick: u, onContextMenu: c } = e,
            [d, m] = r.useState(!1),
            [h, p] = r.useState(n.split(".").slice(-1)[0]),
            [f, g] = r.useState(!1),
            {
                fileContents: E,
                bytesLeft: A,
                hadError: C,
            } = (function (e, t) {
                let [n, l] = r.useState(!1),
                    [i, s] = r.useState(null),
                    [a, o] = r.useState(1);
                return (
                    r.useEffect(() => {
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
                                    r = n.headers.get("content-range") ?? "0",
                                    a = n.headers.get("content-length") ?? "1",
                                    u = parseInt(r.split("/")[1]) - parseInt(a);
                                s(0 === u ? i : i.slice(0, -1)), o(u), l(!1);
                            } catch (e) {
                                o(0), l(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: i, bytesLeft: a, hadError: n }
                );
            })(t, s);
        return C
            ? (0, i.jsx)(k.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: c, className: o })
            : (0, i.jsx)(eA, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: E,
                  bytesLeft: A,
                  expanded: d,
                  setExpanded: m,
                  language: h,
                  setLanguage: p,
                  wordWrap: f,
                  setWordWrap: g,
                  className: a()(ec.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eI = n(863922),
    e_ = n(822074),
    eS = n(534890),
    ey = n(442433),
    ev = n(640708),
    eT = n(941971),
    eN = n(707539),
    eb = n(576705),
    ej = n(568548),
    eR = n(340833),
    eP = n(913642),
    eL = n(935208),
    eM = n(453302);
n(321073);
var eO = n(97808),
    ew = n(778712),
    ek = n(707606),
    eD = n(403362),
    eU = n(585936);
let eG = (0, ek.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: eU.pO })
            : (0, i.jsx)("div", {
                  className: eU.pO,
                  children: (0, i.jsx)(eO.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: ew._3.SIZE_16,
                      className: eU.pO,
                  }),
              });
    }),
    eF = (e) => {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: r = 2, guildId: s } = e,
            { totalSize: a, knownSize: o } = t;
        if (a < l) return null;
        let c = u()(n)
                .filter(eD.Vq)
                .take(r)
                .map((e) => (0, i.jsx)(eG, { member: e, guildId: s }, e.id))
                .value(),
            d = a - o;
        for (let e = 0; e < d && c.length < r; e++)
            c.push((0, i.jsx)(eG, { empty: !0, guildId: s }, `empty-member-${e}`));
        let m = Math.max(Math.min(a - c.length, 99), 0);
        if (1 === m) {
            let e = n[r];
            c.push((0, i.jsx)(eG, { member: e, guildId: s }, e.id));
        }
        return (0, i.jsx)("div", {
            className: eU.iE,
            children: (0, i.jsxs)("div", {
                className: eU.S3,
                children: [c, m > 1 ? (0, i.jsxs)("div", { className: eU.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var eV = n(303727),
    eB = n(678750);
function eH() {
    return (0, i.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eB.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: eB.Kk,
                        children: (0, i.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eB.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(eV.A, { className: eB.uf }),
                ],
            }),
            (0, i.jsx)(x.D, {
                className: eB.wx,
                variant: "heading-xl/semibold",
                children: eu.intl.string(eu.t.yJHJei),
            }),
            (0, i.jsx)(p.E, {
                className: eB.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: eu.intl.string(eu.t.p2dIh6),
            }),
        ],
    });
}
var eW = n(652215),
    eK = n(670455),
    eY = n(559004);
function ez(e) {
    let { summary: t, channel: l, members: s, guildId: a, unread: o, onClick: u } = e,
        [c, m] = r.useState(!1),
        h = (0, eN.aK)(eL.default.extractTimestamp(t.startId)),
        f = (0, d.bG)([e_.A], () => e_.A.summaryFeedback(t));
    function g(e, n) {
        e.stopPropagation(), (0, eM.A)({ summary: t, channel: l, rating: n });
    }
    let A = eb.A.can(eW.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(E.D, {
        className: eY.kL,
        onClick: u,
        onContextMenu: function (e) {
            A &&
                (0, ey.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: [
            (0, i.jsx)(eT.A, { hovered: c, unread: o, className: eY.dM }),
            (0, i.jsx)("div", {
                className: eY.uV,
                children: (0, i.jsxs)("div", {
                    className: eY.Hw,
                    children: [
                        (0, i.jsx)(p.E, {
                            className: eY.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: h,
                        }),
                        (0, i.jsx)(ev.A, { height: 4, width: 4, "aria-hidden": "true", className: eY.Om }),
                        (0, i.jsx)(eS.o, { size: "xxs", color: "currentColor", className: eY.Kk }),
                        (0, i.jsx)(p.E, {
                            className: eY.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        s.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ev.A, { height: 4, width: 4, "aria-hidden": "true", className: eY.Om }),
                                    (0, i.jsx)(eF, {
                                        partySize: { knownSize: s.length, totalSize: s.length },
                                        maxAvatarsShown: 3,
                                        members: s,
                                        guildId: a,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            c &&
                null == f &&
                (0, i.jsxs)("div", {
                    className: eY.p_,
                    children: [
                        (0, i.jsx)(E.D, {
                            onClick: (e) => g(e, eK.P0.GOOD),
                            children: (0, i.jsx)(eP.A, { className: eY.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(E.D, {
                            onClick: (e) => g(e, eK.P0.BAD),
                            children: (0, i.jsx)(eR.A, { className: eY.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(p.E, { color: "text-strong", variant: "text-sm/semibold", className: eY.DD, children: t.topic }),
            (0, i.jsx)(p.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eY.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eZ(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: s, setOpen: a } = e,
        o = (0, d.bG)([ej.Ay], () => ej.Ay.getOldestUnreadMessageId(l.id)),
        u = r.useCallback(
            (e) => {
                s(e), a(!1);
            },
            [s, a],
        );
    return t.length < 1
        ? (0, i.jsx)(eH, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let r = n[t] ?? [];
                  return (0, i.jsx)(
                      ez,
                      {
                          summary: e,
                          channel: l,
                          members: r,
                          guildId: l.guild_id,
                          unread: null != o && eL.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var eq = n(885386),
    e$ = n(113494),
    eJ = n(782134),
    eX = n(775602),
    eQ = n(228366),
    e0 = n(713021),
    e1 = n(745601),
    e2 = n(20504),
    e3 = n(625494),
    e4 = n(927813),
    e6 = n(824744);
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
let tr = [0.75, 1, 1.5, 2];
var ts = n(793692);
let ta = [0, 0, 0, 0, 0];
function to(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function tu(e) {
    var t, n, l, i;
    let { context: r, devicePixelRatio: s, canvasHeight: a, segmentValue: o, segmentIndex: u, constrainMin: c } = e,
        d = c ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * u * s),
        (n = (a / 2 - d / 2) * s),
        (l = d * s),
        (i = +s),
        r.moveTo(t, n + i),
        r.lineTo(t, n + l - i),
        r.arc(t + i, n + l - i, i, Math.PI, 0, !0),
        r.lineTo(t + 2 * i, n + i),
        r.arc(t + i, n + i, i, 0, Math.PI, !0),
        r.closePath());
}
function tc(e, t, n) {
    let [l, i] = r.useState(e),
        [s, a] = r.useState(e),
        o = r.useRef(s);
    return (
        r.useLayoutEffect(() => {
            o.current = s;
        }),
        r.useLayoutEffect(() => {
            i(o.current), a(e);
        }, [e, t, n]),
        [l, s]
    );
}
function td(e, t, n, l) {
    if (null == l) return [t, !1];
    let i = Math.min((n - l) / 200, 1);
    return 1 === i ? [t, !1] : [(0, te.De)(e, t, i), !0];
}
function tm(e) {
    let t,
        n,
        {
            className: l,
            waveform: s,
            currentTime: o,
            duration: u,
            played: c,
            playing: d,
            onDrag: m,
            onDragStart: h,
            onDragEnd: p,
        } = e,
        { ref: f, width: g } = (0, e8.Ay)(),
        E = r.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((u <= 0.5 ? 40 : u >= 45 ? 294 : ((Math.min(u, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [u],
        ),
        A = r.useRef(void 0),
        C =
            ((t = r.useMemo(
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
            (n = r.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(g),
                [g],
            )),
            r.useMemo(
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
                                        r = 0,
                                        s = 0;
                                    for (let n = i; n < t && n < e.length; n++) (r += e[n]), s++;
                                    (l[l.length] = r / s), (i = t);
                                }
                                return l;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? ta,
                [t, n],
            )),
        x = r.useRef(c),
        I = r.useRef(d),
        _ = r.useRef(null),
        S = window.devicePixelRatio,
        {
            lastBackgroundFillColor: y,
            backgroundFillColor: v,
            lastActiveFillColor: T,
            activeFillColor: N,
            lastInactiveFillColor: b,
            inactiveFillColor: j,
        } = (function (e, t) {
            let n = (0, e7.r)(e5.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, e7.r)(e5.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, e7.r)(e5.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                r = (0, e7.r)(e5.A.unsafe_rawColors.BRAND_430).hex(),
                s = (0, e7.r)(e5.A.unsafe_rawColors.WHITE).hex(),
                a = t ? r : n,
                [o, u] = tc(a, t, e),
                [c, d] = tc(t ? s : e ? i : l, t, e),
                [m, h] = tc(e ? a : l, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: u,
                lastActiveFillColor: c,
                activeFillColor: d,
                lastInactiveFillColor: m,
                inactiveFillColor: h,
            };
        })(c, d),
        R = { currentTime: o, duration: u, played: c },
        P = r.useRef(R);
    r.useEffect(() => {
        P.current = R;
    }),
        r.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = P.current,
                l = to({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            A.current = C.map((e, t) => new ti(t < l ? e : 0));
        }, [C]),
        r.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = to({ showAll: !c, currentTime: o, duration: u, numSegments: C.length });
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                if (n < t) {
                    l.animateTo(C[n]);
                    continue;
                }
                l.reset();
            }
        }, [C, o, u, c]),
        r.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let l = f.current,
                        i = l?.getContext("2d"),
                        r = A.current;
                    if (null == l || null == i || null == r) return;
                    let s = !1;
                    (x.current !== c || I.current !== d) && ((x.current = c), (I.current = d), (_.current = n)),
                        null != _.current && n > _.current + 200 && (_.current = null);
                    let a = l.height / S;
                    i.clearRect(0, 0, l.width, l.height), i.beginPath();
                    let [o, u] = td(y, v, n, _.current);
                    (s = s || u), (i.fillStyle = o);
                    for (let e = 0; e < C.length; e++)
                        tu({
                            context: i,
                            devicePixelRatio: S,
                            canvasHeight: a,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [m, h] = td(b, j, n, _.current);
                    s = s || h;
                    let [p, g] = td(T, N, n, _.current);
                    s = s || g;
                    for (let e = 0; e < r.length; e++) {
                        let t = r[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? m : p),
                            tu({
                                context: i,
                                devicePixelRatio: S,
                                canvasHeight: a,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (s = s || t.isAnimating()),
                            i.fill();
                    }
                    s && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [f, S, C, g, o, u, c, d, y, v, T, N, b, j]);
    let [, L] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: l, onDragEnd: i } = e,
            [s, a] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (s)
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
            }, [t, s, i, n]),
            [
                s,
                r.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (a(!0), l?.(), n?.(e9(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: f, onDrag: m, onDragStart: h, onDragEnd: p });
    return (0, i.jsx)("canvas", {
        onMouseDown: L,
        className: a()(ts.J, l),
        style: { width: E },
        ref: f,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var th = n(253654);
let tp = r.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function tf(e) {
    let { played: t, duration: n, currentTime: l } = e,
        r = null == n ? "--:--" : t ? (0, V.rB)(Math.ceil(n - l)) : (0, V.rB)(Math.ceil(n));
    return (0, i.jsx)(p.E, { variant: "text-sm/normal", className: th.p0, tabularNumbers: !0, children: r });
}
let tg = r.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: s,
            onMute: o,
            waveform: u,
            durationSecs: c,
            onVolumeShow: m,
            onVolumeHide: h,
            onPlay: f,
            onPause: g,
            onError: A,
            playbackCacheKey: C,
        } = e,
        x = r.useRef(null),
        I = r.useMemo(() => (null != C ? e0.Ay.getPlaybackPosition(C) : 0), [C]),
        _ = (0, d.bG)([e0.Ay], () => e0.Ay.getPlaybackRate(e0.k0.VOICE_MESSAGE)),
        [S, y] = r.useState(I > 0),
        [v, T] = r.useState(I),
        [N, b] = r.useState(c),
        [j, R] = r.useState(!1),
        [P, L] = r.useState(!1),
        [M, O] = r.useState(!1),
        [w, k] = r.useState(!1),
        [D, U] = r.useState("none"),
        [G, F] = r.useState(() => ("function" == typeof l ? l() : l)),
        V = r.useRef(void 0),
        B = r.useCallback(() => {
            L((e) => !e), k(!0);
        }, []),
        H = r.useCallback(() => {
            U("metadata");
        }, []),
        W = r.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || b(t);
        }, []),
        K = r.useCallback(
            (e) => {
                null != c &&
                    null != C &&
                    eQ.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: c });
            },
            [C, c],
        ),
        Y = r.useCallback(() => {
            L(!1),
                null == V.current &&
                    (V.current = setTimeout(() => {
                        y(!1), k(!1), (V.current = void 0);
                    }, 500));
        }, []),
        z = r.useCallback(() => {
            M || (K(0), Y());
        }, [Y, M, K]),
        Z = r.useCallback((e) => {
            let t = x.current;
            null != t && (T(e), (t.currentTime = e), y(!0));
        }, []),
        q = r.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.error;
            A?.(t);
        }, [A]),
        $ = r.useCallback(
            (e) => {
                let t = (0, e6.w)(e, 1);
                R(0 === t), F(t), s?.(t);
            },
            [s],
        ),
        J = r.useCallback(() => {
            R(!j), o?.(!j);
        }, [j, o]),
        X = r.useCallback(() => {
            O(!0);
        }, []),
        Q = r.useCallback(() => {
            O(!1), v === N && Y(), K(v);
        }, [v, N, Y, K]),
        ee = r.useCallback(
            (e) => {
                let t = x.current;
                null == N || null == t || (Z(e * N), clearTimeout(V.current), (V.current = void 0));
            },
            [N, Z],
        );
    r.useEffect(() => {
        !S && P && y(!0);
    }, [P, S]);
    let et = r.useRef(null),
        en = { played: w, currentTime: v, onPause: g, onPlay: f },
        el = r.useRef(en);
    r.useEffect(() => {
        el.current = en;
    }),
        r.useEffect(() => {
            I > 0 && Z(I);
        }, [I, Z]),
        r.useEffect(() => {
            let e;
            return (
                P &&
                    !M &&
                    (e = setInterval(() => {
                        K(x.current?.currentTime ?? 0);
                    }, e4.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [P, M, K]),
        r.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || P)
                if (P) (et.current = performance.now()), l?.(!1, t, (x.current?.duration ?? 0) * e4.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        l = et.current;
                    n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null);
                }
        }, [P, n, N, K]),
        r.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = x.current;
                    null == n || (T(n.currentTime), P && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [x, P, T]),
        r.useEffect(() => {
            if (P)
                return (
                    e3._.dispatch(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e3._.subscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e3._.unsubscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && L(!1);
            }
        }, [n, P, L]);
    let ei = P ? e$.E : eJ.u,
        er = P ? eu.intl.string(eu.t["3XohGn"]) : eu.intl.string(eu.t.AlHqHT),
        es = eu.intl.formatToPlainString(eu.t.LgCPMt, { playbackRate: _ }),
        ea = `${_.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(r.Suspense, {
                  children: (0, i.jsx)(tp, {
                      ref: x,
                      className: th.Zn,
                      src: n,
                      preload: D,
                      playing: P && !M,
                      onEnded: z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: j,
                      volume: G,
                      playbackRate: _,
                  }),
              })
            : (0, i.jsx)(e1.A, {
                  ref: x,
                  className: th.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: j,
                  volume: G,
                  playbackRate: _,
                  playing: P && !M,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([eX.Ay], () => eX.Ay.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(th.kL, { [th.he]: P }),
        onMouseEnter: H,
        role: "region",
        "aria-label": eu.intl.string(eu.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: th.Kl,
                children: (0, i.jsx)("div", { className: a()(th.fq, { [th.VN]: eo }) }),
            }),
            (0, i.jsx)(E.D, {
                className: th.k0,
                onClick: B,
                "aria-label": er,
                children: (0, i.jsx)(ei, { className: th.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(tm, {
                className: th.ou,
                waveform: u,
                currentTime: v,
                duration: N ?? 1,
                playing: P,
                played: S,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tf, { played: S, currentTime: v, duration: N }),
            (0, i.jsx)(E.D, {
                className: th.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (tr.indexOf(_) + 1) % tr.length),
                        void ((e = tr[n]),
                        (t = e0.k0.VOICE_MESSAGE),
                        eQ.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": es,
                children: (0, i.jsx)(p.E, { variant: "text-xs/semibold", className: th.Sn, children: ea }),
            }),
            (0, i.jsx)(e2.A, {
                className: th.bk,
                iconClassName: th._j,
                iconColor: "currentColor",
                sliderWrapperClassName: th.MQ,
                muted: j,
                value: (0, e6.M)(G, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: $,
                onToggleMute: J,
                onVolumeShow: m,
                onVolumeHide: h,
            }),
            t,
        ],
    });
});
var tE = n(287809),
    tA = n(147925),
    tC = n(174459),
    tx = n(587481),
    tI = n(838541),
    t_ = n(521732),
    tS = n(650583),
    ty = n(814131);
let tv = { delay: 300, position: "top" };
function tT(e) {
    return (t) => {
        e?.(t), (0, tx.ls)(t);
    };
}
function tN(e) {
    return (t) => {
        e?.(t), (0, tx.y5)(t);
    };
}
function tb(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": eu.intl.string(eu.t.fSiQ3A),
        className: ty.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tS.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)("span", { className: ty.k_, children: eu.intl.string(eu.t.fSiQ3A) }),
            (0, i.jsx)("span", { className: ty.a7, children: t }),
        ],
    });
}
function tj(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: s = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [u, c] = r.useState(!1),
        d = r.useRef(null);
    return (n || u) && !l && eq._z.getSetting() && null != t && "" !== t && !0 !== s
        ? (0, i.jsx)("div", {
              className: ty.NO,
              children: (0, i.jsx)(m.Y, {
                  targetElementRef: d,
                  animation: m.Y.Animation.FADE,
                  renderPopout: () => (0, i.jsx)(tb, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, i.jsx)(h.vN, {
                          offset: 4,
                          children: (0, i.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": eu.intl.string(eu.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: a()(ty.DV, { [ty.yZ]: !0, [ty.I5]: o }),
                              children: eu.intl.string(eu.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tR(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: s,
            alt: a,
            renderAdjacentContent: o,
            renderOverlayContent: u,
            disableAltTextDisplay: c = !1,
            hiddenSpoilers: d,
            mosaicStyleAlt: m,
            mediaLayoutType: h,
            reducedSizeAltTextButton: f,
            ...g
        } = e,
        E = tT(t),
        A = tN(n);
    (l = null == l ? tx.v1 : l), (s = null == s ? tx.uj : s);
    let [C, x] = r.useState(!0),
        I = h === tI.dG.MOSAIC || !0 === m,
        _ = C && !c && eq._z.getSetting() && null != a && "" !== a && !0 !== d;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(H.A, {
                ...g,
                alt: a,
                autoMute: s,
                mediaLayoutType: h,
                onControlsHide: () => x(!1),
                onControlsShow: () => x(!0),
                onMute: A,
                onVolumeChange: E,
                renderLinkComponent: tw,
                renderOverlayContent: u,
                volume: l,
            }),
            null != o && o(),
            I &&
                (0, i.jsx)(tj, {
                    alt: a,
                    controlsVisible: C,
                    disableAltTextDisplay: c,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: f,
                }),
            !I &&
                _ &&
                (0, i.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: ty.R5,
                    children: a,
                }),
        ],
    });
}
function tP(e) {
    return (0, i.jsx)(tR, { ...e });
}
function tL(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: s,
            onVolumeHide: a,
            renderAdjacentContent: o,
            ...u
        } = e,
        c = tT(t),
        d = tN(l);
    return (
        (n = null == n ? tx.v1 : n),
        (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(B, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: s,
                    onVolumeHide: a,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tw,
                }),
                null != o && o(),
            ],
        })
    );
}
function tM(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...r } = e,
        s = tT(t),
        a = tN(l);
    return (n = null == n ? tx.v1 : n), (0, i.jsx)(tg, { ...r, onVolumeChange: s, onMute: a, volume: n });
}
function tO(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: s,
            imageContainerClassName: o,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: d,
            imageContainerStyle: f,
            mosaicStyleAlt: g,
        } = e,
        E = d === tI.dG.MOSAIC || !0 === g,
        A = !u && eq._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = r.createRef();
    return (0, i.jsxs)("div", {
        className: a()(ty.fo, s),
        children: [
            (0, i.jsxs)("div", {
                className: a()(ty.ZS, o),
                style: f,
                children: [(0, i.jsx)(L, { ...e }), null != l && l()],
            }),
            E &&
                A &&
                (0, i.jsx)("div", {
                    className: ty.Y1,
                    children: (0, i.jsx)(m.Y, {
                        targetElementRef: C,
                        animation: m.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tb, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, i.jsx)(h.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": eu.intl.string(eu.t.fSiQ3A),
                                    className: a()(ty.DV, { [ty.I5]: c }),
                                    children: eu.intl.string(eu.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !E &&
                A &&
                (0, i.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: ty.R5,
                    children: t,
                }),
        ],
    });
}
function tw(e) {
    return (0, i.jsx)(M.A, { ...e });
}
function tk(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(r.Fragment, { children: [(0, i.jsx)(ex, { ...n }), null != t && t()] });
}
function tD(e) {
    return (0, i.jsx)(k.A, { ...e });
}
var tU = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tG = (e) => {
    let { type: t = 0, onClick: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)("div", {
                      onClick: n,
                      className: a()(ty.Sg, l),
                      children: [
                          (0, i.jsx)("div", {
                              className: ty.$I,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return eu.intl.string(eu.t["4EvBbw"]);
                                      case 1:
                                          return eu.intl.string(eu.t["1J6Xq7"]);
                                      default:
                                          return (0, eD.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, i.jsx)(h.vN, {
                                    offset: -2,
                                    children: (0, i.jsx)(f.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return eu.intl.string(eu.t.gpoQsB);
                                                case 1:
                                                    return eu.intl.string(eu.t.k3RM8z);
                                                default:
                                                    return (0, eD.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: ty.u1,
                                    itemClassName: ty.$N,
                                }),
                      ],
                  }),
    });
};
function tF(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)(E.D, {
                      className: a()(ty._5, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, i.jsx)("div", { className: ty.$I, children: eu.intl.string(eu.t["1zUvlw"]) }),
                          n
                              ? (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: ty.u1,
                                    itemClassName: ty.$N,
                                })
                              : (0, i.jsx)("div", {
                                    className: a()(ty.hQ, ty.d3),
                                    children: eu.intl.string(eu.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tV(e) {
    let { content: t, channelId: n } = e,
        [l] = r.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        s = r.useCallback(() => {
            let e = ej.Ay.ackMessageId(n);
            null != e
                ? S.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: n,
                      messageId: eL.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = r.useCallback(() => {
            (0, y.ack)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = r.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: a()(ty.eb, { [ty.y7]: u }),
              children: [
                  (0, i.jsx)(h.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: ty.$I,
                          onClick: s,
                          "aria-label": eu.intl.string(eu.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: ty.Ln, children: t }),
                      }),
                  }),
                  (0, i.jsx)(h.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, i.jsx)("div", {
                          className: ty._o,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: ty.hQ,
                              children: [
                                  (0, i.jsx)("span", { className: ty.vE, children: eu.intl.string(eu.t.e6RscS) }),
                                  (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: ty.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tB(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: s } = r.useContext(D.Y),
        [o, m] = r.useState(null),
        h = r.useRef(null),
        [f, g] = r.useState(null),
        v = r.useRef(null),
        T = (0, d.yK)([e_.A], () => e_.A.summaries(t.id) ?? [], [t]),
        N = (0, w.A)(T);
    r.useEffect(() => {
        u().isEqual(N, T) ||
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: T.length,
                message_counts: T.map((e) => e.count),
                start_message_ids: T.map((e) => e.startId),
                end_message_ids: T.map((e) => e.endId),
                num_participants: T.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [T, N, t.guild_id, t.id, t.type]);
    let b = (0, d.bG)(
            [tE.default],
            () => T?.map((e) => e.people?.map((e) => tE.default.getUser(e) ?? null).filter(eD.Vq)) ?? [],
            [T],
            tH,
        ),
        j = (0, d.bG)([e_.A], () => e_.A.visibleSummaryIndex()) ?? -1,
        R = T?.[j]?.topic;
    null == R && null == o && T?.length >= 1 && (R = T[0]?.topic);
    let P = r.useMemo(
            () =>
                u().debounce((e) => {
                    m(e?.id ?? null);
                }, 64),
            [m],
        ),
        L = r.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eI.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = r.useCallback(
            (e) => {
                L(), P(e);
            },
            [P, L],
        ),
        [k, U] = r.useState(!1),
        F = r.useCallback(() => {
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !k,
                num_summaries: T.length,
                message_counts: T.map((e) => e.count),
                start_message_ids: T.map((e) => e.startId),
                end_message_ids: T.map((e) => e.endId),
                num_participants: T.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!k);
        }, [k, T, U, t]),
        V = r.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t_.eh.PILL_DROPDOWN,
                    i = T[e];
                null != i &&
                    ((0, eI.sK)(t.id, i.id),
                    (0, eI.C6)(t.id, i.id),
                    l.removeAutomaticAnchorCallback(M),
                    l.addScrollCompleteCallback(function e() {
                        l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(M, !1);
                            }, 100);
                    }),
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
                        jumpType: O.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [T, t, M, l],
        ),
        B = r.useCallback((e) => {
            U(e);
            let t = v.current?.scrollTop;
            null != t && g(t);
        }, []);
    r.useEffect(() => {
        null != f && k && v.current?.scrollTo({ top: f });
    }, [f, k]);
    let H = r.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && h.current?.contains(e.target)) ||
                (k &&
                    tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: T.length,
                        message_counts: T.map((e) => e.count),
                        start_message_ids: T.map((e) => e.startId),
                        end_message_ids: T.map((e) => e.endId),
                        num_participants: T.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                B(!1));
        },
        [k, T, t, B],
    );
    r.useEffect(
        () => (
            l.addAutomaticAnchorCallback(M),
            () => {
                l.removeAutomaticAnchorCallback(M);
            }
        ),
        [l, M],
    ),
        r.useEffect(() => {
            (0, eI.$T)(t.id);
        }, [t.id]),
        r.useEffect(
            () => (
                document.addEventListener("mousedown", H),
                () => {
                    document.removeEventListener("mousedown", H);
                }
            ),
            [H],
        );
    let W = r.useMemo(
            () => (0, i.jsx)(eZ, { channel: t, summaries: T, summariesMembers: b, selectTopic: V, setOpen: B }),
            [T, b, V, B, t],
        ),
        K = r.useCallback(() => {
            let e = ej.Ay.ackMessageId(t.id);
            null != e
                ? S.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eL.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        Y = r.useCallback(() => {
            (0, y.ack)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        z = eu.intl.string(eu.t["38qwgO"]);
    return (
        T.length > 0 && (z = "" === R || null == R ? eu.intl.string(eu.t.DwnFuG) : R),
        s
            ? null
            : (0, i.jsxs)("div", {
                  ref: h,
                  className: a()(ty.dw, ty.jh),
                  children: [
                      (0, i.jsx)("div", {
                          className: ty.qm,
                          children: (0, i.jsx)(E.D, {
                              className: ty.TQ,
                              "aria-label": eu.intl.string(eu.t.RT3MPz),
                              onClick: F,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [ty.hN]: !k, [ty.Ap]: k }),
                                  children: [
                                      (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: ty.Vd }),
                                      (0, i.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          className: a()(ty.$U, ty.lc),
                                          children: z,
                                      }),
                                      (0, i.jsx)(tA.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tA.A.Directions.DOWN,
                                          className: ty.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(E.D, { onClick: K, className: ty.ij, children: n }),
                      (0, i.jsxs)(E.D, {
                          onClick: Y,
                          className: a()(ty.hQ, ty.NX),
                          children: [
                              (0, i.jsx)("div", { className: ty.$U, children: eu.intl.string(eu.t.e6RscS) }),
                              (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: ty.t3 }),
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
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: ty.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(x.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eu.intl.string(eu.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: ty.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(E.D, {
                                              "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                              onClick: F,
                                              className: ty.oX,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(_.Ip, { ref: v, className: ty.Pe, fade: !0, children: W }),
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
function tW(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = r.useContext(D.Y),
        [s, o] = r.useState(null),
        m = r.useRef(null),
        [h, f] = r.useState(null),
        g = r.useRef(null),
        A = (0, d.yK)([e_.A], () => e_.A.summaries(t.id) ?? [], [t]),
        y = (0, w.A)(A);
    r.useEffect(() => {
        u().isEqual(y, A) ||
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [A, y, t.guild_id, t.id, t.type]);
    let v = (0, d.bG)(
            [tE.default],
            () => A?.map((e) => e.people?.map((e) => tE.default.getUser(e) ?? null).filter(eD.Vq)) ?? [],
            [A],
            tH,
        ),
        T = (0, d.bG)([e_.A], () => e_.A.visibleSummaryIndex()) ?? -1,
        N = A?.[T]?.topic;
    null == N && null == s && A?.length >= 1 && (N = A[0]?.topic);
    let b = r.useMemo(() => u().get(A, T - 1), [T, A]),
        j = r.useMemo(() => u().get(A, T + 1), [T, A]),
        R = r.useMemo(
            () =>
                u().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        P = r.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eI.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = r.useCallback(
            (e) => {
                P(), R(e);
            },
            [R, P],
        ),
        [M, k] = r.useState(!1),
        U = r.useCallback(() => {
            tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !M,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                k(!M);
        }, [M, A, k, t]),
        F = r.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t_.eh.PILL_DROPDOWN,
                    i = A[e];
                null != i &&
                    ((0, eI.sK)(t.id, i.id),
                    (0, eI.C6)(t.id, i.id),
                    n.removeAutomaticAnchorCallback(L),
                    n.addScrollCompleteCallback(function e() {
                        n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(L, !1);
                            }, 100);
                    }),
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
                        jumpType: O.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [A, t, L, n],
        ),
        V = r.useCallback(() => {
            F(T - 1, t_.eh.PILL_NEXT_ARROW);
        }, [F, T]),
        B = r.useCallback(() => {
            F(T + 1, t_.eh.PILL_PREVIOUS_ARROW);
        }, [T, F]),
        H = r.useCallback((e) => {
            k(e);
            let t = g.current?.scrollTop;
            null != t && f(t);
        }, []);
    r.useEffect(() => {
        null != h && M && g.current?.scrollTo({ top: h });
    }, [h, M]);
    let W = r.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && m.current?.contains(e.target)) ||
                (M &&
                    tC.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: A.length,
                        message_counts: A.map((e) => e.count),
                        start_message_ids: A.map((e) => e.startId),
                        end_message_ids: A.map((e) => e.endId),
                        num_participants: A.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                H(!1));
        },
        [M, A, t, H],
    );
    r.useEffect(
        () => (
            n.addAutomaticAnchorCallback(L),
            () => {
                n.removeAutomaticAnchorCallback(L);
            }
        ),
        [n, L],
    ),
        r.useEffect(() => {
            (0, eI.$T)(t.id);
        }, [t.id]),
        r.useEffect(
            () => (
                document.addEventListener("mousedown", W),
                () => {
                    document.removeEventListener("mousedown", W);
                }
            ),
            [W],
        );
    let K = r.useMemo(
        () => (0, i.jsx)(eZ, { channel: t, summaries: A, summariesMembers: v, selectTopic: F, setOpen: H }),
        [A, v, F, H, t],
    );
    if (!(0, d.bG)([e_.A], () => e_.A.shouldShowTopicsBar())) return null;
    let Y = eu.intl.string(eu.t["38qwgO"]);
    return (
        A.length > 0 && (Y = "" === N || null == N ? eu.intl.string(eu.t.DwnFuG) : N),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: m,
                  className: a()(ty.$T, ty.jh),
                  children: [
                      (0, i.jsxs)("div", {
                          className: ty.sE,
                          children: [
                              (0, i.jsx)(E.D, {
                                  className: ty.LP,
                                  "aria-label": eu.intl.string(eu.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [ty.Nv]: !M, [ty.An]: M }),
                                      children: [
                                          (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: ty.Np }),
                                          (0, i.jsx)(p.E, { className: ty.r1, variant: "text-sm/medium", children: Y }),
                                          (0, i.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.DOWN,
                                              className: ty._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: ty.Yk,
                                  children: [
                                      (0, i.jsx)(E.D, {
                                          "aria-label": eu.intl.string(eu.t["4huCnC"]),
                                          onClick: B,
                                          className: a()(ty.ZM, ty.vz, { [ty.jf]: null == j }),
                                          children: (0, i.jsx)(tA.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tA.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(E.D, {
                                          "aria-label": eu.intl.string(eu.t["58KOoF"]),
                                          onClick: V,
                                          className: a()(ty.ZM, ty.mt, { [ty.jf]: null == b }),
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
                              className: ty.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ty.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: ty.Ne,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: ty.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(x.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eu.intl.string(eu.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: ty.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(E.D, {
                                              "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                              onClick: U,
                                              className: ty.oX,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(_.Ip, { ref: g, className: ty.Pe, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tK(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.jsxs)("div", {
        className: ty.YL,
        children: [
            (0, i.jsx)(p.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: ty.Ld,
                children: e,
            }),
            t &&
                (0, i.jsx)(p.E, {
                    className: ty.$o,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: eu.intl.string(eu.t["515vjG"]),
                }),
        ],
    });
}
function tY(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(ty.jC, n), children: t });
}
function tz(e) {
    let { className: t } = e;
    return (0, i.jsx)(tY, {
        className: t,
        children: (0, i.jsx)("div", { className: ty.wH, children: (0, i.jsx)("div", { className: ty.j3 }) }),
    });
}
