n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(525654),
    l = n.n(a),
    o = n(442837),
    s = n(893776),
    c = n(493773),
    d = n(129293),
    u = n(388905),
    h = n(108427),
    _ = n(981631),
    g = n(388032),
    m = n(232186);
function p(e) {
    return n.g.location.assign(e);
}
function f(e) {
    let { location: t, transitionTo: a = p } = e,
        [o, f] = r.useState('submitting');
    function E() {
        return 'Android' === l().os.family || 'iOS' === l().os.family
            ? null
            : (0, i.jsx)(u.zx, {
                  onClick: () => a(_.Z5c.LOGIN),
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
                      className: m.marginBottom20
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: m.marginBottom8,
                      children: g.intl.string(g.t['f/54a2'])
                  }),
                  (0, i.jsx)(u.DK, {
                      className: m.marginBottom40,
                      children: g.intl.string(g.t.i3ehMj)
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
                        className: m.marginBottom20
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: m.marginBottom8,
                        children: g.intl.string(g.t.iG0SlJ)
                    }),
                    (0, i.jsx)(u.DK, {
                        className: m.marginBottom40,
                        children: g.intl.string(g.t['Elv+qq'])
                    }),
                    E()
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [(0, i.jsx)(u.Hh, {}), (0, i.jsx)(u.Dx, { children: g.intl.string(g.t['9exy+f']) })]
            });
}
o.ZP.initialize();
