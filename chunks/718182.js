n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(525654),
    a = n.n(l),
    o = n(442837),
    s = n(893776),
    c = n(493773),
    d = n(129293),
    u = n(388905),
    h = n(108427),
    _ = n(981631),
    g = n(388032),
    p = n(232186);
function m(e) {
    return n.g.location.assign(e);
}
function f(e) {
    let { location: t, transitionTo: l = m } = e,
        [o, f] = r.useState('submitting');
    function x() {
        return 'Android' === a().os.family || 'iOS' === a().os.family
            ? null
            : (0, i.jsx)(u.zx, {
                  onClick: () => l(_.Z5c.LOGIN),
                  children: g.intl.string(g.t.dKhVQE)
              });
    }
    return ((0, c.ZP)(() => {
        (0, h.e)('authorize_ip');
        let e = (0, d.Z)(t);
        if (null == e) {
            f('failed');
            return;
        }
        (async () => {
            try {
                await s.Z.authorizeIPAddress(e), f('succeeded');
            } catch (e) {
                f('failed');
            }
        })();
    }),
    'failed' === o)
        ? (0, i.jsxs)(u.ZP, {
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      src: n(262467),
                      className: p.marginBottom20
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: p.marginBottom8,
                      children: g.intl.string(g.t['f/54a2'])
                  }),
                  (0, i.jsx)(u.DK, {
                      className: p.marginBottom40,
                      children: g.intl.string(g.t.i3ehMj)
                  }),
                  x()
              ]
          })
        : 'succeeded' === o
          ? (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(640356),
                        className: p.marginBottom20
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: p.marginBottom8,
                        children: g.intl.string(g.t.iG0SlJ)
                    }),
                    (0, i.jsx)(u.DK, {
                        className: p.marginBottom40,
                        children: g.intl.string(g.t['Elv+qq'])
                    }),
                    x()
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [(0, i.jsx)(u.Hh, {}), (0, i.jsx)(u.Dx, { children: g.intl.string(g.t['9exy+f']) })]
            });
}
o.ZP.initialize();
