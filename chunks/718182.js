n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(525654),
    l = n.n(s),
    o = n(442837),
    a = n(893776),
    c = n(493773),
    d = n(129293),
    u = n(388905),
    h = n(108427),
    g = n(981631),
    f = n(388032),
    m = n(232186);
function p(e) {
    return n.g.location.assign(e);
}
function x(e) {
    let { location: t, transitionTo: s = p } = e,
        [o, x] = r.useState('submitting');
    function _() {
        return 'Android' === l().os.family || 'iOS' === l().os.family
            ? null
            : (0, i.jsx)(u.zx, {
                  onClick: () => s(g.Z5c.LOGIN),
                  children: f.intl.string(f.t.dKhVQE)
              });
    }
    return ((0, c.Z)(() => {
        (0, h.e)('authorize_ip');
        let e = (0, d.Z)(t);
        if (null == e) {
            x('failed');
            return;
        }
        (async () => {
            try {
                await a.Z.authorizeIPAddress(e), x('succeeded');
            } catch (e) {
                x('failed');
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
                      children: f.intl.string(f.t['f/54a2'])
                  }),
                  (0, i.jsx)(u.DK, {
                      className: m.marginBottom40,
                      children: f.intl.string(f.t.i3ehMj)
                  }),
                  _()
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
                        children: f.intl.string(f.t.iG0SlJ)
                    }),
                    (0, i.jsx)(u.DK, {
                        className: m.marginBottom40,
                        children: f.intl.string(f.t['Elv+qq'])
                    }),
                    _()
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [(0, i.jsx)(u.Hh, {}), (0, i.jsx)(u.Dx, { children: f.intl.string(f.t['9exy+f']) })]
            });
}
o.ZP.initialize();
