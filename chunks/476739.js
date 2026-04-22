"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(265872),
    r = n(375499),
    a = n(937773),
    o = n(151271),
    c = n(135261),
    u = n(307731),
    d = n(128934);
function h(e) {
    let { editorRef: t, type: n, channel: h } = e,
        m = t.current?.getSlateEditor(),
        p = l.useRef(null),
        f = l.useCallback(
            (e) => {
                let { emoji: n, willClose: i } = e,
                    l = t.current;
                null != n && null != l && l.insertEmoji({ emoji: n, willClose: i }), i && (0, o.v8)();
            },
            [t],
        );
    return null == m
        ? null
        : (0, i.jsxs)("div", {
              id: "slate-toolbar",
              className: d.aL,
              children: [
                  (0, i.jsx)("div", {
                      className: d.Wy,
                      children: (0, i.jsx)(c.P, {
                          editorRef: t,
                          options: n.markdown,
                          iconClassName: d.C7,
                          dividerClassName: d.us,
                      }),
                  }),
                  (0, i.jsx)(s.Y, {
                      targetElementRef: p,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(a.A, {
                              persistSearch: !0,
                              channel: h,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: n, willClose: i } = e;
                                  f({ emoji: n, willClose: i }), i && t();
                              },
                              pickerIntention: n.expressionPicker?.emojiIntention ?? u.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: s.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(r.A, { ...e, ref: p, active: n, className: d.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
