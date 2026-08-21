"use strict";
n.d(t, { Jd: () => n7, Ay: () => n4, h9: () => n2, bG: () => n1 });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(837381),
    o = n(681154),
    u = n(17928),
    c = n(922016),
    d = n(939249),
    h = n(442433),
    m = n(775602),
    f = n(941726),
    p = n(963307),
    g = n(287809),
    x = n(947593),
    A = n(468581),
    C = n(808666),
    E = n(821609),
    I = n(414499),
    y = n(323384),
    v = n(55730),
    S = n(765379),
    N = n(146779),
    _ = n(284525),
    T = n(793574),
    j = n(482030),
    b = n(627363),
    R = n(773669),
    O = n(403362),
    M = n(562153),
    L = n(939341),
    w = n(576757),
    k = n(583846);
n(321073);
var P = n(284009),
    D = n.n(P),
    U = n(989349),
    G = n.n(U),
    V = n(379834);
n(587895);
let F =
    "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
n(654107);
var H = n(583954),
    B = n(626584);
try {
    n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {}
let W = new B.A("AssetMap");
async function K(e) {
    let t = new z(),
        n = Object.entries(e).map((e) => {
            let [n, l] = e;
            return t.loadRemoteImage(n, l).catch((e) => W.warn("Failed to load canvas asset", e, n, l));
        });
    return await Promise.all(n), t;
}
class z {
    assets = {};
    fontManager;
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(e, t) {
        let n = new Image();
        return (n.src = t), (n.crossOrigin = "anonymous"), await n.decode(), (this.assets[e] = n), Promise.resolve();
    }
    get(e) {
        return this.assets[e];
    }
    has(e) {
        return null != this.assets[e];
    }
}
class Z {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        D()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return D()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
    }
}
try {
    n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {}
async function Y(e) {
    let { assetsToLoad: t, drawImage: l, exportConfigs: i } = e,
        s = await K(t);
    await s.loadFonts();
    {
        let e = n(765270).A,
            t = n(684266).A,
            r = document.createElement("canvas"),
            a = new Z(new e(r, s), new t());
        l(a.canvas);
        let o = await a.export(i);
        return r.remove(), o;
    }
}
var q = n(927813),
    J = n(935208),
    $ = n(140651);
let X =
        "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
    Q =
        "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
    ee =
        "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
    et =
        "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
    en =
        "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
    el =
        "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
    ei =
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
    es =
        "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
    er = ["gg sans", "sans-serif"];
function ea(e) {
    let t,
        { canvas: n, badges: l, startPosition: i, maxWidth: s } = e;
    for (let { iconPath: e, text: r } of (n.setFont({ size: 12, family: er, weight: 500, truncate: H.Kq.None }), l)) {
        let l = null != t ? t.w + t.x + 12 : i,
            a = null != t ? t.w + t.x + 12 + 18 : i + 18;
        n.drawPath(e, { x: l, y: 88 }, !0, 0.6), (t = n.drawText(r, { x: a, y: 99, w: s }, !0));
    }
}
function eo(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: l, y: i },
        avatarImageSize: s,
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect({ x: l + (e + 1) * (s - 8) - 2, y: i - 1, w: s + 2, h: s + 2 }, s / 2, !0),
            t.drawRoundedImage(n[e], { x: l + e * (s - 8), y: i }, { w: s, h: s }, 50, { fillMode: H.VZ.Cover }),
            t.restoreContext();
}
var eu = n(375708);
async function ec(e) {
    let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: i, timestamp: s, colors: r, channelId: a } = e,
        o = n.extra.activity_name,
        u = {
            AvatarImage1: l[0],
            ...(null != l[1] && { AvatarImage2: l[1] }),
            ...(null != l[2] && { AvatarImage3: l[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await Y({
        assetsToLoad: u,
        drawImage: (e) =>
            (function (e, t) {
                let { timestamp: n, colors: l, description: i, entry: s, numAvatars: r } = t,
                    a = l.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(a, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === H.uS.Failure &&
                        e.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    eo({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, r),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: er, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(i, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    ea({
                        canvas: e,
                        badges: (function (e, t) {
                            let n = [{ iconPath: X, text: t }],
                                l = J.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= G()().diff(G()(l), "days") &&
                                    n.push({ iconPath: es, text: eu.intl.string(eu.t.vYuyWf) }),
                                (0, k.Rf)(e) && n.push({ iconPath: Q, text: eu.intl.string(eu.t.keY6mW) }),
                                (0, k.BZ)(e))
                            ) {
                                let t = (0, k.iy)(e);
                                n.push({
                                    iconPath: el,
                                    text: eu.intl.formatToPlainString(eu.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, k.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: ei, text: eu.intl.string(eu.t.kAlUsy) });
                            let i = (0, k.KH)(e);
                            if ((null != i && n.push({ iconPath: en, text: (0, k.us)(i) }), (0, k.L7)(e))) {
                                let { text: t } = (0, k.Pj)(e);
                                null != t && n.push({ iconPath: ee, text: t });
                            }
                            if ((0, k.uw)(e)) {
                                let t = (0, k.ty)(e);
                                if (null != t) {
                                    let e = eu.intl.formatToPlainString(eu.t.C0AxoR, {
                                        hours: Math.round(t / q.A.Seconds.HOUR),
                                    });
                                    return [{ iconPath: et, text: `${eu.intl.string(eu.t["/50eHi"])} \u{2014} ${e}` }];
                                }
                            }
                            return n;
                        })(s, n),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            })(e, { timestamp: s, colors: r, description: i, entry: n, numAvatars: l.length }),
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${o}.png`.toLowerCase(),
            fileType: "png",
            channelId: a,
        },
    });
}
var ed = n(506326),
    eh = n(503698),
    em = n.n(eh);
n(333007);
var ef = n(554146),
    ep = n(661531),
    eg = n(342952),
    ex = n(315710),
    eA = n(43990),
    eC = n(866665),
    eE = n(276293),
    eI = n(935063),
    ey = n(789645),
    ev = n(778712),
    eS = n(696986),
    eN = n(297264),
    e_ = n(834730),
    eT = n(320448),
    ej = n(97808),
    eb = n(738188),
    eR = n(983851),
    eO = n(31300),
    eM = n(308528),
    eL = n(367513),
    ew = n(730852),
    ek = n(401843),
    eP = n(969151),
    eD = n(736653),
    eU = n(355622),
    eG = n(408018),
    eV = n(273754),
    eF = n(375499),
    eH = n(429433),
    eB = n(95701),
    eW = n(652215),
    eK = n(324688);
let ez = (0, eB.createChannelRecord)({ id: "1", type: eW.rbe.DM });
function eZ(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: r = !1,
            renderAttachButton: a,
            autoFocus: o = !0,
            onFocus: u,
            channel: c,
            className: d,
        } = e,
        [h, m] = i.useState(""),
        [f, p] = i.useState((0, eG.x7)("")),
        g = eU.oU.ATOMIC_REACTOR_REPLY_INPUT,
        x = i.useRef(null);
    return (0, l.jsx)(eV.Ay, {
        ref: x,
        placeholder: t,
        editorClassName: d,
        className: em()(eK.N8, d),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: c ?? ez,
        onChange: (e, t, n) => {
            m(t), p(n);
        },
        type: r ? { ...g, emojis: { button: !0 } } : g,
        textValue: h,
        richValue: f,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), m(""), p((0, eG.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: o,
        onFocus: u,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == x.current) return "top";
            let e = x.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: a,
    });
}
function eY(e) {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        r = (0, eD.Ay)(),
        [a, o] = i.useState(!1),
        u = i.useRef(null),
        d = i.useRef(null);
    return (
        (t = () => o(!1)),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && t();
            }
            function n(e) {
                null != e.target && (u?.current?.contains(e?.target) || t());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, u]),
        (0, l.jsx)(c.Y, {
            targetElementRef: d,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(eA.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: u,
                            children: (0, l.jsx)(eH.C, {
                                messageId: eW.dJq,
                                channel: ez,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: l, isBurst: i } = e;
                                    null != t && (n({ emoji: t, willClose: l, isBurst: i }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(eC.m, {
                    text: eu.intl.string(eu.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: d,
                        className: eK.mJ,
                        children: (0, l.jsx)(eF.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                s?.(), o(!0);
                            },
                        }),
                    }),
                }),
        })
    );
}
var eq = n(47167),
    eJ = n(262763),
    e$ = n(402216),
    eX = n(268218),
    eQ = n(826673),
    e0 = n(822123),
    e1 = n(643501),
    e2 = n(409626),
    e3 = n(692969),
    e5 = n(279250),
    e8 = n(607407),
    e6 = n(548118),
    e7 = n(499211),
    e4 = n(378570),
    e9 = n(832163),
    te = n(565688),
    tt = n(533562),
    tn = n(296704),
    tl = n(805901),
    ti = n(565645);
n(915089);
var ts = n(713517);
n(267889);
var tr = n(7584);
n(850992), n(690521), n(806931);
var ta = n(307731);
n(650583);
var to = n(866780);
function tu(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: r } = e,
        a = i.useRef(null),
        o = (0, ts.M)(a);
    return (0, l.jsx)("span", {
        ref: a,
        children: (0, l.jsx)(d.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(tl.c, {
                config: eF.B,
                from: { value: 0 },
                to: { value: +!!o },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(tn.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(ti.A, {
                            className: em()(to.Zg, r, { [to.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
ta.EmojiIntention.CHAT,
    [
        tr.Ay.getByName("thumbsup"),
        tr.Ay.getByName("eyes"),
        tr.Ay.getByName("laughing"),
        tr.Ay.getByName("watermelon"),
        tr.Ay.getByName("fork_and_knife"),
        tr.Ay.getByName("yum"),
    ].filter(O.Vq);
var tc = n(636585),
    td = n(734057),
    th = n(71393),
    tm = n(576705),
    tf = n(994500),
    tp = n(543465),
    tg = n(977997),
    tx = n(607567),
    tA = n(174459),
    tC = n(486020),
    tE = n(20805),
    tI = n(22869),
    ty = n(623671),
    tv = n(428249),
    tS = n(327098),
    tN = n(202195),
    t_ = n(43105),
    tT = n(131607),
    tj = n(49999),
    tb = n(345394);
let tR = function (e) {
    let { children: t } = e,
        [n, s] = (0, tT.kn)([ef.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let u = i.useCallback(() => {
        s(tj.i.USER_DISMISS);
    }, [s]);
    return n !== ef.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(t_.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: u,
                      position: "left",
                      title: eu.intl.string(eu.t.V5y3qZ),
                      body: eu.intl.string(eu.t.eSDHDk),
                      graphic: { type: "image", src: tb.A },
                  }),
              ],
          });
};
var tO = n(315246),
    tM = n(866323),
    tL = n(857250),
    tw = n(97483),
    tk = n(289873),
    tP = n(339190),
    tD = n(655214);
function tU() {
    return (0, l.jsxs)("div", {
        className: tD.oR,
        children: [
            (0, l.jsx)(tk.y, { type: tk.t.SPINNING_CIRCLE_SIMPLE, className: tP.S }),
            (0, l.jsx)(e_.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: eu.intl.string(eu.t["5z/hlE"]),
            }),
        ],
    });
}
let tG = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, u.bG)([m.Ay], () => m.Ay.useReducedMotion),
        r = (0, tM.p)(
            t,
            {
                from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: r(
            (e, t) =>
                t &&
                (0, l.jsx)(tn.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(tL.y, {
                              message: eu.intl.string(eu.t.fjcCk5),
                              type: tw.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(tL.y, {
                              message: "",
                              type: tw.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(tU, {}) },
                          }),
                }),
        ),
    });
};
var tV = n(424994),
    tF = n(381941),
    tH = n(699976),
    tB = n(231188);
let tW = (0, eX.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("291103"),
                n.e("774988"),
                n.e("315513"),
                n.e("162775"),
                n.e("60882"),
                n.e("121046"),
                n.e("489020"),
                n.e("919789"),
                n.e("669130"),
                n.e("70866"),
                n.e("802890"),
                n.e("232960"),
                n.e("74886"),
                n.e("19430"),
                n.e("656997"),
                n.e("324732"),
                n.e("414571"),
                n.e("1955"),
                n.e("341161"),
                n.e("401696"),
                n.e("542516"),
                n.e("661630"),
                n.e("349687"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("287353"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("334179"),
                n.e("709976"),
                n.e("807432"),
                n.e("630954"),
                n.e("750955"),
                n.e("28945"),
                n.e("767311"),
                n.e("261204"),
                n.e("25300"),
                n.e("379134"),
                n.e("279774"),
                n.e("175997"),
                n.e("52978"),
                n.e("118686"),
                n.e("410470"),
                n.e("295570"),
                n.e("245726"),
                n.e("711562"),
                n.e("906470"),
                n.e("661157"),
                n.e("730931"),
                n.e("609110"),
                n.e("253781"),
                n.e("132964"),
                n.e("664052"),
                n.e("157064"),
                n.e("831835"),
                n.e("156957"),
                n.e("84194"),
                n.e("471846"),
                n.e("866212"),
                n.e("535308"),
                n.e("867148"),
                n.e("918786"),
                n.e("352421"),
                n.e("865647"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("877223"),
                n.e("448738"),
                n.e("423549"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("836576"),
                n.e("253453"),
                n.e("82937"),
                n.e("531547"),
                n.e("450926"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("641278"),
                n.e("761973"),
                n.e("636909"),
                n.e("466592"),
                n.e("742752"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("919659"),
                n.e("698136"),
                n.e("718368"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("38012"),
                n.e("156422"),
                n.e("762332"),
                n.e("208607"),
                n.e("127962"),
                n.e("161282"),
                n.e("863232"),
                n.e("364827"),
                n.e("907167"),
                n.e("784569"),
                n.e("861060"),
                n.e("910471"),
                n.e("752457"),
                n.e("960235"),
                n.e("77333"),
                n.e("718573"),
                n.e("882082"),
                n.e("413789"),
                n.e("797595"),
                n.e("147662"),
                n.e("344057"),
                n.e("413736"),
                n.e("128504"),
                n.e("331988"),
                n.e("262156"),
                n.e("544571"),
                n.e("234303"),
                n.e("40291"),
                n.e("402368"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("102057"),
                n.e("293159"),
                n.e("755936"),
                n.e("489088"),
                n.e("730760"),
                n.e("994723"),
                n.e("330316"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("188159"),
                n.e("481987"),
                n.e("958038"),
                n.e("171202"),
                n.e("875201"),
                n.e("576909"),
                n.e("406174"),
                n.e("407170"),
                n.e("132191"),
                n.e("27773"),
                n.e("577084"),
                n.e("454625"),
                n.e("371133"),
                n.e("729963"),
                n.e("392075"),
                n.e("76428"),
                n.e("423532"),
                n.e("896137"),
                n.e("790417"),
                n.e("837687"),
                n.e("367022"),
                n.e("699292"),
                n.e("50097"),
                n.e("333184"),
                n.e("348900"),
                n.e("182069"),
                n.e("35485"),
                n.e("446800"),
                n.e("471234"),
                n.e("928662"),
                n.e("306306"),
                n.e("920282"),
                n.e("654282"),
                n.e("77473"),
                n.e("363618"),
                n.e("474439"),
                n.e("880239"),
                n.e("860177"),
                n.e("875016"),
                n.e("228843"),
                n.e("573215"),
                n.e("2329"),
                n.e("523276"),
                n.e("278412"),
                n.e("235996"),
                n.e("476087"),
                n.e("791824"),
                n.e("25279"),
                n.e("628752"),
                n.e("831445"),
                n.e("126931"),
                n.e("488990"),
                n.e("509793"),
                n.e("143549"),
                n.e("11301"),
                n.e("948720"),
                n.e("988003"),
                n.e("710575"),
                n.e("317087"),
                n.e("154630"),
                n.e("142489"),
                n.e("521574"),
                n.e("480112"),
                n.e("959880"),
                n.e("906723"),
                n.e("209729"),
                n.e("174016"),
                n.e("736926"),
                n.e("221856"),
                n.e("855726"),
                n.e("474907"),
                n.e("811133"),
                n.e("946430"),
                n.e("949013"),
                n.e("93461"),
                n.e("190779"),
                n.e("539808"),
                n.e("309763"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    tK = i.createContext(void 0);
function tz(e) {
    let { children: t } = e,
        n = i.useRef(null),
        s = i.useId();
    return (
        (0, ex.tj)(n),
        (0, l.jsx)(tK.Provider, {
            value: s,
            children: (0, l.jsx)("div", {
                ref: n,
                className: tB.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": s,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function tZ(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: a } = (0, $.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${a})`),
        (0, l.jsx)(eA.N, {
            theme: eW.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: em()(tB.ZK, e, i), style: s, children: t }),
        })
    );
}
function tY(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tB.$m, children: t });
}
function tq(e) {
    var t;
    let n,
        s,
        r,
        a,
        { channel: o, user: c, onReaction: h, entry: m, buttons: f = [], header: p, onVoiceChannelPreview: x } = e,
        [A, C] = i.useState(!1),
        [I, y] = i.useState(null),
        v = (0, u.bG)(
            [tm.A],
            () => null != o && eW.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && tm.A.can(eW.xBc.SEND_MESSAGES, o),
        ),
        [S, N] = i.useState(!1),
        [_, T] = i.useState(!1),
        { voiceBar: j, joinVoiceButton: b } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: r, channel: a } = (0, tN.A)(n),
                o = (0, eq.Ay)(a),
                { needSubscriptionToAccess: c } = (0, e7.A)(t?.id),
                h = (0, u.bG)([th.A], () => (null != a ? th.A.getGuild(a.guild_id) : void 0)),
                m = (0, u.yK)([tx.Ay], () => (null != a ? tx.Ay.getVoiceStatesForChannel(a) : []), [a]),
                f = (0, u.bG)([tg.A], () => tg.A.isInChannel(a?.id)),
                p = i.useMemo(() => {
                    for (let e of m) {
                        let t = td.A.getDMFromUserId(e.user.id),
                            n = null != t && tp.Ay.isChannelMuted(null, t),
                            l = tf.A.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [m]);
            if (null == a || null == h) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let g = null != r;
            function x(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(eb.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: tB.vb,
                                  }),
                                  eu.intl.string(eu.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, l.jsx)(
                    eC.m,
                    {
                        "aria-label": i ? eu.intl.string(eu.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: t,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: tB.kP,
                            children: [
                                (0, l.jsx)(x, {
                                    text: eu.intl.string(eu.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: p,
                                    children: (0, l.jsxs)(d.D, {
                                        "aria-label": eu.intl.string(eu.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (eL.A.updateChatOpen(a.id, !0), (0, e4.iN)(a.id), s?.(a));
                                        },
                                        className: tB.I3,
                                        children: [
                                            (0, l.jsx)(e6.Ay, {
                                                guild: h,
                                                size: e6.Ay.Sizes.SMOL,
                                                className: tB.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(eT._, {
                                                size: "xxs",
                                                color: ep.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(eR.H, { size: "xs", color: ep.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(e_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: tB.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(tc.A, {
                                    guildId: h.id,
                                    users: m,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(ej.eu, {
                                            src: e.user.getAvatarURL(h.id, 16),
                                            size: ev._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: tB.V9,
                                            children: (0, l.jsx)(e_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eS.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: f
                    ? null
                    : (0, l.jsx)(x, {
                          hasRestrictedOrMutedVCParticipant: p,
                          children: (0, l.jsx)(E.$, {
                              onClick: function () {
                                  null != a &&
                                      eJ.A.handleVoiceConnect({
                                          channel: a,
                                          connected: f,
                                          needSubscriptionToAccess: c,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: g ? eu.intl.string(eu.t.I6JG46) : eu.intl.string(eu.t.VJlc0S),
                              icon: g ? eO.k : eR.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: m, onVoiceChannelPreview: x }),
        { embeddedActivity: R } = (0, tS.A)(m),
        O =
            ((t = R),
            (n = (0, u.bG)([th.A], () => th.A.getGuild((0, eP.D)(t?.location)))),
            (s = (0, u.bG)([td.A], () => td.A.getChannel((0, eP.H)(t?.location)))),
            (r = (0, u.yK)([g.default], () => t?.participants?.map((e) => g.default.getUser(e.userId)) ?? [])),
            (a = (0, eq.Ay)(s)),
            null != t && null != n && null != s && eB.k3.has(s.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: tB.kP,
                              children: [
                                  (0, l.jsxs)(d.D, {
                                      "aria-label": eu.intl.string(eu.t["W/A4Qp"]),
                                      onClick: () => (0, e4.iN)(s.id),
                                      className: tB.I3,
                                      children: [
                                          (0, l.jsx)(e6.Ay, {
                                              guild: n,
                                              size: e6.Ay.Sizes.SMOL,
                                              className: tB.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(eT._, {
                                              size: "xxs",
                                              color: ep.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(eE.N, { size: "xs", color: ep.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(e_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: tB.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(tc.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(ej.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: ev._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: tB.V9,
                                              children: (0, l.jsx)(e_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eS.h, { size: 16 }),
                      ],
                  })
                : null),
        L = null != b && 0 === f.length ? [b] : f,
        w = L.length > 0,
        k = L.length >= 2,
        [P, U] = i.useState(!w),
        G = M.Ay.getName(o?.guild_id, o?.id, c),
        V = (0, eq.Ay)(o, !0),
        F =
            null != o && A
                ? eu.intl.formatToPlainString(eu.t["8lzR/R"], { channel: V })
                : eu.intl.formatToPlainString(eu.t["4c+CAx"], { channel: `@${G}` }),
        H = A ? eu.intl.string(eu.t.Z2CUgn) : eu.intl.string(eu.t.XLGiTG);
    async function B(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (tA.default.track(eW.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: tV.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, eQ.Dr)(ef.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                T(!1),
                A)
            )
                D()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o);
            else {
                let e = await eM.A.getOrEnsurePrivateChannel(c.id);
                t = td.A.getChannel(e) ?? null;
            }
            return (
                D()(null != t, "Send channel must be defined"),
                K({
                    reply: `:${n.name}:`,
                    sendToChannel: t,
                    onComplete: (e, t) => {
                        T(!0),
                            setTimeout(() => {
                                N(!1), h(e, t);
                            }, 600);
                    },
                    interactionType: tV.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function W(e) {
        let t;
        if (((0, eQ.Dr)(ef.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), A))
            D()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o);
        else {
            let e = await eM.A.openPrivateChannel({ recipientIds: c.id }),
                n = td.A.getChannel(e);
            D()(null != n, "DM channel must be defined"), (t = n);
        }
        let n = t.type === eW.rbe.DM ? tV.PA.DM_REACTION_MESSAGE_SENT : tV.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return K({ reply: e, sendToChannel: t, interactionType: n, onComplete: h, requiresChannelReadiness: !0 });
    }
    async function K(e) {
        let { reply: t, sendToChannel: n, onComplete: l, interactionType: i, requiresChannelReadiness: s } = e;
        I?.focus(),
            await (0, tv.d)({
                channel: n,
                content: t,
                entry: m,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: tF.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            l?.(i, n);
    }
    let z = p ?? j ?? O;
    function Z() {
        C((e) => !e), P && I?.focus();
    }
    function Y(e) {
        U(e), e && I?.focus();
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: S ? "none" : "all" },
        children: [
            (0, l.jsx)(tG, { sent: _, shown: S, className: tB.Jt }),
            z ??
                (0, l.jsx)(tR, {
                    children: (0, l.jsxs)("div", {
                        className: tB.T7,
                        children: [
                            (0, l.jsx)(tJ, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(eY, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: P ? tB.P2 : tB.VE,
                children: [
                    (0, l.jsx)(eZ, {
                        placeholder: F,
                        onEnter: W,
                        setEditorRef: (e) => y(e),
                        channel: A ? o : void 0,
                        showEmojiButton: null != z,
                        className: tB.N8,
                        autoFocus: !1,
                        renderAttachButton: v
                            ? () =>
                                  (0, l.jsx)(eC.m, {
                                      text: H,
                                      children: (0, l.jsx)(d.D, {
                                          className: tB.wD,
                                          onClick: Z,
                                          children: A
                                              ? (0, l.jsx)(eE.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(eI.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    w &&
                        (0, l.jsx)(d.D, {
                            onClick: () => Y(!1),
                            className: tB.i3,
                            children: (0, l.jsx)(ey.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: ep.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === P &&
                (0, l.jsxs)("div", {
                    className: tB.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                E.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => Y(!0),
                                    size: "md",
                                    text: eu.intl.string(eu.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        L,
                    ],
                }),
        ],
    });
}
let tJ = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
        r(!0);
    }, []);
    let a = !!m.Ay.keyboardModeEnabled && !s,
        o = (0, e0.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tC._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eC.m, {
                              asContainer: !0,
                              text: eu.intl.formatToPlainString(eu.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eu.intl.formatToPlainString(eu.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(tu, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: tB.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function t$(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        a = t?.guild_id,
        { displayParticipants: o, participant1: c, participant2: d, numOtherParticipants: h } = (0, w.A)(i, 3),
        m = (0, u.bG)([g.default], () => g.default.getUser(i.author_id)),
        { streamPreviewUrl: f } = (0, tN.A)(i),
        p = [c, d];
    return (0, l.jsxs)("div", {
        className: tB.MH,
        children: [
            (0, l.jsxs)("div", {
                className: tB.WP,
                children: [
                    (0, l.jsx)(eg.A, {
                        maxUsers: 3,
                        users: o,
                        guildId: a,
                        size: ev._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(eS.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(eN.D, {
                        variant: "heading-sm/normal",
                        className: em()(tB.Xn, tB.zA),
                        children: eu.intl.format(n, {
                            user0: M.Ay.getName(a, t?.id, p[0]),
                            user1: M.Ay.getName(a, t?.id, p[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    e_.E,
                                    { variant: "text-sm/medium", className: em()(tB.Mj, tB.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    tI.A,
                                    {
                                        textClassName: em()(tB.Mj, tB.nk),
                                        text: e,
                                        user: p[0],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    tI.A,
                                    {
                                        textClassName: em()(tB.Mj, tB.nk),
                                        text: e,
                                        user: p[1],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != f && (0, l.jsx)(e$.Ay, { size: e$.Ay.Sizes.SMALL }),
            null != m && (0, l.jsx)(tO.A, { user: m, channel: t, guildId: a, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function tX(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(d.D, { className: tB.Zw, onClick: n, children: t });
}
function tQ(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: r,
            onClickThumbnail: a,
            onClickTitle: o,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: h = !1,
            showCoverImage: m = !0,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: p,
            ...g
        } = e,
        { entry: x } = g,
        A = (0, tE.zD)(x),
        C = A ? x.extra?.application_id : void 0,
        E = (0, tt.W)();
    null != E && (C = E);
    let I = (0, e3.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : C,
                source: e2.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => p?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: v } = (0, L.nO)({
            entry: x,
            showCoverImage: m,
            trackingSource: "memberlist_content_popout",
        }),
        S = (0, te.w)({ location: "content_inventory" }),
        N = (0, u.bG)([e9.A], () => e9.A.getDetectableIdsToApplicationIds()),
        _ = A ? I : void 0,
        T = i.useContext(tK);
    return (0, l.jsxs)("div", {
        className: tB.au,
        children: [
            (0, l.jsx)(t$, { disableGameProfileLinks: h, ...g, onUserPopoutClosed: f }),
            (0, l.jsxs)(tZ, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: tB.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: tB.Fb,
                                children: (0, l.jsx)(ty.d, {
                                    image: y,
                                    smallImage: v,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: a ?? _,
                                    size: ty.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: tB.iC,
                                children: [
                                    (0, l.jsx)(tX, {
                                        onClick: o ?? _,
                                        children: (0, l.jsx)(eN.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: em()(tB.$2, { [tB.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(tX, {
                                              onClick: c ?? _,
                                              children: (0, l.jsx)(e_.E, {
                                                  variant: "text-sm/normal",
                                                  className: tB.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(eS.h, { size: 8 }),
                                    s,
                                ],
                            }),
                            (0, l.jsx)("div", { className: tB.hO, children: d }),
                        ],
                    }),
                    r,
                ],
            }),
            S && null != C && null != N[C]
                ? (0, l.jsx)(tW, {
                      className: tB.zu,
                      applicationId: C,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tH.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function t0(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
            ...f
        } = e,
        p = (0, u.bG)([td.A], () => td.A.getChannel(a?.channelId)),
        [g] = i.useMemo(() => (0, e5.eo)(p, tg.A, th.A, tm.A, e1.default), [p]),
        { entry: x } = f,
        A = (0, tE.zD)(x),
        C = A ? x.extra?.application_id : void 0,
        E = (0, tt.W)();
    null != E && (C = E);
    let I = (0, e3.A)(
            {
                location: "ContentPopout",
                applicationId: C,
                source: e2.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => m?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        y = A ? I : void 0,
        { activity: v, activityApplication: S, fallbackApplication: N } = (0, tS.A)(x),
        { largeImage: _, smallImage: T } = (0, L.D8)(v, S ?? N),
        { largeImage: j } = (0, L.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        b = (0, te.w)({ location: "content_inventory" }),
        R = (0, u.bG)([e9.A], () => e9.A.getDetectableIdsToApplicationIds()),
        O = i.useContext(tK);
    return (0, l.jsxs)("div", {
        className: tB.au,
        children: [
            (0, l.jsx)(t$, { ...f, onUserPopoutClosed: h }),
            (0, l.jsxs)(tZ, {
                backgroundImgSrc: j?.src,
                className: tB.uR,
                children: [
                    (0, l.jsx)(tX, {
                        onClick: g
                            ? () => {
                                  ew.default.selectVoiceChannel(a.channelId), (0, ek.Nl)(a);
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: tB.nh,
                            children: [
                                (0, l.jsx)(e8.A, { className: tB.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: tB.NE,
                                        children: (0, l.jsx)(e_.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: eu.intl.string(eu.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: tB.$6,
                        children: [
                            null != _ &&
                                (0, l.jsx)("div", {
                                    className: tB.Fb,
                                    children: (0, l.jsx)(ty.d, {
                                        image: _,
                                        smallImage: T,
                                        onClick: o ?? y,
                                        size: ty.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: tB.gv,
                                children: [
                                    (0, l.jsx)(tX, {
                                        onClick: c ?? y,
                                        children: (0, l.jsx)(eN.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: tB.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(tX, {
                                              onClick: d ?? y,
                                              children: (0, l.jsx)(e_.E, {
                                                  variant: "text-sm/normal",
                                                  className: tB.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(eS.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            b && null != C && null != R[C]
                ? (0, l.jsx)(tW, {
                      className: tB.zu,
                      applicationId: C,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tH.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var t1 = n(299846);
let t2 = function (e) {
    let { channel: t, entry: n, onReaction: s, onVoiceChannelPreview: r, disableActivityProfileLinks: a } = e,
        { largeImage: o } = (0, L.nO)({
            entry: n,
            showCoverImage: !1,
            trackingSource: "memberlist_activity_content_popout",
        }),
        { user: c, details: d, activity: h, embeddedActivity: m } = (0, t1.u)(n),
        { primaryColor: f, secondaryColor: p } = (0, $.A)(o?.src),
        g = (0, u.bG)([R.default], () => R.default.locale),
        { displayParticipants: x, participant1: A, participant2: P, numOtherParticipants: D } = (0, w.A)(n, 3);
    function U() {
        (0, j.hg)(n.extra.application_id);
    }
    let G = i.useCallback(
            (e) => {
                let l, i, s;
                if (o?.src == null || null == t || null == c) return;
                let r =
                    D > 0
                        ? (function (e) {
                              let { entry: t, channel: n, users: l, countOthers: i } = e,
                                  s = eu.t["7j/5mg"];
                              return eu.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: M.Ay.getName(n?.guild_id, n?.id, l[0]),
                                      user2: M.Ay.getName(n?.guild_id, n?.id, l[1]),
                                      countOthers: i,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [A, P], countOthers: D })
                        : ((l = eu.t["bES+y2"]),
                          (i = M.Ay.getName(t.guild_id, t.id, c)),
                          (s = n.extra.activity_name),
                          eu.intl.formatToMarkdownString(l, { gameName: s, userName: i }).replaceAll("*", ""));
                return ec({
                    entry: n,
                    applicationImageSrc: o?.src,
                    avatarSrcs: x.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: r,
                    timestamp: (0, k.As)(n, g),
                    colors: [f, p],
                    channelId: e,
                });
            },
            [o?.src, t, x, n, g, D, A, P, f, p, c],
        ),
        { data: V } = (0, b.YY)(n.extra.application_id),
        F = (0, N.Ay)({ application: V, analyticsLocations: [T.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == c) return null;
    let H = (0, l.jsx)(ed.iT, { location: ed.N5.POPOUT, entry: n }),
        B = (0, l.jsx)(tQ, {
            channel: t,
            userDescription: (0, k.JM)(n) ? eu.t.vPg1JT : eu.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: d,
            badges: H,
            entry: n,
            showCoverImage: !1,
            onClickTitle: a ? void 0 : U,
            onClickSubtitle: a ? void 0 : U,
            onClickThumbnail: a ? void 0 : U,
        }),
        W = (0, v.A)(h, eW.jUm.JOIN) || (0, S.A)(h),
        K = W
            ? (0, l.jsx)(_.A, { embeddedActivity: m, activity: h, user: c, variant: "primary", size: "md", icon: C.I })
            : null,
        z =
            null == F
                ? null
                : (0, l.jsx)(E.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: F,
                      text: eu.intl.string(eu.t["jaYS/h"]),
                      icon: I.h,
                  }),
        Z =
            null != z || a
                ? null
                : (0, l.jsx)(E.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: U,
                      text: eu.intl.string(eu.t.GDWYR8),
                      icon: y.k,
                  }),
        Y = [z, W && !a ? K : Z].filter(O.Vq);
    return (0, l.jsxs)(tz, {
        children: [
            B,
            (0, l.jsx)(tY, {
                children: (0, l.jsx)(tq, {
                    onReaction: s,
                    onVoiceChannelPreview: r,
                    user: c,
                    channel: t,
                    generateReactionImage: G,
                    reactionImageAltText: eu.intl.formatToPlainString(eu.t.tAwI1k, {
                        username: c.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: Y,
                }),
            }),
        ],
    });
};
var t3 = n(322789),
    t5 = n(808380),
    t8 = n(687966),
    t6 = n(39623),
    t7 = n(960076),
    t4 = n(544441),
    t9 = n(562708),
    ne = n(688810),
    nt = n(139286);
function nn(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, ne.Ay)(n),
        s = (0, N.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, nt.A)({
            name: t9.ImpressionNames.CLOUD_PLAY_CTA,
            type: t9.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            E.$,
            {
                variant: "primary",
                size: "md",
                icon: I.h,
                text: eu.intl.string(eu.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var nl = n(601007),
    ni = n(648246),
    ns = n(308335),
    nr = n(790381),
    na = n(266080);
async function no(e) {
    let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: i, timestamp: s, colors: r, channelId: a } = e,
        o = n.extra.game_name,
        u = {
            AvatarImage1: l[0],
            ...(null != l[1] && { AvatarImage2: l[1] }),
            ...(null != l[2] && { AvatarImage3: l[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await Y({
        assetsToLoad: u,
        drawImage: (e) =>
            (function (e, t) {
                let { timestamp: n, colors: l, description: i, entry: s, numAvatars: r } = t,
                    a = l.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(a, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === H.uS.Failure &&
                        e.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    eo({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, r),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: er, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(i, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    ea({
                        canvas: e,
                        badges: (function (e, t) {
                            let n = [{ iconPath: X, text: t }],
                                l = J.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= G()().diff(G()(l), "days") &&
                                    n.push({ iconPath: es, text: eu.intl.string(eu.t.vYuyWf) }),
                                (0, k.Rf)(e) && n.push({ iconPath: Q, text: eu.intl.string(eu.t.keY6mW) }),
                                (0, k.BZ)(e))
                            ) {
                                let t = (0, k.iy)(e);
                                n.push({
                                    iconPath: el,
                                    text: eu.intl.formatToPlainString(eu.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, k.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: ei, text: eu.intl.string(eu.t.kAlUsy) });
                            let i = (0, k.KH)(e);
                            if ((null != i && n.push({ iconPath: en, text: (0, k.us)(i) }), (0, k.L7)(e))) {
                                let { text: t } = (0, k.Pj)(e);
                                null != t && n.push({ iconPath: ee, text: t });
                            }
                            if ((0, k.uw)(e)) {
                                let t = (0, k.ty)(e);
                                if (null != t) {
                                    let e = eu.intl.formatToPlainString(eu.t.C0AxoR, {
                                        hours: Math.round(t / q.A.Seconds.HOUR),
                                    });
                                    return [{ iconPath: et, text: `${eu.intl.string(eu.t["/50eHi"])} \u{2014} ${e}` }];
                                }
                            }
                            return n;
                        })(s, n),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            })(e, { timestamp: s, colors: r, description: i, entry: n, numAvatars: l.length }),
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${o}.png`.toLowerCase(),
            fileType: "png",
            channelId: a,
        },
    });
}
var nu = n(968309),
    nc = n(30370);
function nd(e) {
    let t = (0, u.bG)([nc.A], () => nc.A.getAccounts().some((t) => t.type === e)),
        n = i.useCallback(() => {
            if (null == e) return null;
            (0, nu.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var nh = n(18282);
let nm = [...t3.n, ed.Yq],
    nf = {
        [t5.Y.DESKTOP]: null,
        [t5.Y.LINUX]: null,
        [t5.Y.MACOS]: null,
        [t5.Y.NINTENDO]: null,
        [t5.Y.IOS]: null,
        [t5.Y.ANDROID]: null,
        [t5.Y.XBOX]: na.A,
        [t5.Y.PLAYSTATION]: nr.A,
    },
    np = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: s,
                onReaction: r,
                onVoiceChannelPreview: a,
                onUserPopoutClosed: o,
                trackRankingItemInteraction: c,
            } = e,
            { largeImage: d } = (0, L.nO)({ entry: n, trackingSource: "memberlist_gaming_content_popout" }),
            { user: h, details: m, appName: f, activity: p, embeddedActivity: g } = (0, t1.u)(n),
            { primaryColor: x, secondaryColor: A } = (0, $.A)(d?.src),
            C = (0, u.bG)([R.default], () => R.default.locale),
            { streamPreviewUrl: E, stream: I } = (0, tN.A)(n),
            { displayParticipants: y, participant1: j, participant2: P, numOtherParticipants: D } = (0, w.A)(n, 3),
            U = n.extra.platform,
            G = n.extra.application_id,
            V = null != U ? nf[U] : null,
            F = nd(U === t5.Y.XBOX ? eW.fg2.XBOX : U === t5.Y.PLAYSTATION ? eW.fg2.PLAYSTATION : void 0),
            { data: H } = (0, b.YY)(G),
            B = (0, t4.A)(G),
            { analyticsLocations: W } = (0, ne.Ay)(T.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            K = (0, N.JC)(H),
            z = (0, ns.o)(p?.application_id ?? g?.applicationId ?? H?.id),
            Z = i.useCallback(
                (e) => {
                    let l, i, s, r;
                    if (d?.src == null || null == t || null == h) return;
                    let a =
                        D > 0
                            ? (function (e) {
                                  let { entry: t, channel: n, users: l, countOthers: i } = e,
                                      s = (0, k.JM)(t) ? eu.t.QaUWPd : eu.t["7j/5mg"];
                                  return eu.intl
                                      .formatToMarkdownString(s, {
                                          gameName: t.extra.game_name,
                                          user1: M.Ay.getName(n?.guild_id, n?.id, l[0]),
                                          user2: M.Ay.getName(n?.guild_id, n?.id, l[1]),
                                          countOthers: i,
                                      })
                                      .replaceAll("*", "");
                              })({ entry: n, channel: t, users: [j, P], countOthers: D })
                            : ((l = (0, k.JM)(n)),
                              (i = (0, k.Rf)(n)
                                  ? l
                                      ? eu.t.MHO1AV
                                      : eu.t.i7AOzw
                                  : l
                                    ? eu.t["lLPKY+"]
                                    : eu.t["bES+y2"]),
                              (s = M.Ay.getName(t?.guild_id, t?.id, h)),
                              (r = n.extra.game_name),
                              eu.intl.formatToMarkdownString(i, { gameName: r, userName: s }).replaceAll("*", ""));
                    return no({
                        entry: n,
                        applicationImageSrc: d?.src,
                        avatarSrcs: y.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: a,
                        timestamp: (0, k.As)(n, C),
                        colors: [x, A],
                        channelId: e,
                    });
                },
                [d?.src, t, y, n, C, D, j, P, x, A, h],
            );
        if (null == h) return null;
        let Y = (0, l.jsx)(ed.mG, {
                location: null == E ? ed.N5.POPOUT : ed.N5.STREAMING_POPOUT,
                children: nm.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            q =
                null == I
                    ? (0, l.jsx)(tQ, {
                          channel: t,
                          headerIcons:
                              null == V
                                  ? null
                                  : (0, l.jsx)(nh.A, {
                                        onClick: F,
                                        Icon: V,
                                        "aria-label": eu.intl.string(eu.t.YR4cHH),
                                    }),
                          userDescription: (0, k.JM)(n) ? eu.t.vPg1JT : eu.t.rPqqts,
                          title: f,
                          subtitle: m,
                          badges: Y,
                          entry: n,
                          disableGameProfileLinks: s,
                          onUserPopoutClosed: o,
                          trackRankingItemInteraction: c,
                          children:
                              B.length > 0
                                  ? (0, l.jsx)(nl.A, {
                                        distributorCTAConfigs: B,
                                        applicationId: G,
                                        analyticsLocations: W,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(t0, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: m,
                          badges: Y,
                          userDescription: eu.t["6oWFUN"],
                          entry: n,
                          stream: I,
                          onUserPopoutClosed: o,
                          trackRankingItemInteraction: c,
                          children:
                              B.length > 0
                                  ? (0, l.jsx)(nl.A, {
                                        distributorCTAConfigs: B,
                                        applicationId: G,
                                        analyticsLocations: W,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            J =
                !z && K
                    ? (0, l.jsx)(
                          nn,
                          { application: H, analyticsLocation: T.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            X = [
                null == J && ((0, v.A)(p, eW.jUm.JOIN) || (0, S.A)(p))
                    ? (0, l.jsx)(
                          _.A,
                          { activity: p, user: h, variant: "primary", size: "md", icon: t8.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, t7.A)(p)
                    ? (0, l.jsx)(ni.A, { activity: p, size: "md", variant: "primary", icon: t6.EyeIcon }, "watch")
                    : null,
                J,
            ].filter(O.Vq);
        return (0, l.jsxs)(tz, {
            children: [
                q,
                (0, l.jsx)(tY, {
                    children: (0, l.jsx)(tq, {
                        onReaction: r,
                        onVoiceChannelPreview: a,
                        user: h,
                        channel: t,
                        generateReactionImage: Z,
                        reactionImageAltText: eu.intl.formatToPlainString(eu.t.tAwI1k, {
                            username: h.username,
                            activity: n.extra.game_name,
                        }),
                        entry: n,
                        buttons: X,
                    }),
                }),
            ],
        });
    },
    ng = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function nx(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
        { data: r } = (0, b.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, ne.Ay)(T.A.CLOUD_PLAY_POPOVER),
        o = (0, N.Ay)({ application: r, analyticsLocations: a }),
        u = (0, eQ.HX)(ef.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !u && n,
        { activeEntryId: d, setActiveEntryId: h } = ng(),
        m = d === t.id,
        f = c && m ? [ef.M.CLOUD_PLAY_POPOVER] : [],
        [p, g] = (0, tT.kn)(f),
        x = p === ef.M.CLOUD_PLAY_POPOVER;
    i.useEffect(() => {
        c && null === d && h(t.id);
    }, [d, c, t.id, h]),
        i.useEffect(
            () => () => {
                x && (g(tj.i.USER_DISMISS), h(null));
            },
            [x, g, h],
        );
    let [A, C] = i.useState(!1);
    return (
        x && !A && C(!0),
        (0, nt.A)(
            {
                name: t9.ImpressionNames.CLOUD_PLAY_CTA,
                type: t9.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !A },
            [A],
        ),
        (0, l.jsx)(t_.A, {
            title: eu.intl.string(eu.t["+WNDtV"]),
            body: eu.intl.string(eu.t["5QKxGI"]),
            targetElementRef: s,
            shouldShow: x,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/912562ba9ec7f9f728ce5b336c9bed5f5195dcab1451d12b0e592b1a7389200c.svg",
            },
            actions: [
                {
                    icon: I.h,
                    text: eu.intl.string(eu.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                g(tj.i.USER_DISMISS), h(null);
            },
        })
    );
}
let nA = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(nx, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var nC = n(363670),
    nE = n(205327),
    nI = n(52133),
    ny = n(835723),
    nv = n(172710),
    nS = n(655116),
    nN = n(763758),
    n_ = n(286617),
    nT = n(533207),
    nj = n(280450),
    nb = n(121090),
    nR = n(974690);
async function nO(e) {
    let { user: t, channel: n, mediaImageSrc: l, artist: i, description: s, colors: r, badges: a } = e,
        o = (function (e) {
            let { avatarSrc: t, mediaImageSrc: n } = e;
            return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
        })({ avatarSrc: t.getAvatarURL(n.guild_id, 128), mediaImageSrc: l }),
        u = i.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
    return await Y({
        assetsToLoad: o,
        drawImage: (e) => {
            var t, n, l, i;
            let o;
            (t = e),
                (o = r.map((e, t) => ({ color: e, stop: t }))),
                t.setSize({ w: 400, h: 120 }, 4),
                t.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                (n = e).drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, {
                    fillMode: H.VZ.Contain,
                }) === H.uS.Failure && n.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                (l = e),
                (i = s),
                l.setColor("white"),
                l.setFont({ size: 16, family: er, weight: 500, truncate: H.Kq.Wrap }),
                l.drawText(i, { x: 120, y: 64, h: 32, w: 260 }, !0),
                ea({ canvas: e, badges: a, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${u}.png`.toLowerCase(),
            fileType: "png",
            channelId: n.id,
        },
    });
}
var nM = n(693879),
    nL = n(809854),
    nw = n(272984),
    nk = n(170699);
function nP(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, nL.e)(),
        { durationTimestamp: r, seekBarStyles: a } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, s),
                i = n - e,
                r = Math.floor((Math.max(l - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, k.W6)({ start: 0 }, i) };
        }, [t, s]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: nk.lu,
              children: [
                  (0, l.jsx)(nM.z, { entry: n }),
                  (0, l.jsx)("div", { className: nk.Lt, children: (0, l.jsx)("div", { className: nk.Vp, style: a }) }),
                  (0, l.jsx)(e_.E, {
                      className: nk.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function nD(e) {
    let t,
        n,
        s,
        { channel: r, entry: a, closePopout: o, onReaction: c, onVoiceChannelPreview: d } = e,
        { largeImage: h } = (0, L.nO)({ entry: a, trackingSource: "memberlist_listened_session_content_popout" }),
        { activity: m, currentEntry: f, artist: p, title: g, user: x } = (0, nC.u7)(a),
        { primaryColor: A, secondaryColor: C } = (0, $.A)(h?.src),
        I = nd(eW.fg2.SPOTIFY),
        y = (0, u.bG)(
            [nS.A, nj.default],
            () => (m?.type === eW.$pd.LISTENING && null != x ? (0, n_.A)(nS.A, nj.default, x, m) : void 0),
            [m, x],
            nI.A,
        ),
        v = i.useCallback(() => {
            if (null == r || null == x) return;
            let e = m.timestamps?.start,
                t = (0, k.W6)(null != e ? { start: e } : a, Date.now());
            return nO({
                user: x,
                channel: r,
                mediaImageSrc: h?.src,
                artist: p,
                description: (function (e, t, n) {
                    let { artist: l, media: i } = e,
                        s = eu.t["6iNxrl"],
                        r = M.Ay.getName(t.guild_id, t.id, n);
                    return eu.intl.formatToMarkdownString(s, { artist: l, userName: r, media: i }).replaceAll("*", "");
                })({ artist: p, media: g }, r, x),
                colors: [A, C],
                badges: (function (e) {
                    let { timestamp: t } = e;
                    return [
                        {
                            iconPath:
                                "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
                            text: t,
                        },
                    ];
                })({ timestamp: t }),
            });
        }, [m, p, r, a, h?.src, A, C, g, x]);
    if (null == m || null == f) return null;
    let S = p,
        N = [];
    f.media.provider === nE.X.SPOTIFY &&
        ((n = () => {
            (0, nv.Mp)(m);
        }),
        (s = () => {
            (0, nv.QX)(m, x.id);
        }),
        (t = () => {
            null != I ? I() : (0, nv.Mp)(m);
        }),
        (S = (0, l.jsx)(nN.A, {
            artists: p,
            canOpen: null != m.sync_id,
            linkClassName: tB.zA,
            onOpenSpotifyArtist: function (e) {
                null != m && null != x && (0, nv.mN)(m, x.id, e);
            },
        })),
        y?.syncDisabled === !1 &&
            N.push(
                (0, l.jsx)(
                    E.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: eu.intl.string(eu.t.eU3inB),
                        icon: ny.J,
                        onClick: function () {
                            null != y && ((0, nT.A)(y, nw.Qp.USER_ACTIVITY_SYNC), o());
                        },
                    },
                    "listen-along",
                ),
            ));
    let _ = (0, l.jsx)(tQ, {
        onClickThumbnail: s,
        channel: r,
        entry: a,
        headerIcons:
            f.media.provider === nE.X.SPOTIFY
                ? (0, l.jsx)(nh.A, { onClick: t, "aria-label": eu.intl.string(eu.t.rRffNz), Icon: nb.A })
                : null,
        userDescription: (0, k.JM)(a) ? eu.t.Tzx5D2 : eu.t.CcVI1T,
        title: g,
        onClickTitle: n,
        subtitle: S,
        badges: null,
        children: m.timestamps?.start != null && (0, l.jsx)(nP, { activity: m }),
    });
    return (0, l.jsxs)(tz, {
        children: [
            _,
            (0, l.jsx)(tY, {
                children: (0, l.jsx)(tq, {
                    onReaction: c,
                    onVoiceChannelPreview: d,
                    user: x,
                    channel: r,
                    generateReactionImage: v,
                    reactionImageAltText: eu.intl.formatToPlainString(eu.t.h2yWWX, {
                        username: x.username,
                        activity: p,
                    }),
                    entry: a,
                    buttons: N,
                }),
            }),
        ],
    });
}
var nU = n(56121),
    nG = n(263577),
    nV = n(868065),
    nF = n(804779);
let nH = [ed.Y8],
    nB = [nU.j.WEEK],
    nW = i.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, L.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, k.TQ)(t);
        return null != r && (0, O.S1)(r, nB)
            ? (0, l.jsxs)(nV.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(nV.UA, {
                          children: [
                              (0, l.jsx)(nV.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(nV.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(ed.mG, {
                                  location: ed.N5.CARD,
                                  children: nH.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(nG.V, { src: s?.src, size: 48, className: nF.xn }),
                  ],
              })
            : null;
    });
var nK = n(210528);
let nz = function (e) {
    var t, n;
    let { channel: s, entry: r, onReaction: a, onVoiceChannelPreview: o } = e,
        { parent_title: c, provider: d, image_url: h } = r.extra.media,
        m = r.extra.artist.name,
        f = (0, u.bG)([g.default], () => g.default.getUser(r.author_id)),
        { primaryColor: p, secondaryColor: x } = (0, $.A)(h),
        A = (0, k.TQ)(r),
        C = i.useCallback(() => {
            var e, t, n;
            let l, i, a, o;
            if (null == s || null == f || !(0, O.S1)(A, nB)) return;
            let u =
                ((e = r),
                (t = s),
                (n = f),
                (i = (function (e) {
                    if (e === nU.j.WEEK) return eu.t.SjOZfm;
                })(A)),
                (a = M.Ay.getName(t.guild_id, t.id, n)),
                (o = e.extra.artist.name),
                eu.intl.formatToMarkdownString(i, { artist: o, userName: a }).replaceAll("*", ""));
            return nO({
                user: f,
                channel: s,
                mediaImageSrc: h,
                artist: m,
                description: u,
                colors: [p, x],
                badges:
                    null == (l = (0, k.Pv)(r, nR.K.AGGREGATE_COUNT)?.count)
                        ? []
                        : [{ iconPath: et, text: eu.intl.formatToPlainString(eu.t.HtifnG, { count: l }) }],
            });
        }, [h, m, s, r, p, A, x, f]),
        E = nd(eW.fg2.SPOTIFY);
    if (null == f || !(0, O.S1)(A, nB)) return null;
    function I() {
        let e = nw.M0.ALBUM,
            t = nK.A.isProtocolRegistered()
                ? nw.RQ.PLAYER_OPEN(e, r.extra.media.external_parent_id)
                : nw.RQ.WEB_OPEN(e, r.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(tz, {
        children: [
            (0, l.jsx)(tQ, {
                onClickTitle: I,
                onClickSubtitle: function () {
                    let e = nw.M0.ARTIST,
                        t = nK.A.isProtocolRegistered()
                            ? nw.RQ.PLAYER_OPEN(e, r.extra.artist.external_id)
                            : nw.RQ.WEB_OPEN(e, r.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: I,
                channel: s,
                entry: r,
                headerIcons:
                    d === nE.X.SPOTIFY
                        ? (0, l.jsx)(nh.A, { onClick: E, Icon: nb.A, "aria-label": eu.intl.string(eu.t["0ZB/XE"]) })
                        : null,
                userDescription: eu.t.CcVI1T,
                title: c,
                subtitle: m,
                badges: (0, l.jsx)(ed.mG, {
                    location: ed.N5.POPOUT,
                    children: nH.map((e, t) => (0, l.jsx)(e, { entry: r }, t)),
                }),
            }),
            (0, l.jsx)(tY, {
                children: (0, l.jsx)(tq, {
                    onReaction: a,
                    onVoiceChannelPreview: o,
                    user: f,
                    channel: s,
                    generateReactionImage: C,
                    reactionImageAltText:
                        ((t = r),
                        (n = f),
                        eu.intl.formatToPlainString(eu.t.Osmpr9, {
                            username: n.username,
                            artist: t.extra.artist.name,
                        })),
                    entry: r,
                }),
            }),
        ],
    });
};
var nZ = n(977001);
let nY = function (e) {
    var t, n;
    let { channel: s, entry: r, disableGameProfileLinks: a, onReaction: o, onVoiceChannelPreview: u } = e,
        { largeImage: c } = (0, L.nO)({ entry: r, trackingSource: "memberlist_top_game_content_popout" }),
        { user: d, details: h, appName: m } = (0, t1.u)(r),
        { primaryColor: f, secondaryColor: p } = (0, $.A)(c?.src),
        g = (0, k.ty)(r),
        x = (0, k.TQ)(r),
        A = i.useCallback(
            (e) => {
                if (null != s && null != d && null != g && null != x && (0, nZ._E)(x)) {
                    var t, n, l;
                    let i, a, o;
                    return no({
                        entry: r,
                        applicationImageSrc: c?.src,
                        avatarSrcs: [d.getAvatarURL(s?.guild_id, 128)],
                        description:
                            ((t = r),
                            (n = s),
                            (l = d),
                            (i = (function (e) {
                                if (e === nU.j.WEEK) return eu.t["7TXfc6"];
                            })(x)),
                            (a = M.Ay.getName(n.guild_id, n.id, l)),
                            (o = t.extra.game_name),
                            eu.intl.formatToMarkdownString(i, { gameName: o, userName: a }).replaceAll("*", "")),
                        timestamp: eu.intl.formatToPlainString(eu.t.YL7UE3, {
                            hours: Math.round(g / q.A.Seconds.HOUR),
                        }),
                        colors: [f, p],
                        channelId: e,
                    });
                }
            },
            [c?.src, s, g, r, f, x, p, d],
        );
    if (null == d || null == g || null == x || !(0, nZ._E)(x)) return null;
    let C = null != r.extra.platform ? nf[r.extra.platform] : null;
    return (0, l.jsxs)(tz, {
        children: [
            (0, l.jsx)(tQ, {
                channel: s,
                headerIcons:
                    null == C ? null : (0, l.jsx)(nh.A, { Icon: C, "aria-label": eu.intl.string(eu.t.YR4cHH) }),
                entry: r,
                userDescription: eu.t.rPqqts,
                title: m,
                subtitle: h,
                badges: (0, l.jsx)(ed.mG, {
                    location: ed.N5.POPOUT,
                    children: nZ.ac.map((e, t) => (0, l.jsx)(e, { entry: r }, t)),
                }),
                disableGameProfileLinks: a,
            }),
            (0, l.jsx)(tY, {
                children: (0, l.jsx)(tq, {
                    onReaction: o,
                    onVoiceChannelPreview: u,
                    user: d,
                    channel: s,
                    generateReactionImage: A,
                    reactionImageAltText:
                        ((t = r),
                        (n = d),
                        eu.intl.formatToPlainString(eu.t.tAwI1k, {
                            username: n.username,
                            activity: t.extra.game_name,
                        })),
                    entry: r,
                }),
            }),
        ],
    });
};
var nq = n(514243),
    nJ = n(347306),
    n$ = n(123917),
    nX = n(998218);
async function nQ(e) {
    let {
            mediaImageSrc: t,
            entry: n,
            avatarSrc: l,
            description: i,
            timestamp: s,
            episodeDescription: r,
            colors: a,
            channelId: o,
        } = e,
        u = n.extra.media_title,
        c = { AvatarImage: l, ...(null != t && { MediaImage: t }), ...!1 };
    return await Y({
        assetsToLoad: c,
        drawImage: function (e) {
            let t,
                n = a.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let l = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: H.VZ.Contain });
            l === H.uS.Failure && (l = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                l === H.uS.Failure && e.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: er, weight: 500, truncate: H.Kq.Wrap }),
                e.drawText(i, { x: 120, y: 64, h: 32, w: 260 }, !0),
                ea({
                    canvas: e,
                    badges:
                        ((t = [
                            {
                                iconPath:
                                    "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
                                text: s,
                            },
                        ]),
                        null != r &&
                            t.push({
                                iconPath:
                                    "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
                                text: r,
                            }),
                        t),
                    startPosition: 120,
                    maxWidth: 260,
                });
        },
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${u}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
}
let n0 = function (e) {
        var t, n;
        let { channel: s, entry: r, onReaction: a, onVoiceChannelPreview: o } = e,
            c = (0, u.bG)([g.default], () => g.default.getUser(r.author_id)),
            { largeImage: d } = (0, L.nO)({ entry: r, trackingSource: "memberlist_watch_content_popout" }),
            { primaryColor: h, secondaryColor: m } = (0, $.A)(d?.src),
            f = (0, u.bG)([R.default], () => R.default.locale),
            p = nd(eW.fg2.CRUNCHYROLL),
            x = (0, k.kR)(r.extra.media_assets_large_text),
            A = i.useCallback(
                (e) => {
                    if (null != c && d?.src != null) {
                        var t, n, l;
                        let i, a, o;
                        return nQ({
                            entry: r,
                            mediaImageSrc: d?.src,
                            avatarSrc: c.getAvatarURL(s?.guild_id, 128),
                            description:
                                ((t = r),
                                (n = s),
                                (l = c),
                                (i = eu.t.LHF6D9),
                                (a = M.Ay.getName(n?.guild_id, n?.id, l)),
                                (o = t.extra.media_title),
                                eu.intl
                                    .formatToMarkdownString(i, {
                                        mediaTitle: o,
                                        userName: a,
                                        episodeDescription: t.extra.media_subtitle,
                                    })
                                    .replaceAll("*", "")),
                            timestamp: (0, k.As)(r, f),
                            episodeDescription: x,
                            colors: [h, m],
                            channelId: e,
                        });
                    }
                },
                [s, r, x, f, d?.src, h, m, c],
            );
        function C() {
            if (null == r.extra.url) return;
            let e = nX.A.safeParseWithQuery(r.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, n$.h)({ href: nX.A.format(e), trusted: !1 });
        }
        return null == c
            ? null
            : (0, l.jsxs)(tz, {
                  children: [
                      (0, l.jsx)(tQ, {
                          channel: s,
                          entry: r,
                          userDescription: (0, k.JM)(r) ? eu.t["LH+Z3y"] : eu.t.YuKgml,
                          title: r.extra.media_title,
                          subtitle: r.extra.media_subtitle,
                          headerIcons: (0, l.jsx)(nh.A, {
                              onClick: p,
                              Icon: nJ.k,
                              "aria-label": eu.intl.string(eu.t.jdJYXw),
                          }),
                          badges: (0, l.jsx)(ed.mG, {
                              location: ed.N5.POPOUT,
                              children: nq.R.map((e, t) => (0, l.jsx)(e, { entry: r }, t)),
                          }),
                          onClickTitle: C,
                          onClickThumbnail: C,
                      }),
                      (0, l.jsx)(tY, {
                          children: (0, l.jsx)(tq, {
                              onReaction: a,
                              onVoiceChannelPreview: o,
                              user: c,
                              channel: s,
                              generateReactionImage: A,
                              reactionImageAltText:
                                  ((t = r),
                                  (n = c),
                                  eu.intl.formatToPlainString(eu.t.kCbfbN, {
                                      username: n.username,
                                      activity: t.extra.media_title,
                                  })),
                              entry: r,
                          }),
                      }),
                  ],
              });
    },
    n1 = 72;
function n2(e) {
    return e?.type === p.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? n1 + 32
            : n1
        : 0;
}
function n3(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case o.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(t3.A, { ...n, entry: t });
        case o.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(nq.A, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(nZ.Ay, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(nW, { ...n, entry: t });
        case o.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(nC.Ay, { ...n, entry: t });
        case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(A.A, { ...n, entry: t });
        default:
            return null;
    }
}
function n5(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === o.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(nA, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function n8(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(n6, {
        onReaction: (e, l) => {
            n.trackRankingItemInteraction(e, { destinationChannelId: l.id, destinationGuildId: l.guild_id }), t();
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(tV.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function n6(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case o.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(np, { ...n, entry: t });
        case o.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(n0, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(nY, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(nz, { ...n, entry: t });
        case o.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(nD, { ...n, entry: t });
        case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(t2, { ...n, entry: t });
        default:
            return null;
    }
}
let n7 = i.createContext(void 0),
    n4 = i.memo(function (e) {
        let { index: t, ref: s, ...o } = e,
            p = i.useRef(null),
            [A, C] = i.useState("default"),
            [E, I] = i.useState(!1),
            y = (0, a.rm)(`${t}`),
            v = g.default.getCurrentUser()?.isStaff(),
            { isRich: S, appName: N } = (0, t1.u)(o.entry);
        (0, f.T2)(o.entry.id);
        let _ = i.useMemo(
                () => ({
                    entry: o.entry,
                    channelId: o.channel.id,
                    guildId: o.channel.guild_id,
                    requestId: o.requestId,
                    richPresenceName: S ? N : void 0,
                }),
                [N, o.channel.guild_id, o.channel.id, o.entry, o.requestId, S],
            ),
            T = i.useRef(!1),
            [j, b] = i.useState(!1),
            [R, O] = i.useState(!1),
            M = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled);
        i.useEffect(() => {
            j && M && O(!0);
        }, [j, M]),
            i.useLayoutEffect(() => {
                null != p.current && I(!0);
            }, []);
        let L = i.useCallback(
                (e) => {
                    v &&
                        (0, h.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("886456"), n.e("789346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, l.jsx)(e, { entry: o.entry, requestId: o.requestId });
                        });
                },
                [o, v],
            ),
            w = i.useCallback(() => {
                C(String(Date.now()));
            }, []),
            k = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, x.I)(e, { ..._, ...t });
                },
                [_],
            ),
            P = i.useMemo(
                () =>
                    r().throttle(
                        (e) => {
                            (0, x.I)(tV.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            );
        function D() {
            (T.current = !1),
                setTimeout(() => {
                    T.current || (b(!1), O(M));
                }, 100);
        }
        return (0, l.jsxs)(l.Fragment, {
            children: [
                E && (0, l.jsx)(n5, { ...o, targetElementRef: p }),
                (0, l.jsx)("div", {
                    ref: s,
                    onMouseEnter: () => {
                        (T.current = !0),
                            setTimeout(() => {
                                T.current && b(!0), P(_);
                            }, 100);
                    },
                    onMouseLeave: D,
                    children: (0, l.jsx)(c.Y, {
                        targetElementRef: p,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, l.jsx)(n7.Provider, {
                                value: D,
                                children: (0, l.jsx)(n8, {
                                    closePopout: t,
                                    updatePopoutPosition: w,
                                    trackRankingItemInteraction: k,
                                    ...o,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: j,
                        positionKey: A,
                        onRequestOpen: () => P(_),
                        onRequestClose: () => {
                            R && D();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.jsx)(d.D, {
                                ...e,
                                ...y,
                                role: "button",
                                innerRef: p,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    j || b(!0);
                                },
                                onContextMenu: L,
                                children: (0, l.jsx)(n3, {
                                    ...o,
                                    selected: n,
                                    hovered: T.current,
                                    trackRankingItemInteraction: k,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
