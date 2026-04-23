"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(265872),
    a = n(375499),
    o = n(937773),
    l = n(151271),
    u = n(135261),
    c = n(307731),
    d = n(128934);
function _(e) {
    let { editorRef: t, type: n, channel: _ } = e,
        f = t.current?.getSlateEditor(),
        p = i.useRef(null),
        h = i.useCallback(
            (e) => {
                let { emoji: n, willClose: r } = e,
                    i = t.current;
                null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, l.v8)();
            },
            [t],
        );
    return null == f
        ? null
        : (0, r.jsxs)("div", {
              id: "slate-toolbar",
              className: d.aL,
              children: [
                  (0, r.jsx)("div", {
                      className: d.Wy,
                      children: (0, r.jsx)(u.P, {
                          editorRef: t,
                          options: n.markdown,
                          iconClassName: d.C7,
                          dividerClassName: d.us,
                      }),
                  }),
                  (0, r.jsx)(s.Y, {
                      targetElementRef: p,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, r.jsx)(o.A, {
                              persistSearch: !0,
                              channel: _,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: n, willClose: r } = e;
                                  h({ emoji: n, willClose: r }), r && t();
                              },
                              pickerIntention: n.expressionPicker?.emojiIntention ?? c.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: s.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, r.jsx)(a.A, { ...e, ref: p, active: n, className: d.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
