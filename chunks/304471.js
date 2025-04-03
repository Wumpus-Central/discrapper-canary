n.d(t, { Z: () => c }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(619915),
    o = n(449932),
    a = n(561788),
    s = n(642317);
function c(e) {
    let { channel: t, onAction: n } = e,
        c = (0, l.ZP)(t),
        u = Array.from((0, l.uF)(c).values());
    return 0 === u.length
        ? null
        : (0, r.jsxs)(i.Ttm, {
              className: s.container,
              children: [
                  (0, r.jsx)('div', {
                      className: s.popoutHeaderContainer,
                      children: (0, r.jsx)(a.Z, { channel: t })
                  }),
                  (0, r.jsx)('div', { className: s.headerDivider }),
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
