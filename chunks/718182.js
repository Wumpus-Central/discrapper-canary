n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(525654),
    s = n.n(l),
    o = n(442837),
    a = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(703656),
    g = n(108427),
    p = n(981631),
    m = n(388032),
    f = n(20493);
function _(e) {
    let { location: t, transitionTo: l = h.uL } = e,
        [o, _] = i.useState('submitting');
    function x() {
        return 'Android' === s().os.family || 'iOS' === s().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => l(p.Z5c.LOGIN, { source: 'authorizeIPAdress' }),
                  children: m.intl.string(m.t.dKhVQE)
              });
    }
    return ((0, c.ZP)(() => {
        (0, g.e)('authorize_ip');
        let e = (0, u.Z)(t);
        if (null == e) return void _('failed');
        (async () => {
            try {
                await a.Z.authorizeIPAddress(e), _('succeeded');
            } catch (e) {
                _('failed');
            }
        })();
    }),
    'failed' === o)
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      src: n(262467),
                      className: f.marginBottom20
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: f.marginBottom8,
                      children: m.intl.string(m.t['f/54a2'])
                  }),
                  (0, r.jsx)(d.DK, {
                      className: f.marginBottom40,
                      children: m.intl.string(m.t.i3ehMj)
                  }),
                  x()
              ]
          })
        : 'succeeded' === o
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: n(640356),
                        className: f.marginBottom20
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: f.marginBottom8,
                        children: m.intl.string(m.t.iG0SlJ)
                    }),
                    (0, r.jsx)(d.DK, {
                        className: f.marginBottom40,
                        children: m.intl.string(m.t['Elv+qq'])
                    }),
                    x()
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: m.intl.string(m.t['9exy+f']) })]
            });
}
o.ZP.initialize();
