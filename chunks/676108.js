r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(318766),
    l = r(907040),
    u = r(28546),
    c = r(872635),
    d = r(185923),
    f = r(692466);
function p(e) {
    var n;
    let { editorRef: r, options: p, channel: h } = e,
        _ = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor(),
        m = a.useCallback(
            (e, n) => {
                let i = r.current;
                null != e && null != i && i.insertEmoji(e, n, !1), n && (0, u._Q)();
            },
            [r]
        ),
        g = (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(l.Z, {
                persistSearch: !0,
                channel: h,
                closePopout: n,
                onSelectEmoji: (e, r) => {
                    m(e, r), r && n();
                },
                pickerIntention: d.Hz.COMMUNITY_CONTENT
            });
        };
    return null == _
        ? null
        : (0, i.jsxs)('div', {
              id: 'slate-toolbar',
              className: f.staticToolbar,
              children: [
                  (0, i.jsx)('div', {
                      className: f.staticButtons,
                      children: (0, i.jsx)(c.I, {
                          editorRef: r,
                          options: p,
                          iconClassName: f.staticIcon,
                          dividerClassName: f.staticDivider
                      })
                  }),
                  (0, i.jsx)(o.Popout, {
                      renderPopout: g,
                      position: 'bottom',
                      animation: o.Popout.Animation.NONE,
                      align: 'left',
                      children: (e, n) => {
                          let { isShown: r } = n;
                          return (0, i.jsx)(s.Z, {
                              ...e,
                              active: r,
                              className: f.emojiButton,
                              tabIndex: 0
                          });
                      }
                  })
              ]
          });
}
