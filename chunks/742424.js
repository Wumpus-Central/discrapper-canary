"use strict";
n.d(t, { Jd: () => n7, Ay: () => n8, h9: () => n2, bG: () => n1 });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(837381),
    l = n(681154),
    u = n(17928),
    c = n(922016),
    d = n(939249),
    _ = n(442433),
    f = n(775602),
    h = n(941726),
    p = n(963307),
    E = n(287809),
    m = n(947593),
    g = n(468581),
    A = n(808666),
    I = n(821609),
    T = n(414499),
    S = n(323384),
    N = n(55730),
    y = n(765379),
    C = n(737393),
    v = n(284525),
    O = n(793574),
    R = n(482030),
    b = n(627363),
    D = n(773669),
    L = n(403362),
    w = n(562153),
    M = n(939341),
    P = n(576757),
    x = n(832384);
n(321073);
var U = n(284009),
    k = n.n(U),
    G = n(989349),
    F = n.n(G),
    V = n(379834);
n(587895);
let B =
    "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
n(654107);
var H = n(583954),
    j = n(626584);
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
let Y = new j.A("AssetMap");
async function W(e) {
    let t = new K(),
        n = Object.entries(e).map((e) => {
            let [n, i] = e;
            return t.loadRemoteImage(n, i).catch((e) => Y.warn("Failed to load canvas asset", e, n, i));
        });
    return await Promise.all(n), t;
}
class K {
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
class z {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        k()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return k()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
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
async function $(e) {
    let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
        s = await W(t);
    await s.loadFonts();
    {
        let e = n(765270).A,
            t = n(684266).A,
            a = document.createElement("canvas"),
            o = new z(new e(a, s), new t());
        i(o.canvas);
        let l = await o.export(r);
        return a.remove(), l;
    }
}
var q = n(927813),
    Z = n(935208),
    X = n(140651);
let Q =
        "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
    J =
        "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
    ee =
        "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
    et =
        "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
    en =
        "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
    ei =
        "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
    er =
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
    es =
        "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
    ea = ["gg sans", "sans-serif"];
function eo(e) {
    let t,
        { canvas: n, badges: i, startPosition: r, maxWidth: s } = e;
    for (let { iconPath: e, text: a } of (n.setFont({ size: 12, family: ea, weight: 500, truncate: H.Kq.None }), i)) {
        let i = null != t ? t.w + t.x + 12 : r,
            o = null != t ? t.w + t.x + 12 + 18 : r + 18;
        n.drawPath(e, { x: i, y: 88 }, !0, 0.6), (t = n.drawText(a, { x: o, y: 99, w: s }, !0));
    }
}
function el(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: i, y: r },
        avatarImageSize: s,
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect({ x: i + (e + 1) * (s - 8) - 2, y: r - 1, w: s + 2, h: s + 2 }, s / 2, !0),
            t.drawRoundedImage(n[e], { x: i + e * (s - 8), y: r }, { w: s, h: s }, 50, { fillMode: H.VZ.Cover }),
            t.restoreContext();
}
var eu = n(375708);
let ec = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: r, timestamp: s, colors: a, channelId: o } = e,
        l = n.extra.activity_name,
        u = {
            AvatarImage1: i[0],
            ...(null != i[1] && { AvatarImage2: i[1] }),
            ...(null != i[2] && { AvatarImage3: i[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await $({
        assetsToLoad: u,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: i, description: r, entry: s, numAvatars: a } = t,
                    o = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === H.uS.Failure &&
                        e.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    el({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: ea, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    eo({
                        canvas: e,
                        badges: ((e, t) => {
                            let n = [{ iconPath: Q, text: t }],
                                i = Z.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= F()().diff(F()(i), "days") &&
                                    n.push({ iconPath: es, text: eu.intl.string(eu.t.vYuyWf) }),
                                (0, x.Rf)(e) && n.push({ iconPath: J, text: eu.intl.string(eu.t.keY6mW) }),
                                (0, x.BZ)(e))
                            ) {
                                let t = (0, x.iy)(e);
                                n.push({
                                    iconPath: ei,
                                    text: eu.intl.formatToPlainString(eu.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, x.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: er, text: eu.intl.string(eu.t.kAlUsy) });
                            let r = (0, x.KH)(e);
                            if ((null != r && n.push({ iconPath: en, text: (0, x.us)(r) }), (0, x.L7)(e))) {
                                let { text: t } = (0, x.Pj)(e);
                                null != t && n.push({ iconPath: ee, text: t });
                            }
                            if ((0, x.uw)(e)) {
                                let t = (0, x.ty)(e);
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
            })(e, { timestamp: s, colors: a, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${l}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
};
var ed = n(506326),
    e_ = n(503698),
    ef = n.n(e_);
n(340287);
var eh = n(554146),
    ep = n(661531),
    eE = n(342952),
    em = n(990078),
    eg = n(315710),
    eA = n(43990),
    eI = n(276293),
    eT = n(935063),
    eS = n(789645),
    eN = n(778712),
    ey = n(696986),
    eC = n(534514),
    ev = n(834730),
    eO = n(320448),
    eR = n(97808),
    eb = n(738188),
    eD = n(983851),
    eL = n(31300),
    ew = n(308528),
    eM = n(367513),
    eP = n(730852),
    ex = n(401843),
    eU = n(969151),
    ek = n(736653),
    eG = n(355622),
    eF = n(408018),
    eV = n(201349),
    eB = n(375499),
    eH = n(429433),
    ej = n(95701),
    eY = n(652215),
    eW = n(389605);
let eK = (0, ej.createChannelRecord)({ id: "1", type: eY.rbe.DM });
function ez(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: a = !1,
            renderAttachButton: o,
            autoFocus: l = !0,
            onFocus: u,
            channel: c,
            className: d,
        } = e,
        [_, f] = r.useState(""),
        [h, p] = r.useState((0, eF.x7)("")),
        E = eG.oU.ATOMIC_REACTOR_REPLY_INPUT,
        m = r.useRef(null);
    return (0, i.jsx)(eV.Ay, {
        ref: m,
        placeholder: t,
        editorClassName: d,
        className: ef()(eW.N8, d),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: c ?? eK,
        onChange: (e, t, n) => {
            f(t), p(n);
        },
        type: a ? { ...E, emojis: { button: !0 } } : E,
        textValue: _,
        richValue: h,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), f(""), p((0, eF.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: l,
        onFocus: u,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == m.current) return "top";
            let e = m.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
let e$ = (e) => {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        a = (0, ek.Ay)(),
        [o, l] = r.useState(!1),
        u = r.useRef(null),
        d = r.useRef(null);
    return (
        (t = () => l(!1)),
        r.useEffect(() => {
            let e = (e) => {
                    "Escape" === e.key && t();
                },
                n = (e) => {
                    null != e.target && (u?.current?.contains(e?.target) || t());
                };
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, u]),
        (0, i.jsx)(c.Y, {
            targetElementRef: d,
            align: "right",
            position: "top",
            shouldShow: o,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(eA.N, {
                    theme: a,
                    children: (e) =>
                        (0, i.jsx)("div", {
                            className: e,
                            ref: u,
                            children: (0, i.jsx)(eH.C, {
                                messageId: eY.dJq,
                                channel: eK,
                                closePopout: () => {
                                    l(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: i, isBurst: r } = e;
                                    null != t && (n({ emoji: t, willClose: i, isBurst: r }), l(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, i.jsx)(em.m, {
                    text: eu.intl.string(eu.t.lfIHs4),
                    children: (0, i.jsx)("div", {
                        ref: d,
                        className: eW.mJ,
                        children: (0, i.jsx)(eB.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                s?.(), l(!0);
                            },
                        }),
                    }),
                }),
        })
    );
};
var eq = n(47167),
    eZ = n(262763),
    eX = n(402216),
    eQ = n(268218),
    eJ = n(826673),
    e0 = n(822123),
    e1 = n(643501),
    e2 = n(409626),
    e3 = n(692969),
    e6 = n(279250),
    e4 = n(607407),
    e5 = n(548118),
    e7 = n(499211),
    e8 = n(378570),
    e9 = n(832163),
    te = n(565688),
    tt = n(533562),
    tn = n(873174),
    ti = n(805901),
    tr = n(565645);
n(915089);
var ts = n(713517);
n(267889);
var ta = n(7584);
n(850992), n(690521), n(806931);
var to = n(307731);
n(650583);
var tl = n(317299);
function tu(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: a } = e,
        o = r.useRef(null),
        l = (0, ts.M)(o);
    return (0, i.jsx)("span", {
        ref: o,
        children: (0, i.jsx)(d.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(ti.c, {
                config: eB.B,
                from: { value: 0 },
                to: { value: +!!l },
                children: (e) => {
                    let { value: r } = e;
                    return (0, i.jsx)(tn.animated.div, {
                        style: { transform: r.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, i.jsx)(tr.A, {
                            className: ef()(tl.Zg, a, { [tl.c4]: n }),
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
to.EmojiIntention.CHAT,
    [
        ta.Ay.getByName("thumbsup"),
        ta.Ay.getByName("eyes"),
        ta.Ay.getByName("laughing"),
        ta.Ay.getByName("watermelon"),
        ta.Ay.getByName("fork_and_knife"),
        ta.Ay.getByName("yum"),
    ].filter(L.Vq);
var tc = n(636585),
    td = n(734057),
    t_ = n(71393),
    tf = n(576705),
    th = n(994500),
    tp = n(543465),
    tE = n(977997),
    tm = n(607567),
    tg = n(174459),
    tA = n(486020),
    tI = n(20805),
    tT = n(22869),
    tS = n(623671),
    tN = n(428249),
    ty = n(327098),
    tC = n(202195),
    tv = n(43105),
    tO = n(131607),
    tR = n(49999),
    tb = n(345394);
let tD = (e) => {
    let { children: t } = e,
        [n, s] = (0, tO.kn)([eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [a, o] = r.useState(!1),
        l = r.useRef(null);
    r.useEffect(() => {
        let e = setTimeout(() => {
            o(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let u = r.useCallback(() => {
        s(tR.i.USER_DISMISS);
    }, [s]);
    return n !== eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { ref: l, children: t }),
                  (0, i.jsx)(tv.A, {
                      targetElementRef: l,
                      shouldShow: a,
                      onRequestClose: u,
                      position: "left",
                      title: eu.intl.string(eu.t.V5y3qZ),
                      body: eu.intl.string(eu.t.eSDHDk),
                      graphic: { type: "image", src: tb.A },
                  }),
              ],
          });
};
var tL = n(315246),
    tw = n(866323),
    tM = n(857250),
    tP = n(97483),
    tx = n(289873),
    tU = n(401871),
    tk = n(861173);
let tG = () =>
        (0, i.jsxs)("div", {
            className: tk.oR,
            children: [
                (0, i.jsx)(tx.y, { type: tx.t.SPINNING_CIRCLE_SIMPLE, className: tU.S }),
                (0, i.jsx)(ev.E, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: eu.intl.string(eu.t["5z/hlE"]),
                }),
            ],
        }),
    tF = (e) => {
        let { shown: t, sent: n, className: r } = e,
            s = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            a = (0, tw.p)(
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
        return (0, i.jsx)(i.Fragment, {
            children: a(
                (e, t) =>
                    t &&
                    (0, i.jsx)(tn.animated.div, {
                        className: r,
                        style: e,
                        children: n
                            ? (0, i.jsx)(tM.y, {
                                  message: eu.intl.string(eu.t.fjcCk5),
                                  type: tP.Ck.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, i.jsx)(tM.y, {
                                  message: "",
                                  type: tP.Ck.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, i.jsx)(tG, {}) },
                              }),
                    }),
            ),
        });
    };
var tV = n(424994),
    tB = n(381941),
    tH = n(699976),
    tj = n(994063);
let tY = (0, eQ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("41816"),
                n.e("95700"),
                n.e("9987"),
                n.e("5959"),
                n.e("46461"),
                n.e("67485"),
                n.e("76090"),
                n.e("12289"),
                n.e("81857"),
                n.e("8516"),
                n.e("45650"),
                n.e("27660"),
                n.e("85484"),
                n.e("98848"),
                n.e("5067"),
                n.e("19397"),
                n.e("18320"),
                n.e("64422"),
                n.e("55990"),
                n.e("6432"),
                n.e("36407"),
                n.e("69134"),
                n.e("79705"),
                n.e("69279"),
                n.e("23924"),
                n.e("42205"),
                n.e("71091"),
                n.e("28367"),
                n.e("10471"),
                n.e("35429"),
                n.e("63232"),
                n.e("11301"),
                n.e("60235"),
                n.e("64827"),
                n.e("30938"),
                n.e("96643"),
                n.e("94493"),
                n.e("92789"),
                n.e("47834"),
                n.e("74016"),
                n.e("19551"),
                n.e("84569"),
                n.e("6338"),
                n.e("96811"),
                n.e("7743"),
                n.e("45959"),
                n.e("60658"),
                n.e("8304"),
                n.e("18573"),
                n.e("55936"),
                n.e("31988"),
                n.e("39667"),
                n.e("5812"),
                n.e("26073"),
                n.e("34303"),
                n.e("28866"),
                n.e("1368"),
                n.e("58038"),
                n.e("93159"),
                n.e("31716"),
                n.e("8751"),
                n.e("62931"),
                n.e("81987"),
                n.e("50417"),
                n.e("62465"),
                n.e("34530"),
                n.e("9233"),
                n.e("54975"),
                n.e("20287"),
                n.e("71133"),
                n.e("77084"),
                n.e("54625"),
                n.e("49697"),
                n.e("80230"),
                n.e("37687"),
                n.e("48900"),
                n.e("95093"),
                n.e("63645"),
                n.e("71234"),
                n.e("27773"),
                n.e("5636"),
                n.e("87196"),
                n.e("834"),
                n.e("60177"),
                n.e("21570"),
                n.e("69933"),
                n.e("26728"),
                n.e("1354"),
                n.e("20282"),
                n.e("54282"),
                n.e("23276"),
                n.e("78412"),
                n.e("63213"),
                n.e("9662"),
                n.e("80239"),
                n.e("75016"),
                n.e("4193"),
                n.e("95444"),
                n.e("76087"),
                n.e("48720"),
                n.e("33134"),
                n.e("80112"),
                n.e("59880"),
                n.e("6723"),
                n.e("54791"),
                n.e("25279"),
                n.e("54819"),
                n.e("31445"),
                n.e("77473"),
                n.e("69747"),
                n.e("35996"),
                n.e("77467"),
                n.e("21856"),
                n.e("11133"),
                n.e("8694"),
                n.e("49013"),
                n.e("42324"),
                n.e("93461"),
                n.e("18489"),
                n.e("46430"),
                n.e("90779"),
                n.e("39808"),
                n.e("9763"),
                n.e("20667"),
            ]).then(n.bind(n, 963614)),
        webpackId: 963614,
    }),
    tW = r.createContext(void 0);
function tK(e) {
    let { children: t } = e,
        n = r.useRef(null),
        s = r.useId();
    return (
        (0, eg.t)(n),
        (0, i.jsx)(tW.Provider, {
            value: s,
            children: (0, i.jsx)("div", {
                ref: n,
                className: tj.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": s,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function tz(e) {
    let { children: t, backgroundImgSrc: n, className: r, style: s = {} } = e,
        { primaryColor: a, secondaryColor: o } = (0, X.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${a}, ${o})`),
        (0, i.jsx)(eA.N, {
            theme: eY.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, i.jsx)("div", { className: ef()(tj.ZK, e, r), style: s, children: t }),
        })
    );
}
function t$(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: tj.$m, children: t });
}
function tq(e) {
    var t;
    let n,
        s,
        a,
        o,
        { channel: l, user: c, onReaction: _, entry: f, buttons: h = [], header: p, onVoiceChannelPreview: m } = e,
        [g, A] = r.useState(!1),
        [T, S] = r.useState(null),
        N = (0, u.bG)(
            [tf.A],
            () => null != l && eY.kvI.CONTENT_ENTRY_EMBEDS.has(l.type) && tf.A.can(eY.xBc.SEND_MESSAGES, l),
        ),
        [y, C] = r.useState(!1),
        [v, O] = r.useState(!1),
        { voiceBar: R, joinVoiceButton: b } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: a, channel: o } = (0, tC.A)(n),
                l = (0, eq.Ay)(o),
                { needSubscriptionToAccess: c } = (0, e7.A)(t?.id),
                _ = (0, u.bG)([t_.A], () => (null != o ? t_.A.getGuild(o.guild_id) : void 0)),
                f = (0, u.yK)([tm.Ay], () => (null != o ? tm.Ay.getVoiceStatesForChannel(o) : []), [o]),
                h = (0, u.bG)([tE.A], () => tE.A.isInChannel(o?.id)),
                p = r.useMemo(() => {
                    for (let e of f) {
                        let t = td.A.getDMFromUserId(e.user.id),
                            n = null != t && tp.Ay.isChannelMuted(null, t),
                            i = th.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [f]);
            if (null == o || null == _) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let E = null != a,
                m = (e) => {
                    let { children: t, text: n, hasRestrictedOrMutedVCParticipant: r } = e,
                        s = r
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(eb.i, { size: "custom", width: 13, height: 13, className: tj.vb }),
                                      eu.intl.string(eu.t.d6DpXI),
                                  ],
                              })
                            : n;
                    return (0, i.jsx)(
                        em.m,
                        {
                            "aria-label": r ? eu.intl.string(eu.t.d6DpXI) : (n ?? !1),
                            __unsupportedReactNodeAsText: s,
                            shouldShow: !0,
                            children: t,
                        },
                        "voice-preview",
                    );
                };
            return {
                voiceBar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: tj.kP,
                            children: [
                                (0, i.jsx)(m, {
                                    text: eu.intl.string(eu.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: p,
                                    children: (0, i.jsxs)(d.D, {
                                        "aria-label": eu.intl.string(eu.t.WIVYqJ),
                                        onClick: () => {
                                            eM.A.updateChatOpen(o.id, !0), (0, e8.iN)(o.id), s?.(o);
                                        },
                                        className: tj.I3,
                                        children: [
                                            (0, i.jsx)(e5.Ay, {
                                                guild: _,
                                                size: e5.Ay.Sizes.SMOL,
                                                className: tj.O9,
                                                active: !0,
                                            }),
                                            (0, i.jsx)(eO._, {
                                                size: "xxs",
                                                color: ep.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, i.jsx)(eD.H, { size: "xs", color: ep.A.colors.TEXT_DEFAULT }),
                                            (0, i.jsx)(ev.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: tj.NR,
                                                children: l,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(tc.A, {
                                    guildId: _.id,
                                    users: f,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, i.jsx)(eR.eu, {
                                            src: e.user.getAvatarURL(_.id, 16),
                                            size: eN._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, i.jsx)("div", {
                                            className: tj.V9,
                                            children: (0, i.jsx)(ev.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(ey.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, i.jsx)(m, {
                          hasRestrictedOrMutedVCParticipant: p,
                          children: (0, i.jsx)(I.$, {
                              onClick: () => {
                                  eZ.A.handleVoiceConnect({
                                      channel: o,
                                      connected: h,
                                      needSubscriptionToAccess: c,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: E ? eu.intl.string(eu.t.I6JG46) : eu.intl.string(eu.t.VJlc0S),
                              icon: E ? eL.k : eD.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: l, entry: f, onVoiceChannelPreview: m }),
        { embeddedActivity: D } = (0, ty.A)(f),
        L =
            ((t = D),
            (n = (0, u.bG)([t_.A], () => t_.A.getGuild((0, eU.D)(t?.location)))),
            (s = (0, u.bG)([td.A], () => td.A.getChannel((0, eU.H)(t?.location)))),
            (a = (0, u.yK)([E.default], () => t?.participants?.map((e) => E.default.getUser(e.userId)) ?? [])),
            (o = (0, eq.Ay)(s)),
            null != t && null != n && null != s && ej.k3.has(s.type)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: tj.kP,
                              children: [
                                  (0, i.jsxs)(d.D, {
                                      "aria-label": eu.intl.string(eu.t["W/A4Qp"]),
                                      onClick: () => (0, e8.iN)(s.id),
                                      className: tj.I3,
                                      children: [
                                          (0, i.jsx)(e5.Ay, {
                                              guild: n,
                                              size: e5.Ay.Sizes.SMOL,
                                              className: tj.O9,
                                              active: !0,
                                          }),
                                          (0, i.jsx)(eO._, {
                                              size: "xxs",
                                              color: ep.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, i.jsx)(eI.N, { size: "xs", color: ep.A.colors.TEXT_DEFAULT }),
                                          (0, i.jsx)(ev.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: tj.NR,
                                              children: o,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(tc.A, {
                                      guildId: n.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, i.jsx)(eR.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: eN._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, i.jsx)("div", {
                                              className: tj.V9,
                                              children: (0, i.jsx)(ev.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(ey.h, { size: 16 }),
                      ],
                  })
                : null),
        M = null != b && 0 === h.length ? [b] : h,
        P = M.length > 0,
        x = M.length >= 2,
        [U, G] = r.useState(!P),
        F = w.Ay.getName(l?.guild_id, l?.id, c),
        V = (0, eq.Ay)(l, !0),
        B =
            null != l && g
                ? eu.intl.formatToPlainString(eu.t["8lzR/R"], { channel: V })
                : eu.intl.formatToPlainString(eu.t["4c+CAx"], { channel: `@${F}` }),
        H = g ? eu.intl.string(eu.t.Z2CUgn) : eu.intl.string(eu.t.XLGiTG),
        j = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (tg.default.track(eY.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: tV.UG.GUILD_MEMBER_LIST,
                        channel_id: l?.id,
                        guild_id: l?.guild_id,
                    }),
                    (0, eJ.Dr)(eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    C(!0),
                    O(!1),
                    g)
                )
                    k()(null != l, "shareToChannelMode should only be true if a valid channel is passed"), (t = l);
                else {
                    let e = await ew.A.getOrEnsurePrivateChannel(c.id);
                    t = td.A.getChannel(e) ?? null;
                }
                return (
                    k()(null != t, "Send channel must be defined"),
                    W({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            O(!0),
                                setTimeout(() => {
                                    C(!1), _(e, t);
                                }, 600);
                        },
                        interactionType: tV.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        Y = async (e) => {
            let t;
            if (((0, eJ.Dr)(eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                k()(null != l, "shareToChannelMode should only be true if a valid channel is passed"), (t = l);
            else {
                let e = await ew.A.openPrivateChannel({ recipientIds: c.id }),
                    n = td.A.getChannel(e);
                k()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === eY.rbe.DM ? tV.PA.DM_REACTION_MESSAGE_SENT : tV.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return W({ reply: e, sendToChannel: t, interactionType: n, onComplete: _, requiresChannelReadiness: !0 });
        },
        W = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: i, interactionType: r, requiresChannelReadiness: s } = e;
            T?.focus(),
                await (0, tN.d)({
                    channel: n,
                    content: t,
                    entry: f,
                    whenReady: s,
                    doNotNotifyOnError: !1,
                    location: tB.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                i?.(r, n);
        },
        K = p ?? R ?? L,
        z = () => {
            A((e) => !e), U && T?.focus();
        },
        $ = (e) => {
            G(e), e && T?.focus();
        };
    return (0, i.jsxs)("div", {
        style: { pointerEvents: y ? "none" : "all" },
        children: [
            (0, i.jsx)(tF, { sent: v, shown: y, className: tj.Jt }),
            K ??
                (0, i.jsx)(tD, {
                    children: (0, i.jsxs)("div", {
                        className: tj.T7,
                        children: [
                            (0, i.jsx)(tZ, { channel: l, onClickSuggestion: j }),
                            (0, i.jsx)(e$, { onSelectEmoji: j }),
                        ],
                    }),
                }),
            (0, i.jsxs)("div", {
                className: U ? tj.P2 : tj.VE,
                children: [
                    (0, i.jsx)(ez, {
                        placeholder: B,
                        onEnter: Y,
                        setEditorRef: (e) => S(e),
                        channel: g ? l : void 0,
                        showEmojiButton: null != K,
                        className: tj.N8,
                        autoFocus: !1,
                        renderAttachButton: N
                            ? () =>
                                  (0, i.jsx)(em.m, {
                                      text: H,
                                      children: (0, i.jsx)(d.D, {
                                          className: tj.wD,
                                          onClick: z,
                                          children: g
                                              ? (0, i.jsx)(eI.N, { size: "custom", width: 20, height: 20 })
                                              : (0, i.jsx)(eT.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    P &&
                        (0, i.jsx)(d.D, {
                            onClick: () => $(!1),
                            className: tj.i3,
                            children: (0, i.jsx)(eS.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: ep.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === U &&
                (0, i.jsxs)("div", {
                    className: tj.fh,
                    children: [
                        !x &&
                            (0, i.jsx)(
                                I.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => $(!0),
                                    size: "md",
                                    text: eu.intl.string(eu.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        M,
                    ],
                }),
        ],
    });
}
let tZ = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        a(!0);
    }, []);
    let o = !!f.A.keyboardModeEnabled && !s,
        l = (0, e0.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tA._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: r } = e;
            return null != r
                ? (0, i.jsx)(
                      "div",
                      {
                          children: (0, i.jsx)(em.m, {
                              asContainer: !0,
                              text: eu.intl.formatToPlainString(eu.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": eu.intl.formatToPlainString(eu.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, i.jsx)(tu, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: tj.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function tX(e) {
    let { channel: t, userDescription: n, entry: r, disableGameProfileLinks: s, onUserPopoutClosed: a } = e,
        o = t?.guild_id,
        { displayParticipants: l, participant1: c, participant2: d, numOtherParticipants: _ } = (0, P.A)(r, 3),
        f = (0, u.bG)([E.default], () => E.default.getUser(r.author_id)),
        { streamPreviewUrl: h } = (0, tC.A)(r),
        p = [c, d];
    return (0, i.jsxs)("div", {
        className: tj.MH,
        children: [
            (0, i.jsxs)("div", {
                className: tj.WP,
                children: [
                    (0, i.jsx)(eE.A, {
                        maxUsers: 3,
                        users: l,
                        guildId: o,
                        size: eN._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: a,
                    }),
                    (0, i.jsx)(ey.h, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(eC.D, {
                        variant: "heading-sm/normal",
                        className: ef()(tj.Xn, tj.zA),
                        children: eu.intl.format(n, {
                            user0: w.Ay.getName(o, t?.id, p[0]),
                            user1: w.Ay.getName(o, t?.id, p[1]),
                            countOthers: _,
                            countOthersHook: (e, t) =>
                                (0, i.jsx)(
                                    ev.E,
                                    { variant: "text-sm/medium", className: ef()(tj.Mj, tj.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, i.jsx)(
                                    tT.A,
                                    {
                                        textClassName: ef()(tj.Mj, tj.nk),
                                        text: e,
                                        user: p[0],
                                        channel: t,
                                        onPopoutClosed: a,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, i.jsx)(
                                    tT.A,
                                    {
                                        textClassName: ef()(tj.Mj, tj.nk),
                                        text: e,
                                        user: p[1],
                                        channel: t,
                                        onPopoutClosed: a,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != h && (0, i.jsx)(eX.Ay, { size: eX.Ay.Sizes.SMALL }),
            null != f && (0, i.jsx)(tL.A, { user: f, channel: t, guildId: o, entry: r, disableGameProfileLinks: s }),
        ],
    });
}
function tQ(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(d.D, { className: tj.Zw, onClick: n, children: t });
}
function tJ(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: a,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: _ = !1,
            showCoverImage: f = !0,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: p,
            ...E
        } = e,
        { entry: m } = E,
        g = (0, tI.zD)(m),
        A = g ? m.extra?.application_id : void 0,
        I = (0, tt.W)();
    null != I && (A = I);
    let T = (0, e3.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : A,
                source: e2.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: m.author_id,
            },
            { onOpened: () => p?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: N } = (0, M.nO)({ entry: m, showCoverImage: f }),
        y = (0, te.w)({ location: "content_inventory" }),
        C = (0, u.bG)([e9.A], () => e9.A.getDetectableIdsToApplicationIds()),
        v = g ? T : void 0,
        O = r.useContext(tW);
    return (0, i.jsxs)("div", {
        className: tj.au,
        children: [
            (0, i.jsx)(tX, { disableGameProfileLinks: _, ...E, onUserPopoutClosed: h }),
            (0, i.jsxs)(tz, {
                backgroundImgSrc: S?.src,
                children: [
                    (0, i.jsxs)("div", {
                        className: tj.CG,
                        children: [
                            (0, i.jsx)("div", {
                                className: tj.Fb,
                                children: (0, i.jsx)(tS.d, {
                                    image: S,
                                    smallImage: N,
                                    aspectRatio: f ? "none" : void 0,
                                    onClick: o ?? v,
                                    size: tS.w.SIZE_72,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: tj.iC,
                                children: [
                                    (0, i.jsx)(tQ, {
                                        onClick: l ?? v,
                                        children: (0, i.jsx)(eC.D, {
                                            id: O,
                                            variant: "heading-md/medium",
                                            className: ef()(tj.$2, { [tj.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tQ, {
                                              onClick: c ?? v,
                                              children: (0, i.jsx)(ev.E, {
                                                  variant: "text-sm/normal",
                                                  className: tj.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(ey.h, { size: 8 }),
                                    s,
                                ],
                            }),
                            (0, i.jsx)("div", { className: tj.hO, children: d }),
                        ],
                    }),
                    a,
                ],
            }),
            y && null != A && null != C[A]
                ? (0, i.jsx)(tY, {
                      className: tj.zu,
                      rewardOfferNoticeClassName: tj.PU,
                      applicationId: A,
                      userIds: [m.author_id],
                      location: "content_popout",
                      guildId: E.channel?.guild_id,
                      channelId: E.channel?.id,
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
            children: a,
            stream: o,
            onClickThumbnail: l,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: _,
            trackRankingItemInteraction: f,
            ...h
        } = e,
        p = (0, u.bG)([td.A], () => td.A.getChannel(o?.channelId)),
        [E] = r.useMemo(() => (0, e6.eo)(p, tE.A, t_.A, tf.A, e1.default), [p]),
        { entry: m } = h,
        g = (0, tI.zD)(m),
        A = g ? m.extra?.application_id : void 0,
        I = (0, tt.W)();
    null != I && (A = I);
    let T = (0, e3.A)(
            {
                location: "ContentPopout",
                applicationId: A,
                source: e2.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: m.author_id,
            },
            { onOpened: () => f?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        S = g ? T : void 0,
        { activity: N, activityApplication: y, fallbackApplication: C } = (0, ty.A)(m),
        { largeImage: v, smallImage: O } = (0, M.D8)(N, y ?? C),
        { largeImage: R } = (0, M.nO)({ entry: m }),
        b = (0, te.w)({ location: "content_inventory" }),
        D = (0, u.bG)([e9.A], () => e9.A.getDetectableIdsToApplicationIds()),
        L = r.useContext(tW);
    return (0, i.jsxs)("div", {
        className: tj.au,
        children: [
            (0, i.jsx)(tX, { ...h, onUserPopoutClosed: _ }),
            (0, i.jsxs)(tz, {
                backgroundImgSrc: R?.src,
                className: tj.uR,
                children: [
                    (0, i.jsx)(tQ, {
                        onClick: E
                            ? () => {
                                  eP.default.selectVoiceChannel(o.channelId), (0, ex.Nl)(o);
                              }
                            : void 0,
                        children: (0, i.jsxs)("div", {
                            className: tj.nh,
                            children: [
                                (0, i.jsx)(e4.A, { className: tj.j7, stream: o }),
                                E &&
                                    (0, i.jsx)("div", {
                                        className: tj.NE,
                                        children: (0, i.jsx)(ev.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: eu.intl.string(eu.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: tj.$6,
                        children: [
                            null != v &&
                                (0, i.jsx)("div", {
                                    className: tj.Fb,
                                    children: (0, i.jsx)(tS.d, {
                                        image: v,
                                        smallImage: O,
                                        onClick: l ?? S,
                                        size: tS.w.SIZE_72,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tj.gv,
                                children: [
                                    (0, i.jsx)(tQ, {
                                        onClick: c ?? S,
                                        children: (0, i.jsx)(eC.D, {
                                            id: L,
                                            variant: "heading-md/semibold",
                                            className: tj.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tQ, {
                                              onClick: d ?? S,
                                              children: (0, i.jsx)(ev.E, {
                                                  variant: "text-sm/normal",
                                                  className: tj.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(ey.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    a,
                ],
            }),
            b && null != A && null != D[A]
                ? (0, i.jsx)(tY, {
                      className: tj.zu,
                      applicationId: A,
                      userIds: [m.author_id],
                      location: "content_popout",
                      guildId: h.channel?.guild_id,
                      channelId: h.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tH.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var t1 = n(299846);
let t2 = (e) => {
    let { channel: t, entry: n, onReaction: s, onVoiceChannelPreview: a, disableActivityProfileLinks: o } = e,
        { largeImage: l } = (0, M.nO)({ entry: n, showCoverImage: !1 }),
        { user: c, details: d, activity: _, embeddedActivity: f } = (0, t1.u)(n),
        { primaryColor: h, secondaryColor: p } = (0, X.A)(l?.src),
        E = (0, u.bG)([D.default], () => D.default.locale),
        { displayParticipants: m, participant1: g, participant2: U, numOtherParticipants: k } = (0, P.A)(n, 3),
        G = () => {
            (0, R.hg)(n.extra.application_id);
        },
        F = r.useCallback(
            (e) => {
                let i, r, s;
                if (l?.src == null || null == t || null == c) return;
                let a =
                    k > 0
                        ? ((e) => {
                              let { entry: t, channel: n, users: i, countOthers: r } = e,
                                  s = eu.t["7j/5mg"];
                              return eu.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: w.Ay.getName(n?.guild_id, n?.id, i[0]),
                                      user2: w.Ay.getName(n?.guild_id, n?.id, i[1]),
                                      countOthers: r,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [g, U], countOthers: k })
                        : ((i = eu.t["bES+y2"]),
                          (r = w.Ay.getName(t.guild_id, t.id, c)),
                          (s = n.extra.activity_name),
                          eu.intl.formatToMarkdownString(i, { gameName: s, userName: r }).replaceAll("*", ""));
                return ec({
                    entry: n,
                    applicationImageSrc: l?.src,
                    avatarSrcs: m.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, x.As)(n, E),
                    colors: [h, p],
                    channelId: e,
                });
            },
            [l?.src, t, m, n, E, k, g, U, h, p, c],
        ),
        { data: V } = (0, b.YY)(n.extra.application_id),
        B = (0, C.A)({ application: V, analyticsLocations: [O.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == c) return null;
    let H = (0, i.jsx)(ed.iT, { location: ed.N5.POPOUT, entry: n }),
        j = (0, i.jsx)(tJ, {
            channel: t,
            userDescription: (0, x.JM)(n) ? eu.t.vPg1JT : eu.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: d,
            badges: H,
            entry: n,
            showCoverImage: !1,
            onClickTitle: o ? void 0 : G,
            onClickSubtitle: o ? void 0 : G,
            onClickThumbnail: o ? void 0 : G,
        }),
        Y = (0, N.A)(_, eY.jUm.JOIN) || (0, y.A)(_),
        W = Y
            ? (0, i.jsx)(v.A, { embeddedActivity: f, activity: _, user: c, variant: "primary", size: "md", icon: A.I })
            : null,
        K =
            null == B
                ? null
                : (0, i.jsx)(I.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: B,
                      text: eu.intl.string(eu.t["jaYS/h"]),
                      icon: T.h,
                  }),
        z =
            null != K || o
                ? null
                : (0, i.jsx)(I.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: G,
                      text: eu.intl.string(eu.t.GDWYR8),
                      icon: S.k,
                  }),
        $ = [K, Y && !o ? W : z].filter(L.Vq);
    return (0, i.jsxs)(tK, {
        children: [
            j,
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tq, {
                    onReaction: s,
                    onVoiceChannelPreview: a,
                    user: c,
                    channel: t,
                    generateReactionImage: F,
                    reactionImageAltText: eu.intl.formatToPlainString(eu.t.tAwI1k, {
                        username: c.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: $,
                }),
            }),
        ],
    });
};
var t3 = n(322789),
    t6 = n(808380),
    t4 = n(687966),
    t5 = n(39623),
    t7 = n(960076),
    t8 = n(154483),
    t9 = n(562708),
    ne = n(688810),
    nt = n(139286);
function nn(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: r } = (0, ne.Ay)(n),
        s = (0, C.A)({ application: t, analyticsLocations: r });
    return (
        (0, nt.A)({
            name: t9.ImpressionNames.CLOUD_PLAY_CTA,
            type: t9.ImpressionTypes.VIEW,
            properties: { location_stack: r },
        }),
        (0, i.jsx)(
            I.$,
            {
                variant: "primary",
                size: "md",
                icon: T.h,
                text: eu.intl.string(eu.t["jaYS/h"]),
                onClick: () => {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var ni = n(601007),
    nr = n(648246),
    ns = n(308335),
    na = n(790381),
    no = n(266080);
let nl = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: r, timestamp: s, colors: a, channelId: o } = e,
        l = n.extra.game_name,
        u = {
            AvatarImage1: i[0],
            ...(null != i[1] && { AvatarImage2: i[1] }),
            ...(null != i[2] && { AvatarImage3: i[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await $({
        assetsToLoad: u,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: i, description: r, entry: s, numAvatars: a } = t,
                    o = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === H.uS.Failure &&
                        e.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    el({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: ea, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    eo({
                        canvas: e,
                        badges: ((e, t) => {
                            let n = [{ iconPath: Q, text: t }],
                                i = Z.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= F()().diff(F()(i), "days") &&
                                    n.push({ iconPath: es, text: eu.intl.string(eu.t.vYuyWf) }),
                                (0, x.Rf)(e) && n.push({ iconPath: J, text: eu.intl.string(eu.t.keY6mW) }),
                                (0, x.BZ)(e))
                            ) {
                                let t = (0, x.iy)(e);
                                n.push({
                                    iconPath: ei,
                                    text: eu.intl.formatToPlainString(eu.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, x.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: er, text: eu.intl.string(eu.t.kAlUsy) });
                            let r = (0, x.KH)(e);
                            if ((null != r && n.push({ iconPath: en, text: (0, x.us)(r) }), (0, x.L7)(e))) {
                                let { text: t } = (0, x.Pj)(e);
                                null != t && n.push({ iconPath: ee, text: t });
                            }
                            if ((0, x.uw)(e)) {
                                let t = (0, x.ty)(e);
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
            })(e, { timestamp: s, colors: a, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${l}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
};
var nu = n(968309),
    nc = n(30370);
function nd(e) {
    let t = (0, u.bG)([nc.A], () => nc.A.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, nu.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var n_ = n(18282);
let nf = [...t3.n, ed.Yq],
    nh = {
        [t6.Y.DESKTOP]: null,
        [t6.Y.LINUX]: null,
        [t6.Y.MACOS]: null,
        [t6.Y.NINTENDO]: null,
        [t6.Y.IOS]: null,
        [t6.Y.ANDROID]: null,
        [t6.Y.XBOX]: no.A,
        [t6.Y.PLAYSTATION]: na.A,
    },
    np = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: s,
                onReaction: a,
                onVoiceChannelPreview: o,
                onUserPopoutClosed: l,
                trackRankingItemInteraction: c,
            } = e,
            { largeImage: d } = (0, M.nO)({ entry: n }),
            { user: _, details: f, appName: h, activity: p, embeddedActivity: E } = (0, t1.u)(n),
            { primaryColor: m, secondaryColor: g } = (0, X.A)(d?.src),
            A = (0, u.bG)([D.default], () => D.default.locale),
            { streamPreviewUrl: I, stream: T } = (0, tC.A)(n),
            { displayParticipants: S, participant1: R, participant2: U, numOtherParticipants: k } = (0, P.A)(n, 3),
            G = n.extra.platform,
            F = n.extra.application_id,
            V = null != G ? nh[G] : null,
            B = nd(G === t6.Y.XBOX ? eY.fg2.XBOX : G === t6.Y.PLAYSTATION ? eY.fg2.PLAYSTATION : void 0),
            { data: H } = (0, b.YY)(F),
            j = (0, t8.A)("member_list_gaming_content_popout", F),
            { analyticsLocations: Y } = (0, ne.Ay)(O.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            W = (0, C.J)(H),
            K = (0, ns.o)(p?.application_id ?? E?.applicationId ?? H?.id),
            z = r.useCallback(
                (e) => {
                    let i, r, s, a;
                    if (d?.src == null || null == t || null == _) return;
                    let o =
                        k > 0
                            ? ((e) => {
                                  let { entry: t, channel: n, users: i, countOthers: r } = e,
                                      s = (0, x.JM)(t) ? eu.t.QaUWPd : eu.t["7j/5mg"];
                                  return eu.intl
                                      .formatToMarkdownString(s, {
                                          gameName: t.extra.game_name,
                                          user1: w.Ay.getName(n?.guild_id, n?.id, i[0]),
                                          user2: w.Ay.getName(n?.guild_id, n?.id, i[1]),
                                          countOthers: r,
                                      })
                                      .replaceAll("*", "");
                              })({ entry: n, channel: t, users: [R, U], countOthers: k })
                            : ((i = (0, x.JM)(n)),
                              (r = (0, x.Rf)(n)
                                  ? i
                                      ? eu.t.MHO1AV
                                      : eu.t.i7AOzw
                                  : i
                                    ? eu.t["lLPKY+"]
                                    : eu.t["bES+y2"]),
                              (s = w.Ay.getName(t?.guild_id, t?.id, _)),
                              (a = n.extra.game_name),
                              eu.intl.formatToMarkdownString(r, { gameName: a, userName: s }).replaceAll("*", ""));
                    return nl({
                        entry: n,
                        applicationImageSrc: d?.src,
                        avatarSrcs: S.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: o,
                        timestamp: (0, x.As)(n, A),
                        colors: [m, g],
                        channelId: e,
                    });
                },
                [d?.src, t, S, n, A, k, R, U, m, g, _],
            );
        if (null == _) return null;
        let $ = (0, i.jsx)(ed.mG, {
                location: null == I ? ed.N5.POPOUT : ed.N5.STREAMING_POPOUT,
                children: nf.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
            }),
            q =
                null == T
                    ? (0, i.jsx)(tJ, {
                          channel: t,
                          headerIcons:
                              null == V
                                  ? null
                                  : (0, i.jsx)(n_.A, {
                                        onClick: B,
                                        Icon: V,
                                        "aria-label": eu.intl.string(eu.t.YR4cHH),
                                    }),
                          userDescription: (0, x.JM)(n) ? eu.t.vPg1JT : eu.t.rPqqts,
                          title: h,
                          subtitle: f,
                          badges: $,
                          entry: n,
                          disableGameProfileLinks: s,
                          onUserPopoutClosed: l,
                          trackRankingItemInteraction: c,
                          children:
                              j.length > 0
                                  ? (0, i.jsx)(ni.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: F,
                                        analyticsLocations: Y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, i.jsx)(t0, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: f,
                          badges: $,
                          userDescription: eu.t["6oWFUN"],
                          entry: n,
                          stream: T,
                          onUserPopoutClosed: l,
                          trackRankingItemInteraction: c,
                          children:
                              j.length > 0
                                  ? (0, i.jsx)(ni.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: F,
                                        analyticsLocations: Y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            Z =
                !K && W
                    ? (0, i.jsx)(
                          nn,
                          { application: H, analyticsLocation: O.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            Q = [
                null == Z && ((0, N.A)(p, eY.jUm.JOIN) || (0, y.A)(p))
                    ? (0, i.jsx)(v.A, { activity: p, user: _, variant: "primary", size: "md", icon: t4._ }, "join")
                    : null,
                (0, t7.A)(p)
                    ? (0, i.jsx)(nr.A, { activity: p, size: "md", variant: "primary", icon: t5.b }, "watch")
                    : null,
                Z,
            ].filter(L.Vq);
        return (0, i.jsxs)(tK, {
            children: [
                q,
                (0, i.jsx)(t$, {
                    children: (0, i.jsx)(tq, {
                        onReaction: a,
                        onVoiceChannelPreview: o,
                        user: _,
                        channel: t,
                        generateReactionImage: z,
                        reactionImageAltText: eu.intl.formatToPlainString(eu.t.tAwI1k, {
                            username: _.username,
                            activity: n.extra.game_name,
                        }),
                        entry: n,
                        buttons: Q,
                    }),
                }),
            ],
        });
    },
    nE = (0, n(353640).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) })),
    nm = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
            { data: a } = (0, b.YY)(t.extra.application_id),
            { analyticsLocations: o } = (0, ne.Ay)(O.A.CLOUD_PLAY_POPOVER),
            l = (0, C.A)({ application: a, analyticsLocations: o }),
            u = (0, eJ.JZ)(eh.M.CLOUD_PLAY_NEW_BADGE),
            c = null != l && !u && n,
            { activeEntryId: d, setActiveEntryId: _ } = nE(),
            f = d === t.id,
            h = c && f ? [eh.M.CLOUD_PLAY_POPOVER] : [],
            [p, E] = (0, tO.kn)(h),
            m = p === eh.M.CLOUD_PLAY_POPOVER;
        r.useEffect(() => {
            c && null === d && _(t.id);
        }, [d, c, t.id, _]),
            r.useEffect(
                () => () => {
                    m && (E(tR.i.USER_DISMISS), _(null));
                },
                [m, E, _],
            );
        let [g, A] = r.useState(!1);
        return (
            r.useEffect(() => {
                m && !g && A(!0);
            }, [m, g]),
            (0, nt.A)(
                {
                    name: t9.ImpressionNames.CLOUD_PLAY_CTA,
                    type: t9.ImpressionTypes.VIEW,
                    properties: { location_stack: o },
                },
                { disableTrack: !g },
                [g],
            ),
            (0, i.jsx)(tv.A, {
                title: eu.intl.string(eu.t["+WNDtV"]),
                body: eu.intl.string(eu.t["5QKxGI"]),
                targetElementRef: s,
                shouldShow: m,
                position: "left",
                caretConfig: { align: "center" },
                gradientColor: "pink",
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/438a409c3a1f739514e0b26faa0e4d6c41a8fa108be0d4ef6f79e0eed01d24b5.svg",
                },
                actions: [
                    {
                        icon: T.h,
                        text: eu.intl.string(eu.t["jaYS/h"]),
                        onClick: () => {
                            l?.();
                        },
                    },
                ],
                onRequestClose: () => {
                    E(tR.i.USER_DISMISS), _(null);
                },
            })
        );
    },
    ng = (e) => {
        let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: r } = e;
        return (0, i.jsx)(nm, { entry: t, targetElementRef: r, isFirstApplicationOccurrence: n });
    };
var nA = n(363670),
    nI = n(205327),
    nT = n(52133),
    nS = n(835723),
    nN = n(172710),
    ny = n(655116),
    nC = n(763758),
    nv = n(286617),
    nO = n(533207),
    nR = n(495544),
    nb = n(121090),
    nD = n(974690);
let nL = async (e) => {
    let { user: t, channel: n, mediaImageSrc: i, artist: r, description: s, colors: a, badges: o } = e,
        l = ((e) => {
            let { avatarSrc: t, mediaImageSrc: n } = e;
            return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
        })({ avatarSrc: t.getAvatarURL(n.guild_id, 128), mediaImageSrc: i }),
        u = r.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
    return await $({
        assetsToLoad: l,
        drawImage: (e) => {
            var t, n, i, r;
            let l;
            (t = e),
                (l = a.map((e, t) => ({ color: e, stop: t }))),
                t.setSize({ w: 400, h: 120 }, 4),
                t.drawRoundedGradientRect(l, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                (n = e).drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, {
                    fillMode: H.VZ.Contain,
                }) === H.uS.Failure && n.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                (i = e),
                (r = s),
                i.setColor("white"),
                i.setFont({ size: 16, family: ea, weight: 500, truncate: H.Kq.Wrap }),
                i.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                eo({ canvas: e, badges: o, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${u}.png`.toLowerCase(),
            fileType: "png",
            channelId: n.id,
        },
    });
};
var nw = n(85451),
    nM = n(809854),
    nP = n(272984),
    nx = n(229812);
function nU(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, nM.e)(),
        { durationTimestamp: a, seekBarStyles: o } = r.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let i = Math.min(n, s),
                r = n - e,
                a = Math.floor((Math.max(i - e, 0) / r) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, x.W6)({ start: 0 }, r) };
        }, [t, s]);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: nx.lu,
              children: [
                  (0, i.jsx)(nw.z, { entry: n }),
                  (0, i.jsx)("div", { className: nx.Lt, children: (0, i.jsx)("div", { className: nx.Vp, style: o }) }),
                  (0, i.jsx)(ev.E, {
                      className: nx.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: a,
                  }),
              ],
          });
}
function nk(e) {
    let t,
        n,
        s,
        { channel: a, entry: o, closePopout: l, onReaction: c, onVoiceChannelPreview: d } = e,
        { largeImage: _ } = (0, M.nO)({ entry: o }),
        { activity: f, currentEntry: h, artist: p, title: E, user: m } = (0, nA.u7)(o),
        { primaryColor: g, secondaryColor: A } = (0, X.A)(_?.src),
        T = nd(eY.fg2.SPOTIFY),
        S = (0, u.bG)(
            [ny.A, nR.default],
            () => (f?.type === eY.$pd.LISTENING && null != m ? (0, nv.A)(ny.A, nR.default, m, f) : void 0),
            [f, m],
            nT.A,
        ),
        N = r.useCallback(() => {
            if (null == a || null == m) return;
            let e = f.timestamps?.start,
                t = (0, x.W6)(null != e ? { start: e } : o, Date.now());
            return nL({
                user: m,
                channel: a,
                mediaImageSrc: _?.src,
                artist: p,
                description: ((e, t, n) => {
                    let { artist: i, media: r } = e,
                        s = eu.t["6iNxrl"],
                        a = w.Ay.getName(t.guild_id, t.id, n);
                    return eu.intl.formatToMarkdownString(s, { artist: i, userName: a, media: r }).replaceAll("*", "");
                })({ artist: p, media: E }, a, m),
                colors: [g, A],
                badges: ((e) => {
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
        }, [f, p, a, o, _?.src, g, A, E, m]);
    if (null == f || null == h) return null;
    let y = p,
        C = [];
    h.media.provider === nI.X.SPOTIFY &&
        ((n = () => {
            (0, nN.Mp)(f);
        }),
        (s = () => {
            (0, nN.QX)(f, m.id);
        }),
        (t = () => {
            null != T ? T() : (0, nN.Mp)(f);
        }),
        (y = (0, i.jsx)(nC.A, {
            artists: p,
            canOpen: null != f.sync_id,
            linkClassName: tj.zA,
            onOpenSpotifyArtist: (e) => {
                (0, nN.mN)(f, m.id, e);
            },
        })),
        S?.syncDisabled === !1 &&
            C.push(
                (0, i.jsx)(
                    I.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: eu.intl.string(eu.t.eU3inB),
                        icon: nS.J,
                        onClick: () => {
                            (0, nO.A)(S, nP.Qp.USER_ACTIVITY_SYNC), l();
                        },
                    },
                    "listen-along",
                ),
            ));
    let v = (0, i.jsx)(tJ, {
        onClickThumbnail: s,
        channel: a,
        entry: o,
        headerIcons:
            h.media.provider === nI.X.SPOTIFY
                ? (0, i.jsx)(n_.A, { onClick: t, "aria-label": eu.intl.string(eu.t.rRffNz), Icon: nb.A })
                : null,
        userDescription: (0, x.JM)(o) ? eu.t.Tzx5D2 : eu.t.CcVI1T,
        title: E,
        onClickTitle: n,
        subtitle: y,
        badges: null,
        children: f.timestamps?.start != null && (0, i.jsx)(nU, { activity: f }),
    });
    return (0, i.jsxs)(tK, {
        children: [
            v,
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tq, {
                    onReaction: c,
                    onVoiceChannelPreview: d,
                    user: m,
                    channel: a,
                    generateReactionImage: N,
                    reactionImageAltText: eu.intl.formatToPlainString(eu.t.h2yWWX, {
                        username: m.username,
                        activity: p,
                    }),
                    entry: o,
                    buttons: C,
                }),
            }),
        ],
    });
}
var nG = n(56121),
    nF = n(263577),
    nV = n(868065),
    nB = n(352760);
let nH = [ed.Y8],
    nj = [nG.j.WEEK],
    nY = r.memo((e) => {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: s } = (0, M.nO)({ entry: t }),
            a = (0, x.TQ)(t);
        return null != a && (0, L.S1)(a, nj)
            ? (0, i.jsxs)(nV.Zp, {
                  selected: r,
                  children: [
                      (0, i.jsxs)(nV.UA, {
                          children: [
                              (0, i.jsx)(nV.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, i.jsx)(nV.ZB, { children: t.extra.artist.name }),
                              (0, i.jsx)(ed.mG, {
                                  location: ed.N5.CARD,
                                  children: nH.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, i.jsx)(nF.V, { src: s?.src, size: 48, className: nB.xn }),
                  ],
              })
            : null;
    });
var nW = n(210528);
let nK = (e) => {
    let t,
        n,
        { channel: s, entry: a, onReaction: o, onVoiceChannelPreview: l } = e,
        { parent_title: c, provider: d, image_url: _ } = a.extra.media,
        f = a.extra.artist.name,
        h = (0, u.bG)([E.default], () => E.default.getUser(a.author_id)),
        { primaryColor: p, secondaryColor: m } = (0, X.A)(_),
        g = (0, x.TQ)(a),
        A = r.useCallback(() => {
            var e, t, n;
            let i, r, o, l;
            if (null == s || null == h || !(0, L.S1)(g, nj)) return;
            let u =
                ((e = a),
                (t = s),
                (n = h),
                (r = (function (e) {
                    if (e === nG.j.WEEK) return eu.t.SjOZfm;
                })(g)),
                (o = w.Ay.getName(t.guild_id, t.id, n)),
                (l = e.extra.artist.name),
                eu.intl.formatToMarkdownString(r, { artist: l, userName: o }).replaceAll("*", ""));
            return nL({
                user: h,
                channel: s,
                mediaImageSrc: _,
                artist: f,
                description: u,
                colors: [p, m],
                badges:
                    null == (i = (0, x.Pv)(a, nD.K.AGGREGATE_COUNT)?.count)
                        ? []
                        : [{ iconPath: et, text: eu.intl.formatToPlainString(eu.t.HtifnG, { count: i }) }],
            });
        }, [_, f, s, a, p, g, m, h]),
        I = nd(eY.fg2.SPOTIFY);
    if (null == h || !(0, L.S1)(g, nj)) return null;
    let T = () => {
        let e = nP.M0.ALBUM,
            t = nW.A.isProtocolRegistered()
                ? nP.RQ.PLAYER_OPEN(e, a.extra.media.external_parent_id)
                : nP.RQ.WEB_OPEN(e, a.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, i.jsxs)(tK, {
        children: [
            (0, i.jsx)(tJ, {
                onClickTitle: T,
                onClickSubtitle: () => {
                    let e = nP.M0.ARTIST,
                        t = nW.A.isProtocolRegistered()
                            ? nP.RQ.PLAYER_OPEN(e, a.extra.artist.external_id)
                            : nP.RQ.WEB_OPEN(e, a.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: T,
                channel: s,
                entry: a,
                headerIcons:
                    d === nI.X.SPOTIFY
                        ? (0, i.jsx)(n_.A, { onClick: I, Icon: nb.A, "aria-label": eu.intl.string(eu.t["0ZB/XE"]) })
                        : null,
                userDescription: eu.t.CcVI1T,
                title: c,
                subtitle: f,
                badges: (0, i.jsx)(ed.mG, {
                    location: ed.N5.POPOUT,
                    children: nH.map((e, t) => (0, i.jsx)(e, { entry: a }, t)),
                }),
            }),
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tq, {
                    onReaction: o,
                    onVoiceChannelPreview: l,
                    user: h,
                    channel: s,
                    generateReactionImage: A,
                    reactionImageAltText:
                        ((t = a),
                        (n = h),
                        eu.intl.formatToPlainString(eu.t.Osmpr9, {
                            username: n.username,
                            artist: t.extra.artist.name,
                        })),
                    entry: a,
                }),
            }),
        ],
    });
};
var nz = n(977001);
let n$ = (e) => {
    let t,
        n,
        { channel: s, entry: a, disableGameProfileLinks: o, onReaction: l, onVoiceChannelPreview: u } = e,
        { largeImage: c } = (0, M.nO)({ entry: a }),
        { user: d, details: _, appName: f } = (0, t1.u)(a),
        { primaryColor: h, secondaryColor: p } = (0, X.A)(c?.src),
        E = (0, x.ty)(a),
        m = (0, x.TQ)(a),
        g = r.useCallback(
            (e) => {
                if (null != s && null != d && null != E && null != m && (0, nz._E)(m)) {
                    var t, n, i;
                    let r, o, l;
                    return nl({
                        entry: a,
                        applicationImageSrc: c?.src,
                        avatarSrcs: [d.getAvatarURL(s?.guild_id, 128)],
                        description:
                            ((t = a),
                            (n = s),
                            (i = d),
                            (r = (function (e) {
                                if (e === nG.j.WEEK) return eu.t["7TXfc6"];
                            })(m)),
                            (o = w.Ay.getName(n.guild_id, n.id, i)),
                            (l = t.extra.game_name),
                            eu.intl.formatToMarkdownString(r, { gameName: l, userName: o }).replaceAll("*", "")),
                        timestamp: eu.intl.formatToPlainString(eu.t.YL7UE3, {
                            hours: Math.round(E / q.A.Seconds.HOUR),
                        }),
                        colors: [h, p],
                        channelId: e,
                    });
                }
            },
            [c?.src, s, E, a, h, m, p, d],
        );
    if (null == d || null == E || null == m || !(0, nz._E)(m)) return null;
    let A = null != a.extra.platform ? nh[a.extra.platform] : null;
    return (0, i.jsxs)(tK, {
        children: [
            (0, i.jsx)(tJ, {
                channel: s,
                headerIcons:
                    null == A ? null : (0, i.jsx)(n_.A, { Icon: A, "aria-label": eu.intl.string(eu.t.YR4cHH) }),
                entry: a,
                userDescription: eu.t.rPqqts,
                title: f,
                subtitle: _,
                badges: (0, i.jsx)(ed.mG, {
                    location: ed.N5.POPOUT,
                    children: nz.ac.map((e, t) => (0, i.jsx)(e, { entry: a }, t)),
                }),
                disableGameProfileLinks: o,
            }),
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tq, {
                    onReaction: l,
                    onVoiceChannelPreview: u,
                    user: d,
                    channel: s,
                    generateReactionImage: g,
                    reactionImageAltText:
                        ((t = a),
                        (n = d),
                        eu.intl.formatToPlainString(eu.t.tAwI1k, {
                            username: n.username,
                            activity: t.extra.game_name,
                        })),
                    entry: a,
                }),
            }),
        ],
    });
};
var nq = n(514243),
    nZ = n(347306),
    nX = n(123917),
    nQ = n(998218);
let nJ = async (e) => {
        let t,
            {
                mediaImageSrc: n,
                entry: i,
                avatarSrc: r,
                description: s,
                timestamp: a,
                episodeDescription: o,
                colors: l,
                channelId: u,
            } = e,
            c = i.extra.media_title,
            d = { AvatarImage: r, ...(null != n && { MediaImage: n }), ...(null != t && { ApplicationImage: t }) };
        return await $({
            assetsToLoad: d,
            drawImage: (e) => {
                let t,
                    n = l.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white");
                let i = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, {
                    fillMode: H.VZ.Contain,
                });
                i === H.uS.Failure &&
                    (i = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                    i === H.uS.Failure && e.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                    e.setFont({ size: 16, family: ea, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(s, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    eo({
                        canvas: e,
                        badges:
                            ((t = [
                                {
                                    iconPath:
                                        "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
                                    text: a,
                                },
                            ]),
                            null != o &&
                                t.push({
                                    iconPath:
                                        "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
                                    text: o,
                                }),
                            t),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            },
            exportConfigs: {
                format: H.z5.CloudUpload,
                quality: 1,
                fileName: `user-reacting-to-${c}.png`.toLowerCase(),
                fileType: "png",
                channelId: u,
            },
        });
    },
    n0 = (e) => {
        let t,
            n,
            { channel: s, entry: a, onReaction: o, onVoiceChannelPreview: l } = e,
            c = (0, u.bG)([E.default], () => E.default.getUser(a.author_id)),
            { largeImage: d } = (0, M.nO)({ entry: a }),
            { primaryColor: _, secondaryColor: f } = (0, X.A)(d?.src),
            h = (0, u.bG)([D.default], () => D.default.locale),
            p = nd(eY.fg2.CRUNCHYROLL),
            m = (0, x.kR)(a.extra.media_assets_large_text),
            g = r.useCallback(
                (e) => {
                    if (null != c && d?.src != null) {
                        var t, n, i;
                        let r, o, l;
                        return nJ({
                            entry: a,
                            mediaImageSrc: d?.src,
                            avatarSrc: c.getAvatarURL(s?.guild_id, 128),
                            description:
                                ((t = a),
                                (n = s),
                                (i = c),
                                (r = eu.t.LHF6D9),
                                (o = w.Ay.getName(n?.guild_id, n?.id, i)),
                                (l = t.extra.media_title),
                                eu.intl
                                    .formatToMarkdownString(r, {
                                        mediaTitle: l,
                                        userName: o,
                                        episodeDescription: t.extra.media_subtitle,
                                    })
                                    .replaceAll("*", "")),
                            timestamp: (0, x.As)(a, h),
                            episodeDescription: m,
                            colors: [_, f],
                            channelId: e,
                        });
                    }
                },
                [s, a, m, h, d?.src, _, f, c],
            ),
            A = () => {
                if (null == a.extra.url) return;
                let e = nQ.A.safeParseWithQuery(a.extra.url);
                null != e &&
                    null != e.protocol &&
                    null != e.hostname &&
                    (0, nX.h)({ href: nQ.A.format(e), trusted: !1 });
            };
        return null == c
            ? null
            : (0, i.jsxs)(tK, {
                  children: [
                      (0, i.jsx)(tJ, {
                          channel: s,
                          entry: a,
                          userDescription: (0, x.JM)(a) ? eu.t["LH+Z3y"] : eu.t.YuKgml,
                          title: a.extra.media_title,
                          subtitle: a.extra.media_subtitle,
                          headerIcons: (0, i.jsx)(n_.A, {
                              onClick: p,
                              Icon: nZ.k,
                              "aria-label": eu.intl.string(eu.t.jdJYXw),
                          }),
                          badges: (0, i.jsx)(ed.mG, {
                              location: ed.N5.POPOUT,
                              children: nq.R.map((e, t) => (0, i.jsx)(e, { entry: a }, t)),
                          }),
                          onClickTitle: A,
                          onClickThumbnail: A,
                      }),
                      (0, i.jsx)(t$, {
                          children: (0, i.jsx)(tq, {
                              onReaction: o,
                              onVoiceChannelPreview: l,
                              user: c,
                              channel: s,
                              generateReactionImage: g,
                              reactionImageAltText:
                                  ((t = a),
                                  (n = c),
                                  eu.intl.formatToPlainString(eu.t.kCbfbN, {
                                      username: n.username,
                                      activity: t.extra.media_title,
                                  })),
                              entry: a,
                          }),
                      }),
                  ],
              });
    },
    n1 = 72;
function n2(e) {
    return e?.type === p.S9.CONTENT_INVENTORY
        ? e.entry.content_type === l.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? n1 + 32
            : n1
        : 0;
}
let n3 = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, i.jsx)(t3.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, i.jsx)(nq.A, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, i.jsx)(nz.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, i.jsx)(nY, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, i.jsx)(nA.Ay, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(g.A, { ...n, entry: t });
            default:
                return null;
        }
    },
    n6 = (e) => {
        let { entry: t, targetElementRef: n, ...r } = e;
        return t.content_type === l.ContentInventoryEntryType.PLAYED_GAME
            ? (0, i.jsx)(ng, {
                  entry: t,
                  targetElementRef: n,
                  isFirstApplicationOccurrence: r.isFirstApplicationOccurrence ?? !1,
              })
            : null;
    },
    n4 = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, i.jsx)(n5, {
            onReaction: (e, i) => {
                n.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), t();
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
    },
    n5 = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case l.ContentInventoryEntryType.PLAYED_GAME:
                return (0, i.jsx)(np, { ...n, entry: t });
            case l.ContentInventoryEntryType.WATCHED_MEDIA:
                return (0, i.jsx)(n0, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_GAME:
                return (0, i.jsx)(n$, { ...n, entry: t });
            case l.ContentInventoryEntryType.TOP_ARTIST:
                return (0, i.jsx)(nK, { ...n, entry: t });
            case l.ContentInventoryEntryType.LISTENED_SESSION:
                return (0, i.jsx)(nk, { ...n, entry: t });
            case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(t2, { ...n, entry: t });
            default:
                return null;
        }
    },
    n7 = r.createContext(void 0),
    n8 = r.memo((e) => {
        let { index: t, ref: s, ...l } = e,
            p = r.useRef(null),
            [g, A] = r.useState("default"),
            [I, T] = r.useState(!1),
            S = (0, o.rm)(`${t}`),
            N = E.default.getCurrentUser()?.isStaff(),
            { isRich: y, appName: C } = (0, t1.u)(l.entry);
        (0, h.T2)(l.entry.id);
        let v = r.useMemo(
                () => ({
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: l.requestId,
                    richPresenceName: y ? C : void 0,
                }),
                [C, l.channel.guild_id, l.channel.id, l.entry, l.requestId, y],
            ),
            O = r.useRef(!1),
            [R, b] = r.useState(!1),
            [D, L] = r.useState(!1),
            w = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled);
        r.useEffect(() => {
            R && w && L(!0);
        }, [R, w]),
            r.useLayoutEffect(() => {
                null != p.current && T(!0);
            }, []);
        let M = r.useCallback(
                (e) => {
                    N &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("86456"), n.e("89346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, i.jsx)(e, { entry: l.entry, requestId: l.requestId });
                        });
                },
                [l, N],
            ),
            P = r.useCallback(() => {
                A(String(Date.now()));
            }, []),
            x = r.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, m.I)(e, { ...v, ...t });
                },
                [v],
            ),
            U = r.useMemo(
                () =>
                    a().throttle(
                        (e) => {
                            (0, m.I)(tV.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            ),
            k = () => {
                (O.current = !1),
                    setTimeout(() => {
                        O.current || (b(!1), L(w));
                    }, 100);
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                I && (0, i.jsx)(n6, { ...l, targetElementRef: p }),
                (0, i.jsx)("div", {
                    ref: s,
                    onMouseEnter: () => {
                        (O.current = !0),
                            setTimeout(() => {
                                O.current && b(!0), U(v);
                            }, 100);
                    },
                    onMouseLeave: k,
                    children: (0, i.jsx)(c.Y, {
                        targetElementRef: p,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(n7.Provider, {
                                value: k,
                                children: (0, i.jsx)(n4, {
                                    closePopout: t,
                                    updatePopoutPosition: P,
                                    trackRankingItemInteraction: x,
                                    ...l,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: R,
                        positionKey: g,
                        onRequestOpen: () => U(v),
                        onRequestClose: () => {
                            D && k();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.jsx)(d.D, {
                                ...e,
                                ...S,
                                role: "button",
                                innerRef: p,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    R || b(!0);
                                },
                                onContextMenu: M,
                                children: (0, i.jsx)(n3, {
                                    ...l,
                                    selected: n,
                                    hovered: O.current,
                                    trackRankingItemInteraction: x,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
