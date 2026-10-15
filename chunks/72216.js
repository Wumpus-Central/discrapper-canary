n.d(t, { O: () => a });
var i = n(825476),
    r = n(61567);
function a(e, t) {
    var n = r.default["k41/aX"];
    let a = { trackTitle: e.trackTitle ?? "", artistName: e.artistName ?? "", username: t ?? "" };
    switch (e.event) {
        case i.l.TOP_SONG_CHANGED:
            return { message: null != e.trackTitle ? r.default.vqPR3w : r.default.Cf11AE, values: a };
        case i.l.TOP_ARTIST_CHANGED:
            return { message: null != e.artistName ? r.default.ZbrKrk : r.default.ygm9YB, values: a };
        case i.l.TOP_LISTENER_CHANGED:
            return { message: null != t && t.length > 0 ? n : r.default.OlxQF3, values: a };
        default:
            return null;
    }
}
