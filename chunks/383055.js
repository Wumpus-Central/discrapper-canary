n.d(t, {
    Ez: () => ty,
    ks: () => tS,
    Ab: () => tv,
    _z: () => tg,
    GN: () => tM,
    OZ: () => tb,
    UK: () => tL,
    gL: () => tx,
    yR: () => tR,
    Dk: () => tI,
    LL: () => t_,
    bU: () => tN,
    _d: () => tj,
    $o: () => tC,
    P$: () => tE,
    Ir: () => tp,
});
var l,
    s = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    o = n(435558),
    c = n.n(o),
    u = n(621466),
    d = n(855986),
    m = n(834730),
    h = n(265872),
    f = n(559106),
    p = n(821609),
    g = n(289873),
    A = n(939249),
    C = n(582394),
    x = n(306788),
    E = n(534514),
    _ = n(789645),
    N = n(95362),
    j = n(138399),
    I = n(334738),
    S = n(192308),
    v = n(267102),
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
    modalContext = (0, S.TI)(this.props.appContext);
    onCloseImage = () => {
        (0, S.Oo)(M.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: s,
            src: a,
            original: i,
            width: r,
            height: o,
            animated: c,
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
                        height: o,
                        type: "IMAGE",
                        alt: s,
                        contentType: g,
                        originalContentType: A,
                        zoomThumbnailPlaceholder: n,
                        animated: c,
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
    let t = (0, v.Us)(),
        n = (0, T.j)();
    return (0, s.jsx)(L, { ...e, isWindowFocused: n, appContext: t });
}
var w = n(9578),
    k = n(56562),
    D = n(475743),
    O = n(905394),
    P = n(692051),
    U = n(915089),
    F = n(611371),
    B = n(453771),
    H = n(153440);
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
            onVolumeChange: o,
            onVolumeShow: c,
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
            onVolumeChange: o,
            onVolumeShow: c,
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
    Q = n(873200),
    Z = n(387758),
    $ = n(165862),
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
    eo = n(792996);
let ec = "utf-8";
var eu = n(540168),
    ed = n(810917);
let em = new Set(["markdown", "md", "mkd", "mkdown"]),
    eh = (0, es.Fe)({
        createPromise: () => Promise.all([n.e(417498), n.e(759743), n.e(411779), n.e(636550)]).then(n.bind(n, 420410)),
        webpackId: 420410,
        name: "PlaintextFileMarkdownPreview",
        renderLoader: () => (0, s.jsx)(g.y, { className: ed.u1 }),
    });
function ef(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, s.jsx)(eu.d, { text: t, language: n, className: r()(ed.Xb, { [ed.Zw]: l }) });
}
function ep(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: a } = e,
        i = eo.intl.formatToPlainString(a ? eo.t.Go5Vvs : eo.t.yJcYan, { lines: l }),
        r = `${t ? eo.intl.string(eo.t.iTcuma) : eo.intl.string(eo.t.dcl9MQ)} (${i})`;
    return (0, s.jsx)("div", {
        className: ed.py,
        children: (0, s.jsx)(z.m, {
            text: r,
            children: (0, s.jsx)(K.K, {
                icon: t ? W.ChevronSmallUpIcon : Y.ChevronSmallDownIcon,
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
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: ed.Md,
                        children: t,
                    }),
                }),
            }),
            (0, s.jsx)(m.E, { variant: "body-xs/normal", color: "text-subtle", children: (0, ei.up)(n) }),
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
                "aria-label": eo.intl.string(eo.t.utm4qs),
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
                            (0, s.jsx)(Q.a3, { placeholder: eo.intl.string(eo.t.GofftW) }),
                            (0, s.jsx)(Q.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, s.jsx)(z.m, {
                ariaHidden: !0,
                text: eo.intl.string(eo.t.utm4qs),
                children: (0, s.jsx)(A.D, {
                    ...e,
                    className: ed.Qw,
                    "aria-label": eo.intl.string(eo.t.utm4qs),
                    children: (0, s.jsx)(Z.AngleBracketsIcon, { size: "sm", color: "currentColor", ref: i }),
                }),
            }),
    });
}
function eC(e) {
    let { wordWrap: t, setWordWrap: n, language: l, renderMarkdown: i, setRenderMarkdown: r, url: o, fileName: c } = e,
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
                        "aria-label": eo.intl.string(eo.t.PdRCRg),
                        children: (0, s.jsxs)(J.rX, {
                            children: [
                                (0, s.jsx)(J.Dr, {
                                    id: "download",
                                    label: eo.intl.string(eo.t["1WjMbC"]),
                                    icon: X.DownloadIcon,
                                    action: () => {
                                        (d.current?.click(), a());
                                    },
                                }),
                                (0, s.jsx)(J.sL, {
                                    id: "word-wrap",
                                    label: eo.intl.string(eo.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                em.has(l)
                                    ? (0, s.jsx)(J.sL, {
                                          id: "render-markdown",
                                          label: eo.intl.string(eo.t.zstmkn),
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
                        text: eo.intl.string(eo.t["UKOtz+"]),
                        children: (0, s.jsx)(A.D, {
                            ...e,
                            className: ed.IQ,
                            "aria-label": eo.intl.string(eo.t["UKOtz+"]),
                            children: (0, s.jsx)(ee.MoreHorizontalIcon, { ref: u, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, s.jsx)(et.Anchor, {
                ref: d,
                href: o,
                download: c,
                className: ed.op,
                children: (0, s.jsx)(X.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function ex(e) {
    return (0, s.jsx)(z.m, {
        ariaHidden: !0,
        text: eo.intl.string(eo.t["0PQYk3"]),
        children: (0, s.jsx)(A.D, {
            className: ed.R1,
            "aria-label": eo.intl.string(eo.t["0PQYk3"]),
            onClick: () => {
                (0, S.qf)((t) => (0, s.jsx)(e_, { ...e, ...t }));
            },
            children: (0, s.jsx)(en.MaximizeIcon, { size: "sm", color: "currentColor" }),
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
            setExpanded: o,
            language: c,
            setLanguage: u,
            wordWrap: d,
            setWordWrap: m,
            renderMarkdown: h,
            setRenderMarkdown: f,
            bytesLeft: p,
            className: A,
        } = e,
        C = a?.split("\n"),
        x = C?.length ?? 0,
        E = i ? 100 : 6,
        _ = 0 === p,
        j = h && em.has(c),
        I = "";
    (_ && i && x > E ? (I = "\n...") : _ || (I = "..."),
        "" !== I &&
            (_
                ? (I += " " + eo.intl.formatToPlainString(eo.t.DQnFp2, { lines: x - E }))
                : (I += " " + eo.intl.formatToPlainString(eo.t["1+gGcK"], { formattedBytes: (0, ei.up)(p) }))));
    let S = C?.slice(0, E).join("\n") ?? "",
        v = i || E < x;
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
                          ? (0, s.jsx)(eh, { text: S, notice: I.trim() })
                          : (0, s.jsx)(ef, { text: S + I, language: c, wordWrap: d }),
            }),
            (0, s.jsxs)("div", {
                className: ed.qr,
                role: "group",
                "aria-label": eo.intl.string(eo.t.TlXA8e),
                children: [
                    v ? (0, s.jsx)(ep, { expanded: i, setExpanded: o, numLines: x, isWholeFile: _ }) : null,
                    (0, s.jsx)(eg, { fileName: n, fileSize: l }),
                    (0, s.jsx)("div", { className: ed.Kb }),
                    (0, s.jsx)(eA, { language: c, setLanguage: u, align: "top" }),
                    null != a
                        ? (0, s.jsx)(ex, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: c,
                              wordWrap: d,
                              renderMarkdown: h,
                              fileContents: a,
                              bytesLeft: p,
                          })
                        : null,
                    (0, s.jsx)(eC, {
                        wordWrap: d,
                        setWordWrap: m,
                        language: c,
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
            wordWrap: o,
            renderMarkdown: c,
            fileContents: d,
            bytesLeft: h,
            onClose: f,
        } = e,
        [p, A] = a.useState(r),
        [C, x] = a.useState(o),
        [E, _] = a.useState(c),
        j = a.useRef(null),
        I = E && em.has(p),
        S = h > 0 ? `... ${eo.intl.formatToPlainString(eo.t["1+gGcK"], { formattedBytes: (0, ei.up)(h) })}` : "";
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
            "aria-label": eo.intl.string(eo.t["qxQjc+"]),
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
                                      children: I
                                          ? (0, s.jsx)(eh, { text: d, notice: S })
                                          : (0, s.jsx)(ef, { text: d + S, language: p, wordWrap: C }),
                                  }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-label": eo.intl.string(eo.t.TlXA8e),
                        children: (0, s.jsxs)(m.E, {
                            color: "text-default",
                            className: ed.Hx,
                            variant: "body-sm/normal",
                            children: [
                                (0, s.jsx)(eg, { fileName: n, fileSize: l }),
                                (0, s.jsx)("div", { className: ed.Kb }),
                                (0, s.jsx)(eA, { language: p, setLanguage: A, align: "bottom" }),
                                (0, s.jsx)(eC, {
                                    wordWrap: C,
                                    setWordWrap: x,
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
                defaultExpanded: o = !1,
                className: c,
                onClick: u,
                onContextMenu: d,
            } = e,
            [m, h] = a.useState(n.split(".").slice(-1)[0]),
            [f, p] = a.useState(o),
            [g, A] = a.useState(!0),
            [C, x] = a.useState(!0),
            {
                fileContents: E,
                bytesLeft: _,
                hadError: N,
            } = (function (e, t) {
                let [n, l] = a.useState(!1),
                    [s, i] = a.useState(null),
                    [r, o] = a.useState(1);
                return (
                    a.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    s = (function (e) {
                                        let t = e?.split("charset=").slice(-1)[0] ?? ec;
                                        try {
                                            return new TextDecoder(t);
                                        } catch (n) {
                                            if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                                                return new TextDecoder(ec);
                                            throw n;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    a = n.headers.get("content-range") ?? "0",
                                    r = n.headers.get("content-length") ?? "1",
                                    c = parseInt(a.split("/")[1]),
                                    u = Number.isNaN(c) ? 0 : c - parseInt(r),
                                    d = 0 === u ? s : s.slice(0, -1);
                                (i((0, er.sJ)(d)), o(u), l(!1));
                            } catch (e) {
                                (o(0), l(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: r, hadError: n }
                );
            })(t, i);
        return N
            ? (0, s.jsx)(O.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: d, className: c })
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
                  renderMarkdown: C,
                  setRenderMarkdown: x,
                  className: r()(ed.mr, c),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var ej = n(863922),
    eI = n(391820),
    eS = n(534890),
    ev = n(442433),
    ey = n(640708),
    eM = n(941971),
    eb = n(707539),
    eT = n(576705),
    eL = n(218461),
    eR = n(340833),
    ew = n(913642),
    ek = n(811091),
    eD = n(780061);
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
            { totalSize: r, knownSize: o } = t;
        if (r < l) return null;
        let u = c()(n)
                .filter(eF.Vq)
                .take(a)
                .map((e) => (0, s.jsx)(eH, { member: e, guildId: i }, e.id))
                .value(),
            d = r - o;
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
                        children: (0, s.jsx)(x.TopicsIcon, {
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
                children: eo.intl.string(eo.t.yJHJei),
            }),
            (0, s.jsx)(m.E, {
                className: ez.Qq,
                color: "text-default",
                variant: "body-md/normal",
                children: eo.intl.string(eo.t.p2dIh6),
            }),
        ],
    });
}
var eW = n(652215),
    eY = n(670455),
    eq = n(750557);
function eQ(e) {
    let { summary: t, channel: l, members: i, guildId: r, unread: o, onClick: c } = e,
        [u, h] = a.useState(!1),
        f = (0, eb.aK)(ek.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([eI.A], () => eI.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, eD.A)({ summary: t, channel: l, rating: n }));
    }
    let C = eT.A.can(eW.xBc.MANAGE_MESSAGES, l);
    return (0, s.jsxs)(A.D, {
        className: eq.kL,
        onClick: c,
        onContextMenu: function (e) {
            C &&
                (0, ev.L3)(e, async () => {
                    let { default: e } = await n.e(443921).then(n.bind(n, 304232));
                    return (n) => (0, s.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, s.jsx)(eM.A, { hovered: u, unread: o, className: eq.dM }),
            (0, s.jsx)("div", {
                className: eq.uV,
                children: (0, s.jsxs)("div", {
                    className: eq.Hw,
                    children: [
                        (0, s.jsx)(m.E, {
                            className: eq.vE,
                            color: "interactive-text-default",
                            variant: "body-xs/normal",
                            children: f,
                        }),
                        (0, s.jsx)(ey.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                        (0, s.jsx)(eS.ChatIcon, { size: "xxs", color: "currentColor", className: eq.Kk }),
                        (0, s.jsx)(m.E, {
                            className: eq.U9,
                            color: "interactive-text-default",
                            variant: "body-xs/normal",
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
            (0, s.jsx)(m.E, { color: "text-strong", variant: "body-sm/semibold", className: eq.DD, children: t.topic }),
            (0, s.jsx)(m.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: eq.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eZ(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: i, setOpen: r } = e,
        o = (0, d.bG)([eL.Ay], () => eL.Ay.getOldestUnreadMessageId(l.id)),
        c = a.useCallback(
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
                          unread: null != o && ek.default.compare(e.endId, o) > 0,
                          onClick: () => c(t),
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
    e2 = n(527388),
    e4 = n(20504),
    e5 = n(188567),
    e6 = n(927813),
    e7 = n(824744),
    e9 = n(408822),
    e8 = n(518950),
    te = n(672245);
let tt = a.lazy(() => n.e(594436).then(n.bind(n, 660207)));
function tn(e) {
    let { played: t, duration: n, currentTime: l } = e,
        a = null == n ? "--:--" : t ? (0, H.rB)(Math.ceil(n - l)) : (0, H.rB)(Math.ceil(n));
    return (0, s.jsx)(m.E, { variant: "body-sm/normal", className: te.p0, tabularNumbers: !0, children: a });
}
let tl = a.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: i,
            onMute: o,
            waveform: c,
            durationSecs: u,
            onVolumeShow: h,
            onVolumeHide: f,
            onPlay: p,
            onPause: g,
            onError: C,
            playbackCacheKey: x,
        } = e,
        E = a.useRef(null),
        _ = a.useMemo(() => (null != x ? e3.Ay.getPlaybackPosition(x) : 0), [x]),
        N = (0, d.bG)([e3.Ay], () => e3.Ay.getPlaybackRate(e3.k0.VOICE_MESSAGE)),
        [j, I] = a.useState(_ > 0),
        [S, v] = a.useState(_),
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
                    null != x &&
                    e1.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: x, position: e, duration: u });
            },
            [x, u],
        ),
        W = a.useCallback(() => {
            (R(!1),
                null == H.current &&
                    (H.current = setTimeout(() => {
                        (I(!1), O(!1), (H.current = void 0));
                    }, 500)));
        }, []),
        Y = a.useCallback(() => {
            w || (K(0), W());
        }, [W, w, K]),
        q = a.useCallback((e) => {
            let t = E.current;
            null != t && (v(e), (t.currentTime = e), I(!0));
        }, []),
        Q = a.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            C?.(t);
        }, [C]),
        Z = a.useCallback(
            (e) => {
                let t = (0, e7.w)(e, 1);
                (T(0 === t), B(t), i?.(t));
            },
            [i],
        ),
        $ = a.useCallback(() => {
            (T(!b), o?.(!b));
        }, [b, o]),
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
        !j && L && I(!0);
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
                    }, e6.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [L, w, K]),
        a.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || L)
                if (L) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e6.A.Millis.SECOND));
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
                    null == n || (v(n.currentTime), L && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, L, v]),
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
        ea = L ? eo.intl.string(eo.t["3XohGn"]) : eo.intl.string(eo.t.AlHqHT),
        ei = eo.intl.formatToPlainString(eo.t.LgCPMt, { playbackRate: N }),
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
    let ec = (0, d.bG)([e0.Ay], () => e0.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: r()(te.kL, { [te.he]: L }),
        onMouseEnter: V,
        role: "region",
        "aria-label": eo.intl.string(eo.t.c8U6xd),
        children: [
            (0, s.jsx)("div", {
                className: te.Kl,
                children: (0, s.jsx)("div", { className: r()(te.fq, { [te.VN]: ec }) }),
            }),
            (0, s.jsx)(A.D, {
                className: te.k0,
                onClick: G,
                "aria-label": ea,
                children: (0, s.jsx)(es, { className: te.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, s.jsx)(e9.A, {
                className: te.ou,
                waveform: c,
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
                children: (0, s.jsx)(m.E, { variant: "body-xs/semibold", className: te.Sn, children: er }),
            }),
            (0, s.jsx)(e4.A, {
                className: te.bk,
                iconClassName: te._j,
                iconColor: "currentColor",
                sliderWrapperClassName: te.MQ,
                muted: b,
                value: (0, e7.M)(F, 1),
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
    ti = n(129230),
    tr = n(587481),
    to = n(838541),
    tc = n(521732),
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
        "aria-label": eo.intl.string(eo.t.fSiQ3A),
        className: td.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tu.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, s.jsx)(m.E, {
                variant: "body-xs/semibold",
                color: "none",
                tag: "span",
                className: td.k_,
                children: eo.intl.string(eo.t.fSiQ3A),
            }),
            (0, s.jsx)(m.E, { variant: "body-md/normal", color: "none", tag: "span", className: td.a7, children: t }),
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
            reducedSizeAltTextButton: o = !1,
        } = e,
        [c, u] = a.useState(!1),
        d = a.useRef(null);
    return (n || c) && null != t && tp({ alt: t, disableAltTextDisplay: l, hiddenSpoilers: i })
        ? (0, s.jsx)("div", {
              className: td.NO,
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
                              "aria-label": eo.intl.string(eo.t.fSiQ3A),
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              className: r()(td.DV, { [td.yZ]: !0, [td.I5]: o }),
                              children: eo.intl.string(eo.t.jCV1Tz),
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
            renderAdjacentContent: o,
            renderOverlayContent: c,
            disableAltTextDisplay: u = !1,
            hiddenSpoilers: d,
            mosaicStyleAlt: h,
            mediaLayoutType: f,
            reducedSizeAltTextButton: p,
            ...g
        } = e,
        A = tm(t),
        C = th(n);
    ((l = null == l ? tr.v1 : l), (i = null == i ? tr.uj : i));
    let [x, E] = a.useState(!0),
        _ = f === to.d.MOSAIC || !0 === h,
        N = x && !u && e$._z.getSetting() && null != r && "" !== r && !0 !== d;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            (0, s.jsx)(V.A, {
                ...g,
                alt: r,
                autoMute: i,
                mediaLayoutType: f,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: C,
                onVolumeChange: A,
                renderLinkComponent: tN,
                renderOverlayContent: c,
                volume: l,
            }),
            null != o && o(),
            _ &&
                (0, s.jsx)(tg, {
                    alt: r,
                    controlsVisible: x,
                    disableAltTextDisplay: u,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: p,
                }),
            !_ &&
                N &&
                (0, s.jsx)(m.E, {
                    variant: "body-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: td.R5,
                    children: r,
                }),
        ],
    });
}
function tC(e) {
    return (0, s.jsx)(tA, { ...e });
}
function tx(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: i,
            onVolumeHide: r,
            renderAdjacentContent: o,
            ...c
        } = e,
        u = tm(t),
        d = th(l);
    return (
        (n = null == n ? tr.v1 : n),
        (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(G, {
                    ...c,
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
                null != o && o(),
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
            imageContainerClassName: o,
            disableAltTextDisplay: c = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: g,
        } = e,
        A = d === to.d.MOSAIC || !0 === g,
        C = !c && e$._z.getSetting() && null != t && "" !== t && !0 !== n,
        x = a.createRef();
    return (0, s.jsxs)("div", {
        className: r()(td.fo, i),
        children: [
            (0, s.jsxs)("div", {
                className: r()(td.ZS, o),
                style: p,
                children: [(0, s.jsx)(R, { ...e }), null != l && l()],
            }),
            A &&
                C &&
                (0, s.jsx)("div", {
                    className: td.Y1,
                    children: (0, s.jsx)(h.Y, {
                        targetElementRef: x,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, s.jsx)(tf, { altText: t, altButtonRef: x }),
                        children: (e) =>
                            (0, s.jsx)(f.vN, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: x,
                                    "aria-label": eo.intl.string(eo.t.fSiQ3A),
                                    className: r()(td.DV, { [td.I5]: u }),
                                    children: eo.intl.string(eo.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !A &&
                C &&
                (0, s.jsx)(m.E, {
                    variant: "body-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: td.R5,
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
function tI(e) {
    return (0, s.jsx)(O.A, { ...e });
}
var tS = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tv = (e) => {
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
                      className: r()(td.Sg, l),
                      children: [
                          (0, s.jsx)("div", {
                              className: td.$I,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return eo.intl.string(eo.t["4EvBbw"]);
                                      case 1:
                                          return eo.intl.string(eo.t["1J6Xq7"]);
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
                                                    return eo.intl.string(eo.t.gpoQsB);
                                                case 1:
                                                    return eo.intl.string(eo.t.k3RM8z);
                                                default:
                                                    return (0, eF.xb)(e);
                                            }
                                        })(t),
                                        onClick: a,
                                    }),
                                })
                              : (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: td.u1,
                                    itemClassName: td.$N,
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
                      className: r()(td._5, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, s.jsx)("div", { className: td.$I, children: eo.intl.string(eo.t["1zUvlw"]) }),
                          n
                              ? (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: td.u1,
                                    itemClassName: td.$N,
                                })
                              : (0, s.jsx)("div", {
                                    className: r()(td.hQ, td.d3),
                                    children: eo.intl.string(eo.t.TdQXA8),
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
        o = a.useCallback(() => {
            (0, I.I_)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.btD.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = a.useContext(P.Y);
    return c
        ? null
        : (0, s.jsxs)("div", {
              className: r()(td.eb, { [td.y7]: c }),
              children: [
                  (0, s.jsx)(f.vN, {
                      offset: 4,
                      children: (0, s.jsx)("button", {
                          type: "button",
                          className: td.$I,
                          onClick: i,
                          "aria-label": eo.intl.string(eo.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, s.jsx)("span", { id: l, className: td.Ln, children: t }),
                      }),
                  }),
                  (0, s.jsx)("div", {
                      className: td._o,
                      children: (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: td.hQ,
                              children: [
                                  (0, s.jsx)("span", { className: td.vE, children: eo.intl.string(eo.t.e6RscS) }),
                                  (0, s.jsx)(C.ChatCheckIcon, { size: "md", color: "currentColor", className: td.t3 }),
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
        [o, h] = a.useState(null),
        f = a.useRef(null),
        [p, g] = a.useState(null),
        S = a.useRef(null),
        v = (0, d.yK)([eI.A], () => eI.A.summaries(t.id) ?? [], [t]),
        y = (0, D.Ay)(v);
    a.useEffect(() => {
        c().isEqual(y, v) ||
            ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [v, y, t.guild_id, t.id, t.type]);
    let M = (0, d.bG)(
            [ts.default],
            () => v?.map((e) => e.people?.map((e) => ts.default.getUser(e) ?? null).filter(eF.Vq)) ?? [],
            [v],
            tT,
        ),
        b = (0, d.bG)([eI.A], () => eI.A.visibleSummaryIndex()) ?? -1,
        T = v?.[b]?.topic;
    null == T && null == o && v?.length >= 1 && (T = v[0]?.topic);
    let L = a.useMemo(
            () =>
                c().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        R = a.useMemo(
            () =>
                c().throttle(
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
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!O));
        }, [O, v, U, t]),
        H = a.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tc.eh.PILL_DROPDOWN,
                    s = v[e];
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
            [v, t, w, l],
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
                        num_summaries: v.length,
                        message_counts: v.map((e) => e.count),
                        start_message_ids: v.map((e) => e.startId),
                        end_message_ids: v.map((e) => e.endId),
                        num_participants: v.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                G(!1));
        },
        [O, v, t, G],
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
            () => (0, s.jsx)(eZ, { channel: t, summaries: v, summariesMembers: M, selectTopic: H, setOpen: G }),
            [v, M, H, G, t],
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
            (0, I.I_)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.btD.ACK_MANUAL,
            });
        }, [t.id]),
        Y = eo.intl.string(eo.t["38qwgO"]);
    return (
        v.length > 0 && (Y = "" === T || null == T ? eo.intl.string(eo.t.DwnFuG) : T),
        i
            ? null
            : (0, s.jsxs)("div", {
                  ref: f,
                  className: r()(td.dw, td.jh),
                  children: [
                      (0, s.jsx)("div", {
                          className: td.qm,
                          children: (0, s.jsx)(A.D, {
                              className: td.TQ,
                              "aria-label": eo.intl.string(eo.t.RT3MPz),
                              onClick: B,
                              children: (0, s.jsxs)("div", {
                                  className: r()({ [td.hN]: !O, [td.Ap]: O }),
                                  children: [
                                      (0, s.jsx)(x.TopicsIcon, { size: "xs", color: "currentColor", className: td.Vd }),
                                      (0, s.jsx)(m.E, {
                                          variant: "body-sm/medium",
                                          className: r()(td.$U, td.lc),
                                          children: Y,
                                      }),
                                      (0, s.jsx)(ta.A, {
                                          width: 16,
                                          height: 16,
                                          direction: ta.A.Directions.DOWN,
                                          className: td.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, s.jsx)(A.D, { onClick: K, className: td.ij, children: n }),
                      (0, s.jsxs)(A.D, {
                          onClick: W,
                          className: r()(td.hQ, td.NX),
                          children: [
                              (0, s.jsx)("div", { className: td.$U, children: eo.intl.string(eo.t.e6RscS) }),
                              (0, s.jsx)(C.ChatCheckIcon, { size: "md", color: "currentColor", className: td.t3 }),
                          ],
                      }),
                      O &&
                          (0, s.jsxs)("div", {
                              className: td.A1,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: td.ke,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: td.Ne,
                                              children: [
                                                  (0, s.jsx)(x.TopicsIcon, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: td.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-sm/semibold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eo.intl.string(eo.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(F.A, { className: td.Zx }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": eo.intl.string(eo.t.cpT0Cq),
                                              onClick: B,
                                              className: td.oX,
                                              children: (0, s.jsx)(_.XSmallIcon, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(N.Ip, { ref: S, className: td.Pe, fade: !0, children: z }),
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
        [i, o] = a.useState(null),
        h = a.useRef(null),
        [f, p] = a.useState(null),
        g = a.useRef(null),
        C = (0, d.yK)([eI.A], () => eI.A.summaries(t.id) ?? [], [t]),
        I = (0, D.Ay)(C);
    a.useEffect(() => {
        c().isEqual(I, C) ||
            ti.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [C, I, t.guild_id, t.id, t.type]);
    let S = (0, d.bG)(
            [ts.default],
            () => C?.map((e) => e.people?.map((e) => ts.default.getUser(e) ?? null).filter(eF.Vq)) ?? [],
            [C],
            tT,
        ),
        v = (0, d.bG)([eI.A], () => eI.A.visibleSummaryIndex()) ?? -1,
        y = C?.[v]?.topic;
    null == y && null == i && C?.length >= 1 && (y = C[0]?.topic);
    let M = a.useMemo(() => c().get(C, v - 1), [v, C]),
        b = a.useMemo(() => c().get(C, v + 1), [v, C]),
        T = a.useMemo(
            () =>
                c().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        L = a.useMemo(
            () =>
                c().throttle(
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
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                O(!w));
        }, [w, C, O, t]),
        B = a.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tc.eh.PILL_DROPDOWN,
                    s = C[e];
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
            [C, t, R, n],
        ),
        H = a.useCallback(() => {
            B(v - 1, tc.eh.PILL_NEXT_ARROW);
        }, [B, v]),
        G = a.useCallback(() => {
            B(v + 1, tc.eh.PILL_PREVIOUS_ARROW);
        }, [v, B]),
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
                        num_summaries: C.length,
                        message_counts: C.map((e) => e.count),
                        start_message_ids: C.map((e) => e.startId),
                        end_message_ids: C.map((e) => e.endId),
                        num_participants: C.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                V(!1));
        },
        [w, C, t, V],
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
        () => (0, s.jsx)(eZ, { channel: t, summaries: C, summariesMembers: S, selectTopic: B, setOpen: V }),
        [C, S, B, V, t],
    );
    if (!(0, d.bG)([eI.A], () => eI.A.shouldShowTopicsBar())) return null;
    let W = eo.intl.string(eo.t["38qwgO"]);
    return (
        C.length > 0 && (W = "" === y || null == y ? eo.intl.string(eo.t.DwnFuG) : y),
        l
            ? null
            : (0, s.jsxs)("div", {
                  ref: h,
                  className: r()(td.$T, td.jh),
                  children: [
                      (0, s.jsxs)("div", {
                          className: td.sE,
                          children: [
                              (0, s.jsx)(A.D, {
                                  className: td.LP,
                                  "aria-label": eo.intl.string(eo.t.RT3MPz),
                                  onClick: U,
                                  children: (0, s.jsxs)("div", {
                                      className: r()({ [td.Nv]: !w, [td.An]: w }),
                                      children: [
                                          (0, s.jsx)(x.TopicsIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: td.Np,
                                          }),
                                          (0, s.jsx)(m.E, { className: td.r1, variant: "body-sm/medium", children: W }),
                                          (0, s.jsx)(ta.A, {
                                              width: 16,
                                              height: 16,
                                              direction: ta.A.Directions.DOWN,
                                              className: td._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: td.Yk,
                                  children: [
                                      (0, s.jsx)(A.D, {
                                          "aria-label": eo.intl.string(eo.t["4huCnC"]),
                                          onClick: G,
                                          className: r()(td.ZM, td.vz, { [td.jf]: null == b }),
                                          children: (0, s.jsx)(ta.A, {
                                              width: 16,
                                              height: 16,
                                              direction: ta.A.Directions.UP,
                                          }),
                                      }),
                                      (0, s.jsx)(A.D, {
                                          "aria-label": eo.intl.string(eo.t["58KOoF"]),
                                          onClick: H,
                                          className: r()(td.ZM, td.mt, { [td.jf]: null == M }),
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
                              className: td.A1,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: td.ke,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: td.Ne,
                                              children: [
                                                  (0, s.jsx)(x.TopicsIcon, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: td.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-sm/semibold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eo.intl.string(eo.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(F.A, { className: td.Zx }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": eo.intl.string(eo.t.cpT0Cq),
                                              onClick: U,
                                              className: td.oX,
                                              children: (0, s.jsx)(_.XSmallIcon, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(N.Ip, { ref: g, className: td.Pe, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
        className: td.YL,
        children: [
            (0, s.jsx)(m.E, {
                color: "none",
                variant: "body-sm/semibold",
                lineClamp: 1,
                className: td.Ld,
                children: e,
            }),
            t &&
                (0, s.jsx)(m.E, {
                    className: td.$o,
                    color: "text-muted",
                    variant: "body-sm/normal",
                    children: eo.intl.string(eo.t["515vjG"]),
                }),
        ],
    });
}
