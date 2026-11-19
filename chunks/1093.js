l.d(t, { JQ: () => f, fn: () => p, As: () => v });
var n = l(477900),
    a = l(582128),
    i = l(858899),
    r = l(253116),
    s = l(635793),
    o = l(923904),
    c = l(696016),
    u = l(683825),
    d = l(792996);
let m = a.createContext(null);
function f(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: i,
            tracks: r,
            addTextTrack: c,
            addImageTrack: u,
            removeTrack: d,
            updateTrackRange: f,
            updateTextTrackData: p,
            updateImageTrackData: v,
        } = (0, o.T)(),
        [x, g] = a.useState(null),
        [b, j] = a.useState(null),
        y = a.useCallback(
            (e) => {
                (i(s.Y.NONE), g(e), j(null));
            },
            [i],
        ),
        C = a.useCallback(() => {
            let e = c();
            (g(e), j(e));
        }, [c]),
        N = a.useCallback(async () => {
            let e = await h();
            null != e && g(u(e));
        }, [u]),
        k = a.useCallback(
            async (e) => {
                let t = await h();
                null != t && v(e, (e) => ({ ...e, ...t }));
            },
            [v],
        ),
        E = a.useCallback(
            (e) => {
                (d(e), g((t) => (t === e ? null : t)));
            },
            [d],
        ),
        w = a.useMemo(() => ({ isCropEnabled: l }), [l]),
        A = a.useMemo(
            () => ({
                tracks: r,
                selectedTrackId: x,
                textTrackIdToFocus: b,
                setSelectedTrackId: y,
                addTextTrack: C,
                pickAndAddImageTrack: N,
                pickAndReplaceImage: k,
                removeTrack: E,
                updateTrackRange: f,
                updateTextTrackData: p,
                updateImageTrackData: v,
                editorFeatures: w,
            }),
            [r, x, b, y, C, N, k, E, f, p, v, w],
        );
    return (0, n.jsx)(m.Provider, { value: A, children: t });
}
async function h() {
    try {
        var e;
        let t = await (0, r.t_)();
        if (null == t) return null;
        let l = await (0, r.pc)(t.bytes, t.fileName);
        if (!(await (l.src, (e = l.mimeType), Promise.resolve({ allowed: !0, checked: !1 }))).allowed)
            return ((0, i.P0)({ text: d.intl.string(u.default.uF5VXk), variant: "critical" }), null);
        return l;
    } catch (t) {
        c.GU.warn("Failed to add clip image track", t);
        let e = t instanceof r.mX ? t.userMessage : d.intl.string(u.default["+20A3o"]);
        return ((0, i.P0)({ text: e, variant: "critical" }), null);
    }
}
function p() {
    let e = a.useContext(m);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function v() {
    return p().editorFeatures;
}
