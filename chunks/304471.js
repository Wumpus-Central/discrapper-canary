n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(619915),
    a = n(449932),
    o = n(561788),
    s = n(684393);
function c(e) {
    let { channel: t, onAction: n } = e,
        c = (0, r.ZP)(t),
        u = Array.from((0, r.uF)(c).values());
    return 0 === u.length
        ? null
        : (0, i.jsxs)(l.Scroller, {
              className: s.container,
              children: [
                  (0, i.jsx)('div', {
                      className: s.popoutHeaderContainer,
                      children: (0, i.jsx)(o.Z, { channel: t })
                  }),
                  (0, i.jsx)('div', { className: s.headerDivider }),
                  u.map((e, l) => {
                      var r;
                      return (0, i.jsx)(
                          a.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null !== (r = e.presenceActivity) && void 0 !== r ? r : void 0,
                              channel: t,
                              onAction: n
                          },
                          l
                      );
                  })
              ]
          });
}
