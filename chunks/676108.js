r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(318766),
    l = r(907040),
    u = r(28546),
    c = r(872635),
    d = r(185923),
    f = r(692466);
function _(e) {
    var n;
    let { editorRef: r, options: _, channel: h } = e,
        p = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor(),
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
    return null == p
        ? null
        : (0, i.jsxs)('div', {
              id: 'slate-toolbar',
              className: f.staticToolbar,
              children: [
                  (0, i.jsx)('div', {
                      className: f.staticButtons,
                      children: (0, i.jsx)(c.I, {
                          editorRef: r,
                          options: _,
                          iconClassName: f.staticIcon,
                          dividerClassName: f.staticDivider
                      })
                  }),
                  (0, i.jsx)(s.Popout, {
                      renderPopout: g,
                      position: 'bottom',
                      animation: s.Popout.Animation.NONE,
                      align: 'left',
                      children: (e, n) => {
                          let { isShown: r } = n;
                          return (0, i.jsx)(o.Z, {
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
