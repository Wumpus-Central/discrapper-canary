l.d(t, { fn: () => j, As: () => b, JQ: () => C });
var a = l(477900),
    n = l(582128),
    i = l(739187),
    s = l(857250),
    r = l(97483);
let o = (0, l(945810).mj)({
    kind: "user",
    name: "2026-09-clips-editor-image-track",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
l(508300);
var c = l(77729),
    u = l(696016),
    d = l(268378),
    m = l(375708);
class h extends Error {
    userMessage;
    constructor(e) {
        (super(e), (this.userMessage = e), (this.name = "ClipImageError"));
    }
}
async function f(e, t) {
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
    if (null == a || !u._9.includes(a)) throw new h(m.intl.string(d.default.j3AKJQ));
    try {
        l = await createImageBitmap(new Blob([e], { type: a }));
    } catch {
        throw new h(m.intl.string(d.default.piRNeN));
    }
    try {
        let n = Math.max(l.width, l.height),
            i = n > u.L4 ? u.L4 / n : 1;
        if (!(i < 1 || e.length > u.rD))
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
            { src: o, mimeType: c } = (function (e, t, l) {
                let a = document.createElement("canvas");
                ((a.width = t), (a.height = l));
                let n = a.getContext("2d");
                if (null == n) throw new h(m.intl.string(d.default.piRNeN));
                n.drawImage(e, 0, 0, e.width, e.height, 0, 0, t, l);
                let i = a.toDataURL(u.w6, u.ku),
                    s = i.startsWith(`data:${u.w6}`) ? u.w6 : "image/png";
                return { src: i, mimeType: s };
            })(l, s, r);
        return { src: o, mimeType: c, fileName: t, naturalWidth: s, naturalHeight: r };
    } finally {
        l.close();
    }
}
async function p() {
    let e;
    try {
        e = await c.A.fileManager.openFiles(
            { properties: ["openFile"], filters: [{ name: m.intl.string(d.default.qM8PRd), extensions: u.G$ }] },
            u.sL,
        );
    } catch (e) {
        if (null != e && "object" == typeof e && "ETOOLARGE" === e.code) throw new h(m.intl.string(d.default.ar2OUZ));
        throw e;
    }
    let t = e[0];
    return null == t ? null : { bytes: t.data, fileName: t.filename };
}
var x = l(635793),
    v = l(362081);
let g = n.createContext(null);
function C(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: i,
            tracks: s,
            addTextTrack: r,
            addImageTrack: c,
            removeTrack: u,
            updateTrackRange: d,
            updateTextTrackData: m,
            updateImageTrackData: h,
        } = (0, v.T)(),
        { enabled: f } = o.useConfig({ location: "ClipsEditorContextProvider" }),
        [p, C] = n.useState(null),
        j = n.useCallback(
            (e) => {
                (i(x.Y.NONE), C(e));
            },
            [i],
        ),
        b = n.useCallback(() => {
            C(r());
        }, [r]),
        w = n.useCallback(async () => {
            let e = await y();
            null != e && C(c(e));
        }, [c]),
        E = n.useCallback(
            async (e) => {
                let t = await y();
                null != t && h(e, (e) => ({ ...e, ...t }));
            },
            [h],
        ),
        N = n.useCallback(
            (e) => {
                (u(e), C((t) => (t === e ? null : t)));
            },
            [u],
        ),
        k = n.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: !0, isImageTrackEnabled: f }), [l, !0, f]),
        A = n.useMemo(
            () => ({
                tracks: s,
                selectedTrackId: p,
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
            [s, p, j, b, w, E, N, d, m, h, k],
        );
    return (0, a.jsx)(g.Provider, { value: A, children: t });
}
async function y() {
    try {
        var e;
        let t = await p();
        if (null == t) return null;
        let l = await f(t.bytes, t.fileName);
        if (!(await (l.src, (e = l.mimeType), Promise.resolve({ allowed: !0, checked: !1 }))).allowed)
            return ((0, i.P)((0, s.o)(m.intl.string(d.default.uF5VXk), r.Ck.FAILURE)), null);
        return l;
    } catch (t) {
        u.nx.warn("Failed to add clip image track", t);
        let e = t instanceof h ? t.userMessage : m.intl.string(d.default["+20A3o"]);
        return ((0, i.P)((0, s.o)(e, r.Ck.FAILURE)), null);
    }
}
function j() {
    let e = n.useContext(g);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function b() {
    return j().editorFeatures;
}
