n.d(t, { r: () => m });
var i = n(574381),
    s = n(311907),
    l = n(314116),
    a = n(827343),
    r = n(77729),
    o = n(419954),
    d = n(430452),
    c = n(780964),
    u = n(985018);
let m = (0, o.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
    useTitle: () => u.intl.string(u.t.lt8rRx),
    useSubtitle: () => u.intl.string(u.t.ie1mgY),
    useValue: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.getUseSystemScreensharePicker());
    },
    setValue: function (e) {
        (0, i.cX)() && e
            ? (0, l.A)({
                  title: u.intl.string(u.t["9jf31O"]),
                  subtitle: u.intl.string(u.t.uBd6JW),
                  variant: "primary",
                  onConfirm: () => {
                      a.A.setUseSystemScreensharePicker(e), r.A.app.relaunch();
                  },
                  confirmText: u.intl.string(u.t.BddRzS),
              })
            : a.A.setUseSystemScreensharePicker(e);
    },
    usePredicate: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.supportsSystemScreensharePicker() && (0, i.cX)());
    },
});
