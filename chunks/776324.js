l.d(t, { JQ: () => p, fn: () => x, As: () => g });
var a = l(477900),
    n = l(582128),
    i = l(858899);
let r = (0, l(945810).mj)({
    kind: "user",
    name: "2026-09-clips-editor-image-track",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
l(508300);
var s = l(77729),
    o = l(696016),
    c = l(683825),
    u = l(792996);
class d extends Error {
    userMessage;
    constructor(e) {
        (super(e), (this.userMessage = e), (this.name = "ClipImageError"));
    }
}
var m = l(635793),
    f = l(923904);
let h = n.createContext(null);
function p(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: i,
            tracks: s,
            addTextTrack: o,
            addImageTrack: c,
            removeTrack: u,
            updateTrackRange: d,
            updateTextTrackData: p,
            updateImageTrackData: x,
        } = (0, f.T)(),
        { enabled: g } = r.useConfig({ location: "ClipsEditorContextProvider" }),
        [b, y] = n.useState(null),
        [j, C] = n.useState(null),
        N = n.useCallback(
            (e) => {
                (i(m.Y.NONE), y(e), C(null));
            },
            [i],
        ),
        w = n.useCallback(() => {
            let e = o();
            (y(e), C(e));
        }, [o]),
        E = n.useCallback(async () => {
            let e = await v();
            null != e && y(c(e));
        }, [c]),
        k = n.useCallback(
            async (e) => {
                let t = await v();
                null != t && x(e, (e) => ({ ...e, ...t }));
            },
            [x],
        ),
        A = n.useCallback(
            (e) => {
                (u(e), y((t) => (t === e ? null : t)));
            },
            [u],
        ),
        R = n.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: !0, isImageTrackEnabled: g }), [l, !0, g]),
        L = n.useMemo(
            () => ({
                tracks: s,
                selectedTrackId: b,
                textTrackIdToFocus: j,
                setSelectedTrackId: N,
                addTextTrack: w,
                pickAndAddImageTrack: E,
                pickAndReplaceImage: k,
                removeTrack: A,
                updateTrackRange: d,
                updateTextTrackData: p,
                updateImageTrackData: x,
                editorFeatures: R,
            }),
            [s, b, j, N, w, E, k, A, d, p, x, R],
        );
    return (0, a.jsx)(h.Provider, { value: L, children: t });
}
async function v() {
    try {
        var e;
        let t = await (async function () {
            let e;
            try {
                e = await s.A.fileManager.openFiles(
                    {
                        properties: ["openFile"],
                        filters: [{ name: u.intl.string(c.default.qM8PRd), extensions: o.G$ }],
                    },
                    o.sL,
                );
            } catch (e) {
                if (null != e && "object" == typeof e && "ETOOLARGE" === e.code)
                    throw new d(u.intl.string(c.default.ar2OUZ));
                throw e;
            }
            let t = e[0];
            return null == t ? null : { bytes: t.data, fileName: t.filename };
        })();
        if (null == t) return null;
        let l = await (async function (e, t) {
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
                    i = n > 2048 ? 2048 / n : 1;
                if (!(i < 1 || e.length > o.rD))
                    return {
                        src: `data:${a};base64,${(function (e) {
                            let t = "";
                            for (let l = 0; l < e.length; l += 32768)
                                t += String.fromCharCode(...e.subarray(l, l + 32768));
                            return btoa(t);
                        })(e)}`,
                        mimeType: a,
                        fileName: t,
                        naturalWidth: l.width,
                        naturalHeight: l.height,
                    };
                let r = Math.max(1, Math.round(l.width * i)),
                    s = Math.max(1, Math.round(l.height * i)),
                    { src: m, mimeType: f } = (function (e, t, l) {
                        let a = document.createElement("canvas");
                        ((a.width = t), (a.height = l));
                        let n = a.getContext("2d");
                        if (null == n) throw new d(u.intl.string(c.default.piRNeN));
                        n.drawImage(e, 0, 0, e.width, e.height, 0, 0, t, l);
                        let i = a.toDataURL(o.w6, 0.92),
                            r = i.startsWith(`data:${o.w6}`) ? o.w6 : "image/png";
                        return { src: i, mimeType: r };
                    })(l, r, s);
                return { src: m, mimeType: f, fileName: t, naturalWidth: r, naturalHeight: s };
            } finally {
                l.close();
            }
        })(t.bytes, t.fileName);
        if (!(await (l.src, (e = l.mimeType), Promise.resolve({ allowed: !0, checked: !1 }))).allowed)
            return ((0, i.P0)({ text: u.intl.string(c.default.uF5VXk), variant: "critical" }), null);
        return l;
    } catch (t) {
        o.GU.warn("Failed to add clip image track", t);
        let e = t instanceof d ? t.userMessage : u.intl.string(c.default["+20A3o"]);
        return ((0, i.P0)({ text: e, variant: "critical" }), null);
    }
}
function x() {
    let e = n.useContext(h);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function g() {
    return x().editorFeatures;
}
