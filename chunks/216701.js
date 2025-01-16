r.d(n, {
    R: function () {
        return l;
    },
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(596454),
    s = r(307707),
    o = r(928797);
let l = {
    SMALL: o.small,
    MEDIUM: o.medium,
    LARGE: o.large
};
function u(e) {
    let { emojiId: n, emojiName: r, defaultComponent: o, size: u = l.MEDIUM } = e,
        { customEmoji: c, unicodeEmoji: d } = (0, s.Z)(n, r);
    return null == c && null == d
        ? (0, i.jsx)(i.Fragment, { children: o })
        : (0, i.jsx)(a.Z, {
              emojiName: null != c ? (null == c ? void 0 : c.name) : r,
              animated: null != c && c.animated,
              emojiId: null == c ? void 0 : c.id,
              autoplay: !0,
              className: u
          });
}
