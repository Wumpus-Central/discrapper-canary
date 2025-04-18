n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(525654),
    l = n.n(s),
    o = n(442837),
    a = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(703656),
    p = n(108427),
    g = n(981631),
    f = n(388032),
    m = n(971005);
function _(e) {
    let { location: t, transitionTo: s = h.uL } = e,
        [o, _] = i.useState('submitting');
    function N() {
        return 'Android' === l().os.family || 'iOS' === l().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => s(g.Z5c.LOGIN, { source: 'authorizeIPAdress' }),
                  children: f.NW.string(f.t.dKhVQE)
              });
    }
    return ((0, c.ZP)(() => {
        (0, p.e)('authorize_ip');
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
                      className: m.marginBottom20
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: m.marginBottom8,
                      children: f.NW.string(f.t['f/54a2'])
                  }),
                  (0, r.jsx)(d.DK, {
                      className: m.marginBottom40,
                      children: f.NW.string(f.t.i3ehMj)
                  }),
                  N()
              ]
          })
        : 'succeeded' === o
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: n(640356),
                        className: m.marginBottom20
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: m.marginBottom8,
                        children: f.NW.string(f.t.iG0SlJ)
                    }),
                    (0, r.jsx)(d.DK, {
                        className: m.marginBottom40,
                        children: f.NW.string(f.t['Elv+qq'])
                    }),
                    N()
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: f.NW.string(f.t['9exy+f']) })]
            });
}
o.ZP.initialize();
