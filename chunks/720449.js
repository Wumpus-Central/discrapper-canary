n.d(t, { Z: () => c }), n(781311);
var r = n(913527),
    i = n.n(r),
    l = n(695346),
    a = n(626135),
    o = n(337953),
    u = n(875425),
    s = n(981631);
function c(e) {
    let {
            text: t,
            emojiInfo: n,
            clearAfter: r,
            analyticsContext: c,
            createdAtMs: d,
            prompt: m,
            analyticsLocations: f,
        } = e,
        p = t.trim();
    if (!(p.length > 0) && null == n) return l.Ok.updateSetting(void 0);
    {
        let e = l.Ok.updateSetting({
            text: p.length > 0 ? p : "",
            expiresAtMs:
                null != r && r !== u.FO.DONT_CLEAR
                    ? String(
                          i()()
                              .add((0, o.Z)(r), "ms")
                              .toDate()
                              .getTime(),
                      )
                    : "0",
            emojiId: null != n && null != n.id ? n.id : "0",
            emojiName: null != n ? n.name : "",
            createdAtMs: String(null != d ? d : i()().toDate().getTime()),
        });
        return (
            a.default.track(s.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != c ? c.location : null,
                emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
                text_len: p.length,
                clear_after: null != r ? "".concat(r) : null,
                prompt_type: null == m ? void 0 : m.value,
                location_stack: f,
            }),
            e
        );
    }
}
