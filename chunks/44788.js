n.d(t, {
    ks: () => tS,
    UK: () => tL,
    Ez: () => ty,
    _z: () => tg,
    OZ: () => tb,
    $o: () => tx,
    yR: () => tR,
    LL: () => t_,
    bU: () => tN,
    P$: () => tE,
    GN: () => tM,
    _d: () => tj,
    gL: () => tC,
    Ir: () => tp,
    Dk: () => tv,
    Ab: () => tI,
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
    p = n(821609),
    g = n(289873),
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
    T = n(218394);
class L extends a.PureComponent {
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
            analyticsSource: p,
            contentType: g,
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
                        contentType: g,
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
                location: p ?? "LazyImageZoomable",
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
        n = (0, T.j)();
    return (0, s.jsx)(L, { ...e, isWindowFocused: n, appContext: t });
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
    ea = n(768947),
    ei = n(255438),
    er = n(417964),
    ec = n(105292);
let eo = "utf-8";
var eu = n(540168),
    ed = n(810917);
let em = new Set(["markdown", "md", "mkd", "mkdown"]),
    eh = (0, es.Fe)({
        createPromise: () => Promise.all([n.e("759743"), n.e("207596"), n.e("636550")]).then(n.bind(n, 456262)),
        webpackId: 456262,
        name: "PlaintextFileMarkdownPreview",
        renderLoader: () => (0, s.jsx)(g.y, { className: ed.u1 }),
    });
function ef(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, s.jsx)(eu.d, { text: t, language: n, className: r()(ed.Xb, { [ed.Zw]: l }) });
}
function ep(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: a } = e,
        i = ec.intl.formatToPlainString(a ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: l }),
        r = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${i})`;
    return (0, s.jsx)("div", {
        className: ed.py,
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
function eg(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, ei.up)(n)})`;
    return (0, s.jsxs)("div", {
        className: ed.VI,
        children: [
            (0, s.jsx)("div", {
                className: ed.VW,
                children: (0, s.jsx)(z.m, {
                    text: l,
                    children: (0, s.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ed.Md,
                        children: t,
                    }),
                }),
            }),
            (0, s.jsx)(m.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, ei.up)(n) }),
        ],
    });
}
function eA(e) {
    let { language: t, setLanguage: n, align: l } = e,
        i = a.useRef(null);
    return (0, s.jsx)(h.Y, {
        targetElementRef: i,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, s.jsx)(q.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, s.jsx)("div", {
                    className: ed.md,
                    children: (0, s.jsxs)(Q.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(ea.No).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, s.jsx)(Q.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                            (0, s.jsx)(Q.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, s.jsx)(z.m, {
                ariaHidden: !0,
                text: ec.intl.string(ec.t.utm4qs),
                children: (0, s.jsx)(A.D, {
                    ...e,
                    className: ed.Qw,
                    "aria-label": ec.intl.string(ec.t.utm4qs),
                    children: (0, s.jsx)(Z.G, { size: "sm", color: "currentColor", ref: i }),
                }),
            }),
    });
}
function ex(e) {
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
                        "aria-label": ec.intl.string(ec.t.PdRCRg),
                        children: (0, s.jsxs)(J.rX, {
                            children: [
                                (0, s.jsx)(J.Dr, {
                                    id: "download",
                                    label: ec.intl.string(ec.t["1WjMbC"]),
                                    icon: X.DownloadIcon,
                                    action: () => {
                                        (d.current?.click(), a());
                                    },
                                }),
                                (0, s.jsx)(J.sL, {
                                    id: "word-wrap",
                                    label: ec.intl.string(ec.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                em.has(l)
                                    ? (0, s.jsx)(J.sL, {
                                          id: "render-markdown",
                                          label: ec.intl.string(ec.t.zstmkn),
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
                        text: ec.intl.string(ec.t["UKOtz+"]),
                        children: (0, s.jsx)(A.D, {
                            ...e,
                            className: ed.IQ,
                            "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                            children: (0, s.jsx)(ee.MoreHorizontalIcon, { ref: u, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, s.jsx)(et.Anchor, {
                ref: d,
                href: c,
                download: o,
                className: ed.op,
                children: (0, s.jsx)(X.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eC(e) {
    return (0, s.jsx)(z.m, {
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, s.jsx)(A.D, {
            className: ed.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, S.openModal)((t) => (0, s.jsx)(e_, { ...e, ...t }));
            },
            children: (0, s.jsx)(en._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eE(e) {
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
            bytesLeft: p,
            className: A,
        } = e,
        x = a?.split("\n"),
        C = x?.length ?? 0,
        E = i ? 100 : 6,
        _ = 0 === p,
        j = h && em.has(o),
        v = "";
    (_ && i && C > E ? (v = "\n...") : _ || (v = "..."),
        "" !== v &&
            (_
                ? (v += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: C - E }))
                : (v += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, ei.up)(p) }))));
    let S = x?.slice(0, E).join("\n") ?? "",
        I = i || E < C;
    return (0, s.jsxs)("div", {
        className: r()(A, ed.kL),
        children: [
            (0, s.jsx)(N.Ip, {
                className: r()(ed.FS, { [ed.KQ]: !i && !j }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == a
                        ? (0, s.jsx)(g.y, { className: ed.u1 })
                        : j
                          ? (0, s.jsx)(eh, { text: S, notice: v.trim() })
                          : (0, s.jsx)(ef, { text: S + v, language: o, wordWrap: d }),
            }),
            (0, s.jsxs)("div", {
                className: ed.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    I ? (0, s.jsx)(ep, { expanded: i, setExpanded: c, numLines: C, isWholeFile: _ }) : null,
                    (0, s.jsx)(eg, { fileName: n, fileSize: l }),
                    (0, s.jsx)("div", { className: ed.Kb }),
                    (0, s.jsx)(eA, { language: o, setLanguage: u, align: "top" }),
                    null != a
                        ? (0, s.jsx)(eC, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: o,
                              wordWrap: d,
                              renderMarkdown: h,
                              fileContents: a,
                              bytesLeft: p,
                          })
                        : null,
                    (0, s.jsx)(ex, {
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
function e_(e) {
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
        [p, A] = a.useState(r),
        [x, C] = a.useState(c),
        [E, _] = a.useState(o),
        j = a.useRef(null),
        v = E && em.has(p),
        S = h > 0 ? `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, ei.up)(h) })}` : "";
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
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: f,
            children: (0, s.jsxs)("div", {
                className: ed.jE,
                children: [
                    (0, s.jsx)(N.Ip, {
                        className: ed.ot,
                        children:
                            null == d
                                ? (0, s.jsx)(g.y, { className: ed.u1 })
                                : (0, s.jsx)("div", {
                                      ref: j,
                                      children: v
                                          ? (0, s.jsx)(eh, { text: d, notice: S })
                                          : (0, s.jsx)(ef, { text: d + S, language: p, wordWrap: x }),
                                  }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-label": ec.intl.string(ec.t.TlXA8e),
                        children: (0, s.jsxs)(m.E, {
                            color: "text-default",
                            className: ed.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, s.jsx)(eg, { fileName: n, fileSize: l }),
                                (0, s.jsx)("div", { className: ed.Kb }),
                                (0, s.jsx)(eA, { language: p, setLanguage: A, align: "bottom" }),
                                (0, s.jsx)(ex, {
                                    wordWrap: x,
                                    setWordWrap: C,
                                    language: p,
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
let eN = a.memo(
    function (e) {
        let {
                url: t,
                fileName: n,
                fileSize: l,
                contentType: i,
                defaultExpanded: c = !1,
                className: o,
                onClick: u,
                onContextMenu: d,
            } = e,
            [m, h] = a.useState(n.split(".").slice(-1)[0]),
            [f, p] = a.useState(c),
            [g, A] = a.useState(!0),
            [x, C] = a.useState(!0),
            {
                fileContents: E,
                bytesLeft: _,
                hadError: N,
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
                                        let t = e?.split("charset=").slice(-1)[0] ?? eo;
                                        try {
                                            return new TextDecoder(t);
                                        } catch (n) {
                                            if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                                                return new TextDecoder(eo);
                                            throw n;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    a = n.headers.get("content-range") ?? "0",
                                    r = n.headers.get("content-length") ?? "1",
                                    o = parseInt(a.split("/")[1]),
                                    u = Number.isNaN(o) ? 0 : o - parseInt(r),
                                    d = 0 === u ? s : s.slice(0, -1);
                                (i((0, er.sJ)(d)), c(u), l(!1));
                            } catch (e) {
                                (c(0), l(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: r, hadError: n }
                );
            })(t, i);
        return N
            ? (0, s.jsx)(O.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: d, className: o })
            : (0, s.jsx)(eE, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: E,
                  bytesLeft: _,
                  expanded: f,
                  setExpanded: p,
                  language: m,
                  setLanguage: h,
                  wordWrap: g,
                  setWordWrap: A,
                  renderMarkdown: x,
                  setRenderMarkdown: C,
                  className: r()(ed.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var ej = n(863922),
    ev = n(822074),
    eS = n(534890),
    eI = n(442433),
    ey = n(640708),
    eM = n(941971),
    eb = n(707539),
    eT = n(576705),
    eL = n(573163),
    eR = n(340833),
    ew = n(913642),
    ek = n(935208),
    eD = n(453302);
n(321073);
var eO = n(97808),
    eP = n(778712),
    eU = n(707606),
    eF = n(403362),
    eB = n(439511);
let eH = (0, eU.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, s.jsx)("div", { className: eB.pO })
            : (0, s.jsx)("div", {
                  className: eB.pO,
                  children: (0, s.jsx)(eO.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eP._3.SIZE_16,
                      className: eB.pO,
                  }),
              });
    }),
    eG = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: a = 2, guildId: i } = e,
            { totalSize: r, knownSize: c } = t;
        if (r < l) return null;
        let u = o()(n)
                .filter(eF.Vq)
                .take(a)
                .map((e) => (0, s.jsx)(eH, { member: e, guildId: i }, e.id))
                .value(),
            d = r - c;
        for (let e = 0; e < d && u.length < a; e++)
            u.push((0, s.jsx)(eH, { empty: !0, guildId: i }, `empty-member-${e}`));
        let m = Math.max(Math.min(r - u.length, 99), 0);
        if (1 === m) {
            let e = n[a];
            u.push((0, s.jsx)(eH, { member: e, guildId: i }, e.id));
        }
        return (0, s.jsx)("div", {
            className: eB.iE,
            children: (0, s.jsxs)("div", {
                className: eB.S3,
                children: [u, m > 1 ? (0, s.jsxs)("div", { className: eB.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var eV = n(303727),
    ez = n(681939);
function eK() {
    return (0, s.jsxs)("div", {
        className: ez.kL,
        children: [
            (0, s.jsxs)("div", {
                className: ez.zc,
                children: [
                    (0, s.jsx)("div", {
                        className: ez.Kk,
                        children: (0, s.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: ez.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, s.jsx)(eV.A, { className: ez.uf }),
                ],
            }),
            (0, s.jsx)(E.D, {
                className: ez.wx,
                variant: "heading-xl/semibold",
                children: ec.intl.string(ec.t.yJHJei),
            }),
            (0, s.jsx)(m.E, {
                className: ez.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ec.intl.string(ec.t.p2dIh6),
            }),
        ],
    });
}
var eW = n(652215),
    eY = n(670455),
    eq = n(750557);
function eQ(e) {
    let { summary: t, channel: l, members: i, guildId: r, unread: c, onClick: o } = e,
        [u, h] = a.useState(!1),
        f = (0, eb.aK)(ek.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([ev.A], () => ev.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, eD.A)({ summary: t, channel: l, rating: n }));
    }
    let x = eT.A.can(eW.xBc.MANAGE_MESSAGES, l);
    return (0, s.jsxs)(A.D, {
        className: eq.kL,
        onClick: o,
        onContextMenu: function (e) {
            x &&
                (0, eI.L3)(e, async () => {
                    let { default: e } = await n.e("443921").then(n.bind(n, 304232));
                    return (n) => (0, s.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, s.jsx)(eM.A, { hovered: u, unread: c, className: eq.dM }),
            (0, s.jsx)("div", {
                className: eq.uV,
                children: (0, s.jsxs)("div", {
                    className: eq.Hw,
                    children: [
                        (0, s.jsx)(m.E, {
                            className: eq.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: f,
                        }),
                        (0, s.jsx)(ey.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                        (0, s.jsx)(eS.ChatIcon, { size: "xxs", color: "currentColor", className: eq.Kk }),
                        (0, s.jsx)(m.E, {
                            className: eq.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        i.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(ey.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                                    (0, s.jsx)(eG, {
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
                null == p &&
                (0, s.jsxs)("div", {
                    className: eq.p_,
                    children: [
                        (0, s.jsx)(A.D, {
                            onClick: (e) => g(e, eY.P0.GOOD),
                            children: (0, s.jsx)(ew.A, { className: eq.O1, width: 12, height: 12 }),
                        }),
                        (0, s.jsx)(A.D, {
                            onClick: (e) => g(e, eY.P0.BAD),
                            children: (0, s.jsx)(eR.A, { className: eq.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, s.jsx)(m.E, { color: "text-strong", variant: "text-sm/semibold", className: eq.DD, children: t.topic }),
            (0, s.jsx)(m.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eq.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eZ(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: i, setOpen: r } = e,
        c = (0, d.bG)([eL.Ay], () => eL.Ay.getOldestUnreadMessageId(l.id)),
        o = a.useCallback(
            (e) => {
                (i(e), r(!1));
            },
            [i, r],
        );
    return t.length < 1
        ? (0, s.jsx)(eK, {})
        : (0, s.jsx)(s.Fragment, {
              children: t.map((e, t) => {
                  let a = n[t] ?? [];
                  return (0, s.jsx)(
                      eQ,
                      {
                          summary: e,
                          channel: l,
                          members: a,
                          guildId: l.guild_id,
                          unread: null != c && ek.default.compare(e.endId, c) > 0,
                          onClick: () => o(t),
                      },
                      t,
                  );
              }),
          });
}
var e$ = n(253932),
    eJ = n(113494),
    eX = n(782134),
    e0 = n(775602),
    e1 = n(73153),
    e3 = n(713021),
    e2 = n(745601),
    e4 = n(20504),
    e5 = n(625494),
    e7 = n(927813),
    e6 = n(824744),
    e9 = n(87466),
    e8 = n(518950),
    te = n(672245);
let tt = a.lazy(() => n.e("594436").then(n.bind(n, 660207)));
function tn(e) {
    let { played: t, duration: n, currentTime: l } = e,
        a = null == n ? "--:--" : t ? (0, H.rB)(Math.ceil(n - l)) : (0, H.rB)(Math.ceil(n));
    return (0, s.jsx)(m.E, { variant: "text-sm/normal", className: te.p0, tabularNumbers: !0, children: a });
}
let tl = a.memo(function (e) {
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
            onPlay: p,
            onPause: g,
            onError: x,
            playbackCacheKey: C,
        } = e,
        E = a.useRef(null),
        _ = a.useMemo(() => (null != C ? e3.Ay.getPlaybackPosition(C) : 0), [C]),
        N = (0, d.bG)([e3.Ay], () => e3.Ay.getPlaybackRate(e3.k0.VOICE_MESSAGE)),
        [j, v] = a.useState(_ > 0),
        [S, I] = a.useState(_),
        [y, M] = a.useState(u),
        [b, T] = a.useState(!1),
        [L, R] = a.useState(!1),
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
                    e1.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: u });
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
                let t = (0, e6.w)(e, 1);
                (T(0 === t), B(t), i?.(t));
            },
            [i],
        ),
        $ = a.useCallback(() => {
            (T(!b), c?.(!b));
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
        !j && L && v(!0);
    }, [L, j]);
    let et = a.useRef(null),
        en = { played: D, currentTime: S, onPause: g, onPlay: p },
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
                L &&
                    !w &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, e7.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [L, w, K]),
        a.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || L)
                if (L) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e7.A.Millis.SECOND));
                else {
                    let e = performance.now(),
                        l = et.current;
                    (n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null));
                }
        }, [L, n, y, K]),
        a.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = E.current;
                    null == n || (I(n.currentTime), L && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, L, I]),
        a.useEffect(() => {
            if (L)
                return (
                    e5._.dispatch(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e5._.subscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e5._.unsubscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && R(!1);
            }
        }, [n, L, R]));
    let es = L ? eJ.PauseIcon : eX.PlayIcon,
        ea = L ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        ei = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: N }),
        er = `${N.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, s.jsx)(a.Suspense, {
                  children: (0, s.jsx)(tt, {
                      ref: E,
                      className: te.Zn,
                      src: n,
                      preload: P,
                      playing: L && !w,
                      onEnded: Y,
                      onLoadedMetadata: z,
                      onError: Q,
                      muted: b,
                      volume: F,
                      playbackRate: N,
                  }),
              })
            : (0, s.jsx)(e2.A, {
                  ref: E,
                  className: te.Zn,
                  controls: !1,
                  preload: P,
                  onEnded: Y,
                  onLoadedMetadata: z,
                  onError: Q,
                  muted: b,
                  volume: F,
                  playbackRate: N,
                  playing: L && !w,
                  children: (0, s.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([e0.Ay], () => e0.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: r()(te.kL, { [te.he]: L }),
        onMouseEnter: V,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, s.jsx)("div", {
                className: te.Kl,
                children: (0, s.jsx)("div", { className: r()(te.fq, { [te.VN]: eo }) }),
            }),
            (0, s.jsx)(A.D, {
                className: te.k0,
                onClick: G,
                "aria-label": ea,
                children: (0, s.jsx)(es, { className: te.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, s.jsx)(e9.A, {
                className: te.ou,
                waveform: o,
                currentTime: S,
                duration: y ?? 1,
                playing: L,
                played: j,
                onDrag: ee,
                onDragStart: J,
                onDragEnd: X,
            }),
            (0, s.jsx)(tn, { played: j, currentTime: S, duration: y }),
            (0, s.jsx)(A.D, {
                className: te.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (e8.CA.indexOf(N) + 1) % e8.CA.length),
                        void ((e = e8.CA[n]),
                        (t = e3.k0.VOICE_MESSAGE),
                        e1.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": ei,
                children: (0, s.jsx)(m.E, { variant: "text-xs/semibold", className: te.Sn, children: er }),
            }),
            (0, s.jsx)(e4.A, {
                className: te.bk,
                iconClassName: te._j,
                iconColor: "currentColor",
                sliderWrapperClassName: te.MQ,
                muted: b,
                value: (0, e6.M)(F, 1),
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
var ts = n(287809),
    ta = n(147925),
    ti = n(174459),
    tr = n(587481),
    tc = n(838541),
    to = n(521732),
    tu = n(650583),
    td = n(959760);
function tm(e) {
    return (t) => {
        (e?.(t), (0, tr.ls)(t));
    };
}
function th(e) {
    return (t) => {
        (e?.(t), (0, tr.y5)(t));
    };
}
function tf(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, s.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
        className: td.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tu.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, s.jsx)(m.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: td.k_Z,
                children: ec.intl.string(ec.t.fSiQ3A),
            }),
            (0, s.jsx)(m.E, { variant: "text-md/normal", color: "none", tag: "span", className: td.a7V, children: t }),
        ],
    });
}
function tp(e) {
    let { alt: t, disableAltTextDisplay: n = !1, hiddenSpoilers: l = !1 } = e;
    return !n && e$._z.getSetting() && null != t && "" !== t && !l;
}
function tg(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: i = !1,
            reducedSizeAltTextButton: c = !1,
        } = e,
        [o, u] = a.useState(!1),
        d = a.useRef(null);
    return (n || o) && null != t && tp({ alt: t, disableAltTextDisplay: l, hiddenSpoilers: i })
        ? (0, s.jsx)("div", {
              className: td.NOQ,
              children: (0, s.jsx)(h.Y, {
                  targetElementRef: d,
                  animation: h.Y.Animation.FADE,
                  renderPopout: () => (0, s.jsx)(tf, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ec.intl.string(ec.t.fSiQ3A),
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              className: r()(td.DV5, { [td.yZ5]: !0, [td.I54]: c }),
                              children: ec.intl.string(ec.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tA(e) {
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
            reducedSizeAltTextButton: p,
            ...g
        } = e,
        A = tm(t),
        x = th(n);
    ((l = null == l ? tr.v1 : l), (i = null == i ? tr.uj : i));
    let [C, E] = a.useState(!0),
        _ = f === tc.dG.MOSAIC || !0 === h,
        N = C && !u && e$._z.getSetting() && null != r && "" !== r && !0 !== d;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            (0, s.jsx)(V.A, {
                ...g,
                alt: r,
                autoMute: i,
                mediaLayoutType: f,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: x,
                onVolumeChange: A,
                renderLinkComponent: tN,
                renderOverlayContent: o,
                volume: l,
            }),
            null != c && c(),
            _ &&
                (0, s.jsx)(tg, {
                    alt: r,
                    controlsVisible: C,
                    disableAltTextDisplay: u,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: p,
                }),
            !_ &&
                N &&
                (0, s.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: td.R5R,
                    children: r,
                }),
        ],
    });
}
function tx(e) {
    return (0, s.jsx)(tA, { ...e });
}
function tC(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: i,
            onVolumeHide: r,
            renderAdjacentContent: c,
            ...o
        } = e,
        u = tm(t),
        d = th(l);
    return (
        (n = null == n ? tr.v1 : n),
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
                    renderLinkComponent: tN,
                }),
                null != c && c(),
            ],
        })
    );
}
function tE(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...a } = e,
        i = tm(t),
        r = th(l);
    return ((n = null == n ? tr.v1 : n), (0, s.jsx)(tl, { ...a, onVolumeChange: i, onMute: r, volume: n }));
}
function t_(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: i,
            imageContainerClassName: c,
            disableAltTextDisplay: o = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: g,
        } = e,
        A = d === tc.dG.MOSAIC || !0 === g,
        x = !o && e$._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = a.createRef();
    return (0, s.jsxs)("div", {
        className: r()(td.foG, i),
        children: [
            (0, s.jsxs)("div", {
                className: r()(td.ZSk, c),
                style: p,
                children: [(0, s.jsx)(R, { ...e }), null != l && l()],
            }),
            A &&
                x &&
                (0, s.jsx)("div", {
                    className: td.Y1Z,
                    children: (0, s.jsx)(h.Y, {
                        targetElementRef: C,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, s.jsx)(tf, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, s.jsx)(f.vN, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: r()(td.DV5, { [td.I54]: u }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
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
                    className: td.R5R,
                    children: t,
                }),
        ],
    });
}
function tN(e) {
    return (0, s.jsx)(w.A, { ...e });
}
function tj(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, s.jsxs)(a.Fragment, { children: [(0, s.jsx)(eN, { ...n }), null != t && t()] });
}
function tv(e) {
    return (0, s.jsx)(O.A, { ...e });
}
var tS = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tI = (e) => {
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
                      className: r()(td.Sg2, l),
                      children: [
                          (0, s.jsx)("div", {
                              className: td.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ec.intl.string(ec.t["4EvBbw"]);
                                      case 1:
                                          return ec.intl.string(ec.t["1J6Xq7"]);
                                      default:
                                          return (0, eF.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, s.jsx)(f.vN, {
                                    offset: -2,
                                    children: (0, s.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ec.intl.string(ec.t.gpoQsB);
                                                case 1:
                                                    return ec.intl.string(ec.t.k3RM8z);
                                                default:
                                                    return (0, eF.xb)(e);
                                            }
                                        })(t),
                                        onClick: a,
                                    }),
                                })
                              : (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: td.u1E,
                                    itemClassName: td.$N2,
                                }),
                      ],
                  }),
    });
};
function ty(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, s.jsx)(P.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, s.jsxs)(A.D, {
                      className: r()(td._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, s.jsx)("div", { className: td.$IB, children: ec.intl.string(ec.t["1zUvlw"]) }),
                          n
                              ? (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: td.u1E,
                                    itemClassName: td.$N2,
                                })
                              : (0, s.jsx)("div", {
                                    className: r()(td.hQH, td.d3o),
                                    children: ec.intl.string(ec.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tM(e) {
    let { content: t, channelId: n } = e,
        [l] = a.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        i = a.useCallback(() => {
            let e = eL.Ay.ackMessageId(n);
            null != e
                ? j.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : j.A.jumpToMessage({
                      channelId: n,
                      messageId: ek.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        c = a.useCallback(() => {
            (0, v.ack)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: o } = a.useContext(P.Y);
    return o
        ? null
        : (0, s.jsxs)("div", {
              className: r()(td.ebV, { [td.y71]: o }),
              children: [
                  (0, s.jsx)(f.vN, {
                      offset: 4,
                      children: (0, s.jsx)("button", {
                          type: "button",
                          className: td.$IB,
                          onClick: i,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, s.jsx)("span", { id: l, className: td.Lnh, children: t }),
                      }),
                  }),
                  (0, s.jsx)("div", {
                      className: td._ov,
                      children: (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsxs)("button", {
                              type: "button",
                              onClick: c,
                              className: td.hQH,
                              children: [
                                  (0, s.jsx)("span", { className: td.vE$, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, s.jsx)(x.M, { size: "md", color: "currentColor", className: td.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tb(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: i } = a.useContext(P.Y),
        [c, h] = a.useState(null),
        f = a.useRef(null),
        [p, g] = a.useState(null),
        S = a.useRef(null),
        I = (0, d.yK)([ev.A], () => ev.A.summaries(t.id) ?? [], [t]),
        y = (0, D.Ay)(I);
    a.useEffect(() => {
        o().isEqual(y, I) ||
            ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            [ts.default],
            () => I?.map((e) => e.people?.map((e) => ts.default.getUser(e) ?? null).filter(eF.Vq)) ?? [],
            [I],
            tT,
        ),
        b = (0, d.bG)([ev.A], () => ev.A.visibleSummaryIndex()) ?? -1,
        T = I?.[b]?.topic;
    null == T && null == c && I?.length >= 1 && (T = I[0]?.topic);
    let L = a.useMemo(
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
                        (0, ej.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        w = a.useCallback(
            (e) => {
                (R(), L(e));
            },
            [L, R],
        ),
        [O, U] = a.useState(!1),
        B = a.useCallback(() => {
            (ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : to.eh.PILL_DROPDOWN,
                    s = I[e];
                null != s &&
                    ((0, ej.sK)(t.id, s.id),
                    (0, ej.C6)(t.id, s.id),
                    l.removeAutomaticAnchorCallback(w),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(w, !1);
                            }, 100));
                    }),
                    ti.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
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
            null != t && g(t);
        }, []);
    a.useEffect(() => {
        null != p && O && S.current?.scrollTo({ top: p });
    }, [p, O]);
    let V = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && f.current?.contains(e.target)) ||
                (O &&
                    ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            (0, ej.$T)(t.id);
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
            () => (0, s.jsx)(eZ, { channel: t, summaries: I, summariesMembers: M, selectTopic: H, setOpen: G }),
            [I, M, H, G, t],
        ),
        K = a.useCallback(() => {
            let e = eL.Ay.ackMessageId(t.id);
            null != e
                ? j.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : j.A.jumpToMessage({
                      channelId: t.id,
                      messageId: ek.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        W = a.useCallback(() => {
            (0, v.ack)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Y = ec.intl.string(ec.t["38qwgO"]);
    return (
        I.length > 0 && (Y = "" === T || null == T ? ec.intl.string(ec.t.DwnFuG) : T),
        i
            ? null
            : (0, s.jsxs)("div", {
                  ref: f,
                  className: r()(td.dw5, td.jht),
                  children: [
                      (0, s.jsx)("div", {
                          className: td.qmJ,
                          children: (0, s.jsx)(A.D, {
                              className: td.TQl,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: B,
                              children: (0, s.jsxs)("div", {
                                  className: r()({ [td.hNz]: !O, [td.Apq]: O }),
                                  children: [
                                      (0, s.jsx)(C.K, { size: "xs", color: "currentColor", className: td.VdQ }),
                                      (0, s.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          className: r()(td.$Uj, td.lc3),
                                          children: Y,
                                      }),
                                      (0, s.jsx)(ta.A, {
                                          width: 16,
                                          height: 16,
                                          direction: ta.A.Directions.DOWN,
                                          className: td.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, s.jsx)(A.D, { onClick: K, className: td.ijE, children: n }),
                      (0, s.jsxs)(A.D, {
                          onClick: W,
                          className: r()(td.hQH, td.NXP),
                          children: [
                              (0, s.jsx)("div", { className: td.$Uj, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, s.jsx)(x.M, { size: "md", color: "currentColor", className: td.t3N }),
                          ],
                      }),
                      O &&
                          (0, s.jsxs)("div", {
                              className: td.A1T,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: td.kee,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: td.Ney,
                                              children: [
                                                  (0, s.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: td.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(F.A, { className: td.Zxm }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: B,
                                              className: td.oX1,
                                              children: (0, s.jsx)(_.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(N.Ip, { ref: S, className: td.Pei, fade: !0, children: z }),
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
function tL(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = a.useContext(P.Y),
        [i, c] = a.useState(null),
        h = a.useRef(null),
        [f, p] = a.useState(null),
        g = a.useRef(null),
        x = (0, d.yK)([ev.A], () => ev.A.summaries(t.id) ?? [], [t]),
        v = (0, D.Ay)(x);
    a.useEffect(() => {
        o().isEqual(v, x) ||
            ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            [ts.default],
            () => x?.map((e) => e.people?.map((e) => ts.default.getUser(e) ?? null).filter(eF.Vq)) ?? [],
            [x],
            tT,
        ),
        I = (0, d.bG)([ev.A], () => ev.A.visibleSummaryIndex()) ?? -1,
        y = x?.[I]?.topic;
    null == y && null == i && x?.length >= 1 && (y = x[0]?.topic);
    let M = a.useMemo(() => o().get(x, I - 1), [I, x]),
        b = a.useMemo(() => o().get(x, I + 1), [I, x]),
        T = a.useMemo(
            () =>
                o().debounce((e) => {
                    c(e?.id ?? null);
                }, 64),
            [c],
        ),
        L = a.useMemo(
            () =>
                o().throttle(
                    () => {
                        (0, ej.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        R = a.useCallback(
            (e) => {
                (L(), T(e));
            },
            [T, L],
        ),
        [w, O] = a.useState(!1),
        U = a.useCallback(() => {
            (ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : to.eh.PILL_DROPDOWN,
                    s = x[e];
                null != s &&
                    ((0, ej.sK)(t.id, s.id),
                    (0, ej.C6)(t.id, s.id),
                    n.removeAutomaticAnchorCallback(R),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(R, !1);
                            }, 100));
                    }),
                    ti.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
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
            B(I - 1, to.eh.PILL_NEXT_ARROW);
        }, [B, I]),
        G = a.useCallback(() => {
            B(I + 1, to.eh.PILL_PREVIOUS_ARROW);
        }, [I, B]),
        V = a.useCallback((e) => {
            O(e);
            let t = g.current?.scrollTop;
            null != t && p(t);
        }, []);
    a.useEffect(() => {
        null != f && w && g.current?.scrollTo({ top: f });
    }, [f, w]);
    let z = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (w &&
                    ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            (0, ej.$T)(t.id);
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
        () => (0, s.jsx)(eZ, { channel: t, summaries: x, summariesMembers: S, selectTopic: B, setOpen: V }),
        [x, S, B, V, t],
    );
    if (!(0, d.bG)([ev.A], () => ev.A.shouldShowTopicsBar())) return null;
    let W = ec.intl.string(ec.t["38qwgO"]);
    return (
        x.length > 0 && (W = "" === y || null == y ? ec.intl.string(ec.t.DwnFuG) : y),
        l
            ? null
            : (0, s.jsxs)("div", {
                  ref: h,
                  className: r()(td.$T$, td.jht),
                  children: [
                      (0, s.jsxs)("div", {
                          className: td.sEF,
                          children: [
                              (0, s.jsx)(A.D, {
                                  className: td.LPV,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: U,
                                  children: (0, s.jsxs)("div", {
                                      className: r()({ [td.Nv2]: !w, [td.Ann]: w }),
                                      children: [
                                          (0, s.jsx)(C.K, { size: "xs", color: "currentColor", className: td.Npc }),
                                          (0, s.jsx)(m.E, {
                                              className: td.r1V,
                                              variant: "text-sm/medium",
                                              children: W,
                                          }),
                                          (0, s.jsx)(ta.A, {
                                              width: 16,
                                              height: 16,
                                              direction: ta.A.Directions.DOWN,
                                              className: td._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: td.Ykg,
                                  children: [
                                      (0, s.jsx)(A.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: G,
                                          className: r()(td.ZMY, td.vzA, { [td.jfO]: null == b }),
                                          children: (0, s.jsx)(ta.A, {
                                              width: 16,
                                              height: 16,
                                              direction: ta.A.Directions.UP,
                                          }),
                                      }),
                                      (0, s.jsx)(A.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: H,
                                          className: r()(td.ZMY, td.mtW, { [td.jfO]: null == M }),
                                          children: (0, s.jsx)(ta.A, {
                                              width: 16,
                                              height: 16,
                                              direction: ta.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      w &&
                          (0, s.jsxs)("div", {
                              className: td.A1T,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: td.kee,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: td.Ney,
                                              children: [
                                                  (0, s.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: td.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(F.A, { className: td.Zxm }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: U,
                                              className: td.oX1,
                                              children: (0, s.jsx)(_.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(N.Ip, { ref: g, className: td.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
        className: td.YLv,
        children: [
            (0, s.jsx)(m.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: td.LdH,
                children: e,
            }),
            t &&
                (0, s.jsx)(m.E, {
                    className: td.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ec.intl.string(ec.t["515vjG"]),
                }),
        ],
    });
}
