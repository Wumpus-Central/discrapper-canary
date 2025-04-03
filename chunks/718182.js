n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(525654),
    a = n.n(o),
    l = n(442837),
    s = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    p = n(108427),
    g = n(981631),
    h = n(388032),
    f = n(20493);
function m(e) {
    return n.g.location.assign(e);
}
function _(e) {
    let { location: t, transitionTo: o = m } = e,
        [l, _] = i.useState('submitting');
    function b() {
        return 'Android' === a().os.family || 'iOS' === a().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => o(g.Z5c.LOGIN),
                  children: h.NW.string(h.t.dKhVQE)
              });
    }
    return ((0, c.ZP)(() => {
        (0, p.e)('authorize_ip');
        let e = (0, u.Z)(t);
        if (null == e) return void _('failed');
        (async () => {
            try {
                await s.Z.authorizeIPAddress(e), _('succeeded');
            } catch (e) {
                _('failed');
            }
        })();
    }),
    'failed' === l)
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      src: n(262467),
                      className: f.marginBottom20
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: f.marginBottom8,
                      children: h.NW.string(h.t['f/54a2'])
                  }),
                  (0, r.jsx)(d.DK, {
                      className: f.marginBottom40,
                      children: h.NW.string(h.t.i3ehMj)
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
                        className: f.marginBottom20
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: f.marginBottom8,
                        children: h.NW.string(h.t.iG0SlJ)
                    }),
                    (0, r.jsx)(d.DK, {
                        className: f.marginBottom40,
                        children: h.NW.string(h.t['Elv+qq'])
                    }),
                    b()
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: h.NW.string(h.t['9exy+f']) })]
            });
}
l.ZP.initialize();
