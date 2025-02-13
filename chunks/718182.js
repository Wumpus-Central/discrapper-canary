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
    m = n(388032),
    g = n(483938);
function p(e) {
    return n.g.location.assign(e);
}
function f(e) {
    let { location: t, transitionTo: l = p } = e,
        [o, f] = r.useState('submitting');
    function E() {
        return 'Android' === a().os.family || 'iOS' === a().os.family
            ? null
            : (0, i.jsx)(u.zx, {
                  onClick: () => l(_.Z5c.LOGIN),
                  children: m.intl.string(m.t.dKhVQE)
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
                      className: g.marginBottom20
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: g.marginBottom8,
                      children: m.intl.string(m.t['f/54a2'])
                  }),
                  (0, i.jsx)(u.DK, {
                      className: g.marginBottom40,
                      children: m.intl.string(m.t.i3ehMj)
                  }),
                  E()
              ]
          })
        : 'succeeded' === o
          ? (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(640356),
                        className: g.marginBottom20
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: g.marginBottom8,
                        children: m.intl.string(m.t.iG0SlJ)
                    }),
                    (0, i.jsx)(u.DK, {
                        className: g.marginBottom40,
                        children: m.intl.string(m.t['Elv+qq'])
                    }),
                    E()
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [(0, i.jsx)(u.Hh, {}), (0, i.jsx)(u.Dx, { children: m.intl.string(m.t['9exy+f']) })]
            });
}
o.ZP.initialize();
