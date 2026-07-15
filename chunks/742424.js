"use strict";
n.d(t, { Jd: () => n7, Ay: () => n8, h9: () => n2, bG: () => n1 });
var i = n(627968),
    r = n(64700),
    a = n(435558),
    s = n.n(a),
    l = n(837381),
    o = n(681154),
    d = n(17928),
    c = n(922016),
    u = n(939249),
    _ = n(442433),
    E = n(775602),
    A = n(941726),
    h = n(963307),
    I = n(287809),
    f = n(947593),
    p = n(468581),
    T = n(808666),
    m = n(821609),
    g = n(414499),
    S = n(323384),
    N = n(55730),
    C = n(765379),
    O = n(737393),
    R = n(284525),
    L = n(793574),
    D = n(482030),
    y = n(627363),
    v = n(773669),
    b = n(403362),
    M = n(562153),
    P = n(939341),
    U = n(576757),
    w = n(583846);
n(321073);
var G = n(284009),
    x = n.n(G),
    k = n(989349),
    F = n.n(k),
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
let W = new j.A("AssetMap");
async function Y(e) {
    let t = new K(),
        n = Object.entries(e).map((e) => {
            let [n, i] = e;
            return t.loadRemoteImage(n, i).catch((e) => W.warn("Failed to load canvas asset", e, n, i));
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
class $ {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        x()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return x()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
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
async function z(e) {
    let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
        a = await Y(t);
    await a.loadFonts();
    {
        let e = n(765270).A,
            t = n(684266).A,
            s = document.createElement("canvas"),
            l = new $(new e(s, a), new t());
        i(l.canvas);
        let o = await l.export(r);
        return s.remove(), o;
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
    ea =
        "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
    es = ["gg sans", "sans-serif"];
function el(e) {
    let t,
        { canvas: n, badges: i, startPosition: r, maxWidth: a } = e;
    for (let { iconPath: e, text: s } of (n.setFont({ size: 12, family: es, weight: 500, truncate: H.Kq.None }), i)) {
        let i = null != t ? t.w + t.x + 12 : r,
            l = null != t ? t.w + t.x + 12 + 18 : r + 18;
        n.drawPath(e, { x: i, y: 88 }, !0, 0.6), (t = n.drawText(s, { x: l, y: 99, w: a }, !0));
    }
}
function eo(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: i, y: r },
        avatarImageSize: a,
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect({ x: i + (e + 1) * (a - 8) - 2, y: r - 1, w: a + 2, h: a + 2 }, a / 2, !0),
            t.drawRoundedImage(n[e], { x: i + e * (a - 8), y: r }, { w: a, h: a }, 50, { fillMode: H.VZ.Cover }),
            t.restoreContext();
}
var ed = n(375708);
async function ec(e) {
    let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: r, timestamp: a, colors: s, channelId: l } = e,
        o = n.extra.activity_name,
        d = {
            AvatarImage1: i[0],
            ...(null != i[1] && { AvatarImage2: i[1] }),
            ...(null != i[2] && { AvatarImage3: i[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await z({
        assetsToLoad: d,
        drawImage: (e) =>
            (function (e, t) {
                let { timestamp: n, colors: i, description: r, entry: a, numAvatars: s } = t,
                    l = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(l, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === H.uS.Failure &&
                        e.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    eo({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, s),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: es, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    el({
                        canvas: e,
                        badges: (function (e, t) {
                            let n = [{ iconPath: Q, text: t }],
                                i = Z.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= F()().diff(F()(i), "days") &&
                                    n.push({ iconPath: ea, text: ed.intl.string(ed.t.vYuyWf) }),
                                (0, w.Rf)(e) && n.push({ iconPath: J, text: ed.intl.string(ed.t.keY6mW) }),
                                (0, w.BZ)(e))
                            ) {
                                let t = (0, w.iy)(e);
                                n.push({
                                    iconPath: ei,
                                    text: ed.intl.formatToPlainString(ed.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, w.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: er, text: ed.intl.string(ed.t.kAlUsy) });
                            let r = (0, w.KH)(e);
                            if ((null != r && n.push({ iconPath: en, text: (0, w.us)(r) }), (0, w.L7)(e))) {
                                let { text: t } = (0, w.Pj)(e);
                                null != t && n.push({ iconPath: ee, text: t });
                            }
                            if ((0, w.uw)(e)) {
                                let t = (0, w.ty)(e);
                                if (null != t) {
                                    let e = ed.intl.formatToPlainString(ed.t.C0AxoR, {
                                        hours: Math.round(t / q.A.Seconds.HOUR),
                                    });
                                    return [{ iconPath: et, text: `${ed.intl.string(ed.t["/50eHi"])} \u{2014} ${e}` }];
                                }
                            }
                            return n;
                        })(a, n),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            })(e, { timestamp: a, colors: s, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${o}.png`.toLowerCase(),
            fileType: "png",
            channelId: l,
        },
    });
}
var eu = n(506326),
    e_ = n(503698),
    eE = n.n(e_);
n(340287);
var eA = n(554146),
    eh = n(661531),
    eI = n(342952),
    ef = n(990078),
    ep = n(315710),
    eT = n(43990),
    em = n(276293),
    eg = n(935063),
    eS = n(789645),
    eN = n(778712),
    eC = n(696986),
    eO = n(297264),
    eR = n(834730),
    eL = n(320448),
    eD = n(97808),
    ey = n(738188),
    ev = n(983851),
    eb = n(31300),
    eM = n(308528),
    eP = n(367513),
    eU = n(730852),
    ew = n(401843),
    eG = n(969151),
    ex = n(736653),
    ek = n(355622),
    eF = n(408018),
    eV = n(138617),
    eB = n(375499),
    eH = n(429433),
    ej = n(95701),
    eW = n(652215),
    eY = n(389605);
let eK = (0, ej.createChannelRecord)({ id: "1", type: eW.rbe.DM });
function e$(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: s = !1,
            renderAttachButton: l,
            autoFocus: o = !0,
            onFocus: d,
            channel: c,
            className: u,
        } = e,
        [_, E] = r.useState(""),
        [A, h] = r.useState((0, eF.x7)("")),
        I = ek.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = r.useRef(null);
    return (0, i.jsx)(eV.Ay, {
        ref: f,
        placeholder: t,
        editorClassName: u,
        className: eE()(eY.N8, u),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: c ?? eK,
        onChange: (e, t, n) => {
            E(t), h(n);
        },
        type: s ? { ...I, emojis: { button: !0 } } : I,
        textValue: _,
        richValue: A,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), E(""), h((0, eF.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: a,
        focused: o,
        onFocus: d,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == f.current) return "top";
            let e = f.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: l,
    });
}
function ez(e) {
    var t;
    let { onSelectEmoji: n, onClick: a } = e,
        s = (0, ex.Ay)(),
        [l, o] = r.useState(!1),
        d = r.useRef(null),
        u = r.useRef(null);
    return (
        (t = () => o(!1)),
        r.useEffect(() => {
            function e(e) {
                "Escape" === e.key && t();
            }
            function n(e) {
                null != e.target && (d?.current?.contains(e?.target) || t());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n);
                }
            );
        }, [t, d]),
        (0, i.jsx)(c.Y, {
            targetElementRef: u,
            align: "right",
            position: "top",
            shouldShow: l,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(eT.N, {
                    theme: s,
                    children: (e) =>
                        (0, i.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, i.jsx)(eH.C, {
                                messageId: eW.dJq,
                                channel: eK,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: i, isBurst: r } = e;
                                    null != t && (n({ emoji: t, willClose: i, isBurst: r }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, i.jsx)(ef.m, {
                    text: ed.intl.string(ed.t.lfIHs4),
                    children: (0, i.jsx)("div", {
                        ref: u,
                        className: eY.mJ,
                        children: (0, i.jsx)(eB.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                a?.(), o(!0);
                            },
                        }),
                    }),
                }),
        })
    );
}
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
    tn = n(580929),
    ti = n(805901),
    tr = n(565645);
n(915089);
var ta = n(713517);
n(334295);
var ts = n(7584);
n(850992), n(690521), n(806931);
var tl = n(307731);
n(650583);
var to = n(317299);
function td(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: s } = e,
        l = r.useRef(null),
        o = (0, ta.M)(l);
    return (0, i.jsx)("span", {
        ref: l,
        children: (0, i.jsx)(u.D, {
            onClick: a,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(ti.c, {
                config: eB.B,
                from: { value: 0 },
                to: { value: +!!o },
                children: (e) => {
                    let { value: r } = e;
                    return (0, i.jsx)(tn.animated.div, {
                        style: { transform: r.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, i.jsx)(tr.A, {
                            className: eE()(to.Zg, s, { [to.c4]: n }),
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
tl.EmojiIntention.CHAT,
    [
        ts.Ay.getByName("thumbsup"),
        ts.Ay.getByName("eyes"),
        ts.Ay.getByName("laughing"),
        ts.Ay.getByName("watermelon"),
        ts.Ay.getByName("fork_and_knife"),
        ts.Ay.getByName("yum"),
    ].filter(b.Vq);
var tc = n(636585),
    tu = n(734057),
    t_ = n(71393),
    tE = n(576705),
    tA = n(994500),
    th = n(543465),
    tI = n(977997),
    tf = n(607567),
    tp = n(174459),
    tT = n(486020),
    tm = n(20805),
    tg = n(22869),
    tS = n(623671),
    tN = n(428249),
    tC = n(327098),
    tO = n(202195),
    tR = n(43105),
    tL = n(131607),
    tD = n(49999),
    ty = n(345394);
let tv = function (e) {
    let { children: t } = e,
        [n, a] = (0, tL.kn)([eA.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [s, l] = r.useState(!1),
        o = r.useRef(null);
    r.useEffect(() => {
        let e = setTimeout(() => {
            l(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = r.useCallback(() => {
        a(tD.i.USER_DISMISS);
    }, [a]);
    return n !== eA.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { ref: o, children: t }),
                  (0, i.jsx)(tR.A, {
                      targetElementRef: o,
                      shouldShow: s,
                      onRequestClose: d,
                      position: "left",
                      title: ed.intl.string(ed.t.V5y3qZ),
                      body: ed.intl.string(ed.t.eSDHDk),
                      graphic: { type: "image", src: ty.A },
                  }),
              ],
          });
};
var tb = n(315246),
    tM = n(866323),
    tP = n(857250),
    tU = n(97483),
    tw = n(289873),
    tG = n(401871),
    tx = n(861173);
function tk() {
    return (0, i.jsxs)("div", {
        className: tx.oR,
        children: [
            (0, i.jsx)(tw.y, { type: tw.t.SPINNING_CIRCLE_SIMPLE, className: tG.S }),
            (0, i.jsx)(eR.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: ed.intl.string(ed.t["5z/hlE"]),
            }),
        ],
    });
}
let tF = (e) => {
    let { shown: t, sent: n, className: r } = e,
        a = (0, d.bG)([E.Ay], () => E.Ay.useReducedMotion),
        s = (0, tM.p)(
            t,
            {
                from: { transform: a ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: a ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, i.jsx)(i.Fragment, {
        children: s(
            (e, t) =>
                t &&
                (0, i.jsx)(tn.animated.div, {
                    className: r,
                    style: e,
                    children: n
                        ? (0, i.jsx)(tP.y, {
                              message: ed.intl.string(ed.t.fjcCk5),
                              type: tU.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, i.jsx)(tP.y, {
                              message: "",
                              type: tU.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, i.jsx)(tk, {}) },
                          }),
                }),
        ),
    });
};
var tV = n(424994),
    tB = n(381941),
    tH = n(699976),
    tj = n(994063);
let tW = (0, eQ.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("59252"),
                n.e("39156"),
                n.e("90266"),
                n.e("15476"),
                n.e("42791"),
                n.e("72651"),
                n.e("29363"),
                n.e("62448"),
                n.e("74907"),
                n.e("31837"),
                n.e("38123"),
                n.e("56795"),
                n.e("85723"),
                n.e("53702"),
                n.e("22929"),
                n.e("86832"),
                n.e("76342"),
                n.e("60988"),
                n.e("69273"),
                n.e("72210"),
                n.e("3155"),
                n.e("82104"),
                n.e("41711"),
                n.e("65264"),
                n.e("49623"),
                n.e("35316"),
                n.e("38838"),
                n.e("45214"),
                n.e("99253"),
                n.e("58846"),
                n.e("17202"),
                n.e("90862"),
                n.e("97189"),
                n.e("16918"),
                n.e("33730"),
                n.e("24059"),
                n.e("42306"),
                n.e("11291"),
                n.e("96846"),
                n.e("19709"),
                n.e("4251"),
                n.e("47412"),
                n.e("65327"),
                n.e("41625"),
                n.e("96490"),
                n.e("85484"),
                n.e("51772"),
                n.e("6605"),
                n.e("11262"),
                n.e("54483"),
                n.e("62461"),
                n.e("25677"),
                n.e("88804"),
                n.e("89001"),
                n.e("75029"),
                n.e("73679"),
                n.e("35538"),
                n.e("73178"),
                n.e("9795"),
                n.e("25336"),
                n.e("28794"),
                n.e("35126"),
                n.e("333"),
                n.e("28443"),
                n.e("18185"),
                n.e("97638"),
                n.e("22995"),
                n.e("59096"),
                n.e("55953"),
                n.e("56386"),
                n.e("38759"),
                n.e("51943"),
                n.e("90072"),
                n.e("88016"),
                n.e("84133"),
                n.e("13627"),
                n.e("57940"),
                n.e("58171"),
                n.e("44511"),
                n.e("39375"),
                n.e("47944"),
                n.e("84473"),
                n.e("70990"),
                n.e("15130"),
                n.e("80816"),
                n.e("57578"),
                n.e("57016"),
                n.e("65673"),
                n.e("50541"),
                n.e("1316"),
                n.e("42205"),
                n.e("55675"),
                n.e("27962"),
                n.e("36167"),
                n.e("10471"),
                n.e("64827"),
                n.e("63232"),
                n.e("68261"),
                n.e("7167"),
                n.e("12721"),
                n.e("84569"),
                n.e("60235"),
                n.e("61737"),
                n.e("21335"),
                n.e("61060"),
                n.e("77333"),
                n.e("47834"),
                n.e("11735"),
                n.e("85927"),
                n.e("834"),
                n.e("2368"),
                n.e("6338"),
                n.e("18573"),
                n.e("78157"),
                n.e("85404"),
                n.e("44057"),
                n.e("1453"),
                n.e("88774"),
                n.e("10120"),
                n.e("62175"),
                n.e("31988"),
                n.e("44571"),
                n.e("34303"),
                n.e("40291"),
                n.e("33115"),
                n.e("97270"),
                n.e("45959"),
                n.e("73122"),
                n.e("8304"),
                n.e("93159"),
                n.e("71202"),
                n.e("55936"),
                n.e("8739"),
                n.e("42834"),
                n.e("88131"),
                n.e("43430"),
                n.e("94723"),
                n.e("62931"),
                n.e("58529"),
                n.e("58038"),
                n.e("62531"),
                n.e("99081"),
                n.e("6174"),
                n.e("7170"),
                n.e("32191"),
                n.e("77084"),
                n.e("54625"),
                n.e("71133"),
                n.e("28662"),
                n.e("23532"),
                n.e("52557"),
                n.e("55654"),
                n.e("76428"),
                n.e("29963"),
                n.e("96137"),
                n.e("83161"),
                n.e("38513"),
                n.e("63645"),
                n.e("27773"),
                n.e("63123"),
                n.e("48900"),
                n.e("35485"),
                n.e("82069"),
                n.e("24038"),
                n.e("37687"),
                n.e("46800"),
                n.e("71234"),
                n.e("50097"),
                n.e("88469"),
                n.e("6306"),
                n.e("20282"),
                n.e("54282"),
                n.e("77473"),
                n.e("63618"),
                n.e("38755"),
                n.e("80239"),
                n.e("60177"),
                n.e("75016"),
                n.e("2329"),
                n.e("23276"),
                n.e("35996"),
                n.e("76087"),
                n.e("25279"),
                n.e("88003"),
                n.e("28752"),
                n.e("31445"),
                n.e("78412"),
                n.e("31018"),
                n.e("88990"),
                n.e("9793"),
                n.e("43549"),
                n.e("11301"),
                n.e("27355"),
                n.e("48720"),
                n.e("97288"),
                n.e("10575"),
                n.e("19666"),
                n.e("54630"),
                n.e("42489"),
                n.e("21574"),
                n.e("80112"),
                n.e("59880"),
                n.e("6723"),
                n.e("9729"),
                n.e("74016"),
                n.e("60658"),
                n.e("81987"),
                n.e("21856"),
                n.e("5563"),
                n.e("11133"),
                n.e("46430"),
                n.e("49013"),
                n.e("93461"),
                n.e("90779"),
                n.e("39808"),
                n.e("9763"),
                n.e("20667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    tY = r.createContext(void 0);
function tK(e) {
    let { children: t } = e,
        n = r.useRef(null),
        a = r.useId();
    return (
        (0, ep.tj)(n),
        (0, i.jsx)(tY.Provider, {
            value: a,
            children: (0, i.jsx)("div", {
                ref: n,
                className: tj.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": a,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function t$(e) {
    let { children: t, backgroundImgSrc: n, className: r, style: a = {} } = e,
        { primaryColor: s, secondaryColor: l } = (0, X.A)(n);
    return (
        null != n && (a.background = `linear-gradient(45deg, ${s}, ${l})`),
        (0, i.jsx)(eT.N, {
            theme: eW.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, i.jsx)("div", { className: eE()(tj.ZK, e, r), style: a, children: t }),
        })
    );
}
function tz(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: tj.$m, children: t });
}
function tq(e) {
    var t;
    let n,
        a,
        s,
        l,
        { channel: o, user: c, onReaction: _, entry: E, buttons: A = [], header: h, onVoiceChannelPreview: f } = e,
        [p, T] = r.useState(!1),
        [g, S] = r.useState(null),
        N = (0, d.bG)(
            [tE.A],
            () => null != o && eW.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && tE.A.can(eW.xBc.SEND_MESSAGES, o),
        ),
        [C, O] = r.useState(!1),
        [R, L] = r.useState(!1),
        { voiceBar: D, joinVoiceButton: y } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
                { streamPreviewUrl: s, channel: l } = (0, tO.A)(n),
                o = (0, eq.Ay)(l),
                { needSubscriptionToAccess: c } = (0, e7.A)(t?.id),
                _ = (0, d.bG)([t_.A], () => (null != l ? t_.A.getGuild(l.guild_id) : void 0)),
                E = (0, d.yK)([tf.Ay], () => (null != l ? tf.Ay.getVoiceStatesForChannel(l) : []), [l]),
                A = (0, d.bG)([tI.A], () => tI.A.isInChannel(l?.id)),
                h = r.useMemo(() => {
                    for (let e of E) {
                        let t = tu.A.getDMFromUserId(e.user.id),
                            n = null != t && th.Ay.isChannelMuted(null, t),
                            i = tA.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [E]);
            if (null == l || null == _) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let I = null != s;
            function f(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: r } = e,
                    a = r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(ey.i, { size: "custom", width: 13, height: 13, className: tj.vb }),
                                  ed.intl.string(ed.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, i.jsx)(
                    ef.m,
                    {
                        "aria-label": r ? ed.intl.string(ed.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: a,
                        shouldShow: !0,
                        children: t,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: tj.kP,
                            children: [
                                (0, i.jsx)(f, {
                                    text: ed.intl.string(ed.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: h,
                                    children: (0, i.jsxs)(u.D, {
                                        "aria-label": ed.intl.string(ed.t.WIVYqJ),
                                        onClick: () => {
                                            eP.A.updateChatOpen(l.id, !0), (0, e8.iN)(l.id), a?.(l);
                                        },
                                        className: tj.I3,
                                        children: [
                                            (0, i.jsx)(e5.Ay, {
                                                guild: _,
                                                size: e5.Ay.Sizes.SMOL,
                                                className: tj.O9,
                                                active: !0,
                                            }),
                                            (0, i.jsx)(eL._, {
                                                size: "xxs",
                                                color: eh.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, i.jsx)(ev.H, { size: "xs", color: eh.A.colors.TEXT_DEFAULT }),
                                            (0, i.jsx)(eR.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: tj.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(tc.A, {
                                    guildId: _.id,
                                    users: E,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, i.jsx)(eD.eu, {
                                            src: e.user.getAvatarURL(_.id, 16),
                                            size: eN._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, i.jsx)("div", {
                                            className: tj.V9,
                                            children: (0, i.jsx)(eR.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(eC.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: A
                    ? null
                    : (0, i.jsx)(f, {
                          hasRestrictedOrMutedVCParticipant: h,
                          children: (0, i.jsx)(m.$, {
                              onClick: () => {
                                  eZ.A.handleVoiceConnect({
                                      channel: l,
                                      connected: A,
                                      needSubscriptionToAccess: c,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: I ? ed.intl.string(ed.t.I6JG46) : ed.intl.string(ed.t.VJlc0S),
                              icon: I ? eb.k : ev.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: E, onVoiceChannelPreview: f }),
        { embeddedActivity: v } = (0, tC.A)(E),
        b =
            ((t = v),
            (n = (0, d.bG)([t_.A], () => t_.A.getGuild((0, eG.D)(t?.location)))),
            (a = (0, d.bG)([tu.A], () => tu.A.getChannel((0, eG.H)(t?.location)))),
            (s = (0, d.yK)([I.default], () => t?.participants?.map((e) => I.default.getUser(e.userId)) ?? [])),
            (l = (0, eq.Ay)(a)),
            null != t && null != n && null != a && ej.k3.has(a.type)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: tj.kP,
                              children: [
                                  (0, i.jsxs)(u.D, {
                                      "aria-label": ed.intl.string(ed.t["W/A4Qp"]),
                                      onClick: () => (0, e8.iN)(a.id),
                                      className: tj.I3,
                                      children: [
                                          (0, i.jsx)(e5.Ay, {
                                              guild: n,
                                              size: e5.Ay.Sizes.SMOL,
                                              className: tj.O9,
                                              active: !0,
                                          }),
                                          (0, i.jsx)(eL._, {
                                              size: "xxs",
                                              color: eh.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, i.jsx)(em.N, { size: "xs", color: eh.A.colors.TEXT_DEFAULT }),
                                          (0, i.jsx)(eR.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: tj.NR,
                                              children: l,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(tc.A, {
                                      guildId: n.id,
                                      users: s,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, i.jsx)(eD.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: eN._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, i.jsx)("div", {
                                              className: tj.V9,
                                              children: (0, i.jsx)(eR.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(eC.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != y && 0 === A.length ? [y] : A,
        U = P.length > 0,
        w = P.length >= 2,
        [G, k] = r.useState(!U),
        F = M.Ay.getName(o?.guild_id, o?.id, c),
        V = (0, eq.Ay)(o, !0),
        B =
            null != o && p
                ? ed.intl.formatToPlainString(ed.t["8lzR/R"], { channel: V })
                : ed.intl.formatToPlainString(ed.t["4c+CAx"], { channel: `@${F}` }),
        H = p ? ed.intl.string(ed.t.Z2CUgn) : ed.intl.string(ed.t.XLGiTG),
        j = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (tp.default.track(eW.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: tV.UG.GUILD_MEMBER_LIST,
                        channel_id: o?.id,
                        guild_id: o?.guild_id,
                    }),
                    (0, eJ.Dr)(eA.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    O(!0),
                    L(!1),
                    p)
                )
                    x()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o);
                else {
                    let e = await eM.A.getOrEnsurePrivateChannel(c.id);
                    t = tu.A.getChannel(e) ?? null;
                }
                return (
                    x()(null != t, "Send channel must be defined"),
                    Y({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            L(!0),
                                setTimeout(() => {
                                    O(!1), _(e, t);
                                }, 600);
                        },
                        interactionType: tV.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        W = async (e) => {
            let t;
            if (((0, eJ.Dr)(eA.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), p))
                x()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o);
            else {
                let e = await eM.A.openPrivateChannel({ recipientIds: c.id }),
                    n = tu.A.getChannel(e);
                x()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === eW.rbe.DM ? tV.PA.DM_REACTION_MESSAGE_SENT : tV.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return Y({ reply: e, sendToChannel: t, interactionType: n, onComplete: _, requiresChannelReadiness: !0 });
        };
    async function Y(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: r, requiresChannelReadiness: a } = e;
        g?.focus(),
            await (0, tN.d)({
                channel: n,
                content: t,
                entry: E,
                whenReady: a,
                doNotNotifyOnError: !1,
                location: tB.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(r, n);
    }
    let K = h ?? D ?? b;
    function $() {
        T((e) => !e), G && g?.focus();
    }
    function z(e) {
        k(e), e && g?.focus();
    }
    return (0, i.jsxs)("div", {
        style: { pointerEvents: C ? "none" : "all" },
        children: [
            (0, i.jsx)(tF, { sent: R, shown: C, className: tj.Jt }),
            K ??
                (0, i.jsx)(tv, {
                    children: (0, i.jsxs)("div", {
                        className: tj.T7,
                        children: [
                            (0, i.jsx)(tZ, { channel: o, onClickSuggestion: j }),
                            (0, i.jsx)(ez, { onSelectEmoji: j }),
                        ],
                    }),
                }),
            (0, i.jsxs)("div", {
                className: G ? tj.P2 : tj.VE,
                children: [
                    (0, i.jsx)(e$, {
                        placeholder: B,
                        onEnter: W,
                        setEditorRef: (e) => S(e),
                        channel: p ? o : void 0,
                        showEmojiButton: null != K,
                        className: tj.N8,
                        autoFocus: !1,
                        renderAttachButton: N
                            ? () =>
                                  (0, i.jsx)(ef.m, {
                                      text: H,
                                      children: (0, i.jsx)(u.D, {
                                          className: tj.wD,
                                          onClick: $,
                                          children: p
                                              ? (0, i.jsx)(em.N, { size: "custom", width: 20, height: 20 })
                                              : (0, i.jsx)(eg.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    U &&
                        (0, i.jsx)(u.D, {
                            onClick: () => z(!1),
                            className: tj.i3,
                            children: (0, i.jsx)(eS.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: eh.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === G &&
                (0, i.jsxs)("div", {
                    className: tj.fh,
                    children: [
                        !w &&
                            (0, i.jsx)(
                                m.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => z(!0),
                                    size: "md",
                                    text: ed.intl.string(ed.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        P,
                    ],
                }),
        ],
    });
}
let tZ = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, s] = r.useState(!1);
    r.useEffect(() => {
        s(!0);
    }, []);
    let l = !!E.Ay.keyboardModeEnabled && !a,
        o = (0, e0.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tT._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, i.jsx)(i.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: r } = e;
            return null != r
                ? (0, i.jsx)(
                      "div",
                      {
                          children: (0, i.jsx)(ef.m, {
                              asContainer: !0,
                              text: ed.intl.formatToPlainString(ed.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ed.intl.formatToPlainString(ed.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !l && void 0,
                              children: (0, i.jsx)(td, {
                                  emoji: t,
                                  isDisabled: !a,
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
    let { channel: t, userDescription: n, entry: r, disableGameProfileLinks: a, onUserPopoutClosed: s } = e,
        l = t?.guild_id,
        { displayParticipants: o, participant1: c, participant2: u, numOtherParticipants: _ } = (0, U.A)(r, 3),
        E = (0, d.bG)([I.default], () => I.default.getUser(r.author_id)),
        { streamPreviewUrl: A } = (0, tO.A)(r),
        h = [c, u];
    return (0, i.jsxs)("div", {
        className: tj.MH,
        children: [
            (0, i.jsxs)("div", {
                className: tj.WP,
                children: [
                    (0, i.jsx)(eI.A, {
                        maxUsers: 3,
                        users: o,
                        guildId: l,
                        size: eN._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s,
                    }),
                    (0, i.jsx)(eC.h, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(eO.D, {
                        variant: "heading-sm/normal",
                        className: eE()(tj.Xn, tj.zA),
                        children: ed.intl.format(n, {
                            user0: M.Ay.getName(l, t?.id, h[0]),
                            user1: M.Ay.getName(l, t?.id, h[1]),
                            countOthers: _,
                            countOthersHook: (e, t) =>
                                (0, i.jsx)(
                                    eR.E,
                                    { variant: "text-sm/medium", className: eE()(tj.Mj, tj.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, i.jsx)(
                                    tg.A,
                                    {
                                        textClassName: eE()(tj.Mj, tj.nk),
                                        text: e,
                                        user: h[0],
                                        channel: t,
                                        onPopoutClosed: s,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, i.jsx)(
                                    tg.A,
                                    {
                                        textClassName: eE()(tj.Mj, tj.nk),
                                        text: e,
                                        user: h[1],
                                        channel: t,
                                        onPopoutClosed: s,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != A && (0, i.jsx)(eX.Ay, { size: eX.Ay.Sizes.SMALL }),
            null != E && (0, i.jsx)(tb.A, { user: E, channel: t, guildId: l, entry: r, disableGameProfileLinks: a }),
        ],
    });
}
function tQ(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(u.D, { className: tj.Zw, onClick: n, children: t });
}
function tJ(e) {
    let {
            title: t,
            subtitle: n,
            badges: a,
            children: s,
            onClickThumbnail: l,
            onClickTitle: o,
            onClickSubtitle: c,
            headerIcons: u,
            disableGameProfileLinks: _ = !1,
            showCoverImage: E = !0,
            onUserPopoutClosed: A,
            trackRankingItemInteraction: h,
            ...I
        } = e,
        { entry: f } = I,
        p = (0, tm.zD)(f),
        T = p ? f.extra?.application_id : void 0,
        m = (0, tt.W)();
    null != m && (T = m);
    let g = (0, e3.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : T,
                source: e2.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => h?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: N } = (0, P.nO)({
            entry: f,
            showCoverImage: E,
            trackingSource: "memberlist_content_popout",
        }),
        C = (0, te.w)({ location: "content_inventory" }),
        O = (0, d.bG)([e9.A], () => e9.A.getDetectableIdsToApplicationIds()),
        R = p ? g : void 0,
        L = r.useContext(tY);
    return (0, i.jsxs)("div", {
        className: tj.au,
        children: [
            (0, i.jsx)(tX, { disableGameProfileLinks: _, ...I, onUserPopoutClosed: A }),
            (0, i.jsxs)(t$, {
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
                                    aspectRatio: E ? "none" : void 0,
                                    onClick: l ?? R,
                                    size: tS.w.SIZE_72,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: tj.iC,
                                children: [
                                    (0, i.jsx)(tQ, {
                                        onClick: o ?? R,
                                        children: (0, i.jsx)(eO.D, {
                                            id: L,
                                            variant: "heading-md/medium",
                                            className: eE()(tj.$2, { [tj.bC]: null != u }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tQ, {
                                              onClick: c ?? R,
                                              children: (0, i.jsx)(eR.E, {
                                                  variant: "text-sm/normal",
                                                  className: tj.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(eC.h, { size: 8 }),
                                    a,
                                ],
                            }),
                            (0, i.jsx)("div", { className: tj.hO, children: u }),
                        ],
                    }),
                    s,
                ],
            }),
            C && null != T && null != O[T]
                ? (0, i.jsx)(tW, {
                      className: tj.zu,
                      applicationId: T,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: I.channel?.guild_id,
                      channelId: I.channel?.id,
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
            badges: a,
            children: s,
            stream: l,
            onClickThumbnail: o,
            onClickTitle: c,
            onClickSubtitle: u,
            onUserPopoutClosed: _,
            trackRankingItemInteraction: E,
            ...A
        } = e,
        h = (0, d.bG)([tu.A], () => tu.A.getChannel(l?.channelId)),
        [I] = r.useMemo(() => (0, e6.eo)(h, tI.A, t_.A, tE.A, e1.default), [h]),
        { entry: f } = A,
        p = (0, tm.zD)(f),
        T = p ? f.extra?.application_id : void 0,
        m = (0, tt.W)();
    null != m && (T = m);
    let g = (0, e3.A)(
            {
                location: "ContentPopout",
                applicationId: T,
                source: e2.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => E?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        S = p ? g : void 0,
        { activity: N, activityApplication: C, fallbackApplication: O } = (0, tC.A)(f),
        { largeImage: R, smallImage: L } = (0, P.D8)(N, C ?? O),
        { largeImage: D } = (0, P.nO)({ entry: f, trackingSource: "memberlist_streaming_content_popout" }),
        y = (0, te.w)({ location: "content_inventory" }),
        v = (0, d.bG)([e9.A], () => e9.A.getDetectableIdsToApplicationIds()),
        b = r.useContext(tY);
    return (0, i.jsxs)("div", {
        className: tj.au,
        children: [
            (0, i.jsx)(tX, { ...A, onUserPopoutClosed: _ }),
            (0, i.jsxs)(t$, {
                backgroundImgSrc: D?.src,
                className: tj.uR,
                children: [
                    (0, i.jsx)(tQ, {
                        onClick: I
                            ? () => {
                                  eU.default.selectVoiceChannel(l.channelId), (0, ew.Nl)(l);
                              }
                            : void 0,
                        children: (0, i.jsxs)("div", {
                            className: tj.nh,
                            children: [
                                (0, i.jsx)(e4.A, { className: tj.j7, stream: l }),
                                I &&
                                    (0, i.jsx)("div", {
                                        className: tj.NE,
                                        children: (0, i.jsx)(eR.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: ed.intl.string(ed.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: tj.$6,
                        children: [
                            null != R &&
                                (0, i.jsx)("div", {
                                    className: tj.Fb,
                                    children: (0, i.jsx)(tS.d, {
                                        image: R,
                                        smallImage: L,
                                        onClick: o ?? S,
                                        size: tS.w.SIZE_72,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tj.gv,
                                children: [
                                    (0, i.jsx)(tQ, {
                                        onClick: c ?? S,
                                        children: (0, i.jsx)(eO.D, {
                                            id: b,
                                            variant: "heading-md/semibold",
                                            className: tj.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tQ, {
                                              onClick: u ?? S,
                                              children: (0, i.jsx)(eR.E, {
                                                  variant: "text-sm/normal",
                                                  className: tj.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(eC.h, { size: 8 }),
                                    a,
                                ],
                            }),
                        ],
                    }),
                    s,
                ],
            }),
            y && null != T && null != v[T]
                ? (0, i.jsx)(tW, {
                      className: tj.zu,
                      applicationId: T,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tH.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var t1 = n(299846);
let t2 = function (e) {
    let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: s, disableActivityProfileLinks: l } = e,
        { largeImage: o } = (0, P.nO)({
            entry: n,
            showCoverImage: !1,
            trackingSource: "memberlist_activity_content_popout",
        }),
        { user: c, details: u, activity: _, embeddedActivity: E } = (0, t1.u)(n),
        { primaryColor: A, secondaryColor: h } = (0, X.A)(o?.src),
        I = (0, d.bG)([v.default], () => v.default.locale),
        { displayParticipants: f, participant1: p, participant2: G, numOtherParticipants: x } = (0, U.A)(n, 3);
    function k() {
        (0, D.hg)(n.extra.application_id);
    }
    let F = r.useCallback(
            (e) => {
                let i, r, a;
                if (o?.src == null || null == t || null == c) return;
                let s =
                    x > 0
                        ? (function (e) {
                              let { entry: t, channel: n, users: i, countOthers: r } = e,
                                  a = ed.t["7j/5mg"];
                              return ed.intl
                                  .formatToMarkdownString(a, {
                                      gameName: t.extra.activity_name,
                                      user1: M.Ay.getName(n?.guild_id, n?.id, i[0]),
                                      user2: M.Ay.getName(n?.guild_id, n?.id, i[1]),
                                      countOthers: r,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [p, G], countOthers: x })
                        : ((i = ed.t["bES+y2"]),
                          (r = M.Ay.getName(t.guild_id, t.id, c)),
                          (a = n.extra.activity_name),
                          ed.intl.formatToMarkdownString(i, { gameName: a, userName: r }).replaceAll("*", ""));
                return ec({
                    entry: n,
                    applicationImageSrc: o?.src,
                    avatarSrcs: f.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: s,
                    timestamp: (0, w.As)(n, I),
                    colors: [A, h],
                    channelId: e,
                });
            },
            [o?.src, t, f, n, I, x, p, G, A, h, c],
        ),
        { data: V } = (0, y.YY)(n.extra.application_id),
        B = (0, O.Ay)({ application: V, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == c) return null;
    let H = (0, i.jsx)(eu.iT, { location: eu.N5.POPOUT, entry: n }),
        j = (0, i.jsx)(tJ, {
            channel: t,
            userDescription: (0, w.JM)(n) ? ed.t.vPg1JT : ed.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: u,
            badges: H,
            entry: n,
            showCoverImage: !1,
            onClickTitle: l ? void 0 : k,
            onClickSubtitle: l ? void 0 : k,
            onClickThumbnail: l ? void 0 : k,
        }),
        W = (0, N.A)(_, eW.jUm.JOIN) || (0, C.A)(_),
        Y = W
            ? (0, i.jsx)(R.A, { embeddedActivity: E, activity: _, user: c, variant: "primary", size: "md", icon: T.I })
            : null,
        K =
            null == B
                ? null
                : (0, i.jsx)(m.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: B,
                      text: ed.intl.string(ed.t["jaYS/h"]),
                      icon: g.h,
                  }),
        $ =
            null != K || l
                ? null
                : (0, i.jsx)(m.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: k,
                      text: ed.intl.string(ed.t.GDWYR8),
                      icon: S.k,
                  }),
        z = [K, W && !l ? Y : $].filter(b.Vq);
    return (0, i.jsxs)(tK, {
        children: [
            j,
            (0, i.jsx)(tz, {
                children: (0, i.jsx)(tq, {
                    onReaction: a,
                    onVoiceChannelPreview: s,
                    user: c,
                    channel: t,
                    generateReactionImage: F,
                    reactionImageAltText: ed.intl.formatToPlainString(ed.t.tAwI1k, {
                        username: c.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: z,
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
    t8 = n(544441),
    t9 = n(562708),
    ne = n(688810),
    nt = n(139286);
function nn(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: r } = (0, ne.Ay)(n),
        a = (0, O.Ay)({ application: t, analyticsLocations: r });
    return (
        (0, nt.A)({
            name: t9.ImpressionNames.CLOUD_PLAY_CTA,
            type: t9.ImpressionTypes.VIEW,
            properties: { location_stack: r },
        }),
        (0, i.jsx)(
            m.$,
            {
                variant: "primary",
                size: "md",
                icon: g.h,
                text: ed.intl.string(ed.t["jaYS/h"]),
                onClick: function () {
                    a?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var ni = n(601007),
    nr = n(648246),
    na = n(308335),
    ns = n(790381),
    nl = n(266080);
async function no(e) {
    let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: r, timestamp: a, colors: s, channelId: l } = e,
        o = n.extra.game_name,
        d = {
            AvatarImage1: i[0],
            ...(null != i[1] && { AvatarImage2: i[1] }),
            ...(null != i[2] && { AvatarImage3: i[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await z({
        assetsToLoad: d,
        drawImage: (e) =>
            (function (e, t) {
                let { timestamp: n, colors: i, description: r, entry: a, numAvatars: s } = t,
                    l = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(l, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === H.uS.Failure &&
                        e.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    eo({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, s),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: es, weight: 500, truncate: H.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    el({
                        canvas: e,
                        badges: (function (e, t) {
                            let n = [{ iconPath: Q, text: t }],
                                i = Z.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= F()().diff(F()(i), "days") &&
                                    n.push({ iconPath: ea, text: ed.intl.string(ed.t.vYuyWf) }),
                                (0, w.Rf)(e) && n.push({ iconPath: J, text: ed.intl.string(ed.t.keY6mW) }),
                                (0, w.BZ)(e))
                            ) {
                                let t = (0, w.iy)(e);
                                n.push({
                                    iconPath: ei,
                                    text: ed.intl.formatToPlainString(ed.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, w.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: er, text: ed.intl.string(ed.t.kAlUsy) });
                            let r = (0, w.KH)(e);
                            if ((null != r && n.push({ iconPath: en, text: (0, w.us)(r) }), (0, w.L7)(e))) {
                                let { text: t } = (0, w.Pj)(e);
                                null != t && n.push({ iconPath: ee, text: t });
                            }
                            if ((0, w.uw)(e)) {
                                let t = (0, w.ty)(e);
                                if (null != t) {
                                    let e = ed.intl.formatToPlainString(ed.t.C0AxoR, {
                                        hours: Math.round(t / q.A.Seconds.HOUR),
                                    });
                                    return [{ iconPath: et, text: `${ed.intl.string(ed.t["/50eHi"])} \u{2014} ${e}` }];
                                }
                            }
                            return n;
                        })(a, n),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            })(e, { timestamp: a, colors: s, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${o}.png`.toLowerCase(),
            fileType: "png",
            channelId: l,
        },
    });
}
var nd = n(968309),
    nc = n(30370);
function nu(e) {
    let t = (0, d.bG)([nc.A], () => nc.A.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, nd.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var n_ = n(18282);
let nE = [...t3.n, eu.Yq],
    nA = {
        [t6.Y.DESKTOP]: null,
        [t6.Y.LINUX]: null,
        [t6.Y.MACOS]: null,
        [t6.Y.NINTENDO]: null,
        [t6.Y.IOS]: null,
        [t6.Y.ANDROID]: null,
        [t6.Y.XBOX]: nl.A,
        [t6.Y.PLAYSTATION]: ns.A,
    },
    nh = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: a,
                onReaction: s,
                onVoiceChannelPreview: l,
                onUserPopoutClosed: o,
                trackRankingItemInteraction: c,
            } = e,
            { largeImage: u } = (0, P.nO)({ entry: n, trackingSource: "memberlist_gaming_content_popout" }),
            { user: _, details: E, appName: A, activity: h, embeddedActivity: I } = (0, t1.u)(n),
            { primaryColor: f, secondaryColor: p } = (0, X.A)(u?.src),
            T = (0, d.bG)([v.default], () => v.default.locale),
            { streamPreviewUrl: m, stream: g } = (0, tO.A)(n),
            { displayParticipants: S, participant1: D, participant2: G, numOtherParticipants: x } = (0, U.A)(n, 3),
            k = n.extra.platform,
            F = n.extra.application_id,
            V = null != k ? nA[k] : null,
            B = nu(k === t6.Y.XBOX ? eW.fg2.XBOX : k === t6.Y.PLAYSTATION ? eW.fg2.PLAYSTATION : void 0),
            { data: H } = (0, y.YY)(F),
            j = (0, t8.A)(F),
            { analyticsLocations: W } = (0, ne.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            Y = (0, O.JC)(H),
            K = (0, na.o)(h?.application_id ?? I?.applicationId ?? H?.id),
            $ = r.useCallback(
                (e) => {
                    let i, r, a, s;
                    if (u?.src == null || null == t || null == _) return;
                    let l =
                        x > 0
                            ? (function (e) {
                                  let { entry: t, channel: n, users: i, countOthers: r } = e,
                                      a = (0, w.JM)(t) ? ed.t.QaUWPd : ed.t["7j/5mg"];
                                  return ed.intl
                                      .formatToMarkdownString(a, {
                                          gameName: t.extra.game_name,
                                          user1: M.Ay.getName(n?.guild_id, n?.id, i[0]),
                                          user2: M.Ay.getName(n?.guild_id, n?.id, i[1]),
                                          countOthers: r,
                                      })
                                      .replaceAll("*", "");
                              })({ entry: n, channel: t, users: [D, G], countOthers: x })
                            : ((i = (0, w.JM)(n)),
                              (r = (0, w.Rf)(n)
                                  ? i
                                      ? ed.t.MHO1AV
                                      : ed.t.i7AOzw
                                  : i
                                    ? ed.t["lLPKY+"]
                                    : ed.t["bES+y2"]),
                              (a = M.Ay.getName(t?.guild_id, t?.id, _)),
                              (s = n.extra.game_name),
                              ed.intl.formatToMarkdownString(r, { gameName: s, userName: a }).replaceAll("*", ""));
                    return no({
                        entry: n,
                        applicationImageSrc: u?.src,
                        avatarSrcs: S.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: l,
                        timestamp: (0, w.As)(n, T),
                        colors: [f, p],
                        channelId: e,
                    });
                },
                [u?.src, t, S, n, T, x, D, G, f, p, _],
            );
        if (null == _) return null;
        let z = (0, i.jsx)(eu.mG, {
                location: null == m ? eu.N5.POPOUT : eu.N5.STREAMING_POPOUT,
                children: nE.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
            }),
            q =
                null == g
                    ? (0, i.jsx)(tJ, {
                          channel: t,
                          headerIcons:
                              null == V
                                  ? null
                                  : (0, i.jsx)(n_.A, {
                                        onClick: B,
                                        Icon: V,
                                        "aria-label": ed.intl.string(ed.t.YR4cHH),
                                    }),
                          userDescription: (0, w.JM)(n) ? ed.t.vPg1JT : ed.t.rPqqts,
                          title: A,
                          subtitle: E,
                          badges: z,
                          entry: n,
                          disableGameProfileLinks: a,
                          onUserPopoutClosed: o,
                          trackRankingItemInteraction: c,
                          children:
                              j.length > 0
                                  ? (0, i.jsx)(ni.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: F,
                                        analyticsLocations: W,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, i.jsx)(t0, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: E,
                          badges: z,
                          userDescription: ed.t["6oWFUN"],
                          entry: n,
                          stream: g,
                          onUserPopoutClosed: o,
                          trackRankingItemInteraction: c,
                          children:
                              j.length > 0
                                  ? (0, i.jsx)(ni.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: F,
                                        analyticsLocations: W,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            Z =
                !K && Y
                    ? (0, i.jsx)(
                          nn,
                          { application: H, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            Q = [
                null == Z && ((0, N.A)(h, eW.jUm.JOIN) || (0, C.A)(h))
                    ? (0, i.jsx)(R.A, { activity: h, user: _, variant: "primary", size: "md", icon: t4._ }, "join")
                    : null,
                (0, t7.A)(h)
                    ? (0, i.jsx)(nr.A, { activity: h, size: "md", variant: "primary", icon: t5.b }, "watch")
                    : null,
                Z,
            ].filter(b.Vq);
        return (0, i.jsxs)(tK, {
            children: [
                q,
                (0, i.jsx)(tz, {
                    children: (0, i.jsx)(tq, {
                        onReaction: s,
                        onVoiceChannelPreview: l,
                        user: _,
                        channel: t,
                        generateReactionImage: $,
                        reactionImageAltText: ed.intl.formatToPlainString(ed.t.tAwI1k, {
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
    nI = (0, n(353640).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function nf(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: a } = e,
        { data: s } = (0, y.YY)(t.extra.application_id),
        { analyticsLocations: l } = (0, ne.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, O.Ay)({ application: s, analyticsLocations: l }),
        d = (0, eJ.JZ)(eA.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && n,
        { activeEntryId: u, setActiveEntryId: _ } = nI(),
        E = u === t.id,
        A = c && E ? [eA.M.CLOUD_PLAY_POPOVER] : [],
        [h, I] = (0, tL.kn)(A),
        f = h === eA.M.CLOUD_PLAY_POPOVER;
    r.useEffect(() => {
        c && null === u && _(t.id);
    }, [u, c, t.id, _]),
        r.useEffect(
            () => () => {
                f && (I(tD.i.USER_DISMISS), _(null));
            },
            [f, I, _],
        );
    let [p, T] = r.useState(!1);
    return (
        r.useEffect(() => {
            f && !p && T(!0);
        }, [f, p]),
        (0, nt.A)(
            {
                name: t9.ImpressionNames.CLOUD_PLAY_CTA,
                type: t9.ImpressionTypes.VIEW,
                properties: { location_stack: l },
            },
            { disableTrack: !p },
            [p],
        ),
        (0, i.jsx)(tR.A, {
            title: ed.intl.string(ed.t["+WNDtV"]),
            body: ed.intl.string(ed.t["5QKxGI"]),
            targetElementRef: a,
            shouldShow: f,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/89fae27b507d71982d8ba38286e78d3ca4b35e6c3e5e7a78263552a656f6f5a6.svg",
            },
            actions: [
                {
                    icon: g.h,
                    text: ed.intl.string(ed.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                I(tD.i.USER_DISMISS), _(null);
            },
        })
    );
}
let np = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: r } = e;
    return (0, i.jsx)(nf, { entry: t, targetElementRef: r, isFirstApplicationOccurrence: n });
};
var nT = n(363670),
    nm = n(205327),
    ng = n(52133),
    nS = n(835723),
    nN = n(172710),
    nC = n(655116),
    nO = n(763758),
    nR = n(286617),
    nL = n(533207),
    nD = n(280450),
    ny = n(121090),
    nv = n(974690);
async function nb(e) {
    let { user: t, channel: n, mediaImageSrc: i, artist: r, description: a, colors: s, badges: l } = e,
        o = (function (e) {
            let { avatarSrc: t, mediaImageSrc: n } = e;
            return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
        })({ avatarSrc: t.getAvatarURL(n.guild_id, 128), mediaImageSrc: i }),
        d = r.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
    return await z({
        assetsToLoad: o,
        drawImage: (e) => {
            var t, n, i, r;
            let o;
            (t = e),
                (o = s.map((e, t) => ({ color: e, stop: t }))),
                t.setSize({ w: 400, h: 120 }, 4),
                t.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                (n = e).drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, {
                    fillMode: H.VZ.Contain,
                }) === H.uS.Failure && n.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                (i = e),
                (r = a),
                i.setColor("white"),
                i.setFont({ size: 16, family: es, weight: 500, truncate: H.Kq.Wrap }),
                i.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                el({ canvas: e, badges: l, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${d}.png`.toLowerCase(),
            fileType: "png",
            channelId: n.id,
        },
    });
}
var nM = n(693879),
    nP = n(809854),
    nU = n(272984),
    nw = n(229812);
function nG(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: a } = (0, nP.e)(),
        { durationTimestamp: s, seekBarStyles: l } = r.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let i = Math.min(n, a),
                r = n - e,
                s = Math.floor((Math.max(i - e, 0) / r) * 100);
            return { seekBarStyles: { width: `${s}%` }, durationTimestamp: (0, w.W6)({ start: 0 }, r) };
        }, [t, a]);
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: nw.lu,
              children: [
                  (0, i.jsx)(nM.z, { entry: n }),
                  (0, i.jsx)("div", { className: nw.Lt, children: (0, i.jsx)("div", { className: nw.Vp, style: l }) }),
                  (0, i.jsx)(eR.E, {
                      className: nw.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: s,
                  }),
              ],
          });
}
function nx(e) {
    let t,
        n,
        a,
        { channel: s, entry: l, closePopout: o, onReaction: c, onVoiceChannelPreview: u } = e,
        { largeImage: _ } = (0, P.nO)({ entry: l, trackingSource: "memberlist_listened_session_content_popout" }),
        { activity: E, currentEntry: A, artist: h, title: I, user: f } = (0, nT.u7)(l),
        { primaryColor: p, secondaryColor: T } = (0, X.A)(_?.src),
        g = nu(eW.fg2.SPOTIFY),
        S = (0, d.bG)(
            [nC.A, nD.default],
            () => (E?.type === eW.$pd.LISTENING && null != f ? (0, nR.A)(nC.A, nD.default, f, E) : void 0),
            [E, f],
            ng.A,
        ),
        N = r.useCallback(() => {
            if (null == s || null == f) return;
            let e = E.timestamps?.start,
                t = (0, w.W6)(null != e ? { start: e } : l, Date.now());
            return nb({
                user: f,
                channel: s,
                mediaImageSrc: _?.src,
                artist: h,
                description: (function (e, t, n) {
                    let { artist: i, media: r } = e,
                        a = ed.t["6iNxrl"],
                        s = M.Ay.getName(t.guild_id, t.id, n);
                    return ed.intl.formatToMarkdownString(a, { artist: i, userName: s, media: r }).replaceAll("*", "");
                })({ artist: h, media: I }, s, f),
                colors: [p, T],
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
        }, [E, h, s, l, _?.src, p, T, I, f]);
    if (null == E || null == A) return null;
    let C = h,
        O = [];
    A.media.provider === nm.X.SPOTIFY &&
        ((n = () => {
            (0, nN.Mp)(E);
        }),
        (a = () => {
            (0, nN.QX)(E, f.id);
        }),
        (t = () => {
            null != g ? g() : (0, nN.Mp)(E);
        }),
        (C = (0, i.jsx)(nO.A, {
            artists: h,
            canOpen: null != E.sync_id,
            linkClassName: tj.zA,
            onOpenSpotifyArtist: (e) => {
                (0, nN.mN)(E, f.id, e);
            },
        })),
        S?.syncDisabled === !1 &&
            O.push(
                (0, i.jsx)(
                    m.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: ed.intl.string(ed.t.eU3inB),
                        icon: nS.J,
                        onClick: () => {
                            (0, nL.A)(S, nU.Qp.USER_ACTIVITY_SYNC), o();
                        },
                    },
                    "listen-along",
                ),
            ));
    let R = (0, i.jsx)(tJ, {
        onClickThumbnail: a,
        channel: s,
        entry: l,
        headerIcons:
            A.media.provider === nm.X.SPOTIFY
                ? (0, i.jsx)(n_.A, { onClick: t, "aria-label": ed.intl.string(ed.t.rRffNz), Icon: ny.A })
                : null,
        userDescription: (0, w.JM)(l) ? ed.t.Tzx5D2 : ed.t.CcVI1T,
        title: I,
        onClickTitle: n,
        subtitle: C,
        badges: null,
        children: E.timestamps?.start != null && (0, i.jsx)(nG, { activity: E }),
    });
    return (0, i.jsxs)(tK, {
        children: [
            R,
            (0, i.jsx)(tz, {
                children: (0, i.jsx)(tq, {
                    onReaction: c,
                    onVoiceChannelPreview: u,
                    user: f,
                    channel: s,
                    generateReactionImage: N,
                    reactionImageAltText: ed.intl.formatToPlainString(ed.t.h2yWWX, {
                        username: f.username,
                        activity: h,
                    }),
                    entry: l,
                    buttons: O,
                }),
            }),
        ],
    });
}
var nk = n(56121),
    nF = n(263577),
    nV = n(868065),
    nB = n(352760);
let nH = [eu.Y8],
    nj = [nk.j.WEEK],
    nW = r.memo(function (e) {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: a } = (0, P.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            s = (0, w.TQ)(t);
        return null != s && (0, b.S1)(s, nj)
            ? (0, i.jsxs)(nV.Zp, {
                  selected: r,
                  children: [
                      (0, i.jsxs)(nV.UA, {
                          children: [
                              (0, i.jsx)(nV.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, i.jsx)(nV.ZB, { children: t.extra.artist.name }),
                              (0, i.jsx)(eu.mG, {
                                  location: eu.N5.CARD,
                                  children: nH.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, i.jsx)(nF.V, { src: a?.src, size: 48, className: nB.xn }),
                  ],
              })
            : null;
    });
var nY = n(210528);
let nK = function (e) {
    var t, n;
    let { channel: a, entry: s, onReaction: l, onVoiceChannelPreview: o } = e,
        { parent_title: c, provider: u, image_url: _ } = s.extra.media,
        E = s.extra.artist.name,
        A = (0, d.bG)([I.default], () => I.default.getUser(s.author_id)),
        { primaryColor: h, secondaryColor: f } = (0, X.A)(_),
        p = (0, w.TQ)(s),
        T = r.useCallback(() => {
            var e, t, n;
            let i, r, l, o;
            if (null == a || null == A || !(0, b.S1)(p, nj)) return;
            let d =
                ((e = s),
                (t = a),
                (n = A),
                (r = (function (e) {
                    if (e === nk.j.WEEK) return ed.t.SjOZfm;
                })(p)),
                (l = M.Ay.getName(t.guild_id, t.id, n)),
                (o = e.extra.artist.name),
                ed.intl.formatToMarkdownString(r, { artist: o, userName: l }).replaceAll("*", ""));
            return nb({
                user: A,
                channel: a,
                mediaImageSrc: _,
                artist: E,
                description: d,
                colors: [h, f],
                badges:
                    null == (i = (0, w.Pv)(s, nv.K.AGGREGATE_COUNT)?.count)
                        ? []
                        : [{ iconPath: et, text: ed.intl.formatToPlainString(ed.t.HtifnG, { count: i }) }],
            });
        }, [_, E, a, s, h, p, f, A]),
        m = nu(eW.fg2.SPOTIFY);
    if (null == A || !(0, b.S1)(p, nj)) return null;
    function g() {
        let e = nU.M0.ALBUM,
            t = nY.A.isProtocolRegistered()
                ? nU.RQ.PLAYER_OPEN(e, s.extra.media.external_parent_id)
                : nU.RQ.WEB_OPEN(e, s.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, i.jsxs)(tK, {
        children: [
            (0, i.jsx)(tJ, {
                onClickTitle: g,
                onClickSubtitle: function () {
                    let e = nU.M0.ARTIST,
                        t = nY.A.isProtocolRegistered()
                            ? nU.RQ.PLAYER_OPEN(e, s.extra.artist.external_id)
                            : nU.RQ.WEB_OPEN(e, s.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: g,
                channel: a,
                entry: s,
                headerIcons:
                    u === nm.X.SPOTIFY
                        ? (0, i.jsx)(n_.A, { onClick: m, Icon: ny.A, "aria-label": ed.intl.string(ed.t["0ZB/XE"]) })
                        : null,
                userDescription: ed.t.CcVI1T,
                title: c,
                subtitle: E,
                badges: (0, i.jsx)(eu.mG, {
                    location: eu.N5.POPOUT,
                    children: nH.map((e, t) => (0, i.jsx)(e, { entry: s }, t)),
                }),
            }),
            (0, i.jsx)(tz, {
                children: (0, i.jsx)(tq, {
                    onReaction: l,
                    onVoiceChannelPreview: o,
                    user: A,
                    channel: a,
                    generateReactionImage: T,
                    reactionImageAltText:
                        ((t = s),
                        (n = A),
                        ed.intl.formatToPlainString(ed.t.Osmpr9, {
                            username: n.username,
                            artist: t.extra.artist.name,
                        })),
                    entry: s,
                }),
            }),
        ],
    });
};
var n$ = n(977001);
let nz = function (e) {
    var t, n;
    let { channel: a, entry: s, disableGameProfileLinks: l, onReaction: o, onVoiceChannelPreview: d } = e,
        { largeImage: c } = (0, P.nO)({ entry: s, trackingSource: "memberlist_top_game_content_popout" }),
        { user: u, details: _, appName: E } = (0, t1.u)(s),
        { primaryColor: A, secondaryColor: h } = (0, X.A)(c?.src),
        I = (0, w.ty)(s),
        f = (0, w.TQ)(s),
        p = r.useCallback(
            (e) => {
                if (null != a && null != u && null != I && null != f && (0, n$._E)(f)) {
                    var t, n, i;
                    let r, l, o;
                    return no({
                        entry: s,
                        applicationImageSrc: c?.src,
                        avatarSrcs: [u.getAvatarURL(a?.guild_id, 128)],
                        description:
                            ((t = s),
                            (n = a),
                            (i = u),
                            (r = (function (e) {
                                if (e === nk.j.WEEK) return ed.t["7TXfc6"];
                            })(f)),
                            (l = M.Ay.getName(n.guild_id, n.id, i)),
                            (o = t.extra.game_name),
                            ed.intl.formatToMarkdownString(r, { gameName: o, userName: l }).replaceAll("*", "")),
                        timestamp: ed.intl.formatToPlainString(ed.t.YL7UE3, {
                            hours: Math.round(I / q.A.Seconds.HOUR),
                        }),
                        colors: [A, h],
                        channelId: e,
                    });
                }
            },
            [c?.src, a, I, s, A, f, h, u],
        );
    if (null == u || null == I || null == f || !(0, n$._E)(f)) return null;
    let T = null != s.extra.platform ? nA[s.extra.platform] : null;
    return (0, i.jsxs)(tK, {
        children: [
            (0, i.jsx)(tJ, {
                channel: a,
                headerIcons:
                    null == T ? null : (0, i.jsx)(n_.A, { Icon: T, "aria-label": ed.intl.string(ed.t.YR4cHH) }),
                entry: s,
                userDescription: ed.t.rPqqts,
                title: E,
                subtitle: _,
                badges: (0, i.jsx)(eu.mG, {
                    location: eu.N5.POPOUT,
                    children: n$.ac.map((e, t) => (0, i.jsx)(e, { entry: s }, t)),
                }),
                disableGameProfileLinks: l,
            }),
            (0, i.jsx)(tz, {
                children: (0, i.jsx)(tq, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: u,
                    channel: a,
                    generateReactionImage: p,
                    reactionImageAltText:
                        ((t = s),
                        (n = u),
                        ed.intl.formatToPlainString(ed.t.tAwI1k, {
                            username: n.username,
                            activity: t.extra.game_name,
                        })),
                    entry: s,
                }),
            }),
        ],
    });
};
var nq = n(514243),
    nZ = n(347306),
    nX = n(123917),
    nQ = n(998218);
async function nJ(e) {
    let {
            mediaImageSrc: t,
            entry: n,
            avatarSrc: i,
            description: r,
            timestamp: a,
            episodeDescription: s,
            colors: l,
            channelId: o,
        } = e,
        d = n.extra.media_title,
        c = { AvatarImage: i, ...(null != t && { MediaImage: t }), ...!1 };
    return await z({
        assetsToLoad: c,
        drawImage: function (e) {
            let t,
                n = l.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let i = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: H.VZ.Contain });
            i === H.uS.Failure && (i = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                i === H.uS.Failure && e.drawPath(B, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: es, weight: 500, truncate: H.Kq.Wrap }),
                e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                el({
                    canvas: e,
                    badges:
                        ((t = [
                            {
                                iconPath:
                                    "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
                                text: a,
                            },
                        ]),
                        null != s &&
                            t.push({
                                iconPath:
                                    "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
                                text: s,
                            }),
                        t),
                    startPosition: 120,
                    maxWidth: 260,
                });
        },
        exportConfigs: {
            format: H.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${d}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
}
let n0 = function (e) {
        var t, n;
        let { channel: a, entry: s, onReaction: l, onVoiceChannelPreview: o } = e,
            c = (0, d.bG)([I.default], () => I.default.getUser(s.author_id)),
            { largeImage: u } = (0, P.nO)({ entry: s, trackingSource: "memberlist_watch_content_popout" }),
            { primaryColor: _, secondaryColor: E } = (0, X.A)(u?.src),
            A = (0, d.bG)([v.default], () => v.default.locale),
            h = nu(eW.fg2.CRUNCHYROLL),
            f = (0, w.kR)(s.extra.media_assets_large_text),
            p = r.useCallback(
                (e) => {
                    if (null != c && u?.src != null) {
                        var t, n, i;
                        let r, l, o;
                        return nJ({
                            entry: s,
                            mediaImageSrc: u?.src,
                            avatarSrc: c.getAvatarURL(a?.guild_id, 128),
                            description:
                                ((t = s),
                                (n = a),
                                (i = c),
                                (r = ed.t.LHF6D9),
                                (l = M.Ay.getName(n?.guild_id, n?.id, i)),
                                (o = t.extra.media_title),
                                ed.intl
                                    .formatToMarkdownString(r, {
                                        mediaTitle: o,
                                        userName: l,
                                        episodeDescription: t.extra.media_subtitle,
                                    })
                                    .replaceAll("*", "")),
                            timestamp: (0, w.As)(s, A),
                            episodeDescription: f,
                            colors: [_, E],
                            channelId: e,
                        });
                    }
                },
                [a, s, f, A, u?.src, _, E, c],
            );
        function T() {
            if (null == s.extra.url) return;
            let e = nQ.A.safeParseWithQuery(s.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, nX.h)({ href: nQ.A.format(e), trusted: !1 });
        }
        return null == c
            ? null
            : (0, i.jsxs)(tK, {
                  children: [
                      (0, i.jsx)(tJ, {
                          channel: a,
                          entry: s,
                          userDescription: (0, w.JM)(s) ? ed.t["LH+Z3y"] : ed.t.YuKgml,
                          title: s.extra.media_title,
                          subtitle: s.extra.media_subtitle,
                          headerIcons: (0, i.jsx)(n_.A, {
                              onClick: h,
                              Icon: nZ.k,
                              "aria-label": ed.intl.string(ed.t.jdJYXw),
                          }),
                          badges: (0, i.jsx)(eu.mG, {
                              location: eu.N5.POPOUT,
                              children: nq.R.map((e, t) => (0, i.jsx)(e, { entry: s }, t)),
                          }),
                          onClickTitle: T,
                          onClickThumbnail: T,
                      }),
                      (0, i.jsx)(tz, {
                          children: (0, i.jsx)(tq, {
                              onReaction: l,
                              onVoiceChannelPreview: o,
                              user: c,
                              channel: a,
                              generateReactionImage: p,
                              reactionImageAltText:
                                  ((t = s),
                                  (n = c),
                                  ed.intl.formatToPlainString(ed.t.kCbfbN, {
                                      username: n.username,
                                      activity: t.extra.media_title,
                                  })),
                              entry: s,
                          }),
                      }),
                  ],
              });
    },
    n1 = 72;
function n2(e) {
    return e?.type === h.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? n1 + 32
            : n1
        : 0;
}
function n3(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case o.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(t3.A, { ...n, entry: t });
        case o.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nq.A, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(n$.Ay, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nW, { ...n, entry: t });
        case o.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nT.Ay, { ...n, entry: t });
        case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(p.A, { ...n, entry: t });
        default:
            return null;
    }
}
function n6(e) {
    let { entry: t, targetElementRef: n, ...r } = e;
    return t.content_type === o.ContentInventoryEntryType.PLAYED_GAME
        ? (0, i.jsx)(np, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: r.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function n4(e) {
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
}
function n5(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case o.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(nh, { ...n, entry: t });
        case o.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(n0, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nz, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nK, { ...n, entry: t });
        case o.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nx, { ...n, entry: t });
        case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(t2, { ...n, entry: t });
        default:
            return null;
    }
}
let n7 = r.createContext(void 0),
    n8 = r.memo(function (e) {
        let { index: t, ref: a, ...o } = e,
            h = r.useRef(null),
            [p, T] = r.useState("default"),
            [m, g] = r.useState(!1),
            S = (0, l.rm)(`${t}`),
            N = I.default.getCurrentUser()?.isStaff(),
            { isRich: C, appName: O } = (0, t1.u)(o.entry);
        (0, A.T2)(o.entry.id);
        let R = r.useMemo(
                () => ({
                    entry: o.entry,
                    channelId: o.channel.id,
                    guildId: o.channel.guild_id,
                    requestId: o.requestId,
                    richPresenceName: C ? O : void 0,
                }),
                [O, o.channel.guild_id, o.channel.id, o.entry, o.requestId, C],
            ),
            L = r.useRef(!1),
            [D, y] = r.useState(!1),
            [v, b] = r.useState(!1),
            M = (0, d.bG)([E.Ay], () => E.Ay.keyboardModeEnabled);
        r.useEffect(() => {
            D && M && b(!0);
        }, [D, M]),
            r.useLayoutEffect(() => {
                null != h.current && g(!0);
            }, []);
        let P = r.useCallback(
                (e) => {
                    N &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("86456"), n.e("89346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, i.jsx)(e, { entry: o.entry, requestId: o.requestId });
                        });
                },
                [o, N],
            ),
            U = r.useCallback(() => {
                T(String(Date.now()));
            }, []),
            w = r.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, f.I)(e, { ...R, ...t });
                },
                [R],
            ),
            G = r.useMemo(
                () =>
                    s().throttle(
                        (e) => {
                            (0, f.I)(tV.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            );
        function x() {
            (L.current = !1),
                setTimeout(() => {
                    L.current || (y(!1), b(M));
                }, 100);
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m && (0, i.jsx)(n6, { ...o, targetElementRef: h }),
                (0, i.jsx)("div", {
                    ref: a,
                    onMouseEnter: () => {
                        (L.current = !0),
                            setTimeout(() => {
                                L.current && y(!0), G(R);
                            }, 100);
                    },
                    onMouseLeave: x,
                    children: (0, i.jsx)(c.Y, {
                        targetElementRef: h,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(n7.Provider, {
                                value: x,
                                children: (0, i.jsx)(n4, {
                                    closePopout: t,
                                    updatePopoutPosition: U,
                                    trackRankingItemInteraction: w,
                                    ...o,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: D,
                        positionKey: p,
                        onRequestOpen: () => G(R),
                        onRequestClose: () => {
                            v && x();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.jsx)(u.D, {
                                ...e,
                                ...S,
                                role: "button",
                                innerRef: h,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    D || y(!0);
                                },
                                onContextMenu: P,
                                children: (0, i.jsx)(n3, {
                                    ...o,
                                    selected: n,
                                    hovered: L.current,
                                    trackRankingItemInteraction: w,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
