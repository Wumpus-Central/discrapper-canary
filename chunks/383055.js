n.d(t, {
    Ez: () => tw,
    ks: () => tM,
    Ab: () => tT,
    _z: () => tE,
    GN: () => tL,
    OZ: () => tR,
    UK: () => tD,
    gL: () => t_,
    yR: () => tO,
    Dk: () => tb,
    LL: () => ty,
    bU: () => tI,
    _d: () => tS,
    $o: () => tv,
    P$: () => tN,
    Ir: () => tx,
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
    f = n(559106),
    p = n(821609),
    g = n(289873),
    A = n(939249),
    C = n(582394),
    x = n(306788),
    E = n(534514),
    j = n(789645),
    v = n(95362),
    _ = n(138399),
    N = n(334738),
    y = n(192308),
    I = n(267102),
    S = n(619517),
    b = n(256905),
    M = n(536763),
    T = n(218394);
class w extends a.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: s, handlePreloadImage: a } = this.props;
        (s?.(e), null != a) ? a() : (0, M.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, y.TI)(this.props.appContext);
    onCloseImage = () => {
        (0, y.Oo)(b.K, this.modalContext);
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
            sourceMetadata: f,
            analyticsSource: p,
            contentType: g,
            originalContentType: A,
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
                        originalContentType: A,
                        zoomThumbnailPlaceholder: n,
                        animated: c,
                        srcIsAnimated: d,
                        children: m,
                        trigger: l,
                        sourceMetadata: f,
                        original: r ?? a,
                    },
                ],
                shouldHideMediaOptions: h,
                location: p ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            }));
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, s.jsx)(S.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function L(e) {
    let t = (0, I.Us)(),
        n = (0, T.j)();
    return (0, s.jsx)(w, { ...e, isWindowFocused: n, appContext: t });
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
            onPlay: f,
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
            onPlay: f,
        });
    }
}
var G = n(248643),
    z = n(866665),
    W = n(408278),
    K = n(900797),
    Y = n(847374),
    q = n(305866),
    $ = n(873200),
    Q = n(387758),
    Z = n(858899),
    J = n(165862),
    X = n(477782),
    ee = n(32880),
    et = n(365199),
    en = n(28863),
    el = n(26430),
    es = n(224640),
    ea = n(268218),
    er = n(639169),
    ei = n(980045),
    eo = n(255438),
    ec = n(723702),
    eu = n(417964),
    ed = n(792996);
let em = "utf-8";
var eh = n(540168),
    ef = n(97770),
    ep = n(564218),
    eg = n(810917);
let eA = (0, ea.Fe)({
    createPromise: () => Promise.all([n.e(645304), n.e(759743), n.e(934647), n.e(636550)]).then(n.bind(n, 60711)),
    webpackId: 60711,
    name: "PlaintextFileMarkdownPreview",
    renderLoader: () => (0, s.jsx)(g.y, { className: eg.u1 }),
});
function eC(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, s.jsx)(eh.d, { text: t, language: n, className: i()(eg.Xb, { [eg.Zw]: l }) });
}
function ex(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: a } = e,
        r = ed.intl.formatToPlainString(a ? ed.t.Go5Vvs : ed.t.yJcYan, { lines: l }),
        i = `${t ? ed.intl.string(ed.t.iTcuma) : ed.intl.string(ed.t.dcl9MQ)} (${r})`;
    return (0, s.jsx)("div", {
        className: eg.py,
        children: (0, s.jsx)(z.m, {
            text: i,
            children: (0, s.jsx)(W.K, {
                icon: t ? K.ChevronSmallUpIcon : Y.ChevronSmallDownIcon,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": i,
            }),
        }),
    });
}
function eE(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, eo.up)(n)})`;
    return (0, s.jsxs)("div", {
        className: eg.VI,
        children: [
            (0, s.jsx)("div", {
                className: eg.VW,
                children: (0, s.jsx)(z.m, {
                    text: l,
                    children: (0, s.jsx)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: eg.Md,
                        children: t,
                    }),
                }),
            }),
            (0, s.jsx)(m.E, { variant: "body-xs/normal", color: "text-subtle", children: (0, eo.up)(n) }),
        ],
    });
}
function ej(e) {
    let { language: t, setLanguage: n, align: l } = e,
        r = a.useRef(null);
    return (0, s.jsx)(h.Y, {
        targetElementRef: r,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, s.jsx)(q.l, {
                "aria-label": ed.intl.string(ed.t.utm4qs),
                children: (0, s.jsx)("div", {
                    className: eg.md,
                    children: (0, s.jsxs)($.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(ei.No).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, s.jsx)($.a3, { placeholder: ed.intl.string(ed.t.GofftW) }),
                            (0, s.jsx)($.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, s.jsx)(z.m, {
                ariaHidden: !0,
                text: ed.intl.string(ed.t.utm4qs),
                children: (0, s.jsx)(A.D, {
                    ...e,
                    className: eg.Qw,
                    "aria-label": ed.intl.string(ed.t.utm4qs),
                    children: (0, s.jsx)(Q.AngleBracketsIcon, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function ev(e) {
    let { wordWrap: t, setWordWrap: n, language: l, renderMarkdown: r, setRenderMarkdown: i, url: o, fileName: c } = e,
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useCallback(async () => {
            try {
                let e,
                    t,
                    n = await fetch(o);
                if (!n.ok) throw Error(`Download failed: ${n.status}`);
                let l = await n.blob();
                await (0, ep.H)(
                    l,
                    ((e = c.trim()),
                    (t = (0, ef.A)(c)),
                    "" === t || /^\.+$/.test(t)
                        ? "download"
                        : t.startsWith(".") && !e.startsWith(".")
                          ? `download${t}`
                          : t),
                );
            } catch {
                (0, Z.P0)({ text: ed.intl.string(ed.t.yEF0U5), variant: "critical" });
            }
        }, [o, c]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(h.Y, {
                targetElementRef: u,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: a } = e;
                    return (0, s.jsx)(J.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: a,
                        onSelect: () => {},
                        "aria-label": ed.intl.string(ed.t.PdRCRg),
                        children: (0, s.jsxs)(X.rX, {
                            children: [
                                (0, s.jsx)(X.Dr, {
                                    id: "download",
                                    label: ed.intl.string(ed.t["1WjMbC"]),
                                    icon: ee.DownloadIcon,
                                    action: () => {
                                        (ec.isPlatformEmbedded ? m() : d.current?.click(), a());
                                    },
                                }),
                                (0, s.jsx)(X.sL, {
                                    id: "word-wrap",
                                    label: ed.intl.string(ed.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                er.WI.has(l)
                                    ? (0, s.jsx)(X.sL, {
                                          id: "render-markdown",
                                          label: ed.intl.string(ed.t.zstmkn),
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
                        text: ed.intl.string(ed.t["UKOtz+"]),
                        children: (0, s.jsx)(A.D, {
                            ...e,
                            className: eg.IQ,
                            "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                            children: (0, s.jsx)(et.MoreHorizontalIcon, { ref: u, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, s.jsx)(en.Anchor, {
                ref: d,
                href: o,
                download: c,
                className: eg.op,
                children: (0, s.jsx)(ee.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function e_(e) {
    return (0, s.jsx)(z.m, {
        ariaHidden: !0,
        text: ed.intl.string(ed.t["0PQYk3"]),
        children: (0, s.jsx)(A.D, {
            className: eg.R1,
            "aria-label": ed.intl.string(ed.t["0PQYk3"]),
            onClick: () => {
                (0, y.qf)((t) => (0, s.jsx)(ey, { ...e, ...t }));
            },
            children: (0, s.jsx)(el.MaximizeIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eN(e) {
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
            setRenderMarkdown: f,
            bytesLeft: p,
            className: A,
        } = e,
        C = a?.split("\n"),
        x = C?.length ?? 0,
        E = r ? 100 : 6,
        j = 0 === p,
        _ = h && er.WI.has(c),
        N = "";
    (j && r && x > E ? (N = "\n...") : j || (N = "..."),
        "" !== N &&
            (j
                ? (N += " " + ed.intl.formatToPlainString(ed.t.DQnFp2, { lines: x - E }))
                : (N += " " + ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, eo.up)(p) }))));
    let y = C?.slice(0, E).join("\n") ?? "",
        I = r || E < x;
    return (0, s.jsxs)("div", {
        className: i()(A, eg.kL),
        children: [
            (0, s.jsx)(v.Ip, {
                className: i()(eg.FS, { [eg.KQ]: !r && !_ }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == a
                        ? (0, s.jsx)(g.y, { className: eg.u1 })
                        : _
                          ? (0, s.jsx)(eA, { text: y, notice: N.trim() })
                          : (0, s.jsx)(eC, { text: y + N, language: c, wordWrap: d }),
            }),
            (0, s.jsxs)("div", {
                className: eg.qr,
                role: "group",
                "aria-label": ed.intl.string(ed.t.TlXA8e),
                children: [
                    I ? (0, s.jsx)(ex, { expanded: r, setExpanded: o, numLines: x, isWholeFile: j }) : null,
                    (0, s.jsx)(eE, { fileName: n, fileSize: l }),
                    (0, s.jsx)("div", { className: eg.Kb }),
                    (0, s.jsx)(ej, { language: c, setLanguage: u, align: "top" }),
                    null != a
                        ? (0, s.jsx)(e_, {
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
                    (0, s.jsx)(ev, {
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
function ey(e) {
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
            onClose: f,
        } = e,
        [p, A] = a.useState(i),
        [C, x] = a.useState(o),
        [E, j] = a.useState(c),
        _ = a.useRef(null),
        N = E && er.WI.has(p),
        y = h > 0 ? `... ${ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, eo.up)(h) })}` : "";
    return (
        a.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != _.current) {
                    let t = document.activeElement;
                    if ((0, u.vq)(t, HTMLInputElement) || (0, u.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        (e.selectNodeContents(_.current), n.removeAllRanges(), n.addRange(e));
                    }
                }
            }
            return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, []),
        (0, s.jsx)(es.d, {
            transitionState: r,
            "aria-label": ed.intl.string(ed.t["qxQjc+"]),
            size: "xxl",
            onClose: f,
            children: (0, s.jsxs)("div", {
                className: eg.jE,
                children: [
                    (0, s.jsx)(v.Ip, {
                        className: eg.ot,
                        children:
                            null == d
                                ? (0, s.jsx)(g.y, { className: eg.u1 })
                                : (0, s.jsx)("div", {
                                      ref: _,
                                      children: N
                                          ? (0, s.jsx)(eA, { text: d, notice: y })
                                          : (0, s.jsx)(eC, { text: d + y, language: p, wordWrap: C }),
                                  }),
                    }),
                    (0, s.jsx)("div", {
                        role: "group",
                        "aria-label": ed.intl.string(ed.t.TlXA8e),
                        children: (0, s.jsxs)(m.E, {
                            color: "text-default",
                            className: eg.Hx,
                            variant: "body-sm/normal",
                            children: [
                                (0, s.jsx)(eE, { fileName: n, fileSize: l }),
                                (0, s.jsx)("div", { className: eg.Kb }),
                                (0, s.jsx)(ej, { language: p, setLanguage: A, align: "bottom" }),
                                (0, s.jsx)(ev, {
                                    wordWrap: C,
                                    setWordWrap: x,
                                    language: p,
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
let eI = a.memo(
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
            [f, p] = a.useState(o),
            [g, A] = a.useState(!0),
            [C, x] = a.useState(!0),
            {
                fileContents: E,
                bytesLeft: j,
                hadError: v,
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
                                        let t = e?.split("charset=").slice(-1)[0] ?? em;
                                        try {
                                            return new TextDecoder(t);
                                        } catch (n) {
                                            if (e?.startsWith("text") || t.toLowerCase().includes("utf"))
                                                return new TextDecoder(em);
                                            throw n;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    a = n.headers.get("content-range") ?? "0",
                                    i = n.headers.get("content-length") ?? "1",
                                    c = parseInt(a.split("/")[1]),
                                    u = Number.isNaN(c) ? 0 : c - parseInt(i),
                                    d = 0 === u ? s : s.slice(0, -1);
                                (r((0, eu.sJ)(d)), o(u), l(!1));
                            } catch (e) {
                                (o(0), l(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: s, bytesLeft: i, hadError: n }
                );
            })(t, r);
        return v
            ? (0, s.jsx)(O.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: d, className: c })
            : (0, s.jsx)(eN, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: E,
                  bytesLeft: j,
                  expanded: f,
                  setExpanded: p,
                  language: m,
                  setLanguage: h,
                  wordWrap: g,
                  setWordWrap: A,
                  renderMarkdown: C,
                  setRenderMarkdown: x,
                  className: i()(eg.mr, c),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var eS = n(863922),
    eb = n(391820),
    eM = n(534890),
    eT = n(442433),
    ew = n(640708),
    eL = n(941971),
    eR = n(707539),
    ek = n(576705),
    eD = n(218461),
    eO = n(340833),
    eP = n(913642),
    eU = n(661191),
    eB = n(780061);
n(321073);
var eF = n(97808),
    eH = n(778712),
    eV = n(707606),
    eG = n(403362),
    ez = n(439511);
let eW = (0, eV.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, s.jsx)("div", { className: ez.pO })
            : (0, s.jsx)("div", {
                  className: ez.pO,
                  children: (0, s.jsx)(eF.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eH._3.SIZE_16,
                      className: ez.pO,
                  }),
              });
    }),
    eK = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: a = 2, guildId: r } = e,
            { totalSize: i, knownSize: o } = t;
        if (i < l) return null;
        let u = c()(n)
                .filter(eG.Vq)
                .take(a)
                .map((e) => (0, s.jsx)(eW, { member: e, guildId: r }, e.id))
                .value(),
            d = i - o;
        for (let e = 0; e < d && u.length < a; e++)
            u.push((0, s.jsx)(eW, { empty: !0, guildId: r }, `empty-member-${e}`));
        let m = Math.max(Math.min(i - u.length, 99), 0);
        if (1 === m) {
            let e = n[a];
            u.push((0, s.jsx)(eW, { member: e, guildId: r }, e.id));
        }
        return (0, s.jsx)("div", {
            className: ez.iE,
            children: (0, s.jsxs)("div", {
                className: ez.S3,
                children: [u, m > 1 ? (0, s.jsxs)("div", { className: ez.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var eY = n(303727),
    eq = n(681939);
function e$() {
    return (0, s.jsxs)("div", {
        className: eq.kL,
        children: [
            (0, s.jsxs)("div", {
                className: eq.zc,
                children: [
                    (0, s.jsx)("div", {
                        className: eq.Kk,
                        children: (0, s.jsx)(x.TopicsIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: eq.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, s.jsx)(eY.A, { className: eq.uf }),
                ],
            }),
            (0, s.jsx)(E.D, {
                className: eq.wx,
                variant: "heading-xl/semibold",
                children: ed.intl.string(ed.t.yJHJei),
            }),
            (0, s.jsx)(m.E, {
                className: eq.Qq,
                color: "text-default",
                variant: "body-md/normal",
                children: ed.intl.string(ed.t.p2dIh6),
            }),
        ],
    });
}
var eQ = n(652215),
    eZ = n(670455),
    eJ = n(750557);
function eX(e) {
    let { summary: t, channel: l, members: r, guildId: i, unread: o, onClick: c } = e,
        [u, h] = a.useState(!1),
        f = (0, eR.aK)(eU.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([eb.A], () => eb.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, eB.A)({ summary: t, channel: l, rating: n }));
    }
    let C = ek.A.can(eQ.xBc.MANAGE_MESSAGES, l);
    return (0, s.jsxs)(A.D, {
        className: eJ.kL,
        onClick: c,
        onContextMenu: function (e) {
            C &&
                (0, eT.L3)(e, async () => {
                    let { default: e } = await n.e(443921).then(n.bind(n, 304232));
                    return (n) => (0, s.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, s.jsx)(eL.A, { hovered: u, unread: o, className: eJ.dM }),
            (0, s.jsx)("div", {
                className: eJ.uV,
                children: (0, s.jsxs)("div", {
                    className: eJ.Hw,
                    children: [
                        (0, s.jsx)(m.E, {
                            className: eJ.vE,
                            color: "interactive-text-default",
                            variant: "body-xs/normal",
                            children: f,
                        }),
                        (0, s.jsx)(ew.A, { height: 4, width: 4, "aria-hidden": "true", className: eJ.Om }),
                        (0, s.jsx)(eM.ChatIcon, { size: "xxs", color: "currentColor", className: eJ.Kk }),
                        (0, s.jsx)(m.E, {
                            className: eJ.U9,
                            color: "interactive-text-default",
                            variant: "body-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(ew.A, { height: 4, width: 4, "aria-hidden": "true", className: eJ.Om }),
                                    (0, s.jsx)(eK, {
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
                null == p &&
                (0, s.jsxs)("div", {
                    className: eJ.p_,
                    children: [
                        (0, s.jsx)(A.D, {
                            onClick: (e) => g(e, eZ.P0.GOOD),
                            children: (0, s.jsx)(eP.A, { className: eJ.O1, width: 12, height: 12 }),
                        }),
                        (0, s.jsx)(A.D, {
                            onClick: (e) => g(e, eZ.P0.BAD),
                            children: (0, s.jsx)(eO.A, { className: eJ.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, s.jsx)(m.E, { color: "text-strong", variant: "body-sm/semibold", className: eJ.DD, children: t.topic }),
            (0, s.jsx)(m.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: eJ.VA,
                children: t.summShort,
            }),
        ],
    });
}
function e0(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: i } = e,
        o = (0, d.bG)([eD.Ay], () => eD.Ay.getOldestUnreadMessageId(l.id)),
        c = a.useCallback(
            (e) => {
                (r(e), i(!1));
            },
            [r, i],
        );
    return t.length < 1
        ? (0, s.jsx)(e$, {})
        : (0, s.jsx)(s.Fragment, {
              children: t.map((e, t) => {
                  let a = n[t] ?? [];
                  return (0, s.jsx)(
                      eX,
                      {
                          summary: e,
                          channel: l,
                          members: a,
                          guildId: l.guild_id,
                          unread: null != o && eU.default.compare(e.endId, o) > 0,
                          onClick: () => c(t),
                      },
                      t,
                  );
              }),
          });
}
var e1 = n(253932),
    e3 = n(113494),
    e2 = n(782134),
    e5 = n(775602),
    e6 = n(73153),
    e4 = n(713021),
    e7 = n(527388),
    e9 = n(20504),
    e8 = n(188567),
    te = n(927813),
    tt = n(824744),
    tn = n(408822),
    tl = n(518950),
    ts = n(672245);
let ta = a.lazy(() => n.e(594436).then(n.bind(n, 660207)));
function tr(e) {
    let { played: t, duration: n, currentTime: l } = e,
        a = null == n ? "--:--" : t ? (0, H.rB)(Math.ceil(n - l)) : (0, H.rB)(Math.ceil(n));
    return (0, s.jsx)(m.E, { variant: "body-sm/normal", className: ts.p0, tabularNumbers: !0, children: a });
}
let ti = a.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: r,
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
        j = a.useMemo(() => (null != x ? e4.Ay.getPlaybackPosition(x) : 0), [x]),
        v = (0, d.bG)([e4.Ay], () => e4.Ay.getPlaybackRate(e4.k0.VOICE_MESSAGE)),
        [_, N] = a.useState(j > 0),
        [y, I] = a.useState(j),
        [S, b] = a.useState(u),
        [M, T] = a.useState(!1),
        [w, L] = a.useState(!1),
        [R, k] = a.useState(!1),
        [D, O] = a.useState(!1),
        [P, U] = a.useState("none"),
        [B, F] = a.useState(() => ("function" == typeof l ? l() : l)),
        H = a.useRef(void 0),
        V = a.useCallback(() => {
            (L((e) => !e), O(!0));
        }, []),
        G = a.useCallback(() => {
            U("metadata");
        }, []),
        z = a.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || b(t);
        }, []),
        W = a.useCallback(
            (e) => {
                null != u &&
                    null != x &&
                    e6.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: x, position: e, duration: u });
            },
            [x, u],
        ),
        K = a.useCallback(() => {
            (L(!1),
                null == H.current &&
                    (H.current = setTimeout(() => {
                        (N(!1), O(!1), (H.current = void 0));
                    }, 500)));
        }, []),
        Y = a.useCallback(() => {
            R || (W(0), K());
        }, [K, R, W]),
        q = a.useCallback((e) => {
            let t = E.current;
            null != t && (I(e), (t.currentTime = e), N(!0));
        }, []),
        $ = a.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            C?.(t);
        }, [C]),
        Q = a.useCallback(
            (e) => {
                let t = (0, tt.w)(e, 1);
                (T(0 === t), F(t), r?.(t));
            },
            [r],
        ),
        Z = a.useCallback(() => {
            (T(!M), o?.(!M));
        }, [M, o]),
        J = a.useCallback(() => {
            k(!0);
        }, []),
        X = a.useCallback(() => {
            (k(!1), y === S && K(), W(y));
        }, [y, S, K, W]),
        ee = a.useCallback(
            (e) => {
                let t = E.current;
                null == S || null == t || (q(e * S), clearTimeout(H.current), (H.current = void 0));
            },
            [S, q],
        );
    a.useEffect(() => {
        !_ && w && N(!0);
    }, [w, _]);
    let et = a.useRef(null),
        en = { played: D, currentTime: y, onPause: g, onPlay: p },
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
                w &&
                    !R &&
                    (e = setInterval(() => {
                        W(E.current?.currentTime ?? 0);
                    }, te.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [w, R, W]),
        a.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || w)
                if (w) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * te.A.Millis.SECOND));
                else {
                    let e = performance.now(),
                        l = et.current;
                    (n?.(t, null != l ? (e - l) / 1e3 : 0), W(t), (et.current = null));
                }
        }, [w, n, S, W]),
        a.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = E.current;
                    null == n || (I(n.currentTime), w && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, w, I]),
        a.useEffect(() => {
            if (w)
                return (
                    e8._.dispatch(eQ.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e8._.subscribe(eQ.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e8._.unsubscribe(eQ.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && L(!1);
            }
        }, [n, w, L]));
    let es = w ? e3.PauseIcon : e2.PlayIcon,
        ea = w ? ed.intl.string(ed.t["3XohGn"]) : ed.intl.string(ed.t.AlHqHT),
        er = ed.intl.formatToPlainString(ed.t.LgCPMt, { playbackRate: v }),
        ei = `${v.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, s.jsx)(a.Suspense, {
                  children: (0, s.jsx)(ta, {
                      ref: E,
                      className: ts.Zn,
                      src: n,
                      preload: P,
                      playing: w && !R,
                      onEnded: Y,
                      onLoadedMetadata: z,
                      onError: $,
                      muted: M,
                      volume: B,
                      playbackRate: v,
                  }),
              })
            : (0, s.jsx)(e7.A, {
                  ref: E,
                  className: ts.Zn,
                  controls: !1,
                  preload: P,
                  onEnded: Y,
                  onLoadedMetadata: z,
                  onError: $,
                  muted: M,
                  volume: B,
                  playbackRate: v,
                  playing: w && !R,
                  children: (0, s.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([e5.Ay], () => e5.Ay.useReducedMotion);
    return (0, s.jsxs)("div", {
        className: i()(ts.kL, { [ts.he]: w }),
        onMouseEnter: G,
        role: "region",
        "aria-label": ed.intl.string(ed.t.c8U6xd),
        children: [
            (0, s.jsx)("div", {
                className: ts.Kl,
                children: (0, s.jsx)("div", { className: i()(ts.fq, { [ts.VN]: eo }) }),
            }),
            (0, s.jsx)(A.D, {
                className: ts.k0,
                onClick: V,
                "aria-label": ea,
                children: (0, s.jsx)(es, { className: ts.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, s.jsx)(tn.A, {
                className: ts.ou,
                waveform: c,
                currentTime: y,
                duration: S ?? 1,
                playing: w,
                played: _,
                onDrag: ee,
                onDragStart: J,
                onDragEnd: X,
            }),
            (0, s.jsx)(tr, { played: _, currentTime: y, duration: S }),
            (0, s.jsx)(A.D, {
                className: ts.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (tl.CA.indexOf(v) + 1) % tl.CA.length),
                        void ((e = tl.CA[n]),
                        (t = e4.k0.VOICE_MESSAGE),
                        e6.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, s.jsx)(m.E, { variant: "body-xs/semibold", className: ts.Sn, children: ei }),
            }),
            (0, s.jsx)(e9.A, {
                className: ts.bk,
                iconClassName: ts._j,
                iconColor: "currentColor",
                sliderWrapperClassName: ts.MQ,
                muted: M,
                value: (0, tt.M)(B, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: Q,
                onToggleMute: Z,
                onVolumeShow: h,
                onVolumeHide: f,
            }),
            t,
        ],
    });
});
var to = n(287809),
    tc = n(147925),
    tu = n(129230),
    td = n(587481),
    tm = n(838541),
    th = n(521732),
    tf = n(650583),
    tp = n(959760);
function tg(e) {
    return (t) => {
        (e?.(t), (0, td.ls)(t));
    };
}
function tA(e) {
    return (t) => {
        (e?.(t), (0, td.y5)(t));
    };
}
function tC(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, s.jsxs)("div", {
        role: "dialog",
        "aria-label": ed.intl.string(ed.t.fSiQ3A),
        className: tp.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tf.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, s.jsx)(m.E, {
                variant: "body-xs/semibold",
                color: "none",
                tag: "span",
                className: tp.k_,
                children: ed.intl.string(ed.t.fSiQ3A),
            }),
            (0, s.jsx)(m.E, { variant: "body-md/normal", color: "none", tag: "span", className: tp.a7, children: t }),
        ],
    });
}
function tx(e) {
    let { alt: t, disableAltTextDisplay: n = !1, hiddenSpoilers: l = !1 } = e;
    return !n && e1._z.getSetting() && null != t && "" !== t && !l;
}
function tE(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: r = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [c, u] = a.useState(!1),
        d = a.useRef(null);
    return (n || c) && null != t && tx({ alt: t, disableAltTextDisplay: l, hiddenSpoilers: r })
        ? (0, s.jsx)("div", {
              className: tp.NO,
              children: (0, s.jsx)(h.Y, {
                  targetElementRef: d,
                  animation: h.Y.Animation.FADE,
                  renderPopout: () => (0, s.jsx)(tC, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ed.intl.string(ed.t.fSiQ3A),
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              className: i()(tp.DV, { [tp.yZ]: !0, [tp.I5]: o }),
                              children: ed.intl.string(ed.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tj(e) {
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
            mediaLayoutType: f,
            reducedSizeAltTextButton: p,
            ...g
        } = e,
        A = tg(t),
        C = tA(n);
    ((l = null == l ? td.v1 : l), (r = null == r ? td.uj : r));
    let [x, E] = a.useState(!0),
        j = f === tm.d.MOSAIC || !0 === h,
        v = x && !u && e1._z.getSetting() && null != i && "" !== i && !0 !== d;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            (0, s.jsx)(G.A, {
                ...g,
                alt: i,
                autoMute: r,
                mediaLayoutType: f,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: C,
                onVolumeChange: A,
                renderLinkComponent: tI,
                renderOverlayContent: c,
                volume: l,
            }),
            null != o && o(),
            j &&
                (0, s.jsx)(tE, {
                    alt: i,
                    controlsVisible: x,
                    disableAltTextDisplay: u,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: p,
                }),
            !j &&
                v &&
                (0, s.jsx)(m.E, {
                    variant: "body-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tp.R5,
                    children: i,
                }),
        ],
    });
}
function tv(e) {
    return (0, s.jsx)(tj, { ...e });
}
function t_(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: r,
            onVolumeHide: i,
            renderAdjacentContent: o,
            ...c
        } = e,
        u = tg(t),
        d = tA(l);
    return (
        (n = null == n ? td.v1 : n),
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
                    renderLinkComponent: tI,
                }),
                null != o && o(),
            ],
        })
    );
}
function tN(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...a } = e,
        r = tg(t),
        i = tA(l);
    return ((n = null == n ? td.v1 : n), (0, s.jsx)(ti, { ...a, onVolumeChange: r, onMute: i, volume: n }));
}
function ty(e) {
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
            mosaicStyleAlt: g,
        } = e,
        A = d === tm.d.MOSAIC || !0 === g,
        C = !c && e1._z.getSetting() && null != t && "" !== t && !0 !== n,
        x = a.createRef();
    return (0, s.jsxs)("div", {
        className: i()(tp.fo, r),
        children: [
            (0, s.jsxs)("div", {
                className: i()(tp.ZS, o),
                style: p,
                children: [(0, s.jsx)(L, { ...e }), null != l && l()],
            }),
            A &&
                C &&
                (0, s.jsx)("div", {
                    className: tp.Y1,
                    children: (0, s.jsx)(h.Y, {
                        targetElementRef: x,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, s.jsx)(tC, { altText: t, altButtonRef: x }),
                        children: (e) =>
                            (0, s.jsx)(f.vN, {
                                offset: 4,
                                children: (0, s.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: x,
                                    "aria-label": ed.intl.string(ed.t.fSiQ3A),
                                    className: i()(tp.DV, { [tp.I5]: u }),
                                    children: ed.intl.string(ed.t.jCV1Tz),
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
                    className: tp.R5,
                    children: t,
                }),
        ],
    });
}
function tI(e) {
    return (0, s.jsx)(R.A, { ...e });
}
function tS(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, s.jsxs)(a.Fragment, { children: [(0, s.jsx)(eI, { ...n }), null != t && t()] });
}
function tb(e) {
    return (0, s.jsx)(O.A, { ...e });
}
var tM = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tT = (e) => {
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
                      className: i()(tp.Sg, l),
                      children: [
                          (0, s.jsx)("div", {
                              className: tp.$I,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ed.intl.string(ed.t["4EvBbw"]);
                                      case 1:
                                          return ed.intl.string(ed.t["1J6Xq7"]);
                                      default:
                                          return (0, eG.xb)(e);
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
                                                    return ed.intl.string(ed.t.gpoQsB);
                                                case 1:
                                                    return ed.intl.string(ed.t.k3RM8z);
                                                default:
                                                    return (0, eG.xb)(e);
                                            }
                                        })(t),
                                        onClick: a,
                                    }),
                                })
                              : (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tp.u1,
                                    itemClassName: tp.$N,
                                }),
                      ],
                  }),
    });
};
function tw(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, s.jsx)(P.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, s.jsxs)(A.D, {
                      className: i()(tp._5, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, s.jsx)("div", { className: tp.$I, children: ed.intl.string(ed.t["1zUvlw"]) }),
                          n
                              ? (0, s.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tp.u1,
                                    itemClassName: tp.$N,
                                })
                              : (0, s.jsx)("div", {
                                    className: i()(tp.hQ, tp.d3),
                                    children: ed.intl.string(ed.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tL(e) {
    let { content: t, channelId: n } = e,
        [l] = a.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = a.useCallback(() => {
            let e = eD.Ay.ackMessageId(n);
            null != e
                ? _.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: n,
                      messageId: eU.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = a.useCallback(() => {
            (0, N.I_)(n, {
                section: eQ.JJy.NEW_MESSAGES_BANNER,
                object: eQ.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eQ.btD.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = a.useContext(P.Y);
    return c
        ? null
        : (0, s.jsxs)("div", {
              className: i()(tp.eb, { [tp.y7]: c }),
              children: [
                  (0, s.jsx)(f.vN, {
                      offset: 4,
                      children: (0, s.jsx)("button", {
                          type: "button",
                          className: tp.$I,
                          onClick: r,
                          "aria-label": ed.intl.string(ed.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, s.jsx)("span", { id: l, className: tp.Ln, children: t }),
                      }),
                  }),
                  (0, s.jsx)("div", {
                      className: tp._o,
                      children: (0, s.jsx)(f.vN, {
                          offset: 4,
                          children: (0, s.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tp.hQ,
                              children: [
                                  (0, s.jsx)("span", { className: tp.vE, children: ed.intl.string(ed.t.e6RscS) }),
                                  (0, s.jsx)(C.ChatCheckIcon, { size: "md", color: "currentColor", className: tp.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tR(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = a.useContext(P.Y),
        [o, h] = a.useState(null),
        f = a.useRef(null),
        [p, g] = a.useState(null),
        y = a.useRef(null),
        I = (0, d.yK)([eb.A], () => eb.A.summaries(t.id) ?? [], [t]),
        S = (0, D.Ay)(I);
    a.useEffect(() => {
        c().isEqual(S, I) ||
            tu.default.track(eQ.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: I.length,
                message_counts: I.map((e) => e.count),
                start_message_ids: I.map((e) => e.startId),
                end_message_ids: I.map((e) => e.endId),
                num_participants: I.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [I, S, t.guild_id, t.id, t.type]);
    let b = (0, d.bG)(
            [to.default],
            () => I?.map((e) => e.people?.map((e) => to.default.getUser(e) ?? null).filter(eG.Vq)) ?? [],
            [I],
            tk,
        ),
        M = (0, d.bG)([eb.A], () => eb.A.visibleSummaryIndex()) ?? -1,
        T = I?.[M]?.topic;
    null == T && null == o && I?.length >= 1 && (T = I[0]?.topic);
    let w = a.useMemo(
            () =>
                c().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        L = a.useMemo(
            () =>
                c().throttle(
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
                (L(), w(e));
            },
            [w, L],
        ),
        [O, U] = a.useState(!1),
        F = a.useCallback(() => {
            (tu.default.track(eQ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : th.eh.PILL_DROPDOWN,
                    s = I[e];
                null != s &&
                    ((0, eS.sK)(t.id, s.id),
                    (0, eS.C6)(t.id, s.id),
                    l.removeAutomaticAnchorCallback(R),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(R, !1);
                            }, 100));
                    }),
                    tu.default.track(eQ.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: s.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    _.A.jumpToMessage({
                        channelId: t.id,
                        messageId: s.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [I, t, R, l],
        ),
        V = a.useCallback((e) => {
            U(e);
            let t = y.current?.scrollTop;
            null != t && g(t);
        }, []);
    a.useEffect(() => {
        null != p && O && y.current?.scrollTo({ top: p });
    }, [p, O]);
    let G = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && f.current?.contains(e.target)) ||
                (O &&
                    tu.default.track(eQ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                V(!1));
        },
        [O, I, t, V],
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
            (0, eS.$T)(t.id);
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
            () => (0, s.jsx)(e0, { channel: t, summaries: I, summariesMembers: b, selectTopic: H, setOpen: V }),
            [I, b, H, V, t],
        ),
        W = a.useCallback(() => {
            let e = eD.Ay.ackMessageId(t.id);
            null != e
                ? _.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eU.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        K = a.useCallback(() => {
            (0, N.I_)(t.id, {
                section: eQ.JJy.NEW_TOPICS_BAR,
                object: eQ.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eQ.btD.ACK_MANUAL,
            });
        }, [t.id]),
        Y = ed.intl.string(ed.t["38qwgO"]);
    return (
        I.length > 0 && (Y = "" === T || null == T ? ed.intl.string(ed.t.DwnFuG) : T),
        r
            ? null
            : (0, s.jsxs)("div", {
                  ref: f,
                  className: i()(tp.dw, tp.jh),
                  children: [
                      (0, s.jsx)("div", {
                          className: tp.qm,
                          children: (0, s.jsx)(A.D, {
                              className: tp.TQ,
                              "aria-label": ed.intl.string(ed.t.RT3MPz),
                              onClick: F,
                              children: (0, s.jsxs)("div", {
                                  className: i()({ [tp.hN]: !O, [tp.Ap]: O }),
                                  children: [
                                      (0, s.jsx)(x.TopicsIcon, { size: "xs", color: "currentColor", className: tp.Vd }),
                                      (0, s.jsx)(m.E, {
                                          variant: "body-sm/medium",
                                          className: i()(tp.$U, tp.lc),
                                          children: Y,
                                      }),
                                      (0, s.jsx)(tc.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tc.A.Directions.DOWN,
                                          className: tp.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, s.jsx)(A.D, { onClick: W, className: tp.ij, children: n }),
                      (0, s.jsxs)(A.D, {
                          onClick: K,
                          className: i()(tp.hQ, tp.NX),
                          children: [
                              (0, s.jsx)("div", { className: tp.$U, children: ed.intl.string(ed.t.e6RscS) }),
                              (0, s.jsx)(C.ChatCheckIcon, { size: "md", color: "currentColor", className: tp.t3 }),
                          ],
                      }),
                      O &&
                          (0, s.jsxs)("div", {
                              className: tp.A1,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: tp.ke,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: tp.Ne,
                                              children: [
                                                  (0, s.jsx)(x.TopicsIcon, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tp.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-sm/semibold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(B.A, { className: tp.Zx }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: F,
                                              className: tp.oX,
                                              children: (0, s.jsx)(j.XSmallIcon, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(v.Ip, { ref: y, className: tp.Pe, fade: !0, children: z }),
                              ],
                          }),
                  ],
              })
    );
}
function tk(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tD(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = a.useContext(P.Y),
        [r, o] = a.useState(null),
        h = a.useRef(null),
        [f, p] = a.useState(null),
        g = a.useRef(null),
        C = (0, d.yK)([eb.A], () => eb.A.summaries(t.id) ?? [], [t]),
        N = (0, D.Ay)(C);
    a.useEffect(() => {
        c().isEqual(N, C) ||
            tu.default.track(eQ.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [C, N, t.guild_id, t.id, t.type]);
    let y = (0, d.bG)(
            [to.default],
            () => C?.map((e) => e.people?.map((e) => to.default.getUser(e) ?? null).filter(eG.Vq)) ?? [],
            [C],
            tk,
        ),
        I = (0, d.bG)([eb.A], () => eb.A.visibleSummaryIndex()) ?? -1,
        S = C?.[I]?.topic;
    null == S && null == r && C?.length >= 1 && (S = C[0]?.topic);
    let b = a.useMemo(() => c().get(C, I - 1), [I, C]),
        M = a.useMemo(() => c().get(C, I + 1), [I, C]),
        T = a.useMemo(
            () =>
                c().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        w = a.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, eS.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = a.useCallback(
            (e) => {
                (w(), T(e));
            },
            [T, w],
        ),
        [R, O] = a.useState(!1),
        U = a.useCallback(() => {
            (tu.default.track(eQ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !R,
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                O(!R));
        }, [R, C, O, t]),
        F = a.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : th.eh.PILL_DROPDOWN,
                    s = C[e];
                null != s &&
                    ((0, eS.sK)(t.id, s.id),
                    (0, eS.C6)(t.id, s.id),
                    n.removeAutomaticAnchorCallback(L),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(L, !1);
                            }, 100));
                    }),
                    tu.default.track(eQ.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: l,
                        message_id: s.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    _.A.jumpToMessage({
                        channelId: t.id,
                        messageId: s.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [C, t, L, n],
        ),
        H = a.useCallback(() => {
            F(I - 1, th.eh.PILL_NEXT_ARROW);
        }, [F, I]),
        V = a.useCallback(() => {
            F(I + 1, th.eh.PILL_PREVIOUS_ARROW);
        }, [I, F]),
        G = a.useCallback((e) => {
            O(e);
            let t = g.current?.scrollTop;
            null != t && p(t);
        }, []);
    a.useEffect(() => {
        null != f && R && g.current?.scrollTo({ top: f });
    }, [f, R]);
    let z = a.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (R &&
                    tu.default.track(eQ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                G(!1));
        },
        [R, C, t, G],
    );
    (a.useEffect(
        () => (
            n.addAutomaticAnchorCallback(L),
            () => {
                n.removeAutomaticAnchorCallback(L);
            }
        ),
        [n, L],
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
    let W = a.useMemo(
        () => (0, s.jsx)(e0, { channel: t, summaries: C, summariesMembers: y, selectTopic: F, setOpen: G }),
        [C, y, F, G, t],
    );
    if (!(0, d.bG)([eb.A], () => eb.A.shouldShowTopicsBar())) return null;
    let K = ed.intl.string(ed.t["38qwgO"]);
    return (
        C.length > 0 && (K = "" === S || null == S ? ed.intl.string(ed.t.DwnFuG) : S),
        l
            ? null
            : (0, s.jsxs)("div", {
                  ref: h,
                  className: i()(tp.$T, tp.jh),
                  children: [
                      (0, s.jsxs)("div", {
                          className: tp.sE,
                          children: [
                              (0, s.jsx)(A.D, {
                                  className: tp.LP,
                                  "aria-label": ed.intl.string(ed.t.RT3MPz),
                                  onClick: U,
                                  children: (0, s.jsxs)("div", {
                                      className: i()({ [tp.Nv]: !R, [tp.An]: R }),
                                      children: [
                                          (0, s.jsx)(x.TopicsIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: tp.Np,
                                          }),
                                          (0, s.jsx)(m.E, { className: tp.r1, variant: "body-sm/medium", children: K }),
                                          (0, s.jsx)(tc.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tc.A.Directions.DOWN,
                                              className: tp._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: tp.Yk,
                                  children: [
                                      (0, s.jsx)(A.D, {
                                          "aria-label": ed.intl.string(ed.t["4huCnC"]),
                                          onClick: V,
                                          className: i()(tp.ZM, tp.vz, { [tp.jf]: null == M }),
                                          children: (0, s.jsx)(tc.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tc.A.Directions.UP,
                                          }),
                                      }),
                                      (0, s.jsx)(A.D, {
                                          "aria-label": ed.intl.string(ed.t["58KOoF"]),
                                          onClick: H,
                                          className: i()(tp.ZM, tp.mt, { [tp.jf]: null == b }),
                                          children: (0, s.jsx)(tc.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tc.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      R &&
                          (0, s.jsxs)("div", {
                              className: tp.A1,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: tp.ke,
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: tp.Ne,
                                              children: [
                                                  (0, s.jsx)(x.TopicsIcon, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tp.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, s.jsx)(E.D, {
                                                      variant: "heading-sm/semibold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, s.jsx)(B.A, { className: tp.Zx }),
                                              ],
                                          }),
                                          (0, s.jsx)(A.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: U,
                                              className: tp.oX,
                                              children: (0, s.jsx)(j.XSmallIcon, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(v.Ip, { ref: g, className: tp.Pe, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.jsxs)("div", {
        className: tp.YL,
        children: [
            (0, s.jsx)(m.E, {
                color: "none",
                variant: "body-sm/semibold",
                lineClamp: 1,
                className: tp.Ld,
                children: e,
            }),
            t &&
                (0, s.jsx)(m.E, {
                    className: tp.$o,
                    color: "text-muted",
                    variant: "body-sm/normal",
                    children: ed.intl.string(ed.t["515vjG"]),
                }),
        ],
    });
}
