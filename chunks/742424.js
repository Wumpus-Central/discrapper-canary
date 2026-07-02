"use strict";
n.d(t, { Jd: () => n4, Ay: () => n5, h9: () => n0, bG: () => nJ });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(837381),
    l = n(681154),
    u = n(17928),
    d = n(922016),
    c = n(939249),
    _ = n(442433),
    h = n(775602),
    f = n(963307),
    E = n(287809),
    p = n(947593),
    m = n(468581),
    g = n(808666),
    A = n(821609),
    I = n(414499),
    T = n(323384),
    S = n(55730),
    N = n(765379),
    C = n(737393),
    y = n(284525),
    v = n(793574),
    R = n(482030),
    O = n(627363),
    b = n(773669),
    L = n(403362),
    D = n(562153),
    P = n(939341),
    w = n(576757),
    M = n(583846);
n(321073);
var x = n(284009),
    U = n.n(x),
    k = n(989349),
    G = n.n(k),
    V = n(379834);
n(587895);
let F =
    "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
n(654107);
var B = n(583954),
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
let H = new j.A("AssetMap");
async function W(e) {
    let t = new Y(),
        n = Object.entries(e).map((e) => {
            let [n, i] = e;
            return t.loadRemoteImage(n, i).catch((e) => H.warn("Failed to load canvas asset", e, n, i));
        });
    return await Promise.all(n), t;
}
class Y {
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
class K {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        U()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return U()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
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
            o = new K(new e(a, s), new t());
        i(o.canvas);
        let l = await o.export(r);
        return a.remove(), l;
    }
}
var z = n(927813),
    q = n(935208),
    Z = n(140651);
let X =
        "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
    Q =
        "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
    J =
        "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
    ee =
        "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
    et =
        "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
    en =
        "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
    ei =
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
    er =
        "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
    es = ["gg sans", "sans-serif"];
function ea(e) {
    let t,
        { canvas: n, badges: i, startPosition: r, maxWidth: s } = e;
    for (let { iconPath: e, text: a } of (n.setFont({ size: 12, family: es, weight: 500, truncate: B.Kq.None }), i)) {
        let i = null != t ? t.w + t.x + 12 : r,
            o = null != t ? t.w + t.x + 12 + 18 : r + 18;
        n.drawPath(e, { x: i, y: 88 }, !0, 0.6), (t = n.drawText(a, { x: o, y: 99, w: s }, !0));
    }
}
function eo(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: i, y: r },
        avatarImageSize: s,
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect({ x: i + (e + 1) * (s - 8) - 2, y: r - 1, w: s + 2, h: s + 2 }, s / 2, !0),
            t.drawRoundedImage(n[e], { x: i + e * (s - 8), y: r }, { w: s, h: s }, 50, { fillMode: B.VZ.Cover }),
            t.restoreContext();
}
var el = n(375708);
async function eu(e) {
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
            (function (e, t) {
                let { timestamp: n, colors: i, description: r, entry: s, numAvatars: a } = t,
                    o = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === B.uS.Failure &&
                        e.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    eo({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: es, weight: 500, truncate: B.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    ea({
                        canvas: e,
                        badges: (function (e, t) {
                            let n = [{ iconPath: X, text: t }],
                                i = q.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= G()().diff(G()(i), "days") &&
                                    n.push({ iconPath: er, text: el.intl.string(el.t.vYuyWf) }),
                                (0, M.Rf)(e) && n.push({ iconPath: Q, text: el.intl.string(el.t.keY6mW) }),
                                (0, M.BZ)(e))
                            ) {
                                let t = (0, M.iy)(e);
                                n.push({
                                    iconPath: en,
                                    text: el.intl.formatToPlainString(el.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, M.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: ei, text: el.intl.string(el.t.kAlUsy) });
                            let r = (0, M.KH)(e);
                            if ((null != r && n.push({ iconPath: et, text: (0, M.us)(r) }), (0, M.L7)(e))) {
                                let { text: t } = (0, M.Pj)(e);
                                null != t && n.push({ iconPath: J, text: t });
                            }
                            if ((0, M.uw)(e)) {
                                let t = (0, M.ty)(e);
                                if (null != t) {
                                    let e = el.intl.formatToPlainString(el.t.C0AxoR, {
                                        hours: Math.round(t / z.A.Seconds.HOUR),
                                    });
                                    return [{ iconPath: ee, text: `${el.intl.string(el.t["/50eHi"])} \u{2014} ${e}` }];
                                }
                            }
                            return n;
                        })(s, n),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            })(e, { timestamp: s, colors: a, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: B.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${l}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
}
var ed = n(506326),
    ec = n(503698),
    e_ = n.n(ec);
n(340287);
var eh = n(554146),
    ef = n(661531),
    eE = n(342952),
    ep = n(990078),
    em = n(315710),
    eg = n(43990),
    eA = n(276293),
    eI = n(935063),
    eT = n(789645),
    eS = n(778712),
    eN = n(696986),
    eC = n(534514),
    ey = n(834730),
    ev = n(320448),
    eR = n(97808),
    eO = n(738188),
    eb = n(983851),
    eL = n(31300),
    eD = n(308528),
    eP = n(367513),
    ew = n(730852),
    eM = n(401843),
    ex = n(969151),
    eU = n(736653),
    ek = n(355622),
    eG = n(408018),
    eV = n(138617),
    eF = n(375499),
    eB = n(429433),
    ej = n(95701),
    eH = n(652215),
    eW = n(389605);
let eY = (0, ej.createChannelRecord)({ id: "1", type: eH.rbe.DM });
function eK(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: a = !1,
            renderAttachButton: o,
            autoFocus: l = !0,
            onFocus: u,
            channel: d,
            className: c,
        } = e,
        [_, h] = r.useState(""),
        [f, E] = r.useState((0, eG.x7)("")),
        p = ek.oU.ATOMIC_REACTOR_REPLY_INPUT,
        m = r.useRef(null);
    return (0, i.jsx)(eV.Ay, {
        ref: m,
        placeholder: t,
        editorClassName: c,
        className: e_()(eW.N8, c),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: d ?? eY,
        onChange: (e, t, n) => {
            h(t), E(n);
        },
        type: a ? { ...p, emojis: { button: !0 } } : p,
        textValue: _,
        richValue: f,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), h(""), E((0, eG.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: l,
        onFocus: u,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == m.current) return "top";
            let e = m.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function e$(e) {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        a = (0, eU.Ay)(),
        [o, l] = r.useState(!1),
        u = r.useRef(null),
        c = r.useRef(null);
    return (
        (t = () => l(!1)),
        r.useEffect(() => {
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
        (0, i.jsx)(d.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: o,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(eg.N, {
                    theme: a,
                    children: (e) =>
                        (0, i.jsx)("div", {
                            className: e,
                            ref: u,
                            children: (0, i.jsx)(eB.C, {
                                messageId: eH.dJq,
                                channel: eY,
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
                (0, i.jsx)(ep.m, {
                    text: el.intl.string(el.t.lfIHs4),
                    children: (0, i.jsx)("div", {
                        ref: c,
                        className: eW.mJ,
                        children: (0, i.jsx)(eF.A, {
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
}
var ez = n(47167),
    eq = n(262763),
    eZ = n(402216),
    eX = n(268218),
    eQ = n(826673),
    eJ = n(822123),
    e0 = n(643501),
    e1 = n(409626),
    e2 = n(692969),
    e3 = n(279250),
    e6 = n(607407),
    e4 = n(548118),
    e5 = n(499211),
    e7 = n(378570),
    e8 = n(832163),
    e9 = n(565688),
    te = n(533562),
    tt = n(580929),
    tn = n(805901),
    ti = n(565645);
n(915089);
var tr = n(713517);
n(334295);
var ts = n(7584);
n(850992), n(690521), n(806931);
var ta = n(307731);
n(650583);
var to = n(317299);
function tl(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: a } = e,
        o = r.useRef(null),
        l = (0, tr.M)(o);
    return (0, i.jsx)("span", {
        ref: o,
        children: (0, i.jsx)(c.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(tn.c, {
                config: eF.B,
                from: { value: 0 },
                to: { value: +!!l },
                children: (e) => {
                    let { value: r } = e;
                    return (0, i.jsx)(tt.animated.div, {
                        style: { transform: r.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, i.jsx)(ti.A, {
                            className: e_()(to.Zg, a, { [to.c4]: n }),
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
        ts.Ay.getByName("thumbsup"),
        ts.Ay.getByName("eyes"),
        ts.Ay.getByName("laughing"),
        ts.Ay.getByName("watermelon"),
        ts.Ay.getByName("fork_and_knife"),
        ts.Ay.getByName("yum"),
    ].filter(L.Vq);
var tu = n(636585),
    td = n(734057),
    tc = n(71393),
    t_ = n(576705),
    th = n(994500),
    tf = n(543465),
    tE = n(977997),
    tp = n(607567),
    tm = n(174459),
    tg = n(486020),
    tA = n(20805),
    tI = n(22869),
    tT = n(623671),
    tS = n(428249),
    tN = n(327098),
    tC = n(202195),
    ty = n(43105),
    tv = n(131607),
    tR = n(49999),
    tO = n(345394);
let tb = function (e) {
    let { children: t } = e,
        [n, s] = (0, tv.kn)([eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
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
                  (0, i.jsx)(ty.A, {
                      targetElementRef: l,
                      shouldShow: a,
                      onRequestClose: u,
                      position: "left",
                      title: el.intl.string(el.t.V5y3qZ),
                      body: el.intl.string(el.t.eSDHDk),
                      graphic: { type: "image", src: tO.A },
                  }),
              ],
          });
};
var tL = n(315246),
    tD = n(866323),
    tP = n(857250),
    tw = n(97483),
    tM = n(289873),
    tx = n(401871),
    tU = n(861173);
function tk() {
    return (0, i.jsxs)("div", {
        className: tU.oR,
        children: [
            (0, i.jsx)(tM.y, { type: tM.t.SPINNING_CIRCLE_SIMPLE, className: tx.S }),
            (0, i.jsx)(ey.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: el.intl.string(el.t["5z/hlE"]),
            }),
        ],
    });
}
let tG = (e) => {
    let { shown: t, sent: n, className: r } = e,
        s = (0, u.bG)([h.Ay], () => h.Ay.useReducedMotion),
        a = (0, tD.p)(
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
                (0, i.jsx)(tt.animated.div, {
                    className: r,
                    style: e,
                    children: n
                        ? (0, i.jsx)(tP.y, {
                              message: el.intl.string(el.t.fjcCk5),
                              type: tw.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, i.jsx)(tP.y, {
                              message: "",
                              type: tw.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, i.jsx)(tk, {}) },
                          }),
                }),
        ),
    });
};
var tV = n(424994),
    tF = n(381941),
    tB = n(699976),
    tj = n(994063);
let tH = (0, eX.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("46953"),
                n.e("38123"),
                n.e("56795"),
                n.e("85723"),
                n.e("77756"),
                n.e("70676"),
                n.e("1316"),
                n.e("9233"),
                n.e("69747"),
                n.e("11133"),
                n.e("49013"),
                n.e("46430"),
                n.e("93461"),
                n.e("90779"),
                n.e("39808"),
                n.e("9763"),
                n.e("20667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    tW = r.createContext(void 0);
function tY(e) {
    let { children: t } = e,
        n = r.useRef(null),
        s = r.useId();
    return (
        (0, em.tj)(n),
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
function tK(e) {
    let { children: t, backgroundImgSrc: n, className: r, style: s = {} } = e,
        { primaryColor: a, secondaryColor: o } = (0, Z.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${a}, ${o})`),
        (0, i.jsx)(eg.N, {
            theme: eH.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, i.jsx)("div", { className: e_()(tj.ZK, e, r), style: s, children: t }),
        })
    );
}
function t$(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: tj.$m, children: t });
}
function tz(e) {
    var t;
    let n,
        s,
        a,
        o,
        { channel: l, user: d, onReaction: _, entry: h, buttons: f = [], header: p, onVoiceChannelPreview: m } = e,
        [g, I] = r.useState(!1),
        [T, S] = r.useState(null),
        N = (0, u.bG)(
            [t_.A],
            () => null != l && eH.kvI.CONTENT_ENTRY_EMBEDS.has(l.type) && t_.A.can(eH.xBc.SEND_MESSAGES, l),
        ),
        [C, y] = r.useState(!1),
        [v, R] = r.useState(!1),
        { voiceBar: O, joinVoiceButton: b } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: a, channel: o } = (0, tC.A)(n),
                l = (0, ez.Ay)(o),
                { needSubscriptionToAccess: d } = (0, e5.A)(t?.id),
                _ = (0, u.bG)([tc.A], () => (null != o ? tc.A.getGuild(o.guild_id) : void 0)),
                h = (0, u.yK)([tp.Ay], () => (null != o ? tp.Ay.getVoiceStatesForChannel(o) : []), [o]),
                f = (0, u.bG)([tE.A], () => tE.A.isInChannel(o?.id)),
                E = r.useMemo(() => {
                    for (let e of h) {
                        let t = td.A.getDMFromUserId(e.user.id),
                            n = null != t && tf.Ay.isChannelMuted(null, t),
                            i = th.A.isBlockedOrIgnored(e.user.id);
                        if (n || i) return !0;
                    }
                    return !1;
                }, [h]);
            if (null == o || null == _) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != a;
            function m(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: r } = e,
                    s = r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(eO.i, { size: "custom", width: 13, height: 13, className: tj.vb }),
                                  el.intl.string(el.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, i.jsx)(
                    ep.m,
                    {
                        "aria-label": r ? el.intl.string(el.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: s,
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
                                (0, i.jsx)(m, {
                                    text: el.intl.string(el.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: E,
                                    children: (0, i.jsxs)(c.D, {
                                        "aria-label": el.intl.string(el.t.WIVYqJ),
                                        onClick: () => {
                                            eP.A.updateChatOpen(o.id, !0), (0, e7.iN)(o.id), s?.(o);
                                        },
                                        className: tj.I3,
                                        children: [
                                            (0, i.jsx)(e4.Ay, {
                                                guild: _,
                                                size: e4.Ay.Sizes.SMOL,
                                                className: tj.O9,
                                                active: !0,
                                            }),
                                            (0, i.jsx)(ev._, {
                                                size: "xxs",
                                                color: ef.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, i.jsx)(eb.H, { size: "xs", color: ef.A.colors.TEXT_DEFAULT }),
                                            (0, i.jsx)(ey.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: tj.NR,
                                                children: l,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(tu.A, {
                                    guildId: _.id,
                                    users: h,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, i.jsx)(eR.eu, {
                                            src: e.user.getAvatarURL(_.id, 16),
                                            size: eS._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, i.jsx)("div", {
                                            className: tj.V9,
                                            children: (0, i.jsx)(ey.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(eN.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: f
                    ? null
                    : (0, i.jsx)(m, {
                          hasRestrictedOrMutedVCParticipant: E,
                          children: (0, i.jsx)(A.$, {
                              onClick: () => {
                                  eq.A.handleVoiceConnect({
                                      channel: o,
                                      connected: f,
                                      needSubscriptionToAccess: d,
                                      routeDirectlyToChannel: !0,
                                  });
                              },
                              fullWidth: !0,
                              text: p ? el.intl.string(el.t.I6JG46) : el.intl.string(el.t.VJlc0S),
                              icon: p ? eL.k : eb.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: l, entry: h, onVoiceChannelPreview: m }),
        { embeddedActivity: L } = (0, tN.A)(h),
        P =
            ((t = L),
            (n = (0, u.bG)([tc.A], () => tc.A.getGuild((0, ex.D)(t?.location)))),
            (s = (0, u.bG)([td.A], () => td.A.getChannel((0, ex.H)(t?.location)))),
            (a = (0, u.yK)([E.default], () => t?.participants?.map((e) => E.default.getUser(e.userId)) ?? [])),
            (o = (0, ez.Ay)(s)),
            null != t && null != n && null != s && ej.k3.has(s.type)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: tj.kP,
                              children: [
                                  (0, i.jsxs)(c.D, {
                                      "aria-label": el.intl.string(el.t["W/A4Qp"]),
                                      onClick: () => (0, e7.iN)(s.id),
                                      className: tj.I3,
                                      children: [
                                          (0, i.jsx)(e4.Ay, {
                                              guild: n,
                                              size: e4.Ay.Sizes.SMOL,
                                              className: tj.O9,
                                              active: !0,
                                          }),
                                          (0, i.jsx)(ev._, {
                                              size: "xxs",
                                              color: ef.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, i.jsx)(eA.N, { size: "xs", color: ef.A.colors.TEXT_DEFAULT }),
                                          (0, i.jsx)(ey.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: tj.NR,
                                              children: o,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(tu.A, {
                                      guildId: n.id,
                                      users: a,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, i.jsx)(eR.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: eS._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, i.jsx)("div", {
                                              className: tj.V9,
                                              children: (0, i.jsx)(ey.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(eN.h, { size: 16 }),
                      ],
                  })
                : null),
        w = null != b && 0 === f.length ? [b] : f,
        M = w.length > 0,
        x = w.length >= 2,
        [k, G] = r.useState(!M),
        V = D.Ay.getName(l?.guild_id, l?.id, d),
        F = (0, ez.Ay)(l, !0),
        B =
            null != l && g
                ? el.intl.formatToPlainString(el.t["8lzR/R"], { channel: F })
                : el.intl.formatToPlainString(el.t["4c+CAx"], { channel: `@${V}` }),
        j = g ? el.intl.string(el.t.Z2CUgn) : el.intl.string(el.t.XLGiTG),
        H = async (e) => {
            let t,
                { emoji: n } = e;
            if (null != n) {
                if (
                    (tm.default.track(eH.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: tV.UG.GUILD_MEMBER_LIST,
                        channel_id: l?.id,
                        guild_id: l?.guild_id,
                    }),
                    (0, eQ.Dr)(eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    y(!0),
                    R(!1),
                    g)
                )
                    U()(null != l, "shareToChannelMode should only be true if a valid channel is passed"), (t = l);
                else {
                    let e = await eD.A.getOrEnsurePrivateChannel(d.id);
                    t = td.A.getChannel(e) ?? null;
                }
                return (
                    U()(null != t, "Send channel must be defined"),
                    Y({
                        reply: `:${n.name}:`,
                        sendToChannel: t,
                        onComplete: (e, t) => {
                            R(!0),
                                setTimeout(() => {
                                    y(!1), _(e, t);
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
            if (((0, eQ.Dr)(eh.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                U()(null != l, "shareToChannelMode should only be true if a valid channel is passed"), (t = l);
            else {
                let e = await eD.A.openPrivateChannel({ recipientIds: d.id }),
                    n = td.A.getChannel(e);
                U()(null != n, "DM channel must be defined"), (t = n);
            }
            let n = t.type === eH.rbe.DM ? tV.PA.DM_REACTION_MESSAGE_SENT : tV.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return Y({ reply: e, sendToChannel: t, interactionType: n, onComplete: _, requiresChannelReadiness: !0 });
        };
    async function Y(e) {
        let { reply: t, sendToChannel: n, onComplete: i, interactionType: r, requiresChannelReadiness: s } = e;
        T?.focus(),
            await (0, tS.d)({
                channel: n,
                content: t,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: tF.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(r, n);
    }
    let K = p ?? O ?? P;
    function $() {
        I((e) => !e), k && T?.focus();
    }
    function z(e) {
        G(e), e && T?.focus();
    }
    return (0, i.jsxs)("div", {
        style: { pointerEvents: C ? "none" : "all" },
        children: [
            (0, i.jsx)(tG, { sent: v, shown: C, className: tj.Jt }),
            K ??
                (0, i.jsx)(tb, {
                    children: (0, i.jsxs)("div", {
                        className: tj.T7,
                        children: [
                            (0, i.jsx)(tq, { channel: l, onClickSuggestion: H }),
                            (0, i.jsx)(e$, { onSelectEmoji: H }),
                        ],
                    }),
                }),
            (0, i.jsxs)("div", {
                className: k ? tj.P2 : tj.VE,
                children: [
                    (0, i.jsx)(eK, {
                        placeholder: B,
                        onEnter: W,
                        setEditorRef: (e) => S(e),
                        channel: g ? l : void 0,
                        showEmojiButton: null != K,
                        className: tj.N8,
                        autoFocus: !1,
                        renderAttachButton: N
                            ? () =>
                                  (0, i.jsx)(ep.m, {
                                      text: j,
                                      children: (0, i.jsx)(c.D, {
                                          className: tj.wD,
                                          onClick: $,
                                          children: g
                                              ? (0, i.jsx)(eA.N, { size: "custom", width: 20, height: 20 })
                                              : (0, i.jsx)(eI.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    M &&
                        (0, i.jsx)(c.D, {
                            onClick: () => z(!1),
                            className: tj.i3,
                            children: (0, i.jsx)(eT.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: ef.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === k &&
                (0, i.jsxs)("div", {
                    className: tj.fh,
                    children: [
                        !x &&
                            (0, i.jsx)(
                                A.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => z(!0),
                                    size: "md",
                                    text: el.intl.string(el.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        w,
                    ],
                }),
        ],
    });
}
let tq = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        a(!0);
    }, []);
    let o = !!h.Ay.keyboardModeEnabled && !s,
        l = (0, eJ.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tg._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: r } = e;
            return null != r
                ? (0, i.jsx)(
                      "div",
                      {
                          children: (0, i.jsx)(ep.m, {
                              asContainer: !0,
                              text: el.intl.formatToPlainString(el.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": el.intl.formatToPlainString(el.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !o && void 0,
                              children: (0, i.jsx)(tl, {
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
function tZ(e) {
    let { channel: t, userDescription: n, entry: r, disableGameProfileLinks: s, onUserPopoutClosed: a } = e,
        o = t?.guild_id,
        { displayParticipants: l, participant1: d, participant2: c, numOtherParticipants: _ } = (0, w.A)(r, 3),
        h = (0, u.bG)([E.default], () => E.default.getUser(r.author_id)),
        { streamPreviewUrl: f } = (0, tC.A)(r),
        p = [d, c];
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
                        size: eS._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: a,
                    }),
                    (0, i.jsx)(eN.h, { size: 8, horizontal: !0 }),
                    (0, i.jsx)(eC.D, {
                        variant: "heading-sm/normal",
                        className: e_()(tj.Xn, tj.zA),
                        children: el.intl.format(n, {
                            user0: D.Ay.getName(o, t?.id, p[0]),
                            user1: D.Ay.getName(o, t?.id, p[1]),
                            countOthers: _,
                            countOthersHook: (e, t) =>
                                (0, i.jsx)(
                                    ey.E,
                                    { variant: "text-sm/medium", className: e_()(tj.Mj, tj.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, i.jsx)(
                                    tI.A,
                                    {
                                        textClassName: e_()(tj.Mj, tj.nk),
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
                                    tI.A,
                                    {
                                        textClassName: e_()(tj.Mj, tj.nk),
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
            null != f && (0, i.jsx)(eZ.Ay, { size: eZ.Ay.Sizes.SMALL }),
            null != h && (0, i.jsx)(tL.A, { user: h, channel: t, guildId: o, entry: r, disableGameProfileLinks: s }),
        ],
    });
}
function tX(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(c.D, { className: tj.Zw, onClick: n, children: t });
}
function tQ(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: a,
            onClickThumbnail: o,
            onClickTitle: l,
            onClickSubtitle: d,
            headerIcons: c,
            disableGameProfileLinks: _ = !1,
            showCoverImage: h = !0,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: E,
            ...p
        } = e,
        { entry: m } = p,
        g = (0, tA.zD)(m),
        A = g ? m.extra?.application_id : void 0,
        I = (0, te.W)();
    null != I && (A = I);
    let T = (0, e2.A)(
            {
                location: "ContentPopout",
                applicationId: _ ? void 0 : A,
                source: e1.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: m.author_id,
            },
            { onOpened: () => E?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: N } = (0, P.nO)({
            entry: m,
            showCoverImage: h,
            trackingSource: "memberlist_content_popout",
        }),
        C = (0, e9.w)({ location: "content_inventory" }),
        y = (0, u.bG)([e8.A], () => e8.A.getDetectableIdsToApplicationIds()),
        v = g ? T : void 0,
        R = r.useContext(tW);
    return (0, i.jsxs)("div", {
        className: tj.au,
        children: [
            (0, i.jsx)(tZ, { disableGameProfileLinks: _, ...p, onUserPopoutClosed: f }),
            (0, i.jsxs)(tK, {
                backgroundImgSrc: S?.src,
                children: [
                    (0, i.jsxs)("div", {
                        className: tj.CG,
                        children: [
                            (0, i.jsx)("div", {
                                className: tj.Fb,
                                children: (0, i.jsx)(tT.d, {
                                    image: S,
                                    smallImage: N,
                                    aspectRatio: h ? "none" : void 0,
                                    onClick: o ?? v,
                                    size: tT.w.SIZE_72,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: tj.iC,
                                children: [
                                    (0, i.jsx)(tX, {
                                        onClick: l ?? v,
                                        children: (0, i.jsx)(eC.D, {
                                            id: R,
                                            variant: "heading-md/medium",
                                            className: e_()(tj.$2, { [tj.bC]: null != c }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tX, {
                                              onClick: d ?? v,
                                              children: (0, i.jsx)(ey.E, {
                                                  variant: "text-sm/normal",
                                                  className: tj.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(eN.h, { size: 8 }),
                                    s,
                                ],
                            }),
                            (0, i.jsx)("div", { className: tj.hO, children: c }),
                        ],
                    }),
                    a,
                ],
            }),
            C && null != A && null != y[A]
                ? (0, i.jsx)(tH, {
                      className: tj.zu,
                      applicationId: A,
                      userIds: [m.author_id],
                      location: "content_popout",
                      guildId: p.channel?.guild_id,
                      channelId: p.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tB.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function tJ(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: a,
            stream: o,
            onClickThumbnail: l,
            onClickTitle: d,
            onClickSubtitle: c,
            onUserPopoutClosed: _,
            trackRankingItemInteraction: h,
            ...f
        } = e,
        E = (0, u.bG)([td.A], () => td.A.getChannel(o?.channelId)),
        [p] = r.useMemo(() => (0, e3.eo)(E, tE.A, tc.A, t_.A, e0.default), [E]),
        { entry: m } = f,
        g = (0, tA.zD)(m),
        A = g ? m.extra?.application_id : void 0,
        I = (0, te.W)();
    null != I && (A = I);
    let T = (0, e2.A)(
            {
                location: "ContentPopout",
                applicationId: A,
                source: e1.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: m.author_id,
            },
            { onOpened: () => h?.(tV.PA.OPENED_GAME_PROFILE) },
        ),
        S = g ? T : void 0,
        { activity: N, activityApplication: C, fallbackApplication: y } = (0, tN.A)(m),
        { largeImage: v, smallImage: R } = (0, P.D8)(N, C ?? y),
        { largeImage: O } = (0, P.nO)({ entry: m, trackingSource: "memberlist_streaming_content_popout" }),
        b = (0, e9.w)({ location: "content_inventory" }),
        L = (0, u.bG)([e8.A], () => e8.A.getDetectableIdsToApplicationIds()),
        D = r.useContext(tW);
    return (0, i.jsxs)("div", {
        className: tj.au,
        children: [
            (0, i.jsx)(tZ, { ...f, onUserPopoutClosed: _ }),
            (0, i.jsxs)(tK, {
                backgroundImgSrc: O?.src,
                className: tj.uR,
                children: [
                    (0, i.jsx)(tX, {
                        onClick: p
                            ? () => {
                                  ew.default.selectVoiceChannel(o.channelId), (0, eM.Nl)(o);
                              }
                            : void 0,
                        children: (0, i.jsxs)("div", {
                            className: tj.nh,
                            children: [
                                (0, i.jsx)(e6.A, { className: tj.j7, stream: o }),
                                p &&
                                    (0, i.jsx)("div", {
                                        className: tj.NE,
                                        children: (0, i.jsx)(ey.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: el.intl.string(el.t["7Xq/nV"]),
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
                                    children: (0, i.jsx)(tT.d, {
                                        image: v,
                                        smallImage: R,
                                        onClick: l ?? S,
                                        size: tT.w.SIZE_72,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tj.gv,
                                children: [
                                    (0, i.jsx)(tX, {
                                        onClick: d ?? S,
                                        children: (0, i.jsx)(eC.D, {
                                            id: D,
                                            variant: "heading-md/semibold",
                                            className: tj.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, i.jsx)(tX, {
                                              onClick: c ?? S,
                                              children: (0, i.jsx)(ey.E, {
                                                  variant: "text-sm/normal",
                                                  className: tj.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(eN.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    a,
                ],
            }),
            b && null != A && null != L[A]
                ? (0, i.jsx)(tH, {
                      className: tj.zu,
                      applicationId: A,
                      userIds: [m.author_id],
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tB.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var t0 = n(299846);
let t1 = function (e) {
    let { channel: t, entry: n, onReaction: s, onVoiceChannelPreview: a, disableActivityProfileLinks: o } = e,
        { largeImage: l } = (0, P.nO)({
            entry: n,
            showCoverImage: !1,
            trackingSource: "memberlist_activity_content_popout",
        }),
        { user: d, details: c, activity: _, embeddedActivity: h } = (0, t0.u)(n),
        { primaryColor: f, secondaryColor: E } = (0, Z.A)(l?.src),
        p = (0, u.bG)([b.default], () => b.default.locale),
        { displayParticipants: m, participant1: x, participant2: U, numOtherParticipants: k } = (0, w.A)(n, 3);
    function G() {
        (0, R.hg)(n.extra.application_id);
    }
    let V = r.useCallback(
            (e) => {
                let i, r, s;
                if (l?.src == null || null == t || null == d) return;
                let a =
                    k > 0
                        ? (function (e) {
                              let { entry: t, channel: n, users: i, countOthers: r } = e,
                                  s = el.t["7j/5mg"];
                              return el.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: D.Ay.getName(n?.guild_id, n?.id, i[0]),
                                      user2: D.Ay.getName(n?.guild_id, n?.id, i[1]),
                                      countOthers: r,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [x, U], countOthers: k })
                        : ((i = el.t["bES+y2"]),
                          (r = D.Ay.getName(t.guild_id, t.id, d)),
                          (s = n.extra.activity_name),
                          el.intl.formatToMarkdownString(i, { gameName: s, userName: r }).replaceAll("*", ""));
                return eu({
                    entry: n,
                    applicationImageSrc: l?.src,
                    avatarSrcs: m.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, M.As)(n, p),
                    colors: [f, E],
                    channelId: e,
                });
            },
            [l?.src, t, m, n, p, k, x, U, f, E, d],
        ),
        { data: F } = (0, O.YY)(n.extra.application_id),
        B = (0, C.Ay)({ application: F, analyticsLocations: [v.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == d) return null;
    let j = (0, i.jsx)(ed.iT, { location: ed.N5.POPOUT, entry: n }),
        H = (0, i.jsx)(tQ, {
            channel: t,
            userDescription: (0, M.JM)(n) ? el.t.vPg1JT : el.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: c,
            badges: j,
            entry: n,
            showCoverImage: !1,
            onClickTitle: o ? void 0 : G,
            onClickSubtitle: o ? void 0 : G,
            onClickThumbnail: o ? void 0 : G,
        }),
        W = (0, S.A)(_, eH.jUm.JOIN) || (0, N.A)(_),
        Y = W
            ? (0, i.jsx)(y.A, { embeddedActivity: h, activity: _, user: d, variant: "primary", size: "md", icon: g.I })
            : null,
        K =
            null == B
                ? null
                : (0, i.jsx)(A.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: B,
                      text: el.intl.string(el.t["jaYS/h"]),
                      icon: I.h,
                  }),
        $ =
            null != K || o
                ? null
                : (0, i.jsx)(A.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: G,
                      text: el.intl.string(el.t.GDWYR8),
                      icon: T.k,
                  }),
        z = [K, W && !o ? Y : $].filter(L.Vq);
    return (0, i.jsxs)(tY, {
        children: [
            H,
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tz, {
                    onReaction: s,
                    onVoiceChannelPreview: a,
                    user: d,
                    channel: t,
                    generateReactionImage: V,
                    reactionImageAltText: el.intl.formatToPlainString(el.t.tAwI1k, {
                        username: d.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: z,
                }),
            }),
        ],
    });
};
var t2 = n(322789),
    t3 = n(808380),
    t6 = n(687966),
    t4 = n(39623),
    t5 = n(960076),
    t7 = n(544441),
    t8 = n(562708),
    t9 = n(688810),
    ne = n(139286);
function nt(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: r } = (0, t9.Ay)(n),
        s = (0, C.Ay)({ application: t, analyticsLocations: r });
    return (
        (0, ne.A)({
            name: t8.ImpressionNames.CLOUD_PLAY_CTA,
            type: t8.ImpressionTypes.VIEW,
            properties: { location_stack: r },
        }),
        (0, i.jsx)(
            A.$,
            {
                variant: "primary",
                size: "md",
                icon: I.h,
                text: el.intl.string(el.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var nn = n(601007),
    ni = n(648246),
    nr = n(308335),
    ns = n(790381),
    na = n(266080);
async function no(e) {
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
            (function (e, t) {
                let { timestamp: n, colors: i, description: r, entry: s, numAvatars: a } = t,
                    o = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === B.uS.Failure &&
                        e.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    eo({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: es, weight: 500, truncate: B.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    ea({
                        canvas: e,
                        badges: (function (e, t) {
                            let n = [{ iconPath: X, text: t }],
                                i = q.default.extractTimestamp(e.extra.application_id);
                            if (
                                (7 >= G()().diff(G()(i), "days") &&
                                    n.push({ iconPath: er, text: el.intl.string(el.t.vYuyWf) }),
                                (0, M.Rf)(e) && n.push({ iconPath: Q, text: el.intl.string(el.t.keY6mW) }),
                                (0, M.BZ)(e))
                            ) {
                                let t = (0, M.iy)(e);
                                n.push({
                                    iconPath: en,
                                    text: el.intl.formatToPlainString(el.t["Klie/P"], { days: t }),
                                });
                            }
                            (0, M.CZ)(e) === V.m.GLOBAL && n.push({ iconPath: ei, text: el.intl.string(el.t.kAlUsy) });
                            let r = (0, M.KH)(e);
                            if ((null != r && n.push({ iconPath: et, text: (0, M.us)(r) }), (0, M.L7)(e))) {
                                let { text: t } = (0, M.Pj)(e);
                                null != t && n.push({ iconPath: J, text: t });
                            }
                            if ((0, M.uw)(e)) {
                                let t = (0, M.ty)(e);
                                if (null != t) {
                                    let e = el.intl.formatToPlainString(el.t.C0AxoR, {
                                        hours: Math.round(t / z.A.Seconds.HOUR),
                                    });
                                    return [{ iconPath: ee, text: `${el.intl.string(el.t["/50eHi"])} \u{2014} ${e}` }];
                                }
                            }
                            return n;
                        })(s, n),
                        startPosition: 120,
                        maxWidth: 260,
                    });
            })(e, { timestamp: s, colors: a, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: B.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${l}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
}
var nl = n(968309),
    nu = n(30370);
function nd(e) {
    let t = (0, u.bG)([nu.A], () => nu.A.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, nl.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var nc = n(18282);
let n_ = {
        [t3.Y.DESKTOP]: null,
        [t3.Y.LINUX]: null,
        [t3.Y.MACOS]: null,
        [t3.Y.NINTENDO]: null,
        [t3.Y.IOS]: null,
        [t3.Y.ANDROID]: null,
        [t3.Y.XBOX]: na.A,
        [t3.Y.PLAYSTATION]: ns.A,
    },
    nh = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: s,
                onReaction: a,
                onVoiceChannelPreview: o,
                onUserPopoutClosed: l,
                trackRankingItemInteraction: d,
            } = e,
            { largeImage: c } = (0, P.nO)({ entry: n, trackingSource: "memberlist_gaming_content_popout" }),
            { user: _, details: h, appName: f, activity: E, embeddedActivity: p } = (0, t0.u)(n),
            { primaryColor: m, secondaryColor: g } = (0, Z.A)(c?.src),
            A = (0, u.bG)([b.default], () => b.default.locale),
            { streamPreviewUrl: I, stream: T } = (0, tC.A)(n),
            { displayParticipants: R, participant1: x, participant2: U, numOtherParticipants: k } = (0, w.A)(n, 3),
            G = n.extra.platform,
            V = n.extra.application_id,
            F = null != G ? n_[G] : null,
            B = nd(G === t3.Y.XBOX ? eH.fg2.XBOX : G === t3.Y.PLAYSTATION ? eH.fg2.PLAYSTATION : void 0),
            { data: j } = (0, O.YY)(V),
            H = (0, t7.A)(V),
            { analyticsLocations: W } = (0, t9.Ay)(v.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            Y = (0, C.JC)(j),
            K = (0, nr.o)(E?.application_id ?? p?.applicationId ?? j?.id),
            $ = r.useCallback(
                (e) => {
                    let i, r, s, a;
                    if (c?.src == null || null == t || null == _) return;
                    let o =
                        k > 0
                            ? (function (e) {
                                  let { entry: t, channel: n, users: i, countOthers: r } = e,
                                      s = (0, M.JM)(t) ? el.t.QaUWPd : el.t["7j/5mg"];
                                  return el.intl
                                      .formatToMarkdownString(s, {
                                          gameName: t.extra.game_name,
                                          user1: D.Ay.getName(n?.guild_id, n?.id, i[0]),
                                          user2: D.Ay.getName(n?.guild_id, n?.id, i[1]),
                                          countOthers: r,
                                      })
                                      .replaceAll("*", "");
                              })({ entry: n, channel: t, users: [x, U], countOthers: k })
                            : ((i = (0, M.JM)(n)),
                              (r = (0, M.Rf)(n)
                                  ? i
                                      ? el.t.MHO1AV
                                      : el.t.i7AOzw
                                  : i
                                    ? el.t["lLPKY+"]
                                    : el.t["bES+y2"]),
                              (s = D.Ay.getName(t?.guild_id, t?.id, _)),
                              (a = n.extra.game_name),
                              el.intl.formatToMarkdownString(r, { gameName: a, userName: s }).replaceAll("*", ""));
                    return no({
                        entry: n,
                        applicationImageSrc: c?.src,
                        avatarSrcs: R.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: o,
                        timestamp: (0, M.As)(n, A),
                        colors: [m, g],
                        channelId: e,
                    });
                },
                [c?.src, t, R, n, A, k, x, U, m, g, _],
            );
        if (null == _) return null;
        let z = (0, i.jsx)(ed.mG, {
                location: null == I ? ed.N5.POPOUT : ed.N5.STREAMING_POPOUT,
                children: t2.n.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
            }),
            q =
                null == T
                    ? (0, i.jsx)(tQ, {
                          channel: t,
                          headerIcons:
                              null == F
                                  ? null
                                  : (0, i.jsx)(nc.A, {
                                        onClick: B,
                                        Icon: F,
                                        "aria-label": el.intl.string(el.t.YR4cHH),
                                    }),
                          userDescription: (0, M.JM)(n) ? el.t.vPg1JT : el.t.rPqqts,
                          title: f,
                          subtitle: h,
                          badges: z,
                          entry: n,
                          disableGameProfileLinks: s,
                          onUserPopoutClosed: l,
                          trackRankingItemInteraction: d,
                          children:
                              H.length > 0
                                  ? (0, i.jsx)(nn.A, {
                                        distributorCTAConfigs: H,
                                        applicationId: V,
                                        analyticsLocations: W,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, i.jsx)(tJ, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: h,
                          badges: z,
                          userDescription: el.t["6oWFUN"],
                          entry: n,
                          stream: T,
                          onUserPopoutClosed: l,
                          trackRankingItemInteraction: d,
                          children:
                              H.length > 0
                                  ? (0, i.jsx)(nn.A, {
                                        distributorCTAConfigs: H,
                                        applicationId: V,
                                        analyticsLocations: W,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            X =
                !K && Y
                    ? (0, i.jsx)(
                          nt,
                          { application: j, analyticsLocation: v.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            Q = [
                null == X && ((0, S.A)(E, eH.jUm.JOIN) || (0, N.A)(E))
                    ? (0, i.jsx)(y.A, { activity: E, user: _, variant: "primary", size: "md", icon: t6._ }, "join")
                    : null,
                (0, t5.A)(E)
                    ? (0, i.jsx)(ni.A, { activity: E, size: "md", variant: "primary", icon: t4.b }, "watch")
                    : null,
                X,
            ].filter(L.Vq);
        return (0, i.jsxs)(tY, {
            children: [
                q,
                (0, i.jsx)(t$, {
                    children: (0, i.jsx)(tz, {
                        onReaction: a,
                        onVoiceChannelPreview: o,
                        user: _,
                        channel: t,
                        generateReactionImage: $,
                        reactionImageAltText: el.intl.formatToPlainString(el.t.tAwI1k, {
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
    nf = (0, n(353640).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function nE(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
        { data: a } = (0, O.YY)(t.extra.application_id),
        { analyticsLocations: o } = (0, t9.Ay)(v.A.CLOUD_PLAY_POPOVER),
        l = (0, C.Ay)({ application: a, analyticsLocations: o }),
        u = (0, eQ.JZ)(eh.M.CLOUD_PLAY_NEW_BADGE),
        d = null != l && !u && n,
        { activeEntryId: c, setActiveEntryId: _ } = nf(),
        h = c === t.id,
        f = d && h ? [eh.M.CLOUD_PLAY_POPOVER] : [],
        [E, p] = (0, tv.kn)(f),
        m = E === eh.M.CLOUD_PLAY_POPOVER;
    r.useEffect(() => {
        d && null === c && _(t.id);
    }, [c, d, t.id, _]),
        r.useEffect(
            () => () => {
                m && (p(tR.i.USER_DISMISS), _(null));
            },
            [m, p, _],
        );
    let [g, A] = r.useState(!1);
    return (
        r.useEffect(() => {
            m && !g && A(!0);
        }, [m, g]),
        (0, ne.A)(
            {
                name: t8.ImpressionNames.CLOUD_PLAY_CTA,
                type: t8.ImpressionTypes.VIEW,
                properties: { location_stack: o },
            },
            { disableTrack: !g },
            [g],
        ),
        (0, i.jsx)(ty.A, {
            title: el.intl.string(el.t["+WNDtV"]),
            body: el.intl.string(el.t["5QKxGI"]),
            targetElementRef: s,
            shouldShow: m,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/89fae27b507d71982d8ba38286e78d3ca4b35e6c3e5e7a78263552a656f6f5a6.svg",
            },
            actions: [
                {
                    icon: I.h,
                    text: el.intl.string(el.t["jaYS/h"]),
                    onClick: function () {
                        l?.();
                    },
                },
            ],
            onRequestClose: function () {
                p(tR.i.USER_DISMISS), _(null);
            },
        })
    );
}
let np = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: r } = e;
    return (0, i.jsx)(nE, { entry: t, targetElementRef: r, isFirstApplicationOccurrence: n });
};
var nm = n(363670),
    ng = n(205327),
    nA = n(52133),
    nI = n(835723),
    nT = n(172710),
    nS = n(655116),
    nN = n(763758),
    nC = n(286617),
    ny = n(533207),
    nv = n(495544),
    nR = n(121090),
    nO = n(974690);
async function nb(e) {
    let { user: t, channel: n, mediaImageSrc: i, artist: r, description: s, colors: a, badges: o } = e,
        l = (function (e) {
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
                    fillMode: B.VZ.Contain,
                }) === B.uS.Failure && n.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                (i = e),
                (r = s),
                i.setColor("white"),
                i.setFont({ size: 16, family: es, weight: 500, truncate: B.Kq.Wrap }),
                i.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
                ea({ canvas: e, badges: o, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: B.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${u}.png`.toLowerCase(),
            fileType: "png",
            channelId: n.id,
        },
    });
}
var nL = n(693879),
    nD = n(809854),
    nP = n(272984),
    nw = n(229812);
function nM(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, nD.e)(),
        { durationTimestamp: a, seekBarStyles: o } = r.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let i = Math.min(n, s),
                r = n - e,
                a = Math.floor((Math.max(i - e, 0) / r) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, M.W6)({ start: 0 }, r) };
        }, [t, s]);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: nw.lu,
              children: [
                  (0, i.jsx)(nL.z, { entry: n }),
                  (0, i.jsx)("div", { className: nw.Lt, children: (0, i.jsx)("div", { className: nw.Vp, style: o }) }),
                  (0, i.jsx)(ey.E, {
                      className: nw.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: a,
                  }),
              ],
          });
}
function nx(e) {
    let t,
        n,
        s,
        { channel: a, entry: o, closePopout: l, onReaction: d, onVoiceChannelPreview: c } = e,
        { largeImage: _ } = (0, P.nO)({ entry: o, trackingSource: "memberlist_listened_session_content_popout" }),
        { activity: h, currentEntry: f, artist: E, title: p, user: m } = (0, nm.u7)(o),
        { primaryColor: g, secondaryColor: I } = (0, Z.A)(_?.src),
        T = nd(eH.fg2.SPOTIFY),
        S = (0, u.bG)(
            [nS.A, nv.default],
            () => (h?.type === eH.$pd.LISTENING && null != m ? (0, nC.A)(nS.A, nv.default, m, h) : void 0),
            [h, m],
            nA.A,
        ),
        N = r.useCallback(() => {
            if (null == a || null == m) return;
            let e = h.timestamps?.start,
                t = (0, M.W6)(null != e ? { start: e } : o, Date.now());
            return nb({
                user: m,
                channel: a,
                mediaImageSrc: _?.src,
                artist: E,
                description: (function (e, t, n) {
                    let { artist: i, media: r } = e,
                        s = el.t["6iNxrl"],
                        a = D.Ay.getName(t.guild_id, t.id, n);
                    return el.intl.formatToMarkdownString(s, { artist: i, userName: a, media: r }).replaceAll("*", "");
                })({ artist: E, media: p }, a, m),
                colors: [g, I],
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
        }, [h, E, a, o, _?.src, g, I, p, m]);
    if (null == h || null == f) return null;
    let C = E,
        y = [];
    f.media.provider === ng.X.SPOTIFY &&
        ((n = () => {
            (0, nT.Mp)(h);
        }),
        (s = () => {
            (0, nT.QX)(h, m.id);
        }),
        (t = () => {
            null != T ? T() : (0, nT.Mp)(h);
        }),
        (C = (0, i.jsx)(nN.A, {
            artists: E,
            canOpen: null != h.sync_id,
            linkClassName: tj.zA,
            onOpenSpotifyArtist: (e) => {
                (0, nT.mN)(h, m.id, e);
            },
        })),
        S?.syncDisabled === !1 &&
            y.push(
                (0, i.jsx)(
                    A.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: el.intl.string(el.t.eU3inB),
                        icon: nI.J,
                        onClick: () => {
                            (0, ny.A)(S, nP.Qp.USER_ACTIVITY_SYNC), l();
                        },
                    },
                    "listen-along",
                ),
            ));
    let v = (0, i.jsx)(tQ, {
        onClickThumbnail: s,
        channel: a,
        entry: o,
        headerIcons:
            f.media.provider === ng.X.SPOTIFY
                ? (0, i.jsx)(nc.A, { onClick: t, "aria-label": el.intl.string(el.t.rRffNz), Icon: nR.A })
                : null,
        userDescription: (0, M.JM)(o) ? el.t.Tzx5D2 : el.t.CcVI1T,
        title: p,
        onClickTitle: n,
        subtitle: C,
        badges: null,
        children: h.timestamps?.start != null && (0, i.jsx)(nM, { activity: h }),
    });
    return (0, i.jsxs)(tY, {
        children: [
            v,
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tz, {
                    onReaction: d,
                    onVoiceChannelPreview: c,
                    user: m,
                    channel: a,
                    generateReactionImage: N,
                    reactionImageAltText: el.intl.formatToPlainString(el.t.h2yWWX, {
                        username: m.username,
                        activity: E,
                    }),
                    entry: o,
                    buttons: y,
                }),
            }),
        ],
    });
}
var nU = n(56121),
    nk = n(263577),
    nG = n(868065),
    nV = n(352760);
let nF = [ed.Y8],
    nB = [nU.j.WEEK],
    nj = r.memo(function (e) {
        let { entry: t, channel: n, selected: r } = e,
            { largeImage: s } = (0, P.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            a = (0, M.TQ)(t);
        return null != a && (0, L.S1)(a, nB)
            ? (0, i.jsxs)(nG.Zp, {
                  selected: r,
                  children: [
                      (0, i.jsxs)(nG.UA, {
                          children: [
                              (0, i.jsx)(nG.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, i.jsx)(nG.ZB, { children: t.extra.artist.name }),
                              (0, i.jsx)(ed.mG, {
                                  location: ed.N5.CARD,
                                  children: nF.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, i.jsx)(nk.V, { src: s?.src, size: 48, className: nV.xn }),
                  ],
              })
            : null;
    });
var nH = n(210528);
let nW = function (e) {
    var t, n;
    let { channel: s, entry: a, onReaction: o, onVoiceChannelPreview: l } = e,
        { parent_title: d, provider: c, image_url: _ } = a.extra.media,
        h = a.extra.artist.name,
        f = (0, u.bG)([E.default], () => E.default.getUser(a.author_id)),
        { primaryColor: p, secondaryColor: m } = (0, Z.A)(_),
        g = (0, M.TQ)(a),
        A = r.useCallback(() => {
            var e, t, n;
            let i, r, o, l;
            if (null == s || null == f || !(0, L.S1)(g, nB)) return;
            let u =
                ((e = a),
                (t = s),
                (n = f),
                (r = (function (e) {
                    if (e === nU.j.WEEK) return el.t.SjOZfm;
                })(g)),
                (o = D.Ay.getName(t.guild_id, t.id, n)),
                (l = e.extra.artist.name),
                el.intl.formatToMarkdownString(r, { artist: l, userName: o }).replaceAll("*", ""));
            return nb({
                user: f,
                channel: s,
                mediaImageSrc: _,
                artist: h,
                description: u,
                colors: [p, m],
                badges:
                    null == (i = (0, M.Pv)(a, nO.K.AGGREGATE_COUNT)?.count)
                        ? []
                        : [{ iconPath: ee, text: el.intl.formatToPlainString(el.t.HtifnG, { count: i }) }],
            });
        }, [_, h, s, a, p, g, m, f]),
        I = nd(eH.fg2.SPOTIFY);
    if (null == f || !(0, L.S1)(g, nB)) return null;
    function T() {
        let e = nP.M0.ALBUM,
            t = nH.A.isProtocolRegistered()
                ? nP.RQ.PLAYER_OPEN(e, a.extra.media.external_parent_id)
                : nP.RQ.WEB_OPEN(e, a.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, i.jsxs)(tY, {
        children: [
            (0, i.jsx)(tQ, {
                onClickTitle: T,
                onClickSubtitle: function () {
                    let e = nP.M0.ARTIST,
                        t = nH.A.isProtocolRegistered()
                            ? nP.RQ.PLAYER_OPEN(e, a.extra.artist.external_id)
                            : nP.RQ.WEB_OPEN(e, a.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: T,
                channel: s,
                entry: a,
                headerIcons:
                    c === ng.X.SPOTIFY
                        ? (0, i.jsx)(nc.A, { onClick: I, Icon: nR.A, "aria-label": el.intl.string(el.t["0ZB/XE"]) })
                        : null,
                userDescription: el.t.CcVI1T,
                title: d,
                subtitle: h,
                badges: (0, i.jsx)(ed.mG, {
                    location: ed.N5.POPOUT,
                    children: nF.map((e, t) => (0, i.jsx)(e, { entry: a }, t)),
                }),
            }),
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tz, {
                    onReaction: o,
                    onVoiceChannelPreview: l,
                    user: f,
                    channel: s,
                    generateReactionImage: A,
                    reactionImageAltText:
                        ((t = a),
                        (n = f),
                        el.intl.formatToPlainString(el.t.Osmpr9, {
                            username: n.username,
                            artist: t.extra.artist.name,
                        })),
                    entry: a,
                }),
            }),
        ],
    });
};
var nY = n(977001);
let nK = function (e) {
    var t, n;
    let { channel: s, entry: a, disableGameProfileLinks: o, onReaction: l, onVoiceChannelPreview: u } = e,
        { largeImage: d } = (0, P.nO)({ entry: a, trackingSource: "memberlist_top_game_content_popout" }),
        { user: c, details: _, appName: h } = (0, t0.u)(a),
        { primaryColor: f, secondaryColor: E } = (0, Z.A)(d?.src),
        p = (0, M.ty)(a),
        m = (0, M.TQ)(a),
        g = r.useCallback(
            (e) => {
                if (null != s && null != c && null != p && null != m && (0, nY._E)(m)) {
                    var t, n, i;
                    let r, o, l;
                    return no({
                        entry: a,
                        applicationImageSrc: d?.src,
                        avatarSrcs: [c.getAvatarURL(s?.guild_id, 128)],
                        description:
                            ((t = a),
                            (n = s),
                            (i = c),
                            (r = (function (e) {
                                if (e === nU.j.WEEK) return el.t["7TXfc6"];
                            })(m)),
                            (o = D.Ay.getName(n.guild_id, n.id, i)),
                            (l = t.extra.game_name),
                            el.intl.formatToMarkdownString(r, { gameName: l, userName: o }).replaceAll("*", "")),
                        timestamp: el.intl.formatToPlainString(el.t.YL7UE3, {
                            hours: Math.round(p / z.A.Seconds.HOUR),
                        }),
                        colors: [f, E],
                        channelId: e,
                    });
                }
            },
            [d?.src, s, p, a, f, m, E, c],
        );
    if (null == c || null == p || null == m || !(0, nY._E)(m)) return null;
    let A = null != a.extra.platform ? n_[a.extra.platform] : null;
    return (0, i.jsxs)(tY, {
        children: [
            (0, i.jsx)(tQ, {
                channel: s,
                headerIcons:
                    null == A ? null : (0, i.jsx)(nc.A, { Icon: A, "aria-label": el.intl.string(el.t.YR4cHH) }),
                entry: a,
                userDescription: el.t.rPqqts,
                title: h,
                subtitle: _,
                badges: (0, i.jsx)(ed.mG, {
                    location: ed.N5.POPOUT,
                    children: nY.ac.map((e, t) => (0, i.jsx)(e, { entry: a }, t)),
                }),
                disableGameProfileLinks: o,
            }),
            (0, i.jsx)(t$, {
                children: (0, i.jsx)(tz, {
                    onReaction: l,
                    onVoiceChannelPreview: u,
                    user: c,
                    channel: s,
                    generateReactionImage: g,
                    reactionImageAltText:
                        ((t = a),
                        (n = c),
                        el.intl.formatToPlainString(el.t.tAwI1k, {
                            username: n.username,
                            activity: t.extra.game_name,
                        })),
                    entry: a,
                }),
            }),
        ],
    });
};
var n$ = n(514243),
    nz = n(347306),
    nq = n(123917),
    nZ = n(998218);
async function nX(e) {
    let {
            mediaImageSrc: t,
            entry: n,
            avatarSrc: i,
            description: r,
            timestamp: s,
            episodeDescription: a,
            colors: o,
            channelId: l,
        } = e,
        u = n.extra.media_title,
        d = { AvatarImage: i, ...(null != t && { MediaImage: t }), ...!1 };
    return await $({
        assetsToLoad: d,
        drawImage: function (e) {
            let t,
                n = o.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let i = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: B.VZ.Contain });
            i === B.uS.Failure && (i = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                i === B.uS.Failure && e.drawPath(F, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: es, weight: 500, truncate: B.Kq.Wrap }),
                e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0),
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
                        null != a &&
                            t.push({
                                iconPath:
                                    "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
                                text: a,
                            }),
                        t),
                    startPosition: 120,
                    maxWidth: 260,
                });
        },
        exportConfigs: {
            format: B.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${u}.png`.toLowerCase(),
            fileType: "png",
            channelId: l,
        },
    });
}
let nQ = function (e) {
        var t, n;
        let { channel: s, entry: a, onReaction: o, onVoiceChannelPreview: l } = e,
            d = (0, u.bG)([E.default], () => E.default.getUser(a.author_id)),
            { largeImage: c } = (0, P.nO)({ entry: a, trackingSource: "memberlist_watch_content_popout" }),
            { primaryColor: _, secondaryColor: h } = (0, Z.A)(c?.src),
            f = (0, u.bG)([b.default], () => b.default.locale),
            p = nd(eH.fg2.CRUNCHYROLL),
            m = (0, M.kR)(a.extra.media_assets_large_text),
            g = r.useCallback(
                (e) => {
                    if (null != d && c?.src != null) {
                        var t, n, i;
                        let r, o, l;
                        return nX({
                            entry: a,
                            mediaImageSrc: c?.src,
                            avatarSrc: d.getAvatarURL(s?.guild_id, 128),
                            description:
                                ((t = a),
                                (n = s),
                                (i = d),
                                (r = el.t.LHF6D9),
                                (o = D.Ay.getName(n?.guild_id, n?.id, i)),
                                (l = t.extra.media_title),
                                el.intl
                                    .formatToMarkdownString(r, {
                                        mediaTitle: l,
                                        userName: o,
                                        episodeDescription: t.extra.media_subtitle,
                                    })
                                    .replaceAll("*", "")),
                            timestamp: (0, M.As)(a, f),
                            episodeDescription: m,
                            colors: [_, h],
                            channelId: e,
                        });
                    }
                },
                [s, a, m, f, c?.src, _, h, d],
            );
        function A() {
            if (null == a.extra.url) return;
            let e = nZ.A.safeParseWithQuery(a.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, nq.h)({ href: nZ.A.format(e), trusted: !1 });
        }
        return null == d
            ? null
            : (0, i.jsxs)(tY, {
                  children: [
                      (0, i.jsx)(tQ, {
                          channel: s,
                          entry: a,
                          userDescription: (0, M.JM)(a) ? el.t["LH+Z3y"] : el.t.YuKgml,
                          title: a.extra.media_title,
                          subtitle: a.extra.media_subtitle,
                          headerIcons: (0, i.jsx)(nc.A, {
                              onClick: p,
                              Icon: nz.k,
                              "aria-label": el.intl.string(el.t.jdJYXw),
                          }),
                          badges: (0, i.jsx)(ed.mG, {
                              location: ed.N5.POPOUT,
                              children: n$.R.map((e, t) => (0, i.jsx)(e, { entry: a }, t)),
                          }),
                          onClickTitle: A,
                          onClickThumbnail: A,
                      }),
                      (0, i.jsx)(t$, {
                          children: (0, i.jsx)(tz, {
                              onReaction: o,
                              onVoiceChannelPreview: l,
                              user: d,
                              channel: s,
                              generateReactionImage: g,
                              reactionImageAltText:
                                  ((t = a),
                                  (n = d),
                                  el.intl.formatToPlainString(el.t.kCbfbN, {
                                      username: n.username,
                                      activity: t.extra.media_title,
                                  })),
                              entry: a,
                          }),
                      }),
                  ],
              });
    },
    nJ = 72;
function n0(e) {
    return e?.type === f.S9.CONTENT_INVENTORY ? nJ : 0;
}
function n1(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case l.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(t2.A, { ...n, entry: t });
        case l.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(n$.A, { ...n, entry: t });
        case l.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nY.Ay, { ...n, entry: t });
        case l.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nj, { ...n, entry: t });
        case l.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nm.Ay, { ...n, entry: t });
        case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(m.A, { ...n, entry: t });
        default:
            return null;
    }
}
function n2(e) {
    let { entry: t, targetElementRef: n, ...r } = e;
    return t.content_type === l.ContentInventoryEntryType.PLAYED_GAME
        ? (0, i.jsx)(np, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: r.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function n3(e) {
    let { closePopout: t, ...n } = e;
    return (0, i.jsx)(n6, {
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
function n6(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case l.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(nh, { ...n, entry: t });
        case l.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nQ, { ...n, entry: t });
        case l.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nK, { ...n, entry: t });
        case l.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nW, { ...n, entry: t });
        case l.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nx, { ...n, entry: t });
        case l.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(t1, { ...n, entry: t });
        default:
            return null;
    }
}
let n4 = r.createContext(void 0),
    n5 = r.memo(function (e) {
        let { index: t, ref: s, ...l } = e,
            f = r.useRef(null),
            [m, g] = r.useState("default"),
            [A, I] = r.useState(!1),
            T = (0, o.rm)(`${t}`),
            S = E.default.getCurrentUser()?.isStaff(),
            { isRich: N, appName: C } = (0, t0.u)(l.entry),
            y = r.useMemo(
                () => ({
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: l.requestId,
                    richPresenceName: N ? C : void 0,
                }),
                [C, l.channel.guild_id, l.channel.id, l.entry, l.requestId, N],
            ),
            v = r.useRef(!1),
            [R, O] = r.useState(!1),
            [b, L] = r.useState(!1),
            D = (0, u.bG)([h.Ay], () => h.Ay.keyboardModeEnabled);
        r.useEffect(() => {
            R && D && L(!0);
        }, [R, D]),
            r.useLayoutEffect(() => {
                null != f.current && I(!0);
            }, []);
        let P = r.useCallback(
                (e) => {
                    S &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("86456"), n.e("89346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, i.jsx)(e, { entry: l.entry, requestId: l.requestId });
                        });
                },
                [l, S],
            ),
            w = r.useCallback(() => {
                g(String(Date.now()));
            }, []),
            M = r.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, p.I)(e, { ...y, ...t });
                },
                [y],
            ),
            x = r.useMemo(
                () =>
                    a().throttle(
                        (e) => {
                            (0, p.I)(tV.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            );
        function U() {
            (v.current = !1),
                setTimeout(() => {
                    v.current || (O(!1), L(D));
                }, 100);
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                A && (0, i.jsx)(n2, { ...l, targetElementRef: f }),
                (0, i.jsx)("div", {
                    ref: s,
                    onMouseEnter: () => {
                        (v.current = !0),
                            setTimeout(() => {
                                v.current && O(!0), x(y);
                            }, 100);
                    },
                    onMouseLeave: U,
                    children: (0, i.jsx)(d.Y, {
                        targetElementRef: f,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(n4.Provider, {
                                value: U,
                                children: (0, i.jsx)(n3, {
                                    closePopout: t,
                                    updatePopoutPosition: w,
                                    trackRankingItemInteraction: M,
                                    ...l,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: R,
                        positionKey: m,
                        onRequestOpen: () => x(y),
                        onRequestClose: () => {
                            b && U();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, i.jsx)(c.D, {
                                ...e,
                                ...T,
                                role: "button",
                                innerRef: f,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    R || O(!0);
                                },
                                onContextMenu: P,
                                children: (0, i.jsx)(n1, {
                                    ...l,
                                    selected: n,
                                    hovered: v.current,
                                    trackRankingItemInteraction: M,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
