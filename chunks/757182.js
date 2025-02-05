n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var i = n(655922),
    r = n(420660),
    a = n(915863),
    o = n(388032);
function s(e) {
    let { activity: t, onAction: n, ButtonComponent: s = a.Z, ...d } = e;
    return (0, r.Z)(t)
        ? (0, l.jsx)(
              s,
              {
                  onClick: () => {
                      null == n || n();
                      let e = (0, i.Z)(t);
                      return window.open(null != e ? e : void 0);
                  },
                  fullWidth: !0,
                  ...d,
                  children: o.intl.string(o.t['I6JG4+'])
              },
              'play-activity'
          )
        : null;
}
