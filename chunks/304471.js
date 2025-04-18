n.d(t, { Z: () => c }), n(388685);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(619915),
    o = n(449932),
    s = n(561788),
    a = n(952031);
function c(e) {
    let { channel: t, onAction: n } = e,
        c = (0, l.ZP)(t),
        u = Array.from((0, l.uF)(c).values());
    return 0 === u.length
        ? null
        : (0, r.jsxs)(i.Ttm, {
              className: a.container,
              children: [
                  (0, r.jsx)('div', {
                      className: a.popoutHeaderContainer,
                      children: (0, r.jsx)(s.Z, { channel: t })
                  }),
                  (0, r.jsx)('div', { className: a.headerDivider }),
                  u.map((e, i) => {
                      var l;
                      return (0, r.jsx)(
                          o.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (l = e.presenceActivity) ? l : void 0,
                              channel: t,
                              onAction: n
                          },
                          i
                      );
                  })
              ]
          });
}
