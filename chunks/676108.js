n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(318766),
    o = n(907040),
    l = n(28546),
    u = n(872635),
    c = n(185923),
    d = n(840601);
function f(e) {
    var t;
    let { editorRef: n, options: f, channel: _ } = e,
        p = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(),
        h = r.useCallback(
            (e, t) => {
                let i = n.current;
                null != e && null != i && i.insertEmoji(e, t, !1), t && (0, l._Q)();
            },
            [n]
        ),
        m = (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.Z, {
                persistSearch: !0,
                channel: _,
                closePopout: t,
                onSelectEmoji: (e, n) => {
                    h(e, n), n && t();
                },
                pickerIntention: c.Hz.COMMUNITY_CONTENT
            });
        };
    return null == p
        ? null
        : (0, i.jsxs)('div', {
              id: 'slate-toolbar',
              className: d.staticToolbar,
              children: [
                  (0, i.jsx)('div', {
                      className: d.staticButtons,
                      children: (0, i.jsx)(u.I, {
                          editorRef: n,
                          options: f,
                          iconClassName: d.staticIcon,
                          dividerClassName: d.staticDivider
                      })
                  }),
                  (0, i.jsx)(a.yRy, {
                      renderPopout: m,
                      position: 'bottom',
                      animation: a.yRy.Animation.NONE,
                      align: 'left',
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(s.Z, {
                              ...e,
                              active: n,
                              className: d.emojiButton,
                              tabIndex: 0
                          });
                      }
                  })
              ]
          });
}
