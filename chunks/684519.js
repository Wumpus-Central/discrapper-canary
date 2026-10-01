s.d(t, {
    ks: () => tB,
    UK: () => tY,
    Ez: () => tW,
    _z: () => tR,
    OZ: () => tz,
    $o: () => tk,
    yR: () => tq,
    LL: () => tO,
    bU: () => tU,
    P$: () => tP,
    GN: () => tG,
    _d: () => tV,
    gL: () => tL,
    Dk: () => tF,
    Ab: () => tH,
});
var n,
    a = s(477900),
    l = s(582128),
    i = s(503698),
    r = s.n(i),
    o = s(435558),
    u = s.n(o),
    d = s(621466),
    c = s(17928),
    h = s(834730),
    m = s(922016),
    p = s(559106),
    f = s(821609),
    g = s(289873),
    v = s(939249),
    C = s(582394),
    A = s(306788),
    x = s(297264),
    y = s(789645),
    S = s(364522),
    _ = s(148494),
    E = s(334738),
    N = s(192308),
    j = s(267102),
    M = s(619517),
    I = s(256905),
    T = s(536763),
    b = s(218394);
class w extends l.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: s, height: n, onMouseEnter: a, handlePreloadImage: l } = this.props;
        (a?.(e), null != l) ? l() : (0, T.A)({ src: t, width: s, height: n, options: this.props });
    };
    modalContext = (0, N.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, N.closeModal)(I.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: s, trigger: n } = t;
        e.preventDefault();
        let {
            alt: a,
            src: l,
            original: i,
            width: r,
            height: o,
            animated: u,
            srcIsAnimated: c,
            children: h,
            shouldHideMediaOptions: m = !1,
            sourceMetadata: p,
            analyticsSource: f,
            contentType: g,
            originalContentType: v,
        } = this.props;
        ((0, d.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, I.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: l,
                        width: r,
                        height: o,
                        type: "IMAGE",
                        alt: a,
                        contentType: g,
                        originalContentType: v,
                        zoomThumbnailPlaceholder: s,
                        animated: u,
                        srcIsAnimated: c,
                        children: h,
                        trigger: n,
                        sourceMetadata: p,
                        original: i ?? l,
                    },
                ],
                shouldHideMediaOptions: m,
                location: f ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            }));
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...s } = this.props;
        return (0, a.jsx)(M.Ay, { ...s, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function R(e) {
    let t = (0, j.Us)(),
        s = (0, b.j)();
    return (0, a.jsx)(w, { ...e, isWindowFocused: s, appContext: t });
}
var D = s(9578),
    k = s(56562),
    L = s(475743),
    P = s(564771),
    O = s(692051),
    U = s(915089),
    V = s(611371),
    F = s(453771),
    B = s(440014);
class H extends l.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: s,
            className: n,
            playable: l,
            volume: i,
            renderLinkComponent: r,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: d,
            autoMute: c,
            onMute: h,
            mimeType: m,
            onPlay: p,
        } = this.props;
        return (0, a.jsx)(B.Ay, {
            src: e,
            fileName: s,
            fileSize: (0, F.Hb)(t),
            fileSizeBytes: t,
            type: B.Ay.Types.AUDIO,
            className: n,
            playable: l,
            volume: i,
            onMute: h,
            autoMute: c,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: d,
            renderLinkComponent: r,
            mimeType: m,
            onPlay: p,
        });
    }
}
var W = s(248643),
    G = s(866665),
    z = s(408278),
    K = s(900797),
    Y = s(847374),
    q = s(305866),
    Q = s(453318),
    Z = s(387758),
    $ = s(980707),
    X = s(477782),
    J = s(32880),
    ee = s(365199),
    et = s(28863),
    es = s(26430),
    en = s(224640),
    ea = s(268218),
    el = s(639169),
    ei = s(586172),
    er = s(768947),
    eo = s(255438),
    eu = s(417964),
    ed = s(375708);
let ec = "utf-8";
var eh = s(540168),
    em = s(810917);
let ep = new Set(["markdown", "md", "mkd", "mkdown"]),
    ef = (0, ea.Fe)({
        createPromise: () => Promise.all([s.e("759743"), s.e("207596"), s.e("636550")]).then(s.bind(s, 456262)),
        webpackId: 456262,
        name: "PlaintextFileMarkdownPreview",
        renderLoader: () => (0, a.jsx)(g.y, { className: em.u1 }),
    });
function eg(e) {
    let { text: t, language: s, wordWrap: n } = e;
    return (0, a.jsx)(eh.d, { text: t, language: s, className: r()(em.Xb, { [em.Zw]: n }) });
}
function ev(e) {
    let { expanded: t, setExpanded: s, numLines: n, isWholeFile: l } = e,
        i = ed.intl.formatToPlainString(l ? ed.t.Go5Vvs : ed.t.yJcYan, { lines: n }),
        r = `${t ? ed.intl.string(ed.t.iTcuma) : ed.intl.string(ed.t.dcl9MQ)} (${i})`;
    return (0, a.jsx)("div", {
        className: em.py,
        children: (0, a.jsx)(G.m, {
            text: r,
            children: (0, a.jsx)(z.K, {
                icon: t ? K.t : Y.a,
                size: "md",
                variant: "secondary",
                onClick: () => s?.(!t),
                "aria-label": r,
            }),
        }),
    });
}
function eC(e) {
    let { fileName: t, fileSize: s } = e,
        n = `${t} (${(0, eo.up)(s)})`;
    return (0, a.jsxs)("div", {
        className: em.VI,
        children: [
            (0, a.jsx)("div", {
                className: em.VW,
                children: (0, a.jsx)(G.m, {
                    text: n,
                    children: (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: em.Md,
                        children: t,
                    }),
                }),
            }),
            (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eo.up)(s) }),
        ],
    });
}
function eA(e) {
    let { language: t, setLanguage: s, align: n } = e,
        i = l.useRef(null),
        r = ei.L.useConfig({ location: "LanguageSelect" }).enabled ? er.No : el.Q;
    return (0, a.jsx)(m.Y, {
        targetElementRef: i,
        position: "left",
        align: n,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(q.l, {
                "aria-label": ed.intl.string(ed.t.utm4qs),
                children: (0, a.jsx)("div", {
                    className: em.md,
                    children: (0, a.jsxs)(Q.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (s(e), n());
                        },
                        options: Array.from(r).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, a.jsx)(Q.a3, { placeholder: ed.intl.string(ed.t.GofftW) }),
                            (0, a.jsx)(Q.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(G.m, {
                ariaHidden: !0,
                text: ed.intl.string(ed.t.utm4qs),
                children: (0, a.jsx)(v.D, {
                    ...e,
                    className: em.Qw,
                    "aria-label": ed.intl.string(ed.t.utm4qs),
                    children: (0, a.jsx)(Z.G, { size: "sm", color: "currentColor", ref: i }),
                }),
            }),
    });
}
function ex(e) {
    let { wordWrap: t, setWordWrap: s, language: n, renderMarkdown: i, setRenderMarkdown: r, url: o, fileName: u } = e,
        d = l.useRef(null),
        c = l.useRef(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m.Y, {
                targetElementRef: d,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, a.jsx)($.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: l,
                        onSelect: () => {},
                        "aria-label": ed.intl.string(ed.t.PdRCRg),
                        children: (0, a.jsxs)(X.rX, {
                            children: [
                                (0, a.jsx)(X.Dr, {
                                    id: "download",
                                    label: ed.intl.string(ed.t["1WjMbC"]),
                                    icon: J.DownloadIcon,
                                    action: () => {
                                        (c.current?.click(), l());
                                    },
                                }),
                                (0, a.jsx)(X.sL, {
                                    id: "word-wrap",
                                    label: ed.intl.string(ed.t.AMKNT1),
                                    checked: t,
                                    action: () => s(!t),
                                }),
                                ep.has(n)
                                    ? (0, a.jsx)(X.sL, {
                                          id: "render-markdown",
                                          label: ed.intl.string(ed.t.zstmkn),
                                          checked: i,
                                          action: () => r(!i),
                                      })
                                    : null,
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, a.jsx)(G.m, {
                        ariaHidden: !0,
                        text: ed.intl.string(ed.t["UKOtz+"]),
                        children: (0, a.jsx)(v.D, {
                            ...e,
                            className: em.IQ,
                            "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                            children: (0, a.jsx)(ee.MoreHorizontalIcon, { ref: d, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, a.jsx)(et.Anchor, {
                ref: c,
                href: o,
                download: u,
                className: em.op,
                children: (0, a.jsx)(J.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function ey(e) {
    return (0, a.jsx)(G.m, {
        ariaHidden: !0,
        text: ed.intl.string(ed.t["0PQYk3"]),
        children: (0, a.jsx)(v.D, {
            className: em.R1,
            "aria-label": ed.intl.string(ed.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, a.jsx)(e_, { ...e, ...t }));
            },
            children: (0, a.jsx)(es._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eS(e) {
    let {
            url: t,
            fileName: s,
            fileSize: n,
            fileContents: l,
            expanded: i,
            setExpanded: o,
            language: u,
            setLanguage: d,
            wordWrap: c,
            setWordWrap: h,
            renderMarkdown: m,
            setRenderMarkdown: p,
            bytesLeft: f,
            className: v,
        } = e,
        C = l?.split("\n"),
        A = C?.length ?? 0,
        x = i ? 100 : 6,
        y = 0 === f,
        _ = m && ep.has(u),
        E = "";
    (y && i && A > x ? (E = "\n...") : y || (E = "..."),
        "" !== E &&
            (y
                ? (E += " " + ed.intl.formatToPlainString(ed.t.DQnFp2, { lines: A - x }))
                : (E += " " + ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, eo.up)(f) }))));
    let N = C?.slice(0, x).join("\n") ?? "",
        j = i || x < A;
    return (0, a.jsxs)("div", {
        className: r()(v, em.kL),
        children: [
            (0, a.jsx)(S.Ip, {
                className: r()(em.FS, { [em.KQ]: !i && !_ }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == l
                        ? (0, a.jsx)(g.y, { className: em.u1 })
                        : _
                          ? (0, a.jsx)(ef, { text: N, notice: E.trim() })
                          : (0, a.jsx)(eg, { text: N + E, language: u, wordWrap: c }),
            }),
            (0, a.jsxs)("div", {
                className: em.qr,
                role: "group",
                "aria-label": ed.intl.string(ed.t.TlXA8e),
                children: [
                    j ? (0, a.jsx)(ev, { expanded: i, setExpanded: o, numLines: A, isWholeFile: y }) : null,
                    (0, a.jsx)(eC, { fileName: s, fileSize: n }),
                    (0, a.jsx)("div", { className: em.Kb }),
                    (0, a.jsx)(eA, { language: u, setLanguage: d, align: "top" }),
                    null != l
                        ? (0, a.jsx)(ey, {
                              url: t,
                              fileName: s,
                              fileSize: n,
                              language: u,
                              wordWrap: c,
                              renderMarkdown: m,
                              fileContents: l,
                              bytesLeft: f,
                          })
                        : null,
                    (0, a.jsx)(ex, {
                        wordWrap: c,
                        setWordWrap: h,
                        language: u,
                        renderMarkdown: m,
                        setRenderMarkdown: p,
                        url: t,
                        fileName: s,
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let {
            url: t,
            fileName: s,
            fileSize: n,
            transitionState: i,
            language: r,
            wordWrap: o,
            renderMarkdown: u,
            fileContents: c,
            bytesLeft: m,
            onClose: p,
        } = e,
        [f, v] = l.useState(r),
        [C, A] = l.useState(o),
        [x, y] = l.useState(u),
        _ = l.useRef(null),
        E = x && ep.has(f),
        N = m > 0 ? `... ${ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, eo.up)(m) })}` : "";
    return (
        l.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != _.current) {
                    let t = document.activeElement;
                    if ((0, d.vq)(t, HTMLInputElement) || (0, d.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let s = window.getSelection();
                    if (null != s) {
                        let e = document.createRange();
                        (e.selectNodeContents(_.current), s.removeAllRanges(), s.addRange(e));
                    }
                }
            }
            return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, []),
        (0, a.jsx)(en.d, {
            transitionState: i,
            "aria-label": ed.intl.string(ed.t["qxQjc+"]),
            size: "xxl",
            onClose: p,
            children: (0, a.jsxs)("div", {
                className: em.jE,
                children: [
                    (0, a.jsx)(S.Ip, {
                        className: em.ot,
                        children:
                            null == c
                                ? (0, a.jsx)(g.y, { className: em.u1 })
                                : (0, a.jsx)("div", {
                                      ref: _,
                                      children: E
                                          ? (0, a.jsx)(ef, { text: c, notice: N })
                                          : (0, a.jsx)(eg, { text: c + N, language: f, wordWrap: C }),
                                  }),
                    }),
                    (0, a.jsx)("div", {
                        role: "group",
                        "aria-label": ed.intl.string(ed.t.TlXA8e),
                        children: (0, a.jsxs)(h.E, {
                            color: "text-default",
                            className: em.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, a.jsx)(eC, { fileName: s, fileSize: n }),
                                (0, a.jsx)("div", { className: em.Kb }),
                                (0, a.jsx)(eA, { language: f, setLanguage: v, align: "bottom" }),
                                (0, a.jsx)(ex, {
                                    wordWrap: C,
                                    setWordWrap: A,
                                    language: f,
                                    renderMarkdown: x,
                                    setRenderMarkdown: y,
                                    url: t,
                                    fileName: s,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eE = l.memo(
    function (e) {
        let { url: t, fileName: s, fileSize: n, contentType: i, className: o, onClick: u, onContextMenu: d } = e,
            [c, h] = l.useState(!1),
            [m, p] = l.useState(s.split(".").slice(-1)[0]),
            [f, g] = l.useState(!0),
            [v, C] = l.useState(!0),
            {
                fileContents: A,
                bytesLeft: x,
                hadError: y,
            } = (function (e, t) {
                let [s, n] = l.useState(!1),
                    [a, i] = l.useState(null),
                    [r, o] = l.useState(1);
                return (
                    l.useEffect(() => {
                        !(async function () {
                            try {
                                let s = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    a = (function (e) {
                                        let t = e?.split("charset=").slice(-1)[0] ?? ec;
                                        try {
                                            return new TextDecoder(t);
                                        } catch (s) {
                                            if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                                                return new TextDecoder(ec);
                                            throw s;
                                        }
                                    })(t).decode(await s.arrayBuffer()),
                                    l = s.headers.get("content-range") ?? "0",
                                    r = s.headers.get("content-length") ?? "1",
                                    u = parseInt(l.split("/")[1]),
                                    d = Number.isNaN(u) ? 0 : u - parseInt(r),
                                    c = 0 === d ? a : a.slice(0, -1);
                                (i((0, eu.sJ)(c)), o(d), n(!1));
                            } catch (e) {
                                (o(0), n(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: a, bytesLeft: r, hadError: s }
                );
            })(t, i);
        return y
            ? (0, a.jsx)(P.A, { url: t, fileName: s, fileSize: n, onClick: u, onContextMenu: d, className: o })
            : (0, a.jsx)(eS, {
                  url: t,
                  fileName: s,
                  fileSize: n,
                  fileContents: A,
                  bytesLeft: x,
                  expanded: c,
                  setExpanded: h,
                  language: m,
                  setLanguage: p,
                  wordWrap: f,
                  setWordWrap: g,
                  renderMarkdown: v,
                  setRenderMarkdown: C,
                  className: r()(em.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eN = s(863922),
    ej = s(822074),
    eM = s(534890),
    eI = s(442433),
    eT = s(640708),
    eb = s(941971),
    ew = s(707539),
    eR = s(576705),
    eD = s(573163),
    ek = s(340833),
    eL = s(913642),
    eP = s(935208),
    eO = s(453302);
s(321073);
var eU = s(97808),
    eV = s(778712),
    eF = s(707606),
    eB = s(403362),
    eH = s(439511);
let eW = (0, eF.A)(function (e) {
        let { member: t, empty: s, guildId: n } = e;
        return s || null == t
            ? (0, a.jsx)("div", { className: eH.pO })
            : (0, a.jsx)("div", {
                  className: eH.pO,
                  children: (0, a.jsx)(eU.eu, {
                      src: t.getAvatarURL(n, 16),
                      "aria-label": t.username,
                      size: eV._3.SIZE_16,
                      className: eH.pO,
                  }),
              });
    }),
    eG = function (e) {
        let { partySize: t, members: s, minAvatarsShown: n = 1, maxAvatarsShown: l = 2, guildId: i } = e,
            { totalSize: r, knownSize: o } = t;
        if (r < n) return null;
        let d = u()(s)
                .filter(eB.Vq)
                .take(l)
                .map((e) => (0, a.jsx)(eW, { member: e, guildId: i }, e.id))
                .value(),
            c = r - o;
        for (let e = 0; e < c && d.length < l; e++)
            d.push((0, a.jsx)(eW, { empty: !0, guildId: i }, `empty-member-${e}`));
        let h = Math.max(Math.min(r - d.length, 99), 0);
        if (1 === h) {
            let e = s[l];
            d.push((0, a.jsx)(eW, { member: e, guildId: i }, e.id));
        }
        return (0, a.jsx)("div", {
            className: eH.iE,
            children: (0, a.jsxs)("div", {
                className: eH.S3,
                children: [d, h > 1 ? (0, a.jsxs)("div", { className: eH.Hi, children: ["+", h] }) : null],
            }),
        });
    };
var ez = s(303727),
    eK = s(681939);
function eY() {
    return (0, a.jsxs)("div", {
        className: eK.kL,
        children: [
            (0, a.jsxs)("div", {
                className: eK.zc,
                children: [
                    (0, a.jsx)("div", {
                        className: eK.Kk,
                        children: (0, a.jsx)(A.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eK.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, a.jsx)(ez.A, { className: eK.uf }),
                ],
            }),
            (0, a.jsx)(x.D, {
                className: eK.wx,
                variant: "heading-xl/semibold",
                children: ed.intl.string(ed.t.yJHJei),
            }),
            (0, a.jsx)(h.E, {
                className: eK.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ed.intl.string(ed.t.p2dIh6),
            }),
        ],
    });
}
var eq = s(652215),
    eQ = s(670455),
    eZ = s(750557);
function e$(e) {
    let { summary: t, channel: n, members: i, guildId: r, unread: o, onClick: u } = e,
        [d, m] = l.useState(!1),
        p = (0, ew.aK)(eP.default.extractTimestamp(t.startId)),
        f = (0, c.bG)([ej.A], () => ej.A.summaryFeedback(t));
    function g(e, s) {
        (e.stopPropagation(), (0, eO.A)({ summary: t, channel: n, rating: s }));
    }
    let C = eR.A.can(eq.xBc.MANAGE_MESSAGES, n);
    return (0, a.jsxs)(v.D, {
        className: eZ.kL,
        onClick: u,
        onContextMenu: function (e) {
            C &&
                (0, eI.L3)(e, async () => {
                    let { default: e } = await s.e("443921").then(s.bind(s, 304232));
                    return (s) => (0, a.jsx)(e, { ...s, summary: t });
                });
        },
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: [
            (0, a.jsx)(eb.A, { hovered: d, unread: o, className: eZ.dM }),
            (0, a.jsx)("div", {
                className: eZ.uV,
                children: (0, a.jsxs)("div", {
                    className: eZ.Hw,
                    children: [
                        (0, a.jsx)(h.E, {
                            className: eZ.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: p,
                        }),
                        (0, a.jsx)(eT.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                        (0, a.jsx)(eM.ChatIcon, { size: "xxs", color: "currentColor", className: eZ.Kk }),
                        (0, a.jsx)(h.E, {
                            className: eZ.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        i.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(eT.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                                    (0, a.jsx)(eG, {
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
            d &&
                null == f &&
                (0, a.jsxs)("div", {
                    className: eZ.p_,
                    children: [
                        (0, a.jsx)(v.D, {
                            onClick: (e) => g(e, eQ.P0.GOOD),
                            children: (0, a.jsx)(eL.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                        (0, a.jsx)(v.D, {
                            onClick: (e) => g(e, eQ.P0.BAD),
                            children: (0, a.jsx)(ek.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, a.jsx)(h.E, { color: "text-strong", variant: "text-sm/semibold", className: eZ.DD, children: t.topic }),
            (0, a.jsx)(h.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eZ.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eX(e) {
    let { summaries: t, summariesMembers: s, channel: n, selectTopic: i, setOpen: r } = e,
        o = (0, c.bG)([eD.Ay], () => eD.Ay.getOldestUnreadMessageId(n.id)),
        u = l.useCallback(
            (e) => {
                (i(e), r(!1));
            },
            [i, r],
        );
    return t.length < 1
        ? (0, a.jsx)(eY, {})
        : (0, a.jsx)(a.Fragment, {
              children: t.map((e, t) => {
                  let l = s[t] ?? [];
                  return (0, a.jsx)(
                      e$,
                      {
                          summary: e,
                          channel: n,
                          members: l,
                          guildId: n.guild_id,
                          unread: null != o && eP.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var eJ = s(885386),
    e0 = s(113494),
    e1 = s(782134),
    e2 = s(775602),
    e4 = s(73153),
    e5 = s(713021);
let e3 = l.forwardRef(function (e, t) {
    let s,
        n,
        { muted: i, volume: r, playing: o, playbackRate: u, ...d } = e,
        [c, h] =
            ((s = l.useRef(null)),
            (n = l.useCallback(
                (e) => {
                    null != t && ("function" == typeof t ? t(e) : (t.current = e), (s.current = e));
                },
                [t],
            )),
            [s, n]);
    return (
        l.useEffect(() => {
            let e = c.current;
            null == e || (void 0 !== i && (e.muted = i));
        }, [c, i]),
        l.useEffect(() => {
            let e = c.current;
            null == e || (void 0 !== r && (e.volume = r));
        }, [c, r]),
        l.useEffect(() => {
            let e = c.current;
            null == e || (null != u && (e.playbackRate = u));
        }, [c, u]),
        l.useEffect(() => {
            let e = c.current;
            null == e || (void 0 !== o && (o ? e.play() : e.pause()));
        }, [c, o]),
        (0, a.jsx)("audio", { ref: h, ...d })
    );
});
var e7 = s(20504),
    e6 = s(625494),
    e8 = s(927813),
    e9 = s(824744);
s(508300);
var te = s(661531),
    tt = s(602853),
    ts = s(765671);
function tn(e, t) {
    let s = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - s.left) / s.width));
}
var ta = s(998304),
    tl = s(284009),
    ti = s.n(tl),
    tr = s(722872);
class to {
    value;
    animationDetails;
    isReset;
    constructor(e) {
        ((this.value = e), (this.animationDetails = null), (this.isReset = !1));
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
        ((this.isReset = !1),
            this.value !== e &&
                ((this.animationDetails = { lastValue: this.value, animationStart: performance.now() }),
                (this.value = e)));
    }
    isAnimating() {
        return null != this.animationDetails;
    }
    reset() {
        (this.animateTo(0), (this.isReset = !0));
    }
}
let tu = [0.75, 1, 1.5, 2];
var td = s(587159);
let tc = [0, 0, 0, 0, 0];
function th(e) {
    let { showAll: t, currentTime: s, duration: n, numSegments: a } = e;
    return t ? a : Math.max(0, Math.round((s / n) * a));
}
function tm(e) {
    var t, s, n, a;
    let { context: l, devicePixelRatio: i, canvasHeight: r, segmentValue: o, segmentIndex: u, constrainMin: d } = e,
        c = d ? 22 * o + 2 : 24 * o;
    0 !== c &&
        ((t = 6 * u * i),
        (s = (r / 2 - c / 2) * i),
        (n = c * i),
        (a = +i),
        l.moveTo(t, s + a),
        l.lineTo(t, s + n - a),
        l.arc(t + a, s + n - a, a, Math.PI, 0, !0),
        l.lineTo(t + 2 * a, s + a),
        l.arc(t + a, s + a, a, 0, Math.PI, !0),
        l.closePath());
}
function tp(e, t, s) {
    let [n, a] = l.useState(e),
        [i, r] = l.useState(e),
        o = l.useRef(i);
    return (
        l.useLayoutEffect(() => {
            o.current = i;
        }),
        l.useLayoutEffect(() => {
            (a(o.current), r(e));
        }, [e, t, s]),
        [n, i]
    );
}
function tf(e, t, s, n) {
    if (null == n) return [t, !1];
    let a = Math.min((s - n) / 200, 1);
    return 1 === a ? [t, !1] : [(0, ta.De)(e, t, a), !0];
}
function tg(e) {
    let t,
        s,
        {
            className: n,
            waveform: i,
            currentTime: o,
            duration: u,
            played: d,
            playing: c,
            onDrag: h,
            onDragStart: m,
            onDragEnd: p,
        } = e,
        { ref: f, width: g } = (0, ts.Ay)(),
        v = l.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((u <= 0.5 ? 40 : u >= 45 ? 294 : ((Math.min(u, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [u],
        ),
        C = l.useRef(void 0),
        A =
            ((t = l.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (null == e) return;
                        try {
                            t = window.atob(e);
                        } catch (e) {
                            return;
                        }
                        let s = [];
                        for (let e = 0; e < t.length; e++) s[e] = t.charCodeAt(e) / 255;
                        return s;
                    })(i),
                [i],
            )),
            (s = l.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(g),
                [g],
            )),
            l.useMemo(
                () =>
                    (function (e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let s = t - e.length;
                                return e.concat(Array(s).fill(0));
                            }
                            return (function (e, t) {
                                if ((ti()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
                                let s = e.length / t,
                                    n = [],
                                    a = 0;
                                for (; n.length < t;) {
                                    let t = Math.round((n.length + 1) * s),
                                        l = 0,
                                        i = 0;
                                    for (let s = a; s < t && s < e.length; s++) ((l += e[s]), i++);
                                    ((n[n.length] = l / i), (a = t));
                                }
                                return n;
                            })(e, t);
                        }
                    })(t ?? [], s) ?? tc,
                [t, s],
            )),
        x = l.useRef(d),
        y = l.useRef(c),
        S = l.useRef(null),
        _ = window.devicePixelRatio,
        {
            lastBackgroundFillColor: E,
            backgroundFillColor: N,
            lastActiveFillColor: j,
            activeFillColor: M,
            lastInactiveFillColor: I,
            inactiveFillColor: T,
        } = (function (e, t) {
            let s = (0, tt.r)(te.A.colors.BACKGROUND_MOD_MUTED).hex(),
                n = (0, tt.r)(te.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                a = (0, tt.r)(te.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                l = (0, tt.r)(te.A.unsafe_rawColors.BRAND_430).hex(),
                i = (0, tt.r)(te.A.unsafe_rawColors.WHITE).hex(),
                r = t ? l : s,
                [o, u] = tp(r, t, e),
                [d, c] = tp(t ? i : e ? a : n, t, e),
                [h, m] = tp(e ? r : n, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: u,
                lastActiveFillColor: d,
                activeFillColor: c,
                lastInactiveFillColor: h,
                inactiveFillColor: m,
            };
        })(d, c),
        b = { currentTime: o, duration: u, played: d },
        w = l.useRef(b);
    (l.useEffect(() => {
        w.current = b;
    }),
        l.useEffect(() => {
            let { currentTime: e, duration: t, played: s } = w.current,
                n = th({ showAll: !s, currentTime: e, duration: t, numSegments: A.length });
            C.current = A.map((e, t) => new to(t < n ? e : 0));
        }, [A]),
        l.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = th({ showAll: !d, currentTime: o, duration: u, numSegments: A.length });
            for (let s = 0; s < e.length; s++) {
                let n = e[s];
                if (s < t) {
                    n.animateTo(A[s]);
                    continue;
                }
                n.reset();
            }
        }, [A, o, u, d]),
        l.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(s) {
                    let n = f.current,
                        a = n?.getContext("2d"),
                        l = C.current;
                    if (null == n || null == a || null == l) return;
                    let i = !1;
                    ((x.current !== d || y.current !== c) && ((x.current = d), (y.current = c), (S.current = s)),
                        null != S.current && s > S.current + 200 && (S.current = null));
                    let r = n.height / _;
                    (a.clearRect(0, 0, n.width, n.height), a.beginPath());
                    let [o, u] = tf(E, N, s, S.current);
                    ((i = i || u), (a.fillStyle = o));
                    for (let e = 0; e < A.length; e++)
                        tm({
                            context: a,
                            devicePixelRatio: _,
                            canvasHeight: r,
                            segmentValue: A[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    a.fill();
                    let [h, m] = tf(I, T, s, S.current);
                    i = i || m;
                    let [p, g] = tf(j, M, s, S.current);
                    i = i || g;
                    for (let e = 0; e < l.length; e++) {
                        let t = l[e],
                            s = Math.max(t.getCurrentValue(), A[e] - 0.1);
                        (a.beginPath(),
                            (a.fillStyle = t.isReset ? h : p),
                            tm({
                                context: a,
                                devicePixelRatio: _,
                                canvasHeight: r,
                                segmentValue: s,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (i = i || t.isAnimating()),
                            a.fill());
                    }
                    i && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [f, _, A, g, o, u, d, c, E, N, j, M, I, T]));
    let [, R] = (function (e) {
        let { ref: t, onDrag: s, onDragStart: n, onDragEnd: a } = e,
            [i, r] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (i)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", n),
                        () => {
                            (window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", n));
                        }
                    );
                function e() {
                    (a?.(), r(!1));
                }
                function n(e) {
                    let n = t.current;
                    null != n && s?.(tn(n, e));
                }
            }, [t, i, a, s]),
            [
                i,
                l.useCallback(
                    (e) => {
                        e.preventDefault();
                        let a = t.current;
                        null != a && (r(!0), n?.(), s?.(tn(a, e)));
                    },
                    [t, n, s],
                ),
            ]
        );
    })({ ref: f, onDrag: h, onDragStart: m, onDragEnd: p });
    return (0, a.jsx)("canvas", {
        onMouseDown: R,
        className: r()(td.J, n),
        style: { width: v },
        ref: f,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var tv = s(672245);
let tC = l.lazy(() => s.e("594436").then(s.bind(s, 660207)));
function tA(e) {
    let { played: t, duration: s, currentTime: n } = e,
        l = null == s ? "--:--" : t ? (0, B.rB)(Math.ceil(s - n)) : (0, B.rB)(Math.ceil(s));
    return (0, a.jsx)(h.E, { variant: "text-sm/normal", className: tv.p0, tabularNumbers: !0, children: l });
}
let tx = l.memo(function (e) {
    let t,
        {
            src: s,
            volume: n = 1,
            onVolumeChange: i,
            onMute: o,
            waveform: u,
            durationSecs: d,
            onVolumeShow: m,
            onVolumeHide: p,
            onPlay: f,
            onPause: g,
            onError: C,
            playbackCacheKey: A,
        } = e,
        x = l.useRef(null),
        y = l.useMemo(() => (null != A ? e5.Ay.getPlaybackPosition(A) : 0), [A]),
        S = (0, c.bG)([e5.Ay], () => e5.Ay.getPlaybackRate(e5.k0.VOICE_MESSAGE)),
        [_, E] = l.useState(y > 0),
        [N, j] = l.useState(y),
        [M, I] = l.useState(d),
        [T, b] = l.useState(!1),
        [w, R] = l.useState(!1),
        [D, k] = l.useState(!1),
        [L, P] = l.useState(!1),
        [O, U] = l.useState("none"),
        [V, F] = l.useState(() => ("function" == typeof n ? n() : n)),
        B = l.useRef(void 0),
        H = l.useCallback(() => {
            (R((e) => !e), P(!0));
        }, []),
        W = l.useCallback(() => {
            U("metadata");
        }, []),
        G = l.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || I(t);
        }, []),
        z = l.useCallback(
            (e) => {
                null != d &&
                    null != A &&
                    e4.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: A, position: e, duration: d });
            },
            [A, d],
        ),
        K = l.useCallback(() => {
            (R(!1),
                null == B.current &&
                    (B.current = setTimeout(() => {
                        (E(!1), P(!1), (B.current = void 0));
                    }, 500)));
        }, []),
        Y = l.useCallback(() => {
            D || (z(0), K());
        }, [K, D, z]),
        q = l.useCallback((e) => {
            let t = x.current;
            null != t && (j(e), (t.currentTime = e), E(!0));
        }, []),
        Q = l.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.error;
            C?.(t);
        }, [C]),
        Z = l.useCallback(
            (e) => {
                let t = (0, e9.w)(e, 1);
                (b(0 === t), F(t), i?.(t));
            },
            [i],
        ),
        $ = l.useCallback(() => {
            (b(!T), o?.(!T));
        }, [T, o]),
        X = l.useCallback(() => {
            k(!0);
        }, []),
        J = l.useCallback(() => {
            (k(!1), N === M && K(), z(N));
        }, [N, M, K, z]),
        ee = l.useCallback(
            (e) => {
                let t = x.current;
                null == M || null == t || (q(e * M), clearTimeout(B.current), (B.current = void 0));
            },
            [M, q],
        );
    l.useEffect(() => {
        !_ && w && E(!0);
    }, [w, _]);
    let et = l.useRef(null),
        es = { played: L, currentTime: N, onPause: g, onPlay: f },
        en = l.useRef(es);
    (l.useEffect(() => {
        en.current = es;
    }),
        l.useEffect(() => {
            y > 0 && q(y);
        }, [y, q]),
        l.useEffect(() => {
            let e;
            return (
                w &&
                    !D &&
                    (e = setInterval(() => {
                        z(x.current?.currentTime ?? 0);
                    }, e8.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [w, D, z]),
        l.useEffect(() => {
            let { played: e, currentTime: t, onPause: s, onPlay: n } = en.current;
            if (e || w)
                if (w) ((et.current = performance.now()), n?.(!1, t, (x.current?.duration ?? 0) * e8.A.Millis.SECOND));
                else {
                    let e = performance.now(),
                        n = et.current;
                    (s?.(t, null != n ? (e - n) / 1e3 : 0), z(t), (et.current = null));
                }
        }, [w, s, M, z]),
        l.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let s = x.current;
                    null == s || (j(s.currentTime), w && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [x, w, j]),
        l.useEffect(() => {
            if (w)
                return (
                    e6._.dispatch(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: s }),
                    e6._.subscribe(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e6._.unsubscribe(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                s !== t && R(!1);
            }
        }, [s, w, R]));
    let ea = w ? e0.PauseIcon : e1.PlayIcon,
        el = w ? ed.intl.string(ed.t["3XohGn"]) : ed.intl.string(ed.t.AlHqHT),
        ei = ed.intl.formatToPlainString(ed.t.LgCPMt, { playbackRate: S }),
        er = `${S.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, a.jsx)(l.Suspense, {
                  children: (0, a.jsx)(tC, {
                      ref: x,
                      className: tv.Zn,
                      src: s,
                      preload: O,
                      playing: w && !D,
                      onEnded: Y,
                      onLoadedMetadata: G,
                      onError: Q,
                      muted: T,
                      volume: V,
                      playbackRate: S,
                  }),
              })
            : (0, a.jsx)(e3, {
                  ref: x,
                  className: tv.Zn,
                  controls: !1,
                  preload: O,
                  onEnded: Y,
                  onLoadedMetadata: G,
                  onError: Q,
                  muted: T,
                  volume: V,
                  playbackRate: S,
                  playing: w && !D,
                  children: (0, a.jsx)("source", { src: s }),
              });
    let eo = (0, c.bG)([e2.Ay], () => e2.Ay.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: r()(tv.kL, { [tv.he]: w }),
        onMouseEnter: W,
        role: "region",
        "aria-label": ed.intl.string(ed.t.c8U6xd),
        children: [
            (0, a.jsx)("div", {
                className: tv.Kl,
                children: (0, a.jsx)("div", { className: r()(tv.fq, { [tv.VN]: eo }) }),
            }),
            (0, a.jsx)(v.D, {
                className: tv.k0,
                onClick: H,
                "aria-label": el,
                children: (0, a.jsx)(ea, { className: tv.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, a.jsx)(tg, {
                className: tv.ou,
                waveform: u,
                currentTime: N,
                duration: M ?? 1,
                playing: w,
                played: _,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: J,
            }),
            (0, a.jsx)(tA, { played: _, currentTime: N, duration: M }),
            (0, a.jsx)(v.D, {
                className: tv.LJ,
                onClick: () => {
                    var e, t;
                    let s;
                    return (
                        (s = (tu.indexOf(S) + 1) % tu.length),
                        void ((e = tu[s]),
                        (t = e5.k0.VOICE_MESSAGE),
                        e4.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": ei,
                children: (0, a.jsx)(h.E, { variant: "text-xs/semibold", className: tv.Sn, children: er }),
            }),
            (0, a.jsx)(e7.A, {
                className: tv.bk,
                iconClassName: tv._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tv.MQ,
                muted: T,
                value: (0, e9.M)(V, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Z,
                onToggleMute: $,
                onVolumeShow: m,
                onVolumeHide: p,
            }),
            t,
        ],
    });
});
var ty = s(287809),
    tS = s(147925),
    t_ = s(174459),
    tE = s(587481),
    tN = s(838541),
    tj = s(521732),
    tM = s(650583),
    tI = s(959760);
function tT(e) {
    return (t) => {
        (e?.(t), (0, tE.ls)(t));
    };
}
function tb(e) {
    return (t) => {
        (e?.(t), (0, tE.y5)(t));
    };
}
function tw(e) {
    let { altText: t, altButtonRef: s } = e;
    return (0, a.jsxs)("div", {
        role: "dialog",
        "aria-label": ed.intl.string(ed.t.fSiQ3A),
        className: tI.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tM.N$.Escape && setTimeout(() => s.current?.focus(), 0);
        },
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: tI.k_Z,
                children: ed.intl.string(ed.t.fSiQ3A),
            }),
            (0, a.jsx)(h.E, { variant: "text-md/normal", color: "none", tag: "span", className: tI.a7V, children: t }),
        ],
    });
}
function tR(e) {
    let {
            alt: t,
            controlsVisible: s = !0,
            disableAltTextDisplay: n = !1,
            hiddenSpoilers: i = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [u, d] = l.useState(!1),
        c = l.useRef(null);
    return (s || u) && !n && eJ._z.getSetting() && null != t && "" !== t && !0 !== i
        ? (0, a.jsx)("div", {
              className: tI.NOQ,
              children: (0, a.jsx)(m.Y, {
                  targetElementRef: c,
                  animation: m.Y.Animation.FADE,
                  renderPopout: () => (0, a.jsx)(tw, { altText: t, altButtonRef: c }),
                  children: (e) =>
                      (0, a.jsx)(p.vN, {
                          offset: 4,
                          children: (0, a.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: c,
                              "aria-label": ed.intl.string(ed.t.fSiQ3A),
                              onMouseEnter: () => d(!0),
                              onMouseLeave: () => d(!1),
                              className: r()(tI.DV5, { [tI.yZ5]: !0, [tI.I54]: o }),
                              children: ed.intl.string(ed.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tD(e) {
    let {
            onVolumeChange: t,
            onMute: s,
            volume: n,
            autoMute: i,
            alt: r,
            renderAdjacentContent: o,
            renderOverlayContent: u,
            disableAltTextDisplay: d = !1,
            hiddenSpoilers: c,
            mosaicStyleAlt: m,
            mediaLayoutType: p,
            reducedSizeAltTextButton: f,
            ...g
        } = e,
        v = tT(t),
        C = tb(s);
    ((n = null == n ? tE.v1 : n), (i = null == i ? tE.uj : i));
    let [A, x] = l.useState(!0),
        y = p === tN.dG.MOSAIC || !0 === m,
        S = A && !d && eJ._z.getSetting() && null != r && "" !== r && !0 !== c;
    return (0, a.jsxs)(l.Fragment, {
        children: [
            (0, a.jsx)(W.A, {
                ...g,
                alt: r,
                autoMute: i,
                mediaLayoutType: p,
                onControlsHide: () => x(!1),
                onControlsShow: () => x(!0),
                onMute: C,
                onVolumeChange: v,
                renderLinkComponent: tU,
                renderOverlayContent: u,
                volume: n,
            }),
            null != o && o(),
            y &&
                (0, a.jsx)(tR, {
                    alt: r,
                    controlsVisible: A,
                    disableAltTextDisplay: d,
                    hiddenSpoilers: c,
                    reducedSizeAltTextButton: f,
                }),
            !y &&
                S &&
                (0, a.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tI.R5R,
                    children: r,
                }),
        ],
    });
}
function tk(e) {
    return (0, a.jsx)(tD, { ...e });
}
function tL(e) {
    let {
            onVolumeChange: t,
            volume: s,
            onMute: n,
            onVolumeShow: i,
            onVolumeHide: r,
            renderAdjacentContent: o,
            ...u
        } = e,
        d = tT(t),
        c = tb(n);
    return (
        (s = null == s ? tE.v1 : s),
        (0, a.jsxs)(l.Fragment, {
            children: [
                (0, a.jsx)(H, {
                    ...u,
                    onVolumeChange: d,
                    onMute: c,
                    onVolumeShow: i,
                    onVolumeHide: r,
                    volume: s,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tU,
                }),
                null != o && o(),
            ],
        })
    );
}
function tP(e) {
    let { onVolumeChange: t, volume: s, onMute: n, ...l } = e,
        i = tT(t),
        r = tb(n);
    return ((s = null == s ? tE.v1 : s), (0, a.jsx)(tx, { ...l, onVolumeChange: i, onMute: r, volume: s }));
}
function tO(e) {
    let {
            alt: t,
            hiddenSpoilers: s,
            renderAdjacentContent: n,
            containerClassName: i,
            imageContainerClassName: o,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: d = !1,
            mediaLayoutType: c,
            imageContainerStyle: f,
            mosaicStyleAlt: g,
        } = e,
        v = c === tN.dG.MOSAIC || !0 === g,
        C = !u && eJ._z.getSetting() && null != t && "" !== t && !0 !== s,
        A = l.createRef();
    return (0, a.jsxs)("div", {
        className: r()(tI.foG, i),
        children: [
            (0, a.jsxs)("div", {
                className: r()(tI.ZSk, o),
                style: f,
                children: [(0, a.jsx)(R, { ...e }), null != n && n()],
            }),
            v &&
                C &&
                (0, a.jsx)("div", {
                    className: tI.Y1Z,
                    children: (0, a.jsx)(m.Y, {
                        targetElementRef: A,
                        animation: m.Y.Animation.FADE,
                        renderPopout: () => (0, a.jsx)(tw, { altText: t, altButtonRef: A }),
                        children: (e) =>
                            (0, a.jsx)(p.vN, {
                                offset: 4,
                                children: (0, a.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: A,
                                    "aria-label": ed.intl.string(ed.t.fSiQ3A),
                                    className: r()(tI.DV5, { [tI.I54]: d }),
                                    children: ed.intl.string(ed.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !v &&
                C &&
                (0, a.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tI.R5R,
                    children: t,
                }),
        ],
    });
}
function tU(e) {
    return (0, a.jsx)(D.A, { ...e });
}
function tV(e) {
    let { renderAdjacentContent: t, ...s } = e;
    return (0, a.jsxs)(l.Fragment, { children: [(0, a.jsx)(eE, { ...s }), null != t && t()] });
}
function tF(e) {
    return (0, a.jsx)(P.A, { ...e });
}
var tB = (((n = {})[(n.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (n[(n.REPLY = 1)] = "REPLY"), n);
let tH = (e) => {
    let { type: t = 0, onClick: s, className: n } = e;
    function l(e) {
        (e.stopPropagation(), s?.());
    }
    return (0, a.jsx)(O.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, a.jsxs)("div", {
                      onClick: l,
                      className: r()(tI.Sg2, n),
                      children: [
                          (0, a.jsx)("div", {
                              className: tI.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ed.intl.string(ed.t["4EvBbw"]);
                                      case 1:
                                          return ed.intl.string(ed.t["1J6Xq7"]);
                                      default:
                                          return (0, eB.xb)(e);
                                  }
                              })(t),
                          }),
                          null != s
                              ? (0, a.jsx)(p.vN, {
                                    offset: -2,
                                    children: (0, a.jsx)(f.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ed.intl.string(ed.t.gpoQsB);
                                                case 1:
                                                    return ed.intl.string(ed.t.k3RM8z);
                                                default:
                                                    return (0, eB.xb)(e);
                                            }
                                        })(t),
                                        onClick: l,
                                    }),
                                })
                              : (0, a.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tI.u1E,
                                    itemClassName: tI.$N2,
                                }),
                      ],
                  }),
    });
};
function tW(e) {
    let { onClick: t, loading: s, className: n } = e;
    return (0, a.jsx)(O.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, a.jsxs)(v.D, {
                      className: r()(tI._5m, n),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, a.jsx)("div", { className: tI.$IB, children: ed.intl.string(ed.t["1zUvlw"]) }),
                          s
                              ? (0, a.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tI.u1E,
                                    itemClassName: tI.$N2,
                                })
                              : (0, a.jsx)("div", {
                                    className: r()(tI.hQH, tI.d3o),
                                    children: ed.intl.string(ed.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tG(e) {
    let { content: t, channelId: s } = e,
        [n] = l.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        i = l.useCallback(() => {
            let e = eD.Ay.ackMessageId(s);
            null != e
                ? _.A.jumpToMessage({ channelId: s, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: s,
                      messageId: eP.default.castChannelIdAsMessageId(s),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [s]),
        o = l.useCallback(() => {
            (0, E.ack)(s, {
                section: eq.JJy.NEW_MESSAGES_BANNER,
                object: eq.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eq.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [s]),
        { disableInteractions: u } = l.useContext(O.Y);
    return u
        ? null
        : (0, a.jsxs)("div", {
              className: r()(tI.ebV, { [tI.y71]: u }),
              children: [
                  (0, a.jsx)(p.vN, {
                      offset: 4,
                      children: (0, a.jsx)("button", {
                          type: "button",
                          className: tI.$IB,
                          onClick: i,
                          "aria-label": ed.intl.string(ed.t.z0Mkp3),
                          "aria-describedby": n,
                          children: (0, a.jsx)("span", { id: n, className: tI.Lnh, children: t }),
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: tI._ov,
                      children: (0, a.jsx)(p.vN, {
                          offset: 4,
                          children: (0, a.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tI.hQH,
                              children: [
                                  (0, a.jsx)("span", { className: tI.vE$, children: ed.intl.string(ed.t.e6RscS) }),
                                  (0, a.jsx)(C.M, { size: "md", color: "currentColor", className: tI.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tz(e) {
    let { channel: t, content: s, scrollManager: n } = e,
        { disableInteractions: i } = l.useContext(O.Y),
        [o, m] = l.useState(null),
        p = l.useRef(null),
        [f, g] = l.useState(null),
        N = l.useRef(null),
        j = (0, c.yK)([ej.A], () => ej.A.summaries(t.id) ?? [], [t]),
        M = (0, L.Ay)(j);
    l.useEffect(() => {
        u().isEqual(M, j) ||
            t_.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: j.length,
                message_counts: j.map((e) => e.count),
                start_message_ids: j.map((e) => e.startId),
                end_message_ids: j.map((e) => e.endId),
                num_participants: j.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [j, M, t.guild_id, t.id, t.type]);
    let I = (0, c.bG)(
            [ty.default],
            () => j?.map((e) => e.people?.map((e) => ty.default.getUser(e) ?? null).filter(eB.Vq)) ?? [],
            [j],
            tK,
        ),
        T = (0, c.bG)([ej.A], () => ej.A.visibleSummaryIndex()) ?? -1,
        b = j?.[T]?.topic;
    null == b && null == o && j?.length >= 1 && (b = j[0]?.topic);
    let w = l.useMemo(
            () =>
                u().debounce((e) => {
                    m(e?.id ?? null);
                }, 64),
            [m],
        ),
        R = l.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eN.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        D = l.useCallback(
            (e) => {
                (R(), w(e));
            },
            [w, R],
        ),
        [P, U] = l.useState(!1),
        F = l.useCallback(() => {
            (t_.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: j.length,
                message_counts: j.map((e) => e.count),
                start_message_ids: j.map((e) => e.startId),
                end_message_ids: j.map((e) => e.endId),
                num_participants: j.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!P));
        }, [P, j, U, t]),
        B = l.useCallback(
            function (e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tj.eh.PILL_DROPDOWN,
                    a = j[e];
                null != a &&
                    ((0, eN.sK)(t.id, a.id),
                    (0, eN.C6)(t.id, a.id),
                    n.removeAutomaticAnchorCallback(D),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(D, !1);
                            }, 100));
                    }),
                    t_.default.track(eq.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: s,
                        message_id: a.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    _.A.jumpToMessage({
                        channelId: t.id,
                        messageId: a.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [j, t, D, n],
        ),
        H = l.useCallback((e) => {
            U(e);
            let t = N.current?.scrollTop;
            null != t && g(t);
        }, []);
    l.useEffect(() => {
        null != f && P && N.current?.scrollTo({ top: f });
    }, [f, P]);
    let W = l.useCallback(
        (e) => {
            ((0, d.vq)(e.target) && p.current?.contains(e.target)) ||
                (P &&
                    t_.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: j.length,
                        message_counts: j.map((e) => e.count),
                        start_message_ids: j.map((e) => e.startId),
                        end_message_ids: j.map((e) => e.endId),
                        num_participants: j.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                H(!1));
        },
        [P, j, t, H],
    );
    (l.useEffect(
        () => (
            n.addAutomaticAnchorCallback(D),
            () => {
                n.removeAutomaticAnchorCallback(D);
            }
        ),
        [n, D],
    ),
        l.useEffect(() => {
            (0, eN.$T)(t.id);
        }, [t.id]),
        l.useEffect(
            () => (
                document.addEventListener("mousedown", W),
                () => {
                    document.removeEventListener("mousedown", W);
                }
            ),
            [W],
        ));
    let G = l.useMemo(
            () => (0, a.jsx)(eX, { channel: t, summaries: j, summariesMembers: I, selectTopic: B, setOpen: H }),
            [j, I, B, H, t],
        ),
        z = l.useCallback(() => {
            let e = eD.Ay.ackMessageId(t.id);
            null != e
                ? _.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eP.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        K = l.useCallback(() => {
            (0, E.ack)(t.id, {
                section: eq.JJy.NEW_TOPICS_BAR,
                object: eq.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eq.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Y = ed.intl.string(ed.t["38qwgO"]);
    return (
        j.length > 0 && (Y = "" === b || null == b ? ed.intl.string(ed.t.DwnFuG) : b),
        i
            ? null
            : (0, a.jsxs)("div", {
                  ref: p,
                  className: r()(tI.dw5, tI.jht),
                  children: [
                      (0, a.jsx)("div", {
                          className: tI.qmJ,
                          children: (0, a.jsx)(v.D, {
                              className: tI.TQl,
                              "aria-label": ed.intl.string(ed.t.RT3MPz),
                              onClick: F,
                              children: (0, a.jsxs)("div", {
                                  className: r()({ [tI.hNz]: !P, [tI.Apq]: P }),
                                  children: [
                                      (0, a.jsx)(A.K, { size: "xs", color: "currentColor", className: tI.VdQ }),
                                      (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          className: r()(tI.$Uj, tI.lc3),
                                          children: Y,
                                      }),
                                      (0, a.jsx)(tS.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tS.A.Directions.DOWN,
                                          className: tI.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, a.jsx)(v.D, { onClick: z, className: tI.ijE, children: s }),
                      (0, a.jsxs)(v.D, {
                          onClick: K,
                          className: r()(tI.hQH, tI.NXP),
                          children: [
                              (0, a.jsx)("div", { className: tI.$Uj, children: ed.intl.string(ed.t.e6RscS) }),
                              (0, a.jsx)(C.M, { size: "md", color: "currentColor", className: tI.t3N }),
                          ],
                      }),
                      P &&
                          (0, a.jsxs)("div", {
                              className: tI.A1T,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: tI.kee,
                                      children: [
                                          (0, a.jsxs)("div", {
                                              className: tI.Ney,
                                              children: [
                                                  (0, a.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tI.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, a.jsx)(x.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, a.jsx)(V.A, { className: tI.Zxm }),
                                              ],
                                          }),
                                          (0, a.jsx)(v.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: F,
                                              className: tI.oX1,
                                              children: (0, a.jsx)(y.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(S.Ip, { ref: N, className: tI.Pei, fade: !0, children: G }),
                              ],
                          }),
                  ],
              })
    );
}
function tK(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, s) => {
            var n;
            return null == (n = t[s]) || e.length !== n.length || !!e.some((e, t) => n[t] !== e);
        })
    );
}
function tY(e) {
    let { channel: t, scrollManager: s } = e,
        { disableInteractions: n } = l.useContext(O.Y),
        [i, o] = l.useState(null),
        m = l.useRef(null),
        [p, f] = l.useState(null),
        g = l.useRef(null),
        C = (0, c.yK)([ej.A], () => ej.A.summaries(t.id) ?? [], [t]),
        E = (0, L.Ay)(C);
    l.useEffect(() => {
        u().isEqual(E, C) ||
            t_.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [C, E, t.guild_id, t.id, t.type]);
    let N = (0, c.bG)(
            [ty.default],
            () => C?.map((e) => e.people?.map((e) => ty.default.getUser(e) ?? null).filter(eB.Vq)) ?? [],
            [C],
            tK,
        ),
        j = (0, c.bG)([ej.A], () => ej.A.visibleSummaryIndex()) ?? -1,
        M = C?.[j]?.topic;
    null == M && null == i && C?.length >= 1 && (M = C[0]?.topic);
    let I = l.useMemo(() => u().get(C, j - 1), [j, C]),
        T = l.useMemo(() => u().get(C, j + 1), [j, C]),
        b = l.useMemo(
            () =>
                u().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        w = l.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, eN.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        R = l.useCallback(
            (e) => {
                (w(), b(e));
            },
            [b, w],
        ),
        [D, P] = l.useState(!1),
        U = l.useCallback(() => {
            (t_.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !D,
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                P(!D));
        }, [D, C, P, t]),
        F = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tj.eh.PILL_DROPDOWN,
                    a = C[e];
                null != a &&
                    ((0, eN.sK)(t.id, a.id),
                    (0, eN.C6)(t.id, a.id),
                    s.removeAutomaticAnchorCallback(R),
                    s.addScrollCompleteCallback(function e() {
                        (s.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                s.addAutomaticAnchorCallback(R, !1);
                            }, 100));
                    }),
                    t_.default.track(eq.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: a.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    _.A.jumpToMessage({
                        channelId: t.id,
                        messageId: a.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [C, t, R, s],
        ),
        B = l.useCallback(() => {
            F(j - 1, tj.eh.PILL_NEXT_ARROW);
        }, [F, j]),
        H = l.useCallback(() => {
            F(j + 1, tj.eh.PILL_PREVIOUS_ARROW);
        }, [j, F]),
        W = l.useCallback((e) => {
            P(e);
            let t = g.current?.scrollTop;
            null != t && f(t);
        }, []);
    l.useEffect(() => {
        null != p && D && g.current?.scrollTo({ top: p });
    }, [p, D]);
    let G = l.useCallback(
        (e) => {
            ((0, d.vq)(e.target) && m.current?.contains(e.target)) ||
                (D &&
                    t_.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                W(!1));
        },
        [D, C, t, W],
    );
    (l.useEffect(
        () => (
            s.addAutomaticAnchorCallback(R),
            () => {
                s.removeAutomaticAnchorCallback(R);
            }
        ),
        [s, R],
    ),
        l.useEffect(() => {
            (0, eN.$T)(t.id);
        }, [t.id]),
        l.useEffect(
            () => (
                document.addEventListener("mousedown", G),
                () => {
                    document.removeEventListener("mousedown", G);
                }
            ),
            [G],
        ));
    let z = l.useMemo(
        () => (0, a.jsx)(eX, { channel: t, summaries: C, summariesMembers: N, selectTopic: F, setOpen: W }),
        [C, N, F, W, t],
    );
    if (!(0, c.bG)([ej.A], () => ej.A.shouldShowTopicsBar())) return null;
    let K = ed.intl.string(ed.t["38qwgO"]);
    return (
        C.length > 0 && (K = "" === M || null == M ? ed.intl.string(ed.t.DwnFuG) : M),
        n
            ? null
            : (0, a.jsxs)("div", {
                  ref: m,
                  className: r()(tI.$T$, tI.jht),
                  children: [
                      (0, a.jsxs)("div", {
                          className: tI.sEF,
                          children: [
                              (0, a.jsx)(v.D, {
                                  className: tI.LPV,
                                  "aria-label": ed.intl.string(ed.t.RT3MPz),
                                  onClick: U,
                                  children: (0, a.jsxs)("div", {
                                      className: r()({ [tI.Nv2]: !D, [tI.Ann]: D }),
                                      children: [
                                          (0, a.jsx)(A.K, { size: "xs", color: "currentColor", className: tI.Npc }),
                                          (0, a.jsx)(h.E, {
                                              className: tI.r1V,
                                              variant: "text-sm/medium",
                                              children: K,
                                          }),
                                          (0, a.jsx)(tS.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tS.A.Directions.DOWN,
                                              className: tI._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: tI.Ykg,
                                  children: [
                                      (0, a.jsx)(v.D, {
                                          "aria-label": ed.intl.string(ed.t["4huCnC"]),
                                          onClick: H,
                                          className: r()(tI.ZMY, tI.vzA, { [tI.jfO]: null == T }),
                                          children: (0, a.jsx)(tS.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tS.A.Directions.UP,
                                          }),
                                      }),
                                      (0, a.jsx)(v.D, {
                                          "aria-label": ed.intl.string(ed.t["58KOoF"]),
                                          onClick: B,
                                          className: r()(tI.ZMY, tI.mtW, { [tI.jfO]: null == I }),
                                          children: (0, a.jsx)(tS.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tS.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      D &&
                          (0, a.jsxs)("div", {
                              className: tI.A1T,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: tI.kee,
                                      children: [
                                          (0, a.jsxs)("div", {
                                              className: tI.Ney,
                                              children: [
                                                  (0, a.jsx)(A.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tI.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, a.jsx)(x.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, a.jsx)(V.A, { className: tI.Zxm }),
                                              ],
                                          }),
                                          (0, a.jsx)(v.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: U,
                                              className: tI.oX1,
                                              children: (0, a.jsx)(y.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(S.Ip, { ref: g, className: tI.Pei, fade: !0, children: z }),
                              ],
                          }),
                  ],
              })
    );
}
function tq(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, a.jsxs)("div", {
        className: tI.YLv,
        children: [
            (0, a.jsx)(h.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tI.LdH,
                children: e,
            }),
            t &&
                (0, a.jsx)(h.E, {
                    className: tI.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ed.intl.string(ed.t["515vjG"]),
                }),
        ],
    });
}
