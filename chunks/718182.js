n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(525654),
    a = n.n(o),
    l = n(442837),
    s = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(108427),
    p = n(981631),
    _ = n(388032),
    g = n(455812);
function f(e) {
    return n.g.location.assign(e);
}
function m(e) {
    let { location: t, transitionTo: o = f } = e,
        [l, m] = i.useState('submitting');
    function b() {
        return 'Android' === a().os.family || 'iOS' === a().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => o(p.Z5c.LOGIN),
                  children: _.NW.string(_.t.dKhVQE)
              });
    }
    return ((0, c.ZP)(() => {
        (0, h.e)('authorize_ip');
        let e = (0, u.Z)(t);
        if (null == e) {
            m('failed');
            return;
        }
        (async () => {
            try {
                await s.Z.authorizeIPAddress(e), m('succeeded');
            } catch (e) {
                m('failed');
            }
        })();
    }),
    'failed' === l)
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      src: n(262467),
                      className: g.marginBottom20
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: g.marginBottom8,
                      children: _.NW.string(_.t['f/54a2'])
                  }),
                  (0, r.jsx)(d.DK, {
                      className: g.marginBottom40,
                      children: _.NW.string(_.t.i3ehMj)
                  }),
                  b()
              ]
          })
        : 'succeeded' === l
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: n(640356),
                        className: g.marginBottom20
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: g.marginBottom8,
                        children: _.NW.string(_.t.iG0SlJ)
                    }),
                    (0, r.jsx)(d.DK, {
                        className: g.marginBottom40,
                        children: _.NW.string(_.t['Elv+qq'])
                    }),
                    b()
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: _.NW.string(_.t['9exy+f']) })]
            });
}
l.ZP.initialize();
