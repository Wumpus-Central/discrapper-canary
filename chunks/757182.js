n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(655922),
    l = n(420660),
    o = n(915863),
    a = n(388032);
function u(e) {
    let { activity: t, onAction: n, ButtonComponent: u = o.Z, ...s } = e;
    return (0, l.Z)(t)
        ? (0, r.jsx)(
              u,
              {
                  onClick: () => {
                      null == n || n();
                      let e = (0, i.Z)(t);
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
