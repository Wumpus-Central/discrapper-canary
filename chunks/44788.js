n.d(t, {
    ks: () => tI,
    UK: () => tR,
    Ez: () => tM,
    _z: () => tA,
    OZ: () => tL,
    $o: () => tC,
    yR: () => tw,
    LL: () => tN,
    bU: () => tj,
    P$: () => t_,
    GN: () => tb,
    _d: () => tv,
    gL: () => tE,
    Dk: () => tS,
    Ab: () => ty,
});
var l,
    s = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    c = n(435558),
    o = n.n(c),
    u = n(621466),
    d = n(17928),
    m = n(834730),
    h = n(265872),
    f = n(559106),
    g = n(821609),
    p = n(289873),
    A = n(939249),
    x = n(582394),
    C = n(306788),
    E = n(297264),
    _ = n(789645),
    N = n(364522),
    j = n(148494),
    v = n(334738),
    S = n(192308),
    I = n(267102),
    y = n(619517),
    M = n(256905),
    b = n(536763),
    L = n(218394);
class T extends a.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: s, handlePreloadImage: a } = this.props;
        (s?.(e), null != a) ? a() : (0, b.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, S.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, S.closeModal)(M.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: s,
            src: a,
            original: i,
            width: r,
            height: c,
            animated: o,
            srcIsAnimated: d,
            children: m,
            shouldHideMediaOptions: h = !1,
            sourceMetadata: f,
            analyticsSource: g,
            contentType: p,
            originalContentType: A,
        } = this.props;
        ((0, u.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, M.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: a,
                        width: r,
                        height: c,
                        type: "IMAGE",
                        alt: s,
                        contentType: p,
                        originalContentType: A,
                        zoomThumbnailPlaceholder: n,
                        animated: o,
                        srcIsAnimated: d,
                        children: m,
                        trigger: l,
                        sourceMetadata: f,
                        original: i ?? a,
                    },
                ],
                shouldHideMediaOptions: h,
                location: g ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            }));
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, s.jsx)(y.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function R(e) {
    let t = (0, I.Us)(),
        n = (0, L.j)();
    return (0, s.jsx)(T, { ...e, isWindowFocused: n, appContext: t });
}
var w = n(9578),
    k = n(56562),
    D = n(475743),
    O = n(564771),
    P = n(692051),
    U = n(915089),
    F = n(611371),
    B = n(453771),
    H = n(380629);
class G extends a.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: a,
            volume: i,
            renderLinkComponent: r,
            onVolumeChange: c,
            onVolumeShow: o,
            onVolumeHide: u,
            autoMute: d,
            onMute: m,
            mimeType: h,
            onPlay: f,
        } = this.props;
        return (0, s.jsx)(H.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, B.Hb)(t),
            fileSizeBytes: t,
            type: H.Ay.Types.AUDIO,
            className: l,
            playable: a,
            volume: i,
            onMute: m,
            autoMute: d,
            onVolumeChange: c,
            onVolumeShow: o,
            onVolumeHide: u,
            renderLinkComponent: r,
            mimeType: h,
            onPlay: f,
        });
    }
}
var V = n(248643),
    z = n(866665),
    K = n(408278),
    W = n(900797),
    Y = n(847374),
    q = n(305866),
    Q = n(453318),
    Z = n(387758),
    $ = n(980707),
    J = n(477782),
    X = n(32880),
    ee = n(365199),
    et = n(28863),
    en = n(26430),
    el = n(224640),
    es = n(268218),
    ea = n(639169),
    ei = n(586172),
    er = n(768947),
    ec = n(255438),
    eo = n(417964),
    eu = n(105292);
let ed = "utf-8";
var em = n(540168),
    eh = n(810917);
let ef = new Set(["markdown", "md", "mkd", "mkdown"]),
    eg = (0, es.Fe)({
        createPromise: () => Promise.all([n.e("759743"), n.e("207596"), n.e("636550")]).then(n.bind(n, 456262)),
        webpackId: 456262,
        name: "PlaintextFileMarkdownPreview",
        renderLoader: () => (0, s.jsx)(p.y, { className: eh.u1 }),
    });
function ep(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, s.jsx)(em.d, { text: t, language: n, className: r()(eh.Xb, { [eh.Zw]: l }) });
}
function eA(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: a } = e,
        i = eu.intl.formatToPlainString(a ? eu.t.Go5Vvs : eu.t.yJcYan, { lines: l }),
        r = `${t ? eu.intl.string(eu.t.iTcuma) : eu.intl.string(eu.t.dcl9MQ)} (${i})`;
    return (0, s.jsx)("div", {
        className: eh.py,
        children: (0, s.jsx)(z.m, {
            text: r,
            children: (0, s.jsx)(K.K, {
                icon: t ? W.t : Y.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": r,
            }),
        }),
    });
}
function ex(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, ec.up)(n)})`;
    return (0, s.jsxs)("div", {
        className: eh.VI,
        children: [
            (0, s.jsx)("div", {
                className: eh.VW,
                children: (0, s.jsx)(z.m, {
                    text: l,
                    children: (0, s.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: eh.Md,
                        children: t,
                    }),
                }),
            }),
            (0, s.jsx)(m.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, ec.up)(n) }),
        ],
    });
}
function eC(e) {
    let { language: t, setLanguage: n, align: l } = e,
        i = a.useRef(null),
        r = ei.L.useConfig({ location: "LanguageSelect" }).enabled ? er.No : ea.Q;
    return (0, s.jsx)(h.Y, {
        targetElementRef: i,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, s.jsx)(q.l, {
                "aria-label": eu.intl.string(eu.t.utm4qs),
                children: (0, s.jsx)("div", {
                    className: eh.md,
                    children: (0, s.jsxs)(Q.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(r).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, s.jsx)(Q.a3, { placeholder: eu.intl.string(eu.t.GofftW) }),
                            (0, s.jsx)(Q.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, s.jsx)(z.m, {
                ariaHidden: !0,
                text: eu.intl.string(eu.t.utm4qs),
                children: (0, s.jsx)(A.D, {
                    ...e,
                    className: eh.Qw,
                    "aria-label": eu.intl.string(eu.t.utm4qs),
                    children: (0, s.jsx)(Z.G, { size: "sm", color: "currentColor", ref: i }),
                }),
            }),
    });
}
function eE(e) {
    let { wordWrap: t, setWordWrap: n, language: l, renderMarkdown: i, setRenderMarkdown: r, url: c, fileName: o } = e,
        u = a.useRef(null),
        d = a.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(h.Y, {
                targetElementRef: u,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: a } = e;
                    return (0, s.jsx)($.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: a,
                        onSelect: () => {},
                        "aria-label": eu.intl.string(eu.t.PdRCRg),
                        children: (0, s.jsxs)(J.rX, {
                            children: [
                                (0, s.jsx)(J.Dr, {
                                    id: "download",
                                    label: eu.intl.string(eu.t["1WjMbC"]),
                                    icon: X.DownloadIcon,
                                    action: () => {
                                        (d.current?.click(), a());
                                    },
                                }),
                                (0, s.jsx)(J.sL, {
                                    id: "word-wrap",
                                    label: eu.intl.string(eu.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                ef.has(l)
                                    ? (0, s.jsx)(J.sL, {
                                          id: "render-markdown",
                                          label: eu.intl.string(eu.t.zstmkn),
                                          checked: i,
                                          action: () => r(!i),
                                      })
                                    : null,
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, s.jsx)(z.m, {
                        ariaHidden: !0,
                        text: eu.intl.string(eu.t["UKOtz+"]),
                        children: (0, s.jsx)(A.D, {
                            ...e,
                            className: eh.IQ,
                            "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                            children: (0, s.jsx)(ee.MoreHorizontalIcon, { ref: u, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, s.jsx)(et.Anchor, {
                ref: d,
                href: c,
                download: o,
                className: eh.op,
                children: (0, s.jsx)(X.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function e_(e) {
    return (0, s.jsx)(z.m, {
        ariaHidden: !0,
        text: eu.intl.string(eu.t["0PQYk3"]),
        children: (0, s.jsx)(A.D, {
            className: eh.R1,
            "aria-label": eu.intl.string(eu.t["0PQYk3"]),
            onClick: () => {
                (0, S.openModal)((t) => (0, s.jsx)(ej, { ...e, ...t }));
            },
            children: (0, s.jsx)(en._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eN(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            fileContents: a,
            expanded: i,
            setExpanded: c,
            language: o,
            setLanguage: u,
            wordWrap: d,
            setWordWrap: m,
            renderMarkdown: h,
            setRenderMarkdown: f,
            bytesLeft: g,
            className: A,
        } = e,
        x = a?.split("\n"),
        C = x?.length ?? 0,
        E = i ? 100 : 6,
        _ = 0 === g,
        j = h && ef.has(o),
        v = "";
    (_ && i && C > E ? (v = "\n...") : _ || (v = "..."),
        "" !== v &&
            (_
                ? (v += " " + eu.intl.formatToPlainString(eu.t.DQnFp2, { lines: C - E }))
                : (v += " " + eu.intl.formatToPlainString(eu.t["1+gGcK"], { formattedBytes: (0, ec.up)(g) }))));
    let S = x?.slice(0, E).join("\n") ?? "",
        I = i || E < C;
    return (0, s.jsxs)("div", {
        className: r()(A, eh.kL),
        children: [
            (0, s.jsx)(N.Ip, {
                className: r()(eh.FS, { [eh.KQ]: !i && !j }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == a
                        ? (0, s.jsx)(p.y, { className: eh.u1 })
                        : j
                          ? (0, s.jsx)(eg, { text: S, notice: v.trim() })
                          : (0, s.jsx)(ep, { text: S + v, language: o, wordWrap: d }),
            }),
            (0, s.jsxs)("div", {
                className: eh.qr,
                role: "group",
                "aria-label": eu.intl.string(eu.t.TlXA8e),
                children: [
                    I ? (0, s.jsx)(eA, { expanded: i, setExpanded: c, numLines: C, isWholeFile: _ }) : null,
                    (0, s.jsx)(ex, { fileName: n, fileSize: l }),
                    (0, s.jsx)("div", { className: eh.Kb }),
                    (0, s.jsx)(eC, { language: o, setLanguage: u, align: "top" }),
                    null != a
                        ? (0, s.jsx)(e_, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: o,
                              wordWrap: d,
                              renderMarkdown: h,
                              fileContents: a,
                              bytesLeft: g,
                          })
                        : null,
                    (0, s.jsx)(eE, {
                        wordWrap: d,
                        setWordWrap: m,
                        language: o,
                        renderMarkdown: h,
                        setRenderMarkdown: f,
                        url: t,
                        fileName: n,
                    }),
                ],
            }),
        ],
    });
}
function ej(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            transitionState: i,
            language: r,
            wordWrap: c,
            renderMarkdown: o,
            fileContents: d,
            bytesLeft: h,
            onClose: f,
        } = e,
        [g, A] = a.useState(r),
        [x, C] = a.useState(c),
        [E, _] = a.useState(o),
        j = a.useRef(null),
        v = E && ef.has(g),
        S = h > 0 ? `... ${eu.intl.formatToPlainString(eu.t["1+gGcK"], { formattedBytes: (0, ec.up)(h) })}` : "";
    return (
        a.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != j.current) {
                    let t = document.activeElement;
                    if ((0, u.vq)(t, HTMLInputElement) || (0, u.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        (e.selectNodeContents(j.current), n.removeAllRanges(), n.addRange(e));
                    }
                }
            }
            return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, []),
        (0, s.jsx)(el.d, {
            transitionState: i,
            "aria-label": eu.intl.string(eu.t["qxQjc+"]),
            size: "xxl",
            onClose: f,
            children: (0, s.jsxs)("div", {
                className: eh.jE,
                children: [
                    (0, s.jsx)(N.Ip, {
                        className: eh.ot,
                        children:
                            null == d
                                ? (0, s.jsx)(p.y, { className: eh.u1 })
                                : (0, s.jsx)("div", {
                                      ref: j,
                                      children: v
                                          ? (0, s.jsx)(eg, { text: d, notice: S })
                                          : (0, s.jsx)(ep, { text: d + S, language: g, wordWrap: x }),
                                  }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-label": eu.intl.string(eu.t.TlXA8e),
                        children: (0, s.jsxs)(m.E, {
                            color: "text-default",
                            className: eh.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, s.jsx)(ex, { fileName: n, fileSize: l }),
                                (0, s.jsx)("div", { className: eh.Kb }),
                                (0, s.jsx)(eC, { language: g, setLanguage: A, align: "bottom" }),
                                (0, s.jsx)(eE, {
                                    wordWrap: x,
                                    setWordWrap: C,
                                    language: g,
                                    renderMarkdown: E,
                                    setRenderMarkdown: _,
                                    url: t,
                                    fileName: n,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let ev = a.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: i, className: c, onClick: o, onContextMenu: u } = e,
            [d, m] = a.useState(!1),
            [h, f] = a.useState(n.split(".").slice(-1)[0]),
            [g, p] = a.useState(!0),
            [A, x] = a.useState(!0),
            {
                fileContents: C,
                bytesLeft: E,
                hadError: _,
            } = (function (e, t) {
                let [n, l] = a.useState(!1),
                    [s, i] = a.useState(null),
                    [r, c] = a.useState(1);
                return (
                    a.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    s = (function (e) {
                                        let t = e?.split("charset=").slice(-1)[0] ?? ed;
                                        try {
                                            return new TextDecoder(t);
                                        } catch (n) {
                                            if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                                                return new TextDecoder(ed);
                                            throw n;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    a = n.headers.get("content-range") ?? "0",
                                    r = n.headers.get("content-length") ?? "1",
                                    o = parseInt(a.split("/")[1]),
                                    u = Number.isNaN(o) ? 0 : o - parseInt(r),
                                    d = 0 === u ? s : s.slice(0, -1);
                                (i((0, eo.sJ)(d)), c(u), l(!1));
                            } catch (e) {
                                (c(0), l(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: r, hadError: n }
                );
            })(t, i);
        return _
            ? (0, s.jsx)(O.A, { url: t, fileName: n, fileSize: l, onClick: o, onContextMenu: u, className: c })
            : (0, s.jsx)(eN, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: C,
                  bytesLeft: E,
                  expanded: d,
                  setExpanded: m,
                  language: h,
                  setLanguage: f,
                  wordWrap: g,
                  setWordWrap: p,
                  renderMarkdown: A,
                  setRenderMarkdown: x,
                  className: r()(eh.mr, c),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eS = n(863922),
    eI = n(822074),
    ey = n(534890),
    eM = n(442433),
    eb = n(640708),
    eL = n(941971),
    eT = n(707539),
    eR = n(576705),
    ew = n(573163),
    ek = n(340833),
    eD = n(913642),
    eO = n(935208),
    eP = n(453302);
n(321073);
var eU = n(97808),
    eF = n(778712),
    eB = n(707606),
    eH = n(403362),
    eG = n(439511);
let eV = (0, eB.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, s.jsx)("div", { className: eG.pO })
            : (0, s.jsx)("div", {
                  className: eG.pO,
                  children: (0, s.jsx)(eU.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eF._3.SIZE_16,
                      className: eG.pO,
                  }),
              });
    }),
    ez = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: a = 2, guildId: i } = e,
            { totalSize: r, knownSize: c } = t;
        if (r < l) return null;
        let u = o()(n)
                .filter(eH.Vq)
                .take(a)
                .map((e) => (0, s.jsx)(eV, { member: e, guildId: i }, e.id))
                .value(),
            d = r - c;
        for (let e = 0; e < d && u.length < a; e++)
            u.push((0, s.jsx)(eV, { empty: !0, guildId: i }, `empty-member-${e}`));
        let m = Math.max(Math.min(r - u.length, 99), 0);
        if (1 === m) {
            let e = n[a];
            u.push((0, s.jsx)(eV, { member: e, guildId: i }, e.id));
        }
        return (0, s.jsx)("div", {
            className: eG.iE,
            children: (0, s.jsxs)("div", {
                className: eG.S3,
                children: [u, m > 1 ? (0, s.jsxs)("div", { className: eG.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var eK = n(303727),
    eW = n(681939);
function eY() {
    return (0, s.jsxs)("div", {
        className: eW.kL,
        children: [
            (0, s.jsxs)("div", {
                className: eW.zc,
                children: [
                    (0, s.jsx)("div", {
                        className: eW.Kk,
                        children: (0, s.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eW.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, s.jsx)(eK.A, { className: eW.uf }),
                ],
            }),
            (0, s.jsx)(E.D, {
                className: eW.wx,
                variant: "heading-xl/semibold",
                children: eu.intl.string(eu.t.yJHJei),
            }),
            (0, s.jsx)(m.E, {
                className: eW.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: eu.intl.string(eu.t.p2dIh6),
            }),
        ],
    });
}
var eq = n(652215),
    eQ = n(670455),
    eZ = n(750557);
function e$(e) {
    let { summary: t, channel: l, members: i, guildId: r, unread: c, onClick: o } = e,
        [u, h] = a.useState(!1),
        f = (0, eT.aK)(eO.default.extractTimestamp(t.startId)),
        g = (0, d.bG)([eI.A], () => eI.A.summaryFeedback(t));
    function p(e, n) {
        (e.stopPropagation(), (0, eP.A)({ summary: t, channel: l, rating: n }));
    }
    let x = eR.A.can(eq.xBc.MANAGE_MESSAGES, l);
    return (0, s.jsxs)(A.D, {
        className: eZ.kL,
        onClick: o,
        onContextMenu: function (e) {
            x &&
                (0, eM.L3)(e, async () => {
                    let { default: e } = await n.e("443921").then(n.bind(n, 304232));
                    return (n) => (0, s.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, s.jsx)(eL.A, { hovered: u, unread: c, className: eZ.dM }),
            (0, s.jsx)("div", {
                className: eZ.uV,
                children: (0, s.jsxs)("div", {
                    className: eZ.Hw,
                    children: [
                        (0, s.jsx)(m.E, {
                            className: eZ.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: f,
                        }),
                        (0, s.jsx)(eb.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                        (0, s.jsx)(ey.ChatIcon, { size: "xxs", color: "currentColor", className: eZ.Kk }),
                        (0, s.jsx)(m.E, {
                            className: eZ.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        i.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(eb.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                                    (0, s.jsx)(ez, {
                                        partySize: { knownSize: i.length, totalSize: i.length },
                                        maxAvatarsShown: 3,
                                        members: i,
                                        guildId: r,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            u &&
                null == g &&
                (0, s.jsxs)("div", {
                    className: eZ.p_,
                    children: [
                        (0, s.jsx)(A.D, {
                            onClick: (e) => p(e, eQ.P0.GOOD),
                            children: (0, s.jsx)(eD.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                        (0, s.jsx)(A.D, {
                            onClick: (e) => p(e, eQ.P0.BAD),
                            children: (0, s.jsx)(ek.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, s.jsx)(m.E, { color: "text-strong", variant: "text-sm/semibold", className: eZ.DD, children: t.topic }),
            (0, s.jsx)(m.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eZ.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eJ(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: i, setOpen: r } = e,
        c = (0, d.bG)([ew.Ay], () => ew.Ay.getOldestUnreadMessageId(l.id)),
        o = a.useCallback(
            (e) => {
                (i(e), r(!1));
            },
            [i, r],
        );
    return t.length < 1
        ? (0, s.jsx)(eY, {})
        : (0, s.jsx)(s.Fragment, {
              children: t.map((e, t) => {
                  let a = n[t] ?? [];
                  return (0, s.jsx)(
                      e$,
                      {
                          summary: e,
                          channel: l,
                          members: a,
                          guildId: l.guild_id,
                          unread: null != c && eO.default.compare(e.endId, c) > 0,
                          onClick: () => o(t),
                      },
                      t,
                  );
              }),
          });
}
var eX = n(885386),
    e0 = n(113494),
    e1 = n(782134),
    e2 = n(775602),
    e3 = n(73153),
    e4 = n(713021),
    e5 = n(745601),
    e7 = n(20504),
    e6 = n(625494),
    e9 = n(927813),
    e8 = n(824744),
    te = n(87466),
    tt = n(518950),
    tn = n(672245);
let tl = a.lazy(() => n.e("594436").then(n.bind(n, 660207)));
function ts(e) {
    let { played: t, duration: n, currentTime: l } = e,
        a = null == n ? "--:--" : t ? (0, H.rB)(Math.ceil(n - l)) : (0, H.rB)(Math.ceil(n));
    return (0, s.jsx)(m.E, { variant: "text-sm/normal", className: tn.p0, tabularNumbers: !0, children: a });
}
let ta = a.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: i,
            onMute: c,
            waveform: o,
            durationSecs: u,
            onVolumeShow: h,
            onVolumeHide: f,
            onPlay: g,
            onPause: p,
            onError: x,
            playbackCacheKey: C,
        } = e,
        E = a.useRef(null),
        _ = a.useMemo(() => (null != C ? e4.Ay.getPlaybackPosition(C) : 0), [C]),
        N = (0, d.bG)([e4.Ay], () => e4.Ay.getPlaybackRate(e4.k0.VOICE_MESSAGE)),
        [j, v] = a.useState(_ > 0),
        [S, I] = a.useState(_),
        [y, M] = a.useState(u),
        [b, L] = a.useState(!1),
        [T, R] = a.useState(!1),
        [w, k] = a.useState(!1),
        [D, O] = a.useState(!1),
        [P, U] = a.useState("none"),
        [F, B] = a.useState(() => ("function" == typeof l ? l() : l)),
        H = a.useRef(void 0),
        G = a.useCallback(() => {
            (R((e) => !e), O(!0));
        }, []),
        V = a.useCallback(() => {
            U("metadata");
        }, []),
        z = a.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || M(t);
        }, []),
        K = a.useCallback(
            (e) => {
                null != u &&
                    null != C &&
                    e3.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: u });
            },
            [C, u],
        ),
        W = a.useCallback(() => {
            (R(!1),
                null == H.current &&
                    (H.current = setTimeout(() => {
                        (v(!1), O(!1), (H.current = void 0));
                    }, 500)));
        }, []),
        Y = a.useCallback(() => {
            w || (K(0), W());
        }, [W, w, K]),
        q = a.useCallback((e) => {
            let t = E.current;
            null != t && (I(e), (t.currentTime = e), v(!0));
        }, []),
        Q = a.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            x?.(t);
        }, [x]),
        Z = a.useCallback(
            (e) => {
                let t = (0, e8.w)(e, 1);
                (L(0 === t), B(t), i?.(t));
            },
            [i],
        ),
        $ = a.useCallback(() => {
            (L(!b), c?.(!b));
        }, [b, c]),
        J = a.useCallback(() => {
            k(!0);
        }, []),
        X = a.useCallback(() => {
            (k(!1), S === y && W(), K(S));
        }, [S, y, W, K]),
        ee = a.useCallback(
            (e) => {
                let t = E.current;
                null == y || null == t || (q(e * y), clearTimeout(H.current), (H.current = void 0));
            },
            [y, q],
        );
    a.useEffect(() => {
        !j && T && v(!0);
    }, [T, j]);
    let et = a.useRef(null),
        en = { played: D, currentTime: S, onPause: p, onPlay: g },
        el = a.useRef(en);
    (a.useEffect(() => {
        el.current = en;
    }),
        a.useEffect(() => {
            _ > 0 && q(_);
        }, [_, q]),
        a.useEffect(() => {
            let e;
            return (
                T &&
                    !w &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, e9.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [T, w, K]),
        a.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || T)
                if (T) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e9.A.Millis.SECOND));
                else {
                    let e = performance.now(),
                        l = et.current;
                    (n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null));
                }
        }, [T, n, y, K]),
        a.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = E.current;
                    null == n || (I(n.currentTime), T && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, T, I]),
        a.useEffect(() => {
            if (T)
                return (
                    e6._.dispatch(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e6._.subscribe(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e6._.unsubscribe(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && R(!1);
            }
        }, [n, T, R]));
    let es = T ? e0.PauseIcon : e1.PlayIcon,
        ea = T ? eu.intl.string(eu.t["3XohGn"]) : eu.intl.string(eu.t.AlHqHT),
        ei = eu.intl.formatToPlainString(eu.t.LgCPMt, { playbackRate: N }),
        er = `${N.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, s.jsx)(a.Suspense, {
                  children: (0, s.jsx)(tl, {
                      ref: E,
                      className: tn.Zn,
                      src: n,
                      preload: P,
                      playing: T && !w,
                      onEnded: Y,
                      onLoadedMetadata: z,
                      onError: Q,
                      muted: b,
                      volume: F,
                      playbackRate: N,
                  }),
              })
            : (0, s.jsx)(e5.A, {
                  ref: E,
                  className: tn.Zn,
                  controls: !1,
                  preload: P,
                  onEnded: Y,
                  onLoadedMetadata: z,
                  onError: Q,
                  muted: b,
                  volume: F,
                  playbackRate: N,
                  playing: T && !w,
                  children: (0, s.jsx)("source", { src: n }),
              });
    let ec = (0, d.bG)([e2.Ay], () => e2.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: r()(tn.kL, { [tn.he]: T }),
        onMouseEnter: V,
        role: "region",
        "aria-label": eu.intl.string(eu.t.c8U6xd),
        children: [
            (0, s.jsx)("div", {
                className: tn.Kl,
                children: (0, s.jsx)("div", { className: r()(tn.fq, { [tn.VN]: ec }) }),
            }),
            (0, s.jsx)(A.D, {
                className: tn.k0,
                onClick: G,
                "aria-label": ea,
                children: (0, s.jsx)(es, { className: tn.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, s.jsx)(te.A, {
                className: tn.ou,
                waveform: o,
                currentTime: S,
                duration: y ?? 1,
                playing: T,
                played: j,
                onDrag: ee,
                onDragStart: J,
                onDragEnd: X,
            }),
            (0, s.jsx)(ts, { played: j, currentTime: S, duration: y }),
            (0, s.jsx)(A.D, {
                className: tn.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (tt.CA.indexOf(N) + 1) % tt.CA.length),
                        void ((e = tt.CA[n]),
                        (t = e4.k0.VOICE_MESSAGE),
                        e3.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": ei,
                children: (0, s.jsx)(m.E, { variant: "text-xs/semibold", className: tn.Sn, children: er }),
            }),
            (0, s.jsx)(e7.A, {
                className: tn.bk,
                iconClassName: tn._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tn.MQ,
                muted: b,
                value: (0, e8.M)(F, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Z,
                onToggleMute: $,
                onVolumeShow: h,
                onVolumeHide: f,
            }),
            t,
        ],
    });
});
var ti = n(287809),
    tr = n(147925),
    tc = n(174459),
    to = n(587481),
    tu = n(838541),
    td = n(521732),
    tm = n(650583),
    th = n(959760);
function tf(e) {
    return (t) => {
        (e?.(t), (0, to.ls)(t));
    };
}
function tg(e) {
    return (t) => {
        (e?.(t), (0, to.y5)(t));
    };
}
function tp(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, s.jsxs)("div", {
        role: "dialog",
        "aria-label": eu.intl.string(eu.t.fSiQ3A),
        className: th.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tm.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, s.jsx)(m.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: th.k_Z,
                children: eu.intl.string(eu.t.fSiQ3A),
            }),
            (0, s.jsx)(m.E, { variant: "text-md/normal", color: "none", tag: "span", className: th.a7V, children: t }),
        ],
    });
}
function tA(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: i = !1,
            reducedSizeAltTextButton: c = !1,
        } = e,
        [o, u] = a.useState(!1),
        d = a.useRef(null);
    return (n || o) && !l && eX._z.getSetting() && null != t && "" !== t && !0 !== i
        ? (0, s.jsx)("div", {
              className: th.NOQ,
              children: (0, s.jsx)(h.Y, {
                  targetElementRef: d,
                  animation: h.Y.Animation.FADE,
                  renderPopout: () => (0, s.jsx)(tp, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": eu.intl.string(eu.t.fSiQ3A),
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              className: r()(th.DV5, { [th.yZ5]: !0, [th.I54]: c }),
                              children: eu.intl.string(eu.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tx(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: i,
            alt: r,
            renderAdjacentContent: c,
            renderOverlayContent: o,
            disableAltTextDisplay: u = !1,
            hiddenSpoilers: d,
            mosaicStyleAlt: h,
            mediaLayoutType: f,
            reducedSizeAltTextButton: g,
            ...p
        } = e,
        A = tf(t),
        x = tg(n);
    ((l = null == l ? to.v1 : l), (i = null == i ? to.uj : i));
    let [C, E] = a.useState(!0),
        _ = f === tu.dG.MOSAIC || !0 === h,
        N = C && !u && eX._z.getSetting() && null != r && "" !== r && !0 !== d;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            (0, s.jsx)(V.A, {
                ...p,
                alt: r,
                autoMute: i,
                mediaLayoutType: f,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: x,
                onVolumeChange: A,
                renderLinkComponent: tj,
                renderOverlayContent: o,
                volume: l,
            }),
            null != c && c(),
            _ &&
                (0, s.jsx)(tA, {
                    alt: r,
                    controlsVisible: C,
                    disableAltTextDisplay: u,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: g,
                }),
            !_ &&
                N &&
                (0, s.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: th.R5R,
                    children: r,
                }),
        ],
    });
}
function tC(e) {
    return (0, s.jsx)(tx, { ...e });
}
function tE(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: i,
            onVolumeHide: r,
            renderAdjacentContent: c,
            ...o
        } = e,
        u = tf(t),
        d = tg(l);
    return (
        (n = null == n ? to.v1 : n),
        (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(G, {
                    ...o,
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: i,
                    onVolumeHide: r,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tj,
                }),
                null != c && c(),
            ],
        })
    );
}
function t_(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...a } = e,
        i = tf(t),
        r = tg(l);
    return ((n = null == n ? to.v1 : n), (0, s.jsx)(ta, { ...a, onVolumeChange: i, onMute: r, volume: n }));
}
function tN(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: i,
            imageContainerClassName: c,
            disableAltTextDisplay: o = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: g,
            mosaicStyleAlt: p,
        } = e,
        A = d === tu.dG.MOSAIC || !0 === p,
        x = !o && eX._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = a.createRef();
    return (0, s.jsxs)("div", {
        className: r()(th.foG, i),
        children: [
            (0, s.jsxs)("div", {
                className: r()(th.ZSk, c),
                style: g,
                children: [(0, s.jsx)(R, { ...e }), null != l && l()],
            }),
            A &&
                x &&
                (0, s.jsx)("div", {
                    className: th.Y1Z,
                    children: (0, s.jsx)(h.Y, {
                        targetElementRef: C,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, s.jsx)(tp, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, s.jsx)(f.vN, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": eu.intl.string(eu.t.fSiQ3A),
                                    className: r()(th.DV5, { [th.I54]: u }),
                                    children: eu.intl.string(eu.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !A &&
                x &&
                (0, s.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: th.R5R,
                    children: t,
                }),
        ],
    });
}
function tj(e) {
    return (0, s.jsx)(w.A, { ...e });
}
function tv(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, s.jsxs)(a.Fragment, { children: [(0, s.jsx)(ev, { ...n }), null != t && t()] });
}
function tS(e) {
    return (0, s.jsx)(O.A, { ...e });
}
var tI = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let ty = (e) => {
    let { type: t = 0, onClick: n, className: l } = e;
    function a(e) {
        (e.stopPropagation(), n?.());
    }
    return (0, s.jsx)(P.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, s.jsxs)("div", {
                      onClick: a,
                      className: r()(th.Sg2, l),
                      children: [
                          (0, s.jsx)("div", {
                              className: th.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return eu.intl.string(eu.t["4EvBbw"]);
                                      case 1:
                                          return eu.intl.string(eu.t["1J6Xq7"]);
                                      default:
                                          return (0, eH.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, s.jsx)(f.vN, {
                                    offset: -2,
                                    children: (0, s.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return eu.intl.string(eu.t.gpoQsB);
                                                case 1:
                                                    return eu.intl.string(eu.t.k3RM8z);
                                                default:
                                                    return (0, eH.xb)(e);
                                            }
                                        })(t),
                                        onClick: a,
                                    }),
                                })
                              : (0, s.jsx)(p.y, {
                                    type: p.y.Type.PULSING_ELLIPSIS,
                                    className: th.u1E,
                                    itemClassName: th.$N2,
                                }),
                      ],
                  }),
    });
};
function tM(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, s.jsx)(P.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, s.jsxs)(A.D, {
                      className: r()(th._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, s.jsx)("div", { className: th.$IB, children: eu.intl.string(eu.t["1zUvlw"]) }),
                          n
                              ? (0, s.jsx)(p.y, {
                                    type: p.y.Type.PULSING_ELLIPSIS,
                                    className: th.u1E,
                                    itemClassName: th.$N2,
                                })
                              : (0, s.jsx)("div", {
                                    className: r()(th.hQH, th.d3o),
                                    children: eu.intl.string(eu.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tb(e) {
    let { content: t, channelId: n } = e,
        [l] = a.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        i = a.useCallback(() => {
            let e = ew.Ay.ackMessageId(n);
            null != e
                ? j.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : j.A.jumpToMessage({
                      channelId: n,
                      messageId: eO.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        c = a.useCallback(() => {
            (0, v.ack)(n, {
                section: eq.JJy.NEW_MESSAGES_BANNER,
                object: eq.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eq.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: o } = a.useContext(P.Y);
    return o
        ? null
        : (0, s.jsxs)("div", {
              className: r()(th.ebV, { [th.y71]: o }),
              children: [
                  (0, s.jsx)(f.vN, {
                      offset: 4,
                      children: (0, s.jsx)("button", {
                          type: "button",
                          className: th.$IB,
                          onClick: i,
                          "aria-label": eu.intl.string(eu.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, s.jsx)("span", { id: l, className: th.Lnh, children: t }),
                      }),
                  }),
                  (0, s.jsx)("div", {
                      className: th._ov,
                      children: (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsxs)("button", {
                              type: "button",
                              onClick: c,
                              className: th.hQH,
                              children: [
                                  (0, s.jsx)("span", { className: th.vE$, children: eu.intl.string(eu.t.e6RscS) }),
                                  (0, s.jsx)(x.M, { size: "md", color: "currentColor", className: th.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tL(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: i } = a.useContext(P.Y),
        [c, h] = a.useState(null),
        f = a.useRef(null),
        [g, p] = a.useState(null),
        S = a.useRef(null),
        I = (0, d.yK)([eI.A], () => eI.A.summaries(t.id) ?? [], [t]),
        y = (0, D.Ay)(I);
    a.useEffect(() => {
        o().isEqual(y, I) ||
            tc.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: I.length,
                message_counts: I.map((e) => e.count),
                start_message_ids: I.map((e) => e.startId),
                end_message_ids: I.map((e) => e.endId),
                num_participants: I.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [I, y, t.guild_id, t.id, t.type]);
    let M = (0, d.bG)(
            [ti.default],
            () => I?.map((e) => e.people?.map((e) => ti.default.getUser(e) ?? null).filter(eH.Vq)) ?? [],
            [I],
            tT,
        ),
        b = (0, d.bG)([eI.A], () => eI.A.visibleSummaryIndex()) ?? -1,
        L = I?.[b]?.topic;
    null == L && null == c && I?.length >= 1 && (L = I[0]?.topic);
    let T = a.useMemo(
            () =>
                o().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        R = a.useMemo(
            () =>
                o().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        w = a.useCallback(
            (e) => {
                (R(), T(e));
            },
            [T, R],
        ),
        [O, U] = a.useState(!1),
        B = a.useCallback(() => {
            (tc.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !O,
                num_summaries: I.length,
                message_counts: I.map((e) => e.count),
                start_message_ids: I.map((e) => e.startId),
                end_message_ids: I.map((e) => e.endId),
                num_participants: I.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!O));
        }, [O, I, U, t]),
        H = a.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : td.eh.PILL_DROPDOWN,
                    s = I[e];
                null != s &&
                    ((0, eS.sK)(t.id, s.id),
                    (0, eS.C6)(t.id, s.id),
                    l.removeAutomaticAnchorCallback(w),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(w, !1);
                            }, 100));
                    }),
                    tc.default.track(eq.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: s.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    j.A.jumpToMessage({
                        channelId: t.id,
                        messageId: s.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [I, t, w, l],
        ),
        G = a.useCallback((e) => {
            U(e);
            let t = S.current?.scrollTop;
            null != t && p(t);
        }, []);
    a.useEffect(() => {
        null != g && O && S.current?.scrollTo({ top: g });
    }, [g, O]);
    let V = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && f.current?.contains(e.target)) ||
                (O &&
                    tc.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: I.length,
                        message_counts: I.map((e) => e.count),
                        start_message_ids: I.map((e) => e.startId),
                        end_message_ids: I.map((e) => e.endId),
                        num_participants: I.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                G(!1));
        },
        [O, I, t, G],
    );
    (a.useEffect(
        () => (
            l.addAutomaticAnchorCallback(w),
            () => {
                l.removeAutomaticAnchorCallback(w);
            }
        ),
        [l, w],
    ),
        a.useEffect(() => {
            (0, eS.$T)(t.id);
        }, [t.id]),
        a.useEffect(
            () => (
                document.addEventListener("mousedown", V),
                () => {
                    document.removeEventListener("mousedown", V);
                }
            ),
            [V],
        ));
    let z = a.useMemo(
            () => (0, s.jsx)(eJ, { channel: t, summaries: I, summariesMembers: M, selectTopic: H, setOpen: G }),
            [I, M, H, G, t],
        ),
        K = a.useCallback(() => {
            let e = ew.Ay.ackMessageId(t.id);
            null != e
                ? j.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : j.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eO.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        W = a.useCallback(() => {
            (0, v.ack)(t.id, {
                section: eq.JJy.NEW_TOPICS_BAR,
                object: eq.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eq.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Y = eu.intl.string(eu.t["38qwgO"]);
    return (
        I.length > 0 && (Y = "" === L || null == L ? eu.intl.string(eu.t.DwnFuG) : L),
        i
            ? null
            : (0, s.jsxs)("div", {
                  ref: f,
                  className: r()(th.dw5, th.jht),
                  children: [
                      (0, s.jsx)("div", {
                          className: th.qmJ,
                          children: (0, s.jsx)(A.D, {
                              className: th.TQl,
                              "aria-label": eu.intl.string(eu.t.RT3MPz),
                              onClick: B,
                              children: (0, s.jsxs)("div", {
                                  className: r()({ [th.hNz]: !O, [th.Apq]: O }),
                                  children: [
                                      (0, s.jsx)(C.K, { size: "xs", color: "currentColor", className: th.VdQ }),
                                      (0, s.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          className: r()(th.$Uj, th.lc3),
                                          children: Y,
                                      }),
                                      (0, s.jsx)(tr.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tr.A.Directions.DOWN,
                                          className: th.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, s.jsx)(A.D, { onClick: K, className: th.ijE, children: n }),
                      (0, s.jsxs)(A.D, {
                          onClick: W,
                          className: r()(th.hQH, th.NXP),
                          children: [
                              (0, s.jsx)("div", { className: th.$Uj, children: eu.intl.string(eu.t.e6RscS) }),
                              (0, s.jsx)(x.M, { size: "md", color: "currentColor", className: th.t3N }),
                          ],
                      }),
                      O &&
                          (0, s.jsxs)("div", {
                              className: th.A1T,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: th.kee,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: th.Ney,
                                              children: [
                                                  (0, s.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: th.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eu.intl.string(eu.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(F.A, { className: th.Zxm }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                              onClick: B,
                                              className: th.oX1,
                                              children: (0, s.jsx)(_.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(N.Ip, { ref: S, className: th.Pei, fade: !0, children: z }),
                              ],
                          }),
                  ],
              })
    );
}
function tT(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tR(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = a.useContext(P.Y),
        [i, c] = a.useState(null),
        h = a.useRef(null),
        [f, g] = a.useState(null),
        p = a.useRef(null),
        x = (0, d.yK)([eI.A], () => eI.A.summaries(t.id) ?? [], [t]),
        v = (0, D.Ay)(x);
    a.useEffect(() => {
        o().isEqual(v, x) ||
            tc.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
    let S = (0, d.bG)(
            [ti.default],
            () => x?.map((e) => e.people?.map((e) => ti.default.getUser(e) ?? null).filter(eH.Vq)) ?? [],
            [x],
            tT,
        ),
        I = (0, d.bG)([eI.A], () => eI.A.visibleSummaryIndex()) ?? -1,
        y = x?.[I]?.topic;
    null == y && null == i && x?.length >= 1 && (y = x[0]?.topic);
    let M = a.useMemo(() => o().get(x, I - 1), [I, x]),
        b = a.useMemo(() => o().get(x, I + 1), [I, x]),
        L = a.useMemo(
            () =>
                o().debounce((e) => {
                    c(e?.id ?? null);
                }, 64),
            [c],
        ),
        T = a.useMemo(
            () =>
                o().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        R = a.useCallback(
            (e) => {
                (T(), L(e));
            },
            [L, T],
        ),
        [w, O] = a.useState(!1),
        U = a.useCallback(() => {
            (tc.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !w,
                num_summaries: x.length,
                message_counts: x.map((e) => e.count),
                start_message_ids: x.map((e) => e.startId),
                end_message_ids: x.map((e) => e.endId),
                num_participants: x.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                O(!w));
        }, [w, x, O, t]),
        B = a.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : td.eh.PILL_DROPDOWN,
                    s = x[e];
                null != s &&
                    ((0, eS.sK)(t.id, s.id),
                    (0, eS.C6)(t.id, s.id),
                    n.removeAutomaticAnchorCallback(R),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(R, !1);
                            }, 100));
                    }),
                    tc.default.track(eq.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: l,
                        message_id: s.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    j.A.jumpToMessage({
                        channelId: t.id,
                        messageId: s.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [x, t, R, n],
        ),
        H = a.useCallback(() => {
            B(I - 1, td.eh.PILL_NEXT_ARROW);
        }, [B, I]),
        G = a.useCallback(() => {
            B(I + 1, td.eh.PILL_PREVIOUS_ARROW);
        }, [I, B]),
        V = a.useCallback((e) => {
            O(e);
            let t = p.current?.scrollTop;
            null != t && g(t);
        }, []);
    a.useEffect(() => {
        null != f && w && p.current?.scrollTo({ top: f });
    }, [f, w]);
    let z = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (w &&
                    tc.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                V(!1));
        },
        [w, x, t, V],
    );
    (a.useEffect(
        () => (
            n.addAutomaticAnchorCallback(R),
            () => {
                n.removeAutomaticAnchorCallback(R);
            }
        ),
        [n, R],
    ),
        a.useEffect(() => {
            (0, eS.$T)(t.id);
        }, [t.id]),
        a.useEffect(
            () => (
                document.addEventListener("mousedown", z),
                () => {
                    document.removeEventListener("mousedown", z);
                }
            ),
            [z],
        ));
    let K = a.useMemo(
        () => (0, s.jsx)(eJ, { channel: t, summaries: x, summariesMembers: S, selectTopic: B, setOpen: V }),
        [x, S, B, V, t],
    );
    if (!(0, d.bG)([eI.A], () => eI.A.shouldShowTopicsBar())) return null;
    let W = eu.intl.string(eu.t["38qwgO"]);
    return (
        x.length > 0 && (W = "" === y || null == y ? eu.intl.string(eu.t.DwnFuG) : y),
        l
            ? null
            : (0, s.jsxs)("div", {
                  ref: h,
                  className: r()(th.$T$, th.jht),
                  children: [
                      (0, s.jsxs)("div", {
                          className: th.sEF,
                          children: [
                              (0, s.jsx)(A.D, {
                                  className: th.LPV,
                                  "aria-label": eu.intl.string(eu.t.RT3MPz),
                                  onClick: U,
                                  children: (0, s.jsxs)("div", {
                                      className: r()({ [th.Nv2]: !w, [th.Ann]: w }),
                                      children: [
                                          (0, s.jsx)(C.K, { size: "xs", color: "currentColor", className: th.Npc }),
                                          (0, s.jsx)(m.E, {
                                              className: th.r1V,
                                              variant: "text-sm/medium",
                                              children: W,
                                          }),
                                          (0, s.jsx)(tr.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tr.A.Directions.DOWN,
                                              className: th._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: th.Ykg,
                                  children: [
                                      (0, s.jsx)(A.D, {
                                          "aria-label": eu.intl.string(eu.t["4huCnC"]),
                                          onClick: G,
                                          className: r()(th.ZMY, th.vzA, { [th.jfO]: null == b }),
                                          children: (0, s.jsx)(tr.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tr.A.Directions.UP,
                                          }),
                                      }),
                                      (0, s.jsx)(A.D, {
                                          "aria-label": eu.intl.string(eu.t["58KOoF"]),
                                          onClick: H,
                                          className: r()(th.ZMY, th.mtW, { [th.jfO]: null == M }),
                                          children: (0, s.jsx)(tr.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tr.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      w &&
                          (0, s.jsxs)("div", {
                              className: th.A1T,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: th.kee,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: th.Ney,
                                              children: [
                                                  (0, s.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: th.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eu.intl.string(eu.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(F.A, { className: th.Zxm }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                              onClick: U,
                                              className: th.oX1,
                                              children: (0, s.jsx)(_.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(N.Ip, { ref: p, className: th.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tw(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
        className: th.YLv,
        children: [
            (0, s.jsx)(m.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: th.LdH,
                children: e,
            }),
            t &&
                (0, s.jsx)(m.E, {
                    className: th.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: eu.intl.string(eu.t["515vjG"]),
                }),
        ],
    });
}
