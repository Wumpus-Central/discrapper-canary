l.d(t, { JQ: () => h, fn: () => v, As: () => x });
var a = l(477900),
    n = l(582128),
    i = l(858899);
let s = (0, l(945810).mj)({
    kind: "user",
    name: "2026-09-clips-editor-image-track",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var r = l(253116),
    o = l(635793),
    c = l(923904),
    u = l(696016),
    d = l(683825),
    m = l(792996);
let f = n.createContext(null);
function h(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: i,
            tracks: r,
            addTextTrack: u,
            addImageTrack: d,
            removeTrack: m,
            updateTrackRange: h,
            updateTextTrackData: v,
            updateImageTrackData: x,
        } = (0, c.T)(),
        { enabled: g } = s.useConfig({ location: "ClipsEditorContextProvider" }),
        [b, j] = n.useState(null),
        [y, C] = n.useState(null),
        N = n.useCallback(
            (e) => {
                (i(o.Y.NONE), j(e), C(null));
            },
            [i],
        ),
        E = n.useCallback(() => {
            let e = u();
            (j(e), C(e));
        }, [u]),
        k = n.useCallback(async () => {
            let e = await p();
            null != e && j(d(e));
        }, [d]),
        w = n.useCallback(
            async (e) => {
                let t = await p();
                null != t && x(e, (e) => ({ ...e, ...t }));
            },
            [x],
        ),
        A = n.useCallback(
            (e) => {
                (m(e), j((t) => (t === e ? null : t)));
            },
            [m],
        ),
        R = n.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: !0, isImageTrackEnabled: g }), [l, !0, g]),
        L = n.useMemo(
            () => ({
                tracks: r,
                selectedTrackId: b,
                textTrackIdToFocus: y,
                setSelectedTrackId: N,
                addTextTrack: E,
                pickAndAddImageTrack: k,
                pickAndReplaceImage: w,
                removeTrack: A,
                updateTrackRange: h,
                updateTextTrackData: v,
                updateImageTrackData: x,
                editorFeatures: R,
            }),
            [r, b, y, N, E, k, w, A, h, v, x, R],
        );
    return (0, a.jsx)(f.Provider, { value: L, children: t });
}
async function p() {
    try {
        var e;
        let t = await (0, r.t_)();
        if (null == t) return null;
        let l = await (0, r.pc)(t.bytes, t.fileName);
        if (!(await (l.src, (e = l.mimeType), Promise.resolve({ allowed: !0, checked: !1 }))).allowed)
            return ((0, i.P0)({ text: m.intl.string(d.default.uF5VXk), variant: "critical" }), null);
        return l;
    } catch (t) {
        u.GU.warn("Failed to add clip image track", t);
        let e = t instanceof r.mX ? t.userMessage : m.intl.string(d.default["+20A3o"]);
        return ((0, i.P0)({ text: e, variant: "critical" }), null);
    }
}
function v() {
    let e = n.useContext(f);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function x() {
    return v().editorFeatures;
}
