t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(200651);
t(192379);
var i = t(655922),
    r = t(420660),
    o = t(915863),
    a = t(388032);
function u(e) {
    let { activity: n, onAction: t, ButtonComponent: u = o.Z, ...s } = e;
    return (0, r.Z)(n)
        ? (0, l.jsx)(
              u,
              {
                  onClick: () => {
                      null == t || t();
                      let e = (0, i.Z)(n);
                      return window.open(null != e ? e : void 0);
                  },
                  fullWidth: !0,
                  ...s,
                  children: a.intl.string(a.t['I6JG4+'])
              },
              'play-activity'
          )
        : null;
}
