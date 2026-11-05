l.d(t, { JQ: () => h, fn: () => v, As: () => x });
var n = l(477900),
    a = l(582128),
    i = l(858899);
let r = (0, l(945810).mj)({
    kind: "user",
    name: "2026-09-clips-editor-image-track",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var s = l(253116),
    o = l(635793),
    c = l(923904),
    u = l(696016),
    d = l(683825),
    m = l(792996);
let f = a.createContext(null);
function h(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: i,
            tracks: s,
            addTextTrack: u,
            addImageTrack: d,
            removeTrack: m,
            updateTrackRange: h,
            updateTextTrackData: v,
            updateImageTrackData: x,
        } = (0, c.T)(),
        { enabled: g } = r.useConfig({ location: "ClipsEditorContextProvider" }),
        [b, j] = a.useState(null),
        [y, C] = a.useState(null),
        N = a.useCallback(
            (e) => {
                (i(o.Y.NONE), j(e), C(null));
            },
            [i],
        ),
        k = a.useCallback(() => {
            let e = u();
            (j(e), C(e));
        }, [u]),
        E = a.useCallback(async () => {
            let e = await p();
            null != e && j(d(e));
        }, [d]),
        w = a.useCallback(
            async (e) => {
                let t = await p();
                null != t && x(e, (e) => ({ ...e, ...t }));
            },
            [x],
        ),
        A = a.useCallback(
            (e) => {
                (m(e), j((t) => (t === e ? null : t)));
            },
            [m],
        ),
        I = a.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: !0, isImageTrackEnabled: g }), [l, !0, g]),
        L = a.useMemo(
            () => ({
                tracks: s,
                selectedTrackId: b,
                textTrackIdToFocus: y,
                setSelectedTrackId: N,
                addTextTrack: k,
                pickAndAddImageTrack: E,
                pickAndReplaceImage: w,
                removeTrack: A,
                updateTrackRange: h,
                updateTextTrackData: v,
                updateImageTrackData: x,
                editorFeatures: I,
            }),
            [s, b, y, N, k, E, w, A, h, v, x, I],
        );
    return (0, n.jsx)(f.Provider, { value: L, children: t });
}
async function p() {
    try {
        var e;
        let t = await (0, s.t_)();
        if (null == t) return null;
        let l = await (0, s.pc)(t.bytes, t.fileName);
        if (!(await (l.src, (e = l.mimeType), Promise.resolve({ allowed: !0, checked: !1 }))).allowed)
            return ((0, i.P0)({ text: m.intl.string(d.default.uF5VXk), variant: "critical" }), null);
        return l;
    } catch (t) {
        u.GU.warn("Failed to add clip image track", t);
        let e = t instanceof s.mX ? t.userMessage : m.intl.string(d.default["+20A3o"]);
        return ((0, i.P0)({ text: e, variant: "critical" }), null);
    }
}
function v() {
    let e = a.useContext(f);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function x() {
    return v().editorFeatures;
}
