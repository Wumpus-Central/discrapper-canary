n.d(t, {
    Ez: () => tS,
    ks: () => tI,
    Ab: () => ty,
    _z: () => tg,
    GN: () => tb,
    OZ: () => tM,
    UK: () => tL,
    gL: () => tx,
    yR: () => tw,
    Dk: () => tv,
    LL: () => tj,
    bU: () => t_,
    _d: () => tN,
    $o: () => tA,
    P$: () => tE,
    Ir: () => tf,
});
var l,
    s = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    o = n(435558),
    c = n.n(o),
    u = n(621466),
    d = n(855986),
    m = n(834730),
    h = n(265872),
    p = n(559106),
    f = n(821609),
    g = n(289873),
    C = n(939249),
    A = n(582394),
    x = n(306788),
    E = n(534514),
    j = n(789645),
    _ = n(95362),
    N = n(138399),
    v = n(334738),
    I = n(192308),
    y = n(267102),
    S = n(619517),
    b = n(256905),
    M = n(536763),
    T = n(218394);
class L extends a.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: s, handlePreloadImage: a } = this.props;
        (s?.(e), null != a) ? a() : (0, M.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, I.TI)(this.props.appContext);
    onCloseImage = () => {
        (0, I.Oo)(b.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: s,
            src: a,
            original: r,
            width: i,
            height: o,
            animated: c,
            srcIsAnimated: d,
            children: m,
            shouldHideMediaOptions: h = !1,
            sourceMetadata: p,
            analyticsSource: f,
            contentType: g,
            originalContentType: C,
        } = this.props;
        ((0, u.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, b.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: a,
                        width: i,
                        height: o,
                        type: "IMAGE",
                        alt: s,
                        contentType: g,
                        originalContentType: C,
                        zoomThumbnailPlaceholder: n,
                        animated: c,
                        srcIsAnimated: d,
                        children: m,
                        trigger: l,
                        sourceMetadata: p,
                        original: r ?? a,
                    },
                ],
                shouldHideMediaOptions: h,
                location: f ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            }));
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, s.jsx)(S.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function w(e) {
    let t = (0, y.Us)(),
        n = (0, T.j)();
    return (0, s.jsx)(L, { ...e, isWindowFocused: n, appContext: t });
}
var R = n(9578),
    k = n(56562),
    D = n(475743),
    O = n(905394),
    P = n(692051),
    U = n(915089),
    B = n(611371),
    F = n(453771),
    H = n(153440);
class V extends a.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: a,
            volume: r,
            renderLinkComponent: i,
            onVolumeChange: o,
            onVolumeShow: c,
            onVolumeHide: u,
            autoMute: d,
            onMute: m,
            mimeType: h,
            onPlay: p,
        } = this.props;
        return (0, s.jsx)(H.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, F.Hb)(t),
            fileSizeBytes: t,
            type: H.Ay.Types.AUDIO,
            className: l,
            playable: a,
            volume: r,
            onMute: m,
            autoMute: d,
            onVolumeChange: o,
            onVolumeShow: c,
            onVolumeHide: u,
            renderLinkComponent: i,
            mimeType: h,
            onPlay: p,
        });
    }
}
var G = n(248643),
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
    ea = n(639169),
    er = n(980045),
    ei = n(255438),
    eo = n(417964),
    ec = n(792996);
let eu = "utf-8";
var ed = n(540168),
    em = n(810917);
let eh = (0, es.Fe)({
    createPromise: () => Promise.all([n.e(645304), n.e(759743), n.e(934647), n.e(636550)]).then(n.bind(n, 60711)),
    webpackId: 60711,
    name: "PlaintextFileMarkdownPreview",
    renderLoader: () => (0, s.jsx)(g.y, { className: em.u1 }),
});
function ep(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, s.jsx)(ed.d, { text: t, language: n, className: i()(em.Xb, { [em.Zw]: l }) });
}
function ef(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: a } = e,
        r = ec.intl.formatToPlainString(a ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: l }),
        i = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${r})`;
    return (0, s.jsx)("div", {
        className: em.py,
        children: (0, s.jsx)(z.m, {
            text: i,
            children: (0, s.jsx)(K.K, {
                icon: t ? W.ChevronSmallUpIcon : Y.ChevronSmallDownIcon,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": i,
            }),
        }),
    });
}
function eg(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, ei.up)(n)})`;
    return (0, s.jsxs)("div", {
        className: em.VI,
        children: [
            (0, s.jsx)("div", {
                className: em.VW,
                children: (0, s.jsx)(z.m, {
                    text: l,
                    children: (0, s.jsx)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: em.Md,
                        children: t,
                    }),
                }),
            }),
            (0, s.jsx)(m.E, { variant: "body-xs/normal", color: "text-subtle", children: (0, ei.up)(n) }),
        ],
    });
}
function eC(e) {
    let { language: t, setLanguage: n, align: l } = e,
        r = a.useRef(null);
    return (0, s.jsx)(h.Y, {
        targetElementRef: r,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, s.jsx)(q.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, s.jsx)("div", {
                    className: em.md,
                    children: (0, s.jsxs)(Q.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(er.No).map((e) => ({ value: e, label: e, id: e })),
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
                children: (0, s.jsx)(C.D, {
                    ...e,
                    className: em.Qw,
                    "aria-label": ec.intl.string(ec.t.utm4qs),
                    children: (0, s.jsx)(Z.AngleBracketsIcon, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function eA(e) {
    let { wordWrap: t, setWordWrap: n, language: l, renderMarkdown: r, setRenderMarkdown: i, url: o, fileName: c } = e,
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
                                ea.WI.has(l)
                                    ? (0, s.jsx)(J.sL, {
                                          id: "render-markdown",
                                          label: ec.intl.string(ec.t.zstmkn),
                                          checked: r,
                                          action: () => i(!r),
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
                        children: (0, s.jsx)(C.D, {
                            ...e,
                            className: em.IQ,
                            "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                            children: (0, s.jsx)(ee.MoreHorizontalIcon, { ref: u, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, s.jsx)(et.Anchor, {
                ref: d,
                href: o,
                download: c,
                className: em.op,
                children: (0, s.jsx)(X.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function ex(e) {
    return (0, s.jsx)(z.m, {
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, s.jsx)(C.D, {
            className: em.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, I.qf)((t) => (0, s.jsx)(ej, { ...e, ...t }));
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
            expanded: r,
            setExpanded: o,
            language: c,
            setLanguage: u,
            wordWrap: d,
            setWordWrap: m,
            renderMarkdown: h,
            setRenderMarkdown: p,
            bytesLeft: f,
            className: C,
        } = e,
        A = a?.split("\n"),
        x = A?.length ?? 0,
        E = r ? 100 : 6,
        j = 0 === f,
        N = h && ea.WI.has(c),
        v = "";
    (j && r && x > E ? (v = "\n...") : j || (v = "..."),
        "" !== v &&
            (j
                ? (v += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: x - E }))
                : (v += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, ei.up)(f) }))));
    let I = A?.slice(0, E).join("\n") ?? "",
        y = r || E < x;
    return (0, s.jsxs)("div", {
        className: i()(C, em.kL),
        children: [
            (0, s.jsx)(_.Ip, {
                className: i()(em.FS, { [em.KQ]: !r && !N }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == a
                        ? (0, s.jsx)(g.y, { className: em.u1 })
                        : N
                          ? (0, s.jsx)(eh, { text: I, notice: v.trim() })
                          : (0, s.jsx)(ep, { text: I + v, language: c, wordWrap: d }),
            }),
            (0, s.jsxs)("div", {
                className: em.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    y ? (0, s.jsx)(ef, { expanded: r, setExpanded: o, numLines: x, isWholeFile: j }) : null,
                    (0, s.jsx)(eg, { fileName: n, fileSize: l }),
                    (0, s.jsx)("div", { className: em.Kb }),
                    (0, s.jsx)(eC, { language: c, setLanguage: u, align: "top" }),
                    null != a
                        ? (0, s.jsx)(ex, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: c,
                              wordWrap: d,
                              renderMarkdown: h,
                              fileContents: a,
                              bytesLeft: f,
                          })
                        : null,
                    (0, s.jsx)(eA, {
                        wordWrap: d,
                        setWordWrap: m,
                        language: c,
                        renderMarkdown: h,
                        setRenderMarkdown: p,
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
            transitionState: r,
            language: i,
            wordWrap: o,
            renderMarkdown: c,
            fileContents: d,
            bytesLeft: h,
            onClose: p,
        } = e,
        [f, C] = a.useState(i),
        [A, x] = a.useState(o),
        [E, j] = a.useState(c),
        N = a.useRef(null),
        v = E && ea.WI.has(f),
        I = h > 0 ? `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, ei.up)(h) })}` : "";
    return (
        a.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != N.current) {
                    let t = document.activeElement;
                    if ((0, u.vq)(t, HTMLInputElement) || (0, u.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        (e.selectNodeContents(N.current), n.removeAllRanges(), n.addRange(e));
                    }
                }
            }
            return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, []),
        (0, s.jsx)(el.d, {
            transitionState: r,
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: p,
            children: (0, s.jsxs)("div", {
                className: em.jE,
                children: [
                    (0, s.jsx)(_.Ip, {
                        className: em.ot,
                        children:
                            null == d
                                ? (0, s.jsx)(g.y, { className: em.u1 })
                                : (0, s.jsx)("div", {
                                      ref: N,
                                      children: v
                                          ? (0, s.jsx)(eh, { text: d, notice: I })
                                          : (0, s.jsx)(ep, { text: d + I, language: f, wordWrap: A }),
                                  }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-label": ec.intl.string(ec.t.TlXA8e),
                        children: (0, s.jsxs)(m.E, {
                            color: "text-default",
                            className: em.Hx,
                            variant: "body-sm/normal",
                            children: [
                                (0, s.jsx)(eg, { fileName: n, fileSize: l }),
                                (0, s.jsx)("div", { className: em.Kb }),
                                (0, s.jsx)(eC, { language: f, setLanguage: C, align: "bottom" }),
                                (0, s.jsx)(eA, {
                                    wordWrap: A,
                                    setWordWrap: x,
                                    language: f,
                                    renderMarkdown: E,
                                    setRenderMarkdown: j,
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
let e_ = a.memo(
    function (e) {
        let {
                url: t,
                fileName: n,
                fileSize: l,
                contentType: r,
                defaultExpanded: o = !1,
                className: c,
                onClick: u,
                onContextMenu: d,
            } = e,
            [m, h] = a.useState(n.split(".").slice(-1)[0]),
            [p, f] = a.useState(o),
            [g, C] = a.useState(!0),
            [A, x] = a.useState(!0),
            {
                fileContents: E,
                bytesLeft: j,
                hadError: _,
            } = (function (e, t) {
                let [n, l] = a.useState(!1),
                    [s, r] = a.useState(null),
                    [i, o] = a.useState(1);
                return (
                    a.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    s = (function (e) {
                                        let t = e?.split("charset=").slice(-1)[0] ?? eu;
                                        try {
                                            return new TextDecoder(t);
                                        } catch (n) {
                                            if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                                                return new TextDecoder(eu);
                                            throw n;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    a = n.headers.get("content-range") ?? "0",
                                    i = n.headers.get("content-length") ?? "1",
                                    c = parseInt(a.split("/")[1]),
                                    u = Number.isNaN(c) ? 0 : c - parseInt(i),
                                    d = 0 === u ? s : s.slice(0, -1);
                                (r((0, eo.sJ)(d)), o(u), l(!1));
                            } catch (e) {
                                (o(0), l(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: i, hadError: n }
                );
            })(t, r);
        return _
            ? (0, s.jsx)(O.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: d, className: c })
            : (0, s.jsx)(eE, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: E,
                  bytesLeft: j,
                  expanded: p,
                  setExpanded: f,
                  language: m,
                  setLanguage: h,
                  wordWrap: g,
                  setWordWrap: C,
                  renderMarkdown: A,
                  setRenderMarkdown: x,
                  className: i()(em.mr, c),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eN = n(863922),
    ev = n(391820),
    eI = n(534890),
    ey = n(442433),
    eS = n(640708),
    eb = n(941971),
    eM = n(707539),
    eT = n(576705),
    eL = n(218461),
    ew = n(340833),
    eR = n(913642),
    ek = n(811091),
    eD = n(780061);
n(321073);
var eO = n(97808),
    eP = n(778712),
    eU = n(707606),
    eB = n(403362),
    eF = n(439511);
let eH = (0, eU.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, s.jsx)("div", { className: eF.pO })
            : (0, s.jsx)("div", {
                  className: eF.pO,
                  children: (0, s.jsx)(eO.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eP._3.SIZE_16,
                      className: eF.pO,
                  }),
              });
    }),
    eV = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: a = 2, guildId: r } = e,
            { totalSize: i, knownSize: o } = t;
        if (i < l) return null;
        let u = c()(n)
                .filter(eB.Vq)
                .take(a)
                .map((e) => (0, s.jsx)(eH, { member: e, guildId: r }, e.id))
                .value(),
            d = i - o;
        for (let e = 0; e < d && u.length < a; e++)
            u.push((0, s.jsx)(eH, { empty: !0, guildId: r }, `empty-member-${e}`));
        let m = Math.max(Math.min(i - u.length, 99), 0);
        if (1 === m) {
            let e = n[a];
            u.push((0, s.jsx)(eH, { member: e, guildId: r }, e.id));
        }
        return (0, s.jsx)("div", {
            className: eF.iE,
            children: (0, s.jsxs)("div", {
                className: eF.S3,
                children: [u, m > 1 ? (0, s.jsxs)("div", { className: eF.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var eG = n(303727),
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
                    (0, s.jsx)(eG.A, { className: ez.uf }),
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
                variant: "body-md/normal",
                children: ec.intl.string(ec.t.p2dIh6),
            }),
        ],
    });
}
var eW = n(652215),
    eY = n(670455),
    eq = n(750557);
function eQ(e) {
    let { summary: t, channel: l, members: r, guildId: i, unread: o, onClick: c } = e,
        [u, h] = a.useState(!1),
        p = (0, eM.aK)(ek.default.extractTimestamp(t.startId)),
        f = (0, d.bG)([ev.A], () => ev.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, eD.A)({ summary: t, channel: l, rating: n }));
    }
    let A = eT.A.can(eW.xBc.MANAGE_MESSAGES, l);
    return (0, s.jsxs)(C.D, {
        className: eq.kL,
        onClick: c,
        onContextMenu: function (e) {
            A &&
                (0, ey.L3)(e, async () => {
                    let { default: e } = await n.e(443921).then(n.bind(n, 304232));
                    return (n) => (0, s.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, s.jsx)(eb.A, { hovered: u, unread: o, className: eq.dM }),
            (0, s.jsx)("div", {
                className: eq.uV,
                children: (0, s.jsxs)("div", {
                    className: eq.Hw,
                    children: [
                        (0, s.jsx)(m.E, {
                            className: eq.vE,
                            color: "interactive-text-default",
                            variant: "body-xs/normal",
                            children: p,
                        }),
                        (0, s.jsx)(eS.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                        (0, s.jsx)(eI.ChatIcon, { size: "xxs", color: "currentColor", className: eq.Kk }),
                        (0, s.jsx)(m.E, {
                            className: eq.U9,
                            color: "interactive-text-default",
                            variant: "body-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(eS.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                                    (0, s.jsx)(eV, {
                                        partySize: { knownSize: r.length, totalSize: r.length },
                                        maxAvatarsShown: 3,
                                        members: r,
                                        guildId: i,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            u &&
                null == f &&
                (0, s.jsxs)("div", {
                    className: eq.p_,
                    children: [
                        (0, s.jsx)(C.D, {
                            onClick: (e) => g(e, eY.P0.GOOD),
                            children: (0, s.jsx)(eR.A, { className: eq.O1, width: 12, height: 12 }),
                        }),
                        (0, s.jsx)(C.D, {
                            onClick: (e) => g(e, eY.P0.BAD),
                            children: (0, s.jsx)(ew.A, { className: eq.O1, width: 12, height: 12 }),
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
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: i } = e,
        o = (0, d.bG)([eL.Ay], () => eL.Ay.getOldestUnreadMessageId(l.id)),
        c = a.useCallback(
            (e) => {
                (r(e), i(!1));
            },
            [r, i],
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
    e5 = n(20504),
    e6 = n(188567),
    e4 = n(927813),
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
            onVolumeChange: r,
            onMute: o,
            waveform: c,
            durationSecs: u,
            onVolumeShow: h,
            onVolumeHide: p,
            onPlay: f,
            onPause: g,
            onError: A,
            playbackCacheKey: x,
        } = e,
        E = a.useRef(null),
        j = a.useMemo(() => (null != x ? e3.Ay.getPlaybackPosition(x) : 0), [x]),
        _ = (0, d.bG)([e3.Ay], () => e3.Ay.getPlaybackRate(e3.k0.VOICE_MESSAGE)),
        [N, v] = a.useState(j > 0),
        [I, y] = a.useState(j),
        [S, b] = a.useState(u),
        [M, T] = a.useState(!1),
        [L, w] = a.useState(!1),
        [R, k] = a.useState(!1),
        [D, O] = a.useState(!1),
        [P, U] = a.useState("none"),
        [B, F] = a.useState(() => ("function" == typeof l ? l() : l)),
        H = a.useRef(void 0),
        V = a.useCallback(() => {
            (w((e) => !e), O(!0));
        }, []),
        G = a.useCallback(() => {
            U("metadata");
        }, []),
        z = a.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || b(t);
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
            (w(!1),
                null == H.current &&
                    (H.current = setTimeout(() => {
                        (v(!1), O(!1), (H.current = void 0));
                    }, 500)));
        }, []),
        Y = a.useCallback(() => {
            R || (K(0), W());
        }, [W, R, K]),
        q = a.useCallback((e) => {
            let t = E.current;
            null != t && (y(e), (t.currentTime = e), v(!0));
        }, []),
        Q = a.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            A?.(t);
        }, [A]),
        Z = a.useCallback(
            (e) => {
                let t = (0, e7.w)(e, 1);
                (T(0 === t), F(t), r?.(t));
            },
            [r],
        ),
        $ = a.useCallback(() => {
            (T(!M), o?.(!M));
        }, [M, o]),
        J = a.useCallback(() => {
            k(!0);
        }, []),
        X = a.useCallback(() => {
            (k(!1), I === S && W(), K(I));
        }, [I, S, W, K]),
        ee = a.useCallback(
            (e) => {
                let t = E.current;
                null == S || null == t || (q(e * S), clearTimeout(H.current), (H.current = void 0));
            },
            [S, q],
        );
    a.useEffect(() => {
        !N && L && v(!0);
    }, [L, N]);
    let et = a.useRef(null),
        en = { played: D, currentTime: I, onPause: g, onPlay: f },
        el = a.useRef(en);
    (a.useEffect(() => {
        el.current = en;
    }),
        a.useEffect(() => {
            j > 0 && q(j);
        }, [j, q]),
        a.useEffect(() => {
            let e;
            return (
                L &&
                    !R &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, e4.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [L, R, K]),
        a.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || L)
                if (L) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e4.A.Millis.SECOND));
                else {
                    let e = performance.now(),
                        l = et.current;
                    (n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null));
                }
        }, [L, n, S, K]),
        a.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = E.current;
                    null == n || (y(n.currentTime), L && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, L, y]),
        a.useEffect(() => {
            if (L)
                return (
                    e6._.dispatch(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e6._.subscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e6._.unsubscribe(eW.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && w(!1);
            }
        }, [n, L, w]));
    let es = L ? eJ.PauseIcon : eX.PlayIcon,
        ea = L ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        er = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: _ }),
        ei = `${_.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, s.jsx)(a.Suspense, {
                  children: (0, s.jsx)(tt, {
                      ref: E,
                      className: te.Zn,
                      src: n,
                      preload: P,
                      playing: L && !R,
                      onEnded: Y,
                      onLoadedMetadata: z,
                      onError: Q,
                      muted: M,
                      volume: B,
                      playbackRate: _,
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
                  muted: M,
                  volume: B,
                  playbackRate: _,
                  playing: L && !R,
                  children: (0, s.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([e0.Ay], () => e0.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: i()(te.kL, { [te.he]: L }),
        onMouseEnter: G,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, s.jsx)("div", {
                className: te.Kl,
                children: (0, s.jsx)("div", { className: i()(te.fq, { [te.VN]: eo }) }),
            }),
            (0, s.jsx)(C.D, {
                className: te.k0,
                onClick: V,
                "aria-label": ea,
                children: (0, s.jsx)(es, { className: te.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, s.jsx)(e9.A, {
                className: te.ou,
                waveform: c,
                currentTime: I,
                duration: S ?? 1,
                playing: L,
                played: N,
                onDrag: ee,
                onDragStart: J,
                onDragEnd: X,
            }),
            (0, s.jsx)(tn, { played: N, currentTime: I, duration: S }),
            (0, s.jsx)(C.D, {
                className: te.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (e8.CA.indexOf(_) + 1) % e8.CA.length),
                        void ((e = e8.CA[n]),
                        (t = e3.k0.VOICE_MESSAGE),
                        e1.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, s.jsx)(m.E, { variant: "body-xs/semibold", className: te.Sn, children: ei }),
            }),
            (0, s.jsx)(e5.A, {
                className: te.bk,
                iconClassName: te._j,
                iconColor: "currentColor",
                sliderWrapperClassName: te.MQ,
                muted: M,
                value: (0, e7.M)(B, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Z,
                onToggleMute: $,
                onVolumeShow: h,
                onVolumeHide: p,
            }),
            t,
        ],
    });
});
var ts = n(287809),
    ta = n(147925),
    tr = n(129230),
    ti = n(587481),
    to = n(838541),
    tc = n(521732),
    tu = n(650583),
    td = n(959760);
function tm(e) {
    return (t) => {
        (e?.(t), (0, ti.ls)(t));
    };
}
function th(e) {
    return (t) => {
        (e?.(t), (0, ti.y5)(t));
    };
}
function tp(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, s.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
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
                children: ec.intl.string(ec.t.fSiQ3A),
            }),
            (0, s.jsx)(m.E, { variant: "body-md/normal", color: "none", tag: "span", className: td.a7, children: t }),
        ],
    });
}
function tf(e) {
    let { alt: t, disableAltTextDisplay: n = !1, hiddenSpoilers: l = !1 } = e;
    return !n && e$._z.getSetting() && null != t && "" !== t && !l;
}
function tg(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: r = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [c, u] = a.useState(!1),
        d = a.useRef(null);
    return (n || c) && null != t && tf({ alt: t, disableAltTextDisplay: l, hiddenSpoilers: r })
        ? (0, s.jsx)("div", {
              className: td.NO,
              children: (0, s.jsx)(h.Y, {
                  targetElementRef: d,
                  animation: h.Y.Animation.FADE,
                  renderPopout: () => (0, s.jsx)(tp, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, s.jsx)(p.vN, {
                          offset: 4,
                          children: (0, s.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ec.intl.string(ec.t.fSiQ3A),
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              className: i()(td.DV, { [td.yZ]: !0, [td.I5]: o }),
                              children: ec.intl.string(ec.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tC(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: r,
            alt: i,
            renderAdjacentContent: o,
            renderOverlayContent: c,
            disableAltTextDisplay: u = !1,
            hiddenSpoilers: d,
            mosaicStyleAlt: h,
            mediaLayoutType: p,
            reducedSizeAltTextButton: f,
            ...g
        } = e,
        C = tm(t),
        A = th(n);
    ((l = null == l ? ti.v1 : l), (r = null == r ? ti.uj : r));
    let [x, E] = a.useState(!0),
        j = p === to.d.MOSAIC || !0 === h,
        _ = x && !u && e$._z.getSetting() && null != i && "" !== i && !0 !== d;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            (0, s.jsx)(G.A, {
                ...g,
                alt: i,
                autoMute: r,
                mediaLayoutType: p,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: A,
                onVolumeChange: C,
                renderLinkComponent: t_,
                renderOverlayContent: c,
                volume: l,
            }),
            null != o && o(),
            j &&
                (0, s.jsx)(tg, {
                    alt: i,
                    controlsVisible: x,
                    disableAltTextDisplay: u,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: f,
                }),
            !j &&
                _ &&
                (0, s.jsx)(m.E, {
                    variant: "body-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: td.R5,
                    children: i,
                }),
        ],
    });
}
function tA(e) {
    return (0, s.jsx)(tC, { ...e });
}
function tx(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: r,
            onVolumeHide: i,
            renderAdjacentContent: o,
            ...c
        } = e,
        u = tm(t),
        d = th(l);
    return (
        (n = null == n ? ti.v1 : n),
        (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(V, {
                    ...c,
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: r,
                    onVolumeHide: i,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: t_,
                }),
                null != o && o(),
            ],
        })
    );
}
function tE(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...a } = e,
        r = tm(t),
        i = th(l);
    return ((n = null == n ? ti.v1 : n), (0, s.jsx)(tl, { ...a, onVolumeChange: r, onMute: i, volume: n }));
}
function tj(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: c = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: f,
            mosaicStyleAlt: g,
        } = e,
        C = d === to.d.MOSAIC || !0 === g,
        A = !c && e$._z.getSetting() && null != t && "" !== t && !0 !== n,
        x = a.createRef();
    return (0, s.jsxs)("div", {
        className: i()(td.fo, r),
        children: [
            (0, s.jsxs)("div", {
                className: i()(td.ZS, o),
                style: f,
                children: [(0, s.jsx)(w, { ...e }), null != l && l()],
            }),
            C &&
                A &&
                (0, s.jsx)("div", {
                    className: td.Y1,
                    children: (0, s.jsx)(h.Y, {
                        targetElementRef: x,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, s.jsx)(tp, { altText: t, altButtonRef: x }),
                        children: (e) =>
                            (0, s.jsx)(p.vN, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: x,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: i()(td.DV, { [td.I5]: u }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !C &&
                A &&
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
function t_(e) {
    return (0, s.jsx)(R.A, { ...e });
}
function tN(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, s.jsxs)(a.Fragment, { children: [(0, s.jsx)(e_, { ...n }), null != t && t()] });
}
function tv(e) {
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
                      className: i()(td.Sg, l),
                      children: [
                          (0, s.jsx)("div", {
                              className: td.$I,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ec.intl.string(ec.t["4EvBbw"]);
                                      case 1:
                                          return ec.intl.string(ec.t["1J6Xq7"]);
                                      default:
                                          return (0, eB.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, s.jsx)(p.vN, {
                                    offset: -2,
                                    children: (0, s.jsx)(f.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ec.intl.string(ec.t.gpoQsB);
                                                case 1:
                                                    return ec.intl.string(ec.t.k3RM8z);
                                                default:
                                                    return (0, eB.xb)(e);
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
function tS(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, s.jsx)(P.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, s.jsxs)(C.D, {
                      className: i()(td._5, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, s.jsx)("div", { className: td.$I, children: ec.intl.string(ec.t["1zUvlw"]) }),
                          n
                              ? (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: td.u1,
                                    itemClassName: td.$N,
                                })
                              : (0, s.jsx)("div", {
                                    className: i()(td.hQ, td.d3),
                                    children: ec.intl.string(ec.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tb(e) {
    let { content: t, channelId: n } = e,
        [l] = a.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = a.useCallback(() => {
            let e = eL.Ay.ackMessageId(n);
            null != e
                ? N.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: n,
                      messageId: ek.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = a.useCallback(() => {
            (0, v.I_)(n, {
                section: eW.JJy.NEW_MESSAGES_BANNER,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.btD.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = a.useContext(P.Y);
    return c
        ? null
        : (0, s.jsxs)("div", {
              className: i()(td.eb, { [td.y7]: c }),
              children: [
                  (0, s.jsx)(p.vN, {
                      offset: 4,
                      children: (0, s.jsx)("button", {
                          type: "button",
                          className: td.$I,
                          onClick: r,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, s.jsx)("span", { id: l, className: td.Ln, children: t }),
                      }),
                  }),
                  (0, s.jsx)("div", {
                      className: td._o,
                      children: (0, s.jsx)(p.vN, {
                          offset: 4,
                          children: (0, s.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: td.hQ,
                              children: [
                                  (0, s.jsx)("span", { className: td.vE, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, s.jsx)(A.ChatCheckIcon, { size: "md", color: "currentColor", className: td.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tM(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = a.useContext(P.Y),
        [o, h] = a.useState(null),
        p = a.useRef(null),
        [f, g] = a.useState(null),
        I = a.useRef(null),
        y = (0, d.yK)([ev.A], () => ev.A.summaries(t.id) ?? [], [t]),
        S = (0, D.Ay)(y);
    a.useEffect(() => {
        c().isEqual(S, y) ||
            tr.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: y.length,
                message_counts: y.map((e) => e.count),
                start_message_ids: y.map((e) => e.startId),
                end_message_ids: y.map((e) => e.endId),
                num_participants: y.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [y, S, t.guild_id, t.id, t.type]);
    let b = (0, d.bG)(
            [ts.default],
            () => y?.map((e) => e.people?.map((e) => ts.default.getUser(e) ?? null).filter(eB.Vq)) ?? [],
            [y],
            tT,
        ),
        M = (0, d.bG)([ev.A], () => ev.A.visibleSummaryIndex()) ?? -1,
        T = y?.[M]?.topic;
    null == T && null == o && y?.length >= 1 && (T = y[0]?.topic);
    let L = a.useMemo(
            () =>
                c().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        w = a.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, eN.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        R = a.useCallback(
            (e) => {
                (w(), L(e));
            },
            [L, w],
        ),
        [O, U] = a.useState(!1),
        F = a.useCallback(() => {
            (tr.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !O,
                num_summaries: y.length,
                message_counts: y.map((e) => e.count),
                start_message_ids: y.map((e) => e.startId),
                end_message_ids: y.map((e) => e.endId),
                num_participants: y.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!O));
        }, [O, y, U, t]),
        H = a.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tc.eh.PILL_DROPDOWN,
                    s = y[e];
                null != s &&
                    ((0, eN.sK)(t.id, s.id),
                    (0, eN.C6)(t.id, s.id),
                    l.removeAutomaticAnchorCallback(R),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(R, !1);
                            }, 100));
                    }),
                    tr.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: s.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    N.A.jumpToMessage({
                        channelId: t.id,
                        messageId: s.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [y, t, R, l],
        ),
        V = a.useCallback((e) => {
            U(e);
            let t = I.current?.scrollTop;
            null != t && g(t);
        }, []);
    a.useEffect(() => {
        null != f && O && I.current?.scrollTo({ top: f });
    }, [f, O]);
    let G = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && p.current?.contains(e.target)) ||
                (O &&
                    tr.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: y.length,
                        message_counts: y.map((e) => e.count),
                        start_message_ids: y.map((e) => e.startId),
                        end_message_ids: y.map((e) => e.endId),
                        num_participants: y.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                V(!1));
        },
        [O, y, t, V],
    );
    (a.useEffect(
        () => (
            l.addAutomaticAnchorCallback(R),
            () => {
                l.removeAutomaticAnchorCallback(R);
            }
        ),
        [l, R],
    ),
        a.useEffect(() => {
            (0, eN.$T)(t.id);
        }, [t.id]),
        a.useEffect(
            () => (
                document.addEventListener("mousedown", G),
                () => {
                    document.removeEventListener("mousedown", G);
                }
            ),
            [G],
        ));
    let z = a.useMemo(
            () => (0, s.jsx)(eZ, { channel: t, summaries: y, summariesMembers: b, selectTopic: H, setOpen: V }),
            [y, b, H, V, t],
        ),
        K = a.useCallback(() => {
            let e = eL.Ay.ackMessageId(t.id);
            null != e
                ? N.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : N.A.jumpToMessage({
                      channelId: t.id,
                      messageId: ek.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        W = a.useCallback(() => {
            (0, v.I_)(t.id, {
                section: eW.JJy.NEW_TOPICS_BAR,
                object: eW.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eW.btD.ACK_MANUAL,
            });
        }, [t.id]),
        Y = ec.intl.string(ec.t["38qwgO"]);
    return (
        y.length > 0 && (Y = "" === T || null == T ? ec.intl.string(ec.t.DwnFuG) : T),
        r
            ? null
            : (0, s.jsxs)("div", {
                  ref: p,
                  className: i()(td.dw, td.jh),
                  children: [
                      (0, s.jsx)("div", {
                          className: td.qm,
                          children: (0, s.jsx)(C.D, {
                              className: td.TQ,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: F,
                              children: (0, s.jsxs)("div", {
                                  className: i()({ [td.hN]: !O, [td.Ap]: O }),
                                  children: [
                                      (0, s.jsx)(x.TopicsIcon, { size: "xs", color: "currentColor", className: td.Vd }),
                                      (0, s.jsx)(m.E, {
                                          variant: "body-sm/medium",
                                          className: i()(td.$U, td.lc),
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
                      (0, s.jsx)(C.D, { onClick: K, className: td.ij, children: n }),
                      (0, s.jsxs)(C.D, {
                          onClick: W,
                          className: i()(td.hQ, td.NX),
                          children: [
                              (0, s.jsx)("div", { className: td.$U, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, s.jsx)(A.ChatCheckIcon, { size: "md", color: "currentColor", className: td.t3 }),
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
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(B.A, { className: td.Zx }),
                                              ],
                                          }),
                                          (0, s.jsx)(C.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: F,
                                              className: td.oX,
                                              children: (0, s.jsx)(j.XSmallIcon, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(_.Ip, { ref: I, className: td.Pe, fade: !0, children: z }),
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
        [r, o] = a.useState(null),
        h = a.useRef(null),
        [p, f] = a.useState(null),
        g = a.useRef(null),
        A = (0, d.yK)([ev.A], () => ev.A.summaries(t.id) ?? [], [t]),
        v = (0, D.Ay)(A);
    a.useEffect(() => {
        c().isEqual(v, A) ||
            tr.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [A, v, t.guild_id, t.id, t.type]);
    let I = (0, d.bG)(
            [ts.default],
            () => A?.map((e) => e.people?.map((e) => ts.default.getUser(e) ?? null).filter(eB.Vq)) ?? [],
            [A],
            tT,
        ),
        y = (0, d.bG)([ev.A], () => ev.A.visibleSummaryIndex()) ?? -1,
        S = A?.[y]?.topic;
    null == S && null == r && A?.length >= 1 && (S = A[0]?.topic);
    let b = a.useMemo(() => c().get(A, y - 1), [y, A]),
        M = a.useMemo(() => c().get(A, y + 1), [y, A]),
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
                        (0, eN.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        w = a.useCallback(
            (e) => {
                (L(), T(e));
            },
            [T, L],
        ),
        [R, O] = a.useState(!1),
        U = a.useCallback(() => {
            (tr.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !R,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                O(!R));
        }, [R, A, O, t]),
        F = a.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tc.eh.PILL_DROPDOWN,
                    s = A[e];
                null != s &&
                    ((0, eN.sK)(t.id, s.id),
                    (0, eN.C6)(t.id, s.id),
                    n.removeAutomaticAnchorCallback(w),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(w, !1);
                            }, 100));
                    }),
                    tr.default.track(eW.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: l,
                        message_id: s.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    N.A.jumpToMessage({
                        channelId: t.id,
                        messageId: s.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [A, t, w, n],
        ),
        H = a.useCallback(() => {
            F(y - 1, tc.eh.PILL_NEXT_ARROW);
        }, [F, y]),
        V = a.useCallback(() => {
            F(y + 1, tc.eh.PILL_PREVIOUS_ARROW);
        }, [y, F]),
        G = a.useCallback((e) => {
            O(e);
            let t = g.current?.scrollTop;
            null != t && f(t);
        }, []);
    a.useEffect(() => {
        null != p && R && g.current?.scrollTo({ top: p });
    }, [p, R]);
    let z = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (R &&
                    tr.default.track(eW.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                G(!1));
        },
        [R, A, t, G],
    );
    (a.useEffect(
        () => (
            n.addAutomaticAnchorCallback(w),
            () => {
                n.removeAutomaticAnchorCallback(w);
            }
        ),
        [n, w],
    ),
        a.useEffect(() => {
            (0, eN.$T)(t.id);
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
        () => (0, s.jsx)(eZ, { channel: t, summaries: A, summariesMembers: I, selectTopic: F, setOpen: G }),
        [A, I, F, G, t],
    );
    if (!(0, d.bG)([ev.A], () => ev.A.shouldShowTopicsBar())) return null;
    let W = ec.intl.string(ec.t["38qwgO"]);
    return (
        A.length > 0 && (W = "" === S || null == S ? ec.intl.string(ec.t.DwnFuG) : S),
        l
            ? null
            : (0, s.jsxs)("div", {
                  ref: h,
                  className: i()(td.$T, td.jh),
                  children: [
                      (0, s.jsxs)("div", {
                          className: td.sE,
                          children: [
                              (0, s.jsx)(C.D, {
                                  className: td.LP,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: U,
                                  children: (0, s.jsxs)("div", {
                                      className: i()({ [td.Nv]: !R, [td.An]: R }),
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
                                      (0, s.jsx)(C.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: V,
                                          className: i()(td.ZM, td.vz, { [td.jf]: null == M }),
                                          children: (0, s.jsx)(ta.A, {
                                              width: 16,
                                              height: 16,
                                              direction: ta.A.Directions.UP,
                                          }),
                                      }),
                                      (0, s.jsx)(C.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: H,
                                          className: i()(td.ZM, td.mt, { [td.jf]: null == b }),
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
                      R &&
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
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(B.A, { className: td.Zx }),
                                              ],
                                          }),
                                          (0, s.jsx)(C.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: U,
                                              className: td.oX,
                                              children: (0, s.jsx)(j.XSmallIcon, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(_.Ip, { ref: g, className: td.Pe, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tw(e) {
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
                    children: ec.intl.string(ec.t["515vjG"]),
                }),
        ],
    });
}
