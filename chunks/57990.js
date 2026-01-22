n.d(e, {
    A: () => c,
}),
    n(733351);
var l = n(989349),
    a = n.n(l),
    r = n(253932),
    i = n(954571),
    o = n(815484),
    s = n(403918),
    u = n(652215);

function c(t) {
    let {
            text: e,
            emojiInfo: n,
            clearAfter: l,
            analyticsContext: c,
            createdAtMs: d,
            prompt: m,
            analyticsLocations: f,
        } = t,
        g = e.trim();
    if (!(g.length > 0) && null == n) return r.G2.updateSetting(void 0);
    {
        let t = r.G2.updateSetting({
            text: g.length > 0 ? g : "",
            expiresAtMs:
                null != l && l !== s.yt.DONT_CLEAR
                    ? String(
                          a()()
                              .add((0, o.A)(l), "ms")
                              .toDate()
                              .getTime(),
                      )
                    : "0",
            emojiId: null != n && null != n.id ? n.id : "0",
            emojiName: null != n ? n.name : "",
            createdAtMs: String(null != d ? d : a()().toDate().getTime()),
        });
        return (
            i.default.track(u.HAw.CUSTOM_STATUS_UPDATED, {
                location: null != c ? c.location : null,
                emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
                text_len: g.length,
                clear_after: null != l ? "".concat(l) : null,
                prompt_type: null == m ? void 0 : m.value,
                location_stack: f,
            }),
            t
        );
    }
}
