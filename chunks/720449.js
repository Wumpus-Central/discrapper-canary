n.d(e, { Z: () => c }), n(781311);
var r = n(913527),
    a = n.n(r),
    i = n(695346),
    l = n(626135),
    o = n(337953),
    s = n(875425),
    u = n(981631);
function c(t) {
    let {
            text: e,
            emojiInfo: n,
            clearAfter: r,
            analyticsContext: c,
            createdAtMs: d,
            prompt: m,
            analyticsLocations: f,
        } = t,
        p = e.trim();
    if (!(p.length > 0) && null == n) return i.Ok.updateSetting(void 0);
    {
        let t = i.Ok.updateSetting({
            text: p.length > 0 ? p : "",
            expiresAtMs:
                null != r && r !== s.FO.DONT_CLEAR
                    ? String(
                          a()()
                              .add((0, o.Z)(r), "ms")
                              .toDate()
                              .getTime(),
                      )
                    : "0",
            emojiId: null != n && null != n.id ? n.id : "0",
            emojiName: null != n ? n.name : "",
            createdAtMs: String(null != d ? d : a()().toDate().getTime()),
        });
        return (
            l.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != c ? c.location : null,
                emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
                text_len: p.length,
                clear_after: null != r ? "".concat(r) : null,
                prompt_type: null == m ? void 0 : m.value,
                location_stack: f,
            }),
            t
        );
    }
}
