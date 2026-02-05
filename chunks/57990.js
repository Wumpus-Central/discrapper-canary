n.d(e, { A: () => d });
var i = n(989349),
    l = n.n(i),
    a = n(253932),
    r = n(954571),
    s = n(815484),
    o = n(403918),
    u = n(652215);
function d(t) {
    let {
            text: e,
            emojiInfo: n,
            clearAfter: i,
            analyticsContext: d,
            createdAtMs: c,
            prompt: m,
            analyticsLocations: f,
        } = t,
        g = e.trim();
    if (!(g.length > 0) && null == n) return a.G2.updateSetting(void 0);
    {
        let t = a.G2.updateSetting({
            text: g.length > 0 ? g : "",
            expiresAtMs:
                null != i && i !== o.yt.DONT_CLEAR
                    ? String(
                          l()()
                              .add((0, s.A)(i), "ms")
                              .toDate()
                              .getTime(),
                      )
                    : "0",
            emojiId: null != n && null != n.id ? n.id : "0",
            emojiName: null != n ? n.name : "",
            createdAtMs: String(c ?? l()().toDate().getTime()),
        });
        return (
            r.default.track(u.HAw.CUSTOM_STATUS_UPDATED, {
                location: null != d ? d.location : null,
                emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
                text_len: g.length,
                clear_after: null != i ? `${i}` : null,
                prompt_type: m?.value,
                location_stack: f,
            }),
            t
        );
    }
}
