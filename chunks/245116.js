l.d(t, { fn: () => C, As: () => y, JQ: () => v });
var a = l(477900),
    n = l(582128),
    i = l(858899);
let s = (0, l(945810).mj)({
    kind: "user",
    name: "2026-09-clips-editor-image-track",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
l(508300);
var r = l(77729),
    o = l(696016),
    c = l(268378),
    u = l(660183);
class d extends Error {
    userMessage;
    constructor(e) {
        (super(e), (this.userMessage = e), (this.name = "ClipImageError"));
    }
}
async function m(e, t) {
    let l,
        a =
            e.length >= 8 && 137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3]
                ? "image/png"
                : e.length >= 3 && 255 === e[0] && 216 === e[1] && 255 === e[2]
                  ? "image/jpeg"
                  : e.length >= 12 &&
                      "RIFF" === String.fromCharCode(...e.subarray(0, 4)) &&
                      "WEBP" === String.fromCharCode(...e.subarray(8, 12))
                    ? "image/webp"
                    : null;
    if (null == a || !o._9.includes(a)) throw new d(u.intl.string(c.default.j3AKJQ));
    try {
        l = await createImageBitmap(new Blob([e], { type: a }));
    } catch {
        throw new d(u.intl.string(c.default.piRNeN));
    }
    try {
        let n = Math.max(l.width, l.height),
            i = n > o.L4 ? o.L4 / n : 1;
        if (!(i < 1 || e.length > o.rD))
            return {
                src: `data:${a};base64,${(function (e) {
                    let t = "";
                    for (let l = 0; l < e.length; l += 32768) t += String.fromCharCode(...e.subarray(l, l + 32768));
                    return btoa(t);
                })(e)}`,
                mimeType: a,
                fileName: t,
                naturalWidth: l.width,
                naturalHeight: l.height,
            };
        let s = Math.max(1, Math.round(l.width * i)),
            r = Math.max(1, Math.round(l.height * i)),
            { src: m, mimeType: h } = (function (e, t, l) {
                let a = document.createElement("canvas");
                ((a.width = t), (a.height = l));
                let n = a.getContext("2d");
                if (null == n) throw new d(u.intl.string(c.default.piRNeN));
                n.drawImage(e, 0, 0, e.width, e.height, 0, 0, t, l);
                let i = a.toDataURL(o.w6, o.ku),
                    s = i.startsWith(`data:${o.w6}`) ? o.w6 : "image/png";
                return { src: i, mimeType: s };
            })(l, s, r);
        return { src: m, mimeType: h, fileName: t, naturalWidth: s, naturalHeight: r };
    } finally {
        l.close();
    }
}
async function h() {
    let e;
    try {
        e = await r.A.fileManager.openFiles(
            { properties: ["openFile"], filters: [{ name: u.intl.string(c.default.qM8PRd), extensions: o.G$ }] },
            o.sL,
        );
    } catch (e) {
        if (null != e && "object" == typeof e && "ETOOLARGE" === e.code) throw new d(u.intl.string(c.default.ar2OUZ));
        throw e;
    }
    let t = e[0];
    return null == t ? null : { bytes: t.data, fileName: t.filename };
}
var f = l(635793),
    p = l(362081);
let x = n.createContext(null);
function v(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: i,
            tracks: r,
            addTextTrack: o,
            addImageTrack: c,
            removeTrack: u,
            updateTrackRange: d,
            updateTextTrackData: m,
            updateImageTrackData: h,
        } = (0, p.T)(),
        { enabled: v } = s.useConfig({ location: "ClipsEditorContextProvider" }),
        [C, y] = n.useState(null),
        j = n.useCallback(
            (e) => {
                (i(f.Y.NONE), y(e));
            },
            [i],
        ),
        b = n.useCallback(() => {
            y(o());
        }, [o]),
        w = n.useCallback(async () => {
            let e = await g();
            null != e && y(c(e));
        }, [c]),
        E = n.useCallback(
            async (e) => {
                let t = await g();
                null != t && h(e, (e) => ({ ...e, ...t }));
            },
            [h],
        ),
        N = n.useCallback(
            (e) => {
                (u(e), y((t) => (t === e ? null : t)));
            },
            [u],
        ),
        k = n.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: !0, isImageTrackEnabled: v }), [l, !0, v]),
        A = n.useMemo(
            () => ({
                tracks: r,
                selectedTrackId: C,
                setSelectedTrackId: j,
                addTextTrack: b,
                pickAndAddImageTrack: w,
                pickAndReplaceImage: E,
                removeTrack: N,
                updateTrackRange: d,
                updateTextTrackData: m,
                updateImageTrackData: h,
                editorFeatures: k,
            }),
            [r, C, j, b, w, E, N, d, m, h, k],
        );
    return (0, a.jsx)(x.Provider, { value: A, children: t });
}
async function g() {
    try {
        var e;
        let t = await h();
        if (null == t) return null;
        let l = await m(t.bytes, t.fileName);
        if (!(await (l.src, (e = l.mimeType), Promise.resolve({ allowed: !0, checked: !1 }))).allowed)
            return ((0, i.P0)({ text: u.intl.string(c.default.uF5VXk), variant: "critical" }), null);
        return l;
    } catch (t) {
        o.nx.warn("Failed to add clip image track", t);
        let e = t instanceof d ? t.userMessage : u.intl.string(c.default["+20A3o"]);
        return ((0, i.P0)({ text: e, variant: "critical" }), null);
    }
}
function C() {
    let e = n.useContext(x);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function y() {
    return C().editorFeatures;
}
