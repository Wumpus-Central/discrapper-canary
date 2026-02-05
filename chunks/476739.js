"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(375499),
    o = n(937773),
    l = n(151271),
    u = n(135261),
    c = n(307731),
    d = n(574377);
function _(e) {
    let { editorRef: t, options: n, channel: _ } = e,
        f = t.current?.getSlateEditor(),
        p = i.useRef(null),
        h = i.useCallback(
            (e) => {
                let { emoji: n, willClose: r } = e,
                    i = t.current;
                null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, l.v8)();
            },
            [t],
        ),
        m = (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.A, {
                persistSearch: !0,
                channel: _,
                closePopout: t,
                onSelectEmoji: (e) => {
                    let { emoji: n, willClose: r } = e;
                    h({ emoji: n, willClose: r }), r && t();
                },
                pickerIntention: c.b_.COMMUNITY_CONTENT,
            });
        };
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
                          options: n,
                          iconClassName: d.C7,
                          dividerClassName: d.us,
                      }),
                  }),
                  (0, r.jsx)(a.YNO, {
                      targetElementRef: p,
                      renderPopout: m,
                      position: "bottom",
                      animation: a.YNO.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, r.jsx)(s.A, { ...e, ref: p, active: n, className: d.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
